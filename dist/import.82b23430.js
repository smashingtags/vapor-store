// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"site/scss/root.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__createBinding = __createBinding;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __createBinding(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}

function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"node_modules/@material/base/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCFoundation = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function () {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

exports.MDCFoundation = MDCFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCFoundation;
exports.default = _default;
},{}],"node_modules/@material/base/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCComponent = void 0;

var _tslib = require("tslib");

var _foundation = require("./foundation");

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root = root;
    this.initialize.apply(this, (0, _tslib.__spread)(args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation.MDCFoundation({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root.dispatchEvent(evt);
  };

  return MDCComponent;
}();

exports.MDCComponent = MDCComponent;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCComponent;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","./foundation":"node_modules/@material/base/foundation.js"}],"node_modules/@material/dom/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPassive = applyPassive;

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  return supportsPassiveOption(globalObj) ? {
    passive: true
  } : false;
}

function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  } // See
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


  var passiveSupported = false;

  try {
    var options = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        passiveSupported = true;
        return false;
      }

    };

    var handler = function () {};

    globalObj.document.addEventListener('test', handler, options);
    globalObj.document.removeEventListener('test', handler, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
}
},{}],"node_modules/@material/dom/ponyfill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closest = closest;
exports.matches = matches;
exports.estimateScrollWidth = estimateScrollWidth;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}

function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */


function estimateScrollWidth(element) {
  // Check the offsetParent. If the element inherits display: none from any
  // parent, the offsetParent property will be null (see
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
  // This check ensures we only clone the node when necessary.
  var htmlEl = element;

  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }

  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty('position', 'absolute');
  clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}
},{}],"node_modules/@material/ripple/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbers = exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
exports.cssClasses = cssClasses;
var strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
exports.strings = strings;
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
exports.numbers = numbers;
},{}],"node_modules/@material/ripple/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsCssVariables = supportsCssVariables;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;

function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }

  return supportsCssVars;
}

function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }

  var x = pageOffset.x,
      y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY; // Determine touch point relative to the ripple container.

  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
}
},{}],"node_modules/@material/ripple/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCRippleFoundation = void 0;

var _tslib = require("tslib");

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

var _util = require("./util");

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets = [];

var MDCRippleFoundation =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;

    _this.activationAnimationHasEnded_ = false;
    _this.activationTimer_ = 0;
    _this.fgDeactivationRemovalTimer_ = 0;
    _this.fgScale_ = '0';
    _this.frame_ = {
      width: 0,
      height: 0
    };
    _this.initialSize_ = 0;
    _this.layoutFrame_ = 0;
    _this.maxRadius_ = 0;
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.activationState_ = _this.defaultActivationState_();

    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;

      _this.runDeactivationUXLogicIfReady_();
    };

    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function () {
      return _constants.numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        browserSupportsCssVars: function () {
          return true;
        },
        computeBoundingRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function () {
          return true;
        },
        deregisterDocumentInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        },
        deregisterResizeHandler: function () {
          return undefined;
        },
        getWindowPageOffset: function () {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function () {
          return true;
        },
        isSurfaceDisabled: function () {
          return true;
        },
        isUnbounded: function () {
          return true;
        },
        registerDocumentInteractionHandler: function () {
          return undefined;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        registerResizeHandler: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        updateCssVariable: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRippleFoundation.prototype.init = function () {
    var _this = this;

    var supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
          ROOT_1 = _a.ROOT,
          UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter.addClass(ROOT_1);

        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


          _this.layoutInternal_();
        }
      });
    }
  };

  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _a = MDCRippleFoundation.cssClasses,
          ROOT_2 = _a.ROOT,
          UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter.removeClass(ROOT_2);

        _this.adapter.removeClass(UNBOUNDED_2);

        _this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };
  /**
   * @param evt Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activate_(evt);
  };

  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivate_();
  };

  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };

  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
    return this.adapter.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
    var _this = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter.registerInteractionHandler(evtType, _this.activateHandler_);
      });

      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter.registerInteractionHandler('blur', this.blurHandler_);
  };

  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
    var _this = this;

    if (evt.type === 'keydown') {
      this.adapter.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter.deregisterInteractionHandler(evtType, _this.activateHandler_);
    });
    this.adapter.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
    var _this = this;

    this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
    });
  };

  MDCRippleFoundation.prototype.removeCssVars_ = function () {
    var _this = this;

    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };

  MDCRippleFoundation.prototype.activate_ = function (evt) {
    var _this = this;

    if (this.adapter.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          _this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState_ = _this.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter.isSurfaceActive() : true;
  };

  MDCRippleFoundation.prototype.animateActivation_ = function () {
    var _this = this;

    var _a = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _b.FG_DEACTIVATION,
        FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates_(),
          startPoint = _c.startPoint,
          endPoint = _c.endPoint;

      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }

    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
    var _a = this.activationState_,
        activationEvent = _a.activationEvent,
        wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;

    if (wasActivatedByPointer) {
      startPoint = (0, _util.getNormalizedEventCoords)(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };

  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.


    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState_,
        hasDeactivationUXRun = _a.hasDeactivationUXRun,
        isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, _constants.numbers.FG_DEACTIVATION_MS);
    }
  };

  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function () {
    var _this = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(function () {
      return _this.previousActivationEvent_ = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  MDCRippleFoundation.prototype.deactivate_ = function () {
    var _this = this;

    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    var state = (0, _tslib.__assign)({}, activationState);

    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        return _this.animateDeactivation_(state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this.activationState_.hasDeactivationUXRun = true;

        _this.animateDeactivation_(state);

        _this.resetActivationState_();
      });
    }
  };

  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
        wasElementMadeActive = _a.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layoutInternal_ = function () {
    var _this = this;

    this.frame_ = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    var getBoundedRadius = function () {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE); // Unbounded ripple size should always be even number to equally center align.

    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize_ = initialSize - 1;
    } else {
      this.initialSize_ = initialSize;
    }

    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  };

  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
    var _a = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _a.VAR_FG_SIZE,
        VAR_LEFT = _a.VAR_LEFT,
        VAR_TOP = _a.VAR_TOP,
        VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
    }
  };

  return MDCRippleFoundation;
}(_foundation.MDCFoundation);

exports.MDCRippleFoundation = MDCRippleFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCRippleFoundation;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","@material/base/foundation":"node_modules/@material/base/foundation.js","./constants":"node_modules/@material/ripple/constants.js","./util":"node_modules/@material/ripple/util.js"}],"node_modules/@material/ripple/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCRipple = void 0;

var _tslib = require("tslib");

var _component = require("@material/base/component");

var _events = require("@material/dom/events");

var _ponyfill = require("@material/dom/ponyfill");

var _foundation = require("./foundation");

var util = _interopRequireWildcard(require("./util"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCRipple =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function (className) {
        return instance.root.classList.add(className);
      },
      browserSupportsCssVars: function () {
        return util.supportsCssVariables(window);
      },
      computeBoundingRect: function () {
        return instance.root.getBoundingClientRect();
      },
      containsEventTarget: function (target) {
        return instance.root.contains(target);
      },
      deregisterDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return instance.root.removeEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      deregisterResizeHandler: function (handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function () {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function () {
        return (0, _ponyfill.matches)(instance.root, ':active');
      },
      isSurfaceDisabled: function () {
        return Boolean(instance.disabled);
      },
      isUnbounded: function () {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      registerInteractionHandler: function (evtType, handler) {
        return instance.root.addEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      registerResizeHandler: function (handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function (className) {
        return instance.root.classList.remove(className);
      },
      updateCssVariable: function (varName, value) {
        return instance.root.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function () {
      return Boolean(this.unbounded_);
    },
    set: function (unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new _foundation.MDCRippleFoundation(MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(_component.MDCComponent);

exports.MDCRipple = MDCRipple;
},{"tslib":"node_modules/tslib/tslib.es6.js","@material/base/component":"node_modules/@material/base/component.js","@material/dom/events":"node_modules/@material/dom/events.js","@material/dom/ponyfill":"node_modules/@material/dom/ponyfill.js","./foundation":"node_modules/@material/ripple/foundation.js","./util":"node_modules/@material/ripple/util.js"}],"node_modules/@material/top-app-bar/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.numbers = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  FIXED_CLASS: 'mdc-top-app-bar--fixed',
  FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
  SHORT_CLASS: 'mdc-top-app-bar--short',
  SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
  SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item'
};
exports.cssClasses = cssClasses;
var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};
exports.numbers = numbers;
var strings = {
  ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
  NAVIGATION_EVENT: 'MDCTopAppBar:nav',
  NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
  ROOT_SELECTOR: '.mdc-top-app-bar',
  TITLE_SELECTOR: '.mdc-top-app-bar__title'
};
exports.strings = strings;
},{}],"node_modules/@material/top-app-bar/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTopAppBarBaseFoundation = void 0;

var _tslib = require("tslib");

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTopAppBarBaseFoundation =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCTopAppBarBaseFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */

  function MDCTopAppBarBaseFoundation(adapter) {
    return _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, MDCTopAppBarBaseFoundation.defaultAdapter), adapter)) || this;
  }

  Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
    get: function () {
      return _constants.numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        setStyle: function () {
          return undefined;
        },
        getTopAppBarHeight: function () {
          return 0;
        },
        notifyNavigationIconClicked: function () {
          return undefined;
        },
        getViewportScrollY: function () {
          return 0;
        },
        getTotalActionItems: function () {
          return 0;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /** Other variants of TopAppBar foundation overrides this method */

  MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () {}; // tslint:disable-line:no-empty

  /** Other variants of TopAppBar foundation overrides this method */


  MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () {}; // tslint:disable-line:no-empty


  MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
    this.adapter.notifyNavigationIconClicked();
  };

  return MDCTopAppBarBaseFoundation;
}(_foundation.MDCFoundation);

exports.MDCTopAppBarBaseFoundation = MDCTopAppBarBaseFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTopAppBarBaseFoundation;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","@material/base/foundation":"node_modules/@material/base/foundation.js","./constants":"node_modules/@material/top-app-bar/constants.js"}],"node_modules/@material/top-app-bar/standard/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTopAppBarFoundation = void 0;

var _tslib = require("tslib");

var _constants = require("../constants");

var _foundation = require("../foundation");

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var INITIAL_VALUE = 0;

var MDCTopAppBarFoundation =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCTopAppBarFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */

  function MDCTopAppBarFoundation(adapter) {
    var _this = _super.call(this, adapter) || this;
    /**
     * Indicates if the top app bar was docked in the previous scroll handler iteration.
     */


    _this.wasDocked_ = true;
    /**
     * Indicates if the top app bar is docked in the fully shown position.
     */

    _this.isDockedShowing_ = true;
    /**
     * Variable for current scroll position of the top app bar
     */

    _this.currentAppBarOffsetTop_ = 0;
    /**
     * Used to prevent the top app bar from being scrolled out of view during resize events
     */

    _this.isCurrentlyBeingResized_ = false;
    /**
     * The timeout that's used to throttle the resize events
     */

    _this.resizeThrottleId_ = INITIAL_VALUE;
    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
     */

    _this.resizeDebounceId_ = INITIAL_VALUE;
    _this.lastScrollPosition_ = _this.adapter.getViewportScrollY();
    _this.topAppBarHeight_ = _this.adapter.getTopAppBarHeight();
    return _this;
  }

  MDCTopAppBarFoundation.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.adapter.setStyle('top', '');
  };
  /**
   * Scroll handler for the default scroll behavior of the top app bar.
   * @override
   */


  MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
    var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
    var diff = currentScrollPosition - this.lastScrollPosition_;
    this.lastScrollPosition_ = currentScrollPosition; // If the window is being resized the lastScrollPosition_ needs to be updated but the
    // current scroll of the top app bar should stay in the same position.

    if (!this.isCurrentlyBeingResized_) {
      this.currentAppBarOffsetTop_ -= diff;

      if (this.currentAppBarOffsetTop_ > 0) {
        this.currentAppBarOffsetTop_ = 0;
      } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
        this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
      }

      this.moveTopAppBar_();
    }
  };
  /**
   * Top app bar resize handler that throttle/debounce functions that execute updates.
   * @override
   */


  MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
    var _this = this; // Throttle resize events 10 p/s


    if (!this.resizeThrottleId_) {
      this.resizeThrottleId_ = setTimeout(function () {
        _this.resizeThrottleId_ = INITIAL_VALUE;

        _this.throttledResizeHandler_();
      }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }

    this.isCurrentlyBeingResized_ = true;

    if (this.resizeDebounceId_) {
      clearTimeout(this.resizeDebounceId_);
    }

    this.resizeDebounceId_ = setTimeout(function () {
      _this.handleTargetScroll();

      _this.isCurrentlyBeingResized_ = false;
      _this.resizeDebounceId_ = INITIAL_VALUE;
    }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  };
  /**
   * Function to determine if the DOM needs to update.
   */


  MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
    var offscreenBoundaryTop = -this.topAppBarHeight_;
    var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
    var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
    var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen; // If it's partially showing, it can't be docked.

    if (partiallyShowing) {
      this.wasDocked_ = false;
    } else {
      // Not previously docked and not partially showing, it's now docked.
      if (!this.wasDocked_) {
        this.wasDocked_ = true;
        return true;
      } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
        this.isDockedShowing_ = hasAnyPixelsOnscreen;
        return true;
      }
    }

    return partiallyShowing;
  };
  /**
   * Function to move the top app bar if needed.
   */


  MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
    if (this.checkForUpdate_()) {
      // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
      // so the top app bar doesn't show if the window resizes and the new height > the old height.
      var offset = this.currentAppBarOffsetTop_;

      if (Math.abs(offset) >= this.topAppBarHeight_) {
        offset = -_constants.numbers.MAX_TOP_APP_BAR_HEIGHT;
      }

      this.adapter.setStyle('top', offset + 'px');
    }
  };
  /**
   * Throttled function that updates the top app bar scrolled values if the
   * top app bar height changes.
   */


  MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
    var currentHeight = this.adapter.getTopAppBarHeight();

    if (this.topAppBarHeight_ !== currentHeight) {
      this.wasDocked_ = false; // Since the top app bar has a different height depending on the screen width, this
      // will ensure that the top app bar remains in the correct location if
      // completely hidden and a resize makes the top app bar a different height.

      this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
      this.topAppBarHeight_ = currentHeight;
    }

    this.handleTargetScroll();
  };

  return MDCTopAppBarFoundation;
}(_foundation.MDCTopAppBarBaseFoundation);

exports.MDCTopAppBarFoundation = MDCTopAppBarFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTopAppBarFoundation;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","../constants":"node_modules/@material/top-app-bar/constants.js","../foundation":"node_modules/@material/top-app-bar/foundation.js"}],"node_modules/@material/top-app-bar/fixed/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCFixedTopAppBarFoundation = void 0;

var _tslib = require("tslib");

var _constants = require("../constants");

var _foundation = require("../standard/foundation");

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFixedTopAppBarFoundation =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCFixedTopAppBarFoundation, _super);

  function MDCFixedTopAppBarFoundation() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * State variable for the previous scroll iteration top app bar state
     */


    _this.wasScrolled_ = false;
    return _this;
  }
  /**
   * Scroll handler for applying/removing the modifier class on the fixed top app bar.
   * @override
   */


  MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
    var currentScroll = this.adapter.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.wasScrolled_) {
        this.adapter.removeClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = false;
      }
    } else {
      if (!this.wasScrolled_) {
        this.adapter.addClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = true;
      }
    }
  };

  return MDCFixedTopAppBarFoundation;
}(_foundation.MDCTopAppBarFoundation);

exports.MDCFixedTopAppBarFoundation = MDCFixedTopAppBarFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCFixedTopAppBarFoundation;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","../constants":"node_modules/@material/top-app-bar/constants.js","../standard/foundation":"node_modules/@material/top-app-bar/standard/foundation.js"}],"node_modules/@material/top-app-bar/short/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCShortTopAppBarFoundation = void 0;

var _tslib = require("tslib");

var _constants = require("../constants");

var _foundation = require("../foundation");

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCShortTopAppBarFoundation =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCShortTopAppBarFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */

  function MDCShortTopAppBarFoundation(adapter) {
    var _this = _super.call(this, adapter) || this;

    _this.isCollapsed_ = false;
    _this.isAlwaysCollapsed_ = false;
    return _this;
  }

  Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
    // Public visibility for backward compatibility.
    get: function () {
      return this.isCollapsed_;
    },
    enumerable: true,
    configurable: true
  });

  MDCShortTopAppBarFoundation.prototype.init = function () {
    _super.prototype.init.call(this);

    if (this.adapter.getTotalActionItems() > 0) {
      this.adapter.addClass(_constants.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
    } // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed


    this.setAlwaysCollapsed(this.adapter.hasClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS));
  };
  /**
   * Set if the short top app bar should always be collapsed.
   *
   * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
   */


  MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
    this.isAlwaysCollapsed_ = !!value;

    if (this.isAlwaysCollapsed_) {
      this.collapse_();
    } else {
      // let maybeCollapseBar_ determine if the bar should be collapsed
      this.maybeCollapseBar_();
    }
  };

  MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
    return this.isAlwaysCollapsed_;
  };
  /**
   * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
   * @override
   */


  MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
    this.maybeCollapseBar_();
  };

  MDCShortTopAppBarFoundation.prototype.maybeCollapseBar_ = function () {
    if (this.isAlwaysCollapsed_) {
      return;
    }

    var currentScroll = this.adapter.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.isCollapsed_) {
        this.uncollapse_();
      }
    } else {
      if (!this.isCollapsed_) {
        this.collapse_();
      }
    }
  };

  MDCShortTopAppBarFoundation.prototype.uncollapse_ = function () {
    this.adapter.removeClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
    this.isCollapsed_ = false;
  };

  MDCShortTopAppBarFoundation.prototype.collapse_ = function () {
    this.adapter.addClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
    this.isCollapsed_ = true;
  };

  return MDCShortTopAppBarFoundation;
}(_foundation.MDCTopAppBarBaseFoundation);

exports.MDCShortTopAppBarFoundation = MDCShortTopAppBarFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCShortTopAppBarFoundation;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","../constants":"node_modules/@material/top-app-bar/constants.js","../foundation":"node_modules/@material/top-app-bar/foundation.js"}],"node_modules/@material/top-app-bar/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTopAppBar = void 0;

var _tslib = require("tslib");

var _component = require("@material/base/component");

var _component2 = require("@material/ripple/component");

var _constants = require("./constants");

var _foundation = require("./fixed/foundation");

var _foundation2 = require("./short/foundation");

var _foundation3 = require("./standard/foundation");

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTopAppBar =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCTopAppBar, _super);

  function MDCTopAppBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTopAppBar.attachTo = function (root) {
    return new MDCTopAppBar(root);
  };

  MDCTopAppBar.prototype.initialize = function (rippleFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function (el) {
        return _component2.MDCRipple.attachTo(el);
      };
    }

    this.navIcon_ = this.root.querySelector(_constants.strings.NAVIGATION_ICON_SELECTOR); // Get all icons in the toolbar and instantiate the ripples

    var icons = [].slice.call(this.root.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR));

    if (this.navIcon_) {
      icons.push(this.navIcon_);
    }

    this.iconRipples_ = icons.map(function (icon) {
      var ripple = rippleFactory(icon);
      ripple.unbounded = true;
      return ripple;
    });
    this.scrollTarget_ = window;
  };

  MDCTopAppBar.prototype.initialSyncWithDOM = function () {
    this.handleNavigationClick_ = this.foundation.handleNavigationClick.bind(this.foundation);
    this.handleWindowResize_ = this.foundation.handleWindowResize.bind(this.foundation);
    this.handleTargetScroll_ = this.foundation.handleTargetScroll.bind(this.foundation);
    this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);

    if (this.navIcon_) {
      this.navIcon_.addEventListener('click', this.handleNavigationClick_);
    }

    var isFixed = this.root.classList.contains(_constants.cssClasses.FIXED_CLASS);
    var isShort = this.root.classList.contains(_constants.cssClasses.SHORT_CLASS);

    if (!isShort && !isFixed) {
      window.addEventListener('resize', this.handleWindowResize_);
    }
  };

  MDCTopAppBar.prototype.destroy = function () {
    this.iconRipples_.forEach(function (iconRipple) {
      return iconRipple.destroy();
    });
    this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);

    if (this.navIcon_) {
      this.navIcon_.removeEventListener('click', this.handleNavigationClick_);
    }

    var isFixed = this.root.classList.contains(_constants.cssClasses.FIXED_CLASS);
    var isShort = this.root.classList.contains(_constants.cssClasses.SHORT_CLASS);

    if (!isShort && !isFixed) {
      window.removeEventListener('resize', this.handleWindowResize_);
    }

    _super.prototype.destroy.call(this);
  };

  MDCTopAppBar.prototype.setScrollTarget = function (target) {
    // Remove scroll handler from the previous scroll target
    this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
    this.scrollTarget_ = target; // Initialize scroll handler on the new scroll target

    this.handleTargetScroll_ = this.foundation.handleTargetScroll.bind(this.foundation);
    this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
  };

  MDCTopAppBar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      hasClass: function (className) {
        return _this.root.classList.contains(className);
      },
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      setStyle: function (property, value) {
        return _this.root.style.setProperty(property, value);
      },
      getTopAppBarHeight: function () {
        return _this.root.clientHeight;
      },
      notifyNavigationIconClicked: function () {
        return _this.emit(_constants.strings.NAVIGATION_EVENT, {});
      },
      getViewportScrollY: function () {
        var win = _this.scrollTarget_;
        var el = _this.scrollTarget_;
        return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
      },
      getTotalActionItems: function () {
        return _this.root.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR).length;
      }
    }; // tslint:enable:object-literal-sort-keys

    var foundation;

    if (this.root.classList.contains(_constants.cssClasses.SHORT_CLASS)) {
      foundation = new _foundation2.MDCShortTopAppBarFoundation(adapter);
    } else if (this.root.classList.contains(_constants.cssClasses.FIXED_CLASS)) {
      foundation = new _foundation.MDCFixedTopAppBarFoundation(adapter);
    } else {
      foundation = new _foundation3.MDCTopAppBarFoundation(adapter);
    }

    return foundation;
  };

  return MDCTopAppBar;
}(_component.MDCComponent);

exports.MDCTopAppBar = MDCTopAppBar;
},{"tslib":"node_modules/tslib/tslib.es6.js","@material/base/component":"node_modules/@material/base/component.js","@material/ripple/component":"node_modules/@material/ripple/component.js","./constants":"node_modules/@material/top-app-bar/constants.js","./fixed/foundation":"node_modules/@material/top-app-bar/fixed/foundation.js","./short/foundation":"node_modules/@material/top-app-bar/short/foundation.js","./standard/foundation":"node_modules/@material/top-app-bar/standard/foundation.js"}],"node_modules/@material/top-app-bar/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _component[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _foundation = require("./foundation");

Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _foundation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});

var _foundation2 = require("./fixed/foundation");

Object.keys(_foundation2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _foundation2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation2[key];
    }
  });
});

var _foundation3 = require("./short/foundation");

Object.keys(_foundation3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _foundation3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation3[key];
    }
  });
});

var _foundation4 = require("./standard/foundation");

Object.keys(_foundation4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _foundation4[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation4[key];
    }
  });
});
},{"./component":"node_modules/@material/top-app-bar/component.js","./constants":"node_modules/@material/top-app-bar/constants.js","./foundation":"node_modules/@material/top-app-bar/foundation.js","./fixed/foundation":"node_modules/@material/top-app-bar/fixed/foundation.js","./short/foundation":"node_modules/@material/top-app-bar/short/foundation.js","./standard/foundation":"node_modules/@material/top-app-bar/standard/foundation.js"}],"node_modules/@material/drawer/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFocusTrapInstance = createFocusTrapInstance;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
  return focusTrapFactory(surfaceEl, {
    // Component handles focusing on active nav item.
    skipInitialFocus: true
  });
}
},{}],"node_modules/@material/dom/focus-trap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusTrap = void 0;

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */

var FocusTrap =
/** @class */
function () {
  function FocusTrap(root, options) {
    if (options === void 0) {
      options = {};
    }

    this.root = root;
    this.options = options; // Previously focused element before trapping focus.

    this.elFocusedBeforeTrapFocus = null;
  }
  /**
   * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
   * otherwises sets initial focus to the first focusable child element.
   */


  FocusTrap.prototype.trapFocus = function () {
    var focusableEls = this.getFocusableElements(this.root);

    if (focusableEls.length === 0) {
      throw new Error('FocusTrap: Element must have at least one focusable child.');
    }

    this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.wrapTabFocus(this.root, focusableEls);

    if (!this.options.skipInitialFocus) {
      this.focusInitialElement(focusableEls, this.options.initialFocusEl);
    }
  };
  /**
   * Releases focus from `root`. Also restores focus to the previously focused
   * element.
   */


  FocusTrap.prototype.releaseFocus = function () {
    [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS)).forEach(function (sentinelEl) {
      sentinelEl.parentElement.removeChild(sentinelEl);
    });

    if (this.elFocusedBeforeTrapFocus) {
      this.elFocusedBeforeTrapFocus.focus();
    }
  };
  /**
   * Wraps tab focus within `el` by adding two hidden sentinel divs which are
   * used to mark the beginning and the end of the tabbable region. When
   * focused, these sentinel elements redirect focus to the first/last
   * children elements of the tabbable region, ensuring that focus is trapped
   * within that region.
   */


  FocusTrap.prototype.wrapTabFocus = function (el, focusableEls) {
    var sentinelStart = this.createSentinel();
    var sentinelEnd = this.createSentinel();
    sentinelStart.addEventListener('focus', function () {
      if (focusableEls.length > 0) {
        focusableEls[focusableEls.length - 1].focus();
      }
    });
    sentinelEnd.addEventListener('focus', function () {
      if (focusableEls.length > 0) {
        focusableEls[0].focus();
      }
    });
    el.insertBefore(sentinelStart, el.children[0]);
    el.appendChild(sentinelEnd);
  };
  /**
   * Focuses on `initialFocusEl` if defined and a child of the root element.
   * Otherwise, focuses on the first focusable child element of the root.
   */


  FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
    var focusIndex = 0;

    if (initialFocusEl) {
      focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
    }

    focusableEls[focusIndex].focus();
  };

  FocusTrap.prototype.getFocusableElements = function (root) {
    var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
    return focusableEls.filter(function (el) {
      var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' || el.getAttribute('disabled') != null || el.getAttribute('hidden') != null || el.getAttribute('aria-hidden') === 'true';
      var isTabbableAndVisible = el.tabIndex >= 0 && el.getBoundingClientRect().width > 0 && !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
      var isProgrammaticallyHidden = false;

      if (isTabbableAndVisible) {
        var style = getComputedStyle(el);
        isProgrammaticallyHidden = style.display === 'none' || style.visibility === 'hidden';
      }

      return isTabbableAndVisible && !isProgrammaticallyHidden;
    });
  };

  FocusTrap.prototype.createSentinel = function () {
    var sentinel = document.createElement('div');
    sentinel.setAttribute('tabindex', '0'); // Don't announce in screen readers.

    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.classList.add(FOCUS_SENTINEL_CLASS);
    return sentinel;
  };

  return FocusTrap;
}();

exports.FocusTrap = FocusTrap;
},{}],"node_modules/@material/list/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbers = exports.cssClasses = exports.strings = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
  LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
  ROOT: 'mdc-list'
};
exports.cssClasses = cssClasses;
var strings = {
  ACTION_EVENT: 'MDCList:action',
  ARIA_CHECKED: 'aria-checked',
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: 'aria-current',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: 'aria-selected',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
  RADIO_SELECTOR: 'input[type="radio"]'
};
exports.strings = strings;
var numbers = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
exports.numbers = numbers;
},{}],"node_modules/@material/dom/keyboard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeKey = normalizeKey;
exports.isNavigationEvent = isNavigationEvent;
exports.KEY = void 0;

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * KEY provides normalized string values for keys.
 */
var KEY = {
  UNKNOWN: 'Unknown',
  BACKSPACE: 'Backspace',
  ENTER: 'Enter',
  SPACEBAR: 'Spacebar',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
  END: 'End',
  HOME: 'Home',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_UP: 'ArrowUp',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  DELETE: 'Delete',
  ESCAPE: 'Escape'
};
exports.KEY = KEY;
var normalizedKeys = new Set(); // IE11 has no support for new Map with iterable so we need to initialize this
// by hand.

normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
var KEY_CODE = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27
};
var mappedKeyCodes = new Map(); // IE11 has no support for new Map with iterable so we need to initialize this
// by hand.

mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
var navigationKeys = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this
// by hand.

navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */

function normalizeKey(evt) {
  var key = evt.key; // If the event already has a normalized key, return it

  if (normalizedKeys.has(key)) {
    return key;
  } // tslint:disable-next-line:deprecation


  var mappedKey = mappedKeyCodes.get(evt.keyCode);

  if (mappedKey) {
    return mappedKey;
  }

  return KEY.UNKNOWN;
}
/**
 * isNavigationEvent returns whether the event is a navigation event
 */


function isNavigationEvent(evt) {
  return navigationKeys.has(normalizeKey(evt));
}
},{}],"node_modules/@material/list/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preventDefaultEvent = void 0;

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
/**
 * Ensures that preventDefault is only called if the containing element
 * doesn't consume the event, and it will cause an unintended scroll.
 *
 * @param evt keyboard event to be prevented.
 */

var preventDefaultEvent = function (evt) {
  var target = evt.target;

  if (!target) {
    return;
  }

  var tagName = ("" + target.tagName).toLowerCase();

  if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
    evt.preventDefault();
  }
};

exports.preventDefaultEvent = preventDefaultEvent;
},{}],"node_modules/@material/list/typeahead.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initState = initState;
exports.initSortedIndex = initSortedIndex;
exports.matchItem = matchItem;
exports.isTypingInProgress = isTypingInProgress;
exports.clearBuffer = clearBuffer;
exports.handleKeydown = handleKeydown;

var _keyboard = require("@material/dom/keyboard");

var _constants = require("./constants");

var _events = require("./events");

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Initializes a state object for typeahead. Use the same reference for calls to
 * typeahead functions.
 *
 * @return The current state of the typeahead process. Each state reference
 *     represents a typeahead instance as the reference is typically mutated
 *     in-place.
 */
function initState() {
  var state = {
    bufferClearTimeout: 0,
    currentFirstChar: '',
    sortedIndexCursor: 0,
    typeaheadBuffer: ''
  };
  return state;
}
/**
 * Initializes typeahead state by indexing the current list items by primary
 * text into the sortedIndexByFirstChar data structure.
 *
 * @param listItemCount numer of items in the list
 * @param getPrimaryTextByItemIndex function that returns the primary text at a
 *     given index
 *
 * @return Map that maps the first character of the primary text to the full
 *     list text and it's index
 */


function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
  var sortedIndexByFirstChar = new Map(); // Aggregate item text to index mapping

  for (var i = 0; i < listItemCount; i++) {
    var primaryText = getPrimaryTextByItemIndex(i).trim();

    if (!primaryText) {
      continue;
    }

    var firstChar = primaryText[0].toLowerCase();

    if (!sortedIndexByFirstChar.has(firstChar)) {
      sortedIndexByFirstChar.set(firstChar, []);
    }

    sortedIndexByFirstChar.get(firstChar).push({
      text: primaryText.toLowerCase(),
      index: i
    });
  } // Sort the mapping
  // TODO(b/157162694): Investigate replacing forEach with Map.values()


  sortedIndexByFirstChar.forEach(function (values) {
    values.sort(function (first, second) {
      return first.index - second.index;
    });
  });
  return sortedIndexByFirstChar;
}
/**
 * Given the next desired character from the user, it attempts to find the next
 * list option matching the buffer. Wraps around if at the end of options.
 *
 * @param opts Options and accessors
 *   - nextChar - the next character to match against items
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - skipFocus - whether or not to focus the matched item
 *   - isItemAtIndexDisabled - function that determines whether an item at a
 *        given index is disabled
 * @param state The typeahead state instance. See `initState`.
 *
 * @return The index of the matched item, or -1 if no match.
 */


function matchItem(opts, state) {
  var nextChar = opts.nextChar,
      focusItemAtIndex = opts.focusItemAtIndex,
      sortedIndexByFirstChar = opts.sortedIndexByFirstChar,
      focusedItemIndex = opts.focusedItemIndex,
      skipFocus = opts.skipFocus,
      isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  clearTimeout(state.bufferClearTimeout);
  state.bufferClearTimeout = setTimeout(function () {
    clearBuffer(state);
  }, _constants.numbers.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
  state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
  var index;

  if (state.typeaheadBuffer.length === 1) {
    index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
  } else {
    index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
  }

  if (index !== -1 && !skipFocus) {
    focusItemAtIndex(index);
  }

  return index;
}
/**
 * Matches the user's single input character in the buffer to the
 * next option that begins with such character. Wraps around if at
 * end of options. Returns -1 if no match is found.
 */


function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
  var firstChar = state.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);

  if (!itemsMatchingFirstChar) {
    return -1;
  } // Has the same firstChar been recently matched?
  // Also, did starting index remain the same between key presses?
  // If both hold true, simply increment index.


  if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
    state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;

    if (!isItemAtIndexDisabled(newIndex)) {
      return newIndex;
    }
  } // If we're here, it means one of the following happened:
  // - either firstChar or startingIndex has changed, invalidating the
  // cursor.
  // - The next item of typeahead is disabled, so we have to look further.


  state.currentFirstChar = firstChar;
  var newCursorPosition = -1;
  var cursorPosition; // Find the first non-disabled item as a fallback.

  for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  } // Advance cursor to first item matching the firstChar that is positioned
  // after starting item. Cursor is unchanged from fallback if there's no
  // such item.


  for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }

  if (newCursorPosition !== -1) {
    state.sortedIndexCursor = newCursorPosition;
    return itemsMatchingFirstChar[state.sortedIndexCursor].index;
  }

  return -1;
}
/**
 * Attempts to find the next item that matches all of the typeahead buffer.
 * Wraps around if at end of options. Returns -1 if no match is found.
 */


function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
  var firstChar = state.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);

  if (!itemsMatchingFirstChar) {
    return -1;
  } // Do nothing if text already matches


  var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];

  if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) {
    return startingItem.index;
  } // Find next item that matches completely; if no match, we'll eventually
  // loop around to same position


  var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
  var nextCursorPosition = -1;

  while (cursorPosition !== state.sortedIndexCursor) {
    var currentItem = itemsMatchingFirstChar[cursorPosition];
    var matches = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
    var isEnabled = !isItemAtIndexDisabled(currentItem.index);

    if (matches && isEnabled) {
      nextCursorPosition = cursorPosition;
      break;
    }

    cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
  }

  if (nextCursorPosition !== -1) {
    state.sortedIndexCursor = nextCursorPosition;
    return itemsMatchingFirstChar[state.sortedIndexCursor].index;
  }

  return -1;
}
/**
 * Whether or not the given typeahead instaance state is currently typing.
 *
 * @param state The typeahead state instance. See `initState`.
 */


function isTypingInProgress(state) {
  return state.typeaheadBuffer.length > 0;
}
/**
 * Clears the typeahaed buffer so that it resets item matching to the first
 * character.
 *
 * @param state The typeahead state instance. See `initState`.
 */


function clearBuffer(state) {
  state.typeaheadBuffer = '';
}
/**
 * Given a keydown event, it calculates whether or not to automatically focus a
 * list item depending on what was typed mimicing the typeahead functionality of
 * a standard <select> element that is open.
 *
 * @param opts Options and accessors
 *   - event - the KeyboardEvent to handle and parse
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
 *      is disabled
 *   - isTargetListItem - whether or not the event target is a list item
 * @param state The typeahead state instance. See `initState`.
 *
 * @returns index of the item matched by the keydown. -1 if not matched.
 */


function handleKeydown(opts, state) {
  var event = opts.event,
      isTargetListItem = opts.isTargetListItem,
      focusedItemIndex = opts.focusedItemIndex,
      focusItemAtIndex = opts.focusItemAtIndex,
      sortedIndexByFirstChar = opts.sortedIndexByFirstChar,
      isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  var isArrowLeft = (0, _keyboard.normalizeKey)(event) === 'ArrowLeft';
  var isArrowUp = (0, _keyboard.normalizeKey)(event) === 'ArrowUp';
  var isArrowRight = (0, _keyboard.normalizeKey)(event) === 'ArrowRight';
  var isArrowDown = (0, _keyboard.normalizeKey)(event) === 'ArrowDown';
  var isHome = (0, _keyboard.normalizeKey)(event) === 'Home';
  var isEnd = (0, _keyboard.normalizeKey)(event) === 'End';
  var isEnter = (0, _keyboard.normalizeKey)(event) === 'Enter';
  var isSpace = (0, _keyboard.normalizeKey)(event) === 'Spacebar';

  if (isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
    return -1;
  }

  var isCharacterKey = !isSpace && event.key.length === 1;

  if (isCharacterKey) {
    (0, _events.preventDefaultEvent)(event);
    var matchItemOpts = {
      focusItemAtIndex: focusItemAtIndex,
      focusedItemIndex: focusedItemIndex,
      nextChar: event.key.toLowerCase(),
      sortedIndexByFirstChar: sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled: isItemAtIndexDisabled
    };
    return matchItem(matchItemOpts, state);
  }

  if (!isSpace) {
    return -1;
  }

  if (isTargetListItem) {
    (0, _events.preventDefaultEvent)(event);
  }

  var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);

  if (typeaheadOnListItem) {
    var matchItemOpts = {
      focusItemAtIndex: focusItemAtIndex,
      focusedItemIndex: focusedItemIndex,
      nextChar: ' ',
      sortedIndexByFirstChar: sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled: isItemAtIndexDisabled
    }; // space participates in typeahead matching if in rapid typing mode

    return matchItem(matchItemOpts, state);
  }

  return -1;
}
},{"@material/dom/keyboard":"node_modules/@material/dom/keyboard.js","./constants":"node_modules/@material/list/constants.js","./events":"node_modules/@material/list/events.js"}],"node_modules/@material/list/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCListFoundation = void 0;

var _tslib = require("tslib");

var _foundation = require("@material/base/foundation");

var _keyboard = require("@material/dom/keyboard");

var _constants = require("./constants");

var typeahead = _interopRequireWildcard(require("./typeahead"));

var _events = require("./events");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// TODO(b/152410470): Remove trailing underscores from private properties
// tslint:disable:strip-private-property-underscore
function isNumberArray(selectedIndex) {
  return selectedIndex instanceof Array;
}

var MDCListFoundation =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCListFoundation, _super);

  function MDCListFoundation(adapter) {
    var _this = _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, MDCListFoundation.defaultAdapter), adapter)) || this;

    _this.wrapFocus_ = false;
    _this.isVertical_ = true;
    _this.isSingleSelectionList_ = false;
    _this.selectedIndex_ = _constants.numbers.UNSET_INDEX;
    _this.focusedItemIndex = _constants.numbers.UNSET_INDEX;
    _this.useActivatedClass_ = false;
    _this.ariaCurrentAttrValue_ = null;
    _this.isCheckboxList_ = false;
    _this.isRadioList_ = false;
    _this.hasTypeahead = false; // Transiently holds current typeahead prefix from user.

    _this.typeaheadState = typeahead.initState();
    _this.sortedIndexByFirstChar = new Map();
    return _this;
  }

  Object.defineProperty(MDCListFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "numbers", {
    get: function () {
      return _constants.numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClassForElementIndex: function () {
          return undefined;
        },
        focusItemAtIndex: function () {
          return undefined;
        },
        getAttributeForElementIndex: function () {
          return null;
        },
        getFocusedElementIndex: function () {
          return 0;
        },
        getListItemCount: function () {
          return 0;
        },
        hasCheckboxAtIndex: function () {
          return false;
        },
        hasRadioAtIndex: function () {
          return false;
        },
        isCheckboxCheckedAtIndex: function () {
          return false;
        },
        isFocusInsideList: function () {
          return false;
        },
        isRootFocused: function () {
          return false;
        },
        listItemAtIndexHasClass: function () {
          return false;
        },
        notifyAction: function () {
          return undefined;
        },
        removeClassForElementIndex: function () {
          return undefined;
        },
        setAttributeForElementIndex: function () {
          return undefined;
        },
        setCheckedCheckboxOrRadioAtIndex: function () {
          return undefined;
        },
        setTabIndexForListItemChildren: function () {
          return undefined;
        },
        getPrimaryTextAtIndex: function () {
          return '';
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCListFoundation.prototype.layout = function () {
    if (this.adapter.getListItemCount() === 0) {
      return;
    }

    if (this.adapter.hasCheckboxAtIndex(0)) {
      this.isCheckboxList_ = true;
    } else if (this.adapter.hasRadioAtIndex(0)) {
      this.isRadioList_ = true;
    } else {
      this.maybeInitializeSingleSelection();
    }

    if (this.hasTypeahead) {
      this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    }
  };
  /**
   * Sets the private wrapFocus_ variable.
   */


  MDCListFoundation.prototype.setWrapFocus = function (value) {
    this.wrapFocus_ = value;
  };
  /**
   * Sets the isVertical_ private variable.
   */


  MDCListFoundation.prototype.setVerticalOrientation = function (value) {
    this.isVertical_ = value;
  };
  /**
   * Sets the isSingleSelectionList_ private variable.
   */


  MDCListFoundation.prototype.setSingleSelection = function (value) {
    this.isSingleSelectionList_ = value;

    if (value) {
      this.maybeInitializeSingleSelection();
    }
  };
  /**
   * Automatically determines whether the list is single selection list. If so,
   * initializes the internal state to match the selected item.
   */


  MDCListFoundation.prototype.maybeInitializeSingleSelection = function () {
    for (var i = 0; i < this.adapter.getListItemCount(); i++) {
      var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, _constants.cssClasses.LIST_ITEM_SELECTED_CLASS);
      var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, _constants.cssClasses.LIST_ITEM_ACTIVATED_CLASS);

      if (!(hasSelectedClass || hasActivatedClass)) {
        continue;
      }

      if (hasActivatedClass) {
        this.setUseActivatedClass(true);
      }

      this.isSingleSelectionList_ = true;
      this.selectedIndex_ = i;
      return;
    }
  };
  /**
   * Sets whether typeahead is enabled on the list.
   * @param hasTypeahead Whether typeahead is enabled.
   */


  MDCListFoundation.prototype.setHasTypeahead = function (hasTypeahead) {
    this.hasTypeahead = hasTypeahead;

    if (hasTypeahead) {
      this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    }
  };
  /**
   * @return Whether typeahead is currently matching a user-specified prefix.
   */


  MDCListFoundation.prototype.isTypeaheadInProgress = function () {
    return this.hasTypeahead && typeahead.isTypingInProgress(this.typeaheadState);
  };
  /**
   * Sets the useActivatedClass_ private variable.
   */


  MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
    this.useActivatedClass_ = useActivated;
  };

  MDCListFoundation.prototype.getSelectedIndex = function () {
    return this.selectedIndex_;
  };

  MDCListFoundation.prototype.setSelectedIndex = function (index) {
    if (!this.isIndexValid_(index)) {
      return;
    }

    if (this.isCheckboxList_) {
      this.setCheckboxAtIndex_(index);
    } else if (this.isRadioList_) {
      this.setRadioAtIndex_(index);
    } else {
      this.setSingleSelectionAtIndex_(index);
    }
  };
  /**
   * Focus in handler for the list items.
   */


  MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
    if (listItemIndex >= 0) {
      this.focusedItemIndex = listItemIndex;
      this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '0');
      this.adapter.setTabIndexForListItemChildren(listItemIndex, '0');
    }
  };
  /**
   * Focus out handler for the list items.
   */


  MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
    var _this = this;

    if (listItemIndex >= 0) {
      this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '-1');
      this.adapter.setTabIndexForListItemChildren(listItemIndex, '-1');
    }
    /**
     * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
     * is moved to next element.
     */


    setTimeout(function () {
      if (!_this.adapter.isFocusInsideList()) {
        _this.setTabindexToFirstSelectedOrFocusedItem();
      }
    }, 0);
  };
  /**
   * Key handler for the list.
   */


  MDCListFoundation.prototype.handleKeydown = function (event, isRootListItem, listItemIndex) {
    var _this = this;

    var isArrowLeft = (0, _keyboard.normalizeKey)(event) === 'ArrowLeft';
    var isArrowUp = (0, _keyboard.normalizeKey)(event) === 'ArrowUp';
    var isArrowRight = (0, _keyboard.normalizeKey)(event) === 'ArrowRight';
    var isArrowDown = (0, _keyboard.normalizeKey)(event) === 'ArrowDown';
    var isHome = (0, _keyboard.normalizeKey)(event) === 'Home';
    var isEnd = (0, _keyboard.normalizeKey)(event) === 'End';
    var isEnter = (0, _keyboard.normalizeKey)(event) === 'Enter';
    var isSpace = (0, _keyboard.normalizeKey)(event) === 'Spacebar';

    if (this.adapter.isRootFocused()) {
      if (isArrowUp || isEnd) {
        event.preventDefault();
        this.focusLastElement();
      } else if (isArrowDown || isHome) {
        event.preventDefault();
        this.focusFirstElement();
      }

      if (this.hasTypeahead) {
        var handleKeydownOpts = {
          event: event,
          focusItemAtIndex: function (index) {
            _this.focusItemAtIndex(index);
          },
          focusedItemIndex: -1,
          isTargetListItem: isRootListItem,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function (index) {
            return _this.adapter.listItemAtIndexHasClass(index, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
          }
        };
        typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
      }

      return;
    }

    var currentIndex = this.adapter.getFocusedElementIndex();

    if (currentIndex === -1) {
      currentIndex = listItemIndex;

      if (currentIndex < 0) {
        // If this event doesn't have a mdc-list-item ancestor from the
        // current list (not from a sublist), return early.
        return;
      }
    }

    if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
      (0, _events.preventDefaultEvent)(event);
      this.focusNextElement(currentIndex);
    } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
      (0, _events.preventDefaultEvent)(event);
      this.focusPrevElement(currentIndex);
    } else if (isHome) {
      (0, _events.preventDefaultEvent)(event);
      this.focusFirstElement();
    } else if (isEnd) {
      (0, _events.preventDefaultEvent)(event);
      this.focusLastElement();
    } else if (isEnter || isSpace) {
      if (isRootListItem) {
        // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
        var target = event.target;

        if (target && target.tagName === 'A' && isEnter) {
          return;
        }

        (0, _events.preventDefaultEvent)(event);

        if (this.adapter.listItemAtIndexHasClass(currentIndex, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS)) {
          return;
        }

        if (!this.isTypeaheadInProgress()) {
          if (this.isSelectableList_()) {
            this.setSelectedIndexOnAction_(currentIndex);
          }

          this.adapter.notifyAction(currentIndex);
        }
      }
    }

    if (this.hasTypeahead) {
      var handleKeydownOpts = {
        event: event,
        focusItemAtIndex: function (index) {
          _this.focusItemAtIndex(index);
        },
        focusedItemIndex: this.focusedItemIndex,
        isTargetListItem: isRootListItem,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        isItemAtIndexDisabled: function (index) {
          return _this.adapter.listItemAtIndexHasClass(index, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
        }
      };
      typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
    }
  };
  /**
   * Click handler for the list.
   */


  MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
    if (index === _constants.numbers.UNSET_INDEX) {
      return;
    }

    if (this.adapter.listItemAtIndexHasClass(index, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS)) {
      return;
    }

    if (this.isSelectableList_()) {
      this.setSelectedIndexOnAction_(index, toggleCheckbox);
    }

    this.adapter.notifyAction(index);
  };
  /**
   * Focuses the next element on the list.
   */


  MDCListFoundation.prototype.focusNextElement = function (index) {
    var count = this.adapter.getListItemCount();
    var nextIndex = index + 1;

    if (nextIndex >= count) {
      if (this.wrapFocus_) {
        nextIndex = 0;
      } else {
        // Return early because last item is already focused.
        return index;
      }
    }

    this.focusItemAtIndex(nextIndex);
    return nextIndex;
  };
  /**
   * Focuses the previous element on the list.
   */


  MDCListFoundation.prototype.focusPrevElement = function (index) {
    var prevIndex = index - 1;

    if (prevIndex < 0) {
      if (this.wrapFocus_) {
        prevIndex = this.adapter.getListItemCount() - 1;
      } else {
        // Return early because first item is already focused.
        return index;
      }
    }

    this.focusItemAtIndex(prevIndex);
    return prevIndex;
  };

  MDCListFoundation.prototype.focusFirstElement = function () {
    this.focusItemAtIndex(0);
    return 0;
  };

  MDCListFoundation.prototype.focusLastElement = function () {
    var lastIndex = this.adapter.getListItemCount() - 1;
    this.focusItemAtIndex(lastIndex);
    return lastIndex;
  };
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
    if (!this.isIndexValid_(itemIndex)) {
      return;
    }

    if (isEnabled) {
      this.adapter.removeClassForElementIndex(itemIndex, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
      this.adapter.setAttributeForElementIndex(itemIndex, _constants.strings.ARIA_DISABLED, 'false');
    } else {
      this.adapter.addClassForElementIndex(itemIndex, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
      this.adapter.setAttributeForElementIndex(itemIndex, _constants.strings.ARIA_DISABLED, 'true');
    }
  };

  MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
    if (this.selectedIndex_ === index) {
      return;
    }

    var selectedClassName = _constants.cssClasses.LIST_ITEM_SELECTED_CLASS;

    if (this.useActivatedClass_) {
      selectedClassName = _constants.cssClasses.LIST_ITEM_ACTIVATED_CLASS;
    }

    if (this.selectedIndex_ !== _constants.numbers.UNSET_INDEX) {
      this.adapter.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
    }

    this.setAriaForSingleSelectionAtIndex_(index);
    this.setTabindexAtIndex_(index);

    if (index !== _constants.numbers.UNSET_INDEX) {
      this.adapter.addClassForElementIndex(index, selectedClassName);
    }

    this.selectedIndex_ = index;
  };
  /**
   * Sets aria attribute for single selection at given index.
   */


  MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
    // Detect the presence of aria-current and get the value only during list initialization when it is in unset state.
    if (this.selectedIndex_ === _constants.numbers.UNSET_INDEX) {
      this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(index, _constants.strings.ARIA_CURRENT);
    }

    var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
    var ariaAttribute = isAriaCurrent ? _constants.strings.ARIA_CURRENT : _constants.strings.ARIA_SELECTED;

    if (this.selectedIndex_ !== _constants.numbers.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
    }

    if (index !== _constants.numbers.UNSET_INDEX) {
      var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
      this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    }
  };
  /**
   * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
   */


  MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
    this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);

    if (this.selectedIndex_ !== _constants.numbers.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex_, _constants.strings.ARIA_CHECKED, 'false');
    }

    this.adapter.setAttributeForElementIndex(index, _constants.strings.ARIA_CHECKED, 'true');
    this.selectedIndex_ = index;
  };

  MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
    for (var i = 0; i < this.adapter.getListItemCount(); i++) {
      var isChecked = false;

      if (index.indexOf(i) >= 0) {
        isChecked = true;
      }

      this.adapter.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
      this.adapter.setAttributeForElementIndex(i, _constants.strings.ARIA_CHECKED, isChecked ? 'true' : 'false');
    }

    this.selectedIndex_ = index;
  };

  MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
    if (this.focusedItemIndex === _constants.numbers.UNSET_INDEX && index !== 0) {
      // If some list item was selected set first list item's tabindex to -1.
      // Generally, tabindex is set to 0 on first list item of list that has no
      // preselected items.
      this.adapter.setAttributeForElementIndex(0, 'tabindex', '-1');
    } else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
      this.adapter.setAttributeForElementIndex(this.focusedItemIndex, 'tabindex', '-1');
    } // Set the previous selection's tabindex to -1. We need this because
    // in selection menus that are not visible, programmatically setting an
    // option will not change focus but will change where tabindex should be 0.


    if (!(this.selectedIndex_ instanceof Array) && this.selectedIndex_ !== index) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', '-1');
    }

    if (index !== _constants.numbers.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(index, 'tabindex', '0');
    }
  };
  /**
   * @return Return true if it is single selectin list, checkbox list or radio list.
   */


  MDCListFoundation.prototype.isSelectableList_ = function () {
    return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
  };

  MDCListFoundation.prototype.setTabindexToFirstSelectedOrFocusedItem = function () {
    var targetIndex = this.focusedItemIndex >= 0 ? this.focusedItemIndex : 0;

    if (this.isSelectableList_()) {
      if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== _constants.numbers.UNSET_INDEX) {
        targetIndex = this.selectedIndex_;
      } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
        targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
          return Math.min(currentIndex, minIndex);
        });
      }
    }

    this.setTabindexAtIndex_(targetIndex);
  };

  MDCListFoundation.prototype.isIndexValid_ = function (index) {
    var _this = this;

    if (index instanceof Array) {
      if (!this.isCheckboxList_) {
        throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
      }

      if (index.length === 0) {
        return true;
      } else {
        return index.some(function (i) {
          return _this.isIndexInRange_(i);
        });
      }
    } else if (typeof index === 'number') {
      if (this.isCheckboxList_) {
        throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
      }

      return this.isIndexInRange_(index) || this.isSingleSelectionList_ && index === _constants.numbers.UNSET_INDEX;
    } else {
      return false;
    }
  };

  MDCListFoundation.prototype.isIndexInRange_ = function (index) {
    var listSize = this.adapter.getListItemCount();
    return index >= 0 && index < listSize;
  };
  /**
   * Sets selected index on user action, toggles checkbox / radio based on toggleCheckbox value.
   * User interaction should not toggle list item(s) when disabled.
   */


  MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
    if (toggleCheckbox === void 0) {
      toggleCheckbox = true;
    }

    if (this.isCheckboxList_) {
      this.toggleCheckboxAtIndex_(index, toggleCheckbox);
    } else {
      this.setSelectedIndex(index);
    }
  };

  MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
    var isChecked = this.adapter.isCheckboxCheckedAtIndex(index);

    if (toggleCheckbox) {
      isChecked = !isChecked;
      this.adapter.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
    }

    this.adapter.setAttributeForElementIndex(index, _constants.strings.ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

    var selectedIndexes = this.selectedIndex_ === _constants.numbers.UNSET_INDEX ? [] : this.selectedIndex_.slice();

    if (isChecked) {
      selectedIndexes.push(index);
    } else {
      selectedIndexes = selectedIndexes.filter(function (i) {
        return i !== index;
      });
    }

    this.selectedIndex_ = selectedIndexes;
  };

  MDCListFoundation.prototype.focusItemAtIndex = function (index) {
    this.adapter.focusItemAtIndex(index);
    this.focusedItemIndex = index;
  };
  /**
   * Given the next desired character from the user, adds it to the typeahead
   * buffer. Then, attempts to find the next option matching the buffer. Wraps
   * around if at the end of options.
   *
   * @param nextChar The next character to add to the prefix buffer.
   * @param startingIndex The index from which to start matching. Only relevant
   *     when starting a new match sequence. To start a new match sequence,
   *     clear the buffer using `clearTypeaheadBuffer`, or wait for the buffer
   *     to clear after a set interval defined in list foundation. Defaults to
   *     the currently focused index.
   * @return The index of the matched item, or -1 if no match.
   */


  MDCListFoundation.prototype.typeaheadMatchItem = function (nextChar, startingIndex, skipFocus) {
    var _this = this;

    if (skipFocus === void 0) {
      skipFocus = false;
    }

    var opts = {
      focusItemAtIndex: function (index) {
        _this.focusItemAtIndex(index);
      },
      focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
      nextChar: nextChar,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      skipFocus: skipFocus,
      isItemAtIndexDisabled: function (index) {
        return _this.adapter.listItemAtIndexHasClass(index, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
      }
    };
    return typeahead.matchItem(opts, this.typeaheadState);
  };
  /**
   * Initializes the MDCListTextAndIndex data structure by indexing the current
   * list items by primary text.
   *
   * @return The primary texts of all the list items sorted by first character.
   */


  MDCListFoundation.prototype.typeaheadInitSortedIndex = function () {
    return typeahead.initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
  };
  /**
   * Clears the typeahead buffer.
   */


  MDCListFoundation.prototype.clearTypeaheadBuffer = function () {
    typeahead.clearBuffer(this.typeaheadState);
  };

  return MDCListFoundation;
}(_foundation.MDCFoundation);

exports.MDCListFoundation = MDCListFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCListFoundation;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","@material/base/foundation":"node_modules/@material/base/foundation.js","@material/dom/keyboard":"node_modules/@material/dom/keyboard.js","./constants":"node_modules/@material/list/constants.js","./typeahead":"node_modules/@material/list/typeahead.js","./events":"node_modules/@material/list/events.js"}],"node_modules/@material/list/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCList = void 0;

var _tslib = require("tslib");

var _component = require("@material/base/component");

var _ponyfill = require("@material/dom/ponyfill");

var _constants = require("./constants");

var _foundation = require("./foundation");

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCList =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCList, _super);

  function MDCList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCList.prototype, "vertical", {
    set: function (value) {
      this.foundation.setVerticalOrientation(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "listElements", {
    get: function () {
      return [].slice.call(this.root.querySelectorAll("." + _constants.cssClasses.LIST_ITEM_CLASS));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "wrapFocus", {
    set: function (value) {
      this.foundation.setWrapFocus(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "typeaheadInProgress", {
    /**
     * @return Whether typeahead is currently matching a user-specified prefix.
     */
    get: function () {
      return this.foundation.isTypeaheadInProgress();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "hasTypeahead", {
    /**
     * Sets whether typeahead functionality is enabled on the list.
     * @param hasTypeahead Whether typeahead is enabled.
     */
    set: function (hasTypeahead) {
      this.foundation.setHasTypeahead(hasTypeahead);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "singleSelection", {
    set: function (isSingleSelectionList) {
      this.foundation.setSingleSelection(isSingleSelectionList);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "selectedIndex", {
    get: function () {
      return this.foundation.getSelectedIndex();
    },
    set: function (index) {
      this.foundation.setSelectedIndex(index);
    },
    enumerable: true,
    configurable: true
  });

  MDCList.attachTo = function (root) {
    return new MDCList(root);
  };

  MDCList.prototype.initialSyncWithDOM = function () {
    this.handleClick_ = this.handleClickEvent_.bind(this);
    this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
    this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
    this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
    this.listen('keydown', this.handleKeydown_);
    this.listen('click', this.handleClick_);
    this.listen('focusin', this.focusInEventListener_);
    this.listen('focusout', this.focusOutEventListener_);
    this.layout();
    this.initializeListType();
  };

  MDCList.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten('click', this.handleClick_);
    this.unlisten('focusin', this.focusInEventListener_);
    this.unlisten('focusout', this.focusOutEventListener_);
  };

  MDCList.prototype.layout = function () {
    var direction = this.root.getAttribute(_constants.strings.ARIA_ORIENTATION);
    this.vertical = direction !== _constants.strings.ARIA_ORIENTATION_HORIZONTAL; // List items need to have at least tabindex=-1 to be focusable.

    [].slice.call(this.root.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (el) {
      el.setAttribute('tabindex', '-1');
    }); // Child button/a elements are not tabbable until the list item is focused.

    [].slice.call(this.root.querySelectorAll(_constants.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (el) {
      return el.setAttribute('tabindex', '-1');
    });
    this.foundation.layout();
  };
  /**
   * Extracts the primary text from a list item.
   * @param item The list item element.
   * @return The primary text in the element.
   */


  MDCList.prototype.getPrimaryText = function (item) {
    var primaryText = item.querySelector("." + _constants.cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS);

    if (primaryText) {
      return primaryText.textContent || '';
    }

    var singleLineText = item.querySelector("." + _constants.cssClasses.LIST_ITEM_TEXT_CLASS);
    return singleLineText && singleLineText.textContent || '';
  };
  /**
   * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
   */


  MDCList.prototype.initializeListType = function () {
    var _this = this;

    var checkboxListItems = this.root.querySelectorAll(_constants.strings.ARIA_ROLE_CHECKBOX_SELECTOR);
    var radioSelectedListItem = this.root.querySelector(_constants.strings.ARIA_CHECKED_RADIO_SELECTOR);

    if (checkboxListItems.length) {
      var preselectedItems = this.root.querySelectorAll(_constants.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
        return _this.listElements.indexOf(listItem);
      });
    } else if (radioSelectedListItem) {
      this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    }
  };
  /**
   * Updates the list item at itemIndex to the desired isEnabled state.
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
    this.foundation.setEnabled(itemIndex, isEnabled);
  };
  /**
   * Given the next desired character from the user, adds it to the typeahead
   * buffer. Then, attempts to find the next option matching the buffer. Wraps
   * around if at the end of options.
   *
   * @param nextChar The next character to add to the prefix buffer.
   * @param startingIndex The index from which to start matching. Defaults to
   *     the currently focused index.
   * @return The index of the matched item.
   */


  MDCList.prototype.typeaheadMatchItem = function (nextChar, startingIndex) {
    return this.foundation.typeaheadMatchItem(nextChar, startingIndex,
    /** skipFocus */
    true);
  };

  MDCList.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClassForElementIndex: function (index, className) {
        var element = _this.listElements[index];

        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: function (index) {
        var element = _this.listElements[index];

        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function (index, attr) {
        return _this.listElements[index].getAttribute(attr);
      },
      getFocusedElementIndex: function () {
        return _this.listElements.indexOf(document.activeElement);
      },
      getListItemCount: function () {
        return _this.listElements.length;
      },
      getPrimaryTextAtIndex: function (index) {
        return _this.getPrimaryText(_this.listElements[index]);
      },
      hasCheckboxAtIndex: function (index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(_constants.strings.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function (index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(_constants.strings.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function (index) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(_constants.strings.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function () {
        return _this.root !== document.activeElement && _this.root.contains(document.activeElement);
      },
      isRootFocused: function () {
        return document.activeElement === _this.root;
      },
      listItemAtIndexHasClass: function (index, className) {
        return _this.listElements[index].classList.contains(className);
      },
      notifyAction: function (index) {
        _this.emit(_constants.strings.ACTION_EVENT, {
          index: index
        },
        /** shouldBubble */
        true);
      },
      removeClassForElementIndex: function (index, className) {
        var element = _this.listElements[index];

        if (element) {
          element.classList.remove(className);
        }
      },
      setAttributeForElementIndex: function (index, attr, value) {
        var element = _this.listElements[index];

        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(_constants.strings.CHECKBOX_RADIO_SELECTOR);
        toggleEl.checked = isChecked;
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
        var element = _this.listElements[listItemIndex];
        var listItemChildren = [].slice.call(element.querySelectorAll(_constants.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach(function (el) {
          return el.setAttribute('tabindex', tabIndexValue);
        });
      }
    };
    return new _foundation.MDCListFoundation(adapter);
  };
  /**
   * Used to figure out which list item this event is targetting. Or returns -1 if
   * there is no list item
   */


  MDCList.prototype.getListItemIndex_ = function (evt) {
    var eventTarget = evt.target;
    var nearestParent = (0, _ponyfill.closest)(eventTarget, "." + _constants.cssClasses.LIST_ITEM_CLASS + ", ." + _constants.cssClasses.ROOT); // Get the index of the element if it is a list item.

    if (nearestParent && (0, _ponyfill.matches)(nearestParent, "." + _constants.cssClasses.LIST_ITEM_CLASS)) {
      return this.listElements.indexOf(nearestParent);
    }

    return -1;
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusInEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation.handleFocusIn(evt, index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusOutEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation.handleFocusOut(evt, index);
  };
  /**
   * Used to figure out which element was focused when keydown event occurred before sending the event to the
   * foundation.
   */


  MDCList.prototype.handleKeydownEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target;
    this.foundation.handleKeydown(evt, target.classList.contains(_constants.cssClasses.LIST_ITEM_CLASS), index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleClickEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target; // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

    var toggleCheckbox = !(0, _ponyfill.matches)(target, _constants.strings.CHECKBOX_RADIO_SELECTOR);
    this.foundation.handleClick(index, toggleCheckbox);
  };

  return MDCList;
}(_component.MDCComponent);

exports.MDCList = MDCList;
},{"tslib":"node_modules/tslib/tslib.es6.js","@material/base/component":"node_modules/@material/base/component.js","@material/dom/ponyfill":"node_modules/@material/dom/ponyfill.js","./constants":"node_modules/@material/list/constants.js","./foundation":"node_modules/@material/list/foundation.js"}],"node_modules/@material/drawer/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ANIMATE: 'mdc-drawer--animate',
  CLOSING: 'mdc-drawer--closing',
  DISMISSIBLE: 'mdc-drawer--dismissible',
  MODAL: 'mdc-drawer--modal',
  OPEN: 'mdc-drawer--open',
  OPENING: 'mdc-drawer--opening',
  ROOT: 'mdc-drawer'
};
exports.cssClasses = cssClasses;
var strings = {
  APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
  CLOSE_EVENT: 'MDCDrawer:closed',
  OPEN_EVENT: 'MDCDrawer:opened',
  SCRIM_SELECTOR: '.mdc-drawer-scrim'
};
exports.strings = strings;
},{}],"node_modules/@material/drawer/dismissible/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCDismissibleDrawerFoundation = void 0;

var _tslib = require("tslib");

var _foundation = require("@material/base/foundation");

var _constants = require("../constants");

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCDismissibleDrawerFoundation =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCDismissibleDrawerFoundation, _super);

  function MDCDismissibleDrawerFoundation(adapter) {
    var _this = _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, MDCDismissibleDrawerFoundation.defaultAdapter), adapter)) || this;

    _this.animationFrame_ = 0;
    _this.animationTimer_ = 0;
    return _this;
  }

  Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        elementHasClass: function () {
          return false;
        },
        notifyClose: function () {
          return undefined;
        },
        notifyOpen: function () {
          return undefined;
        },
        saveFocus: function () {
          return undefined;
        },
        restoreFocus: function () {
          return undefined;
        },
        focusActiveNavigationItem: function () {
          return undefined;
        },
        trapFocus: function () {
          return undefined;
        },
        releaseFocus: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCDismissibleDrawerFoundation.prototype.destroy = function () {
    if (this.animationFrame_) {
      cancelAnimationFrame(this.animationFrame_);
    }

    if (this.animationTimer_) {
      clearTimeout(this.animationTimer_);
    }
  };
  /**
   * Opens the drawer from the closed state.
   */


  MDCDismissibleDrawerFoundation.prototype.open = function () {
    var _this = this;

    if (this.isOpen() || this.isOpening() || this.isClosing()) {
      return;
    }

    this.adapter.addClass(_constants.cssClasses.OPEN);
    this.adapter.addClass(_constants.cssClasses.ANIMATE); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame_(function () {
      _this.adapter.addClass(_constants.cssClasses.OPENING);
    });
    this.adapter.saveFocus();
  };
  /**
   * Closes the drawer from the open state.
   */


  MDCDismissibleDrawerFoundation.prototype.close = function () {
    if (!this.isOpen() || this.isOpening() || this.isClosing()) {
      return;
    }

    this.adapter.addClass(_constants.cssClasses.CLOSING);
  };
  /**
   * Returns true if the drawer is in the open position.
   * @return true if drawer is in open state.
   */


  MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
    return this.adapter.hasClass(_constants.cssClasses.OPEN);
  };
  /**
   * Returns true if the drawer is animating open.
   * @return true if drawer is animating open.
   */


  MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
    return this.adapter.hasClass(_constants.cssClasses.OPENING) || this.adapter.hasClass(_constants.cssClasses.ANIMATE);
  };
  /**
   * Returns true if the drawer is animating closed.
   * @return true if drawer is animating closed.
   */


  MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
    return this.adapter.hasClass(_constants.cssClasses.CLOSING);
  };
  /**
   * Keydown handler to close drawer when key is escape.
   */


  MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
    var keyCode = evt.keyCode,
        key = evt.key;
    var isEscape = key === 'Escape' || keyCode === 27;

    if (isEscape) {
      this.close();
    }
  };
  /**
   * Handles the `transitionend` event when the drawer finishes opening/closing.
   */


  MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
    var OPENING = _constants.cssClasses.OPENING,
        CLOSING = _constants.cssClasses.CLOSING,
        OPEN = _constants.cssClasses.OPEN,
        ANIMATE = _constants.cssClasses.ANIMATE,
        ROOT = _constants.cssClasses.ROOT; // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.

    var isRootElement = this.isElement_(evt.target) && this.adapter.elementHasClass(evt.target, ROOT);

    if (!isRootElement) {
      return;
    }

    if (this.isClosing()) {
      this.adapter.removeClass(OPEN);
      this.closed_();
      this.adapter.restoreFocus();
      this.adapter.notifyClose();
    } else {
      this.adapter.focusActiveNavigationItem();
      this.opened_();
      this.adapter.notifyOpen();
    }

    this.adapter.removeClass(ANIMATE);
    this.adapter.removeClass(OPENING);
    this.adapter.removeClass(CLOSING);
  };
  /**
   * Extension point for when drawer finishes open animation.
   */


  MDCDismissibleDrawerFoundation.prototype.opened_ = function () {}; // tslint:disable-line:no-empty

  /**
   * Extension point for when drawer finishes close animation.
   */


  MDCDismissibleDrawerFoundation.prototype.closed_ = function () {}; // tslint:disable-line:no-empty

  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = requestAnimationFrame(function () {
      _this.animationFrame_ = 0;
      clearTimeout(_this.animationTimer_);
      _this.animationTimer_ = setTimeout(callback, 0);
    });
  };

  MDCDismissibleDrawerFoundation.prototype.isElement_ = function (element) {
    // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
    return Boolean(element.classList);
  };

  return MDCDismissibleDrawerFoundation;
}(_foundation.MDCFoundation);

exports.MDCDismissibleDrawerFoundation = MDCDismissibleDrawerFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCDismissibleDrawerFoundation;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","@material/base/foundation":"node_modules/@material/base/foundation.js","../constants":"node_modules/@material/drawer/constants.js"}],"node_modules/@material/drawer/modal/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCModalDrawerFoundation = void 0;

var _tslib = require("tslib");

var _foundation = require("../dismissible/foundation");

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* istanbul ignore next: subclass is not a branch statement */
var MDCModalDrawerFoundation =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCModalDrawerFoundation, _super);

  function MDCModalDrawerFoundation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Handles click event on scrim.
   */


  MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
    this.close();
  };
  /**
   * Called when drawer finishes open animation.
   */


  MDCModalDrawerFoundation.prototype.opened_ = function () {
    this.adapter.trapFocus();
  };
  /**
   * Called when drawer finishes close animation.
   */


  MDCModalDrawerFoundation.prototype.closed_ = function () {
    this.adapter.releaseFocus();
  };

  return MDCModalDrawerFoundation;
}(_foundation.MDCDismissibleDrawerFoundation);

exports.MDCModalDrawerFoundation = MDCModalDrawerFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCModalDrawerFoundation;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","../dismissible/foundation":"node_modules/@material/drawer/dismissible/foundation.js"}],"node_modules/@material/drawer/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCDrawer = void 0;

var _tslib = require("tslib");

var _component = require("@material/base/component");

var _focusTrap = require("@material/dom/focus-trap");

var _component2 = require("@material/list/component");

var _foundation = require("@material/list/foundation");

var _foundation2 = require("./dismissible/foundation");

var _foundation3 = require("./modal/foundation");

var util = _interopRequireWildcard(require("./util"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = _foundation2.MDCDismissibleDrawerFoundation.cssClasses,
    strings = _foundation2.MDCDismissibleDrawerFoundation.strings;
/**
 * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
 * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
 */

var MDCDrawer =
/** @class */
function (_super) {
  (0, _tslib.__extends)(MDCDrawer, _super);

  function MDCDrawer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCDrawer.attachTo = function (root) {
    return new MDCDrawer(root);
  };

  Object.defineProperty(MDCDrawer.prototype, "open", {
    /**
     * @return boolean Proxies to the foundation's `open`/`close` methods.
     * Also returns true if drawer is in the open position.
     */
    get: function () {
      return this.foundation.isOpen();
    },

    /**
     * Toggles the drawer open and closed.
     */
    set: function (isOpen) {
      if (isOpen) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDrawer.prototype, "list", {
    get: function () {
      return this.list_;
    },
    enumerable: true,
    configurable: true
  });

  MDCDrawer.prototype.initialize = function (focusTrapFactory, listFactory) {
    if (focusTrapFactory === void 0) {
      focusTrapFactory = function (el) {
        return new _focusTrap.FocusTrap(el);
      };
    }

    if (listFactory === void 0) {
      listFactory = function (el) {
        return new _component2.MDCList(el);
      };
    }

    var listEl = this.root.querySelector("." + _foundation.MDCListFoundation.cssClasses.ROOT);

    if (listEl) {
      this.list_ = listFactory(listEl);
      this.list_.wrapFocus = true;
    }

    this.focusTrapFactory_ = focusTrapFactory;
  };

  MDCDrawer.prototype.initialSyncWithDOM = function () {
    var _this = this;

    var MODAL = cssClasses.MODAL;
    var SCRIM_SELECTOR = strings.SCRIM_SELECTOR;
    this.scrim_ = this.root.parentNode.querySelector(SCRIM_SELECTOR);

    if (this.scrim_ && this.root.classList.contains(MODAL)) {
      this.handleScrimClick_ = function () {
        return _this.foundation.handleScrimClick();
      };

      this.scrim_.addEventListener('click', this.handleScrimClick_);
      this.focusTrap_ = util.createFocusTrapInstance(this.root, this.focusTrapFactory_);
    }

    this.handleKeydown_ = function (evt) {
      return _this.foundation.handleKeydown(evt);
    };

    this.handleTransitionEnd_ = function (evt) {
      return _this.foundation.handleTransitionEnd(evt);
    };

    this.listen('keydown', this.handleKeydown_);
    this.listen('transitionend', this.handleTransitionEnd_);
  };

  MDCDrawer.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten('transitionend', this.handleTransitionEnd_);

    if (this.list_) {
      this.list_.destroy();
    }

    var MODAL = cssClasses.MODAL;

    if (this.scrim_ && this.handleScrimClick_ && this.root.classList.contains(MODAL)) {
      this.scrim_.removeEventListener('click', this.handleScrimClick_); // Ensure drawer is closed to hide scrim and release focus

      this.open = false;
    }
  };

  MDCDrawer.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      hasClass: function (className) {
        return _this.root.classList.contains(className);
      },
      elementHasClass: function (element, className) {
        return element.classList.contains(className);
      },
      saveFocus: function () {
        return _this.previousFocus_ = document.activeElement;
      },
      restoreFocus: function () {
        var previousFocus = _this.previousFocus_;

        if (previousFocus && previousFocus.focus && _this.root.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: function () {
        var activeNavItemEl = _this.root.querySelector("." + _foundation.MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS);

        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: function () {
        return _this.emit(strings.CLOSE_EVENT, {}, true
        /* shouldBubble */
        );
      },
      notifyOpen: function () {
        return _this.emit(strings.OPEN_EVENT, {}, true
        /* shouldBubble */
        );
      },
      trapFocus: function () {
        return _this.focusTrap_.trapFocus();
      },
      releaseFocus: function () {
        return _this.focusTrap_.releaseFocus();
      }
    }; // tslint:enable:object-literal-sort-keys

    var DISMISSIBLE = cssClasses.DISMISSIBLE,
        MODAL = cssClasses.MODAL;

    if (this.root.classList.contains(DISMISSIBLE)) {
      return new _foundation2.MDCDismissibleDrawerFoundation(adapter);
    } else if (this.root.classList.contains(MODAL)) {
      return new _foundation3.MDCModalDrawerFoundation(adapter);
    } else {
      throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
    }
  };

  return MDCDrawer;
}(_component.MDCComponent);

exports.MDCDrawer = MDCDrawer;
},{"tslib":"node_modules/tslib/tslib.es6.js","@material/base/component":"node_modules/@material/base/component.js","@material/dom/focus-trap":"node_modules/@material/dom/focus-trap.js","@material/list/component":"node_modules/@material/list/component.js","@material/list/foundation":"node_modules/@material/list/foundation.js","./dismissible/foundation":"node_modules/@material/drawer/dismissible/foundation.js","./modal/foundation":"node_modules/@material/drawer/modal/foundation.js","./util":"node_modules/@material/drawer/util.js"}],"node_modules/@material/drawer/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  util: true
};
exports.util = void 0;

var util = _interopRequireWildcard(require("./util"));

exports.util = util;

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _component[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _foundation = require("./dismissible/foundation");

Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _foundation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});

var _foundation2 = require("./modal/foundation");

Object.keys(_foundation2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _foundation2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation2[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./util":"node_modules/@material/drawer/util.js","./component":"node_modules/@material/drawer/component.js","./constants":"node_modules/@material/drawer/constants.js","./dismissible/foundation":"node_modules/@material/drawer/dismissible/foundation.js","./modal/foundation":"node_modules/@material/drawer/modal/foundation.js"}],"node_modules/@material/auto-init/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = void 0;

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  AUTO_INIT_ATTR: 'data-mdc-auto-init',
  AUTO_INIT_STATE_ATTR: 'data-mdc-auto-init-state',
  INITIALIZED_STATE: 'initialized'
};
exports.strings = strings;
},{}],"node_modules/@material/auto-init/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdcAutoInit = mdcAutoInit;
exports.default = void 0;

var _tslib = require("tslib");

var _constants = require("./constants");

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var AUTO_INIT_ATTR = _constants.strings.AUTO_INIT_ATTR,
    AUTO_INIT_STATE_ATTR = _constants.strings.AUTO_INIT_STATE_ATTR,
    INITIALIZED_STATE = _constants.strings.INITIALIZED_STATE;
var registry = {};
var CONSOLE_WARN = console.warn.bind(console); // tslint:disable-line:no-console

function emit(evtType, evtData, shouldBubble) {
  if (shouldBubble === void 0) {
    shouldBubble = false;
  }

  var evt;

  if (typeof CustomEvent === 'function') {
    evt = new CustomEvent(evtType, {
      bubbles: shouldBubble,
      detail: evtData
    });
  } else {
    evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(evtType, shouldBubble, false, evtData);
  }

  document.dispatchEvent(evt);
}
/* istanbul ignore next: optional argument is not a branch statement */

/**
 * Auto-initializes all MDC components on a page.
 */


function mdcAutoInit(root) {
  var e_1, _a;

  if (root === void 0) {
    root = document;
  }

  var components = [];
  var nodes = [].slice.call(root.querySelectorAll("[" + AUTO_INIT_ATTR + "]"));
  nodes = nodes.filter(function (node) {
    return node.getAttribute(AUTO_INIT_STATE_ATTR) !== INITIALIZED_STATE;
  });

  try {
    for (var nodes_1 = (0, _tslib.__values)(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
      var node = nodes_1_1.value;
      var ctorName = node.getAttribute(AUTO_INIT_ATTR);

      if (!ctorName) {
        throw new Error('(mdc-auto-init) Constructor name must be given.');
      }

      var Constructor = registry[ctorName]; // tslint:disable-line:variable-name

      if (typeof Constructor !== 'function') {
        throw new Error("(mdc-auto-init) Could not find constructor in registry for " + ctorName);
      } // TODO: Should we make an eslint rule for an attachTo() static method?
      // See https://github.com/Microsoft/TypeScript/issues/14600 for discussion of static interface support in TS


      var component = Constructor.attachTo(node);
      Object.defineProperty(node, ctorName, {
        configurable: true,
        enumerable: false,
        value: component,
        writable: false
      });
      components.push(component);
      node.setAttribute(AUTO_INIT_STATE_ATTR, INITIALIZED_STATE);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  emit('MDCAutoInit:End', {});
  return components;
} // Constructor is PascalCased because it is a direct reference to a class, rather than an instance of a class.
// tslint:disable-next-line:variable-name


mdcAutoInit.register = function (componentName, Constructor, warn) {
  if (warn === void 0) {
    warn = CONSOLE_WARN;
  }

  if (typeof Constructor !== 'function') {
    throw new Error("(mdc-auto-init) Invalid Constructor value: " + Constructor + ". Expected function.");
  }

  var registryValue = registry[componentName];

  if (registryValue) {
    warn("(mdc-auto-init) Overriding registration for " + componentName + " with " + Constructor + ". Was: " + registryValue);
  }

  registry[componentName] = Constructor;
};

mdcAutoInit.deregister = function (componentName) {
  delete registry[componentName];
};
/** @nocollapse */


mdcAutoInit.deregisterAll = function () {
  var keys = Object.keys(registry);
  keys.forEach(this.deregister, this);
}; // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.


var _default = mdcAutoInit;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","./constants":"node_modules/@material/auto-init/constants.js"}],"site/js/import.js":[function(require,module,exports) {
"use strict";

require("../scss/root.scss");

var _topAppBar = require("@material/top-app-bar");

var _drawer = require("@material/drawer");

var _autoInit = require("@material/auto-init");

// Instantiation
var listEl = document.querySelector('.mdc-drawer .mdc-list');
var topAppBarElement = document.querySelector('.mdc-top-app-bar');
var topAppBar = new _topAppBar.MDCTopAppBar(topAppBarElement);

var drawer = _drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer')); //Add event listeners


listEl.addEventListener('click', function (event) {
  goto(event);
  drawer.open = !drawer.open;
}); //If drawr is open close it

topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', function () {
  drawer.open = !drawer.open;
});
},{"../scss/root.scss":"site/scss/root.scss","@material/top-app-bar":"node_modules/@material/top-app-bar/index.js","@material/drawer":"node_modules/@material/drawer/index.js","@material/auto-init":"node_modules/@material/auto-init/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40319" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","site/js/import.js"], null)
//# sourceMappingURL=/import.82b23430.js.map