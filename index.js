// Polyfill Buffer globally if not present
if (typeof Buffer === 'undefined') {
  window.Buffer = {
    from: (data, encoding) => {
      if (data instanceof Uint8Array) return data;
      if (typeof data === 'string') {
        if (encoding === 'hex') {
          return new Uint8Array(data.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
        }
        return new Uint8Array([...data].map(char => char.charCodeAt(0)));
      }
      if (Array.isArray(data)) return new Uint8Array(data);
      throw new Error('Buffer.from: Unsupported data type');
    },
    alloc: (size) => new Uint8Array(size),
    isBuffer: (obj) => obj instanceof Uint8Array,
    concat: (list) => {
      const totalLength = list.reduce((sum, buf) => sum + buf.length, 0);
      const result = new Uint8Array(totalLength);
      let offset = 0;
      for (const buf of list) {
        result.set(buf, offset);
        offset += buf.length;
      }
      return result;
    }
  };
  console.log('Buffer polyfill added:', typeof Buffer.from);
}

// Game state variables
let walletPublicKey = null;
let walletBalance = 0;
let isSpinning = false;
let spinsCount = 0;
let lastWin = null;
let transactions = [];

const SYMBOLS = [
  { id: '10', name: '10', color: '#FF6B6B', image: '/solana-slots/images/10.png' },
  { id: 'J', name: 'J', color: '#4ECDC4', image: '/solana-slots/images/J.png' },
  { id: 'Q', name: 'Q', color: '#FFD166', image: '/solana-slots/images/Q.png' },
  { id: 'K', name: 'K', color: '#F86624', image: '/solana-slots/images/K.png' },
  { id: 'A', name: 'A', color: '#7209B7', image: '/solana-slots/images/A.png' },
  { id: 'Solana', name: 'Solana', color: '#9945FF', image: '/solana-slots/images/solana-sol-logo.png' },
  { id: 'Pepe', name: 'Pepe', color: '#54D62C', image: '/solana-slots/images/pepe-pepe-logo.png' },
  { id: 'Trump', name: 'Trump', color: '#FFC107', image: '/solana-slots/images/27872.png' },
  { id: 'Bonk', name: 'Bonk', color: '#FF9800', image: '/solana-slots/images/bonk1-bonk-logo.png' },
  { id: 'PopCat', name: 'PopCat', color: '#F72585', image: '/solana-slots/images/popcat-sol-popcat-logo.png' },
  { id: 'Dogwifhat', name: 'Dogwifhat', color: '#3A86FF', image: '/solana-slots/images/28ae4de5c2e88c6ce633e764eb731a868d3340caba420fba6b6106a5e24a377e.png' }
];

const PAYOUTS = {
  3: 0.01,
  4: 0.02,
  5: 0.1
};

const GAME_WALLET_SECRET_KEY = [
  63, 106, 245, 193, 90, 184, 55, 167, 226, 100, 208, 241, 150, 44, 101, 188, 
  41, 111, 33, 35, 100, 237, 47, 232, 199, 220, 100, 42, 128, 190, 103, 210, 
  7, 8, 97, 78, 31, 211, 172, 51, 200, 64, 178, 40, 120, 53, 93, 210, 
  228, 91, 59, 236, 211, 31, 241, 56, 124, 112, 149, 122, 3, 116, 210, 16
];

const connectWalletButton = document.getElementById('connect-wallet');
const disconnectWalletButton = document.getElementById('disconnect-wallet');
const walletBalanceElement = document.getElementById('wallet-balance');
const walletAddressElement = document.getElementById('wallet-address');
const connectPromptElement = document.getElementById('connect-prompt');
const gameContainerElement = document.getElementById('game-container');
const spinButton = document.getElementById('spin-button');
const messageElement = document.getElementById('message');
const gridContainer = document.getElementById('grid');
const payoutToggle = document.getElementById('payout-toggle');
const payoutContent = document.getElementById('payout-content');
const transactionList = document.getElementById('transaction-list');
const phantomNotInstalledElement = document.getElementById('phantom-not-installed');

// Load Solana Web3 library
function loadSolanaWeb3() {
  return new Promise((resolve, reject) => {
    if (window.solanaWeb3) {
      resolve(window.solanaWeb3);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@solana/web3.js@1.78.0/lib/index.iife.min.js';
    script.async = true;
    script.onload = () => {
      console.log("Solana Web3 library loaded, version: 1.78.0");
      resolve(window.solanaWeb3);
    };
    script.onerror = () => {
      console.error("Failed to load Solana Web3 library");
      reject(new Error("Failed to load Solana Web3 library"));
    };
    document.head.appendChild(script);
  });
}

function getRandomSymbol() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

function initializeGrid() {
  const cells = gridContainer.querySelectorAll('.grid-cell');
  cells.forEach((cell) => {
    const symbolEl = cell.querySelector('.symbol');
    symbolEl.innerHTML = '';
    const symbol = getRandomSymbol();
    const img = document.createElement('img');
    img.src = symbol.image;
    img.alt = symbol.name;
    img.style.width = '80%';
    img.style.height = '80%';
    img.style.objectFit = 'contain';
    symbolEl.appendChild(img);
    symbolEl.style.backgroundColor = symbol.color;
    symbolEl.style.borderRadius = '8px';
    symbolEl.style.display = 'flex';
    symbolEl.style.justifyContent = 'center';
    symbolEl.style.alignItems = 'center';
    cell.dataset.symbolId = symbol.id;
  });
}

async function connectWallet() {
  console.log("Connect wallet function called");
  
  // Reset UI
  connectWalletButton.disabled = true;
  connectWalletButton.textContent = 'Connecting...';
  messageElement.textContent = 'Connecting to wallet...';
  messageElement.className = 'message';
  
  // Verify Phantom is installed
  if (!window.solana || !window.solana.isPhantom) {
    console.error("Phantom wallet not found!");
    connectWalletButton.disabled = false;
    connectWalletButton.textContent = 'Connect Wallet';
    messageElement.textContent = 'Phantom wallet not detected. Please install Phantom first!';
    messageElement.className = 'message error-message';
    return;
  }
  
  // Set a shorter timeout (5 seconds) for better user experience
  let connectionTimeoutId = setTimeout(() => {
    connectWalletButton.disabled = false;
    connectWalletButton.textContent = 'Connect Wallet';
    messageElement.textContent = 'Connection timed out. Please try again or refresh the page.';
    messageElement.className = 'message error-message';
    console.error("Wallet connection timed out");
  }, 5000);
  
  try {
    console.log("Requesting wallet connection...");
    
    // Use the direct approach with proper error handling
    const resp = await window.solana.connect();
    
    // Clear the timeout since connection succeeded
    clearTimeout(connectionTimeoutId);
    
    console.log("Connected successfully!", resp);
    walletPublicKey = resp.publicKey.toString();
    
    // Update UI for successful connection
    await loadSolanaWeb3();
    const connection = new solanaWeb3.Connection('https://spring-alien-valley.solana-mainnet.quiknode.pro/99c83bb00b17371caa33b043d5cba7eada76c9e9/', 'confirmed');
    const balance = await connection.getBalance(resp.publicKey);
    walletBalance = balance / solanaWeb3.LAMPORTS_PER_SOL;
    
    connectWalletButton.style.display = 'none';
    walletBalanceElement.textContent = `${walletBalance.toFixed(4)} SOL`;
    walletBalanceElement.style.display = 'block';
    walletAddressElement.textContent = `${walletPublicKey.slice(0, 4)}...${walletPublicKey.slice(-4)}`;
    walletAddressElement.style.display = 'block';
    disconnectWalletButton.style.display = 'block';
    connectPromptElement.style.display = 'none';
    gameContainerElement.style.display = 'block';
    messageElement.textContent = 'Press SPIN to play!';
    initializeGrid();
    await checkGameWalletBalance();
    document.querySelector('.network-badge').textContent = 'Mainnet';
    console.log(`Connected to Phantom wallet: ${walletPublicKey}`);
  } catch (error) {
    // Clear timeout since we got an error response
    clearTimeout(connectionTimeoutId);
    
    console.error('Error connecting to Phantom wallet:', error);
    connectWalletButton.disabled = false;
    connectWalletButton.textContent = 'Connect Wallet';
    messageElement.textContent = `Connection failed: ${error.message}. Please try again.`;
    messageElement.className = 'message error-message';
  }
}

async function checkGameWalletBalance() {
  try {
    if (!GAME_WALLET_SECRET_KEY || GAME_WALLET_SECRET_KEY.length === 0) {
      console.log('No game wallet configured. Running in simulation mode.');
      return;
    }
    await loadSolanaWeb3();
    const gameWallet = solanaWeb3.Keypair.fromSecretKey(new Uint8Array(GAME_WALLET_SECRET_KEY));
    const connection = new solanaWeb3.Connection('https://spring-alien-valley.solana-mainnet.quiknode.pro/99c83bb00b17371caa33b043d5cba7eada76c9e9/', 'confirmed');
    const balance = await connection.getBalance(gameWallet.publicKey);
    const solBalance = balance / solanaWeb3.LAMPORTS_PER_SOL;
    console.log(`Game wallet balance: ${solBalance} SOL`);
    console.log(`Game wallet public key: ${gameWallet.publicKey.toString()}`);
    if (solBalance < 0.2) {
      console.warn('Game wallet balance is low. Please fund it with more SOL.');
      messageElement.textContent = 'Game wallet low on funds. Contact support.';
      messageElement.className = 'message error-message';
    }
  } catch (error) {
    console.error('Error checking game wallet balance:', error);
  }
}

async function disconnectWallet() {
  try {
    if (window.solana && window.solana.isPhantom) {
      await window.solana.disconnect();
    }
    walletPublicKey = null;
    walletBalance = 0;
    connectWalletButton.style.display = 'block';
    connectWalletButton.disabled = false;
    connectWalletButton.textContent = 'Connect Wallet';
    walletBalanceElement.style.display = 'none';
    walletAddressElement.style.display = 'none';
    disconnectWalletButton.style.display = 'none';
    gameContainerElement.style.display = 'none';
    connectPromptElement.style.display = 'block';
    document.querySelector('.network-badge').textContent = 'Disconnected';
    console.log('Disconnected from Phantom wallet');
  } catch (error) {
    console.error('Error disconnecting from Phantom wallet:', error);
  }
}

function spin() {
  if (isSpinning || !walletPublicKey) return;
  isSpinning = true;
  spinsCount++;
  spinButton.disabled = true;
  spinButton.textContent = 'Spinning...';
  spinButton.style.backgroundColor = '#ff0080a0';
  messageElement.textContent = 'Good luck!';
  messageElement.className = 'message';
  document.querySelectorAll('.confetti').forEach(el => el.remove());
  
  const cells = gridContainer.querySelectorAll('.grid-cell');
  const animationPromises = [];
  
  cells.forEach((cell, index) => {
    const animationPromise = new Promise((resolve) => {
      const originalSymbol = cell.querySelector('.symbol');
      originalSymbol.style.display = 'none';
      const spinContainer = document.createElement('div');
      spinContainer.className = 'spin-container';
      spinContainer.style.position = 'absolute';
      spinContainer.style.top = '0';
      spinContainer.style.left = '0';
      spinContainer.style.width = '100%';
      spinContainer.style.height = '100%';
      spinContainer.style.overflow = 'hidden';
      
      for (let i = 0; i < 5; i++) {
        const randomSymbol = getRandomSymbol();
        const tempSymbol = document.createElement('div');
        tempSymbol.className = 'temp-symbol';
        tempSymbol.style.position = 'absolute';
        tempSymbol.style.width = '80%';
        tempSymbol.style.height = '80%';
        tempSymbol.style.left = '10%';
        tempSymbol.style.top = `${i * 80}%`;
        tempSymbol.style.backgroundColor = randomSymbol.color;
        tempSymbol.style.borderRadius = '8px';
        tempSymbol.style.display = 'flex';
        tempSymbol.style.justifyContent = 'center';
        tempSymbol.style.alignItems = 'center';
        const img = document.createElement('img');
        img.src = randomSymbol.image;
        img.alt = randomSymbol.name;
        img.style.width = '80%';
        img.style.height = '80%';
        img.style.objectFit = 'contain';
        tempSymbol.appendChild(img);
        tempSymbol.style.animation = `spin 0.2s linear infinite`;
        spinContainer.appendChild(tempSymbol);
      }
      
      cell.appendChild(spinContainer);
      const row = Math.floor(index / 5);
      const col = index % 5;
      const delay = (row * 100) + (col * 50);
      
      setTimeout(() => {
        spinContainer.remove();
        const newSymbol = getRandomSymbol();
        originalSymbol.innerHTML = '';
        const img = document.createElement('img');
        img.src = newSymbol.image;
        img.alt = newSymbol.name;
        img.style.width = '80%';
        img.style.height = '80%';
        img.style.objectFit = 'contain';
        originalSymbol.appendChild(img);
        originalSymbol.style.backgroundColor = newSymbol.color;
        originalSymbol.style.display = 'flex';
        originalSymbol.style.animation = 'bounce 0.3s';
        cell.dataset.symbolId = newSymbol.id;
        resolve();
      }, 1000 + delay);
    });
    animationPromises.push(animationPromise);
  });
  
  Promise.all(animationPromises).then(() => {
    setTimeout(() => {
      checkWins();
    }, 300);
  });
  
  if (!document.getElementById('spin-animation')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'spin-animation';
    styleElement.textContent = `
      @keyframes spin {
        0% { transform: translateY(-300%); }
        100% { transform: translateY(300%); }
      }
    `;
    document.head.appendChild(styleElement);
  }
}

function checkWins() {
  const cells = gridContainer.querySelectorAll('.grid-cell');
  const cellsArray = Array.from(cells);
  const grid = [];
  for (let i = 0; i < 5; i++) {
    grid.push(cellsArray.slice(i * 5, (i + 1) * 5));
  }
  
  const allMatches = [];
  for (let row = 0; row < 5; row++) {
    const matches = findMatches(grid[row].map(cell => cell.dataset.symbolId));
    allMatches.push(...matches.map(match => ({
      symbolId: match.symbolId,
      count: match.count,
      cells: match.indices.map(col => grid[row][col])
    })));
  }
  
  let bestMatch = null;
  if (allMatches.length > 0) {
    bestMatch = allMatches.reduce((best, current) => {
      return (current.count > best.count) ? current : best;
    }, allMatches[0]);
  }
  
  isSpinning = false;
  spinButton.disabled = false;
  spinButton.textContent = 'SPIN';
  spinButton.style.backgroundColor = '#ff0080b9';
  
  if (bestMatch && bestMatch.count >= 3) {
    bestMatch.cells.forEach(cell => {
      const symbolElement = cell.querySelector('.symbol');
      symbolElement.style.animation = 'glow 1.5s infinite';
    });
    const winAmount = PAYOUTS[bestMatch.count];
    const matchedSymbol = SYMBOLS.find(s => s.id === bestMatch.symbolId);
    messageElement.textContent = `You won ${winAmount} SOL! Processing payment...`;
    messageElement.className = 'message win-message';
    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.top = `${Math.random() * 100}%`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
      confetti.style.animationDelay = `${Math.random() * 0.5}s`;
      gridContainer.appendChild(confetti);
    }
    processWinPayment(winAmount, matchedSymbol, bestMatch);
  } else {
    messageElement.textContent = 'Try again!';
    messageElement.className = 'message';
  }
}

async function processWinPayment(winAmount, matchedSymbol, bestMatch) {
  try {
    console.group('Win Payment Diagnostic');
    console.log('Starting win payment process');
    console.log('Global Buffer available:', typeof Buffer, typeof Buffer.from);

    if (!window.solana || !window.solana.isPhantom || !window.solana.publicKey) {
      throw new Error('Phantom wallet not connected');
    }

    await loadSolanaWeb3();
    console.log('Solana Web3 loaded');

    const gameWallet = solanaWeb3.Keypair.fromSecretKey(new Uint8Array(GAME_WALLET_SECRET_KEY));
    const connection = new solanaWeb3.Connection('https://spring-alien-valley.solana-mainnet.quiknode.pro/99c83bb00b17371caa33b043d5cba7eada76c9e9/', 'confirmed');
    const recipientPublicKey = new solanaWeb3.PublicKey(window.solana.publicKey);
    console.log('🔑 Sending to:', recipientPublicKey.toString());
    console.log('💰 Amount:', winAmount, 'SOL');

    const lamports = Math.floor(winAmount * solanaWeb3.LAMPORTS_PER_SOL);
    console.log('Lamports:', lamports, 'Type:', typeof lamports);

    const transaction = new solanaWeb3.Transaction();
    transaction.add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: gameWallet.publicKey,
        toPubkey: recipientPublicKey,
        lamports: Number(lamports),
      })
    );

    const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = gameWallet.publicKey;

    transaction.sign(gameWallet);
    const serializedTx = transaction.serialize();
    const signature = await connection.sendRawTransaction(serializedTx);
    await connection.confirmTransaction({ signature, blockhash, lastValidBlockHeight }, 'confirmed');

    messageElement.textContent = `You won ${winAmount} SOL! Transaction confirmed.`;
    messageElement.className = 'message win-message';
    addTransaction({
      type: 'win',
      amount: winAmount,
      count: bestMatch.count,
      symbol: matchedSymbol.name,
      signature: signature,
    });
    console.log(`✅ Payment Sent: ${winAmount} SOL | Tx: ${signature}`);
  } catch (error) {
    console.error('🚨 Win Payment Error:', error);
    messageElement.textContent = `Win payment failed: ${error.message}`;
    messageElement.className = 'message error-message';
  } finally {
    console.groupEnd();
  }
}

function findMatches(symbolIds) {
  const matches = [];
  let currentSymbol = null;
  let currentCount = 0;
  let startIndex = 0;
  
  for (let i = 0; i <= symbolIds.length; i++) {
    if (i === symbolIds.length || symbolIds[i] !== currentSymbol) {
      if (currentCount >= 3 && currentSymbol !== null) {
        const indices = [];
        for (let j = 0; j < currentCount; j++) {
          indices.push(startIndex + j);
        }
        matches.push({
          symbolId: currentSymbol,
          count: currentCount,
          indices: indices
        });
      }
      if (i < symbolIds.length) {
        currentSymbol = symbolIds[i];
        currentCount = 1;
        startIndex = i;
      }
    } else {
      currentCount++;
    }
  }
  return matches;
}

function addTransaction(transaction) {
  transactions.unshift(transaction);
  if (transactions.length > 10) {
    transactions.pop();
  }
  updateTransactionHistory();
}

function updateTransactionHistory() {
  transactionList.innerHTML = '';
  if (transactions.length === 0) {
    const item = document.createElement('div');
    item.className = 'transaction-item';
    item.textContent = 'No transactions yet. Play to win SOL!';
    transactionList.appendChild(item);
    return;
  }
  
  transactions.forEach(transaction => {
    const item = document.createElement('div');
    item.className = 'transaction-item';
    if (transaction.type === 'win') {
      item.innerHTML = `
        <span class="transaction-win">Won ${transaction.amount} SOL</span> - 
        ${transaction.count}x ${transaction.symbol}
        <div class="transaction-signature">
          Tx: ${transaction.signature.slice(0, 20)}...
          <a href="https://explorer.solana.com/tx/${transaction.signature}" target="_blank" style="color: #9945FF; margin-left: 5px;">View</a>
        </div>
      `;
    }
    transactionList.appendChild(item);
  });
}

function togglePayoutTable() {
  payoutContent.classList.toggle('open');
  payoutToggle.textContent = payoutContent.classList.contains('open') ? 'Payout Table ▲' : 'Payout Table ▼';
}

function init() {
  console.log('Initializing Crypto Slot Game');
  console.log('Buffer status at init:', typeof Buffer, typeof Buffer.from);
  if (GAME_WALLET_SECRET_KEY && GAME_WALLET_SECRET_KEY.length > 0) {
    console.log('Game wallet configured. Real SOL payouts enabled.');
    loadSolanaWeb3().then(() => {
      try {
        const gameWallet = solanaWeb3.Keypair.fromSecretKey(new Uint8Array(GAME_WALLET_SECRET_KEY));
        console.log(`Game wallet public key: ${gameWallet.publicKey.toString()}`);
      } catch (error) {
        console.error('Error initializing game wallet:', error);
      }
    });
  } else {
    console.log('No game wallet configured. Running in simulation mode.');
  }
  
  connectWalletButton.addEventListener('click', connectWallet);
  disconnectWalletButton.addEventListener('click', disconnectWallet);
  spinButton.addEventListener('click', spin);
  payoutToggle.addEventListener('click', togglePayoutTable);
  
  messageElement.textContent = 'Connect your wallet to play!';
  
  if (window.solana && window.solana.isPhantom) {
    console.log('Phantom wallet is installed.');
  } else {
    console.log('Phantom wallet is not installed.');
  }
  
  if (window.location.search.includes('debug=true')) {
    console.log('Debug mode enabled, preloading Solana Web3...');
    loadSolanaWeb3();
  }
}

document.addEventListener('DOMContentLoaded', init);