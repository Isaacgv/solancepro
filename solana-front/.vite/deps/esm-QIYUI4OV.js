import {
  require_elliptic,
  require_isarray
} from "./chunk-RRKR2IFR.js";
import "./chunk-5XNC3COW.js";
import {
  require_crypto
} from "./chunk-AECE7TE2.js";
import {
  require_events
} from "./chunk-OFLUJM4P.js";
import {
  PublicKey,
  Transaction,
  init_index_browser_esm,
  require_base64_js,
  require_ieee754
} from "./chunk-DYENQPX7.js";
import {
  __commonJS,
  __esm,
  __export,
  __reExport,
  __require,
  __toCommonJS,
  __toESM
} from "./chunk-256EKJAK.js";

// node_modules/@walletconnect/window-getters/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@walletconnect/window-getters/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
    function getFromWindow3(name2) {
      let res = void 0;
      if (typeof window !== "undefined" && typeof window[name2] !== "undefined") {
        res = window[name2];
      }
      return res;
    }
    exports.getFromWindow = getFromWindow3;
    function getFromWindowOrThrow3(name2) {
      const res = getFromWindow3(name2);
      if (!res) {
        throw new Error(`${name2} is not defined in Window`);
      }
      return res;
    }
    exports.getFromWindowOrThrow = getFromWindowOrThrow3;
    function getDocumentOrThrow3() {
      return getFromWindowOrThrow3("document");
    }
    exports.getDocumentOrThrow = getDocumentOrThrow3;
    function getDocument3() {
      return getFromWindow3("document");
    }
    exports.getDocument = getDocument3;
    function getNavigatorOrThrow3() {
      return getFromWindowOrThrow3("navigator");
    }
    exports.getNavigatorOrThrow = getNavigatorOrThrow3;
    function getNavigator3() {
      return getFromWindow3("navigator");
    }
    exports.getNavigator = getNavigator3;
    function getLocationOrThrow3() {
      return getFromWindowOrThrow3("location");
    }
    exports.getLocationOrThrow = getLocationOrThrow3;
    function getLocation3() {
      return getFromWindow3("location");
    }
    exports.getLocation = getLocation3;
    function getCryptoOrThrow3() {
      return getFromWindowOrThrow3("crypto");
    }
    exports.getCryptoOrThrow = getCryptoOrThrow3;
    function getCrypto3() {
      return getFromWindow3("crypto");
    }
    exports.getCrypto = getCrypto3;
    function getLocalStorageOrThrow3() {
      return getFromWindowOrThrow3("localStorage");
    }
    exports.getLocalStorageOrThrow = getLocalStorageOrThrow3;
    function getLocalStorage3() {
      return getFromWindow3("localStorage");
    }
    exports.getLocalStorage = getLocalStorage3;
  }
});

// node_modules/@walletconnect/window-metadata/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@walletconnect/window-metadata/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWindowMetadata = void 0;
    var window_getters_1 = require_cjs();
    function getWindowMetadata2() {
      let doc;
      let loc;
      try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
      } catch (e4) {
        return null;
      }
      function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons2 = [];
        for (let i7 = 0; i7 < links.length; i7++) {
          const link = links[i7];
          const rel = link.getAttribute("rel");
          if (rel) {
            if (rel.toLowerCase().indexOf("icon") > -1) {
              const href = link.getAttribute("href");
              if (href) {
                if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                  let absoluteHref = loc.protocol + "//" + loc.host;
                  if (href.indexOf("/") === 0) {
                    absoluteHref += href;
                  } else {
                    const path = loc.pathname.split("/");
                    path.pop();
                    const finalPath = path.join("/");
                    absoluteHref += finalPath + "/" + href;
                  }
                  icons2.push(absoluteHref);
                } else if (href.indexOf("//") === 0) {
                  const absoluteUrl = loc.protocol + href;
                  icons2.push(absoluteUrl);
                } else {
                  icons2.push(href);
                }
              }
            }
          }
        }
        return icons2;
      }
      function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i7 = 0; i7 < metaTags.length; i7++) {
          const tag = metaTags[i7];
          const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
            if (attr) {
              return args.includes(attr);
            }
            return false;
          });
          if (attributes.length && attributes) {
            const content = tag.getAttribute("content");
            if (content) {
              return content;
            }
          }
        }
        return "";
      }
      function getName() {
        let name3 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name3) {
          name3 = doc.title;
        }
        return name3;
      }
      function getDescription() {
        const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description2;
      }
      const name2 = getName();
      const description = getDescription();
      const url = loc.origin;
      const icons = getIcons();
      const meta = {
        description,
        url,
        icons,
        name: name2
      };
      return meta;
    }
    exports.getWindowMetadata = getWindowMetadata2;
  }
});

// node_modules/detect-browser/es/index.js
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua2) {
  return ua2 !== "" && userAgentRules.reduce(function(matched, _a2) {
    var browser = _a2[0], regex = _a2[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua2);
    return !!uaMatch && [browser, uaMatch];
  }, false);
}
function parseUserAgent(ua2) {
  var matchedRule = matchUserAgent(ua2);
  if (!matchedRule) {
    return null;
  }
  var name2 = matchedRule[0], match = matchedRule[1];
  if (name2 === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
    }
  } else {
    versionParts = [];
  }
  var version2 = versionParts.join(".");
  var os = detectOS(ua2);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua2);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name2, version2, os, searchBotMatch[1]);
  }
  return new BrowserInfo(name2, version2, os);
}
function detectOS(ua2) {
  for (var ii2 = 0, count = operatingSystemRules.length; ii2 < count; ii2++) {
    var _a2 = operatingSystemRules[ii2], os = _a2[0], regex = _a2[1];
    var match = regex.exec(ua2);
    if (match) {
      return os;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode3 = typeof process !== "undefined" && process.version;
  return isNode3 ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii2 = 0; ii2 < count; ii2++) {
    output.push("0");
  }
  return output;
}
var __spreadArrays, BrowserInfo, NodeInfo, SearchBotDeviceInfo, BotInfo, ReactNativeInfo, SEARCHBOX_UA_REGEX, SEARCHBOT_OS_REGEX, REQUIRED_VERSION_PARTS, userAgentRules, operatingSystemRules;
var init_es = __esm({
  "node_modules/detect-browser/es/index.js"() {
    __spreadArrays = function() {
      for (var s5 = 0, i7 = 0, il = arguments.length; i7 < il; i7++) s5 += arguments[i7].length;
      for (var r5 = Array(s5), k5 = 0, i7 = 0; i7 < il; i7++)
        for (var a6 = arguments[i7], j6 = 0, jl = a6.length; j6 < jl; j6++, k5++)
          r5[k5] = a6[j6];
      return r5;
    };
    BrowserInfo = /** @class */
    /* @__PURE__ */ function() {
      function BrowserInfo3(name2, version2, os) {
        this.name = name2;
        this.version = version2;
        this.os = os;
        this.type = "browser";
      }
      return BrowserInfo3;
    }();
    NodeInfo = /** @class */
    /* @__PURE__ */ function() {
      function NodeInfo3(version2) {
        this.version = version2;
        this.type = "node";
        this.name = "node";
        this.os = process.platform;
      }
      return NodeInfo3;
    }();
    SearchBotDeviceInfo = /** @class */
    /* @__PURE__ */ function() {
      function SearchBotDeviceInfo3(name2, version2, os, bot) {
        this.name = name2;
        this.version = version2;
        this.os = os;
        this.bot = bot;
        this.type = "bot-device";
      }
      return SearchBotDeviceInfo3;
    }();
    BotInfo = /** @class */
    /* @__PURE__ */ function() {
      function BotInfo3() {
        this.type = "bot";
        this.bot = true;
        this.name = "bot";
        this.version = null;
        this.os = null;
      }
      return BotInfo3;
    }();
    ReactNativeInfo = /** @class */
    /* @__PURE__ */ function() {
      function ReactNativeInfo3() {
        this.type = "react-native";
        this.name = "react-native";
        this.version = null;
        this.os = null;
      }
      return ReactNativeInfo3;
    }();
    SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
    SEARCHBOT_OS_REGEX = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
    REQUIRED_VERSION_PARTS = 3;
    userAgentRules = [
      ["aol", /AOLShield\/([0-9\._]+)/],
      ["edge", /Edge\/([0-9\._]+)/],
      ["edge-ios", /EdgiOS\/([0-9\._]+)/],
      ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
      ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
      ["samsung", /SamsungBrowser\/([0-9\.]+)/],
      ["silk", /\bSilk\/([0-9._-]+)\b/],
      ["miui", /MiuiBrowser\/([0-9\.]+)$/],
      ["beaker", /BeakerBrowser\/([0-9\.]+)/],
      ["edge-chromium", /EdgA?\/([0-9\.]+)/],
      [
        "chromium-webview",
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
      ],
      ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
      ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
      ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
      ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
      ["fxios", /FxiOS\/([0-9\.]+)/],
      ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
      ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
      ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
      ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
      ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
      ["ie", /MSIE\s(7\.0)/],
      ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
      ["android", /Android\s([0-9\.]+)/],
      ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
      ["safari", /Version\/([0-9\._]+).*Safari/],
      ["facebook", /FBAV\/([0-9\.]+)/],
      ["instagram", /Instagram\s([0-9\.]+)/],
      ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
      ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
      ["searchbot", SEARCHBOX_UA_REGEX]
    ];
    operatingSystemRules = [
      ["iOS", /iP(hone|od|ad)/],
      ["Android OS", /Android/],
      ["BlackBerry OS", /BlackBerry|BB10/],
      ["Windows Mobile", /IEMobile/],
      ["Amazon OS", /Kindle/],
      ["Windows 3.11", /Win16/],
      ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
      ["Windows 98", /(Windows 98)|(Win98)/],
      ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
      ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
      ["Windows Server 2003", /(Windows NT 5.2)/],
      ["Windows Vista", /(Windows NT 6.0)/],
      ["Windows 7", /(Windows NT 6.1)/],
      ["Windows 8", /(Windows NT 6.2)/],
      ["Windows 8.1", /(Windows NT 6.3)/],
      ["Windows 10", /(Windows NT 10.0)/],
      ["Windows ME", /Windows ME/],
      ["Open BSD", /OpenBSD/],
      ["Sun OS", /SunOS/],
      ["Chrome OS", /CrOS/],
      ["Linux", /(Linux)|(X11)/],
      ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
      ["QNX", /QNX/],
      ["BeOS", /BeOS/],
      ["OS/2", /OS\/2/]
    ];
  }
});

// node_modules/@walletconnect/browser-utils/dist/esm/browser.js
function detectEnv(userAgent) {
  return detect(userAgent);
}
function detectOS2() {
  const env = detectEnv();
  return env && env.os ? env.os : void 0;
}
function isAndroid() {
  const os = detectOS2();
  return os ? os.toLowerCase().includes("android") : false;
}
function isIOS() {
  const os = detectOS2();
  return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}
function isMobile() {
  const os = detectOS2();
  return os ? isAndroid() || isIOS() : false;
}
function isNode() {
  const env = detectEnv();
  const result = env && env.name ? env.name.toLowerCase() === "node" : false;
  return result;
}
function isBrowser() {
  const result = !isNode() && !!getNavigator2();
  return result;
}
function getClientMeta() {
  return windowMetadata.getWindowMetadata();
}
var windowMetadata, windowGetters, getFromWindow2, getFromWindowOrThrow2, getDocumentOrThrow2, getDocument2, getNavigatorOrThrow2, getNavigator2, getLocationOrThrow2, getLocation2, getCryptoOrThrow2, getCrypto2, getLocalStorageOrThrow2, getLocalStorage2;
var init_browser = __esm({
  "node_modules/@walletconnect/browser-utils/dist/esm/browser.js"() {
    windowMetadata = __toESM(require_cjs2());
    windowGetters = __toESM(require_cjs());
    init_es();
    getFromWindow2 = windowGetters.getFromWindow;
    getFromWindowOrThrow2 = windowGetters.getFromWindowOrThrow;
    getDocumentOrThrow2 = windowGetters.getDocumentOrThrow;
    getDocument2 = windowGetters.getDocument;
    getNavigatorOrThrow2 = windowGetters.getNavigatorOrThrow;
    getNavigator2 = windowGetters.getNavigator;
    getLocationOrThrow2 = windowGetters.getLocationOrThrow;
    getLocation2 = windowGetters.getLocation;
    getCryptoOrThrow2 = windowGetters.getCryptoOrThrow;
    getCrypto2 = windowGetters.getCrypto;
    getLocalStorageOrThrow2 = windowGetters.getLocalStorageOrThrow;
    getLocalStorage2 = windowGetters.getLocalStorage;
  }
});

// node_modules/@walletconnect/safe-json/dist/esm/index.js
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSON.parse(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSON.stringify(value);
}
var init_esm = __esm({
  "node_modules/@walletconnect/safe-json/dist/esm/index.js"() {
  }
});

// node_modules/@walletconnect/browser-utils/dist/esm/json.js
var safeJsonParse2, safeJsonStringify2;
var init_json = __esm({
  "node_modules/@walletconnect/browser-utils/dist/esm/json.js"() {
    init_esm();
    safeJsonParse2 = safeJsonParse;
    safeJsonStringify2 = safeJsonStringify;
  }
});

// node_modules/@walletconnect/browser-utils/dist/esm/local.js
function setLocal(key, data) {
  const raw = safeJsonStringify2(data);
  const local = getLocalStorage2();
  if (local) {
    local.setItem(key, raw);
  }
}
function getLocal(key) {
  let data = null;
  let raw = null;
  const local = getLocalStorage2();
  if (local) {
    raw = local.getItem(key);
  }
  data = raw ? safeJsonParse2(raw) : raw;
  return data;
}
function removeLocal(key) {
  const local = getLocalStorage2();
  if (local) {
    local.removeItem(key);
  }
}
var init_local = __esm({
  "node_modules/@walletconnect/browser-utils/dist/esm/local.js"() {
    init_json();
    init_browser();
  }
});

// node_modules/@walletconnect/browser-utils/dist/esm/mobile.js
function formatIOSMobile(uri, entry) {
  const encodedUri = encodeURIComponent(uri);
  return entry.universalLink ? `${entry.universalLink}/wc?uri=${encodedUri}` : entry.deepLink ? `${entry.deepLink}${entry.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}` : "";
}
function saveMobileLinkInfo(data) {
  const focusUri = data.href.split("?")[0];
  setLocal(mobileLinkChoiceKey, Object.assign(Object.assign({}, data), { href: focusUri }));
}
function getMobileRegistryEntry(registry, name2) {
  return registry.filter((entry) => entry.name.toLowerCase().includes(name2.toLowerCase()))[0];
}
function getMobileLinkRegistry(registry, whitelist) {
  let links = registry;
  if (whitelist) {
    links = whitelist.map((name2) => getMobileRegistryEntry(registry, name2)).filter(Boolean);
  }
  return links;
}
var mobileLinkChoiceKey;
var init_mobile = __esm({
  "node_modules/@walletconnect/browser-utils/dist/esm/mobile.js"() {
    init_local();
    mobileLinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE";
  }
});

// node_modules/@walletconnect/browser-utils/dist/esm/registry.js
function getWalletRegistryUrl() {
  return API_URL + "/api/v2/wallets";
}
function getDappRegistryUrl() {
  return API_URL + "/api/v2/dapps";
}
function formatMobileRegistryEntry(entry, platform = "mobile") {
  var _a2;
  return {
    name: entry.name || "",
    shortName: entry.metadata.shortName || "",
    color: entry.metadata.colors.primary || "",
    logo: (_a2 = entry.image_url.sm) !== null && _a2 !== void 0 ? _a2 : "",
    universalLink: entry[platform].universal || "",
    deepLink: entry[platform].native || ""
  };
}
function formatMobileRegistry(registry, platform = "mobile") {
  return Object.values(registry).filter((entry) => !!entry[platform].universal || !!entry[platform].native).map((entry) => formatMobileRegistryEntry(entry, platform));
}
var API_URL;
var init_registry = __esm({
  "node_modules/@walletconnect/browser-utils/dist/esm/registry.js"() {
    API_URL = "https://registry.walletconnect.com";
  }
});

// node_modules/@walletconnect/browser-utils/dist/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  detectEnv: () => detectEnv,
  detectOS: () => detectOS2,
  formatIOSMobile: () => formatIOSMobile,
  formatMobileRegistry: () => formatMobileRegistry,
  formatMobileRegistryEntry: () => formatMobileRegistryEntry,
  getClientMeta: () => getClientMeta,
  getCrypto: () => getCrypto2,
  getCryptoOrThrow: () => getCryptoOrThrow2,
  getDappRegistryUrl: () => getDappRegistryUrl,
  getDocument: () => getDocument2,
  getDocumentOrThrow: () => getDocumentOrThrow2,
  getFromWindow: () => getFromWindow2,
  getFromWindowOrThrow: () => getFromWindowOrThrow2,
  getLocal: () => getLocal,
  getLocalStorage: () => getLocalStorage2,
  getLocalStorageOrThrow: () => getLocalStorageOrThrow2,
  getLocation: () => getLocation2,
  getLocationOrThrow: () => getLocationOrThrow2,
  getMobileLinkRegistry: () => getMobileLinkRegistry,
  getMobileRegistryEntry: () => getMobileRegistryEntry,
  getNavigator: () => getNavigator2,
  getNavigatorOrThrow: () => getNavigatorOrThrow2,
  getWalletRegistryUrl: () => getWalletRegistryUrl,
  isAndroid: () => isAndroid,
  isBrowser: () => isBrowser,
  isIOS: () => isIOS,
  isMobile: () => isMobile,
  isNode: () => isNode,
  mobileLinkChoiceKey: () => mobileLinkChoiceKey,
  removeLocal: () => removeLocal,
  safeJsonParse: () => safeJsonParse2,
  safeJsonStringify: () => safeJsonStringify2,
  saveMobileLinkInfo: () => saveMobileLinkInfo,
  setLocal: () => setLocal
});
var init_esm2 = __esm({
  "node_modules/@walletconnect/browser-utils/dist/esm/index.js"() {
    init_browser();
    init_json();
    init_local();
    init_mobile();
    init_registry();
  }
});

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/utils/typedarray-buffer.js
var require_typedarray_buffer = __commonJS({
  "node_modules/qrcode/lib/utils/typedarray-buffer.js"(exports, module) {
    "use strict";
    var isArray = require_isarray();
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
          return 42;
        } };
        return arr.foo() === 42;
      } catch (e4) {
        return false;
      }
    }
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    var K_MAX_LENGTH = Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    function Buffer2(arg, offset, length2) {
      if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
        return new Buffer2(arg, offset, length2);
      }
      if (typeof arg === "number") {
        return allocUnsafe2(this, arg);
      }
      return from3(this, arg, offset, length2);
    }
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
      Buffer2.prototype.__proto__ = Uint8Array.prototype;
      Buffer2.__proto__ = Uint8Array;
      if (typeof Symbol !== "undefined" && Symbol.species && Buffer2[Symbol.species] === Buffer2) {
        Object.defineProperty(Buffer2, Symbol.species, {
          value: null,
          configurable: true,
          enumerable: false,
          writable: false
        });
      }
    }
    function checked(length2) {
      if (length2 >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length2 | 0;
    }
    function isnan(val) {
      return val !== val;
    }
    function createBuffer(that, length2) {
      var buf;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        buf = new Uint8Array(length2);
        buf.__proto__ = Buffer2.prototype;
      } else {
        buf = that;
        if (buf === null) {
          buf = new Buffer2(length2);
        }
        buf.length = length2;
      }
      return buf;
    }
    function allocUnsafe2(that, size) {
      var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer2.TYPED_ARRAY_SUPPORT) {
        for (var i7 = 0; i7 < size; ++i7) {
          buf[i7] = 0;
        }
      }
      return buf;
    }
    function fromString3(that, string2) {
      var length2 = byteLength(string2) | 0;
      var buf = createBuffer(that, length2);
      var actual = buf.write(string2);
      if (actual !== length2) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(that, array) {
      var length2 = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(that, length2);
      for (var i7 = 0; i7 < length2; i7 += 1) {
        buf[i7] = array[i7] & 255;
      }
      return buf;
    }
    function fromArrayBuffer(that, array, byteOffset, length2) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError("'offset' is out of bounds");
      }
      if (array.byteLength < byteOffset + (length2 || 0)) {
        throw new RangeError("'length' is out of bounds");
      }
      var buf;
      if (byteOffset === void 0 && length2 === void 0) {
        buf = new Uint8Array(array);
      } else if (length2 === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length2);
      }
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        buf.__proto__ = Buffer2.prototype;
      } else {
        buf = fromArrayLike(that, buf);
      }
      return buf;
    }
    function fromObject(that, obj) {
      if (Buffer2.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(that, len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj) {
        if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
          if (typeof obj.length !== "number" || isnan(obj.length)) {
            return createBuffer(that, 0);
          }
          return fromArrayLike(that, obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(that, obj.data);
        }
      }
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }
    function utf8ToBytes(string2, units) {
      units = units || Infinity;
      var codePoint;
      var length2 = string2.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i7 = 0; i7 < length2; ++i7) {
        codePoint = string2.charCodeAt(i7);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i7 + 1 === length2) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function byteLength(string2) {
      if (Buffer2.isBuffer(string2)) {
        return string2.length;
      }
      if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string2) || string2 instanceof ArrayBuffer)) {
        return string2.byteLength;
      }
      if (typeof string2 !== "string") {
        string2 = "" + string2;
      }
      var len = string2.length;
      if (len === 0) return 0;
      return utf8ToBytes(string2).length;
    }
    function blitBuffer(src2, dst, offset, length2) {
      for (var i7 = 0; i7 < length2; ++i7) {
        if (i7 + offset >= dst.length || i7 >= src2.length) break;
        dst[i7 + offset] = src2[i7];
      }
      return i7;
    }
    function utf8Write(buf, string2, offset, length2) {
      return blitBuffer(utf8ToBytes(string2, buf.length - offset), buf, offset, length2);
    }
    function from3(that, value, offset, length2) {
      if (typeof value === "number") {
        throw new TypeError('"value" argument must not be a number');
      }
      if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, offset, length2);
      }
      if (typeof value === "string") {
        return fromString3(that, value, offset);
      }
      return fromObject(that, value);
    }
    Buffer2.prototype.write = function write(string2, offset, length2) {
      if (offset === void 0) {
        length2 = this.length;
        offset = 0;
      } else if (length2 === void 0 && typeof offset === "string") {
        length2 = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length2)) {
          length2 = length2 | 0;
        } else {
          length2 = void 0;
        }
      }
      var remaining = this.length - offset;
      if (length2 === void 0 || length2 > remaining) length2 = remaining;
      if (string2.length > 0 && (length2 < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      return utf8Write(this, string2, offset, length2);
    };
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      var newBuf;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer2.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer2(sliceLen, void 0);
        for (var i7 = 0; i7 < sliceLen; ++i7) {
          newBuf[i7] = this[i7 + start];
        }
      }
      return newBuf;
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      var i7;
      if (this === target && start < targetStart && targetStart < end) {
        for (i7 = len - 1; i7 >= 0; --i7) {
          target[i7 + targetStart] = this[i7 + start];
        }
      } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
        for (i7 = 0; i7 < len; ++i7) {
          target[i7 + targetStart] = this[i7 + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          end = this.length;
        }
        if (val.length === 1) {
          var code2 = val.charCodeAt(0);
          if (code2 < 256) {
            val = code2;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      var i7;
      if (typeof val === "number") {
        for (i7 = start; i7 < end; ++i7) {
          this[i7] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : new Buffer2(val);
        var len = bytes.length;
        for (i7 = 0; i7 < end - start; ++i7) {
          this[i7 + start] = bytes[i7 % len];
        }
      }
      return this;
    };
    Buffer2.concat = function concat2(list, length2) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return createBuffer(null, 0);
      }
      var i7;
      if (length2 === void 0) {
        length2 = 0;
        for (i7 = 0; i7 < list.length; ++i7) {
          length2 += list[i7].length;
        }
      }
      var buffer = allocUnsafe2(null, length2);
      var pos = 0;
      for (i7 = 0; i7 < list.length; ++i7) {
        var buf = list[i7];
        if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };
    Buffer2.byteLength = byteLength;
    Buffer2.prototype._isBuffer = true;
    Buffer2.isBuffer = function isBuffer(b5) {
      return !!(b5 != null && b5._isBuffer);
    };
    module.exports.alloc = function(size) {
      var buffer = new Buffer2(size);
      buffer.fill(0);
      return buffer;
    };
    module.exports.from = function(data) {
      return new Buffer2(data);
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version2) {
      if (!version2) throw new Error('"version" cannot be null or undefined');
      if (version2 < 1 || version2 > 40) throw new Error('"version" should be in range from 1 to 40');
      return version2 * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version2) {
      return CODEWORDS_COUNT[version2];
    };
    exports.getBCHDigit = function(data) {
      var digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f6) {
      if (typeof f6 !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f6;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString3(string2) {
      if (typeof string2 !== "string") {
        throw new Error("Param is not a string");
      }
      var lcStr = string2.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string2);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from3(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString3(value);
      } catch (e4) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        var bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length2) {
        for (var i7 = 0; i7 < length2; i7++) {
          this.putBit((num >>> length2 - i7 - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    var BufferUtil = require_typedarray_buffer();
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = BufferUtil.alloc(size * size);
      this.reservedBit = BufferUtil.alloc(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      var index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version2) {
      if (version2 === 1) return [];
      var posCount = Math.floor(version2 / 7) + 2;
      var size = getSymbolSize(version2);
      var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      var positions = [size - 7];
      for (var i7 = 1; i7 < posCount - 1; i7++) {
        positions[i7] = positions[i7 - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version2) {
      var coords = [];
      var pos = exports.getRowColCoords(version2);
      var posLength = pos.length;
      for (var i7 = 0; i7 < posLength; i7++) {
        for (var j6 = 0; j6 < posLength; j6++) {
          if (i7 === 0 && j6 === 0 || // top-left
          i7 === 0 && j6 === posLength - 1 || // bottom-left
          i7 === posLength - 1 && j6 === 0) {
            continue;
          }
          coords.push([pos[i7], pos[j6]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version2) {
      var size = getSymbolSize(version2);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from3(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      var size = data.size;
      var points = 0;
      var sameCountCol = 0;
      var sameCountRow = 0;
      var lastCol = null;
      var lastRow = null;
      for (var row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (var col = 0; col < size; col++) {
          var module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      var size = data.size;
      var points = 0;
      for (var row = 0; row < size - 1; row++) {
        for (var col = 0; col < size - 1; col++) {
          var last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      var size = data.size;
      var points = 0;
      var bitsCol = 0;
      var bitsRow = 0;
      for (var row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (var col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      var darkCount = 0;
      var modulesCount = data.data.length;
      for (var i7 = 0; i7 < modulesCount; i7++) darkCount += data.data[i7];
      var k5 = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k5 * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i7, j6) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i7 + j6) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i7 % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j6 % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i7 + j6) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i7 / 2) + Math.floor(j6 / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i7 * j6 % 2 + i7 * j6 % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i7 * j6 % 2 + i7 * j6 % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i7 * j6 % 3 + (i7 + j6) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      var size = data.size;
      for (var col = 0; col < size; col++) {
        for (var row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      var numPatterns = Object.keys(exports.Patterns).length;
      var bestPattern = 0;
      var lowerPenalty = Infinity;
      for (var p5 = 0; p5 < numPatterns; p5++) {
        setupFormatFunc(p5);
        exports.applyMask(p5, data);
        var penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p5, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p5;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version2, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version2, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    var BufferUtil = require_typedarray_buffer();
    var EXP_TABLE = BufferUtil.alloc(512);
    var LOG_TABLE = BufferUtil.alloc(256);
    (function initTables() {
      var x7 = 1;
      for (var i7 = 0; i7 < 255; i7++) {
        EXP_TABLE[i7] = x7;
        LOG_TABLE[x7] = i7;
        x7 <<= 1;
        if (x7 & 256) {
          x7 ^= 285;
        }
      }
      for (i7 = 255; i7 < 512; i7++) {
        EXP_TABLE[i7] = EXP_TABLE[i7 - 255];
      }
    })();
    exports.log = function log(n6) {
      if (n6 < 1) throw new Error("log(" + n6 + ")");
      return LOG_TABLE[n6];
    };
    exports.exp = function exp(n6) {
      return EXP_TABLE[n6];
    };
    exports.mul = function mul(x7, y8) {
      if (x7 === 0 || y8 === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x7] + LOG_TABLE[y8]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    var BufferUtil = require_typedarray_buffer();
    var GF = require_galois_field();
    exports.mul = function mul(p1, p22) {
      var coeff = BufferUtil.alloc(p1.length + p22.length - 1);
      for (var i7 = 0; i7 < p1.length; i7++) {
        for (var j6 = 0; j6 < p22.length; j6++) {
          coeff[i7 + j6] ^= GF.mul(p1[i7], p22[j6]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      var result = BufferUtil.from(divident);
      while (result.length - divisor.length >= 0) {
        var coeff = result[0];
        for (var i7 = 0; i7 < divisor.length; i7++) {
          result[i7] ^= GF.mul(divisor[i7], coeff);
        }
        var offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      var poly = BufferUtil.from([1]);
      for (var i7 = 0; i7 < degree; i7++) {
        poly = exports.mul(poly, [1, GF.exp(i7)]);
      }
      return poly;
    };
  }
});

// node_modules/qrcode/node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/qrcode/node_modules/buffer/index.js"(exports) {
    "use strict";
    var base642 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        var proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e4) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length2) {
      if (length2 > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length2 + '" is invalid for option "size"');
      }
      var buf = new Uint8Array(length2);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length2) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe2(arg);
      }
      return from3(arg, encodingOrOffset, length2);
    }
    Buffer2.poolSize = 8192;
    function from3(value, encodingOrOffset, length2) {
      if (typeof value === "string") {
        return fromString3(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length2);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length2);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      var valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length2);
      }
      var b5 = fromObject(value);
      if (b5) return b5;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(
          value[Symbol.toPrimitive]("string"),
          encodingOrOffset,
          length2
        );
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length2) {
      return from3(value, encodingOrOffset, length2);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe2(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe2(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe2(size);
    };
    function fromString3(string2, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      var length2 = byteLength(string2, encoding) | 0;
      var buf = createBuffer(length2);
      var actual = buf.write(string2, encoding);
      if (actual !== length2) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      var length2 = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(length2);
      for (var i7 = 0; i7 < length2; i7 += 1) {
        buf[i7] = array[i7] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length2) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length2 || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      var buf;
      if (byteOffset === void 0 && length2 === void 0) {
        buf = new Uint8Array(array);
      } else if (length2 === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length2);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length2) {
      if (length2 >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length2 | 0;
    }
    function SlowBuffer(length2) {
      if (+length2 != length2) {
        length2 = 0;
      }
      return Buffer2.alloc(+length2);
    }
    Buffer2.isBuffer = function isBuffer(b5) {
      return b5 != null && b5._isBuffer === true && b5 !== Buffer2.prototype;
    };
    Buffer2.compare = function compare2(a6, b5) {
      if (isInstance(a6, Uint8Array)) a6 = Buffer2.from(a6, a6.offset, a6.byteLength);
      if (isInstance(b5, Uint8Array)) b5 = Buffer2.from(b5, b5.offset, b5.byteLength);
      if (!Buffer2.isBuffer(a6) || !Buffer2.isBuffer(b5)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a6 === b5) return 0;
      var x7 = a6.length;
      var y8 = b5.length;
      for (var i7 = 0, len = Math.min(x7, y8); i7 < len; ++i7) {
        if (a6[i7] !== b5[i7]) {
          x7 = a6[i7];
          y8 = b5[i7];
          break;
        }
      }
      if (x7 < y8) return -1;
      if (y8 < x7) return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat2(list, length2) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i7;
      if (length2 === void 0) {
        length2 = 0;
        for (i7 = 0; i7 < list.length; ++i7) {
          length2 += list[i7].length;
        }
      }
      var buffer = Buffer2.allocUnsafe(length2);
      var pos = 0;
      for (i7 = 0; i7 < list.length; ++i7) {
        var buf = list[i7];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            Buffer2.from(buf).copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string2, encoding) {
      if (Buffer2.isBuffer(string2)) {
        return string2.length;
      }
      if (ArrayBuffer.isView(string2) || isInstance(string2, ArrayBuffer)) {
        return string2.byteLength;
      }
      if (typeof string2 !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string2
        );
      }
      var len = string2.length;
      var mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string2).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string2).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string2).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b5, n6, m4) {
      var i7 = b5[n6];
      b5[n6] = b5[m4];
      b5[m4] = i7;
    }
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i7 = 0; i7 < len; i7 += 2) {
        swap(this, i7, i7 + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i7 = 0; i7 < len; i7 += 4) {
        swap(this, i7, i7 + 3);
        swap(this, i7 + 1, i7 + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i7 = 0; i7 < len; i7 += 8) {
        swap(this, i7, i7 + 7);
        swap(this, i7 + 1, i7 + 6);
        swap(this, i7 + 2, i7 + 5);
        swap(this, i7 + 3, i7 + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString3() {
      var length2 = this.length;
      if (length2 === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length2);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals4(b5) {
      if (!Buffer2.isBuffer(b5)) throw new TypeError("Argument must be a Buffer");
      if (this === b5) return true;
      return Buffer2.compare(this, b5) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      var x7 = thisEnd - thisStart;
      var y8 = end - start;
      var len = Math.min(x7, y8);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i7 = 0; i7 < len; ++i7) {
        if (thisCopy[i7] !== targetCopy[i7]) {
          x7 = thisCopy[i7];
          y8 = targetCopy[i7];
          break;
        }
      }
      if (x7 < y8) return -1;
      if (y8 < x7) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read2(buf, i8) {
        if (indexSize === 1) {
          return buf[i8];
        } else {
          return buf.readUInt16BE(i8 * indexSize);
        }
      }
      var i7;
      if (dir) {
        var foundIndex = -1;
        for (i7 = byteOffset; i7 < arrLength; i7++) {
          if (read2(arr, i7) === read2(val, foundIndex === -1 ? 0 : i7 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i7;
            if (i7 - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i7 -= i7 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i7 = byteOffset; i7 >= 0; i7--) {
          var found = true;
          for (var j6 = 0; j6 < valLength; j6++) {
            if (read2(arr, i7 + j6) !== read2(val, j6)) {
              found = false;
              break;
            }
          }
          if (found) return i7;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string2, offset, length2) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length2) {
        length2 = remaining;
      } else {
        length2 = Number(length2);
        if (length2 > remaining) {
          length2 = remaining;
        }
      }
      var strLen = string2.length;
      if (length2 > strLen / 2) {
        length2 = strLen / 2;
      }
      for (var i7 = 0; i7 < length2; ++i7) {
        var parsed = parseInt(string2.substr(i7 * 2, 2), 16);
        if (numberIsNaN(parsed)) return i7;
        buf[offset + i7] = parsed;
      }
      return i7;
    }
    function utf8Write(buf, string2, offset, length2) {
      return blitBuffer(utf8ToBytes(string2, buf.length - offset), buf, offset, length2);
    }
    function asciiWrite(buf, string2, offset, length2) {
      return blitBuffer(asciiToBytes(string2), buf, offset, length2);
    }
    function base64Write(buf, string2, offset, length2) {
      return blitBuffer(base64ToBytes(string2), buf, offset, length2);
    }
    function ucs2Write(buf, string2, offset, length2) {
      return blitBuffer(utf16leToBytes(string2, buf.length - offset), buf, offset, length2);
    }
    Buffer2.prototype.write = function write(string2, offset, length2, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length2 = this.length;
        offset = 0;
      } else if (length2 === void 0 && typeof offset === "string") {
        encoding = offset;
        length2 = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length2)) {
          length2 = length2 >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length2;
          length2 = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      var remaining = this.length - offset;
      if (length2 === void 0 || length2 > remaining) length2 = remaining;
      if (string2.length > 0 && (length2 < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string2, offset, length2);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string2, offset, length2);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string2, offset, length2);
          case "base64":
            return base64Write(this, string2, offset, length2);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string2, offset, length2);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base642.fromByteArray(buf);
      } else {
        return base642.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i7 = start;
      while (i7 < end) {
        var firstByte = buf[i7];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i7 + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i7 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i7 + 1];
              thirdByte = buf[i7 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i7 + 1];
              thirdByte = buf[i7 + 2];
              fourthByte = buf[i7 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i7 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i7 = 0;
      while (i7 < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i7, i7 += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i7 = start; i7 < end; ++i7) {
        ret += String.fromCharCode(buf[i7] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i7 = start; i7 < end; ++i7) {
        ret += String.fromCharCode(buf[i7]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      var out = "";
      for (var i7 = start; i7 < end; ++i7) {
        out += hexSliceLookupTable[buf[i7]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i7 = 0; i7 < bytes.length - 1; i7 += 2) {
        res += String.fromCharCode(bytes[i7] + bytes[i7 + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      var newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length2) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length2) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i7 = 0;
      while (++i7 < byteLength2 && (mul *= 256)) {
        val += this[offset + i7] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i7 = 0;
      while (++i7 < byteLength2 && (mul *= 256)) {
        val += this[offset + i7] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var i7 = byteLength2;
      var mul = 1;
      var val = this[offset + --i7];
      while (i7 > 0 && (mul *= 256)) {
        val += this[offset + --i7] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i7 = 0;
      this[offset] = value & 255;
      while (++i7 < byteLength2 && (mul *= 256)) {
        this[offset + i7] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i7 = byteLength2 - 1;
      var mul = 1;
      this[offset + i7] = value & 255;
      while (--i7 >= 0 && (mul *= 256)) {
        this[offset + i7] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i7 = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i7 < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i7 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i7] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i7 = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i7] = value & 255;
      while (--i7 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i7 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i7] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          var code2 = val.charCodeAt(0);
          if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
            val = code2;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      var i7;
      if (typeof val === "number") {
        for (i7 = start; i7 < end; ++i7) {
          this[i7] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        var len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i7 = 0; i7 < end - start; ++i7) {
          this[i7 + start] = bytes[i7 % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string2, units) {
      units = units || Infinity;
      var codePoint;
      var length2 = string2.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i7 = 0; i7 < length2; ++i7) {
        codePoint = string2.charCodeAt(i7);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i7 + 1 === length2) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i7 = 0; i7 < str.length; ++i7) {
        byteArray.push(str.charCodeAt(i7) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c8, hi2, lo;
      var byteArray = [];
      for (var i7 = 0; i7 < str.length; ++i7) {
        if ((units -= 2) < 0) break;
        c8 = str.charCodeAt(i7);
        hi2 = c8 >> 8;
        lo = c8 % 256;
        byteArray.push(lo);
        byteArray.push(hi2);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base642.toByteArray(base64clean(str));
    }
    function blitBuffer(src2, dst, offset, length2) {
      for (var i7 = 0; i7 < length2; ++i7) {
        if (i7 + offset >= dst.length || i7 >= src2.length) break;
        dst[i7 + offset] = src2[i7];
      }
      return i7;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      var alphabet2 = "0123456789abcdef";
      var table = new Array(256);
      for (var i7 = 0; i7 < 16; ++i7) {
        var i16 = i7 * 16;
        for (var j6 = 0; j6 < 16; ++j6) {
          table[i16 + j6] = alphabet2[i7] + alphabet2[j6];
        }
      }
      return table;
    }();
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    var BufferUtil = require_typedarray_buffer();
    var Polynomial = require_polynomial();
    var Buffer2 = require_buffer().Buffer;
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode5(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      var pad = BufferUtil.alloc(this.degree);
      var paddedData = Buffer2.concat([data, pad], data.length + this.degree);
      var remainder = Polynomial.mod(paddedData, this.genPoly);
      var start = this.degree - remainder.length;
      if (start > 0) {
        var buff = BufferUtil.alloc(this.degree);
        remainder.copy(buff, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    exports.isValid = function isValid(version2) {
      return !isNaN(version2) && version2 >= 1 && version2 <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version2) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid version: " + version2);
      }
      if (version2 >= 1 && version2 < 10) return mode.ccBits[0];
      else if (version2 < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString3(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString3(string2) {
      if (typeof string2 !== "string") {
        throw new Error("Param is not a string");
      }
      var lcStr = string2.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string2);
      }
    }
    exports.from = function from3(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString3(value);
      } catch (e4) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var isArray = require_isarray();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length2, errorCorrectionLevel) {
      for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length2 <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version2) {
      return Mode.getCharCountIndicator(mode, version2) + 4;
    }
    function getTotalBitsFromDataArray(segments, version2) {
      var totalBits = 0;
      segments.forEach(function(data) {
        var reservedBits = getReservedBitsCount(data.mode, version2);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
        var length2 = getTotalBitsFromDataArray(segments, currentVersion);
        if (length2 <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from3(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version2, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      var totalCodewords = Utils.getSymbolTotalCodewords(version2);
      var ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel);
      var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version2);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      var seg;
      var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version2) {
      if (!VersionCheck.isValid(version2) || version2 < 7) {
        throw new Error("Invalid QR Code version");
      }
      var d5 = version2 << 12;
      while (Utils.getBCHDigit(d5) - G18_BCH >= 0) {
        d5 ^= G18 << Utils.getBCHDigit(d5) - G18_BCH;
      }
      return version2 << 12 | d5;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      var data = errorCorrectionLevel.bit << 3 | mask;
      var d5 = data << 10;
      while (Utils.getBCHDigit(d5) - G15_BCH >= 0) {
        d5 ^= G15 << Utils.getBCHDigit(d5) - G15_BCH;
      }
      return (data << 10 | d5) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length2) {
      return 10 * Math.floor(length2 / 3) + (length2 % 3 ? length2 % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      var i7, group, value;
      for (i7 = 0; i7 + 3 <= this.data.length; i7 += 3) {
        group = this.data.substr(i7, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      var remainingNum = this.data.length - i7;
      if (remainingNum > 0) {
        group = this.data.substr(i7);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length2) {
      return 11 * Math.floor(length2 / 2) + 6 * (length2 % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      var i7;
      for (i7 = 0; i7 + 2 <= this.data.length; i7 += 2) {
        var value = ALPHA_NUM_CHARS.indexOf(this.data[i7]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i7 + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i7]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    var BufferUtil = require_typedarray_buffer();
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      this.data = BufferUtil.from(data);
    }
    ByteData.getBitsLength = function getBitsLength(length2) {
      return length2 * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (var i7 = 0, l6 = this.data.length; i7 < l6; i7++) {
        bitBuffer.put(this.data[i7], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length2) {
      return length2 * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      var i7;
      for (i7 = 0; i7 < this.data.length; i7++) {
        var value = Utils.toSJIS(this.data[i7]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i7] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s5, d5) {
        var predecessors = {};
        var costs = {};
        costs[s5] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s5, 0);
        var closest, u5, v6, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u5 = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u5] || {};
          for (v6 in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v6)) {
              cost_of_e = adjacent_nodes[v6];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v6];
              first_visit = typeof costs[v6] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v6] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v6, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v6] = u5;
              }
            }
          }
        }
        if (typeof d5 !== "undefined" && typeof costs[d5] === "undefined") {
          var msg = ["Could not find a path from ", s5, " to ", d5, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d5) {
        var nodes = [];
        var u5 = d5;
        var predecessor;
        while (u5) {
          nodes.push(u5);
          predecessor = predecessors[u5];
          u5 = predecessors[u5];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s5, d5) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s5, d5);
        return dijkstra.extract_shortest_path_from_predecessor_list(
          predecessors,
          d5
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T6 = dijkstra.PriorityQueue, t3 = {}, key;
          opts = opts || {};
          for (key in T6) {
            if (T6.hasOwnProperty(key)) {
              t3[key] = T6[key];
            }
          }
          t3.queue = [];
          t3.sorter = opts.sorter || T6.default_sorter;
          return t3;
        },
        default_sorter: function(a6, b5) {
          return a6.cost - b5.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      var segments = [];
      var result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      var byteSegs;
      var kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s22) {
        return s1.index - s22.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length2, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length2);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length2);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length2);
        case Mode.BYTE:
          return ByteData.getBitsLength(length2);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      var nodes = [];
      for (var i7 = 0; i7 < segs.length; i7++) {
        var seg = segs[i7];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version2) {
      var table = {};
      var graph = { "start": {} };
      var prevNodeIds = ["start"];
      for (var i7 = 0; i7 < nodes.length; i7++) {
        var nodeGroup = nodes[i7];
        var currentNodeIds = [];
        for (var j6 = 0; j6 < nodeGroup.length; j6++) {
          var node = nodeGroup[j6];
          var key = "" + i7 + j6;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (var n6 = 0; n6 < prevNodeIds.length; n6++) {
            var prevNodeId = prevNodeIds[n6];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version2);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (n6 = 0; n6 < prevNodeIds.length; n6++) {
        graph[prevNodeIds[n6]]["end"] = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      var mode;
      var bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString3(data, version2) {
      var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      var nodes = buildNodes(segs);
      var graph = buildGraph(nodes, version2);
      var path = dijkstra.find_path(graph.map, "start", "end");
      var optimizedSegs = [];
      for (var i7 = 1; i7 < path.length - 1; i7++) {
        optimizedSegs.push(graph.table[path[i7]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    var BufferUtil = require_typedarray_buffer();
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    var isArray = require_isarray();
    function setupFinderPattern(matrix, version2) {
      var size = matrix.size;
      var pos = FinderPattern.getPositions(version2);
      for (var i7 = 0; i7 < pos.length; i7++) {
        var row = pos[i7][0];
        var col = pos[i7][1];
        for (var r5 = -1; r5 <= 7; r5++) {
          if (row + r5 <= -1 || size <= row + r5) continue;
          for (var c8 = -1; c8 <= 7; c8++) {
            if (col + c8 <= -1 || size <= col + c8) continue;
            if (r5 >= 0 && r5 <= 6 && (c8 === 0 || c8 === 6) || c8 >= 0 && c8 <= 6 && (r5 === 0 || r5 === 6) || r5 >= 2 && r5 <= 4 && c8 >= 2 && c8 <= 4) {
              matrix.set(row + r5, col + c8, true, true);
            } else {
              matrix.set(row + r5, col + c8, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      var size = matrix.size;
      for (var r5 = 8; r5 < size - 8; r5++) {
        var value = r5 % 2 === 0;
        matrix.set(r5, 6, value, true);
        matrix.set(6, r5, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version2) {
      var pos = AlignmentPattern.getPositions(version2);
      for (var i7 = 0; i7 < pos.length; i7++) {
        var row = pos[i7][0];
        var col = pos[i7][1];
        for (var r5 = -2; r5 <= 2; r5++) {
          for (var c8 = -2; c8 <= 2; c8++) {
            if (r5 === -2 || r5 === 2 || c8 === -2 || c8 === 2 || r5 === 0 && c8 === 0) {
              matrix.set(row + r5, col + c8, true, true);
            } else {
              matrix.set(row + r5, col + c8, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version2) {
      var size = matrix.size;
      var bits = Version.getEncodedBits(version2);
      var row, col, mod;
      for (var i7 = 0; i7 < 18; i7++) {
        row = Math.floor(i7 / 3);
        col = i7 % 3 + size - 8 - 3;
        mod = (bits >> i7 & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      var size = matrix.size;
      var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      var i7, mod;
      for (i7 = 0; i7 < 15; i7++) {
        mod = (bits >> i7 & 1) === 1;
        if (i7 < 6) {
          matrix.set(i7, 8, mod, true);
        } else if (i7 < 8) {
          matrix.set(i7 + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i7, 8, mod, true);
        }
        if (i7 < 8) {
          matrix.set(8, size - i7 - 1, mod, true);
        } else if (i7 < 9) {
          matrix.set(8, 15 - i7 - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i7 - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      var size = matrix.size;
      var inc = -1;
      var row = size - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      for (var col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (var c8 = 0; c8 < 2; c8++) {
            if (!matrix.isReserved(row, col - c8)) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c8, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version2, errorCorrectionLevel, segments) {
      var buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version2));
        data.write(buffer);
      });
      var totalCodewords = Utils.getSymbolTotalCodewords(version2);
      var ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel);
      var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (var i7 = 0; i7 < remainingByte; i7++) {
        buffer.put(i7 % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version2, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version2, errorCorrectionLevel) {
      var totalCodewords = Utils.getSymbolTotalCodewords(version2);
      var ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel);
      var dataTotalCodewords = totalCodewords - ecTotalCodewords;
      var ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel);
      var blocksInGroup2 = totalCodewords % ecTotalBlocks;
      var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      var rs = new ReedSolomonEncoder(ecCount);
      var offset = 0;
      var dcData = new Array(ecTotalBlocks);
      var ecData = new Array(ecTotalBlocks);
      var maxDataSize = 0;
      var buffer = BufferUtil.from(bitBuffer.buffer);
      for (var b5 = 0; b5 < ecTotalBlocks; b5++) {
        var dataSize = b5 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b5] = buffer.slice(offset, offset + dataSize);
        ecData[b5] = rs.encode(dcData[b5]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      var data = BufferUtil.alloc(totalCodewords);
      var index = 0;
      var i7, r5;
      for (i7 = 0; i7 < maxDataSize; i7++) {
        for (r5 = 0; r5 < ecTotalBlocks; r5++) {
          if (i7 < dcData[r5].length) {
            data[index++] = dcData[r5][i7];
          }
        }
      }
      for (i7 = 0; i7 < ecCount; i7++) {
        for (r5 = 0; r5 < ecTotalBlocks; r5++) {
          data[index++] = ecData[r5][i7];
        }
      }
      return data;
    }
    function createSymbol(data, version2, errorCorrectionLevel, maskPattern) {
      var segments;
      if (isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        var estimatedVersion = version2;
        if (!estimatedVersion) {
          var rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(
            rawSegments,
            errorCorrectionLevel
          );
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      var bestVersion = Version.getBestVersionForData(
        segments,
        errorCorrectionLevel
      );
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version2) {
        version2 = bestVersion;
      } else if (version2 < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      var dataBits = createData(version2, errorCorrectionLevel, segments);
      var moduleCount = Utils.getSymbolSize(version2);
      var modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version2);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version2);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version2 >= 7) {
        setupVersionInfo(modules, version2);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version: version2,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create2(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      var errorCorrectionLevel = ECLevel.M;
      var version2;
      var mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version2 = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version2, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      var hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c8) {
          return [c8, c8];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      var hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      var margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      var width = options.width && options.width >= 21 ? options.width : void 0;
      var scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      var scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr2, opts) {
      var size = qr2.modules.size;
      var data = qr2.modules.data;
      var scale = exports.getScale(size, opts);
      var symbolSize = Math.floor((size + opts.margin * 2) * scale);
      var scaledMargin = opts.margin * scale;
      var palette = [opts.color.light, opts.color.dark];
      for (var i7 = 0; i7 < symbolSize; i7++) {
        for (var j6 = 0; j6 < symbolSize; j6++) {
          var posDst = (i7 * symbolSize + j6) * 4;
          var pxColor = opts.color.light;
          if (i7 >= scaledMargin && j6 >= scaledMargin && i7 < symbolSize - scaledMargin && j6 < symbolSize - scaledMargin) {
            var iSrc = Math.floor((i7 - scaledMargin) / scale);
            var jSrc = Math.floor((j6 - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e4) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      var opts = options;
      var canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      var size = Utils.getImageWidth(qrData.modules.size, opts);
      var ctx = canvasEl.getContext("2d");
      var image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      var opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      var canvasEl = exports.render(qrData, canvas, opts);
      var type = opts.type || "image/png";
      var rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      var alpha = color.a / 255;
      var str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x7, y8) {
      var str = cmd + x7;
      if (typeof y8 !== "undefined") str += " " + y8;
      return str;
    }
    function qrToPath(data, size, margin) {
      var path = "";
      var moveBy = 0;
      var newRow = false;
      var lineLength = 0;
      for (var i7 = 0; i7 < data.length; i7++) {
        var col = Math.floor(i7 % size);
        var row = Math.floor(i7 / size);
        if (!col && !newRow) newRow = true;
        if (data[i7]) {
          lineLength++;
          if (!(i7 > 0 && col > 0 && data[i7 - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i7 + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      var opts = Utils.getOptions(options);
      var size = qrData.modules.size;
      var data = qrData.modules.data;
      var qrcodesize = size + opts.margin * 2;
      var bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      var path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      var viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      var width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    var canPromise = require_can_promise();
    var QRCode = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      var args = [].slice.call(arguments, 1);
      var argsNum = args.length;
      var isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            var data2 = QRCode.create(text, opts);
            resolve(renderFunc(data2, canvas, opts));
          } catch (e4) {
            reject(e4);
          }
        });
      }
      try {
        var data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e4) {
        cb(e4);
      }
    }
    exports.create = QRCode.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _6, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i7 = 0; i7 < selection.rangeCount; i7++) {
        ranges.push(selection.getRangeAt(i7));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy(text, options) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e4) {
          e4.stopPropagation();
          if (options.format) {
            e4.preventDefault();
            if (typeof e4.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e4.clipboardData.clearData();
              e4.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e4.preventDefault();
            options.onCopy(e4.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy;
  }
});

// node_modules/preact/dist/preact.module.js
function a(n6, l6) {
  for (var u5 in l6) n6[u5] = l6[u5];
  return n6;
}
function v(n6) {
  var l6 = n6.parentNode;
  l6 && l6.removeChild(n6);
}
function h(n6, l6, u5) {
  var i7, t3 = arguments, r5 = {};
  for (i7 in l6) "key" !== i7 && "ref" !== i7 && (r5[i7] = l6[i7]);
  if (arguments.length > 3) for (u5 = [u5], i7 = 3; i7 < arguments.length; i7++) u5.push(t3[i7]);
  if (null != u5 && (r5.children = u5), "function" == typeof n6 && null != n6.defaultProps) for (i7 in n6.defaultProps) void 0 === r5[i7] && (r5[i7] = n6.defaultProps[i7]);
  return p(n6, r5, l6 && l6.key, l6 && l6.ref, null);
}
function p(l6, u5, i7, t3, r5) {
  var o6 = { type: l6, props: u5, key: i7, ref: t3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r5 };
  return null == r5 && (o6.__v = o6), n.vnode && n.vnode(o6), o6;
}
function y() {
  return {};
}
function d(n6) {
  return n6.children;
}
function m(n6, l6) {
  this.props = n6, this.context = l6;
}
function w(n6, l6) {
  if (null == l6) return n6.__ ? w(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
  for (var u5; l6 < n6.__k.length; l6++) if (null != (u5 = n6.__k[l6]) && null != u5.__e) return u5.__e;
  return "function" == typeof n6.type ? w(n6) : null;
}
function k(n6) {
  var l6, u5;
  if (null != (n6 = n6.__) && null != n6.__c) {
    for (n6.__e = n6.__c.base = null, l6 = 0; l6 < n6.__k.length; l6++) if (null != (u5 = n6.__k[l6]) && null != u5.__e) {
      n6.__e = n6.__c.base = u5.__e;
      break;
    }
    return k(n6);
  }
}
function g(l6) {
  (!l6.__d && (l6.__d = true) && u.push(l6) && !i++ || r !== n.debounceRendering) && ((r = n.debounceRendering) || t)(_);
}
function _() {
  for (var n6; i = u.length; ) n6 = u.sort(function(n7, l6) {
    return n7.__v.__b - l6.__v.__b;
  }), u = [], n6.some(function(n7) {
    var l6, u5, i7, t3, r5, o6, f6;
    n7.__d && (o6 = (r5 = (l6 = n7).__v).__e, (f6 = l6.__P) && (u5 = [], (i7 = a({}, r5)).__v = i7, t3 = A(f6, r5, i7, l6.__n, void 0 !== f6.ownerSVGElement, null, u5, null == o6 ? w(r5) : o6), T(u5, r5), t3 != o6 && k(r5)));
  });
}
function b(n6, l6, u5, i7, t3, r5, o6, f6, s5) {
  var a6, h7, p5, y8, d5, m4, k5, g5 = u5 && u5.__k || c, _6 = g5.length;
  if (f6 == e && (f6 = null != r5 ? r5[0] : _6 ? w(u5, 0) : null), a6 = 0, l6.__k = x(l6.__k, function(u6) {
    if (null != u6) {
      if (u6.__ = l6, u6.__b = l6.__b + 1, null === (p5 = g5[a6]) || p5 && u6.key == p5.key && u6.type === p5.type) g5[a6] = void 0;
      else for (h7 = 0; h7 < _6; h7++) {
        if ((p5 = g5[h7]) && u6.key == p5.key && u6.type === p5.type) {
          g5[h7] = void 0;
          break;
        }
        p5 = null;
      }
      if (y8 = A(n6, u6, p5 = p5 || e, i7, t3, r5, o6, f6, s5), (h7 = u6.ref) && p5.ref != h7 && (k5 || (k5 = []), p5.ref && k5.push(p5.ref, null, u6), k5.push(h7, u6.__c || y8, u6)), null != y8) {
        var c8;
        if (null == m4 && (m4 = y8), void 0 !== u6.__d) c8 = u6.__d, u6.__d = void 0;
        else if (r5 == p5 || y8 != f6 || null == y8.parentNode) {
          n: if (null == f6 || f6.parentNode !== n6) n6.appendChild(y8), c8 = null;
          else {
            for (d5 = f6, h7 = 0; (d5 = d5.nextSibling) && h7 < _6; h7 += 2) if (d5 == y8) break n;
            n6.insertBefore(y8, f6), c8 = f6;
          }
          "option" == l6.type && (n6.value = "");
        }
        f6 = void 0 !== c8 ? c8 : y8.nextSibling, "function" == typeof l6.type && (l6.__d = f6);
      } else f6 && p5.__e == f6 && f6.parentNode != n6 && (f6 = w(p5));
    }
    return a6++, u6;
  }), l6.__e = m4, null != r5 && "function" != typeof l6.type) for (a6 = r5.length; a6--; ) null != r5[a6] && v(r5[a6]);
  for (a6 = _6; a6--; ) null != g5[a6] && D(g5[a6], g5[a6]);
  if (k5) for (a6 = 0; a6 < k5.length; a6++) j(k5[a6], k5[++a6], k5[++a6]);
}
function x(n6, l6, u5) {
  if (null == u5 && (u5 = []), null == n6 || "boolean" == typeof n6) l6 && u5.push(l6(null));
  else if (Array.isArray(n6)) for (var i7 = 0; i7 < n6.length; i7++) x(n6[i7], l6, u5);
  else u5.push(l6 ? l6("string" == typeof n6 || "number" == typeof n6 ? p(null, n6, null, null, n6) : null != n6.__e || null != n6.__c ? p(n6.type, n6.props, n6.key, null, n6.__v) : n6) : n6);
  return u5;
}
function P(n6, l6, u5, i7, t3) {
  var r5;
  for (r5 in u5) "children" === r5 || "key" === r5 || r5 in l6 || N(n6, r5, null, u5[r5], i7);
  for (r5 in l6) t3 && "function" != typeof l6[r5] || "children" === r5 || "key" === r5 || "value" === r5 || "checked" === r5 || u5[r5] === l6[r5] || N(n6, r5, l6[r5], u5[r5], i7);
}
function C(n6, l6, u5) {
  "-" === l6[0] ? n6.setProperty(l6, u5) : n6[l6] = "number" == typeof u5 && false === s.test(l6) ? u5 + "px" : null == u5 ? "" : u5;
}
function N(n6, l6, u5, i7, t3) {
  var r5, o6, f6, e4, c8;
  if (t3 ? "className" === l6 && (l6 = "class") : "class" === l6 && (l6 = "className"), "style" === l6) if (r5 = n6.style, "string" == typeof u5) r5.cssText = u5;
  else {
    if ("string" == typeof i7 && (r5.cssText = "", i7 = null), i7) for (e4 in i7) u5 && e4 in u5 || C(r5, e4, "");
    if (u5) for (c8 in u5) i7 && u5[c8] === i7[c8] || C(r5, c8, u5[c8]);
  }
  else "o" === l6[0] && "n" === l6[1] ? (o6 = l6 !== (l6 = l6.replace(/Capture$/, "")), f6 = l6.toLowerCase(), l6 = (f6 in n6 ? f6 : l6).slice(2), u5 ? (i7 || n6.addEventListener(l6, z, o6), (n6.l || (n6.l = {}))[l6] = u5) : n6.removeEventListener(l6, z, o6)) : "list" !== l6 && "tagName" !== l6 && "form" !== l6 && "type" !== l6 && "size" !== l6 && !t3 && l6 in n6 ? n6[l6] = null == u5 ? "" : u5 : "function" != typeof u5 && "dangerouslySetInnerHTML" !== l6 && (l6 !== (l6 = l6.replace(/^xlink:?/, "")) ? null == u5 || false === u5 ? n6.removeAttributeNS("http://www.w3.org/1999/xlink", l6.toLowerCase()) : n6.setAttributeNS("http://www.w3.org/1999/xlink", l6.toLowerCase(), u5) : null == u5 || false === u5 && !/^ar/.test(l6) ? n6.removeAttribute(l6) : n6.setAttribute(l6, u5));
}
function z(l6) {
  this.l[l6.type](n.event ? n.event(l6) : l6);
}
function A(l6, u5, i7, t3, r5, o6, f6, e4, c8) {
  var s5, v6, h7, p5, y8, w7, k5, g5, _6, x7, P4 = u5.type;
  if (void 0 !== u5.constructor) return null;
  (s5 = n.__b) && s5(u5);
  try {
    n: if ("function" == typeof P4) {
      if (g5 = u5.props, _6 = (s5 = P4.contextType) && t3[s5.__c], x7 = s5 ? _6 ? _6.props.value : s5.__ : t3, i7.__c ? k5 = (v6 = u5.__c = i7.__c).__ = v6.__E : ("prototype" in P4 && P4.prototype.render ? u5.__c = v6 = new P4(g5, x7) : (u5.__c = v6 = new m(g5, x7), v6.constructor = P4, v6.render = E), _6 && _6.sub(v6), v6.props = g5, v6.state || (v6.state = {}), v6.context = x7, v6.__n = t3, h7 = v6.__d = true, v6.__h = []), null == v6.__s && (v6.__s = v6.state), null != P4.getDerivedStateFromProps && (v6.__s == v6.state && (v6.__s = a({}, v6.__s)), a(v6.__s, P4.getDerivedStateFromProps(g5, v6.__s))), p5 = v6.props, y8 = v6.state, h7) null == P4.getDerivedStateFromProps && null != v6.componentWillMount && v6.componentWillMount(), null != v6.componentDidMount && v6.__h.push(v6.componentDidMount);
      else {
        if (null == P4.getDerivedStateFromProps && g5 !== p5 && null != v6.componentWillReceiveProps && v6.componentWillReceiveProps(g5, x7), !v6.__e && null != v6.shouldComponentUpdate && false === v6.shouldComponentUpdate(g5, v6.__s, x7) || u5.__v === i7.__v && !v6.__) {
          for (v6.props = g5, v6.state = v6.__s, u5.__v !== i7.__v && (v6.__d = false), v6.__v = u5, u5.__e = i7.__e, u5.__k = i7.__k, v6.__h.length && f6.push(v6), s5 = 0; s5 < u5.__k.length; s5++) u5.__k[s5] && (u5.__k[s5].__ = u5);
          break n;
        }
        null != v6.componentWillUpdate && v6.componentWillUpdate(g5, v6.__s, x7), null != v6.componentDidUpdate && v6.__h.push(function() {
          v6.componentDidUpdate(p5, y8, w7);
        });
      }
      v6.context = x7, v6.props = g5, v6.state = v6.__s, (s5 = n.__r) && s5(u5), v6.__d = false, v6.__v = u5, v6.__P = l6, s5 = v6.render(v6.props, v6.state, v6.context), u5.__k = null != s5 && s5.type == d && null == s5.key ? s5.props.children : Array.isArray(s5) ? s5 : [s5], null != v6.getChildContext && (t3 = a(a({}, t3), v6.getChildContext())), h7 || null == v6.getSnapshotBeforeUpdate || (w7 = v6.getSnapshotBeforeUpdate(p5, y8)), b(l6, u5, i7, t3, r5, o6, f6, e4, c8), v6.base = u5.__e, v6.__h.length && f6.push(v6), k5 && (v6.__E = v6.__ = null), v6.__e = false;
    } else null == o6 && u5.__v === i7.__v ? (u5.__k = i7.__k, u5.__e = i7.__e) : u5.__e = $(i7.__e, u5, i7, t3, r5, o6, f6, c8);
    (s5 = n.diffed) && s5(u5);
  } catch (l7) {
    u5.__v = null, n.__e(l7, u5, i7);
  }
  return u5.__e;
}
function T(l6, u5) {
  n.__c && n.__c(u5, l6), l6.some(function(u6) {
    try {
      l6 = u6.__h, u6.__h = [], l6.some(function(n6) {
        n6.call(u6);
      });
    } catch (l7) {
      n.__e(l7, u6.__v);
    }
  });
}
function $(n6, l6, u5, i7, t3, r5, o6, f6) {
  var s5, a6, v6, h7, p5, y8 = u5.props, d5 = l6.props;
  if (t3 = "svg" === l6.type || t3, null != r5) {
    for (s5 = 0; s5 < r5.length; s5++) if (null != (a6 = r5[s5]) && ((null === l6.type ? 3 === a6.nodeType : a6.localName === l6.type) || n6 == a6)) {
      n6 = a6, r5[s5] = null;
      break;
    }
  }
  if (null == n6) {
    if (null === l6.type) return document.createTextNode(d5);
    n6 = t3 ? document.createElementNS("http://www.w3.org/2000/svg", l6.type) : document.createElement(l6.type, d5.is && { is: d5.is }), r5 = null, f6 = false;
  }
  if (null === l6.type) y8 !== d5 && n6.data != d5 && (n6.data = d5);
  else {
    if (null != r5 && (r5 = c.slice.call(n6.childNodes)), v6 = (y8 = u5.props || e).dangerouslySetInnerHTML, h7 = d5.dangerouslySetInnerHTML, !f6) {
      if (y8 === e) for (y8 = {}, p5 = 0; p5 < n6.attributes.length; p5++) y8[n6.attributes[p5].name] = n6.attributes[p5].value;
      (h7 || v6) && (h7 && v6 && h7.__html == v6.__html || (n6.innerHTML = h7 && h7.__html || ""));
    }
    P(n6, d5, y8, t3, f6), h7 ? l6.__k = [] : (l6.__k = l6.props.children, b(n6, l6, u5, i7, "foreignObject" !== l6.type && t3, r5, o6, e, f6)), f6 || ("value" in d5 && void 0 !== (s5 = d5.value) && s5 !== n6.value && N(n6, "value", s5, y8.value, false), "checked" in d5 && void 0 !== (s5 = d5.checked) && s5 !== n6.checked && N(n6, "checked", s5, y8.checked, false));
  }
  return n6;
}
function j(l6, u5, i7) {
  try {
    "function" == typeof l6 ? l6(u5) : l6.current = u5;
  } catch (l7) {
    n.__e(l7, i7);
  }
}
function D(l6, u5, i7) {
  var t3, r5, o6;
  if (n.unmount && n.unmount(l6), (t3 = l6.ref) && (t3.current && t3.current !== l6.__e || j(t3, null, u5)), i7 || "function" == typeof l6.type || (i7 = null != (r5 = l6.__e)), l6.__e = l6.__d = void 0, null != (t3 = l6.__c)) {
    if (t3.componentWillUnmount) try {
      t3.componentWillUnmount();
    } catch (l7) {
      n.__e(l7, u5);
    }
    t3.base = t3.__P = null;
  }
  if (t3 = l6.__k) for (o6 = 0; o6 < t3.length; o6++) t3[o6] && D(t3[o6], u5, i7);
  null != r5 && v(r5);
}
function E(n6, l6, u5) {
  return this.constructor(n6, u5);
}
function H(l6, u5, i7) {
  var t3, r5, f6;
  n.__ && n.__(l6, u5), r5 = (t3 = i7 === o) ? null : i7 && i7.__k || u5.__k, l6 = h(d, null, [l6]), f6 = [], A(u5, (t3 ? u5 : i7 || u5).__k = l6, r5 || e, e, void 0 !== u5.ownerSVGElement, i7 && !t3 ? [i7] : r5 ? null : c.slice.call(u5.childNodes), f6, i7 || e, t3), T(f6, l6);
}
function I(n6, l6) {
  H(n6, l6, o);
}
function L(n6, l6) {
  var u5, i7;
  for (i7 in l6 = a(a({}, n6.props), l6), arguments.length > 2 && (l6.children = c.slice.call(arguments, 2)), u5 = {}, l6) "key" !== i7 && "ref" !== i7 && (u5[i7] = l6[i7]);
  return p(n6.type, u5, l6.key || n6.key, l6.ref || n6.ref, null);
}
function M(n6) {
  var l6 = {}, u5 = { __c: "__cC" + f++, __: n6, Consumer: function(n7, l7) {
    return n7.children(l7);
  }, Provider: function(n7) {
    var i7, t3 = this;
    return this.getChildContext || (i7 = [], this.getChildContext = function() {
      return l6[u5.__c] = t3, l6;
    }, this.shouldComponentUpdate = function(n8) {
      t3.props.value !== n8.value && i7.some(function(l7) {
        l7.context = n8.value, g(l7);
      });
    }, this.sub = function(n8) {
      i7.push(n8);
      var l7 = n8.componentWillUnmount;
      n8.componentWillUnmount = function() {
        i7.splice(i7.indexOf(n8), 1), l7 && l7.call(n8);
      };
    }), n7.children;
  } };
  return u5.Consumer.contextType = u5, u5.Provider.__ = u5, u5;
}
var n, l, u, i, t, r, o, f, e, c, s;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    e = {};
    c = [];
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    n = { __e: function(n6, l6) {
      for (var u5, i7; l6 = l6.__; ) if ((u5 = l6.__c) && !u5.__) try {
        if (u5.constructor && null != u5.constructor.getDerivedStateFromError && (i7 = true, u5.setState(u5.constructor.getDerivedStateFromError(n6))), null != u5.componentDidCatch && (i7 = true, u5.componentDidCatch(n6)), i7) return g(u5.__E = u5);
      } catch (l7) {
        n6 = l7;
      }
      throw n6;
    } }, l = function(n6) {
      return null != n6 && void 0 === n6.constructor;
    }, m.prototype.setState = function(n6, l6) {
      var u5;
      u5 = this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n6 && (n6 = n6(u5, this.props)), n6 && a(u5, n6), null != n6 && this.__v && (l6 && this.__h.push(l6), g(this));
    }, m.prototype.forceUpdate = function(n6) {
      this.__v && (this.__e = true, n6 && this.__h.push(n6), g(this));
    }, m.prototype.render = d, u = [], i = 0, t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = e, f = 0;
  }
});

// node_modules/preact/hooks/dist/hooks.module.js
function v2(t3, r5) {
  n.__h && n.__h(u2, t3, i2 || r5), i2 = 0;
  var o6 = u2.__H || (u2.__H = { __: [], __h: [] });
  return t3 >= o6.__.length && o6.__.push({}), o6.__[t3];
}
function m2(n6) {
  return i2 = 1, p2(E2, n6);
}
function p2(n6, r5, i7) {
  var o6 = v2(t2++, 2);
  return o6.__c || (o6.__c = u2, o6.__ = [i7 ? i7(r5) : E2(void 0, r5), function(t3) {
    var u5 = n6(o6.__[0], t3);
    o6.__[0] !== u5 && (o6.__[0] = u5, o6.__c.setState({}));
  }]), o6.__;
}
function l2(r5, i7) {
  var o6 = v2(t2++, 3);
  !n.__s && x2(o6.__H, i7) && (o6.__ = r5, o6.__H = i7, u2.__H.__h.push(o6));
}
function y2(r5, i7) {
  var o6 = v2(t2++, 4);
  !n.__s && x2(o6.__H, i7) && (o6.__ = r5, o6.__H = i7, u2.__h.push(o6));
}
function d2(n6) {
  return i2 = 5, h2(function() {
    return { current: n6 };
  }, []);
}
function s2(n6, t3, u5) {
  i2 = 6, y2(function() {
    "function" == typeof n6 ? n6(t3()) : n6 && (n6.current = t3());
  }, null == u5 ? u5 : u5.concat(n6));
}
function h2(n6, u5) {
  var r5 = v2(t2++, 7);
  return x2(r5.__H, u5) ? (r5.__H = u5, r5.__h = n6, r5.__ = n6()) : r5.__;
}
function T2(n6, t3) {
  return i2 = 8, h2(function() {
    return n6;
  }, t3);
}
function w2(n6) {
  var r5 = u2.context[n6.__c], i7 = v2(t2++, 9);
  return i7.__c = n6, r5 ? (null == i7.__ && (i7.__ = true, r5.sub(u2)), r5.props.value) : n6.__;
}
function A2(t3, u5) {
  n.useDebugValue && n.useDebugValue(u5 ? u5(t3) : t3);
}
function F(n6) {
  var r5 = v2(t2++, 10), i7 = m2();
  return r5.__ = n6, u2.componentDidCatch || (u2.componentDidCatch = function(n7) {
    r5.__ && r5.__(n7), i7[1](n7);
  }), [i7[0], function() {
    i7[1](void 0);
  }];
}
function _2() {
  o2.some(function(t3) {
    if (t3.__P) try {
      t3.__H.__h.forEach(g2), t3.__H.__h.forEach(q), t3.__H.__h = [];
    } catch (u5) {
      return t3.__H.__h = [], n.__e(u5, t3.__v), true;
    }
  }), o2 = [];
}
function g2(n6) {
  n6.t && n6.t();
}
function q(n6) {
  var t3 = n6.__();
  "function" == typeof t3 && (n6.t = t3);
}
function x2(n6, t3) {
  return !n6 || t3.some(function(t4, u5) {
    return t4 !== n6[u5];
  });
}
function E2(n6, t3) {
  return "function" == typeof t3 ? t3(n6) : t3;
}
var t2, u2, r2, i2, o2, c2, f2, e2, a2;
var init_hooks_module = __esm({
  "node_modules/preact/hooks/dist/hooks.module.js"() {
    init_preact_module();
    i2 = 0;
    o2 = [];
    c2 = n.__r;
    f2 = n.diffed;
    e2 = n.__c;
    a2 = n.unmount;
    n.__r = function(n6) {
      c2 && c2(n6), t2 = 0, (u2 = n6.__c).__H && (u2.__H.__h.forEach(g2), u2.__H.__h.forEach(q), u2.__H.__h = []);
    }, n.diffed = function(t3) {
      f2 && f2(t3);
      var u5 = t3.__c;
      if (u5) {
        var i7 = u5.__H;
        i7 && i7.__h.length && (1 !== o2.push(u5) && r2 === n.requestAnimationFrame || ((r2 = n.requestAnimationFrame) || function(n6) {
          var t4, u6 = function() {
            clearTimeout(r5), cancelAnimationFrame(t4), setTimeout(n6);
          }, r5 = setTimeout(u6, 100);
          "undefined" != typeof window && (t4 = requestAnimationFrame(u6));
        })(_2));
      }
    }, n.__c = function(t3, u5) {
      u5.some(function(t4) {
        try {
          t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n6) {
            return !n6.__ || q(n6);
          });
        } catch (r5) {
          u5.some(function(n6) {
            n6.__h && (n6.__h = []);
          }), u5 = [], n.__e(r5, t4.__v);
        }
      }), e2 && e2(t3, u5);
    }, n.unmount = function(t3) {
      a2 && a2(t3);
      var u5 = t3.__c;
      if (u5) {
        var r5 = u5.__H;
        if (r5) try {
          r5.__.forEach(function(n6) {
            return n6.t && n6.t();
          });
        } catch (t4) {
          n.__e(t4, u5.__v);
        }
      }
    };
  }
});

// node_modules/preact/compat/dist/compat.module.js
var compat_module_exports = {};
__export(compat_module_exports, {
  Children: () => R,
  Component: () => m,
  Fragment: () => d,
  PureComponent: () => C2,
  Suspense: () => U,
  SuspenseList: () => O,
  cloneElement: () => K,
  createContext: () => M,
  createElement: () => h,
  createFactory: () => G,
  createPortal: () => z2,
  createRef: () => y,
  default: () => compat_module_default,
  findDOMNode: () => X,
  forwardRef: () => S,
  hydrate: () => V,
  isValidElement: () => J,
  lazy: () => L2,
  memo: () => _3,
  render: () => T3,
  unmountComponentAtNode: () => Q,
  unstable_batchedUpdates: () => Y,
  useCallback: () => T2,
  useContext: () => w2,
  useDebugValue: () => A2,
  useEffect: () => l2,
  useErrorBoundary: () => F,
  useImperativeHandle: () => s2,
  useLayoutEffect: () => y2,
  useMemo: () => h2,
  useReducer: () => p2,
  useRef: () => d2,
  useState: () => m2,
  version: () => B
});
function E3(n6, t3) {
  for (var e4 in t3) n6[e4] = t3[e4];
  return n6;
}
function w3(n6, t3) {
  for (var e4 in n6) if ("__source" !== e4 && !(e4 in t3)) return true;
  for (var r5 in t3) if ("__source" !== r5 && n6[r5] !== t3[r5]) return true;
  return false;
}
function _3(n6, t3) {
  function e4(n7) {
    var e5 = this.props.ref, r6 = e5 == n7.ref;
    return !r6 && e5 && (e5.call ? e5(null) : e5.current = null), t3 ? !t3(this.props, n7) || !r6 : w3(this.props, n7);
  }
  function r5(t4) {
    return this.shouldComponentUpdate = e4, h(n6, E3({}, t4));
  }
  return r5.prototype.isReactComponent = true, r5.displayName = "Memo(" + (n6.displayName || n6.name) + ")", r5.t = true, r5;
}
function S(n6) {
  function t3(t4) {
    var e4 = E3({}, t4);
    return delete e4.ref, n6(e4, t4.ref);
  }
  return t3.prototype.isReactComponent = t3.t = true, t3.displayName = "ForwardRef(" + (n6.displayName || n6.name) + ")", t3;
}
function N2(n6) {
  return n6 && ((n6 = E3({}, n6)).__c = null, n6.__k = n6.__k && n6.__k.map(N2)), n6;
}
function U() {
  this.__u = 0, this.o = null, this.__b = null;
}
function M2(n6) {
  var t3 = n6.__.__c;
  return t3 && t3.u && t3.u(n6);
}
function L2(n6) {
  var t3, e4, r5;
  function o6(o7) {
    if (t3 || (t3 = n6()).then(function(n7) {
      e4 = n7.default || n7;
    }, function(n7) {
      r5 = n7;
    }), r5) throw r5;
    if (!e4) throw t3;
    return h(e4, o7);
  }
  return o6.displayName = "Lazy", o6.t = true, o6;
}
function O() {
  this.i = null, this.l = null;
}
function j2(n6) {
  var t3 = this, e4 = n6.container, r5 = h(W, { context: t3.context }, n6.vnode);
  return t3.s && t3.s !== e4 && (t3.v.parentNode && t3.s.removeChild(t3.v), D(t3.h), t3.p = false), n6.vnode ? t3.p ? (e4.__k = t3.__k, H(r5, e4), t3.__k = e4.__k) : (t3.v = document.createTextNode(""), I("", e4), e4.appendChild(t3.v), t3.p = true, t3.s = e4, H(r5, e4, t3.v), t3.__k = t3.v.__k) : t3.p && (t3.v.parentNode && t3.s.removeChild(t3.v), D(t3.h)), t3.h = r5, t3.componentWillUnmount = function() {
    t3.v.parentNode && t3.s.removeChild(t3.v), D(t3.h);
  }, null;
}
function z2(n6, t3) {
  return h(j2, { vnode: n6, container: t3 });
}
function T3(n6, t3, e4) {
  if (null == t3.__k) for (; t3.firstChild; ) t3.removeChild(t3.firstChild);
  return H(n6, t3), "function" == typeof e4 && e4(), n6 ? n6.__c : null;
}
function V(n6, t3, e4) {
  return I(n6, t3), "function" == typeof e4 && e4(), n6 ? n6.__c : null;
}
function I2(n6, t3) {
  n6["UNSAFE_" + t3] && !n6[t3] && Object.defineProperty(n6, t3, { configurable: false, get: function() {
    return this["UNSAFE_" + t3];
  }, set: function(n7) {
    this["UNSAFE_" + t3] = n7;
  } });
}
function G(n6) {
  return h.bind(null, n6);
}
function J(n6) {
  return !!n6 && n6.$$typeof === H2;
}
function K(n6) {
  return J(n6) ? L.apply(null, arguments) : n6;
}
function Q(n6) {
  return !!n6.__k && (H(null, n6), true);
}
function X(n6) {
  return n6 && (n6.base || 1 === n6.nodeType && n6) || null;
}
var C2, A3, k2, R, F2, P2, W, D2, H2, Z, $2, q2, B, Y, compat_module_default;
var init_compat_module = __esm({
  "node_modules/preact/compat/dist/compat.module.js"() {
    init_hooks_module();
    init_hooks_module();
    init_preact_module();
    init_preact_module();
    C2 = function(n6) {
      var t3, e4;
      function r5(t4) {
        var e5;
        return (e5 = n6.call(this, t4) || this).isPureReactComponent = true, e5;
      }
      return e4 = n6, (t3 = r5).prototype = Object.create(e4.prototype), t3.prototype.constructor = t3, t3.__proto__ = e4, r5.prototype.shouldComponentUpdate = function(n7, t4) {
        return w3(this.props, n7) || w3(this.state, t4);
      }, r5;
    }(m);
    A3 = n.__b;
    n.__b = function(n6) {
      n6.type && n6.type.t && n6.ref && (n6.props.ref = n6.ref, n6.ref = null), A3 && A3(n6);
    };
    k2 = function(n6, t3) {
      return n6 ? x(n6).reduce(function(n7, e4, r5) {
        return n7.concat(t3(e4, r5));
      }, []) : null;
    };
    R = { map: k2, forEach: k2, count: function(n6) {
      return n6 ? x(n6).length : 0;
    }, only: function(n6) {
      if (1 !== (n6 = x(n6)).length) throw new Error("Children.only() expects only one child.");
      return n6[0];
    }, toArray: x };
    F2 = n.__e;
    n.__e = function(n6, t3, e4) {
      if (n6.then) {
        for (var r5, o6 = t3; o6 = o6.__; ) if ((r5 = o6.__c) && r5.__c) return r5.__c(n6, t3.__c);
      }
      F2(n6, t3, e4);
    }, (U.prototype = new m()).__c = function(n6, t3) {
      var e4 = this;
      null == e4.o && (e4.o = []), e4.o.push(t3);
      var r5 = M2(e4.__v), o6 = false, u5 = function() {
        o6 || (o6 = true, r5 ? r5(i7) : i7());
      };
      t3.__c = t3.componentWillUnmount, t3.componentWillUnmount = function() {
        u5(), t3.__c && t3.__c();
      };
      var i7 = function() {
        var n7;
        if (!--e4.__u) for (e4.__v.__k[0] = e4.state.u, e4.setState({ u: e4.__b = null }); n7 = e4.o.pop(); ) n7.forceUpdate();
      };
      e4.__u++ || e4.setState({ u: e4.__b = e4.__v.__k[0] }), n6.then(u5, u5);
    }, U.prototype.render = function(n6, t3) {
      return this.__b && (this.__v.__k[0] = N2(this.__b), this.__b = null), [h(m, null, t3.u ? null : n6.children), t3.u && n6.fallback];
    };
    P2 = function(n6, t3, e4) {
      if (++e4[1] === e4[0] && n6.l.delete(t3), n6.props.revealOrder && ("t" !== n6.props.revealOrder[0] || !n6.l.size)) for (e4 = n6.i; e4; ) {
        for (; e4.length > 3; ) e4.pop()();
        if (e4[1] < e4[0]) break;
        n6.i = e4 = e4[2];
      }
    };
    (O.prototype = new m()).u = function(n6) {
      var t3 = this, e4 = M2(t3.__v), r5 = t3.l.get(n6);
      return r5[0]++, function(o6) {
        var u5 = function() {
          t3.props.revealOrder ? (r5.push(o6), P2(t3, n6, r5)) : o6();
        };
        e4 ? e4(u5) : u5();
      };
    }, O.prototype.render = function(n6) {
      this.i = null, this.l = /* @__PURE__ */ new Map();
      var t3 = x(n6.children);
      n6.revealOrder && "b" === n6.revealOrder[0] && t3.reverse();
      for (var e4 = t3.length; e4--; ) this.l.set(t3[e4], this.i = [1, 0, this.i]);
      return n6.children;
    }, O.prototype.componentDidUpdate = O.prototype.componentDidMount = function() {
      var n6 = this;
      n6.l.forEach(function(t3, e4) {
        P2(n6, e4, t3);
      });
    };
    W = function() {
      function n6() {
      }
      var t3 = n6.prototype;
      return t3.getChildContext = function() {
        return this.props.context;
      }, t3.render = function(n7) {
        return n7.children;
      }, n6;
    }();
    D2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    m.prototype.isReactComponent = {};
    H2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    Z = n.event;
    n.event = function(n6) {
      Z && (n6 = Z(n6)), n6.persist = function() {
      };
      var t3 = false, e4 = false, r5 = n6.stopPropagation;
      n6.stopPropagation = function() {
        r5.call(n6), t3 = true;
      };
      var o6 = n6.preventDefault;
      return n6.preventDefault = function() {
        o6.call(n6), e4 = true;
      }, n6.isPropagationStopped = function() {
        return t3;
      }, n6.isDefaultPrevented = function() {
        return e4;
      }, n6.nativeEvent = n6;
    };
    $2 = { configurable: true, get: function() {
      return this.class;
    } };
    q2 = n.vnode;
    n.vnode = function(n6) {
      n6.$$typeof = H2;
      var t3 = n6.type, e4 = n6.props;
      if (t3) {
        if (e4.class != e4.className && ($2.enumerable = "className" in e4, null != e4.className && (e4.class = e4.className), Object.defineProperty(e4, "className", $2)), "function" != typeof t3) {
          var r5, o6, u5;
          for (u5 in e4.defaultValue && void 0 !== e4.value && (e4.value || 0 === e4.value || (e4.value = e4.defaultValue), delete e4.defaultValue), Array.isArray(e4.value) && e4.multiple && "select" === t3 && (x(e4.children).forEach(function(n7) {
            -1 != e4.value.indexOf(n7.props.value) && (n7.props.selected = true);
          }), delete e4.value), e4) if (r5 = D2.test(u5)) break;
          if (r5) for (u5 in o6 = n6.props = {}, e4) o6[D2.test(u5) ? u5.replace(/[A-Z0-9]/, "-$&").toLowerCase() : u5] = e4[u5];
        }
        !function(t4) {
          var e5 = n6.type, r6 = n6.props;
          if (r6 && "string" == typeof e5) {
            var o7 = {};
            for (var u6 in r6) /^on(Ani|Tra|Tou)/.test(u6) && (r6[u6.toLowerCase()] = r6[u6], delete r6[u6]), o7[u6.toLowerCase()] = u6;
            if (o7.ondoubleclick && (r6.ondblclick = r6[o7.ondoubleclick], delete r6[o7.ondoubleclick]), o7.onbeforeinput && (r6.onbeforeinput = r6[o7.onbeforeinput], delete r6[o7.onbeforeinput]), o7.onchange && ("textarea" === e5 || "input" === e5.toLowerCase() && !/^fil|che|ra/i.test(r6.type))) {
              var i7 = o7.oninput || "oninput";
              r6[i7] || (r6[i7] = r6[o7.onchange], delete r6[o7.onchange]);
            }
          }
        }(), "function" == typeof t3 && !t3.m && t3.prototype && (I2(t3.prototype, "componentWillMount"), I2(t3.prototype, "componentWillReceiveProps"), I2(t3.prototype, "componentWillUpdate"), t3.m = true);
      }
      q2 && q2(n6);
    };
    B = "16.8.0";
    Y = function(n6, t3) {
      return n6(t3);
    };
    compat_module_default = { useState: m2, useReducer: p2, useEffect: l2, useLayoutEffect: y2, useRef: d2, useImperativeHandle: s2, useMemo: h2, useCallback: T2, useContext: w2, useDebugValue: A2, version: "16.8.0", Children: R, render: T3, hydrate: T3, unmountComponentAtNode: Q, createPortal: z2, createElement: h, createContext: M, createFactory: G, cloneElement: K, createRef: y, Fragment: d, isValidElement: J, findDOMNode: X, Component: m, PureComponent: C2, memo: _3, forwardRef: S, unstable_batchedUpdates: Y, Suspense: U, SuspenseList: O, lazy: L2 };
  }
});

// node_modules/@walletconnect/qrcode-modal/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@walletconnect/qrcode-modal/dist/cjs/index.js"(exports, module) {
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var browserUtils = (init_esm2(), __toCommonJS(esm_exports2));
    var QRCode = _interopDefault(require_browser());
    var copy = _interopDefault(require_copy_to_clipboard());
    var React = (init_compat_module(), __toCommonJS(compat_module_exports));
    function open(uri) {
      QRCode.toString(uri, {
        type: "terminal"
      }).then(console.log);
    }
    var WALLETCONNECT_STYLE_SHEET = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n';
    var _iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
    var _asyncIteratorSymbol = typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")) : "@@asyncIterator";
    function _catch(body, recover) {
      try {
        var result = body();
      } catch (e4) {
        return recover(e4);
      }
      if (result && result.then) {
        return result.then(void 0, recover);
      }
      return result;
    }
    var WALLETCONNECT_LOGO_SVG_URL = "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E";
    var WALLETCONNECT_HEADER_TEXT = "WalletConnect";
    var ANIMATION_DURATION = 300;
    var DEFAULT_BUTTON_COLOR = "rgb(64, 153, 255)";
    var WALLETCONNECT_WRAPPER_ID = "walletconnect-wrapper";
    var WALLETCONNECT_STYLE_ID = "walletconnect-style-sheet";
    var WALLETCONNECT_MODAL_ID = "walletconnect-qrcode-modal";
    var WALLETCONNECT_CLOSE_BUTTON_ID = "walletconnect-qrcode-close";
    var WALLETCONNECT_CTA_TEXT_ID = "walletconnect-qrcode-text";
    var WALLETCONNECT_CONNECT_BUTTON_ID = "walletconnect-connect-button";
    function Header(props) {
      return React.createElement("div", {
        className: "walletconnect-modal__header"
      }, React.createElement("img", {
        src: WALLETCONNECT_LOGO_SVG_URL,
        className: "walletconnect-modal__headerLogo"
      }), React.createElement("p", null, WALLETCONNECT_HEADER_TEXT), React.createElement("div", {
        className: "walletconnect-modal__close__wrapper",
        onClick: props.onClose
      }, React.createElement("div", {
        id: WALLETCONNECT_CLOSE_BUTTON_ID,
        className: "walletconnect-modal__close__icon"
      }, React.createElement("div", {
        className: "walletconnect-modal__close__line1"
      }), React.createElement("div", {
        className: "walletconnect-modal__close__line2"
      }))));
    }
    function ConnectButton(props) {
      return React.createElement("a", {
        className: "walletconnect-connect__button",
        href: props.href,
        id: WALLETCONNECT_CONNECT_BUTTON_ID + "-" + props.name,
        onClick: props.onClick,
        rel: "noopener noreferrer",
        style: {
          backgroundColor: props.color
        },
        target: "_blank"
      }, props.name);
    }
    var CARET_SVG_URL = "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";
    function WalletButton(props) {
      var color = props.color;
      var href = props.href;
      var name2 = props.name;
      var logo = props.logo;
      var onClick = props.onClick;
      return React.createElement("a", {
        className: "walletconnect-modal__base__row",
        href,
        onClick,
        rel: "noopener noreferrer",
        target: "_blank"
      }, React.createElement("h3", {
        className: "walletconnect-modal__base__row__h3"
      }, name2), React.createElement("div", {
        className: "walletconnect-modal__base__row__right"
      }, React.createElement("div", {
        className: "walletconnect-modal__base__row__right__app-icon",
        style: {
          background: "url('" + logo + "') " + color,
          backgroundSize: "100%"
        }
      }), React.createElement("img", {
        src: CARET_SVG_URL,
        className: "walletconnect-modal__base__row__right__caret"
      })));
    }
    function WalletIcon(props) {
      var color = props.color;
      var href = props.href;
      var name2 = props.name;
      var logo = props.logo;
      var onClick = props.onClick;
      var fontSize = window.innerWidth < 768 ? (name2.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
      return React.createElement("a", {
        className: "walletconnect-connect__button__icon_anchor",
        href,
        onClick,
        rel: "noopener noreferrer",
        target: "_blank"
      }, React.createElement("div", {
        className: "walletconnect-connect__button__icon",
        style: {
          background: "url('" + logo + "') " + color,
          backgroundSize: "100%"
        }
      }), React.createElement("div", {
        style: {
          fontSize
        },
        className: "walletconnect-connect__button__text"
      }, name2));
    }
    var GRID_MIN_COUNT = 5;
    var LINKS_PER_PAGE = 12;
    function LinkDisplay(props) {
      var android = browserUtils.isAndroid();
      var ref = React.useState("");
      var input = ref[0];
      var setInput = ref[1];
      var ref$1 = React.useState("");
      var filter = ref$1[0];
      var setFilter = ref$1[1];
      var ref$2 = React.useState(1);
      var page = ref$2[0];
      var setPage = ref$2[1];
      var links = filter ? props.links.filter(function(link) {
        return link.name.toLowerCase().includes(filter.toLowerCase());
      }) : props.links;
      var errorMessage = props.errorMessage;
      var grid = filter || links.length > GRID_MIN_COUNT;
      var pages = Math.ceil(links.length / LINKS_PER_PAGE);
      var range = [(page - 1) * LINKS_PER_PAGE + 1, page * LINKS_PER_PAGE];
      var pageLinks = links.length ? links.filter(function(_6, index2) {
        return index2 + 1 >= range[0] && index2 + 1 <= range[1];
      }) : [];
      var hasPaging = !!(!android && pages > 1);
      var filterTimeout = void 0;
      function handleInput(e4) {
        setInput(e4.target.value);
        clearTimeout(filterTimeout);
        if (e4.target.value) {
          filterTimeout = setTimeout(function() {
            setFilter(e4.target.value);
            setPage(1);
          }, 1e3);
        } else {
          setInput("");
          setFilter("");
          setPage(1);
        }
      }
      return React.createElement("div", null, React.createElement("p", {
        id: WALLETCONNECT_CTA_TEXT_ID,
        className: "walletconnect-qrcode__text"
      }, android ? props.text.connect_mobile_wallet : props.text.choose_preferred_wallet), !android && React.createElement("input", {
        className: "walletconnect-search__input",
        placeholder: "Search",
        value: input,
        onChange: handleInput
      }), React.createElement("div", {
        className: "walletconnect-connect__buttons__wrapper" + (android ? "__android" : grid && links.length ? "__wrap" : "")
      }, !android ? pageLinks.length ? pageLinks.map(function(entry) {
        var color = entry.color;
        var name2 = entry.name;
        var shortName = entry.shortName;
        var logo = entry.logo;
        var href = browserUtils.formatIOSMobile(props.uri, entry);
        var handleClickIOS = React.useCallback(function() {
          browserUtils.saveMobileLinkInfo({
            name: name2,
            href
          });
        }, [pageLinks]);
        return !grid ? React.createElement(WalletButton, {
          color,
          href,
          name: name2,
          logo,
          onClick: handleClickIOS
        }) : React.createElement(WalletIcon, {
          color,
          href,
          name: shortName || name2,
          logo,
          onClick: handleClickIOS
        });
      }) : React.createElement(React.Fragment, null, React.createElement("p", null, errorMessage.length ? props.errorMessage : !!props.links.length && !links.length ? props.text.no_wallets_found : props.text.loading)) : React.createElement(ConnectButton, {
        name: props.text.connect,
        color: DEFAULT_BUTTON_COLOR,
        href: props.uri,
        onClick: React.useCallback(function() {
          browserUtils.saveMobileLinkInfo({
            name: "Unknown",
            href: props.uri
          });
        }, [])
      })), hasPaging && React.createElement("div", {
        className: "walletconnect-modal__footer"
      }, Array(pages).fill(0).map(function(_6, index2) {
        var pageNumber = index2 + 1;
        var selected = page === pageNumber;
        return React.createElement("a", {
          style: {
            margin: "auto 10px",
            fontWeight: selected ? "bold" : "normal"
          },
          onClick: function() {
            return setPage(pageNumber);
          }
        }, pageNumber);
      })));
    }
    function Notification(props) {
      var show = !!props.message.trim();
      return React.createElement("div", {
        className: "walletconnect-qrcode__notification" + (show ? " notification__show" : "")
      }, props.message);
    }
    var formatQRCodeImage = function(data) {
      try {
        var result = "";
        return Promise.resolve(QRCode.toString(data, {
          margin: 0,
          type: "svg"
        })).then(function(dataString) {
          if (typeof dataString === "string") {
            result = dataString.replace("<svg", '<svg class="walletconnect-qrcode__image"');
          }
          return result;
        });
      } catch (e4) {
        return Promise.reject(e4);
      }
    };
    function QRCodeDisplay(props) {
      var ref = React.useState("");
      var notification = ref[0];
      var setNotification = ref[1];
      var ref$1 = React.useState("");
      var svg = ref$1[0];
      var setSvg = ref$1[1];
      React.useEffect(function() {
        try {
          return Promise.resolve(formatQRCodeImage(props.uri)).then(function(_formatQRCodeImage) {
            setSvg(_formatQRCodeImage);
          });
        } catch (e4) {
          Promise.reject(e4);
        }
      }, []);
      var copyToClipboard = function() {
        var success = copy(props.uri);
        if (success) {
          setNotification(props.text.copied_to_clipboard);
          setInterval(function() {
            return setNotification("");
          }, 1200);
        } else {
          setNotification("Error");
          setInterval(function() {
            return setNotification("");
          }, 1200);
        }
      };
      return React.createElement("div", null, React.createElement("p", {
        id: WALLETCONNECT_CTA_TEXT_ID,
        className: "walletconnect-qrcode__text"
      }, props.text.scan_qrcode_with_wallet), React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: svg
        }
      }), React.createElement("div", {
        className: "walletconnect-modal__footer"
      }, React.createElement("a", {
        onClick: copyToClipboard
      }, props.text.copy_to_clipboard)), React.createElement(Notification, {
        message: notification
      }));
    }
    function Modal(props) {
      var android = browserUtils.isAndroid();
      var mobile = browserUtils.isMobile();
      var whitelist = mobile ? props.qrcodeModalOptions && props.qrcodeModalOptions.mobileLinks ? props.qrcodeModalOptions.mobileLinks : void 0 : props.qrcodeModalOptions && props.qrcodeModalOptions.desktopLinks ? props.qrcodeModalOptions.desktopLinks : void 0;
      var ref = React.useState(false);
      var loading = ref[0];
      var setLoading = ref[1];
      var ref$1 = React.useState(false);
      var fetched = ref$1[0];
      var setFetched = ref$1[1];
      var ref$2 = React.useState(!mobile);
      var displayQRCode = ref$2[0];
      var setDisplayQRCode = ref$2[1];
      var displayProps = {
        mobile,
        text: props.text,
        uri: props.uri,
        qrcodeModalOptions: props.qrcodeModalOptions
      };
      var ref$3 = React.useState("");
      var singleLinkHref = ref$3[0];
      var setSingleLinkHref = ref$3[1];
      var ref$4 = React.useState(false);
      var hasSingleLink = ref$4[0];
      var setHasSingleLink = ref$4[1];
      var ref$5 = React.useState([]);
      var links = ref$5[0];
      var setLinks = ref$5[1];
      var ref$6 = React.useState("");
      var errorMessage = ref$6[0];
      var setErrorMessage = ref$6[1];
      var getLinksIfNeeded = function() {
        if (fetched || loading || whitelist && !whitelist.length || links.length > 0) {
          return;
        }
        React.useEffect(function() {
          var initLinks = function() {
            try {
              if (android) {
                return Promise.resolve();
              }
              setLoading(true);
              var _temp = _catch(function() {
                var url = props.qrcodeModalOptions && props.qrcodeModalOptions.registryUrl ? props.qrcodeModalOptions.registryUrl : browserUtils.getWalletRegistryUrl();
                return Promise.resolve(fetch(url)).then(function(registryResponse) {
                  return Promise.resolve(registryResponse.json()).then(function(_registryResponse$jso) {
                    var registry = _registryResponse$jso.listings;
                    var platform = mobile ? "mobile" : "desktop";
                    var _links = browserUtils.getMobileLinkRegistry(browserUtils.formatMobileRegistry(registry, platform), whitelist);
                    setLoading(false);
                    setFetched(true);
                    setErrorMessage(!_links.length ? props.text.no_supported_wallets : "");
                    setLinks(_links);
                    var hasSingleLink2 = _links.length === 1;
                    if (hasSingleLink2) {
                      setSingleLinkHref(browserUtils.formatIOSMobile(props.uri, _links[0]));
                      setDisplayQRCode(true);
                    }
                    setHasSingleLink(hasSingleLink2);
                  });
                });
              }, function(e4) {
                setLoading(false);
                setFetched(true);
                setErrorMessage(props.text.something_went_wrong);
                console.error(e4);
              });
              return Promise.resolve(_temp && _temp.then ? _temp.then(function() {
              }) : void 0);
            } catch (e4) {
              return Promise.reject(e4);
            }
          };
          initLinks();
        });
      };
      getLinksIfNeeded();
      var rightSelected = mobile ? displayQRCode : !displayQRCode;
      return React.createElement("div", {
        id: WALLETCONNECT_MODAL_ID,
        className: "walletconnect-qrcode__base animated fadeIn"
      }, React.createElement("div", {
        className: "walletconnect-modal__base"
      }, React.createElement(Header, {
        onClose: props.onClose
      }), hasSingleLink && displayQRCode ? React.createElement("div", {
        className: "walletconnect-modal__single_wallet"
      }, React.createElement("a", {
        onClick: function() {
          return browserUtils.saveMobileLinkInfo({
            name: links[0].name,
            href: singleLinkHref
          });
        },
        href: singleLinkHref,
        rel: "noopener noreferrer",
        target: "_blank"
      }, props.text.connect_with + " " + (hasSingleLink ? links[0].name : "") + " ›")) : android || loading || !loading && links.length ? React.createElement("div", {
        className: "walletconnect-modal__mobile__toggle" + (rightSelected ? " right__selected" : "")
      }, React.createElement("div", {
        className: "walletconnect-modal__mobile__toggle_selector"
      }), mobile ? React.createElement(React.Fragment, null, React.createElement("a", {
        onClick: function() {
          return setDisplayQRCode(false), getLinksIfNeeded();
        }
      }, props.text.mobile), React.createElement("a", {
        onClick: function() {
          return setDisplayQRCode(true);
        }
      }, props.text.qrcode)) : React.createElement(React.Fragment, null, React.createElement("a", {
        onClick: function() {
          return setDisplayQRCode(true);
        }
      }, props.text.qrcode), React.createElement("a", {
        onClick: function() {
          return setDisplayQRCode(false), getLinksIfNeeded();
        }
      }, props.text.desktop))) : null, React.createElement("div", null, displayQRCode || !android && !loading && !links.length ? React.createElement(QRCodeDisplay, Object.assign({}, displayProps)) : React.createElement(LinkDisplay, Object.assign(
        {},
        displayProps,
        {
          links,
          errorMessage
        }
      )))));
    }
    var de2 = {
      choose_preferred_wallet: "Wähle bevorzugte Wallet",
      connect_mobile_wallet: "Verbinde mit Mobile Wallet",
      scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
      connect: "Verbinden",
      qrcode: "QR-Code",
      mobile: "Mobile",
      desktop: "Desktop",
      copy_to_clipboard: "In die Zwischenablage kopieren",
      copied_to_clipboard: "In die Zwischenablage kopiert!",
      connect_with: "Verbinden mit Hilfe von",
      loading: "Laden...",
      something_went_wrong: "Etwas ist schief gelaufen",
      no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
      no_wallets_found: "keine Wallet gefunden"
    };
    var en3 = {
      choose_preferred_wallet: "Choose your preferred wallet",
      connect_mobile_wallet: "Connect to Mobile Wallet",
      scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
      connect: "Connect",
      qrcode: "QR Code",
      mobile: "Mobile",
      desktop: "Desktop",
      copy_to_clipboard: "Copy to clipboard",
      copied_to_clipboard: "Copied to clipboard!",
      connect_with: "Connect with",
      loading: "Loading...",
      something_went_wrong: "Something went wrong",
      no_supported_wallets: "There are no supported wallets yet",
      no_wallets_found: "No wallets found"
    };
    var es3 = {
      choose_preferred_wallet: "Elige tu billetera preferida",
      connect_mobile_wallet: "Conectar a billetera móvil",
      scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
      connect: "Conectar",
      qrcode: "Código QR",
      mobile: "Móvil",
      desktop: "Desktop",
      copy_to_clipboard: "Copiar",
      copied_to_clipboard: "Copiado!",
      connect_with: "Conectar mediante",
      loading: "Cargando...",
      something_went_wrong: "Algo salió mal",
      no_supported_wallets: "Todavía no hay billeteras compatibles",
      no_wallets_found: "No se encontraron billeteras"
    };
    var fr3 = {
      choose_preferred_wallet: "Choisissez votre portefeuille préféré",
      connect_mobile_wallet: "Se connecter au portefeuille mobile",
      scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
      connect: "Se connecter",
      qrcode: "QR Code",
      mobile: "Mobile",
      desktop: "Desktop",
      copy_to_clipboard: "Copier",
      copied_to_clipboard: "Copié!",
      connect_with: "Connectez-vous à l'aide de",
      loading: "Chargement...",
      something_went_wrong: "Quelque chose a mal tourné",
      no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
      no_wallets_found: "Aucun portefeuille trouvé"
    };
    var ko2 = {
      choose_preferred_wallet: "원하는 지갑을 선택하세요",
      connect_mobile_wallet: "모바일 지갑과 연결",
      scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
      connect: "연결",
      qrcode: "QR 코드",
      mobile: "모바일",
      desktop: "데스크탑",
      copy_to_clipboard: "클립보드에 복사",
      copied_to_clipboard: "클립보드에 복사되었습니다!",
      connect_with: "와 연결하다",
      loading: "로드 중...",
      something_went_wrong: "문제가 발생했습니다.",
      no_supported_wallets: "아직 지원되는 지갑이 없습니다",
      no_wallets_found: "지갑을 찾을 수 없습니다"
    };
    var pt3 = {
      choose_preferred_wallet: "Escolha sua carteira preferida",
      connect_mobile_wallet: "Conectar-se à carteira móvel",
      scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
      connect: "Conectar",
      qrcode: "Código QR",
      mobile: "Móvel",
      desktop: "Desktop",
      copy_to_clipboard: "Copiar",
      copied_to_clipboard: "Copiado!",
      connect_with: "Ligar por meio de",
      loading: "Carregamento...",
      something_went_wrong: "Algo correu mal",
      no_supported_wallets: "Ainda não há carteiras suportadas",
      no_wallets_found: "Nenhuma carteira encontrada"
    };
    var zh = {
      choose_preferred_wallet: "选择你的钱包",
      connect_mobile_wallet: "连接至移动端钱包",
      scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
      connect: "连接",
      qrcode: "二维码",
      mobile: "移动",
      desktop: "桌面",
      copy_to_clipboard: "复制到剪贴板",
      copied_to_clipboard: "复制到剪贴板成功！",
      connect_with: "通过以下方式连接",
      loading: "正在加载...",
      something_went_wrong: "出了问题",
      no_supported_wallets: "目前还没有支持的钱包",
      no_wallets_found: "没有找到钱包"
    };
    var fa2 = {
      choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
      connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
      scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
      connect: "اتصال",
      qrcode: "کد QR",
      mobile: "سیار",
      desktop: "دسکتاپ",
      copy_to_clipboard: "کپی به کلیپ بورد",
      copied_to_clipboard: "در کلیپ بورد کپی شد!",
      connect_with: "ارتباط با",
      loading: "...بارگذاری",
      something_went_wrong: "مشکلی پیش آمد",
      no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
      no_wallets_found: "هیچ کیف پولی پیدا نشد"
    };
    var languages = {
      de: de2,
      en: en3,
      es: es3,
      fr: fr3,
      ko: ko2,
      pt: pt3,
      zh,
      fa: fa2
    };
    function injectStyleSheet() {
      var doc = browserUtils.getDocumentOrThrow();
      var prev = doc.getElementById(WALLETCONNECT_STYLE_ID);
      if (prev) {
        doc.head.removeChild(prev);
      }
      var style = doc.createElement("style");
      style.setAttribute("id", WALLETCONNECT_STYLE_ID);
      style.innerText = WALLETCONNECT_STYLE_SHEET;
      doc.head.appendChild(style);
    }
    function renderWrapper() {
      var doc = browserUtils.getDocumentOrThrow();
      var wrapper = doc.createElement("div");
      wrapper.setAttribute("id", WALLETCONNECT_WRAPPER_ID);
      doc.body.appendChild(wrapper);
      return wrapper;
    }
    function triggerCloseAnimation() {
      var doc = browserUtils.getDocumentOrThrow();
      var modal = doc.getElementById(WALLETCONNECT_MODAL_ID);
      if (modal) {
        modal.className = modal.className.replace("fadeIn", "fadeOut");
        setTimeout(function() {
          var wrapper = doc.getElementById(WALLETCONNECT_WRAPPER_ID);
          if (wrapper) {
            doc.body.removeChild(wrapper);
          }
        }, ANIMATION_DURATION);
      }
    }
    function getWrappedCallback(cb) {
      return function() {
        triggerCloseAnimation();
        if (cb) {
          cb();
        }
      };
    }
    function getText() {
      var lang = browserUtils.getNavigatorOrThrow().language.split("-")[0] || "en";
      return languages[lang] || languages["en"];
    }
    function open$1(uri, cb, qrcodeModalOptions) {
      injectStyleSheet();
      var wrapper = renderWrapper();
      React.render(React.createElement(Modal, {
        text: getText(),
        uri,
        onClose: getWrappedCallback(cb),
        qrcodeModalOptions
      }), wrapper);
    }
    function close$1() {
      triggerCloseAnimation();
    }
    var isNode3 = function() {
      return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
    };
    function open$2(uri, cb, qrcodeModalOptions) {
      console.log(uri);
      if (isNode3()) {
        open(uri);
      } else {
        open$1(uri, cb, qrcodeModalOptions);
      }
    }
    function close$2() {
      if (isNode3()) ;
      else {
        close$1();
      }
    }
    var index = {
      open: open$2,
      close: close$2
    };
    module.exports = index;
  }
});

// node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays2,
  __values: () => __values
});
function __extends(d5, b5) {
  extendStatics(d5, b5);
  function __() {
    this.constructor = d5;
  }
  d5.prototype = b5 === null ? Object.create(b5) : (__.prototype = b5.prototype, new __());
}
function __rest(s5, e4) {
  var t3 = {};
  for (var p5 in s5) if (Object.prototype.hasOwnProperty.call(s5, p5) && e4.indexOf(p5) < 0)
    t3[p5] = s5[p5];
  if (s5 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i7 = 0, p5 = Object.getOwnPropertySymbols(s5); i7 < p5.length; i7++) {
      if (e4.indexOf(p5[i7]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p5[i7]))
        t3[p5[i7]] = s5[p5[i7]];
    }
  return t3;
}
function __decorate(decorators, target, key, desc) {
  var c8 = arguments.length, r5 = c8 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d5 = decorators[i7]) r5 = (c8 < 3 ? d5(r5) : c8 > 3 ? d5(target, key, r5) : d5(target, key)) || r5;
  return c8 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P4, generator) {
  function adopt(value) {
    return value instanceof P4 ? value : new P4(function(resolve) {
      resolve(value);
    });
  }
  return new (P4 || (P4 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _6 = { label: 0, sent: function() {
    if (t3[0] & 1) throw t3[1];
    return t3[1];
  }, trys: [], ops: [] }, f6, y8, t3, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n6) {
    return function(v6) {
      return step([n6, v6]);
    };
  }
  function step(op) {
    if (f6) throw new TypeError("Generator is already executing.");
    while (_6) try {
      if (f6 = 1, y8 && (t3 = op[0] & 2 ? y8["return"] : op[0] ? y8["throw"] || ((t3 = y8["return"]) && t3.call(y8), 0) : y8.next) && !(t3 = t3.call(y8, op[1])).done) return t3;
      if (y8 = 0, t3) op = [op[0] & 2, t3.value];
      switch (op[0]) {
        case 0:
        case 1:
          t3 = op;
          break;
        case 4:
          _6.label++;
          return { value: op[1], done: false };
        case 5:
          _6.label++;
          y8 = op[1];
          op = [0];
          continue;
        case 7:
          op = _6.ops.pop();
          _6.trys.pop();
          continue;
        default:
          if (!(t3 = _6.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _6 = 0;
            continue;
          }
          if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
            _6.label = op[1];
            break;
          }
          if (op[0] === 6 && _6.label < t3[1]) {
            _6.label = t3[1];
            t3 = op;
            break;
          }
          if (t3 && _6.label < t3[2]) {
            _6.label = t3[2];
            _6.ops.push(op);
            break;
          }
          if (t3[2]) _6.ops.pop();
          _6.trys.pop();
          continue;
      }
      op = body.call(thisArg, _6);
    } catch (e4) {
      op = [6, e4];
      y8 = 0;
    } finally {
      f6 = t3 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o6, m4, k5, k22) {
  if (k22 === void 0) k22 = k5;
  o6[k22] = m4[k5];
}
function __exportStar(m4, exports) {
  for (var p5 in m4) if (p5 !== "default" && !exports.hasOwnProperty(p5)) exports[p5] = m4[p5];
}
function __values(o6) {
  var s5 = typeof Symbol === "function" && Symbol.iterator, m4 = s5 && o6[s5], i7 = 0;
  if (m4) return m4.call(o6);
  if (o6 && typeof o6.length === "number") return {
    next: function() {
      if (o6 && i7 >= o6.length) o6 = void 0;
      return { value: o6 && o6[i7++], done: !o6 };
    }
  };
  throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o6, n6) {
  var m4 = typeof Symbol === "function" && o6[Symbol.iterator];
  if (!m4) return o6;
  var i7 = m4.call(o6), r5, ar3 = [], e4;
  try {
    while ((n6 === void 0 || n6-- > 0) && !(r5 = i7.next()).done) ar3.push(r5.value);
  } catch (error) {
    e4 = { error };
  } finally {
    try {
      if (r5 && !r5.done && (m4 = i7["return"])) m4.call(i7);
    } finally {
      if (e4) throw e4.error;
    }
  }
  return ar3;
}
function __spread() {
  for (var ar3 = [], i7 = 0; i7 < arguments.length; i7++)
    ar3 = ar3.concat(__read(arguments[i7]));
  return ar3;
}
function __spreadArrays2() {
  for (var s5 = 0, i7 = 0, il = arguments.length; i7 < il; i7++) s5 += arguments[i7].length;
  for (var r5 = Array(s5), k5 = 0, i7 = 0; i7 < il; i7++)
    for (var a6 = arguments[i7], j6 = 0, jl = a6.length; j6 < jl; j6++, k5++)
      r5[k5] = a6[j6];
  return r5;
}
function __await(v6) {
  return this instanceof __await ? (this.v = v6, this) : new __await(v6);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g5 = generator.apply(thisArg, _arguments || []), i7, q4 = [];
  return i7 = {}, verb("next"), verb("throw"), verb("return"), i7[Symbol.asyncIterator] = function() {
    return this;
  }, i7;
  function verb(n6) {
    if (g5[n6]) i7[n6] = function(v6) {
      return new Promise(function(a6, b5) {
        q4.push([n6, v6, a6, b5]) > 1 || resume(n6, v6);
      });
    };
  }
  function resume(n6, v6) {
    try {
      step(g5[n6](v6));
    } catch (e4) {
      settle(q4[0][3], e4);
    }
  }
  function step(r5) {
    r5.value instanceof __await ? Promise.resolve(r5.value.v).then(fulfill, reject) : settle(q4[0][2], r5);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f6, v6) {
    if (f6(v6), q4.shift(), q4.length) resume(q4[0][0], q4[0][1]);
  }
}
function __asyncDelegator(o6) {
  var i7, p5;
  return i7 = {}, verb("next"), verb("throw", function(e4) {
    throw e4;
  }), verb("return"), i7[Symbol.iterator] = function() {
    return this;
  }, i7;
  function verb(n6, f6) {
    i7[n6] = o6[n6] ? function(v6) {
      return (p5 = !p5) ? { value: __await(o6[n6](v6)), done: n6 === "return" } : f6 ? f6(v6) : v6;
    } : f6;
  }
}
function __asyncValues(o6) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m4 = o6[Symbol.asyncIterator], i7;
  return m4 ? m4.call(o6) : (o6 = typeof __values === "function" ? __values(o6) : o6[Symbol.iterator](), i7 = {}, verb("next"), verb("throw"), verb("return"), i7[Symbol.asyncIterator] = function() {
    return this;
  }, i7);
  function verb(n6) {
    i7[n6] = o6[n6] && function(v6) {
      return new Promise(function(resolve, reject) {
        v6 = o6[n6](v6), settle(resolve, reject, v6.done, v6.value);
      });
    };
  }
  function settle(resolve, reject, d5, v6) {
    Promise.resolve(v6).then(function(v7) {
      resolve({ value: v7, done: d5 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k5 in mod) if (Object.hasOwnProperty.call(mod, k5)) result[k5] = mod[k5];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
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
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d5, b5) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b6) {
        d6.__proto__ = b6;
      } || function(d6, b6) {
        for (var p5 in b6) if (b6.hasOwnProperty(p5)) d6[p5] = b6[p5];
      };
      return extendStatics(d5, b5);
    };
    __assign = function() {
      __assign = Object.assign || function __assign3(t3) {
        for (var s5, i7 = 1, n6 = arguments.length; i7 < n6; i7++) {
          s5 = arguments[i7];
          for (var p5 in s5) if (Object.prototype.hasOwnProperty.call(s5, p5)) t3[p5] = s5[p5];
        }
        return t3;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/delay.js
var require_delay = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/delay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delay = void 0;
    function delay(timeout) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, timeout);
      });
    }
    exports.delay = delay;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/misc.js
var require_misc = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/misc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
    exports.ONE_HUNDRED = 100;
    exports.ONE_THOUSAND = 1e3;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/time.js
var require_time = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/time.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
    exports.ONE_SECOND = 1;
    exports.FIVE_SECONDS = 5;
    exports.TEN_SECONDS = 10;
    exports.THIRTY_SECONDS = 30;
    exports.SIXTY_SECONDS = 60;
    exports.ONE_MINUTE = exports.SIXTY_SECONDS;
    exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
    exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
    exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
    exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
    exports.ONE_HOUR = exports.SIXTY_MINUTES;
    exports.THREE_HOURS = exports.ONE_HOUR * 3;
    exports.SIX_HOURS = exports.ONE_HOUR * 6;
    exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
    exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
    exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
    exports.THREE_DAYS = exports.ONE_DAY * 3;
    exports.FIVE_DAYS = exports.ONE_DAY * 5;
    exports.SEVEN_DAYS = exports.ONE_DAY * 7;
    exports.THIRTY_DAYS = exports.ONE_DAY * 30;
    exports.ONE_WEEK = exports.SEVEN_DAYS;
    exports.TWO_WEEKS = exports.ONE_WEEK * 2;
    exports.THREE_WEEKS = exports.ONE_WEEK * 3;
    exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
    exports.ONE_YEAR = exports.ONE_DAY * 365;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/index.js
var require_constants = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_misc(), exports);
    tslib_1.__exportStar(require_time(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/convert.js
var require_convert = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/convert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromMiliseconds = exports.toMiliseconds = void 0;
    var constants_1 = require_constants();
    function toMiliseconds(seconds) {
      return seconds * constants_1.ONE_THOUSAND;
    }
    exports.toMiliseconds = toMiliseconds;
    function fromMiliseconds2(miliseconds) {
      return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
    }
    exports.fromMiliseconds = fromMiliseconds2;
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/index.js
var require_utils3 = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_delay(), exports);
    tslib_1.__exportStar(require_convert(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/watch.js
var require_watch = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Watch = void 0;
    var Watch = class {
      constructor() {
        this.timestamps = /* @__PURE__ */ new Map();
      }
      start(label) {
        if (this.timestamps.has(label)) {
          throw new Error(`Watch already started for label: ${label}`);
        }
        this.timestamps.set(label, { started: Date.now() });
      }
      stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") {
          throw new Error(`Watch already stopped for label: ${label}`);
        }
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, { started: timestamp.started, elapsed });
      }
      get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") {
          throw new Error(`No timestamp found for label: ${label}`);
        }
        return timestamp;
      }
      elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
      }
    };
    exports.Watch = Watch;
    exports.default = Watch;
  }
});

// node_modules/@walletconnect/time/dist/cjs/types/watch.js
var require_watch2 = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/types/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IWatch = void 0;
    var IWatch = class {
    };
    exports.IWatch = IWatch;
  }
});

// node_modules/@walletconnect/time/dist/cjs/types/index.js
var require_types = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_watch2(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_utils3(), exports);
    tslib_1.__exportStar(require_watch(), exports);
    tslib_1.__exportStar(require_types(), exports);
    tslib_1.__exportStar(require_constants(), exports);
  }
});

// node_modules/quick-format-unescaped/index.js
var require_quick_format_unescaped = __commonJS({
  "node_modules/quick-format-unescaped/index.js"(exports, module) {
    "use strict";
    function tryStringify(o6) {
      try {
        return JSON.stringify(o6);
      } catch (e4) {
        return '"[Circular]"';
      }
    }
    module.exports = format;
    function format(f6, args, opts) {
      var ss3 = opts && opts.stringify || tryStringify;
      var offset = 1;
      if (typeof f6 === "object" && f6 !== null) {
        var len = args.length + offset;
        if (len === 1) return f6;
        var objects = new Array(len);
        objects[0] = ss3(f6);
        for (var index = 1; index < len; index++) {
          objects[index] = ss3(args[index]);
        }
        return objects.join(" ");
      }
      if (typeof f6 !== "string") {
        return f6;
      }
      var argLen = args.length;
      if (argLen === 0) return f6;
      var str = "";
      var a6 = 1 - offset;
      var lastPos = -1;
      var flen = f6 && f6.length || 0;
      for (var i7 = 0; i7 < flen; ) {
        if (f6.charCodeAt(i7) === 37 && i7 + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f6.charCodeAt(i7 + 1)) {
            case 100:
            case 102:
              if (a6 >= argLen)
                break;
              if (args[a6] == null) break;
              if (lastPos < i7)
                str += f6.slice(lastPos, i7);
              str += Number(args[a6]);
              lastPos = i7 + 2;
              i7++;
              break;
            case 105:
              if (a6 >= argLen)
                break;
              if (args[a6] == null) break;
              if (lastPos < i7)
                str += f6.slice(lastPos, i7);
              str += Math.floor(Number(args[a6]));
              lastPos = i7 + 2;
              i7++;
              break;
            case 79:
            case 111:
            case 106:
              if (a6 >= argLen)
                break;
              if (args[a6] === void 0) break;
              if (lastPos < i7)
                str += f6.slice(lastPos, i7);
              var type = typeof args[a6];
              if (type === "string") {
                str += "'" + args[a6] + "'";
                lastPos = i7 + 2;
                i7++;
                break;
              }
              if (type === "function") {
                str += args[a6].name || "<anonymous>";
                lastPos = i7 + 2;
                i7++;
                break;
              }
              str += ss3(args[a6]);
              lastPos = i7 + 2;
              i7++;
              break;
            case 115:
              if (a6 >= argLen)
                break;
              if (lastPos < i7)
                str += f6.slice(lastPos, i7);
              str += String(args[a6]);
              lastPos = i7 + 2;
              i7++;
              break;
            case 37:
              if (lastPos < i7)
                str += f6.slice(lastPos, i7);
              str += "%";
              lastPos = i7 + 2;
              i7++;
              a6--;
              break;
          }
          ++a6;
        }
        ++i7;
      }
      if (lastPos === -1)
        return f6;
      else if (lastPos < flen) {
        str += f6.slice(lastPos);
      }
      return str;
    }
  }
});

// node_modules/pino/browser.js
var require_browser2 = __commonJS({
  "node_modules/pino/browser.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    module.exports = pino;
    var _console = pfGlobalThisOrFallback().console || {};
    var stdSerializers = {
      mapHttpRequest: mock,
      mapHttpResponse: mock,
      wrapRequestSerializer: passthrough,
      wrapResponseSerializer: passthrough,
      wrapErrorSerializer: passthrough,
      req: mock,
      res: mock,
      err: asErrValue
    };
    function shouldSerialize(serialize, serializers) {
      if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k5) {
          return k5 !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize === true) {
        return Object.keys(serializers);
      }
      return false;
    }
    function pino(opts) {
      opts = opts || {};
      opts.browser = opts.browser || {};
      const transmit2 = opts.browser.transmit;
      if (transmit2 && typeof transmit2.send !== "function") {
        throw Error("pino: transmit option must have a send function");
      }
      const proto = opts.browser.write || _console;
      if (opts.browser.write) opts.browser.asObject = true;
      const serializers = opts.serializers || {};
      const serialize = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
      if (typeof proto === "function") {
        proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
      }
      if (opts.enabled === false) opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto);
      if (!logger.log) logger.log = noop;
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = pino.levels;
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = child;
      if (transmit2) logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set2(setOpts, logger, "error", "log");
        set2(setOpts, logger, "fatal", "error");
        set2(setOpts, logger, "warn", "error");
        set2(setOpts, logger, "info", "log");
        set2(setOpts, logger, "debug", "log");
        set2(setOpts, logger, "trace", "log");
      }
      function child(bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
          this._childLevel = (parent._childLevel | 0) + 1;
          this.error = bind(parent, bindings, "error");
          this.fatal = bind(parent, bindings, "fatal");
          this.warn = bind(parent, bindings, "warn");
          this.info = bind(parent, bindings, "info");
          this.debug = bind(parent, bindings, "debug");
          this.trace = bind(parent, bindings, "trace");
          if (childSerializers) {
            this.serializers = childSerializers;
            this._serialize = childSerialize;
          }
          if (transmit2) {
            this._logEvent = createLogEventShape(
              [].concat(parent._logEvent.bindings, bindings)
            );
          }
        }
        Child.prototype = this;
        return new Child(this);
      }
      return logger;
    }
    pino.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    };
    pino.stdSerializers = stdSerializers;
    pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
    function set2(opts, logger, level, fallback) {
      const proto = Object.getPrototypeOf(logger);
      logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
      wrap(opts, logger, level);
    }
    function wrap(opts, logger, level) {
      if (!opts.transmit && logger[level] === noop) return;
      logger[level] = /* @__PURE__ */ function(write) {
        return function LOG() {
          const ts3 = opts.timestamp();
          const args = new Array(arguments.length);
          const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i7 = 0; i7 < args.length; i7++) args[i7] = arguments[i7];
          if (opts.serialize && !opts.asObject) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
          }
          if (opts.asObject) write.call(proto, asObject(this, level, args, ts3));
          else write.apply(proto, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || logger.level;
            const transmitValue = pino.levels.values[transmitLevel];
            const methodValue = pino.levels.values[level];
            if (methodValue < transmitValue) return;
            transmit(this, {
              ts: ts3,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: pino.levels.values[opts.transmit.level || logger.level],
              send: opts.transmit.send,
              val: logger.levelVal
            }, args);
          }
        };
      }(logger[level]);
    }
    function asObject(logger, level, args, ts3) {
      if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const o6 = {};
      if (ts3) {
        o6.time = ts3;
      }
      o6.level = pino.levels.values[level];
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1) lvl = 1;
      if (msg !== null && typeof msg === "object") {
        while (lvl-- && typeof argsCloned[0] === "object") {
          Object.assign(o6, argsCloned.shift());
        }
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
      } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
      if (msg !== void 0) o6.msg = msg;
      return o6;
    }
    function applySerializers(args, serialize, serializers, stdErrSerialize) {
      for (const i7 in args) {
        if (stdErrSerialize && args[i7] instanceof Error) {
          args[i7] = pino.stdSerializers.err(args[i7]);
        } else if (typeof args[i7] === "object" && !Array.isArray(args[i7])) {
          for (const k5 in args[i7]) {
            if (serialize && serialize.indexOf(k5) > -1 && k5 in serializers) {
              args[i7][k5] = serializers[k5](args[i7][k5]);
            }
          }
        }
      }
    }
    function bind(parent, bindings, level) {
      return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for (var i7 = 1; i7 < args.length; i7++) {
          args[i7] = arguments[i7 - 1];
        }
        return parent[level].apply(this, args);
      };
    }
    function transmit(logger, opts, args) {
      const send = opts.send;
      const ts3 = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      applySerializers(
        args,
        logger._serialize || Object.keys(logger.serializers),
        logger.serializers,
        logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
      );
      logger._logEvent.ts = ts3;
      logger._logEvent.messages = args.filter(function(arg) {
        return bindings.indexOf(arg) === -1;
      });
      logger._logEvent.level.label = methodLevel;
      logger._logEvent.level.value = methodValue;
      send(methodLevel, logger._logEvent, val);
      logger._logEvent = createLogEventShape(bindings);
    }
    function createLogEventShape(bindings) {
      return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: { label: "", value: 0 }
      };
    }
    function asErrValue(err) {
      const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
      };
      for (const key in err) {
        if (obj[key] === void 0) {
          obj[key] = err[key];
        }
      }
      return obj;
    }
    function getTimeFunction(opts) {
      if (typeof opts.timestamp === "function") {
        return opts.timestamp;
      }
      if (opts.timestamp === false) {
        return nullTime;
      }
      return epochTime;
    }
    function mock() {
      return {};
    }
    function passthrough(a6) {
      return a6;
    }
    function noop() {
    }
    function nullTime() {
      return false;
    }
    function epochTime() {
      return Date.now();
    }
    function unixTime() {
      return Math.round(Date.now() / 1e3);
    }
    function isoTime() {
      return new Date(Date.now()).toISOString();
    }
    function pfGlobalThisOrFallback() {
      function defd(o6) {
        return typeof o6 !== "undefined" && o6;
      }
      try {
        if (typeof globalThis !== "undefined") return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            delete Object.prototype.globalThis;
            return this.globalThis = this;
          },
          configurable: true
        });
        return globalThis;
      } catch (e4) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
  }
});

// node_modules/@stablelib/random/lib/source/browser.js
var require_browser3 = __commonJS({
  "node_modules/@stablelib/random/lib/source/browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowserRandomSource = void 0;
    var QUOTA = 65536;
    var BrowserRandomSource = class {
      constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        const browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (browserCrypto && browserCrypto.getRandomValues !== void 0) {
          this._crypto = browserCrypto;
          this.isAvailable = true;
          this.isInstantiated = true;
        }
      }
      randomBytes(length2) {
        if (!this.isAvailable || !this._crypto) {
          throw new Error("Browser random byte generator is not available.");
        }
        const out = new Uint8Array(length2);
        for (let i7 = 0; i7 < out.length; i7 += QUOTA) {
          this._crypto.getRandomValues(out.subarray(i7, i7 + Math.min(out.length - i7, QUOTA)));
        }
        return out;
      }
    };
    exports.BrowserRandomSource = BrowserRandomSource;
  }
});

// node_modules/@stablelib/wipe/lib/wipe.js
var require_wipe = __commonJS({
  "node_modules/@stablelib/wipe/lib/wipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function wipe(array) {
      for (var i7 = 0; i7 < array.length; i7++) {
        array[i7] = 0;
      }
      return array;
    }
    exports.wipe = wipe;
  }
});

// node_modules/@stablelib/random/lib/source/node.js
var require_node = __commonJS({
  "node_modules/@stablelib/random/lib/source/node.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeRandomSource = void 0;
    var wipe_1 = require_wipe();
    var NodeRandomSource = class {
      constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        if (typeof __require !== "undefined") {
          const nodeCrypto = require_crypto();
          if (nodeCrypto && nodeCrypto.randomBytes) {
            this._crypto = nodeCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
          }
        }
      }
      randomBytes(length2) {
        if (!this.isAvailable || !this._crypto) {
          throw new Error("Node.js random byte generator is not available.");
        }
        let buffer = this._crypto.randomBytes(length2);
        if (buffer.length !== length2) {
          throw new Error("NodeRandomSource: got fewer bytes than requested");
        }
        const out = new Uint8Array(length2);
        for (let i7 = 0; i7 < out.length; i7++) {
          out[i7] = buffer[i7];
        }
        (0, wipe_1.wipe)(buffer);
        return out;
      }
    };
    exports.NodeRandomSource = NodeRandomSource;
  }
});

// node_modules/@stablelib/random/lib/source/system.js
var require_system = __commonJS({
  "node_modules/@stablelib/random/lib/source/system.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SystemRandomSource = void 0;
    var browser_1 = require_browser3();
    var node_1 = require_node();
    var SystemRandomSource = class {
      constructor() {
        this.isAvailable = false;
        this.name = "";
        this._source = new browser_1.BrowserRandomSource();
        if (this._source.isAvailable) {
          this.isAvailable = true;
          this.name = "Browser";
          return;
        }
        this._source = new node_1.NodeRandomSource();
        if (this._source.isAvailable) {
          this.isAvailable = true;
          this.name = "Node";
          return;
        }
      }
      randomBytes(length2) {
        if (!this.isAvailable) {
          throw new Error("System random byte generator is not available.");
        }
        return this._source.randomBytes(length2);
      }
    };
    exports.SystemRandomSource = SystemRandomSource;
  }
});

// node_modules/@stablelib/int/lib/int.js
var require_int = __commonJS({
  "node_modules/@stablelib/int/lib/int.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function imulShim(a6, b5) {
      var ah2 = a6 >>> 16 & 65535, al = a6 & 65535;
      var bh2 = b5 >>> 16 & 65535, bl = b5 & 65535;
      return al * bl + (ah2 * bl + al * bh2 << 16 >>> 0) | 0;
    }
    exports.mul = Math.imul || imulShim;
    function add(a6, b5) {
      return a6 + b5 | 0;
    }
    exports.add = add;
    function sub(a6, b5) {
      return a6 - b5 | 0;
    }
    exports.sub = sub;
    function rotl(x7, n6) {
      return x7 << n6 | x7 >>> 32 - n6;
    }
    exports.rotl = rotl;
    function rotr(x7, n6) {
      return x7 << 32 - n6 | x7 >>> n6;
    }
    exports.rotr = rotr;
    function isIntegerShim(n6) {
      return typeof n6 === "number" && isFinite(n6) && Math.floor(n6) === n6;
    }
    exports.isInteger = Number.isInteger || isIntegerShim;
    exports.MAX_SAFE_INTEGER = 9007199254740991;
    exports.isSafeInteger = function(n6) {
      return exports.isInteger(n6) && (n6 >= -exports.MAX_SAFE_INTEGER && n6 <= exports.MAX_SAFE_INTEGER);
    };
  }
});

// node_modules/@stablelib/binary/lib/binary.js
var require_binary = __commonJS({
  "node_modules/@stablelib/binary/lib/binary.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var int_1 = require_int();
    function readInt16BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
    }
    exports.readInt16BE = readInt16BE;
    function readUint16BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
    }
    exports.readUint16BE = readUint16BE;
    function readInt16LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
    }
    exports.readInt16LE = readInt16LE;
    function readUint16LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 1] << 8 | array[offset]) >>> 0;
    }
    exports.readUint16LE = readUint16LE;
    function writeUint16BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(2);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 8;
      out[offset + 1] = value >>> 0;
      return out;
    }
    exports.writeUint16BE = writeUint16BE;
    exports.writeInt16BE = writeUint16BE;
    function writeUint16LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(2);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 0;
      out[offset + 1] = value >>> 8;
      return out;
    }
    exports.writeUint16LE = writeUint16LE;
    exports.writeInt16LE = writeUint16LE;
    function readInt32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
    }
    exports.readInt32BE = readInt32BE;
    function readUint32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
    }
    exports.readUint32BE = readUint32BE;
    function readInt32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
    }
    exports.readInt32LE = readInt32LE;
    function readUint32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
    }
    exports.readUint32LE = readUint32LE;
    function writeUint32BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 24;
      out[offset + 1] = value >>> 16;
      out[offset + 2] = value >>> 8;
      out[offset + 3] = value >>> 0;
      return out;
    }
    exports.writeUint32BE = writeUint32BE;
    exports.writeInt32BE = writeUint32BE;
    function writeUint32LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 0;
      out[offset + 1] = value >>> 8;
      out[offset + 2] = value >>> 16;
      out[offset + 3] = value >>> 24;
      return out;
    }
    exports.writeUint32LE = writeUint32LE;
    exports.writeInt32LE = writeUint32LE;
    function readInt64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var hi2 = readInt32BE(array, offset);
      var lo = readInt32BE(array, offset + 4);
      return hi2 * 4294967296 + lo - (lo >> 31) * 4294967296;
    }
    exports.readInt64BE = readInt64BE;
    function readUint64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var hi2 = readUint32BE(array, offset);
      var lo = readUint32BE(array, offset + 4);
      return hi2 * 4294967296 + lo;
    }
    exports.readUint64BE = readUint64BE;
    function readInt64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var lo = readInt32LE(array, offset);
      var hi2 = readInt32LE(array, offset + 4);
      return hi2 * 4294967296 + lo - (lo >> 31) * 4294967296;
    }
    exports.readInt64LE = readInt64LE;
    function readUint64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var lo = readUint32LE(array, offset);
      var hi2 = readUint32LE(array, offset + 4);
      return hi2 * 4294967296 + lo;
    }
    exports.readUint64LE = readUint64LE;
    function writeUint64BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      writeUint32BE(value / 4294967296 >>> 0, out, offset);
      writeUint32BE(value >>> 0, out, offset + 4);
      return out;
    }
    exports.writeUint64BE = writeUint64BE;
    exports.writeInt64BE = writeUint64BE;
    function writeUint64LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      writeUint32LE(value >>> 0, out, offset);
      writeUint32LE(value / 4294967296 >>> 0, out, offset + 4);
      return out;
    }
    exports.writeUint64LE = writeUint64LE;
    exports.writeInt64LE = writeUint64LE;
    function readUintBE(bitLength, array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("readUintBE supports only bitLengths divisible by 8");
      }
      if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintBE: array is too short for the given bitLength");
      }
      var result = 0;
      var mul = 1;
      for (var i7 = bitLength / 8 + offset - 1; i7 >= offset; i7--) {
        result += array[i7] * mul;
        mul *= 256;
      }
      return result;
    }
    exports.readUintBE = readUintBE;
    function readUintLE(bitLength, array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("readUintLE supports only bitLengths divisible by 8");
      }
      if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintLE: array is too short for the given bitLength");
      }
      var result = 0;
      var mul = 1;
      for (var i7 = offset; i7 < offset + bitLength / 8; i7++) {
        result += array[i7] * mul;
        mul *= 256;
      }
      return result;
    }
    exports.readUintLE = readUintLE;
    function writeUintBE(bitLength, value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(bitLength / 8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
      }
      if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintBE value must be an integer");
      }
      var div = 1;
      for (var i7 = bitLength / 8 + offset - 1; i7 >= offset; i7--) {
        out[i7] = value / div & 255;
        div *= 256;
      }
      return out;
    }
    exports.writeUintBE = writeUintBE;
    function writeUintLE(bitLength, value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(bitLength / 8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
      }
      if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintLE value must be an integer");
      }
      var div = 1;
      for (var i7 = offset; i7 < offset + bitLength / 8; i7++) {
        out[i7] = value / div & 255;
        div *= 256;
      }
      return out;
    }
    exports.writeUintLE = writeUintLE;
    function readFloat32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat32(offset);
    }
    exports.readFloat32BE = readFloat32BE;
    function readFloat32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat32(offset, true);
    }
    exports.readFloat32LE = readFloat32LE;
    function readFloat64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat64(offset);
    }
    exports.readFloat64BE = readFloat64BE;
    function readFloat64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat64(offset, true);
    }
    exports.readFloat64LE = readFloat64LE;
    function writeFloat32BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat32(offset, value);
      return out;
    }
    exports.writeFloat32BE = writeFloat32BE;
    function writeFloat32LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat32(offset, value, true);
      return out;
    }
    exports.writeFloat32LE = writeFloat32LE;
    function writeFloat64BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat64(offset, value);
      return out;
    }
    exports.writeFloat64BE = writeFloat64BE;
    function writeFloat64LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat64(offset, value, true);
      return out;
    }
    exports.writeFloat64LE = writeFloat64LE;
  }
});

// node_modules/@stablelib/random/lib/random.js
var require_random = __commonJS({
  "node_modules/@stablelib/random/lib/random.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
    var system_1 = require_system();
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.defaultRandomSource = new system_1.SystemRandomSource();
    function randomBytes2(length2, prng = exports.defaultRandomSource) {
      return prng.randomBytes(length2);
    }
    exports.randomBytes = randomBytes2;
    function randomUint32(prng = exports.defaultRandomSource) {
      const buf = randomBytes2(4, prng);
      const result = (0, binary_1.readUint32LE)(buf);
      (0, wipe_1.wipe)(buf);
      return result;
    }
    exports.randomUint32 = randomUint32;
    var ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function randomString(length2, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
      if (charset.length < 2) {
        throw new Error("randomString charset is too short");
      }
      if (charset.length > 256) {
        throw new Error("randomString charset is too long");
      }
      let out = "";
      const charsLen = charset.length;
      const maxByte = 256 - 256 % charsLen;
      while (length2 > 0) {
        const buf = randomBytes2(Math.ceil(length2 * 256 / maxByte), prng);
        for (let i7 = 0; i7 < buf.length && length2 > 0; i7++) {
          const randomByte = buf[i7];
          if (randomByte < maxByte) {
            out += charset.charAt(randomByte % charsLen);
            length2--;
          }
        }
        (0, wipe_1.wipe)(buf);
      }
      return out;
    }
    exports.randomString = randomString;
    function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
      const length2 = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
      return randomString(length2, charset, prng);
    }
    exports.randomStringForEntropy = randomStringForEntropy;
  }
});

// node_modules/@stablelib/sha512/lib/sha512.js
var require_sha512 = __commonJS({
  "node_modules/@stablelib/sha512/lib/sha512.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.DIGEST_LENGTH = 64;
    exports.BLOCK_SIZE = 128;
    var SHA512 = (
      /** @class */
      function() {
        function SHA5122() {
          this.digestLength = exports.DIGEST_LENGTH;
          this.blockSize = exports.BLOCK_SIZE;
          this._stateHi = new Int32Array(8);
          this._stateLo = new Int32Array(8);
          this._tempHi = new Int32Array(16);
          this._tempLo = new Int32Array(16);
          this._buffer = new Uint8Array(256);
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          this.reset();
        }
        SHA5122.prototype._initState = function() {
          this._stateHi[0] = 1779033703;
          this._stateHi[1] = 3144134277;
          this._stateHi[2] = 1013904242;
          this._stateHi[3] = 2773480762;
          this._stateHi[4] = 1359893119;
          this._stateHi[5] = 2600822924;
          this._stateHi[6] = 528734635;
          this._stateHi[7] = 1541459225;
          this._stateLo[0] = 4089235720;
          this._stateLo[1] = 2227873595;
          this._stateLo[2] = 4271175723;
          this._stateLo[3] = 1595750129;
          this._stateLo[4] = 2917565137;
          this._stateLo[5] = 725511199;
          this._stateLo[6] = 4215389547;
          this._stateLo[7] = 327033209;
        };
        SHA5122.prototype.reset = function() {
          this._initState();
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          return this;
        };
        SHA5122.prototype.clean = function() {
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._tempHi);
          wipe_1.wipe(this._tempLo);
          this.reset();
        };
        SHA5122.prototype.update = function(data, dataLength) {
          if (dataLength === void 0) {
            dataLength = data.length;
          }
          if (this._finished) {
            throw new Error("SHA512: can't update because hash was finished.");
          }
          var dataPos = 0;
          this._bytesHashed += dataLength;
          if (this._bufferLength > 0) {
            while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
              this._buffer[this._bufferLength++] = data[dataPos++];
              dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
              hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
              this._bufferLength = 0;
            }
          }
          if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
            dataLength %= this.blockSize;
          }
          while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          return this;
        };
        SHA5122.prototype.finish = function(out) {
          if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = bytesHashed / 536870912 | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = bytesHashed % 128 < 112 ? 128 : 256;
            this._buffer[left] = 128;
            for (var i7 = left + 1; i7 < padLength - 8; i7++) {
              this._buffer[i7] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
            this._finished = true;
          }
          for (var i7 = 0; i7 < this.digestLength / 8; i7++) {
            binary_1.writeUint32BE(this._stateHi[i7], out, i7 * 8);
            binary_1.writeUint32BE(this._stateLo[i7], out, i7 * 8 + 4);
          }
          return this;
        };
        SHA5122.prototype.digest = function() {
          var out = new Uint8Array(this.digestLength);
          this.finish(out);
          return out;
        };
        SHA5122.prototype.saveState = function() {
          if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
          }
          return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          };
        };
        SHA5122.prototype.restoreState = function(savedState) {
          this._stateHi.set(savedState.stateHi);
          this._stateLo.set(savedState.stateLo);
          this._bufferLength = savedState.bufferLength;
          if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
          }
          this._bytesHashed = savedState.bytesHashed;
          this._finished = false;
          return this;
        };
        SHA5122.prototype.cleanSavedState = function(savedState) {
          wipe_1.wipe(savedState.stateHi);
          wipe_1.wipe(savedState.stateLo);
          if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
          }
          savedState.bufferLength = 0;
          savedState.bytesHashed = 0;
        };
        return SHA5122;
      }()
    );
    exports.SHA512 = SHA512;
    var K5 = new Int32Array([
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ]);
    function hashBlocks(wh2, wl, hh2, hl, m4, pos, len) {
      var ah0 = hh2[0], ah1 = hh2[1], ah2 = hh2[2], ah3 = hh2[3], ah4 = hh2[4], ah5 = hh2[5], ah6 = hh2[6], ah7 = hh2[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
      var h7, l6;
      var th, tl;
      var a6, b5, c8, d5;
      while (len >= 128) {
        for (var i7 = 0; i7 < 16; i7++) {
          var j6 = 8 * i7 + pos;
          wh2[i7] = binary_1.readUint32BE(m4, j6);
          wl[i7] = binary_1.readUint32BE(m4, j6 + 4);
        }
        for (var i7 = 0; i7 < 80; i7++) {
          var bh0 = ah0;
          var bh1 = ah1;
          var bh2 = ah2;
          var bh3 = ah3;
          var bh4 = ah4;
          var bh5 = ah5;
          var bh6 = ah6;
          var bh7 = ah7;
          var bl0 = al0;
          var bl1 = al1;
          var bl2 = al2;
          var bl3 = al3;
          var bl4 = al4;
          var bl5 = al5;
          var bl6 = al6;
          var bl7 = al7;
          h7 = ah7;
          l6 = al7;
          a6 = l6 & 65535;
          b5 = l6 >>> 16;
          c8 = h7 & 65535;
          d5 = h7 >>> 16;
          h7 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
          l6 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
          a6 += l6 & 65535;
          b5 += l6 >>> 16;
          c8 += h7 & 65535;
          d5 += h7 >>> 16;
          h7 = ah4 & ah5 ^ ~ah4 & ah6;
          l6 = al4 & al5 ^ ~al4 & al6;
          a6 += l6 & 65535;
          b5 += l6 >>> 16;
          c8 += h7 & 65535;
          d5 += h7 >>> 16;
          h7 = K5[i7 * 2];
          l6 = K5[i7 * 2 + 1];
          a6 += l6 & 65535;
          b5 += l6 >>> 16;
          c8 += h7 & 65535;
          d5 += h7 >>> 16;
          h7 = wh2[i7 % 16];
          l6 = wl[i7 % 16];
          a6 += l6 & 65535;
          b5 += l6 >>> 16;
          c8 += h7 & 65535;
          d5 += h7 >>> 16;
          b5 += a6 >>> 16;
          c8 += b5 >>> 16;
          d5 += c8 >>> 16;
          th = c8 & 65535 | d5 << 16;
          tl = a6 & 65535 | b5 << 16;
          h7 = th;
          l6 = tl;
          a6 = l6 & 65535;
          b5 = l6 >>> 16;
          c8 = h7 & 65535;
          d5 = h7 >>> 16;
          h7 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
          l6 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
          a6 += l6 & 65535;
          b5 += l6 >>> 16;
          c8 += h7 & 65535;
          d5 += h7 >>> 16;
          h7 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
          l6 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
          a6 += l6 & 65535;
          b5 += l6 >>> 16;
          c8 += h7 & 65535;
          d5 += h7 >>> 16;
          b5 += a6 >>> 16;
          c8 += b5 >>> 16;
          d5 += c8 >>> 16;
          bh7 = c8 & 65535 | d5 << 16;
          bl7 = a6 & 65535 | b5 << 16;
          h7 = bh3;
          l6 = bl3;
          a6 = l6 & 65535;
          b5 = l6 >>> 16;
          c8 = h7 & 65535;
          d5 = h7 >>> 16;
          h7 = th;
          l6 = tl;
          a6 += l6 & 65535;
          b5 += l6 >>> 16;
          c8 += h7 & 65535;
          d5 += h7 >>> 16;
          b5 += a6 >>> 16;
          c8 += b5 >>> 16;
          d5 += c8 >>> 16;
          bh3 = c8 & 65535 | d5 << 16;
          bl3 = a6 & 65535 | b5 << 16;
          ah1 = bh0;
          ah2 = bh1;
          ah3 = bh2;
          ah4 = bh3;
          ah5 = bh4;
          ah6 = bh5;
          ah7 = bh6;
          ah0 = bh7;
          al1 = bl0;
          al2 = bl1;
          al3 = bl2;
          al4 = bl3;
          al5 = bl4;
          al6 = bl5;
          al7 = bl6;
          al0 = bl7;
          if (i7 % 16 === 15) {
            for (var j6 = 0; j6 < 16; j6++) {
              h7 = wh2[j6];
              l6 = wl[j6];
              a6 = l6 & 65535;
              b5 = l6 >>> 16;
              c8 = h7 & 65535;
              d5 = h7 >>> 16;
              h7 = wh2[(j6 + 9) % 16];
              l6 = wl[(j6 + 9) % 16];
              a6 += l6 & 65535;
              b5 += l6 >>> 16;
              c8 += h7 & 65535;
              d5 += h7 >>> 16;
              th = wh2[(j6 + 1) % 16];
              tl = wl[(j6 + 1) % 16];
              h7 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
              l6 = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
              a6 += l6 & 65535;
              b5 += l6 >>> 16;
              c8 += h7 & 65535;
              d5 += h7 >>> 16;
              th = wh2[(j6 + 14) % 16];
              tl = wl[(j6 + 14) % 16];
              h7 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
              l6 = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
              a6 += l6 & 65535;
              b5 += l6 >>> 16;
              c8 += h7 & 65535;
              d5 += h7 >>> 16;
              b5 += a6 >>> 16;
              c8 += b5 >>> 16;
              d5 += c8 >>> 16;
              wh2[j6] = c8 & 65535 | d5 << 16;
              wl[j6] = a6 & 65535 | b5 << 16;
            }
          }
        }
        h7 = ah0;
        l6 = al0;
        a6 = l6 & 65535;
        b5 = l6 >>> 16;
        c8 = h7 & 65535;
        d5 = h7 >>> 16;
        h7 = hh2[0];
        l6 = hl[0];
        a6 += l6 & 65535;
        b5 += l6 >>> 16;
        c8 += h7 & 65535;
        d5 += h7 >>> 16;
        b5 += a6 >>> 16;
        c8 += b5 >>> 16;
        d5 += c8 >>> 16;
        hh2[0] = ah0 = c8 & 65535 | d5 << 16;
        hl[0] = al0 = a6 & 65535 | b5 << 16;
        h7 = ah1;
        l6 = al1;
        a6 = l6 & 65535;
        b5 = l6 >>> 16;
        c8 = h7 & 65535;
        d5 = h7 >>> 16;
        h7 = hh2[1];
        l6 = hl[1];
        a6 += l6 & 65535;
        b5 += l6 >>> 16;
        c8 += h7 & 65535;
        d5 += h7 >>> 16;
        b5 += a6 >>> 16;
        c8 += b5 >>> 16;
        d5 += c8 >>> 16;
        hh2[1] = ah1 = c8 & 65535 | d5 << 16;
        hl[1] = al1 = a6 & 65535 | b5 << 16;
        h7 = ah2;
        l6 = al2;
        a6 = l6 & 65535;
        b5 = l6 >>> 16;
        c8 = h7 & 65535;
        d5 = h7 >>> 16;
        h7 = hh2[2];
        l6 = hl[2];
        a6 += l6 & 65535;
        b5 += l6 >>> 16;
        c8 += h7 & 65535;
        d5 += h7 >>> 16;
        b5 += a6 >>> 16;
        c8 += b5 >>> 16;
        d5 += c8 >>> 16;
        hh2[2] = ah2 = c8 & 65535 | d5 << 16;
        hl[2] = al2 = a6 & 65535 | b5 << 16;
        h7 = ah3;
        l6 = al3;
        a6 = l6 & 65535;
        b5 = l6 >>> 16;
        c8 = h7 & 65535;
        d5 = h7 >>> 16;
        h7 = hh2[3];
        l6 = hl[3];
        a6 += l6 & 65535;
        b5 += l6 >>> 16;
        c8 += h7 & 65535;
        d5 += h7 >>> 16;
        b5 += a6 >>> 16;
        c8 += b5 >>> 16;
        d5 += c8 >>> 16;
        hh2[3] = ah3 = c8 & 65535 | d5 << 16;
        hl[3] = al3 = a6 & 65535 | b5 << 16;
        h7 = ah4;
        l6 = al4;
        a6 = l6 & 65535;
        b5 = l6 >>> 16;
        c8 = h7 & 65535;
        d5 = h7 >>> 16;
        h7 = hh2[4];
        l6 = hl[4];
        a6 += l6 & 65535;
        b5 += l6 >>> 16;
        c8 += h7 & 65535;
        d5 += h7 >>> 16;
        b5 += a6 >>> 16;
        c8 += b5 >>> 16;
        d5 += c8 >>> 16;
        hh2[4] = ah4 = c8 & 65535 | d5 << 16;
        hl[4] = al4 = a6 & 65535 | b5 << 16;
        h7 = ah5;
        l6 = al5;
        a6 = l6 & 65535;
        b5 = l6 >>> 16;
        c8 = h7 & 65535;
        d5 = h7 >>> 16;
        h7 = hh2[5];
        l6 = hl[5];
        a6 += l6 & 65535;
        b5 += l6 >>> 16;
        c8 += h7 & 65535;
        d5 += h7 >>> 16;
        b5 += a6 >>> 16;
        c8 += b5 >>> 16;
        d5 += c8 >>> 16;
        hh2[5] = ah5 = c8 & 65535 | d5 << 16;
        hl[5] = al5 = a6 & 65535 | b5 << 16;
        h7 = ah6;
        l6 = al6;
        a6 = l6 & 65535;
        b5 = l6 >>> 16;
        c8 = h7 & 65535;
        d5 = h7 >>> 16;
        h7 = hh2[6];
        l6 = hl[6];
        a6 += l6 & 65535;
        b5 += l6 >>> 16;
        c8 += h7 & 65535;
        d5 += h7 >>> 16;
        b5 += a6 >>> 16;
        c8 += b5 >>> 16;
        d5 += c8 >>> 16;
        hh2[6] = ah6 = c8 & 65535 | d5 << 16;
        hl[6] = al6 = a6 & 65535 | b5 << 16;
        h7 = ah7;
        l6 = al7;
        a6 = l6 & 65535;
        b5 = l6 >>> 16;
        c8 = h7 & 65535;
        d5 = h7 >>> 16;
        h7 = hh2[7];
        l6 = hl[7];
        a6 += l6 & 65535;
        b5 += l6 >>> 16;
        c8 += h7 & 65535;
        d5 += h7 >>> 16;
        b5 += a6 >>> 16;
        c8 += b5 >>> 16;
        d5 += c8 >>> 16;
        hh2[7] = ah7 = c8 & 65535 | d5 << 16;
        hl[7] = al7 = a6 & 65535 | b5 << 16;
        pos += 128;
        len -= 128;
      }
      return pos;
    }
    function hash(data) {
      var h7 = new SHA512();
      h7.update(data);
      var digest2 = h7.digest();
      h7.clean();
      return digest2;
    }
    exports.hash = hash;
  }
});

// node_modules/@stablelib/ed25519/lib/ed25519.js
var require_ed25519 = __commonJS({
  "node_modules/@stablelib/ed25519/lib/ed25519.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertSecretKeyToX25519 = exports.convertPublicKeyToX25519 = exports.verify = exports.sign = exports.extractPublicKeyFromSecretKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.SEED_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.SIGNATURE_LENGTH = void 0;
    var random_1 = require_random();
    var sha512_1 = require_sha512();
    var wipe_1 = require_wipe();
    exports.SIGNATURE_LENGTH = 64;
    exports.PUBLIC_KEY_LENGTH = 32;
    exports.SECRET_KEY_LENGTH = 64;
    exports.SEED_LENGTH = 32;
    function gf2(init) {
      const r5 = new Float64Array(16);
      if (init) {
        for (let i7 = 0; i7 < init.length; i7++) {
          r5[i7] = init[i7];
        }
      }
      return r5;
    }
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var gf0 = gf2();
    var gf1 = gf2([1]);
    var D5 = gf2([
      30883,
      4953,
      19914,
      30187,
      55467,
      16705,
      2637,
      112,
      59544,
      30585,
      16505,
      36039,
      65139,
      11119,
      27886,
      20995
    ]);
    var D22 = gf2([
      61785,
      9906,
      39828,
      60374,
      45398,
      33411,
      5274,
      224,
      53552,
      61171,
      33010,
      6542,
      64743,
      22239,
      55772,
      9222
    ]);
    var X3 = gf2([
      54554,
      36645,
      11616,
      51542,
      42930,
      38181,
      51040,
      26924,
      56412,
      64982,
      57905,
      49316,
      21502,
      52590,
      14035,
      8553
    ]);
    var Y2 = gf2([
      26200,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214
    ]);
    var I6 = gf2([
      41136,
      18958,
      6951,
      50414,
      58488,
      44335,
      6150,
      12099,
      55207,
      15867,
      153,
      11085,
      57099,
      20417,
      9344,
      11139
    ]);
    function set25519(r5, a6) {
      for (let i7 = 0; i7 < 16; i7++) {
        r5[i7] = a6[i7] | 0;
      }
    }
    function car25519(o6) {
      let c8 = 1;
      for (let i7 = 0; i7 < 16; i7++) {
        let v6 = o6[i7] + c8 + 65535;
        c8 = Math.floor(v6 / 65536);
        o6[i7] = v6 - c8 * 65536;
      }
      o6[0] += c8 - 1 + 37 * (c8 - 1);
    }
    function sel25519(p5, q4, b5) {
      const c8 = ~(b5 - 1);
      for (let i7 = 0; i7 < 16; i7++) {
        const t3 = c8 & (p5[i7] ^ q4[i7]);
        p5[i7] ^= t3;
        q4[i7] ^= t3;
      }
    }
    function pack25519(o6, n6) {
      const m4 = gf2();
      const t3 = gf2();
      for (let i7 = 0; i7 < 16; i7++) {
        t3[i7] = n6[i7];
      }
      car25519(t3);
      car25519(t3);
      car25519(t3);
      for (let j6 = 0; j6 < 2; j6++) {
        m4[0] = t3[0] - 65517;
        for (let i7 = 1; i7 < 15; i7++) {
          m4[i7] = t3[i7] - 65535 - (m4[i7 - 1] >> 16 & 1);
          m4[i7 - 1] &= 65535;
        }
        m4[15] = t3[15] - 32767 - (m4[14] >> 16 & 1);
        const b5 = m4[15] >> 16 & 1;
        m4[14] &= 65535;
        sel25519(t3, m4, 1 - b5);
      }
      for (let i7 = 0; i7 < 16; i7++) {
        o6[2 * i7] = t3[i7] & 255;
        o6[2 * i7 + 1] = t3[i7] >> 8;
      }
    }
    function verify32(x7, y8) {
      let d5 = 0;
      for (let i7 = 0; i7 < 32; i7++) {
        d5 |= x7[i7] ^ y8[i7];
      }
      return (1 & d5 - 1 >>> 8) - 1;
    }
    function neq25519(a6, b5) {
      const c8 = new Uint8Array(32);
      const d5 = new Uint8Array(32);
      pack25519(c8, a6);
      pack25519(d5, b5);
      return verify32(c8, d5);
    }
    function par25519(a6) {
      const d5 = new Uint8Array(32);
      pack25519(d5, a6);
      return d5[0] & 1;
    }
    function unpack25519(o6, n6) {
      for (let i7 = 0; i7 < 16; i7++) {
        o6[i7] = n6[2 * i7] + (n6[2 * i7 + 1] << 8);
      }
      o6[15] &= 32767;
    }
    function add(o6, a6, b5) {
      for (let i7 = 0; i7 < 16; i7++) {
        o6[i7] = a6[i7] + b5[i7];
      }
    }
    function sub(o6, a6, b5) {
      for (let i7 = 0; i7 < 16; i7++) {
        o6[i7] = a6[i7] - b5[i7];
      }
    }
    function mul(o6, a6, b5) {
      let v6, c8, t02 = 0, t1 = 0, t22 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t222 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b02 = b5[0], b1 = b5[1], b22 = b5[2], b32 = b5[3], b42 = b5[4], b52 = b5[5], b6 = b5[6], b7 = b5[7], b8 = b5[8], b9 = b5[9], b10 = b5[10], b11 = b5[11], b12 = b5[12], b13 = b5[13], b14 = b5[14], b15 = b5[15];
      v6 = a6[0];
      t02 += v6 * b02;
      t1 += v6 * b1;
      t22 += v6 * b22;
      t3 += v6 * b32;
      t4 += v6 * b42;
      t5 += v6 * b52;
      t6 += v6 * b6;
      t7 += v6 * b7;
      t8 += v6 * b8;
      t9 += v6 * b9;
      t10 += v6 * b10;
      t11 += v6 * b11;
      t12 += v6 * b12;
      t13 += v6 * b13;
      t14 += v6 * b14;
      t15 += v6 * b15;
      v6 = a6[1];
      t1 += v6 * b02;
      t22 += v6 * b1;
      t3 += v6 * b22;
      t4 += v6 * b32;
      t5 += v6 * b42;
      t6 += v6 * b52;
      t7 += v6 * b6;
      t8 += v6 * b7;
      t9 += v6 * b8;
      t10 += v6 * b9;
      t11 += v6 * b10;
      t12 += v6 * b11;
      t13 += v6 * b12;
      t14 += v6 * b13;
      t15 += v6 * b14;
      t16 += v6 * b15;
      v6 = a6[2];
      t22 += v6 * b02;
      t3 += v6 * b1;
      t4 += v6 * b22;
      t5 += v6 * b32;
      t6 += v6 * b42;
      t7 += v6 * b52;
      t8 += v6 * b6;
      t9 += v6 * b7;
      t10 += v6 * b8;
      t11 += v6 * b9;
      t12 += v6 * b10;
      t13 += v6 * b11;
      t14 += v6 * b12;
      t15 += v6 * b13;
      t16 += v6 * b14;
      t17 += v6 * b15;
      v6 = a6[3];
      t3 += v6 * b02;
      t4 += v6 * b1;
      t5 += v6 * b22;
      t6 += v6 * b32;
      t7 += v6 * b42;
      t8 += v6 * b52;
      t9 += v6 * b6;
      t10 += v6 * b7;
      t11 += v6 * b8;
      t12 += v6 * b9;
      t13 += v6 * b10;
      t14 += v6 * b11;
      t15 += v6 * b12;
      t16 += v6 * b13;
      t17 += v6 * b14;
      t18 += v6 * b15;
      v6 = a6[4];
      t4 += v6 * b02;
      t5 += v6 * b1;
      t6 += v6 * b22;
      t7 += v6 * b32;
      t8 += v6 * b42;
      t9 += v6 * b52;
      t10 += v6 * b6;
      t11 += v6 * b7;
      t12 += v6 * b8;
      t13 += v6 * b9;
      t14 += v6 * b10;
      t15 += v6 * b11;
      t16 += v6 * b12;
      t17 += v6 * b13;
      t18 += v6 * b14;
      t19 += v6 * b15;
      v6 = a6[5];
      t5 += v6 * b02;
      t6 += v6 * b1;
      t7 += v6 * b22;
      t8 += v6 * b32;
      t9 += v6 * b42;
      t10 += v6 * b52;
      t11 += v6 * b6;
      t12 += v6 * b7;
      t13 += v6 * b8;
      t14 += v6 * b9;
      t15 += v6 * b10;
      t16 += v6 * b11;
      t17 += v6 * b12;
      t18 += v6 * b13;
      t19 += v6 * b14;
      t20 += v6 * b15;
      v6 = a6[6];
      t6 += v6 * b02;
      t7 += v6 * b1;
      t8 += v6 * b22;
      t9 += v6 * b32;
      t10 += v6 * b42;
      t11 += v6 * b52;
      t12 += v6 * b6;
      t13 += v6 * b7;
      t14 += v6 * b8;
      t15 += v6 * b9;
      t16 += v6 * b10;
      t17 += v6 * b11;
      t18 += v6 * b12;
      t19 += v6 * b13;
      t20 += v6 * b14;
      t21 += v6 * b15;
      v6 = a6[7];
      t7 += v6 * b02;
      t8 += v6 * b1;
      t9 += v6 * b22;
      t10 += v6 * b32;
      t11 += v6 * b42;
      t12 += v6 * b52;
      t13 += v6 * b6;
      t14 += v6 * b7;
      t15 += v6 * b8;
      t16 += v6 * b9;
      t17 += v6 * b10;
      t18 += v6 * b11;
      t19 += v6 * b12;
      t20 += v6 * b13;
      t21 += v6 * b14;
      t222 += v6 * b15;
      v6 = a6[8];
      t8 += v6 * b02;
      t9 += v6 * b1;
      t10 += v6 * b22;
      t11 += v6 * b32;
      t12 += v6 * b42;
      t13 += v6 * b52;
      t14 += v6 * b6;
      t15 += v6 * b7;
      t16 += v6 * b8;
      t17 += v6 * b9;
      t18 += v6 * b10;
      t19 += v6 * b11;
      t20 += v6 * b12;
      t21 += v6 * b13;
      t222 += v6 * b14;
      t23 += v6 * b15;
      v6 = a6[9];
      t9 += v6 * b02;
      t10 += v6 * b1;
      t11 += v6 * b22;
      t12 += v6 * b32;
      t13 += v6 * b42;
      t14 += v6 * b52;
      t15 += v6 * b6;
      t16 += v6 * b7;
      t17 += v6 * b8;
      t18 += v6 * b9;
      t19 += v6 * b10;
      t20 += v6 * b11;
      t21 += v6 * b12;
      t222 += v6 * b13;
      t23 += v6 * b14;
      t24 += v6 * b15;
      v6 = a6[10];
      t10 += v6 * b02;
      t11 += v6 * b1;
      t12 += v6 * b22;
      t13 += v6 * b32;
      t14 += v6 * b42;
      t15 += v6 * b52;
      t16 += v6 * b6;
      t17 += v6 * b7;
      t18 += v6 * b8;
      t19 += v6 * b9;
      t20 += v6 * b10;
      t21 += v6 * b11;
      t222 += v6 * b12;
      t23 += v6 * b13;
      t24 += v6 * b14;
      t25 += v6 * b15;
      v6 = a6[11];
      t11 += v6 * b02;
      t12 += v6 * b1;
      t13 += v6 * b22;
      t14 += v6 * b32;
      t15 += v6 * b42;
      t16 += v6 * b52;
      t17 += v6 * b6;
      t18 += v6 * b7;
      t19 += v6 * b8;
      t20 += v6 * b9;
      t21 += v6 * b10;
      t222 += v6 * b11;
      t23 += v6 * b12;
      t24 += v6 * b13;
      t25 += v6 * b14;
      t26 += v6 * b15;
      v6 = a6[12];
      t12 += v6 * b02;
      t13 += v6 * b1;
      t14 += v6 * b22;
      t15 += v6 * b32;
      t16 += v6 * b42;
      t17 += v6 * b52;
      t18 += v6 * b6;
      t19 += v6 * b7;
      t20 += v6 * b8;
      t21 += v6 * b9;
      t222 += v6 * b10;
      t23 += v6 * b11;
      t24 += v6 * b12;
      t25 += v6 * b13;
      t26 += v6 * b14;
      t27 += v6 * b15;
      v6 = a6[13];
      t13 += v6 * b02;
      t14 += v6 * b1;
      t15 += v6 * b22;
      t16 += v6 * b32;
      t17 += v6 * b42;
      t18 += v6 * b52;
      t19 += v6 * b6;
      t20 += v6 * b7;
      t21 += v6 * b8;
      t222 += v6 * b9;
      t23 += v6 * b10;
      t24 += v6 * b11;
      t25 += v6 * b12;
      t26 += v6 * b13;
      t27 += v6 * b14;
      t28 += v6 * b15;
      v6 = a6[14];
      t14 += v6 * b02;
      t15 += v6 * b1;
      t16 += v6 * b22;
      t17 += v6 * b32;
      t18 += v6 * b42;
      t19 += v6 * b52;
      t20 += v6 * b6;
      t21 += v6 * b7;
      t222 += v6 * b8;
      t23 += v6 * b9;
      t24 += v6 * b10;
      t25 += v6 * b11;
      t26 += v6 * b12;
      t27 += v6 * b13;
      t28 += v6 * b14;
      t29 += v6 * b15;
      v6 = a6[15];
      t15 += v6 * b02;
      t16 += v6 * b1;
      t17 += v6 * b22;
      t18 += v6 * b32;
      t19 += v6 * b42;
      t20 += v6 * b52;
      t21 += v6 * b6;
      t222 += v6 * b7;
      t23 += v6 * b8;
      t24 += v6 * b9;
      t25 += v6 * b10;
      t26 += v6 * b11;
      t27 += v6 * b12;
      t28 += v6 * b13;
      t29 += v6 * b14;
      t30 += v6 * b15;
      t02 += 38 * t16;
      t1 += 38 * t17;
      t22 += 38 * t18;
      t3 += 38 * t19;
      t4 += 38 * t20;
      t5 += 38 * t21;
      t6 += 38 * t222;
      t7 += 38 * t23;
      t8 += 38 * t24;
      t9 += 38 * t25;
      t10 += 38 * t26;
      t11 += 38 * t27;
      t12 += 38 * t28;
      t13 += 38 * t29;
      t14 += 38 * t30;
      c8 = 1;
      v6 = t02 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t02 = v6 - c8 * 65536;
      v6 = t1 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t1 = v6 - c8 * 65536;
      v6 = t22 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t22 = v6 - c8 * 65536;
      v6 = t3 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t3 = v6 - c8 * 65536;
      v6 = t4 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t4 = v6 - c8 * 65536;
      v6 = t5 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t5 = v6 - c8 * 65536;
      v6 = t6 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t6 = v6 - c8 * 65536;
      v6 = t7 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t7 = v6 - c8 * 65536;
      v6 = t8 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t8 = v6 - c8 * 65536;
      v6 = t9 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t9 = v6 - c8 * 65536;
      v6 = t10 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t10 = v6 - c8 * 65536;
      v6 = t11 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t11 = v6 - c8 * 65536;
      v6 = t12 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t12 = v6 - c8 * 65536;
      v6 = t13 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t13 = v6 - c8 * 65536;
      v6 = t14 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t14 = v6 - c8 * 65536;
      v6 = t15 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t15 = v6 - c8 * 65536;
      t02 += c8 - 1 + 37 * (c8 - 1);
      c8 = 1;
      v6 = t02 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t02 = v6 - c8 * 65536;
      v6 = t1 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t1 = v6 - c8 * 65536;
      v6 = t22 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t22 = v6 - c8 * 65536;
      v6 = t3 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t3 = v6 - c8 * 65536;
      v6 = t4 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t4 = v6 - c8 * 65536;
      v6 = t5 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t5 = v6 - c8 * 65536;
      v6 = t6 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t6 = v6 - c8 * 65536;
      v6 = t7 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t7 = v6 - c8 * 65536;
      v6 = t8 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t8 = v6 - c8 * 65536;
      v6 = t9 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t9 = v6 - c8 * 65536;
      v6 = t10 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t10 = v6 - c8 * 65536;
      v6 = t11 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t11 = v6 - c8 * 65536;
      v6 = t12 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t12 = v6 - c8 * 65536;
      v6 = t13 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t13 = v6 - c8 * 65536;
      v6 = t14 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t14 = v6 - c8 * 65536;
      v6 = t15 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t15 = v6 - c8 * 65536;
      t02 += c8 - 1 + 37 * (c8 - 1);
      o6[0] = t02;
      o6[1] = t1;
      o6[2] = t22;
      o6[3] = t3;
      o6[4] = t4;
      o6[5] = t5;
      o6[6] = t6;
      o6[7] = t7;
      o6[8] = t8;
      o6[9] = t9;
      o6[10] = t10;
      o6[11] = t11;
      o6[12] = t12;
      o6[13] = t13;
      o6[14] = t14;
      o6[15] = t15;
    }
    function square(o6, a6) {
      mul(o6, a6, a6);
    }
    function inv25519(o6, i7) {
      const c8 = gf2();
      let a6;
      for (a6 = 0; a6 < 16; a6++) {
        c8[a6] = i7[a6];
      }
      for (a6 = 253; a6 >= 0; a6--) {
        square(c8, c8);
        if (a6 !== 2 && a6 !== 4) {
          mul(c8, c8, i7);
        }
      }
      for (a6 = 0; a6 < 16; a6++) {
        o6[a6] = c8[a6];
      }
    }
    function pow2523(o6, i7) {
      const c8 = gf2();
      let a6;
      for (a6 = 0; a6 < 16; a6++) {
        c8[a6] = i7[a6];
      }
      for (a6 = 250; a6 >= 0; a6--) {
        square(c8, c8);
        if (a6 !== 1) {
          mul(c8, c8, i7);
        }
      }
      for (a6 = 0; a6 < 16; a6++) {
        o6[a6] = c8[a6];
      }
    }
    function edadd(p5, q4) {
      const a6 = gf2(), b5 = gf2(), c8 = gf2(), d5 = gf2(), e4 = gf2(), f6 = gf2(), g5 = gf2(), h7 = gf2(), t3 = gf2();
      sub(a6, p5[1], p5[0]);
      sub(t3, q4[1], q4[0]);
      mul(a6, a6, t3);
      add(b5, p5[0], p5[1]);
      add(t3, q4[0], q4[1]);
      mul(b5, b5, t3);
      mul(c8, p5[3], q4[3]);
      mul(c8, c8, D22);
      mul(d5, p5[2], q4[2]);
      add(d5, d5, d5);
      sub(e4, b5, a6);
      sub(f6, d5, c8);
      add(g5, d5, c8);
      add(h7, b5, a6);
      mul(p5[0], e4, f6);
      mul(p5[1], h7, g5);
      mul(p5[2], g5, f6);
      mul(p5[3], e4, h7);
    }
    function cswap(p5, q4, b5) {
      for (let i7 = 0; i7 < 4; i7++) {
        sel25519(p5[i7], q4[i7], b5);
      }
    }
    function pack(r5, p5) {
      const tx = gf2(), ty = gf2(), zi2 = gf2();
      inv25519(zi2, p5[2]);
      mul(tx, p5[0], zi2);
      mul(ty, p5[1], zi2);
      pack25519(r5, ty);
      r5[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p5, q4, s5) {
      set25519(p5[0], gf0);
      set25519(p5[1], gf1);
      set25519(p5[2], gf1);
      set25519(p5[3], gf0);
      for (let i7 = 255; i7 >= 0; --i7) {
        const b5 = s5[i7 / 8 | 0] >> (i7 & 7) & 1;
        cswap(p5, q4, b5);
        edadd(q4, p5);
        edadd(p5, p5);
        cswap(p5, q4, b5);
      }
    }
    function scalarbase(p5, s5) {
      const q4 = [gf2(), gf2(), gf2(), gf2()];
      set25519(q4[0], X3);
      set25519(q4[1], Y2);
      set25519(q4[2], gf1);
      mul(q4[3], X3, Y2);
      scalarmult(p5, q4, s5);
    }
    function generateKeyPairFromSeed2(seed) {
      if (seed.length !== exports.SEED_LENGTH) {
        throw new Error(`ed25519: seed must be ${exports.SEED_LENGTH} bytes`);
      }
      const d5 = (0, sha512_1.hash)(seed);
      d5[0] &= 248;
      d5[31] &= 127;
      d5[31] |= 64;
      const publicKey = new Uint8Array(32);
      const p5 = [gf2(), gf2(), gf2(), gf2()];
      scalarbase(p5, d5);
      pack(publicKey, p5);
      const secretKey = new Uint8Array(64);
      secretKey.set(seed);
      secretKey.set(publicKey, 32);
      return {
        publicKey,
        secretKey
      };
    }
    exports.generateKeyPairFromSeed = generateKeyPairFromSeed2;
    function generateKeyPair3(prng) {
      const seed = (0, random_1.randomBytes)(32, prng);
      const result = generateKeyPairFromSeed2(seed);
      (0, wipe_1.wipe)(seed);
      return result;
    }
    exports.generateKeyPair = generateKeyPair3;
    function extractPublicKeyFromSecretKey(secretKey) {
      if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error(`ed25519: secret key must be ${exports.SECRET_KEY_LENGTH} bytes`);
      }
      return new Uint8Array(secretKey.subarray(32));
    }
    exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
    var L4 = new Float64Array([
      237,
      211,
      245,
      92,
      26,
      99,
      18,
      88,
      214,
      156,
      247,
      162,
      222,
      249,
      222,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      16
    ]);
    function modL(r5, x7) {
      let carry;
      let i7;
      let j6;
      let k5;
      for (i7 = 63; i7 >= 32; --i7) {
        carry = 0;
        for (j6 = i7 - 32, k5 = i7 - 12; j6 < k5; ++j6) {
          x7[j6] += carry - 16 * x7[i7] * L4[j6 - (i7 - 32)];
          carry = Math.floor((x7[j6] + 128) / 256);
          x7[j6] -= carry * 256;
        }
        x7[j6] += carry;
        x7[i7] = 0;
      }
      carry = 0;
      for (j6 = 0; j6 < 32; j6++) {
        x7[j6] += carry - (x7[31] >> 4) * L4[j6];
        carry = x7[j6] >> 8;
        x7[j6] &= 255;
      }
      for (j6 = 0; j6 < 32; j6++) {
        x7[j6] -= carry * L4[j6];
      }
      for (i7 = 0; i7 < 32; i7++) {
        x7[i7 + 1] += x7[i7] >> 8;
        r5[i7] = x7[i7] & 255;
      }
    }
    function reduce(r5) {
      const x7 = new Float64Array(64);
      for (let i7 = 0; i7 < 64; i7++) {
        x7[i7] = r5[i7];
      }
      for (let i7 = 0; i7 < 64; i7++) {
        r5[i7] = 0;
      }
      modL(r5, x7);
    }
    function sign2(secretKey, message) {
      const x7 = new Float64Array(64);
      const p5 = [gf2(), gf2(), gf2(), gf2()];
      const d5 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d5[0] &= 248;
      d5[31] &= 127;
      d5[31] |= 64;
      const signature = new Uint8Array(64);
      signature.set(d5.subarray(32), 32);
      const hs = new sha512_1.SHA512();
      hs.update(signature.subarray(32));
      hs.update(message);
      const r5 = hs.digest();
      hs.clean();
      reduce(r5);
      scalarbase(p5, r5);
      pack(signature, p5);
      hs.reset();
      hs.update(signature.subarray(0, 32));
      hs.update(secretKey.subarray(32));
      hs.update(message);
      const h7 = hs.digest();
      reduce(h7);
      for (let i7 = 0; i7 < 32; i7++) {
        x7[i7] = r5[i7];
      }
      for (let i7 = 0; i7 < 32; i7++) {
        for (let j6 = 0; j6 < 32; j6++) {
          x7[i7 + j6] += h7[i7] * d5[j6];
        }
      }
      modL(signature.subarray(32), x7);
      return signature;
    }
    exports.sign = sign2;
    function unpackneg(r5, p5) {
      const t3 = gf2(), chk = gf2(), num = gf2(), den = gf2(), den2 = gf2(), den4 = gf2(), den6 = gf2();
      set25519(r5[2], gf1);
      unpack25519(r5[1], p5);
      square(num, r5[1]);
      mul(den, num, D5);
      sub(num, num, r5[2]);
      add(den, r5[2], den);
      square(den2, den);
      square(den4, den2);
      mul(den6, den4, den2);
      mul(t3, den6, num);
      mul(t3, t3, den);
      pow2523(t3, t3);
      mul(t3, t3, num);
      mul(t3, t3, den);
      mul(t3, t3, den);
      mul(r5[0], t3, den);
      square(chk, r5[0]);
      mul(chk, chk, den);
      if (neq25519(chk, num)) {
        mul(r5[0], r5[0], I6);
      }
      square(chk, r5[0]);
      mul(chk, chk, den);
      if (neq25519(chk, num)) {
        return -1;
      }
      if (par25519(r5[0]) === p5[31] >> 7) {
        sub(r5[0], gf0, r5[0]);
      }
      mul(r5[3], r5[0], r5[1]);
      return 0;
    }
    function verify2(publicKey, message, signature) {
      const t3 = new Uint8Array(32);
      const p5 = [gf2(), gf2(), gf2(), gf2()];
      const q4 = [gf2(), gf2(), gf2(), gf2()];
      if (signature.length !== exports.SIGNATURE_LENGTH) {
        throw new Error(`ed25519: signature must be ${exports.SIGNATURE_LENGTH} bytes`);
      }
      if (unpackneg(q4, publicKey)) {
        return false;
      }
      const hs = new sha512_1.SHA512();
      hs.update(signature.subarray(0, 32));
      hs.update(publicKey);
      hs.update(message);
      const h7 = hs.digest();
      reduce(h7);
      scalarmult(p5, q4, h7);
      scalarbase(q4, signature.subarray(32));
      edadd(p5, q4);
      pack(t3, p5);
      if (verify32(signature, t3)) {
        return false;
      }
      return true;
    }
    exports.verify = verify2;
    function convertPublicKeyToX25519(publicKey) {
      let q4 = [gf2(), gf2(), gf2(), gf2()];
      if (unpackneg(q4, publicKey)) {
        throw new Error("Ed25519: invalid public key");
      }
      let a6 = gf2();
      let b5 = gf2();
      let y8 = q4[1];
      add(a6, gf1, y8);
      sub(b5, gf1, y8);
      inv25519(b5, b5);
      mul(a6, a6, b5);
      let z8 = new Uint8Array(32);
      pack25519(z8, a6);
      return z8;
    }
    exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
    function convertSecretKeyToX25519(secretKey) {
      const d5 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d5[0] &= 248;
      d5[31] &= 127;
      d5[31] |= 64;
      const o6 = new Uint8Array(d5.subarray(0, 32));
      (0, wipe_1.wipe)(d5);
      return o6;
    }
    exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
  }
});

// node_modules/@walletconnect/utils/node_modules/@walletconnect/window-getters/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "node_modules/@walletconnect/utils/node_modules/@walletconnect/window-getters/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
    function getFromWindow3(name2) {
      let res = void 0;
      if (typeof window !== "undefined" && typeof window[name2] !== "undefined") {
        res = window[name2];
      }
      return res;
    }
    exports.getFromWindow = getFromWindow3;
    function getFromWindowOrThrow3(name2) {
      const res = getFromWindow3(name2);
      if (!res) {
        throw new Error(`${name2} is not defined in Window`);
      }
      return res;
    }
    exports.getFromWindowOrThrow = getFromWindowOrThrow3;
    function getDocumentOrThrow3() {
      return getFromWindowOrThrow3("document");
    }
    exports.getDocumentOrThrow = getDocumentOrThrow3;
    function getDocument3() {
      return getFromWindow3("document");
    }
    exports.getDocument = getDocument3;
    function getNavigatorOrThrow3() {
      return getFromWindowOrThrow3("navigator");
    }
    exports.getNavigatorOrThrow = getNavigatorOrThrow3;
    function getNavigator3() {
      return getFromWindow3("navigator");
    }
    exports.getNavigator = getNavigator3;
    function getLocationOrThrow3() {
      return getFromWindowOrThrow3("location");
    }
    exports.getLocationOrThrow = getLocationOrThrow3;
    function getLocation3() {
      return getFromWindow3("location");
    }
    exports.getLocation = getLocation3;
    function getCryptoOrThrow3() {
      return getFromWindowOrThrow3("crypto");
    }
    exports.getCryptoOrThrow = getCryptoOrThrow3;
    function getCrypto3() {
      return getFromWindow3("crypto");
    }
    exports.getCrypto = getCrypto3;
    function getLocalStorageOrThrow3() {
      return getFromWindowOrThrow3("localStorage");
    }
    exports.getLocalStorageOrThrow = getLocalStorageOrThrow3;
    function getLocalStorage3() {
      return getFromWindow3("localStorage");
    }
    exports.getLocalStorage = getLocalStorage3;
  }
});

// node_modules/@walletconnect/utils/node_modules/@walletconnect/window-metadata/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "node_modules/@walletconnect/utils/node_modules/@walletconnect/window-metadata/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWindowMetadata = void 0;
    var window_getters_1 = require_cjs5();
    function getWindowMetadata2() {
      let doc;
      let loc;
      try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
      } catch (e4) {
        return null;
      }
      function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons2 = [];
        for (let i7 = 0; i7 < links.length; i7++) {
          const link = links[i7];
          const rel = link.getAttribute("rel");
          if (rel) {
            if (rel.toLowerCase().indexOf("icon") > -1) {
              const href = link.getAttribute("href");
              if (href) {
                if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                  let absoluteHref = loc.protocol + "//" + loc.host;
                  if (href.indexOf("/") === 0) {
                    absoluteHref += href;
                  } else {
                    const path = loc.pathname.split("/");
                    path.pop();
                    const finalPath = path.join("/");
                    absoluteHref += finalPath + "/" + href;
                  }
                  icons2.push(absoluteHref);
                } else if (href.indexOf("//") === 0) {
                  const absoluteUrl = loc.protocol + href;
                  icons2.push(absoluteUrl);
                } else {
                  icons2.push(href);
                }
              }
            }
          }
        }
        return icons2;
      }
      function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i7 = 0; i7 < metaTags.length; i7++) {
          const tag = metaTags[i7];
          const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
            if (attr) {
              return args.includes(attr);
            }
            return false;
          });
          if (attributes.length && attributes) {
            const content = tag.getAttribute("content");
            if (content) {
              return content;
            }
          }
        }
        return "";
      }
      function getName() {
        let name3 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name3) {
          name3 = doc.title;
        }
        return name3;
      }
      function getDescription() {
        const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description2;
      }
      const name2 = getName();
      const description = getDescription();
      const url = loc.origin;
      const icons = getIcons();
      const meta = {
        description,
        url,
        icons,
        name: name2
      };
      return meta;
    }
    exports.getWindowMetadata = getWindowMetadata2;
  }
});

// node_modules/strict-uri-encode/index.js
var require_strict_uri_encode = __commonJS({
  "node_modules/strict-uri-encode/index.js"(exports, module) {
    "use strict";
    module.exports = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x7) => `%${x7.charCodeAt(0).toString(16).toUpperCase()}`);
  }
});

// node_modules/decode-uri-component/index.js
var require_decode_uri_component = __commonJS({
  "node_modules/decode-uri-component/index.js"(exports, module) {
    "use strict";
    var token = "%[a-f0-9]{2}";
    var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
    var multiMatcher = new RegExp("(" + token + ")+", "gi");
    function decodeComponents(components, split) {
      try {
        return [decodeURIComponent(components.join(""))];
      } catch (err) {
      }
      if (components.length === 1) {
        return components;
      }
      split = split || 1;
      var left = components.slice(0, split);
      var right = components.slice(split);
      return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
    }
    function decode6(input) {
      try {
        return decodeURIComponent(input);
      } catch (err) {
        var tokens = input.match(singleMatcher) || [];
        for (var i7 = 1; i7 < tokens.length; i7++) {
          input = decodeComponents(tokens, i7).join("");
          tokens = input.match(singleMatcher) || [];
        }
        return input;
      }
    }
    function customDecodeURIComponent(input) {
      var replaceMap = {
        "%FE%FF": "��",
        "%FF%FE": "��"
      };
      var match = multiMatcher.exec(input);
      while (match) {
        try {
          replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
          var result = decode6(match[0]);
          if (result !== match[0]) {
            replaceMap[match[0]] = result;
          }
        }
        match = multiMatcher.exec(input);
      }
      replaceMap["%C2"] = "�";
      var entries = Object.keys(replaceMap);
      for (var i7 = 0; i7 < entries.length; i7++) {
        var key = entries[i7];
        input = input.replace(new RegExp(key, "g"), replaceMap[key]);
      }
      return input;
    }
    module.exports = function(encodedURI) {
      if (typeof encodedURI !== "string") {
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
      }
      try {
        encodedURI = encodedURI.replace(/\+/g, " ");
        return decodeURIComponent(encodedURI);
      } catch (err) {
        return customDecodeURIComponent(encodedURI);
      }
    };
  }
});

// node_modules/split-on-first/index.js
var require_split_on_first = __commonJS({
  "node_modules/split-on-first/index.js"(exports, module) {
    "use strict";
    module.exports = (string2, separator) => {
      if (!(typeof string2 === "string" && typeof separator === "string")) {
        throw new TypeError("Expected the arguments to be of type `string`");
      }
      if (separator === "") {
        return [string2];
      }
      const separatorIndex = string2.indexOf(separator);
      if (separatorIndex === -1) {
        return [string2];
      }
      return [
        string2.slice(0, separatorIndex),
        string2.slice(separatorIndex + separator.length)
      ];
    };
  }
});

// node_modules/filter-obj/index.js
var require_filter_obj = __commonJS({
  "node_modules/filter-obj/index.js"(exports, module) {
    "use strict";
    module.exports = function(obj, predicate) {
      var ret = {};
      var keys2 = Object.keys(obj);
      var isArr = Array.isArray(predicate);
      for (var i7 = 0; i7 < keys2.length; i7++) {
        var key = keys2[i7];
        var val = obj[key];
        if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
          ret[key] = val;
        }
      }
      return ret;
    };
  }
});

// node_modules/query-string/index.js
var require_query_string = __commonJS({
  "node_modules/query-string/index.js"(exports) {
    "use strict";
    var strictUriEncode = require_strict_uri_encode();
    var decodeComponent = require_decode_uri_component();
    var splitOnFirst = require_split_on_first();
    var filterObject = require_filter_obj();
    var isNullOrUndefined = (value) => value === null || value === void 0;
    var encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
    function encoderForArrayFormat(options) {
      switch (options.arrayFormat) {
        case "index":
          return (key) => (result, value) => {
            const index = result.length;
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode5(key, options), "[", index, "]"].join("")];
            }
            return [
              ...result,
              [encode5(key, options), "[", encode5(index, options), "]=", encode5(value, options)].join("")
            ];
          };
        case "bracket":
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode5(key, options), "[]"].join("")];
            }
            return [...result, [encode5(key, options), "[]=", encode5(value, options)].join("")];
          };
        case "colon-list-separator":
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode5(key, options), ":list="].join("")];
            }
            return [...result, [encode5(key, options), ":list=", encode5(value, options)].join("")];
          };
        case "comma":
        case "separator":
        case "bracket-separator": {
          const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            value = value === null ? "" : value;
            if (result.length === 0) {
              return [[encode5(key, options), keyValueSep, encode5(value, options)].join("")];
            }
            return [[result, encode5(value, options)].join(options.arrayFormatSeparator)];
          };
        }
        default:
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, encode5(key, options)];
            }
            return [...result, [encode5(key, options), "=", encode5(value, options)].join("")];
          };
      }
    }
    function parserForArrayFormat(options) {
      let result;
      switch (options.arrayFormat) {
        case "index":
          return (key, value, accumulator) => {
            result = /\[(\d*)\]$/.exec(key);
            key = key.replace(/\[\d*\]$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = {};
            }
            accumulator[key][result[1]] = value;
          };
        case "bracket":
          return (key, value, accumulator) => {
            result = /(\[\])$/.exec(key);
            key = key.replace(/\[\]$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = [value];
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
        case "colon-list-separator":
          return (key, value, accumulator) => {
            result = /(:list)$/.exec(key);
            key = key.replace(/:list$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = [value];
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
        case "comma":
        case "separator":
          return (key, value, accumulator) => {
            const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
            const isEncodedArray = typeof value === "string" && !isArray && decode6(value, options).includes(options.arrayFormatSeparator);
            value = isEncodedArray ? decode6(value, options) : value;
            const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode6(item, options)) : value === null ? value : decode6(value, options);
            accumulator[key] = newValue;
          };
        case "bracket-separator":
          return (key, value, accumulator) => {
            const isArray = /(\[\])$/.test(key);
            key = key.replace(/\[\]$/, "");
            if (!isArray) {
              accumulator[key] = value ? decode6(value, options) : value;
              return;
            }
            const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode6(item, options));
            if (accumulator[key] === void 0) {
              accumulator[key] = arrayValue;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], arrayValue);
          };
        default:
          return (key, value, accumulator) => {
            if (accumulator[key] === void 0) {
              accumulator[key] = value;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
      }
    }
    function validateArrayFormatSeparator(value) {
      if (typeof value !== "string" || value.length !== 1) {
        throw new TypeError("arrayFormatSeparator must be single character string");
      }
    }
    function encode5(value, options) {
      if (options.encode) {
        return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
      }
      return value;
    }
    function decode6(value, options) {
      if (options.decode) {
        return decodeComponent(value);
      }
      return value;
    }
    function keysSorter(input) {
      if (Array.isArray(input)) {
        return input.sort();
      }
      if (typeof input === "object") {
        return keysSorter(Object.keys(input)).sort((a6, b5) => Number(a6) - Number(b5)).map((key) => input[key]);
      }
      return input;
    }
    function removeHash(input) {
      const hashStart = input.indexOf("#");
      if (hashStart !== -1) {
        input = input.slice(0, hashStart);
      }
      return input;
    }
    function getHash(url) {
      let hash = "";
      const hashStart = url.indexOf("#");
      if (hashStart !== -1) {
        hash = url.slice(hashStart);
      }
      return hash;
    }
    function extract(input) {
      input = removeHash(input);
      const queryStart = input.indexOf("?");
      if (queryStart === -1) {
        return "";
      }
      return input.slice(queryStart + 1);
    }
    function parseValue(value, options) {
      if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
        value = Number(value);
      } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
        value = value.toLowerCase() === "true";
      }
      return value;
    }
    function parse2(query, options) {
      options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const formatter = parserForArrayFormat(options);
      const ret = /* @__PURE__ */ Object.create(null);
      if (typeof query !== "string") {
        return ret;
      }
      query = query.trim().replace(/^[?#&]/, "");
      if (!query) {
        return ret;
      }
      for (const param of query.split("&")) {
        if (param === "") {
          continue;
        }
        let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
        value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode6(value, options);
        formatter(decode6(key, options), value, ret);
      }
      for (const key of Object.keys(ret)) {
        const value = ret[key];
        if (typeof value === "object" && value !== null) {
          for (const k5 of Object.keys(value)) {
            value[k5] = parseValue(value[k5], options);
          }
        } else {
          ret[key] = parseValue(value, options);
        }
      }
      if (options.sort === false) {
        return ret;
      }
      return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
        const value = ret[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
          result[key] = keysSorter(value);
        } else {
          result[key] = value;
        }
        return result;
      }, /* @__PURE__ */ Object.create(null));
    }
    exports.extract = extract;
    exports.parse = parse2;
    exports.stringify = (object, options) => {
      if (!object) {
        return "";
      }
      options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ","
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
      const formatter = encoderForArrayFormat(options);
      const objectCopy = {};
      for (const key of Object.keys(object)) {
        if (!shouldFilter(key)) {
          objectCopy[key] = object[key];
        }
      }
      const keys2 = Object.keys(objectCopy);
      if (options.sort !== false) {
        keys2.sort(options.sort);
      }
      return keys2.map((key) => {
        const value = object[key];
        if (value === void 0) {
          return "";
        }
        if (value === null) {
          return encode5(key, options);
        }
        if (Array.isArray(value)) {
          if (value.length === 0 && options.arrayFormat === "bracket-separator") {
            return encode5(key, options) + "[]";
          }
          return value.reduce(formatter(key), []).join("&");
        }
        return encode5(key, options) + "=" + encode5(value, options);
      }).filter((x7) => x7.length > 0).join("&");
    };
    exports.parseUrl = (url, options) => {
      options = Object.assign({
        decode: true
      }, options);
      const [url_, hash] = splitOnFirst(url, "#");
      return Object.assign(
        {
          url: url_.split("?")[0] || "",
          query: parse2(extract(url), options)
        },
        options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode6(hash, options) } : {}
      );
    };
    exports.stringifyUrl = (object, options) => {
      options = Object.assign({
        encode: true,
        strict: true,
        [encodeFragmentIdentifier]: true
      }, options);
      const url = removeHash(object.url).split("?")[0] || "";
      const queryFromUrl = exports.extract(object.url);
      const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
      const query = Object.assign(parsedQueryFromUrl, object.query);
      let queryString = exports.stringify(query, options);
      if (queryString) {
        queryString = `?${queryString}`;
      }
      let hash = getHash(object.url);
      if (object.fragmentIdentifier) {
        hash = `#${options[encodeFragmentIdentifier] ? encode5(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
      }
      return `${url}${queryString}${hash}`;
    };
    exports.pick = (input, filter, options) => {
      options = Object.assign({
        parseFragmentIdentifier: true,
        [encodeFragmentIdentifier]: false
      }, options);
      const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
      return exports.stringifyUrl({
        url,
        query: filterObject(query, filter),
        fragmentIdentifier
      }, options);
    };
    exports.exclude = (input, filter, options) => {
      const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
      return exports.pick(input, exclusionFilter, options);
    };
  }
});

// node_modules/@stablelib/chacha/lib/chacha.js
var require_chacha = __commonJS({
  "node_modules/@stablelib/chacha/lib/chacha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    var ROUNDS = 20;
    function core(out, input, key) {
      var j02 = 1634760805;
      var j1 = 857760878;
      var j22 = 2036477234;
      var j32 = 1797285236;
      var j42 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
      var j52 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
      var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
      var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
      var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
      var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
      var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
      var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
      var j12 = input[3] << 24 | input[2] << 16 | input[1] << 8 | input[0];
      var j13 = input[7] << 24 | input[6] << 16 | input[5] << 8 | input[4];
      var j14 = input[11] << 24 | input[10] << 16 | input[9] << 8 | input[8];
      var j15 = input[15] << 24 | input[14] << 16 | input[13] << 8 | input[12];
      var x02 = j02;
      var x1 = j1;
      var x22 = j22;
      var x32 = j32;
      var x42 = j42;
      var x52 = j52;
      var x62 = j6;
      var x7 = j7;
      var x8 = j8;
      var x9 = j9;
      var x10 = j10;
      var x11 = j11;
      var x12 = j12;
      var x13 = j13;
      var x14 = j14;
      var x15 = j15;
      for (var i7 = 0; i7 < ROUNDS; i7 += 2) {
        x02 = x02 + x42 | 0;
        x12 ^= x02;
        x12 = x12 >>> 32 - 16 | x12 << 16;
        x8 = x8 + x12 | 0;
        x42 ^= x8;
        x42 = x42 >>> 32 - 12 | x42 << 12;
        x1 = x1 + x52 | 0;
        x13 ^= x1;
        x13 = x13 >>> 32 - 16 | x13 << 16;
        x9 = x9 + x13 | 0;
        x52 ^= x9;
        x52 = x52 >>> 32 - 12 | x52 << 12;
        x22 = x22 + x62 | 0;
        x14 ^= x22;
        x14 = x14 >>> 32 - 16 | x14 << 16;
        x10 = x10 + x14 | 0;
        x62 ^= x10;
        x62 = x62 >>> 32 - 12 | x62 << 12;
        x32 = x32 + x7 | 0;
        x15 ^= x32;
        x15 = x15 >>> 32 - 16 | x15 << 16;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 32 - 12 | x7 << 12;
        x22 = x22 + x62 | 0;
        x14 ^= x22;
        x14 = x14 >>> 32 - 8 | x14 << 8;
        x10 = x10 + x14 | 0;
        x62 ^= x10;
        x62 = x62 >>> 32 - 7 | x62 << 7;
        x32 = x32 + x7 | 0;
        x15 ^= x32;
        x15 = x15 >>> 32 - 8 | x15 << 8;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 32 - 7 | x7 << 7;
        x1 = x1 + x52 | 0;
        x13 ^= x1;
        x13 = x13 >>> 32 - 8 | x13 << 8;
        x9 = x9 + x13 | 0;
        x52 ^= x9;
        x52 = x52 >>> 32 - 7 | x52 << 7;
        x02 = x02 + x42 | 0;
        x12 ^= x02;
        x12 = x12 >>> 32 - 8 | x12 << 8;
        x8 = x8 + x12 | 0;
        x42 ^= x8;
        x42 = x42 >>> 32 - 7 | x42 << 7;
        x02 = x02 + x52 | 0;
        x15 ^= x02;
        x15 = x15 >>> 32 - 16 | x15 << 16;
        x10 = x10 + x15 | 0;
        x52 ^= x10;
        x52 = x52 >>> 32 - 12 | x52 << 12;
        x1 = x1 + x62 | 0;
        x12 ^= x1;
        x12 = x12 >>> 32 - 16 | x12 << 16;
        x11 = x11 + x12 | 0;
        x62 ^= x11;
        x62 = x62 >>> 32 - 12 | x62 << 12;
        x22 = x22 + x7 | 0;
        x13 ^= x22;
        x13 = x13 >>> 32 - 16 | x13 << 16;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 32 - 12 | x7 << 12;
        x32 = x32 + x42 | 0;
        x14 ^= x32;
        x14 = x14 >>> 32 - 16 | x14 << 16;
        x9 = x9 + x14 | 0;
        x42 ^= x9;
        x42 = x42 >>> 32 - 12 | x42 << 12;
        x22 = x22 + x7 | 0;
        x13 ^= x22;
        x13 = x13 >>> 32 - 8 | x13 << 8;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 32 - 7 | x7 << 7;
        x32 = x32 + x42 | 0;
        x14 ^= x32;
        x14 = x14 >>> 32 - 8 | x14 << 8;
        x9 = x9 + x14 | 0;
        x42 ^= x9;
        x42 = x42 >>> 32 - 7 | x42 << 7;
        x1 = x1 + x62 | 0;
        x12 ^= x1;
        x12 = x12 >>> 32 - 8 | x12 << 8;
        x11 = x11 + x12 | 0;
        x62 ^= x11;
        x62 = x62 >>> 32 - 7 | x62 << 7;
        x02 = x02 + x52 | 0;
        x15 ^= x02;
        x15 = x15 >>> 32 - 8 | x15 << 8;
        x10 = x10 + x15 | 0;
        x52 ^= x10;
        x52 = x52 >>> 32 - 7 | x52 << 7;
      }
      binary_1.writeUint32LE(x02 + j02 | 0, out, 0);
      binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
      binary_1.writeUint32LE(x22 + j22 | 0, out, 8);
      binary_1.writeUint32LE(x32 + j32 | 0, out, 12);
      binary_1.writeUint32LE(x42 + j42 | 0, out, 16);
      binary_1.writeUint32LE(x52 + j52 | 0, out, 20);
      binary_1.writeUint32LE(x62 + j6 | 0, out, 24);
      binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
      binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
      binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
      binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
      binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
      binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
      binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
      binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
      binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
    }
    function streamXOR(key, nonce, src2, dst, nonceInplaceCounterLength) {
      if (nonceInplaceCounterLength === void 0) {
        nonceInplaceCounterLength = 0;
      }
      if (key.length !== 32) {
        throw new Error("ChaCha: key size must be 32 bytes");
      }
      if (dst.length < src2.length) {
        throw new Error("ChaCha: destination is shorter than source");
      }
      var nc;
      var counterLength;
      if (nonceInplaceCounterLength === 0) {
        if (nonce.length !== 8 && nonce.length !== 12) {
          throw new Error("ChaCha nonce must be 8 or 12 bytes");
        }
        nc = new Uint8Array(16);
        counterLength = nc.length - nonce.length;
        nc.set(nonce, counterLength);
      } else {
        if (nonce.length !== 16) {
          throw new Error("ChaCha nonce with counter must be 16 bytes");
        }
        nc = nonce;
        counterLength = nonceInplaceCounterLength;
      }
      var block = new Uint8Array(64);
      for (var i7 = 0; i7 < src2.length; i7 += 64) {
        core(block, nc, key);
        for (var j6 = i7; j6 < i7 + 64 && j6 < src2.length; j6++) {
          dst[j6] = src2[j6] ^ block[j6 - i7];
        }
        incrementCounter(nc, 0, counterLength);
      }
      wipe_1.wipe(block);
      if (nonceInplaceCounterLength === 0) {
        wipe_1.wipe(nc);
      }
      return dst;
    }
    exports.streamXOR = streamXOR;
    function stream(key, nonce, dst, nonceInplaceCounterLength) {
      if (nonceInplaceCounterLength === void 0) {
        nonceInplaceCounterLength = 0;
      }
      wipe_1.wipe(dst);
      return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
    }
    exports.stream = stream;
    function incrementCounter(counter, pos, len) {
      var carry = 1;
      while (len--) {
        carry = carry + (counter[pos] & 255) | 0;
        counter[pos] = carry & 255;
        carry >>>= 8;
        pos++;
      }
      if (carry > 0) {
        throw new Error("ChaCha: counter overflow");
      }
    }
  }
});

// node_modules/@stablelib/constant-time/lib/constant-time.js
var require_constant_time = __commonJS({
  "node_modules/@stablelib/constant-time/lib/constant-time.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function select(subject, resultIfOne, resultIfZero) {
      return ~(subject - 1) & resultIfOne | subject - 1 & resultIfZero;
    }
    exports.select = select;
    function lessOrEqual(a6, b5) {
      return (a6 | 0) - (b5 | 0) - 1 >>> 31 & 1;
    }
    exports.lessOrEqual = lessOrEqual;
    function compare2(a6, b5) {
      if (a6.length !== b5.length) {
        return 0;
      }
      var result = 0;
      for (var i7 = 0; i7 < a6.length; i7++) {
        result |= a6[i7] ^ b5[i7];
      }
      return 1 & result - 1 >>> 8;
    }
    exports.compare = compare2;
    function equal(a6, b5) {
      if (a6.length === 0 || b5.length === 0) {
        return false;
      }
      return compare2(a6, b5) !== 0;
    }
    exports.equal = equal;
  }
});

// node_modules/@stablelib/poly1305/lib/poly1305.js
var require_poly1305 = __commonJS({
  "node_modules/@stablelib/poly1305/lib/poly1305.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var constant_time_1 = require_constant_time();
    var wipe_1 = require_wipe();
    exports.DIGEST_LENGTH = 16;
    var Poly1305 = (
      /** @class */
      function() {
        function Poly13052(key) {
          this.digestLength = exports.DIGEST_LENGTH;
          this._buffer = new Uint8Array(16);
          this._r = new Uint16Array(10);
          this._h = new Uint16Array(10);
          this._pad = new Uint16Array(8);
          this._leftover = 0;
          this._fin = 0;
          this._finished = false;
          var t02 = key[0] | key[1] << 8;
          this._r[0] = t02 & 8191;
          var t1 = key[2] | key[3] << 8;
          this._r[1] = (t02 >>> 13 | t1 << 3) & 8191;
          var t22 = key[4] | key[5] << 8;
          this._r[2] = (t1 >>> 10 | t22 << 6) & 7939;
          var t3 = key[6] | key[7] << 8;
          this._r[3] = (t22 >>> 7 | t3 << 9) & 8191;
          var t4 = key[8] | key[9] << 8;
          this._r[4] = (t3 >>> 4 | t4 << 12) & 255;
          this._r[5] = t4 >>> 1 & 8190;
          var t5 = key[10] | key[11] << 8;
          this._r[6] = (t4 >>> 14 | t5 << 2) & 8191;
          var t6 = key[12] | key[13] << 8;
          this._r[7] = (t5 >>> 11 | t6 << 5) & 8065;
          var t7 = key[14] | key[15] << 8;
          this._r[8] = (t6 >>> 8 | t7 << 8) & 8191;
          this._r[9] = t7 >>> 5 & 127;
          this._pad[0] = key[16] | key[17] << 8;
          this._pad[1] = key[18] | key[19] << 8;
          this._pad[2] = key[20] | key[21] << 8;
          this._pad[3] = key[22] | key[23] << 8;
          this._pad[4] = key[24] | key[25] << 8;
          this._pad[5] = key[26] | key[27] << 8;
          this._pad[6] = key[28] | key[29] << 8;
          this._pad[7] = key[30] | key[31] << 8;
        }
        Poly13052.prototype._blocks = function(m4, mpos, bytes) {
          var hibit = this._fin ? 0 : 1 << 11;
          var h02 = this._h[0], h1 = this._h[1], h22 = this._h[2], h32 = this._h[3], h42 = this._h[4], h52 = this._h[5], h62 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
          var r02 = this._r[0], r1 = this._r[1], r22 = this._r[2], r32 = this._r[3], r42 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
          while (bytes >= 16) {
            var t02 = m4[mpos + 0] | m4[mpos + 1] << 8;
            h02 += t02 & 8191;
            var t1 = m4[mpos + 2] | m4[mpos + 3] << 8;
            h1 += (t02 >>> 13 | t1 << 3) & 8191;
            var t22 = m4[mpos + 4] | m4[mpos + 5] << 8;
            h22 += (t1 >>> 10 | t22 << 6) & 8191;
            var t3 = m4[mpos + 6] | m4[mpos + 7] << 8;
            h32 += (t22 >>> 7 | t3 << 9) & 8191;
            var t4 = m4[mpos + 8] | m4[mpos + 9] << 8;
            h42 += (t3 >>> 4 | t4 << 12) & 8191;
            h52 += t4 >>> 1 & 8191;
            var t5 = m4[mpos + 10] | m4[mpos + 11] << 8;
            h62 += (t4 >>> 14 | t5 << 2) & 8191;
            var t6 = m4[mpos + 12] | m4[mpos + 13] << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 8191;
            var t7 = m4[mpos + 14] | m4[mpos + 15] << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 8191;
            h9 += t7 >>> 5 | hibit;
            var c8 = 0;
            var d02 = c8;
            d02 += h02 * r02;
            d02 += h1 * (5 * r9);
            d02 += h22 * (5 * r8);
            d02 += h32 * (5 * r7);
            d02 += h42 * (5 * r6);
            c8 = d02 >>> 13;
            d02 &= 8191;
            d02 += h52 * (5 * r5);
            d02 += h62 * (5 * r42);
            d02 += h7 * (5 * r32);
            d02 += h8 * (5 * r22);
            d02 += h9 * (5 * r1);
            c8 += d02 >>> 13;
            d02 &= 8191;
            var d1 = c8;
            d1 += h02 * r1;
            d1 += h1 * r02;
            d1 += h22 * (5 * r9);
            d1 += h32 * (5 * r8);
            d1 += h42 * (5 * r7);
            c8 = d1 >>> 13;
            d1 &= 8191;
            d1 += h52 * (5 * r6);
            d1 += h62 * (5 * r5);
            d1 += h7 * (5 * r42);
            d1 += h8 * (5 * r32);
            d1 += h9 * (5 * r22);
            c8 += d1 >>> 13;
            d1 &= 8191;
            var d22 = c8;
            d22 += h02 * r22;
            d22 += h1 * r1;
            d22 += h22 * r02;
            d22 += h32 * (5 * r9);
            d22 += h42 * (5 * r8);
            c8 = d22 >>> 13;
            d22 &= 8191;
            d22 += h52 * (5 * r7);
            d22 += h62 * (5 * r6);
            d22 += h7 * (5 * r5);
            d22 += h8 * (5 * r42);
            d22 += h9 * (5 * r32);
            c8 += d22 >>> 13;
            d22 &= 8191;
            var d32 = c8;
            d32 += h02 * r32;
            d32 += h1 * r22;
            d32 += h22 * r1;
            d32 += h32 * r02;
            d32 += h42 * (5 * r9);
            c8 = d32 >>> 13;
            d32 &= 8191;
            d32 += h52 * (5 * r8);
            d32 += h62 * (5 * r7);
            d32 += h7 * (5 * r6);
            d32 += h8 * (5 * r5);
            d32 += h9 * (5 * r42);
            c8 += d32 >>> 13;
            d32 &= 8191;
            var d42 = c8;
            d42 += h02 * r42;
            d42 += h1 * r32;
            d42 += h22 * r22;
            d42 += h32 * r1;
            d42 += h42 * r02;
            c8 = d42 >>> 13;
            d42 &= 8191;
            d42 += h52 * (5 * r9);
            d42 += h62 * (5 * r8);
            d42 += h7 * (5 * r7);
            d42 += h8 * (5 * r6);
            d42 += h9 * (5 * r5);
            c8 += d42 >>> 13;
            d42 &= 8191;
            var d5 = c8;
            d5 += h02 * r5;
            d5 += h1 * r42;
            d5 += h22 * r32;
            d5 += h32 * r22;
            d5 += h42 * r1;
            c8 = d5 >>> 13;
            d5 &= 8191;
            d5 += h52 * r02;
            d5 += h62 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c8 += d5 >>> 13;
            d5 &= 8191;
            var d6 = c8;
            d6 += h02 * r6;
            d6 += h1 * r5;
            d6 += h22 * r42;
            d6 += h32 * r32;
            d6 += h42 * r22;
            c8 = d6 >>> 13;
            d6 &= 8191;
            d6 += h52 * r1;
            d6 += h62 * r02;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c8 += d6 >>> 13;
            d6 &= 8191;
            var d7 = c8;
            d7 += h02 * r7;
            d7 += h1 * r6;
            d7 += h22 * r5;
            d7 += h32 * r42;
            d7 += h42 * r32;
            c8 = d7 >>> 13;
            d7 &= 8191;
            d7 += h52 * r22;
            d7 += h62 * r1;
            d7 += h7 * r02;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c8 += d7 >>> 13;
            d7 &= 8191;
            var d8 = c8;
            d8 += h02 * r8;
            d8 += h1 * r7;
            d8 += h22 * r6;
            d8 += h32 * r5;
            d8 += h42 * r42;
            c8 = d8 >>> 13;
            d8 &= 8191;
            d8 += h52 * r32;
            d8 += h62 * r22;
            d8 += h7 * r1;
            d8 += h8 * r02;
            d8 += h9 * (5 * r9);
            c8 += d8 >>> 13;
            d8 &= 8191;
            var d9 = c8;
            d9 += h02 * r9;
            d9 += h1 * r8;
            d9 += h22 * r7;
            d9 += h32 * r6;
            d9 += h42 * r5;
            c8 = d9 >>> 13;
            d9 &= 8191;
            d9 += h52 * r42;
            d9 += h62 * r32;
            d9 += h7 * r22;
            d9 += h8 * r1;
            d9 += h9 * r02;
            c8 += d9 >>> 13;
            d9 &= 8191;
            c8 = (c8 << 2) + c8 | 0;
            c8 = c8 + d02 | 0;
            d02 = c8 & 8191;
            c8 = c8 >>> 13;
            d1 += c8;
            h02 = d02;
            h1 = d1;
            h22 = d22;
            h32 = d32;
            h42 = d42;
            h52 = d5;
            h62 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
          }
          this._h[0] = h02;
          this._h[1] = h1;
          this._h[2] = h22;
          this._h[3] = h32;
          this._h[4] = h42;
          this._h[5] = h52;
          this._h[6] = h62;
          this._h[7] = h7;
          this._h[8] = h8;
          this._h[9] = h9;
        };
        Poly13052.prototype.finish = function(mac, macpos) {
          if (macpos === void 0) {
            macpos = 0;
          }
          var g5 = new Uint16Array(10);
          var c8;
          var mask;
          var f6;
          var i7;
          if (this._leftover) {
            i7 = this._leftover;
            this._buffer[i7++] = 1;
            for (; i7 < 16; i7++) {
              this._buffer[i7] = 0;
            }
            this._fin = 1;
            this._blocks(this._buffer, 0, 16);
          }
          c8 = this._h[1] >>> 13;
          this._h[1] &= 8191;
          for (i7 = 2; i7 < 10; i7++) {
            this._h[i7] += c8;
            c8 = this._h[i7] >>> 13;
            this._h[i7] &= 8191;
          }
          this._h[0] += c8 * 5;
          c8 = this._h[0] >>> 13;
          this._h[0] &= 8191;
          this._h[1] += c8;
          c8 = this._h[1] >>> 13;
          this._h[1] &= 8191;
          this._h[2] += c8;
          g5[0] = this._h[0] + 5;
          c8 = g5[0] >>> 13;
          g5[0] &= 8191;
          for (i7 = 1; i7 < 10; i7++) {
            g5[i7] = this._h[i7] + c8;
            c8 = g5[i7] >>> 13;
            g5[i7] &= 8191;
          }
          g5[9] -= 1 << 13;
          mask = (c8 ^ 1) - 1;
          for (i7 = 0; i7 < 10; i7++) {
            g5[i7] &= mask;
          }
          mask = ~mask;
          for (i7 = 0; i7 < 10; i7++) {
            this._h[i7] = this._h[i7] & mask | g5[i7];
          }
          this._h[0] = (this._h[0] | this._h[1] << 13) & 65535;
          this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535;
          this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535;
          this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535;
          this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535;
          this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535;
          this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535;
          this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535;
          f6 = this._h[0] + this._pad[0];
          this._h[0] = f6 & 65535;
          for (i7 = 1; i7 < 8; i7++) {
            f6 = (this._h[i7] + this._pad[i7] | 0) + (f6 >>> 16) | 0;
            this._h[i7] = f6 & 65535;
          }
          mac[macpos + 0] = this._h[0] >>> 0;
          mac[macpos + 1] = this._h[0] >>> 8;
          mac[macpos + 2] = this._h[1] >>> 0;
          mac[macpos + 3] = this._h[1] >>> 8;
          mac[macpos + 4] = this._h[2] >>> 0;
          mac[macpos + 5] = this._h[2] >>> 8;
          mac[macpos + 6] = this._h[3] >>> 0;
          mac[macpos + 7] = this._h[3] >>> 8;
          mac[macpos + 8] = this._h[4] >>> 0;
          mac[macpos + 9] = this._h[4] >>> 8;
          mac[macpos + 10] = this._h[5] >>> 0;
          mac[macpos + 11] = this._h[5] >>> 8;
          mac[macpos + 12] = this._h[6] >>> 0;
          mac[macpos + 13] = this._h[6] >>> 8;
          mac[macpos + 14] = this._h[7] >>> 0;
          mac[macpos + 15] = this._h[7] >>> 8;
          this._finished = true;
          return this;
        };
        Poly13052.prototype.update = function(m4) {
          var mpos = 0;
          var bytes = m4.length;
          var want;
          if (this._leftover) {
            want = 16 - this._leftover;
            if (want > bytes) {
              want = bytes;
            }
            for (var i7 = 0; i7 < want; i7++) {
              this._buffer[this._leftover + i7] = m4[mpos + i7];
            }
            bytes -= want;
            mpos += want;
            this._leftover += want;
            if (this._leftover < 16) {
              return this;
            }
            this._blocks(this._buffer, 0, 16);
            this._leftover = 0;
          }
          if (bytes >= 16) {
            want = bytes - bytes % 16;
            this._blocks(m4, mpos, want);
            mpos += want;
            bytes -= want;
          }
          if (bytes) {
            for (var i7 = 0; i7 < bytes; i7++) {
              this._buffer[this._leftover + i7] = m4[mpos + i7];
            }
            this._leftover += bytes;
          }
          return this;
        };
        Poly13052.prototype.digest = function() {
          if (this._finished) {
            throw new Error("Poly1305 was finished");
          }
          var mac = new Uint8Array(16);
          this.finish(mac);
          return mac;
        };
        Poly13052.prototype.clean = function() {
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._r);
          wipe_1.wipe(this._h);
          wipe_1.wipe(this._pad);
          this._leftover = 0;
          this._fin = 0;
          this._finished = true;
          return this;
        };
        return Poly13052;
      }()
    );
    exports.Poly1305 = Poly1305;
    function oneTimeAuth(key, data) {
      var h7 = new Poly1305(key);
      h7.update(data);
      var digest2 = h7.digest();
      h7.clean();
      return digest2;
    }
    exports.oneTimeAuth = oneTimeAuth;
    function equal(a6, b5) {
      if (a6.length !== exports.DIGEST_LENGTH || b5.length !== exports.DIGEST_LENGTH) {
        return false;
      }
      return constant_time_1.equal(a6, b5);
    }
    exports.equal = equal;
  }
});

// node_modules/@stablelib/chacha20poly1305/lib/chacha20poly1305.js
var require_chacha20poly1305 = __commonJS({
  "node_modules/@stablelib/chacha20poly1305/lib/chacha20poly1305.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chacha_1 = require_chacha();
    var poly1305_1 = require_poly1305();
    var wipe_1 = require_wipe();
    var binary_1 = require_binary();
    var constant_time_1 = require_constant_time();
    exports.KEY_LENGTH = 32;
    exports.NONCE_LENGTH = 12;
    exports.TAG_LENGTH = 16;
    var ZEROS = new Uint8Array(16);
    var ChaCha20Poly1305 = (
      /** @class */
      function() {
        function ChaCha20Poly13052(key) {
          this.nonceLength = exports.NONCE_LENGTH;
          this.tagLength = exports.TAG_LENGTH;
          if (key.length !== exports.KEY_LENGTH) {
            throw new Error("ChaCha20Poly1305 needs 32-byte key");
          }
          this._key = new Uint8Array(key);
        }
        ChaCha20Poly13052.prototype.seal = function(nonce, plaintext, associatedData, dst) {
          if (nonce.length > 16) {
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          }
          var counter = new Uint8Array(16);
          counter.set(nonce, counter.length - nonce.length);
          var authKey = new Uint8Array(32);
          chacha_1.stream(this._key, counter, authKey, 4);
          var resultLength = plaintext.length + this.tagLength;
          var result;
          if (dst) {
            if (dst.length !== resultLength) {
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            }
            result = dst;
          } else {
            result = new Uint8Array(resultLength);
          }
          chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
          this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
          wipe_1.wipe(counter);
          return result;
        };
        ChaCha20Poly13052.prototype.open = function(nonce, sealed, associatedData, dst) {
          if (nonce.length > 16) {
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          }
          if (sealed.length < this.tagLength) {
            return null;
          }
          var counter = new Uint8Array(16);
          counter.set(nonce, counter.length - nonce.length);
          var authKey = new Uint8Array(32);
          chacha_1.stream(this._key, counter, authKey, 4);
          var calculatedTag = new Uint8Array(this.tagLength);
          this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
          if (!constant_time_1.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
            return null;
          }
          var resultLength = sealed.length - this.tagLength;
          var result;
          if (dst) {
            if (dst.length !== resultLength) {
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            }
            result = dst;
          } else {
            result = new Uint8Array(resultLength);
          }
          chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
          wipe_1.wipe(counter);
          return result;
        };
        ChaCha20Poly13052.prototype.clean = function() {
          wipe_1.wipe(this._key);
          return this;
        };
        ChaCha20Poly13052.prototype._authenticate = function(tagOut, authKey, ciphertext, associatedData) {
          var h7 = new poly1305_1.Poly1305(authKey);
          if (associatedData) {
            h7.update(associatedData);
            if (associatedData.length % 16 > 0) {
              h7.update(ZEROS.subarray(associatedData.length % 16));
            }
          }
          h7.update(ciphertext);
          if (ciphertext.length % 16 > 0) {
            h7.update(ZEROS.subarray(ciphertext.length % 16));
          }
          var length2 = new Uint8Array(8);
          if (associatedData) {
            binary_1.writeUint64LE(associatedData.length, length2);
          }
          h7.update(length2);
          binary_1.writeUint64LE(ciphertext.length, length2);
          h7.update(length2);
          var tag = h7.digest();
          for (var i7 = 0; i7 < tag.length; i7++) {
            tagOut[i7] = tag[i7];
          }
          h7.clean();
          wipe_1.wipe(tag);
          wipe_1.wipe(length2);
        };
        return ChaCha20Poly13052;
      }()
    );
    exports.ChaCha20Poly1305 = ChaCha20Poly1305;
  }
});

// node_modules/@stablelib/hash/lib/hash.js
var require_hash = __commonJS({
  "node_modules/@stablelib/hash/lib/hash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isSerializableHash(h7) {
      return typeof h7.saveState !== "undefined" && typeof h7.restoreState !== "undefined" && typeof h7.cleanSavedState !== "undefined";
    }
    exports.isSerializableHash = isSerializableHash;
  }
});

// node_modules/@stablelib/hmac/lib/hmac.js
var require_hmac = __commonJS({
  "node_modules/@stablelib/hmac/lib/hmac.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hash_1 = require_hash();
    var constant_time_1 = require_constant_time();
    var wipe_1 = require_wipe();
    var HMAC = (
      /** @class */
      function() {
        function HMAC2(hash, key) {
          this._finished = false;
          this._inner = new hash();
          this._outer = new hash();
          this.blockSize = this._outer.blockSize;
          this.digestLength = this._outer.digestLength;
          var pad = new Uint8Array(this.blockSize);
          if (key.length > this.blockSize) {
            this._inner.update(key).finish(pad).clean();
          } else {
            pad.set(key);
          }
          for (var i7 = 0; i7 < pad.length; i7++) {
            pad[i7] ^= 54;
          }
          this._inner.update(pad);
          for (var i7 = 0; i7 < pad.length; i7++) {
            pad[i7] ^= 54 ^ 92;
          }
          this._outer.update(pad);
          if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {
            this._innerKeyedState = this._inner.saveState();
            this._outerKeyedState = this._outer.saveState();
          }
          wipe_1.wipe(pad);
        }
        HMAC2.prototype.reset = function() {
          if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
            throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
          }
          this._inner.restoreState(this._innerKeyedState);
          this._outer.restoreState(this._outerKeyedState);
          this._finished = false;
          return this;
        };
        HMAC2.prototype.clean = function() {
          if (hash_1.isSerializableHash(this._inner)) {
            this._inner.cleanSavedState(this._innerKeyedState);
          }
          if (hash_1.isSerializableHash(this._outer)) {
            this._outer.cleanSavedState(this._outerKeyedState);
          }
          this._inner.clean();
          this._outer.clean();
        };
        HMAC2.prototype.update = function(data) {
          this._inner.update(data);
          return this;
        };
        HMAC2.prototype.finish = function(out) {
          if (this._finished) {
            this._outer.finish(out);
            return this;
          }
          this._inner.finish(out);
          this._outer.update(out.subarray(0, this.digestLength)).finish(out);
          this._finished = true;
          return this;
        };
        HMAC2.prototype.digest = function() {
          var out = new Uint8Array(this.digestLength);
          this.finish(out);
          return out;
        };
        HMAC2.prototype.saveState = function() {
          if (!hash_1.isSerializableHash(this._inner)) {
            throw new Error("hmac: can't saveState() because hash doesn't implement it");
          }
          return this._inner.saveState();
        };
        HMAC2.prototype.restoreState = function(savedState) {
          if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
            throw new Error("hmac: can't restoreState() because hash doesn't implement it");
          }
          this._inner.restoreState(savedState);
          this._outer.restoreState(this._outerKeyedState);
          this._finished = false;
          return this;
        };
        HMAC2.prototype.cleanSavedState = function(savedState) {
          if (!hash_1.isSerializableHash(this._inner)) {
            throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
          }
          this._inner.cleanSavedState(savedState);
        };
        return HMAC2;
      }()
    );
    exports.HMAC = HMAC;
    function hmac(hash, key, data) {
      var h7 = new HMAC(hash, key);
      h7.update(data);
      var digest2 = h7.digest();
      h7.clean();
      return digest2;
    }
    exports.hmac = hmac;
    exports.equal = constant_time_1.equal;
  }
});

// node_modules/@stablelib/hkdf/lib/hkdf.js
var require_hkdf = __commonJS({
  "node_modules/@stablelib/hkdf/lib/hkdf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hmac_1 = require_hmac();
    var wipe_1 = require_wipe();
    var HKDF = (
      /** @class */
      function() {
        function HKDF2(hash, key, salt, info) {
          if (salt === void 0) {
            salt = new Uint8Array(0);
          }
          this._counter = new Uint8Array(1);
          this._hash = hash;
          this._info = info;
          var okm = hmac_1.hmac(this._hash, salt, key);
          this._hmac = new hmac_1.HMAC(hash, okm);
          this._buffer = new Uint8Array(this._hmac.digestLength);
          this._bufpos = this._buffer.length;
        }
        HKDF2.prototype._fillBuffer = function() {
          this._counter[0]++;
          var ctr = this._counter[0];
          if (ctr === 0) {
            throw new Error("hkdf: cannot expand more");
          }
          this._hmac.reset();
          if (ctr > 1) {
            this._hmac.update(this._buffer);
          }
          if (this._info) {
            this._hmac.update(this._info);
          }
          this._hmac.update(this._counter);
          this._hmac.finish(this._buffer);
          this._bufpos = 0;
        };
        HKDF2.prototype.expand = function(length2) {
          var out = new Uint8Array(length2);
          for (var i7 = 0; i7 < out.length; i7++) {
            if (this._bufpos === this._buffer.length) {
              this._fillBuffer();
            }
            out[i7] = this._buffer[this._bufpos++];
          }
          return out;
        };
        HKDF2.prototype.clean = function() {
          this._hmac.clean();
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._counter);
          this._bufpos = 0;
        };
        return HKDF2;
      }()
    );
    exports.HKDF = HKDF;
  }
});

// node_modules/@stablelib/sha256/lib/sha256.js
var require_sha256 = __commonJS({
  "node_modules/@stablelib/sha256/lib/sha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.DIGEST_LENGTH = 32;
    exports.BLOCK_SIZE = 64;
    var SHA256 = (
      /** @class */
      function() {
        function SHA2562() {
          this.digestLength = exports.DIGEST_LENGTH;
          this.blockSize = exports.BLOCK_SIZE;
          this._state = new Int32Array(8);
          this._temp = new Int32Array(64);
          this._buffer = new Uint8Array(128);
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          this.reset();
        }
        SHA2562.prototype._initState = function() {
          this._state[0] = 1779033703;
          this._state[1] = 3144134277;
          this._state[2] = 1013904242;
          this._state[3] = 2773480762;
          this._state[4] = 1359893119;
          this._state[5] = 2600822924;
          this._state[6] = 528734635;
          this._state[7] = 1541459225;
        };
        SHA2562.prototype.reset = function() {
          this._initState();
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          return this;
        };
        SHA2562.prototype.clean = function() {
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._temp);
          this.reset();
        };
        SHA2562.prototype.update = function(data, dataLength) {
          if (dataLength === void 0) {
            dataLength = data.length;
          }
          if (this._finished) {
            throw new Error("SHA256: can't update because hash was finished.");
          }
          var dataPos = 0;
          this._bytesHashed += dataLength;
          if (this._bufferLength > 0) {
            while (this._bufferLength < this.blockSize && dataLength > 0) {
              this._buffer[this._bufferLength++] = data[dataPos++];
              dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
              hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
              this._bufferLength = 0;
            }
          }
          if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
            dataLength %= this.blockSize;
          }
          while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          return this;
        };
        SHA2562.prototype.finish = function(out) {
          if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = bytesHashed / 536870912 | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = bytesHashed % 64 < 56 ? 64 : 128;
            this._buffer[left] = 128;
            for (var i7 = left + 1; i7 < padLength - 8; i7++) {
              this._buffer[i7] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
            this._finished = true;
          }
          for (var i7 = 0; i7 < this.digestLength / 4; i7++) {
            binary_1.writeUint32BE(this._state[i7], out, i7 * 4);
          }
          return this;
        };
        SHA2562.prototype.digest = function() {
          var out = new Uint8Array(this.digestLength);
          this.finish(out);
          return out;
        };
        SHA2562.prototype.saveState = function() {
          if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
          }
          return {
            state: new Int32Array(this._state),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          };
        };
        SHA2562.prototype.restoreState = function(savedState) {
          this._state.set(savedState.state);
          this._bufferLength = savedState.bufferLength;
          if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
          }
          this._bytesHashed = savedState.bytesHashed;
          this._finished = false;
          return this;
        };
        SHA2562.prototype.cleanSavedState = function(savedState) {
          wipe_1.wipe(savedState.state);
          if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
          }
          savedState.bufferLength = 0;
          savedState.bytesHashed = 0;
        };
        return SHA2562;
      }()
    );
    exports.SHA256 = SHA256;
    var K5 = new Int32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    function hashBlocks(w7, v6, p5, pos, len) {
      while (len >= 64) {
        var a6 = v6[0];
        var b5 = v6[1];
        var c8 = v6[2];
        var d5 = v6[3];
        var e4 = v6[4];
        var f6 = v6[5];
        var g5 = v6[6];
        var h7 = v6[7];
        for (var i7 = 0; i7 < 16; i7++) {
          var j6 = pos + i7 * 4;
          w7[i7] = binary_1.readUint32BE(p5, j6);
        }
        for (var i7 = 16; i7 < 64; i7++) {
          var u5 = w7[i7 - 2];
          var t1 = (u5 >>> 17 | u5 << 32 - 17) ^ (u5 >>> 19 | u5 << 32 - 19) ^ u5 >>> 10;
          u5 = w7[i7 - 15];
          var t22 = (u5 >>> 7 | u5 << 32 - 7) ^ (u5 >>> 18 | u5 << 32 - 18) ^ u5 >>> 3;
          w7[i7] = (t1 + w7[i7 - 7] | 0) + (t22 + w7[i7 - 16] | 0);
        }
        for (var i7 = 0; i7 < 64; i7++) {
          var t1 = (((e4 >>> 6 | e4 << 32 - 6) ^ (e4 >>> 11 | e4 << 32 - 11) ^ (e4 >>> 25 | e4 << 32 - 25)) + (e4 & f6 ^ ~e4 & g5) | 0) + (h7 + (K5[i7] + w7[i7] | 0) | 0) | 0;
          var t22 = ((a6 >>> 2 | a6 << 32 - 2) ^ (a6 >>> 13 | a6 << 32 - 13) ^ (a6 >>> 22 | a6 << 32 - 22)) + (a6 & b5 ^ a6 & c8 ^ b5 & c8) | 0;
          h7 = g5;
          g5 = f6;
          f6 = e4;
          e4 = d5 + t1 | 0;
          d5 = c8;
          c8 = b5;
          b5 = a6;
          a6 = t1 + t22 | 0;
        }
        v6[0] += a6;
        v6[1] += b5;
        v6[2] += c8;
        v6[3] += d5;
        v6[4] += e4;
        v6[5] += f6;
        v6[6] += g5;
        v6[7] += h7;
        pos += 64;
        len -= 64;
      }
      return pos;
    }
    function hash(data) {
      var h7 = new SHA256();
      h7.update(data);
      var digest2 = h7.digest();
      h7.clean();
      return digest2;
    }
    exports.hash = hash;
  }
});

// node_modules/@stablelib/x25519/lib/x25519.js
var require_x25519 = __commonJS({
  "node_modules/@stablelib/x25519/lib/x25519.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sharedKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.scalarMultBase = exports.scalarMult = exports.SHARED_KEY_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = void 0;
    var random_1 = require_random();
    var wipe_1 = require_wipe();
    exports.PUBLIC_KEY_LENGTH = 32;
    exports.SECRET_KEY_LENGTH = 32;
    exports.SHARED_KEY_LENGTH = 32;
    function gf2(init) {
      const r5 = new Float64Array(16);
      if (init) {
        for (let i7 = 0; i7 < init.length; i7++) {
          r5[i7] = init[i7];
        }
      }
      return r5;
    }
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var _121665 = gf2([56129, 1]);
    function car25519(o6) {
      let c8 = 1;
      for (let i7 = 0; i7 < 16; i7++) {
        let v6 = o6[i7] + c8 + 65535;
        c8 = Math.floor(v6 / 65536);
        o6[i7] = v6 - c8 * 65536;
      }
      o6[0] += c8 - 1 + 37 * (c8 - 1);
    }
    function sel25519(p5, q4, b5) {
      const c8 = ~(b5 - 1);
      for (let i7 = 0; i7 < 16; i7++) {
        const t3 = c8 & (p5[i7] ^ q4[i7]);
        p5[i7] ^= t3;
        q4[i7] ^= t3;
      }
    }
    function pack25519(o6, n6) {
      const m4 = gf2();
      const t3 = gf2();
      for (let i7 = 0; i7 < 16; i7++) {
        t3[i7] = n6[i7];
      }
      car25519(t3);
      car25519(t3);
      car25519(t3);
      for (let j6 = 0; j6 < 2; j6++) {
        m4[0] = t3[0] - 65517;
        for (let i7 = 1; i7 < 15; i7++) {
          m4[i7] = t3[i7] - 65535 - (m4[i7 - 1] >> 16 & 1);
          m4[i7 - 1] &= 65535;
        }
        m4[15] = t3[15] - 32767 - (m4[14] >> 16 & 1);
        const b5 = m4[15] >> 16 & 1;
        m4[14] &= 65535;
        sel25519(t3, m4, 1 - b5);
      }
      for (let i7 = 0; i7 < 16; i7++) {
        o6[2 * i7] = t3[i7] & 255;
        o6[2 * i7 + 1] = t3[i7] >> 8;
      }
    }
    function unpack25519(o6, n6) {
      for (let i7 = 0; i7 < 16; i7++) {
        o6[i7] = n6[2 * i7] + (n6[2 * i7 + 1] << 8);
      }
      o6[15] &= 32767;
    }
    function add(o6, a6, b5) {
      for (let i7 = 0; i7 < 16; i7++) {
        o6[i7] = a6[i7] + b5[i7];
      }
    }
    function sub(o6, a6, b5) {
      for (let i7 = 0; i7 < 16; i7++) {
        o6[i7] = a6[i7] - b5[i7];
      }
    }
    function mul(o6, a6, b5) {
      let v6, c8, t02 = 0, t1 = 0, t22 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t222 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b02 = b5[0], b1 = b5[1], b22 = b5[2], b32 = b5[3], b42 = b5[4], b52 = b5[5], b6 = b5[6], b7 = b5[7], b8 = b5[8], b9 = b5[9], b10 = b5[10], b11 = b5[11], b12 = b5[12], b13 = b5[13], b14 = b5[14], b15 = b5[15];
      v6 = a6[0];
      t02 += v6 * b02;
      t1 += v6 * b1;
      t22 += v6 * b22;
      t3 += v6 * b32;
      t4 += v6 * b42;
      t5 += v6 * b52;
      t6 += v6 * b6;
      t7 += v6 * b7;
      t8 += v6 * b8;
      t9 += v6 * b9;
      t10 += v6 * b10;
      t11 += v6 * b11;
      t12 += v6 * b12;
      t13 += v6 * b13;
      t14 += v6 * b14;
      t15 += v6 * b15;
      v6 = a6[1];
      t1 += v6 * b02;
      t22 += v6 * b1;
      t3 += v6 * b22;
      t4 += v6 * b32;
      t5 += v6 * b42;
      t6 += v6 * b52;
      t7 += v6 * b6;
      t8 += v6 * b7;
      t9 += v6 * b8;
      t10 += v6 * b9;
      t11 += v6 * b10;
      t12 += v6 * b11;
      t13 += v6 * b12;
      t14 += v6 * b13;
      t15 += v6 * b14;
      t16 += v6 * b15;
      v6 = a6[2];
      t22 += v6 * b02;
      t3 += v6 * b1;
      t4 += v6 * b22;
      t5 += v6 * b32;
      t6 += v6 * b42;
      t7 += v6 * b52;
      t8 += v6 * b6;
      t9 += v6 * b7;
      t10 += v6 * b8;
      t11 += v6 * b9;
      t12 += v6 * b10;
      t13 += v6 * b11;
      t14 += v6 * b12;
      t15 += v6 * b13;
      t16 += v6 * b14;
      t17 += v6 * b15;
      v6 = a6[3];
      t3 += v6 * b02;
      t4 += v6 * b1;
      t5 += v6 * b22;
      t6 += v6 * b32;
      t7 += v6 * b42;
      t8 += v6 * b52;
      t9 += v6 * b6;
      t10 += v6 * b7;
      t11 += v6 * b8;
      t12 += v6 * b9;
      t13 += v6 * b10;
      t14 += v6 * b11;
      t15 += v6 * b12;
      t16 += v6 * b13;
      t17 += v6 * b14;
      t18 += v6 * b15;
      v6 = a6[4];
      t4 += v6 * b02;
      t5 += v6 * b1;
      t6 += v6 * b22;
      t7 += v6 * b32;
      t8 += v6 * b42;
      t9 += v6 * b52;
      t10 += v6 * b6;
      t11 += v6 * b7;
      t12 += v6 * b8;
      t13 += v6 * b9;
      t14 += v6 * b10;
      t15 += v6 * b11;
      t16 += v6 * b12;
      t17 += v6 * b13;
      t18 += v6 * b14;
      t19 += v6 * b15;
      v6 = a6[5];
      t5 += v6 * b02;
      t6 += v6 * b1;
      t7 += v6 * b22;
      t8 += v6 * b32;
      t9 += v6 * b42;
      t10 += v6 * b52;
      t11 += v6 * b6;
      t12 += v6 * b7;
      t13 += v6 * b8;
      t14 += v6 * b9;
      t15 += v6 * b10;
      t16 += v6 * b11;
      t17 += v6 * b12;
      t18 += v6 * b13;
      t19 += v6 * b14;
      t20 += v6 * b15;
      v6 = a6[6];
      t6 += v6 * b02;
      t7 += v6 * b1;
      t8 += v6 * b22;
      t9 += v6 * b32;
      t10 += v6 * b42;
      t11 += v6 * b52;
      t12 += v6 * b6;
      t13 += v6 * b7;
      t14 += v6 * b8;
      t15 += v6 * b9;
      t16 += v6 * b10;
      t17 += v6 * b11;
      t18 += v6 * b12;
      t19 += v6 * b13;
      t20 += v6 * b14;
      t21 += v6 * b15;
      v6 = a6[7];
      t7 += v6 * b02;
      t8 += v6 * b1;
      t9 += v6 * b22;
      t10 += v6 * b32;
      t11 += v6 * b42;
      t12 += v6 * b52;
      t13 += v6 * b6;
      t14 += v6 * b7;
      t15 += v6 * b8;
      t16 += v6 * b9;
      t17 += v6 * b10;
      t18 += v6 * b11;
      t19 += v6 * b12;
      t20 += v6 * b13;
      t21 += v6 * b14;
      t222 += v6 * b15;
      v6 = a6[8];
      t8 += v6 * b02;
      t9 += v6 * b1;
      t10 += v6 * b22;
      t11 += v6 * b32;
      t12 += v6 * b42;
      t13 += v6 * b52;
      t14 += v6 * b6;
      t15 += v6 * b7;
      t16 += v6 * b8;
      t17 += v6 * b9;
      t18 += v6 * b10;
      t19 += v6 * b11;
      t20 += v6 * b12;
      t21 += v6 * b13;
      t222 += v6 * b14;
      t23 += v6 * b15;
      v6 = a6[9];
      t9 += v6 * b02;
      t10 += v6 * b1;
      t11 += v6 * b22;
      t12 += v6 * b32;
      t13 += v6 * b42;
      t14 += v6 * b52;
      t15 += v6 * b6;
      t16 += v6 * b7;
      t17 += v6 * b8;
      t18 += v6 * b9;
      t19 += v6 * b10;
      t20 += v6 * b11;
      t21 += v6 * b12;
      t222 += v6 * b13;
      t23 += v6 * b14;
      t24 += v6 * b15;
      v6 = a6[10];
      t10 += v6 * b02;
      t11 += v6 * b1;
      t12 += v6 * b22;
      t13 += v6 * b32;
      t14 += v6 * b42;
      t15 += v6 * b52;
      t16 += v6 * b6;
      t17 += v6 * b7;
      t18 += v6 * b8;
      t19 += v6 * b9;
      t20 += v6 * b10;
      t21 += v6 * b11;
      t222 += v6 * b12;
      t23 += v6 * b13;
      t24 += v6 * b14;
      t25 += v6 * b15;
      v6 = a6[11];
      t11 += v6 * b02;
      t12 += v6 * b1;
      t13 += v6 * b22;
      t14 += v6 * b32;
      t15 += v6 * b42;
      t16 += v6 * b52;
      t17 += v6 * b6;
      t18 += v6 * b7;
      t19 += v6 * b8;
      t20 += v6 * b9;
      t21 += v6 * b10;
      t222 += v6 * b11;
      t23 += v6 * b12;
      t24 += v6 * b13;
      t25 += v6 * b14;
      t26 += v6 * b15;
      v6 = a6[12];
      t12 += v6 * b02;
      t13 += v6 * b1;
      t14 += v6 * b22;
      t15 += v6 * b32;
      t16 += v6 * b42;
      t17 += v6 * b52;
      t18 += v6 * b6;
      t19 += v6 * b7;
      t20 += v6 * b8;
      t21 += v6 * b9;
      t222 += v6 * b10;
      t23 += v6 * b11;
      t24 += v6 * b12;
      t25 += v6 * b13;
      t26 += v6 * b14;
      t27 += v6 * b15;
      v6 = a6[13];
      t13 += v6 * b02;
      t14 += v6 * b1;
      t15 += v6 * b22;
      t16 += v6 * b32;
      t17 += v6 * b42;
      t18 += v6 * b52;
      t19 += v6 * b6;
      t20 += v6 * b7;
      t21 += v6 * b8;
      t222 += v6 * b9;
      t23 += v6 * b10;
      t24 += v6 * b11;
      t25 += v6 * b12;
      t26 += v6 * b13;
      t27 += v6 * b14;
      t28 += v6 * b15;
      v6 = a6[14];
      t14 += v6 * b02;
      t15 += v6 * b1;
      t16 += v6 * b22;
      t17 += v6 * b32;
      t18 += v6 * b42;
      t19 += v6 * b52;
      t20 += v6 * b6;
      t21 += v6 * b7;
      t222 += v6 * b8;
      t23 += v6 * b9;
      t24 += v6 * b10;
      t25 += v6 * b11;
      t26 += v6 * b12;
      t27 += v6 * b13;
      t28 += v6 * b14;
      t29 += v6 * b15;
      v6 = a6[15];
      t15 += v6 * b02;
      t16 += v6 * b1;
      t17 += v6 * b22;
      t18 += v6 * b32;
      t19 += v6 * b42;
      t20 += v6 * b52;
      t21 += v6 * b6;
      t222 += v6 * b7;
      t23 += v6 * b8;
      t24 += v6 * b9;
      t25 += v6 * b10;
      t26 += v6 * b11;
      t27 += v6 * b12;
      t28 += v6 * b13;
      t29 += v6 * b14;
      t30 += v6 * b15;
      t02 += 38 * t16;
      t1 += 38 * t17;
      t22 += 38 * t18;
      t3 += 38 * t19;
      t4 += 38 * t20;
      t5 += 38 * t21;
      t6 += 38 * t222;
      t7 += 38 * t23;
      t8 += 38 * t24;
      t9 += 38 * t25;
      t10 += 38 * t26;
      t11 += 38 * t27;
      t12 += 38 * t28;
      t13 += 38 * t29;
      t14 += 38 * t30;
      c8 = 1;
      v6 = t02 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t02 = v6 - c8 * 65536;
      v6 = t1 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t1 = v6 - c8 * 65536;
      v6 = t22 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t22 = v6 - c8 * 65536;
      v6 = t3 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t3 = v6 - c8 * 65536;
      v6 = t4 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t4 = v6 - c8 * 65536;
      v6 = t5 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t5 = v6 - c8 * 65536;
      v6 = t6 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t6 = v6 - c8 * 65536;
      v6 = t7 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t7 = v6 - c8 * 65536;
      v6 = t8 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t8 = v6 - c8 * 65536;
      v6 = t9 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t9 = v6 - c8 * 65536;
      v6 = t10 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t10 = v6 - c8 * 65536;
      v6 = t11 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t11 = v6 - c8 * 65536;
      v6 = t12 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t12 = v6 - c8 * 65536;
      v6 = t13 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t13 = v6 - c8 * 65536;
      v6 = t14 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t14 = v6 - c8 * 65536;
      v6 = t15 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t15 = v6 - c8 * 65536;
      t02 += c8 - 1 + 37 * (c8 - 1);
      c8 = 1;
      v6 = t02 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t02 = v6 - c8 * 65536;
      v6 = t1 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t1 = v6 - c8 * 65536;
      v6 = t22 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t22 = v6 - c8 * 65536;
      v6 = t3 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t3 = v6 - c8 * 65536;
      v6 = t4 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t4 = v6 - c8 * 65536;
      v6 = t5 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t5 = v6 - c8 * 65536;
      v6 = t6 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t6 = v6 - c8 * 65536;
      v6 = t7 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t7 = v6 - c8 * 65536;
      v6 = t8 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t8 = v6 - c8 * 65536;
      v6 = t9 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t9 = v6 - c8 * 65536;
      v6 = t10 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t10 = v6 - c8 * 65536;
      v6 = t11 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t11 = v6 - c8 * 65536;
      v6 = t12 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t12 = v6 - c8 * 65536;
      v6 = t13 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t13 = v6 - c8 * 65536;
      v6 = t14 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t14 = v6 - c8 * 65536;
      v6 = t15 + c8 + 65535;
      c8 = Math.floor(v6 / 65536);
      t15 = v6 - c8 * 65536;
      t02 += c8 - 1 + 37 * (c8 - 1);
      o6[0] = t02;
      o6[1] = t1;
      o6[2] = t22;
      o6[3] = t3;
      o6[4] = t4;
      o6[5] = t5;
      o6[6] = t6;
      o6[7] = t7;
      o6[8] = t8;
      o6[9] = t9;
      o6[10] = t10;
      o6[11] = t11;
      o6[12] = t12;
      o6[13] = t13;
      o6[14] = t14;
      o6[15] = t15;
    }
    function square(o6, a6) {
      mul(o6, a6, a6);
    }
    function inv25519(o6, inp) {
      const c8 = gf2();
      for (let i7 = 0; i7 < 16; i7++) {
        c8[i7] = inp[i7];
      }
      for (let i7 = 253; i7 >= 0; i7--) {
        square(c8, c8);
        if (i7 !== 2 && i7 !== 4) {
          mul(c8, c8, inp);
        }
      }
      for (let i7 = 0; i7 < 16; i7++) {
        o6[i7] = c8[i7];
      }
    }
    function scalarMult(n6, p5) {
      const z8 = new Uint8Array(32);
      const x7 = new Float64Array(80);
      const a6 = gf2(), b5 = gf2(), c8 = gf2(), d5 = gf2(), e4 = gf2(), f6 = gf2();
      for (let i7 = 0; i7 < 31; i7++) {
        z8[i7] = n6[i7];
      }
      z8[31] = n6[31] & 127 | 64;
      z8[0] &= 248;
      unpack25519(x7, p5);
      for (let i7 = 0; i7 < 16; i7++) {
        b5[i7] = x7[i7];
      }
      a6[0] = d5[0] = 1;
      for (let i7 = 254; i7 >= 0; --i7) {
        const r5 = z8[i7 >>> 3] >>> (i7 & 7) & 1;
        sel25519(a6, b5, r5);
        sel25519(c8, d5, r5);
        add(e4, a6, c8);
        sub(a6, a6, c8);
        add(c8, b5, d5);
        sub(b5, b5, d5);
        square(d5, e4);
        square(f6, a6);
        mul(a6, c8, a6);
        mul(c8, b5, e4);
        add(e4, a6, c8);
        sub(a6, a6, c8);
        square(b5, a6);
        sub(c8, d5, f6);
        mul(a6, c8, _121665);
        add(a6, a6, d5);
        mul(c8, c8, a6);
        mul(a6, d5, f6);
        mul(d5, b5, x7);
        square(b5, e4);
        sel25519(a6, b5, r5);
        sel25519(c8, d5, r5);
      }
      for (let i7 = 0; i7 < 16; i7++) {
        x7[i7 + 16] = a6[i7];
        x7[i7 + 32] = c8[i7];
        x7[i7 + 48] = b5[i7];
        x7[i7 + 64] = d5[i7];
      }
      const x32 = x7.subarray(32);
      const x16 = x7.subarray(16);
      inv25519(x32, x32);
      mul(x16, x16, x32);
      const q4 = new Uint8Array(32);
      pack25519(q4, x16);
      return q4;
    }
    exports.scalarMult = scalarMult;
    function scalarMultBase(n6) {
      return scalarMult(n6, _9);
    }
    exports.scalarMultBase = scalarMultBase;
    function generateKeyPairFromSeed2(seed) {
      if (seed.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error(`x25519: seed must be ${exports.SECRET_KEY_LENGTH} bytes`);
      }
      const secretKey = new Uint8Array(seed);
      const publicKey = scalarMultBase(secretKey);
      return {
        publicKey,
        secretKey
      };
    }
    exports.generateKeyPairFromSeed = generateKeyPairFromSeed2;
    function generateKeyPair3(prng) {
      const seed = (0, random_1.randomBytes)(32, prng);
      const result = generateKeyPairFromSeed2(seed);
      (0, wipe_1.wipe)(seed);
      return result;
    }
    exports.generateKeyPair = generateKeyPair3;
    function sharedKey2(mySecretKey, theirPublicKey, rejectZero = false) {
      if (mySecretKey.length !== exports.PUBLIC_KEY_LENGTH) {
        throw new Error("X25519: incorrect secret key length");
      }
      if (theirPublicKey.length !== exports.PUBLIC_KEY_LENGTH) {
        throw new Error("X25519: incorrect public key length");
      }
      const result = scalarMult(mySecretKey, theirPublicKey);
      if (rejectZero) {
        let zeros = 0;
        for (let i7 = 0; i7 < result.length; i7++) {
          zeros |= result[i7];
        }
        if (zeros === 0) {
          throw new Error("X25519: invalid shared key");
        }
      }
      return result;
    }
    exports.sharedKey = sharedKey2;
  }
});

// node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js
var tslib_es6_exports2 = {};
__export(tslib_es6_exports2, {
  __assign: () => __assign2,
  __asyncDelegator: () => __asyncDelegator2,
  __asyncGenerator: () => __asyncGenerator2,
  __asyncValues: () => __asyncValues2,
  __await: () => __await2,
  __awaiter: () => __awaiter2,
  __classPrivateFieldGet: () => __classPrivateFieldGet2,
  __classPrivateFieldSet: () => __classPrivateFieldSet2,
  __createBinding: () => __createBinding2,
  __decorate: () => __decorate2,
  __exportStar: () => __exportStar2,
  __extends: () => __extends2,
  __generator: () => __generator2,
  __importDefault: () => __importDefault2,
  __importStar: () => __importStar2,
  __makeTemplateObject: () => __makeTemplateObject2,
  __metadata: () => __metadata2,
  __param: () => __param2,
  __read: () => __read2,
  __rest: () => __rest2,
  __spread: () => __spread2,
  __spreadArrays: () => __spreadArrays3,
  __values: () => __values2
});
function __extends2(d5, b5) {
  extendStatics2(d5, b5);
  function __() {
    this.constructor = d5;
  }
  d5.prototype = b5 === null ? Object.create(b5) : (__.prototype = b5.prototype, new __());
}
function __rest2(s5, e4) {
  var t3 = {};
  for (var p5 in s5) if (Object.prototype.hasOwnProperty.call(s5, p5) && e4.indexOf(p5) < 0)
    t3[p5] = s5[p5];
  if (s5 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i7 = 0, p5 = Object.getOwnPropertySymbols(s5); i7 < p5.length; i7++) {
      if (e4.indexOf(p5[i7]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p5[i7]))
        t3[p5[i7]] = s5[p5[i7]];
    }
  return t3;
}
function __decorate2(decorators, target, key, desc) {
  var c8 = arguments.length, r5 = c8 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d5 = decorators[i7]) r5 = (c8 < 3 ? d5(r5) : c8 > 3 ? d5(target, key, r5) : d5(target, key)) || r5;
  return c8 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
}
function __param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata2(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter2(thisArg, _arguments, P4, generator) {
  function adopt(value) {
    return value instanceof P4 ? value : new P4(function(resolve) {
      resolve(value);
    });
  }
  return new (P4 || (P4 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _6 = { label: 0, sent: function() {
    if (t3[0] & 1) throw t3[1];
    return t3[1];
  }, trys: [], ops: [] }, f6, y8, t3, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n6) {
    return function(v6) {
      return step([n6, v6]);
    };
  }
  function step(op) {
    if (f6) throw new TypeError("Generator is already executing.");
    while (_6) try {
      if (f6 = 1, y8 && (t3 = op[0] & 2 ? y8["return"] : op[0] ? y8["throw"] || ((t3 = y8["return"]) && t3.call(y8), 0) : y8.next) && !(t3 = t3.call(y8, op[1])).done) return t3;
      if (y8 = 0, t3) op = [op[0] & 2, t3.value];
      switch (op[0]) {
        case 0:
        case 1:
          t3 = op;
          break;
        case 4:
          _6.label++;
          return { value: op[1], done: false };
        case 5:
          _6.label++;
          y8 = op[1];
          op = [0];
          continue;
        case 7:
          op = _6.ops.pop();
          _6.trys.pop();
          continue;
        default:
          if (!(t3 = _6.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _6 = 0;
            continue;
          }
          if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
            _6.label = op[1];
            break;
          }
          if (op[0] === 6 && _6.label < t3[1]) {
            _6.label = t3[1];
            t3 = op;
            break;
          }
          if (t3 && _6.label < t3[2]) {
            _6.label = t3[2];
            _6.ops.push(op);
            break;
          }
          if (t3[2]) _6.ops.pop();
          _6.trys.pop();
          continue;
      }
      op = body.call(thisArg, _6);
    } catch (e4) {
      op = [6, e4];
      y8 = 0;
    } finally {
      f6 = t3 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding2(o6, m4, k5, k22) {
  if (k22 === void 0) k22 = k5;
  o6[k22] = m4[k5];
}
function __exportStar2(m4, exports) {
  for (var p5 in m4) if (p5 !== "default" && !exports.hasOwnProperty(p5)) exports[p5] = m4[p5];
}
function __values2(o6) {
  var s5 = typeof Symbol === "function" && Symbol.iterator, m4 = s5 && o6[s5], i7 = 0;
  if (m4) return m4.call(o6);
  if (o6 && typeof o6.length === "number") return {
    next: function() {
      if (o6 && i7 >= o6.length) o6 = void 0;
      return { value: o6 && o6[i7++], done: !o6 };
    }
  };
  throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(o6, n6) {
  var m4 = typeof Symbol === "function" && o6[Symbol.iterator];
  if (!m4) return o6;
  var i7 = m4.call(o6), r5, ar3 = [], e4;
  try {
    while ((n6 === void 0 || n6-- > 0) && !(r5 = i7.next()).done) ar3.push(r5.value);
  } catch (error) {
    e4 = { error };
  } finally {
    try {
      if (r5 && !r5.done && (m4 = i7["return"])) m4.call(i7);
    } finally {
      if (e4) throw e4.error;
    }
  }
  return ar3;
}
function __spread2() {
  for (var ar3 = [], i7 = 0; i7 < arguments.length; i7++)
    ar3 = ar3.concat(__read2(arguments[i7]));
  return ar3;
}
function __spreadArrays3() {
  for (var s5 = 0, i7 = 0, il = arguments.length; i7 < il; i7++) s5 += arguments[i7].length;
  for (var r5 = Array(s5), k5 = 0, i7 = 0; i7 < il; i7++)
    for (var a6 = arguments[i7], j6 = 0, jl = a6.length; j6 < jl; j6++, k5++)
      r5[k5] = a6[j6];
  return r5;
}
function __await2(v6) {
  return this instanceof __await2 ? (this.v = v6, this) : new __await2(v6);
}
function __asyncGenerator2(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g5 = generator.apply(thisArg, _arguments || []), i7, q4 = [];
  return i7 = {}, verb("next"), verb("throw"), verb("return"), i7[Symbol.asyncIterator] = function() {
    return this;
  }, i7;
  function verb(n6) {
    if (g5[n6]) i7[n6] = function(v6) {
      return new Promise(function(a6, b5) {
        q4.push([n6, v6, a6, b5]) > 1 || resume(n6, v6);
      });
    };
  }
  function resume(n6, v6) {
    try {
      step(g5[n6](v6));
    } catch (e4) {
      settle(q4[0][3], e4);
    }
  }
  function step(r5) {
    r5.value instanceof __await2 ? Promise.resolve(r5.value.v).then(fulfill, reject) : settle(q4[0][2], r5);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f6, v6) {
    if (f6(v6), q4.shift(), q4.length) resume(q4[0][0], q4[0][1]);
  }
}
function __asyncDelegator2(o6) {
  var i7, p5;
  return i7 = {}, verb("next"), verb("throw", function(e4) {
    throw e4;
  }), verb("return"), i7[Symbol.iterator] = function() {
    return this;
  }, i7;
  function verb(n6, f6) {
    i7[n6] = o6[n6] ? function(v6) {
      return (p5 = !p5) ? { value: __await2(o6[n6](v6)), done: n6 === "return" } : f6 ? f6(v6) : v6;
    } : f6;
  }
}
function __asyncValues2(o6) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m4 = o6[Symbol.asyncIterator], i7;
  return m4 ? m4.call(o6) : (o6 = typeof __values2 === "function" ? __values2(o6) : o6[Symbol.iterator](), i7 = {}, verb("next"), verb("throw"), verb("return"), i7[Symbol.asyncIterator] = function() {
    return this;
  }, i7);
  function verb(n6) {
    i7[n6] = o6[n6] && function(v6) {
      return new Promise(function(resolve, reject) {
        v6 = o6[n6](v6), settle(resolve, reject, v6.done, v6.value);
      });
    };
  }
  function settle(resolve, reject, d5, v6) {
    Promise.resolve(v6).then(function(v7) {
      resolve({ value: v7, done: d5 });
    }, reject);
  }
}
function __makeTemplateObject2(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar2(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k5 in mod) if (Object.hasOwnProperty.call(mod, k5)) result[k5] = mod[k5];
  }
  result.default = mod;
  return result;
}
function __importDefault2(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet2(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet2(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics2, __assign2;
var init_tslib_es62 = __esm({
  "node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js"() {
    extendStatics2 = function(d5, b5) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b6) {
        d6.__proto__ = b6;
      } || function(d6, b6) {
        for (var p5 in b6) if (b6.hasOwnProperty(p5)) d6[p5] = b6[p5];
      };
      return extendStatics2(d5, b5);
    };
    __assign2 = function() {
      __assign2 = Object.assign || function __assign3(t3) {
        for (var s5, i7 = 1, n6 = arguments.length; i7 < n6; i7++) {
          s5 = arguments[i7];
          for (var p5 in s5) if (Object.prototype.hasOwnProperty.call(s5, p5)) t3[p5] = s5[p5];
        }
        return t3;
      };
      return __assign2.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/environment/dist/cjs/crypto.js
var require_crypto2 = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
    function getBrowerCrypto() {
      return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
    }
    exports.getBrowerCrypto = getBrowerCrypto;
    function getSubtleCrypto() {
      const browserCrypto = getBrowerCrypto();
      return browserCrypto.subtle || browserCrypto.webkitSubtle;
    }
    exports.getSubtleCrypto = getSubtleCrypto;
    function isBrowserCryptoAvailable() {
      return !!getBrowerCrypto() && !!getSubtleCrypto();
    }
    exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  }
});

// node_modules/@walletconnect/environment/dist/cjs/env.js
var require_env = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
    function isReactNative() {
      return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
    }
    exports.isReactNative = isReactNative;
    function isNode3() {
      return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
    }
    exports.isNode = isNode3;
    function isBrowser2() {
      return !isReactNative() && !isNode3();
    }
    exports.isBrowser = isBrowser2;
  }
});

// node_modules/@walletconnect/environment/dist/cjs/index.js
var require_cjs7 = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    tslib_1.__exportStar(require_crypto2(), exports);
    tslib_1.__exportStar(require_env(), exports);
  }
});

// node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/ws/browser.js
var require_browser4 = __commonJS({
  "node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/lodash.isequal/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e4) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length2) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length2 = values.length, offset = array.length;
      while (++index < length2) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index = -1, length2 = array == null ? 0 : array.length;
      while (++index < length2) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n6, iteratee) {
      var index = -1, result = Array(n6);
      while (++index < n6) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView2 = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length2 = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length2) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length2)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length2 = array.length;
      while (length2--) {
        if (eq(array[length2][0], key)) {
          return length2;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys2, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e4) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length2) {
      length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
      return !!length2 && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e4) {
        }
        try {
          return func + "";
        } catch (e4) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys2(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = isEqual;
  }
});

// node_modules/@jnwng/walletconnect-solana/node_modules/base-x/src/index.js
var require_src = __commonJS({
  "node_modules/@jnwng/walletconnect-solana/node_modules/base-x/src/index.js"(exports, module) {
    "use strict";
    function base3(ALPHABET) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j6 = 0; j6 < BASE_MAP.length; j6++) {
        BASE_MAP[j6] = 255;
      }
      for (var i7 = 0; i7 < ALPHABET.length; i7++) {
        var x7 = ALPHABET.charAt(i7);
        var xc = x7.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x7 + " is ambiguous");
        }
        BASE_MAP[xc] = i7;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode5(source) {
        if (source instanceof Uint8Array) {
        } else if (ArrayBuffer.isView(source)) {
          source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
          source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
          throw new TypeError("Expected Uint8Array");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length2 = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i8 = 0;
          for (var it1 = size - 1; (carry !== 0 || i8 < length2) && it1 !== -1; it1--, i8++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length2 = i8;
          pbegin++;
        }
        var it22 = size - length2;
        while (it22 !== size && b58[it22] === 0) {
          it22++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it22 < size; ++it22) {
          str += ALPHABET.charAt(b58[it22]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return new Uint8Array();
        }
        var psz = 0;
        var zeroes = 0;
        var length2 = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (source[psz]) {
          var carry = BASE_MAP[source.charCodeAt(psz)];
          if (carry === 255) {
            return;
          }
          var i8 = 0;
          for (var it3 = size - 1; (carry !== 0 || i8 < length2) && it3 !== -1; it3--, i8++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length2 = i8;
          psz++;
        }
        var it4 = size - length2;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = new Uint8Array(zeroes + (size - it4));
        var j7 = zeroes;
        while (it4 !== size) {
          vch[j7++] = b256[it4++];
        }
        return vch;
      }
      function decode6(string2) {
        var buffer = decodeUnsafe(string2);
        if (buffer) {
          return buffer;
        }
        throw new Error("Non-base" + BASE + " character");
      }
      return {
        encode: encode5,
        decodeUnsafe,
        decode: decode6
      };
    }
    module.exports = base3;
  }
});

// node_modules/@jnwng/walletconnect-solana/node_modules/bs58/index.js
var require_bs58 = __commonJS({
  "node_modules/@jnwng/walletconnect-solana/node_modules/bs58/index.js"(exports, module) {
    var basex = require_src();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module.exports = basex(ALPHABET);
  }
});

// node_modules/@jnwng/walletconnect-solana/lib/esm/adapter.js
init_index_browser_esm();
var import_qrcode_modal = __toESM(require_cjs3(), 1);

// node_modules/@walletconnect/core/dist/index.es.js
var import_events7 = __toESM(require_events());

// node_modules/destr/dist/index.mjs
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

// node_modules/unstorage/dist/shared/unstorage.d569726e.mjs
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === "undefined") {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
var BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base642 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base642;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys2) {
  return normalizeKey(keys2.join(":"));
}
function normalizeBaseKey(base3) {
  base3 = normalizeKey(base3);
  return base3 ? base3 + ":" : "";
}

// node_modules/unstorage/dist/index.mjs
function defineDriver(factory) {
  return factory;
}
var DRIVER_NAME = "memory";
var memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base3 of context.mountpoints) {
      if (key.startsWith(base3)) {
        return {
          base: base3,
          relativeKey: key.slice(base3.length),
          driver: context.mounts[base3]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base3, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base3) || includeParent && base3.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base3.length > mountpoint.length ? base3.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r5) => r5.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r5) => r5.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      const mounts = getMounts(base3, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p5) => fullKey.startsWith(p5))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p5) => !p5.startsWith(mount.mountpoint))
        ];
      }
      return base3 ? allKeys.filter(
        (key) => key.startsWith(base3) && key[key.length - 1] !== "$"
      ) : allKeys.filter((key) => key[key.length - 1] !== "$");
    },
    // Utils
    async clear(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      await Promise.all(
        getMounts(base3, false).map(async (m4) => {
          if (m4.driver.clear) {
            return asyncCall(m4.driver.clear, m4.relativeBase, opts);
          }
          if (m4.driver.removeItem) {
            const keys2 = await m4.driver.getKeys(m4.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key) => m4.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base3, driver) {
      base3 = normalizeBaseKey(base3);
      if (base3 && context.mounts[base3]) {
        throw new Error(`already mounted at ${base3}`);
      }
      if (base3) {
        context.mountpoints.push(base3);
        context.mountpoints.sort((a6, b5) => b5.length - a6.length);
      }
      context.mounts[base3] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base3)).then((unwatcher) => {
          context.unwatch[base3] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base3, _dispose = true) {
      base3 = normalizeBaseKey(base3);
      if (!base3 || !context.mounts[base3]) {
        return;
      }
      if (context.watching && base3 in context.unwatch) {
        context.unwatch[base3]();
        delete context.unwatch[base3];
      }
      if (_dispose) {
        await dispose(context.mounts[base3]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base3);
      delete context.mounts[base3];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m4 = getMount(key);
      return {
        driver: m4.driver,
        base: m4.base
      };
    },
    getMounts(base3 = "", opts = {}) {
      base3 = normalizeKey(base3);
      const mounts = getMounts(base3, opts.parents);
      return mounts.map((m4) => ({
        driver: m4.driver,
        base: m4.mountpoint
      }));
    },
    // Aliases
    keys: (base3, opts = {}) => storage.getKeys(base3, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base3) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base3 + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

// node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  request.onupgradeneeded = () => request.result.createObjectStore(storeName);
  const dbp = promisifyRequest(request);
  return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
var defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}

// node_modules/@walletconnect/keyvaluestorage/node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify = (data) => JSON.stringify(data, (_6, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_6, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse3(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify3(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}

// node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
var x3 = "idb-keyval";
var z3 = (i7 = {}) => {
  const t3 = i7.base && i7.base.length > 0 ? `${i7.base}:` : "", e4 = (s5) => t3 + s5;
  let n6;
  return i7.dbName && i7.storeName && (n6 = createStore(i7.dbName, i7.storeName)), { name: x3, options: i7, async hasItem(s5) {
    return !(typeof await get(e4(s5), n6) > "u");
  }, async getItem(s5) {
    return await get(e4(s5), n6) ?? null;
  }, setItem(s5, a6) {
    return set(e4(s5), a6, n6);
  }, removeItem(s5) {
    return del(e4(s5), n6);
  }, getKeys() {
    return keys(n6);
  }, clear() {
    return clear(n6);
  } };
};
var D3 = "WALLET_CONNECT_V2_INDEXED_DB";
var E4 = "keyvaluestorage";
var _4 = class {
  constructor() {
    this.indexedDb = createStorage({ driver: z3({ dbName: D3, storeName: E4 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t3) => [t3.key, t3.value]);
  }
  async getItem(t3) {
    const e4 = await this.indexedDb.getItem(t3);
    if (e4 !== null) return e4;
  }
  async setItem(t3, e4) {
    await this.indexedDb.setItem(t3, safeJsonStringify3(e4));
  }
  async removeItem(t3) {
    await this.indexedDb.removeItem(t3);
  }
};
var l3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var c3 = { exports: {} };
(function() {
  let i7;
  function t3() {
  }
  i7 = t3, i7.prototype.getItem = function(e4) {
    return this.hasOwnProperty(e4) ? String(this[e4]) : null;
  }, i7.prototype.setItem = function(e4, n6) {
    this[e4] = String(n6);
  }, i7.prototype.removeItem = function(e4) {
    delete this[e4];
  }, i7.prototype.clear = function() {
    const e4 = this;
    Object.keys(e4).forEach(function(n6) {
      e4[n6] = void 0, delete e4[n6];
    });
  }, i7.prototype.key = function(e4) {
    return e4 = e4 || 0, Object.keys(this)[e4];
  }, i7.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l3 < "u" && l3.localStorage ? c3.exports = l3.localStorage : typeof window < "u" && window.localStorage ? c3.exports = window.localStorage : c3.exports = new t3();
})();
function k3(i7) {
  var t3;
  return [i7[0], safeJsonParse3((t3 = i7[1]) != null ? t3 : "")];
}
var K2 = class {
  constructor() {
    this.localStorage = c3.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k3);
  }
  async getItem(t3) {
    const e4 = this.localStorage.getItem(t3);
    if (e4 !== null) return safeJsonParse3(e4);
  }
  async setItem(t3, e4) {
    this.localStorage.setItem(t3, safeJsonStringify3(e4));
  }
  async removeItem(t3) {
    this.localStorage.removeItem(t3);
  }
};
var N3 = "wc_storage_version";
var y3 = 1;
var O2 = async (i7, t3, e4) => {
  const n6 = N3, s5 = await t3.getItem(n6);
  if (s5 && s5 >= y3) {
    e4(t3);
    return;
  }
  const a6 = await i7.getKeys();
  if (!a6.length) {
    e4(t3);
    return;
  }
  const m4 = [];
  for (; a6.length; ) {
    const r5 = a6.shift();
    if (!r5) continue;
    const o6 = r5.toLowerCase();
    if (o6.includes("wc@") || o6.includes("walletconnect") || o6.includes("wc_") || o6.includes("wallet_connect")) {
      const f6 = await i7.getItem(r5);
      await t3.setItem(r5, f6), m4.push(r5);
    }
  }
  await t3.setItem(n6, y3), e4(t3), j3(i7, m4);
};
var j3 = async (i7, t3) => {
  t3.length && t3.forEach(async (e4) => {
    await i7.removeItem(e4);
  });
};
var h3 = class {
  constructor() {
    this.initialized = false, this.setInitialized = (e4) => {
      this.storage = e4, this.initialized = true;
    };
    const t3 = new K2();
    this.storage = t3;
    try {
      const e4 = new _4();
      O2(t3, e4, this.setInitialized);
    } catch {
      this.initialized = true;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t3) {
    return await this.initialize(), this.storage.getItem(t3);
  }
  async setItem(t3, e4) {
    return await this.initialize(), this.storage.setItem(t3, e4);
  }
  async removeItem(t3) {
    return await this.initialize(), this.storage.removeItem(t3);
  }
  async initialize() {
    this.initialized || await new Promise((t3) => {
      const e4 = setInterval(() => {
        this.initialized && (clearInterval(e4), t3());
      }, 20);
    });
  }
};

// node_modules/@walletconnect/heartbeat/dist/index.es.js
var import_events = __toESM(require_events());
var import_time = __toESM(require_cjs4());

// node_modules/@walletconnect/events/dist/esm/events.js
var IEvents = class {
};

// node_modules/@walletconnect/heartbeat/dist/index.es.js
var n2 = class extends IEvents {
  constructor(e4) {
    super();
  }
};
var s3 = import_time.FIVE_SECONDS;
var r3 = { pulse: "heartbeat_pulse" };
var i3 = class _i2 extends n2 {
  constructor(e4) {
    super(e4), this.events = new import_events.EventEmitter(), this.interval = s3, this.interval = (e4 == null ? void 0 : e4.interval) || s3;
  }
  static async init(e4) {
    const t3 = new _i2(e4);
    return await t3.init(), t3;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e4, t3) {
    this.events.on(e4, t3);
  }
  once(e4, t3) {
    this.events.once(e4, t3);
  }
  off(e4, t3) {
    this.events.off(e4, t3);
  }
  removeListener(e4, t3) {
    this.events.removeListener(e4, t3);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), (0, import_time.toMiliseconds)(this.interval));
  }
  pulse() {
    this.events.emit(r3.pulse);
  }
};

// node_modules/@walletconnect/logger/dist/index.es.js
var import_pino = __toESM(require_browser2());
var import_pino2 = __toESM(require_browser2());

// node_modules/@walletconnect/logger/node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify2 = (data) => JSON.stringify(data, (_6, value) => typeof value === "bigint" ? value.toString() + "n" : value);
function safeJsonStringify4(value) {
  return typeof value === "string" ? value : JSONStringify2(value) || "";
}

// node_modules/@walletconnect/logger/dist/index.es.js
var c4 = { level: "info" };
var n3 = "custom_context";
var l5 = 1e3 * 1024;
var O3 = class {
  constructor(e4) {
    this.nodeValue = e4, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
var d3 = class {
  constructor(e4) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e4, this.sizeInBytes = 0;
  }
  append(e4) {
    const t3 = new O3(e4);
    if (t3.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e4} with size ${t3.size}`);
    for (; this.size + t3.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t3), this.tail = t3) : (this.head = t3, this.tail = t3), this.lengthInNodes++, this.sizeInBytes += t3.size;
  }
  shift() {
    if (!this.head) return;
    const e4 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e4.size;
  }
  toArray() {
    const e4 = [];
    let t3 = this.head;
    for (; t3 !== null; ) e4.push(t3.value), t3 = t3.next;
    return e4;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e4 = this.head;
    return { next: () => {
      if (!e4) return { done: true, value: null };
      const t3 = e4.value;
      return e4 = e4.next, { done: false, value: t3 };
    } };
  }
};
var L3 = class {
  constructor(e4, t3 = l5) {
    this.level = e4 ?? "error", this.levelValue = import_pino.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t3, this.logs = new d3(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e4, t3) {
    t3 === import_pino.levels.values.error ? console.error(e4) : t3 === import_pino.levels.values.warn ? console.warn(e4) : t3 === import_pino.levels.values.debug ? console.debug(e4) : t3 === import_pino.levels.values.trace ? console.trace(e4) : console.log(e4);
  }
  appendToLogs(e4) {
    this.logs.append(safeJsonStringify4({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e4 }));
    const t3 = typeof e4 == "string" ? JSON.parse(e4).level : e4.level;
    t3 >= this.levelValue && this.forwardToConsole(e4, t3);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new d3(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e4) {
    const t3 = this.getLogArray();
    return t3.push(safeJsonStringify4({ extraMetadata: e4 })), new Blob(t3, { type: "application/json" });
  }
};
var m3 = class {
  constructor(e4, t3 = l5) {
    this.baseChunkLogger = new L3(e4, t3);
  }
  write(e4) {
    this.baseChunkLogger.appendToLogs(e4);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e4) {
    return this.baseChunkLogger.logsToBlob(e4);
  }
  downloadLogsBlobInBrowser(e4) {
    const t3 = URL.createObjectURL(this.logsToBlob(e4)), o6 = document.createElement("a");
    o6.href = t3, o6.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o6), o6.click(), document.body.removeChild(o6), URL.revokeObjectURL(t3);
  }
};
var B2 = class {
  constructor(e4, t3 = l5) {
    this.baseChunkLogger = new L3(e4, t3);
  }
  write(e4) {
    this.baseChunkLogger.appendToLogs(e4);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e4) {
    return this.baseChunkLogger.logsToBlob(e4);
  }
};
var x4 = Object.defineProperty;
var S2 = Object.defineProperties;
var _5 = Object.getOwnPropertyDescriptors;
var p3 = Object.getOwnPropertySymbols;
var T4 = Object.prototype.hasOwnProperty;
var z4 = Object.prototype.propertyIsEnumerable;
var f3 = (r5, e4, t3) => e4 in r5 ? x4(r5, e4, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e4] = t3;
var i4 = (r5, e4) => {
  for (var t3 in e4 || (e4 = {})) T4.call(e4, t3) && f3(r5, t3, e4[t3]);
  if (p3) for (var t3 of p3(e4)) z4.call(e4, t3) && f3(r5, t3, e4[t3]);
  return r5;
};
var g3 = (r5, e4) => S2(r5, _5(e4));
function k4(r5) {
  return g3(i4({}, r5), { level: (r5 == null ? void 0 : r5.level) || c4.level });
}
function v3(r5, e4 = n3) {
  return r5[e4] || "";
}
function b2(r5, e4, t3 = n3) {
  return r5[t3] = e4, r5;
}
function y4(r5, e4 = n3) {
  let t3 = "";
  return typeof r5.bindings > "u" ? t3 = v3(r5, e4) : t3 = r5.bindings().context || "", t3;
}
function w4(r5, e4, t3 = n3) {
  const o6 = y4(r5, t3);
  return o6.trim() ? `${o6}/${e4}` : e4;
}
function E5(r5, e4, t3 = n3) {
  const o6 = w4(r5, e4, t3), a6 = r5.child({ context: o6 });
  return b2(a6, o6, t3);
}
function C3(r5) {
  var e4, t3;
  const o6 = new m3((e4 = r5.opts) == null ? void 0 : e4.level, r5.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g3(i4({}, r5.opts), { level: "trace", browser: g3(i4({}, (t3 = r5.opts) == null ? void 0 : t3.browser), { write: (a6) => o6.write(a6) }) })), chunkLoggerController: o6 };
}
function I3(r5) {
  var e4;
  const t3 = new B2((e4 = r5.opts) == null ? void 0 : e4.level, r5.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g3(i4({}, r5.opts), { level: "trace" }), t3), chunkLoggerController: t3 };
}
function A4(r5) {
  return typeof r5.loggerOverride < "u" && typeof r5.loggerOverride != "string" ? { logger: r5.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C3(r5) : I3(r5);
}

// node_modules/@walletconnect/core/node_modules/@walletconnect/types/dist/index.es.js
var import_events4 = __toESM(require_events());
var n4 = class extends IEvents {
  constructor(s5) {
    super(), this.opts = s5, this.protocol = "wc", this.version = 2;
  }
};
var h5 = class extends IEvents {
  constructor(s5, t3) {
    super(), this.core = s5, this.logger = t3, this.records = /* @__PURE__ */ new Map();
  }
};
var a4 = class {
  constructor(s5, t3) {
    this.logger = s5, this.core = t3;
  }
};
var g4 = class extends IEvents {
  constructor(s5, t3) {
    super(), this.relayer = s5, this.logger = t3;
  }
};
var u3 = class extends IEvents {
  constructor(s5) {
    super();
  }
};
var p4 = class {
  constructor(s5, t3, e4, f6) {
    this.core = s5, this.logger = t3, this.name = e4;
  }
};
var d4 = class extends IEvents {
  constructor(s5, t3) {
    super(), this.relayer = s5, this.logger = t3;
  }
};
var x5 = class extends IEvents {
  constructor(s5, t3) {
    super(), this.core = s5, this.logger = t3;
  }
};
var y5 = class {
  constructor(s5, t3, e4) {
    this.core = s5, this.logger = t3, this.store = e4;
  }
};
var v4 = class {
  constructor(s5, t3) {
    this.projectId = s5, this.logger = t3;
  }
};
var C4 = class {
  constructor(s5, t3, e4) {
    this.core = s5, this.logger = t3, this.telemetryEnabled = e4;
  }
};

// node_modules/@walletconnect/core/node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify3 = (data) => JSON.stringify(data, (_6, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse2 = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_6, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse4(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse2(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify5(value) {
  return typeof value === "string" ? value : JSONStringify3(value) || "";
}

// node_modules/@walletconnect/relay-auth/dist/esm/api.js
var ed25519 = __toESM(require_ed25519());
var import_random = __toESM(require_random());
var import_time2 = __toESM(require_cjs4());

// node_modules/@walletconnect/relay-auth/dist/esm/constants.js
var JWT_IRIDIUM_ALG = "EdDSA";
var JWT_IRIDIUM_TYP = "JWT";
var JWT_DELIMITER = ".";
var JWT_ENCODING = "base64url";
var JSON_ENCODING = "utf8";
var DATA_ENCODING = "utf8";
var DID_DELIMITER = ":";
var DID_PREFIX = "did";
var DID_METHOD = "key";
var MULTICODEC_ED25519_ENCODING = "base58btc";
var MULTICODEC_ED25519_BASE = "z";
var MULTICODEC_ED25519_HEADER = "K36";
var KEY_PAIR_SEED_LENGTH = 32;

// node_modules/uint8arrays/esm/src/alloc.js
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}

// node_modules/uint8arrays/esm/src/concat.js
function concat(arrays, length2) {
  if (!length2) {
    length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length2);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}

// node_modules/multiformats/esm/src/bases/identity.js
var identity_exports = {};
__export(identity_exports, {
  identity: () => identity
});

// node_modules/multiformats/esm/vendor/base-x.js
function base(ALPHABET, name2) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j6 = 0; j6 < BASE_MAP.length; j6++) {
    BASE_MAP[j6] = 255;
  }
  for (var i7 = 0; i7 < ALPHABET.length; i7++) {
    var x7 = ALPHABET.charAt(i7);
    var xc = x7.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x7 + " is ambiguous");
    }
    BASE_MAP[xc] = i7;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode5(source) {
    if (source instanceof Uint8Array) ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length2 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i8 = 0;
      for (var it1 = size - 1; (carry !== 0 || i8 < length2) && it1 !== -1; it1--, i8++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i8;
      pbegin++;
    }
    var it22 = size - length2;
    while (it22 !== size && b58[it22] === 0) {
      it22++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it22 < size; ++it22) {
      str += ALPHABET.charAt(b58[it22]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i8 = 0;
      for (var it3 = size - 1; (carry !== 0 || i8 < length2) && it3 !== -1; it3--, i8++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i8;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length2;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j7 = zeroes;
    while (it4 !== size) {
      vch[j7++] = b256[it4++];
    }
    return vch;
  }
  function decode6(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode5,
    decodeUnsafe,
    decode: decode6
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
var base_x_default = _brrp__multiformats_scope_baseX;

// node_modules/multiformats/esm/src/bytes.js
var empty = new Uint8Array(0);
var equals = (aa2, bb) => {
  if (aa2 === bb)
    return true;
  if (aa2.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii2 = 0; ii2 < aa2.byteLength; ii2++) {
    if (aa2[ii2] !== bb[ii2]) {
      return false;
    }
  }
  return true;
};
var coerce = (o6) => {
  if (o6 instanceof Uint8Array && o6.constructor.name === "Uint8Array")
    return o6;
  if (o6 instanceof ArrayBuffer)
    return new Uint8Array(o6);
  if (ArrayBuffer.isView(o6)) {
    return new Uint8Array(o6.buffer, o6.byteOffset, o6.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
var fromString = (str) => new TextEncoder().encode(str);
var toString = (b5) => new TextDecoder().decode(b5);

// node_modules/multiformats/esm/src/bases/base.js
var Encoder = class {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder = class {
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
};
var ComposedDecoder = class {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
var or = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
var Codec = class {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name2, prefix, baseEncode);
    this.decoder = new Decoder(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
};
var from = ({ name: name2, prefix, encode: encode5, decode: decode6 }) => new Codec(name2, prefix, encode5, decode6);
var baseX = ({ prefix, name: name2, alphabet: alphabet2 }) => {
  const { encode: encode5, decode: decode6 } = base_x_default(alphabet2, name2);
  return from({
    prefix,
    name: name2,
    encode: encode5,
    decode: (text) => coerce(decode6(text))
  });
};
var decode = (string2, alphabet2, bitsPerChar, name2) => {
  const codes = {};
  for (let i7 = 0; i7 < alphabet2.length; ++i7) {
    codes[alphabet2[i7]] = i7;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i7 = 0; i7 < end; ++i7) {
    const value = codes[string2[i7]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name2} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
var encode = (data, alphabet2, bitsPerChar) => {
  const pad = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i7 = 0; i7 < data.length; ++i7) {
    buffer = buffer << 8 | data[i7];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
var rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from({
    prefix,
    name: name2,
    encode(input) {
      return encode(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet2, bitsPerChar, name2);
    }
  });
};

// node_modules/multiformats/esm/src/bases/identity.js
var identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString(buf),
  decode: (str) => fromString(str)
});

// node_modules/multiformats/esm/src/bases/base2.js
var base2_exports = {};
__export(base2_exports, {
  base2: () => base2
});
var base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});

// node_modules/multiformats/esm/src/bases/base8.js
var base8_exports = {};
__export(base8_exports, {
  base8: () => base8
});
var base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});

// node_modules/multiformats/esm/src/bases/base10.js
var base10_exports = {};
__export(base10_exports, {
  base10: () => base10
});
var base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});

// node_modules/multiformats/esm/src/bases/base16.js
var base16_exports = {};
__export(base16_exports, {
  base16: () => base16,
  base16upper: () => base16upper
});
var base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
var base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});

// node_modules/multiformats/esm/src/bases/base32.js
var base32_exports = {};
__export(base32_exports, {
  base32: () => base32,
  base32hex: () => base32hex,
  base32hexpad: () => base32hexpad,
  base32hexpadupper: () => base32hexpadupper,
  base32hexupper: () => base32hexupper,
  base32pad: () => base32pad,
  base32padupper: () => base32padupper,
  base32upper: () => base32upper,
  base32z: () => base32z
});
var base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});

// node_modules/multiformats/esm/src/bases/base36.js
var base36_exports = {};
__export(base36_exports, {
  base36: () => base36,
  base36upper: () => base36upper
});
var base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
var base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});

// node_modules/multiformats/esm/src/bases/base58.js
var base58_exports = {};
__export(base58_exports, {
  base58btc: () => base58btc,
  base58flickr: () => base58flickr
});
var base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});

// node_modules/multiformats/esm/src/bases/base64.js
var base64_exports = {};
__export(base64_exports, {
  base64: () => base64,
  base64pad: () => base64pad,
  base64url: () => base64url,
  base64urlpad: () => base64urlpad
});
var base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
var base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
var base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
var base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});

// node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_exports = {};
__export(base256emoji_exports, {
  base256emoji: () => base256emoji
});
var alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var alphabetBytesToChars = alphabet.reduce((p5, c8, i7) => {
  p5[i7] = c8;
  return p5;
}, []);
var alphabetCharsToBytes = alphabet.reduce((p5, c8, i7) => {
  p5[c8.codePointAt(0)] = i7;
  return p5;
}, []);
function encode2(data) {
  return data.reduce((p5, c8) => {
    p5 += alphabetBytesToChars[c8];
    return p5;
  }, "");
}
function decode2(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
var base256emoji = from({
  prefix: "🚀",
  name: "base256emoji",
  encode: encode2,
  decode: decode2
});

// node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_exports = {};
__export(sha2_browser_exports, {
  sha256: () => sha256,
  sha512: () => sha512
});

// node_modules/multiformats/esm/vendor/varint.js
var encode_1 = encode3;
var MSB = 128;
var REST = 127;
var MSBALL = ~REST;
var INT = Math.pow(2, 31);
function encode3(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode3.bytes = offset - oldOffset + 1;
  return out;
}
var decode3 = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b5, l6 = buf.length;
  do {
    if (counter >= l6) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b5 = buf[counter++];
    res += shift < 28 ? (b5 & REST$1) << shift : (b5 & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b5 >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N22 = Math.pow(2, 14);
var N32 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode3,
  encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;

// node_modules/multiformats/esm/src/varint.js
var decode4 = (data, offset = 0) => {
  const code2 = varint_default.decode(data, offset);
  return [
    code2,
    varint_default.decode.bytes
  ];
};
var encodeTo = (int, target, offset = 0) => {
  varint_default.encode(int, target, offset);
  return target;
};
var encodingLength = (int) => {
  return varint_default.encodingLength(int);
};

// node_modules/multiformats/esm/src/hashes/digest.js
var create = (code2, digest2) => {
  const size = digest2.byteLength;
  const sizeOffset = encodingLength(code2);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo(code2, bytes, 0);
  encodeTo(size, bytes, sizeOffset);
  bytes.set(digest2, digestOffset);
  return new Digest(code2, size, digest2, bytes);
};
var decode5 = (multihash) => {
  const bytes = coerce(multihash);
  const [code2, sizeOffset] = decode4(bytes);
  const [size, digestOffset] = decode4(bytes.subarray(sizeOffset));
  const digest2 = bytes.subarray(sizeOffset + digestOffset);
  if (digest2.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest(code2, size, digest2, bytes);
};
var equals2 = (a6, b5) => {
  if (a6 === b5) {
    return true;
  } else {
    return a6.code === b5.code && a6.size === b5.size && equals(a6.bytes, b5.bytes);
  }
};
var Digest = class {
  constructor(code2, size, digest2, bytes) {
    this.code = code2;
    this.size = size;
    this.digest = digest2;
    this.bytes = bytes;
  }
};

// node_modules/multiformats/esm/src/hashes/hasher.js
var from2 = ({ name: name2, code: code2, encode: encode5 }) => new Hasher(name2, code2, encode5);
var Hasher = class {
  constructor(name2, code2, encode5) {
    this.name = name2;
    this.code = code2;
    this.encode = encode5;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};

// node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
var sha256 = from2({
  name: "sha2-256",
  code: 18,
  encode: sha("SHA-256")
});
var sha512 = from2({
  name: "sha2-512",
  code: 19,
  encode: sha("SHA-512")
});

// node_modules/multiformats/esm/src/hashes/identity.js
var identity_exports2 = {};
__export(identity_exports2, {
  identity: () => identity2
});
var code = 0;
var name = "identity";
var encode4 = coerce;
var digest = (input) => create(code, encode4(input));
var identity2 = {
  code,
  name,
  encode: encode4,
  digest
};

// node_modules/multiformats/esm/src/codecs/json.js
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();

// node_modules/multiformats/esm/src/cid.js
var CID = class _CID {
  constructor(version2, code2, multihash, bytes) {
    this.code = code2;
    this.version = version2;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = /* @__PURE__ */ new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
      case 0: {
        return this;
      }
      default: {
        const { code: code2, multihash } = this;
        if (code2 !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return _CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code2, digest: digest2 } = this.multihash;
        const multihash = create(code2, digest2);
        return _CID.createV1(this.code, multihash);
      }
      case 1: {
        return this;
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && equals2(this.multihash, other.multihash);
  }
  toString(base3) {
    const { bytes, version: version2, _baseCache } = this;
    switch (version2) {
      case 0:
        return toStringV0(bytes, _baseCache, base3 || base58btc.encoder);
      default:
        return toStringV1(bytes, _baseCache, base3 || base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "CID(" + this.toString() + ")";
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error("Deprecated, use .toString()");
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof _CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const { version: version2, code: code2, multihash, bytes } = value;
      return new _CID(version2, code2, multihash, bytes || encodeCID(version2, code2, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const { version: version2, multihash, code: code2 } = value;
      const digest2 = decode5(multihash);
      return _CID.create(version2, code2, digest2);
    } else {
      return null;
    }
  }
  static create(version2, code2, digest2) {
    if (typeof code2 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    switch (version2) {
      case 0: {
        if (code2 !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
        } else {
          return new _CID(version2, code2, digest2, digest2.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID(version2, code2, digest2.bytes);
        return new _CID(version2, code2, digest2, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  static createV0(digest2) {
    return _CID.create(0, DAG_PB_CODE, digest2);
  }
  static createV1(code2, digest2) {
    return _CID.create(1, code2, digest2);
  }
  static decode(bytes) {
    const [cid, remainder] = _CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  static decodeFirst(bytes) {
    const specs = _CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
    return [
      cid,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i7, length2] = decode4(initialBytes.subarray(offset));
      offset += length2;
      return i7;
    };
    let version2 = next();
    let codec = DAG_PB_CODE;
    if (version2 === 18) {
      version2 = 0;
      offset = 0;
    } else if (version2 === 1) {
      codec = next();
    }
    if (version2 !== 0 && version2 !== 1) {
      throw new RangeError(`Invalid CID version ${version2}`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version: version2,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base3) {
    const [prefix, bytes] = parseCIDtoBytes(source, base3);
    const cid = _CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
};
var parseCIDtoBytes = (source, base3) => {
  switch (source[0]) {
    case "Q": {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(source)
      ];
    }
    case base32.prefix: {
      const decoder = base3 || base32;
      return [
        base32.prefix,
        decoder.decode(source)
      ];
    }
    default: {
      if (base3 == null) {
        throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
      }
      return [
        source[0],
        base3.decode(source)
      ];
    }
  }
};
var toStringV0 = (bytes, cache, base3) => {
  const { prefix } = base3;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes).slice(1);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var toStringV1 = (bytes, cache, base3) => {
  const { prefix } = base3;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var DAG_PB_CODE = 112;
var SHA_256_CODE = 18;
var encodeCID = (version2, code2, multihash) => {
  const codeOffset = encodingLength(version2);
  const hashOffset = codeOffset + encodingLength(code2);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version2, bytes, 0);
  encodeTo(code2, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
var cidSymbol = Symbol.for("@ipld/js-cid/CID");
var readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
var hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
var version = "0.0.0-dev";
var deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

// node_modules/multiformats/esm/src/basics.js
var bases = {
  ...identity_exports,
  ...base2_exports,
  ...base8_exports,
  ...base10_exports,
  ...base16_exports,
  ...base32_exports,
  ...base36_exports,
  ...base58_exports,
  ...base64_exports,
  ...base256emoji_exports
};
var hashes = {
  ...sha2_browser_exports,
  ...identity_exports2
};

// node_modules/uint8arrays/esm/src/util/bases.js
function createCodec(name2, prefix, encode5, decode6) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode5
    },
    decoder: { decode: decode6 }
  };
}
var string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
var ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i7 = 0; i7 < buf.length; i7++) {
    string2 += String.fromCharCode(buf[i7]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i7 = 0; i7 < str.length; i7++) {
    buf[i7] = str.charCodeAt(i7);
  }
  return buf;
});
var BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
var bases_default = BASES;

// node_modules/uint8arrays/esm/src/to-string.js
function toString2(array, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}

// node_modules/uint8arrays/esm/src/from-string.js
function fromString2(string2, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string2, "utf8");
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}

// node_modules/@walletconnect/relay-auth/node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify4 = (data) => JSON.stringify(data, (_6, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse3 = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_6, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse5(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse3(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify6(value) {
  return typeof value === "string" ? value : JSONStringify4(value) || "";
}

// node_modules/@walletconnect/relay-auth/dist/esm/utils.js
function decodeJSON(str) {
  return safeJsonParse5(toString2(fromString2(str, JWT_ENCODING), JSON_ENCODING));
}
function encodeJSON(val) {
  return toString2(fromString2(safeJsonStringify6(val), JSON_ENCODING), JWT_ENCODING);
}
function encodeIss(publicKey) {
  const header = fromString2(MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_ENCODING);
  const multicodec = MULTICODEC_ED25519_BASE + toString2(concat([header, publicKey]), MULTICODEC_ED25519_ENCODING);
  return [DID_PREFIX, DID_METHOD, multicodec].join(DID_DELIMITER);
}
function encodeSig(bytes) {
  return toString2(bytes, JWT_ENCODING);
}
function decodeSig(encoded) {
  return fromString2(encoded, JWT_ENCODING);
}
function encodeData(params) {
  return fromString2([encodeJSON(params.header), encodeJSON(params.payload)].join(JWT_DELIMITER), DATA_ENCODING);
}
function encodeJWT(params) {
  return [
    encodeJSON(params.header),
    encodeJSON(params.payload),
    encodeSig(params.signature)
  ].join(JWT_DELIMITER);
}
function decodeJWT(jwt) {
  const params = jwt.split(JWT_DELIMITER);
  const header = decodeJSON(params[0]);
  const payload = decodeJSON(params[1]);
  const signature = decodeSig(params[2]);
  const data = fromString2(params.slice(0, 2).join(JWT_DELIMITER), DATA_ENCODING);
  return { header, payload, signature, data };
}

// node_modules/@walletconnect/relay-auth/dist/esm/api.js
function generateKeyPair(seed = (0, import_random.randomBytes)(KEY_PAIR_SEED_LENGTH)) {
  return ed25519.generateKeyPairFromSeed(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = (0, import_time2.fromMiliseconds)(Date.now())) {
  const header = { alg: JWT_IRIDIUM_ALG, typ: JWT_IRIDIUM_TYP };
  const iss = encodeIss(keyPair.publicKey);
  const exp = iat + ttl;
  const payload = { iss, sub, aud, iat, exp };
  const data = encodeData({ header, payload });
  const signature = ed25519.sign(keyPair.secretKey, data);
  return encodeJWT({ header, payload, signature });
}

// node_modules/@walletconnect/utils/node_modules/detect-browser/es/index.js
var __spreadArray = function(to2, from3, pack) {
  if (pack || arguments.length === 2) for (var i7 = 0, l6 = from3.length, ar3; i7 < l6; i7++) {
    if (ar3 || !(i7 in from3)) {
      if (!ar3) ar3 = Array.prototype.slice.call(from3, 0, i7);
      ar3[i7] = from3[i7];
    }
  }
  return to2.concat(ar3 || Array.prototype.slice.call(from3));
};
var BrowserInfo2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function BrowserInfo3(name2, version2, os) {
      this.name = name2;
      this.version = version2;
      this.os = os;
      this.type = "browser";
    }
    return BrowserInfo3;
  }()
);
var NodeInfo2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function NodeInfo3(version2) {
      this.version = version2;
      this.type = "node";
      this.name = "node";
      this.os = process.platform;
    }
    return NodeInfo3;
  }()
);
var SearchBotDeviceInfo2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function SearchBotDeviceInfo3(name2, version2, os, bot) {
      this.name = name2;
      this.version = version2;
      this.os = os;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo3;
  }()
);
var BotInfo2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function BotInfo3() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo3;
  }()
);
var ReactNativeInfo2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function ReactNativeInfo3() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo3;
  }()
);
var SEARCHBOX_UA_REGEX2 = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX2 = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS2 = 3;
var userAgentRules2 = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX2]
];
var operatingSystemRules2 = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect2(userAgent) {
  if (!!userAgent) {
    return parseUserAgent2(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo2();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent2(navigator.userAgent);
  }
  return getNodeVersion2();
}
function matchUserAgent2(ua2) {
  return ua2 !== "" && userAgentRules2.reduce(function(matched, _a2) {
    var browser = _a2[0], regex = _a2[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua2);
    return !!uaMatch && [browser, uaMatch];
  }, false);
}
function parseUserAgent2(ua2) {
  var matchedRule = matchUserAgent2(ua2);
  if (!matchedRule) {
    return null;
  }
  var name2 = matchedRule[0], match = matchedRule[1];
  if (name2 === "searchbot") {
    return new BotInfo2();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS2) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts2(REQUIRED_VERSION_PARTS2 - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version2 = versionParts.join(".");
  var os = detectOS3(ua2);
  var searchBotMatch = SEARCHBOT_OS_REGEX2.exec(ua2);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo2(name2, version2, os, searchBotMatch[1]);
  }
  return new BrowserInfo2(name2, version2, os);
}
function detectOS3(ua2) {
  for (var ii2 = 0, count = operatingSystemRules2.length; ii2 < count; ii2++) {
    var _a2 = operatingSystemRules2[ii2], os = _a2[0], regex = _a2[1];
    var match = regex.exec(ua2);
    if (match) {
      return os;
    }
  }
  return null;
}
function getNodeVersion2() {
  var isNode3 = typeof process !== "undefined" && process.version;
  return isNode3 ? new NodeInfo2(process.version.slice(1)) : null;
}
function createVersionParts2(count) {
  var output = [];
  for (var ii2 = 0; ii2 < count; ii2++) {
    output.push("0");
  }
  return output;
}

// node_modules/@walletconnect/utils/dist/index.es.js
var import_time3 = __toESM(require_cjs4());
var import_window_getters = __toESM(require_cjs5());
var import_window_metadata = __toESM(require_cjs6());
var Br = __toESM(require_query_string());
var import_chacha20poly1305 = __toESM(require_chacha20poly1305());
var import_hkdf = __toESM(require_hkdf());
var import_random2 = __toESM(require_random());
var import_sha256 = __toESM(require_sha256());
var gn = __toESM(require_x25519());
var import_elliptic = __toESM(require_elliptic());

// node_modules/@walletconnect/relay-api/dist/index.es.js
var C5 = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };

// node_modules/@walletconnect/utils/dist/index.es.js
var Rr = ":";
function mn(e4) {
  const [t3, r5] = e4.split(Rr);
  return { namespace: t3, reference: r5 };
}
function gi(e4) {
  const [t3, r5, i7] = e4.split(Rr);
  return { namespace: t3, reference: r5, address: i7 };
}
function Or(e4, t3) {
  return e4.includes(":") ? [e4] : t3.chains || [];
}
var Vo = Object.defineProperty;
var Mn = Object.getOwnPropertySymbols;
var Wo = Object.prototype.hasOwnProperty;
var Xo = Object.prototype.propertyIsEnumerable;
var En = (e4, t3, r5) => t3 in e4 ? Vo(e4, t3, { enumerable: true, configurable: true, writable: true, value: r5 }) : e4[t3] = r5;
var Sn = (e4, t3) => {
  for (var r5 in t3 || (t3 = {})) Wo.call(t3, r5) && En(e4, r5, t3[r5]);
  if (Mn) for (var r5 of Mn(t3)) Xo.call(t3, r5) && En(e4, r5, t3[r5]);
  return e4;
};
var In = "ReactNative";
var qt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
var _n = "js";
function bi() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function rr() {
  return !(0, import_window_getters.getDocument)() && !!(0, import_window_getters.getNavigator)() && navigator.product === In;
}
function gr() {
  return !bi() && !!(0, import_window_getters.getNavigator)() && !!(0, import_window_getters.getDocument)();
}
function We() {
  return rr() ? qt.reactNative : bi() ? qt.node : gr() ? qt.browser : qt.unknown;
}
function ts() {
  var e4;
  try {
    return rr() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e4 = global.Application) == null ? void 0 : e4.applicationId : void 0;
  } catch {
    return;
  }
}
function Bn(e4, t3) {
  let r5 = Br.parse(e4);
  return r5 = Sn(Sn({}, r5), t3), e4 = Br.stringify(r5), e4;
}
function es() {
  return (0, import_window_metadata.getWindowMetadata)() || { name: "", description: "", url: "", icons: [""] };
}
function Cn() {
  if (We() === qt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r5, Version: i7 } = global.Platform;
    return [r5, i7].join("-");
  }
  const e4 = detect2();
  if (e4 === null) return "unknown";
  const t3 = e4.os ? e4.os.replace(" ", "").toLowerCase() : "unknown";
  return e4.type === "browser" ? [t3, e4.name, e4.version].join("-") : [t3, e4.version].join("-");
}
function Rn() {
  var e4;
  const t3 = We();
  return t3 === qt.browser ? [t3, ((e4 = (0, import_window_getters.getLocation)()) == null ? void 0 : e4.host) || "unknown"].join(":") : t3;
}
function On(e4, t3, r5) {
  const i7 = Cn(), n6 = Rn();
  return [[e4, t3].join("-"), [_n, r5].join("-"), i7, n6].join("/");
}
function is({ protocol: e4, version: t3, relayUrl: r5, sdkVersion: i7, auth: n6, projectId: o6, useOnCloseEvent: h7, bundleId: p5 }) {
  const A6 = r5.split("?"), v6 = On(e4, t3, i7), w7 = { auth: n6, ua: v6, projectId: o6, useOnCloseEvent: h7 || void 0, origin: p5 || void 0 }, y8 = Bn(A6[1] || "", w7);
  return A6[0] + "?" + y8;
}
function _e(e4, t3) {
  return e4.filter((r5) => t3.includes(r5)).length === e4.length;
}
function ss(e4) {
  return Object.fromEntries(e4.entries());
}
function as(e4) {
  return new Map(Object.entries(e4));
}
function ls(e4 = import_time3.FIVE_MINUTES, t3) {
  const r5 = (0, import_time3.toMiliseconds)(e4 || import_time3.FIVE_MINUTES);
  let i7, n6, o6;
  return { resolve: (h7) => {
    o6 && i7 && (clearTimeout(o6), i7(h7));
  }, reject: (h7) => {
    o6 && n6 && (clearTimeout(o6), n6(h7));
  }, done: () => new Promise((h7, p5) => {
    o6 = setTimeout(() => {
      p5(new Error(t3));
    }, r5), i7 = h7, n6 = p5;
  }) };
}
function ds(e4, t3, r5) {
  return new Promise(async (i7, n6) => {
    const o6 = setTimeout(() => n6(new Error(r5)), t3);
    try {
      const h7 = await e4;
      i7(h7);
    } catch (h7) {
      n6(h7);
    }
    clearTimeout(o6);
  });
}
function yi(e4, t3) {
  if (typeof t3 == "string" && t3.startsWith(`${e4}:`)) return t3;
  if (e4.toLowerCase() === "topic") {
    if (typeof t3 != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t3}`;
  } else if (e4.toLowerCase() === "id") {
    if (typeof t3 != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t3}`;
  }
  throw new Error(`Unknown expirer target type: ${e4}`);
}
function ps(e4) {
  return yi("topic", e4);
}
function vs(e4) {
  return yi("id", e4);
}
function gs(e4) {
  const [t3, r5] = e4.split(":"), i7 = { id: void 0, topic: void 0 };
  if (t3 === "topic" && typeof r5 == "string") i7.topic = r5;
  else if (t3 === "id" && Number.isInteger(Number(r5))) i7.id = Number(r5);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${t3}:${r5}`);
  return i7;
}
function ms(e4, t3) {
  return (0, import_time3.fromMiliseconds)((t3 || Date.now()) + (0, import_time3.toMiliseconds)(e4));
}
function As(e4) {
  return Date.now() >= (0, import_time3.toMiliseconds)(e4);
}
function bs(e4, t3) {
  return `${e4}${t3 ? `:${t3}` : ""}`;
}
function me(e4 = [], t3 = []) {
  return [.../* @__PURE__ */ new Set([...e4, ...t3])];
}
async function ys({ id: e4, topic: t3, wcDeepLink: r5 }) {
  var i7;
  try {
    if (!r5) return;
    const n6 = typeof r5 == "string" ? JSON.parse(r5) : r5;
    let o6 = n6 == null ? void 0 : n6.href;
    if (typeof o6 != "string") return;
    o6.endsWith("/") && (o6 = o6.slice(0, -1));
    const h7 = `${o6}/wc?requestId=${e4}&sessionTopic=${t3}`, p5 = We();
    if (p5 === qt.browser) {
      if (!((i7 = (0, import_window_getters.getDocument)()) != null && i7.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      h7.startsWith("https://") || h7.startsWith("http://") ? window.open(h7, "_blank", "noreferrer noopener") : window.open(h7, "_self", "noreferrer noopener");
    } else p5 === qt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(h7);
  } catch (n6) {
    console.error(n6);
  }
}
async function ws(e4, t3) {
  try {
    return await e4.getItem(t3) || (gr() ? localStorage.getItem(t3) : void 0);
  } catch (r5) {
    console.error(r5);
  }
}
function xs(e4, t3) {
  if (!e4.includes(t3)) return null;
  const r5 = e4.split(/([&,?,=])/), i7 = r5.indexOf(t3);
  return r5[i7 + 2];
}
function Ms() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e4) => {
    const t3 = Math.random() * 16 | 0;
    return (e4 === "x" ? t3 : t3 & 3 | 8).toString(16);
  });
}
function Es() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
var Fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ss(e4) {
  var t3 = e4.default;
  if (typeof t3 == "function") {
    var r5 = function() {
      return t3.apply(this, arguments);
    };
    r5.prototype = t3.prototype;
  } else r5 = {};
  return Object.defineProperty(r5, "__esModule", { value: true }), Object.keys(e4).forEach(function(i7) {
    var n6 = Object.getOwnPropertyDescriptor(e4, i7);
    Object.defineProperty(r5, i7, n6.get ? n6 : { enumerable: true, get: function() {
      return e4[i7];
    } });
  }), r5;
}
var Un = { exports: {} };
(function(e4) {
  (function() {
    var t3 = "input is invalid type", r5 = "finalize already called", i7 = typeof window == "object", n6 = i7 ? window : {};
    n6.JS_SHA3_NO_WINDOW && (i7 = false);
    var o6 = !i7 && typeof self == "object", h7 = !n6.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    h7 ? n6 = Fn : o6 && (n6 = self);
    var p5 = !n6.JS_SHA3_NO_COMMON_JS && true && e4.exports, A6 = !n6.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", v6 = "0123456789abcdef".split(""), w7 = [31, 7936, 2031616, 520093696], y8 = [4, 1024, 262144, 67108864], S5 = [1, 256, 65536, 16777216], N10 = [6, 1536, 393216, 100663296], I6 = [0, 8, 16, 24], C6 = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], T6 = [224, 256, 384, 512], U4 = [128, 256], J2 = ["hex", "buffer", "arrayBuffer", "array", "digest"], Bt2 = { 128: 168, 256: 136 };
    (n6.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u5) {
      return Object.prototype.toString.call(u5) === "[object Array]";
    }), A6 && (n6.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u5) {
      return typeof u5 == "object" && u5.buffer && u5.buffer.constructor === ArrayBuffer;
    });
    for (var G2 = function(u5, E6, _6) {
      return function(B3) {
        return new s5(u5, E6, u5).update(B3)[_6]();
      };
    }, H3 = function(u5, E6, _6) {
      return function(B3, R3) {
        return new s5(u5, E6, R3).update(B3)[_6]();
      };
    }, L4 = function(u5, E6, _6) {
      return function(B3, R3, F4, P4) {
        return f6["cshake" + u5].update(B3, R3, F4, P4)[_6]();
      };
    }, Pt2 = function(u5, E6, _6) {
      return function(B3, R3, F4, P4) {
        return f6["kmac" + u5].update(B3, R3, F4, P4)[_6]();
      };
    }, W3 = function(u5, E6, _6, B3) {
      for (var R3 = 0; R3 < J2.length; ++R3) {
        var F4 = J2[R3];
        u5[F4] = E6(_6, B3, F4);
      }
      return u5;
    }, Rt2 = function(u5, E6) {
      var _6 = G2(u5, E6, "hex");
      return _6.create = function() {
        return new s5(u5, E6, u5);
      }, _6.update = function(B3) {
        return _6.create().update(B3);
      }, W3(_6, G2, u5, E6);
    }, Vt2 = function(u5, E6) {
      var _6 = H3(u5, E6, "hex");
      return _6.create = function(B3) {
        return new s5(u5, E6, B3);
      }, _6.update = function(B3, R3) {
        return _6.create(R3).update(B3);
      }, W3(_6, H3, u5, E6);
    }, Y2 = function(u5, E6) {
      var _6 = Bt2[u5], B3 = L4(u5, E6, "hex");
      return B3.create = function(R3, F4, P4) {
        return !F4 && !P4 ? f6["shake" + u5].create(R3) : new s5(u5, E6, R3).bytepad([F4, P4], _6);
      }, B3.update = function(R3, F4, P4, O5) {
        return B3.create(F4, P4, O5).update(R3);
      }, W3(B3, L4, u5, E6);
    }, Wt2 = function(u5, E6) {
      var _6 = Bt2[u5], B3 = Pt2(u5, E6, "hex");
      return B3.create = function(R3, F4, P4) {
        return new g5(u5, E6, F4).bytepad(["KMAC", P4], _6).bytepad([R3], _6);
      }, B3.update = function(R3, F4, P4, O5) {
        return B3.create(R3, P4, O5).update(F4);
      }, W3(B3, Pt2, u5, E6);
    }, b5 = [{ name: "keccak", padding: S5, bits: T6, createMethod: Rt2 }, { name: "sha3", padding: N10, bits: T6, createMethod: Rt2 }, { name: "shake", padding: w7, bits: U4, createMethod: Vt2 }, { name: "cshake", padding: y8, bits: U4, createMethod: Y2 }, { name: "kmac", padding: y8, bits: U4, createMethod: Wt2 }], f6 = {}, a6 = [], c8 = 0; c8 < b5.length; ++c8) for (var d5 = b5[c8], m4 = d5.bits, x7 = 0; x7 < m4.length; ++x7) {
      var M5 = d5.name + "_" + m4[x7];
      if (a6.push(M5), f6[M5] = d5.createMethod(m4[x7], d5.padding), d5.name !== "sha3") {
        var l6 = d5.name + m4[x7];
        a6.push(l6), f6[l6] = f6[M5];
      }
    }
    function s5(u5, E6, _6) {
      this.blocks = [], this.s = [], this.padding = E6, this.outputBits = _6, this.reset = true, this.finalized = false, this.block = 0, this.start = 0, this.blockCount = 1600 - (u5 << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _6 >> 5, this.extraBytes = (_6 & 31) >> 3;
      for (var B3 = 0; B3 < 50; ++B3) this.s[B3] = 0;
    }
    s5.prototype.update = function(u5) {
      if (this.finalized) throw new Error(r5);
      var E6, _6 = typeof u5;
      if (_6 !== "string") {
        if (_6 === "object") {
          if (u5 === null) throw new Error(t3);
          if (A6 && u5.constructor === ArrayBuffer) u5 = new Uint8Array(u5);
          else if (!Array.isArray(u5) && (!A6 || !ArrayBuffer.isView(u5))) throw new Error(t3);
        } else throw new Error(t3);
        E6 = true;
      }
      for (var B3 = this.blocks, R3 = this.byteCount, F4 = u5.length, P4 = this.blockCount, O5 = 0, Ct2 = this.s, D5, q4; O5 < F4; ) {
        if (this.reset) for (this.reset = false, B3[0] = this.block, D5 = 1; D5 < P4 + 1; ++D5) B3[D5] = 0;
        if (E6) for (D5 = this.start; O5 < F4 && D5 < R3; ++O5) B3[D5 >> 2] |= u5[O5] << I6[D5++ & 3];
        else for (D5 = this.start; O5 < F4 && D5 < R3; ++O5) q4 = u5.charCodeAt(O5), q4 < 128 ? B3[D5 >> 2] |= q4 << I6[D5++ & 3] : q4 < 2048 ? (B3[D5 >> 2] |= (192 | q4 >> 6) << I6[D5++ & 3], B3[D5 >> 2] |= (128 | q4 & 63) << I6[D5++ & 3]) : q4 < 55296 || q4 >= 57344 ? (B3[D5 >> 2] |= (224 | q4 >> 12) << I6[D5++ & 3], B3[D5 >> 2] |= (128 | q4 >> 6 & 63) << I6[D5++ & 3], B3[D5 >> 2] |= (128 | q4 & 63) << I6[D5++ & 3]) : (q4 = 65536 + ((q4 & 1023) << 10 | u5.charCodeAt(++O5) & 1023), B3[D5 >> 2] |= (240 | q4 >> 18) << I6[D5++ & 3], B3[D5 >> 2] |= (128 | q4 >> 12 & 63) << I6[D5++ & 3], B3[D5 >> 2] |= (128 | q4 >> 6 & 63) << I6[D5++ & 3], B3[D5 >> 2] |= (128 | q4 & 63) << I6[D5++ & 3]);
        if (this.lastByteIndex = D5, D5 >= R3) {
          for (this.start = D5 - R3, this.block = B3[P4], D5 = 0; D5 < P4; ++D5) Ct2[D5] ^= B3[D5];
          k5(Ct2), this.reset = true;
        } else this.start = D5;
      }
      return this;
    }, s5.prototype.encode = function(u5, E6) {
      var _6 = u5 & 255, B3 = 1, R3 = [_6];
      for (u5 = u5 >> 8, _6 = u5 & 255; _6 > 0; ) R3.unshift(_6), u5 = u5 >> 8, _6 = u5 & 255, ++B3;
      return E6 ? R3.push(B3) : R3.unshift(B3), this.update(R3), R3.length;
    }, s5.prototype.encodeString = function(u5) {
      var E6, _6 = typeof u5;
      if (_6 !== "string") {
        if (_6 === "object") {
          if (u5 === null) throw new Error(t3);
          if (A6 && u5.constructor === ArrayBuffer) u5 = new Uint8Array(u5);
          else if (!Array.isArray(u5) && (!A6 || !ArrayBuffer.isView(u5))) throw new Error(t3);
        } else throw new Error(t3);
        E6 = true;
      }
      var B3 = 0, R3 = u5.length;
      if (E6) B3 = R3;
      else for (var F4 = 0; F4 < u5.length; ++F4) {
        var P4 = u5.charCodeAt(F4);
        P4 < 128 ? B3 += 1 : P4 < 2048 ? B3 += 2 : P4 < 55296 || P4 >= 57344 ? B3 += 3 : (P4 = 65536 + ((P4 & 1023) << 10 | u5.charCodeAt(++F4) & 1023), B3 += 4);
      }
      return B3 += this.encode(B3 * 8), this.update(u5), B3;
    }, s5.prototype.bytepad = function(u5, E6) {
      for (var _6 = this.encode(E6), B3 = 0; B3 < u5.length; ++B3) _6 += this.encodeString(u5[B3]);
      var R3 = E6 - _6 % E6, F4 = [];
      return F4.length = R3, this.update(F4), this;
    }, s5.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = true;
        var u5 = this.blocks, E6 = this.lastByteIndex, _6 = this.blockCount, B3 = this.s;
        if (u5[E6 >> 2] |= this.padding[E6 & 3], this.lastByteIndex === this.byteCount) for (u5[0] = u5[_6], E6 = 1; E6 < _6 + 1; ++E6) u5[E6] = 0;
        for (u5[_6 - 1] |= 2147483648, E6 = 0; E6 < _6; ++E6) B3[E6] ^= u5[E6];
        k5(B3);
      }
    }, s5.prototype.toString = s5.prototype.hex = function() {
      this.finalize();
      for (var u5 = this.blockCount, E6 = this.s, _6 = this.outputBlocks, B3 = this.extraBytes, R3 = 0, F4 = 0, P4 = "", O5; F4 < _6; ) {
        for (R3 = 0; R3 < u5 && F4 < _6; ++R3, ++F4) O5 = E6[R3], P4 += v6[O5 >> 4 & 15] + v6[O5 & 15] + v6[O5 >> 12 & 15] + v6[O5 >> 8 & 15] + v6[O5 >> 20 & 15] + v6[O5 >> 16 & 15] + v6[O5 >> 28 & 15] + v6[O5 >> 24 & 15];
        F4 % u5 === 0 && (k5(E6), R3 = 0);
      }
      return B3 && (O5 = E6[R3], P4 += v6[O5 >> 4 & 15] + v6[O5 & 15], B3 > 1 && (P4 += v6[O5 >> 12 & 15] + v6[O5 >> 8 & 15]), B3 > 2 && (P4 += v6[O5 >> 20 & 15] + v6[O5 >> 16 & 15])), P4;
    }, s5.prototype.arrayBuffer = function() {
      this.finalize();
      var u5 = this.blockCount, E6 = this.s, _6 = this.outputBlocks, B3 = this.extraBytes, R3 = 0, F4 = 0, P4 = this.outputBits >> 3, O5;
      B3 ? O5 = new ArrayBuffer(_6 + 1 << 2) : O5 = new ArrayBuffer(P4);
      for (var Ct2 = new Uint32Array(O5); F4 < _6; ) {
        for (R3 = 0; R3 < u5 && F4 < _6; ++R3, ++F4) Ct2[F4] = E6[R3];
        F4 % u5 === 0 && k5(E6);
      }
      return B3 && (Ct2[R3] = E6[R3], O5 = O5.slice(0, P4)), O5;
    }, s5.prototype.buffer = s5.prototype.arrayBuffer, s5.prototype.digest = s5.prototype.array = function() {
      this.finalize();
      for (var u5 = this.blockCount, E6 = this.s, _6 = this.outputBlocks, B3 = this.extraBytes, R3 = 0, F4 = 0, P4 = [], O5, Ct2; F4 < _6; ) {
        for (R3 = 0; R3 < u5 && F4 < _6; ++R3, ++F4) O5 = F4 << 2, Ct2 = E6[R3], P4[O5] = Ct2 & 255, P4[O5 + 1] = Ct2 >> 8 & 255, P4[O5 + 2] = Ct2 >> 16 & 255, P4[O5 + 3] = Ct2 >> 24 & 255;
        F4 % u5 === 0 && k5(E6);
      }
      return B3 && (O5 = F4 << 2, Ct2 = E6[R3], P4[O5] = Ct2 & 255, B3 > 1 && (P4[O5 + 1] = Ct2 >> 8 & 255), B3 > 2 && (P4[O5 + 2] = Ct2 >> 16 & 255)), P4;
    };
    function g5(u5, E6, _6) {
      s5.call(this, u5, E6, _6);
    }
    g5.prototype = new s5(), g5.prototype.finalize = function() {
      return this.encode(this.outputBits, true), s5.prototype.finalize.call(this);
    };
    var k5 = function(u5) {
      var E6, _6, B3, R3, F4, P4, O5, Ct2, D5, q4, De2, X3, Z3, Te2, $4, tt3, Fe, et3, rt3, Ue, it3, nt3, ke, ft2, ot3, qe, st3, at3, Ke, ut3, ht3, He, ct3, lt3, Le2, dt3, pt3, ze, vt2, gt3, je, mt2, At2, Qe2, bt2, yt3, Je, wt2, xt2, Ge, Mt2, Et2, Ye, St2, It2, Ve2, Nt2, _t2, Me, Ee2, Se, Ie2, Ne;
      for (B3 = 0; B3 < 48; B3 += 2) R3 = u5[0] ^ u5[10] ^ u5[20] ^ u5[30] ^ u5[40], F4 = u5[1] ^ u5[11] ^ u5[21] ^ u5[31] ^ u5[41], P4 = u5[2] ^ u5[12] ^ u5[22] ^ u5[32] ^ u5[42], O5 = u5[3] ^ u5[13] ^ u5[23] ^ u5[33] ^ u5[43], Ct2 = u5[4] ^ u5[14] ^ u5[24] ^ u5[34] ^ u5[44], D5 = u5[5] ^ u5[15] ^ u5[25] ^ u5[35] ^ u5[45], q4 = u5[6] ^ u5[16] ^ u5[26] ^ u5[36] ^ u5[46], De2 = u5[7] ^ u5[17] ^ u5[27] ^ u5[37] ^ u5[47], X3 = u5[8] ^ u5[18] ^ u5[28] ^ u5[38] ^ u5[48], Z3 = u5[9] ^ u5[19] ^ u5[29] ^ u5[39] ^ u5[49], E6 = X3 ^ (P4 << 1 | O5 >>> 31), _6 = Z3 ^ (O5 << 1 | P4 >>> 31), u5[0] ^= E6, u5[1] ^= _6, u5[10] ^= E6, u5[11] ^= _6, u5[20] ^= E6, u5[21] ^= _6, u5[30] ^= E6, u5[31] ^= _6, u5[40] ^= E6, u5[41] ^= _6, E6 = R3 ^ (Ct2 << 1 | D5 >>> 31), _6 = F4 ^ (D5 << 1 | Ct2 >>> 31), u5[2] ^= E6, u5[3] ^= _6, u5[12] ^= E6, u5[13] ^= _6, u5[22] ^= E6, u5[23] ^= _6, u5[32] ^= E6, u5[33] ^= _6, u5[42] ^= E6, u5[43] ^= _6, E6 = P4 ^ (q4 << 1 | De2 >>> 31), _6 = O5 ^ (De2 << 1 | q4 >>> 31), u5[4] ^= E6, u5[5] ^= _6, u5[14] ^= E6, u5[15] ^= _6, u5[24] ^= E6, u5[25] ^= _6, u5[34] ^= E6, u5[35] ^= _6, u5[44] ^= E6, u5[45] ^= _6, E6 = Ct2 ^ (X3 << 1 | Z3 >>> 31), _6 = D5 ^ (Z3 << 1 | X3 >>> 31), u5[6] ^= E6, u5[7] ^= _6, u5[16] ^= E6, u5[17] ^= _6, u5[26] ^= E6, u5[27] ^= _6, u5[36] ^= E6, u5[37] ^= _6, u5[46] ^= E6, u5[47] ^= _6, E6 = q4 ^ (R3 << 1 | F4 >>> 31), _6 = De2 ^ (F4 << 1 | R3 >>> 31), u5[8] ^= E6, u5[9] ^= _6, u5[18] ^= E6, u5[19] ^= _6, u5[28] ^= E6, u5[29] ^= _6, u5[38] ^= E6, u5[39] ^= _6, u5[48] ^= E6, u5[49] ^= _6, Te2 = u5[0], $4 = u5[1], yt3 = u5[11] << 4 | u5[10] >>> 28, Je = u5[10] << 4 | u5[11] >>> 28, at3 = u5[20] << 3 | u5[21] >>> 29, Ke = u5[21] << 3 | u5[20] >>> 29, Ee2 = u5[31] << 9 | u5[30] >>> 23, Se = u5[30] << 9 | u5[31] >>> 23, mt2 = u5[40] << 18 | u5[41] >>> 14, At2 = u5[41] << 18 | u5[40] >>> 14, lt3 = u5[2] << 1 | u5[3] >>> 31, Le2 = u5[3] << 1 | u5[2] >>> 31, tt3 = u5[13] << 12 | u5[12] >>> 20, Fe = u5[12] << 12 | u5[13] >>> 20, wt2 = u5[22] << 10 | u5[23] >>> 22, xt2 = u5[23] << 10 | u5[22] >>> 22, ut3 = u5[33] << 13 | u5[32] >>> 19, ht3 = u5[32] << 13 | u5[33] >>> 19, Ie2 = u5[42] << 2 | u5[43] >>> 30, Ne = u5[43] << 2 | u5[42] >>> 30, St2 = u5[5] << 30 | u5[4] >>> 2, It2 = u5[4] << 30 | u5[5] >>> 2, dt3 = u5[14] << 6 | u5[15] >>> 26, pt3 = u5[15] << 6 | u5[14] >>> 26, et3 = u5[25] << 11 | u5[24] >>> 21, rt3 = u5[24] << 11 | u5[25] >>> 21, Ge = u5[34] << 15 | u5[35] >>> 17, Mt2 = u5[35] << 15 | u5[34] >>> 17, He = u5[45] << 29 | u5[44] >>> 3, ct3 = u5[44] << 29 | u5[45] >>> 3, ft2 = u5[6] << 28 | u5[7] >>> 4, ot3 = u5[7] << 28 | u5[6] >>> 4, Ve2 = u5[17] << 23 | u5[16] >>> 9, Nt2 = u5[16] << 23 | u5[17] >>> 9, ze = u5[26] << 25 | u5[27] >>> 7, vt2 = u5[27] << 25 | u5[26] >>> 7, Ue = u5[36] << 21 | u5[37] >>> 11, it3 = u5[37] << 21 | u5[36] >>> 11, Et2 = u5[47] << 24 | u5[46] >>> 8, Ye = u5[46] << 24 | u5[47] >>> 8, Qe2 = u5[8] << 27 | u5[9] >>> 5, bt2 = u5[9] << 27 | u5[8] >>> 5, qe = u5[18] << 20 | u5[19] >>> 12, st3 = u5[19] << 20 | u5[18] >>> 12, _t2 = u5[29] << 7 | u5[28] >>> 25, Me = u5[28] << 7 | u5[29] >>> 25, gt3 = u5[38] << 8 | u5[39] >>> 24, je = u5[39] << 8 | u5[38] >>> 24, nt3 = u5[48] << 14 | u5[49] >>> 18, ke = u5[49] << 14 | u5[48] >>> 18, u5[0] = Te2 ^ ~tt3 & et3, u5[1] = $4 ^ ~Fe & rt3, u5[10] = ft2 ^ ~qe & at3, u5[11] = ot3 ^ ~st3 & Ke, u5[20] = lt3 ^ ~dt3 & ze, u5[21] = Le2 ^ ~pt3 & vt2, u5[30] = Qe2 ^ ~yt3 & wt2, u5[31] = bt2 ^ ~Je & xt2, u5[40] = St2 ^ ~Ve2 & _t2, u5[41] = It2 ^ ~Nt2 & Me, u5[2] = tt3 ^ ~et3 & Ue, u5[3] = Fe ^ ~rt3 & it3, u5[12] = qe ^ ~at3 & ut3, u5[13] = st3 ^ ~Ke & ht3, u5[22] = dt3 ^ ~ze & gt3, u5[23] = pt3 ^ ~vt2 & je, u5[32] = yt3 ^ ~wt2 & Ge, u5[33] = Je ^ ~xt2 & Mt2, u5[42] = Ve2 ^ ~_t2 & Ee2, u5[43] = Nt2 ^ ~Me & Se, u5[4] = et3 ^ ~Ue & nt3, u5[5] = rt3 ^ ~it3 & ke, u5[14] = at3 ^ ~ut3 & He, u5[15] = Ke ^ ~ht3 & ct3, u5[24] = ze ^ ~gt3 & mt2, u5[25] = vt2 ^ ~je & At2, u5[34] = wt2 ^ ~Ge & Et2, u5[35] = xt2 ^ ~Mt2 & Ye, u5[44] = _t2 ^ ~Ee2 & Ie2, u5[45] = Me ^ ~Se & Ne, u5[6] = Ue ^ ~nt3 & Te2, u5[7] = it3 ^ ~ke & $4, u5[16] = ut3 ^ ~He & ft2, u5[17] = ht3 ^ ~ct3 & ot3, u5[26] = gt3 ^ ~mt2 & lt3, u5[27] = je ^ ~At2 & Le2, u5[36] = Ge ^ ~Et2 & Qe2, u5[37] = Mt2 ^ ~Ye & bt2, u5[46] = Ee2 ^ ~Ie2 & St2, u5[47] = Se ^ ~Ne & It2, u5[8] = nt3 ^ ~Te2 & tt3, u5[9] = ke ^ ~$4 & Fe, u5[18] = He ^ ~ft2 & qe, u5[19] = ct3 ^ ~ot3 & st3, u5[28] = mt2 ^ ~lt3 & dt3, u5[29] = At2 ^ ~Le2 & pt3, u5[38] = Et2 ^ ~Qe2 & yt3, u5[39] = Ye ^ ~bt2 & Je, u5[48] = Ie2 ^ ~St2 & Ve2, u5[49] = Ne ^ ~It2 & Nt2, u5[0] ^= C6[B3], u5[1] ^= C6[B3 + 1];
    };
    if (p5) e4.exports = f6;
    else for (c8 = 0; c8 < a6.length; ++c8) n6[a6[c8]] = f6[a6[c8]];
  })();
})(Un);
var Is = Un.exports;
var Ns = "logger/5.7.0";
var kn = false;
var qn = false;
var Dr = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
var Kn = Dr.default;
var xi = null;
function _s() {
  try {
    const e4 = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t3) => {
      try {
        if ("test".normalize(t3) !== "test") throw new Error("bad normalize");
      } catch {
        e4.push(t3);
      }
    }), e4.length) throw new Error("missing " + e4.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
  } catch (e4) {
    return e4.message;
  }
  return null;
}
var Hn = _s();
var Mi;
(function(e4) {
  e4.DEBUG = "DEBUG", e4.INFO = "INFO", e4.WARNING = "WARNING", e4.ERROR = "ERROR", e4.OFF = "OFF";
})(Mi || (Mi = {}));
var re;
(function(e4) {
  e4.UNKNOWN_ERROR = "UNKNOWN_ERROR", e4.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e4.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e4.NETWORK_ERROR = "NETWORK_ERROR", e4.SERVER_ERROR = "SERVER_ERROR", e4.TIMEOUT = "TIMEOUT", e4.BUFFER_OVERRUN = "BUFFER_OVERRUN", e4.NUMERIC_FAULT = "NUMERIC_FAULT", e4.MISSING_NEW = "MISSING_NEW", e4.INVALID_ARGUMENT = "INVALID_ARGUMENT", e4.MISSING_ARGUMENT = "MISSING_ARGUMENT", e4.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e4.CALL_EXCEPTION = "CALL_EXCEPTION", e4.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e4.NONCE_EXPIRED = "NONCE_EXPIRED", e4.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e4.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e4.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e4.ACTION_REJECTED = "ACTION_REJECTED";
})(re || (re = {}));
var Ln = "0123456789abcdef";
var z5 = class _z {
  constructor(t3) {
    Object.defineProperty(this, "version", { enumerable: true, value: t3, writable: false });
  }
  _log(t3, r5) {
    const i7 = t3.toLowerCase();
    Dr[i7] == null && this.throwArgumentError("invalid log level name", "logLevel", t3), !(Kn > Dr[i7]) && console.log.apply(console, r5);
  }
  debug(...t3) {
    this._log(_z.levels.DEBUG, t3);
  }
  info(...t3) {
    this._log(_z.levels.INFO, t3);
  }
  warn(...t3) {
    this._log(_z.levels.WARNING, t3);
  }
  makeError(t3, r5, i7) {
    if (qn) return this.makeError("censored error", r5, {});
    r5 || (r5 = _z.errors.UNKNOWN_ERROR), i7 || (i7 = {});
    const n6 = [];
    Object.keys(i7).forEach((A6) => {
      const v6 = i7[A6];
      try {
        if (v6 instanceof Uint8Array) {
          let w7 = "";
          for (let y8 = 0; y8 < v6.length; y8++) w7 += Ln[v6[y8] >> 4], w7 += Ln[v6[y8] & 15];
          n6.push(A6 + "=Uint8Array(0x" + w7 + ")");
        } else n6.push(A6 + "=" + JSON.stringify(v6));
      } catch {
        n6.push(A6 + "=" + JSON.stringify(i7[A6].toString()));
      }
    }), n6.push(`code=${r5}`), n6.push(`version=${this.version}`);
    const o6 = t3;
    let h7 = "";
    switch (r5) {
      case re.NUMERIC_FAULT: {
        h7 = "NUMERIC_FAULT";
        const A6 = t3;
        switch (A6) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            h7 += "-" + A6;
            break;
          case "negative-power":
          case "negative-width":
            h7 += "-unsupported";
            break;
          case "unbound-bitwise-result":
            h7 += "-unbound-result";
            break;
        }
        break;
      }
      case re.CALL_EXCEPTION:
      case re.INSUFFICIENT_FUNDS:
      case re.MISSING_NEW:
      case re.NONCE_EXPIRED:
      case re.REPLACEMENT_UNDERPRICED:
      case re.TRANSACTION_REPLACED:
      case re.UNPREDICTABLE_GAS_LIMIT:
        h7 = r5;
        break;
    }
    h7 && (t3 += " [ See: https://links.ethers.org/v5-errors-" + h7 + " ]"), n6.length && (t3 += " (" + n6.join(", ") + ")");
    const p5 = new Error(t3);
    return p5.reason = o6, p5.code = r5, Object.keys(i7).forEach(function(A6) {
      p5[A6] = i7[A6];
    }), p5;
  }
  throwError(t3, r5, i7) {
    throw this.makeError(t3, r5, i7);
  }
  throwArgumentError(t3, r5, i7) {
    return this.throwError(t3, _z.errors.INVALID_ARGUMENT, { argument: r5, value: i7 });
  }
  assert(t3, r5, i7, n6) {
    t3 || this.throwError(r5, i7, n6);
  }
  assertArgument(t3, r5, i7, n6) {
    t3 || this.throwArgumentError(r5, i7, n6);
  }
  checkNormalize(t3) {
    Hn && this.throwError("platform missing String.prototype.normalize", _z.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Hn });
  }
  checkSafeUint53(t3, r5) {
    typeof t3 == "number" && (r5 == null && (r5 = "value not safe"), (t3 < 0 || t3 >= 9007199254740991) && this.throwError(r5, _z.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t3 }), t3 % 1 && this.throwError(r5, _z.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t3 }));
  }
  checkArgumentCount(t3, r5, i7) {
    i7 ? i7 = ": " + i7 : i7 = "", t3 < r5 && this.throwError("missing argument" + i7, _z.errors.MISSING_ARGUMENT, { count: t3, expectedCount: r5 }), t3 > r5 && this.throwError("too many arguments" + i7, _z.errors.UNEXPECTED_ARGUMENT, { count: t3, expectedCount: r5 });
  }
  checkNew(t3, r5) {
    (t3 === Object || t3 == null) && this.throwError("missing new", _z.errors.MISSING_NEW, { name: r5.name });
  }
  checkAbstract(t3, r5) {
    t3 === r5 ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r5.name) + " directly; use a sub-class", _z.errors.UNSUPPORTED_OPERATION, { name: t3.name, operation: "new" }) : (t3 === Object || t3 == null) && this.throwError("missing new", _z.errors.MISSING_NEW, { name: r5.name });
  }
  static globalLogger() {
    return xi || (xi = new _z(Ns)), xi;
  }
  static setCensorship(t3, r5) {
    if (!t3 && r5 && this.globalLogger().throwError("cannot permanently disable censorship", _z.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), kn) {
      if (!t3) return;
      this.globalLogger().throwError("error censorship permanent", _z.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    qn = !!t3, kn = !!r5;
  }
  static setLogLevel(t3) {
    const r5 = Dr[t3.toLowerCase()];
    if (r5 == null) {
      _z.globalLogger().warn("invalid log level - " + t3);
      return;
    }
    Kn = r5;
  }
  static from(t3) {
    return new _z(t3);
  }
};
z5.errors = re, z5.levels = Mi;
var Bs = "bytes/5.7.0";
var Dt = new z5(Bs);
function zn(e4) {
  return !!e4.toHexString;
}
function ir(e4) {
  return e4.slice || (e4.slice = function() {
    const t3 = Array.prototype.slice.call(arguments);
    return ir(new Uint8Array(Array.prototype.slice.apply(e4, t3)));
  }), e4;
}
function Cs(e4) {
  return Jt(e4) && !(e4.length % 2) || nr(e4);
}
function jn(e4) {
  return typeof e4 == "number" && e4 == e4 && e4 % 1 === 0;
}
function nr(e4) {
  if (e4 == null) return false;
  if (e4.constructor === Uint8Array) return true;
  if (typeof e4 == "string" || !jn(e4.length) || e4.length < 0) return false;
  for (let t3 = 0; t3 < e4.length; t3++) {
    const r5 = e4[t3];
    if (!jn(r5) || r5 < 0 || r5 >= 256) return false;
  }
  return true;
}
function Ot(e4, t3) {
  if (t3 || (t3 = {}), typeof e4 == "number") {
    Dt.checkSafeUint53(e4, "invalid arrayify value");
    const r5 = [];
    for (; e4; ) r5.unshift(e4 & 255), e4 = parseInt(String(e4 / 256));
    return r5.length === 0 && r5.push(0), ir(new Uint8Array(r5));
  }
  if (t3.allowMissingPrefix && typeof e4 == "string" && e4.substring(0, 2) !== "0x" && (e4 = "0x" + e4), zn(e4) && (e4 = e4.toHexString()), Jt(e4)) {
    let r5 = e4.substring(2);
    r5.length % 2 && (t3.hexPad === "left" ? r5 = "0" + r5 : t3.hexPad === "right" ? r5 += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e4));
    const i7 = [];
    for (let n6 = 0; n6 < r5.length; n6 += 2) i7.push(parseInt(r5.substring(n6, n6 + 2), 16));
    return ir(new Uint8Array(i7));
  }
  return nr(e4) ? ir(new Uint8Array(e4)) : Dt.throwArgumentError("invalid arrayify value", "value", e4);
}
function Rs(e4) {
  const t3 = e4.map((n6) => Ot(n6)), r5 = t3.reduce((n6, o6) => n6 + o6.length, 0), i7 = new Uint8Array(r5);
  return t3.reduce((n6, o6) => (i7.set(o6, n6), n6 + o6.length), 0), ir(i7);
}
function Os(e4, t3) {
  e4 = Ot(e4), e4.length > t3 && Dt.throwArgumentError("value out of range", "value", arguments[0]);
  const r5 = new Uint8Array(t3);
  return r5.set(e4, t3 - e4.length), ir(r5);
}
function Jt(e4, t3) {
  return !(typeof e4 != "string" || !e4.match(/^0x[0-9A-Fa-f]*$/) || t3 && e4.length !== 2 + 2 * t3);
}
var Ei = "0123456789abcdef";
function Kt(e4, t3) {
  if (t3 || (t3 = {}), typeof e4 == "number") {
    Dt.checkSafeUint53(e4, "invalid hexlify value");
    let r5 = "";
    for (; e4; ) r5 = Ei[e4 & 15] + r5, e4 = Math.floor(e4 / 16);
    return r5.length ? (r5.length % 2 && (r5 = "0" + r5), "0x" + r5) : "0x00";
  }
  if (typeof e4 == "bigint") return e4 = e4.toString(16), e4.length % 2 ? "0x0" + e4 : "0x" + e4;
  if (t3.allowMissingPrefix && typeof e4 == "string" && e4.substring(0, 2) !== "0x" && (e4 = "0x" + e4), zn(e4)) return e4.toHexString();
  if (Jt(e4)) return e4.length % 2 && (t3.hexPad === "left" ? e4 = "0x0" + e4.substring(2) : t3.hexPad === "right" ? e4 += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e4)), e4.toLowerCase();
  if (nr(e4)) {
    let r5 = "0x";
    for (let i7 = 0; i7 < e4.length; i7++) {
      let n6 = e4[i7];
      r5 += Ei[(n6 & 240) >> 4] + Ei[n6 & 15];
    }
    return r5;
  }
  return Dt.throwArgumentError("invalid hexlify value", "value", e4);
}
function Ps(e4) {
  if (typeof e4 != "string") e4 = Kt(e4);
  else if (!Jt(e4) || e4.length % 2) return null;
  return (e4.length - 2) / 2;
}
function Qn(e4, t3, r5) {
  return typeof e4 != "string" ? e4 = Kt(e4) : (!Jt(e4) || e4.length % 2) && Dt.throwArgumentError("invalid hexData", "value", e4), t3 = 2 + 2 * t3, r5 != null ? "0x" + e4.substring(t3, 2 + 2 * r5) : "0x" + e4.substring(t3);
}
function oe(e4, t3) {
  for (typeof e4 != "string" ? e4 = Kt(e4) : Jt(e4) || Dt.throwArgumentError("invalid hex string", "value", e4), e4.length > 2 * t3 + 2 && Dt.throwArgumentError("value out of range", "value", arguments[1]); e4.length < 2 * t3 + 2; ) e4 = "0x0" + e4.substring(2);
  return e4;
}
function Jn(e4) {
  const t3 = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0, yParityAndS: "0x", compact: "0x" };
  if (Cs(e4)) {
    let r5 = Ot(e4);
    r5.length === 64 ? (t3.v = 27 + (r5[32] >> 7), r5[32] &= 127, t3.r = Kt(r5.slice(0, 32)), t3.s = Kt(r5.slice(32, 64))) : r5.length === 65 ? (t3.r = Kt(r5.slice(0, 32)), t3.s = Kt(r5.slice(32, 64)), t3.v = r5[64]) : Dt.throwArgumentError("invalid signature string", "signature", e4), t3.v < 27 && (t3.v === 0 || t3.v === 1 ? t3.v += 27 : Dt.throwArgumentError("signature invalid v byte", "signature", e4)), t3.recoveryParam = 1 - t3.v % 2, t3.recoveryParam && (r5[32] |= 128), t3._vs = Kt(r5.slice(32, 64));
  } else {
    if (t3.r = e4.r, t3.s = e4.s, t3.v = e4.v, t3.recoveryParam = e4.recoveryParam, t3._vs = e4._vs, t3._vs != null) {
      const n6 = Os(Ot(t3._vs), 32);
      t3._vs = Kt(n6);
      const o6 = n6[0] >= 128 ? 1 : 0;
      t3.recoveryParam == null ? t3.recoveryParam = o6 : t3.recoveryParam !== o6 && Dt.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e4), n6[0] &= 127;
      const h7 = Kt(n6);
      t3.s == null ? t3.s = h7 : t3.s !== h7 && Dt.throwArgumentError("signature v mismatch _vs", "signature", e4);
    }
    if (t3.recoveryParam == null) t3.v == null ? Dt.throwArgumentError("signature missing v and recoveryParam", "signature", e4) : t3.v === 0 || t3.v === 1 ? t3.recoveryParam = t3.v : t3.recoveryParam = 1 - t3.v % 2;
    else if (t3.v == null) t3.v = 27 + t3.recoveryParam;
    else {
      const n6 = t3.v === 0 || t3.v === 1 ? t3.v : 1 - t3.v % 2;
      t3.recoveryParam !== n6 && Dt.throwArgumentError("signature recoveryParam mismatch v", "signature", e4);
    }
    t3.r == null || !Jt(t3.r) ? Dt.throwArgumentError("signature missing or invalid r", "signature", e4) : t3.r = oe(t3.r, 32), t3.s == null || !Jt(t3.s) ? Dt.throwArgumentError("signature missing or invalid s", "signature", e4) : t3.s = oe(t3.s, 32);
    const r5 = Ot(t3.s);
    r5[0] >= 128 && Dt.throwArgumentError("signature s out of range", "signature", e4), t3.recoveryParam && (r5[0] |= 128);
    const i7 = Kt(r5);
    t3._vs && (Jt(t3._vs) || Dt.throwArgumentError("signature invalid _vs", "signature", e4), t3._vs = oe(t3._vs, 32)), t3._vs == null ? t3._vs = i7 : t3._vs !== i7 && Dt.throwArgumentError("signature _vs mismatch v and s", "signature", e4);
  }
  return t3.yParityAndS = t3._vs, t3.compact = t3.r + t3.yParityAndS.substring(2), t3;
}
function Si(e4) {
  return "0x" + Is.keccak_256(Ot(e4));
}
var Gn = { exports: {} };
var Ds = {};
var Ts = Object.freeze({ __proto__: null, default: Ds });
var Fs = Ss(Ts);
(function(e4) {
  (function(t3, r5) {
    function i7(b5, f6) {
      if (!b5) throw new Error(f6 || "Assertion failed");
    }
    function n6(b5, f6) {
      b5.super_ = f6;
      var a6 = function() {
      };
      a6.prototype = f6.prototype, b5.prototype = new a6(), b5.prototype.constructor = b5;
    }
    function o6(b5, f6, a6) {
      if (o6.isBN(b5)) return b5;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, b5 !== null && ((f6 === "le" || f6 === "be") && (a6 = f6, f6 = 10), this._init(b5 || 0, f6 || 10, a6 || "be"));
    }
    typeof t3 == "object" ? t3.exports = o6 : r5.BN = o6, o6.BN = o6, o6.wordSize = 26;
    var h7;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h7 = window.Buffer : h7 = Fs.Buffer;
    } catch {
    }
    o6.isBN = function(f6) {
      return f6 instanceof o6 ? true : f6 !== null && typeof f6 == "object" && f6.constructor.wordSize === o6.wordSize && Array.isArray(f6.words);
    }, o6.max = function(f6, a6) {
      return f6.cmp(a6) > 0 ? f6 : a6;
    }, o6.min = function(f6, a6) {
      return f6.cmp(a6) < 0 ? f6 : a6;
    }, o6.prototype._init = function(f6, a6, c8) {
      if (typeof f6 == "number") return this._initNumber(f6, a6, c8);
      if (typeof f6 == "object") return this._initArray(f6, a6, c8);
      a6 === "hex" && (a6 = 16), i7(a6 === (a6 | 0) && a6 >= 2 && a6 <= 36), f6 = f6.toString().replace(/\s+/g, "");
      var d5 = 0;
      f6[0] === "-" && (d5++, this.negative = 1), d5 < f6.length && (a6 === 16 ? this._parseHex(f6, d5, c8) : (this._parseBase(f6, a6, d5), c8 === "le" && this._initArray(this.toArray(), a6, c8)));
    }, o6.prototype._initNumber = function(f6, a6, c8) {
      f6 < 0 && (this.negative = 1, f6 = -f6), f6 < 67108864 ? (this.words = [f6 & 67108863], this.length = 1) : f6 < 4503599627370496 ? (this.words = [f6 & 67108863, f6 / 67108864 & 67108863], this.length = 2) : (i7(f6 < 9007199254740992), this.words = [f6 & 67108863, f6 / 67108864 & 67108863, 1], this.length = 3), c8 === "le" && this._initArray(this.toArray(), a6, c8);
    }, o6.prototype._initArray = function(f6, a6, c8) {
      if (i7(typeof f6.length == "number"), f6.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f6.length / 3), this.words = new Array(this.length);
      for (var d5 = 0; d5 < this.length; d5++) this.words[d5] = 0;
      var m4, x7, M5 = 0;
      if (c8 === "be") for (d5 = f6.length - 1, m4 = 0; d5 >= 0; d5 -= 3) x7 = f6[d5] | f6[d5 - 1] << 8 | f6[d5 - 2] << 16, this.words[m4] |= x7 << M5 & 67108863, this.words[m4 + 1] = x7 >>> 26 - M5 & 67108863, M5 += 24, M5 >= 26 && (M5 -= 26, m4++);
      else if (c8 === "le") for (d5 = 0, m4 = 0; d5 < f6.length; d5 += 3) x7 = f6[d5] | f6[d5 + 1] << 8 | f6[d5 + 2] << 16, this.words[m4] |= x7 << M5 & 67108863, this.words[m4 + 1] = x7 >>> 26 - M5 & 67108863, M5 += 24, M5 >= 26 && (M5 -= 26, m4++);
      return this._strip();
    };
    function p5(b5, f6) {
      var a6 = b5.charCodeAt(f6);
      if (a6 >= 48 && a6 <= 57) return a6 - 48;
      if (a6 >= 65 && a6 <= 70) return a6 - 55;
      if (a6 >= 97 && a6 <= 102) return a6 - 87;
      i7(false, "Invalid character in " + b5);
    }
    function A6(b5, f6, a6) {
      var c8 = p5(b5, a6);
      return a6 - 1 >= f6 && (c8 |= p5(b5, a6 - 1) << 4), c8;
    }
    o6.prototype._parseHex = function(f6, a6, c8) {
      this.length = Math.ceil((f6.length - a6) / 6), this.words = new Array(this.length);
      for (var d5 = 0; d5 < this.length; d5++) this.words[d5] = 0;
      var m4 = 0, x7 = 0, M5;
      if (c8 === "be") for (d5 = f6.length - 1; d5 >= a6; d5 -= 2) M5 = A6(f6, a6, d5) << m4, this.words[x7] |= M5 & 67108863, m4 >= 18 ? (m4 -= 18, x7 += 1, this.words[x7] |= M5 >>> 26) : m4 += 8;
      else {
        var l6 = f6.length - a6;
        for (d5 = l6 % 2 === 0 ? a6 + 1 : a6; d5 < f6.length; d5 += 2) M5 = A6(f6, a6, d5) << m4, this.words[x7] |= M5 & 67108863, m4 >= 18 ? (m4 -= 18, x7 += 1, this.words[x7] |= M5 >>> 26) : m4 += 8;
      }
      this._strip();
    };
    function v6(b5, f6, a6, c8) {
      for (var d5 = 0, m4 = 0, x7 = Math.min(b5.length, a6), M5 = f6; M5 < x7; M5++) {
        var l6 = b5.charCodeAt(M5) - 48;
        d5 *= c8, l6 >= 49 ? m4 = l6 - 49 + 10 : l6 >= 17 ? m4 = l6 - 17 + 10 : m4 = l6, i7(l6 >= 0 && m4 < c8, "Invalid character"), d5 += m4;
      }
      return d5;
    }
    o6.prototype._parseBase = function(f6, a6, c8) {
      this.words = [0], this.length = 1;
      for (var d5 = 0, m4 = 1; m4 <= 67108863; m4 *= a6) d5++;
      d5--, m4 = m4 / a6 | 0;
      for (var x7 = f6.length - c8, M5 = x7 % d5, l6 = Math.min(x7, x7 - M5) + c8, s5 = 0, g5 = c8; g5 < l6; g5 += d5) s5 = v6(f6, g5, g5 + d5, a6), this.imuln(m4), this.words[0] + s5 < 67108864 ? this.words[0] += s5 : this._iaddn(s5);
      if (M5 !== 0) {
        var k5 = 1;
        for (s5 = v6(f6, g5, f6.length, a6), g5 = 0; g5 < M5; g5++) k5 *= a6;
        this.imuln(k5), this.words[0] + s5 < 67108864 ? this.words[0] += s5 : this._iaddn(s5);
      }
      this._strip();
    }, o6.prototype.copy = function(f6) {
      f6.words = new Array(this.length);
      for (var a6 = 0; a6 < this.length; a6++) f6.words[a6] = this.words[a6];
      f6.length = this.length, f6.negative = this.negative, f6.red = this.red;
    };
    function w7(b5, f6) {
      b5.words = f6.words, b5.length = f6.length, b5.negative = f6.negative, b5.red = f6.red;
    }
    if (o6.prototype._move = function(f6) {
      w7(f6, this);
    }, o6.prototype.clone = function() {
      var f6 = new o6(null);
      return this.copy(f6), f6;
    }, o6.prototype._expand = function(f6) {
      for (; this.length < f6; ) this.words[this.length++] = 0;
      return this;
    }, o6.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
      return this._normSign();
    }, o6.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
      o6.prototype[Symbol.for("nodejs.util.inspect.custom")] = y8;
    } catch {
      o6.prototype.inspect = y8;
    }
    else o6.prototype.inspect = y8;
    function y8() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S5 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], N10 = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], I6 = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o6.prototype.toString = function(f6, a6) {
      f6 = f6 || 10, a6 = a6 | 0 || 1;
      var c8;
      if (f6 === 16 || f6 === "hex") {
        c8 = "";
        for (var d5 = 0, m4 = 0, x7 = 0; x7 < this.length; x7++) {
          var M5 = this.words[x7], l6 = ((M5 << d5 | m4) & 16777215).toString(16);
          m4 = M5 >>> 24 - d5 & 16777215, d5 += 2, d5 >= 26 && (d5 -= 26, x7--), m4 !== 0 || x7 !== this.length - 1 ? c8 = S5[6 - l6.length] + l6 + c8 : c8 = l6 + c8;
        }
        for (m4 !== 0 && (c8 = m4.toString(16) + c8); c8.length % a6 !== 0; ) c8 = "0" + c8;
        return this.negative !== 0 && (c8 = "-" + c8), c8;
      }
      if (f6 === (f6 | 0) && f6 >= 2 && f6 <= 36) {
        var s5 = N10[f6], g5 = I6[f6];
        c8 = "";
        var k5 = this.clone();
        for (k5.negative = 0; !k5.isZero(); ) {
          var u5 = k5.modrn(g5).toString(f6);
          k5 = k5.idivn(g5), k5.isZero() ? c8 = u5 + c8 : c8 = S5[s5 - u5.length] + u5 + c8;
        }
        for (this.isZero() && (c8 = "0" + c8); c8.length % a6 !== 0; ) c8 = "0" + c8;
        return this.negative !== 0 && (c8 = "-" + c8), c8;
      }
      i7(false, "Base should be between 2 and 36");
    }, o6.prototype.toNumber = function() {
      var f6 = this.words[0];
      return this.length === 2 ? f6 += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f6 += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i7(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f6 : f6;
    }, o6.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, h7 && (o6.prototype.toBuffer = function(f6, a6) {
      return this.toArrayLike(h7, f6, a6);
    }), o6.prototype.toArray = function(f6, a6) {
      return this.toArrayLike(Array, f6, a6);
    };
    var C6 = function(f6, a6) {
      return f6.allocUnsafe ? f6.allocUnsafe(a6) : new f6(a6);
    };
    o6.prototype.toArrayLike = function(f6, a6, c8) {
      this._strip();
      var d5 = this.byteLength(), m4 = c8 || Math.max(1, d5);
      i7(d5 <= m4, "byte array longer than desired length"), i7(m4 > 0, "Requested array length <= 0");
      var x7 = C6(f6, m4), M5 = a6 === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M5](x7, d5), x7;
    }, o6.prototype._toArrayLikeLE = function(f6, a6) {
      for (var c8 = 0, d5 = 0, m4 = 0, x7 = 0; m4 < this.length; m4++) {
        var M5 = this.words[m4] << x7 | d5;
        f6[c8++] = M5 & 255, c8 < f6.length && (f6[c8++] = M5 >> 8 & 255), c8 < f6.length && (f6[c8++] = M5 >> 16 & 255), x7 === 6 ? (c8 < f6.length && (f6[c8++] = M5 >> 24 & 255), d5 = 0, x7 = 0) : (d5 = M5 >>> 24, x7 += 2);
      }
      if (c8 < f6.length) for (f6[c8++] = d5; c8 < f6.length; ) f6[c8++] = 0;
    }, o6.prototype._toArrayLikeBE = function(f6, a6) {
      for (var c8 = f6.length - 1, d5 = 0, m4 = 0, x7 = 0; m4 < this.length; m4++) {
        var M5 = this.words[m4] << x7 | d5;
        f6[c8--] = M5 & 255, c8 >= 0 && (f6[c8--] = M5 >> 8 & 255), c8 >= 0 && (f6[c8--] = M5 >> 16 & 255), x7 === 6 ? (c8 >= 0 && (f6[c8--] = M5 >> 24 & 255), d5 = 0, x7 = 0) : (d5 = M5 >>> 24, x7 += 2);
      }
      if (c8 >= 0) for (f6[c8--] = d5; c8 >= 0; ) f6[c8--] = 0;
    }, Math.clz32 ? o6.prototype._countBits = function(f6) {
      return 32 - Math.clz32(f6);
    } : o6.prototype._countBits = function(f6) {
      var a6 = f6, c8 = 0;
      return a6 >= 4096 && (c8 += 13, a6 >>>= 13), a6 >= 64 && (c8 += 7, a6 >>>= 7), a6 >= 8 && (c8 += 4, a6 >>>= 4), a6 >= 2 && (c8 += 2, a6 >>>= 2), c8 + a6;
    }, o6.prototype._zeroBits = function(f6) {
      if (f6 === 0) return 26;
      var a6 = f6, c8 = 0;
      return a6 & 8191 || (c8 += 13, a6 >>>= 13), a6 & 127 || (c8 += 7, a6 >>>= 7), a6 & 15 || (c8 += 4, a6 >>>= 4), a6 & 3 || (c8 += 2, a6 >>>= 2), a6 & 1 || c8++, c8;
    }, o6.prototype.bitLength = function() {
      var f6 = this.words[this.length - 1], a6 = this._countBits(f6);
      return (this.length - 1) * 26 + a6;
    };
    function T6(b5) {
      for (var f6 = new Array(b5.bitLength()), a6 = 0; a6 < f6.length; a6++) {
        var c8 = a6 / 26 | 0, d5 = a6 % 26;
        f6[a6] = b5.words[c8] >>> d5 & 1;
      }
      return f6;
    }
    o6.prototype.zeroBits = function() {
      if (this.isZero()) return 0;
      for (var f6 = 0, a6 = 0; a6 < this.length; a6++) {
        var c8 = this._zeroBits(this.words[a6]);
        if (f6 += c8, c8 !== 26) break;
      }
      return f6;
    }, o6.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o6.prototype.toTwos = function(f6) {
      return this.negative !== 0 ? this.abs().inotn(f6).iaddn(1) : this.clone();
    }, o6.prototype.fromTwos = function(f6) {
      return this.testn(f6 - 1) ? this.notn(f6).iaddn(1).ineg() : this.clone();
    }, o6.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o6.prototype.neg = function() {
      return this.clone().ineg();
    }, o6.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o6.prototype.iuor = function(f6) {
      for (; this.length < f6.length; ) this.words[this.length++] = 0;
      for (var a6 = 0; a6 < f6.length; a6++) this.words[a6] = this.words[a6] | f6.words[a6];
      return this._strip();
    }, o6.prototype.ior = function(f6) {
      return i7((this.negative | f6.negative) === 0), this.iuor(f6);
    }, o6.prototype.or = function(f6) {
      return this.length > f6.length ? this.clone().ior(f6) : f6.clone().ior(this);
    }, o6.prototype.uor = function(f6) {
      return this.length > f6.length ? this.clone().iuor(f6) : f6.clone().iuor(this);
    }, o6.prototype.iuand = function(f6) {
      var a6;
      this.length > f6.length ? a6 = f6 : a6 = this;
      for (var c8 = 0; c8 < a6.length; c8++) this.words[c8] = this.words[c8] & f6.words[c8];
      return this.length = a6.length, this._strip();
    }, o6.prototype.iand = function(f6) {
      return i7((this.negative | f6.negative) === 0), this.iuand(f6);
    }, o6.prototype.and = function(f6) {
      return this.length > f6.length ? this.clone().iand(f6) : f6.clone().iand(this);
    }, o6.prototype.uand = function(f6) {
      return this.length > f6.length ? this.clone().iuand(f6) : f6.clone().iuand(this);
    }, o6.prototype.iuxor = function(f6) {
      var a6, c8;
      this.length > f6.length ? (a6 = this, c8 = f6) : (a6 = f6, c8 = this);
      for (var d5 = 0; d5 < c8.length; d5++) this.words[d5] = a6.words[d5] ^ c8.words[d5];
      if (this !== a6) for (; d5 < a6.length; d5++) this.words[d5] = a6.words[d5];
      return this.length = a6.length, this._strip();
    }, o6.prototype.ixor = function(f6) {
      return i7((this.negative | f6.negative) === 0), this.iuxor(f6);
    }, o6.prototype.xor = function(f6) {
      return this.length > f6.length ? this.clone().ixor(f6) : f6.clone().ixor(this);
    }, o6.prototype.uxor = function(f6) {
      return this.length > f6.length ? this.clone().iuxor(f6) : f6.clone().iuxor(this);
    }, o6.prototype.inotn = function(f6) {
      i7(typeof f6 == "number" && f6 >= 0);
      var a6 = Math.ceil(f6 / 26) | 0, c8 = f6 % 26;
      this._expand(a6), c8 > 0 && a6--;
      for (var d5 = 0; d5 < a6; d5++) this.words[d5] = ~this.words[d5] & 67108863;
      return c8 > 0 && (this.words[d5] = ~this.words[d5] & 67108863 >> 26 - c8), this._strip();
    }, o6.prototype.notn = function(f6) {
      return this.clone().inotn(f6);
    }, o6.prototype.setn = function(f6, a6) {
      i7(typeof f6 == "number" && f6 >= 0);
      var c8 = f6 / 26 | 0, d5 = f6 % 26;
      return this._expand(c8 + 1), a6 ? this.words[c8] = this.words[c8] | 1 << d5 : this.words[c8] = this.words[c8] & ~(1 << d5), this._strip();
    }, o6.prototype.iadd = function(f6) {
      var a6;
      if (this.negative !== 0 && f6.negative === 0) return this.negative = 0, a6 = this.isub(f6), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f6.negative !== 0) return f6.negative = 0, a6 = this.isub(f6), f6.negative = 1, a6._normSign();
      var c8, d5;
      this.length > f6.length ? (c8 = this, d5 = f6) : (c8 = f6, d5 = this);
      for (var m4 = 0, x7 = 0; x7 < d5.length; x7++) a6 = (c8.words[x7] | 0) + (d5.words[x7] | 0) + m4, this.words[x7] = a6 & 67108863, m4 = a6 >>> 26;
      for (; m4 !== 0 && x7 < c8.length; x7++) a6 = (c8.words[x7] | 0) + m4, this.words[x7] = a6 & 67108863, m4 = a6 >>> 26;
      if (this.length = c8.length, m4 !== 0) this.words[this.length] = m4, this.length++;
      else if (c8 !== this) for (; x7 < c8.length; x7++) this.words[x7] = c8.words[x7];
      return this;
    }, o6.prototype.add = function(f6) {
      var a6;
      return f6.negative !== 0 && this.negative === 0 ? (f6.negative = 0, a6 = this.sub(f6), f6.negative ^= 1, a6) : f6.negative === 0 && this.negative !== 0 ? (this.negative = 0, a6 = f6.sub(this), this.negative = 1, a6) : this.length > f6.length ? this.clone().iadd(f6) : f6.clone().iadd(this);
    }, o6.prototype.isub = function(f6) {
      if (f6.negative !== 0) {
        f6.negative = 0;
        var a6 = this.iadd(f6);
        return f6.negative = 1, a6._normSign();
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(f6), this.negative = 1, this._normSign();
      var c8 = this.cmp(f6);
      if (c8 === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d5, m4;
      c8 > 0 ? (d5 = this, m4 = f6) : (d5 = f6, m4 = this);
      for (var x7 = 0, M5 = 0; M5 < m4.length; M5++) a6 = (d5.words[M5] | 0) - (m4.words[M5] | 0) + x7, x7 = a6 >> 26, this.words[M5] = a6 & 67108863;
      for (; x7 !== 0 && M5 < d5.length; M5++) a6 = (d5.words[M5] | 0) + x7, x7 = a6 >> 26, this.words[M5] = a6 & 67108863;
      if (x7 === 0 && M5 < d5.length && d5 !== this) for (; M5 < d5.length; M5++) this.words[M5] = d5.words[M5];
      return this.length = Math.max(this.length, M5), d5 !== this && (this.negative = 1), this._strip();
    }, o6.prototype.sub = function(f6) {
      return this.clone().isub(f6);
    };
    function U4(b5, f6, a6) {
      a6.negative = f6.negative ^ b5.negative;
      var c8 = b5.length + f6.length | 0;
      a6.length = c8, c8 = c8 - 1 | 0;
      var d5 = b5.words[0] | 0, m4 = f6.words[0] | 0, x7 = d5 * m4, M5 = x7 & 67108863, l6 = x7 / 67108864 | 0;
      a6.words[0] = M5;
      for (var s5 = 1; s5 < c8; s5++) {
        for (var g5 = l6 >>> 26, k5 = l6 & 67108863, u5 = Math.min(s5, f6.length - 1), E6 = Math.max(0, s5 - b5.length + 1); E6 <= u5; E6++) {
          var _6 = s5 - E6 | 0;
          d5 = b5.words[_6] | 0, m4 = f6.words[E6] | 0, x7 = d5 * m4 + k5, g5 += x7 / 67108864 | 0, k5 = x7 & 67108863;
        }
        a6.words[s5] = k5 | 0, l6 = g5 | 0;
      }
      return l6 !== 0 ? a6.words[s5] = l6 | 0 : a6.length--, a6._strip();
    }
    var J2 = function(f6, a6, c8) {
      var d5 = f6.words, m4 = a6.words, x7 = c8.words, M5 = 0, l6, s5, g5, k5 = d5[0] | 0, u5 = k5 & 8191, E6 = k5 >>> 13, _6 = d5[1] | 0, B3 = _6 & 8191, R3 = _6 >>> 13, F4 = d5[2] | 0, P4 = F4 & 8191, O5 = F4 >>> 13, Ct2 = d5[3] | 0, D5 = Ct2 & 8191, q4 = Ct2 >>> 13, De2 = d5[4] | 0, X3 = De2 & 8191, Z3 = De2 >>> 13, Te2 = d5[5] | 0, $4 = Te2 & 8191, tt3 = Te2 >>> 13, Fe = d5[6] | 0, et3 = Fe & 8191, rt3 = Fe >>> 13, Ue = d5[7] | 0, it3 = Ue & 8191, nt3 = Ue >>> 13, ke = d5[8] | 0, ft2 = ke & 8191, ot3 = ke >>> 13, qe = d5[9] | 0, st3 = qe & 8191, at3 = qe >>> 13, Ke = m4[0] | 0, ut3 = Ke & 8191, ht3 = Ke >>> 13, He = m4[1] | 0, ct3 = He & 8191, lt3 = He >>> 13, Le2 = m4[2] | 0, dt3 = Le2 & 8191, pt3 = Le2 >>> 13, ze = m4[3] | 0, vt2 = ze & 8191, gt3 = ze >>> 13, je = m4[4] | 0, mt2 = je & 8191, At2 = je >>> 13, Qe2 = m4[5] | 0, bt2 = Qe2 & 8191, yt3 = Qe2 >>> 13, Je = m4[6] | 0, wt2 = Je & 8191, xt2 = Je >>> 13, Ge = m4[7] | 0, Mt2 = Ge & 8191, Et2 = Ge >>> 13, Ye = m4[8] | 0, St2 = Ye & 8191, It2 = Ye >>> 13, Ve2 = m4[9] | 0, Nt2 = Ve2 & 8191, _t2 = Ve2 >>> 13;
      c8.negative = f6.negative ^ a6.negative, c8.length = 19, l6 = Math.imul(u5, ut3), s5 = Math.imul(u5, ht3), s5 = s5 + Math.imul(E6, ut3) | 0, g5 = Math.imul(E6, ht3);
      var Me = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, l6 = Math.imul(B3, ut3), s5 = Math.imul(B3, ht3), s5 = s5 + Math.imul(R3, ut3) | 0, g5 = Math.imul(R3, ht3), l6 = l6 + Math.imul(u5, ct3) | 0, s5 = s5 + Math.imul(u5, lt3) | 0, s5 = s5 + Math.imul(E6, ct3) | 0, g5 = g5 + Math.imul(E6, lt3) | 0;
      var Ee2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (Ee2 >>> 26) | 0, Ee2 &= 67108863, l6 = Math.imul(P4, ut3), s5 = Math.imul(P4, ht3), s5 = s5 + Math.imul(O5, ut3) | 0, g5 = Math.imul(O5, ht3), l6 = l6 + Math.imul(B3, ct3) | 0, s5 = s5 + Math.imul(B3, lt3) | 0, s5 = s5 + Math.imul(R3, ct3) | 0, g5 = g5 + Math.imul(R3, lt3) | 0, l6 = l6 + Math.imul(u5, dt3) | 0, s5 = s5 + Math.imul(u5, pt3) | 0, s5 = s5 + Math.imul(E6, dt3) | 0, g5 = g5 + Math.imul(E6, pt3) | 0;
      var Se = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, l6 = Math.imul(D5, ut3), s5 = Math.imul(D5, ht3), s5 = s5 + Math.imul(q4, ut3) | 0, g5 = Math.imul(q4, ht3), l6 = l6 + Math.imul(P4, ct3) | 0, s5 = s5 + Math.imul(P4, lt3) | 0, s5 = s5 + Math.imul(O5, ct3) | 0, g5 = g5 + Math.imul(O5, lt3) | 0, l6 = l6 + Math.imul(B3, dt3) | 0, s5 = s5 + Math.imul(B3, pt3) | 0, s5 = s5 + Math.imul(R3, dt3) | 0, g5 = g5 + Math.imul(R3, pt3) | 0, l6 = l6 + Math.imul(u5, vt2) | 0, s5 = s5 + Math.imul(u5, gt3) | 0, s5 = s5 + Math.imul(E6, vt2) | 0, g5 = g5 + Math.imul(E6, gt3) | 0;
      var Ie2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (Ie2 >>> 26) | 0, Ie2 &= 67108863, l6 = Math.imul(X3, ut3), s5 = Math.imul(X3, ht3), s5 = s5 + Math.imul(Z3, ut3) | 0, g5 = Math.imul(Z3, ht3), l6 = l6 + Math.imul(D5, ct3) | 0, s5 = s5 + Math.imul(D5, lt3) | 0, s5 = s5 + Math.imul(q4, ct3) | 0, g5 = g5 + Math.imul(q4, lt3) | 0, l6 = l6 + Math.imul(P4, dt3) | 0, s5 = s5 + Math.imul(P4, pt3) | 0, s5 = s5 + Math.imul(O5, dt3) | 0, g5 = g5 + Math.imul(O5, pt3) | 0, l6 = l6 + Math.imul(B3, vt2) | 0, s5 = s5 + Math.imul(B3, gt3) | 0, s5 = s5 + Math.imul(R3, vt2) | 0, g5 = g5 + Math.imul(R3, gt3) | 0, l6 = l6 + Math.imul(u5, mt2) | 0, s5 = s5 + Math.imul(u5, At2) | 0, s5 = s5 + Math.imul(E6, mt2) | 0, g5 = g5 + Math.imul(E6, At2) | 0;
      var Ne = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, l6 = Math.imul($4, ut3), s5 = Math.imul($4, ht3), s5 = s5 + Math.imul(tt3, ut3) | 0, g5 = Math.imul(tt3, ht3), l6 = l6 + Math.imul(X3, ct3) | 0, s5 = s5 + Math.imul(X3, lt3) | 0, s5 = s5 + Math.imul(Z3, ct3) | 0, g5 = g5 + Math.imul(Z3, lt3) | 0, l6 = l6 + Math.imul(D5, dt3) | 0, s5 = s5 + Math.imul(D5, pt3) | 0, s5 = s5 + Math.imul(q4, dt3) | 0, g5 = g5 + Math.imul(q4, pt3) | 0, l6 = l6 + Math.imul(P4, vt2) | 0, s5 = s5 + Math.imul(P4, gt3) | 0, s5 = s5 + Math.imul(O5, vt2) | 0, g5 = g5 + Math.imul(O5, gt3) | 0, l6 = l6 + Math.imul(B3, mt2) | 0, s5 = s5 + Math.imul(B3, At2) | 0, s5 = s5 + Math.imul(R3, mt2) | 0, g5 = g5 + Math.imul(R3, At2) | 0, l6 = l6 + Math.imul(u5, bt2) | 0, s5 = s5 + Math.imul(u5, yt3) | 0, s5 = s5 + Math.imul(E6, bt2) | 0, g5 = g5 + Math.imul(E6, yt3) | 0;
      var $r2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + ($r2 >>> 26) | 0, $r2 &= 67108863, l6 = Math.imul(et3, ut3), s5 = Math.imul(et3, ht3), s5 = s5 + Math.imul(rt3, ut3) | 0, g5 = Math.imul(rt3, ht3), l6 = l6 + Math.imul($4, ct3) | 0, s5 = s5 + Math.imul($4, lt3) | 0, s5 = s5 + Math.imul(tt3, ct3) | 0, g5 = g5 + Math.imul(tt3, lt3) | 0, l6 = l6 + Math.imul(X3, dt3) | 0, s5 = s5 + Math.imul(X3, pt3) | 0, s5 = s5 + Math.imul(Z3, dt3) | 0, g5 = g5 + Math.imul(Z3, pt3) | 0, l6 = l6 + Math.imul(D5, vt2) | 0, s5 = s5 + Math.imul(D5, gt3) | 0, s5 = s5 + Math.imul(q4, vt2) | 0, g5 = g5 + Math.imul(q4, gt3) | 0, l6 = l6 + Math.imul(P4, mt2) | 0, s5 = s5 + Math.imul(P4, At2) | 0, s5 = s5 + Math.imul(O5, mt2) | 0, g5 = g5 + Math.imul(O5, At2) | 0, l6 = l6 + Math.imul(B3, bt2) | 0, s5 = s5 + Math.imul(B3, yt3) | 0, s5 = s5 + Math.imul(R3, bt2) | 0, g5 = g5 + Math.imul(R3, yt3) | 0, l6 = l6 + Math.imul(u5, wt2) | 0, s5 = s5 + Math.imul(u5, xt2) | 0, s5 = s5 + Math.imul(E6, wt2) | 0, g5 = g5 + Math.imul(E6, xt2) | 0;
      var ti2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (ti2 >>> 26) | 0, ti2 &= 67108863, l6 = Math.imul(it3, ut3), s5 = Math.imul(it3, ht3), s5 = s5 + Math.imul(nt3, ut3) | 0, g5 = Math.imul(nt3, ht3), l6 = l6 + Math.imul(et3, ct3) | 0, s5 = s5 + Math.imul(et3, lt3) | 0, s5 = s5 + Math.imul(rt3, ct3) | 0, g5 = g5 + Math.imul(rt3, lt3) | 0, l6 = l6 + Math.imul($4, dt3) | 0, s5 = s5 + Math.imul($4, pt3) | 0, s5 = s5 + Math.imul(tt3, dt3) | 0, g5 = g5 + Math.imul(tt3, pt3) | 0, l6 = l6 + Math.imul(X3, vt2) | 0, s5 = s5 + Math.imul(X3, gt3) | 0, s5 = s5 + Math.imul(Z3, vt2) | 0, g5 = g5 + Math.imul(Z3, gt3) | 0, l6 = l6 + Math.imul(D5, mt2) | 0, s5 = s5 + Math.imul(D5, At2) | 0, s5 = s5 + Math.imul(q4, mt2) | 0, g5 = g5 + Math.imul(q4, At2) | 0, l6 = l6 + Math.imul(P4, bt2) | 0, s5 = s5 + Math.imul(P4, yt3) | 0, s5 = s5 + Math.imul(O5, bt2) | 0, g5 = g5 + Math.imul(O5, yt3) | 0, l6 = l6 + Math.imul(B3, wt2) | 0, s5 = s5 + Math.imul(B3, xt2) | 0, s5 = s5 + Math.imul(R3, wt2) | 0, g5 = g5 + Math.imul(R3, xt2) | 0, l6 = l6 + Math.imul(u5, Mt2) | 0, s5 = s5 + Math.imul(u5, Et2) | 0, s5 = s5 + Math.imul(E6, Mt2) | 0, g5 = g5 + Math.imul(E6, Et2) | 0;
      var ei2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (ei2 >>> 26) | 0, ei2 &= 67108863, l6 = Math.imul(ft2, ut3), s5 = Math.imul(ft2, ht3), s5 = s5 + Math.imul(ot3, ut3) | 0, g5 = Math.imul(ot3, ht3), l6 = l6 + Math.imul(it3, ct3) | 0, s5 = s5 + Math.imul(it3, lt3) | 0, s5 = s5 + Math.imul(nt3, ct3) | 0, g5 = g5 + Math.imul(nt3, lt3) | 0, l6 = l6 + Math.imul(et3, dt3) | 0, s5 = s5 + Math.imul(et3, pt3) | 0, s5 = s5 + Math.imul(rt3, dt3) | 0, g5 = g5 + Math.imul(rt3, pt3) | 0, l6 = l6 + Math.imul($4, vt2) | 0, s5 = s5 + Math.imul($4, gt3) | 0, s5 = s5 + Math.imul(tt3, vt2) | 0, g5 = g5 + Math.imul(tt3, gt3) | 0, l6 = l6 + Math.imul(X3, mt2) | 0, s5 = s5 + Math.imul(X3, At2) | 0, s5 = s5 + Math.imul(Z3, mt2) | 0, g5 = g5 + Math.imul(Z3, At2) | 0, l6 = l6 + Math.imul(D5, bt2) | 0, s5 = s5 + Math.imul(D5, yt3) | 0, s5 = s5 + Math.imul(q4, bt2) | 0, g5 = g5 + Math.imul(q4, yt3) | 0, l6 = l6 + Math.imul(P4, wt2) | 0, s5 = s5 + Math.imul(P4, xt2) | 0, s5 = s5 + Math.imul(O5, wt2) | 0, g5 = g5 + Math.imul(O5, xt2) | 0, l6 = l6 + Math.imul(B3, Mt2) | 0, s5 = s5 + Math.imul(B3, Et2) | 0, s5 = s5 + Math.imul(R3, Mt2) | 0, g5 = g5 + Math.imul(R3, Et2) | 0, l6 = l6 + Math.imul(u5, St2) | 0, s5 = s5 + Math.imul(u5, It2) | 0, s5 = s5 + Math.imul(E6, St2) | 0, g5 = g5 + Math.imul(E6, It2) | 0;
      var ri2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (ri2 >>> 26) | 0, ri2 &= 67108863, l6 = Math.imul(st3, ut3), s5 = Math.imul(st3, ht3), s5 = s5 + Math.imul(at3, ut3) | 0, g5 = Math.imul(at3, ht3), l6 = l6 + Math.imul(ft2, ct3) | 0, s5 = s5 + Math.imul(ft2, lt3) | 0, s5 = s5 + Math.imul(ot3, ct3) | 0, g5 = g5 + Math.imul(ot3, lt3) | 0, l6 = l6 + Math.imul(it3, dt3) | 0, s5 = s5 + Math.imul(it3, pt3) | 0, s5 = s5 + Math.imul(nt3, dt3) | 0, g5 = g5 + Math.imul(nt3, pt3) | 0, l6 = l6 + Math.imul(et3, vt2) | 0, s5 = s5 + Math.imul(et3, gt3) | 0, s5 = s5 + Math.imul(rt3, vt2) | 0, g5 = g5 + Math.imul(rt3, gt3) | 0, l6 = l6 + Math.imul($4, mt2) | 0, s5 = s5 + Math.imul($4, At2) | 0, s5 = s5 + Math.imul(tt3, mt2) | 0, g5 = g5 + Math.imul(tt3, At2) | 0, l6 = l6 + Math.imul(X3, bt2) | 0, s5 = s5 + Math.imul(X3, yt3) | 0, s5 = s5 + Math.imul(Z3, bt2) | 0, g5 = g5 + Math.imul(Z3, yt3) | 0, l6 = l6 + Math.imul(D5, wt2) | 0, s5 = s5 + Math.imul(D5, xt2) | 0, s5 = s5 + Math.imul(q4, wt2) | 0, g5 = g5 + Math.imul(q4, xt2) | 0, l6 = l6 + Math.imul(P4, Mt2) | 0, s5 = s5 + Math.imul(P4, Et2) | 0, s5 = s5 + Math.imul(O5, Mt2) | 0, g5 = g5 + Math.imul(O5, Et2) | 0, l6 = l6 + Math.imul(B3, St2) | 0, s5 = s5 + Math.imul(B3, It2) | 0, s5 = s5 + Math.imul(R3, St2) | 0, g5 = g5 + Math.imul(R3, It2) | 0, l6 = l6 + Math.imul(u5, Nt2) | 0, s5 = s5 + Math.imul(u5, _t2) | 0, s5 = s5 + Math.imul(E6, Nt2) | 0, g5 = g5 + Math.imul(E6, _t2) | 0;
      var ii2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (ii2 >>> 26) | 0, ii2 &= 67108863, l6 = Math.imul(st3, ct3), s5 = Math.imul(st3, lt3), s5 = s5 + Math.imul(at3, ct3) | 0, g5 = Math.imul(at3, lt3), l6 = l6 + Math.imul(ft2, dt3) | 0, s5 = s5 + Math.imul(ft2, pt3) | 0, s5 = s5 + Math.imul(ot3, dt3) | 0, g5 = g5 + Math.imul(ot3, pt3) | 0, l6 = l6 + Math.imul(it3, vt2) | 0, s5 = s5 + Math.imul(it3, gt3) | 0, s5 = s5 + Math.imul(nt3, vt2) | 0, g5 = g5 + Math.imul(nt3, gt3) | 0, l6 = l6 + Math.imul(et3, mt2) | 0, s5 = s5 + Math.imul(et3, At2) | 0, s5 = s5 + Math.imul(rt3, mt2) | 0, g5 = g5 + Math.imul(rt3, At2) | 0, l6 = l6 + Math.imul($4, bt2) | 0, s5 = s5 + Math.imul($4, yt3) | 0, s5 = s5 + Math.imul(tt3, bt2) | 0, g5 = g5 + Math.imul(tt3, yt3) | 0, l6 = l6 + Math.imul(X3, wt2) | 0, s5 = s5 + Math.imul(X3, xt2) | 0, s5 = s5 + Math.imul(Z3, wt2) | 0, g5 = g5 + Math.imul(Z3, xt2) | 0, l6 = l6 + Math.imul(D5, Mt2) | 0, s5 = s5 + Math.imul(D5, Et2) | 0, s5 = s5 + Math.imul(q4, Mt2) | 0, g5 = g5 + Math.imul(q4, Et2) | 0, l6 = l6 + Math.imul(P4, St2) | 0, s5 = s5 + Math.imul(P4, It2) | 0, s5 = s5 + Math.imul(O5, St2) | 0, g5 = g5 + Math.imul(O5, It2) | 0, l6 = l6 + Math.imul(B3, Nt2) | 0, s5 = s5 + Math.imul(B3, _t2) | 0, s5 = s5 + Math.imul(R3, Nt2) | 0, g5 = g5 + Math.imul(R3, _t2) | 0;
      var ni2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (ni2 >>> 26) | 0, ni2 &= 67108863, l6 = Math.imul(st3, dt3), s5 = Math.imul(st3, pt3), s5 = s5 + Math.imul(at3, dt3) | 0, g5 = Math.imul(at3, pt3), l6 = l6 + Math.imul(ft2, vt2) | 0, s5 = s5 + Math.imul(ft2, gt3) | 0, s5 = s5 + Math.imul(ot3, vt2) | 0, g5 = g5 + Math.imul(ot3, gt3) | 0, l6 = l6 + Math.imul(it3, mt2) | 0, s5 = s5 + Math.imul(it3, At2) | 0, s5 = s5 + Math.imul(nt3, mt2) | 0, g5 = g5 + Math.imul(nt3, At2) | 0, l6 = l6 + Math.imul(et3, bt2) | 0, s5 = s5 + Math.imul(et3, yt3) | 0, s5 = s5 + Math.imul(rt3, bt2) | 0, g5 = g5 + Math.imul(rt3, yt3) | 0, l6 = l6 + Math.imul($4, wt2) | 0, s5 = s5 + Math.imul($4, xt2) | 0, s5 = s5 + Math.imul(tt3, wt2) | 0, g5 = g5 + Math.imul(tt3, xt2) | 0, l6 = l6 + Math.imul(X3, Mt2) | 0, s5 = s5 + Math.imul(X3, Et2) | 0, s5 = s5 + Math.imul(Z3, Mt2) | 0, g5 = g5 + Math.imul(Z3, Et2) | 0, l6 = l6 + Math.imul(D5, St2) | 0, s5 = s5 + Math.imul(D5, It2) | 0, s5 = s5 + Math.imul(q4, St2) | 0, g5 = g5 + Math.imul(q4, It2) | 0, l6 = l6 + Math.imul(P4, Nt2) | 0, s5 = s5 + Math.imul(P4, _t2) | 0, s5 = s5 + Math.imul(O5, Nt2) | 0, g5 = g5 + Math.imul(O5, _t2) | 0;
      var fi2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (fi2 >>> 26) | 0, fi2 &= 67108863, l6 = Math.imul(st3, vt2), s5 = Math.imul(st3, gt3), s5 = s5 + Math.imul(at3, vt2) | 0, g5 = Math.imul(at3, gt3), l6 = l6 + Math.imul(ft2, mt2) | 0, s5 = s5 + Math.imul(ft2, At2) | 0, s5 = s5 + Math.imul(ot3, mt2) | 0, g5 = g5 + Math.imul(ot3, At2) | 0, l6 = l6 + Math.imul(it3, bt2) | 0, s5 = s5 + Math.imul(it3, yt3) | 0, s5 = s5 + Math.imul(nt3, bt2) | 0, g5 = g5 + Math.imul(nt3, yt3) | 0, l6 = l6 + Math.imul(et3, wt2) | 0, s5 = s5 + Math.imul(et3, xt2) | 0, s5 = s5 + Math.imul(rt3, wt2) | 0, g5 = g5 + Math.imul(rt3, xt2) | 0, l6 = l6 + Math.imul($4, Mt2) | 0, s5 = s5 + Math.imul($4, Et2) | 0, s5 = s5 + Math.imul(tt3, Mt2) | 0, g5 = g5 + Math.imul(tt3, Et2) | 0, l6 = l6 + Math.imul(X3, St2) | 0, s5 = s5 + Math.imul(X3, It2) | 0, s5 = s5 + Math.imul(Z3, St2) | 0, g5 = g5 + Math.imul(Z3, It2) | 0, l6 = l6 + Math.imul(D5, Nt2) | 0, s5 = s5 + Math.imul(D5, _t2) | 0, s5 = s5 + Math.imul(q4, Nt2) | 0, g5 = g5 + Math.imul(q4, _t2) | 0;
      var oi2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (oi2 >>> 26) | 0, oi2 &= 67108863, l6 = Math.imul(st3, mt2), s5 = Math.imul(st3, At2), s5 = s5 + Math.imul(at3, mt2) | 0, g5 = Math.imul(at3, At2), l6 = l6 + Math.imul(ft2, bt2) | 0, s5 = s5 + Math.imul(ft2, yt3) | 0, s5 = s5 + Math.imul(ot3, bt2) | 0, g5 = g5 + Math.imul(ot3, yt3) | 0, l6 = l6 + Math.imul(it3, wt2) | 0, s5 = s5 + Math.imul(it3, xt2) | 0, s5 = s5 + Math.imul(nt3, wt2) | 0, g5 = g5 + Math.imul(nt3, xt2) | 0, l6 = l6 + Math.imul(et3, Mt2) | 0, s5 = s5 + Math.imul(et3, Et2) | 0, s5 = s5 + Math.imul(rt3, Mt2) | 0, g5 = g5 + Math.imul(rt3, Et2) | 0, l6 = l6 + Math.imul($4, St2) | 0, s5 = s5 + Math.imul($4, It2) | 0, s5 = s5 + Math.imul(tt3, St2) | 0, g5 = g5 + Math.imul(tt3, It2) | 0, l6 = l6 + Math.imul(X3, Nt2) | 0, s5 = s5 + Math.imul(X3, _t2) | 0, s5 = s5 + Math.imul(Z3, Nt2) | 0, g5 = g5 + Math.imul(Z3, _t2) | 0;
      var si2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (si2 >>> 26) | 0, si2 &= 67108863, l6 = Math.imul(st3, bt2), s5 = Math.imul(st3, yt3), s5 = s5 + Math.imul(at3, bt2) | 0, g5 = Math.imul(at3, yt3), l6 = l6 + Math.imul(ft2, wt2) | 0, s5 = s5 + Math.imul(ft2, xt2) | 0, s5 = s5 + Math.imul(ot3, wt2) | 0, g5 = g5 + Math.imul(ot3, xt2) | 0, l6 = l6 + Math.imul(it3, Mt2) | 0, s5 = s5 + Math.imul(it3, Et2) | 0, s5 = s5 + Math.imul(nt3, Mt2) | 0, g5 = g5 + Math.imul(nt3, Et2) | 0, l6 = l6 + Math.imul(et3, St2) | 0, s5 = s5 + Math.imul(et3, It2) | 0, s5 = s5 + Math.imul(rt3, St2) | 0, g5 = g5 + Math.imul(rt3, It2) | 0, l6 = l6 + Math.imul($4, Nt2) | 0, s5 = s5 + Math.imul($4, _t2) | 0, s5 = s5 + Math.imul(tt3, Nt2) | 0, g5 = g5 + Math.imul(tt3, _t2) | 0;
      var ai2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (ai2 >>> 26) | 0, ai2 &= 67108863, l6 = Math.imul(st3, wt2), s5 = Math.imul(st3, xt2), s5 = s5 + Math.imul(at3, wt2) | 0, g5 = Math.imul(at3, xt2), l6 = l6 + Math.imul(ft2, Mt2) | 0, s5 = s5 + Math.imul(ft2, Et2) | 0, s5 = s5 + Math.imul(ot3, Mt2) | 0, g5 = g5 + Math.imul(ot3, Et2) | 0, l6 = l6 + Math.imul(it3, St2) | 0, s5 = s5 + Math.imul(it3, It2) | 0, s5 = s5 + Math.imul(nt3, St2) | 0, g5 = g5 + Math.imul(nt3, It2) | 0, l6 = l6 + Math.imul(et3, Nt2) | 0, s5 = s5 + Math.imul(et3, _t2) | 0, s5 = s5 + Math.imul(rt3, Nt2) | 0, g5 = g5 + Math.imul(rt3, _t2) | 0;
      var ui2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (ui2 >>> 26) | 0, ui2 &= 67108863, l6 = Math.imul(st3, Mt2), s5 = Math.imul(st3, Et2), s5 = s5 + Math.imul(at3, Mt2) | 0, g5 = Math.imul(at3, Et2), l6 = l6 + Math.imul(ft2, St2) | 0, s5 = s5 + Math.imul(ft2, It2) | 0, s5 = s5 + Math.imul(ot3, St2) | 0, g5 = g5 + Math.imul(ot3, It2) | 0, l6 = l6 + Math.imul(it3, Nt2) | 0, s5 = s5 + Math.imul(it3, _t2) | 0, s5 = s5 + Math.imul(nt3, Nt2) | 0, g5 = g5 + Math.imul(nt3, _t2) | 0;
      var hi2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (hi2 >>> 26) | 0, hi2 &= 67108863, l6 = Math.imul(st3, St2), s5 = Math.imul(st3, It2), s5 = s5 + Math.imul(at3, St2) | 0, g5 = Math.imul(at3, It2), l6 = l6 + Math.imul(ft2, Nt2) | 0, s5 = s5 + Math.imul(ft2, _t2) | 0, s5 = s5 + Math.imul(ot3, Nt2) | 0, g5 = g5 + Math.imul(ot3, _t2) | 0;
      var ci2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      M5 = (g5 + (s5 >>> 13) | 0) + (ci2 >>> 26) | 0, ci2 &= 67108863, l6 = Math.imul(st3, Nt2), s5 = Math.imul(st3, _t2), s5 = s5 + Math.imul(at3, Nt2) | 0, g5 = Math.imul(at3, _t2);
      var li2 = (M5 + l6 | 0) + ((s5 & 8191) << 13) | 0;
      return M5 = (g5 + (s5 >>> 13) | 0) + (li2 >>> 26) | 0, li2 &= 67108863, x7[0] = Me, x7[1] = Ee2, x7[2] = Se, x7[3] = Ie2, x7[4] = Ne, x7[5] = $r2, x7[6] = ti2, x7[7] = ei2, x7[8] = ri2, x7[9] = ii2, x7[10] = ni2, x7[11] = fi2, x7[12] = oi2, x7[13] = si2, x7[14] = ai2, x7[15] = ui2, x7[16] = hi2, x7[17] = ci2, x7[18] = li2, M5 !== 0 && (x7[19] = M5, c8.length++), c8;
    };
    Math.imul || (J2 = U4);
    function Bt2(b5, f6, a6) {
      a6.negative = f6.negative ^ b5.negative, a6.length = b5.length + f6.length;
      for (var c8 = 0, d5 = 0, m4 = 0; m4 < a6.length - 1; m4++) {
        var x7 = d5;
        d5 = 0;
        for (var M5 = c8 & 67108863, l6 = Math.min(m4, f6.length - 1), s5 = Math.max(0, m4 - b5.length + 1); s5 <= l6; s5++) {
          var g5 = m4 - s5, k5 = b5.words[g5] | 0, u5 = f6.words[s5] | 0, E6 = k5 * u5, _6 = E6 & 67108863;
          x7 = x7 + (E6 / 67108864 | 0) | 0, _6 = _6 + M5 | 0, M5 = _6 & 67108863, x7 = x7 + (_6 >>> 26) | 0, d5 += x7 >>> 26, x7 &= 67108863;
        }
        a6.words[m4] = M5, c8 = x7, x7 = d5;
      }
      return c8 !== 0 ? a6.words[m4] = c8 : a6.length--, a6._strip();
    }
    function G2(b5, f6, a6) {
      return Bt2(b5, f6, a6);
    }
    o6.prototype.mulTo = function(f6, a6) {
      var c8, d5 = this.length + f6.length;
      return this.length === 10 && f6.length === 10 ? c8 = J2(this, f6, a6) : d5 < 63 ? c8 = U4(this, f6, a6) : d5 < 1024 ? c8 = Bt2(this, f6, a6) : c8 = G2(this, f6, a6), c8;
    }, o6.prototype.mul = function(f6) {
      var a6 = new o6(null);
      return a6.words = new Array(this.length + f6.length), this.mulTo(f6, a6);
    }, o6.prototype.mulf = function(f6) {
      var a6 = new o6(null);
      return a6.words = new Array(this.length + f6.length), G2(this, f6, a6);
    }, o6.prototype.imul = function(f6) {
      return this.clone().mulTo(f6, this);
    }, o6.prototype.imuln = function(f6) {
      var a6 = f6 < 0;
      a6 && (f6 = -f6), i7(typeof f6 == "number"), i7(f6 < 67108864);
      for (var c8 = 0, d5 = 0; d5 < this.length; d5++) {
        var m4 = (this.words[d5] | 0) * f6, x7 = (m4 & 67108863) + (c8 & 67108863);
        c8 >>= 26, c8 += m4 / 67108864 | 0, c8 += x7 >>> 26, this.words[d5] = x7 & 67108863;
      }
      return c8 !== 0 && (this.words[d5] = c8, this.length++), a6 ? this.ineg() : this;
    }, o6.prototype.muln = function(f6) {
      return this.clone().imuln(f6);
    }, o6.prototype.sqr = function() {
      return this.mul(this);
    }, o6.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o6.prototype.pow = function(f6) {
      var a6 = T6(f6);
      if (a6.length === 0) return new o6(1);
      for (var c8 = this, d5 = 0; d5 < a6.length && a6[d5] === 0; d5++, c8 = c8.sqr()) ;
      if (++d5 < a6.length) for (var m4 = c8.sqr(); d5 < a6.length; d5++, m4 = m4.sqr()) a6[d5] !== 0 && (c8 = c8.mul(m4));
      return c8;
    }, o6.prototype.iushln = function(f6) {
      i7(typeof f6 == "number" && f6 >= 0);
      var a6 = f6 % 26, c8 = (f6 - a6) / 26, d5 = 67108863 >>> 26 - a6 << 26 - a6, m4;
      if (a6 !== 0) {
        var x7 = 0;
        for (m4 = 0; m4 < this.length; m4++) {
          var M5 = this.words[m4] & d5, l6 = (this.words[m4] | 0) - M5 << a6;
          this.words[m4] = l6 | x7, x7 = M5 >>> 26 - a6;
        }
        x7 && (this.words[m4] = x7, this.length++);
      }
      if (c8 !== 0) {
        for (m4 = this.length - 1; m4 >= 0; m4--) this.words[m4 + c8] = this.words[m4];
        for (m4 = 0; m4 < c8; m4++) this.words[m4] = 0;
        this.length += c8;
      }
      return this._strip();
    }, o6.prototype.ishln = function(f6) {
      return i7(this.negative === 0), this.iushln(f6);
    }, o6.prototype.iushrn = function(f6, a6, c8) {
      i7(typeof f6 == "number" && f6 >= 0);
      var d5;
      a6 ? d5 = (a6 - a6 % 26) / 26 : d5 = 0;
      var m4 = f6 % 26, x7 = Math.min((f6 - m4) / 26, this.length), M5 = 67108863 ^ 67108863 >>> m4 << m4, l6 = c8;
      if (d5 -= x7, d5 = Math.max(0, d5), l6) {
        for (var s5 = 0; s5 < x7; s5++) l6.words[s5] = this.words[s5];
        l6.length = x7;
      }
      if (x7 !== 0) if (this.length > x7) for (this.length -= x7, s5 = 0; s5 < this.length; s5++) this.words[s5] = this.words[s5 + x7];
      else this.words[0] = 0, this.length = 1;
      var g5 = 0;
      for (s5 = this.length - 1; s5 >= 0 && (g5 !== 0 || s5 >= d5); s5--) {
        var k5 = this.words[s5] | 0;
        this.words[s5] = g5 << 26 - m4 | k5 >>> m4, g5 = k5 & M5;
      }
      return l6 && g5 !== 0 && (l6.words[l6.length++] = g5), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, o6.prototype.ishrn = function(f6, a6, c8) {
      return i7(this.negative === 0), this.iushrn(f6, a6, c8);
    }, o6.prototype.shln = function(f6) {
      return this.clone().ishln(f6);
    }, o6.prototype.ushln = function(f6) {
      return this.clone().iushln(f6);
    }, o6.prototype.shrn = function(f6) {
      return this.clone().ishrn(f6);
    }, o6.prototype.ushrn = function(f6) {
      return this.clone().iushrn(f6);
    }, o6.prototype.testn = function(f6) {
      i7(typeof f6 == "number" && f6 >= 0);
      var a6 = f6 % 26, c8 = (f6 - a6) / 26, d5 = 1 << a6;
      if (this.length <= c8) return false;
      var m4 = this.words[c8];
      return !!(m4 & d5);
    }, o6.prototype.imaskn = function(f6) {
      i7(typeof f6 == "number" && f6 >= 0);
      var a6 = f6 % 26, c8 = (f6 - a6) / 26;
      if (i7(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c8) return this;
      if (a6 !== 0 && c8++, this.length = Math.min(c8, this.length), a6 !== 0) {
        var d5 = 67108863 ^ 67108863 >>> a6 << a6;
        this.words[this.length - 1] &= d5;
      }
      return this._strip();
    }, o6.prototype.maskn = function(f6) {
      return this.clone().imaskn(f6);
    }, o6.prototype.iaddn = function(f6) {
      return i7(typeof f6 == "number"), i7(f6 < 67108864), f6 < 0 ? this.isubn(-f6) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f6 ? (this.words[0] = f6 - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f6), this.negative = 1, this) : this._iaddn(f6);
    }, o6.prototype._iaddn = function(f6) {
      this.words[0] += f6;
      for (var a6 = 0; a6 < this.length && this.words[a6] >= 67108864; a6++) this.words[a6] -= 67108864, a6 === this.length - 1 ? this.words[a6 + 1] = 1 : this.words[a6 + 1]++;
      return this.length = Math.max(this.length, a6 + 1), this;
    }, o6.prototype.isubn = function(f6) {
      if (i7(typeof f6 == "number"), i7(f6 < 67108864), f6 < 0) return this.iaddn(-f6);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(f6), this.negative = 1, this;
      if (this.words[0] -= f6, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
      else for (var a6 = 0; a6 < this.length && this.words[a6] < 0; a6++) this.words[a6] += 67108864, this.words[a6 + 1] -= 1;
      return this._strip();
    }, o6.prototype.addn = function(f6) {
      return this.clone().iaddn(f6);
    }, o6.prototype.subn = function(f6) {
      return this.clone().isubn(f6);
    }, o6.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o6.prototype.abs = function() {
      return this.clone().iabs();
    }, o6.prototype._ishlnsubmul = function(f6, a6, c8) {
      var d5 = f6.length + c8, m4;
      this._expand(d5);
      var x7, M5 = 0;
      for (m4 = 0; m4 < f6.length; m4++) {
        x7 = (this.words[m4 + c8] | 0) + M5;
        var l6 = (f6.words[m4] | 0) * a6;
        x7 -= l6 & 67108863, M5 = (x7 >> 26) - (l6 / 67108864 | 0), this.words[m4 + c8] = x7 & 67108863;
      }
      for (; m4 < this.length - c8; m4++) x7 = (this.words[m4 + c8] | 0) + M5, M5 = x7 >> 26, this.words[m4 + c8] = x7 & 67108863;
      if (M5 === 0) return this._strip();
      for (i7(M5 === -1), M5 = 0, m4 = 0; m4 < this.length; m4++) x7 = -(this.words[m4] | 0) + M5, M5 = x7 >> 26, this.words[m4] = x7 & 67108863;
      return this.negative = 1, this._strip();
    }, o6.prototype._wordDiv = function(f6, a6) {
      var c8 = this.length - f6.length, d5 = this.clone(), m4 = f6, x7 = m4.words[m4.length - 1] | 0, M5 = this._countBits(x7);
      c8 = 26 - M5, c8 !== 0 && (m4 = m4.ushln(c8), d5.iushln(c8), x7 = m4.words[m4.length - 1] | 0);
      var l6 = d5.length - m4.length, s5;
      if (a6 !== "mod") {
        s5 = new o6(null), s5.length = l6 + 1, s5.words = new Array(s5.length);
        for (var g5 = 0; g5 < s5.length; g5++) s5.words[g5] = 0;
      }
      var k5 = d5.clone()._ishlnsubmul(m4, 1, l6);
      k5.negative === 0 && (d5 = k5, s5 && (s5.words[l6] = 1));
      for (var u5 = l6 - 1; u5 >= 0; u5--) {
        var E6 = (d5.words[m4.length + u5] | 0) * 67108864 + (d5.words[m4.length + u5 - 1] | 0);
        for (E6 = Math.min(E6 / x7 | 0, 67108863), d5._ishlnsubmul(m4, E6, u5); d5.negative !== 0; ) E6--, d5.negative = 0, d5._ishlnsubmul(m4, 1, u5), d5.isZero() || (d5.negative ^= 1);
        s5 && (s5.words[u5] = E6);
      }
      return s5 && s5._strip(), d5._strip(), a6 !== "div" && c8 !== 0 && d5.iushrn(c8), { div: s5 || null, mod: d5 };
    }, o6.prototype.divmod = function(f6, a6, c8) {
      if (i7(!f6.isZero()), this.isZero()) return { div: new o6(0), mod: new o6(0) };
      var d5, m4, x7;
      return this.negative !== 0 && f6.negative === 0 ? (x7 = this.neg().divmod(f6, a6), a6 !== "mod" && (d5 = x7.div.neg()), a6 !== "div" && (m4 = x7.mod.neg(), c8 && m4.negative !== 0 && m4.iadd(f6)), { div: d5, mod: m4 }) : this.negative === 0 && f6.negative !== 0 ? (x7 = this.divmod(f6.neg(), a6), a6 !== "mod" && (d5 = x7.div.neg()), { div: d5, mod: x7.mod }) : this.negative & f6.negative ? (x7 = this.neg().divmod(f6.neg(), a6), a6 !== "div" && (m4 = x7.mod.neg(), c8 && m4.negative !== 0 && m4.isub(f6)), { div: x7.div, mod: m4 }) : f6.length > this.length || this.cmp(f6) < 0 ? { div: new o6(0), mod: this } : f6.length === 1 ? a6 === "div" ? { div: this.divn(f6.words[0]), mod: null } : a6 === "mod" ? { div: null, mod: new o6(this.modrn(f6.words[0])) } : { div: this.divn(f6.words[0]), mod: new o6(this.modrn(f6.words[0])) } : this._wordDiv(f6, a6);
    }, o6.prototype.div = function(f6) {
      return this.divmod(f6, "div", false).div;
    }, o6.prototype.mod = function(f6) {
      return this.divmod(f6, "mod", false).mod;
    }, o6.prototype.umod = function(f6) {
      return this.divmod(f6, "mod", true).mod;
    }, o6.prototype.divRound = function(f6) {
      var a6 = this.divmod(f6);
      if (a6.mod.isZero()) return a6.div;
      var c8 = a6.div.negative !== 0 ? a6.mod.isub(f6) : a6.mod, d5 = f6.ushrn(1), m4 = f6.andln(1), x7 = c8.cmp(d5);
      return x7 < 0 || m4 === 1 && x7 === 0 ? a6.div : a6.div.negative !== 0 ? a6.div.isubn(1) : a6.div.iaddn(1);
    }, o6.prototype.modrn = function(f6) {
      var a6 = f6 < 0;
      a6 && (f6 = -f6), i7(f6 <= 67108863);
      for (var c8 = (1 << 26) % f6, d5 = 0, m4 = this.length - 1; m4 >= 0; m4--) d5 = (c8 * d5 + (this.words[m4] | 0)) % f6;
      return a6 ? -d5 : d5;
    }, o6.prototype.modn = function(f6) {
      return this.modrn(f6);
    }, o6.prototype.idivn = function(f6) {
      var a6 = f6 < 0;
      a6 && (f6 = -f6), i7(f6 <= 67108863);
      for (var c8 = 0, d5 = this.length - 1; d5 >= 0; d5--) {
        var m4 = (this.words[d5] | 0) + c8 * 67108864;
        this.words[d5] = m4 / f6 | 0, c8 = m4 % f6;
      }
      return this._strip(), a6 ? this.ineg() : this;
    }, o6.prototype.divn = function(f6) {
      return this.clone().idivn(f6);
    }, o6.prototype.egcd = function(f6) {
      i7(f6.negative === 0), i7(!f6.isZero());
      var a6 = this, c8 = f6.clone();
      a6.negative !== 0 ? a6 = a6.umod(f6) : a6 = a6.clone();
      for (var d5 = new o6(1), m4 = new o6(0), x7 = new o6(0), M5 = new o6(1), l6 = 0; a6.isEven() && c8.isEven(); ) a6.iushrn(1), c8.iushrn(1), ++l6;
      for (var s5 = c8.clone(), g5 = a6.clone(); !a6.isZero(); ) {
        for (var k5 = 0, u5 = 1; !(a6.words[0] & u5) && k5 < 26; ++k5, u5 <<= 1) ;
        if (k5 > 0) for (a6.iushrn(k5); k5-- > 0; ) (d5.isOdd() || m4.isOdd()) && (d5.iadd(s5), m4.isub(g5)), d5.iushrn(1), m4.iushrn(1);
        for (var E6 = 0, _6 = 1; !(c8.words[0] & _6) && E6 < 26; ++E6, _6 <<= 1) ;
        if (E6 > 0) for (c8.iushrn(E6); E6-- > 0; ) (x7.isOdd() || M5.isOdd()) && (x7.iadd(s5), M5.isub(g5)), x7.iushrn(1), M5.iushrn(1);
        a6.cmp(c8) >= 0 ? (a6.isub(c8), d5.isub(x7), m4.isub(M5)) : (c8.isub(a6), x7.isub(d5), M5.isub(m4));
      }
      return { a: x7, b: M5, gcd: c8.iushln(l6) };
    }, o6.prototype._invmp = function(f6) {
      i7(f6.negative === 0), i7(!f6.isZero());
      var a6 = this, c8 = f6.clone();
      a6.negative !== 0 ? a6 = a6.umod(f6) : a6 = a6.clone();
      for (var d5 = new o6(1), m4 = new o6(0), x7 = c8.clone(); a6.cmpn(1) > 0 && c8.cmpn(1) > 0; ) {
        for (var M5 = 0, l6 = 1; !(a6.words[0] & l6) && M5 < 26; ++M5, l6 <<= 1) ;
        if (M5 > 0) for (a6.iushrn(M5); M5-- > 0; ) d5.isOdd() && d5.iadd(x7), d5.iushrn(1);
        for (var s5 = 0, g5 = 1; !(c8.words[0] & g5) && s5 < 26; ++s5, g5 <<= 1) ;
        if (s5 > 0) for (c8.iushrn(s5); s5-- > 0; ) m4.isOdd() && m4.iadd(x7), m4.iushrn(1);
        a6.cmp(c8) >= 0 ? (a6.isub(c8), d5.isub(m4)) : (c8.isub(a6), m4.isub(d5));
      }
      var k5;
      return a6.cmpn(1) === 0 ? k5 = d5 : k5 = m4, k5.cmpn(0) < 0 && k5.iadd(f6), k5;
    }, o6.prototype.gcd = function(f6) {
      if (this.isZero()) return f6.abs();
      if (f6.isZero()) return this.abs();
      var a6 = this.clone(), c8 = f6.clone();
      a6.negative = 0, c8.negative = 0;
      for (var d5 = 0; a6.isEven() && c8.isEven(); d5++) a6.iushrn(1), c8.iushrn(1);
      do {
        for (; a6.isEven(); ) a6.iushrn(1);
        for (; c8.isEven(); ) c8.iushrn(1);
        var m4 = a6.cmp(c8);
        if (m4 < 0) {
          var x7 = a6;
          a6 = c8, c8 = x7;
        } else if (m4 === 0 || c8.cmpn(1) === 0) break;
        a6.isub(c8);
      } while (true);
      return c8.iushln(d5);
    }, o6.prototype.invm = function(f6) {
      return this.egcd(f6).a.umod(f6);
    }, o6.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o6.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o6.prototype.andln = function(f6) {
      return this.words[0] & f6;
    }, o6.prototype.bincn = function(f6) {
      i7(typeof f6 == "number");
      var a6 = f6 % 26, c8 = (f6 - a6) / 26, d5 = 1 << a6;
      if (this.length <= c8) return this._expand(c8 + 1), this.words[c8] |= d5, this;
      for (var m4 = d5, x7 = c8; m4 !== 0 && x7 < this.length; x7++) {
        var M5 = this.words[x7] | 0;
        M5 += m4, m4 = M5 >>> 26, M5 &= 67108863, this.words[x7] = M5;
      }
      return m4 !== 0 && (this.words[x7] = m4, this.length++), this;
    }, o6.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o6.prototype.cmpn = function(f6) {
      var a6 = f6 < 0;
      if (this.negative !== 0 && !a6) return -1;
      if (this.negative === 0 && a6) return 1;
      this._strip();
      var c8;
      if (this.length > 1) c8 = 1;
      else {
        a6 && (f6 = -f6), i7(f6 <= 67108863, "Number is too big");
        var d5 = this.words[0] | 0;
        c8 = d5 === f6 ? 0 : d5 < f6 ? -1 : 1;
      }
      return this.negative !== 0 ? -c8 | 0 : c8;
    }, o6.prototype.cmp = function(f6) {
      if (this.negative !== 0 && f6.negative === 0) return -1;
      if (this.negative === 0 && f6.negative !== 0) return 1;
      var a6 = this.ucmp(f6);
      return this.negative !== 0 ? -a6 | 0 : a6;
    }, o6.prototype.ucmp = function(f6) {
      if (this.length > f6.length) return 1;
      if (this.length < f6.length) return -1;
      for (var a6 = 0, c8 = this.length - 1; c8 >= 0; c8--) {
        var d5 = this.words[c8] | 0, m4 = f6.words[c8] | 0;
        if (d5 !== m4) {
          d5 < m4 ? a6 = -1 : d5 > m4 && (a6 = 1);
          break;
        }
      }
      return a6;
    }, o6.prototype.gtn = function(f6) {
      return this.cmpn(f6) === 1;
    }, o6.prototype.gt = function(f6) {
      return this.cmp(f6) === 1;
    }, o6.prototype.gten = function(f6) {
      return this.cmpn(f6) >= 0;
    }, o6.prototype.gte = function(f6) {
      return this.cmp(f6) >= 0;
    }, o6.prototype.ltn = function(f6) {
      return this.cmpn(f6) === -1;
    }, o6.prototype.lt = function(f6) {
      return this.cmp(f6) === -1;
    }, o6.prototype.lten = function(f6) {
      return this.cmpn(f6) <= 0;
    }, o6.prototype.lte = function(f6) {
      return this.cmp(f6) <= 0;
    }, o6.prototype.eqn = function(f6) {
      return this.cmpn(f6) === 0;
    }, o6.prototype.eq = function(f6) {
      return this.cmp(f6) === 0;
    }, o6.red = function(f6) {
      return new Y2(f6);
    }, o6.prototype.toRed = function(f6) {
      return i7(!this.red, "Already a number in reduction context"), i7(this.negative === 0, "red works only with positives"), f6.convertTo(this)._forceRed(f6);
    }, o6.prototype.fromRed = function() {
      return i7(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o6.prototype._forceRed = function(f6) {
      return this.red = f6, this;
    }, o6.prototype.forceRed = function(f6) {
      return i7(!this.red, "Already a number in reduction context"), this._forceRed(f6);
    }, o6.prototype.redAdd = function(f6) {
      return i7(this.red, "redAdd works only with red numbers"), this.red.add(this, f6);
    }, o6.prototype.redIAdd = function(f6) {
      return i7(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f6);
    }, o6.prototype.redSub = function(f6) {
      return i7(this.red, "redSub works only with red numbers"), this.red.sub(this, f6);
    }, o6.prototype.redISub = function(f6) {
      return i7(this.red, "redISub works only with red numbers"), this.red.isub(this, f6);
    }, o6.prototype.redShl = function(f6) {
      return i7(this.red, "redShl works only with red numbers"), this.red.shl(this, f6);
    }, o6.prototype.redMul = function(f6) {
      return i7(this.red, "redMul works only with red numbers"), this.red._verify2(this, f6), this.red.mul(this, f6);
    }, o6.prototype.redIMul = function(f6) {
      return i7(this.red, "redMul works only with red numbers"), this.red._verify2(this, f6), this.red.imul(this, f6);
    }, o6.prototype.redSqr = function() {
      return i7(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o6.prototype.redISqr = function() {
      return i7(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o6.prototype.redSqrt = function() {
      return i7(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o6.prototype.redInvm = function() {
      return i7(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o6.prototype.redNeg = function() {
      return i7(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o6.prototype.redPow = function(f6) {
      return i7(this.red && !f6.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f6);
    };
    var H3 = { k256: null, p224: null, p192: null, p25519: null };
    function L4(b5, f6) {
      this.name = b5, this.p = new o6(f6, 16), this.n = this.p.bitLength(), this.k = new o6(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    L4.prototype._tmp = function() {
      var f6 = new o6(null);
      return f6.words = new Array(Math.ceil(this.n / 13)), f6;
    }, L4.prototype.ireduce = function(f6) {
      var a6 = f6, c8;
      do
        this.split(a6, this.tmp), a6 = this.imulK(a6), a6 = a6.iadd(this.tmp), c8 = a6.bitLength();
      while (c8 > this.n);
      var d5 = c8 < this.n ? -1 : a6.ucmp(this.p);
      return d5 === 0 ? (a6.words[0] = 0, a6.length = 1) : d5 > 0 ? a6.isub(this.p) : a6.strip !== void 0 ? a6.strip() : a6._strip(), a6;
    }, L4.prototype.split = function(f6, a6) {
      f6.iushrn(this.n, 0, a6);
    }, L4.prototype.imulK = function(f6) {
      return f6.imul(this.k);
    };
    function Pt2() {
      L4.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    n6(Pt2, L4), Pt2.prototype.split = function(f6, a6) {
      for (var c8 = 4194303, d5 = Math.min(f6.length, 9), m4 = 0; m4 < d5; m4++) a6.words[m4] = f6.words[m4];
      if (a6.length = d5, f6.length <= 9) {
        f6.words[0] = 0, f6.length = 1;
        return;
      }
      var x7 = f6.words[9];
      for (a6.words[a6.length++] = x7 & c8, m4 = 10; m4 < f6.length; m4++) {
        var M5 = f6.words[m4] | 0;
        f6.words[m4 - 10] = (M5 & c8) << 4 | x7 >>> 22, x7 = M5;
      }
      x7 >>>= 22, f6.words[m4 - 10] = x7, x7 === 0 && f6.length > 10 ? f6.length -= 10 : f6.length -= 9;
    }, Pt2.prototype.imulK = function(f6) {
      f6.words[f6.length] = 0, f6.words[f6.length + 1] = 0, f6.length += 2;
      for (var a6 = 0, c8 = 0; c8 < f6.length; c8++) {
        var d5 = f6.words[c8] | 0;
        a6 += d5 * 977, f6.words[c8] = a6 & 67108863, a6 = d5 * 64 + (a6 / 67108864 | 0);
      }
      return f6.words[f6.length - 1] === 0 && (f6.length--, f6.words[f6.length - 1] === 0 && f6.length--), f6;
    };
    function W3() {
      L4.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    n6(W3, L4);
    function Rt2() {
      L4.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    n6(Rt2, L4);
    function Vt2() {
      L4.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    n6(Vt2, L4), Vt2.prototype.imulK = function(f6) {
      for (var a6 = 0, c8 = 0; c8 < f6.length; c8++) {
        var d5 = (f6.words[c8] | 0) * 19 + a6, m4 = d5 & 67108863;
        d5 >>>= 26, f6.words[c8] = m4, a6 = d5;
      }
      return a6 !== 0 && (f6.words[f6.length++] = a6), f6;
    }, o6._prime = function(f6) {
      if (H3[f6]) return H3[f6];
      var a6;
      if (f6 === "k256") a6 = new Pt2();
      else if (f6 === "p224") a6 = new W3();
      else if (f6 === "p192") a6 = new Rt2();
      else if (f6 === "p25519") a6 = new Vt2();
      else throw new Error("Unknown prime " + f6);
      return H3[f6] = a6, a6;
    };
    function Y2(b5) {
      if (typeof b5 == "string") {
        var f6 = o6._prime(b5);
        this.m = f6.p, this.prime = f6;
      } else i7(b5.gtn(1), "modulus must be greater than 1"), this.m = b5, this.prime = null;
    }
    Y2.prototype._verify1 = function(f6) {
      i7(f6.negative === 0, "red works only with positives"), i7(f6.red, "red works only with red numbers");
    }, Y2.prototype._verify2 = function(f6, a6) {
      i7((f6.negative | a6.negative) === 0, "red works only with positives"), i7(f6.red && f6.red === a6.red, "red works only with red numbers");
    }, Y2.prototype.imod = function(f6) {
      return this.prime ? this.prime.ireduce(f6)._forceRed(this) : (w7(f6, f6.umod(this.m)._forceRed(this)), f6);
    }, Y2.prototype.neg = function(f6) {
      return f6.isZero() ? f6.clone() : this.m.sub(f6)._forceRed(this);
    }, Y2.prototype.add = function(f6, a6) {
      this._verify2(f6, a6);
      var c8 = f6.add(a6);
      return c8.cmp(this.m) >= 0 && c8.isub(this.m), c8._forceRed(this);
    }, Y2.prototype.iadd = function(f6, a6) {
      this._verify2(f6, a6);
      var c8 = f6.iadd(a6);
      return c8.cmp(this.m) >= 0 && c8.isub(this.m), c8;
    }, Y2.prototype.sub = function(f6, a6) {
      this._verify2(f6, a6);
      var c8 = f6.sub(a6);
      return c8.cmpn(0) < 0 && c8.iadd(this.m), c8._forceRed(this);
    }, Y2.prototype.isub = function(f6, a6) {
      this._verify2(f6, a6);
      var c8 = f6.isub(a6);
      return c8.cmpn(0) < 0 && c8.iadd(this.m), c8;
    }, Y2.prototype.shl = function(f6, a6) {
      return this._verify1(f6), this.imod(f6.ushln(a6));
    }, Y2.prototype.imul = function(f6, a6) {
      return this._verify2(f6, a6), this.imod(f6.imul(a6));
    }, Y2.prototype.mul = function(f6, a6) {
      return this._verify2(f6, a6), this.imod(f6.mul(a6));
    }, Y2.prototype.isqr = function(f6) {
      return this.imul(f6, f6.clone());
    }, Y2.prototype.sqr = function(f6) {
      return this.mul(f6, f6);
    }, Y2.prototype.sqrt = function(f6) {
      if (f6.isZero()) return f6.clone();
      var a6 = this.m.andln(3);
      if (i7(a6 % 2 === 1), a6 === 3) {
        var c8 = this.m.add(new o6(1)).iushrn(2);
        return this.pow(f6, c8);
      }
      for (var d5 = this.m.subn(1), m4 = 0; !d5.isZero() && d5.andln(1) === 0; ) m4++, d5.iushrn(1);
      i7(!d5.isZero());
      var x7 = new o6(1).toRed(this), M5 = x7.redNeg(), l6 = this.m.subn(1).iushrn(1), s5 = this.m.bitLength();
      for (s5 = new o6(2 * s5 * s5).toRed(this); this.pow(s5, l6).cmp(M5) !== 0; ) s5.redIAdd(M5);
      for (var g5 = this.pow(s5, d5), k5 = this.pow(f6, d5.addn(1).iushrn(1)), u5 = this.pow(f6, d5), E6 = m4; u5.cmp(x7) !== 0; ) {
        for (var _6 = u5, B3 = 0; _6.cmp(x7) !== 0; B3++) _6 = _6.redSqr();
        i7(B3 < E6);
        var R3 = this.pow(g5, new o6(1).iushln(E6 - B3 - 1));
        k5 = k5.redMul(R3), g5 = R3.redSqr(), u5 = u5.redMul(g5), E6 = B3;
      }
      return k5;
    }, Y2.prototype.invm = function(f6) {
      var a6 = f6._invmp(this.m);
      return a6.negative !== 0 ? (a6.negative = 0, this.imod(a6).redNeg()) : this.imod(a6);
    }, Y2.prototype.pow = function(f6, a6) {
      if (a6.isZero()) return new o6(1).toRed(this);
      if (a6.cmpn(1) === 0) return f6.clone();
      var c8 = 4, d5 = new Array(1 << c8);
      d5[0] = new o6(1).toRed(this), d5[1] = f6;
      for (var m4 = 2; m4 < d5.length; m4++) d5[m4] = this.mul(d5[m4 - 1], f6);
      var x7 = d5[0], M5 = 0, l6 = 0, s5 = a6.bitLength() % 26;
      for (s5 === 0 && (s5 = 26), m4 = a6.length - 1; m4 >= 0; m4--) {
        for (var g5 = a6.words[m4], k5 = s5 - 1; k5 >= 0; k5--) {
          var u5 = g5 >> k5 & 1;
          if (x7 !== d5[0] && (x7 = this.sqr(x7)), u5 === 0 && M5 === 0) {
            l6 = 0;
            continue;
          }
          M5 <<= 1, M5 |= u5, l6++, !(l6 !== c8 && (m4 !== 0 || k5 !== 0)) && (x7 = this.mul(x7, d5[M5]), l6 = 0, M5 = 0);
        }
        s5 = 26;
      }
      return x7;
    }, Y2.prototype.convertTo = function(f6) {
      var a6 = f6.umod(this.m);
      return a6 === f6 ? a6.clone() : a6;
    }, Y2.prototype.convertFrom = function(f6) {
      var a6 = f6.clone();
      return a6.red = null, a6;
    }, o6.mont = function(f6) {
      return new Wt2(f6);
    };
    function Wt2(b5) {
      Y2.call(this, b5), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o6(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    n6(Wt2, Y2), Wt2.prototype.convertTo = function(f6) {
      return this.imod(f6.ushln(this.shift));
    }, Wt2.prototype.convertFrom = function(f6) {
      var a6 = this.imod(f6.mul(this.rinv));
      return a6.red = null, a6;
    }, Wt2.prototype.imul = function(f6, a6) {
      if (f6.isZero() || a6.isZero()) return f6.words[0] = 0, f6.length = 1, f6;
      var c8 = f6.imul(a6), d5 = c8.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), m4 = c8.isub(d5).iushrn(this.shift), x7 = m4;
      return m4.cmp(this.m) >= 0 ? x7 = m4.isub(this.m) : m4.cmpn(0) < 0 && (x7 = m4.iadd(this.m)), x7._forceRed(this);
    }, Wt2.prototype.mul = function(f6, a6) {
      if (f6.isZero() || a6.isZero()) return new o6(0)._forceRed(this);
      var c8 = f6.mul(a6), d5 = c8.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), m4 = c8.isub(d5).iushrn(this.shift), x7 = m4;
      return m4.cmp(this.m) >= 0 ? x7 = m4.isub(this.m) : m4.cmpn(0) < 0 && (x7 = m4.iadd(this.m)), x7._forceRed(this);
    }, Wt2.prototype.invm = function(f6) {
      var a6 = this.imod(f6._invmp(this.m).mul(this.r2));
      return a6._forceRed(this);
    };
  })(e4, Fn);
})(Gn);
var K3 = Gn.exports;
var Yn = "bignumber/5.7.0";
var Tr = K3.BN;
var Ae = new z5(Yn);
var Ii = {};
var Vn = 9007199254740991;
function Us(e4) {
  return e4 != null && (V2.isBigNumber(e4) || typeof e4 == "number" && e4 % 1 === 0 || typeof e4 == "string" && !!e4.match(/^-?[0-9]+$/) || Jt(e4) || typeof e4 == "bigint" || nr(e4));
}
var Wn = false;
var V2 = class _V {
  constructor(t3, r5) {
    t3 !== Ii && Ae.throwError("cannot call constructor directly; use BigNumber.from", z5.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = r5, this._isBigNumber = true, Object.freeze(this);
  }
  fromTwos(t3) {
    return zt(j4(this).fromTwos(t3));
  }
  toTwos(t3) {
    return zt(j4(this).toTwos(t3));
  }
  abs() {
    return this._hex[0] === "-" ? _V.from(this._hex.substring(1)) : this;
  }
  add(t3) {
    return zt(j4(this).add(j4(t3)));
  }
  sub(t3) {
    return zt(j4(this).sub(j4(t3)));
  }
  div(t3) {
    return _V.from(t3).isZero() && Zt("division-by-zero", "div"), zt(j4(this).div(j4(t3)));
  }
  mul(t3) {
    return zt(j4(this).mul(j4(t3)));
  }
  mod(t3) {
    const r5 = j4(t3);
    return r5.isNeg() && Zt("division-by-zero", "mod"), zt(j4(this).umod(r5));
  }
  pow(t3) {
    const r5 = j4(t3);
    return r5.isNeg() && Zt("negative-power", "pow"), zt(j4(this).pow(r5));
  }
  and(t3) {
    const r5 = j4(t3);
    return (this.isNegative() || r5.isNeg()) && Zt("unbound-bitwise-result", "and"), zt(j4(this).and(r5));
  }
  or(t3) {
    const r5 = j4(t3);
    return (this.isNegative() || r5.isNeg()) && Zt("unbound-bitwise-result", "or"), zt(j4(this).or(r5));
  }
  xor(t3) {
    const r5 = j4(t3);
    return (this.isNegative() || r5.isNeg()) && Zt("unbound-bitwise-result", "xor"), zt(j4(this).xor(r5));
  }
  mask(t3) {
    return (this.isNegative() || t3 < 0) && Zt("negative-width", "mask"), zt(j4(this).maskn(t3));
  }
  shl(t3) {
    return (this.isNegative() || t3 < 0) && Zt("negative-width", "shl"), zt(j4(this).shln(t3));
  }
  shr(t3) {
    return (this.isNegative() || t3 < 0) && Zt("negative-width", "shr"), zt(j4(this).shrn(t3));
  }
  eq(t3) {
    return j4(this).eq(j4(t3));
  }
  lt(t3) {
    return j4(this).lt(j4(t3));
  }
  lte(t3) {
    return j4(this).lte(j4(t3));
  }
  gt(t3) {
    return j4(this).gt(j4(t3));
  }
  gte(t3) {
    return j4(this).gte(j4(t3));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return j4(this).isZero();
  }
  toNumber() {
    try {
      return j4(this).toNumber();
    } catch {
      Zt("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Ae.throwError("this platform does not support BigInt", z5.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? Wn || (Wn = true, Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", z5.errors.UNEXPECTED_ARGUMENT, {}) : Ae.throwError("BigNumber.toString does not accept parameters", z5.errors.UNEXPECTED_ARGUMENT, {})), j4(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(t3) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(t3) {
    if (t3 instanceof _V) return t3;
    if (typeof t3 == "string") return t3.match(/^-?0x[0-9a-f]+$/i) ? new _V(Ii, mr(t3)) : t3.match(/^-?[0-9]+$/) ? new _V(Ii, mr(new Tr(t3))) : Ae.throwArgumentError("invalid BigNumber string", "value", t3);
    if (typeof t3 == "number") return t3 % 1 && Zt("underflow", "BigNumber.from", t3), (t3 >= Vn || t3 <= -Vn) && Zt("overflow", "BigNumber.from", t3), _V.from(String(t3));
    const r5 = t3;
    if (typeof r5 == "bigint") return _V.from(r5.toString());
    if (nr(r5)) return _V.from(Kt(r5));
    if (r5) if (r5.toHexString) {
      const i7 = r5.toHexString();
      if (typeof i7 == "string") return _V.from(i7);
    } else {
      let i7 = r5._hex;
      if (i7 == null && r5.type === "BigNumber" && (i7 = r5.hex), typeof i7 == "string" && (Jt(i7) || i7[0] === "-" && Jt(i7.substring(1)))) return _V.from(i7);
    }
    return Ae.throwArgumentError("invalid BigNumber value", "value", t3);
  }
  static isBigNumber(t3) {
    return !!(t3 && t3._isBigNumber);
  }
};
function mr(e4) {
  if (typeof e4 != "string") return mr(e4.toString(16));
  if (e4[0] === "-") return e4 = e4.substring(1), e4[0] === "-" && Ae.throwArgumentError("invalid hex", "value", e4), e4 = mr(e4), e4 === "0x00" ? e4 : "-" + e4;
  if (e4.substring(0, 2) !== "0x" && (e4 = "0x" + e4), e4 === "0x") return "0x00";
  for (e4.length % 2 && (e4 = "0x0" + e4.substring(2)); e4.length > 4 && e4.substring(0, 4) === "0x00"; ) e4 = "0x" + e4.substring(4);
  return e4;
}
function zt(e4) {
  return V2.from(mr(e4));
}
function j4(e4) {
  const t3 = V2.from(e4).toHexString();
  return t3[0] === "-" ? new Tr("-" + t3.substring(3), 16) : new Tr(t3.substring(2), 16);
}
function Zt(e4, t3, r5) {
  const i7 = { fault: e4, operation: t3 };
  return r5 != null && (i7.value = r5), Ae.throwError(e4, z5.errors.NUMERIC_FAULT, i7);
}
function ks(e4) {
  return new Tr(e4, 36).toString(16);
}
var Ht = new z5(Yn);
var Ar = {};
var Xn = V2.from(0);
var Zn = V2.from(-1);
function $n(e4, t3, r5, i7) {
  const n6 = { fault: t3, operation: r5 };
  return i7 !== void 0 && (n6.value = i7), Ht.throwError(e4, z5.errors.NUMERIC_FAULT, n6);
}
var br = "0";
for (; br.length < 256; ) br += br;
function Ni(e4) {
  if (typeof e4 != "number") try {
    e4 = V2.from(e4).toNumber();
  } catch {
  }
  return typeof e4 == "number" && e4 >= 0 && e4 <= 256 && !(e4 % 1) ? "1" + br.substring(0, e4) : Ht.throwArgumentError("invalid decimal size", "decimals", e4);
}
function _i(e4, t3) {
  t3 == null && (t3 = 0);
  const r5 = Ni(t3);
  e4 = V2.from(e4);
  const i7 = e4.lt(Xn);
  i7 && (e4 = e4.mul(Zn));
  let n6 = e4.mod(r5).toString();
  for (; n6.length < r5.length - 1; ) n6 = "0" + n6;
  n6 = n6.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const o6 = e4.div(r5).toString();
  return r5.length === 1 ? e4 = o6 : e4 = o6 + "." + n6, i7 && (e4 = "-" + e4), e4;
}
function be(e4, t3) {
  t3 == null && (t3 = 0);
  const r5 = Ni(t3);
  (typeof e4 != "string" || !e4.match(/^-?[0-9.]+$/)) && Ht.throwArgumentError("invalid decimal value", "value", e4);
  const i7 = e4.substring(0, 1) === "-";
  i7 && (e4 = e4.substring(1)), e4 === "." && Ht.throwArgumentError("missing value", "value", e4);
  const n6 = e4.split(".");
  n6.length > 2 && Ht.throwArgumentError("too many decimal points", "value", e4);
  let o6 = n6[0], h7 = n6[1];
  for (o6 || (o6 = "0"), h7 || (h7 = "0"); h7[h7.length - 1] === "0"; ) h7 = h7.substring(0, h7.length - 1);
  for (h7.length > r5.length - 1 && $n("fractional component exceeds decimals", "underflow", "parseFixed"), h7 === "" && (h7 = "0"); h7.length < r5.length - 1; ) h7 += "0";
  const p5 = V2.from(o6), A6 = V2.from(h7);
  let v6 = p5.mul(r5).add(A6);
  return i7 && (v6 = v6.mul(Zn)), v6;
}
var vr = class _vr {
  constructor(t3, r5, i7, n6) {
    t3 !== Ar && Ht.throwError("cannot use FixedFormat constructor; use FixedFormat.from", z5.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = r5, this.width = i7, this.decimals = n6, this.name = (r5 ? "" : "u") + "fixed" + String(i7) + "x" + String(n6), this._multiplier = Ni(n6), Object.freeze(this);
  }
  static from(t3) {
    if (t3 instanceof _vr) return t3;
    typeof t3 == "number" && (t3 = `fixed128x${t3}`);
    let r5 = true, i7 = 128, n6 = 18;
    if (typeof t3 == "string") {
      if (t3 !== "fixed") if (t3 === "ufixed") r5 = false;
      else {
        const o6 = t3.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
        o6 || Ht.throwArgumentError("invalid fixed format", "format", t3), r5 = o6[1] !== "u", i7 = parseInt(o6[2]), n6 = parseInt(o6[3]);
      }
    } else if (t3) {
      const o6 = (h7, p5, A6) => t3[h7] == null ? A6 : (typeof t3[h7] !== p5 && Ht.throwArgumentError("invalid fixed format (" + h7 + " not " + p5 + ")", "format." + h7, t3[h7]), t3[h7]);
      r5 = o6("signed", "boolean", r5), i7 = o6("width", "number", i7), n6 = o6("decimals", "number", n6);
    }
    return i7 % 8 && Ht.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i7), n6 > 80 && Ht.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n6), new _vr(Ar, r5, i7, n6);
  }
};
var Ut = class _Ut {
  constructor(t3, r5, i7, n6) {
    t3 !== Ar && Ht.throwError("cannot use FixedNumber constructor; use FixedNumber.from", z5.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n6, this._hex = r5, this._value = i7, this._isFixedNumber = true, Object.freeze(this);
  }
  _checkFormat(t3) {
    this.format.name !== t3.format.name && Ht.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t3);
  }
  addUnsafe(t3) {
    this._checkFormat(t3);
    const r5 = be(this._value, this.format.decimals), i7 = be(t3._value, t3.format.decimals);
    return _Ut.fromValue(r5.add(i7), this.format.decimals, this.format);
  }
  subUnsafe(t3) {
    this._checkFormat(t3);
    const r5 = be(this._value, this.format.decimals), i7 = be(t3._value, t3.format.decimals);
    return _Ut.fromValue(r5.sub(i7), this.format.decimals, this.format);
  }
  mulUnsafe(t3) {
    this._checkFormat(t3);
    const r5 = be(this._value, this.format.decimals), i7 = be(t3._value, t3.format.decimals);
    return _Ut.fromValue(r5.mul(i7).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(t3) {
    this._checkFormat(t3);
    const r5 = be(this._value, this.format.decimals), i7 = be(t3._value, t3.format.decimals);
    return _Ut.fromValue(r5.mul(this.format._multiplier).div(i7), this.format.decimals, this.format);
  }
  floor() {
    const t3 = this.toString().split(".");
    t3.length === 1 && t3.push("0");
    let r5 = _Ut.from(t3[0], this.format);
    const i7 = !t3[1].match(/^(0*)$/);
    return this.isNegative() && i7 && (r5 = r5.subUnsafe(tf.toFormat(r5.format))), r5;
  }
  ceiling() {
    const t3 = this.toString().split(".");
    t3.length === 1 && t3.push("0");
    let r5 = _Ut.from(t3[0], this.format);
    const i7 = !t3[1].match(/^(0*)$/);
    return !this.isNegative() && i7 && (r5 = r5.addUnsafe(tf.toFormat(r5.format))), r5;
  }
  round(t3) {
    t3 == null && (t3 = 0);
    const r5 = this.toString().split(".");
    if (r5.length === 1 && r5.push("0"), (t3 < 0 || t3 > 80 || t3 % 1) && Ht.throwArgumentError("invalid decimal count", "decimals", t3), r5[1].length <= t3) return this;
    const i7 = _Ut.from("1" + br.substring(0, t3), this.format), n6 = qs.toFormat(this.format);
    return this.mulUnsafe(i7).addUnsafe(n6).floor().divUnsafe(i7);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(t3) {
    if (t3 == null) return this._hex;
    t3 % 8 && Ht.throwArgumentError("invalid byte width", "width", t3);
    const r5 = V2.from(this._hex).fromTwos(this.format.width).toTwos(t3).toHexString();
    return oe(r5, t3 / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(t3) {
    return _Ut.fromString(this._value, t3);
  }
  static fromValue(t3, r5, i7) {
    return i7 == null && r5 != null && !Us(r5) && (i7 = r5, r5 = null), r5 == null && (r5 = 0), i7 == null && (i7 = "fixed"), _Ut.fromString(_i(t3, r5), vr.from(i7));
  }
  static fromString(t3, r5) {
    r5 == null && (r5 = "fixed");
    const i7 = vr.from(r5), n6 = be(t3, i7.decimals);
    !i7.signed && n6.lt(Xn) && $n("unsigned value cannot be negative", "overflow", "value", t3);
    let o6 = null;
    i7.signed ? o6 = n6.toTwos(i7.width).toHexString() : (o6 = n6.toHexString(), o6 = oe(o6, i7.width / 8));
    const h7 = _i(n6, i7.decimals);
    return new _Ut(Ar, o6, h7, i7);
  }
  static fromBytes(t3, r5) {
    r5 == null && (r5 = "fixed");
    const i7 = vr.from(r5);
    if (Ot(t3).length > i7.width / 8) throw new Error("overflow");
    let n6 = V2.from(t3);
    i7.signed && (n6 = n6.fromTwos(i7.width));
    const o6 = n6.toTwos((i7.signed ? 0 : 1) + i7.width).toHexString(), h7 = _i(n6, i7.decimals);
    return new _Ut(Ar, o6, h7, i7);
  }
  static from(t3, r5) {
    if (typeof t3 == "string") return _Ut.fromString(t3, r5);
    if (nr(t3)) return _Ut.fromBytes(t3, r5);
    try {
      return _Ut.fromValue(t3, 0, r5);
    } catch (i7) {
      if (i7.code !== z5.errors.INVALID_ARGUMENT) throw i7;
    }
    return Ht.throwArgumentError("invalid FixedNumber value", "value", t3);
  }
  static isFixedNumber(t3) {
    return !!(t3 && t3._isFixedNumber);
  }
};
var tf = Ut.from(1);
var qs = Ut.from("0.5");
var Ks = "strings/5.7.0";
var ef = new z5(Ks);
var Fr;
(function(e4) {
  e4.current = "", e4.NFC = "NFC", e4.NFD = "NFD", e4.NFKC = "NFKC", e4.NFKD = "NFKD";
})(Fr || (Fr = {}));
var fr;
(function(e4) {
  e4.UNEXPECTED_CONTINUE = "unexpected continuation byte", e4.BAD_PREFIX = "bad codepoint prefix", e4.OVERRUN = "string overrun", e4.MISSING_CONTINUE = "missing continuation byte", e4.OUT_OF_RANGE = "out of UTF-8 range", e4.UTF16_SURROGATE = "UTF-16 surrogate", e4.OVERLONG = "overlong representation";
})(fr || (fr = {}));
function Hs(e4, t3, r5, i7, n6) {
  return ef.throwArgumentError(`invalid codepoint at offset ${t3}; ${e4}`, "bytes", r5);
}
function rf(e4, t3, r5, i7, n6) {
  if (e4 === fr.BAD_PREFIX || e4 === fr.UNEXPECTED_CONTINUE) {
    let o6 = 0;
    for (let h7 = t3 + 1; h7 < r5.length && r5[h7] >> 6 === 2; h7++) o6++;
    return o6;
  }
  return e4 === fr.OVERRUN ? r5.length - t3 - 1 : 0;
}
function Ls(e4, t3, r5, i7, n6) {
  return e4 === fr.OVERLONG ? (i7.push(n6), 0) : (i7.push(65533), rf(e4, t3, r5));
}
Object.freeze({ error: Hs, ignore: rf, replace: Ls });
function Bi(e4, t3 = Fr.current) {
  t3 != Fr.current && (ef.checkNormalize(), e4 = e4.normalize(t3));
  let r5 = [];
  for (let i7 = 0; i7 < e4.length; i7++) {
    const n6 = e4.charCodeAt(i7);
    if (n6 < 128) r5.push(n6);
    else if (n6 < 2048) r5.push(n6 >> 6 | 192), r5.push(n6 & 63 | 128);
    else if ((n6 & 64512) == 55296) {
      i7++;
      const o6 = e4.charCodeAt(i7);
      if (i7 >= e4.length || (o6 & 64512) !== 56320) throw new Error("invalid utf-8 string");
      const h7 = 65536 + ((n6 & 1023) << 10) + (o6 & 1023);
      r5.push(h7 >> 18 | 240), r5.push(h7 >> 12 & 63 | 128), r5.push(h7 >> 6 & 63 | 128), r5.push(h7 & 63 | 128);
    } else r5.push(n6 >> 12 | 224), r5.push(n6 >> 6 & 63 | 128), r5.push(n6 & 63 | 128);
  }
  return Ot(r5);
}
function zs(e4) {
  if (e4.length % 4 !== 0) throw new Error("bad data");
  let t3 = [];
  for (let r5 = 0; r5 < e4.length; r5 += 4) t3.push(parseInt(e4.substring(r5, r5 + 4), 16));
  return t3;
}
function Ci(e4, t3) {
  t3 || (t3 = function(n6) {
    return [parseInt(n6, 16)];
  });
  let r5 = 0, i7 = {};
  return e4.split(",").forEach((n6) => {
    let o6 = n6.split(":");
    r5 += parseInt(o6[0], 16), i7[r5] = t3(o6[1]);
  }), i7;
}
function nf(e4) {
  let t3 = 0;
  return e4.split(",").map((r5) => {
    let i7 = r5.split("-");
    i7.length === 1 ? i7[1] = "0" : i7[1] === "" && (i7[1] = "1");
    let n6 = t3 + parseInt(i7[0], 16);
    return t3 = parseInt(i7[1], 16), { l: n6, h: t3 };
  });
}
nf("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e4) => parseInt(e4, 16)), Ci("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Ci("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Ci("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", zs), nf("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
var ff = "hash/5.7.0";
function js(e4) {
  e4 = atob(e4);
  const t3 = [];
  for (let r5 = 0; r5 < e4.length; r5++) t3.push(e4.charCodeAt(r5));
  return Ot(t3);
}
function of(e4, t3) {
  t3 == null && (t3 = 1);
  const r5 = [], i7 = r5.forEach, n6 = function(o6, h7) {
    i7.call(o6, function(p5) {
      h7 > 0 && Array.isArray(p5) ? n6(p5, h7 - 1) : r5.push(p5);
    });
  };
  return n6(e4, t3), r5;
}
function Qs(e4) {
  const t3 = {};
  for (let r5 = 0; r5 < e4.length; r5++) {
    const i7 = e4[r5];
    t3[i7[0]] = i7[1];
  }
  return t3;
}
function Js(e4) {
  let t3 = 0;
  function r5() {
    return e4[t3++] << 8 | e4[t3++];
  }
  let i7 = r5(), n6 = 1, o6 = [0, 1];
  for (let H3 = 1; H3 < i7; H3++) o6.push(n6 += r5());
  let h7 = r5(), p5 = t3;
  t3 += h7;
  let A6 = 0, v6 = 0;
  function w7() {
    return A6 == 0 && (v6 = v6 << 8 | e4[t3++], A6 = 8), v6 >> --A6 & 1;
  }
  const y8 = 31, S5 = Math.pow(2, y8), N10 = S5 >>> 1, I6 = N10 >> 1, C6 = S5 - 1;
  let T6 = 0;
  for (let H3 = 0; H3 < y8; H3++) T6 = T6 << 1 | w7();
  let U4 = [], J2 = 0, Bt2 = S5;
  for (; ; ) {
    let H3 = Math.floor(((T6 - J2 + 1) * n6 - 1) / Bt2), L4 = 0, Pt2 = i7;
    for (; Pt2 - L4 > 1; ) {
      let Vt2 = L4 + Pt2 >>> 1;
      H3 < o6[Vt2] ? Pt2 = Vt2 : L4 = Vt2;
    }
    if (L4 == 0) break;
    U4.push(L4);
    let W3 = J2 + Math.floor(Bt2 * o6[L4] / n6), Rt2 = J2 + Math.floor(Bt2 * o6[L4 + 1] / n6) - 1;
    for (; !((W3 ^ Rt2) & N10); ) T6 = T6 << 1 & C6 | w7(), W3 = W3 << 1 & C6, Rt2 = Rt2 << 1 & C6 | 1;
    for (; W3 & ~Rt2 & I6; ) T6 = T6 & N10 | T6 << 1 & C6 >>> 1 | w7(), W3 = W3 << 1 ^ N10, Rt2 = (Rt2 ^ N10) << 1 | N10 | 1;
    J2 = W3, Bt2 = 1 + Rt2 - W3;
  }
  let G2 = i7 - 4;
  return U4.map((H3) => {
    switch (H3 - G2) {
      case 3:
        return G2 + 65792 + (e4[p5++] << 16 | e4[p5++] << 8 | e4[p5++]);
      case 2:
        return G2 + 256 + (e4[p5++] << 8 | e4[p5++]);
      case 1:
        return G2 + e4[p5++];
      default:
        return H3 - 1;
    }
  });
}
function Gs(e4) {
  let t3 = 0;
  return () => e4[t3++];
}
function Ys(e4) {
  return Gs(Js(e4));
}
function Vs(e4) {
  return e4 & 1 ? ~e4 >> 1 : e4 >> 1;
}
function Ws(e4, t3) {
  let r5 = Array(e4);
  for (let i7 = 0; i7 < e4; i7++) r5[i7] = 1 + t3();
  return r5;
}
function sf(e4, t3) {
  let r5 = Array(e4);
  for (let i7 = 0, n6 = -1; i7 < e4; i7++) r5[i7] = n6 += 1 + t3();
  return r5;
}
function Xs(e4, t3) {
  let r5 = Array(e4);
  for (let i7 = 0, n6 = 0; i7 < e4; i7++) r5[i7] = n6 += Vs(t3());
  return r5;
}
function Ur(e4, t3) {
  let r5 = sf(e4(), e4), i7 = e4(), n6 = sf(i7, e4), o6 = Ws(i7, e4);
  for (let h7 = 0; h7 < i7; h7++) for (let p5 = 0; p5 < o6[h7]; p5++) r5.push(n6[h7] + p5);
  return t3 ? r5.map((h7) => t3[h7]) : r5;
}
function Zs(e4) {
  let t3 = [];
  for (; ; ) {
    let r5 = e4();
    if (r5 == 0) break;
    t3.push(t0(r5, e4));
  }
  for (; ; ) {
    let r5 = e4() - 1;
    if (r5 < 0) break;
    t3.push(e0(r5, e4));
  }
  return Qs(of(t3));
}
function $s(e4) {
  let t3 = [];
  for (; ; ) {
    let r5 = e4();
    if (r5 == 0) break;
    t3.push(r5);
  }
  return t3;
}
function af(e4, t3, r5) {
  let i7 = Array(e4).fill(void 0).map(() => []);
  for (let n6 = 0; n6 < t3; n6++) Xs(e4, r5).forEach((o6, h7) => i7[h7].push(o6));
  return i7;
}
function t0(e4, t3) {
  let r5 = 1 + t3(), i7 = t3(), n6 = $s(t3), o6 = af(n6.length, 1 + e4, t3);
  return of(o6.map((h7, p5) => {
    const A6 = h7[0], v6 = h7.slice(1);
    return Array(n6[p5]).fill(void 0).map((w7, y8) => {
      let S5 = y8 * i7;
      return [A6 + y8 * r5, v6.map((N10) => N10 + S5)];
    });
  }));
}
function e0(e4, t3) {
  let r5 = 1 + t3();
  return af(r5, 1 + e4, t3).map((n6) => [n6[0], n6.slice(1)]);
}
function r0(e4) {
  let t3 = Ur(e4).sort((i7, n6) => i7 - n6);
  return r5();
  function r5() {
    let i7 = [];
    for (; ; ) {
      let v6 = Ur(e4, t3);
      if (v6.length == 0) break;
      i7.push({ set: new Set(v6), node: r5() });
    }
    i7.sort((v6, w7) => w7.set.size - v6.set.size);
    let n6 = e4(), o6 = n6 % 3;
    n6 = n6 / 3 | 0;
    let h7 = !!(n6 & 1);
    n6 >>= 1;
    let p5 = n6 == 1, A6 = n6 == 2;
    return { branches: i7, valid: o6, fe0f: h7, save: p5, check: A6 };
  }
}
function i0() {
  return Ys(js("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
var kr = i0();
new Set(Ur(kr)), new Set(Ur(kr)), Zs(kr), r0(kr), new z5(ff);
var n0 = new Uint8Array(32);
n0.fill(0);
var f0 = `Ethereum Signed Message:
`;
function uf(e4) {
  return typeof e4 == "string" && (e4 = Bi(e4)), Si(Rs([Bi(f0), Bi(String(e4.length)), e4]));
}
var o0 = "rlp/5.7.0";
new z5(o0);
var s0 = "address/5.7.0";
var yr = new z5(s0);
function hf(e4) {
  Jt(e4, 20) || yr.throwArgumentError("invalid address", "address", e4), e4 = e4.toLowerCase();
  const t3 = e4.substring(2).split(""), r5 = new Uint8Array(40);
  for (let n6 = 0; n6 < 40; n6++) r5[n6] = t3[n6].charCodeAt(0);
  const i7 = Ot(Si(r5));
  for (let n6 = 0; n6 < 40; n6 += 2) i7[n6 >> 1] >> 4 >= 8 && (t3[n6] = t3[n6].toUpperCase()), (i7[n6 >> 1] & 15) >= 8 && (t3[n6 + 1] = t3[n6 + 1].toUpperCase());
  return "0x" + t3.join("");
}
var a0 = 9007199254740991;
function u0(e4) {
  return Math.log10 ? Math.log10(e4) : Math.log(e4) / Math.LN10;
}
var Ri = {};
for (let e4 = 0; e4 < 10; e4++) Ri[String(e4)] = String(e4);
for (let e4 = 0; e4 < 26; e4++) Ri[String.fromCharCode(65 + e4)] = String(10 + e4);
var cf = Math.floor(u0(a0));
function h0(e4) {
  e4 = e4.toUpperCase(), e4 = e4.substring(4) + e4.substring(0, 2) + "00";
  let t3 = e4.split("").map((i7) => Ri[i7]).join("");
  for (; t3.length >= cf; ) {
    let i7 = t3.substring(0, cf);
    t3 = parseInt(i7, 10) % 97 + t3.substring(i7.length);
  }
  let r5 = String(98 - parseInt(t3, 10) % 97);
  for (; r5.length < 2; ) r5 = "0" + r5;
  return r5;
}
function c0(e4) {
  let t3 = null;
  if (typeof e4 != "string" && yr.throwArgumentError("invalid address", "address", e4), e4.match(/^(0x)?[0-9a-fA-F]{40}$/)) e4.substring(0, 2) !== "0x" && (e4 = "0x" + e4), t3 = hf(e4), e4.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t3 !== e4 && yr.throwArgumentError("bad address checksum", "address", e4);
  else if (e4.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (e4.substring(2, 4) !== h0(e4) && yr.throwArgumentError("bad icap checksum", "address", e4), t3 = ks(e4.substring(4)); t3.length < 40; ) t3 = "0" + t3;
    t3 = hf("0x" + t3);
  } else yr.throwArgumentError("invalid address", "address", e4);
  return t3;
}
var l0 = "properties/5.7.0";
new z5(l0);
function wr(e4, t3, r5) {
  Object.defineProperty(e4, t3, { enumerable: true, value: r5, writable: false });
}
new z5(ff);
var d0 = new Uint8Array(32);
d0.fill(0), V2.from(-1);
var p0 = V2.from(0);
var v0 = V2.from(1);
V2.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe(v0.toHexString(), 32), oe(p0.toHexString(), 32);
var se = {};
var Q2 = {};
var xr = lf;
function lf(e4, t3) {
  if (!e4) throw new Error(t3 || "Assertion failed");
}
lf.equal = function(t3, r5, i7) {
  if (t3 != r5) throw new Error(i7 || "Assertion failed: " + t3 + " != " + r5);
};
var Oi = { exports: {} };
typeof Object.create == "function" ? Oi.exports = function(t3, r5) {
  r5 && (t3.super_ = r5, t3.prototype = Object.create(r5.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }));
} : Oi.exports = function(t3, r5) {
  if (r5) {
    t3.super_ = r5;
    var i7 = function() {
    };
    i7.prototype = r5.prototype, t3.prototype = new i7(), t3.prototype.constructor = t3;
  }
};
var g0 = xr;
var m0 = Oi.exports;
Q2.inherits = m0;
function A0(e4, t3) {
  return (e4.charCodeAt(t3) & 64512) !== 55296 || t3 < 0 || t3 + 1 >= e4.length ? false : (e4.charCodeAt(t3 + 1) & 64512) === 56320;
}
function b0(e4, t3) {
  if (Array.isArray(e4)) return e4.slice();
  if (!e4) return [];
  var r5 = [];
  if (typeof e4 == "string") if (t3) {
    if (t3 === "hex") for (e4 = e4.replace(/[^a-z0-9]+/ig, ""), e4.length % 2 !== 0 && (e4 = "0" + e4), n6 = 0; n6 < e4.length; n6 += 2) r5.push(parseInt(e4[n6] + e4[n6 + 1], 16));
  } else for (var i7 = 0, n6 = 0; n6 < e4.length; n6++) {
    var o6 = e4.charCodeAt(n6);
    o6 < 128 ? r5[i7++] = o6 : o6 < 2048 ? (r5[i7++] = o6 >> 6 | 192, r5[i7++] = o6 & 63 | 128) : A0(e4, n6) ? (o6 = 65536 + ((o6 & 1023) << 10) + (e4.charCodeAt(++n6) & 1023), r5[i7++] = o6 >> 18 | 240, r5[i7++] = o6 >> 12 & 63 | 128, r5[i7++] = o6 >> 6 & 63 | 128, r5[i7++] = o6 & 63 | 128) : (r5[i7++] = o6 >> 12 | 224, r5[i7++] = o6 >> 6 & 63 | 128, r5[i7++] = o6 & 63 | 128);
  }
  else for (n6 = 0; n6 < e4.length; n6++) r5[n6] = e4[n6] | 0;
  return r5;
}
Q2.toArray = b0;
function y0(e4) {
  for (var t3 = "", r5 = 0; r5 < e4.length; r5++) t3 += pf(e4[r5].toString(16));
  return t3;
}
Q2.toHex = y0;
function df(e4) {
  var t3 = e4 >>> 24 | e4 >>> 8 & 65280 | e4 << 8 & 16711680 | (e4 & 255) << 24;
  return t3 >>> 0;
}
Q2.htonl = df;
function w0(e4, t3) {
  for (var r5 = "", i7 = 0; i7 < e4.length; i7++) {
    var n6 = e4[i7];
    t3 === "little" && (n6 = df(n6)), r5 += vf(n6.toString(16));
  }
  return r5;
}
Q2.toHex32 = w0;
function pf(e4) {
  return e4.length === 1 ? "0" + e4 : e4;
}
Q2.zero2 = pf;
function vf(e4) {
  return e4.length === 7 ? "0" + e4 : e4.length === 6 ? "00" + e4 : e4.length === 5 ? "000" + e4 : e4.length === 4 ? "0000" + e4 : e4.length === 3 ? "00000" + e4 : e4.length === 2 ? "000000" + e4 : e4.length === 1 ? "0000000" + e4 : e4;
}
Q2.zero8 = vf;
function x0(e4, t3, r5, i7) {
  var n6 = r5 - t3;
  g0(n6 % 4 === 0);
  for (var o6 = new Array(n6 / 4), h7 = 0, p5 = t3; h7 < o6.length; h7++, p5 += 4) {
    var A6;
    i7 === "big" ? A6 = e4[p5] << 24 | e4[p5 + 1] << 16 | e4[p5 + 2] << 8 | e4[p5 + 3] : A6 = e4[p5 + 3] << 24 | e4[p5 + 2] << 16 | e4[p5 + 1] << 8 | e4[p5], o6[h7] = A6 >>> 0;
  }
  return o6;
}
Q2.join32 = x0;
function M0(e4, t3) {
  for (var r5 = new Array(e4.length * 4), i7 = 0, n6 = 0; i7 < e4.length; i7++, n6 += 4) {
    var o6 = e4[i7];
    t3 === "big" ? (r5[n6] = o6 >>> 24, r5[n6 + 1] = o6 >>> 16 & 255, r5[n6 + 2] = o6 >>> 8 & 255, r5[n6 + 3] = o6 & 255) : (r5[n6 + 3] = o6 >>> 24, r5[n6 + 2] = o6 >>> 16 & 255, r5[n6 + 1] = o6 >>> 8 & 255, r5[n6] = o6 & 255);
  }
  return r5;
}
Q2.split32 = M0;
function E0(e4, t3) {
  return e4 >>> t3 | e4 << 32 - t3;
}
Q2.rotr32 = E0;
function S0(e4, t3) {
  return e4 << t3 | e4 >>> 32 - t3;
}
Q2.rotl32 = S0;
function I0(e4, t3) {
  return e4 + t3 >>> 0;
}
Q2.sum32 = I0;
function N0(e4, t3, r5) {
  return e4 + t3 + r5 >>> 0;
}
Q2.sum32_3 = N0;
function _0(e4, t3, r5, i7) {
  return e4 + t3 + r5 + i7 >>> 0;
}
Q2.sum32_4 = _0;
function B0(e4, t3, r5, i7, n6) {
  return e4 + t3 + r5 + i7 + n6 >>> 0;
}
Q2.sum32_5 = B0;
function C0(e4, t3, r5, i7) {
  var n6 = e4[t3], o6 = e4[t3 + 1], h7 = i7 + o6 >>> 0, p5 = (h7 < i7 ? 1 : 0) + r5 + n6;
  e4[t3] = p5 >>> 0, e4[t3 + 1] = h7;
}
Q2.sum64 = C0;
function R0(e4, t3, r5, i7) {
  var n6 = t3 + i7 >>> 0, o6 = (n6 < t3 ? 1 : 0) + e4 + r5;
  return o6 >>> 0;
}
Q2.sum64_hi = R0;
function O0(e4, t3, r5, i7) {
  var n6 = t3 + i7;
  return n6 >>> 0;
}
Q2.sum64_lo = O0;
function P0(e4, t3, r5, i7, n6, o6, h7, p5) {
  var A6 = 0, v6 = t3;
  v6 = v6 + i7 >>> 0, A6 += v6 < t3 ? 1 : 0, v6 = v6 + o6 >>> 0, A6 += v6 < o6 ? 1 : 0, v6 = v6 + p5 >>> 0, A6 += v6 < p5 ? 1 : 0;
  var w7 = e4 + r5 + n6 + h7 + A6;
  return w7 >>> 0;
}
Q2.sum64_4_hi = P0;
function D0(e4, t3, r5, i7, n6, o6, h7, p5) {
  var A6 = t3 + i7 + o6 + p5;
  return A6 >>> 0;
}
Q2.sum64_4_lo = D0;
function T0(e4, t3, r5, i7, n6, o6, h7, p5, A6, v6) {
  var w7 = 0, y8 = t3;
  y8 = y8 + i7 >>> 0, w7 += y8 < t3 ? 1 : 0, y8 = y8 + o6 >>> 0, w7 += y8 < o6 ? 1 : 0, y8 = y8 + p5 >>> 0, w7 += y8 < p5 ? 1 : 0, y8 = y8 + v6 >>> 0, w7 += y8 < v6 ? 1 : 0;
  var S5 = e4 + r5 + n6 + h7 + A6 + w7;
  return S5 >>> 0;
}
Q2.sum64_5_hi = T0;
function F0(e4, t3, r5, i7, n6, o6, h7, p5, A6, v6) {
  var w7 = t3 + i7 + o6 + p5 + v6;
  return w7 >>> 0;
}
Q2.sum64_5_lo = F0;
function U0(e4, t3, r5) {
  var i7 = t3 << 32 - r5 | e4 >>> r5;
  return i7 >>> 0;
}
Q2.rotr64_hi = U0;
function k0(e4, t3, r5) {
  var i7 = e4 << 32 - r5 | t3 >>> r5;
  return i7 >>> 0;
}
Q2.rotr64_lo = k0;
function q0(e4, t3, r5) {
  return e4 >>> r5;
}
Q2.shr64_hi = q0;
function K0(e4, t3, r5) {
  var i7 = e4 << 32 - r5 | t3 >>> r5;
  return i7 >>> 0;
}
Q2.shr64_lo = K0;
var or2 = {};
var gf = Q2;
var H0 = xr;
function qr() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
or2.BlockHash = qr, qr.prototype.update = function(t3, r5) {
  if (t3 = gf.toArray(t3, r5), this.pending ? this.pending = this.pending.concat(t3) : this.pending = t3, this.pendingTotal += t3.length, this.pending.length >= this._delta8) {
    t3 = this.pending;
    var i7 = t3.length % this._delta8;
    this.pending = t3.slice(t3.length - i7, t3.length), this.pending.length === 0 && (this.pending = null), t3 = gf.join32(t3, 0, t3.length - i7, this.endian);
    for (var n6 = 0; n6 < t3.length; n6 += this._delta32) this._update(t3, n6, n6 + this._delta32);
  }
  return this;
}, qr.prototype.digest = function(t3) {
  return this.update(this._pad()), H0(this.pending === null), this._digest(t3);
}, qr.prototype._pad = function() {
  var t3 = this.pendingTotal, r5 = this._delta8, i7 = r5 - (t3 + this.padLength) % r5, n6 = new Array(i7 + this.padLength);
  n6[0] = 128;
  for (var o6 = 1; o6 < i7; o6++) n6[o6] = 0;
  if (t3 <<= 3, this.endian === "big") {
    for (var h7 = 8; h7 < this.padLength; h7++) n6[o6++] = 0;
    n6[o6++] = 0, n6[o6++] = 0, n6[o6++] = 0, n6[o6++] = 0, n6[o6++] = t3 >>> 24 & 255, n6[o6++] = t3 >>> 16 & 255, n6[o6++] = t3 >>> 8 & 255, n6[o6++] = t3 & 255;
  } else for (n6[o6++] = t3 & 255, n6[o6++] = t3 >>> 8 & 255, n6[o6++] = t3 >>> 16 & 255, n6[o6++] = t3 >>> 24 & 255, n6[o6++] = 0, n6[o6++] = 0, n6[o6++] = 0, n6[o6++] = 0, h7 = 8; h7 < this.padLength; h7++) n6[o6++] = 0;
  return n6;
};
var sr = {};
var ae = {};
var L0 = Q2;
var ue = L0.rotr32;
function z0(e4, t3, r5, i7) {
  if (e4 === 0) return mf(t3, r5, i7);
  if (e4 === 1 || e4 === 3) return bf(t3, r5, i7);
  if (e4 === 2) return Af(t3, r5, i7);
}
ae.ft_1 = z0;
function mf(e4, t3, r5) {
  return e4 & t3 ^ ~e4 & r5;
}
ae.ch32 = mf;
function Af(e4, t3, r5) {
  return e4 & t3 ^ e4 & r5 ^ t3 & r5;
}
ae.maj32 = Af;
function bf(e4, t3, r5) {
  return e4 ^ t3 ^ r5;
}
ae.p32 = bf;
function j0(e4) {
  return ue(e4, 2) ^ ue(e4, 13) ^ ue(e4, 22);
}
ae.s0_256 = j0;
function Q0(e4) {
  return ue(e4, 6) ^ ue(e4, 11) ^ ue(e4, 25);
}
ae.s1_256 = Q0;
function J0(e4) {
  return ue(e4, 7) ^ ue(e4, 18) ^ e4 >>> 3;
}
ae.g0_256 = J0;
function G0(e4) {
  return ue(e4, 17) ^ ue(e4, 19) ^ e4 >>> 10;
}
ae.g1_256 = G0;
var ar = Q2;
var Y0 = or2;
var V0 = ae;
var Pi = ar.rotl32;
var Mr = ar.sum32;
var W0 = ar.sum32_5;
var X0 = V0.ft_1;
var yf = Y0.BlockHash;
var Z0 = [1518500249, 1859775393, 2400959708, 3395469782];
function he() {
  if (!(this instanceof he)) return new he();
  yf.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
ar.inherits(he, yf);
var $0 = he;
he.blockSize = 512, he.outSize = 160, he.hmacStrength = 80, he.padLength = 64, he.prototype._update = function(t3, r5) {
  for (var i7 = this.W, n6 = 0; n6 < 16; n6++) i7[n6] = t3[r5 + n6];
  for (; n6 < i7.length; n6++) i7[n6] = Pi(i7[n6 - 3] ^ i7[n6 - 8] ^ i7[n6 - 14] ^ i7[n6 - 16], 1);
  var o6 = this.h[0], h7 = this.h[1], p5 = this.h[2], A6 = this.h[3], v6 = this.h[4];
  for (n6 = 0; n6 < i7.length; n6++) {
    var w7 = ~~(n6 / 20), y8 = W0(Pi(o6, 5), X0(w7, h7, p5, A6), v6, i7[n6], Z0[w7]);
    v6 = A6, A6 = p5, p5 = Pi(h7, 30), h7 = o6, o6 = y8;
  }
  this.h[0] = Mr(this.h[0], o6), this.h[1] = Mr(this.h[1], h7), this.h[2] = Mr(this.h[2], p5), this.h[3] = Mr(this.h[3], A6), this.h[4] = Mr(this.h[4], v6);
}, he.prototype._digest = function(t3) {
  return t3 === "hex" ? ar.toHex32(this.h, "big") : ar.split32(this.h, "big");
};
var ur = Q2;
var ta = or2;
var hr = ae;
var ea = xr;
var ie = ur.sum32;
var ra = ur.sum32_4;
var ia = ur.sum32_5;
var na = hr.ch32;
var fa = hr.maj32;
var oa = hr.s0_256;
var sa = hr.s1_256;
var aa = hr.g0_256;
var ua = hr.g1_256;
var wf = ta.BlockHash;
var ha = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function ce() {
  if (!(this instanceof ce)) return new ce();
  wf.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ha, this.W = new Array(64);
}
ur.inherits(ce, wf);
var xf = ce;
ce.blockSize = 512, ce.outSize = 256, ce.hmacStrength = 192, ce.padLength = 64, ce.prototype._update = function(t3, r5) {
  for (var i7 = this.W, n6 = 0; n6 < 16; n6++) i7[n6] = t3[r5 + n6];
  for (; n6 < i7.length; n6++) i7[n6] = ra(ua(i7[n6 - 2]), i7[n6 - 7], aa(i7[n6 - 15]), i7[n6 - 16]);
  var o6 = this.h[0], h7 = this.h[1], p5 = this.h[2], A6 = this.h[3], v6 = this.h[4], w7 = this.h[5], y8 = this.h[6], S5 = this.h[7];
  for (ea(this.k.length === i7.length), n6 = 0; n6 < i7.length; n6++) {
    var N10 = ia(S5, sa(v6), na(v6, w7, y8), this.k[n6], i7[n6]), I6 = ie(oa(o6), fa(o6, h7, p5));
    S5 = y8, y8 = w7, w7 = v6, v6 = ie(A6, N10), A6 = p5, p5 = h7, h7 = o6, o6 = ie(N10, I6);
  }
  this.h[0] = ie(this.h[0], o6), this.h[1] = ie(this.h[1], h7), this.h[2] = ie(this.h[2], p5), this.h[3] = ie(this.h[3], A6), this.h[4] = ie(this.h[4], v6), this.h[5] = ie(this.h[5], w7), this.h[6] = ie(this.h[6], y8), this.h[7] = ie(this.h[7], S5);
}, ce.prototype._digest = function(t3) {
  return t3 === "hex" ? ur.toHex32(this.h, "big") : ur.split32(this.h, "big");
};
var Di = Q2;
var Mf = xf;
function ye() {
  if (!(this instanceof ye)) return new ye();
  Mf.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Di.inherits(ye, Mf);
var ca = ye;
ye.blockSize = 512, ye.outSize = 224, ye.hmacStrength = 192, ye.padLength = 64, ye.prototype._digest = function(t3) {
  return t3 === "hex" ? Di.toHex32(this.h.slice(0, 7), "big") : Di.split32(this.h.slice(0, 7), "big");
};
var jt = Q2;
var la = or2;
var da = xr;
var le = jt.rotr64_hi;
var de = jt.rotr64_lo;
var Ef = jt.shr64_hi;
var Sf = jt.shr64_lo;
var Be = jt.sum64;
var Ti = jt.sum64_hi;
var Fi = jt.sum64_lo;
var pa = jt.sum64_4_hi;
var va = jt.sum64_4_lo;
var ga = jt.sum64_5_hi;
var ma = jt.sum64_5_lo;
var If = la.BlockHash;
var Aa = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function ne() {
  if (!(this instanceof ne)) return new ne();
  If.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = Aa, this.W = new Array(160);
}
jt.inherits(ne, If);
var Nf = ne;
ne.blockSize = 1024, ne.outSize = 512, ne.hmacStrength = 192, ne.padLength = 128, ne.prototype._prepareBlock = function(t3, r5) {
  for (var i7 = this.W, n6 = 0; n6 < 32; n6++) i7[n6] = t3[r5 + n6];
  for (; n6 < i7.length; n6 += 2) {
    var o6 = Ba(i7[n6 - 4], i7[n6 - 3]), h7 = Ca(i7[n6 - 4], i7[n6 - 3]), p5 = i7[n6 - 14], A6 = i7[n6 - 13], v6 = Na(i7[n6 - 30], i7[n6 - 29]), w7 = _a(i7[n6 - 30], i7[n6 - 29]), y8 = i7[n6 - 32], S5 = i7[n6 - 31];
    i7[n6] = pa(o6, h7, p5, A6, v6, w7, y8, S5), i7[n6 + 1] = va(o6, h7, p5, A6, v6, w7, y8, S5);
  }
}, ne.prototype._update = function(t3, r5) {
  this._prepareBlock(t3, r5);
  var i7 = this.W, n6 = this.h[0], o6 = this.h[1], h7 = this.h[2], p5 = this.h[3], A6 = this.h[4], v6 = this.h[5], w7 = this.h[6], y8 = this.h[7], S5 = this.h[8], N10 = this.h[9], I6 = this.h[10], C6 = this.h[11], T6 = this.h[12], U4 = this.h[13], J2 = this.h[14], Bt2 = this.h[15];
  da(this.k.length === i7.length);
  for (var G2 = 0; G2 < i7.length; G2 += 2) {
    var H3 = J2, L4 = Bt2, Pt2 = Sa(S5, N10), W3 = Ia(S5, N10), Rt2 = ba(S5, N10, I6, C6, T6), Vt2 = ya(S5, N10, I6, C6, T6, U4), Y2 = this.k[G2], Wt2 = this.k[G2 + 1], b5 = i7[G2], f6 = i7[G2 + 1], a6 = ga(H3, L4, Pt2, W3, Rt2, Vt2, Y2, Wt2, b5, f6), c8 = ma(H3, L4, Pt2, W3, Rt2, Vt2, Y2, Wt2, b5, f6);
    H3 = Ma(n6, o6), L4 = Ea(n6, o6), Pt2 = wa(n6, o6, h7, p5, A6), W3 = xa(n6, o6, h7, p5, A6, v6);
    var d5 = Ti(H3, L4, Pt2, W3), m4 = Fi(H3, L4, Pt2, W3);
    J2 = T6, Bt2 = U4, T6 = I6, U4 = C6, I6 = S5, C6 = N10, S5 = Ti(w7, y8, a6, c8), N10 = Fi(y8, y8, a6, c8), w7 = A6, y8 = v6, A6 = h7, v6 = p5, h7 = n6, p5 = o6, n6 = Ti(a6, c8, d5, m4), o6 = Fi(a6, c8, d5, m4);
  }
  Be(this.h, 0, n6, o6), Be(this.h, 2, h7, p5), Be(this.h, 4, A6, v6), Be(this.h, 6, w7, y8), Be(this.h, 8, S5, N10), Be(this.h, 10, I6, C6), Be(this.h, 12, T6, U4), Be(this.h, 14, J2, Bt2);
}, ne.prototype._digest = function(t3) {
  return t3 === "hex" ? jt.toHex32(this.h, "big") : jt.split32(this.h, "big");
};
function ba(e4, t3, r5, i7, n6) {
  var o6 = e4 & r5 ^ ~e4 & n6;
  return o6 < 0 && (o6 += 4294967296), o6;
}
function ya(e4, t3, r5, i7, n6, o6) {
  var h7 = t3 & i7 ^ ~t3 & o6;
  return h7 < 0 && (h7 += 4294967296), h7;
}
function wa(e4, t3, r5, i7, n6) {
  var o6 = e4 & r5 ^ e4 & n6 ^ r5 & n6;
  return o6 < 0 && (o6 += 4294967296), o6;
}
function xa(e4, t3, r5, i7, n6, o6) {
  var h7 = t3 & i7 ^ t3 & o6 ^ i7 & o6;
  return h7 < 0 && (h7 += 4294967296), h7;
}
function Ma(e4, t3) {
  var r5 = le(e4, t3, 28), i7 = le(t3, e4, 2), n6 = le(t3, e4, 7), o6 = r5 ^ i7 ^ n6;
  return o6 < 0 && (o6 += 4294967296), o6;
}
function Ea(e4, t3) {
  var r5 = de(e4, t3, 28), i7 = de(t3, e4, 2), n6 = de(t3, e4, 7), o6 = r5 ^ i7 ^ n6;
  return o6 < 0 && (o6 += 4294967296), o6;
}
function Sa(e4, t3) {
  var r5 = le(e4, t3, 14), i7 = le(e4, t3, 18), n6 = le(t3, e4, 9), o6 = r5 ^ i7 ^ n6;
  return o6 < 0 && (o6 += 4294967296), o6;
}
function Ia(e4, t3) {
  var r5 = de(e4, t3, 14), i7 = de(e4, t3, 18), n6 = de(t3, e4, 9), o6 = r5 ^ i7 ^ n6;
  return o6 < 0 && (o6 += 4294967296), o6;
}
function Na(e4, t3) {
  var r5 = le(e4, t3, 1), i7 = le(e4, t3, 8), n6 = Ef(e4, t3, 7), o6 = r5 ^ i7 ^ n6;
  return o6 < 0 && (o6 += 4294967296), o6;
}
function _a(e4, t3) {
  var r5 = de(e4, t3, 1), i7 = de(e4, t3, 8), n6 = Sf(e4, t3, 7), o6 = r5 ^ i7 ^ n6;
  return o6 < 0 && (o6 += 4294967296), o6;
}
function Ba(e4, t3) {
  var r5 = le(e4, t3, 19), i7 = le(t3, e4, 29), n6 = Ef(e4, t3, 6), o6 = r5 ^ i7 ^ n6;
  return o6 < 0 && (o6 += 4294967296), o6;
}
function Ca(e4, t3) {
  var r5 = de(e4, t3, 19), i7 = de(t3, e4, 29), n6 = Sf(e4, t3, 6), o6 = r5 ^ i7 ^ n6;
  return o6 < 0 && (o6 += 4294967296), o6;
}
var Ui = Q2;
var _f = Nf;
function we() {
  if (!(this instanceof we)) return new we();
  _f.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
Ui.inherits(we, _f);
var Ra = we;
we.blockSize = 1024, we.outSize = 384, we.hmacStrength = 192, we.padLength = 128, we.prototype._digest = function(t3) {
  return t3 === "hex" ? Ui.toHex32(this.h.slice(0, 12), "big") : Ui.split32(this.h.slice(0, 12), "big");
}, sr.sha1 = $0, sr.sha224 = ca, sr.sha256 = xf, sr.sha384 = Ra, sr.sha512 = Nf;
var Bf = {};
var Xe = Q2;
var Oa = or2;
var Kr = Xe.rotl32;
var Cf = Xe.sum32;
var Er = Xe.sum32_3;
var Rf = Xe.sum32_4;
var Of = Oa.BlockHash;
function pe() {
  if (!(this instanceof pe)) return new pe();
  Of.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Xe.inherits(pe, Of), Bf.ripemd160 = pe, pe.blockSize = 512, pe.outSize = 160, pe.hmacStrength = 192, pe.padLength = 64, pe.prototype._update = function(t3, r5) {
  for (var i7 = this.h[0], n6 = this.h[1], o6 = this.h[2], h7 = this.h[3], p5 = this.h[4], A6 = i7, v6 = n6, w7 = o6, y8 = h7, S5 = p5, N10 = 0; N10 < 80; N10++) {
    var I6 = Cf(Kr(Rf(i7, Pf(N10, n6, o6, h7), t3[Ta[N10] + r5], Pa(N10)), Ua[N10]), p5);
    i7 = p5, p5 = h7, h7 = Kr(o6, 10), o6 = n6, n6 = I6, I6 = Cf(Kr(Rf(A6, Pf(79 - N10, v6, w7, y8), t3[Fa[N10] + r5], Da(N10)), ka[N10]), S5), A6 = S5, S5 = y8, y8 = Kr(w7, 10), w7 = v6, v6 = I6;
  }
  I6 = Er(this.h[1], o6, y8), this.h[1] = Er(this.h[2], h7, S5), this.h[2] = Er(this.h[3], p5, A6), this.h[3] = Er(this.h[4], i7, v6), this.h[4] = Er(this.h[0], n6, w7), this.h[0] = I6;
}, pe.prototype._digest = function(t3) {
  return t3 === "hex" ? Xe.toHex32(this.h, "little") : Xe.split32(this.h, "little");
};
function Pf(e4, t3, r5, i7) {
  return e4 <= 15 ? t3 ^ r5 ^ i7 : e4 <= 31 ? t3 & r5 | ~t3 & i7 : e4 <= 47 ? (t3 | ~r5) ^ i7 : e4 <= 63 ? t3 & i7 | r5 & ~i7 : t3 ^ (r5 | ~i7);
}
function Pa(e4) {
  return e4 <= 15 ? 0 : e4 <= 31 ? 1518500249 : e4 <= 47 ? 1859775393 : e4 <= 63 ? 2400959708 : 2840853838;
}
function Da(e4) {
  return e4 <= 15 ? 1352829926 : e4 <= 31 ? 1548603684 : e4 <= 47 ? 1836072691 : e4 <= 63 ? 2053994217 : 0;
}
var Ta = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
var Fa = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
var Ua = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
var ka = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
var qa = Q2;
var Ka = xr;
function cr(e4, t3, r5) {
  if (!(this instanceof cr)) return new cr(e4, t3, r5);
  this.Hash = e4, this.blockSize = e4.blockSize / 8, this.outSize = e4.outSize / 8, this.inner = null, this.outer = null, this._init(qa.toArray(t3, r5));
}
var Ha = cr;
cr.prototype._init = function(t3) {
  t3.length > this.blockSize && (t3 = new this.Hash().update(t3).digest()), Ka(t3.length <= this.blockSize);
  for (var r5 = t3.length; r5 < this.blockSize; r5++) t3.push(0);
  for (r5 = 0; r5 < t3.length; r5++) t3[r5] ^= 54;
  for (this.inner = new this.Hash().update(t3), r5 = 0; r5 < t3.length; r5++) t3[r5] ^= 106;
  this.outer = new this.Hash().update(t3);
}, cr.prototype.update = function(t3, r5) {
  return this.inner.update(t3, r5), this;
}, cr.prototype.digest = function(t3) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t3);
}, function(e4) {
  var t3 = e4;
  t3.utils = Q2, t3.common = or2, t3.sha = sr, t3.ripemd = Bf, t3.hmac = Ha, t3.sha1 = t3.sha.sha1, t3.sha256 = t3.sha.sha256, t3.sha224 = t3.sha.sha224, t3.sha384 = t3.sha.sha384, t3.sha512 = t3.sha.sha512, t3.ripemd160 = t3.ripemd.ripemd160;
}(se);
function lr(e4, t3, r5) {
  return r5 = { path: t3, exports: {}, require: function(i7, n6) {
    return La(i7, n6 ?? r5.path);
  } }, e4(r5, r5.exports), r5.exports;
}
function La() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var ki = Df;
function Df(e4, t3) {
  if (!e4) throw new Error(t3 || "Assertion failed");
}
Df.equal = function(t3, r5, i7) {
  if (t3 != r5) throw new Error(i7 || "Assertion failed: " + t3 + " != " + r5);
};
var fe = lr(function(e4, t3) {
  var r5 = t3;
  function i7(h7, p5) {
    if (Array.isArray(h7)) return h7.slice();
    if (!h7) return [];
    var A6 = [];
    if (typeof h7 != "string") {
      for (var v6 = 0; v6 < h7.length; v6++) A6[v6] = h7[v6] | 0;
      return A6;
    }
    if (p5 === "hex") {
      h7 = h7.replace(/[^a-z0-9]+/ig, ""), h7.length % 2 !== 0 && (h7 = "0" + h7);
      for (var v6 = 0; v6 < h7.length; v6 += 2) A6.push(parseInt(h7[v6] + h7[v6 + 1], 16));
    } else for (var v6 = 0; v6 < h7.length; v6++) {
      var w7 = h7.charCodeAt(v6), y8 = w7 >> 8, S5 = w7 & 255;
      y8 ? A6.push(y8, S5) : A6.push(S5);
    }
    return A6;
  }
  r5.toArray = i7;
  function n6(h7) {
    return h7.length === 1 ? "0" + h7 : h7;
  }
  r5.zero2 = n6;
  function o6(h7) {
    for (var p5 = "", A6 = 0; A6 < h7.length; A6++) p5 += n6(h7[A6].toString(16));
    return p5;
  }
  r5.toHex = o6, r5.encode = function(p5, A6) {
    return A6 === "hex" ? o6(p5) : p5;
  };
});
var Gt = lr(function(e4, t3) {
  var r5 = t3;
  r5.assert = ki, r5.toArray = fe.toArray, r5.zero2 = fe.zero2, r5.toHex = fe.toHex, r5.encode = fe.encode;
  function i7(A6, v6, w7) {
    var y8 = new Array(Math.max(A6.bitLength(), w7) + 1);
    y8.fill(0);
    for (var S5 = 1 << v6 + 1, N10 = A6.clone(), I6 = 0; I6 < y8.length; I6++) {
      var C6, T6 = N10.andln(S5 - 1);
      N10.isOdd() ? (T6 > (S5 >> 1) - 1 ? C6 = (S5 >> 1) - T6 : C6 = T6, N10.isubn(C6)) : C6 = 0, y8[I6] = C6, N10.iushrn(1);
    }
    return y8;
  }
  r5.getNAF = i7;
  function n6(A6, v6) {
    var w7 = [[], []];
    A6 = A6.clone(), v6 = v6.clone();
    for (var y8 = 0, S5 = 0, N10; A6.cmpn(-y8) > 0 || v6.cmpn(-S5) > 0; ) {
      var I6 = A6.andln(3) + y8 & 3, C6 = v6.andln(3) + S5 & 3;
      I6 === 3 && (I6 = -1), C6 === 3 && (C6 = -1);
      var T6;
      I6 & 1 ? (N10 = A6.andln(7) + y8 & 7, (N10 === 3 || N10 === 5) && C6 === 2 ? T6 = -I6 : T6 = I6) : T6 = 0, w7[0].push(T6);
      var U4;
      C6 & 1 ? (N10 = v6.andln(7) + S5 & 7, (N10 === 3 || N10 === 5) && I6 === 2 ? U4 = -C6 : U4 = C6) : U4 = 0, w7[1].push(U4), 2 * y8 === T6 + 1 && (y8 = 1 - y8), 2 * S5 === U4 + 1 && (S5 = 1 - S5), A6.iushrn(1), v6.iushrn(1);
    }
    return w7;
  }
  r5.getJSF = n6;
  function o6(A6, v6, w7) {
    var y8 = "_" + v6;
    A6.prototype[v6] = function() {
      return this[y8] !== void 0 ? this[y8] : this[y8] = w7.call(this);
    };
  }
  r5.cachedProperty = o6;
  function h7(A6) {
    return typeof A6 == "string" ? r5.toArray(A6, "hex") : A6;
  }
  r5.parseBytes = h7;
  function p5(A6) {
    return new K3(A6, "hex", "le");
  }
  r5.intFromLE = p5;
});
var Hr = Gt.getNAF;
var za = Gt.getJSF;
var Lr = Gt.assert;
function Ce(e4, t3) {
  this.type = e4, this.p = new K3(t3.p, 16), this.red = t3.prime ? K3.red(t3.prime) : K3.mont(this.p), this.zero = new K3(0).toRed(this.red), this.one = new K3(1).toRed(this.red), this.two = new K3(2).toRed(this.red), this.n = t3.n && new K3(t3.n, 16), this.g = t3.g && this.pointFromJSON(t3.g, t3.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r5 = this.n && this.p.div(this.n);
  !r5 || r5.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
}
var Ze = Ce;
Ce.prototype.point = function() {
  throw new Error("Not implemented");
}, Ce.prototype.validate = function() {
  throw new Error("Not implemented");
}, Ce.prototype._fixedNafMul = function(t3, r5) {
  Lr(t3.precomputed);
  var i7 = t3._getDoubles(), n6 = Hr(r5, 1, this._bitLength), o6 = (1 << i7.step + 1) - (i7.step % 2 === 0 ? 2 : 1);
  o6 /= 3;
  var h7 = [], p5, A6;
  for (p5 = 0; p5 < n6.length; p5 += i7.step) {
    A6 = 0;
    for (var v6 = p5 + i7.step - 1; v6 >= p5; v6--) A6 = (A6 << 1) + n6[v6];
    h7.push(A6);
  }
  for (var w7 = this.jpoint(null, null, null), y8 = this.jpoint(null, null, null), S5 = o6; S5 > 0; S5--) {
    for (p5 = 0; p5 < h7.length; p5++) A6 = h7[p5], A6 === S5 ? y8 = y8.mixedAdd(i7.points[p5]) : A6 === -S5 && (y8 = y8.mixedAdd(i7.points[p5].neg()));
    w7 = w7.add(y8);
  }
  return w7.toP();
}, Ce.prototype._wnafMul = function(t3, r5) {
  var i7 = 4, n6 = t3._getNAFPoints(i7);
  i7 = n6.wnd;
  for (var o6 = n6.points, h7 = Hr(r5, i7, this._bitLength), p5 = this.jpoint(null, null, null), A6 = h7.length - 1; A6 >= 0; A6--) {
    for (var v6 = 0; A6 >= 0 && h7[A6] === 0; A6--) v6++;
    if (A6 >= 0 && v6++, p5 = p5.dblp(v6), A6 < 0) break;
    var w7 = h7[A6];
    Lr(w7 !== 0), t3.type === "affine" ? w7 > 0 ? p5 = p5.mixedAdd(o6[w7 - 1 >> 1]) : p5 = p5.mixedAdd(o6[-w7 - 1 >> 1].neg()) : w7 > 0 ? p5 = p5.add(o6[w7 - 1 >> 1]) : p5 = p5.add(o6[-w7 - 1 >> 1].neg());
  }
  return t3.type === "affine" ? p5.toP() : p5;
}, Ce.prototype._wnafMulAdd = function(t3, r5, i7, n6, o6) {
  var h7 = this._wnafT1, p5 = this._wnafT2, A6 = this._wnafT3, v6 = 0, w7, y8, S5;
  for (w7 = 0; w7 < n6; w7++) {
    S5 = r5[w7];
    var N10 = S5._getNAFPoints(t3);
    h7[w7] = N10.wnd, p5[w7] = N10.points;
  }
  for (w7 = n6 - 1; w7 >= 1; w7 -= 2) {
    var I6 = w7 - 1, C6 = w7;
    if (h7[I6] !== 1 || h7[C6] !== 1) {
      A6[I6] = Hr(i7[I6], h7[I6], this._bitLength), A6[C6] = Hr(i7[C6], h7[C6], this._bitLength), v6 = Math.max(A6[I6].length, v6), v6 = Math.max(A6[C6].length, v6);
      continue;
    }
    var T6 = [r5[I6], null, null, r5[C6]];
    r5[I6].y.cmp(r5[C6].y) === 0 ? (T6[1] = r5[I6].add(r5[C6]), T6[2] = r5[I6].toJ().mixedAdd(r5[C6].neg())) : r5[I6].y.cmp(r5[C6].y.redNeg()) === 0 ? (T6[1] = r5[I6].toJ().mixedAdd(r5[C6]), T6[2] = r5[I6].add(r5[C6].neg())) : (T6[1] = r5[I6].toJ().mixedAdd(r5[C6]), T6[2] = r5[I6].toJ().mixedAdd(r5[C6].neg()));
    var U4 = [-3, -1, -5, -7, 0, 7, 5, 1, 3], J2 = za(i7[I6], i7[C6]);
    for (v6 = Math.max(J2[0].length, v6), A6[I6] = new Array(v6), A6[C6] = new Array(v6), y8 = 0; y8 < v6; y8++) {
      var Bt2 = J2[0][y8] | 0, G2 = J2[1][y8] | 0;
      A6[I6][y8] = U4[(Bt2 + 1) * 3 + (G2 + 1)], A6[C6][y8] = 0, p5[I6] = T6;
    }
  }
  var H3 = this.jpoint(null, null, null), L4 = this._wnafT4;
  for (w7 = v6; w7 >= 0; w7--) {
    for (var Pt2 = 0; w7 >= 0; ) {
      var W3 = true;
      for (y8 = 0; y8 < n6; y8++) L4[y8] = A6[y8][w7] | 0, L4[y8] !== 0 && (W3 = false);
      if (!W3) break;
      Pt2++, w7--;
    }
    if (w7 >= 0 && Pt2++, H3 = H3.dblp(Pt2), w7 < 0) break;
    for (y8 = 0; y8 < n6; y8++) {
      var Rt2 = L4[y8];
      Rt2 !== 0 && (Rt2 > 0 ? S5 = p5[y8][Rt2 - 1 >> 1] : Rt2 < 0 && (S5 = p5[y8][-Rt2 - 1 >> 1].neg()), S5.type === "affine" ? H3 = H3.mixedAdd(S5) : H3 = H3.add(S5));
    }
  }
  for (w7 = 0; w7 < n6; w7++) p5[w7] = null;
  return o6 ? H3 : H3.toP();
};
function $t(e4, t3) {
  this.curve = e4, this.type = t3, this.precomputed = null;
}
Ce.BasePoint = $t, $t.prototype.eq = function() {
  throw new Error("Not implemented");
}, $t.prototype.validate = function() {
  return this.curve.validate(this);
}, Ce.prototype.decodePoint = function(t3, r5) {
  t3 = Gt.toArray(t3, r5);
  var i7 = this.p.byteLength();
  if ((t3[0] === 4 || t3[0] === 6 || t3[0] === 7) && t3.length - 1 === 2 * i7) {
    t3[0] === 6 ? Lr(t3[t3.length - 1] % 2 === 0) : t3[0] === 7 && Lr(t3[t3.length - 1] % 2 === 1);
    var n6 = this.point(t3.slice(1, 1 + i7), t3.slice(1 + i7, 1 + 2 * i7));
    return n6;
  } else if ((t3[0] === 2 || t3[0] === 3) && t3.length - 1 === i7) return this.pointFromX(t3.slice(1, 1 + i7), t3[0] === 3);
  throw new Error("Unknown point format");
}, $t.prototype.encodeCompressed = function(t3) {
  return this.encode(t3, true);
}, $t.prototype._encode = function(t3) {
  var r5 = this.curve.p.byteLength(), i7 = this.getX().toArray("be", r5);
  return t3 ? [this.getY().isEven() ? 2 : 3].concat(i7) : [4].concat(i7, this.getY().toArray("be", r5));
}, $t.prototype.encode = function(t3, r5) {
  return Gt.encode(this._encode(r5), t3);
}, $t.prototype.precompute = function(t3) {
  if (this.precomputed) return this;
  var r5 = { doubles: null, naf: null, beta: null };
  return r5.naf = this._getNAFPoints(8), r5.doubles = this._getDoubles(4, t3), r5.beta = this._getBeta(), this.precomputed = r5, this;
}, $t.prototype._hasDoubles = function(t3) {
  if (!this.precomputed) return false;
  var r5 = this.precomputed.doubles;
  return r5 ? r5.points.length >= Math.ceil((t3.bitLength() + 1) / r5.step) : false;
}, $t.prototype._getDoubles = function(t3, r5) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  for (var i7 = [this], n6 = this, o6 = 0; o6 < r5; o6 += t3) {
    for (var h7 = 0; h7 < t3; h7++) n6 = n6.dbl();
    i7.push(n6);
  }
  return { step: t3, points: i7 };
}, $t.prototype._getNAFPoints = function(t3) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (var r5 = [this], i7 = (1 << t3) - 1, n6 = i7 === 1 ? null : this.dbl(), o6 = 1; o6 < i7; o6++) r5[o6] = r5[o6 - 1].add(n6);
  return { wnd: t3, points: r5 };
}, $t.prototype._getBeta = function() {
  return null;
}, $t.prototype.dblp = function(t3) {
  for (var r5 = this, i7 = 0; i7 < t3; i7++) r5 = r5.dbl();
  return r5;
};
var qi = lr(function(e4) {
  typeof Object.create == "function" ? e4.exports = function(r5, i7) {
    i7 && (r5.super_ = i7, r5.prototype = Object.create(i7.prototype, { constructor: { value: r5, enumerable: false, writable: true, configurable: true } }));
  } : e4.exports = function(r5, i7) {
    if (i7) {
      r5.super_ = i7;
      var n6 = function() {
      };
      n6.prototype = i7.prototype, r5.prototype = new n6(), r5.prototype.constructor = r5;
    }
  };
});
var ja = Gt.assert;
function te(e4) {
  Ze.call(this, "short", e4), this.a = new K3(e4.a, 16).toRed(this.red), this.b = new K3(e4.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e4), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
qi(te, Ze);
var Qa = te;
te.prototype._getEndomorphism = function(t3) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r5, i7;
    if (t3.beta) r5 = new K3(t3.beta, 16).toRed(this.red);
    else {
      var n6 = this._getEndoRoots(this.p);
      r5 = n6[0].cmp(n6[1]) < 0 ? n6[0] : n6[1], r5 = r5.toRed(this.red);
    }
    if (t3.lambda) i7 = new K3(t3.lambda, 16);
    else {
      var o6 = this._getEndoRoots(this.n);
      this.g.mul(o6[0]).x.cmp(this.g.x.redMul(r5)) === 0 ? i7 = o6[0] : (i7 = o6[1], ja(this.g.mul(i7).x.cmp(this.g.x.redMul(r5)) === 0));
    }
    var h7;
    return t3.basis ? h7 = t3.basis.map(function(p5) {
      return { a: new K3(p5.a, 16), b: new K3(p5.b, 16) };
    }) : h7 = this._getEndoBasis(i7), { beta: r5, lambda: i7, basis: h7 };
  }
}, te.prototype._getEndoRoots = function(t3) {
  var r5 = t3 === this.p ? this.red : K3.mont(t3), i7 = new K3(2).toRed(r5).redInvm(), n6 = i7.redNeg(), o6 = new K3(3).toRed(r5).redNeg().redSqrt().redMul(i7), h7 = n6.redAdd(o6).fromRed(), p5 = n6.redSub(o6).fromRed();
  return [h7, p5];
}, te.prototype._getEndoBasis = function(t3) {
  for (var r5 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i7 = t3, n6 = this.n.clone(), o6 = new K3(1), h7 = new K3(0), p5 = new K3(0), A6 = new K3(1), v6, w7, y8, S5, N10, I6, C6, T6 = 0, U4, J2; i7.cmpn(0) !== 0; ) {
    var Bt2 = n6.div(i7);
    U4 = n6.sub(Bt2.mul(i7)), J2 = p5.sub(Bt2.mul(o6));
    var G2 = A6.sub(Bt2.mul(h7));
    if (!y8 && U4.cmp(r5) < 0) v6 = C6.neg(), w7 = o6, y8 = U4.neg(), S5 = J2;
    else if (y8 && ++T6 === 2) break;
    C6 = U4, n6 = i7, i7 = U4, p5 = o6, o6 = J2, A6 = h7, h7 = G2;
  }
  N10 = U4.neg(), I6 = J2;
  var H3 = y8.sqr().add(S5.sqr()), L4 = N10.sqr().add(I6.sqr());
  return L4.cmp(H3) >= 0 && (N10 = v6, I6 = w7), y8.negative && (y8 = y8.neg(), S5 = S5.neg()), N10.negative && (N10 = N10.neg(), I6 = I6.neg()), [{ a: y8, b: S5 }, { a: N10, b: I6 }];
}, te.prototype._endoSplit = function(t3) {
  var r5 = this.endo.basis, i7 = r5[0], n6 = r5[1], o6 = n6.b.mul(t3).divRound(this.n), h7 = i7.b.neg().mul(t3).divRound(this.n), p5 = o6.mul(i7.a), A6 = h7.mul(n6.a), v6 = o6.mul(i7.b), w7 = h7.mul(n6.b), y8 = t3.sub(p5).sub(A6), S5 = v6.add(w7).neg();
  return { k1: y8, k2: S5 };
}, te.prototype.pointFromX = function(t3, r5) {
  t3 = new K3(t3, 16), t3.red || (t3 = t3.toRed(this.red));
  var i7 = t3.redSqr().redMul(t3).redIAdd(t3.redMul(this.a)).redIAdd(this.b), n6 = i7.redSqrt();
  if (n6.redSqr().redSub(i7).cmp(this.zero) !== 0) throw new Error("invalid point");
  var o6 = n6.fromRed().isOdd();
  return (r5 && !o6 || !r5 && o6) && (n6 = n6.redNeg()), this.point(t3, n6);
}, te.prototype.validate = function(t3) {
  if (t3.inf) return true;
  var r5 = t3.x, i7 = t3.y, n6 = this.a.redMul(r5), o6 = r5.redSqr().redMul(r5).redIAdd(n6).redIAdd(this.b);
  return i7.redSqr().redISub(o6).cmpn(0) === 0;
}, te.prototype._endoWnafMulAdd = function(t3, r5, i7) {
  for (var n6 = this._endoWnafT1, o6 = this._endoWnafT2, h7 = 0; h7 < t3.length; h7++) {
    var p5 = this._endoSplit(r5[h7]), A6 = t3[h7], v6 = A6._getBeta();
    p5.k1.negative && (p5.k1.ineg(), A6 = A6.neg(true)), p5.k2.negative && (p5.k2.ineg(), v6 = v6.neg(true)), n6[h7 * 2] = A6, n6[h7 * 2 + 1] = v6, o6[h7 * 2] = p5.k1, o6[h7 * 2 + 1] = p5.k2;
  }
  for (var w7 = this._wnafMulAdd(1, n6, o6, h7 * 2, i7), y8 = 0; y8 < h7 * 2; y8++) n6[y8] = null, o6[y8] = null;
  return w7;
};
function Tt(e4, t3, r5, i7) {
  Ze.BasePoint.call(this, e4, "affine"), t3 === null && r5 === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new K3(t3, 16), this.y = new K3(r5, 16), i7 && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
}
qi(Tt, Ze.BasePoint), te.prototype.point = function(t3, r5, i7) {
  return new Tt(this, t3, r5, i7);
}, te.prototype.pointFromJSON = function(t3, r5) {
  return Tt.fromJSON(this, t3, r5);
}, Tt.prototype._getBeta = function() {
  if (this.curve.endo) {
    var t3 = this.precomputed;
    if (t3 && t3.beta) return t3.beta;
    var r5 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t3) {
      var i7 = this.curve, n6 = function(o6) {
        return i7.point(o6.x.redMul(i7.endo.beta), o6.y);
      };
      t3.beta = r5, r5.precomputed = { beta: null, naf: t3.naf && { wnd: t3.naf.wnd, points: t3.naf.points.map(n6) }, doubles: t3.doubles && { step: t3.doubles.step, points: t3.doubles.points.map(n6) } };
    }
    return r5;
  }
}, Tt.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, Tt.fromJSON = function(t3, r5, i7) {
  typeof r5 == "string" && (r5 = JSON.parse(r5));
  var n6 = t3.point(r5[0], r5[1], i7);
  if (!r5[2]) return n6;
  function o6(p5) {
    return t3.point(p5[0], p5[1], i7);
  }
  var h7 = r5[2];
  return n6.precomputed = { beta: null, doubles: h7.doubles && { step: h7.doubles.step, points: [n6].concat(h7.doubles.points.map(o6)) }, naf: h7.naf && { wnd: h7.naf.wnd, points: [n6].concat(h7.naf.points.map(o6)) } }, n6;
}, Tt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Tt.prototype.isInfinity = function() {
  return this.inf;
}, Tt.prototype.add = function(t3) {
  if (this.inf) return t3;
  if (t3.inf) return this;
  if (this.eq(t3)) return this.dbl();
  if (this.neg().eq(t3)) return this.curve.point(null, null);
  if (this.x.cmp(t3.x) === 0) return this.curve.point(null, null);
  var r5 = this.y.redSub(t3.y);
  r5.cmpn(0) !== 0 && (r5 = r5.redMul(this.x.redSub(t3.x).redInvm()));
  var i7 = r5.redSqr().redISub(this.x).redISub(t3.x), n6 = r5.redMul(this.x.redSub(i7)).redISub(this.y);
  return this.curve.point(i7, n6);
}, Tt.prototype.dbl = function() {
  if (this.inf) return this;
  var t3 = this.y.redAdd(this.y);
  if (t3.cmpn(0) === 0) return this.curve.point(null, null);
  var r5 = this.curve.a, i7 = this.x.redSqr(), n6 = t3.redInvm(), o6 = i7.redAdd(i7).redIAdd(i7).redIAdd(r5).redMul(n6), h7 = o6.redSqr().redISub(this.x.redAdd(this.x)), p5 = o6.redMul(this.x.redSub(h7)).redISub(this.y);
  return this.curve.point(h7, p5);
}, Tt.prototype.getX = function() {
  return this.x.fromRed();
}, Tt.prototype.getY = function() {
  return this.y.fromRed();
}, Tt.prototype.mul = function(t3) {
  return t3 = new K3(t3, 16), this.isInfinity() ? this : this._hasDoubles(t3) ? this.curve._fixedNafMul(this, t3) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t3]) : this.curve._wnafMul(this, t3);
}, Tt.prototype.mulAdd = function(t3, r5, i7) {
  var n6 = [this, r5], o6 = [t3, i7];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n6, o6) : this.curve._wnafMulAdd(1, n6, o6, 2);
}, Tt.prototype.jmulAdd = function(t3, r5, i7) {
  var n6 = [this, r5], o6 = [t3, i7];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n6, o6, true) : this.curve._wnafMulAdd(1, n6, o6, 2, true);
}, Tt.prototype.eq = function(t3) {
  return this === t3 || this.inf === t3.inf && (this.inf || this.x.cmp(t3.x) === 0 && this.y.cmp(t3.y) === 0);
}, Tt.prototype.neg = function(t3) {
  if (this.inf) return this;
  var r5 = this.curve.point(this.x, this.y.redNeg());
  if (t3 && this.precomputed) {
    var i7 = this.precomputed, n6 = function(o6) {
      return o6.neg();
    };
    r5.precomputed = { naf: i7.naf && { wnd: i7.naf.wnd, points: i7.naf.points.map(n6) }, doubles: i7.doubles && { step: i7.doubles.step, points: i7.doubles.points.map(n6) } };
  }
  return r5;
}, Tt.prototype.toJ = function() {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var t3 = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t3;
};
function Ft(e4, t3, r5, i7) {
  Ze.BasePoint.call(this, e4, "jacobian"), t3 === null && r5 === null && i7 === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K3(0)) : (this.x = new K3(t3, 16), this.y = new K3(r5, 16), this.z = new K3(i7, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
qi(Ft, Ze.BasePoint), te.prototype.jpoint = function(t3, r5, i7) {
  return new Ft(this, t3, r5, i7);
}, Ft.prototype.toP = function() {
  if (this.isInfinity()) return this.curve.point(null, null);
  var t3 = this.z.redInvm(), r5 = t3.redSqr(), i7 = this.x.redMul(r5), n6 = this.y.redMul(r5).redMul(t3);
  return this.curve.point(i7, n6);
}, Ft.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Ft.prototype.add = function(t3) {
  if (this.isInfinity()) return t3;
  if (t3.isInfinity()) return this;
  var r5 = t3.z.redSqr(), i7 = this.z.redSqr(), n6 = this.x.redMul(r5), o6 = t3.x.redMul(i7), h7 = this.y.redMul(r5.redMul(t3.z)), p5 = t3.y.redMul(i7.redMul(this.z)), A6 = n6.redSub(o6), v6 = h7.redSub(p5);
  if (A6.cmpn(0) === 0) return v6.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var w7 = A6.redSqr(), y8 = w7.redMul(A6), S5 = n6.redMul(w7), N10 = v6.redSqr().redIAdd(y8).redISub(S5).redISub(S5), I6 = v6.redMul(S5.redISub(N10)).redISub(h7.redMul(y8)), C6 = this.z.redMul(t3.z).redMul(A6);
  return this.curve.jpoint(N10, I6, C6);
}, Ft.prototype.mixedAdd = function(t3) {
  if (this.isInfinity()) return t3.toJ();
  if (t3.isInfinity()) return this;
  var r5 = this.z.redSqr(), i7 = this.x, n6 = t3.x.redMul(r5), o6 = this.y, h7 = t3.y.redMul(r5).redMul(this.z), p5 = i7.redSub(n6), A6 = o6.redSub(h7);
  if (p5.cmpn(0) === 0) return A6.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var v6 = p5.redSqr(), w7 = v6.redMul(p5), y8 = i7.redMul(v6), S5 = A6.redSqr().redIAdd(w7).redISub(y8).redISub(y8), N10 = A6.redMul(y8.redISub(S5)).redISub(o6.redMul(w7)), I6 = this.z.redMul(p5);
  return this.curve.jpoint(S5, N10, I6);
}, Ft.prototype.dblp = function(t3) {
  if (t3 === 0) return this;
  if (this.isInfinity()) return this;
  if (!t3) return this.dbl();
  var r5;
  if (this.curve.zeroA || this.curve.threeA) {
    var i7 = this;
    for (r5 = 0; r5 < t3; r5++) i7 = i7.dbl();
    return i7;
  }
  var n6 = this.curve.a, o6 = this.curve.tinv, h7 = this.x, p5 = this.y, A6 = this.z, v6 = A6.redSqr().redSqr(), w7 = p5.redAdd(p5);
  for (r5 = 0; r5 < t3; r5++) {
    var y8 = h7.redSqr(), S5 = w7.redSqr(), N10 = S5.redSqr(), I6 = y8.redAdd(y8).redIAdd(y8).redIAdd(n6.redMul(v6)), C6 = h7.redMul(S5), T6 = I6.redSqr().redISub(C6.redAdd(C6)), U4 = C6.redISub(T6), J2 = I6.redMul(U4);
    J2 = J2.redIAdd(J2).redISub(N10);
    var Bt2 = w7.redMul(A6);
    r5 + 1 < t3 && (v6 = v6.redMul(N10)), h7 = T6, A6 = Bt2, w7 = J2;
  }
  return this.curve.jpoint(h7, w7.redMul(o6), A6);
}, Ft.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Ft.prototype._zeroDbl = function() {
  var t3, r5, i7;
  if (this.zOne) {
    var n6 = this.x.redSqr(), o6 = this.y.redSqr(), h7 = o6.redSqr(), p5 = this.x.redAdd(o6).redSqr().redISub(n6).redISub(h7);
    p5 = p5.redIAdd(p5);
    var A6 = n6.redAdd(n6).redIAdd(n6), v6 = A6.redSqr().redISub(p5).redISub(p5), w7 = h7.redIAdd(h7);
    w7 = w7.redIAdd(w7), w7 = w7.redIAdd(w7), t3 = v6, r5 = A6.redMul(p5.redISub(v6)).redISub(w7), i7 = this.y.redAdd(this.y);
  } else {
    var y8 = this.x.redSqr(), S5 = this.y.redSqr(), N10 = S5.redSqr(), I6 = this.x.redAdd(S5).redSqr().redISub(y8).redISub(N10);
    I6 = I6.redIAdd(I6);
    var C6 = y8.redAdd(y8).redIAdd(y8), T6 = C6.redSqr(), U4 = N10.redIAdd(N10);
    U4 = U4.redIAdd(U4), U4 = U4.redIAdd(U4), t3 = T6.redISub(I6).redISub(I6), r5 = C6.redMul(I6.redISub(t3)).redISub(U4), i7 = this.y.redMul(this.z), i7 = i7.redIAdd(i7);
  }
  return this.curve.jpoint(t3, r5, i7);
}, Ft.prototype._threeDbl = function() {
  var t3, r5, i7;
  if (this.zOne) {
    var n6 = this.x.redSqr(), o6 = this.y.redSqr(), h7 = o6.redSqr(), p5 = this.x.redAdd(o6).redSqr().redISub(n6).redISub(h7);
    p5 = p5.redIAdd(p5);
    var A6 = n6.redAdd(n6).redIAdd(n6).redIAdd(this.curve.a), v6 = A6.redSqr().redISub(p5).redISub(p5);
    t3 = v6;
    var w7 = h7.redIAdd(h7);
    w7 = w7.redIAdd(w7), w7 = w7.redIAdd(w7), r5 = A6.redMul(p5.redISub(v6)).redISub(w7), i7 = this.y.redAdd(this.y);
  } else {
    var y8 = this.z.redSqr(), S5 = this.y.redSqr(), N10 = this.x.redMul(S5), I6 = this.x.redSub(y8).redMul(this.x.redAdd(y8));
    I6 = I6.redAdd(I6).redIAdd(I6);
    var C6 = N10.redIAdd(N10);
    C6 = C6.redIAdd(C6);
    var T6 = C6.redAdd(C6);
    t3 = I6.redSqr().redISub(T6), i7 = this.y.redAdd(this.z).redSqr().redISub(S5).redISub(y8);
    var U4 = S5.redSqr();
    U4 = U4.redIAdd(U4), U4 = U4.redIAdd(U4), U4 = U4.redIAdd(U4), r5 = I6.redMul(C6.redISub(t3)).redISub(U4);
  }
  return this.curve.jpoint(t3, r5, i7);
}, Ft.prototype._dbl = function() {
  var t3 = this.curve.a, r5 = this.x, i7 = this.y, n6 = this.z, o6 = n6.redSqr().redSqr(), h7 = r5.redSqr(), p5 = i7.redSqr(), A6 = h7.redAdd(h7).redIAdd(h7).redIAdd(t3.redMul(o6)), v6 = r5.redAdd(r5);
  v6 = v6.redIAdd(v6);
  var w7 = v6.redMul(p5), y8 = A6.redSqr().redISub(w7.redAdd(w7)), S5 = w7.redISub(y8), N10 = p5.redSqr();
  N10 = N10.redIAdd(N10), N10 = N10.redIAdd(N10), N10 = N10.redIAdd(N10);
  var I6 = A6.redMul(S5).redISub(N10), C6 = i7.redAdd(i7).redMul(n6);
  return this.curve.jpoint(y8, I6, C6);
}, Ft.prototype.trpl = function() {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var t3 = this.x.redSqr(), r5 = this.y.redSqr(), i7 = this.z.redSqr(), n6 = r5.redSqr(), o6 = t3.redAdd(t3).redIAdd(t3), h7 = o6.redSqr(), p5 = this.x.redAdd(r5).redSqr().redISub(t3).redISub(n6);
  p5 = p5.redIAdd(p5), p5 = p5.redAdd(p5).redIAdd(p5), p5 = p5.redISub(h7);
  var A6 = p5.redSqr(), v6 = n6.redIAdd(n6);
  v6 = v6.redIAdd(v6), v6 = v6.redIAdd(v6), v6 = v6.redIAdd(v6);
  var w7 = o6.redIAdd(p5).redSqr().redISub(h7).redISub(A6).redISub(v6), y8 = r5.redMul(w7);
  y8 = y8.redIAdd(y8), y8 = y8.redIAdd(y8);
  var S5 = this.x.redMul(A6).redISub(y8);
  S5 = S5.redIAdd(S5), S5 = S5.redIAdd(S5);
  var N10 = this.y.redMul(w7.redMul(v6.redISub(w7)).redISub(p5.redMul(A6)));
  N10 = N10.redIAdd(N10), N10 = N10.redIAdd(N10), N10 = N10.redIAdd(N10);
  var I6 = this.z.redAdd(p5).redSqr().redISub(i7).redISub(A6);
  return this.curve.jpoint(S5, N10, I6);
}, Ft.prototype.mul = function(t3, r5) {
  return t3 = new K3(t3, r5), this.curve._wnafMul(this, t3);
}, Ft.prototype.eq = function(t3) {
  if (t3.type === "affine") return this.eq(t3.toJ());
  if (this === t3) return true;
  var r5 = this.z.redSqr(), i7 = t3.z.redSqr();
  if (this.x.redMul(i7).redISub(t3.x.redMul(r5)).cmpn(0) !== 0) return false;
  var n6 = r5.redMul(this.z), o6 = i7.redMul(t3.z);
  return this.y.redMul(o6).redISub(t3.y.redMul(n6)).cmpn(0) === 0;
}, Ft.prototype.eqXToP = function(t3) {
  var r5 = this.z.redSqr(), i7 = t3.toRed(this.curve.red).redMul(r5);
  if (this.x.cmp(i7) === 0) return true;
  for (var n6 = t3.clone(), o6 = this.curve.redN.redMul(r5); ; ) {
    if (n6.iadd(this.curve.n), n6.cmp(this.curve.p) >= 0) return false;
    if (i7.redIAdd(o6), this.x.cmp(i7) === 0) return true;
  }
}, Ft.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Ft.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var zr = lr(function(e4, t3) {
  var r5 = t3;
  r5.base = Ze, r5.short = Qa, r5.mont = null, r5.edwards = null;
});
var jr = lr(function(e4, t3) {
  var r5 = t3, i7 = Gt.assert;
  function n6(p5) {
    p5.type === "short" ? this.curve = new zr.short(p5) : p5.type === "edwards" ? this.curve = new zr.edwards(p5) : this.curve = new zr.mont(p5), this.g = this.curve.g, this.n = this.curve.n, this.hash = p5.hash, i7(this.g.validate(), "Invalid curve"), i7(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r5.PresetCurve = n6;
  function o6(p5, A6) {
    Object.defineProperty(r5, p5, { configurable: true, enumerable: true, get: function() {
      var v6 = new n6(A6);
      return Object.defineProperty(r5, p5, { configurable: true, enumerable: true, value: v6 }), v6;
    } });
  }
  o6("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: se.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), o6("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: se.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), o6("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: se.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), o6("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: se.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), o6("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: se.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), o6("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["9"] }), o6("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var h7;
  try {
    h7 = null.crash();
  } catch {
    h7 = void 0;
  }
  o6("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: se.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", h7] });
});
function Re(e4) {
  if (!(this instanceof Re)) return new Re(e4);
  this.hash = e4.hash, this.predResist = !!e4.predResist, this.outLen = this.hash.outSize, this.minEntropy = e4.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var t3 = fe.toArray(e4.entropy, e4.entropyEnc || "hex"), r5 = fe.toArray(e4.nonce, e4.nonceEnc || "hex"), i7 = fe.toArray(e4.pers, e4.persEnc || "hex");
  ki(t3.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t3, r5, i7);
}
var Tf = Re;
Re.prototype._init = function(t3, r5, i7) {
  var n6 = t3.concat(r5).concat(i7);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var o6 = 0; o6 < this.V.length; o6++) this.K[o6] = 0, this.V[o6] = 1;
  this._update(n6), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Re.prototype._hmac = function() {
  return new se.hmac(this.hash, this.K);
}, Re.prototype._update = function(t3) {
  var r5 = this._hmac().update(this.V).update([0]);
  t3 && (r5 = r5.update(t3)), this.K = r5.digest(), this.V = this._hmac().update(this.V).digest(), t3 && (this.K = this._hmac().update(this.V).update([1]).update(t3).digest(), this.V = this._hmac().update(this.V).digest());
}, Re.prototype.reseed = function(t3, r5, i7, n6) {
  typeof r5 != "string" && (n6 = i7, i7 = r5, r5 = null), t3 = fe.toArray(t3, r5), i7 = fe.toArray(i7, n6), ki(t3.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t3.concat(i7 || [])), this._reseed = 1;
}, Re.prototype.generate = function(t3, r5, i7, n6) {
  if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
  typeof r5 != "string" && (n6 = i7, i7 = r5, r5 = null), i7 && (i7 = fe.toArray(i7, n6 || "hex"), this._update(i7));
  for (var o6 = []; o6.length < t3; ) this.V = this._hmac().update(this.V).digest(), o6 = o6.concat(this.V);
  var h7 = o6.slice(0, t3);
  return this._update(i7), this._reseed++, fe.encode(h7, r5);
};
var Ki = Gt.assert;
function kt(e4, t3) {
  this.ec = e4, this.priv = null, this.pub = null, t3.priv && this._importPrivate(t3.priv, t3.privEnc), t3.pub && this._importPublic(t3.pub, t3.pubEnc);
}
var Hi = kt;
kt.fromPublic = function(t3, r5, i7) {
  return r5 instanceof kt ? r5 : new kt(t3, { pub: r5, pubEnc: i7 });
}, kt.fromPrivate = function(t3, r5, i7) {
  return r5 instanceof kt ? r5 : new kt(t3, { priv: r5, privEnc: i7 });
}, kt.prototype.validate = function() {
  var t3 = this.getPublic();
  return t3.isInfinity() ? { result: false, reason: "Invalid public key" } : t3.validate() ? t3.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
}, kt.prototype.getPublic = function(t3, r5) {
  return typeof t3 == "string" && (r5 = t3, t3 = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r5 ? this.pub.encode(r5, t3) : this.pub;
}, kt.prototype.getPrivate = function(t3) {
  return t3 === "hex" ? this.priv.toString(16, 2) : this.priv;
}, kt.prototype._importPrivate = function(t3, r5) {
  this.priv = new K3(t3, r5 || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, kt.prototype._importPublic = function(t3, r5) {
  if (t3.x || t3.y) {
    this.ec.curve.type === "mont" ? Ki(t3.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Ki(t3.x && t3.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t3.x, t3.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t3, r5);
}, kt.prototype.derive = function(t3) {
  return t3.validate() || Ki(t3.validate(), "public point not validated"), t3.mul(this.priv).getX();
}, kt.prototype.sign = function(t3, r5, i7) {
  return this.ec.sign(t3, this, r5, i7);
}, kt.prototype.verify = function(t3, r5) {
  return this.ec.verify(t3, r5, this);
}, kt.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var Ja = Gt.assert;
function Qr(e4, t3) {
  if (e4 instanceof Qr) return e4;
  this._importDER(e4, t3) || (Ja(e4.r && e4.s, "Signature without r or s"), this.r = new K3(e4.r, 16), this.s = new K3(e4.s, 16), e4.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e4.recoveryParam);
}
var Jr = Qr;
function Ga() {
  this.place = 0;
}
function Li(e4, t3) {
  var r5 = e4[t3.place++];
  if (!(r5 & 128)) return r5;
  var i7 = r5 & 15;
  if (i7 === 0 || i7 > 4) return false;
  for (var n6 = 0, o6 = 0, h7 = t3.place; o6 < i7; o6++, h7++) n6 <<= 8, n6 |= e4[h7], n6 >>>= 0;
  return n6 <= 127 ? false : (t3.place = h7, n6);
}
function Ff(e4) {
  for (var t3 = 0, r5 = e4.length - 1; !e4[t3] && !(e4[t3 + 1] & 128) && t3 < r5; ) t3++;
  return t3 === 0 ? e4 : e4.slice(t3);
}
Qr.prototype._importDER = function(t3, r5) {
  t3 = Gt.toArray(t3, r5);
  var i7 = new Ga();
  if (t3[i7.place++] !== 48) return false;
  var n6 = Li(t3, i7);
  if (n6 === false || n6 + i7.place !== t3.length || t3[i7.place++] !== 2) return false;
  var o6 = Li(t3, i7);
  if (o6 === false) return false;
  var h7 = t3.slice(i7.place, o6 + i7.place);
  if (i7.place += o6, t3[i7.place++] !== 2) return false;
  var p5 = Li(t3, i7);
  if (p5 === false || t3.length !== p5 + i7.place) return false;
  var A6 = t3.slice(i7.place, p5 + i7.place);
  if (h7[0] === 0) if (h7[1] & 128) h7 = h7.slice(1);
  else return false;
  if (A6[0] === 0) if (A6[1] & 128) A6 = A6.slice(1);
  else return false;
  return this.r = new K3(h7), this.s = new K3(A6), this.recoveryParam = null, true;
};
function zi(e4, t3) {
  if (t3 < 128) {
    e4.push(t3);
    return;
  }
  var r5 = 1 + (Math.log(t3) / Math.LN2 >>> 3);
  for (e4.push(r5 | 128); --r5; ) e4.push(t3 >>> (r5 << 3) & 255);
  e4.push(t3);
}
Qr.prototype.toDER = function(t3) {
  var r5 = this.r.toArray(), i7 = this.s.toArray();
  for (r5[0] & 128 && (r5 = [0].concat(r5)), i7[0] & 128 && (i7 = [0].concat(i7)), r5 = Ff(r5), i7 = Ff(i7); !i7[0] && !(i7[1] & 128); ) i7 = i7.slice(1);
  var n6 = [2];
  zi(n6, r5.length), n6 = n6.concat(r5), n6.push(2), zi(n6, i7.length);
  var o6 = n6.concat(i7), h7 = [48];
  return zi(h7, o6.length), h7 = h7.concat(o6), Gt.encode(h7, t3);
};
var Ya = function() {
  throw new Error("unsupported");
};
var Uf = Gt.assert;
function ee(e4) {
  if (!(this instanceof ee)) return new ee(e4);
  typeof e4 == "string" && (Uf(Object.prototype.hasOwnProperty.call(jr, e4), "Unknown curve " + e4), e4 = jr[e4]), e4 instanceof jr.PresetCurve && (e4 = { curve: e4 }), this.curve = e4.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e4.curve.g, this.g.precompute(e4.curve.n.bitLength() + 1), this.hash = e4.hash || e4.curve.hash;
}
var Va = ee;
ee.prototype.keyPair = function(t3) {
  return new Hi(this, t3);
}, ee.prototype.keyFromPrivate = function(t3, r5) {
  return Hi.fromPrivate(this, t3, r5);
}, ee.prototype.keyFromPublic = function(t3, r5) {
  return Hi.fromPublic(this, t3, r5);
}, ee.prototype.genKeyPair = function(t3) {
  t3 || (t3 = {});
  for (var r5 = new Tf({ hash: this.hash, pers: t3.pers, persEnc: t3.persEnc || "utf8", entropy: t3.entropy || Ya(this.hash.hmacStrength), entropyEnc: t3.entropy && t3.entropyEnc || "utf8", nonce: this.n.toArray() }), i7 = this.n.byteLength(), n6 = this.n.sub(new K3(2)); ; ) {
    var o6 = new K3(r5.generate(i7));
    if (!(o6.cmp(n6) > 0)) return o6.iaddn(1), this.keyFromPrivate(o6);
  }
}, ee.prototype._truncateToN = function(t3, r5) {
  var i7 = t3.byteLength() * 8 - this.n.bitLength();
  return i7 > 0 && (t3 = t3.ushrn(i7)), !r5 && t3.cmp(this.n) >= 0 ? t3.sub(this.n) : t3;
}, ee.prototype.sign = function(t3, r5, i7, n6) {
  typeof i7 == "object" && (n6 = i7, i7 = null), n6 || (n6 = {}), r5 = this.keyFromPrivate(r5, i7), t3 = this._truncateToN(new K3(t3, 16));
  for (var o6 = this.n.byteLength(), h7 = r5.getPrivate().toArray("be", o6), p5 = t3.toArray("be", o6), A6 = new Tf({ hash: this.hash, entropy: h7, nonce: p5, pers: n6.pers, persEnc: n6.persEnc || "utf8" }), v6 = this.n.sub(new K3(1)), w7 = 0; ; w7++) {
    var y8 = n6.k ? n6.k(w7) : new K3(A6.generate(this.n.byteLength()));
    if (y8 = this._truncateToN(y8, true), !(y8.cmpn(1) <= 0 || y8.cmp(v6) >= 0)) {
      var S5 = this.g.mul(y8);
      if (!S5.isInfinity()) {
        var N10 = S5.getX(), I6 = N10.umod(this.n);
        if (I6.cmpn(0) !== 0) {
          var C6 = y8.invm(this.n).mul(I6.mul(r5.getPrivate()).iadd(t3));
          if (C6 = C6.umod(this.n), C6.cmpn(0) !== 0) {
            var T6 = (S5.getY().isOdd() ? 1 : 0) | (N10.cmp(I6) !== 0 ? 2 : 0);
            return n6.canonical && C6.cmp(this.nh) > 0 && (C6 = this.n.sub(C6), T6 ^= 1), new Jr({ r: I6, s: C6, recoveryParam: T6 });
          }
        }
      }
    }
  }
}, ee.prototype.verify = function(t3, r5, i7, n6) {
  t3 = this._truncateToN(new K3(t3, 16)), i7 = this.keyFromPublic(i7, n6), r5 = new Jr(r5, "hex");
  var o6 = r5.r, h7 = r5.s;
  if (o6.cmpn(1) < 0 || o6.cmp(this.n) >= 0 || h7.cmpn(1) < 0 || h7.cmp(this.n) >= 0) return false;
  var p5 = h7.invm(this.n), A6 = p5.mul(t3).umod(this.n), v6 = p5.mul(o6).umod(this.n), w7;
  return this.curve._maxwellTrick ? (w7 = this.g.jmulAdd(A6, i7.getPublic(), v6), w7.isInfinity() ? false : w7.eqXToP(o6)) : (w7 = this.g.mulAdd(A6, i7.getPublic(), v6), w7.isInfinity() ? false : w7.getX().umod(this.n).cmp(o6) === 0);
}, ee.prototype.recoverPubKey = function(e4, t3, r5, i7) {
  Uf((3 & r5) === r5, "The recovery param is more than two bits"), t3 = new Jr(t3, i7);
  var n6 = this.n, o6 = new K3(e4), h7 = t3.r, p5 = t3.s, A6 = r5 & 1, v6 = r5 >> 1;
  if (h7.cmp(this.curve.p.umod(this.curve.n)) >= 0 && v6) throw new Error("Unable to find sencond key candinate");
  v6 ? h7 = this.curve.pointFromX(h7.add(this.curve.n), A6) : h7 = this.curve.pointFromX(h7, A6);
  var w7 = t3.r.invm(n6), y8 = n6.sub(o6).mul(w7).umod(n6), S5 = p5.mul(w7).umod(n6);
  return this.g.mulAdd(y8, h7, S5);
}, ee.prototype.getKeyRecoveryParam = function(e4, t3, r5, i7) {
  if (t3 = new Jr(t3, i7), t3.recoveryParam !== null) return t3.recoveryParam;
  for (var n6 = 0; n6 < 4; n6++) {
    var o6;
    try {
      o6 = this.recoverPubKey(e4, t3, n6);
    } catch {
      continue;
    }
    if (o6.eq(r5)) return n6;
  }
  throw new Error("Unable to find valid recovery factor");
};
var Wa = lr(function(e4, t3) {
  var r5 = t3;
  r5.version = "6.5.4", r5.utils = Gt, r5.rand = function() {
    throw new Error("unsupported");
  }, r5.curve = zr, r5.curves = jr, r5.ec = Va, r5.eddsa = null;
});
var Xa = Wa.ec;
var Za = "signing-key/5.7.0";
var ji = new z5(Za);
var Qi = null;
function ve() {
  return Qi || (Qi = new Xa("secp256k1")), Qi;
}
var $a = class {
  constructor(t3) {
    wr(this, "curve", "secp256k1"), wr(this, "privateKey", Kt(t3)), Ps(this.privateKey) !== 32 && ji.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const r5 = ve().keyFromPrivate(Ot(this.privateKey));
    wr(this, "publicKey", "0x" + r5.getPublic(false, "hex")), wr(this, "compressedPublicKey", "0x" + r5.getPublic(true, "hex")), wr(this, "_isSigningKey", true);
  }
  _addPoint(t3) {
    const r5 = ve().keyFromPublic(Ot(this.publicKey)), i7 = ve().keyFromPublic(Ot(t3));
    return "0x" + r5.pub.add(i7.pub).encodeCompressed("hex");
  }
  signDigest(t3) {
    const r5 = ve().keyFromPrivate(Ot(this.privateKey)), i7 = Ot(t3);
    i7.length !== 32 && ji.throwArgumentError("bad digest length", "digest", t3);
    const n6 = r5.sign(i7, { canonical: true });
    return Jn({ recoveryParam: n6.recoveryParam, r: oe("0x" + n6.r.toString(16), 32), s: oe("0x" + n6.s.toString(16), 32) });
  }
  computeSharedSecret(t3) {
    const r5 = ve().keyFromPrivate(Ot(this.privateKey)), i7 = ve().keyFromPublic(Ot(kf(t3)));
    return oe("0x" + r5.derive(i7.getPublic()).toString(16), 32);
  }
  static isSigningKey(t3) {
    return !!(t3 && t3._isSigningKey);
  }
};
function tu(e4, t3) {
  const r5 = Jn(t3), i7 = { r: Ot(r5.r), s: Ot(r5.s) };
  return "0x" + ve().recoverPubKey(Ot(e4), i7, r5.recoveryParam).encode("hex", false);
}
function kf(e4, t3) {
  const r5 = Ot(e4);
  if (r5.length === 32) {
    const i7 = new $a(r5);
    return t3 ? "0x" + ve().keyFromPrivate(r5).getPublic(true, "hex") : i7.publicKey;
  } else {
    if (r5.length === 33) return t3 ? Kt(r5) : "0x" + ve().keyFromPublic(r5).getPublic(false, "hex");
    if (r5.length === 65) return t3 ? "0x" + ve().keyFromPublic(r5).getPublic(true, "hex") : Kt(r5);
  }
  return ji.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
var eu = "transactions/5.7.0";
new z5(eu);
var qf;
(function(e4) {
  e4[e4.legacy = 0] = "legacy", e4[e4.eip2930 = 1] = "eip2930", e4[e4.eip1559 = 2] = "eip1559";
})(qf || (qf = {}));
function ru(e4) {
  const t3 = kf(e4);
  return c0(Qn(Si(Qn(t3, 1)), 12));
}
function iu(e4, t3) {
  return ru(tu(Ot(e4), t3));
}
var nu = "https://rpc.walletconnect.com/v1";
async function Kf(e4, t3, r5, i7, n6, o6) {
  switch (r5.t) {
    case "eip191":
      return Hf(e4, t3, r5.s);
    case "eip1271":
      return await Lf(e4, t3, r5.s, i7, n6, o6);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r5.t}`);
  }
}
function Hf(e4, t3, r5) {
  return iu(uf(t3), r5).toLowerCase() === e4.toLowerCase();
}
async function Lf(e4, t3, r5, i7, n6, o6) {
  try {
    const h7 = "0x1626ba7e", p5 = "0000000000000000000000000000000000000000000000000000000000000040", A6 = "0000000000000000000000000000000000000000000000000000000000000041", v6 = r5.substring(2), w7 = uf(t3).substring(2), y8 = h7 + w7 + p5 + A6 + v6, S5 = await fetch(`${o6 || nu}/?chainId=${i7}&projectId=${n6}`, { method: "POST", body: JSON.stringify({ id: fu(), jsonrpc: "2.0", method: "eth_call", params: [{ to: e4, data: y8 }, "latest"] }) }), { result: N10 } = await S5.json();
    return N10 ? N10.slice(0, h7.length).toLowerCase() === h7.toLowerCase() : false;
  } catch (h7) {
    return console.error("isValidEip1271Signature: ", h7), false;
  }
}
function fu() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var ou = Object.defineProperty;
var su = Object.defineProperties;
var au = Object.getOwnPropertyDescriptors;
var zf = Object.getOwnPropertySymbols;
var uu = Object.prototype.hasOwnProperty;
var hu = Object.prototype.propertyIsEnumerable;
var jf = (e4, t3, r5) => t3 in e4 ? ou(e4, t3, { enumerable: true, configurable: true, writable: true, value: r5 }) : e4[t3] = r5;
var Ji = (e4, t3) => {
  for (var r5 in t3 || (t3 = {})) uu.call(t3, r5) && jf(e4, r5, t3[r5]);
  if (zf) for (var r5 of zf(t3)) hu.call(t3, r5) && jf(e4, r5, t3[r5]);
  return e4;
};
var Qf = (e4, t3) => su(e4, au(t3));
var cu = "did:pkh:";
var Gr = (e4) => e4 == null ? void 0 : e4.split(":");
var Gi = (e4) => {
  const t3 = e4 && Gr(e4);
  if (t3) return e4.includes(cu) ? t3[3] : t3[1];
};
var lu = (e4) => {
  const t3 = e4 && Gr(e4);
  if (t3) return t3[2] + ":" + t3[3];
};
var Yi = (e4) => {
  const t3 = e4 && Gr(e4);
  if (t3) return t3.pop();
};
async function du(e4) {
  const { cacao: t3, projectId: r5 } = e4, { s: i7, p: n6 } = t3, o6 = Jf(n6, n6.iss), h7 = Yi(n6.iss);
  return await Kf(h7, o6, i7, Gi(n6.iss), r5);
}
var Jf = (e4, t3) => {
  const r5 = `${e4.domain} wants you to sign in with your Ethereum account:`, i7 = Yi(t3);
  if (!e4.aud && !e4.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let n6 = e4.statement || void 0;
  const o6 = `URI: ${e4.aud || e4.uri}`, h7 = `Version: ${e4.version}`, p5 = `Chain ID: ${Gi(t3)}`, A6 = `Nonce: ${e4.nonce}`, v6 = `Issued At: ${e4.iat}`, w7 = e4.exp ? `Expiration Time: ${e4.exp}` : void 0, y8 = e4.nbf ? `Not Before: ${e4.nbf}` : void 0, S5 = e4.requestId ? `Request ID: ${e4.requestId}` : void 0, N10 = e4.resources ? `Resources:${e4.resources.map((C6) => `
- ${C6}`).join("")}` : void 0, I6 = Vr(e4.resources);
  if (I6) {
    const C6 = Oe(I6);
    n6 = Xi(n6, C6);
  }
  return [r5, i7, "", n6, "", o6, h7, p5, A6, v6, w7, y8, S5, N10].filter((C6) => C6 != null).join(`
`);
};
function Wf(e4) {
  return Buffer.from(JSON.stringify(e4)).toString("base64");
}
function Xf(e4) {
  return JSON.parse(Buffer.from(e4, "base64").toString("utf-8"));
}
function ge(e4) {
  if (!e4) throw new Error("No recap provided, value is undefined");
  if (!e4.att) throw new Error("No `att` property found");
  const t3 = Object.keys(e4.att);
  if (!(t3 != null && t3.length)) throw new Error("No resources found in `att` property");
  t3.forEach((r5) => {
    const i7 = e4.att[r5];
    if (Array.isArray(i7)) throw new Error(`Resource must be an object: ${r5}`);
    if (typeof i7 != "object") throw new Error(`Resource must be an object: ${r5}`);
    if (!Object.keys(i7).length) throw new Error(`Resource object is empty: ${r5}`);
    Object.keys(i7).forEach((n6) => {
      const o6 = i7[n6];
      if (!Array.isArray(o6)) throw new Error(`Ability limits ${n6} must be an array of objects, found: ${o6}`);
      if (!o6.length) throw new Error(`Value of ${n6} is empty array, must be an array with objects`);
      o6.forEach((h7) => {
        if (typeof h7 != "object") throw new Error(`Ability limits (${n6}) must be an array of objects, found: ${h7}`);
      });
    });
  });
}
function Zf(e4, t3, r5, i7 = {}) {
  return r5 == null ? void 0 : r5.sort((n6, o6) => n6.localeCompare(o6)), { att: { [e4]: Vi(t3, r5, i7) } };
}
function Vi(e4, t3, r5 = {}) {
  t3 = t3 == null ? void 0 : t3.sort((n6, o6) => n6.localeCompare(o6));
  const i7 = t3.map((n6) => ({ [`${e4}/${n6}`]: [r5] }));
  return Object.assign({}, ...i7);
}
function Yr(e4) {
  return ge(e4), `urn:recap:${Wf(e4).replace(/=/g, "")}`;
}
function Oe(e4) {
  const t3 = Xf(e4.replace("urn:recap:", ""));
  return ge(t3), t3;
}
function Au(e4, t3, r5) {
  const i7 = Zf(e4, t3, r5);
  return Yr(i7);
}
function Wi(e4) {
  return e4 && e4.includes("urn:recap:");
}
function bu(e4, t3) {
  const r5 = Oe(e4), i7 = Oe(t3), n6 = to(r5, i7);
  return Yr(n6);
}
function to(e4, t3) {
  ge(e4), ge(t3);
  const r5 = Object.keys(e4.att).concat(Object.keys(t3.att)).sort((n6, o6) => n6.localeCompare(o6)), i7 = { att: {} };
  return r5.forEach((n6) => {
    var o6, h7;
    Object.keys(((o6 = e4.att) == null ? void 0 : o6[n6]) || {}).concat(Object.keys(((h7 = t3.att) == null ? void 0 : h7[n6]) || {})).sort((p5, A6) => p5.localeCompare(A6)).forEach((p5) => {
      var A6, v6;
      i7.att[n6] = Qf(Ji({}, i7.att[n6]), { [p5]: ((A6 = e4.att[n6]) == null ? void 0 : A6[p5]) || ((v6 = t3.att[n6]) == null ? void 0 : v6[p5]) });
    });
  }), i7;
}
function Xi(e4 = "", t3) {
  ge(t3);
  const r5 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (e4.includes(r5)) return e4;
  const i7 = [];
  let n6 = 0;
  Object.keys(t3.att).forEach((p5) => {
    const A6 = Object.keys(t3.att[p5]).map((y8) => ({ ability: y8.split("/")[0], action: y8.split("/")[1] }));
    A6.sort((y8, S5) => y8.action.localeCompare(S5.action));
    const v6 = {};
    A6.forEach((y8) => {
      v6[y8.ability] || (v6[y8.ability] = []), v6[y8.ability].push(y8.action);
    });
    const w7 = Object.keys(v6).map((y8) => (n6++, `(${n6}) '${y8}': '${v6[y8].join("', '")}' for '${p5}'.`));
    i7.push(w7.join(", ").replace(".,", "."));
  });
  const o6 = i7.join(" "), h7 = `${r5}${o6}`;
  return `${e4 ? e4 + " " : ""}${h7}`;
}
function yu(e4) {
  var t3;
  const r5 = Oe(e4);
  ge(r5);
  const i7 = (t3 = r5.att) == null ? void 0 : t3.eip155;
  return i7 ? Object.keys(i7).map((n6) => n6.split("/")[1]) : [];
}
function wu(e4) {
  const t3 = Oe(e4);
  ge(t3);
  const r5 = [];
  return Object.values(t3.att).forEach((i7) => {
    Object.values(i7).forEach((n6) => {
      var o6;
      (o6 = n6 == null ? void 0 : n6[0]) != null && o6.chains && r5.push(n6[0].chains);
    });
  }), [...new Set(r5.flat())];
}
function Vr(e4) {
  if (!e4) return;
  const t3 = e4 == null ? void 0 : e4[e4.length - 1];
  return Wi(t3) ? t3 : void 0;
}
var Zi = "base10";
var Lt = "base16";
var $i = "base64pad";
var xu = "base64url";
var dr = "utf8";
var tn = 0;
var pr = 1;
var Sr = 2;
var Mu = 0;
var ro = 1;
var Ir = 12;
var en = 32;
function Eu() {
  const e4 = gn.generateKeyPair();
  return { privateKey: toString2(e4.secretKey, Lt), publicKey: toString2(e4.publicKey, Lt) };
}
function Su() {
  const e4 = (0, import_random2.randomBytes)(en);
  return toString2(e4, Lt);
}
function Iu(e4, t3) {
  const r5 = gn.sharedKey(fromString2(e4, Lt), fromString2(t3, Lt), true), i7 = new import_hkdf.HKDF(import_sha256.SHA256, r5).expand(en);
  return toString2(i7, Lt);
}
function Nu(e4) {
  const t3 = (0, import_sha256.hash)(fromString2(e4, Lt));
  return toString2(t3, Lt);
}
function _u(e4) {
  const t3 = (0, import_sha256.hash)(fromString2(e4, dr));
  return toString2(t3, Lt);
}
function rn(e4) {
  return fromString2(`${e4}`, Zi);
}
function $e(e4) {
  return Number(toString2(e4, Zi));
}
function Bu(e4) {
  const t3 = rn(typeof e4.type < "u" ? e4.type : tn);
  if ($e(t3) === pr && typeof e4.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const r5 = typeof e4.senderPublicKey < "u" ? fromString2(e4.senderPublicKey, Lt) : void 0, i7 = typeof e4.iv < "u" ? fromString2(e4.iv, Lt) : (0, import_random2.randomBytes)(Ir), n6 = new import_chacha20poly1305.ChaCha20Poly1305(fromString2(e4.symKey, Lt)).seal(i7, fromString2(e4.message, dr));
  return nn({ type: t3, sealed: n6, iv: i7, senderPublicKey: r5, encoding: e4.encoding });
}
function Cu(e4, t3) {
  const r5 = rn(Sr), i7 = (0, import_random2.randomBytes)(Ir), n6 = fromString2(e4, dr);
  return nn({ type: r5, sealed: n6, iv: i7, encoding: t3 });
}
function Ru(e4) {
  const t3 = new import_chacha20poly1305.ChaCha20Poly1305(fromString2(e4.symKey, Lt)), { sealed: r5, iv: i7 } = Wr({ encoded: e4.encoded, encoding: e4 == null ? void 0 : e4.encoding }), n6 = t3.open(i7, r5);
  if (n6 === null) throw new Error("Failed to decrypt");
  return toString2(n6, dr);
}
function Ou(e4, t3) {
  const { sealed: r5 } = Wr({ encoded: e4, encoding: t3 });
  return toString2(r5, dr);
}
function nn(e4) {
  const { encoding: t3 = $i } = e4;
  if ($e(e4.type) === Sr) return toString2(concat([e4.type, e4.sealed]), t3);
  if ($e(e4.type) === pr) {
    if (typeof e4.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString2(concat([e4.type, e4.senderPublicKey, e4.iv, e4.sealed]), t3);
  }
  return toString2(concat([e4.type, e4.iv, e4.sealed]), t3);
}
function Wr(e4) {
  const { encoded: t3, encoding: r5 = $i } = e4, i7 = fromString2(t3, r5), n6 = i7.slice(Mu, ro), o6 = ro;
  if ($e(n6) === pr) {
    const v6 = o6 + en, w7 = v6 + Ir, y8 = i7.slice(o6, v6), S5 = i7.slice(v6, w7), N10 = i7.slice(w7);
    return { type: n6, sealed: N10, iv: S5, senderPublicKey: y8 };
  }
  if ($e(n6) === Sr) {
    const v6 = i7.slice(o6), w7 = (0, import_random2.randomBytes)(Ir);
    return { type: n6, sealed: v6, iv: w7 };
  }
  const h7 = o6 + Ir, p5 = i7.slice(o6, h7), A6 = i7.slice(h7);
  return { type: n6, sealed: A6, iv: p5 };
}
function Pu(e4, t3) {
  const r5 = Wr({ encoded: e4, encoding: t3 == null ? void 0 : t3.encoding });
  return io({ type: $e(r5.type), senderPublicKey: typeof r5.senderPublicKey < "u" ? toString2(r5.senderPublicKey, Lt) : void 0, receiverPublicKey: t3 == null ? void 0 : t3.receiverPublicKey });
}
function io(e4) {
  const t3 = (e4 == null ? void 0 : e4.type) || tn;
  if (t3 === pr) {
    if (typeof (e4 == null ? void 0 : e4.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (e4 == null ? void 0 : e4.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: t3, senderPublicKey: e4 == null ? void 0 : e4.senderPublicKey, receiverPublicKey: e4 == null ? void 0 : e4.receiverPublicKey };
}
function Du(e4) {
  return e4.type === pr && typeof e4.senderPublicKey == "string" && typeof e4.receiverPublicKey == "string";
}
function Tu(e4) {
  return e4.type === Sr;
}
function no(e4) {
  return new import_elliptic.ec("p256").keyFromPublic({ x: Buffer.from(e4.x, "base64").toString("hex"), y: Buffer.from(e4.y, "base64").toString("hex") }, "hex");
}
function Fu(e4) {
  let t3 = e4.replace(/-/g, "+").replace(/_/g, "/");
  const r5 = t3.length % 4;
  return r5 > 0 && (t3 += "=".repeat(4 - r5)), t3;
}
function Uu(e4) {
  return Buffer.from(Fu(e4), "base64");
}
function ku(e4, t3) {
  const [r5, i7, n6] = e4.split("."), o6 = Uu(n6);
  if (o6.length !== 64) throw new Error("Invalid signature length");
  const h7 = o6.slice(0, 32).toString("hex"), p5 = o6.slice(32, 64).toString("hex"), A6 = `${r5}.${i7}`, v6 = new import_sha256.SHA256().update(Buffer.from(A6)).digest(), w7 = no(t3), y8 = Buffer.from(v6).toString("hex");
  if (!w7.verify(y8, { r: h7, s: p5 })) throw new Error("Invalid signature");
  return decodeJWT(e4).payload;
}
var fo = "irn";
function qu(e4) {
  return (e4 == null ? void 0 : e4.relay) || { protocol: fo };
}
function Ku(e4) {
  const t3 = C5[e4];
  if (typeof t3 > "u") throw new Error(`Relay Protocol not supported: ${e4}`);
  return t3;
}
var Hu = Object.defineProperty;
var Lu = Object.defineProperties;
var zu = Object.getOwnPropertyDescriptors;
var oo = Object.getOwnPropertySymbols;
var ju = Object.prototype.hasOwnProperty;
var Qu = Object.prototype.propertyIsEnumerable;
var so = (e4, t3, r5) => t3 in e4 ? Hu(e4, t3, { enumerable: true, configurable: true, writable: true, value: r5 }) : e4[t3] = r5;
var ao = (e4, t3) => {
  for (var r5 in t3 || (t3 = {})) ju.call(t3, r5) && so(e4, r5, t3[r5]);
  if (oo) for (var r5 of oo(t3)) Qu.call(t3, r5) && so(e4, r5, t3[r5]);
  return e4;
};
var Ju = (e4, t3) => Lu(e4, zu(t3));
function uo(e4, t3 = "-") {
  const r5 = {}, i7 = "relay" + t3;
  return Object.keys(e4).forEach((n6) => {
    if (n6.startsWith(i7)) {
      const o6 = n6.replace(i7, ""), h7 = e4[n6];
      r5[o6] = h7;
    }
  }), r5;
}
function Gu(e4) {
  e4 = e4.includes("wc://") ? e4.replace("wc://", "") : e4, e4 = e4.includes("wc:") ? e4.replace("wc:", "") : e4;
  const t3 = e4.indexOf(":"), r5 = e4.indexOf("?") !== -1 ? e4.indexOf("?") : void 0, i7 = e4.substring(0, t3), n6 = e4.substring(t3 + 1, r5).split("@"), o6 = typeof r5 < "u" ? e4.substring(r5) : "", h7 = Br.parse(o6), p5 = typeof h7.methods == "string" ? h7.methods.split(",") : void 0;
  return { protocol: i7, topic: ho(n6[0]), version: parseInt(n6[1], 10), symKey: h7.symKey, relay: uo(h7), methods: p5, expiryTimestamp: h7.expiryTimestamp ? parseInt(h7.expiryTimestamp, 10) : void 0 };
}
function ho(e4) {
  return e4.startsWith("//") ? e4.substring(2) : e4;
}
function co(e4, t3 = "-") {
  const r5 = "relay", i7 = {};
  return Object.keys(e4).forEach((n6) => {
    const o6 = r5 + t3 + n6;
    e4[n6] && (i7[o6] = e4[n6]);
  }), i7;
}
function Yu(e4) {
  return `${e4.protocol}:${e4.topic}@${e4.version}?` + Br.stringify(ao(Ju(ao({ symKey: e4.symKey }, co(e4.relay)), { expiryTimestamp: e4.expiryTimestamp }), e4.methods ? { methods: e4.methods.join(",") } : {}));
}
function Vu(e4, t3, r5) {
  return `${e4}?wc_ev=${r5}&topic=${t3}`;
}
function tr(e4) {
  const t3 = [];
  return e4.forEach((r5) => {
    const [i7, n6] = r5.split(":");
    t3.push(`${i7}:${n6}`);
  }), t3;
}
function vo(e4) {
  const t3 = [];
  return Object.values(e4).forEach((r5) => {
    t3.push(...tr(r5.accounts));
  }), t3;
}
function go(e4, t3) {
  const r5 = [];
  return Object.values(e4).forEach((i7) => {
    tr(i7.accounts).includes(t3) && r5.push(...i7.methods);
  }), r5;
}
function mo(e4, t3) {
  const r5 = [];
  return Object.values(e4).forEach((i7) => {
    tr(i7.accounts).includes(t3) && r5.push(...i7.events);
  }), r5;
}
function bo(e4) {
  const t3 = {};
  return e4 == null ? void 0 : e4.forEach((r5) => {
    const [i7, n6] = r5.split(":");
    t3[i7] || (t3[i7] = { accounts: [], chains: [], events: [] }), t3[i7].accounts.push(r5), t3[i7].chains.push(`${i7}:${n6}`);
  }), t3;
}
function fh(e4, t3) {
  t3 = t3.map((i7) => i7.replace("did:pkh:", ""));
  const r5 = bo(t3);
  for (const [i7, n6] of Object.entries(r5)) n6.methods ? n6.methods = me(n6.methods, e4) : n6.methods = e4, n6.events = ["chainChanged", "accountsChanged"];
  return r5;
}
var yo = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
var wo = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function xe(e4, t3) {
  const { message: r5, code: i7 } = wo[e4];
  return { message: t3 ? `${r5} ${t3}` : r5, code: i7 };
}
function er(e4, t3) {
  const { message: r5, code: i7 } = yo[e4];
  return { message: t3 ? `${r5} ${t3}` : r5, code: i7 };
}
function Nr(e4, t3) {
  return Array.isArray(e4) ? typeof t3 < "u" && e4.length ? e4.every(t3) : true : false;
}
function Xr(e4) {
  return Object.getPrototypeOf(e4) === Object.prototype && Object.keys(e4).length;
}
function Pe(e4) {
  return typeof e4 > "u";
}
function Yt(e4, t3) {
  return t3 && Pe(e4) ? true : typeof e4 == "string" && !!e4.trim().length;
}
function Zr(e4, t3) {
  return t3 && Pe(e4) ? true : typeof e4 == "number" && !isNaN(e4);
}
function oh(e4, t3) {
  const { requiredNamespaces: r5 } = t3, i7 = Object.keys(e4.namespaces), n6 = Object.keys(r5);
  let o6 = true;
  return _e(n6, i7) ? (i7.forEach((h7) => {
    const { accounts: p5, methods: A6, events: v6 } = e4.namespaces[h7], w7 = tr(p5), y8 = r5[h7];
    (!_e(Or(h7, y8), w7) || !_e(y8.methods, A6) || !_e(y8.events, v6)) && (o6 = false);
  }), o6) : false;
}
function _r(e4) {
  return Yt(e4, false) && e4.includes(":") ? e4.split(":").length === 2 : false;
}
function xo(e4) {
  if (Yt(e4, false) && e4.includes(":")) {
    const t3 = e4.split(":");
    if (t3.length === 3) {
      const r5 = t3[0] + ":" + t3[1];
      return !!t3[2] && _r(r5);
    }
  }
  return false;
}
function sh(e4) {
  if (Yt(e4, false)) try {
    return typeof new URL(e4) < "u";
  } catch {
    return false;
  }
  return false;
}
function ah(e4) {
  var t3;
  return (t3 = e4 == null ? void 0 : e4.proposer) == null ? void 0 : t3.publicKey;
}
function uh(e4) {
  return e4 == null ? void 0 : e4.topic;
}
function hh(e4, t3) {
  let r5 = null;
  return Yt(e4 == null ? void 0 : e4.publicKey, false) || (r5 = xe("MISSING_OR_INVALID", `${t3} controller public key should be a string`)), r5;
}
function sn(e4) {
  let t3 = true;
  return Nr(e4) ? e4.length && (t3 = e4.every((r5) => Yt(r5, false))) : t3 = false, t3;
}
function Mo(e4, t3, r5) {
  let i7 = null;
  return Nr(t3) && t3.length ? t3.forEach((n6) => {
    i7 || _r(n6) || (i7 = er("UNSUPPORTED_CHAINS", `${r5}, chain ${n6} should be a string and conform to "namespace:chainId" format`));
  }) : _r(e4) || (i7 = er("UNSUPPORTED_CHAINS", `${r5}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i7;
}
function Eo(e4, t3, r5) {
  let i7 = null;
  return Object.entries(e4).forEach(([n6, o6]) => {
    if (i7) return;
    const h7 = Mo(n6, Or(n6, o6), `${t3} ${r5}`);
    h7 && (i7 = h7);
  }), i7;
}
function So(e4, t3) {
  let r5 = null;
  return Nr(e4) ? e4.forEach((i7) => {
    r5 || xo(i7) || (r5 = er("UNSUPPORTED_ACCOUNTS", `${t3}, account ${i7} should be a string and conform to "namespace:chainId:address" format`));
  }) : r5 = er("UNSUPPORTED_ACCOUNTS", `${t3}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r5;
}
function Io(e4, t3) {
  let r5 = null;
  return Object.values(e4).forEach((i7) => {
    if (r5) return;
    const n6 = So(i7 == null ? void 0 : i7.accounts, `${t3} namespace`);
    n6 && (r5 = n6);
  }), r5;
}
function No(e4, t3) {
  let r5 = null;
  return sn(e4 == null ? void 0 : e4.methods) ? sn(e4 == null ? void 0 : e4.events) || (r5 = er("UNSUPPORTED_EVENTS", `${t3}, events should be an array of strings or empty array for no events`)) : r5 = er("UNSUPPORTED_METHODS", `${t3}, methods should be an array of strings or empty array for no methods`), r5;
}
function an(e4, t3) {
  let r5 = null;
  return Object.values(e4).forEach((i7) => {
    if (r5) return;
    const n6 = No(i7, `${t3}, namespace`);
    n6 && (r5 = n6);
  }), r5;
}
function ch(e4, t3, r5) {
  let i7 = null;
  if (e4 && Xr(e4)) {
    const n6 = an(e4, t3);
    n6 && (i7 = n6);
    const o6 = Eo(e4, t3, r5);
    o6 && (i7 = o6);
  } else i7 = xe("MISSING_OR_INVALID", `${t3}, ${r5} should be an object with data`);
  return i7;
}
function _o(e4, t3) {
  let r5 = null;
  if (e4 && Xr(e4)) {
    const i7 = an(e4, t3);
    i7 && (r5 = i7);
    const n6 = Io(e4, t3);
    n6 && (r5 = n6);
  } else r5 = xe("MISSING_OR_INVALID", `${t3}, namespaces should be an object with data`);
  return r5;
}
function Bo(e4) {
  return Yt(e4.protocol, true);
}
function lh(e4, t3) {
  let r5 = false;
  return t3 && !e4 ? r5 = true : e4 && Nr(e4) && e4.length && e4.forEach((i7) => {
    r5 = Bo(i7);
  }), r5;
}
function dh(e4) {
  return typeof e4 == "number";
}
function ph(e4) {
  return typeof e4 < "u" && typeof e4 !== null;
}
function vh(e4) {
  return !(!e4 || typeof e4 != "object" || !e4.code || !Zr(e4.code, false) || !e4.message || !Yt(e4.message, false));
}
function gh(e4) {
  return !(Pe(e4) || !Yt(e4.method, false));
}
function mh(e4) {
  return !(Pe(e4) || Pe(e4.result) && Pe(e4.error) || !Zr(e4.id, false) || !Yt(e4.jsonrpc, false));
}
function Ah(e4) {
  return !(Pe(e4) || !Yt(e4.name, false));
}
function bh(e4, t3) {
  return !(!_r(t3) || !vo(e4).includes(t3));
}
function yh(e4, t3, r5) {
  return Yt(r5, false) ? go(e4, t3).includes(r5) : false;
}
function wh(e4, t3, r5) {
  return Yt(r5, false) ? mo(e4, t3).includes(r5) : false;
}
function Co(e4, t3, r5) {
  let i7 = null;
  const n6 = xh(e4), o6 = Mh(t3), h7 = Object.keys(n6), p5 = Object.keys(o6), A6 = Ro(Object.keys(e4)), v6 = Ro(Object.keys(t3)), w7 = A6.filter((y8) => !v6.includes(y8));
  return w7.length && (i7 = xe("NON_CONFORMING_NAMESPACES", `${r5} namespaces keys don't satisfy requiredNamespaces.
      Required: ${w7.toString()}
      Received: ${Object.keys(t3).toString()}`)), _e(h7, p5) || (i7 = xe("NON_CONFORMING_NAMESPACES", `${r5} namespaces chains don't satisfy required namespaces.
      Required: ${h7.toString()}
      Approved: ${p5.toString()}`)), Object.keys(t3).forEach((y8) => {
    if (!y8.includes(":") || i7) return;
    const S5 = tr(t3[y8].accounts);
    S5.includes(y8) || (i7 = xe("NON_CONFORMING_NAMESPACES", `${r5} namespaces accounts don't satisfy namespace accounts for ${y8}
        Required: ${y8}
        Approved: ${S5.toString()}`));
  }), h7.forEach((y8) => {
    i7 || (_e(n6[y8].methods, o6[y8].methods) ? _e(n6[y8].events, o6[y8].events) || (i7 = xe("NON_CONFORMING_NAMESPACES", `${r5} namespaces events don't satisfy namespace events for ${y8}`)) : i7 = xe("NON_CONFORMING_NAMESPACES", `${r5} namespaces methods don't satisfy namespace methods for ${y8}`));
  }), i7;
}
function xh(e4) {
  const t3 = {};
  return Object.keys(e4).forEach((r5) => {
    var i7;
    r5.includes(":") ? t3[r5] = e4[r5] : (i7 = e4[r5].chains) == null || i7.forEach((n6) => {
      t3[n6] = { methods: e4[r5].methods, events: e4[r5].events };
    });
  }), t3;
}
function Ro(e4) {
  return [...new Set(e4.map((t3) => t3.includes(":") ? t3.split(":")[0] : t3))];
}
function Mh(e4) {
  const t3 = {};
  return Object.keys(e4).forEach((r5) => {
    if (r5.includes(":")) t3[r5] = e4[r5];
    else {
      const i7 = tr(e4[r5].accounts);
      i7 == null ? void 0 : i7.forEach((n6) => {
        t3[n6] = { accounts: e4[r5].accounts.filter((o6) => o6.includes(`${n6}:`)), methods: e4[r5].methods, events: e4[r5].events };
      });
    }
  }), t3;
}
function Eh(e4, t3) {
  return Zr(e4, false) && e4 <= t3.max && e4 >= t3.min;
}
function Sh() {
  const e4 = We();
  return new Promise((t3) => {
    switch (e4) {
      case qt.browser:
        t3(Oo());
        break;
      case qt.reactNative:
        t3(Po());
        break;
      case qt.node:
        t3(Do());
        break;
      default:
        t3(true);
    }
  });
}
function Oo() {
  return gr() && (navigator == null ? void 0 : navigator.onLine);
}
async function Po() {
  if (rr() && typeof global < "u" && global != null && global.NetInfo) {
    const e4 = await (global == null ? void 0 : global.NetInfo.fetch());
    return e4 == null ? void 0 : e4.isConnected;
  }
  return true;
}
function Do() {
  return true;
}
function Ih(e4) {
  switch (We()) {
    case qt.browser:
      To(e4);
      break;
    case qt.reactNative:
      Fo(e4);
      break;
    case qt.node:
      break;
  }
}
function To(e4) {
  !rr() && gr() && (window.addEventListener("online", () => e4(true)), window.addEventListener("offline", () => e4(false)));
}
function Fo(e4) {
  rr() && typeof global < "u" && global != null && global.NetInfo && (global == null ? void 0 : global.NetInfo.addEventListener((t3) => e4(t3 == null ? void 0 : t3.isConnected)));
}
var un = {};
var Nh = class {
  static get(t3) {
    return un[t3];
  }
  static set(t3, r5) {
    un[t3] = r5;
  }
  static delete(t3) {
    delete un[t3];
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_time4 = __toESM(require_cjs4());

// node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var import_events5 = __toESM(require_events());

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
var esm_exports3 = {};
__export(esm_exports3, {
  DEFAULT_ERROR: () => DEFAULT_ERROR,
  IBaseJsonRpcProvider: () => n5,
  IEvents: () => e3,
  IJsonRpcConnection: () => o4,
  IJsonRpcProvider: () => r4,
  INTERNAL_ERROR: () => INTERNAL_ERROR,
  INVALID_PARAMS: () => INVALID_PARAMS,
  INVALID_REQUEST: () => INVALID_REQUEST,
  METHOD_NOT_FOUND: () => METHOD_NOT_FOUND,
  PARSE_ERROR: () => PARSE_ERROR,
  RESERVED_ERROR_CODES: () => RESERVED_ERROR_CODES,
  SERVER_ERROR: () => SERVER_ERROR,
  SERVER_ERROR_CODE_RANGE: () => SERVER_ERROR_CODE_RANGE,
  STANDARD_ERROR_MAP: () => STANDARD_ERROR_MAP,
  formatErrorMessage: () => formatErrorMessage,
  formatJsonRpcError: () => formatJsonRpcError,
  formatJsonRpcRequest: () => formatJsonRpcRequest,
  formatJsonRpcResult: () => formatJsonRpcResult,
  getBigIntRpcId: () => getBigIntRpcId,
  getError: () => getError,
  getErrorByCode: () => getErrorByCode,
  isHttpUrl: () => isHttpUrl,
  isJsonRpcError: () => isJsonRpcError,
  isJsonRpcPayload: () => isJsonRpcPayload,
  isJsonRpcRequest: () => isJsonRpcRequest,
  isJsonRpcResponse: () => isJsonRpcResponse,
  isJsonRpcResult: () => isJsonRpcResult,
  isJsonRpcValidationInvalid: () => isJsonRpcValidationInvalid,
  isLocalhostUrl: () => isLocalhostUrl,
  isNodeJs: () => isNodeJs,
  isReservedErrorCode: () => isReservedErrorCode,
  isServerErrorCode: () => isServerErrorCode,
  isValidDefaultRoute: () => isValidDefaultRoute,
  isValidErrorCode: () => isValidErrorCode,
  isValidLeadingWildcardRoute: () => isValidLeadingWildcardRoute,
  isValidRoute: () => isValidRoute,
  isValidTrailingWildcardRoute: () => isValidTrailingWildcardRoute,
  isValidWildcardRoute: () => isValidWildcardRoute,
  isWsUrl: () => isWsUrl,
  parseConnectionError: () => parseConnectionError,
  payloadId: () => payloadId,
  validateJsonRpcError: () => validateJsonRpcError
});

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js
var PARSE_ERROR = "PARSE_ERROR";
var INVALID_REQUEST = "INVALID_REQUEST";
var METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
var INVALID_PARAMS = "INVALID_PARAMS";
var INTERNAL_ERROR = "INTERNAL_ERROR";
var SERVER_ERROR = "SERVER_ERROR";
var RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
var SERVER_ERROR_CODE_RANGE = [-32e3, -32099];
var STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: "Parse error" },
  [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
  [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
  [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
  [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
  [SERVER_ERROR]: { code: -32e3, message: "Server error" }
};
var DEFAULT_ERROR = SERVER_ERROR;

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js
function isServerErrorCode(code2) {
  return code2 <= SERVER_ERROR_CODE_RANGE[0] && code2 >= SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code2) {
  return RESERVED_ERROR_CODES.includes(code2);
}
function isValidErrorCode(code2) {
  return typeof code2 === "number";
}
function getError(type) {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code2) {
  const match = Object.values(STANDARD_ERROR_MAP).find((e4) => e4.code === code2);
  if (!match) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return match;
}
function validateJsonRpcError(response) {
  if (typeof response.error.code === "undefined") {
    return { valid: false, error: "Missing code for JSON-RPC error" };
  }
  if (typeof response.error.message === "undefined") {
    return { valid: false, error: "Missing message for JSON-RPC error" };
  }
  if (!isValidErrorCode(response.error.code)) {
    return {
      valid: false,
      error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
  }
  if (isReservedErrorCode(response.error.code)) {
    const error = getErrorByCode(response.error.code);
    if (error.message !== STANDARD_ERROR_MAP[DEFAULT_ERROR].message && response.error.message === error.message) {
      return {
        valid: false,
        error: `Invalid error code message for JSON-RPC: ${response.error.code}`
      };
    }
  }
  return { valid: true };
}
function parseConnectionError(e4, url, type) {
  return e4.message.includes("getaddrinfo ENOTFOUND") || e4.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e4;
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js
var env_exports = {};
__export(env_exports, {
  isNodeJs: () => isNodeJs
});
var import_environment = __toESM(require_cjs7());
__reExport(env_exports, __toESM(require_cjs7()));
var isNodeJs = import_environment.isNode;

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
__reExport(esm_exports3, env_exports);

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js
function payloadId(entropy = 3) {
  const date = Date.now() * Math.pow(10, entropy);
  const extra = Math.floor(Math.random() * Math.pow(10, entropy));
  return date + extra;
}
function getBigIntRpcId(entropy = 6) {
  return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error, data)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
  }
  if (typeof data !== "undefined") {
    error.data = data;
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  return error;
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js
function isValidRoute(route) {
  if (route.includes("*")) {
    return isValidWildcardRoute(route);
  }
  if (/\W/g.test(route)) {
    return false;
  }
  return true;
}
function isValidDefaultRoute(route) {
  return route === "*";
}
function isValidWildcardRoute(route) {
  if (isValidDefaultRoute(route)) {
    return true;
  }
  if (!route.includes("*")) {
    return false;
  }
  if (route.split("*").length !== 2) {
    return false;
  }
  if (route.split("*").filter((x7) => x7.trim() === "").length !== 1) {
    return false;
  }
  return true;
}
function isValidLeadingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
function isValidTrailingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}

// node_modules/@walletconnect/jsonrpc-types/dist/index.es.js
var e3 = class {
};
var o4 = class extends e3 {
  constructor(c8) {
    super();
  }
};
var n5 = class extends e3 {
  constructor() {
    super();
  }
};
var r4 = class extends n5 {
  constructor(c8) {
    super();
  }
};

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js
var HTTP_REGEX = "^https?:";
var WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length)
    return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined")
    return false;
  return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
  return "error" in validation && validation.valid === false;
}

// node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var o5 = class extends r4 {
  constructor(t3) {
    super(t3), this.events = new import_events5.EventEmitter(), this.hasRegisteredEventListeners = false, this.connection = this.setConnection(t3), this.connection.connected && this.registerEventListeners();
  }
  async connect(t3 = this.connection) {
    await this.open(t3);
  }
  async disconnect() {
    await this.close();
  }
  on(t3, e4) {
    this.events.on(t3, e4);
  }
  once(t3, e4) {
    this.events.once(t3, e4);
  }
  off(t3, e4) {
    this.events.off(t3, e4);
  }
  removeListener(t3, e4) {
    this.events.removeListener(t3, e4);
  }
  async request(t3, e4) {
    return this.requestStrict(formatJsonRpcRequest(t3.method, t3.params || [], t3.id || getBigIntRpcId().toString()), e4);
  }
  async requestStrict(t3, e4) {
    return new Promise(async (i7, s5) => {
      if (!this.connection.connected) try {
        await this.open();
      } catch (n6) {
        s5(n6);
      }
      this.events.on(`${t3.id}`, (n6) => {
        isJsonRpcError(n6) ? s5(n6.error) : i7(n6.result);
      });
      try {
        await this.connection.send(t3, e4);
      } catch (n6) {
        s5(n6);
      }
    });
  }
  setConnection(t3 = this.connection) {
    return t3;
  }
  onPayload(t3) {
    this.events.emit("payload", t3), isJsonRpcResponse(t3) ? this.events.emit(`${t3.id}`, t3) : this.events.emit("message", { type: t3.method, data: t3.params });
  }
  onClose(t3) {
    t3 && t3.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t3.code} ${t3.reason ? `(${t3.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t3 = this.connection) {
    this.connection === t3 && this.connection.connected || (this.connection.connected && this.close(), typeof t3 == "string" && (await this.connection.open(t3), t3 = this.connection), this.connection = this.setConnection(t3), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t3) => this.onPayload(t3)), this.connection.on("close", (t3) => this.onClose(t3)), this.connection.on("error", (t3) => this.events.emit("error", t3)), this.connection.on("register_error", (t3) => this.onClose()), this.hasRegisteredEventListeners = true);
  }
};

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
var import_events6 = __toESM(require_events());

// node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify5 = (data) => JSON.stringify(data, (_6, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse4 = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_6, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse6(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse4(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify7(value) {
  return typeof value === "string" ? value : JSONStringify5(value) || "";
}

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
var w5 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require_browser4();
var b3 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u";
var a5 = (c8) => c8.split("?")[0];
var h6 = 10;
var S3 = w5();
var f4 = class {
  constructor(e4) {
    if (this.url = e4, this.events = new import_events6.EventEmitter(), this.registering = false, !isWsUrl(e4)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e4}`);
    this.url = e4;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e4, t3) {
    this.events.on(e4, t3);
  }
  once(e4, t3) {
    this.events.once(e4, t3);
  }
  off(e4, t3) {
    this.events.off(e4, t3);
  }
  removeListener(e4, t3) {
    this.events.removeListener(e4, t3);
  }
  async open(e4 = this.url) {
    await this.register(e4);
  }
  async close() {
    return new Promise((e4, t3) => {
      if (typeof this.socket > "u") {
        t3(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n6) => {
        this.onClose(n6), e4();
      }, this.socket.close();
    });
  }
  async send(e4) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify7(e4));
    } catch (t3) {
      this.onError(e4.id, t3);
    }
  }
  register(e4 = this.url) {
    if (!isWsUrl(e4)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e4}`);
    if (this.registering) {
      const t3 = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t3 || this.events.listenerCount("open") >= t3) && this.events.setMaxListeners(t3 + 1), new Promise((n6, o6) => {
        this.events.once("register_error", (s5) => {
          this.resetMaxListeners(), o6(s5);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return o6(new Error("WebSocket connection is missing or invalid"));
          n6(this.socket);
        });
      });
    }
    return this.url = e4, this.registering = true, new Promise((t3, n6) => {
      const o6 = new URLSearchParams(e4).get("origin"), s5 = (0, esm_exports3.isReactNative)() ? { headers: { origin: o6 } } : { rejectUnauthorized: !isLocalhostUrl(e4) }, i7 = new S3(e4, [], s5);
      b3() ? i7.onerror = (r5) => {
        const l6 = r5;
        n6(this.emitError(l6.error));
      } : i7.on("error", (r5) => {
        n6(this.emitError(r5));
      }), i7.onopen = () => {
        this.onOpen(i7), t3(i7);
      };
    });
  }
  onOpen(e4) {
    e4.onmessage = (t3) => this.onPayload(t3), e4.onclose = (t3) => this.onClose(t3), this.socket = e4, this.registering = false, this.events.emit("open");
  }
  onClose(e4) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e4);
  }
  onPayload(e4) {
    if (typeof e4.data > "u") return;
    const t3 = typeof e4.data == "string" ? safeJsonParse6(e4.data) : e4.data;
    this.events.emit("payload", t3);
  }
  onError(e4, t3) {
    const n6 = this.parseError(t3), o6 = n6.message || n6.toString(), s5 = formatJsonRpcError(e4, o6);
    this.events.emit("payload", s5);
  }
  parseError(e4, t3 = this.url) {
    return parseConnectionError(e4, a5(t3), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h6 && this.events.setMaxListeners(h6);
  }
  emitError(e4) {
    const t3 = this.parseError(new Error((e4 == null ? void 0 : e4.message) || `WebSocket connection failed for host: ${a5(this.url)}`));
    return this.events.emit("register_error", t3), t3;
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_lodash = __toESM(require_lodash());
function fs(o6, e4) {
  if (o6.length >= 255) throw new TypeError("Alphabet too long");
  for (var t3 = new Uint8Array(256), s5 = 0; s5 < t3.length; s5++) t3[s5] = 255;
  for (var i7 = 0; i7 < o6.length; i7++) {
    var r5 = o6.charAt(i7), n6 = r5.charCodeAt(0);
    if (t3[n6] !== 255) throw new TypeError(r5 + " is ambiguous");
    t3[n6] = i7;
  }
  var a6 = o6.length, c8 = o6.charAt(0), h7 = Math.log(a6) / Math.log(256), d5 = Math.log(256) / Math.log(a6);
  function g5(l6) {
    if (l6 instanceof Uint8Array || (ArrayBuffer.isView(l6) ? l6 = new Uint8Array(l6.buffer, l6.byteOffset, l6.byteLength) : Array.isArray(l6) && (l6 = Uint8Array.from(l6))), !(l6 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (l6.length === 0) return "";
    for (var p5 = 0, _6 = 0, D5 = 0, E6 = l6.length; D5 !== E6 && l6[D5] === 0; ) D5++, p5++;
    for (var N10 = (E6 - D5) * d5 + 1 >>> 0, C6 = new Uint8Array(N10); D5 !== E6; ) {
      for (var L4 = l6[D5], k5 = 0, x7 = N10 - 1; (L4 !== 0 || k5 < _6) && x7 !== -1; x7--, k5++) L4 += 256 * C6[x7] >>> 0, C6[x7] = L4 % a6 >>> 0, L4 = L4 / a6 >>> 0;
      if (L4 !== 0) throw new Error("Non-zero carry");
      _6 = k5, D5++;
    }
    for (var $4 = N10 - _6; $4 !== N10 && C6[$4] === 0; ) $4++;
    for (var ie2 = c8.repeat(p5); $4 < N10; ++$4) ie2 += o6.charAt(C6[$4]);
    return ie2;
  }
  function m4(l6) {
    if (typeof l6 != "string") throw new TypeError("Expected String");
    if (l6.length === 0) return new Uint8Array();
    var p5 = 0;
    if (l6[p5] !== " ") {
      for (var _6 = 0, D5 = 0; l6[p5] === c8; ) _6++, p5++;
      for (var E6 = (l6.length - p5) * h7 + 1 >>> 0, N10 = new Uint8Array(E6); l6[p5]; ) {
        var C6 = t3[l6.charCodeAt(p5)];
        if (C6 === 255) return;
        for (var L4 = 0, k5 = E6 - 1; (C6 !== 0 || L4 < D5) && k5 !== -1; k5--, L4++) C6 += a6 * N10[k5] >>> 0, N10[k5] = C6 % 256 >>> 0, C6 = C6 / 256 >>> 0;
        if (C6 !== 0) throw new Error("Non-zero carry");
        D5 = L4, p5++;
      }
      if (l6[p5] !== " ") {
        for (var x7 = E6 - D5; x7 !== E6 && N10[x7] === 0; ) x7++;
        for (var $4 = new Uint8Array(_6 + (E6 - x7)), ie2 = _6; x7 !== E6; ) $4[ie2++] = N10[x7++];
        return $4;
      }
    }
  }
  function b5(l6) {
    var p5 = m4(l6);
    if (p5) return p5;
    throw new Error(`Non-${e4} character`);
  }
  return { encode: g5, decodeUnsafe: m4, decode: b5 };
}
var _s2 = fs;
var Es2 = _s2;
var We2 = (o6) => {
  if (o6 instanceof Uint8Array && o6.constructor.name === "Uint8Array") return o6;
  if (o6 instanceof ArrayBuffer) return new Uint8Array(o6);
  if (ArrayBuffer.isView(o6)) return new Uint8Array(o6.buffer, o6.byteOffset, o6.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var vs2 = (o6) => new TextEncoder().encode(o6);
var ws2 = (o6) => new TextDecoder().decode(o6);
var Is2 = class {
  constructor(e4, t3, s5) {
    this.name = e4, this.prefix = t3, this.baseEncode = s5;
  }
  encode(e4) {
    if (e4 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e4)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var Ts2 = class {
  constructor(e4, t3, s5) {
    if (this.name = e4, this.prefix = t3, t3.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t3.codePointAt(0), this.baseDecode = s5;
  }
  decode(e4) {
    if (typeof e4 == "string") {
      if (e4.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e4)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e4.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e4) {
    return Xe2(this, e4);
  }
};
var Cs2 = class {
  constructor(e4) {
    this.decoders = e4;
  }
  or(e4) {
    return Xe2(this, e4);
  }
  decode(e4) {
    const t3 = e4[0], s5 = this.decoders[t3];
    if (s5) return s5.decode(e4);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e4)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var Xe2 = (o6, e4) => new Cs2({ ...o6.decoders || { [o6.prefix]: o6 }, ...e4.decoders || { [e4.prefix]: e4 } });
var Ss2 = class {
  constructor(e4, t3, s5, i7) {
    this.name = e4, this.prefix = t3, this.baseEncode = s5, this.baseDecode = i7, this.encoder = new Is2(e4, t3, s5), this.decoder = new Ts2(e4, t3, i7);
  }
  encode(e4) {
    return this.encoder.encode(e4);
  }
  decode(e4) {
    return this.decoder.decode(e4);
  }
};
var ne2 = ({ name: o6, prefix: e4, encode: t3, decode: s5 }) => new Ss2(o6, e4, t3, s5);
var X2 = ({ prefix: o6, name: e4, alphabet: t3 }) => {
  const { encode: s5, decode: i7 } = Es2(t3, e4);
  return ne2({ prefix: o6, name: e4, encode: s5, decode: (r5) => We2(i7(r5)) });
};
var Ps2 = (o6, e4, t3, s5) => {
  const i7 = {};
  for (let d5 = 0; d5 < e4.length; ++d5) i7[e4[d5]] = d5;
  let r5 = o6.length;
  for (; o6[r5 - 1] === "="; ) --r5;
  const n6 = new Uint8Array(r5 * t3 / 8 | 0);
  let a6 = 0, c8 = 0, h7 = 0;
  for (let d5 = 0; d5 < r5; ++d5) {
    const g5 = i7[o6[d5]];
    if (g5 === void 0) throw new SyntaxError(`Non-${s5} character`);
    c8 = c8 << t3 | g5, a6 += t3, a6 >= 8 && (a6 -= 8, n6[h7++] = 255 & c8 >> a6);
  }
  if (a6 >= t3 || 255 & c8 << 8 - a6) throw new SyntaxError("Unexpected end of data");
  return n6;
};
var Rs2 = (o6, e4, t3) => {
  const s5 = e4[e4.length - 1] === "=", i7 = (1 << t3) - 1;
  let r5 = "", n6 = 0, a6 = 0;
  for (let c8 = 0; c8 < o6.length; ++c8) for (a6 = a6 << 8 | o6[c8], n6 += 8; n6 > t3; ) n6 -= t3, r5 += e4[i7 & a6 >> n6];
  if (n6 && (r5 += e4[i7 & a6 << t3 - n6]), s5) for (; r5.length * t3 & 7; ) r5 += "=";
  return r5;
};
var f5 = ({ name: o6, prefix: e4, bitsPerChar: t3, alphabet: s5 }) => ne2({ prefix: e4, name: o6, encode(i7) {
  return Rs2(i7, s5, t3);
}, decode(i7) {
  return Ps2(i7, s5, t3, o6);
} });
var xs2 = ne2({ prefix: "\0", name: "identity", encode: (o6) => ws2(o6), decode: (o6) => vs2(o6) });
var Os2 = Object.freeze({ __proto__: null, identity: xs2 });
var As2 = f5({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Ns2 = Object.freeze({ __proto__: null, base2: As2 });
var Ls2 = f5({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var zs2 = Object.freeze({ __proto__: null, base8: Ls2 });
var $s2 = X2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Ms2 = Object.freeze({ __proto__: null, base10: $s2 });
var ks2 = f5({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Fs2 = f5({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Us2 = Object.freeze({ __proto__: null, base16: ks2, base16upper: Fs2 });
var Ks2 = f5({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Bs2 = f5({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var Vs2 = f5({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var js2 = f5({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var qs2 = f5({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var Gs2 = f5({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var Hs2 = f5({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var Ys2 = f5({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var Js2 = f5({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Ws2 = Object.freeze({ __proto__: null, base32: Ks2, base32upper: Bs2, base32pad: Vs2, base32padupper: js2, base32hex: qs2, base32hexupper: Gs2, base32hexpad: Hs2, base32hexpadupper: Ys2, base32z: Js2 });
var Xs2 = X2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var Zs2 = X2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Qs2 = Object.freeze({ __proto__: null, base36: Xs2, base36upper: Zs2 });
var er2 = X2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var tr2 = X2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var ir2 = Object.freeze({ __proto__: null, base58btc: er2, base58flickr: tr2 });
var sr2 = f5({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var rr2 = f5({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var nr2 = f5({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var or3 = f5({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var ar2 = Object.freeze({ __proto__: null, base64: sr2, base64pad: rr2, base64url: nr2, base64urlpad: or3 });
var Ze2 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var cr2 = Ze2.reduce((o6, e4, t3) => (o6[t3] = e4, o6), []);
var hr2 = Ze2.reduce((o6, e4, t3) => (o6[e4.codePointAt(0)] = t3, o6), []);
function lr2(o6) {
  return o6.reduce((e4, t3) => (e4 += cr2[t3], e4), "");
}
function ur2(o6) {
  const e4 = [];
  for (const t3 of o6) {
    const s5 = hr2[t3.codePointAt(0)];
    if (s5 === void 0) throw new Error(`Non-base256emoji character: ${t3}`);
    e4.push(s5);
  }
  return new Uint8Array(e4);
}
var dr2 = ne2({ prefix: "🚀", name: "base256emoji", encode: lr2, decode: ur2 });
var gr2 = Object.freeze({ __proto__: null, base256emoji: dr2 });
var pr2 = et;
var Qe = 128;
var yr2 = 127;
var Dr2 = ~yr2;
var mr2 = Math.pow(2, 31);
function et(o6, e4, t3) {
  e4 = e4 || [], t3 = t3 || 0;
  for (var s5 = t3; o6 >= mr2; ) e4[t3++] = o6 & 255 | Qe, o6 /= 128;
  for (; o6 & Dr2; ) e4[t3++] = o6 & 255 | Qe, o6 >>>= 7;
  return e4[t3] = o6 | 0, et.bytes = t3 - s5 + 1, e4;
}
var br2 = be2;
var fr2 = 128;
var tt = 127;
function be2(o6, s5) {
  var t3 = 0, s5 = s5 || 0, i7 = 0, r5 = s5, n6, a6 = o6.length;
  do {
    if (r5 >= a6) throw be2.bytes = 0, new RangeError("Could not decode varint");
    n6 = o6[r5++], t3 += i7 < 28 ? (n6 & tt) << i7 : (n6 & tt) * Math.pow(2, i7), i7 += 7;
  } while (n6 >= fr2);
  return be2.bytes = r5 - s5, t3;
}
var _r2 = Math.pow(2, 7);
var Er2 = Math.pow(2, 14);
var vr2 = Math.pow(2, 21);
var wr2 = Math.pow(2, 28);
var Ir2 = Math.pow(2, 35);
var Tr2 = Math.pow(2, 42);
var Cr2 = Math.pow(2, 49);
var Sr2 = Math.pow(2, 56);
var Pr = Math.pow(2, 63);
var Rr2 = function(o6) {
  return o6 < _r2 ? 1 : o6 < Er2 ? 2 : o6 < vr2 ? 3 : o6 < wr2 ? 4 : o6 < Ir2 ? 5 : o6 < Tr2 ? 6 : o6 < Cr2 ? 7 : o6 < Sr2 ? 8 : o6 < Pr ? 9 : 10;
};
var xr2 = { encode: pr2, decode: br2, encodingLength: Rr2 };
var it = xr2;
var st = (o6, e4, t3 = 0) => (it.encode(o6, e4, t3), e4);
var rt = (o6) => it.encodingLength(o6);
var fe2 = (o6, e4) => {
  const t3 = e4.byteLength, s5 = rt(o6), i7 = s5 + rt(t3), r5 = new Uint8Array(i7 + t3);
  return st(o6, r5, 0), st(t3, r5, s5), r5.set(e4, i7), new Or2(o6, t3, e4, r5);
};
var Or2 = class {
  constructor(e4, t3, s5, i7) {
    this.code = e4, this.size = t3, this.digest = s5, this.bytes = i7;
  }
};
var nt = ({ name: o6, code: e4, encode: t3 }) => new Ar2(o6, e4, t3);
var Ar2 = class {
  constructor(e4, t3, s5) {
    this.name = e4, this.code = t3, this.encode = s5;
  }
  digest(e4) {
    if (e4 instanceof Uint8Array) {
      const t3 = this.encode(e4);
      return t3 instanceof Uint8Array ? fe2(this.code, t3) : t3.then((s5) => fe2(this.code, s5));
    } else throw Error("Unknown type, must be binary type");
  }
};
var ot = (o6) => async (e4) => new Uint8Array(await crypto.subtle.digest(o6, e4));
var Nr2 = nt({ name: "sha2-256", code: 18, encode: ot("SHA-256") });
var Lr2 = nt({ name: "sha2-512", code: 19, encode: ot("SHA-512") });
var zr2 = Object.freeze({ __proto__: null, sha256: Nr2, sha512: Lr2 });
var at = 0;
var $r = "identity";
var ct = We2;
var Mr2 = (o6) => fe2(at, ct(o6));
var kr2 = { code: at, name: $r, encode: ct, digest: Mr2 };
var Fr2 = Object.freeze({ __proto__: null, identity: kr2 });
new TextEncoder(), new TextDecoder();
var ht = { ...Os2, ...Ns2, ...zs2, ...Ms2, ...Us2, ...Ws2, ...Qs2, ...ir2, ...ar2, ...gr2 };
({ ...zr2, ...Fr2 });
function Ur2(o6 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(o6) : new Uint8Array(o6);
}
function lt(o6, e4, t3, s5) {
  return { name: o6, prefix: e4, encoder: { name: o6, prefix: e4, encode: t3 }, decoder: { decode: s5 } };
}
var ut = lt("utf8", "u", (o6) => "u" + new TextDecoder("utf8").decode(o6), (o6) => new TextEncoder().encode(o6.substring(1)));
var _e2 = lt("ascii", "a", (o6) => {
  let e4 = "a";
  for (let t3 = 0; t3 < o6.length; t3++) e4 += String.fromCharCode(o6[t3]);
  return e4;
}, (o6) => {
  o6 = o6.substring(1);
  const e4 = Ur2(o6.length);
  for (let t3 = 0; t3 < o6.length; t3++) e4[t3] = o6.charCodeAt(t3);
  return e4;
});
var Kr2 = { utf8: ut, "utf-8": ut, hex: ht.base16, latin1: _e2, ascii: _e2, binary: _e2, ...ht };
function Br2(o6, e4 = "utf8") {
  const t3 = Kr2[e4];
  if (!t3) throw new Error(`Unsupported encoding "${e4}"`);
  return (e4 === "utf8" || e4 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(o6, "utf8") : t3.decoder.decode(`${t3.prefix}${o6}`);
}
var Ee = "wc";
var ve2 = 2;
var oe2 = "core";
var O4 = `${Ee}@2:${oe2}:`;
var dt = { name: oe2, logger: "error" };
var gt = { database: ":memory:" };
var pt = "crypto";
var we2 = "client_ed25519_seed";
var yt = import_time4.ONE_DAY;
var Dt2 = "keychain";
var mt = "0.3";
var bt = "messages";
var ft = "0.3";
var _t = import_time4.SIX_HOURS;
var Et = "publisher";
var vt = "irn";
var wt = "error";
var Ie = "wss://relay.walletconnect.org";
var It = "relayer";
var w6 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var Tt2 = "_subscription";
var T5 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var Ct = 0.1;
var ae2 = "2.16.2";
var F3 = { link_mode: "link_mode", relay: "relay" };
var St = "0.3";
var Pt = "WALLETCONNECT_CLIENT_ID";
var Te = "WALLETCONNECT_LINK_MODE_APPS";
var A5 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var Rt = "subscription";
var xt = "0.3";
var Ot2 = import_time4.FIVE_SECONDS * 1e3;
var At = "pairing";
var Nt = "0.3";
var j5 = { wc_pairingDelete: { req: { ttl: import_time4.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: import_time4.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: import_time4.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: import_time4.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: import_time4.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: import_time4.ONE_DAY, prompt: false, tag: 0 } } };
var Z2 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
var P3 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var Lt2 = "history";
var zt2 = "0.3";
var $t2 = "expirer";
var R2 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var Mt = "0.3";
var kt2 = "verify-api";
var Yr2 = "https://verify.walletconnect.com";
var Ft2 = "https://verify.walletconnect.org";
var Q3 = Ft2;
var Ut2 = `${Q3}/v3`;
var Kt2 = [Yr2, Ft2];
var Bt = "echo";
var Vt = "https://echo.walletconnect.com";
var z6 = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" };
var M3 = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" };
var Wr2 = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" };
var Xr2 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" };
var Zr2 = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" };
var Qr2 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" };
var jt2 = 0.1;
var qt2 = "event-client";
var Gt2 = 86400;
var Ht2 = "https://pulse.walletconnect.com/batch";
var Yt2 = class {
  constructor(e4, t3) {
    this.core = e4, this.logger = t3, this.keychain = /* @__PURE__ */ new Map(), this.name = Dt2, this.version = mt, this.initialized = false, this.storagePrefix = O4, this.init = async () => {
      if (!this.initialized) {
        const s5 = await this.getKeyChain();
        typeof s5 < "u" && (this.keychain = s5), this.initialized = true;
      }
    }, this.has = (s5) => (this.isInitialized(), this.keychain.has(s5)), this.set = async (s5, i7) => {
      this.isInitialized(), this.keychain.set(s5, i7), await this.persist();
    }, this.get = (s5) => {
      this.isInitialized();
      const i7 = this.keychain.get(s5);
      if (typeof i7 > "u") {
        const { message: r5 } = xe("NO_MATCHING_KEY", `${this.name}: ${s5}`);
        throw new Error(r5);
      }
      return i7;
    }, this.del = async (s5) => {
      this.isInitialized(), this.keychain.delete(s5), await this.persist();
    }, this.core = e4, this.logger = E5(t3, this.name);
  }
  get context() {
    return y4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e4) {
    await this.core.storage.setItem(this.storageKey, ss(e4));
  }
  async getKeyChain() {
    const e4 = await this.core.storage.getItem(this.storageKey);
    return typeof e4 < "u" ? as(e4) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e4 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e4);
    }
  }
};
var Jt2 = class {
  constructor(e4, t3, s5) {
    this.core = e4, this.logger = t3, this.name = pt, this.randomSessionIdentifier = Su(), this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (i7) => (this.isInitialized(), this.keychain.has(i7)), this.getClientId = async () => {
      this.isInitialized();
      const i7 = await this.getClientSeed(), r5 = generateKeyPair(i7);
      return encodeIss(r5.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i7 = Eu();
      return this.setPrivateKey(i7.publicKey, i7.privateKey);
    }, this.signJWT = async (i7) => {
      this.isInitialized();
      const r5 = await this.getClientSeed(), n6 = generateKeyPair(r5), a6 = this.randomSessionIdentifier, c8 = yt;
      return await signJWT(a6, i7, c8, n6);
    }, this.generateSharedKey = (i7, r5, n6) => {
      this.isInitialized();
      const a6 = this.getPrivateKey(i7), c8 = Iu(a6, r5);
      return this.setSymKey(c8, n6);
    }, this.setSymKey = async (i7, r5) => {
      this.isInitialized();
      const n6 = r5 || Nu(i7);
      return await this.keychain.set(n6, i7), n6;
    }, this.deleteKeyPair = async (i7) => {
      this.isInitialized(), await this.keychain.del(i7);
    }, this.deleteSymKey = async (i7) => {
      this.isInitialized(), await this.keychain.del(i7);
    }, this.encode = async (i7, r5, n6) => {
      this.isInitialized();
      const a6 = io(n6), c8 = safeJsonStringify5(r5);
      if (Tu(a6)) return Cu(c8, n6 == null ? void 0 : n6.encoding);
      if (Du(a6)) {
        const m4 = a6.senderPublicKey, b5 = a6.receiverPublicKey;
        i7 = await this.generateSharedKey(m4, b5);
      }
      const h7 = this.getSymKey(i7), { type: d5, senderPublicKey: g5 } = a6;
      return Bu({ type: d5, symKey: h7, message: c8, senderPublicKey: g5, encoding: n6 == null ? void 0 : n6.encoding });
    }, this.decode = async (i7, r5, n6) => {
      this.isInitialized();
      const a6 = Pu(r5, n6);
      if (Tu(a6)) {
        const c8 = Ou(r5, n6 == null ? void 0 : n6.encoding);
        return safeJsonParse4(c8);
      }
      if (Du(a6)) {
        const c8 = a6.receiverPublicKey, h7 = a6.senderPublicKey;
        i7 = await this.generateSharedKey(c8, h7);
      }
      try {
        const c8 = this.getSymKey(i7), h7 = Ru({ symKey: c8, encoded: r5, encoding: n6 == null ? void 0 : n6.encoding });
        return safeJsonParse4(h7);
      } catch (c8) {
        this.logger.error(`Failed to decode message from topic: '${i7}', clientId: '${await this.getClientId()}'`), this.logger.error(c8);
      }
    }, this.getPayloadType = (i7, r5 = $i) => {
      const n6 = Wr({ encoded: i7, encoding: r5 });
      return $e(n6.type);
    }, this.getPayloadSenderPublicKey = (i7, r5 = $i) => {
      const n6 = Wr({ encoded: i7, encoding: r5 });
      return n6.senderPublicKey ? toString2(n6.senderPublicKey, Lt) : void 0;
    }, this.core = e4, this.logger = E5(t3, this.name), this.keychain = s5 || new Yt2(this.core, this.logger);
  }
  get context() {
    return y4(this.logger);
  }
  async setPrivateKey(e4, t3) {
    return await this.keychain.set(e4, t3), e4;
  }
  getPrivateKey(e4) {
    return this.keychain.get(e4);
  }
  async getClientSeed() {
    let e4 = "";
    try {
      e4 = this.keychain.get(we2);
    } catch {
      e4 = Su(), await this.keychain.set(we2, e4);
    }
    return Br2(e4, "base16");
  }
  getSymKey(e4) {
    return this.keychain.get(e4);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e4 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e4);
    }
  }
};
var Wt = class extends a4 {
  constructor(e4, t3) {
    super(e4, t3), this.logger = e4, this.core = t3, this.messages = /* @__PURE__ */ new Map(), this.name = bt, this.version = ft, this.initialized = false, this.storagePrefix = O4, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s5 = await this.getRelayerMessages();
          typeof s5 < "u" && (this.messages = s5), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s5) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s5);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (s5, i7) => {
      this.isInitialized();
      const r5 = _u(i7);
      let n6 = this.messages.get(s5);
      return typeof n6 > "u" && (n6 = {}), typeof n6[r5] < "u" || (n6[r5] = i7, this.messages.set(s5, n6), await this.persist()), r5;
    }, this.get = (s5) => {
      this.isInitialized();
      let i7 = this.messages.get(s5);
      return typeof i7 > "u" && (i7 = {}), i7;
    }, this.has = (s5, i7) => {
      this.isInitialized();
      const r5 = this.get(s5), n6 = _u(i7);
      return typeof r5[n6] < "u";
    }, this.del = async (s5) => {
      this.isInitialized(), this.messages.delete(s5), await this.persist();
    }, this.logger = E5(e4, this.name), this.core = t3;
  }
  get context() {
    return y4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e4) {
    await this.core.storage.setItem(this.storageKey, ss(e4));
  }
  async getRelayerMessages() {
    const e4 = await this.core.storage.getItem(this.storageKey);
    return typeof e4 < "u" ? as(e4) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e4 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e4);
    }
  }
};
var en2 = class extends g4 {
  constructor(e4, t3) {
    super(e4, t3), this.relayer = e4, this.logger = t3, this.events = new import_events7.EventEmitter(), this.name = Et, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = (0, import_time4.toMiliseconds)(import_time4.ONE_MINUTE), this.failedPublishTimeout = (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND), this.needsTransportRestart = false, this.publish = async (s5, i7, r5) => {
      var n6;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s5, message: i7, opts: r5 } });
      const a6 = (r5 == null ? void 0 : r5.ttl) || _t, c8 = qu(r5), h7 = (r5 == null ? void 0 : r5.prompt) || false, d5 = (r5 == null ? void 0 : r5.tag) || 0, g5 = (r5 == null ? void 0 : r5.id) || getBigIntRpcId().toString(), m4 = { topic: s5, message: i7, opts: { ttl: a6, relay: c8, prompt: h7, tag: d5, id: g5, attestation: r5 == null ? void 0 : r5.attestation } }, b5 = `Failed to publish payload, please try again. id:${g5} tag:${d5}`, l6 = Date.now();
      let p5, _6 = 1;
      try {
        for (; p5 === void 0; ) {
          if (Date.now() - l6 > this.publishTimeout) throw new Error(b5);
          this.logger.trace({ id: g5, attempts: _6 }, `publisher.publish - attempt ${_6}`), p5 = await await ds(this.rpcPublish(s5, i7, a6, c8, h7, d5, g5, r5 == null ? void 0 : r5.attestation).catch((D5) => this.logger.warn(D5)), this.publishTimeout, b5), _6++, p5 || await new Promise((D5) => setTimeout(D5, this.failedPublishTimeout));
        }
        this.relayer.events.emit(w6.publish, m4), this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { id: g5, topic: s5, message: i7, opts: r5 } });
      } catch (D5) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(D5), (n6 = r5 == null ? void 0 : r5.internal) != null && n6.throwOnFailedPublish) throw D5;
        this.queue.set(g5, m4);
      }
    }, this.on = (s5, i7) => {
      this.events.on(s5, i7);
    }, this.once = (s5, i7) => {
      this.events.once(s5, i7);
    }, this.off = (s5, i7) => {
      this.events.off(s5, i7);
    }, this.removeListener = (s5, i7) => {
      this.events.removeListener(s5, i7);
    }, this.relayer = e4, this.logger = E5(t3, this.name), this.registerEventListeners();
  }
  get context() {
    return y4(this.logger);
  }
  rpcPublish(e4, t3, s5, i7, r5, n6, a6, c8) {
    var h7, d5, g5, m4;
    const b5 = { method: Ku(i7.protocol).publish, params: { topic: e4, message: t3, ttl: s5, prompt: r5, tag: n6, attestation: c8 }, id: a6 };
    return Pe((h7 = b5.params) == null ? void 0 : h7.prompt) && ((d5 = b5.params) == null || delete d5.prompt), Pe((g5 = b5.params) == null ? void 0 : g5.tag) && ((m4 = b5.params) == null || delete m4.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: b5 }), this.relayer.request(b5);
  }
  removeRequestFromQueue(e4) {
    this.queue.delete(e4);
  }
  checkQueue() {
    this.queue.forEach(async (e4) => {
      const { topic: t3, message: s5, opts: i7 } = e4;
      await this.publish(t3, s5, i7);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r3.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(w6.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(w6.message_ack, (e4) => {
      this.removeRequestFromQueue(e4.id.toString());
    });
  }
};
var tn2 = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e4, t3) => {
      const s5 = this.get(e4);
      this.exists(e4, t3) || this.map.set(e4, [...s5, t3]);
    }, this.get = (e4) => this.map.get(e4) || [], this.exists = (e4, t3) => this.get(e4).includes(t3), this.delete = (e4, t3) => {
      if (typeof t3 > "u") {
        this.map.delete(e4);
        return;
      }
      if (!this.map.has(e4)) return;
      const s5 = this.get(e4);
      if (!this.exists(e4, t3)) return;
      const i7 = s5.filter((r5) => r5 !== t3);
      if (!i7.length) {
        this.map.delete(e4);
        return;
      }
      this.map.set(e4, i7);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var sn2 = Object.defineProperty;
var rn2 = Object.defineProperties;
var nn2 = Object.getOwnPropertyDescriptors;
var Xt = Object.getOwnPropertySymbols;
var on = Object.prototype.hasOwnProperty;
var an2 = Object.prototype.propertyIsEnumerable;
var Zt2 = (o6, e4, t3) => e4 in o6 ? sn2(o6, e4, { enumerable: true, configurable: true, writable: true, value: t3 }) : o6[e4] = t3;
var ee2 = (o6, e4) => {
  for (var t3 in e4 || (e4 = {})) on.call(e4, t3) && Zt2(o6, t3, e4[t3]);
  if (Xt) for (var t3 of Xt(e4)) an2.call(e4, t3) && Zt2(o6, t3, e4[t3]);
  return o6;
};
var Ce2 = (o6, e4) => rn2(o6, nn2(e4));
var Qt = class extends d4 {
  constructor(e4, t3) {
    super(e4, t3), this.relayer = e4, this.logger = t3, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new tn2(), this.events = new import_events7.EventEmitter(), this.name = Rt, this.version = xt, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = O4, this.subscribeTimeout = (0, import_time4.toMiliseconds)(import_time4.ONE_MINUTE), this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId(), await this.restore()), this.initialized = true;
    }, this.subscribe = async (s5, i7) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s5, opts: i7 } });
      try {
        const r5 = qu(i7), n6 = { topic: s5, relay: r5, transportType: i7 == null ? void 0 : i7.transportType };
        this.pending.set(s5, n6);
        const a6 = await this.rpcSubscribe(s5, r5, i7 == null ? void 0 : i7.transportType);
        return typeof a6 == "string" && (this.onSubscribe(a6, n6), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s5, opts: i7 } })), a6;
      } catch (r5) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r5), r5;
      }
    }, this.unsubscribe = async (s5, i7) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i7 == null ? void 0 : i7.id) < "u" ? await this.unsubscribeById(s5, i7.id, i7) : await this.unsubscribeByTopic(s5, i7);
    }, this.isSubscribed = async (s5) => {
      if (this.topics.includes(s5)) return true;
      const i7 = `${this.pendingSubscriptionWatchLabel}_${s5}`;
      return await new Promise((r5, n6) => {
        const a6 = new import_time4.Watch();
        a6.start(i7);
        const c8 = setInterval(() => {
          !this.pending.has(s5) && this.topics.includes(s5) && (clearInterval(c8), a6.stop(i7), r5(true)), a6.elapsed(i7) >= Ot2 && (clearInterval(c8), a6.stop(i7), n6(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => false);
    }, this.on = (s5, i7) => {
      this.events.on(s5, i7);
    }, this.once = (s5, i7) => {
      this.events.once(s5, i7);
    }, this.off = (s5, i7) => {
      this.events.off(s5, i7);
    }, this.removeListener = (s5, i7) => {
      this.events.removeListener(s5, i7);
    }, this.start = async () => {
      await this.onConnect();
    }, this.stop = async () => {
      await this.onDisconnect();
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e4, this.logger = E5(t3, this.name), this.clientId = "";
  }
  get context() {
    return y4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e4, t3) {
    let s5 = false;
    try {
      s5 = this.getSubscription(e4).topic === t3;
    } catch {
    }
    return s5;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e4, t3) {
    const s5 = this.topicMap.get(e4);
    await Promise.all(s5.map(async (i7) => await this.unsubscribeById(e4, i7, t3)));
  }
  async unsubscribeById(e4, t3, s5) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e4, id: t3, opts: s5 } });
    try {
      const i7 = qu(s5);
      await this.rpcUnsubscribe(e4, t3, i7);
      const r5 = er("USER_DISCONNECTED", `${this.name}, ${e4}`);
      await this.onUnsubscribe(e4, t3, r5), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e4, id: t3, opts: s5 } });
    } catch (i7) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i7), i7;
    }
  }
  async rpcSubscribe(e4, t3, s5 = F3.relay) {
    s5 === F3.relay && await this.restartToComplete();
    const i7 = { method: Ku(t3.protocol).subscribe, params: { topic: e4 } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i7 });
    try {
      const r5 = _u(e4 + this.clientId);
      return s5 === F3.link_mode ? (setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(i7).catch((n6) => this.logger.warn(n6));
      }, (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND)), r5) : await await ds(this.relayer.request(i7).catch((n6) => this.logger.warn(n6)), this.subscribeTimeout) ? r5 : null;
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(w6.connection_stalled);
    }
    return null;
  }
  async rpcBatchSubscribe(e4) {
    if (!e4.length) return;
    const t3 = e4[0].relay, s5 = { method: Ku(t3.protocol).batchSubscribe, params: { topics: e4.map((i7) => i7.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s5 });
    try {
      return await await ds(this.relayer.request(s5).catch((i7) => this.logger.warn(i7)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(w6.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e4) {
    if (!e4.length) return;
    const t3 = e4[0].relay, s5 = { method: Ku(t3.protocol).batchFetchMessages, params: { topics: e4.map((r5) => r5.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s5 });
    let i7;
    try {
      i7 = await await ds(this.relayer.request(s5).catch((r5) => this.logger.warn(r5)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(w6.connection_stalled);
    }
    return i7;
  }
  rpcUnsubscribe(e4, t3, s5) {
    const i7 = { method: Ku(s5.protocol).unsubscribe, params: { topic: e4, id: t3 } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i7 }), this.relayer.request(i7);
  }
  onSubscribe(e4, t3) {
    this.setSubscription(e4, Ce2(ee2({}, t3), { id: e4 })), this.pending.delete(t3.topic);
  }
  onBatchSubscribe(e4) {
    e4.length && e4.forEach((t3) => {
      this.setSubscription(t3.id, ee2({}, t3)), this.pending.delete(t3.topic);
    });
  }
  async onUnsubscribe(e4, t3, s5) {
    this.events.removeAllListeners(t3), this.hasSubscription(t3, e4) && this.deleteSubscription(t3, s5), await this.relayer.messages.del(e4);
  }
  async setRelayerSubscriptions(e4) {
    await this.relayer.core.storage.setItem(this.storageKey, e4);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e4, t3) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e4, subscription: t3 }), this.addSubscription(e4, t3);
  }
  addSubscription(e4, t3) {
    this.subscriptions.set(e4, ee2({}, t3)), this.topicMap.set(t3.topic, e4), this.events.emit(A5.created, t3);
  }
  getSubscription(e4) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e4 });
    const t3 = this.subscriptions.get(e4);
    if (!t3) {
      const { message: s5 } = xe("NO_MATCHING_KEY", `${this.name}: ${e4}`);
      throw new Error(s5);
    }
    return t3;
  }
  deleteSubscription(e4, t3) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e4, reason: t3 });
    const s5 = this.getSubscription(e4);
    this.subscriptions.delete(e4), this.topicMap.delete(s5.topic, e4), this.events.emit(A5.deleted, Ce2(ee2({}, s5), { reason: t3 }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(A5.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e4 = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t3 = 0; t3 < e4; t3++) {
        const s5 = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchFetchMessages(s5), await this.batchSubscribe(s5);
      }
    }
    this.events.emit(A5.resubscribed);
  }
  async restore() {
    try {
      const e4 = await this.getRelayerSubscriptions();
      if (typeof e4 > "u" || !e4.length) return;
      if (this.subscriptions.size) {
        const { message: t3 } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t3), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t3);
      }
      this.cached = e4, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e4) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e4);
    }
  }
  async batchSubscribe(e4) {
    if (!e4.length) return;
    const t3 = await this.rpcBatchSubscribe(e4);
    Nr(t3) && this.onBatchSubscribe(t3.map((s5, i7) => Ce2(ee2({}, e4[i7]), { id: s5 })));
  }
  async batchFetchMessages(e4) {
    if (!e4.length) return;
    this.logger.trace(`Fetching batch messages for ${e4.length} subscriptions`);
    const t3 = await this.rpcBatchFetchMessages(e4);
    t3 && t3.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(t3.messages));
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || !this.relayer.connected) return;
    const e4 = [];
    this.pending.forEach((t3) => {
      e4.push(t3);
    }), await this.batchSubscribe(e4), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = []);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r3.pulse, async () => {
      await this.checkPending();
    }), this.events.on(A5.created, async (e4) => {
      const t3 = A5.created;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, data: e4 }), await this.persist();
    }), this.events.on(A5.deleted, async (e4) => {
      const t3 = A5.deleted;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, data: e4 }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e4 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e4);
    }
  }
  async restartToComplete() {
    !this.relayer.connected && !this.relayer.connecting && await this.relayer.transportOpen(), this.restartInProgress && await new Promise((e4) => {
      const t3 = setInterval(() => {
        this.restartInProgress || (clearInterval(t3), e4());
      }, this.pollingInterval);
    });
  }
};
var cn2 = Object.defineProperty;
var ei = Object.getOwnPropertySymbols;
var hn2 = Object.prototype.hasOwnProperty;
var ln2 = Object.prototype.propertyIsEnumerable;
var ti = (o6, e4, t3) => e4 in o6 ? cn2(o6, e4, { enumerable: true, configurable: true, writable: true, value: t3 }) : o6[e4] = t3;
var un2 = (o6, e4) => {
  for (var t3 in e4 || (e4 = {})) hn2.call(e4, t3) && ti(o6, t3, e4[t3]);
  if (ei) for (var t3 of ei(e4)) ln2.call(e4, t3) && ti(o6, t3, e4[t3]);
  return o6;
};
var ii = class extends u3 {
  constructor(e4) {
    super(e4), this.protocol = "wc", this.version = 2, this.events = new import_events7.EventEmitter(), this.name = It, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = false, this.requestsInFlight = /* @__PURE__ */ new Map(), this.heartBeatTimeout = (0, import_time4.toMiliseconds)(import_time4.THIRTY_SECONDS + import_time4.ONE_SECOND), this.request = async (t3) => {
      var s5, i7;
      this.logger.debug("Publishing Request Payload");
      const r5 = t3.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        const n6 = this.provider.request(t3);
        this.requestsInFlight.set(r5, { promise: n6, request: t3 }), this.logger.trace({ id: r5, method: t3.method, topic: (s5 = t3.params) == null ? void 0 : s5.topic }, "relayer.request - attempt to publish...");
        const a6 = await new Promise(async (c8, h7) => {
          const d5 = () => {
            h7(new Error(`relayer.request - publish interrupted, id: ${r5}`));
          };
          this.provider.on(T5.disconnect, d5);
          const g5 = await n6;
          this.provider.off(T5.disconnect, d5), c8(g5);
        });
        return this.logger.trace({ id: r5, method: t3.method, topic: (i7 = t3.params) == null ? void 0 : i7.topic }, "relayer.request - published"), a6;
      } catch (n6) {
        throw this.logger.debug(`Failed to Publish Request: ${r5}`), n6;
      } finally {
        this.requestsInFlight.delete(r5);
      }
    }, this.resetPingTimeout = () => {
      if (bi()) try {
        clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var t3, s5, i7;
          (i7 = (s5 = (t3 = this.provider) == null ? void 0 : t3.connection) == null ? void 0 : s5.socket) == null || i7.terminate();
        }, this.heartBeatTimeout);
      } catch (t3) {
        this.logger.warn(t3);
      }
    }, this.onPayloadHandler = (t3) => {
      this.onProviderPayload(t3), this.resetPingTimeout();
    }, this.onConnectHandler = () => {
      this.logger.trace("relayer connected"), this.startPingTimeout(), this.events.emit(w6.connect);
    }, this.onDisconnectHandler = () => {
      this.logger.trace("relayer disconnected"), this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t3) => {
      this.logger.error(t3), this.events.emit(w6.error, t3), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(T5.payload, this.onPayloadHandler), this.provider.on(T5.connect, this.onConnectHandler), this.provider.on(T5.disconnect, this.onDisconnectHandler), this.provider.on(T5.error, this.onProviderErrorHandler);
    }, this.core = e4.core, this.logger = typeof e4.logger < "u" && typeof e4.logger != "string" ? E5(e4.logger, this.name) : (0, import_pino2.default)(k4({ level: e4.logger || wt })), this.messages = new Wt(this.logger, e4.core), this.subscriber = new Qt(this, this.logger), this.publisher = new en2(this, this.logger), this.relayUrl = (e4 == null ? void 0 : e4.relayUrl) || Ie, this.projectId = e4.projectId, this.bundleId = ts(), this.provider = {};
  }
  async init() {
    if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.subscriber.cached.length > 0) try {
      await this.transportOpen();
    } catch (e4) {
      this.logger.warn(e4);
    }
  }
  get context() {
    return y4(this.logger);
  }
  get connected() {
    var e4, t3, s5;
    return ((s5 = (t3 = (e4 = this.provider) == null ? void 0 : e4.connection) == null ? void 0 : t3.socket) == null ? void 0 : s5.readyState) === 1;
  }
  get connecting() {
    var e4, t3, s5;
    return ((s5 = (t3 = (e4 = this.provider) == null ? void 0 : e4.connection) == null ? void 0 : t3.socket) == null ? void 0 : s5.readyState) === 0;
  }
  async publish(e4, t3, s5) {
    this.isInitialized(), await this.publisher.publish(e4, t3, s5), await this.recordMessageEvent({ topic: e4, message: t3, publishedAt: Date.now(), transportType: F3.relay });
  }
  async subscribe(e4, t3) {
    var s5;
    this.isInitialized(), (t3 == null ? void 0 : t3.transportType) === "relay" && await this.toEstablishConnection();
    let i7 = ((s5 = this.subscriber.topicMap.get(e4)) == null ? void 0 : s5[0]) || "", r5;
    const n6 = (a6) => {
      a6.topic === e4 && (this.subscriber.off(A5.created, n6), r5());
    };
    return await Promise.all([new Promise((a6) => {
      r5 = a6, this.subscriber.on(A5.created, n6);
    }), new Promise(async (a6) => {
      i7 = await this.subscriber.subscribe(e4, t3) || i7, a6();
    })]), i7;
  }
  async unsubscribe(e4, t3) {
    this.isInitialized(), await this.subscriber.unsubscribe(e4, t3);
  }
  on(e4, t3) {
    this.events.on(e4, t3);
  }
  once(e4, t3) {
    this.events.once(e4, t3);
  }
  off(e4, t3) {
    this.events.off(e4, t3);
  }
  removeListener(e4, t3) {
    this.events.removeListener(e4, t3);
  }
  async transportDisconnect() {
    if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
      await Promise.all(Array.from(this.requestsInFlight.values()).map((e4) => e4.promise));
    } catch (e4) {
      this.logger.warn(e4);
    }
    this.hasExperiencedNetworkDisruption || this.connected ? await ds(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e4) {
    await this.confirmOnlineStateOrThrow(), e4 && e4 !== this.relayUrl && (this.relayUrl = e4, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    try {
      await new Promise(async (t3, s5) => {
        const i7 = () => {
          this.provider.off(T5.disconnect, i7), s5(new Error("Connection interrupted while trying to subscribe"));
        };
        this.provider.on(T5.disconnect, i7), await ds(this.provider.connect(), (0, import_time4.toMiliseconds)(import_time4.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((r5) => {
          s5(r5);
        }).finally(() => {
          clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0;
        }), this.subscriber.start().catch((r5) => {
          this.logger.error(r5), this.onDisconnectHandler();
        }), this.hasExperiencedNetworkDisruption = false, t3();
      });
    } catch (t3) {
      this.logger.error(t3);
      const s5 = t3;
      if (this.hasExperiencedNetworkDisruption = true, !this.isConnectionStalled(s5.message)) throw t3;
    } finally {
      this.connectionAttemptInProgress = false;
    }
  }
  async restartTransport(e4) {
    this.connectionAttemptInProgress || (this.relayUrl = e4 || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Sh()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e4) {
    if ((e4 == null ? void 0 : e4.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t3 = e4.sort((s5, i7) => s5.publishedAt - i7.publishedAt);
    this.logger.trace(`Batch of ${t3.length} message events sorted`);
    for (const s5 of t3) try {
      await this.onMessageEvent(s5);
    } catch (i7) {
      this.logger.warn(i7);
    }
    this.logger.trace(`Batch of ${t3.length} message events processed`);
  }
  async onLinkMessageEvent(e4, t3) {
    const { topic: s5 } = e4;
    if (!t3.sessionExists) {
      const i7 = ms(import_time4.FIVE_MINUTES), r5 = { topic: s5, expiry: i7, relay: { protocol: "irn" }, active: false };
      await this.core.pairing.pairings.set(s5, r5);
    }
    this.events.emit(w6.message, e4), await this.recordMessageEvent(e4);
  }
  startPingTimeout() {
    var e4, t3, s5, i7, r5;
    if (bi()) try {
      (t3 = (e4 = this.provider) == null ? void 0 : e4.connection) != null && t3.socket && ((r5 = (i7 = (s5 = this.provider) == null ? void 0 : s5.connection) == null ? void 0 : i7.socket) == null || r5.once("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (n6) {
      this.logger.warn(n6);
    }
  }
  isConnectionStalled(e4) {
    return this.staleConnectionErrors.some((t3) => e4.includes(t3));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e4 = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o5(new f4(is({ sdkVersion: ae2, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e4, useOnCloseEvent: true, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e4) {
    const { topic: t3, message: s5 } = e4;
    await this.messages.set(t3, s5);
  }
  async shouldIgnoreMessageEvent(e4) {
    const { topic: t3, message: s5 } = e4;
    if (!s5 || s5.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${s5}`), true;
    if (!await this.subscriber.isSubscribed(t3)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t3}`), true;
    const i7 = this.messages.has(t3, s5);
    return i7 && this.logger.debug(`Ignoring duplicate message: ${s5}`), i7;
  }
  async onProviderPayload(e4) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e4 }), isJsonRpcRequest(e4)) {
      if (!e4.method.endsWith(Tt2)) return;
      const t3 = e4.params, { topic: s5, message: i7, publishedAt: r5, attestation: n6 } = t3.data, a6 = { topic: s5, message: i7, publishedAt: r5, transportType: F3.relay, attestation: n6 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(un2({ type: "event", event: t3.id }, a6)), this.events.emit(t3.id, a6), await this.acknowledgePayload(e4), await this.onMessageEvent(a6);
    } else isJsonRpcResponse(e4) && this.events.emit(w6.message_ack, e4);
  }
  async onMessageEvent(e4) {
    await this.shouldIgnoreMessageEvent(e4) || (this.events.emit(w6.message, e4), await this.recordMessageEvent(e4));
  }
  async acknowledgePayload(e4) {
    const t3 = formatJsonRpcResult(e4.id, true);
    await this.provider.connection.send(t3);
  }
  unregisterProviderListeners() {
    this.provider.off(T5.payload, this.onPayloadHandler), this.provider.off(T5.connect, this.onConnectHandler), this.provider.off(T5.disconnect, this.onDisconnectHandler), this.provider.off(T5.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e4 = await Sh();
    Ih(async (t3) => {
      e4 !== t3 && (e4 = t3, t3 ? await this.restartTransport().catch((s5) => this.logger.error(s5)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    });
  }
  async onProviderDisconnect() {
    await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(w6.disconnect), this.connectionAttemptInProgress = false, !this.transportExplicitlyClosed && (this.reconnectTimeout || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e4) => this.logger.error(e4));
    }, (0, import_time4.toMiliseconds)(Ct))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e4 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e4);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((e4) => {
      const t3 = setInterval(() => {
        this.connected && (clearInterval(t3), e4());
      }, this.connectionStatusPollingInterval);
    }), await this.transportOpen());
  }
};
var dn2 = Object.defineProperty;
var si = Object.getOwnPropertySymbols;
var gn2 = Object.prototype.hasOwnProperty;
var pn2 = Object.prototype.propertyIsEnumerable;
var ri = (o6, e4, t3) => e4 in o6 ? dn2(o6, e4, { enumerable: true, configurable: true, writable: true, value: t3 }) : o6[e4] = t3;
var ni = (o6, e4) => {
  for (var t3 in e4 || (e4 = {})) gn2.call(e4, t3) && ri(o6, t3, e4[t3]);
  if (si) for (var t3 of si(e4)) pn2.call(e4, t3) && ri(o6, t3, e4[t3]);
  return o6;
};
var oi = class extends p4 {
  constructor(e4, t3, s5, i7 = O4, r5 = void 0) {
    super(e4, t3, s5, i7), this.core = e4, this.logger = t3, this.name = s5, this.map = /* @__PURE__ */ new Map(), this.version = St, this.cached = [], this.initialized = false, this.storagePrefix = O4, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n6) => {
        this.getKey && n6 !== null && !Pe(n6) ? this.map.set(this.getKey(n6), n6) : ah(n6) ? this.map.set(n6.id, n6) : uh(n6) && this.map.set(n6.topic, n6);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (n6, a6) => {
      this.isInitialized(), this.map.has(n6) ? await this.update(n6, a6) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: n6, value: a6 }), this.map.set(n6, a6), await this.persist());
    }, this.get = (n6) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: n6 }), this.getData(n6)), this.getAll = (n6) => (this.isInitialized(), n6 ? this.values.filter((a6) => Object.keys(n6).every((c8) => (0, import_lodash.default)(a6[c8], n6[c8]))) : this.values), this.update = async (n6, a6) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: n6, update: a6 });
      const c8 = ni(ni({}, this.getData(n6)), a6);
      this.map.set(n6, c8), await this.persist();
    }, this.delete = async (n6, a6) => {
      this.isInitialized(), this.map.has(n6) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: n6, reason: a6 }), this.map.delete(n6), this.addToRecentlyDeleted(n6), await this.persist());
    }, this.logger = E5(t3, this.name), this.storagePrefix = i7, this.getKey = r5;
  }
  get context() {
    return y4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e4) {
    this.recentlyDeleted.push(e4), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e4) {
    await this.core.storage.setItem(this.storageKey, e4);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e4) {
    const t3 = this.map.get(e4);
    if (!t3) {
      if (this.recentlyDeleted.includes(e4)) {
        const { message: i7 } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e4}`);
        throw this.logger.error(i7), new Error(i7);
      }
      const { message: s5 } = xe("NO_MATCHING_KEY", `${this.name}: ${e4}`);
      throw this.logger.error(s5), new Error(s5);
    }
    return t3;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e4 = await this.getDataStore();
      if (typeof e4 > "u" || !e4.length) return;
      if (this.map.size) {
        const { message: t3 } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t3), new Error(t3);
      }
      this.cached = e4, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e4) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e4);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e4 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e4);
    }
  }
};
var ai = class {
  constructor(e4, t3) {
    this.core = e4, this.logger = t3, this.name = At, this.version = Nt, this.events = new import_events7.default(), this.initialized = false, this.storagePrefix = O4, this.ignoredPayloadTypes = [pr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s5 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s5])];
    }, this.create = async (s5) => {
      this.isInitialized();
      const i7 = Su(), r5 = await this.core.crypto.setSymKey(i7), n6 = ms(import_time4.FIVE_MINUTES), a6 = { protocol: vt }, c8 = { topic: r5, expiry: n6, relay: a6, active: false }, h7 = Yu({ protocol: this.core.protocol, version: this.core.version, topic: r5, symKey: i7, relay: a6, expiryTimestamp: n6, methods: s5 == null ? void 0 : s5.methods });
      return this.core.expirer.set(r5, n6), await this.pairings.set(r5, c8), await this.core.relayer.subscribe(r5, { transportType: s5 == null ? void 0 : s5.transportType }), { topic: r5, uri: h7 };
    }, this.pair = async (s5) => {
      this.isInitialized();
      const i7 = this.core.eventClient.createEvent({ properties: { topic: s5 == null ? void 0 : s5.uri, trace: [z6.pairing_started] } });
      this.isValidPair(s5, i7);
      const { topic: r5, symKey: n6, relay: a6, expiryTimestamp: c8, methods: h7 } = Gu(s5.uri);
      i7.props.properties.topic = r5, i7.addTrace(z6.pairing_uri_validation_success), i7.addTrace(z6.pairing_uri_not_expired);
      let d5;
      if (this.pairings.keys.includes(r5)) {
        if (d5 = this.pairings.get(r5), i7.addTrace(z6.existing_pairing), d5.active) throw i7.setError(M3.active_pairing_already_exists), new Error(`Pairing already exists: ${r5}. Please try again with a new connection URI.`);
        i7.addTrace(z6.pairing_not_expired);
      }
      const g5 = c8 || ms(import_time4.FIVE_MINUTES), m4 = { topic: r5, relay: a6, expiry: g5, active: false, methods: h7 };
      this.core.expirer.set(r5, g5), await this.pairings.set(r5, m4), i7.addTrace(z6.store_new_pairing), s5.activatePairing && await this.activate({ topic: r5 }), this.events.emit(Z2.create, m4), i7.addTrace(z6.emit_inactive_pairing), this.core.crypto.keychain.has(r5) || await this.core.crypto.setSymKey(n6, r5), i7.addTrace(z6.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        i7.setError(M3.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(r5, { relay: a6 });
      } catch (b5) {
        throw i7.setError(M3.subscribe_pairing_topic_failure), b5;
      }
      return i7.addTrace(z6.subscribe_pairing_topic_success), m4;
    }, this.activate = async ({ topic: s5 }) => {
      this.isInitialized();
      const i7 = ms(import_time4.THIRTY_DAYS);
      this.core.expirer.set(s5, i7), await this.pairings.update(s5, { active: true, expiry: i7 });
    }, this.ping = async (s5) => {
      this.isInitialized(), await this.isValidPing(s5);
      const { topic: i7 } = s5;
      if (this.pairings.keys.includes(i7)) {
        const r5 = await this.sendRequest(i7, "wc_pairingPing", {}), { done: n6, resolve: a6, reject: c8 } = ls();
        this.events.once(bs("pairing_ping", r5), ({ error: h7 }) => {
          h7 ? c8(h7) : a6();
        }), await n6();
      }
    }, this.updateExpiry = async ({ topic: s5, expiry: i7 }) => {
      this.isInitialized(), await this.pairings.update(s5, { expiry: i7 });
    }, this.updateMetadata = async ({ topic: s5, metadata: i7 }) => {
      this.isInitialized(), await this.pairings.update(s5, { peerMetadata: i7 });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s5) => {
      this.isInitialized(), await this.isValidDisconnect(s5);
      const { topic: i7 } = s5;
      this.pairings.keys.includes(i7) && (await this.sendRequest(i7, "wc_pairingDelete", er("USER_DISCONNECTED")), await this.deletePairing(i7));
    }, this.sendRequest = async (s5, i7, r5) => {
      const n6 = formatJsonRpcRequest(i7, r5), a6 = await this.core.crypto.encode(s5, n6), c8 = j5[i7].req;
      return this.core.history.set(s5, n6), this.core.relayer.publish(s5, a6, c8), n6.id;
    }, this.sendResult = async (s5, i7, r5) => {
      const n6 = formatJsonRpcResult(s5, r5), a6 = await this.core.crypto.encode(i7, n6), c8 = await this.core.history.get(i7, s5), h7 = j5[c8.request.method].res;
      await this.core.relayer.publish(i7, a6, h7), await this.core.history.resolve(n6);
    }, this.sendError = async (s5, i7, r5) => {
      const n6 = formatJsonRpcError(s5, r5), a6 = await this.core.crypto.encode(i7, n6), c8 = await this.core.history.get(i7, s5), h7 = j5[c8.request.method] ? j5[c8.request.method].res : j5.unregistered_method.res;
      await this.core.relayer.publish(i7, a6, h7), await this.core.history.resolve(n6);
    }, this.deletePairing = async (s5, i7) => {
      await this.core.relayer.unsubscribe(s5), await Promise.all([this.pairings.delete(s5, er("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s5), i7 ? Promise.resolve() : this.core.expirer.del(s5)]);
    }, this.cleanup = async () => {
      const s5 = this.pairings.getAll().filter((i7) => As(i7.expiry));
      await Promise.all(s5.map((i7) => this.deletePairing(i7.topic)));
    }, this.onRelayEventRequest = (s5) => {
      const { topic: i7, payload: r5 } = s5;
      switch (r5.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(i7, r5);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(i7, r5);
        default:
          return this.onUnknownRpcMethodRequest(i7, r5);
      }
    }, this.onRelayEventResponse = async (s5) => {
      const { topic: i7, payload: r5 } = s5, n6 = (await this.core.history.get(i7, r5.id)).request.method;
      switch (n6) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i7, r5);
        default:
          return this.onUnknownRpcMethodResponse(n6);
      }
    }, this.onPairingPingRequest = async (s5, i7) => {
      const { id: r5 } = i7;
      try {
        this.isValidPing({ topic: s5 }), await this.sendResult(r5, s5, true), this.events.emit(Z2.ping, { id: r5, topic: s5 });
      } catch (n6) {
        await this.sendError(r5, s5, n6), this.logger.error(n6);
      }
    }, this.onPairingPingResponse = (s5, i7) => {
      const { id: r5 } = i7;
      setTimeout(() => {
        isJsonRpcResult(i7) ? this.events.emit(bs("pairing_ping", r5), {}) : isJsonRpcError(i7) && this.events.emit(bs("pairing_ping", r5), { error: i7.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s5, i7) => {
      const { id: r5 } = i7;
      try {
        this.isValidDisconnect({ topic: s5 }), await this.deletePairing(s5), this.events.emit(Z2.delete, { id: r5, topic: s5 });
      } catch (n6) {
        await this.sendError(r5, s5, n6), this.logger.error(n6);
      }
    }, this.onUnknownRpcMethodRequest = async (s5, i7) => {
      const { id: r5, method: n6 } = i7;
      try {
        if (this.registeredMethods.includes(n6)) return;
        const a6 = er("WC_METHOD_UNSUPPORTED", n6);
        await this.sendError(r5, s5, a6), this.logger.error(a6);
      } catch (a6) {
        await this.sendError(r5, s5, a6), this.logger.error(a6);
      }
    }, this.onUnknownRpcMethodResponse = (s5) => {
      this.registeredMethods.includes(s5) || this.logger.error(er("WC_METHOD_UNSUPPORTED", s5));
    }, this.isValidPair = (s5, i7) => {
      var r5;
      if (!ph(s5)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", `pair() params: ${s5}`);
        throw i7.setError(M3.malformed_pairing_uri), new Error(a6);
      }
      if (!sh(s5.uri)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", `pair() uri: ${s5.uri}`);
        throw i7.setError(M3.malformed_pairing_uri), new Error(a6);
      }
      const n6 = Gu(s5 == null ? void 0 : s5.uri);
      if (!((r5 = n6 == null ? void 0 : n6.relay) != null && r5.protocol)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw i7.setError(M3.malformed_pairing_uri), new Error(a6);
      }
      if (!(n6 != null && n6.symKey)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", "pair() uri#symKey");
        throw i7.setError(M3.malformed_pairing_uri), new Error(a6);
      }
      if (n6 != null && n6.expiryTimestamp && (0, import_time4.toMiliseconds)(n6 == null ? void 0 : n6.expiryTimestamp) < Date.now()) {
        i7.setError(M3.pairing_expired);
        const { message: a6 } = xe("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a6);
      }
    }, this.isValidPing = async (s5) => {
      if (!ph(s5)) {
        const { message: r5 } = xe("MISSING_OR_INVALID", `ping() params: ${s5}`);
        throw new Error(r5);
      }
      const { topic: i7 } = s5;
      await this.isValidPairingTopic(i7);
    }, this.isValidDisconnect = async (s5) => {
      if (!ph(s5)) {
        const { message: r5 } = xe("MISSING_OR_INVALID", `disconnect() params: ${s5}`);
        throw new Error(r5);
      }
      const { topic: i7 } = s5;
      await this.isValidPairingTopic(i7);
    }, this.isValidPairingTopic = async (s5) => {
      if (!Yt(s5, false)) {
        const { message: i7 } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${s5}`);
        throw new Error(i7);
      }
      if (!this.pairings.keys.includes(s5)) {
        const { message: i7 } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s5}`);
        throw new Error(i7);
      }
      if (As(this.pairings.get(s5).expiry)) {
        await this.deletePairing(s5);
        const { message: i7 } = xe("EXPIRED", `pairing topic: ${s5}`);
        throw new Error(i7);
      }
    }, this.core = e4, this.logger = E5(t3, this.name), this.pairings = new oi(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y4(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e4 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e4);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(w6.message, async (e4) => {
      const { topic: t3, message: s5, transportType: i7 } = e4;
      if (!this.pairings.keys.includes(t3) || i7 === F3.link_mode || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s5))) return;
      const r5 = await this.core.crypto.decode(t3, s5);
      try {
        isJsonRpcRequest(r5) ? (this.core.history.set(t3, r5), this.onRelayEventRequest({ topic: t3, payload: r5 })) : isJsonRpcResponse(r5) && (await this.core.history.resolve(r5), await this.onRelayEventResponse({ topic: t3, payload: r5 }), this.core.history.delete(t3, r5.id));
      } catch (n6) {
        this.logger.error(n6);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(R2.expired, async (e4) => {
      const { topic: t3 } = gs(e4.target);
      t3 && this.pairings.keys.includes(t3) && (await this.deletePairing(t3, true), this.events.emit(Z2.expire, { topic: t3 }));
    });
  }
};
var ci = class extends h5 {
  constructor(e4, t3) {
    super(e4, t3), this.core = e4, this.logger = t3, this.records = /* @__PURE__ */ new Map(), this.events = new import_events7.EventEmitter(), this.name = Lt2, this.version = zt2, this.cached = [], this.initialized = false, this.storagePrefix = O4, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s5) => this.records.set(s5.id, s5)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (s5, i7, r5) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s5, request: i7, chainId: r5 }), this.records.has(i7.id)) return;
      const n6 = { id: i7.id, topic: s5, request: { method: i7.method, params: i7.params || null }, chainId: r5, expiry: ms(import_time4.THIRTY_DAYS) };
      this.records.set(n6.id, n6), this.persist(), this.events.emit(P3.created, n6);
    }, this.resolve = async (s5) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s5 }), !this.records.has(s5.id)) return;
      const i7 = await this.getRecord(s5.id);
      typeof i7.response > "u" && (i7.response = isJsonRpcError(s5) ? { error: s5.error } : { result: s5.result }, this.records.set(i7.id, i7), this.persist(), this.events.emit(P3.updated, i7));
    }, this.get = async (s5, i7) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s5, id: i7 }), await this.getRecord(i7)), this.delete = (s5, i7) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i7 }), this.values.forEach((r5) => {
        if (r5.topic === s5) {
          if (typeof i7 < "u" && r5.id !== i7) return;
          this.records.delete(r5.id), this.events.emit(P3.deleted, r5);
        }
      }), this.persist();
    }, this.exists = async (s5, i7) => (this.isInitialized(), this.records.has(i7) ? (await this.getRecord(i7)).topic === s5 : false), this.on = (s5, i7) => {
      this.events.on(s5, i7);
    }, this.once = (s5, i7) => {
      this.events.once(s5, i7);
    }, this.off = (s5, i7) => {
      this.events.off(s5, i7);
    }, this.removeListener = (s5, i7) => {
      this.events.removeListener(s5, i7);
    }, this.logger = E5(t3, this.name);
  }
  get context() {
    return y4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e4 = [];
    return this.values.forEach((t3) => {
      if (typeof t3.response < "u") return;
      const s5 = { topic: t3.topic, request: formatJsonRpcRequest(t3.request.method, t3.request.params, t3.id), chainId: t3.chainId };
      return e4.push(s5);
    }), e4;
  }
  async setJsonRpcRecords(e4) {
    await this.core.storage.setItem(this.storageKey, e4);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e4) {
    this.isInitialized();
    const t3 = this.records.get(e4);
    if (!t3) {
      const { message: s5 } = xe("NO_MATCHING_KEY", `${this.name}: ${e4}`);
      throw new Error(s5);
    }
    return t3;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(P3.sync);
  }
  async restore() {
    try {
      const e4 = await this.getJsonRpcRecords();
      if (typeof e4 > "u" || !e4.length) return;
      if (this.records.size) {
        const { message: t3 } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t3), new Error(t3);
      }
      this.cached = e4, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e4) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e4);
    }
  }
  registerEventListeners() {
    this.events.on(P3.created, (e4) => {
      const t3 = P3.created;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, record: e4 });
    }), this.events.on(P3.updated, (e4) => {
      const t3 = P3.updated;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, record: e4 });
    }), this.events.on(P3.deleted, (e4) => {
      const t3 = P3.deleted;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, record: e4 });
    }), this.core.heartbeat.on(r3.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e4 = false;
      this.records.forEach((t3) => {
        (0, import_time4.toMiliseconds)(t3.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t3.id}`), this.records.delete(t3.id), this.events.emit(P3.deleted, t3, false), e4 = true);
      }), e4 && this.persist();
    } catch (e4) {
      this.logger.warn(e4);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e4 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e4);
    }
  }
};
var hi = class extends x5 {
  constructor(e4, t3) {
    super(e4, t3), this.core = e4, this.logger = t3, this.expirations = /* @__PURE__ */ new Map(), this.events = new import_events7.EventEmitter(), this.name = $t2, this.version = Mt, this.cached = [], this.initialized = false, this.storagePrefix = O4, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s5) => this.expirations.set(s5.target, s5)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (s5) => {
      try {
        const i7 = this.formatTarget(s5);
        return typeof this.getExpiration(i7) < "u";
      } catch {
        return false;
      }
    }, this.set = (s5, i7) => {
      this.isInitialized();
      const r5 = this.formatTarget(s5), n6 = { target: r5, expiry: i7 };
      this.expirations.set(r5, n6), this.checkExpiry(r5, n6), this.events.emit(R2.created, { target: r5, expiration: n6 });
    }, this.get = (s5) => {
      this.isInitialized();
      const i7 = this.formatTarget(s5);
      return this.getExpiration(i7);
    }, this.del = (s5) => {
      if (this.isInitialized(), this.has(s5)) {
        const i7 = this.formatTarget(s5), r5 = this.getExpiration(i7);
        this.expirations.delete(i7), this.events.emit(R2.deleted, { target: i7, expiration: r5 });
      }
    }, this.on = (s5, i7) => {
      this.events.on(s5, i7);
    }, this.once = (s5, i7) => {
      this.events.once(s5, i7);
    }, this.off = (s5, i7) => {
      this.events.off(s5, i7);
    }, this.removeListener = (s5, i7) => {
      this.events.removeListener(s5, i7);
    }, this.logger = E5(t3, this.name);
  }
  get context() {
    return y4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e4) {
    if (typeof e4 == "string") return ps(e4);
    if (typeof e4 == "number") return vs(e4);
    const { message: t3 } = xe("UNKNOWN_TYPE", `Target type: ${typeof e4}`);
    throw new Error(t3);
  }
  async setExpirations(e4) {
    await this.core.storage.setItem(this.storageKey, e4);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(R2.sync);
  }
  async restore() {
    try {
      const e4 = await this.getExpirations();
      if (typeof e4 > "u" || !e4.length) return;
      if (this.expirations.size) {
        const { message: t3 } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t3), new Error(t3);
      }
      this.cached = e4, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e4) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e4);
    }
  }
  getExpiration(e4) {
    const t3 = this.expirations.get(e4);
    if (!t3) {
      const { message: s5 } = xe("NO_MATCHING_KEY", `${this.name}: ${e4}`);
      throw this.logger.warn(s5), new Error(s5);
    }
    return t3;
  }
  checkExpiry(e4, t3) {
    const { expiry: s5 } = t3;
    (0, import_time4.toMiliseconds)(s5) - Date.now() <= 0 && this.expire(e4, t3);
  }
  expire(e4, t3) {
    this.expirations.delete(e4), this.events.emit(R2.expired, { target: e4, expiration: t3 });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e4, t3) => this.checkExpiry(t3, e4));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r3.pulse, () => this.checkExpirations()), this.events.on(R2.created, (e4) => {
      const t3 = R2.created;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, data: e4 }), this.persist();
    }), this.events.on(R2.expired, (e4) => {
      const t3 = R2.expired;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, data: e4 }), this.persist();
    }), this.events.on(R2.deleted, (e4) => {
      const t3 = R2.deleted;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, data: e4 }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e4 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e4);
    }
  }
};
var y7 = {};
Object.defineProperty(y7, "__esModule", { value: true }), y7.getLocalStorage = y7.getLocalStorageOrThrow = y7.getCrypto = y7.getCryptoOrThrow = y7.getLocation = y7.getLocationOrThrow = y7.getNavigator = y7.getNavigatorOrThrow = li = y7.getDocument = y7.getDocumentOrThrow = y7.getFromWindowOrThrow = y7.getFromWindow = void 0;
function U3(o6) {
  let e4;
  return typeof window < "u" && typeof window[o6] < "u" && (e4 = window[o6]), e4;
}
y7.getFromWindow = U3;
function q3(o6) {
  const e4 = U3(o6);
  if (!e4) throw new Error(`${o6} is not defined in Window`);
  return e4;
}
y7.getFromWindowOrThrow = q3;
function yn() {
  return q3("document");
}
y7.getDocumentOrThrow = yn;
function Dn() {
  return U3("document");
}
var li = y7.getDocument = Dn;
function mn2() {
  return q3("navigator");
}
y7.getNavigatorOrThrow = mn2;
function bn() {
  return U3("navigator");
}
y7.getNavigator = bn;
function fn() {
  return q3("location");
}
y7.getLocationOrThrow = fn;
function _n2() {
  return U3("location");
}
y7.getLocation = _n2;
function En2() {
  return q3("crypto");
}
y7.getCryptoOrThrow = En2;
function vn2() {
  return U3("crypto");
}
y7.getCrypto = vn2;
function wn() {
  return q3("localStorage");
}
y7.getLocalStorageOrThrow = wn;
function In2() {
  return U3("localStorage");
}
y7.getLocalStorage = In2;
var ui = class extends y5 {
  constructor(e4, t3, s5) {
    super(e4, t3, s5), this.core = e4, this.logger = t3, this.store = s5, this.name = kt2, this.verifyUrlV3 = Ut2, this.storagePrefix = O4, this.version = ve2, this.init = async () => {
      var i7;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, import_time4.toMiliseconds)((i7 = this.publicKey) == null ? void 0 : i7.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }, this.register = async (i7) => {
      if (!gr() || this.isDevEnv) return;
      const r5 = window.location.origin, { id: n6, decryptedId: a6 } = i7, c8 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${r5}&id=${n6}&decryptedId=${a6}`;
      try {
        const h7 = li(), d5 = this.startAbortTimer(import_time4.ONE_SECOND * 5), g5 = await new Promise((m4, b5) => {
          const l6 = () => {
            window.removeEventListener("message", _6), h7.body.removeChild(p5), b5("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", l6);
          const p5 = h7.createElement("iframe");
          p5.src = c8, p5.style.display = "none", p5.addEventListener("error", l6, { signal: this.abortController.signal });
          const _6 = (D5) => {
            if (!D5.data) return;
            const E6 = JSON.parse(D5.data);
            if (E6.type === "verify_attestation") {
              if (decodeJWT(E6.attestation).payload.id !== n6) return;
              clearInterval(d5), h7.body.removeChild(p5), this.abortController.signal.removeEventListener("abort", l6), window.removeEventListener("message", _6), m4(E6.attestation === null ? "" : E6.attestation);
            }
          };
          h7.body.appendChild(p5), window.addEventListener("message", _6, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", g5), g5;
      } catch (h7) {
        this.logger.warn(h7);
      }
      return "";
    }, this.resolve = async (i7) => {
      if (this.isDevEnv) return "";
      const { attestationId: r5, hash: n6, encryptedId: a6 } = i7;
      if (r5 === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (r5) {
        if (decodeJWT(r5).payload.id !== a6) return;
        const h7 = await this.isValidJwtAttestation(r5);
        if (h7) {
          if (!h7.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h7;
        }
      }
      if (!n6) return;
      const c8 = this.getVerifyUrl(i7 == null ? void 0 : i7.verifyUrl);
      return this.fetchAttestation(n6, c8);
    }, this.fetchAttestation = async (i7, r5) => {
      this.logger.debug(`resolving attestation: ${i7} from url: ${r5}`);
      const n6 = this.startAbortTimer(import_time4.ONE_SECOND * 5), a6 = await fetch(`${r5}/attestation/${i7}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(n6), a6.status === 200 ? await a6.json() : void 0;
    }, this.getVerifyUrl = (i7) => {
      let r5 = i7 || Q3;
      return Kt2.includes(r5) || (this.logger.info(`verify url: ${r5}, not included in trusted list, assigning default: ${Q3}`), r5 = Q3), r5;
    }, this.fetchPublicKey = async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const i7 = this.startAbortTimer(import_time4.FIVE_SECONDS), r5 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(i7), await r5.json();
      } catch (i7) {
        this.logger.warn(i7);
      }
    }, this.persistPublicKey = async (i7) => {
      this.logger.debug("persisting public key to local storage", i7), await this.store.setItem(this.storeKey, i7), this.publicKey = i7;
    }, this.removePublicKey = async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }, this.isValidJwtAttestation = async (i7) => {
      const r5 = await this.getPublicKey();
      try {
        if (r5) return this.validateAttestation(i7, r5);
      } catch (a6) {
        this.logger.error(a6), this.logger.warn("error validating attestation");
      }
      const n6 = await this.fetchAndPersistPublicKey();
      try {
        if (n6) return this.validateAttestation(i7, n6);
      } catch (a6) {
        this.logger.error(a6), this.logger.warn("error validating attestation");
      }
    }, this.getPublicKey = async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey(), this.fetchAndPersistPublicKey = async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (r5) => {
        const n6 = await this.fetchPublicKey();
        n6 && (await this.persistPublicKey(n6), r5(n6));
      });
      const i7 = await this.fetchPromise;
      return this.fetchPromise = void 0, i7;
    }, this.validateAttestation = (i7, r5) => {
      const n6 = ku(i7, r5.publicKey), a6 = { hasExpired: (0, import_time4.toMiliseconds)(n6.exp) < Date.now(), payload: n6 };
      if (a6.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a6.payload.origin, isScam: a6.payload.isScam, isVerified: a6.payload.isVerified };
    }, this.logger = E5(t3, this.name), this.abortController = new AbortController(), this.isDevEnv = Es(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return y4(this.logger);
  }
  startAbortTimer(e4) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_time4.toMiliseconds)(e4));
  }
};
var di2 = class extends v4 {
  constructor(e4, t3) {
    super(e4, t3), this.projectId = e4, this.logger = t3, this.context = Bt, this.registerDeviceToken = async (s5) => {
      const { clientId: i7, token: r5, notificationType: n6, enableEncrypted: a6 = false } = s5, c8 = `${Vt}/${this.projectId}/clients`;
      await fetch(c8, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: i7, type: n6, token: r5, always_raw: a6 }) });
    }, this.logger = E5(t3, this.context);
  }
};
var Tn = Object.defineProperty;
var gi2 = Object.getOwnPropertySymbols;
var Cn2 = Object.prototype.hasOwnProperty;
var Sn2 = Object.prototype.propertyIsEnumerable;
var pi2 = (o6, e4, t3) => e4 in o6 ? Tn(o6, e4, { enumerable: true, configurable: true, writable: true, value: t3 }) : o6[e4] = t3;
var te2 = (o6, e4) => {
  for (var t3 in e4 || (e4 = {})) Cn2.call(e4, t3) && pi2(o6, t3, e4[t3]);
  if (gi2) for (var t3 of gi2(e4)) Sn2.call(e4, t3) && pi2(o6, t3, e4[t3]);
  return o6;
};
var yi2 = class extends C4 {
  constructor(e4, t3, s5 = true) {
    super(e4, t3, s5), this.core = e4, this.logger = t3, this.context = qt2, this.storagePrefix = O4, this.storageVersion = jt2, this.events = /* @__PURE__ */ new Map(), this.shouldPersist = false, this.init = async () => {
      if (!Es()) try {
        const i7 = { eventId: Ms(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: On(this.core.relayer.protocol, this.core.relayer.version, ae2) } } };
        await this.sendEvent([i7]);
      } catch (i7) {
        this.logger.warn(i7);
      }
    }, this.createEvent = (i7) => {
      const { event: r5 = "ERROR", type: n6 = "", properties: { topic: a6, trace: c8 } } = i7, h7 = Ms(), d5 = this.core.projectId || "", g5 = Date.now(), m4 = te2({ eventId: h7, timestamp: g5, props: { event: r5, type: n6, properties: { topic: a6, trace: c8 } }, bundleId: d5, domain: this.getAppDomain() }, this.setMethods(h7));
      return this.telemetryEnabled && (this.events.set(h7, m4), this.shouldPersist = true), m4;
    }, this.getEvent = (i7) => {
      const { eventId: r5, topic: n6 } = i7;
      if (r5) return this.events.get(r5);
      const a6 = Array.from(this.events.values()).find((c8) => c8.props.properties.topic === n6);
      if (a6) return te2(te2({}, a6), this.setMethods(a6.eventId));
    }, this.deleteEvent = (i7) => {
      const { eventId: r5 } = i7;
      this.events.delete(r5), this.shouldPersist = true;
    }, this.setEventListeners = () => {
      this.core.heartbeat.on(r3.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((i7) => {
          (0, import_time4.fromMiliseconds)(Date.now()) - (0, import_time4.fromMiliseconds)(i7.timestamp) > Gt2 && (this.events.delete(i7.eventId), this.shouldPersist = true);
        });
      });
    }, this.setMethods = (i7) => ({ addTrace: (r5) => this.addTrace(i7, r5), setError: (r5) => this.setError(i7, r5) }), this.addTrace = (i7, r5) => {
      const n6 = this.events.get(i7);
      n6 && (n6.props.properties.trace.push(r5), this.events.set(i7, n6), this.shouldPersist = true);
    }, this.setError = (i7, r5) => {
      const n6 = this.events.get(i7);
      n6 && (n6.props.type = r5, n6.timestamp = Date.now(), this.events.set(i7, n6), this.shouldPersist = true);
    }, this.persist = async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
    }, this.restore = async () => {
      try {
        const i7 = await this.core.storage.getItem(this.storageKey) || [];
        if (!i7.length) return;
        i7.forEach((r5) => {
          this.events.set(r5.eventId, te2(te2({}, r5), this.setMethods(r5.eventId)));
        });
      } catch (i7) {
        this.logger.warn(i7);
      }
    }, this.submit = async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const i7 = [];
      for (const [r5, n6] of this.events) n6.props.type && i7.push(n6);
      if (i7.length !== 0) try {
        if ((await this.sendEvent(i7)).ok) for (const r5 of i7) this.events.delete(r5.eventId), this.shouldPersist = true;
      } catch (r5) {
        this.logger.warn(r5);
      }
    }, this.sendEvent = async (i7) => {
      const r5 = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${Ht2}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${ae2}${r5}`, { method: "POST", body: JSON.stringify(i7) });
    }, this.getAppDomain = () => es().url, this.logger = E5(t3, this.context), this.telemetryEnabled = s5, s5 ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
};
var Pn = Object.defineProperty;
var Di2 = Object.getOwnPropertySymbols;
var Rn2 = Object.prototype.hasOwnProperty;
var xn = Object.prototype.propertyIsEnumerable;
var mi = (o6, e4, t3) => e4 in o6 ? Pn(o6, e4, { enumerable: true, configurable: true, writable: true, value: t3 }) : o6[e4] = t3;
var bi2 = (o6, e4) => {
  for (var t3 in e4 || (e4 = {})) Rn2.call(e4, t3) && mi(o6, t3, e4[t3]);
  if (Di2) for (var t3 of Di2(e4)) xn.call(e4, t3) && mi(o6, t3, e4[t3]);
  return o6;
};
var ce2 = class _ce extends n4 {
  constructor(e4) {
    var t3;
    super(e4), this.protocol = Ee, this.version = ve2, this.name = oe2, this.events = new import_events7.EventEmitter(), this.initialized = false, this.on = (n6, a6) => this.events.on(n6, a6), this.once = (n6, a6) => this.events.once(n6, a6), this.off = (n6, a6) => this.events.off(n6, a6), this.removeListener = (n6, a6) => this.events.removeListener(n6, a6), this.dispatchEnvelope = ({ topic: n6, message: a6, sessionExists: c8 }) => {
      if (!n6 || !a6) return;
      const h7 = { topic: n6, message: a6, publishedAt: Date.now(), transportType: F3.link_mode };
      this.relayer.onLinkMessageEvent(h7, { sessionExists: c8 });
    }, this.projectId = e4 == null ? void 0 : e4.projectId, this.relayUrl = (e4 == null ? void 0 : e4.relayUrl) || Ie, this.customStoragePrefix = e4 != null && e4.customStoragePrefix ? `:${e4.customStoragePrefix}` : "";
    const s5 = k4({ level: typeof (e4 == null ? void 0 : e4.logger) == "string" && e4.logger ? e4.logger : dt.logger }), { logger: i7, chunkLoggerController: r5 } = A4({ opts: s5, maxSizeInBytes: e4 == null ? void 0 : e4.maxLogBlobSizeInBytes, loggerOverride: e4 == null ? void 0 : e4.logger });
    this.logChunkController = r5, (t3 = this.logChunkController) != null && t3.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var n6, a6;
      (n6 = this.logChunkController) != null && n6.downloadLogsBlobInBrowser && ((a6 = this.logChunkController) == null || a6.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E5(i7, this.name), this.heartbeat = new i3(), this.crypto = new Jt2(this, this.logger, e4 == null ? void 0 : e4.keychain), this.history = new ci(this, this.logger), this.expirer = new hi(this, this.logger), this.storage = e4 != null && e4.storage ? e4.storage : new h3(bi2(bi2({}, gt), e4 == null ? void 0 : e4.storageOptions)), this.relayer = new ii({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new ai(this, this.logger), this.verify = new ui(this, this.logger, this.storage), this.echoClient = new di2(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new yi2(this, this.logger, e4 == null ? void 0 : e4.telemetryEnabled);
  }
  static async init(e4) {
    const t3 = new _ce(e4);
    await t3.initialize();
    const s5 = await t3.crypto.getClientId();
    return await t3.storage.setItem(Pt, s5), t3;
  }
  get context() {
    return y4(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e4;
    return (e4 = this.logChunkController) == null ? void 0 : e4.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e4) {
    this.linkModeSupportedApps.includes(e4) || (this.linkModeSupportedApps.push(e4), await this.storage.setItem(Te, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.eventClient.init(), this.linkModeSupportedApps = await this.storage.getItem(Te) || [], this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e4) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e4), this.logger.error(e4.message), e4;
    }
  }
};
var On2 = ce2;

// node_modules/@walletconnect/sign-client/node_modules/@walletconnect/types/dist/index.es.js
var import_events9 = __toESM(require_events());
var S4 = class {
  constructor(s5) {
    this.opts = s5, this.protocol = "wc", this.version = 2;
  }
};
var M4 = class {
  constructor(s5) {
    this.client = s5;
  }
};

// node_modules/@walletconnect/sign-client/dist/index.es.js
var import_events10 = __toESM(require_events());
var import_time5 = __toESM(require_cjs4());
var be3 = "wc";
var Ce3 = 2;
var Le = "client";
var ye3 = `${be3}@${Ce3}:${Le}:`;
var we3 = { name: Le, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" };
var xe2 = "WALLETCONNECT_DEEPLINK_CHOICE";
var st2 = "proposal";
var it2 = "Proposal expired";
var rt2 = "session";
var z7 = import_time5.SEVEN_DAYS;
var nt2 = "engine";
var v5 = { wc_sessionPropose: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: import_time5.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: import_time5.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1119 } } };
var me3 = { min: import_time5.FIVE_MINUTES, max: import_time5.SEVEN_DAYS };
var x6 = { idle: "IDLE", active: "ACTIVE" };
var ot2 = "request";
var at2 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"];
var ct2 = "wc";
var lt2 = "auth";
var pt2 = "authKeys";
var ht2 = "pairingTopics";
var dt2 = "requests";
var oe3 = `${ct2}@${1.5}:${lt2}:`;
var ae3 = `${oe3}:PUB_KEY`;
var ys2 = Object.defineProperty;
var ws3 = Object.defineProperties;
var ms2 = Object.getOwnPropertyDescriptors;
var ut2 = Object.getOwnPropertySymbols;
var _s3 = Object.prototype.hasOwnProperty;
var Es3 = Object.prototype.propertyIsEnumerable;
var gt2 = (q4, o6, e4) => o6 in q4 ? ys2(q4, o6, { enumerable: true, configurable: true, writable: true, value: e4 }) : q4[o6] = e4;
var I5 = (q4, o6) => {
  for (var e4 in o6 || (o6 = {})) _s3.call(o6, e4) && gt2(q4, e4, o6[e4]);
  if (ut2) for (var e4 of ut2(o6)) Es3.call(o6, e4) && gt2(q4, e4, o6[e4]);
  return q4;
};
var D4 = (q4, o6) => ws3(q4, ms2(o6));
var Rs3 = class extends M4 {
  constructor(o6) {
    super(o6), this.name = nt2, this.events = new import_events10.default(), this.initialized = false, this.requestQueue = { state: x6.idle, queue: [] }, this.sessionRequestQueue = { state: x6.idle, queue: [] }, this.requestQueueDelay = import_time5.ONE_SECOND, this.expectedPairingMethodMap = /* @__PURE__ */ new Map(), this.recentlyDeletedMap = /* @__PURE__ */ new Map(), this.recentlyDeletedLimit = 200, this.relayMessageCache = [], this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(v5) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, (0, import_time5.toMiliseconds)(this.requestQueueDelay)));
    }, this.connect = async (e4) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const t3 = D4(I5({}, e4), { requiredNamespaces: e4.requiredNamespaces || {}, optionalNamespaces: e4.optionalNamespaces || {} });
      await this.isValidConnect(t3);
      const { pairingTopic: s5, requiredNamespaces: i7, optionalNamespaces: r5, sessionProperties: n6, relays: a6 } = t3;
      let c8 = s5, h7, p5 = false;
      try {
        c8 && (p5 = this.client.core.pairing.pairings.get(c8).active);
      } catch (E6) {
        throw this.client.logger.error(`connect() -> pairing.get(${c8}) failed`), E6;
      }
      if (!c8 || !p5) {
        const { topic: E6, uri: S5 } = await this.client.core.pairing.create();
        c8 = E6, h7 = S5;
      }
      if (!c8) {
        const { message: E6 } = xe("NO_MATCHING_KEY", `connect() pairing topic: ${c8}`);
        throw new Error(E6);
      }
      const d5 = await this.client.core.crypto.generateKeyPair(), l6 = v5.wc_sessionPropose.req.ttl || import_time5.FIVE_MINUTES, w7 = ms(l6), m4 = I5({ requiredNamespaces: i7, optionalNamespaces: r5, relays: a6 ?? [{ protocol: vt }], proposer: { publicKey: d5, metadata: this.client.metadata }, expiryTimestamp: w7, pairingTopic: c8 }, n6 && { sessionProperties: n6 }), { reject: y8, resolve: _6, done: R3 } = ls(l6, it2);
      this.events.once(bs("session_connect"), async ({ error: E6, session: S5 }) => {
        if (E6) y8(E6);
        else if (S5) {
          S5.self.publicKey = d5;
          const M5 = D4(I5({}, S5), { pairingTopic: m4.pairingTopic, requiredNamespaces: m4.requiredNamespaces, optionalNamespaces: m4.optionalNamespaces, transportType: F3.relay });
          await this.client.session.set(S5.topic, M5), await this.setExpiry(S5.topic, S5.expiry), c8 && await this.client.core.pairing.updateMetadata({ topic: c8, metadata: S5.peer.metadata }), this.cleanupDuplicatePairings(M5), _6(M5);
        }
      });
      const V4 = await this.sendRequest({ topic: c8, method: "wc_sessionPropose", params: m4, throwOnFailedPublish: true });
      return await this.setProposal(V4, I5({ id: V4 }, m4)), { uri: h7, approval: R3 };
    }, this.pair = async (e4) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(e4);
      } catch (t3) {
        throw this.client.logger.error("pair() failed"), t3;
      }
    }, this.approve = async (e4) => {
      var t3, s5, i7;
      const r5 = this.client.core.eventClient.createEvent({ properties: { topic: (t3 = e4 == null ? void 0 : e4.id) == null ? void 0 : t3.toString(), trace: [Wr2.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (N10) {
        throw r5.setError(Xr2.no_internet_connection), N10;
      }
      try {
        await this.isValidProposalId(e4 == null ? void 0 : e4.id);
      } catch (N10) {
        throw this.client.logger.error(`approve() -> proposal.get(${e4 == null ? void 0 : e4.id}) failed`), r5.setError(Xr2.proposal_not_found), N10;
      }
      try {
        await this.isValidApprove(e4);
      } catch (N10) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), r5.setError(Xr2.session_approve_namespace_validation_failure), N10;
      }
      const { id: n6, relayProtocol: a6, namespaces: c8, sessionProperties: h7, sessionConfig: p5 } = e4, d5 = this.client.proposal.get(n6);
      this.client.core.eventClient.deleteEvent({ eventId: r5.eventId });
      const { pairingTopic: l6, proposer: w7, requiredNamespaces: m4, optionalNamespaces: y8 } = d5;
      let _6 = (s5 = this.client.core.eventClient) == null ? void 0 : s5.getEvent({ topic: l6 });
      _6 || (_6 = (i7 = this.client.core.eventClient) == null ? void 0 : i7.createEvent({ type: Wr2.session_approve_started, properties: { topic: l6, trace: [Wr2.session_approve_started, Wr2.session_namespaces_validation_success] } }));
      const R3 = await this.client.core.crypto.generateKeyPair(), V4 = w7.publicKey, E6 = await this.client.core.crypto.generateSharedKey(R3, V4), S5 = I5(I5({ relay: { protocol: a6 ?? "irn" }, namespaces: c8, controller: { publicKey: R3, metadata: this.client.metadata }, expiry: ms(z7) }, h7 && { sessionProperties: h7 }), p5 && { sessionConfig: p5 }), M5 = F3.relay;
      _6.addTrace(Wr2.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(E6, { transportType: M5 });
      } catch (N10) {
        throw _6.setError(Xr2.subscribe_session_topic_failure), N10;
      }
      _6.addTrace(Wr2.subscribe_session_topic_success);
      const W3 = D4(I5({}, S5), { topic: E6, requiredNamespaces: m4, optionalNamespaces: y8, pairingTopic: l6, acknowledged: false, self: S5.controller, peer: { publicKey: w7.publicKey, metadata: w7.metadata }, controller: R3, transportType: F3.relay });
      await this.client.session.set(E6, W3), _6.addTrace(Wr2.store_session);
      try {
        _6.addTrace(Wr2.publishing_session_settle), await this.sendRequest({ topic: E6, method: "wc_sessionSettle", params: S5, throwOnFailedPublish: true }).catch((N10) => {
          throw _6 == null ? void 0 : _6.setError(Xr2.session_settle_publish_failure), N10;
        }), _6.addTrace(Wr2.session_settle_publish_success), _6.addTrace(Wr2.publishing_session_approve), await this.sendResult({ id: n6, topic: l6, result: { relay: { protocol: a6 ?? "irn" }, responderPublicKey: R3 }, throwOnFailedPublish: true }).catch((N10) => {
          throw _6 == null ? void 0 : _6.setError(Xr2.session_approve_publish_failure), N10;
        }), _6.addTrace(Wr2.session_approve_publish_success);
      } catch (N10) {
        throw this.client.logger.error(N10), this.client.session.delete(E6, er("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(E6), N10;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: _6.eventId }), await this.client.core.pairing.updateMetadata({ topic: l6, metadata: w7.metadata }), await this.client.proposal.delete(n6, er("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l6 }), await this.setExpiry(E6, ms(z7)), { topic: E6, acknowledged: () => Promise.resolve(this.client.session.get(E6)) };
    }, this.reject = async (e4) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(e4);
      } catch (r5) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r5;
      }
      const { id: t3, reason: s5 } = e4;
      let i7;
      try {
        i7 = this.client.proposal.get(t3).pairingTopic;
      } catch (r5) {
        throw this.client.logger.error(`reject() -> proposal.get(${t3}) failed`), r5;
      }
      i7 && (await this.sendError({ id: t3, topic: i7, error: s5, rpcOpts: v5.wc_sessionPropose.reject }), await this.client.proposal.delete(t3, er("USER_DISCONNECTED")));
    }, this.update = async (e4) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(e4);
      } catch (p5) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), p5;
      }
      const { topic: t3, namespaces: s5 } = e4, { done: i7, resolve: r5, reject: n6 } = ls(), a6 = payloadId(), c8 = getBigIntRpcId().toString(), h7 = this.client.session.get(t3).namespaces;
      return this.events.once(bs("session_update", a6), ({ error: p5 }) => {
        p5 ? n6(p5) : r5();
      }), await this.client.session.update(t3, { namespaces: s5 }), await this.sendRequest({ topic: t3, method: "wc_sessionUpdate", params: { namespaces: s5 }, throwOnFailedPublish: true, clientRpcId: a6, relayRpcId: c8 }).catch((p5) => {
        this.client.logger.error(p5), this.client.session.update(t3, { namespaces: h7 }), n6(p5);
      }), { acknowledged: i7 };
    }, this.extend = async (e4) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(e4);
      } catch (a6) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a6;
      }
      const { topic: t3 } = e4, s5 = payloadId(), { done: i7, resolve: r5, reject: n6 } = ls();
      return this.events.once(bs("session_extend", s5), ({ error: a6 }) => {
        a6 ? n6(a6) : r5();
      }), await this.setExpiry(t3, ms(z7)), this.sendRequest({ topic: t3, method: "wc_sessionExtend", params: {}, clientRpcId: s5, throwOnFailedPublish: true }).catch((a6) => {
        n6(a6);
      }), { acknowledged: i7 };
    }, this.request = async (e4) => {
      this.isInitialized();
      try {
        await this.isValidRequest(e4);
      } catch (w7) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), w7;
      }
      const { chainId: t3, request: s5, topic: i7, expiry: r5 = v5.wc_sessionRequest.req.ttl } = e4, n6 = this.client.session.get(i7);
      (n6 == null ? void 0 : n6.transportType) === F3.relay && await this.confirmOnlineStateOrThrow();
      const a6 = payloadId(), c8 = getBigIntRpcId().toString(), { done: h7, resolve: p5, reject: d5 } = ls(r5, "Request expired. Please try again.");
      this.events.once(bs("session_request", a6), ({ error: w7, result: m4 }) => {
        w7 ? d5(w7) : p5(m4);
      });
      const l6 = this.getAppLinkIfEnabled(n6.peer.metadata, n6.transportType);
      return l6 ? (await this.sendRequest({ clientRpcId: a6, relayRpcId: c8, topic: i7, method: "wc_sessionRequest", params: { request: D4(I5({}, s5), { expiryTimestamp: ms(r5) }), chainId: t3 }, expiry: r5, throwOnFailedPublish: true, appLink: l6 }).catch((w7) => d5(w7)), this.client.events.emit("session_request_sent", { topic: i7, request: s5, chainId: t3, id: a6 }), await h7()) : await Promise.all([new Promise(async (w7) => {
        await this.sendRequest({ clientRpcId: a6, relayRpcId: c8, topic: i7, method: "wc_sessionRequest", params: { request: D4(I5({}, s5), { expiryTimestamp: ms(r5) }), chainId: t3 }, expiry: r5, throwOnFailedPublish: true }).catch((m4) => d5(m4)), this.client.events.emit("session_request_sent", { topic: i7, request: s5, chainId: t3, id: a6 }), w7();
      }), new Promise(async (w7) => {
        var m4;
        if (!((m4 = n6.sessionConfig) != null && m4.disableDeepLink)) {
          const y8 = await ws(this.client.core.storage, xe2);
          ys({ id: a6, topic: i7, wcDeepLink: y8 });
        }
        w7();
      }), h7()]).then((w7) => w7[2]);
    }, this.respond = async (e4) => {
      this.isInitialized(), await this.isValidRespond(e4);
      const { topic: t3, response: s5 } = e4, { id: i7 } = s5, r5 = this.client.session.get(t3);
      r5.transportType === F3.relay && await this.confirmOnlineStateOrThrow();
      const n6 = this.getAppLinkIfEnabled(r5.peer.metadata, r5.transportType);
      isJsonRpcResult(s5) ? await this.sendResult({ id: i7, topic: t3, result: s5.result, throwOnFailedPublish: true, appLink: n6 }) : isJsonRpcError(s5) && await this.sendError({ id: i7, topic: t3, error: s5.error, appLink: n6 }), this.cleanupAfterResponse(e4);
    }, this.ping = async (e4) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(e4);
      } catch (s5) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s5;
      }
      const { topic: t3 } = e4;
      if (this.client.session.keys.includes(t3)) {
        const s5 = payloadId(), i7 = getBigIntRpcId().toString(), { done: r5, resolve: n6, reject: a6 } = ls();
        this.events.once(bs("session_ping", s5), ({ error: c8 }) => {
          c8 ? a6(c8) : n6();
        }), await Promise.all([this.sendRequest({ topic: t3, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s5, relayRpcId: i7 }), r5()]);
      } else this.client.core.pairing.pairings.keys.includes(t3) && await this.client.core.pairing.ping({ topic: t3 });
    }, this.emit = async (e4) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e4);
      const { topic: t3, event: s5, chainId: i7 } = e4, r5 = getBigIntRpcId().toString();
      await this.sendRequest({ topic: t3, method: "wc_sessionEvent", params: { event: s5, chainId: i7 }, throwOnFailedPublish: true, relayRpcId: r5 });
    }, this.disconnect = async (e4) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e4);
      const { topic: t3 } = e4;
      if (this.client.session.keys.includes(t3)) await this.sendRequest({ topic: t3, method: "wc_sessionDelete", params: er("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: t3, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(t3)) await this.client.core.pairing.disconnect({ topic: t3 });
      else {
        const { message: s5 } = xe("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t3}`);
        throw new Error(s5);
      }
    }, this.find = (e4) => (this.isInitialized(), this.client.session.getAll().filter((t3) => oh(t3, e4))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async (e4, t3) => {
      var s5;
      this.isInitialized(), this.isValidAuthenticate(e4);
      const i7 = t3 && this.client.core.linkModeSupportedApps.includes(t3) && ((s5 = this.client.metadata.redirect) == null ? void 0 : s5.linkMode), r5 = i7 ? F3.link_mode : F3.relay;
      r5 === F3.relay && await this.confirmOnlineStateOrThrow();
      const { chains: n6, statement: a6 = "", uri: c8, domain: h7, nonce: p5, type: d5, exp: l6, nbf: w7, methods: m4 = [], expiry: y8 } = e4, _6 = [...e4.resources || []], { topic: R3, uri: V4 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: r5 });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: R3, uri: V4 } });
      const E6 = await this.client.core.crypto.generateKeyPair(), S5 = Nu(E6);
      if (await Promise.all([this.client.auth.authKeys.set(ae3, { responseTopic: S5, publicKey: E6 }), this.client.auth.pairingTopics.set(S5, { topic: S5, pairingTopic: R3 })]), await this.client.core.relayer.subscribe(S5, { transportType: r5 }), this.client.logger.info(`sending request to new pairing topic: ${R3}`), m4.length > 0) {
        const { namespace: O5 } = mn(n6[0]);
        let T6 = Au(O5, "request", m4);
        Vr(_6) && (T6 = bu(T6, _6.pop())), _6.push(T6);
      }
      const M5 = y8 && y8 > v5.wc_sessionAuthenticate.req.ttl ? y8 : v5.wc_sessionAuthenticate.req.ttl, W3 = { authPayload: { type: d5 ?? "caip122", chains: n6, statement: a6, aud: c8, domain: h7, version: "1", nonce: p5, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: l6, nbf: w7, resources: _6 }, requester: { publicKey: E6, metadata: this.client.metadata }, expiryTimestamp: ms(M5) }, N10 = { eip155: { chains: n6, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...m4])], events: ["chainChanged", "accountsChanged"] } }, De2 = { requiredNamespaces: {}, optionalNamespaces: N10, relays: [{ protocol: "irn" }], pairingTopic: R3, proposer: { publicKey: E6, metadata: this.client.metadata }, expiryTimestamp: ms(v5.wc_sessionPropose.req.ttl) }, { done: wt2, resolve: Ve2, reject: Ee2 } = ls(M5, "Request expired"), ce3 = async ({ error: O5, session: T6 }) => {
        if (this.events.off(bs("session_request", G2), Re2), O5) Ee2(O5);
        else if (T6) {
          T6.self.publicKey = E6, await this.client.session.set(T6.topic, T6), await this.setExpiry(T6.topic, T6.expiry), R3 && await this.client.core.pairing.updateMetadata({ topic: R3, metadata: T6.peer.metadata });
          const le2 = this.client.session.get(T6.topic);
          await this.deleteProposal(Z3), Ve2({ session: le2 });
        }
      }, Re2 = async (O5) => {
        var T6, le2, Me;
        if (await this.deletePendingAuthRequest(G2, { message: "fulfilled", code: 0 }), O5.error) {
          const te3 = er("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return O5.error.code === te3.code ? void 0 : (this.events.off(bs("session_connect"), ce3), Ee2(O5.error.message));
        }
        await this.deleteProposal(Z3), this.events.off(bs("session_connect"), ce3);
        const { cacaos: ke, responder: j6 } = O5.result, Ie2 = [], $e2 = [];
        for (const te3 of ke) {
          await du({ cacao: te3, projectId: this.client.core.projectId }) || (this.client.logger.error(te3, "Signature verification failed"), Ee2(er("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: fe3 } = te3, ve3 = Vr(fe3.resources), Ke = [lu(fe3.iss)], mt2 = Yi(fe3.iss);
          if (ve3) {
            const qe = yu(ve3), _t2 = wu(ve3);
            Ie2.push(...qe), Ke.push(..._t2);
          }
          for (const qe of Ke) $e2.push(`${qe}:${mt2}`);
        }
        const ee3 = await this.client.core.crypto.generateSharedKey(E6, j6.publicKey);
        let pe2;
        Ie2.length > 0 && (pe2 = { topic: ee3, acknowledged: true, self: { publicKey: E6, metadata: this.client.metadata }, peer: j6, controller: j6.publicKey, expiry: ms(z7), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: R3, namespaces: fh([...new Set(Ie2)], [...new Set($e2)]), transportType: r5 }, await this.client.core.relayer.subscribe(ee3, { transportType: r5 }), await this.client.session.set(ee3, pe2), R3 && await this.client.core.pairing.updateMetadata({ topic: R3, metadata: j6.metadata }), pe2 = this.client.session.get(ee3)), (T6 = this.client.metadata.redirect) != null && T6.linkMode && (le2 = j6.metadata.redirect) != null && le2.linkMode && (Me = j6.metadata.redirect) != null && Me.universal && t3 && (this.client.core.addLinkModeSupportedApp(j6.metadata.redirect.universal), this.client.session.update(ee3, { transportType: F3.link_mode })), Ve2({ auths: ke, session: pe2 });
      }, G2 = payloadId(), Z3 = payloadId();
      this.events.once(bs("session_connect"), ce3), this.events.once(bs("session_request", G2), Re2);
      let Se;
      try {
        if (i7) {
          const O5 = formatJsonRpcRequest("wc_sessionAuthenticate", W3, G2);
          this.client.core.history.set(R3, O5);
          const T6 = await this.client.core.crypto.encode("", O5, { type: Sr, encoding: xu });
          Se = Vu(t3, R3, T6);
        } else await Promise.all([this.sendRequest({ topic: R3, method: "wc_sessionAuthenticate", params: W3, expiry: e4.expiry, throwOnFailedPublish: true, clientRpcId: G2 }), this.sendRequest({ topic: R3, method: "wc_sessionPropose", params: De2, expiry: v5.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: Z3 })]);
      } catch (O5) {
        throw this.events.off(bs("session_connect"), ce3), this.events.off(bs("session_request", G2), Re2), O5;
      }
      return await this.setProposal(Z3, I5({ id: Z3 }, De2)), await this.setAuthRequest(G2, { request: D4(I5({}, W3), { verifyContext: {} }), pairingTopic: R3, transportType: r5 }), { uri: Se ?? V4, response: wt2 };
    }, this.approveSessionAuthenticate = async (e4) => {
      const { id: t3, auths: s5 } = e4, i7 = this.client.core.eventClient.createEvent({ properties: { topic: t3.toString(), trace: [Zr2.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (y8) {
        throw i7.setError(Qr2.no_internet_connection), y8;
      }
      const r5 = this.getPendingAuthRequest(t3);
      if (!r5) throw i7.setError(Qr2.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${t3}`);
      const n6 = r5.transportType || F3.relay;
      n6 === F3.relay && await this.confirmOnlineStateOrThrow();
      const a6 = r5.requester.publicKey, c8 = await this.client.core.crypto.generateKeyPair(), h7 = Nu(a6), p5 = { type: pr, receiverPublicKey: a6, senderPublicKey: c8 }, d5 = [], l6 = [];
      for (const y8 of s5) {
        if (!await du({ cacao: y8, projectId: this.client.core.projectId })) {
          i7.setError(Qr2.invalid_cacao);
          const S5 = er("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: t3, topic: h7, error: S5, encodeOpts: p5 }), new Error(S5.message);
        }
        i7.addTrace(Zr2.cacaos_verified);
        const { p: _6 } = y8, R3 = Vr(_6.resources), V4 = [lu(_6.iss)], E6 = Yi(_6.iss);
        if (R3) {
          const S5 = yu(R3), M5 = wu(R3);
          d5.push(...S5), V4.push(...M5);
        }
        for (const S5 of V4) l6.push(`${S5}:${E6}`);
      }
      const w7 = await this.client.core.crypto.generateSharedKey(c8, a6);
      i7.addTrace(Zr2.create_authenticated_session_topic);
      let m4;
      if ((d5 == null ? void 0 : d5.length) > 0) {
        m4 = { topic: w7, acknowledged: true, self: { publicKey: c8, metadata: this.client.metadata }, peer: { publicKey: a6, metadata: r5.requester.metadata }, controller: a6, expiry: ms(z7), authentication: s5, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: r5.pairingTopic, namespaces: fh([...new Set(d5)], [...new Set(l6)]), transportType: n6 }, i7.addTrace(Zr2.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(w7, { transportType: n6 });
        } catch (y8) {
          throw i7.setError(Qr2.subscribe_authenticated_session_topic_failure), y8;
        }
        i7.addTrace(Zr2.subscribe_authenticated_session_topic_success), await this.client.session.set(w7, m4), i7.addTrace(Zr2.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: r5.pairingTopic, metadata: r5.requester.metadata });
      }
      i7.addTrace(Zr2.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: h7, id: t3, result: { cacaos: s5, responder: { publicKey: c8, metadata: this.client.metadata } }, encodeOpts: p5, throwOnFailedPublish: true, appLink: this.getAppLinkIfEnabled(r5.requester.metadata, n6) });
      } catch (y8) {
        throw i7.setError(Qr2.authenticated_session_approve_publish_failure), y8;
      }
      return await this.client.auth.requests.delete(t3, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: r5.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i7.eventId }), { session: m4 };
    }, this.rejectSessionAuthenticate = async (e4) => {
      this.isInitialized();
      const { id: t3, reason: s5 } = e4, i7 = this.getPendingAuthRequest(t3);
      if (!i7) throw new Error(`Could not find pending auth request with id ${t3}`);
      i7.transportType === F3.relay && await this.confirmOnlineStateOrThrow();
      const r5 = i7.requester.publicKey, n6 = await this.client.core.crypto.generateKeyPair(), a6 = Nu(r5), c8 = { type: pr, receiverPublicKey: r5, senderPublicKey: n6 };
      await this.sendError({ id: t3, topic: a6, error: s5, encodeOpts: c8, rpcOpts: v5.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(i7.requester.metadata, i7.transportType) }), await this.client.auth.requests.delete(t3, { message: "rejected", code: 0 }), await this.client.proposal.delete(t3, er("USER_DISCONNECTED"));
    }, this.formatAuthMessage = (e4) => {
      this.isInitialized();
      const { request: t3, iss: s5 } = e4;
      return Jf(t3, s5);
    }, this.processRelayMessageCache = () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const e4 = this.relayMessageCache.shift();
          e4 && await this.onRelayMessage(e4);
        } catch (e4) {
          this.client.logger.error(e4);
        }
      }, 50);
    }, this.cleanupDuplicatePairings = async (e4) => {
      if (e4.pairingTopic) try {
        const t3 = this.client.core.pairing.pairings.get(e4.pairingTopic), s5 = this.client.core.pairing.pairings.getAll().filter((i7) => {
          var r5, n6;
          return ((r5 = i7.peerMetadata) == null ? void 0 : r5.url) && ((n6 = i7.peerMetadata) == null ? void 0 : n6.url) === e4.peer.metadata.url && i7.topic && i7.topic !== t3.topic;
        });
        if (s5.length === 0) return;
        this.client.logger.info(`Cleaning up ${s5.length} duplicate pairing(s)`), await Promise.all(s5.map((i7) => this.client.core.pairing.disconnect({ topic: i7.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (t3) {
        this.client.logger.error(t3);
      }
    }, this.deleteSession = async (e4) => {
      var t3;
      const { topic: s5, expirerHasDeleted: i7 = false, emitEvent: r5 = true, id: n6 = 0 } = e4, { self: a6 } = this.client.session.get(s5);
      await this.client.core.relayer.unsubscribe(s5), await this.client.session.delete(s5, er("USER_DISCONNECTED")), this.addToRecentlyDeleted(s5, "session"), this.client.core.crypto.keychain.has(a6.publicKey) && await this.client.core.crypto.deleteKeyPair(a6.publicKey), this.client.core.crypto.keychain.has(s5) && await this.client.core.crypto.deleteSymKey(s5), i7 || this.client.core.expirer.del(s5), this.client.core.storage.removeItem(xe2).catch((c8) => this.client.logger.warn(c8)), this.getPendingSessionRequests().forEach((c8) => {
        c8.topic === s5 && this.deletePendingSessionRequest(c8.id, er("USER_DISCONNECTED"));
      }), s5 === ((t3 = this.sessionRequestQueue.queue[0]) == null ? void 0 : t3.topic) && (this.sessionRequestQueue.state = x6.idle), r5 && this.client.events.emit("session_delete", { id: n6, topic: s5 });
    }, this.deleteProposal = async (e4, t3) => {
      if (t3) try {
        const s5 = this.client.proposal.get(e4), i7 = this.client.core.eventClient.getEvent({ topic: s5.pairingTopic });
        i7 == null ? void 0 : i7.setError(Xr2.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(e4, er("USER_DISCONNECTED")), t3 ? Promise.resolve() : this.client.core.expirer.del(e4)]), this.addToRecentlyDeleted(e4, "proposal");
    }, this.deletePendingSessionRequest = async (e4, t3, s5 = false) => {
      await Promise.all([this.client.pendingRequest.delete(e4, t3), s5 ? Promise.resolve() : this.client.core.expirer.del(e4)]), this.addToRecentlyDeleted(e4, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i7) => i7.id !== e4), s5 && (this.sessionRequestQueue.state = x6.idle, this.client.events.emit("session_request_expire", { id: e4 }));
    }, this.deletePendingAuthRequest = async (e4, t3, s5 = false) => {
      await Promise.all([this.client.auth.requests.delete(e4, t3), s5 ? Promise.resolve() : this.client.core.expirer.del(e4)]);
    }, this.setExpiry = async (e4, t3) => {
      this.client.session.keys.includes(e4) && (this.client.core.expirer.set(e4, t3), await this.client.session.update(e4, { expiry: t3 }));
    }, this.setProposal = async (e4, t3) => {
      this.client.core.expirer.set(e4, ms(v5.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e4, t3);
    }, this.setAuthRequest = async (e4, t3) => {
      const { request: s5, pairingTopic: i7, transportType: r5 = F3.relay } = t3;
      this.client.core.expirer.set(e4, s5.expiryTimestamp), await this.client.auth.requests.set(e4, { authPayload: s5.authPayload, requester: s5.requester, expiryTimestamp: s5.expiryTimestamp, id: e4, pairingTopic: i7, verifyContext: s5.verifyContext, transportType: r5 });
    }, this.setPendingSessionRequest = async (e4) => {
      const { id: t3, topic: s5, params: i7, verifyContext: r5 } = e4, n6 = i7.request.expiryTimestamp || ms(v5.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(t3, n6), await this.client.pendingRequest.set(t3, { id: t3, topic: s5, params: i7, verifyContext: r5 });
    }, this.sendRequest = async (e4) => {
      const { topic: t3, method: s5, params: i7, expiry: r5, relayRpcId: n6, clientRpcId: a6, throwOnFailedPublish: c8, appLink: h7 } = e4, p5 = formatJsonRpcRequest(s5, i7, a6);
      let d5;
      const l6 = !!h7;
      try {
        const y8 = l6 ? xu : $i;
        d5 = await this.client.core.crypto.encode(t3, p5, { encoding: y8 });
      } catch (y8) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t3} failed`), y8;
      }
      let w7;
      if (at2.includes(s5)) {
        const y8 = _u(JSON.stringify(p5)), _6 = _u(d5);
        w7 = await this.client.core.verify.register({ id: _6, decryptedId: y8 });
      }
      const m4 = v5[s5].req;
      if (m4.attestation = w7, r5 && (m4.ttl = r5), n6 && (m4.id = n6), this.client.core.history.set(t3, p5), l6) {
        const y8 = Vu(h7, t3, d5);
        await global.Linking.openURL(y8, this.client.name);
      } else {
        const y8 = v5[s5].req;
        r5 && (y8.ttl = r5), n6 && (y8.id = n6), c8 ? (y8.internal = D4(I5({}, y8.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t3, d5, y8)) : this.client.core.relayer.publish(t3, d5, y8).catch((_6) => this.client.logger.error(_6));
      }
      return p5.id;
    }, this.sendResult = async (e4) => {
      const { id: t3, topic: s5, result: i7, throwOnFailedPublish: r5, encodeOpts: n6, appLink: a6 } = e4, c8 = formatJsonRpcResult(t3, i7);
      let h7;
      const p5 = a6 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const l6 = p5 ? xu : $i;
        h7 = await this.client.core.crypto.encode(s5, c8, D4(I5({}, n6 || {}), { encoding: l6 }));
      } catch (l6) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s5} failed`), l6;
      }
      let d5;
      try {
        d5 = await this.client.core.history.get(s5, t3);
      } catch (l6) {
        throw this.client.logger.error(`sendResult() -> history.get(${s5}, ${t3}) failed`), l6;
      }
      if (p5) {
        const l6 = Vu(a6, s5, h7);
        await global.Linking.openURL(l6, this.client.name);
      } else {
        const l6 = v5[d5.request.method].res;
        r5 ? (l6.internal = D4(I5({}, l6.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s5, h7, l6)) : this.client.core.relayer.publish(s5, h7, l6).catch((w7) => this.client.logger.error(w7));
      }
      await this.client.core.history.resolve(c8);
    }, this.sendError = async (e4) => {
      const { id: t3, topic: s5, error: i7, encodeOpts: r5, rpcOpts: n6, appLink: a6 } = e4, c8 = formatJsonRpcError(t3, i7);
      let h7;
      const p5 = a6 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const l6 = p5 ? xu : $i;
        h7 = await this.client.core.crypto.encode(s5, c8, D4(I5({}, r5 || {}), { encoding: l6 }));
      } catch (l6) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s5} failed`), l6;
      }
      let d5;
      try {
        d5 = await this.client.core.history.get(s5, t3);
      } catch (l6) {
        throw this.client.logger.error(`sendError() -> history.get(${s5}, ${t3}) failed`), l6;
      }
      if (p5) {
        const l6 = Vu(a6, s5, h7);
        await global.Linking.openURL(l6, this.client.name);
      } else {
        const l6 = n6 || v5[d5.request.method].res;
        this.client.core.relayer.publish(s5, h7, l6);
      }
      await this.client.core.history.resolve(c8);
    }, this.cleanup = async () => {
      const e4 = [], t3 = [];
      this.client.session.getAll().forEach((s5) => {
        let i7 = false;
        As(s5.expiry) && (i7 = true), this.client.core.crypto.keychain.has(s5.topic) || (i7 = true), i7 && e4.push(s5.topic);
      }), this.client.proposal.getAll().forEach((s5) => {
        As(s5.expiryTimestamp) && t3.push(s5.id);
      }), await Promise.all([...e4.map((s5) => this.deleteSession({ topic: s5 })), ...t3.map((s5) => this.deleteProposal(s5))]);
    }, this.onRelayEventRequest = async (e4) => {
      this.requestQueue.queue.push(e4), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === x6.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = x6.active;
        const e4 = this.requestQueue.queue.shift();
        if (e4) try {
          await this.processRequest(e4);
        } catch (t3) {
          this.client.logger.warn(t3);
        }
      }
      this.requestQueue.state = x6.idle;
    }, this.processRequest = async (e4) => {
      const { topic: t3, payload: s5, attestation: i7, transportType: r5, encryptedId: n6 } = e4, a6 = s5.method;
      if (!this.shouldIgnorePairingRequest({ topic: t3, requestMethod: a6 })) switch (a6) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: t3, payload: s5, attestation: i7, encryptedId: n6 });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(t3, s5);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(t3, s5);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(t3, s5);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(t3, s5);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(t3, s5);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: t3, payload: s5, attestation: i7, encryptedId: n6, transportType: r5 });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(t3, s5);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: t3, payload: s5, attestation: i7, encryptedId: n6, transportType: r5 });
        default:
          return this.client.logger.info(`Unsupported request method ${a6}`);
      }
    }, this.onRelayEventResponse = async (e4) => {
      const { topic: t3, payload: s5, transportType: i7 } = e4, r5 = (await this.client.core.history.get(t3, s5.id)).request.method;
      switch (r5) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(t3, s5, i7);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(t3, s5);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(t3, s5);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(t3, s5);
        case "wc_sessionPing":
          return this.onSessionPingResponse(t3, s5);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(t3, s5);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(t3, s5);
        default:
          return this.client.logger.info(`Unsupported response method ${r5}`);
      }
    }, this.onRelayEventUnknownPayload = (e4) => {
      const { topic: t3 } = e4, { message: s5 } = xe("MISSING_OR_INVALID", `Decoded payload on topic ${t3} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s5);
    }, this.shouldIgnorePairingRequest = (e4) => {
      const { topic: t3, requestMethod: s5 } = e4, i7 = this.expectedPairingMethodMap.get(t3);
      return !i7 || i7.includes(s5) ? false : !!(i7.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }, this.onSessionProposeRequest = async (e4) => {
      const { topic: t3, payload: s5, attestation: i7, encryptedId: r5 } = e4, { params: n6, id: a6 } = s5;
      try {
        const c8 = this.client.core.eventClient.getEvent({ topic: t3 });
        this.isValidConnect(I5({}, s5.params));
        const h7 = n6.expiryTimestamp || ms(v5.wc_sessionPropose.req.ttl), p5 = I5({ id: a6, pairingTopic: t3, expiryTimestamp: h7 }, n6);
        await this.setProposal(a6, p5);
        const d5 = await this.getVerifyContext({ attestationId: i7, hash: _u(JSON.stringify(s5)), encryptedId: r5, metadata: p5.proposer.metadata });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), c8 == null ? void 0 : c8.setError(M3.proposal_listener_not_found)), c8 == null ? void 0 : c8.addTrace(z6.emit_session_proposal), this.client.events.emit("session_proposal", { id: a6, params: p5, verifyContext: d5 });
      } catch (c8) {
        await this.sendError({ id: a6, topic: t3, error: c8, rpcOpts: v5.wc_sessionPropose.autoReject }), this.client.logger.error(c8);
      }
    }, this.onSessionProposeResponse = async (e4, t3, s5) => {
      const { id: i7 } = t3;
      if (isJsonRpcResult(t3)) {
        const { result: r5 } = t3;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: r5 });
        const n6 = this.client.proposal.get(i7);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n6 });
        const a6 = n6.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a6 });
        const c8 = r5.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: c8 });
        const h7 = await this.client.core.crypto.generateSharedKey(a6, c8);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: h7 });
        const p5 = await this.client.core.relayer.subscribe(h7, { transportType: s5 });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p5 }), await this.client.core.pairing.activate({ topic: e4 });
      } else if (isJsonRpcError(t3)) {
        await this.client.proposal.delete(i7, er("USER_DISCONNECTED"));
        const r5 = bs("session_connect");
        if (this.events.listenerCount(r5) === 0) throw new Error(`emitting ${r5} without any listeners, 954`);
        this.events.emit(bs("session_connect"), { error: t3.error });
      }
    }, this.onSessionSettleRequest = async (e4, t3) => {
      const { id: s5, params: i7 } = t3;
      try {
        this.isValidSessionSettleRequest(i7);
        const { relay: r5, controller: n6, expiry: a6, namespaces: c8, sessionProperties: h7, sessionConfig: p5 } = t3.params, d5 = D4(I5(I5({ topic: e4, relay: r5, expiry: a6, namespaces: c8, acknowledged: true, pairingTopic: "", requiredNamespaces: {}, optionalNamespaces: {}, controller: n6.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: n6.publicKey, metadata: n6.metadata } }, h7 && { sessionProperties: h7 }), p5 && { sessionConfig: p5 }), { transportType: F3.relay }), l6 = bs("session_connect");
        if (this.events.listenerCount(l6) === 0) throw new Error(`emitting ${l6} without any listeners 997`);
        this.events.emit(bs("session_connect"), { session: d5 }), await this.sendResult({ id: t3.id, topic: e4, result: true, throwOnFailedPublish: true });
      } catch (r5) {
        await this.sendError({ id: s5, topic: e4, error: r5 }), this.client.logger.error(r5);
      }
    }, this.onSessionSettleResponse = async (e4, t3) => {
      const { id: s5 } = t3;
      isJsonRpcResult(t3) ? (await this.client.session.update(e4, { acknowledged: true }), this.events.emit(bs("session_approve", s5), {})) : isJsonRpcError(t3) && (await this.client.session.delete(e4, er("USER_DISCONNECTED")), this.events.emit(bs("session_approve", s5), { error: t3.error }));
    }, this.onSessionUpdateRequest = async (e4, t3) => {
      const { params: s5, id: i7 } = t3;
      try {
        const r5 = `${e4}_session_update`, n6 = Nh.get(r5);
        if (n6 && this.isRequestOutOfSync(n6, i7)) {
          this.client.logger.info(`Discarding out of sync request - ${i7}`), this.sendError({ id: i7, topic: e4, error: er("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(I5({ topic: e4 }, s5));
        try {
          Nh.set(r5, i7), await this.client.session.update(e4, { namespaces: s5.namespaces }), await this.sendResult({ id: i7, topic: e4, result: true, throwOnFailedPublish: true });
        } catch (a6) {
          throw Nh.delete(r5), a6;
        }
        this.client.events.emit("session_update", { id: i7, topic: e4, params: s5 });
      } catch (r5) {
        await this.sendError({ id: i7, topic: e4, error: r5 }), this.client.logger.error(r5);
      }
    }, this.isRequestOutOfSync = (e4, t3) => parseInt(t3.toString().slice(0, -3)) <= parseInt(e4.toString().slice(0, -3)), this.onSessionUpdateResponse = (e4, t3) => {
      const { id: s5 } = t3, i7 = bs("session_update", s5);
      if (this.events.listenerCount(i7) === 0) throw new Error(`emitting ${i7} without any listeners`);
      isJsonRpcResult(t3) ? this.events.emit(bs("session_update", s5), {}) : isJsonRpcError(t3) && this.events.emit(bs("session_update", s5), { error: t3.error });
    }, this.onSessionExtendRequest = async (e4, t3) => {
      const { id: s5 } = t3;
      try {
        this.isValidExtend({ topic: e4 }), await this.setExpiry(e4, ms(z7)), await this.sendResult({ id: s5, topic: e4, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_extend", { id: s5, topic: e4 });
      } catch (i7) {
        await this.sendError({ id: s5, topic: e4, error: i7 }), this.client.logger.error(i7);
      }
    }, this.onSessionExtendResponse = (e4, t3) => {
      const { id: s5 } = t3, i7 = bs("session_extend", s5);
      if (this.events.listenerCount(i7) === 0) throw new Error(`emitting ${i7} without any listeners`);
      isJsonRpcResult(t3) ? this.events.emit(bs("session_extend", s5), {}) : isJsonRpcError(t3) && this.events.emit(bs("session_extend", s5), { error: t3.error });
    }, this.onSessionPingRequest = async (e4, t3) => {
      const { id: s5 } = t3;
      try {
        this.isValidPing({ topic: e4 }), await this.sendResult({ id: s5, topic: e4, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s5, topic: e4 });
      } catch (i7) {
        await this.sendError({ id: s5, topic: e4, error: i7 }), this.client.logger.error(i7);
      }
    }, this.onSessionPingResponse = (e4, t3) => {
      const { id: s5 } = t3, i7 = bs("session_ping", s5);
      if (this.events.listenerCount(i7) === 0) throw new Error(`emitting ${i7} without any listeners`);
      setTimeout(() => {
        isJsonRpcResult(t3) ? this.events.emit(bs("session_ping", s5), {}) : isJsonRpcError(t3) && this.events.emit(bs("session_ping", s5), { error: t3.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (e4, t3) => {
      const { id: s5 } = t3;
      try {
        this.isValidDisconnect({ topic: e4, reason: t3.params }), Promise.all([new Promise((i7) => {
          this.client.core.relayer.once(w6.publish, async () => {
            i7(await this.deleteSession({ topic: e4, id: s5 }));
          });
        }), this.sendResult({ id: s5, topic: e4, result: true, throwOnFailedPublish: true }), this.cleanupPendingSentRequestsForTopic({ topic: e4, error: er("USER_DISCONNECTED") })]).catch((i7) => this.client.logger.error(i7));
      } catch (i7) {
        this.client.logger.error(i7);
      }
    }, this.onSessionRequest = async (e4) => {
      var t3, s5, i7;
      const { topic: r5, payload: n6, attestation: a6, encryptedId: c8, transportType: h7 } = e4, { id: p5, params: d5 } = n6;
      try {
        await this.isValidRequest(I5({ topic: r5 }, d5));
        const l6 = this.client.session.get(r5), w7 = await this.getVerifyContext({ attestationId: a6, hash: _u(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", d5, p5))), encryptedId: c8, metadata: l6.peer.metadata, transportType: h7 }), m4 = { id: p5, topic: r5, params: d5, verifyContext: w7 };
        await this.setPendingSessionRequest(m4), h7 === F3.link_mode && (t3 = l6.peer.metadata.redirect) != null && t3.universal && this.client.core.addLinkModeSupportedApp((s5 = l6.peer.metadata.redirect) == null ? void 0 : s5.universal), (i7 = this.client.signConfig) != null && i7.disableRequestQueue ? this.emitSessionRequest(m4) : (this.addSessionRequestToSessionRequestQueue(m4), this.processSessionRequestQueue());
      } catch (l6) {
        await this.sendError({ id: p5, topic: r5, error: l6 }), this.client.logger.error(l6);
      }
    }, this.onSessionRequestResponse = (e4, t3) => {
      const { id: s5 } = t3, i7 = bs("session_request", s5);
      if (this.events.listenerCount(i7) === 0) throw new Error(`emitting ${i7} without any listeners`);
      isJsonRpcResult(t3) ? this.events.emit(bs("session_request", s5), { result: t3.result }) : isJsonRpcError(t3) && this.events.emit(bs("session_request", s5), { error: t3.error });
    }, this.onSessionEventRequest = async (e4, t3) => {
      const { id: s5, params: i7 } = t3;
      try {
        const r5 = `${e4}_session_event_${i7.event.name}`, n6 = Nh.get(r5);
        if (n6 && this.isRequestOutOfSync(n6, s5)) {
          this.client.logger.info(`Discarding out of sync request - ${s5}`);
          return;
        }
        this.isValidEmit(I5({ topic: e4 }, i7)), this.client.events.emit("session_event", { id: s5, topic: e4, params: i7 }), Nh.set(r5, s5);
      } catch (r5) {
        await this.sendError({ id: s5, topic: e4, error: r5 }), this.client.logger.error(r5);
      }
    }, this.onSessionAuthenticateResponse = (e4, t3) => {
      const { id: s5 } = t3;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: e4, payload: t3 }), isJsonRpcResult(t3) ? this.events.emit(bs("session_request", s5), { result: t3.result }) : isJsonRpcError(t3) && this.events.emit(bs("session_request", s5), { error: t3.error });
    }, this.onSessionAuthenticateRequest = async (e4) => {
      var t3;
      const { topic: s5, payload: i7, attestation: r5, encryptedId: n6, transportType: a6 } = e4;
      try {
        const { requester: c8, authPayload: h7, expiryTimestamp: p5 } = i7.params, d5 = await this.getVerifyContext({ attestationId: r5, hash: _u(JSON.stringify(i7)), encryptedId: n6, metadata: c8.metadata, transportType: a6 }), l6 = { requester: c8, pairingTopic: s5, id: i7.id, authPayload: h7, verifyContext: d5, expiryTimestamp: p5 };
        await this.setAuthRequest(i7.id, { request: l6, pairingTopic: s5, transportType: a6 }), a6 === F3.link_mode && (t3 = c8.metadata.redirect) != null && t3.universal && this.client.core.addLinkModeSupportedApp(c8.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s5, params: i7.params, id: i7.id, verifyContext: d5 });
      } catch (c8) {
        this.client.logger.error(c8);
        const h7 = i7.params.requester.publicKey, p5 = await this.client.core.crypto.generateKeyPair(), d5 = this.getAppLinkIfEnabled(i7.params.requester.metadata, a6), l6 = { type: pr, receiverPublicKey: h7, senderPublicKey: p5 };
        await this.sendError({ id: i7.id, topic: s5, error: c8, encodeOpts: l6, rpcOpts: v5.wc_sessionAuthenticate.autoReject, appLink: d5 });
      }
    }, this.addSessionRequestToSessionRequestQueue = (e4) => {
      this.sessionRequestQueue.queue.push(e4);
    }, this.cleanupAfterResponse = (e4) => {
      this.deletePendingSessionRequest(e4.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = x6.idle, this.processSessionRequestQueue();
      }, (0, import_time5.toMiliseconds)(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: e4, error: t3 }) => {
      const s5 = this.client.core.history.pending;
      s5.length > 0 && s5.filter((i7) => i7.topic === e4 && i7.request.method === "wc_sessionRequest").forEach((i7) => {
        const r5 = i7.request.id, n6 = bs("session_request", r5);
        if (this.events.listenerCount(n6) === 0) throw new Error(`emitting ${n6} without any listeners`);
        this.events.emit(bs("session_request", i7.request.id), { error: t3 });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === x6.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e4 = this.sessionRequestQueue.queue[0];
      if (!e4) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = x6.active, this.emitSessionRequest(e4);
      } catch (t3) {
        this.client.logger.error(t3);
      }
    }, this.emitSessionRequest = (e4) => {
      this.client.events.emit("session_request", e4);
    }, this.onPairingCreated = (e4) => {
      if (e4.methods && this.expectedPairingMethodMap.set(e4.topic, e4.methods), e4.active) return;
      const t3 = this.client.proposal.getAll().find((s5) => s5.pairingTopic === e4.topic);
      t3 && this.onSessionProposeRequest({ topic: e4.topic, payload: formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: t3.requiredNamespaces, optionalNamespaces: t3.optionalNamespaces, relays: t3.relays, proposer: t3.proposer, sessionProperties: t3.sessionProperties }, t3.id) });
    }, this.isValidConnect = async (e4) => {
      if (!ph(e4)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e4)}`);
        throw new Error(a6);
      }
      const { pairingTopic: t3, requiredNamespaces: s5, optionalNamespaces: i7, sessionProperties: r5, relays: n6 } = e4;
      if (Pe(t3) || await this.isValidPairingTopic(t3), !lh(n6, true)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", `connect() relays: ${n6}`);
        throw new Error(a6);
      }
      !Pe(s5) && Xr(s5) !== 0 && this.validateNamespaces(s5, "requiredNamespaces"), !Pe(i7) && Xr(i7) !== 0 && this.validateNamespaces(i7, "optionalNamespaces"), Pe(r5) || this.validateSessionProps(r5, "sessionProperties");
    }, this.validateNamespaces = (e4, t3) => {
      const s5 = ch(e4, "connect()", t3);
      if (s5) throw new Error(s5.message);
    }, this.isValidApprove = async (e4) => {
      if (!ph(e4)) throw new Error(xe("MISSING_OR_INVALID", `approve() params: ${e4}`).message);
      const { id: t3, namespaces: s5, relayProtocol: i7, sessionProperties: r5 } = e4;
      this.checkRecentlyDeleted(t3), await this.isValidProposalId(t3);
      const n6 = this.client.proposal.get(t3), a6 = _o(s5, "approve()");
      if (a6) throw new Error(a6.message);
      const c8 = Co(n6.requiredNamespaces, s5, "approve()");
      if (c8) throw new Error(c8.message);
      if (!Yt(i7, true)) {
        const { message: h7 } = xe("MISSING_OR_INVALID", `approve() relayProtocol: ${i7}`);
        throw new Error(h7);
      }
      Pe(r5) || this.validateSessionProps(r5, "sessionProperties");
    }, this.isValidReject = async (e4) => {
      if (!ph(e4)) {
        const { message: i7 } = xe("MISSING_OR_INVALID", `reject() params: ${e4}`);
        throw new Error(i7);
      }
      const { id: t3, reason: s5 } = e4;
      if (this.checkRecentlyDeleted(t3), await this.isValidProposalId(t3), !vh(s5)) {
        const { message: i7 } = xe("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s5)}`);
        throw new Error(i7);
      }
    }, this.isValidSessionSettleRequest = (e4) => {
      if (!ph(e4)) {
        const { message: c8 } = xe("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e4}`);
        throw new Error(c8);
      }
      const { relay: t3, controller: s5, namespaces: i7, expiry: r5 } = e4;
      if (!Bo(t3)) {
        const { message: c8 } = xe("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c8);
      }
      const n6 = hh(s5, "onSessionSettleRequest()");
      if (n6) throw new Error(n6.message);
      const a6 = _o(i7, "onSessionSettleRequest()");
      if (a6) throw new Error(a6.message);
      if (As(r5)) {
        const { message: c8 } = xe("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c8);
      }
    }, this.isValidUpdate = async (e4) => {
      if (!ph(e4)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", `update() params: ${e4}`);
        throw new Error(a6);
      }
      const { topic: t3, namespaces: s5 } = e4;
      this.checkRecentlyDeleted(t3), await this.isValidSessionTopic(t3);
      const i7 = this.client.session.get(t3), r5 = _o(s5, "update()");
      if (r5) throw new Error(r5.message);
      const n6 = Co(i7.requiredNamespaces, s5, "update()");
      if (n6) throw new Error(n6.message);
    }, this.isValidExtend = async (e4) => {
      if (!ph(e4)) {
        const { message: s5 } = xe("MISSING_OR_INVALID", `extend() params: ${e4}`);
        throw new Error(s5);
      }
      const { topic: t3 } = e4;
      this.checkRecentlyDeleted(t3), await this.isValidSessionTopic(t3);
    }, this.isValidRequest = async (e4) => {
      if (!ph(e4)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", `request() params: ${e4}`);
        throw new Error(a6);
      }
      const { topic: t3, request: s5, chainId: i7, expiry: r5 } = e4;
      this.checkRecentlyDeleted(t3), await this.isValidSessionTopic(t3);
      const { namespaces: n6 } = this.client.session.get(t3);
      if (!bh(n6, i7)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", `request() chainId: ${i7}`);
        throw new Error(a6);
      }
      if (!gh(s5)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", `request() ${JSON.stringify(s5)}`);
        throw new Error(a6);
      }
      if (!yh(n6, i7, s5.method)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", `request() method: ${s5.method}`);
        throw new Error(a6);
      }
      if (r5 && !Eh(r5, me3)) {
        const { message: a6 } = xe("MISSING_OR_INVALID", `request() expiry: ${r5}. Expiry must be a number (in seconds) between ${me3.min} and ${me3.max}`);
        throw new Error(a6);
      }
    }, this.isValidRespond = async (e4) => {
      var t3;
      if (!ph(e4)) {
        const { message: r5 } = xe("MISSING_OR_INVALID", `respond() params: ${e4}`);
        throw new Error(r5);
      }
      const { topic: s5, response: i7 } = e4;
      try {
        await this.isValidSessionTopic(s5);
      } catch (r5) {
        throw (t3 = e4 == null ? void 0 : e4.response) != null && t3.id && this.cleanupAfterResponse(e4), r5;
      }
      if (!mh(i7)) {
        const { message: r5 } = xe("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i7)}`);
        throw new Error(r5);
      }
    }, this.isValidPing = async (e4) => {
      if (!ph(e4)) {
        const { message: s5 } = xe("MISSING_OR_INVALID", `ping() params: ${e4}`);
        throw new Error(s5);
      }
      const { topic: t3 } = e4;
      await this.isValidSessionOrPairingTopic(t3);
    }, this.isValidEmit = async (e4) => {
      if (!ph(e4)) {
        const { message: n6 } = xe("MISSING_OR_INVALID", `emit() params: ${e4}`);
        throw new Error(n6);
      }
      const { topic: t3, event: s5, chainId: i7 } = e4;
      await this.isValidSessionTopic(t3);
      const { namespaces: r5 } = this.client.session.get(t3);
      if (!bh(r5, i7)) {
        const { message: n6 } = xe("MISSING_OR_INVALID", `emit() chainId: ${i7}`);
        throw new Error(n6);
      }
      if (!Ah(s5)) {
        const { message: n6 } = xe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s5)}`);
        throw new Error(n6);
      }
      if (!wh(r5, i7, s5.name)) {
        const { message: n6 } = xe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s5)}`);
        throw new Error(n6);
      }
    }, this.isValidDisconnect = async (e4) => {
      if (!ph(e4)) {
        const { message: s5 } = xe("MISSING_OR_INVALID", `disconnect() params: ${e4}`);
        throw new Error(s5);
      }
      const { topic: t3 } = e4;
      await this.isValidSessionOrPairingTopic(t3);
    }, this.isValidAuthenticate = (e4) => {
      const { chains: t3, uri: s5, domain: i7, nonce: r5 } = e4;
      if (!Array.isArray(t3) || t3.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!Yt(s5, false)) throw new Error("uri is required parameter");
      if (!Yt(i7, false)) throw new Error("domain is required parameter");
      if (!Yt(r5, false)) throw new Error("nonce is required parameter");
      if ([...new Set(t3.map((a6) => mn(a6).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: n6 } = mn(t3[0]);
      if (n6 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }, this.getVerifyContext = async (e4) => {
      const { attestationId: t3, hash: s5, encryptedId: i7, metadata: r5, transportType: n6 } = e4, a6 = { verified: { verifyUrl: r5.verifyUrl || Q3, validation: "UNKNOWN", origin: r5.url || "" } };
      try {
        if (n6 === F3.link_mode) {
          const h7 = this.getAppLinkIfEnabled(r5, n6);
          return a6.verified.validation = h7 && new URL(h7).origin === new URL(r5.url).origin ? "VALID" : "INVALID", a6;
        }
        const c8 = await this.client.core.verify.resolve({ attestationId: t3, hash: s5, encryptedId: i7, verifyUrl: r5.verifyUrl });
        c8 && (a6.verified.origin = c8.origin, a6.verified.isScam = c8.isScam, a6.verified.validation = c8.origin === new URL(r5.url).origin ? "VALID" : "INVALID");
      } catch (c8) {
        this.client.logger.warn(c8);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(a6)}`), a6;
    }, this.validateSessionProps = (e4, t3) => {
      Object.values(e4).forEach((s5) => {
        if (!Yt(s5, false)) {
          const { message: i7 } = xe("MISSING_OR_INVALID", `${t3} must be in Record<string, string> format. Received: ${JSON.stringify(s5)}`);
          throw new Error(i7);
        }
      });
    }, this.getPendingAuthRequest = (e4) => {
      const t3 = this.client.auth.requests.get(e4);
      return typeof t3 == "object" ? t3 : void 0;
    }, this.addToRecentlyDeleted = (e4, t3) => {
      if (this.recentlyDeletedMap.set(e4, t3), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s5 = 0;
        const i7 = this.recentlyDeletedLimit / 2;
        for (const r5 of this.recentlyDeletedMap.keys()) {
          if (s5++ >= i7) break;
          this.recentlyDeletedMap.delete(r5);
        }
      }
    }, this.checkRecentlyDeleted = (e4) => {
      const t3 = this.recentlyDeletedMap.get(e4);
      if (t3) {
        const { message: s5 } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${t3}: ${e4}`);
        throw new Error(s5);
      }
    }, this.isLinkModeEnabled = (e4, t3) => {
      var s5, i7, r5, n6, a6, c8, h7, p5, d5;
      return !e4 || t3 !== F3.link_mode ? false : ((i7 = (s5 = this.client.metadata) == null ? void 0 : s5.redirect) == null ? void 0 : i7.linkMode) === true && ((n6 = (r5 = this.client.metadata) == null ? void 0 : r5.redirect) == null ? void 0 : n6.universal) !== void 0 && ((c8 = (a6 = this.client.metadata) == null ? void 0 : a6.redirect) == null ? void 0 : c8.universal) !== "" && ((h7 = e4 == null ? void 0 : e4.redirect) == null ? void 0 : h7.universal) !== void 0 && ((p5 = e4 == null ? void 0 : e4.redirect) == null ? void 0 : p5.universal) !== "" && ((d5 = e4 == null ? void 0 : e4.redirect) == null ? void 0 : d5.linkMode) === true && this.client.core.linkModeSupportedApps.includes(e4.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }, this.getAppLinkIfEnabled = (e4, t3) => {
      var s5;
      return this.isLinkModeEnabled(e4, t3) ? (s5 = e4 == null ? void 0 : e4.redirect) == null ? void 0 : s5.universal : void 0;
    }, this.handleLinkModeMessage = ({ url: e4 }) => {
      if (!e4 || !e4.includes("wc_ev") || !e4.includes("topic")) return;
      const t3 = xs(e4, "topic") || "", s5 = decodeURIComponent(xs(e4, "wc_ev") || ""), i7 = this.client.session.keys.includes(t3);
      i7 && this.client.session.update(t3, { transportType: F3.link_mode }), this.client.core.dispatchEnvelope({ topic: t3, message: s5, sessionExists: i7 });
    }, this.registerLinkModeListeners = async () => {
      var e4;
      if (Es() || rr() && (e4 = this.client.metadata.redirect) != null && e4.linkMode) {
        const t3 = global == null ? void 0 : global.Linking;
        if (typeof t3 < "u") {
          t3.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s5 = await t3.getInitialURL();
          s5 && setTimeout(() => {
            this.handleLinkModeMessage({ url: s5 });
          }, 50);
        }
      }
    };
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: o6 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(o6);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(w6.message, (o6) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(o6) : this.onRelayMessage(o6);
    });
  }
  async onRelayMessage(o6) {
    const { topic: e4, message: t3, attestation: s5, transportType: i7 } = o6, { publicKey: r5 } = this.client.auth.authKeys.keys.includes(ae3) ? this.client.auth.authKeys.get(ae3) : { responseTopic: void 0, publicKey: void 0 }, n6 = await this.client.core.crypto.decode(e4, t3, { receiverPublicKey: r5, encoding: i7 === F3.link_mode ? xu : $i });
    try {
      isJsonRpcRequest(n6) ? (this.client.core.history.set(e4, n6), this.onRelayEventRequest({ topic: e4, payload: n6, attestation: s5, transportType: i7, encryptedId: _u(t3) })) : isJsonRpcResponse(n6) ? (await this.client.core.history.resolve(n6), await this.onRelayEventResponse({ topic: e4, payload: n6, transportType: i7 }), this.client.core.history.delete(e4, n6.id)) : this.onRelayEventUnknownPayload({ topic: e4, payload: n6, transportType: i7 });
    } catch (a6) {
      this.client.logger.error(a6);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(R2.expired, async (o6) => {
      const { topic: e4, id: t3 } = gs(o6.target);
      if (t3 && this.client.pendingRequest.keys.includes(t3)) return await this.deletePendingSessionRequest(t3, xe("EXPIRED"), true);
      if (t3 && this.client.auth.requests.keys.includes(t3)) return await this.deletePendingAuthRequest(t3, xe("EXPIRED"), true);
      e4 ? this.client.session.keys.includes(e4) && (await this.deleteSession({ topic: e4, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: e4 })) : t3 && (await this.deleteProposal(t3, true), this.client.events.emit("proposal_expire", { id: t3 }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Z2.create, (o6) => this.onPairingCreated(o6)), this.client.core.pairing.events.on(Z2.delete, (o6) => {
      this.addToRecentlyDeleted(o6.topic, "pairing");
    });
  }
  isValidPairingTopic(o6) {
    if (!Yt(o6, false)) {
      const { message: e4 } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${o6}`);
      throw new Error(e4);
    }
    if (!this.client.core.pairing.pairings.keys.includes(o6)) {
      const { message: e4 } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${o6}`);
      throw new Error(e4);
    }
    if (As(this.client.core.pairing.pairings.get(o6).expiry)) {
      const { message: e4 } = xe("EXPIRED", `pairing topic: ${o6}`);
      throw new Error(e4);
    }
  }
  async isValidSessionTopic(o6) {
    if (!Yt(o6, false)) {
      const { message: e4 } = xe("MISSING_OR_INVALID", `session topic should be a string: ${o6}`);
      throw new Error(e4);
    }
    if (this.checkRecentlyDeleted(o6), !this.client.session.keys.includes(o6)) {
      const { message: e4 } = xe("NO_MATCHING_KEY", `session topic doesn't exist: ${o6}`);
      throw new Error(e4);
    }
    if (As(this.client.session.get(o6).expiry)) {
      await this.deleteSession({ topic: o6 });
      const { message: e4 } = xe("EXPIRED", `session topic: ${o6}`);
      throw new Error(e4);
    }
    if (!this.client.core.crypto.keychain.has(o6)) {
      const { message: e4 } = xe("MISSING_OR_INVALID", `session topic does not exist in keychain: ${o6}`);
      throw await this.deleteSession({ topic: o6 }), new Error(e4);
    }
  }
  async isValidSessionOrPairingTopic(o6) {
    if (this.checkRecentlyDeleted(o6), this.client.session.keys.includes(o6)) await this.isValidSessionTopic(o6);
    else if (this.client.core.pairing.pairings.keys.includes(o6)) this.isValidPairingTopic(o6);
    else if (Yt(o6, false)) {
      const { message: e4 } = xe("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${o6}`);
      throw new Error(e4);
    } else {
      const { message: e4 } = xe("MISSING_OR_INVALID", `session or pairing topic should be a string: ${o6}`);
      throw new Error(e4);
    }
  }
  async isValidProposalId(o6) {
    if (!dh(o6)) {
      const { message: e4 } = xe("MISSING_OR_INVALID", `proposal id should be a number: ${o6}`);
      throw new Error(e4);
    }
    if (!this.client.proposal.keys.includes(o6)) {
      const { message: e4 } = xe("NO_MATCHING_KEY", `proposal id doesn't exist: ${o6}`);
      throw new Error(e4);
    }
    if (As(this.client.proposal.get(o6).expiryTimestamp)) {
      await this.deleteProposal(o6);
      const { message: e4 } = xe("EXPIRED", `proposal id: ${o6}`);
      throw new Error(e4);
    }
  }
};
var Ss3 = class extends oi {
  constructor(o6, e4) {
    super(o6, e4, st2, ye3), this.core = o6, this.logger = e4;
  }
};
var yt2 = class extends oi {
  constructor(o6, e4) {
    super(o6, e4, rt2, ye3), this.core = o6, this.logger = e4;
  }
};
var Is3 = class extends oi {
  constructor(o6, e4) {
    super(o6, e4, ot2, ye3, (t3) => t3.id), this.core = o6, this.logger = e4;
  }
};
var fs2 = class extends oi {
  constructor(o6, e4) {
    super(o6, e4, pt2, oe3, () => ae3), this.core = o6, this.logger = e4;
  }
};
var vs3 = class extends oi {
  constructor(o6, e4) {
    super(o6, e4, ht2, oe3), this.core = o6, this.logger = e4;
  }
};
var qs3 = class extends oi {
  constructor(o6, e4) {
    super(o6, e4, dt2, oe3, (t3) => t3.id), this.core = o6, this.logger = e4;
  }
};
var Ts3 = class {
  constructor(o6, e4) {
    this.core = o6, this.logger = e4, this.authKeys = new fs2(this.core, this.logger), this.pairingTopics = new vs3(this.core, this.logger), this.requests = new qs3(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
};
var _e3 = class __e extends S4 {
  constructor(o6) {
    super(o6), this.protocol = be3, this.version = Ce3, this.name = we3.name, this.events = new import_events10.EventEmitter(), this.on = (t3, s5) => this.events.on(t3, s5), this.once = (t3, s5) => this.events.once(t3, s5), this.off = (t3, s5) => this.events.off(t3, s5), this.removeListener = (t3, s5) => this.events.removeListener(t3, s5), this.removeAllListeners = (t3) => this.events.removeAllListeners(t3), this.connect = async (t3) => {
      try {
        return await this.engine.connect(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.pair = async (t3) => {
      try {
        return await this.engine.pair(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.approve = async (t3) => {
      try {
        return await this.engine.approve(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.reject = async (t3) => {
      try {
        return await this.engine.reject(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.update = async (t3) => {
      try {
        return await this.engine.update(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.extend = async (t3) => {
      try {
        return await this.engine.extend(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.request = async (t3) => {
      try {
        return await this.engine.request(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.respond = async (t3) => {
      try {
        return await this.engine.respond(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.ping = async (t3) => {
      try {
        return await this.engine.ping(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.emit = async (t3) => {
      try {
        return await this.engine.emit(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.disconnect = async (t3) => {
      try {
        return await this.engine.disconnect(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.find = (t3) => {
      try {
        return this.engine.find(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (t3) {
        throw this.logger.error(t3.message), t3;
      }
    }, this.authenticate = async (t3, s5) => {
      try {
        return await this.engine.authenticate(t3, s5);
      } catch (i7) {
        throw this.logger.error(i7.message), i7;
      }
    }, this.formatAuthMessage = (t3) => {
      try {
        return this.engine.formatAuthMessage(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.approveSessionAuthenticate = async (t3) => {
      try {
        return await this.engine.approveSessionAuthenticate(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.rejectSessionAuthenticate = async (t3) => {
      try {
        return await this.engine.rejectSessionAuthenticate(t3);
      } catch (s5) {
        throw this.logger.error(s5.message), s5;
      }
    }, this.name = (o6 == null ? void 0 : o6.name) || we3.name, this.metadata = (o6 == null ? void 0 : o6.metadata) || es(), this.signConfig = o6 == null ? void 0 : o6.signConfig;
    const e4 = typeof (o6 == null ? void 0 : o6.logger) < "u" && typeof (o6 == null ? void 0 : o6.logger) != "string" ? o6.logger : (0, import_pino2.default)(k4({ level: (o6 == null ? void 0 : o6.logger) || we3.logger }));
    this.core = (o6 == null ? void 0 : o6.core) || new On2(o6), this.logger = E5(e4, this.name), this.session = new yt2(this.core, this.logger), this.proposal = new Ss3(this.core, this.logger), this.pendingRequest = new Is3(this.core, this.logger), this.engine = new Rs3(this), this.auth = new Ts3(this.core, this.logger);
  }
  static async init(o6) {
    const e4 = new __e(o6);
    return await e4.initialize(), e4;
  }
  get context() {
    return y4(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), this.engine.processRelayMessageCache();
    } catch (o6) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(o6.message), o6;
    }
  }
};

// node_modules/@jnwng/walletconnect-solana/lib/esm/adapter.js
var import_bs58 = __toESM(require_bs58(), 1);

// node_modules/@jnwng/walletconnect-solana/lib/esm/errors.js
var ClientNotInitializedError = class _ClientNotInitializedError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, _ClientNotInitializedError.prototype);
  }
};
var QRCodeModalError = class _QRCodeModalError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, _QRCodeModalError.prototype);
  }
};

// node_modules/@jnwng/walletconnect-solana/lib/esm/adapter.js
var WalletConnectChainID;
(function(WalletConnectChainID2) {
  WalletConnectChainID2["Mainnet"] = "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ";
  WalletConnectChainID2["Devnet"] = "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K";
})(WalletConnectChainID || (WalletConnectChainID = {}));
var WalletConnectRPCMethods;
(function(WalletConnectRPCMethods2) {
  WalletConnectRPCMethods2["signTransaction"] = "solana_signTransaction";
  WalletConnectRPCMethods2["signMessage"] = "solana_signMessage";
})(WalletConnectRPCMethods || (WalletConnectRPCMethods = {}));
var getConnectParams = (chainId) => ({
  requiredNamespaces: {
    solana: {
      chains: [chainId],
      methods: [WalletConnectRPCMethods.signTransaction, WalletConnectRPCMethods.signMessage],
      events: []
    }
  }
});
var isVersionedTransaction = (transaction) => "version" in transaction;
var WalletConnectWallet = class {
  constructor(config) {
    this._options = config.options;
    this._network = config.network;
  }
  async connect() {
    const client = this._client ?? await _e3.init(this._options);
    const sessions = client.find(getConnectParams(this._network)).filter((s5) => s5.acknowledged);
    if (sessions.length) {
      this._session = sessions[sessions.length - 1];
      this._client = client;
      return {
        publicKey: this.publicKey
      };
    } else {
      const { uri, approval } = await client.connect(getConnectParams(this._network));
      return new Promise((resolve, reject) => {
        if (uri) {
          import_qrcode_modal.default.open(uri, () => {
            reject(new QRCodeModalError());
          });
        }
        approval().then((session) => {
          this._session = session;
          this._client = client;
          resolve({ publicKey: this.publicKey });
        }).catch(reject).finally(() => {
          import_qrcode_modal.default.close();
        });
      });
    }
  }
  async disconnect() {
    if (this._client && this._session) {
      await this._client.disconnect({
        topic: this._session.topic,
        reason: er("USER_DISCONNECTED")
      });
      this._session = void 0;
    } else {
      throw new ClientNotInitializedError();
    }
  }
  get client() {
    if (this._client) {
      return Object.assign({}, this._client, { off: this._client.removeListener });
    } else {
      throw new ClientNotInitializedError();
    }
  }
  get publicKey() {
    if (this._client && this._session) {
      const { address } = gi(this._session.namespaces.solana.accounts[0]);
      return new PublicKey(address);
    } else {
      throw new ClientNotInitializedError();
    }
  }
  async signTransaction(transaction) {
    if (this._client && this._session) {
      let rawTransaction;
      let legacyTransaction;
      if (isVersionedTransaction(transaction)) {
        rawTransaction = Buffer.from(transaction.serialize()).toString("base64");
        if (transaction.version === "legacy") {
          legacyTransaction = Transaction.from(transaction.serialize());
        }
      } else {
        rawTransaction = transaction.serialize({
          requireAllSignatures: false,
          verifySignatures: false
        }).toString("base64");
        legacyTransaction = transaction;
      }
      const { signature } = await this._client.request({
        chainId: this._network,
        topic: this._session.topic,
        request: {
          method: WalletConnectRPCMethods.signTransaction,
          params: {
            // Passing ...legacyTransaction is deprecated.
            // All new clients should rely on the `transaction` parameter.
            // The future versions will stop passing ...legacyTransaction.
            ...legacyTransaction,
            // New base64-encoded serialized transaction request parameter
            transaction: rawTransaction
          }
        }
      });
      transaction.addSignature(this.publicKey, Buffer.from(import_bs58.default.decode(signature)));
      return transaction;
    } else {
      throw new ClientNotInitializedError();
    }
  }
  async signMessage(message) {
    if (this._client && this._session) {
      const { signature } = await this._client.request({
        // The network does not change the output of message signing, but this is a required parameter for SignClient
        chainId: this._network,
        topic: this._session.topic,
        request: {
          method: WalletConnectRPCMethods.signMessage,
          params: { pubkey: this.publicKey.toString(), message: import_bs58.default.encode(message) }
        }
      });
      return import_bs58.default.decode(signature);
    } else {
      throw new ClientNotInitializedError();
    }
  }
};
export {
  ClientNotInitializedError,
  QRCodeModalError,
  WalletConnectChainID,
  _e3 as WalletConnectClient,
  WalletConnectRPCMethods,
  WalletConnectWallet
};
/*! Bundled license information:

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
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
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
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
  ***************************************************************************** *)

@walletconnect/utils/dist/index.es.js:
  (**
  * [js-sha3]{@link https://github.com/emn178/js-sha3}
  *
  * @version 0.8.0
  * @author Chen, Yi-Cyuan [emn178@gmail.com]
  * @copyright Chen, Yi-Cyuan 2015-2018
  * @license MIT
  *)
*/
//# sourceMappingURL=esm-QIYUI4OV.js.map
