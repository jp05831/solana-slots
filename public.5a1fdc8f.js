// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"02ujV":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "06b291ed9d368ec5";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7406a0e95a1fdc8f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            if (err.message) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"j6hSo":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$8979 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$8979.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$8979.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _client = require("react-dom/client");
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
// Create a root for our app
const container = document.getElementById('root');
const root = (0, _client.createRoot)(container);
// Render our App component
root.render(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDefault.default).StrictMode, {
    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _appDefault.default), {}, void 0, false, {
        fileName: "src/index.js",
        lineNumber: 12,
        columnNumber: 5
    }, undefined)
}, void 0, false, {
    fileName: "src/index.js",
    lineNumber: 11,
    columnNumber: 3
}, undefined));

  $parcel$ReactRefreshHelpers$8979.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-dom/client":"react-dom/client","./App":"ayLph","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"ayLph":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$0b51 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$0b51.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$0b51.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _slotMachine = require("./components/SlotMachine");
var _slotMachineDefault = parcelHelpers.interopDefault(_slotMachine);
var _backgroundEffects = require("./components/BackgroundEffects");
var _backgroundEffectsDefault = parcelHelpers.interopDefault(_backgroundEffects);
var _animationsCss = require("./animations.css");
var _s = $RefreshSig$();
const App = ()=>{
    _s();
    const [wallet, setWallet] = (0, _react.useState)(null);
    const [balance, setBalance] = (0, _react.useState)(0);
    const [isConnecting, setIsConnecting] = (0, _react.useState)(false);
    // Function to simulate connecting wallet
    const connectWallet = ()=>{
        setIsConnecting(true);
        // Simulate connection delay
        setTimeout(()=>{
            // For local testing, we'll create a mock wallet
            const mockWallet = {
                publicKey: 'SomeRandomSolanaPublicKey123456789',
                signTransaction: ()=>Promise.resolve(true)
            };
            setWallet(mockWallet);
            setBalance(5.0); // Mock SOL balance
            setIsConnecting(false);
        }, 1500);
    };
    // Styling
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh'
        },
        header: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            padding: '15px 25px',
            backgroundColor: 'var(--surface)',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
        },
        title: {
            fontSize: '32px',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
        },
        walletInfo: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
        },
        balance: {
            backgroundColor: 'var(--surface-light)',
            padding: '8px 15px',
            borderRadius: '10px',
            fontWeight: 'bold',
            color: 'var(--secondary)'
        },
        connectButton: {
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        connectingButton: {
            backgroundColor: 'var(--surface-light)',
            opacity: 0.8
        },
        main: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1
        },
        footer: {
            marginTop: '40px',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '14px'
        }
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _backgroundEffectsDefault.default), {}, void 0, false, {
                fileName: "src/App.js",
                lineNumber: 104,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("header", {
                style: styles.header,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                        style: styles.title,
                        children: "Solana Slot Game"
                    }, void 0, false, {
                        fileName: "src/App.js",
                        lineNumber: 106,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        style: styles.walletInfo,
                        children: wallet ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    style: styles.balance,
                                    children: [
                                        balance.toFixed(2),
                                        " SOL"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/App.js",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    children: [
                                        wallet.publicKey.slice(0, 4),
                                        "...",
                                        wallet.publicKey.slice(-4)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/App.js",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            style: {
                                ...styles.connectButton,
                                ...isConnecting ? styles.connectingButton : {}
                            },
                            onClick: connectWallet,
                            disabled: isConnecting,
                            children: isConnecting ? 'Connecting...' : 'Connect Wallet'
                        }, void 0, false, {
                            fileName: "src/App.js",
                            lineNumber: 116,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/App.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/App.js",
                lineNumber: 105,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("main", {
                style: styles.main,
                children: wallet ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _slotMachineDefault.default), {
                    wallet: wallet
                }, void 0, false, {
                    fileName: "src/App.js",
                    lineNumber: 132,
                    columnNumber: 11
                }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    style: {
                        marginTop: '100px',
                        fontSize: '24px',
                        textAlign: 'center'
                    },
                    children: "Connect your wallet to start playing and win SOL!"
                }, void 0, false, {
                    fileName: "src/App.js",
                    lineNumber: 134,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/App.js",
                lineNumber: 130,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("footer", {
                style: styles.footer,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                    children: "All winnings will be sent directly to your Solana wallet. Play responsibly!"
                }, void 0, false, {
                    fileName: "src/App.js",
                    lineNumber: 141,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/App.js",
                lineNumber: 140,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/App.js",
        lineNumber: 103,
        columnNumber: 5
    }, undefined);
};
_s(App, "QBiliIDLsLf9hUiycuWI8WXrYaM=");
_c = App;
exports.default = App;
var _c;
$RefreshReg$(_c, "App");

  $parcel$ReactRefreshHelpers$0b51.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","./components/SlotMachine":"cC711","./components/BackgroundEffects":"65VFw","./animations.css":"d4knj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"cC711":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$b6d6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$b6d6.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$b6d6.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reel = require("./Reel");
var _reelDefault = parcelHelpers.interopDefault(_reel);
var _payoutTable = require("./PayoutTable");
var _payoutTableDefault = parcelHelpers.interopDefault(_payoutTable);
var _symbolIcon = require("./SymbolIcon");
var _symbolIconDefault = parcelHelpers.interopDefault(_symbolIcon);
var _animationsCss = require("../animations.css");
var _s = $RefreshSig$();
// Define all possible symbols
const SYMBOLS = [
    {
        id: '10',
        name: '10',
        color: '#FF6B6B'
    },
    {
        id: 'J',
        name: 'J',
        color: '#4ECDC4'
    },
    {
        id: 'Q',
        name: 'Q',
        color: '#FFD166'
    },
    {
        id: 'K',
        name: 'K',
        color: '#F86624'
    },
    {
        id: 'A',
        name: 'A',
        color: '#7209B7'
    },
    {
        id: 'Solana',
        name: 'Solana',
        color: '#9945FF'
    },
    {
        id: 'Pepe',
        name: 'Pepe',
        color: '#54D62C'
    },
    {
        id: 'Trump',
        name: 'Trump',
        color: '#FFC107'
    },
    {
        id: 'Bonk',
        name: 'Bonk',
        color: '#FF9800'
    },
    {
        id: 'PopCat',
        name: 'PopCat',
        color: '#F72585'
    },
    {
        id: 'Dogwifhat',
        name: 'Dogwifhat',
        color: '#3A86FF'
    }
];
// Define payout values
const PAYOUTS = {
    3: 0.001,
    4: 0.002,
    5: 0.01 // 5 matches = 0.01 SOL
};
const SlotMachine = ({ wallet })=>{
    _s();
    const [spinning, setSpinning] = (0, _react.useState)(false);
    const [reelResults, setReelResults] = (0, _react.useState)(Array(5).fill(null));
    const [winAmount, setWinAmount] = (0, _react.useState)(0);
    const [message, setMessage] = (0, _react.useState)('');
    const [showWinAnimation, setShowWinAnimation] = (0, _react.useState)(false);
    const [lastWin, setLastWin] = (0, _react.useState)(null);
    const [spinsCount, setSpinsCount] = (0, _react.useState)(0);
    const spinTimeoutRef = (0, _react.useRef)(null);
    const spinSound = (0, _react.useRef)(null);
    const winSound = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        // Initialize with random symbols
        const initialSymbols = Array(5).fill(null).map(()=>SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
        setReelResults(initialSymbols);
        // Load sounds
        // Note: In a real implementation, you'd want to use proper audio files
        // spinSound.current = new Audio('/path-to-spin-sound.mp3');
        // winSound.current = new Audio('/path-to-win-sound.mp3');
        return ()=>{
            if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
        };
    }, []);
    const spin = ()=>{
        if (spinning) return;
        setSpinning(true);
        setWinAmount(0);
        setMessage('Spinning...');
        setShowWinAnimation(false);
        setSpinsCount((prev)=>prev + 1);
        // Play spin sound
        // if (spinSound.current) spinSound.current.play();
        // Simulate spinning delay
        spinTimeoutRef.current = setTimeout(()=>{
            // Generate random results
            const results = Array(5).fill(null).map(()=>SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
            setReelResults(results);
            checkWin(results);
            setSpinning(false);
        }, 2000);
    };
    const checkWin = (results)=>{
        // Count occurrences of each symbol
        const counts = {};
        results.forEach((symbol)=>{
            counts[symbol.id] = (counts[symbol.id] || 0) + 1;
        });
        // Find the highest match count
        let highestMatchCount = 0;
        let matchedSymbol = null;
        Object.entries(counts).forEach(([symbolId, count])=>{
            if (count >= 3 && count > highestMatchCount) {
                highestMatchCount = count;
                matchedSymbol = symbolId;
            }
        });
        if (highestMatchCount >= 3) {
            const winningAmount = PAYOUTS[highestMatchCount];
            setWinAmount(winningAmount);
            setLastWin({
                symbol: SYMBOLS.find((s)=>s.id === matchedSymbol),
                count: highestMatchCount,
                amount: winningAmount
            });
            setMessage(`You won ${winningAmount} SOL!`);
            setShowWinAnimation(true);
            // Play win sound
            // if (winSound.current) winSound.current.play();
            // In a real implementation, this is where you'd send SOL to the user's wallet
            console.log(`Sending ${winningAmount} SOL to wallet ${wallet.publicKey}`);
        // sendSol(wallet.publicKey, winningAmount);
        } else setMessage('Try again!');
    };
    // UI Styles
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '800px'
        },
        slotMachine: {
            backgroundColor: 'var(--surface)',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), inset 0 5px 10px rgba(0, 0, 0, 0.2)',
            width: '100%',
            position: 'relative',
            overflow: 'hidden'
        },
        reelsContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '30px',
            minHeight: '160px',
            position: 'relative'
        },
        spinButton: {
            backgroundColor: spinning ? 'var(--surface-light)' : 'var(--accent)',
            color: 'var(--background)',
            border: 'none',
            borderRadius: '50px',
            padding: '15px 40px',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: spinning ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
            margin: '20px 0',
            opacity: spinning ? 0.7 : 1
        },
        spinButtonHover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'
        },
        message: {
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '15px',
            marginTop: '10px',
            borderRadius: '10px',
            backgroundColor: showWinAnimation ? 'rgba(20, 241, 149, 0.1)' : 'transparent',
            color: showWinAnimation ? 'var(--secondary)' : 'var(--text)',
            transition: 'all 0.3s ease'
        },
        stats: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '20px',
            fontSize: '16px',
            color: 'var(--text-secondary)'
        },
        lastWin: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },
        symbolIndicator: {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            marginRight: '5px'
        },
        winOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(20, 241, 149, 0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
            opacity: showWinAnimation ? 1 : 0,
            transition: 'opacity 0.5s ease'
        }
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: styles.slotMachine,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        style: styles.reelsContainer,
                        children: [
                            reelResults.map((symbol, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reelDefault.default), {
                                    symbol: symbol,
                                    spinning: spinning,
                                    delay: index * 200
                                }, index, false, {
                                    fileName: "src/components/SlotMachine.js",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, undefined)),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                style: styles.winOverlay
                            }, void 0, false, {
                                fileName: "src/components/SlotMachine.js",
                                lineNumber: 225,
                                columnNumber: 11
                            }, undefined),
                            showWinAnimation && Array.from({
                                length: 30
                            }).map((_, i)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "confetti",
                                    style: {
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
                                        animationDelay: `${Math.random() * 0.5}s`
                                    }
                                }, i, false, {
                                    fileName: "src/components/SlotMachine.js",
                                    lineNumber: 229,
                                    columnNumber: 9
                                }, undefined))
                        ]
                    }, void 0, true, {
                        fileName: "src/components/SlotMachine.js",
                        lineNumber: 216,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        style: {
                            ...styles.spinButton,
                            ...spinning ? {} : styles.spinButtonHover
                        },
                        onClick: spin,
                        disabled: spinning,
                        children: spinning ? 'Spinning...' : 'SPIN'
                    }, void 0, false, {
                        fileName: "src/components/SlotMachine.js",
                        lineNumber: 242,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        style: styles.message,
                        children: message
                    }, void 0, false, {
                        fileName: "src/components/SlotMachine.js",
                        lineNumber: 253,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/SlotMachine.js",
                lineNumber: 215,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: styles.stats,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: [
                            "Total spins: ",
                            spinsCount
                        ]
                    }, void 0, true, {
                        fileName: "src/components/SlotMachine.js",
                        lineNumber: 259,
                        columnNumber: 9
                    }, undefined),
                    lastWin && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        style: styles.lastWin,
                        children: [
                            "Last win:",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                style: {
                                    ...styles.symbolIndicator,
                                    backgroundColor: lastWin.symbol.color
                                }
                            }, void 0, false, {
                                fileName: "src/components/SlotMachine.js",
                                lineNumber: 263,
                                columnNumber: 13
                            }, undefined),
                            lastWin.count,
                            "x ",
                            lastWin.symbol.name,
                            " (",
                            lastWin.amount,
                            " SOL)"
                        ]
                    }, void 0, true, {
                        fileName: "src/components/SlotMachine.js",
                        lineNumber: 261,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/SlotMachine.js",
                lineNumber: 258,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _payoutTableDefault.default), {
                symbols: SYMBOLS,
                payouts: PAYOUTS
            }, void 0, false, {
                fileName: "src/components/SlotMachine.js",
                lineNumber: 274,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/SlotMachine.js",
        lineNumber: 214,
        columnNumber: 5
    }, undefined);
};
_s(SlotMachine, "B0Ukt9GZWL1fiQ9AshgX8os952Y=");
_c = SlotMachine;
exports.default = SlotMachine;
var _c;
$RefreshReg$(_c, "SlotMachine");

  $parcel$ReactRefreshHelpers$b6d6.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","./Reel":"cRw3j","./PayoutTable":"2e7A1","./SymbolIcon":"dAs05","../animations.css":"d4knj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"cRw3j":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$624d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$624d.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$624d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _symbolIcon = require("./SymbolIcon");
var _symbolIconDefault = parcelHelpers.interopDefault(_symbolIcon);
var _animationsCss = require("../animations.css");
var _s = $RefreshSig$();
const Reel = ({ symbol, spinning, delay })=>{
    _s();
    const [animating, setAnimating] = (0, _react.useState)(false);
    const [animationSymbols, setAnimationSymbols] = (0, _react.useState)([]);
    (0, _react.useEffect)(()=>{
        if (spinning) {
            // Start spinning animation after the specified delay
            const timer = setTimeout(()=>{
                setAnimating(true);
                generateAnimationSymbols();
            }, delay);
            return ()=>clearTimeout(timer);
        } else setAnimating(false);
    }, [
        spinning,
        delay
    ]);
    // Generate random symbols for the spinning animation
    const generateAnimationSymbols = ()=>{
        // This would be replaced with your actual symbols in a real implementation
        const colors = [
            '#FF6B6B',
            '#4ECDC4',
            '#FFD166',
            '#F86624',
            '#7209B7',
            '#9945FF',
            '#54D62C',
            '#FFC107',
            '#FF9800',
            '#F72585',
            '#3A86FF'
        ];
        const animSymbols = [];
        for(let i = 0; i < 20; i++)animSymbols.push({
            id: `anim-${i}`,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
        setAnimationSymbols(animSymbols);
    };
    const styles = {
        reel: {
            width: '18%',
            height: '160px',
            backgroundColor: 'var(--background)',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)'
        },
        symbolDisplay: {
            width: '80%',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            backgroundColor: symbol ? symbol.color : 'transparent',
            color: '#FFFFFF',
            fontSize: '24px',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.2s ease',
            animation: animating ? 'none' : 'pop 0.3s ease'
        },
        animationContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: animating ? 'block' : 'none'
        },
        animationSymbol: {
            position: 'absolute',
            width: '80%',
            height: '80%',
            left: '10%',
            borderRadius: '8px',
            animation: 'spin 0.1s linear infinite'
        },
        reelShine: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '30%',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent)',
            pointerEvents: 'none'
        }
    };
    // Add keyframe animations using CSS-in-JS
    if (!document.getElementById('reel-animations')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'reel-animations';
        styleSheet.innerHTML = `
      @keyframes spin {
        0% { transform: translateY(-500%); }
        100% { transform: translateY(500%); }
      }
      @keyframes pop {
        0% { transform: scale(0.8); opacity: 0.5; }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); opacity: 1; }
      }
    `;
        document.head.appendChild(styleSheet);
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        style: styles.reel,
        children: [
            !animating && symbol && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: styles.symbolDisplay,
                className: spinning ? '' : 'pop',
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _symbolIconDefault.default), {
                    symbol: symbol,
                    size: 60
                }, void 0, false, {
                    fileName: "src/components/Reel.js",
                    lineNumber: 119,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Reel.js",
                lineNumber: 118,
                columnNumber: 9
            }, undefined),
            animating && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: styles.animationContainer,
                children: animationSymbols.map((animSymbol, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        style: {
                            ...styles.animationSymbol,
                            backgroundColor: animSymbol.color,
                            animationDuration: `${0.05 + index * 0.01}s`,
                            animationDelay: `${index * 0.02}s`
                        }
                    }, animSymbol.id, false, {
                        fileName: "src/components/Reel.js",
                        lineNumber: 126,
                        columnNumber: 13
                    }, undefined))
            }, void 0, false, {
                fileName: "src/components/Reel.js",
                lineNumber: 124,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: styles.reelShine
            }, void 0, false, {
                fileName: "src/components/Reel.js",
                lineNumber: 139,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Reel.js",
        lineNumber: 116,
        columnNumber: 5
    }, undefined);
};
_s(Reel, "upH2Fu6EabSj+xgqOKx1rs6wBRI=");
_c = Reel;
exports.default = Reel;
var _c;
$RefreshReg$(_c, "Reel");

  $parcel$ReactRefreshHelpers$624d.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","./SymbolIcon":"dAs05","../animations.css":"d4knj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"dAs05":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$04eb = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$04eb.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$04eb.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// This component will render custom icons for each symbol
const SymbolIcon = ({ symbol, size = 40 })=>{
    // Styles for the base icon
    const styles = {
        container: {
            width: `${size}px`,
            height: `${size}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            backgroundColor: symbol.color,
            color: 'white',
            fontWeight: 'bold',
            fontSize: `${size * 0.5}px`,
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            overflow: 'hidden'
        },
        shine: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '30%',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px'
        }
    };
    // Custom rendering based on symbol type
    const renderSymbolContent = ()=>{
        switch(symbol.id){
            case '10':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    children: "10"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 38,
                    columnNumber: 16
                }, undefined);
            case 'J':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    children: "J"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 40,
                    columnNumber: 16
                }, undefined);
            case 'Q':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    children: "Q"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 42,
                    columnNumber: 16
                }, undefined);
            case 'K':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    children: "K"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 44,
                    columnNumber: 16
                }, undefined);
            case 'A':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    children: "A"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 46,
                    columnNumber: 16
                }, undefined);
            case 'Solana':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                    width: size * 0.6,
                    height: size * 0.6,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                        d: "M16 8L8 16M8 8H16V16",
                        stroke: "white",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "src/components/SymbolIcon.js",
                        lineNumber: 50,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 49,
                    columnNumber: 11
                }, undefined);
            case 'Pepe':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    style: {
                        fontSize: `${size * 0.4}px`,
                        fontWeight: 'bold',
                        color: 'white'
                    },
                    children: "PEPE"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 61,
                    columnNumber: 11
                }, undefined);
            case 'Trump':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    style: {
                        fontSize: `${size * 0.35}px`,
                        fontWeight: 'bold',
                        color: 'white'
                    },
                    children: "TRUMP"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 71,
                    columnNumber: 11
                }, undefined);
            case 'Bonk':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    style: {
                        fontSize: `${size * 0.4}px`,
                        fontWeight: 'bold',
                        color: 'white'
                    },
                    children: "BONK"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 81,
                    columnNumber: 11
                }, undefined);
            case 'PopCat':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    style: {
                        fontSize: `${size * 0.3}px`,
                        fontWeight: 'bold',
                        color: 'white'
                    },
                    children: "POPCAT"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 91,
                    columnNumber: 11
                }, undefined);
            case 'Dogwifhat':
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    style: {
                        fontSize: `${size * 0.25}px`,
                        fontWeight: 'bold',
                        color: 'white'
                    },
                    children: "DOGWIF"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 101,
                    columnNumber: 11
                }, undefined);
            default:
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    children: "?"
                }, void 0, false, {
                    fileName: "src/components/SymbolIcon.js",
                    lineNumber: 110,
                    columnNumber: 16
                }, undefined);
        }
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        style: styles.container,
        children: [
            renderSymbolContent(),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: styles.shine
            }, void 0, false, {
                fileName: "src/components/SymbolIcon.js",
                lineNumber: 117,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/SymbolIcon.js",
        lineNumber: 115,
        columnNumber: 5
    }, undefined);
};
_c = SymbolIcon;
exports.default = SymbolIcon;
var _c;
$RefreshReg$(_c, "SymbolIcon");

  $parcel$ReactRefreshHelpers$04eb.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"d4knj":[function() {},{}],"2e7A1":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$eda9 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$eda9.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$eda9.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _s = $RefreshSig$();
const PayoutTable = ({ symbols, payouts })=>{
    _s();
    const [isExpanded, setIsExpanded] = (0, _react.useState)(false);
    const styles = {
        container: {
            marginTop: '30px',
            backgroundColor: 'var(--surface)',
            borderRadius: '15px',
            padding: '20px',
            width: '100%',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '10px'
        },
        title: {
            margin: 0,
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'var(--text)'
        },
        toggleButton: {
            backgroundColor: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '24px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
        },
        content: {
            overflow: 'hidden',
            maxHeight: isExpanded ? '400px' : '0',
            transition: 'max-height 0.3s ease',
            marginTop: isExpanded ? '15px' : '0'
        },
        payoutSection: {
            marginBottom: '20px'
        },
        payoutTitle: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'var(--accent)',
            marginBottom: '10px'
        },
        symbolsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: '10px',
            marginBottom: '15px'
        },
        symbolBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: 'var(--surface-light)',
            transition: 'transform 0.2s ease'
        },
        symbolBoxHover: {
            transform: 'translateY(-3px)'
        },
        symbolIcon: {
            width: '40px',
            height: '40px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
        },
        symbolName: {
            fontSize: '12px',
            color: 'var(--text)',
            textAlign: 'center'
        },
        winRules: {
            display: 'flex',
            justifyContent: 'space-around',
            padding: '15px',
            backgroundColor: 'var(--surface-light)',
            borderRadius: '10px',
            marginTop: '10px'
        },
        winRule: {
            textAlign: 'center'
        },
        winRuleTitle: {
            fontSize: '14px',
            color: 'var(--text-secondary)',
            marginBottom: '5px'
        },
        winRuleValue: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'var(--secondary)'
        }
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: styles.header,
                onClick: ()=>setIsExpanded(!isExpanded),
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                        style: styles.title,
                        children: "Payout Table"
                    }, void 0, false, {
                        fileName: "src/components/PayoutTable.js",
                        lineNumber: 115,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        style: styles.toggleButton,
                        children: "\u25BC"
                    }, void 0, false, {
                        fileName: "src/components/PayoutTable.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/PayoutTable.js",
                lineNumber: 114,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: styles.content,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        style: styles.payoutSection,
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                style: styles.payoutTitle,
                                children: "Available Symbols"
                            }, void 0, false, {
                                fileName: "src/components/PayoutTable.js",
                                lineNumber: 121,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                style: styles.symbolsGrid,
                                children: symbols.map((symbol)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: styles.symbolBox,
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                style: {
                                                    ...styles.symbolIcon,
                                                    backgroundColor: symbol.color
                                                },
                                                children: symbol.name.length <= 2 ? symbol.name : symbol.name.slice(0, 1)
                                            }, void 0, false, {
                                                fileName: "src/components/PayoutTable.js",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                style: styles.symbolName,
                                                children: symbol.name
                                            }, void 0, false, {
                                                fileName: "src/components/PayoutTable.js",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, symbol.id, true, {
                                        fileName: "src/components/PayoutTable.js",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "src/components/PayoutTable.js",
                                lineNumber: 122,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/PayoutTable.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        style: styles.payoutSection,
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                style: styles.payoutTitle,
                                children: "Win Combinations"
                            }, void 0, false, {
                                fileName: "src/components/PayoutTable.js",
                                lineNumber: 149,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                style: styles.winRules,
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: styles.winRule,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                style: styles.winRuleTitle,
                                                children: "Match 3 symbols"
                                            }, void 0, false, {
                                                fileName: "src/components/PayoutTable.js",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                style: styles.winRuleValue,
                                                children: [
                                                    payouts[3],
                                                    " SOL"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/PayoutTable.js",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/PayoutTable.js",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: styles.winRule,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                style: styles.winRuleTitle,
                                                children: "Match 4 symbols"
                                            }, void 0, false, {
                                                fileName: "src/components/PayoutTable.js",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                style: styles.winRuleValue,
                                                children: [
                                                    payouts[4],
                                                    " SOL"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/PayoutTable.js",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/PayoutTable.js",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: styles.winRule,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                style: styles.winRuleTitle,
                                                children: "Match 5 symbols"
                                            }, void 0, false, {
                                                fileName: "src/components/PayoutTable.js",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                style: styles.winRuleValue,
                                                children: [
                                                    payouts[5],
                                                    " SOL"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/PayoutTable.js",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/PayoutTable.js",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/PayoutTable.js",
                                lineNumber: 150,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/PayoutTable.js",
                        lineNumber: 148,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/PayoutTable.js",
                lineNumber: 119,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/PayoutTable.js",
        lineNumber: 113,
        columnNumber: 5
    }, undefined);
};
_s(PayoutTable, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = PayoutTable;
exports.default = PayoutTable;
var _c;
$RefreshReg$(_c, "PayoutTable");

  $parcel$ReactRefreshHelpers$eda9.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"d4knj":[function() {},{}],"65VFw":[function(require,module,exports,__globalThis) {

},{}],"d4knj":[function() {},{}]},["02ujV","j6hSo"], "j6hSo", "parcelRequire6002")

//# sourceMappingURL=public.5a1fdc8f.js.map
