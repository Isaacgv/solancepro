import {
  require_semver
} from "./chunk-MAKA3KFA.js";
import {
  DisconnectedDevice,
  DisconnectedDeviceDuringOperation,
  TransportError,
  TransportOpenUserCancelled,
  Transport_default,
  init_lib_es,
  lib_es_exports
} from "./chunk-3LHYZKWB.js";
import "./chunk-OFLUJM4P.js";
import {
  __commonJS,
  __toCommonJS,
  __toESM
} from "./chunk-256EKJAK.js";

// node_modules/@ledgerhq/devices/lib/hid-framing.js
var require_hid_framing = __commonJS({
  "node_modules/@ledgerhq/devices/lib/hid-framing.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var errors_1 = (init_lib_es(), __toCommonJS(lib_es_exports));
    var Tag = 5;
    function asUInt16BE(value) {
      var b = Buffer.alloc(2);
      b.writeUInt16BE(value, 0);
      return b;
    }
    var initialAcc = {
      data: Buffer.alloc(0),
      dataLength: 0,
      sequence: 0
    };
    var createHIDframing = function(channel, packetSize) {
      return {
        makeBlocks: function(apdu) {
          var data = Buffer.concat([asUInt16BE(apdu.length), apdu]);
          var blockSize = packetSize - 5;
          var nbBlocks = Math.ceil(data.length / blockSize);
          data = Buffer.concat([
            data,
            Buffer.alloc(nbBlocks * blockSize - data.length + 1).fill(0)
          ]);
          var blocks = [];
          for (var i = 0; i < nbBlocks; i++) {
            var head = Buffer.alloc(5);
            head.writeUInt16BE(channel, 0);
            head.writeUInt8(Tag, 2);
            head.writeUInt16BE(i, 3);
            var chunk = data.slice(i * blockSize, (i + 1) * blockSize);
            blocks.push(Buffer.concat([head, chunk]));
          }
          return blocks;
        },
        reduceResponse: function(acc, chunk) {
          var _a2 = acc || initialAcc, data = _a2.data, dataLength = _a2.dataLength, sequence = _a2.sequence;
          if (chunk.readUInt16BE(0) !== channel) {
            throw new errors_1.TransportError("Invalid channel", "InvalidChannel");
          }
          if (chunk.readUInt8(2) !== Tag) {
            throw new errors_1.TransportError("Invalid tag", "InvalidTag");
          }
          if (chunk.readUInt16BE(3) !== sequence) {
            throw new errors_1.TransportError("Invalid sequence", "InvalidSequence");
          }
          if (!acc) {
            dataLength = chunk.readUInt16BE(5);
          }
          sequence++;
          var chunkData = chunk.slice(acc ? 5 : 7);
          data = Buffer.concat([data, chunkData]);
          if (data.length > dataLength) {
            data = data.slice(0, dataLength);
          }
          return {
            data,
            dataLength,
            sequence
          };
        },
        getReducedResult: function(acc) {
          if (acc && acc.dataLength === acc.data.length) {
            return acc.data;
          }
        }
      };
    };
    exports["default"] = createHIDframing;
  }
});

// node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js
var import_hid_framing = __toESM(require_hid_framing());

// node_modules/@ledgerhq/devices/lib-es/index.js
var import_semver = __toESM(require_semver());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var _a;
var DeviceModelId;
(function(DeviceModelId2) {
  DeviceModelId2["blue"] = "blue";
  DeviceModelId2["nanoS"] = "nanoS";
  DeviceModelId2["nanoSP"] = "nanoSP";
  DeviceModelId2["nanoX"] = "nanoX";
  DeviceModelId2["nanoFTS"] = "nanoFTS";
})(DeviceModelId || (DeviceModelId = {}));
var devices = (_a = {}, _a[DeviceModelId.blue] = {
  id: DeviceModelId.blue,
  productName: "Ledger Blue",
  productIdMM: 0,
  legacyUsbProductId: 0,
  usbOnly: true,
  memorySize: 480 * 1024,
  masks: [822083584, 822149120],
  getBlockSize: function(_firwareVersion) {
    return 4 * 1024;
  }
}, _a[DeviceModelId.nanoS] = {
  id: DeviceModelId.nanoS,
  productName: "Ledger Nano S",
  productIdMM: 16,
  legacyUsbProductId: 1,
  usbOnly: true,
  memorySize: 320 * 1024,
  masks: [823132160],
  getBlockSize: function(firmwareVersion) {
    var _a2;
    return import_semver.default.lt((_a2 = import_semver.default.coerce(firmwareVersion)) !== null && _a2 !== void 0 ? _a2 : "", "2.0.0") ? 4 * 1024 : 2 * 1024;
  }
}, _a[DeviceModelId.nanoSP] = {
  id: DeviceModelId.nanoSP,
  productName: "Ledger Nano S Plus",
  productIdMM: 80,
  legacyUsbProductId: 5,
  usbOnly: true,
  memorySize: 1536 * 1024,
  masks: [856686592],
  getBlockSize: function(_firmwareVersion) {
    return 32;
  }
}, _a[DeviceModelId.nanoX] = {
  id: DeviceModelId.nanoX,
  productName: "Ledger Nano X",
  productIdMM: 64,
  legacyUsbProductId: 4,
  usbOnly: false,
  memorySize: 2 * 1024 * 1024,
  masks: [855638016],
  getBlockSize: function(_firwareVersion) {
    return 4 * 1024;
  },
  bluetoothSpec: [
    {
      serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
      notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
      writeUuid: "13d63400-2c97-0004-0002-4c6564676572",
      writeCmdUuid: "13d63400-2c97-0004-0003-4c6564676572"
    }
  ]
}, _a[DeviceModelId.nanoFTS] = {
  id: DeviceModelId.nanoFTS,
  productName: "Ledger Nano FTS",
  productIdMM: 96,
  legacyUsbProductId: 6,
  usbOnly: false,
  memorySize: 2 * 1024 * 1024,
  masks: [857735168],
  getBlockSize: function(_firwareVersion) {
    return 4 * 1024;
  },
  bluetoothSpec: [
    {
      serviceUuid: "13d63400-2c97-6004-0000-4c6564676572",
      notifyUuid: "13d63400-2c97-6004-0001-4c6564676572",
      writeUuid: "13d63400-2c97-6004-0002-4c6564676572",
      writeCmdUuid: "13d63400-2c97-6004-0003-4c6564676572"
    }
  ]
}, _a);
var productMap = {
  Blue: DeviceModelId.blue,
  "Nano S": DeviceModelId.nanoS,
  "Nano S Plus": DeviceModelId.nanoSP,
  "Nano X": DeviceModelId.nanoX,
  "Nano FTS": DeviceModelId.nanoFTS
};
var devicesList = Object.values(devices);
var ledgerUSBVendorId = 11415;
var identifyUSBProductId = function(usbProductId) {
  var legacy = devicesList.find(function(d) {
    return d.legacyUsbProductId === usbProductId;
  });
  if (legacy)
    return legacy;
  var mm = usbProductId >> 8;
  var deviceModel = devicesList.find(function(d) {
    return d.productIdMM === mm;
  });
  return deviceModel;
};
var bluetoothServices = [];
var serviceUuidToInfos = {};
for (id2 in devices) {
  deviceModel = devices[id2];
  bluetoothSpec = deviceModel.bluetoothSpec;
  if (bluetoothSpec) {
    for (i = 0; i < bluetoothSpec.length; i++) {
      spec = bluetoothSpec[i];
      bluetoothServices.push(spec.serviceUuid);
      serviceUuidToInfos[spec.serviceUuid] = serviceUuidToInfos[spec.serviceUuid.replace(/-/g, "")] = __assign({ deviceModel }, spec);
    }
  }
}
var deviceModel;
var bluetoothSpec;
var spec;
var i;
var id2;

// node_modules/@ledgerhq/logs/lib-es/index.js
var id = 0;
var subscribers = [];
var log = (type, message, data) => {
  const obj = {
    type,
    id: String(++id),
    date: /* @__PURE__ */ new Date()
  };
  if (message)
    obj.message = message;
  if (data)
    obj.data = data;
  dispatch(obj);
};
var listen = (cb) => {
  subscribers.push(cb);
  return () => {
    const i = subscribers.indexOf(cb);
    if (i !== -1) {
      subscribers[i] = subscribers[subscribers.length - 1];
      subscribers.pop();
    }
  };
};
function dispatch(log2) {
  for (let i = 0; i < subscribers.length; i++) {
    try {
      subscribers[i](log2);
    } catch (e) {
      console.error(e);
    }
  }
}
if (typeof window !== "undefined") {
  window.__ledgerLogsListen = listen;
}

// node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js
init_lib_es();
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
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
          return { value: op[1], done: false };
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
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var ledgerDevices = [
  {
    vendorId: ledgerUSBVendorId
  }
];
var isSupported = function() {
  return Promise.resolve(!!(window.navigator && window.navigator.hid));
};
var getHID = function() {
  var hid = navigator.hid;
  if (!hid)
    throw new TransportError("navigator.hid is not supported", "HIDNotSupported");
  return hid;
};
function requestLedgerDevices() {
  return __awaiter(this, void 0, void 0, function() {
    var device;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getHID().requestDevice({
            filters: ledgerDevices
          })];
        case 1:
          device = _a2.sent();
          if (Array.isArray(device))
            return [2, device];
          return [2, [device]];
      }
    });
  });
}
function getLedgerDevices() {
  return __awaiter(this, void 0, void 0, function() {
    var devices2;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getHID().getDevices()];
        case 1:
          devices2 = _a2.sent();
          return [2, devices2.filter(function(d) {
            return d.vendorId === ledgerUSBVendorId;
          })];
      }
    });
  });
}
function getFirstLedgerDevice() {
  return __awaiter(this, void 0, void 0, function() {
    var existingDevices, devices2;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getLedgerDevices()];
        case 1:
          existingDevices = _a2.sent();
          if (existingDevices.length > 0)
            return [2, existingDevices[0]];
          return [4, requestLedgerDevices()];
        case 2:
          devices2 = _a2.sent();
          return [2, devices2[0]];
      }
    });
  });
}
var TransportWebHID = (
  /** @class */
  function(_super) {
    __extends(TransportWebHID2, _super);
    function TransportWebHID2(device) {
      var _this = _super.call(this) || this;
      _this.channel = Math.floor(Math.random() * 65535);
      _this.packetSize = 64;
      _this.inputs = [];
      _this.read = function() {
        if (_this.inputs.length) {
          return Promise.resolve(_this.inputs.shift());
        }
        return new Promise(function(success) {
          _this.inputCallback = success;
        });
      };
      _this.onInputReport = function(e) {
        var buffer = Buffer.from(e.data.buffer);
        if (_this.inputCallback) {
          _this.inputCallback(buffer);
          _this.inputCallback = null;
        } else {
          _this.inputs.push(buffer);
        }
      };
      _this._disconnectEmitted = false;
      _this._emitDisconnect = function(e) {
        if (_this._disconnectEmitted)
          return;
        _this._disconnectEmitted = true;
        _this.emit("disconnect", e);
      };
      _this.exchange = function(apdu) {
        return __awaiter(_this, void 0, void 0, function() {
          var b;
          var _this2 = this;
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return [4, this.exchangeAtomicImpl(function() {
                  return __awaiter(_this2, void 0, void 0, function() {
                    var _a3, channel, packetSize, framing, blocks, i, result, acc, buffer;
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          _a3 = this, channel = _a3.channel, packetSize = _a3.packetSize;
                          log("apdu", "=> " + apdu.toString("hex"));
                          framing = (0, import_hid_framing.default)(channel, packetSize);
                          blocks = framing.makeBlocks(apdu);
                          i = 0;
                          _b.label = 1;
                        case 1:
                          if (!(i < blocks.length)) return [3, 4];
                          return [4, this.device.sendReport(0, blocks[i])];
                        case 2:
                          _b.sent();
                          _b.label = 3;
                        case 3:
                          i++;
                          return [3, 1];
                        case 4:
                          if (!!(result = framing.getReducedResult(acc))) return [3, 6];
                          return [4, this.read()];
                        case 5:
                          buffer = _b.sent();
                          acc = framing.reduceResponse(acc, buffer);
                          return [3, 4];
                        case 6:
                          log("apdu", "<= " + result.toString("hex"));
                          return [2, result];
                      }
                    });
                  });
                })["catch"](function(e) {
                  if (e && e.message && e.message.includes("write")) {
                    _this2._emitDisconnect(e);
                    throw new DisconnectedDeviceDuringOperation(e.message);
                  }
                  throw e;
                })];
              case 1:
                b = _a2.sent();
                return [2, b];
            }
          });
        });
      };
      _this.device = device;
      _this.deviceModel = typeof device.productId === "number" ? identifyUSBProductId(device.productId) : void 0;
      device.addEventListener("inputreport", _this.onInputReport);
      return _this;
    }
    TransportWebHID2.request = function() {
      return __awaiter(this, void 0, void 0, function() {
        var _a2, device;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, requestLedgerDevices()];
            case 1:
              _a2 = __read.apply(void 0, [_b.sent(), 1]), device = _a2[0];
              return [2, TransportWebHID2.open(device)];
          }
        });
      });
    };
    TransportWebHID2.openConnected = function() {
      return __awaiter(this, void 0, void 0, function() {
        var devices2;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, getLedgerDevices()];
            case 1:
              devices2 = _a2.sent();
              if (devices2.length === 0)
                return [2, null];
              return [2, TransportWebHID2.open(devices2[0])];
          }
        });
      });
    };
    TransportWebHID2.open = function(device) {
      return __awaiter(this, void 0, void 0, function() {
        var transport, onDisconnect;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, device.open()];
            case 1:
              _a2.sent();
              transport = new TransportWebHID2(device);
              onDisconnect = function(e) {
                if (device === e.device) {
                  getHID().removeEventListener("disconnect", onDisconnect);
                  transport._emitDisconnect(new DisconnectedDevice());
                }
              };
              getHID().addEventListener("disconnect", onDisconnect);
              return [2, transport];
          }
        });
      });
    };
    TransportWebHID2.prototype.close = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.exchangeBusyPromise];
            case 1:
              _a2.sent();
              this.device.removeEventListener("inputreport", this.onInputReport);
              return [4, this.device.close()];
            case 2:
              _a2.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TransportWebHID2.prototype.setScrambleKey = function() {
    };
    TransportWebHID2.isSupported = isSupported;
    TransportWebHID2.list = getLedgerDevices;
    TransportWebHID2.listen = function(observer) {
      var unsubscribed = false;
      getFirstLedgerDevice().then(function(device) {
        if (!device) {
          observer.error(new TransportOpenUserCancelled("Access denied to use Ledger device"));
        } else if (!unsubscribed) {
          var deviceModel = typeof device.productId === "number" ? identifyUSBProductId(device.productId) : void 0;
          observer.next({
            type: "add",
            descriptor: device,
            deviceModel
          });
          observer.complete();
        }
      }, function(error) {
        observer.error(new TransportOpenUserCancelled(error.message));
      });
      function unsubscribe() {
        unsubscribed = true;
      }
      return {
        unsubscribe
      };
    };
    return TransportWebHID2;
  }(Transport_default)
);
var TransportWebHID_default = TransportWebHID;
export {
  TransportWebHID_default as default
};
//# sourceMappingURL=TransportWebHID-YYA53NFP.js.map
