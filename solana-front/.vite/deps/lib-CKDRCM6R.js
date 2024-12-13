import {
  require_bignumber
} from "./chunk-6UKM4XWC.js";
import {
  init_tslib_es6,
  tslib_es6_exports
} from "./chunk-OIEZYFRY.js";
import {
  require_events
} from "./chunk-OFLUJM4P.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-256EKJAK.js";

// node_modules/@trezor/connect/lib/events/ui-request.js
var require_ui_request = __commonJS({
  "node_modules/@trezor/connect/lib/events/ui-request.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createUiMessage = exports2.UI_REQUEST = exports2.UI_EVENT = void 0;
    exports2.UI_EVENT = "UI_EVENT";
    exports2.UI_REQUEST = {
      TRANSPORT: "ui-no_transport",
      BOOTLOADER: "ui-device_bootloader_mode",
      NOT_IN_BOOTLOADER: "ui-device_not_in_bootloader_mode",
      REQUIRE_MODE: "ui-device_require_mode",
      INITIALIZE: "ui-device_not_initialized",
      SEEDLESS: "ui-device_seedless",
      FIRMWARE_OLD: "ui-device_firmware_old",
      FIRMWARE_OUTDATED: "ui-device_firmware_outdated",
      FIRMWARE_NOT_SUPPORTED: "ui-device_firmware_unsupported",
      FIRMWARE_NOT_COMPATIBLE: "ui-device_firmware_not_compatible",
      FIRMWARE_NOT_INSTALLED: "ui-device_firmware_not_installed",
      FIRMWARE_PROGRESS: "ui-firmware-progress",
      FIRMWARE_RECONNECT: "ui-firmware_reconnect",
      DEVICE_NEEDS_BACKUP: "ui-device_needs_backup",
      REQUEST_UI_WINDOW: "ui-request_window",
      CLOSE_UI_WINDOW: "ui-close_window",
      REQUEST_PERMISSION: "ui-request_permission",
      REQUEST_CONFIRMATION: "ui-request_confirmation",
      REQUEST_PIN: "ui-request_pin",
      INVALID_PIN: "ui-invalid_pin",
      REQUEST_PASSPHRASE: "ui-request_passphrase",
      REQUEST_PASSPHRASE_ON_DEVICE: "ui-request_passphrase_on_device",
      INVALID_PASSPHRASE: "ui-invalid_passphrase",
      CONNECT: "ui-connect",
      LOADING: "ui-loading",
      SET_OPERATION: "ui-set_operation",
      SELECT_DEVICE: "ui-select_device",
      SELECT_ACCOUNT: "ui-select_account",
      SELECT_FEE: "ui-select_fee",
      UPDATE_CUSTOM_FEE: "ui-update_custom_fee",
      INSUFFICIENT_FUNDS: "ui-insufficient_funds",
      REQUEST_BUTTON: "ui-button",
      REQUEST_WORD: "ui-request_word",
      LOGIN_CHALLENGE_REQUEST: "ui-login_challenge_request",
      BUNDLE_PROGRESS: "ui-bundle_progress",
      ADDRESS_VALIDATION: "ui-address_validation",
      IFRAME_FAILURE: "ui-iframe_failure"
    };
    var createUiMessage = (type, payload) => ({
      event: exports2.UI_EVENT,
      type,
      payload
    });
    exports2.createUiMessage = createUiMessage;
  }
});

// node_modules/@trezor/connect/lib/events/ui-response.js
var require_ui_response = __commonJS({
  "node_modules/@trezor/connect/lib/events/ui-response.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createUiResponse = exports2.UI_RESPONSE = void 0;
    var ui_request_1 = require_ui_request();
    exports2.UI_RESPONSE = {
      RECEIVE_PERMISSION: "ui-receive_permission",
      RECEIVE_CONFIRMATION: "ui-receive_confirmation",
      RECEIVE_PIN: "ui-receive_pin",
      RECEIVE_PASSPHRASE: "ui-receive_passphrase",
      RECEIVE_DEVICE: "ui-receive_device",
      RECEIVE_ACCOUNT: "ui-receive_account",
      RECEIVE_FEE: "ui-receive_fee",
      RECEIVE_WORD: "ui-receive_word",
      INVALID_PASSPHRASE_ACTION: "ui-invalid_passphrase_action",
      CHANGE_SETTINGS: "ui-change_settings",
      LOGIN_CHALLENGE_RESPONSE: "ui-login_challenge_response"
    };
    var createUiResponse = (type, payload) => ({
      event: ui_request_1.UI_EVENT,
      type,
      payload
    });
    exports2.createUiResponse = createUiResponse;
  }
});

// node_modules/@trezor/connect/lib/events/blockchain.js
var require_blockchain = __commonJS({
  "node_modules/@trezor/connect/lib/events/blockchain.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createBlockchainMessage = exports2.BLOCKCHAIN = exports2.BLOCKCHAIN_EVENT = void 0;
    exports2.BLOCKCHAIN_EVENT = "BLOCKCHAIN_EVENT";
    exports2.BLOCKCHAIN = {
      CONNECT: "blockchain-connect",
      RECONNECTING: "blockchain-reconnecting",
      ERROR: "blockchain-error",
      BLOCK: "blockchain-block",
      NOTIFICATION: "blockchain-notification",
      FIAT_RATES_UPDATE: "fiat-rates-update"
    };
    var createBlockchainMessage = (type, payload) => ({
      event: exports2.BLOCKCHAIN_EVENT,
      type,
      payload
    });
    exports2.createBlockchainMessage = createBlockchainMessage;
  }
});

// node_modules/@trezor/connect/lib/constants/errors.js
var require_errors = __commonJS({
  "node_modules/@trezor/connect/lib/constants/errors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LIBUSB_ERROR_MESSAGE = exports2.serializeError = exports2.TypedError = exports2.TrezorError = exports2.ERROR_CODES = void 0;
    exports2.ERROR_CODES = {
      Init_NotInitialized: "TrezorConnect not initialized",
      Init_AlreadyInitialized: "TrezorConnect has been already initialized",
      Init_IframeBlocked: "Iframe blocked",
      Init_IframeTimeout: "Iframe timeout",
      Init_ManifestMissing: "Manifest not set. Read more at https://github.com/trezor/trezor-suite/blob/develop/docs/packages/connect/index.md",
      Popup_ConnectionMissing: "Unable to establish connection with iframe",
      Transport_Missing: "Transport is missing",
      Transport_InvalidProtobuf: "",
      Method_InvalidPackage: "This package is not suitable to work with browser. Use @trezor/connect-web package instead",
      Method_InvalidParameter: "",
      Method_NotAllowed: "Method not allowed for this configuration",
      Method_PermissionsNotGranted: "Permissions not granted",
      Method_Cancel: "Cancelled",
      Method_Interrupted: "Popup closed",
      Method_UnknownCoin: "Coin not found",
      Method_AddressNotMatch: "Addresses do not match",
      Method_FirmwareUpdate_DownloadFailed: "Failed to download firmware binary",
      Method_Discovery_BundleException: "",
      Method_Override: "override",
      Method_NoResponse: "Call resolved without response",
      Backend_NotSupported: "BlockchainLink settings not found in coins.json",
      Backend_WorkerMissing: "",
      Backend_Disconnected: "Backend disconnected",
      Backend_Invalid: "Invalid backend",
      Backend_Error: "",
      Runtime: "",
      Device_NotFound: "Device not found",
      Device_InitializeFailed: "",
      Device_FwException: "",
      Device_ModeException: "",
      Device_Disconnected: "Device disconnected",
      Device_UsedElsewhere: "Device is used in another window",
      Device_InvalidState: "Passphrase is incorrect",
      Device_CallInProgress: "Device call in progress",
      Device_MultipleNotSupported: "Multiple devices are not supported"
    };
    var TrezorError = class extends Error {
      constructor(code, message) {
        super(message);
        this.code = code;
        this.message = message;
      }
    };
    exports2.TrezorError = TrezorError;
    var TypedError = (id, message) => new TrezorError(id, message || exports2.ERROR_CODES[id]);
    exports2.TypedError = TypedError;
    var serializeError = (payload) => {
      if (payload && payload.error instanceof Error) {
        return { error: payload.error.message, code: payload.error.code };
      }
      return payload;
    };
    exports2.serializeError = serializeError;
    exports2.LIBUSB_ERROR_MESSAGE = "LIBUSB_ERROR";
  }
});

// node_modules/@trezor/connect/lib/events/call.js
var require_call = __commonJS({
  "node_modules/@trezor/connect/lib/events/call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createResponseMessage = exports2.RESPONSE_EVENT = void 0;
    var errors_1 = require_errors();
    exports2.RESPONSE_EVENT = "RESPONSE_EVENT";
    var createResponseMessage = (id, success, payload) => ({
      event: exports2.RESPONSE_EVENT,
      type: exports2.RESPONSE_EVENT,
      id,
      success,
      payload: success ? payload : (0, errors_1.serializeError)(payload)
    });
    exports2.createResponseMessage = createResponseMessage;
  }
});

// node_modules/@trezor/connect/lib/events/core.js
var require_core = __commonJS({
  "node_modules/@trezor/connect/lib/events/core.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createErrorMessage = exports2.parseMessage = exports2.CORE_EVENT = void 0;
    exports2.CORE_EVENT = "CORE_EVENT";
    var parseMessage = (messageData) => {
      const message = {
        event: messageData.event,
        type: messageData.type,
        payload: messageData.payload
      };
      if (typeof messageData.id === "number") {
        message.id = messageData.id;
      }
      if (typeof messageData.success === "boolean") {
        message.success = messageData.success;
      }
      return message;
    };
    exports2.parseMessage = parseMessage;
    var createErrorMessage = (error) => ({
      success: false,
      payload: {
        error: error.message,
        code: error.code
      }
    });
    exports2.createErrorMessage = createErrorMessage;
  }
});

// node_modules/@trezor/connect/lib/events/device.js
var require_device = __commonJS({
  "node_modules/@trezor/connect/lib/events/device.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createDeviceMessage = exports2.DEVICE = exports2.DEVICE_EVENT = void 0;
    exports2.DEVICE_EVENT = "DEVICE_EVENT";
    exports2.DEVICE = {
      CONNECT: "device-connect",
      CONNECT_UNACQUIRED: "device-connect_unacquired",
      DISCONNECT: "device-disconnect",
      CHANGED: "device-changed",
      ACQUIRE: "device-acquire",
      RELEASE: "device-release",
      ACQUIRED: "device-acquired",
      RELEASED: "device-released",
      USED_ELSEWHERE: "device-used_elsewhere",
      SAVE_STATE: "device-save_state",
      LOADING: "device-loading",
      BUTTON: "button",
      PIN: "pin",
      PASSPHRASE: "passphrase",
      PASSPHRASE_ON_DEVICE: "passphrase_on_device",
      WORD: "word"
    };
    var createDeviceMessage = (type, payload) => ({
      event: exports2.DEVICE_EVENT,
      type,
      payload
    });
    exports2.createDeviceMessage = createDeviceMessage;
  }
});

// node_modules/@trezor/connect/lib/events/iframe.js
var require_iframe = __commonJS({
  "node_modules/@trezor/connect/lib/events/iframe.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createIFrameMessage = exports2.IFRAME = void 0;
    var ui_request_1 = require_ui_request();
    exports2.IFRAME = {
      BOOTSTRAP: "iframe-bootstrap",
      LOADED: "iframe-loaded",
      INIT: "iframe-init",
      ERROR: "iframe-error",
      CALL: "iframe-call",
      LOG: "iframe-log"
    };
    var createIFrameMessage = (type, payload) => ({
      event: ui_request_1.UI_EVENT,
      type,
      payload
    });
    exports2.createIFrameMessage = createIFrameMessage;
  }
});

// node_modules/@trezor/connect/lib/events/popup.js
var require_popup = __commonJS({
  "node_modules/@trezor/connect/lib/events/popup.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createPopupMessage = exports2.POPUP = void 0;
    var ui_request_1 = require_ui_request();
    exports2.POPUP = {
      BOOTSTRAP: "popup-bootstrap",
      LOADED: "popup-loaded",
      CORE_LOADED: "popup-core-loaded",
      INIT: "popup-init",
      ERROR: "popup-error",
      EXTENSION_USB_PERMISSIONS: "open-usb-permissions",
      HANDSHAKE: "popup-handshake",
      CLOSED: "popup-closed",
      CANCEL_POPUP_REQUEST: "ui-cancel-popup-request",
      CLOSE_WINDOW: "window.close",
      ANALYTICS_RESPONSE: "popup-analytics-response",
      CONTENT_SCRIPT_LOADED: "popup-content-script-loaded",
      METHOD_INFO: "popup-method-info"
    };
    var createPopupMessage = (type, payload) => ({
      event: ui_request_1.UI_EVENT,
      type,
      payload
    });
    exports2.createPopupMessage = createPopupMessage;
  }
});

// node_modules/@trezor/transport/lib/constants.js
var require_constants = __commonJS({
  "node_modules/@trezor/transport/lib/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TRANSPORT = exports2.ACTION_TIMEOUT = exports2.TREZOR_USB_DESCRIPTORS = exports2.WEBUSB_BOOTLOADER_PRODUCT = exports2.T1_HID_VENDOR = exports2.ENDPOINT_ID = exports2.INTERFACE_ID = exports2.CONFIGURATION_ID = void 0;
    exports2.CONFIGURATION_ID = 1;
    exports2.INTERFACE_ID = 0;
    exports2.ENDPOINT_ID = 1;
    exports2.T1_HID_VENDOR = 21324;
    var T1_HID_PRODUCT = 1;
    var WEBUSB_FIRMWARE_PRODUCT = 21441;
    exports2.WEBUSB_BOOTLOADER_PRODUCT = 21440;
    exports2.TREZOR_USB_DESCRIPTORS = [
      { vendorId: 21324, productId: T1_HID_PRODUCT },
      { vendorId: 4617, productId: exports2.WEBUSB_BOOTLOADER_PRODUCT },
      { vendorId: 4617, productId: WEBUSB_FIRMWARE_PRODUCT }
    ];
    exports2.ACTION_TIMEOUT = 1e4;
    exports2.TRANSPORT = {
      START: "transport-start",
      ERROR: "transport-error",
      UPDATE: "transport-update",
      DISABLE_WEBUSB: "transport-disable_webusb",
      REQUEST_DEVICE: "transport-request_device",
      GET_INFO: "transport-get_info"
    };
  }
});

// node_modules/@trezor/connect/lib/events/transport.js
var require_transport = __commonJS({
  "node_modules/@trezor/connect/lib/events/transport.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createTransportMessage = exports2.TRANSPORT_EVENT = exports2.TRANSPORT = void 0;
    var errors_1 = require_errors();
    var constants_1 = require_constants();
    Object.defineProperty(exports2, "TRANSPORT", { enumerable: true, get: function() {
      return constants_1.TRANSPORT;
    } });
    exports2.TRANSPORT_EVENT = "TRANSPORT_EVENT";
    var createTransportMessage = (type, payload) => ({
      event: exports2.TRANSPORT_EVENT,
      type,
      payload: "error" in payload ? (0, errors_1.serializeError)(payload) : payload
    });
    exports2.createTransportMessage = createTransportMessage;
  }
});

// node_modules/@trezor/connect/lib/events/ui-promise.js
var require_ui_promise = __commonJS({
  "node_modules/@trezor/connect/lib/events/ui-promise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@trezor/connect/lib/events/webextension.js
var require_webextension = __commonJS({
  "node_modules/@trezor/connect/lib/events/webextension.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WEBEXTENSION = void 0;
    exports2.WEBEXTENSION = {
      USB_PERMISSIONS_BROADCAST: "usb-permissions",
      USB_PERMISSIONS_INIT: "usb-permissions-init",
      USB_PERMISSIONS_CLOSE: "usb-permissions-close",
      USB_PERMISSIONS_FINISHED: "usb-permissions-finished",
      CHANNEL_HANDSHAKE_CONFIRM: "channel-handshake-confirm"
    };
  }
});

// node_modules/@trezor/connect/lib/events/index.js
var require_events2 = __commonJS({
  "node_modules/@trezor/connect/lib/events/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UI = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var ui_request_1 = require_ui_request();
    var ui_response_1 = require_ui_response();
    tslib_1.__exportStar(require_blockchain(), exports2);
    tslib_1.__exportStar(require_call(), exports2);
    tslib_1.__exportStar(require_core(), exports2);
    tslib_1.__exportStar(require_device(), exports2);
    tslib_1.__exportStar(require_iframe(), exports2);
    tslib_1.__exportStar(require_popup(), exports2);
    tslib_1.__exportStar(require_transport(), exports2);
    tslib_1.__exportStar(require_ui_promise(), exports2);
    tslib_1.__exportStar(require_ui_request(), exports2);
    tslib_1.__exportStar(require_ui_response(), exports2);
    tslib_1.__exportStar(require_webextension(), exports2);
    exports2.UI = {
      ...ui_request_1.UI_REQUEST,
      ...ui_response_1.UI_RESPONSE
    };
  }
});

// node_modules/@trezor/connect/lib/factory.js
var require_factory = __commonJS({
  "node_modules/@trezor/connect/lib/factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.factory = void 0;
    var events_1 = require_events2();
    var factory = ({ eventEmitter, manifest, init, call, requestLogin, uiResponse, renderWebUSBButton, disableWebUSB, requestWebUSBDevice, cancel, dispose }) => {
      const api = {
        manifest,
        init,
        getSettings: () => call({ method: "getSettings" }),
        on: (type, fn) => {
          eventEmitter.on(type, fn);
        },
        off: (type, fn) => {
          eventEmitter.removeListener(type, fn);
        },
        removeAllListeners: (type) => {
          if (typeof type === "string") {
            eventEmitter.removeAllListeners(type);
          } else {
            eventEmitter.removeAllListeners();
          }
        },
        uiResponse,
        blockchainGetAccountBalanceHistory: (params) => call({ ...params, method: "blockchainGetAccountBalanceHistory" }),
        blockchainGetCurrentFiatRates: (params) => call({ ...params, method: "blockchainGetCurrentFiatRates" }),
        blockchainGetFiatRatesForTimestamps: (params) => call({ ...params, method: "blockchainGetFiatRatesForTimestamps" }),
        blockchainDisconnect: (params) => call({ ...params, method: "blockchainDisconnect" }),
        blockchainEstimateFee: (params) => call({ ...params, method: "blockchainEstimateFee" }),
        blockchainGetTransactions: (params) => call({ ...params, method: "blockchainGetTransactions" }),
        blockchainSetCustomBackend: (params) => call({ ...params, method: "blockchainSetCustomBackend" }),
        blockchainSubscribe: (params) => call({ ...params, method: "blockchainSubscribe" }),
        blockchainSubscribeFiatRates: (params) => call({ ...params, method: "blockchainSubscribeFiatRates" }),
        blockchainUnsubscribe: (params) => call({ ...params, method: "blockchainUnsubscribe" }),
        blockchainUnsubscribeFiatRates: (params) => call({ ...params, method: "blockchainUnsubscribeFiatRates" }),
        requestLogin: (params) => requestLogin(params),
        cardanoGetAddress: (params) => call({
          ...params,
          method: "cardanoGetAddress",
          useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
        }),
        cardanoGetNativeScriptHash: (params) => call({ ...params, method: "cardanoGetNativeScriptHash" }),
        cardanoGetPublicKey: (params) => call({ ...params, method: "cardanoGetPublicKey" }),
        cardanoSignTransaction: (params) => call({ ...params, method: "cardanoSignTransaction" }),
        cardanoComposeTransaction: (params) => call({ ...params, method: "cardanoComposeTransaction" }),
        cipherKeyValue: (params) => call({ ...params, method: "cipherKeyValue" }),
        composeTransaction: (params) => call({ ...params, method: "composeTransaction" }),
        ethereumGetAddress: (params) => call({
          ...params,
          method: "ethereumGetAddress",
          useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
        }),
        ethereumGetPublicKey: (params) => call({ ...params, method: "ethereumGetPublicKey" }),
        ethereumSignMessage: (params) => call({ ...params, method: "ethereumSignMessage" }),
        ethereumSignTransaction: (params) => call({ ...params, method: "ethereumSignTransaction" }),
        ethereumSignTypedData: (params) => call({ ...params, method: "ethereumSignTypedData" }),
        ethereumVerifyMessage: (params) => call({ ...params, method: "ethereumVerifyMessage" }),
        getAccountDescriptor: (params) => call({ ...params, method: "getAccountDescriptor" }),
        getAccountInfo: (params) => call({ ...params, method: "getAccountInfo" }),
        getAddress: (params) => call({
          ...params,
          method: "getAddress",
          useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
        }),
        getDeviceState: (params) => call({ ...params, method: "getDeviceState" }),
        getFeatures: (params) => call({ ...params, method: "getFeatures" }),
        getFirmwareHash: (params) => call({ ...params, method: "getFirmwareHash" }),
        getOwnershipId: (params) => call({ ...params, method: "getOwnershipId" }),
        getOwnershipProof: (params) => call({ ...params, method: "getOwnershipProof" }),
        getPublicKey: (params) => call({ ...params, method: "getPublicKey" }),
        nemGetAddress: (params) => call({
          ...params,
          method: "nemGetAddress",
          useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
        }),
        nemSignTransaction: (params) => call({ ...params, method: "nemSignTransaction" }),
        pushTransaction: (params) => call({ ...params, method: "pushTransaction" }),
        rippleGetAddress: (params) => call({
          ...params,
          method: "rippleGetAddress",
          useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
        }),
        rippleSignTransaction: (params) => call({ ...params, method: "rippleSignTransaction" }),
        signMessage: (params) => call({ ...params, method: "signMessage" }),
        signTransaction: (params) => call({ ...params, method: "signTransaction" }),
        solanaGetPublicKey: (params) => call({ ...params, method: "solanaGetPublicKey" }),
        solanaGetAddress: (params) => call({ ...params, method: "solanaGetAddress" }),
        solanaSignTransaction: (params) => call({ ...params, method: "solanaSignTransaction" }),
        stellarGetAddress: (params) => call({
          ...params,
          method: "stellarGetAddress",
          useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
        }),
        stellarSignTransaction: (params) => call({ ...params, method: "stellarSignTransaction" }),
        tezosGetAddress: (params) => call({
          ...params,
          method: "tezosGetAddress",
          useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
        }),
        tezosGetPublicKey: (params) => call({ ...params, method: "tezosGetPublicKey" }),
        tezosSignTransaction: (params) => call({ ...params, method: "tezosSignTransaction" }),
        unlockPath: (params) => call({ ...params, method: "unlockPath" }),
        eosGetPublicKey: (params) => call({ ...params, method: "eosGetPublicKey" }),
        eosSignTransaction: (params) => call({ ...params, method: "eosSignTransaction" }),
        binanceGetAddress: (params) => call({
          ...params,
          method: "binanceGetAddress",
          useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
        }),
        binanceGetPublicKey: (params) => call({ ...params, method: "binanceGetPublicKey" }),
        binanceSignTransaction: (params) => call({ ...params, method: "binanceSignTransaction" }),
        verifyMessage: (params) => call({ ...params, method: "verifyMessage" }),
        resetDevice: (params) => call({ ...params, method: "resetDevice" }),
        wipeDevice: (params) => call({ ...params, method: "wipeDevice" }),
        checkFirmwareAuthenticity: (params) => call({ ...params, method: "checkFirmwareAuthenticity" }),
        applyFlags: (params) => call({ ...params, method: "applyFlags" }),
        applySettings: (params) => call({ ...params, method: "applySettings" }),
        authenticateDevice: (params) => call({ ...params, method: "authenticateDevice" }),
        authorizeCoinjoin: (params) => call({ ...params, method: "authorizeCoinjoin" }),
        cancelCoinjoinAuthorization: (params) => call({ ...params, method: "cancelCoinjoinAuthorization" }),
        showDeviceTutorial: (params) => call({ ...params, method: "showDeviceTutorial" }),
        backupDevice: (params) => call({ ...params, method: "backupDevice" }),
        changeLanguage: (params) => call({ ...params, method: "changeLanguage" }),
        changePin: (params) => call({ ...params, method: "changePin" }),
        changeWipeCode: (params) => call({ ...params, method: "changeWipeCode" }),
        firmwareUpdate: (params) => call({ ...params, method: "firmwareUpdate" }),
        recoveryDevice: (params) => call({ ...params, method: "recoveryDevice" }),
        getCoinInfo: (params) => call({ ...params, method: "getCoinInfo" }),
        rebootToBootloader: (params) => call({ ...params, method: "rebootToBootloader" }),
        setBrightness: (params) => call({ ...params, method: "setBrightness" }),
        setBusy: (params) => call({ ...params, method: "setBusy" }),
        setProxy: (params) => call({ ...params, method: "setProxy" }),
        dispose,
        cancel,
        renderWebUSBButton,
        disableWebUSB,
        requestWebUSBDevice
      };
      return api;
    };
    exports2.factory = factory;
  }
});

// node_modules/@trezor/utils/lib/bufferUtils.js
var require_bufferUtils = __commonJS({
  "node_modules/@trezor/utils/lib/bufferUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getChunkSize = exports2.reverseBuffer = void 0;
    var reverseBuffer = (src) => {
      if (src.length < 1)
        return src;
      const buffer = Buffer.alloc(src.length);
      let j = buffer.length - 1;
      for (let i = 0; i < buffer.length / 2; i++) {
        buffer[i] = src[j];
        buffer[j] = src[i];
        j--;
      }
      return buffer;
    };
    exports2.reverseBuffer = reverseBuffer;
    var getChunkSize = (n) => {
      const buf = Buffer.allocUnsafe(1);
      buf.writeUInt8(n);
      return buf;
    };
    exports2.getChunkSize = getChunkSize;
  }
});

// node_modules/@trezor/utils/lib/enumUtils.js
var require_enumUtils = __commonJS({
  "node_modules/@trezor/utils/lib/enumUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getValueByKey = exports2.getKeyByValue = void 0;
    function getKeyByValue(obj, value) {
      return obj && Object.keys(obj).find((x) => obj[x] === value);
    }
    exports2.getKeyByValue = getKeyByValue;
    function getValueByKey(obj, enumKey) {
      const key = obj && Object.keys(obj).find((x) => x === enumKey);
      return key && obj[key];
    }
    exports2.getValueByKey = getValueByKey;
  }
});

// node_modules/@trezor/utils/lib/versionUtils.js
var require_versionUtils = __commonJS({
  "node_modules/@trezor/utils/lib/versionUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.normalizeVersion = exports2.isNewerOrEqual = exports2.isEqual = exports2.isNewer = exports2.isVersionArray = void 0;
    var isVersionArray = (arr) => {
      if (!Array.isArray(arr)) {
        return false;
      }
      if (arr.length !== 3) {
        return false;
      }
      for (let i = 0; i < arr.length; i++) {
        const versionNumber = arr[i];
        if (typeof versionNumber !== "number" || versionNumber < 0) {
          return false;
        }
      }
      return true;
    };
    exports2.isVersionArray = isVersionArray;
    var parse = (versionArr) => ({
      major: versionArr[0],
      minor: versionArr[1],
      patch: versionArr[2]
    });
    var split = (version) => {
      const arr = version.split(".").map((v) => Number(v));
      if (!(0, exports2.isVersionArray)(arr)) {
        throw new Error(`version string is in wrong format: ${version}`);
      }
      return arr;
    };
    var versionToString = (arr) => `${arr[0]}.${arr[1]}.${arr[2]}`;
    var isNewer = (versionX, versionY) => {
      const parsedX = parse(typeof versionX === "string" ? split(versionX) : versionX);
      const parsedY = parse(typeof versionY === "string" ? split(versionY) : versionY);
      if (parsedX.major - parsedY.major !== 0) {
        return parsedX.major > parsedY.major;
      }
      if (parsedX.minor - parsedY.minor !== 0) {
        return parsedX.minor > parsedY.minor;
      }
      if (parsedX.patch - parsedY.patch !== 0) {
        return parsedX.patch > parsedY.patch;
      }
      return false;
    };
    exports2.isNewer = isNewer;
    var isEqual = (versionX, versionY) => {
      const strX = typeof versionX === "string" ? versionX : versionToString(versionX);
      const strY = typeof versionY === "string" ? versionY : versionToString(versionY);
      return strX === strY;
    };
    exports2.isEqual = isEqual;
    var isNewerOrEqual = (versionX, versionY) => (0, exports2.isNewer)(versionX, versionY) || (0, exports2.isEqual)(versionX, versionY);
    exports2.isNewerOrEqual = isNewerOrEqual;
    var normalizeVersion = (version) => version.replace(/\b0+(\d)/g, "$1");
    exports2.normalizeVersion = normalizeVersion;
  }
});

// node_modules/@trezor/utils/lib/xssFilters.js
var require_xssFilters = __commonJS({
  "node_modules/@trezor/utils/lib/xssFilters.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.inDoubleQuotes = exports2.inSingleQuotes = exports2.inHTML = void 0;
    var LT = /</g;
    var SQUOT = /'/g;
    var QUOT = /"/g;
    var inHTML = (value) => value.replace(LT, "&lt;");
    exports2.inHTML = inHTML;
    var inSingleQuotes = (value) => value.replace(SQUOT, "&#39;");
    exports2.inSingleQuotes = inSingleQuotes;
    var inDoubleQuotes = (value) => value.replace(QUOT, "&quot;");
    exports2.inDoubleQuotes = inDoubleQuotes;
  }
});

// node_modules/@trezor/utils/lib/addDashesToSpaces.js
var require_addDashesToSpaces = __commonJS({
  "node_modules/@trezor/utils/lib/addDashesToSpaces.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.addDashesToSpaces = void 0;
    var addDashesToSpaces = (inputString) => inputString.replace(/\s+/g, "-");
    exports2.addDashesToSpaces = addDashesToSpaces;
  }
});

// node_modules/@trezor/utils/lib/arrayDistinct.js
var require_arrayDistinct = __commonJS({
  "node_modules/@trezor/utils/lib/arrayDistinct.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.arrayDistinct = void 0;
    var arrayDistinct = (item, index, self2) => self2.indexOf(item) === index;
    exports2.arrayDistinct = arrayDistinct;
  }
});

// node_modules/@trezor/utils/lib/arrayPartition.js
var require_arrayPartition = __commonJS({
  "node_modules/@trezor/utils/lib/arrayPartition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.arrayPartition = void 0;
    var arrayPartition = (array, condition) => array.reduce(([pass, fail], elem) => condition(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);
    exports2.arrayPartition = arrayPartition;
  }
});

// node_modules/@trezor/utils/lib/arrayShuffle.js
var require_arrayShuffle = __commonJS({
  "node_modules/@trezor/utils/lib/arrayShuffle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.arrayShuffle = void 0;
    var arrayShuffle = (array) => {
      const shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    exports2.arrayShuffle = arrayShuffle;
  }
});

// node_modules/@trezor/utils/lib/arrayToDictionary.js
var require_arrayToDictionary = __commonJS({
  "node_modules/@trezor/utils/lib/arrayToDictionary.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.arrayToDictionary = void 0;
    var validateKey = (key) => {
      if (["string", "number"].includes(typeof key)) {
        return true;
      }
      return false;
    };
    var arrayToDictionary = (array, getKey, multiple) => multiple ? array.reduce((prev, cur) => {
      var _a;
      const key = getKey(cur);
      if (validateKey(key)) {
        return Object.assign(Object.assign({}, prev), { [key]: [...(_a = prev[key]) !== null && _a !== void 0 ? _a : [], cur] });
      }
      return prev;
    }, {}) : array.reduce((prev, cur) => {
      const key = getKey(cur);
      if (validateKey(key)) {
        return Object.assign(Object.assign({}, prev), { [key]: cur });
      }
      return prev;
    }, {});
    exports2.arrayToDictionary = arrayToDictionary;
  }
});

// node_modules/@trezor/utils/lib/bytesToHumanReadable.js
var require_bytesToHumanReadable = __commonJS({
  "node_modules/@trezor/utils/lib/bytesToHumanReadable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bytesToHumanReadable = void 0;
    var units = ["B", "KB", "MB", "GB", "TB"];
    var bytesToHumanReadable = (bytes) => {
      let size = Math.abs(bytes);
      let i = 0;
      while (size >= 1024 || i >= units.length) {
        size /= 1024;
        i++;
      }
      return `${size.toFixed(1)} ${units[i]}`;
    };
    exports2.bytesToHumanReadable = bytesToHumanReadable;
  }
});

// node_modules/@trezor/utils/lib/capitalizeFirstLetter.js
var require_capitalizeFirstLetter = __commonJS({
  "node_modules/@trezor/utils/lib/capitalizeFirstLetter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.capitalizeFirstLetter = void 0;
    var capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    exports2.capitalizeFirstLetter = capitalizeFirstLetter;
  }
});

// node_modules/@trezor/utils/lib/cloneObject.js
var require_cloneObject = __commonJS({
  "node_modules/@trezor/utils/lib/cloneObject.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.cloneObject = void 0;
    var cloneObject = (obj) => {
      const jsonString = JSON.stringify(obj);
      if (jsonString === void 0) {
        return obj;
      }
      return JSON.parse(jsonString);
    };
    exports2.cloneObject = cloneObject;
  }
});

// node_modules/@trezor/utils/lib/countBytesInString.js
var require_countBytesInString = __commonJS({
  "node_modules/@trezor/utils/lib/countBytesInString.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.countBytesInString = void 0;
    var countBytesInString = (input) => encodeURI(input).split(/%..|./).length - 1;
    exports2.countBytesInString = countBytesInString;
  }
});

// node_modules/@trezor/utils/lib/createCooldown.js
var require_createCooldown = __commonJS({
  "node_modules/@trezor/utils/lib/createCooldown.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createCooldown = void 0;
    var createCooldown = (cooldownMs) => {
      let last = 0;
      return () => {
        const now = Date.now();
        if (now - last >= cooldownMs) {
          last = now;
          return true;
        }
        return false;
      };
    };
    exports2.createCooldown = createCooldown;
  }
});

// node_modules/@trezor/utils/lib/createDeferred.js
var require_createDeferred = __commonJS({
  "node_modules/@trezor/utils/lib/createDeferred.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createDeferred = void 0;
    var createDeferred = (id) => {
      let localResolve = () => {
      };
      let localReject = () => {
      };
      const promise = new Promise((resolve, reject) => {
        localResolve = resolve;
        localReject = reject;
      });
      return {
        id,
        resolve: localResolve,
        reject: localReject,
        promise
      };
    };
    exports2.createDeferred = createDeferred;
  }
});

// node_modules/@trezor/utils/lib/createDeferredManager.js
var require_createDeferredManager = __commonJS({
  "node_modules/@trezor/utils/lib/createDeferredManager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createDeferredManager = void 0;
    var createDeferred_1 = require_createDeferred();
    var createDeferredManager = (options) => {
      const { initialId = 0, timeout: defaultTimeout = 0, onTimeout } = options !== null && options !== void 0 ? options : {};
      const promises = [];
      let ID = initialId;
      let timeoutHandle;
      const length = () => promises.length;
      const nextId = () => ID;
      const replanTimeout = () => {
        const now = Date.now();
        const nearestDeadline = promises.reduce((prev, { deadline }) => (prev && deadline ? Math.min : Math.max)(prev, deadline), 0);
        if (timeoutHandle)
          clearTimeout(timeoutHandle);
        timeoutHandle = nearestDeadline ? setTimeout(timeoutCallback, Math.max(nearestDeadline - now, 0)) : void 0;
      };
      const timeoutCallback = () => {
        const now = Date.now();
        promises.filter((promise) => promise.deadline && promise.deadline <= now).forEach((promise) => {
          onTimeout === null || onTimeout === void 0 ? void 0 : onTimeout(promise.id);
          promise.deadline = 0;
        });
        replanTimeout();
      };
      const create = (timeout = defaultTimeout) => {
        const promiseId = ID++;
        const deferred = (0, createDeferred_1.createDeferred)(promiseId);
        const deadline = timeout && Date.now() + timeout;
        promises.push(Object.assign(Object.assign({}, deferred), { deadline }));
        if (timeout)
          replanTimeout();
        return { promiseId, promise: deferred.promise };
      };
      const extract = (promiseId) => {
        const index = promises.findIndex(({ id }) => id === promiseId);
        const [promise] = index >= 0 ? promises.splice(index, 1) : [void 0];
        if (promise === null || promise === void 0 ? void 0 : promise.deadline)
          replanTimeout();
        return promise;
      };
      const resolve = (promiseId, value) => {
        const promise = extract(promiseId);
        promise === null || promise === void 0 ? void 0 : promise.resolve(value);
        return !!promise;
      };
      const reject = (promiseId, error) => {
        const promise = extract(promiseId);
        promise === null || promise === void 0 ? void 0 : promise.reject(error);
        return !!promise;
      };
      const rejectAll = (error) => {
        promises.forEach((promise) => promise.reject(error));
        const deleted = promises.splice(0, promises.length);
        if (deleted.length)
          replanTimeout();
      };
      return { length, nextId, create, resolve, reject, rejectAll };
    };
    exports2.createDeferredManager = createDeferredManager;
  }
});

// node_modules/@trezor/utils/lib/createLazy.js
var require_createLazy = __commonJS({
  "node_modules/@trezor/utils/lib/createLazy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createLazy = void 0;
    var createDeferred_1 = require_createDeferred();
    var createLazy = (initLazy, disposeLazy) => {
      let value;
      let valuePromise;
      const get = () => value;
      const getPending = () => valuePromise === null || valuePromise === void 0 ? void 0 : valuePromise.promise;
      const dispose = () => {
        if (valuePromise) {
          valuePromise.reject(new Error("Disposed during initialization"));
          valuePromise = void 0;
        }
        if (value !== void 0) {
          disposeLazy === null || disposeLazy === void 0 ? void 0 : disposeLazy(value);
          value = void 0;
        }
      };
      const getOrInit = (...args) => {
        if (value !== void 0)
          return Promise.resolve(value);
        if (!valuePromise) {
          const deferred = (0, createDeferred_1.createDeferred)();
          valuePromise = deferred;
          initLazy(...args).then((val) => {
            value = val;
            valuePromise = void 0;
            deferred.resolve(val);
          }).catch((err) => {
            valuePromise = void 0;
            deferred.reject(err);
          });
        }
        return valuePromise.promise;
      };
      return { get, getPending, getOrInit, dispose };
    };
    exports2.createLazy = createLazy;
  }
});

// node_modules/@trezor/utils/lib/createTimeoutPromise.js
var require_createTimeoutPromise = __commonJS({
  "node_modules/@trezor/utils/lib/createTimeoutPromise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createTimeoutPromise = void 0;
    var createTimeoutPromise = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
    exports2.createTimeoutPromise = createTimeoutPromise;
  }
});

// node_modules/@trezor/utils/lib/getLocaleSeparators.js
var require_getLocaleSeparators = __commonJS({
  "node_modules/@trezor/utils/lib/getLocaleSeparators.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getLocaleSeparators = void 0;
    var getLocaleSeparators = (locale) => {
      var _a, _b;
      const numberFormat = new Intl.NumberFormat(locale);
      const parts = numberFormat.formatToParts(10000.1);
      const decimalSeparator = (_a = parts.find(({ type }) => type === "decimal")) === null || _a === void 0 ? void 0 : _a.value;
      const thousandsSeparator = (_b = parts.find(({ type }) => type === "group")) === null || _b === void 0 ? void 0 : _b.value;
      return { decimalSeparator, thousandsSeparator };
    };
    exports2.getLocaleSeparators = getLocaleSeparators;
  }
});

// node_modules/@trezor/utils/lib/getNumberFromPixelString.js
var require_getNumberFromPixelString = __commonJS({
  "node_modules/@trezor/utils/lib/getNumberFromPixelString.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getNumberFromPixelString = void 0;
    var getNumberFromPixelString = (size) => parseInt(size.replace("px", ""), 10);
    exports2.getNumberFromPixelString = getNumberFromPixelString;
  }
});

// node_modules/@trezor/utils/lib/getRandomNumberInRange.js
var require_getRandomNumberInRange = __commonJS({
  "node_modules/@trezor/utils/lib/getRandomNumberInRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRandomNumberInRange = void 0;
    var getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    exports2.getRandomNumberInRange = getRandomNumberInRange;
  }
});

// node_modules/@trezor/utils/lib/getSynchronize.js
var require_getSynchronize = __commonJS({
  "node_modules/@trezor/utils/lib/getSynchronize.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSynchronize = void 0;
    var getSynchronize = () => {
      let lock;
      return (action) => {
        const newLock = (lock !== null && lock !== void 0 ? lock : Promise.resolve()).catch(() => {
        }).then(action).finally(() => {
          if (lock === newLock) {
            lock = void 0;
          }
        });
        lock = newLock;
        return lock;
      };
    };
    exports2.getSynchronize = getSynchronize;
  }
});

// node_modules/@trezor/utils/lib/getWeakRandomId.js
var require_getWeakRandomId = __commonJS({
  "node_modules/@trezor/utils/lib/getWeakRandomId.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getWeakRandomId = void 0;
    var getWeakRandomId = (length) => {
      let id = "";
      const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < length; i++) {
        id += list.charAt(Math.floor(Math.random() * list.length));
      }
      return id;
    };
    exports2.getWeakRandomId = getWeakRandomId;
  }
});

// node_modules/@trezor/utils/lib/hasUppercaseLetter.js
var require_hasUppercaseLetter = __commonJS({
  "node_modules/@trezor/utils/lib/hasUppercaseLetter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.hasUppercaseLetter = void 0;
    var HAS_UPPERCASE_LATER_REGEXP = new RegExp("^(.*[A-Z].*)$");
    var hasUppercaseLetter = (value) => HAS_UPPERCASE_LATER_REGEXP.test(value);
    exports2.hasUppercaseLetter = hasUppercaseLetter;
  }
});

// node_modules/@trezor/utils/lib/isAscii.js
var require_isAscii = __commonJS({
  "node_modules/@trezor/utils/lib/isAscii.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isAscii = void 0;
    function isAscii(value) {
      if (!value)
        return true;
      return /^[\x00-\x7F]*$/.test(value);
    }
    exports2.isAscii = isAscii;
  }
});

// node_modules/@trezor/utils/lib/isHex.js
var require_isHex = __commonJS({
  "node_modules/@trezor/utils/lib/isHex.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isHex = void 0;
    var isHex = (str) => {
      const regExp = /^(0x|0X)?[0-9A-Fa-f]+$/g;
      return regExp.test(str);
    };
    exports2.isHex = isHex;
  }
});

// node_modules/@trezor/utils/lib/isNotUndefined.js
var require_isNotUndefined = __commonJS({
  "node_modules/@trezor/utils/lib/isNotUndefined.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isNotUndefined = void 0;
    var isNotUndefined = (item) => typeof item !== "undefined";
    exports2.isNotUndefined = isNotUndefined;
  }
});

// node_modules/@trezor/utils/lib/isUrl.js
var require_isUrl = __commonJS({
  "node_modules/@trezor/utils/lib/isUrl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isUrl = void 0;
    var URL_REGEXP = /^(http|ws)s?:\/\/[a-z0-9]([a-z0-9.-]+)?(:[0-9]{1,5})?((\/)?(([a-z0-9-_])+(\/)?)+)$/i;
    var isUrl = (value) => URL_REGEXP.test(value);
    exports2.isUrl = isUrl;
  }
});

// node_modules/@trezor/utils/lib/mergeDeepObject.js
var require_mergeDeepObject = __commonJS({
  "node_modules/@trezor/utils/lib/mergeDeepObject.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mergeDeepObject = void 0;
    var isObject = (obj) => {
      if (typeof obj === "object" && obj !== null) {
        if (typeof Object.getPrototypeOf === "function") {
          const prototype = Object.getPrototypeOf(obj);
          return prototype === Object.prototype || prototype === null;
        }
        return Object.prototype.toString.call(obj) === "[object Object]";
      }
      return false;
    };
    var mergeValuesWithPath = (target, value, [key, ...rest]) => {
      if (key === void 0) {
        return mergeValues(target, value);
      } else if (!isObject(target)) {
        return { [key]: mergeValuesWithPath({}, value, rest) };
      } else {
        return Object.assign(Object.assign({}, target), { [key]: mergeValuesWithPath(target[key], value, rest) });
      }
    };
    var mergeValues = (target, value) => {
      if (Array.isArray(target) && Array.isArray(value)) {
        return exports2.mergeDeepObject.options.mergeArrays ? Array.from(new Set(target.concat(value))) : value;
      } else if (isObject(target) && isObject(value)) {
        return (0, exports2.mergeDeepObject)(target, value);
      } else {
        return value;
      }
    };
    var mergeDeepObject = (...objects) => objects.reduce((result, current) => {
      if (Array.isArray(current)) {
        throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
      }
      Object.keys(current).forEach((key) => {
        if (["__proto__", "constructor", "prototype"].includes(key)) {
          return;
        }
        if (exports2.mergeDeepObject.options.dotNotation) {
          const [first, ...rest] = key.split(".");
          result[first] = mergeValuesWithPath(result[first], current[key], rest);
        } else {
          result[key] = mergeValues(result[key], current[key]);
        }
      });
      return result;
    }, {});
    exports2.mergeDeepObject = mergeDeepObject;
    var defaultOptions = {
      mergeArrays: true,
      dotNotation: false
    };
    exports2.mergeDeepObject.options = defaultOptions;
    exports2.mergeDeepObject.withOptions = (options, ...objects) => {
      exports2.mergeDeepObject.options = Object.assign(Object.assign({}, defaultOptions), options);
      const result = (0, exports2.mergeDeepObject)(...objects);
      exports2.mergeDeepObject.options = defaultOptions;
      return result;
    };
  }
});

// node_modules/@trezor/utils/lib/objectPartition.js
var require_objectPartition = __commonJS({
  "node_modules/@trezor/utils/lib/objectPartition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.objectPartition = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var objectPartition = (obj, keys) => keys.reduce(([included, excluded], key) => {
      const _a = excluded, _b = key, value = _a[_b], rest = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
      return typeof value !== "undefined" ? [Object.assign(Object.assign({}, included), { [key]: value }), rest] : [included, excluded];
    }, [{}, obj]);
    exports2.objectPartition = objectPartition;
  }
});

// node_modules/@trezor/utils/lib/parseElectrumUrl.js
var require_parseElectrumUrl = __commonJS({
  "node_modules/@trezor/utils/lib/parseElectrumUrl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parseElectrumUrl = void 0;
    var ELECTRUM_URL_REGEX = /^(?:([a-zA-Z0-9.-]+)|\[([a-f0-9:]+)\]):([0-9]{1,5}):([ts])$/;
    var parseElectrumUrl = (url) => {
      var _a;
      const match = url.match(ELECTRUM_URL_REGEX);
      if (!match)
        return void 0;
      return {
        host: (_a = match[1]) !== null && _a !== void 0 ? _a : match[2],
        port: Number.parseInt(match[3], 10),
        protocol: match[4]
      };
    };
    exports2.parseElectrumUrl = parseElectrumUrl;
  }
});

// node_modules/@trezor/utils/lib/parseHostname.js
var require_parseHostname = __commonJS({
  "node_modules/@trezor/utils/lib/parseHostname.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parseHostname = void 0;
    var HOSTNAME_REGEX = /^([a-z0-9.+-]+:\/\/)?([a-z0-9.-]+)([:/][^:/]+)*\/?$/i;
    var parseHostname = (url) => {
      var _a, _b;
      return (_b = (_a = url.match(HOSTNAME_REGEX)) === null || _a === void 0 ? void 0 : _a[2]) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    };
    exports2.parseHostname = parseHostname;
  }
});

// node_modules/@trezor/utils/lib/promiseAllSequence.js
var require_promiseAllSequence = __commonJS({
  "node_modules/@trezor/utils/lib/promiseAllSequence.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.promiseAllSequence = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var promiseAllSequence = (actions) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const results = [];
      for (let i = 0; i < actions.length; ++i) {
        const result = yield actions[i]();
        results.push(result);
      }
      return results;
    });
    exports2.promiseAllSequence = promiseAllSequence;
  }
});

// node_modules/@trezor/utils/lib/redactUserPath.js
var require_redactUserPath = __commonJS({
  "node_modules/@trezor/utils/lib/redactUserPath.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.redactUserPathFromString = exports2.startOfUserPathRegex = void 0;
    exports2.startOfUserPathRegex = /([/\\][Uu]sers[/\\]{1,4})([^"^'^[^\]^/^\\]*)/g;
    var redactUserPathFromString = (text) => text.replace(exports2.startOfUserPathRegex, "$1[*]");
    exports2.redactUserPathFromString = redactUserPathFromString;
  }
});

// node_modules/@trezor/utils/lib/scheduleAction.js
var require_scheduleAction = __commonJS({
  "node_modules/@trezor/utils/lib/scheduleAction.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scheduleAction = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var isArray = (attempts) => Array.isArray(attempts);
    var abortedBySignal = () => new Error("Aborted by signal");
    var abortedByDeadline = () => new Error("Aborted by deadline");
    var abortedByTimeout = () => new Error("Aborted by timeout");
    var resolveAfterMs = (ms, clear) => new Promise((resolve, reject) => {
      if (clear.aborted)
        return reject();
      if (ms === void 0)
        return resolve();
      let timeout;
      const onClear = () => {
        clearTimeout(timeout);
        clear.removeEventListener("abort", onClear);
        reject();
      };
      timeout = setTimeout(() => {
        clear.removeEventListener("abort", onClear);
        resolve();
      }, ms);
      clear.addEventListener("abort", onClear);
    });
    var rejectAfterMs = (ms, reason, clear) => new Promise((_, reject) => {
      if (clear.aborted)
        return reject();
      let timeout;
      const onClear = () => {
        clearTimeout(timeout);
        clear.removeEventListener("abort", onClear);
        reject();
      };
      timeout = setTimeout(() => {
        clear.removeEventListener("abort", onClear);
        reject(reason());
      }, ms);
      clear.addEventListener("abort", onClear);
    });
    var maybeRejectAfterMs = (ms, reason, clear) => ms === void 0 ? [] : [rejectAfterMs(ms, reason, clear)];
    var rejectWhenAborted = (signal, clear) => new Promise((_, reject) => {
      if (clear.aborted)
        return reject();
      if (signal === null || signal === void 0 ? void 0 : signal.aborted)
        return reject(abortedBySignal());
      const onAbort = () => reject(abortedBySignal());
      signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", onAbort);
      const onClear = () => {
        signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", onAbort);
        clear.removeEventListener("abort", onClear);
        reject();
      };
      clear.addEventListener("abort", onClear);
    });
    var resolveAction = (action, clear) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const aborter = new AbortController();
      const onClear = () => aborter.abort();
      if (clear.aborted)
        onClear();
      clear.addEventListener("abort", onClear);
      try {
        return yield new Promise((resolve) => resolve(action(aborter.signal)));
      } finally {
        clear.removeEventListener("abort", onClear);
      }
    });
    var attemptLoop = (attempts, attempt, failure, clear) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      for (let a = 0; a < attempts - 1; a++) {
        if (clear.aborted)
          break;
        const aborter = new AbortController();
        const onClear = () => aborter.abort();
        clear.addEventListener("abort", onClear);
        try {
          return yield attempt(a, aborter.signal);
        } catch (error) {
          onClear();
          yield failure(a, error);
        } finally {
          clear.removeEventListener("abort", onClear);
        }
      }
      return clear.aborted ? Promise.reject() : attempt(attempts - 1, clear);
    });
    var scheduleAction = (action, params) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const { signal, delay, attempts, timeout, deadline, gap, attemptFailureHandler } = params;
      const deadlineMs = deadline && deadline - Date.now();
      const attemptCount = isArray(attempts) ? attempts.length : attempts !== null && attempts !== void 0 ? attempts : deadline ? Infinity : 1;
      const clearAborter = new AbortController();
      const clear = clearAborter.signal;
      const getParams = isArray(attempts) ? (attempt) => attempts[attempt] : () => ({ timeout, gap });
      try {
        return yield Promise.race([
          rejectWhenAborted(signal, clear),
          ...maybeRejectAfterMs(deadlineMs, abortedByDeadline, clear),
          resolveAfterMs(delay, clear).then(() => attemptLoop(attemptCount, (attempt, abort) => Promise.race([
            ...maybeRejectAfterMs(getParams(attempt).timeout, abortedByTimeout, clear),
            resolveAction(action, abort)
          ]), (attempt, error) => {
            var _a;
            const errorHandlerResult = attemptFailureHandler === null || attemptFailureHandler === void 0 ? void 0 : attemptFailureHandler(error);
            return errorHandlerResult ? Promise.reject(errorHandlerResult) : resolveAfterMs((_a = getParams(attempt).gap) !== null && _a !== void 0 ? _a : 0, clear);
          }, clear))
        ]);
      } finally {
        clearAborter.abort();
      }
    });
    exports2.scheduleAction = scheduleAction;
  }
});

// node_modules/@trezor/utils/lib/splitStringEveryNCharacters.js
var require_splitStringEveryNCharacters = __commonJS({
  "node_modules/@trezor/utils/lib/splitStringEveryNCharacters.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.splitStringEveryNCharacters = void 0;
    function splitStringEveryNCharacters(value, n) {
      var _a;
      if (n === 0) {
        return [];
      }
      const regex = new RegExp(`.{1,${n}}`, "g");
      return (_a = value.match(regex)) !== null && _a !== void 0 ? _a : [];
    }
    exports2.splitStringEveryNCharacters = splitStringEveryNCharacters;
  }
});

// node_modules/@trezor/utils/lib/throwError.js
var require_throwError = __commonJS({
  "node_modules/@trezor/utils/lib/throwError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.throwError = void 0;
    var throwError = (reason) => {
      throw new Error(reason);
    };
    exports2.throwError = throwError;
  }
});

// node_modules/@trezor/utils/lib/topologicalSort.js
var require_topologicalSort = __commonJS({
  "node_modules/@trezor/utils/lib/topologicalSort.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.topologicalSort = void 0;
    var arrayPartition_1 = require_arrayPartition();
    var topologicalSort = (elements, precedes, tie) => {
      const result = [];
      const filterRoots = (verts) => (0, arrayPartition_1.arrayPartition)(verts, (succ) => !verts.some((pred) => precedes(pred, succ)));
      let elem = elements;
      while (elem.length) {
        const [roots, rest] = filterRoots(elem);
        if (!roots.length)
          throw new Error("Cycle detected");
        result.push(...tie ? roots.sort(tie) : roots);
        elem = rest;
      }
      return result;
    };
    exports2.topologicalSort = topologicalSort;
  }
});

// node_modules/@trezor/utils/lib/truncateMiddle.js
var require_truncateMiddle = __commonJS({
  "node_modules/@trezor/utils/lib/truncateMiddle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.truncateMiddle = void 0;
    var truncateMiddle = (text, startChars, endChars) => {
      if (text.length <= startChars + endChars)
        return text;
      const start = text.substring(0, startChars);
      const end = text.substring(text.length - endChars, text.length);
      return `${start}…${end}`;
    };
    exports2.truncateMiddle = truncateMiddle;
  }
});

// node_modules/@trezor/utils/lib/typedEventEmitter.js
var require_typedEventEmitter = __commonJS({
  "node_modules/@trezor/utils/lib/typedEventEmitter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypedEmitter = void 0;
    var events_1 = require_events();
    var TypedEmitter = class extends events_1.EventEmitter {
      listenerCount(eventName) {
        return super.listenerCount(eventName);
      }
    };
    exports2.TypedEmitter = TypedEmitter;
  }
});

// node_modules/@trezor/utils/lib/urlToOnion.js
var require_urlToOnion = __commonJS({
  "node_modules/@trezor/utils/lib/urlToOnion.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.urlToOnion = void 0;
    var urlToOnion = (url, onionDomains) => {
      var _a;
      const [, protocol, subdomain, domain, rest] = (_a = url.match(/^(http|ws)s?:\/\/([^:/]+\.)?([^/.]+\.[^/.]+)(\/.*)?$/i)) !== null && _a !== void 0 ? _a : [];
      if (!domain || !onionDomains[domain])
        return;
      return `${protocol}://${subdomain !== null && subdomain !== void 0 ? subdomain : ""}${onionDomains[domain]}${rest !== null && rest !== void 0 ? rest : ""}`;
    };
    exports2.urlToOnion = urlToOnion;
  }
});

// node_modules/@trezor/utils/lib/logs.js
var require_logs = __commonJS({
  "node_modules/@trezor/utils/lib/logs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Log = void 0;
    var Log = class {
      constructor(prefix, enabled, logWriter) {
        this.css = "";
        this.MAX_ENTRIES = 100;
        this.prefix = prefix;
        this.enabled = enabled;
        this.messages = [];
        if (logWriter) {
          this.logWriter = logWriter;
        }
      }
      setColors(colors) {
        this.css = typeof window !== "undefined" && colors[this.prefix] ? colors[this.prefix] : "";
      }
      addMessage({ level, prefix, timestamp }, ...args) {
        const message = {
          level,
          prefix,
          css: this.css,
          message: args,
          timestamp: timestamp || Date.now()
        };
        this.messages.push(message);
        if (this.logWriter) {
          try {
            this.logWriter.add(message);
          } catch (err) {
            console.error("There was an error adding log message", err, message);
          }
        }
        if (this.messages.length > this.MAX_ENTRIES) {
          this.messages.shift();
        }
      }
      setWriter(logWriter) {
        this.logWriter = logWriter;
      }
      log(...args) {
        this.addMessage({ level: "log", prefix: this.prefix }, ...args);
        if (this.enabled) {
          console.log(`%c${this.prefix}`, this.css, ...args);
        }
      }
      error(...args) {
        this.addMessage({ level: "error", prefix: this.prefix }, ...args);
        if (this.enabled) {
          console.error(`%c${this.prefix}`, this.css, ...args);
        }
      }
      info(...args) {
        this.addMessage({ level: "info", prefix: this.prefix }, ...args);
        if (this.enabled) {
          console.info(`%c${this.prefix}`, this.css, ...args);
        }
      }
      warn(...args) {
        this.addMessage({ level: "warn", prefix: this.prefix }, ...args);
        if (this.enabled) {
          console.warn(`%c${this.prefix}`, this.css, ...args);
        }
      }
      debug(...args) {
        this.addMessage({ level: "debug", prefix: this.prefix }, ...args);
        if (this.enabled) {
          if (this.css) {
            console.log(`%c${this.prefix}`, this.css, ...args);
          } else {
            console.log(this.prefix, ...args);
          }
        }
      }
      getLog() {
        return this.messages;
      }
    };
    exports2.Log = Log;
  }
});

// node_modules/@trezor/utils/lib/logsManager.js
var require_logsManager = __commonJS({
  "node_modules/@trezor/utils/lib/logsManager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LogsManager = void 0;
    var logs_1 = require_logs();
    var LogsManager = class {
      constructor({ colors }) {
        this.logs = {};
        this.colors = {};
        this.colors = colors;
      }
      initLog(prefix, enabled, logWriter) {
        const instanceWriter = logWriter || this.writer;
        const instance = new logs_1.Log(prefix, !!enabled, instanceWriter);
        if (this.colors) {
          instance.setColors(this.colors);
        }
        this.logs[prefix] = instance;
        return instance;
      }
      setLogWriter(logWriterFactory) {
        Object.keys(this.logs).forEach((key) => {
          this.writer = logWriterFactory();
          if (this.writer) {
            this.logs[key].setWriter(this.writer);
            const { messages } = this.logs[key];
            messages.forEach((message) => {
              var _a;
              (_a = this.writer) === null || _a === void 0 ? void 0 : _a.add(message);
            });
          }
        });
      }
      enableLog(enabled) {
        Object.keys(this.logs).forEach((key) => {
          this.logs[key].enabled = !!enabled;
        });
      }
      enableLogByPrefix(prefix, enabled) {
        if (this.logs[prefix]) {
          this.logs[prefix].enabled = enabled;
        }
      }
      getLog() {
        let logs = [];
        Object.keys(this.logs).forEach((key) => {
          logs = logs.concat(this.logs[key].messages);
        });
        logs.sort((a, b) => a.timestamp - b.timestamp);
        return logs;
      }
    };
    exports2.LogsManager = LogsManager;
  }
});

// node_modules/@trezor/utils/lib/bigNumber.js
var require_bigNumber = __commonJS({
  "node_modules/@trezor/utils/lib/bigNumber.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BigNumber = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var bignumber_js_1 = tslib_1.__importDefault(require_bignumber());
    exports2.BigNumber = bignumber_js_1.default.clone({
      EXPONENTIAL_AT: 1e9
    });
  }
});

// node_modules/@trezor/utils/lib/throttler.js
var require_throttler = __commonJS({
  "node_modules/@trezor/utils/lib/throttler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Throttler = void 0;
    var Throttler = class {
      constructor(delay) {
        this.delay = delay;
        this.intervals = {};
        this.callbacks = {};
      }
      throttle(id, callback) {
        if (this.intervals[id]) {
          this.callbacks[id] = callback;
        } else {
          callback();
          this.intervals[id] = setInterval(() => this.tick(id), this.delay);
        }
      }
      tick(id) {
        if (this.callbacks[id]) {
          this.callbacks[id]();
          delete this.callbacks[id];
        } else {
          this.cancel(id);
        }
      }
      cancel(id) {
        clearInterval(this.intervals[id]);
        delete this.intervals[id];
        delete this.callbacks[id];
      }
      dispose() {
        Object.keys(this.intervals).forEach(this.cancel, this);
      }
    };
    exports2.Throttler = Throttler;
  }
});

// node_modules/@trezor/utils/lib/extractUrlsFromText.js
var require_extractUrlsFromText = __commonJS({
  "node_modules/@trezor/utils/lib/extractUrlsFromText.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.extractUrlsFromText = void 0;
    var URL_REGEX = /\b(?:https?:\/\/|www\.)[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]+\b|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?=\b|\s|$|\])/gi;
    var extractUrlsFromText = (text) => {
      const urls = [];
      const textParts = [];
      let lastIndex = 0;
      const matches = [...text.matchAll(URL_REGEX)];
      matches.forEach((match) => {
        const url = match[0];
        const index = match.index !== void 0 ? match.index : -1;
        if (lastIndex < index) {
          textParts.push(text.slice(lastIndex, index));
        }
        urls.push(url);
        lastIndex = index + url.length;
      });
      if (lastIndex < text.length) {
        textParts.push(text.slice(lastIndex));
      }
      if (textParts.length === 0 && urls.length > 0) {
        textParts.push("");
      }
      return { textParts, urls };
    };
    exports2.extractUrlsFromText = extractUrlsFromText;
  }
});

// node_modules/@trezor/utils/lib/isFullPath.js
var require_isFullPath = __commonJS({
  "node_modules/@trezor/utils/lib/isFullPath.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isFullPath = void 0;
    var isFullPath = (path) => {
      const fullPathPattern = /^(\/|([a-zA-Z]:\\))/;
      return fullPathPattern.test(path);
    };
    exports2.isFullPath = isFullPath;
  }
});

// node_modules/@trezor/utils/lib/index.js
var require_lib = __commonJS({
  "node_modules/@trezor/utils/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.xssFilters = exports2.versionUtils = exports2.enumUtils = exports2.bufferUtils = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    exports2.bufferUtils = tslib_1.__importStar(require_bufferUtils());
    exports2.enumUtils = tslib_1.__importStar(require_enumUtils());
    exports2.versionUtils = tslib_1.__importStar(require_versionUtils());
    exports2.xssFilters = tslib_1.__importStar(require_xssFilters());
    tslib_1.__exportStar(require_addDashesToSpaces(), exports2);
    tslib_1.__exportStar(require_arrayDistinct(), exports2);
    tslib_1.__exportStar(require_arrayPartition(), exports2);
    tslib_1.__exportStar(require_arrayShuffle(), exports2);
    tslib_1.__exportStar(require_arrayToDictionary(), exports2);
    tslib_1.__exportStar(require_bytesToHumanReadable(), exports2);
    tslib_1.__exportStar(require_capitalizeFirstLetter(), exports2);
    tslib_1.__exportStar(require_cloneObject(), exports2);
    tslib_1.__exportStar(require_countBytesInString(), exports2);
    tslib_1.__exportStar(require_createCooldown(), exports2);
    tslib_1.__exportStar(require_createDeferred(), exports2);
    tslib_1.__exportStar(require_createDeferredManager(), exports2);
    tslib_1.__exportStar(require_createLazy(), exports2);
    tslib_1.__exportStar(require_createTimeoutPromise(), exports2);
    tslib_1.__exportStar(require_getLocaleSeparators(), exports2);
    tslib_1.__exportStar(require_getNumberFromPixelString(), exports2);
    tslib_1.__exportStar(require_getRandomNumberInRange(), exports2);
    tslib_1.__exportStar(require_getSynchronize(), exports2);
    tslib_1.__exportStar(require_getWeakRandomId(), exports2);
    tslib_1.__exportStar(require_hasUppercaseLetter(), exports2);
    tslib_1.__exportStar(require_isAscii(), exports2);
    tslib_1.__exportStar(require_isHex(), exports2);
    tslib_1.__exportStar(require_isNotUndefined(), exports2);
    tslib_1.__exportStar(require_isUrl(), exports2);
    tslib_1.__exportStar(require_mergeDeepObject(), exports2);
    tslib_1.__exportStar(require_objectPartition(), exports2);
    tslib_1.__exportStar(require_parseElectrumUrl(), exports2);
    tslib_1.__exportStar(require_parseHostname(), exports2);
    tslib_1.__exportStar(require_promiseAllSequence(), exports2);
    tslib_1.__exportStar(require_redactUserPath(), exports2);
    tslib_1.__exportStar(require_scheduleAction(), exports2);
    tslib_1.__exportStar(require_splitStringEveryNCharacters(), exports2);
    tslib_1.__exportStar(require_throwError(), exports2);
    tslib_1.__exportStar(require_topologicalSort(), exports2);
    tslib_1.__exportStar(require_truncateMiddle(), exports2);
    tslib_1.__exportStar(require_typedEventEmitter(), exports2);
    tslib_1.__exportStar(require_urlToOnion(), exports2);
    tslib_1.__exportStar(require_logs(), exports2);
    tslib_1.__exportStar(require_logsManager(), exports2);
    tslib_1.__exportStar(require_bigNumber(), exports2);
    tslib_1.__exportStar(require_throttler(), exports2);
    tslib_1.__exportStar(require_extractUrlsFromText(), exports2);
    tslib_1.__exportStar(require_isFullPath(), exports2);
  }
});

// node_modules/@trezor/connect/lib/utils/debug.js
var require_debug = __commonJS({
  "node_modules/@trezor/connect/lib/utils/debug.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getLog = exports2.enableLogByPrefix = exports2.enableLog = exports2.setLogWriter = exports2.initLog = void 0;
    var utils_1 = require_lib();
    var green = "#bada55";
    var blue = "#20abd8";
    var orange = "#f4a744";
    var yellow = "#fbd948";
    var colors = {
      "@trezor/connect": `color: ${blue}; background: #000;`,
      "@trezor/connect-web": `color: ${blue}; background: #000;`,
      "@trezor/connect-webextension": `color: ${blue}; background: #000;`,
      IFrame: `color: ${orange}; background: #000;`,
      Core: `color: ${orange}; background: #000;`,
      DeviceList: `color: ${green}; background: #000;`,
      Device: `color: ${green}; background: #000;`,
      DeviceCommands: `color: ${green}; background: #000;`,
      "@trezor/transport": `color: ${green}; background: #000;`,
      InteractionTimeout: `color: ${green}; background: #000;`,
      "@trezor/connect-popup": `color: ${yellow}; background: #000;`
    };
    var logsManager = new utils_1.LogsManager({ colors });
    exports2.initLog = logsManager.initLog.bind(logsManager);
    exports2.setLogWriter = logsManager.setLogWriter.bind(logsManager);
    exports2.enableLog = logsManager.enableLog.bind(logsManager);
    exports2.enableLogByPrefix = logsManager.enableLogByPrefix.bind(logsManager);
    exports2.getLog = logsManager.getLog.bind(logsManager);
  }
});

// node_modules/@trezor/connect/lib/data/config.js
var require_config = __commonJS({
  "node_modules/@trezor/connect/lib/data/config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.config = void 0;
    var constants_1 = require_constants();
    exports2.config = {
      webusb: constants_1.TREZOR_USB_DESCRIPTORS,
      whitelist: [
        { origin: "chrome-extension://imloifkgjagghnncjkhggdhalmcnfklk", priority: 1 },
        { origin: "chrome-extension://niebkpllfhmpfbffbfifagfgoamhpflf", priority: 1 },
        { origin: "file://", priority: 2 },
        { origin: "trezor.io", priority: 0 },
        { origin: "sldev.cz", priority: 0 },
        { origin: "localhost", priority: 0 },
        { origin: "trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad.onion", priority: 0 }
      ],
      management: [{ origin: "trezor.io" }, { origin: "sldev.cz" }, { origin: "localhost" }],
      knownHosts: [
        {
          origin: "imloifkgjagghnncjkhggdhalmcnfklk",
          label: "Trezor Password Manager (Develop)",
          icon: ""
        },
        { origin: "niebkpllfhmpfbffbfifagfgoamhpflf", label: "Trezor Password Manager", icon: "" },
        {
          origin: "mnpfhpndmjholfdlhpkjfmjkgppmodaf",
          label: "MetaMask",
          icon: ""
        },
        {
          origin: "webextension@metamask.io",
          label: "MetaMask",
          icon: ""
        },
        {
          origin: "nkbihfbeogaeaoehlefnkodbefgpgknn",
          label: "MetaMask",
          icon: ""
        },
        {
          origin: "bpcdaglidgnlggelgbjfagekoapjmccp",
          label: "Rainbow DEV",
          icon: ""
        },
        {
          origin: "opfgelmcmbiajamepnmloijbpoleiama",
          label: "Rainbow",
          icon: ""
        },
        {
          origin: "acmacodkjbdgmoleebolmdjonilkdbch",
          label: "Rabby",
          icon: ""
        },
        {
          origin: "ehnpnhnhcickeknioaiodjmielfaoajd",
          label: "Ambire DEV",
          icon: ""
        },
        {
          origin: "ehgjhhccekdedpbkifaojjaefeohnoea",
          label: "Ambire",
          icon: ""
        },
        { origin: "file://", label: " ", icon: "" }
      ],
      onionDomains: {
        "trezor.io": "trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad.onion"
      },
      assets: [
        {
          name: "coins",
          url: "./data/coins.json"
        },
        {
          name: "coinsEth",
          url: "./data/coins-eth.json"
        },
        {
          name: "bridge",
          url: "./data/bridge/releases.json"
        },
        {
          name: "firmware-t1b1",
          url: "./data/firmware/t1b1/releases.json"
        },
        {
          name: "firmware-t2t1",
          url: "./data/firmware/t2t1/releases.json"
        },
        {
          name: "firmware-t2b1",
          url: "./data/firmware/t2b1/releases.json"
        },
        {
          name: "firmware-t3t1",
          url: "./data/firmware/t3t1/releases.json"
        }
      ],
      messages: "./data/messages/messages.json",
      supportedBrowsers: {
        chrome: {
          version: 59,
          download: "https://www.google.com/chrome/",
          update: "https://support.google.com/chrome/answer/95414"
        },
        chromium: {
          version: 59,
          download: "https://www.chromium.org/",
          update: "https://www.chromium.org/"
        },
        electron: {
          version: 0,
          download: "https://www.electronjs.org/",
          update: "https://www.electronjs.org/"
        },
        firefox: {
          version: 54,
          download: "https://www.mozilla.org/en-US/firefox/new/",
          update: "https://support.mozilla.org/en-US/kb/update-firefox-latest-version"
        },
        brave: {
          version: 59,
          download: "https://brave.com/download/",
          update: "https://brave.com/download/"
        },
        edge: {
          version: 79,
          download: "https://www.microsoft.com/en-us/edge",
          update: "https://www.microsoft.com/en-us/edge"
        },
        opera: {
          version: 95,
          download: "https://www.opera.com/download",
          update: "https://www.opera.com/download"
        }
      },
      supportedFirmware: [
        {
          coin: ["xrp", "txrp"],
          methods: ["getAccountInfo"],
          min: { T1B1: "0", T2T1: "2.1.0" },
          max: void 0,
          comment: [
            "Since firmware 2.1.0 there is a new protobuf field 'destination_tag' in RippleSignTx"
          ]
        },
        {
          coin: ["bnb"],
          min: { T1B1: "1.9.0", T2T1: "2.3.0" },
          comment: [
            "There were protobuf backwards incompatible changes with introduction of 1.9.0/2.3.0 firmwares"
          ]
        },
        {
          coin: ["eth", "tsep", "thol"],
          min: { T1B1: "1.8.0", T2T1: "2.1.0" },
          comment: ["There were protobuf backwards incompatible changes."]
        },
        {
          coin: ["ada", "tada"],
          min: { T1B1: "0", T2T1: "2.4.3" },
          comment: ["Since 2.4.3 there is initialize.derive_cardano message"]
        },
        {
          methods: ["rippleGetAddress", "rippleSignTransaction"],
          min: { T1B1: "0", T2T1: "2.1.0" },
          comment: [
            "Since firmware 2.1.0 there is a new protobuf field 'destination_tag' in RippleSignTx"
          ]
        },
        {
          methods: ["cardanoGetAddress", "cardanoGetPublicKey"],
          min: { T1B1: "0", T2T1: "2.4.3" },
          comment: ["Since 2.4.3 Cardano derivation behavior has changed"]
        },
        {
          methods: ["cardanoSignTransaction"],
          min: { T1B1: "0", T2T1: "2.6.0" },
          comment: ["Before 2.6.0 not all Cardano transactions were supported"]
        },
        {
          methods: ["cardanoGetNativeScriptHash"],
          min: { T1B1: "0", T2T1: "2.4.3" },
          comment: ["Since 2.4.3 Cardano derivation behavior has changed"]
        },
        {
          methods: ["tezosSignTransaction"],
          min: { T1B1: "0", T2T1: "2.1.8" },
          comment: [
            "Since 2.1.8 there are new protobuf fields in tezos transaction (Babylon fork)"
          ]
        },
        {
          methods: ["stellarSignTransaction"],
          min: { T1B1: "1.9.0", T2T1: "2.3.0" },
          comment: [
            "There were protobuf backwards incompatible changes with introduction of 1.9.0/2.3.0 firmwares"
          ]
        },
        {
          capabilities: ["replaceTransaction", "amountUnit"],
          min: { T1B1: "1.9.4", T2T1: "2.3.5" },
          comment: ["new sign tx process since 1.9.4/2.3.5"]
        },
        {
          capabilities: ["decreaseOutput"],
          min: { T1B1: "1.10.0", T2T1: "2.4.0" },
          comment: ["allow reduce output in RBF transaction since 1.10.0/2.4.0"]
        },
        {
          capabilities: ["eip1559"],
          min: { T1B1: "1.10.4", T2T1: "2.4.2" },
          comment: ["new eth transaction pricing mechanism (EIP1559) since 1.10.4/2.4.2"]
        },
        {
          capabilities: ["taproot", "signMessageNoScriptType"],
          min: { T1B1: "1.10.4", T2T1: "2.4.3" },
          comment: [
            "new btc accounts taproot since 1.10.4/2.4.3 (BTC + TEST only)",
            "SignMessage with no_script_type support"
          ]
        },
        {
          coin: ["dcr", "tdcr"],
          methods: ["signTransaction"],
          min: { T1B1: "1.10.1", T2T1: "2.4.0" },
          comment: [""]
        },
        {
          methods: ["ethereumSignTypedData"],
          min: { T1B1: "1.10.5", T2T1: "2.4.3" },
          comment: ["EIP-712 typed signing support added in 1.10.5/2.4.3"]
        },
        {
          capabilities: ["eip712-domain-only"],
          min: { T1B1: "1.10.6", T2T1: "2.4.4" },
          comment: ["EIP-712 domain-only signing, when primaryType=EIP712Domain"]
        },
        {
          capabilities: ["coinjoin"],
          methods: [
            "authorizeCoinjoin",
            "cancelCoinjoinAuthorization",
            "getOwnershipId",
            "getOwnershipProof",
            "setBusy",
            "unlockPath"
          ],
          min: { T1B1: "1.12.1", T2T1: "2.5.3" }
        },
        {
          methods: ["showDeviceTutorial", "authenticateDevice"],
          min: { T1B1: "0", T2T1: "0", T2B1: "2.6.1" },
          comment: ["Only on T2B1"]
        },
        {
          methods: ["rebootToBootloader"],
          min: { T1B1: "1.10.0", T2T1: "2.6.0" }
        },
        {
          methods: ["getFirmwareHash"],
          min: { T1B1: "1.11.1", T2T1: "2.5.1" }
        },
        {
          methods: ["solanaGetPublicKey", "solanaGetAddress", "solanaSignTransaction"],
          min: { T1B1: "0", T2T1: "2.6.4", T2B1: "2.6.4" }
        },
        {
          capabilities: ["chunkify"],
          min: { T1B1: "0", T2T1: "2.6.3", T2B1: "2.6.3" },
          comment: [
            "Since firmware 2.6.3 there is a new protobuf field 'chunkify' in almost all getAddress and signTx methods"
          ]
        },
        {
          methods: ["changeLanguage"],
          min: {
            T1B1: "0",
            T2T1: "2.7.0",
            T2B1: "2.7.0",
            T3B1: "2.8.1",
            T3T1: "2.7.1"
          }
        }
      ]
    };
  }
});

// node_modules/@trezor/connect/lib/utils/urlUtils.js
var require_urlUtils = __commonJS({
  "node_modules/@trezor/connect/lib/utils/urlUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getOnionDomain = exports2.getHost = exports2.getOrigin = void 0;
    var utils_1 = require_lib();
    var getOrigin = (url) => {
      var _a;
      if (typeof url !== "string")
        return "unknown";
      if (url.indexOf("file://") === 0)
        return "file://";
      const [origin] = (_a = url.match(/^https?:\/\/[^/]+/)) !== null && _a !== void 0 ? _a : [];
      return origin !== null && origin !== void 0 ? origin : "unknown";
    };
    exports2.getOrigin = getOrigin;
    var getHost = (url) => {
      var _a;
      if (typeof url !== "string")
        return;
      const [, , uri] = (_a = url.match(/^(https?):\/\/([^:/]+)?/i)) !== null && _a !== void 0 ? _a : [];
      if (uri) {
        const parts = uri.split(".");
        return parts.length > 2 ? parts.slice(parts.length - 2, parts.length).join(".") : uri;
      }
    };
    exports2.getHost = getHost;
    var getOnionDomain = (url, dict) => {
      var _a;
      if (Array.isArray(url))
        return url.map((u) => {
          var _a2;
          return (_a2 = (0, utils_1.urlToOnion)(u, dict)) !== null && _a2 !== void 0 ? _a2 : u;
        });
      if (typeof url === "string")
        return (_a = (0, utils_1.urlToOnion)(url, dict)) !== null && _a !== void 0 ? _a : url;
      return url;
    };
    exports2.getOnionDomain = getOnionDomain;
  }
});

// node_modules/@trezor/connect-web/lib/iframe/inlineStyles.js
var require_inlineStyles = __commonJS({
  "node_modules/@trezor/connect-web/lib/iframe/inlineStyles.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var css = '.trezorconnect-container{position:fixed!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;z-index:10000!important;width:100%!important;height:100%!important;top:0!important;left:0!important;background:rgba(0,0,0,.35)!important;overflow:auto!important;padding:20px!important;margin:0!important}.trezorconnect-container .trezorconnect-window{position:relative!important;display:block!important;width:370px!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;margin:auto!important;border-radius:3px!important;background-color:#fff!important;text-align:center!important;overflow:hidden!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head{text-align:left;padding:12px 24px!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-logo{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close{cursor:pointer!important;height:24px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close svg{fill:#757575;-webkit-transition:fill .3s ease-in-out!important;transition:fill .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close:hover svg{fill:#494949}.trezorconnect-container .trezorconnect-window .trezorconnect-body{padding:24px 24px 32px!important;background:#FBFBFB!important;border-top:1px solid #EBEBEB}.trezorconnect-container .trezorconnect-window .trezorconnect-body h3{color:#505050!important;font-size:16px!important;font-weight:500!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body p{margin:8px 0 24px!important;font-weight:400!important;color:#A9A9A9!important;font-size:12px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button{width:100%!important;padding:12px 24px!important;margin:0!important;border-radius:3px!important;font-size:14px!important;font-weight:300!important;cursor:pointer!important;background:#01B757!important;color:#fff!important;border:0!important;-webkit-transition:background-color .3s ease-in-out!important;transition:background-color .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:hover{background-color:#00AB51!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:active{background-color:#009546!important}/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0IiwiJHN0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLHlCQUNJLFNBQUEsZ0JBQ0EsUUFBQSxzQkFDQSxRQUFBLHVCQUNBLFFBQUEsc0JBRUEsUUFBQSxlQUNBLG1CQUFBLG1CQUNBLHNCQUFBLGlCQUNBLHVCQUFBLGlCQUNBLG1CQUFBLGlCQUNBLGVBQUEsaUJBRUEsa0JBQUEsaUJBQ0Esb0JBQUEsaUJBQ0EsZUFBQSxpQkNmTSxZQUFhLGlCREFyQixRQUFTLGdCQWtCSCxNQUFBLGVBQ0EsT0FBQSxlQUNBLElBQUEsWUFDQSxLQUFBLFlBQ0EsV0FBQSwwQkFDQSxTQUFBLGVBQ0EsUUFBQSxlQUNBLE9BQUEsWUNkUiwrQ0RYRSxTQUFVLG1CQTZCQSxRQUFBLGdCQUNBLE1BQUEsZ0JBQ0EsWUFBQSxjQUFBLG1CQUFBLFdBQUEsT0FBQSxpQkFBQSxNQUFBLHFCQUNBLE9BQUEsZUNmVixjQUFlLGNEakJmLGlCQWlCRSxlQWtCWSxXQUFBLGlCQ2ZkLFNBQVUsaUJEbUJJLG1FQUNBLFdBQUEsS0NoQmQsUUFBUyxLQUFLLGVEeEJkLFFBQVMsc0JBMENTLFFBQUEsdUJBQ0EsUUFBQSxzQkNmbEIsUUFBUyxlRGlCSyxrQkE1QlosaUJBOEJvQixvQkFBQSxpQkNoQmxCLGVBQWdCLGlCRC9CWixZQWlCTixpQkFzQ1EsdUZBQ0EsaUJBQUEsRUNwQlYsYUFBYyxFRHBDVixTQUFVLEVBMkRBLEtBQUEsRUFFQSx3RkNwQmQsT0FBUSxrQkR6Q1IsT0FBUSxlQWlFTSw0RkFDQSxLQUFBLFFBQ0EsbUJBQUEsS0FBQSxJQUFBLHNCQ3BCZCxXQUFZLEtBQUssSUFBSyxzQkR3QlIsa0dBQ0EsS0FBQSxRQUVBLG1FQUNBLFFBQUEsS0FBQSxLQUFBLGVBQ0EsV0FBQSxrQkFDQSxXQUFBLElBQUEsTUFBQSxRQUVBLHNFQUNBLE1BQUEsa0JBQ0EsVUFBQSxlQ3JCZCxZQUFhLGNEd0JLLHFFQ3JCbEIsT0FBUSxJQUFJLEVBQUksZUR3QkYsWUFBQSxjQUNJLE1BQUEsa0JDdEJsQixVQUFXLGVBRWIsMEVBQ0UsTUFBTyxlQUNQLFFBQVMsS0FBSyxlQUNkLE9BQVEsWUFDUixjQUFlLGNBQ2YsVUFBVyxlQUNYLFlBQWEsY0FDYixPQUFRLGtCQUNSLFdBQVksa0JBQ1osTUFBTyxlQUNQLE9BQVEsWUFDUixtQkFBb0IsaUJBQWlCLElBQUssc0JBQzFDLFdBQVksaUJBQWlCLElBQUssc0JBRXBDLGdGQUNFLGlCQUFrQixrQkFFcEIsaUZBQ0UsaUJBQWtCIn0= */';
    exports2.default = css;
  }
});

// node_modules/@trezor/connect-web/lib/iframe/index.js
var require_iframe2 = __commonJS({
  "node_modules/@trezor/connect-web/lib/iframe/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.initIframeLogger = exports2.clearTimeout = exports2.postMessage = exports2.init = exports2.dispose = exports2.error = exports2.timeout = exports2.initPromise = exports2.origin = exports2.instance = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var utils_1 = require_lib();
    var ERRORS = tslib_1.__importStar(require_errors());
    var events_1 = require_events2();
    var urlUtils_1 = require_urlUtils();
    var debug_1 = require_debug();
    var inlineStyles_1 = tslib_1.__importDefault(require_inlineStyles());
    exports2.initPromise = (0, utils_1.createDeferred)();
    exports2.timeout = 0;
    var dispose = () => {
      if (exports2.instance && exports2.instance.parentNode) {
        try {
          exports2.instance.parentNode.removeChild(exports2.instance);
        } catch (e) {
        }
      }
      exports2.instance = null;
      exports2.timeout = 0;
    };
    exports2.dispose = dispose;
    var handleIframeBlocked = () => {
      window.clearTimeout(exports2.timeout);
      exports2.error = ERRORS.TypedError("Init_IframeBlocked");
      (0, exports2.dispose)();
      exports2.initPromise.reject(exports2.error);
    };
    var injectStyleSheet = () => {
      if (!exports2.instance) {
        throw ERRORS.TypedError("Init_IframeBlocked");
      }
      const doc = exports2.instance.ownerDocument;
      const head = doc.head || doc.getElementsByTagName("head")[0];
      const style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.setAttribute("id", "TrezorConnectStylesheet");
      if (style.styleSheet) {
        style.styleSheet.cssText = inlineStyles_1.default;
        head.appendChild(style);
      } else {
        style.appendChild(document.createTextNode(inlineStyles_1.default));
        head.append(style);
      }
    };
    var init = async (settings2) => {
      exports2.initPromise = (0, utils_1.createDeferred)();
      const existedFrame = document.getElementById("trezorconnect");
      if (existedFrame) {
        exports2.instance = existedFrame;
      } else {
        exports2.instance = document.createElement("iframe");
        exports2.instance.frameBorder = "0";
        exports2.instance.width = "0px";
        exports2.instance.height = "0px";
        exports2.instance.style.position = "absolute";
        exports2.instance.style.display = "none";
        exports2.instance.style.border = "0px";
        exports2.instance.style.width = "0px";
        exports2.instance.style.height = "0px";
        exports2.instance.id = "trezorconnect";
      }
      let src;
      if (settings2.env === "web") {
        const manifestString = settings2.manifest ? JSON.stringify(settings2.manifest) : "undefined";
        const manifest = `version=${settings2.version}&manifest=${encodeURIComponent(btoa(JSON.stringify(manifestString)))}`;
        src = `${settings2.iframeSrc}?${manifest}`;
      } else {
        src = settings2.iframeSrc;
      }
      exports2.instance.setAttribute("src", src);
      if (settings2.webusb) {
        console.warn('webusb option is deprecated. use `transports: ["WebUsbTransport"] instead`');
      }
      if (navigator.usb) {
        exports2.instance.setAttribute("allow", "usb");
      }
      exports2.origin = (0, urlUtils_1.getOrigin)(exports2.instance.src);
      exports2.timeout = window.setTimeout(() => {
        exports2.initPromise.reject(ERRORS.TypedError("Init_IframeTimeout"));
      }, 1e4);
      const onLoad = () => {
        var _a, _b;
        if (!exports2.instance) {
          exports2.initPromise.reject(ERRORS.TypedError("Init_IframeBlocked"));
          return;
        }
        try {
          const iframeOrigin = (_a = exports2.instance.contentWindow) === null || _a === void 0 ? void 0 : _a.location.origin;
          if (!iframeOrigin || iframeOrigin === "null") {
            handleIframeBlocked();
            return;
          }
        } catch (e) {
        }
        let extension;
        if (typeof chrome !== "undefined" && chrome.runtime && typeof chrome.runtime.onConnect !== "undefined") {
          chrome.runtime.onConnect.addListener(() => {
          });
          extension = chrome.runtime.id;
        }
        (_b = exports2.instance.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
          type: events_1.IFRAME.INIT,
          payload: {
            settings: settings2,
            extension
          }
        }, exports2.origin);
        exports2.instance.onload = null;
      };
      if (exports2.instance.attachEvent) {
        exports2.instance.attachEvent("onload", onLoad);
      } else {
        exports2.instance.onload = onLoad;
      }
      if (document.body) {
        document.body.appendChild(exports2.instance);
        injectStyleSheet();
      }
      try {
        await exports2.initPromise.promise;
      } catch (e) {
        if (exports2.instance) {
          if (exports2.instance.parentNode) {
            exports2.instance.parentNode.removeChild(exports2.instance);
          }
          exports2.instance = null;
        }
        throw e;
      } finally {
        window.clearTimeout(exports2.timeout);
        exports2.timeout = 0;
      }
    };
    exports2.init = init;
    var postMessage = (message) => {
      var _a;
      if (!exports2.instance) {
        throw ERRORS.TypedError("Init_IframeBlocked");
      }
      (_a = exports2.instance.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(message, exports2.origin);
    };
    exports2.postMessage = postMessage;
    var clearTimeout2 = () => {
      window.clearTimeout(exports2.timeout);
    };
    exports2.clearTimeout = clearTimeout2;
    var initIframeLogger = () => {
      const logWriterFactory = () => ({
        add: (message) => {
          (0, exports2.postMessage)({
            type: events_1.IFRAME.LOG,
            payload: message
          });
        }
      });
      (0, debug_1.setLogWriter)(logWriterFactory);
    };
    exports2.initIframeLogger = initIframeLogger;
  }
});

// node_modules/@trezor/connect/lib/data/version.js
var require_version = __commonJS({
  "node_modules/@trezor/connect/lib/data/version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CONTENT_SCRIPT_VERSION = exports2.DEFAULT_DOMAIN = exports2.VERSION = void 0;
    exports2.VERSION = "9.4.0";
    var versionN = exports2.VERSION.split(".").map((s) => parseInt(s, 10));
    var isBeta = exports2.VERSION.includes("beta");
    exports2.DEFAULT_DOMAIN = isBeta ? `https://connect.trezor.io/${exports2.VERSION}/` : `https://connect.trezor.io/${versionN[0]}/`;
    exports2.CONTENT_SCRIPT_VERSION = 1;
  }
});

// node_modules/@trezor/connect-web/lib/popup/showPopupRequest.js
var require_showPopupRequest = __commonJS({
  "node_modules/@trezor/connect-web/lib/popup/showPopupRequest.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.showPopupRequest = void 0;
    var LAYER_ID = "TrezorConnectInteractionLayer";
    var HTML = `
    <div class="trezorconnect-container" id="${LAYER_ID}">
        <div class="trezorconnect-window">
            <div class="trezorconnect-head">
                <svg class="trezorconnect-logo" x="0px" y="0px" viewBox="0 0 163.7 41.9" width="78px" height="20px" preserveAspectRatio="xMinYMin meet">
                    <polygon points="101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1"/>
                    <path d="M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5 h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z"/>
                    <path d="M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3 c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z"/>
                    <polygon points="82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 "/>
                    <path d="M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7 c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z"/>
                    <path d="M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18 h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z"/>
                    <polygon points="40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 "/>
                </svg>
                <div class="trezorconnect-close">
                    <svg x="0px" y="0px" viewBox="24 24 60 60" width="24px" height="24px" preserveAspectRatio="xMinYMin meet">
                        <polygon class="st0" points="40,67.9 42.1,70 55,57.1 67.9,70 70,67.9 57.1,55 70,42.1 67.9,40 55,52.9 42.1,40 40,42.1 52.9,55 "/>
                    </svg>
                </div>
            </div>
            <div class="trezorconnect-body">
                <h3>Popup was blocked</h3>
                <p>Please click to "Continue" to open popup manually</p>
                <button class="trezorconnect-open">Continue</button>
            </div>
        </div>
    </div>
`;
    var showPopupRequest = (open, cancel) => {
      if (document.getElementById(LAYER_ID)) {
        return;
      }
      const div = document.createElement("div");
      div.id = LAYER_ID;
      div.className = "trezorconnect-container";
      div.innerHTML = HTML;
      if (document.body) {
        document.body.appendChild(div);
      }
      const button = div.getElementsByClassName("trezorconnect-open")[0];
      button.onclick = () => {
        open();
        if (document.body) {
          document.body.removeChild(div);
        }
      };
      const close = div.getElementsByClassName("trezorconnect-close")[0];
      close.onclick = () => {
        cancel();
        if (document.body) {
          document.body.removeChild(div);
        }
      };
    };
    exports2.showPopupRequest = showPopupRequest;
  }
});

// node_modules/@trezor/connect-common/lib/storage.js
var require_storage = __commonJS({
  "node_modules/@trezor/connect-common/lib/storage.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.storage = void 0;
    var utils_1 = require_lib();
    var storageVersion = 2;
    var storageName = `storage_v${storageVersion}`;
    var getEmptyState = () => ({
      origin: {}
    });
    var memoryStorage = getEmptyState();
    var getPermanentStorage = () => {
      const ls = localStorage.getItem(storageName);
      return ls ? JSON.parse(ls) : getEmptyState();
    };
    var Storage = class extends utils_1.TypedEmitter {
      save(getNewState, temporary = false) {
        if (temporary || !global.window) {
          memoryStorage = getNewState(memoryStorage);
          return;
        }
        try {
          const newState = getNewState(getPermanentStorage());
          localStorage.setItem(storageName, JSON.stringify(newState));
          this.emit("changed", newState);
        } catch (err) {
          console.warn("long term storage not available");
          memoryStorage = getNewState(memoryStorage);
        }
      }
      saveForOrigin(getNewState, origin, temporary = false) {
        this.save((state) => {
          var _a;
          return Object.assign(Object.assign({}, state), { origin: Object.assign(Object.assign({}, state.origin), { [origin]: getNewState(((_a = state.origin) === null || _a === void 0 ? void 0 : _a[origin]) || {}) }) });
        }, temporary);
      }
      load(temporary = false) {
        var _a;
        if (temporary || !((_a = global === null || global === void 0 ? void 0 : global.window) === null || _a === void 0 ? void 0 : _a.localStorage)) {
          return memoryStorage;
        }
        try {
          return getPermanentStorage();
        } catch (err) {
          console.warn("long term storage not available");
          return memoryStorage;
        }
      }
      loadForOrigin(origin, temporary = false) {
        var _a;
        const state = this.load(temporary);
        return ((_a = state.origin) === null || _a === void 0 ? void 0 : _a[origin]) || {};
      }
    };
    var storage = new Storage();
    exports2.storage = storage;
  }
});

// node_modules/@trezor/connect-common/lib/messageChannel/abstract.js
var require_abstract = __commonJS({
  "node_modules/@trezor/connect-common/lib/messageChannel/abstract.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractMessageChannel = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var utils_1 = require_lib();
    var utils_2 = require_lib();
    var utils_3 = require_lib();
    var AbstractMessageChannel = class extends utils_2.TypedEmitter {
      constructor({ sendFn, channel, logger, lazyHandshake = false, legacyMode = false }) {
        super();
        this.messagePromises = {};
        this.messagesQueue = [];
        this.messageID = 0;
        this.isConnected = false;
        this.handshakeMaxRetries = 5;
        this.handshakeRetryInterval = 2e3;
        this.channel = channel;
        this.sendFn = sendFn;
        this.lazyHandshake = lazyHandshake;
        this.legacyMode = legacyMode;
        this.logger = logger;
      }
      init() {
        if (!this.handshakeFinished) {
          this.handshakeFinished = (0, utils_1.createDeferred)();
          if (this.legacyMode) {
            setTimeout(() => {
              var _a;
              (_a = this.handshakeFinished) === null || _a === void 0 ? void 0 : _a.resolve();
            }, 500);
          }
          if (!this.lazyHandshake) {
            this.handshakeWithPeer();
          }
        }
        return this.handshakeFinished.promise;
      }
      handshakeWithPeer() {
        var _a;
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log(this.channel.here, "handshake");
        return (0, utils_3.scheduleAction)(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
          var _b;
          this.postMessage({
            type: "channel-handshake-request",
            data: { success: true, payload: void 0 }
          }, { usePromise: false, useQueue: false });
          yield (_b = this.handshakeFinished) === null || _b === void 0 ? void 0 : _b.promise;
        }), {
          attempts: this.handshakeMaxRetries,
          timeout: this.handshakeRetryInterval
        }).then(() => {
          var _a2;
          (_a2 = this.logger) === null || _a2 === void 0 ? void 0 : _a2.log(this.channel.here, "handshake confirmed");
          this.messagesQueue.forEach((message) => {
            message.channel = this.channel;
            this.sendFn(message);
          });
          this.messagesQueue = [];
        }).catch(() => {
          var _a2;
          (_a2 = this.handshakeFinished) === null || _a2 === void 0 ? void 0 : _a2.reject(new Error("handshake failed"));
          this.handshakeFinished = void 0;
        });
      }
      onMessage(_message) {
        var _a, _b;
        let message = _message;
        if (this.legacyMode && message.type === void 0 && "data" in message && typeof message.data === "object" && message.data !== null && "type" in message.data && typeof message.data.type === "string") {
          message = message.data;
        }
        const { channel, id, type, payload, success } = message;
        if (!this.legacyMode) {
          if (!(channel === null || channel === void 0 ? void 0 : channel.peer) || channel.peer !== this.channel.here) {
            return;
          }
          if (!(channel === null || channel === void 0 ? void 0 : channel.here) || this.channel.peer !== channel.here) {
            return;
          }
        }
        if (type === "channel-handshake-request") {
          this.postMessage({
            type: "channel-handshake-confirm",
            data: { success: true, payload: void 0 }
          }, { usePromise: false, useQueue: false });
          if (this.lazyHandshake) {
            this.handshakeWithPeer();
          }
          return;
        }
        if (type === "channel-handshake-confirm") {
          (_a = this.handshakeFinished) === null || _a === void 0 ? void 0 : _a.resolve(void 0);
          return;
        }
        if (this.messagePromises[id]) {
          this.messagePromises[id].resolve({ id, payload, success });
          delete this.messagePromises[id];
        }
        const messagePromisesLength = Object.keys(this.messagePromises).length;
        if (messagePromisesLength > 5) {
          (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn(`too many message promises (${messagePromisesLength}). this feels unexpected!`);
        }
        this.emit("message", message);
      }
      postMessage(message, { usePromise = true, useQueue = true } = {}) {
        message.channel = this.channel;
        if (!usePromise) {
          try {
            this.sendFn(message);
          } catch (err) {
            if (useQueue) {
              this.messagesQueue.push(message);
            }
          }
          return;
        }
        this.messageID++;
        message.id = this.messageID;
        this.messagePromises[message.id] = (0, utils_1.createDeferred)();
        try {
          this.sendFn(message);
        } catch (err) {
          if (useQueue) {
            this.messagesQueue.push(message);
          }
        }
        return this.messagePromises[message.id].promise;
      }
      resolveMessagePromises(resolvePayload) {
        Object.keys(this.messagePromises).forEach((id) => this.messagePromises[id].resolve({
          id,
          payload: resolvePayload
        }));
      }
      clear() {
        this.handshakeFinished = void 0;
      }
    };
    exports2.AbstractMessageChannel = AbstractMessageChannel;
  }
});

// node_modules/ua-parser-js/src/ua-parser.js
var require_ua_parser = __commonJS({
  "node_modules/ua-parser-js/src/ua-parser.js"(exports2, module2) {
    (function(window2, undefined2) {
      "use strict";
      var LIBVERSION = "1.0.39", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
      var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS", SUFFIX_BROWSER = " Browser";
      var extend = function(regexes2, extensions) {
        var mergedRegexes = {};
        for (var i in regexes2) {
          if (extensions[i] && extensions[i].length % 2 === 0) {
            mergedRegexes[i] = extensions[i].concat(regexes2[i]);
          } else {
            mergedRegexes[i] = regexes2[i];
          }
        }
        return mergedRegexes;
      }, enumerize = function(arr) {
        var enums = {};
        for (var i = 0; i < arr.length; i++) {
          enums[arr[i].toUpperCase()] = arr[i];
        }
        return enums;
      }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
      }, lowerize = function(str) {
        return str.toLowerCase();
      }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined2;
      }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
          str = str.replace(/^\s\s*/, EMPTY);
          return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
      };
      var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        while (i < arrays.length && !matches) {
          var regex = arrays[i], props = arrays[i + 1];
          j = k = 0;
          while (j < regex.length && !matches) {
            if (!regex[j]) {
              break;
            }
            matches = regex[j++].exec(ua);
            if (!!matches) {
              for (p = 0; p < props.length; p++) {
                match = matches[++k];
                q = props[p];
                if (typeof q === OBJ_TYPE && q.length > 0) {
                  if (q.length === 2) {
                    if (typeof q[1] == FUNC_TYPE) {
                      this[q[0]] = q[1].call(this, match);
                    } else {
                      this[q[0]] = q[1];
                    }
                  } else if (q.length === 3) {
                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined2;
                    } else {
                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined2;
                    }
                  } else if (q.length === 4) {
                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined2;
                  }
                } else {
                  this[q] = match ? match : undefined2;
                }
              }
            }
          }
          i += 2;
        }
      }, strMapper = function(str, map) {
        for (var i in map) {
          if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
            for (var j = 0; j < map[i].length; j++) {
              if (has(map[i][j], str)) {
                return i === UNKNOWN ? undefined2 : i;
              }
            }
          } else if (has(map[i], str)) {
            return i === UNKNOWN ? undefined2 : i;
          }
        }
        return map.hasOwnProperty("*") ? map["*"] : str;
      };
      var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": ["NT 5.1", "NT 5.2"],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": ["NT 6.4", "NT 10.0"],
        "RT": "ARM"
      };
      var regexes = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [VERSION, [NAME, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [VERSION, [NAME, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [NAME, VERSION],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [VERSION, [NAME, OPERA + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [VERSION, [NAME, OPERA + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [VERSION, [NAME, OPERA]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [VERSION, [NAME, "Baidu"]],
          [
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
            // Trident based
            /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
            // Avant/IEMobile/SlimBrowser
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Internet Explorer
            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
            // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio
            /(heytap|ovi)browser\/([\d\.]+)/i,
            // HeyTap/Ovi
            /(weibo)__([\d\.]+)/i
            // Weibo
          ],
          [NAME, VERSION],
          [
            /quark(?:pc)?\/([-\w\.]+)/i
            // Quark
          ],
          [VERSION, [NAME, "Quark"]],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [VERSION, [NAME, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [VERSION, [NAME, "UC" + BROWSER]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [VERSION, [NAME, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [VERSION, [NAME, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [VERSION, [NAME, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [VERSION, [NAME, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [VERSION, [NAME, "Smart Lenovo " + BROWSER]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [VERSION, [NAME, FIREFOX + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [VERSION, [NAME, OPERA + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [VERSION, [NAME, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [VERSION, [NAME, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [VERSION, [NAME, OPERA + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [VERSION, [NAME, "MIUI " + BROWSER]],
          [
            /fxios\/([-\w\.]+)/i
            // Firefox for iOS
          ],
          [VERSION, [NAME, FIREFOX]],
          [
            /\bqihu|(qi?ho?o?|360)browser/i
            // 360
          ],
          [[NAME, "360" + SUFFIX_BROWSER]],
          [
            /\b(qq)\/([\w\.]+)/i
            // QQ
          ],
          [[NAME, /(.+)/, "$1Browser"], VERSION],
          [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
          ],
          [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [VERSION, [NAME, SAMSUNG + " Internet"]],
          [
            /(comodo_dragon)\/([\w\.]+)/i
            // Comodo Dragon
          ],
          [[NAME, /_/g, " "], VERSION],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [VERSION, [NAME, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[NAME, "Sogou Mobile"], VERSION],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i
            // QQBrowser/2345 Browser
          ],
          [NAME, VERSION],
          [
            /(lbbrowser|rekonq)/i,
            // LieBao Browser/Rekonq
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [NAME],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[NAME, FACEBOOK], VERSION],
          [
            /(Klarna)\/([\w\.]+)/i,
            // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            // Naver InApp
            /safari (line)\/([\w\.]+)/i,
            // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,
            // Line App for Android
            /(alipay)client\/([\w\.]+)/i,
            // Alipay
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            // Twitter
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
            // Chromium/Instagram/Snapchat
          ],
          [NAME, VERSION],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [VERSION, [NAME, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [VERSION, [NAME, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [VERSION, [NAME, CHROME + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[NAME, CHROME + " WebView"], VERSION],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [VERSION, [NAME, "Android " + BROWSER]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [NAME, VERSION],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [VERSION, [NAME, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [VERSION, NAME],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [NAME, [VERSION, strMapper, oldSafariMap]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [NAME, VERSION],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[NAME, "Netscape"], VERSION],
          [
            /(wolvic)\/([\w\.]+)/i
            // Wolvic
          ],
          [NAME, VERSION],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [VERSION, [NAME, FIREFOX + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            // Flow
            /(swiftfox)/i,
            // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            // Mozilla
            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i
            // Links
          ],
          [NAME, [VERSION, /_/g, "."]],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [NAME, [VERSION, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
            // AMD64 (x64)
          ],
          [[ARCHITECTURE, "amd64"]],
          [
            /(ia32(?=;))/i
            // IA32 (quicktime)
          ],
          [[ARCHITECTURE, lowerize]],
          [
            /((?:i[346]|x)86)[;\)]/i
            // IA32 (x86)
          ],
          [[ARCHITECTURE, "ia32"]],
          [
            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
            // ARM64
          ],
          [[ARCHITECTURE, "arm64"]],
          [
            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[ARCHITECTURE, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
          ],
          [[ARCHITECTURE, "arm"]],
          [
            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
            // PowerPC
          ],
          [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
          [
            /(sun4\w)[;\)]/i
            // SPARC
          ],
          [[ARCHITECTURE, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[ARCHITECTURE, lowerize]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
          [
            /(macintosh);/i
          ],
          [MODEL, [VENDOR, APPLE]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
          [
            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
          [
            // Xiaomi
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,
            // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i
            // Xiaomi Mi
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
          [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
            // Redmi Pad
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]],
          [
            /\b(opd2\d{3}a?) bui/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE, TABLET]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, TABLET]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
          [
            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
          ],
          [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
          [
            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
          ],
          [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]],
          [
            // Google
            /(pixel c)\b/i
            // Google Pixel C
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
          [
            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [MODEL, VENDOR, [TYPE, TABLET]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
          [
            // TCL
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
          ],
          [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
          [
            // itel
            /(itel) ((\w+))/i
          ],
          [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { "tablet": ["p10001l", "w7001"], "*": "mobile" }]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
          [
            // Nothing
            /droid.+; (a(?:015|06[35]|142p?))/i
          ],
          [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
          [
            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,
            // HP iPAQ
            /(asus)-?(\w+)/i,
            // Asus
            /(microsoft); (lumia[\w ]+)/i,
            // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,
            // Lenovo
            /(jolla)/i,
            // Jolla
            /(oppo) ?([\w ]+) bui/i
            // OPPO
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kobo)\s(ereader|touch)/i,
            // Kobo
            /(archos) (gamepad2?)/i,
            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            // HP TouchPad
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(nook)[\w ]+build\/(\w+)/i,
            // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,
            // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,
            // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i
            // Vodafone
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
          [
            /(shield[\w ]+) b/i
            // Nvidia Shield Tablets
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [VENDOR, [TYPE, SMARTTV]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[VENDOR, LG], [TYPE, SMARTTV]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
          [
            /(mitv-\w{5}) bui/i
            // Xiaomi
          ],
          [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [VENDOR, MODEL, [TYPE, SMARTTV]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
            // SmartTV from Unidentified Vendors
          ],
          [[TYPE, SMARTTV]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [VENDOR, MODEL, [TYPE, CONSOLE]],
          [
            /droid.+; (shield) bui/i
            // Nvidia
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
          [
            /(playstation [345portablevi]+)/i
            // Playstation
          ],
          [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i
            // Samsung Galaxy Watch
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
          [
            /((pebble))app/i
            // Pebble
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
          [
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
          [
            /(quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [VENDOR, [TYPE, EMBEDDED]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [MODEL, [TYPE, MOBILE]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [MODEL, [TYPE, TABLET]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[TYPE, TABLET]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[TYPE, MOBILE]],
          [
            /(android[-\w\. ]{0,9});.+buil/i
            // Generic Android Device
          ],
          [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [VERSION, [NAME, EDGE + "HTML"]],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [VERSION, [NAME, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,
            // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            // iCab
            /\b(libweb)/i
          ],
          [NAME, VERSION],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [VERSION, NAME]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [NAME, VERSION],
          [
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [NAME, [VERSION, strMapper, windowsVersionMap]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[VERSION, strMapper, windowsVersionMap], [NAME, "Windows"]],
          [
            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[VERSION, /_/g, "."], [NAME, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[NAME, MAC_OS], [VERSION, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [VERSION, NAME],
          [
            // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            // Tizen/KaiOS
            /\((series40);/i
            // Series 40
          ],
          [NAME, VERSION],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [VERSION, [NAME, BLACKBERRY]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [VERSION, [NAME, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [VERSION, [NAME, FIREFOX + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [VERSION, [NAME, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [VERSION, [NAME, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [VERSION, [NAME, CHROME + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[NAME, CHROMIUM_OS], VERSION],
          [
            // Smart TVs
            /panasonic;(viera)/i,
            // Panasonic Viera
            /(netrange)mmh/i,
            // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // NetTV
            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,
            // Microsoft Xbox (360, One, X, S, Series X, Series S)
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,
            // Mint
            /(mageia|vectorlinux)[; ]/i,
            // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,
            // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,
            // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i
            // Haiku
          ],
          [NAME, VERSION],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[NAME, "Solaris"], VERSION],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i
            // UNIX
          ],
          [NAME, VERSION]
        ]
      };
      var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
          extensions = ua;
          ua = undefined2;
        }
        if (!(this instanceof UAParser)) {
          return new UAParser(ua, extensions).getResult();
        }
        var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined2;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined2;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
          var _browser = {};
          _browser[NAME] = undefined2;
          _browser[VERSION] = undefined2;
          rgxMapper.call(_browser, _ua, _rgxmap.browser);
          _browser[MAJOR] = majorize(_browser[VERSION]);
          if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
            _browser[NAME] = "Brave";
          }
          return _browser;
        };
        this.getCPU = function() {
          var _cpu = {};
          _cpu[ARCHITECTURE] = undefined2;
          rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
          return _cpu;
        };
        this.getDevice = function() {
          var _device = {};
          _device[VENDOR] = undefined2;
          _device[MODEL] = undefined2;
          _device[TYPE] = undefined2;
          rgxMapper.call(_device, _ua, _rgxmap.device);
          if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
            _device[TYPE] = MOBILE;
          }
          if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
            _device[MODEL] = "iPad";
            _device[TYPE] = TABLET;
          }
          return _device;
        };
        this.getEngine = function() {
          var _engine = {};
          _engine[NAME] = undefined2;
          _engine[VERSION] = undefined2;
          rgxMapper.call(_engine, _ua, _rgxmap.engine);
          return _engine;
        };
        this.getOS = function() {
          var _os = {};
          _os[NAME] = undefined2;
          _os[VERSION] = undefined2;
          rgxMapper.call(_os, _ua, _rgxmap.os);
          if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") {
            _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
          }
          return _os;
        };
        this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        };
        this.getUA = function() {
          return _ua;
        };
        this.setUA = function(ua2) {
          _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
          return this;
        };
        this.setUA(_ua);
        return this;
      };
      UAParser.VERSION = LIBVERSION;
      UAParser.BROWSER = enumerize([NAME, VERSION, MAJOR]);
      UAParser.CPU = enumerize([ARCHITECTURE]);
      UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
      UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
      if (typeof exports2 !== UNDEF_TYPE) {
        if (typeof module2 !== UNDEF_TYPE && module2.exports) {
          exports2 = module2.exports = UAParser;
        }
        exports2.UAParser = UAParser;
      } else {
        if (typeof define === FUNC_TYPE && define.amd) {
          define(function() {
            return UAParser;
          });
        } else if (typeof window2 !== UNDEF_TYPE) {
          window2.UAParser = UAParser;
        }
      }
      var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
      if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
          return parser.getUA();
        };
        $.ua.set = function(ua) {
          parser.setUA(ua);
          var result = parser.getResult();
          for (var prop in result) {
            $.ua[prop] = result[prop];
          }
        };
      }
    })(typeof window === "object" ? window : exports2);
  }
});

// node_modules/@trezor/env-utils/lib/jws.js
var require_jws = __commonJS({
  "node_modules/@trezor/env-utils/lib/jws.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.publicKey = void 0;
    exports2.publicKey = {
      dev: `-----BEGIN PUBLIC KEY-----
MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEbSUHJlr17+NywPS/w+xMkp3dSD8eWXSuAfFKwonZPe5fL63kISipJC+eJP7Mad0WxgyJoiMsZCV6BZPK2jIFdg==
-----END PUBLIC KEY-----`,
      codesign: `-----BEGIN PUBLIC KEY-----
MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAES7MbBzU/v5BsljkTM8Mz0Jsk+Nn5n2wH
o2/+MUI3TgCVdTbEHhn3HXaY7GJ6TLyWqxn+pIDY9wUUAyUqOStTUQ==
-----END PUBLIC KEY-----`
    };
  }
});

// node_modules/@trezor/env-utils/lib/envUtils.js
var require_envUtils = __commonJS({
  "node_modules/@trezor/env-utils/lib/envUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.envUtils = exports2.getJWSPublicKey = exports2.getEnvironment = exports2.isNative = exports2.isDesktop = exports2.isWeb = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var ua_parser_js_1 = tslib_1.__importDefault(require_ua_parser());
    var jws_1 = require_jws();
    var isWeb = () => process.env.SUITE_TYPE === "web";
    exports2.isWeb = isWeb;
    var isDesktop = () => process.env.SUITE_TYPE === "desktop";
    exports2.isDesktop = isDesktop;
    var isNative = () => false;
    exports2.isNative = isNative;
    var getEnvironment = () => {
      if ((0, exports2.isWeb)())
        return "web";
      return "desktop";
    };
    exports2.getEnvironment = getEnvironment;
    var userAgentParser;
    var getUserAgent = () => window.navigator.userAgent;
    var getUserAgentParser = () => {
      if (!userAgentParser) {
        const ua = getUserAgent();
        userAgentParser = new ua_parser_js_1.default(ua);
      }
      return userAgentParser;
    };
    var isAndroid = () => /Android/.test(getUserAgent());
    var isChromeOs = () => /CrOS/.test(getUserAgent());
    var getBrowserVersion = () => getUserAgentParser().getBrowser().version || "";
    var getCommitHash = () => process.env.COMMITHASH || "";
    var getOsVersion = () => getUserAgentParser().getOS().version || "";
    var getSuiteVersion = () => process.env.VERSION || "";
    var getBrowserName = () => {
      const browserName = getUserAgentParser().getBrowser().name;
      return (browserName === null || browserName === void 0 ? void 0 : browserName.toLowerCase()) || "";
    };
    var isFirefox = () => getBrowserName() === "firefox";
    var getPlatform = () => window.navigator.platform;
    var getPlatformLanguages = () => window.navigator.languages;
    var getScreenWidth = () => window.screen.width;
    var getScreenHeight = () => window.screen.height;
    var getWindowWidth = () => window.innerWidth;
    var getWindowHeight = () => window.innerHeight;
    var getLocationOrigin = () => window.location.origin;
    var getLocationHostname = () => window.location.hostname;
    var getProcessPlatform = () => typeof process !== "undefined" ? process.platform : "";
    var isMacOs = () => {
      if (getProcessPlatform() === "darwin")
        return true;
      if (typeof window === "undefined")
        return;
      return getPlatform().startsWith("Mac");
    };
    var isWindows = () => {
      if (getProcessPlatform() === "win32")
        return true;
      if (typeof window === "undefined")
        return;
      return getPlatform().startsWith("Win");
    };
    var isIOs = () => ["iPhone", "iPad", "iPod"].includes(getPlatform());
    var isLinux = () => {
      if (getProcessPlatform() === "linux")
        return true;
      if (typeof window === "undefined")
        return;
      if (isAndroid() || isChromeOs())
        return false;
      return getPlatform().startsWith("Linux");
    };
    var isCodesignBuild = () => process.env.IS_CODESIGN_BUILD === "true";
    var getOsName = () => {
      if (isWindows())
        return "windows";
      if (isMacOs())
        return "macos";
      if (isAndroid())
        return "android";
      if (isChromeOs())
        return "chromeos";
      if (isLinux())
        return "linux";
      if (isIOs())
        return "ios";
      return "";
    };
    var getOsNameWeb = () => getUserAgentParser().getOS().name;
    var getOsFamily = () => {
      const osName = getUserAgentParser().getOS().name;
      if (osName === "Windows") {
        return "Windows";
      }
      if (osName === "Mac OS") {
        return "MacOS";
      }
      return "Linux";
    };
    var getDeviceType = () => getUserAgentParser().getDevice().type;
    var getJWSPublicKey = () => isCodesignBuild() ? jws_1.publicKey.codesign : jws_1.publicKey.dev;
    exports2.getJWSPublicKey = getJWSPublicKey;
    exports2.envUtils = {
      isWeb: exports2.isWeb,
      isDesktop: exports2.isDesktop,
      isNative: exports2.isNative,
      getEnvironment: exports2.getEnvironment,
      getUserAgent,
      isAndroid,
      isChromeOs,
      getOsVersion,
      getBrowserName,
      getBrowserVersion,
      getCommitHash,
      getDeviceType,
      getSuiteVersion,
      isFirefox,
      getPlatform,
      getPlatformLanguages,
      getScreenWidth,
      getScreenHeight,
      getWindowWidth,
      getWindowHeight,
      getLocationOrigin,
      getLocationHostname,
      getProcessPlatform,
      isMacOs,
      isWindows,
      isIOs,
      isLinux,
      isCodesignBuild,
      getOsName,
      getOsNameWeb,
      getOsFamily,
      getJWSPublicKey: exports2.getJWSPublicKey
    };
  }
});

// node_modules/@trezor/env-utils/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@trezor/env-utils/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getJWSPublicKey = exports2.getOsFamily = exports2.getOsNameWeb = exports2.getOsName = exports2.isCodesignBuild = exports2.isLinux = exports2.isIOs = exports2.isWindows = exports2.isMacOs = exports2.getProcessPlatform = exports2.getLocationHostname = exports2.getLocationOrigin = exports2.getWindowHeight = exports2.getWindowWidth = exports2.getScreenHeight = exports2.getScreenWidth = exports2.getPlatformLanguages = exports2.getPlatform = exports2.isFirefox = exports2.getSuiteVersion = exports2.getOsVersion = exports2.getDeviceType = exports2.getCommitHash = exports2.getBrowserName = exports2.getBrowserVersion = exports2.isChromeOs = exports2.isAndroid = exports2.getUserAgent = exports2.getEnvironment = exports2.isNative = exports2.isDesktop = exports2.isWeb = void 0;
    var envUtils_1 = require_envUtils();
    exports2.isWeb = envUtils_1.envUtils.isWeb, exports2.isDesktop = envUtils_1.envUtils.isDesktop, exports2.isNative = envUtils_1.envUtils.isNative, exports2.getEnvironment = envUtils_1.envUtils.getEnvironment, exports2.getUserAgent = envUtils_1.envUtils.getUserAgent, exports2.isAndroid = envUtils_1.envUtils.isAndroid, exports2.isChromeOs = envUtils_1.envUtils.isChromeOs, exports2.getBrowserVersion = envUtils_1.envUtils.getBrowserVersion, exports2.getBrowserName = envUtils_1.envUtils.getBrowserName, exports2.getCommitHash = envUtils_1.envUtils.getCommitHash, exports2.getDeviceType = envUtils_1.envUtils.getDeviceType, exports2.getOsVersion = envUtils_1.envUtils.getOsVersion, exports2.getSuiteVersion = envUtils_1.envUtils.getSuiteVersion, exports2.isFirefox = envUtils_1.envUtils.isFirefox, exports2.getPlatform = envUtils_1.envUtils.getPlatform, exports2.getPlatformLanguages = envUtils_1.envUtils.getPlatformLanguages, exports2.getScreenWidth = envUtils_1.envUtils.getScreenWidth, exports2.getScreenHeight = envUtils_1.envUtils.getScreenHeight, exports2.getWindowWidth = envUtils_1.envUtils.getWindowWidth, exports2.getWindowHeight = envUtils_1.envUtils.getWindowHeight, exports2.getLocationOrigin = envUtils_1.envUtils.getLocationOrigin, exports2.getLocationHostname = envUtils_1.envUtils.getLocationHostname, exports2.getProcessPlatform = envUtils_1.envUtils.getProcessPlatform, exports2.isMacOs = envUtils_1.envUtils.isMacOs, exports2.isWindows = envUtils_1.envUtils.isWindows, exports2.isIOs = envUtils_1.envUtils.isIOs, exports2.isLinux = envUtils_1.envUtils.isLinux, exports2.isCodesignBuild = envUtils_1.envUtils.isCodesignBuild, exports2.getOsName = envUtils_1.envUtils.getOsName, exports2.getOsNameWeb = envUtils_1.envUtils.getOsNameWeb, exports2.getOsFamily = envUtils_1.envUtils.getOsFamily, exports2.getJWSPublicKey = envUtils_1.envUtils.getJWSPublicKey;
  }
});

// node_modules/@trezor/connect-common/lib/systemInfo.js
var require_systemInfo = __commonJS({
  "node_modules/@trezor/connect-common/lib/systemInfo.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSystemInfo = exports2.getInstallerPackage = void 0;
    var env_utils_1 = require_lib2();
    var getInstallerPackage = () => {
      const agent = (0, env_utils_1.getUserAgent)();
      switch ((0, env_utils_1.getOsFamily)()) {
        case "MacOS":
          return "mac";
        case "Windows": {
          const arch = agent.match(/(Win64|WOW64)/) ? "64" : "32";
          return `win${arch}`;
        }
        case "Linux": {
          const isRpm = agent.match(/CentOS|Fedora|Mandriva|Mageia|Red Hat|Scientific|SUSE/) ? "rpm" : "deb";
          const is64x = agent.match(/Linux i[3456]86/) ? "32" : "64";
          return `${isRpm}${is64x}`;
        }
        default:
      }
    };
    exports2.getInstallerPackage = getInstallerPackage;
    var getSystemInfo = (supportedBrowsers) => {
      const browserName = (0, env_utils_1.getBrowserName)();
      const browserVersion = (0, env_utils_1.getBrowserVersion)();
      const supportedBrowser = browserName ? supportedBrowsers[browserName.toLowerCase()] : void 0;
      const outdatedBrowser = supportedBrowser ? supportedBrowser.version > parseInt(browserVersion, 10) : false;
      const mobile = (0, env_utils_1.getDeviceType)() === "mobile";
      const supportedMobile = mobile ? "usb" in navigator : true;
      const supported = !!(supportedBrowser && !outdatedBrowser && supportedMobile);
      return {
        os: {
          family: (0, env_utils_1.getOsFamily)(),
          mobile
        },
        browser: {
          supported,
          outdated: outdatedBrowser
        }
      };
    };
    exports2.getSystemInfo = getSystemInfo;
  }
});

// node_modules/@trezor/connect-common/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@trezor/connect-common/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_storage(), exports2);
    tslib_1.__exportStar(require_abstract(), exports2);
    tslib_1.__exportStar(require_systemInfo(), exports2);
  }
});

// node_modules/@trezor/connect-web/lib/channels/serviceworker-window.js
var require_serviceworker_window = __commonJS({
  "node_modules/@trezor/connect-web/lib/channels/serviceworker-window.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ServiceWorkerWindowChannel = void 0;
    var connect_common_1 = require_lib3();
    var ServiceWorkerWindowChannel = class extends connect_common_1.AbstractMessageChannel {
      constructor({ name, channel, logger, lazyHandshake, legacyMode, allowSelfOrigin = false, currentId }) {
        super({
          channel,
          sendFn: (message) => {
            if (!this.port)
              throw new Error("port not assigned");
            this.port.postMessage(message);
          },
          logger,
          lazyHandshake,
          legacyMode
        });
        this.name = name;
        this.allowSelfOrigin = allowSelfOrigin;
        this.currentId = currentId;
        this.connect();
      }
      connect() {
        chrome.runtime.onConnect.addListener((port) => {
          var _a, _b, _c, _d;
          if (port.name !== this.name)
            return;
          if (((_a = this.currentId) === null || _a === void 0 ? void 0 : _a.call(this)) && ((_b = this.currentId) === null || _b === void 0 ? void 0 : _b.call(this)) !== ((_d = (_c = port.sender) === null || _c === void 0 ? void 0 : _c.tab) === null || _d === void 0 ? void 0 : _d.id))
            return;
          this.port = port;
          this.port.onMessage.addListener((message, { sender }) => {
            var _a2, _b2, _c2, _d2, _e;
            if (!sender) {
              (_a2 = this.logger) === null || _a2 === void 0 ? void 0 : _a2.error("service-worker-window", "no sender");
              return;
            }
            const { origin } = sender;
            const whitelist = [
              "https://connect.trezor.io",
              "https://staging-connect.trezor.io",
              "https://suite.corp.sldev.cz",
              "https://dev.suite.sldev.cz",
              "http://localhost:8088"
            ];
            const webextensionId = (_b2 = chrome === null || chrome === void 0 ? void 0 : chrome.runtime) === null || _b2 === void 0 ? void 0 : _b2.id;
            if (webextensionId) {
              whitelist.push(`chrome-extension://${webextensionId}`);
            }
            const webextensionUrl = (_c2 = chrome === null || chrome === void 0 ? void 0 : chrome.runtime) === null || _c2 === void 0 ? void 0 : _c2.getURL("");
            if (webextensionUrl) {
              whitelist.push(webextensionUrl.slice(0, -1));
            }
            if (!origin) {
              (_d2 = this.logger) === null || _d2 === void 0 ? void 0 : _d2.error("connect-webextension/messageChannel/extensionPort/onMessage", "no origin");
              return;
            }
            if (!whitelist.includes(origin)) {
              (_e = this.logger) === null || _e === void 0 ? void 0 : _e.error("connect-webextension/messageChannel/extensionPort/onMessage", "origin not whitelisted", origin);
              return;
            }
            if (origin === self.origin && !this.allowSelfOrigin) {
              return;
            }
            this.onMessage(message);
          });
        });
        this.isConnected = true;
      }
      disconnect() {
        var _a;
        if (!this.isConnected)
          return;
        (_a = this.port) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.clear();
        this.isConnected = false;
      }
    };
    exports2.ServiceWorkerWindowChannel = ServiceWorkerWindowChannel;
  }
});

// node_modules/@trezor/connect-web/lib/channels/window-window.js
var require_window_window = __commonJS({
  "node_modules/@trezor/connect-web/lib/channels/window-window.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WindowWindowChannel = void 0;
    var connect_common_1 = require_lib3();
    var WindowWindowChannel = class extends connect_common_1.AbstractMessageChannel {
      constructor({ windowHere, windowPeer, channel, logger, origin, legacyMode }) {
        super({
          channel,
          sendFn: (message) => {
            var _a;
            (_a = windowPeer()) === null || _a === void 0 ? void 0 : _a.postMessage(message, origin);
          },
          logger,
          legacyMode
        });
        this._listener = this.listener.bind(this);
        this._windowHere = windowHere;
        this.connect();
      }
      listener(event) {
        const message = Object.assign(Object.assign({}, event.data), { success: true, origin: event.origin, payload: event.data.payload || {}, channel: event.data.channel || {
          peer: this.channel.here,
          here: this.channel.peer
        } });
        this.onMessage(message);
      }
      connect() {
        this._windowHere.addEventListener("message", this._listener);
        this.isConnected = true;
      }
      disconnect() {
        if (!this.isConnected)
          return;
        this._windowHere.removeEventListener("message", this._listener);
        this.isConnected = false;
      }
    };
    exports2.WindowWindowChannel = WindowWindowChannel;
  }
});

// node_modules/@trezor/connect-web/lib/popup/index.js
var require_popup2 = __commonJS({
  "node_modules/@trezor/connect-web/lib/popup/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PopupManager = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var events_1 = tslib_1.__importDefault(require_events());
    var utils_1 = require_lib();
    var events_2 = require_events2();
    var urlUtils_1 = require_urlUtils();
    var version_1 = require_version();
    var showPopupRequest_1 = require_showPopupRequest();
    var serviceworker_window_1 = require_serviceworker_window();
    var window_window_1 = require_window_window();
    var checkIfTabExists = (tabId) => new Promise((resolve) => {
      if (!tabId)
        return resolve(false);
      function callback() {
        if (chrome.runtime.lastError) {
          resolve(false);
        } else {
          resolve(true);
        }
      }
      chrome.tabs.get(tabId, callback);
    });
    var POPUP_REQUEST_TIMEOUT = 850;
    var POPUP_CLOSE_INTERVAL = 500;
    var POPUP_OPEN_TIMEOUT = 5e3;
    var PopupManager = class extends events_1.default {
      constructor(settings2, { logger }) {
        var _a;
        super();
        this.locked = false;
        this.extensionTabId = 0;
        this.injectContentScript = (tabId) => {
          chrome.permissions.getAll((permissions) => {
            var _a2;
            if ((_a2 = permissions.permissions) === null || _a2 === void 0 ? void 0 : _a2.includes("scripting")) {
              (0, utils_1.scheduleAction)(() => chrome.scripting.executeScript({
                target: { tabId },
                func: () => {
                }
              }).then(() => {
                this.logger.debug("content script injected");
              }).catch((error) => {
                this.logger.error("content script injection error", error);
                throw error;
              }), { attempts: new Array(3).fill({ timeout: 100 }) });
            } else {
            }
          });
        };
        this.settings = settings2;
        this.origin = (0, urlUtils_1.getOrigin)(settings2.popupSrc);
        this.logger = logger;
        if (this.isWebExtensionWithTab()) {
          this.channel = new serviceworker_window_1.ServiceWorkerWindowChannel({
            name: "trezor-connect",
            channel: {
              here: "@trezor/connect-webextension",
              peer: "@trezor/connect-content-script"
            },
            logger,
            currentId: () => {
              var _a2, _b;
              if (((_a2 = this.popupWindow) === null || _a2 === void 0 ? void 0 : _a2.mode) === "tab")
                return (_b = this.popupWindow) === null || _b === void 0 ? void 0 : _b.tab.id;
            },
            legacyMode: !this.settings.useCoreInPopup
          });
        } else {
          this.channel = new window_window_1.WindowWindowChannel({
            windowHere: window,
            windowPeer: () => {
              var _a2, _b;
              if (((_a2 = this.popupWindow) === null || _a2 === void 0 ? void 0 : _a2.mode) === "window")
                return (_b = this.popupWindow) === null || _b === void 0 ? void 0 : _b.window;
            },
            channel: {
              here: "@trezor/connect-web",
              peer: "@trezor/connect-popup"
            },
            logger,
            origin: this.origin,
            legacyMode: !this.settings.useCoreInPopup
          });
        }
        if (!this.settings.useCoreInPopup) {
          this.iframeHandshakePromise = (0, utils_1.createDeferred)(events_2.IFRAME.LOADED);
          this.channelIframe = new window_window_1.WindowWindowChannel({
            windowHere: window,
            windowPeer: () => window,
            channel: {
              here: "@trezor/connect-web",
              peer: "@trezor/connect-iframe"
            },
            logger,
            origin: this.origin
          });
          (_a = this.channelIframe) === null || _a === void 0 ? void 0 : _a.on("message", this.handleMessage.bind(this));
        }
        if (this.settings.useCoreInPopup) {
          this.handshakePromise = (0, utils_1.createDeferred)();
          this.channel.on("message", this.handleCoreMessage.bind(this));
          return;
        } else if (this.isWebExtensionWithTab()) {
          this.channel.on("message", this.handleExtensionMessage.bind(this));
        } else {
          this.channel.on("message", this.handleMessage.bind(this));
        }
        this.channel.init();
      }
      async request() {
        var _a, _b, _c, _d, _f;
        if (this.settings.useCoreInPopup && ((_a = this.popupWindow) === null || _a === void 0 ? void 0 : _a.mode) === "tab") {
          const currentPopupExists = await checkIfTabExists((_c = (_b = this.popupWindow) === null || _b === void 0 ? void 0 : _b.tab) === null || _c === void 0 ? void 0 : _c.id);
          if (!currentPopupExists) {
            this.clear();
          }
        }
        if (this.locked) {
          if (((_d = this.popupWindow) === null || _d === void 0 ? void 0 : _d.mode) === "tab" && this.popupWindow.tab.id) {
            chrome.tabs.update(this.popupWindow.tab.id, { active: true });
          } else if (((_f = this.popupWindow) === null || _f === void 0 ? void 0 : _f.mode) === "window") {
            this.popupWindow.window.focus();
          }
          return;
        }
        if (this.popupWindow && !this.locked) {
          this.close();
        }
        const openFn = this.open.bind(this);
        this.locked = true;
        const timeout = this.settings.env === "webextension" ? 1 : POPUP_REQUEST_TIMEOUT;
        this.requestTimeout = setTimeout(() => {
          this.requestTimeout = void 0;
          openFn();
        }, timeout);
      }
      unlock() {
        this.locked = false;
      }
      open() {
        const src = this.settings.popupSrc;
        this.popupPromise = (0, utils_1.createDeferred)(events_2.POPUP.LOADED);
        const url = this.buildPopupUrl(src);
        this.openWrapper(url);
        if (this.settings.useCoreInPopup) {
          return;
        }
        this.closeInterval = setInterval(() => {
          if (!this.popupWindow)
            return;
          if (this.popupWindow.mode === "tab" && this.popupWindow.tab.id) {
            chrome.tabs.get(this.popupWindow.tab.id, (tab) => {
              if (!tab) {
                this.emitClosed();
                this.clear();
              }
            });
          } else if (this.popupWindow.mode === "window" && this.popupWindow.window.closed) {
            this.clear();
            this.emitClosed();
          }
        }, POPUP_CLOSE_INTERVAL);
        if (this.settings.useCoreInPopup) {
          return;
        }
        this.openTimeout = setTimeout(() => {
          this.clear();
          (0, showPopupRequest_1.showPopupRequest)(this.open.bind(this), () => {
            this.emitClosed();
          });
        }, POPUP_OPEN_TIMEOUT);
      }
      buildPopupUrl(src) {
        var _a;
        const params = new URLSearchParams();
        params.set("version", version_1.VERSION);
        params.set("env", this.settings.env);
        if (this.settings.env === "webextension" && ((_a = chrome === null || chrome === void 0 ? void 0 : chrome.runtime) === null || _a === void 0 ? void 0 : _a.id)) {
          params.set("extension-id", chrome.runtime.id);
          params.set("cs-ver", version_1.CONTENT_SCRIPT_VERSION.toString());
        }
        return src + "?" + params.toString();
      }
      openWrapper(url) {
        if (this.isWebExtensionWithTab()) {
          chrome.windows.getCurrent((currentWindow) => {
            this.logger.debug("opening popup. currentWindow: ", currentWindow);
            if (currentWindow.type !== "normal") {
              chrome.windows.create({ url }, (newWindow) => {
                chrome.tabs.query({
                  windowId: newWindow === null || newWindow === void 0 ? void 0 : newWindow.id,
                  active: true
                }, (tabs) => {
                  this.popupWindow = { mode: "tab", tab: tabs[0] };
                  this.injectContentScript(tabs[0].id);
                });
              });
            } else {
              chrome.tabs.query({
                currentWindow: true,
                active: true
              }, (tabs) => {
                this.extensionTabId = tabs[0].id;
                chrome.tabs.create({
                  url,
                  index: tabs[0].index + 1
                }, (tab) => {
                  this.popupWindow = { mode: "tab", tab };
                  this.injectContentScript(tab.id);
                });
              });
            }
          });
        } else {
          const windowResult = window.open(url, "modal");
          if (!windowResult)
            return;
          this.popupWindow = { mode: "window", window: windowResult };
        }
        if (!this.channel.isConnected) {
          this.channel.connect();
        }
      }
      handleCoreMessage(message) {
        var _a;
        if (message.type === events_2.POPUP.BOOTSTRAP) {
          this.channel.init();
        } else if (message.type === events_2.POPUP.LOADED) {
          this.handleMessage(message);
          this.channel.postMessage({
            type: events_2.POPUP.INIT,
            payload: {
              settings: this.settings,
              useCore: true
            }
          });
        } else if (message.type === events_2.POPUP.CORE_LOADED) {
          this.channel.postMessage({
            type: events_2.POPUP.HANDSHAKE,
            payload: { settings: this.settings }
          });
          (_a = this.handshakePromise) === null || _a === void 0 ? void 0 : _a.resolve();
        } else if (message.type === events_2.POPUP.CLOSED) {
          this.emitClosed();
        } else if (message.type === events_2.POPUP.CONTENT_SCRIPT_LOADED) {
          const { contentScriptVersion } = message.payload;
          if (contentScriptVersion !== version_1.CONTENT_SCRIPT_VERSION) {
            console.warn(`Content script version mismatch. Expected ${version_1.CONTENT_SCRIPT_VERSION}, got ${contentScriptVersion}`);
          }
        }
      }
      handleExtensionMessage(data) {
        if (data.type === events_2.POPUP.ERROR || data.type === events_2.POPUP.LOADED || data.type === events_2.POPUP.BOOTSTRAP) {
          this.handleMessage(data);
        } else if (data.type === events_2.POPUP.EXTENSION_USB_PERMISSIONS) {
          chrome.tabs.query({
            currentWindow: true,
            active: true
          }, (tabs) => {
            chrome.tabs.create({
              url: "trezor-usb-permissions.html",
              index: tabs[0].index + 1
            }, (_tab) => {
            });
          });
        } else if (data.type === events_2.POPUP.CLOSE_WINDOW) {
          this.clear();
        }
      }
      handleMessage(data) {
        var _a, _b;
        if (data.type === events_2.IFRAME.LOADED) {
          (_a = this.iframeHandshakePromise) === null || _a === void 0 ? void 0 : _a.resolve(data.payload);
        } else if (data.type === events_2.POPUP.BOOTSTRAP) {
          if (this.openTimeout)
            clearTimeout(this.openTimeout);
        } else if (data.type === events_2.POPUP.ERROR && this.popupWindow) {
          const errorMessage = data.payload && typeof data.payload.error === "string" ? data.payload.error : null;
          this.emit(events_2.POPUP.CLOSED, errorMessage ? `Popup error: ${errorMessage}` : null);
          this.clear();
        } else if (data.type === events_2.POPUP.LOADED) {
          if (this.openTimeout)
            clearTimeout(this.openTimeout);
          if (this.popupPromise) {
            this.popupPromise.resolve();
            this.popupPromise = void 0;
          }
          (_b = this.iframeHandshakePromise) === null || _b === void 0 ? void 0 : _b.promise.then((payload) => {
            this.channel.postMessage({
              type: events_2.POPUP.INIT,
              payload: Object.assign(Object.assign({}, payload), { settings: this.settings })
            });
          });
        } else if (data.type === events_2.POPUP.CANCEL_POPUP_REQUEST) {
          clearTimeout(this.requestTimeout);
          if (this.popupPromise) {
            this.close();
          }
          this.unlock();
        } else if (data.type === events_2.UI.CLOSE_UI_WINDOW) {
          this.clear(false);
        }
      }
      clear(focus = true) {
        this.locked = false;
        this.popupPromise = void 0;
        this.handshakePromise = (0, utils_1.createDeferred)();
        if (this.channel) {
          this.channel.disconnect();
        }
        if (this.requestTimeout) {
          clearTimeout(this.requestTimeout);
          this.requestTimeout = void 0;
        }
        if (this.openTimeout) {
          clearTimeout(this.openTimeout);
          this.openTimeout = void 0;
        }
        if (this.closeInterval) {
          clearInterval(this.closeInterval);
          this.closeInterval = void 0;
        }
        if (focus && this.extensionTabId) {
          chrome.tabs.update(this.extensionTabId, { active: true });
          this.extensionTabId = 0;
        }
      }
      close() {
        var _a;
        if (!this.popupWindow)
          return;
        this.logger.debug("closing popup");
        if (this.popupWindow.mode === "tab") {
          let _e = chrome.runtime.lastError;
          if (this.popupWindow.tab.id) {
            chrome.tabs.remove(this.popupWindow.tab.id, () => {
              _e = chrome.runtime.lastError;
              if (_e) {
                this.logger.error("closed with error", _e);
              }
            });
          }
        } else if (this.popupWindow.mode === "window") {
          this.popupWindow.window.close();
        }
        this.popupWindow = void 0;
        if ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.useCoreInPopup) {
          this.channel.clear();
        }
      }
      async postMessage(message) {
        var _a, _b;
        if (!this.popupWindow && message.type !== events_2.UI.REQUEST_UI_WINDOW && this.openTimeout) {
          this.clear();
          (0, showPopupRequest_1.showPopupRequest)(this.open.bind(this), () => {
            this.emitClosed();
          });
          return;
        }
        if (this.popupPromise) {
          await this.popupPromise.promise;
        }
        if (((_a = this.popupWindow) === null || _a === void 0 ? void 0 : _a.mode) === "window") {
          this.popupWindow.window.postMessage(message, this.origin);
        } else if (((_b = this.popupWindow) === null || _b === void 0 ? void 0 : _b.mode) === "tab") {
          this.channel.postMessage(message);
        }
      }
      isWebExtensionWithTab() {
        var _a;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.env) === "webextension" && typeof chrome !== "undefined" && typeof (chrome === null || chrome === void 0 ? void 0 : chrome.tabs) !== "undefined";
      }
      emitClosed() {
        var _a;
        if ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.useCoreInPopup) {
          this.channel.resolveMessagePromises({
            code: "Method_Interrupted",
            error: events_2.POPUP.CLOSED
          });
        }
        this.emit(events_2.POPUP.CLOSED);
      }
    };
    exports2.PopupManager = PopupManager;
  }
});

// node_modules/@trezor/connect-web/lib/webusb/button.js
var require_button = __commonJS({
  "node_modules/@trezor/connect-web/lib/webusb/button.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var render = (className = "", url) => {
      const query = className || ".trezor-webusb-button";
      const buttons = document.querySelectorAll(query);
      const src = `${url}?${Date.now()}`;
      buttons.forEach((b) => {
        if (b.getElementsByTagName("iframe").length < 1) {
          const bounds = b.getBoundingClientRect();
          const btnIframe = document.createElement("iframe");
          btnIframe.frameBorder = "0";
          btnIframe.width = `${Math.round(bounds.width)}px`;
          btnIframe.height = `${Math.round(bounds.height)}px`;
          btnIframe.style.position = "absolute";
          btnIframe.style.top = "0px";
          btnIframe.style.left = "0px";
          btnIframe.style.zIndex = "1";
          btnIframe.setAttribute("allow", "usb");
          btnIframe.setAttribute("scrolling", "no");
          btnIframe.src = src;
          b.append(btnIframe);
        }
      });
    };
    exports2.default = render;
  }
});

// node_modules/@trezor/connect/lib/data/connectSettings.js
var require_connectSettings = __commonJS({
  "node_modules/@trezor/connect/lib/data/connectSettings.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parseConnectSettings = exports2.corsValidator = exports2.DEFAULT_PRIORITY = void 0;
    var version_1 = require_version();
    exports2.DEFAULT_PRIORITY = 2;
    var initialSettings = {
      configSrc: "./data/config.json",
      version: version_1.VERSION,
      debug: false,
      priority: exports2.DEFAULT_PRIORITY,
      trustedHost: true,
      connectSrc: version_1.DEFAULT_DOMAIN,
      iframeSrc: `${version_1.DEFAULT_DOMAIN}iframe.html`,
      popup: false,
      popupSrc: `${version_1.DEFAULT_DOMAIN}popup.html`,
      webusbSrc: `${version_1.DEFAULT_DOMAIN}webusb.html`,
      transports: void 0,
      pendingTransportEvent: true,
      env: "node",
      lazyLoad: false,
      timestamp: (/* @__PURE__ */ new Date()).getTime(),
      interactionTimeout: 600,
      sharedLogger: true
    };
    var parseManifest = (manifest) => {
      if (!manifest)
        return;
      if (typeof manifest.email !== "string")
        return;
      if (typeof manifest.appUrl !== "string")
        return;
      return {
        email: manifest.email,
        appUrl: manifest.appUrl
      };
    };
    var corsValidator = (url) => {
      if (typeof url !== "string")
        return;
      if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*trezor\.io\//))
        return url;
      if (url.match(/^https?:\/\/localhost:[58][0-9]{3}\//))
        return url;
      if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*sldev\.cz\//))
        return url;
      if (url.match(/^https?:\/\/([A-Za-z0-9\-_]+\.)*trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad\.onion\//))
        return url;
    };
    exports2.corsValidator = corsValidator;
    var parseConnectSettings = (input = {}) => {
      var _a;
      const settings2 = { ...initialSettings };
      if ("debug" in input) {
        if (typeof input.debug === "boolean") {
          settings2.debug = input.debug;
        } else if (typeof input.debug === "string") {
          settings2.debug = input.debug === "true";
        }
      }
      if (input.trustedHost === false) {
        settings2.trustedHost = input.trustedHost;
      }
      if (typeof input.connectSrc === "string" && ((_a = input.connectSrc) === null || _a === void 0 ? void 0 : _a.startsWith("http"))) {
        settings2.connectSrc = (0, exports2.corsValidator)(input.connectSrc);
      } else if (settings2.trustedHost) {
        settings2.connectSrc = input.connectSrc;
      }
      const src = settings2.connectSrc || version_1.DEFAULT_DOMAIN;
      settings2.iframeSrc = `${src}iframe.html`;
      settings2.popupSrc = `${src}popup.html`;
      settings2.webusbSrc = `${src}webusb.html`;
      if (typeof input.transportReconnect === "boolean") {
        settings2.transportReconnect = input.transportReconnect;
      }
      if (typeof input.webusb === "boolean") {
        settings2.webusb = input.webusb;
      }
      if (Array.isArray(input.transports)) {
        settings2.transports = input.transports;
      }
      if (typeof input.popup === "boolean") {
        settings2.popup = input.popup;
      }
      if (typeof input.lazyLoad === "boolean") {
        settings2.lazyLoad = input.lazyLoad;
      }
      if (typeof input.pendingTransportEvent === "boolean") {
        settings2.pendingTransportEvent = input.pendingTransportEvent;
      }
      if (typeof input.extension === "string") {
        settings2.extension = input.extension;
      }
      if (typeof input.env === "string") {
        settings2.env = input.env;
      }
      if (typeof input.timestamp === "number") {
        settings2.timestamp = input.timestamp;
      }
      if (typeof input.interactionTimeout === "number") {
        settings2.interactionTimeout = input.interactionTimeout;
      }
      if (typeof input.manifest === "object") {
        settings2.manifest = parseManifest(input.manifest);
      }
      if (typeof input.sharedLogger === "boolean") {
        settings2.sharedLogger = input.sharedLogger;
      }
      if (typeof input.coreMode === "string" && ["auto", "popup", "iframe"].includes(input.coreMode)) {
        settings2.coreMode = input.coreMode;
      }
      if (typeof input._extendWebextensionLifetime === "boolean") {
        settings2._extendWebextensionLifetime = input._extendWebextensionLifetime;
      }
      return settings2;
    };
    exports2.parseConnectSettings = parseConnectSettings;
  }
});

// node_modules/@trezor/connect-web/lib/connectSettings.js
var require_connectSettings2 = __commonJS({
  "node_modules/@trezor/connect-web/lib/connectSettings.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parseConnectSettings = exports2.getEnv = void 0;
    var connectSettings_1 = require_connectSettings();
    var getEnv = () => {
      var _a;
      if (typeof chrome !== "undefined" && typeof ((_a = chrome.runtime) === null || _a === void 0 ? void 0 : _a.onConnect) !== "undefined") {
        return "webextension";
      }
      if (typeof navigator !== "undefined") {
        if (typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative") {
          return "react-native";
        }
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf(" electron/") > -1) {
          return "electron";
        }
      }
      return "web";
    };
    exports2.getEnv = getEnv;
    var processQueryString = (url, keys) => {
      const searchParams = new URLSearchParams(url);
      const result = {};
      const paramArray = Array.from(searchParams.entries());
      paramArray.forEach(([key, value]) => {
        if (keys.includes(key)) {
          result[key] = decodeURIComponent(value);
        }
      });
      return result;
    };
    var parseConnectSettings = (input = {}) => {
      var _a;
      const settings2 = Object.assign({ popup: true }, input);
      let globalSrc;
      if (typeof window !== "undefined") {
        globalSrc = window.__TREZOR_CONNECT_SRC;
      } else if (typeof global !== "undefined") {
        globalSrc = global.__TREZOR_CONNECT_SRC;
      }
      if (typeof globalSrc === "string") {
        settings2.connectSrc = globalSrc;
        settings2.debug = true;
      }
      if (typeof window !== "undefined" && typeof ((_a = window.location) === null || _a === void 0 ? void 0 : _a.search) === "string") {
        const query = processQueryString(window.location.search, ["trezor-connect-src"]);
        if (query["trezor-connect-src"]) {
          settings2.debug = true;
          settings2.connectSrc = query["trezor-connect-src"];
        }
      }
      if (typeof input.env !== "string") {
        settings2.env = (0, exports2.getEnv)();
      }
      return (0, connectSettings_1.parseConnectSettings)(settings2);
    };
    exports2.parseConnectSettings = parseConnectSettings;
  }
});

// node_modules/@trezor/connect-web/lib/impl/core-in-iframe.js
var require_core_in_iframe = __commonJS({
  "node_modules/@trezor/connect-web/lib/impl/core-in-iframe.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TrezorConnect = exports2.CoreInIframe = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var events_1 = tslib_1.__importDefault(require_events());
    var ERRORS = tslib_1.__importStar(require_errors());
    var events_2 = require_events2();
    var factory_1 = require_factory();
    var debug_1 = require_debug();
    var config_1 = require_config();
    var createDeferredManager_1 = require_createDeferredManager();
    var iframe = tslib_1.__importStar(require_iframe2());
    var popup = tslib_1.__importStar(require_popup2());
    var button_1 = tslib_1.__importDefault(require_button());
    var connectSettings_1 = require_connectSettings2();
    var CoreInIframe = class {
      constructor() {
        this.eventEmitter = new events_1.default();
        this.boundHandleMessage = this.handleMessage.bind(this);
        this.boundDispose = this.dispose.bind(this);
        this._settings = (0, connectSettings_1.parseConnectSettings)();
        this._log = (0, debug_1.initLog)("@trezor/connect-web");
        this._messagePromises = (0, createDeferredManager_1.createDeferredManager)({ initialId: 1 });
      }
      initPopupManager() {
        const pm = new popup.PopupManager(this._settings, { logger: this._log });
        pm.on(events_2.POPUP.CLOSED, (error) => {
          iframe.postMessage({
            type: events_2.POPUP.CLOSED,
            payload: error ? { error } : null
          });
        });
        return pm;
      }
      manifest(data) {
        this._settings = (0, connectSettings_1.parseConnectSettings)(Object.assign(Object.assign({}, this._settings), { manifest: data }));
      }
      dispose() {
        this.eventEmitter.removeAllListeners();
        iframe.dispose();
        this._settings = (0, connectSettings_1.parseConnectSettings)();
        if (this._popupManager) {
          this._popupManager.close();
        }
        window.removeEventListener("message", this.boundHandleMessage);
        window.removeEventListener("unload", this.boundDispose);
        return Promise.resolve(void 0);
      }
      cancel(error) {
        if (this._popupManager) {
          this._popupManager.emit(events_2.POPUP.CLOSED, error);
        }
      }
      handleMessage(messageEvent) {
        if (messageEvent.origin !== iframe.origin)
          return;
        const message = (0, events_2.parseMessage)(messageEvent.data);
        this._log.log("handleMessage", message);
        switch (message.event) {
          case events_2.RESPONSE_EVENT: {
            const { id = 0, success, payload } = message;
            const resolved = this._messagePromises.resolve(id, { id, success, payload });
            if (!resolved)
              this._log.warn(`Unknown message id ${id}`);
            break;
          }
          case events_2.DEVICE_EVENT:
            this.eventEmitter.emit(message.event, message);
            this.eventEmitter.emit(message.type, message.payload);
            break;
          case events_2.TRANSPORT_EVENT:
            this.eventEmitter.emit(message.event, message);
            this.eventEmitter.emit(message.type, message.payload);
            break;
          case events_2.BLOCKCHAIN_EVENT:
            this.eventEmitter.emit(message.event, message);
            this.eventEmitter.emit(message.type, message.payload);
            break;
          case events_2.UI_EVENT:
            if (message.type === events_2.IFRAME.BOOTSTRAP) {
              iframe.clearTimeout();
              break;
            }
            if (message.type === events_2.IFRAME.LOADED) {
              iframe.initPromise.resolve();
            }
            if (message.type === events_2.IFRAME.ERROR) {
              iframe.initPromise.reject(message.payload.error);
            }
            this.eventEmitter.emit(message.event, message);
            this.eventEmitter.emit(message.type, message.payload);
            break;
          default:
            this._log.log("Undefined message", messageEvent.data);
        }
      }
      async init(settings2 = {}) {
        var _a, _b;
        if (iframe.instance) {
          throw ERRORS.TypedError("Init_AlreadyInitialized");
        }
        this._settings = (0, connectSettings_1.parseConnectSettings)(Object.assign(Object.assign({}, this._settings), settings2));
        if (!this._settings.manifest) {
          throw ERRORS.TypedError("Init_ManifestMissing");
        }
        if (!((_a = this._settings.transports) === null || _a === void 0 ? void 0 : _a.length)) {
          this._settings.transports = ["BridgeTransport", "WebUsbTransport"];
        }
        if (this._settings.lazyLoad) {
          this._settings.lazyLoad = false;
          return;
        }
        if (!this._popupManager) {
          this._popupManager = this.initPopupManager();
        }
        this._log.enabled = !!this._settings.debug;
        window.addEventListener("message", this.boundHandleMessage);
        window.addEventListener("unload", this.boundDispose);
        await iframe.init(this._settings);
        if (this._settings.coreMode === "auto") {
          const { promiseId, promise } = this._messagePromises.create();
          this._log.debug("coreMode = auto, Checking bridge availability");
          iframe.postMessage({ id: promiseId, type: events_2.TRANSPORT.GET_INFO });
          const response = await promise;
          this._log.debug("Bridge availability response", response);
          if (response.payload === void 0 && navigator.usb && ((_b = this._settings.transports) === null || _b === void 0 ? void 0 : _b.includes("WebUsbTransport"))) {
            throw ERRORS.TypedError("Transport_Missing");
          }
        }
        if (this._settings.sharedLogger !== false) {
          iframe.initIframeLogger();
        }
      }
      async call(params) {
        if (!iframe.instance && !iframe.timeout) {
          this._settings = (0, connectSettings_1.parseConnectSettings)(this._settings);
          if (!this._settings.manifest) {
            return (0, events_2.createErrorMessage)(ERRORS.TypedError("Init_ManifestMissing"));
          }
          if (!this._popupManager) {
            this._popupManager = this.initPopupManager();
          }
          try {
            await this.init(this._settings);
          } catch (error) {
            if (this._popupManager) {
              this._popupManager.clear();
            }
            return (0, events_2.createErrorMessage)(error);
          }
        }
        if (iframe.timeout) {
          await iframe.initPromise.promise;
        }
        if (iframe.error) {
          return (0, events_2.createErrorMessage)(iframe.error);
        }
        if (this._settings.popup && this._popupManager) {
          this._popupManager.request();
        }
        try {
          const { promiseId, promise } = this._messagePromises.create();
          iframe.postMessage({ id: promiseId, type: events_2.IFRAME.CALL, payload: params });
          const response = await promise;
          if (response) {
            if (!response.success && response.payload.code !== "Device_CallInProgress" && this._popupManager) {
              this._popupManager.unlock();
            }
            return response;
          }
          if (this._popupManager) {
            this._popupManager.unlock();
          }
          return (0, events_2.createErrorMessage)(ERRORS.TypedError("Method_NoResponse"));
        } catch (error) {
          this._log.error("__call error", error);
          if (this._popupManager) {
            this._popupManager.clear(false);
          }
          return (0, events_2.createErrorMessage)(error);
        }
      }
      uiResponse(response) {
        if (!iframe.instance) {
          throw ERRORS.TypedError("Init_NotInitialized");
        }
        iframe.postMessage(response);
      }
      renderWebUSBButton(className) {
        (0, button_1.default)(className, this._settings.webusbSrc);
      }
      async requestLogin(params) {
        if (typeof params.callback === "function") {
          const { callback } = params;
          const loginChallengeListener = async (event) => {
            const { data } = event;
            if (data && data.type === events_2.UI.LOGIN_CHALLENGE_REQUEST) {
              try {
                const payload = await callback();
                iframe.postMessage({
                  type: events_2.UI.LOGIN_CHALLENGE_RESPONSE,
                  payload
                });
              } catch (error) {
                iframe.postMessage({
                  type: events_2.UI.LOGIN_CHALLENGE_RESPONSE,
                  payload: error.message
                });
              }
            }
          };
          window.addEventListener("message", loginChallengeListener, false);
          const response = await this.call(Object.assign(Object.assign({ method: "requestLogin" }, params), { asyncChallenge: true, callback: null }));
          window.removeEventListener("message", loginChallengeListener);
          return response;
        }
        return this.call(Object.assign({ method: "requestLogin" }, params));
      }
      disableWebUSB() {
        if (!iframe.instance) {
          throw ERRORS.TypedError("Init_NotInitialized");
        }
        iframe.postMessage({ type: events_2.TRANSPORT.DISABLE_WEBUSB });
      }
      async requestWebUSBDevice() {
        try {
          await window.navigator.usb.requestDevice({ filters: config_1.config.webusb });
          iframe.postMessage({ type: events_2.TRANSPORT.REQUEST_DEVICE });
        } catch (_err) {
        }
      }
    };
    exports2.CoreInIframe = CoreInIframe;
    var impl = new CoreInIframe();
    exports2.TrezorConnect = (0, factory_1.factory)({
      eventEmitter: impl.eventEmitter,
      init: impl.init.bind(impl),
      call: impl.call.bind(impl),
      manifest: impl.manifest.bind(impl),
      requestLogin: impl.requestLogin.bind(impl),
      uiResponse: impl.uiResponse.bind(impl),
      renderWebUSBButton: impl.renderWebUSBButton.bind(impl),
      disableWebUSB: impl.disableWebUSB.bind(impl),
      requestWebUSBDevice: impl.requestWebUSBDevice.bind(impl),
      cancel: impl.cancel.bind(impl),
      dispose: impl.dispose.bind(impl)
    });
  }
});

// node_modules/@trezor/connect-web/lib/impl/core-in-popup.js
var require_core_in_popup = __commonJS({
  "node_modules/@trezor/connect-web/lib/impl/core-in-popup.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TrezorConnect = exports2.CoreInPopup = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var events_1 = tslib_1.__importDefault(require_events());
    var events_2 = require_events2();
    var ERRORS = tslib_1.__importStar(require_errors());
    var factory_1 = require_factory();
    var debug_1 = require_debug();
    var popup = tslib_1.__importStar(require_popup2());
    var connectSettings_1 = require_connectSettings2();
    var CoreInPopup = class {
      constructor() {
        this.eventEmitter = new events_1.default();
        this._settings = (0, connectSettings_1.parseConnectSettings)();
        this.logger = (0, debug_1.initLog)("@trezor/connect-web");
        this.popupManagerLogger = (0, debug_1.initLog)("@trezor/connect-web/popupManager");
      }
      logWriterFactory(popupManager) {
        return {
          add: (message) => {
            popupManager.channel.postMessage({
              event: events_2.UI_EVENT,
              type: events_2.IFRAME.LOG,
              payload: message
            }, { usePromise: false, useQueue: true });
          }
        };
      }
      manifest(data) {
        this._settings = (0, connectSettings_1.parseConnectSettings)(Object.assign(Object.assign({}, this._settings), { manifest: data }));
      }
      dispose() {
        this.eventEmitter.removeAllListeners();
        this._settings = (0, connectSettings_1.parseConnectSettings)();
        if (this._popupManager) {
          this._popupManager.close();
        }
        return Promise.resolve(void 0);
      }
      cancel(error) {
        if (this._popupManager) {
          this._popupManager.emit(events_2.POPUP.CLOSED, error);
        }
      }
      init(settings2 = {}) {
        var _a, _b;
        const oldSettings = (0, connectSettings_1.parseConnectSettings)(Object.assign({}, this._settings));
        const newSettings = (0, connectSettings_1.parseConnectSettings)(Object.assign(Object.assign({}, this._settings), settings2));
        if (!((_a = newSettings.transports) === null || _a === void 0 ? void 0 : _a.length)) {
          newSettings.transports = ["BridgeTransport", "WebUsbTransport"];
        }
        newSettings.useCoreInPopup = true;
        if (typeof window !== "undefined" && ((_b = window === null || window === void 0 ? void 0 : window.location) === null || _b === void 0 ? void 0 : _b.origin)) {
          newSettings.origin = window.location.origin;
        }
        const equalSettings = JSON.stringify(oldSettings) === JSON.stringify(newSettings);
        this._settings = newSettings;
        if (!this._popupManager || !equalSettings) {
          if (this._popupManager)
            this._popupManager.close();
          this._popupManager = new popup.PopupManager(this._settings, {
            logger: this.popupManagerLogger
          });
          (0, debug_1.setLogWriter)(() => this.logWriterFactory(this._popupManager));
        }
        this.logger.enabled = !!settings2.debug;
        if (!this._settings.manifest) {
          throw ERRORS.TypedError("Init_ManifestMissing");
        }
        this.logger.debug("initiated");
        return Promise.resolve();
      }
      async call(params) {
        var _a, _b;
        this.logger.debug("call", params);
        if (!this._popupManager) {
          return (0, events_2.createErrorMessage)(ERRORS.TypedError("Init_NotInitialized"));
        }
        if (this._settings.popup) {
          await this._popupManager.request();
        }
        try {
          await this._popupManager.channel.init();
          if (this._settings.env === "webextension") {
            await ((_a = this._popupManager.popupPromise) === null || _a === void 0 ? void 0 : _a.promise);
            this._popupManager.channel.postMessage({
              type: events_2.POPUP.INIT,
              payload: {
                settings: this._settings,
                useCore: true
              }
            });
          }
          await ((_b = this._popupManager.handshakePromise) === null || _b === void 0 ? void 0 : _b.promise);
          const response = await this._popupManager.channel.postMessage({
            type: events_2.IFRAME.CALL,
            payload: params
          });
          this.logger.debug("call: response: ", response);
          if (response) {
            if (this._popupManager && response.success) {
              this._popupManager.clear();
            }
            return response;
          }
          return (0, events_2.createErrorMessage)(ERRORS.TypedError("Method_NoResponse"));
        } catch (error) {
          this.logger.error("call: error", error);
          this._popupManager.clear(false);
          return (0, events_2.createErrorMessage)(error);
        }
      }
      uiResponse(response) {
        var _a, _b;
        const { type, payload } = response;
        (_b = (_a = this._popupManager) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b.postMessage({ event: events_2.UI_EVENT, type, payload });
      }
      renderWebUSBButton() {
      }
      requestLogin() {
        throw ERRORS.TypedError("Method_InvalidPackage");
      }
      disableWebUSB() {
        throw ERRORS.TypedError("Method_InvalidPackage");
      }
      requestWebUSBDevice() {
        throw ERRORS.TypedError("Method_InvalidPackage");
      }
    };
    exports2.CoreInPopup = CoreInPopup;
    var impl = new CoreInPopup();
    exports2.TrezorConnect = (0, factory_1.factory)({
      eventEmitter: impl.eventEmitter,
      init: impl.init.bind(impl),
      call: impl.call.bind(impl),
      manifest: impl.manifest.bind(impl),
      requestLogin: impl.requestLogin.bind(impl),
      uiResponse: impl.uiResponse.bind(impl),
      renderWebUSBButton: impl.renderWebUSBButton.bind(impl),
      disableWebUSB: impl.disableWebUSB.bind(impl),
      requestWebUSBDevice: impl.requestWebUSBDevice.bind(impl),
      cancel: impl.cancel.bind(impl),
      dispose: impl.dispose.bind(impl)
    });
  }
});

// node_modules/@trezor/connect-web/lib/utils/proxy-event-emitter.js
var require_proxy_event_emitter = __commonJS({
  "node_modules/@trezor/connect-web/lib/utils/proxy-event-emitter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var ProxyEventEmitter = class {
      constructor(eventEmitters) {
        this.eventEmitters = eventEmitters;
      }
      emit(eventName, ...args) {
        this.eventEmitters.forEach((emitter) => emitter.emit(eventName, ...args));
        return true;
      }
      on(eventName, listener) {
        this.eventEmitters.forEach((emitter) => emitter.on(eventName, listener));
        return this;
      }
      off(eventName, listener) {
        this.eventEmitters.forEach((emitter) => emitter.off(eventName, listener));
        return this;
      }
      once(eventName, listener) {
        this.eventEmitters.forEach((emitter) => emitter.once(eventName, listener));
        return this;
      }
      addListener(eventName, listener) {
        this.eventEmitters.forEach((emitter) => emitter.addListener(eventName, listener));
        return this;
      }
      prependListener(eventName, listener) {
        this.eventEmitters.forEach((emitter) => emitter.prependListener(eventName, listener));
        return this;
      }
      prependOnceListener(eventName, listener) {
        this.eventEmitters.forEach((emitter) => emitter.prependOnceListener(eventName, listener));
        return this;
      }
      removeAllListeners(event) {
        this.eventEmitters.forEach((emitter) => emitter.removeAllListeners(event));
        return this;
      }
      removeListener(eventName, listener) {
        this.eventEmitters.forEach((emitter) => emitter.removeListener(eventName, listener));
        return this;
      }
      setMaxListeners(n) {
        this.eventEmitters.forEach((emitter) => emitter.setMaxListeners(n));
        return this;
      }
      eventNames() {
        return this.eventEmitters[0].eventNames();
      }
      getMaxListeners() {
        return this.eventEmitters[0].getMaxListeners();
      }
      listenerCount(eventName, listener) {
        return this.eventEmitters[0].listenerCount(eventName, listener);
      }
      rawListeners(eventName) {
        return this.eventEmitters[0].rawListeners(eventName);
      }
      listeners(eventName) {
        return this.eventEmitters[0].listeners(eventName);
      }
    };
    exports2.default = ProxyEventEmitter;
  }
});

// node_modules/@trezor/connect/lib/constants/network.js
var require_network = __commonJS({
  "node_modules/@trezor/connect/lib/constants/network.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MODULES = exports2.TYPES = void 0;
    exports2.TYPES = {
      bitcoin: "Bitcoin",
      ethereum: "Ethereum",
      eos: "Eos",
      nem: "NEM",
      stellar: "Stellar",
      cardano: "Cardano",
      ripple: "Ripple",
      tezos: "Tezos",
      binance: "Binance",
      solana: "Solana"
    };
    exports2.MODULES = [
      "binance",
      "cardano",
      "eos",
      "ethereum",
      "nem",
      "ripple",
      "solana",
      "stellar",
      "tezos"
    ];
  }
});

// node_modules/@trezor/connect/lib/constants/cardano.js
var require_cardano = __commonJS({
  "node_modules/@trezor/connect/lib/constants/cardano.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NETWORK_IDS = exports2.PROTOCOL_MAGICS = void 0;
    var PROTOCOL_MAGICS;
    (function(PROTOCOL_MAGICS2) {
      PROTOCOL_MAGICS2[PROTOCOL_MAGICS2["mainnet"] = 764824073] = "mainnet";
      PROTOCOL_MAGICS2[PROTOCOL_MAGICS2["testnet_preprod"] = 1] = "testnet_preprod";
      PROTOCOL_MAGICS2[PROTOCOL_MAGICS2["testnet_preview"] = 2] = "testnet_preview";
      PROTOCOL_MAGICS2[PROTOCOL_MAGICS2["testnet_legacy"] = 1097911063] = "testnet_legacy";
    })(PROTOCOL_MAGICS || (exports2.PROTOCOL_MAGICS = PROTOCOL_MAGICS = {}));
    var NETWORK_IDS;
    (function(NETWORK_IDS2) {
      NETWORK_IDS2[NETWORK_IDS2["mainnet"] = 1] = "mainnet";
      NETWORK_IDS2[NETWORK_IDS2["testnet"] = 0] = "testnet";
    })(NETWORK_IDS || (exports2.NETWORK_IDS = NETWORK_IDS = {}));
  }
});

// node_modules/@sinclair/typebox/typebox.js
var require_typebox = __commonJS({
  "node_modules/@sinclair/typebox/typebox.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Type = exports2.JsonType = exports2.JavaScriptTypeBuilder = exports2.JsonTypeBuilder = exports2.TypeBuilder = exports2.TypeBuilderError = exports2.TransformEncodeBuilder = exports2.TransformDecodeBuilder = exports2.TemplateLiteralDslParser = exports2.TemplateLiteralGenerator = exports2.TemplateLiteralGeneratorError = exports2.TemplateLiteralFinite = exports2.TemplateLiteralFiniteError = exports2.TemplateLiteralParser = exports2.TemplateLiteralParserError = exports2.TemplateLiteralResolver = exports2.TemplateLiteralPattern = exports2.TemplateLiteralPatternError = exports2.UnionResolver = exports2.KeyArrayResolver = exports2.KeyArrayResolverError = exports2.KeyResolver = exports2.ObjectMap = exports2.Intrinsic = exports2.IndexedAccessor = exports2.TypeClone = exports2.TypeExtends = exports2.TypeExtendsResult = exports2.TypeExtendsError = exports2.ExtendsUndefined = exports2.TypeGuard = exports2.TypeGuardUnknownTypeError = exports2.ValueGuard = exports2.FormatRegistry = exports2.TypeBoxError = exports2.TypeRegistry = exports2.PatternStringExact = exports2.PatternNumberExact = exports2.PatternBooleanExact = exports2.PatternString = exports2.PatternNumber = exports2.PatternBoolean = exports2.Kind = exports2.Hint = exports2.Optional = exports2.Readonly = exports2.Transform = void 0;
    exports2.Transform = Symbol.for("TypeBox.Transform");
    exports2.Readonly = Symbol.for("TypeBox.Readonly");
    exports2.Optional = Symbol.for("TypeBox.Optional");
    exports2.Hint = Symbol.for("TypeBox.Hint");
    exports2.Kind = Symbol.for("TypeBox.Kind");
    exports2.PatternBoolean = "(true|false)";
    exports2.PatternNumber = "(0|[1-9][0-9]*)";
    exports2.PatternString = "(.*)";
    exports2.PatternBooleanExact = `^${exports2.PatternBoolean}$`;
    exports2.PatternNumberExact = `^${exports2.PatternNumber}$`;
    exports2.PatternStringExact = `^${exports2.PatternString}$`;
    var TypeRegistry;
    (function(TypeRegistry2) {
      const map = /* @__PURE__ */ new Map();
      function Entries() {
        return new Map(map);
      }
      TypeRegistry2.Entries = Entries;
      function Clear() {
        return map.clear();
      }
      TypeRegistry2.Clear = Clear;
      function Delete(kind) {
        return map.delete(kind);
      }
      TypeRegistry2.Delete = Delete;
      function Has(kind) {
        return map.has(kind);
      }
      TypeRegistry2.Has = Has;
      function Set2(kind, func) {
        map.set(kind, func);
      }
      TypeRegistry2.Set = Set2;
      function Get(kind) {
        return map.get(kind);
      }
      TypeRegistry2.Get = Get;
    })(TypeRegistry || (exports2.TypeRegistry = TypeRegistry = {}));
    var TypeBoxError = class extends Error {
      constructor(message) {
        super(message);
      }
    };
    exports2.TypeBoxError = TypeBoxError;
    var FormatRegistry;
    (function(FormatRegistry2) {
      const map = /* @__PURE__ */ new Map();
      function Entries() {
        return new Map(map);
      }
      FormatRegistry2.Entries = Entries;
      function Clear() {
        return map.clear();
      }
      FormatRegistry2.Clear = Clear;
      function Delete(format) {
        return map.delete(format);
      }
      FormatRegistry2.Delete = Delete;
      function Has(format) {
        return map.has(format);
      }
      FormatRegistry2.Has = Has;
      function Set2(format, func) {
        map.set(format, func);
      }
      FormatRegistry2.Set = Set2;
      function Get(format) {
        return map.get(format);
      }
      FormatRegistry2.Get = Get;
    })(FormatRegistry || (exports2.FormatRegistry = FormatRegistry = {}));
    var ValueGuard;
    (function(ValueGuard2) {
      function IsArray(value) {
        return Array.isArray(value);
      }
      ValueGuard2.IsArray = IsArray;
      function IsBigInt(value) {
        return typeof value === "bigint";
      }
      ValueGuard2.IsBigInt = IsBigInt;
      function IsBoolean(value) {
        return typeof value === "boolean";
      }
      ValueGuard2.IsBoolean = IsBoolean;
      function IsDate(value) {
        return value instanceof globalThis.Date;
      }
      ValueGuard2.IsDate = IsDate;
      function IsNull(value) {
        return value === null;
      }
      ValueGuard2.IsNull = IsNull;
      function IsNumber(value) {
        return typeof value === "number";
      }
      ValueGuard2.IsNumber = IsNumber;
      function IsObject(value) {
        return typeof value === "object" && value !== null;
      }
      ValueGuard2.IsObject = IsObject;
      function IsString(value) {
        return typeof value === "string";
      }
      ValueGuard2.IsString = IsString;
      function IsUint8Array(value) {
        return value instanceof globalThis.Uint8Array;
      }
      ValueGuard2.IsUint8Array = IsUint8Array;
      function IsUndefined(value) {
        return value === void 0;
      }
      ValueGuard2.IsUndefined = IsUndefined;
    })(ValueGuard || (exports2.ValueGuard = ValueGuard = {}));
    var TypeGuardUnknownTypeError = class extends TypeBoxError {
    };
    exports2.TypeGuardUnknownTypeError = TypeGuardUnknownTypeError;
    var TypeGuard;
    (function(TypeGuard2) {
      function IsPattern(value) {
        try {
          new RegExp(value);
          return true;
        } catch {
          return false;
        }
      }
      function IsControlCharacterFree(value) {
        if (!ValueGuard.IsString(value))
          return false;
        for (let i = 0; i < value.length; i++) {
          const code = value.charCodeAt(i);
          if (code >= 7 && code <= 13 || code === 27 || code === 127) {
            return false;
          }
        }
        return true;
      }
      function IsAdditionalProperties(value) {
        return IsOptionalBoolean(value) || TSchema(value);
      }
      function IsOptionalBigInt(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsBigInt(value);
      }
      function IsOptionalNumber(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsNumber(value);
      }
      function IsOptionalBoolean(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsBoolean(value);
      }
      function IsOptionalString(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value);
      }
      function IsOptionalPattern(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
      }
      function IsOptionalFormat(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value) && IsControlCharacterFree(value);
      }
      function IsOptionalSchema(value) {
        return ValueGuard.IsUndefined(value) || TSchema(value);
      }
      function TAny(schema) {
        return TKindOf(schema, "Any") && IsOptionalString(schema.$id);
      }
      TypeGuard2.TAny = TAny;
      function TArray(schema) {
        return TKindOf(schema, "Array") && schema.type === "array" && IsOptionalString(schema.$id) && TSchema(schema.items) && IsOptionalNumber(schema.minItems) && IsOptionalNumber(schema.maxItems) && IsOptionalBoolean(schema.uniqueItems) && IsOptionalSchema(schema.contains) && IsOptionalNumber(schema.minContains) && IsOptionalNumber(schema.maxContains);
      }
      TypeGuard2.TArray = TArray;
      function TAsyncIterator(schema) {
        return TKindOf(schema, "AsyncIterator") && schema.type === "AsyncIterator" && IsOptionalString(schema.$id) && TSchema(schema.items);
      }
      TypeGuard2.TAsyncIterator = TAsyncIterator;
      function TBigInt(schema) {
        return TKindOf(schema, "BigInt") && schema.type === "bigint" && IsOptionalString(schema.$id) && IsOptionalBigInt(schema.exclusiveMaximum) && IsOptionalBigInt(schema.exclusiveMinimum) && IsOptionalBigInt(schema.maximum) && IsOptionalBigInt(schema.minimum) && IsOptionalBigInt(schema.multipleOf);
      }
      TypeGuard2.TBigInt = TBigInt;
      function TBoolean(schema) {
        return TKindOf(schema, "Boolean") && schema.type === "boolean" && IsOptionalString(schema.$id);
      }
      TypeGuard2.TBoolean = TBoolean;
      function TConstructor(schema) {
        return TKindOf(schema, "Constructor") && schema.type === "Constructor" && IsOptionalString(schema.$id) && ValueGuard.IsArray(schema.parameters) && schema.parameters.every((schema2) => TSchema(schema2)) && TSchema(schema.returns);
      }
      TypeGuard2.TConstructor = TConstructor;
      function TDate(schema) {
        return TKindOf(schema, "Date") && schema.type === "Date" && IsOptionalString(schema.$id) && IsOptionalNumber(schema.exclusiveMaximumTimestamp) && IsOptionalNumber(schema.exclusiveMinimumTimestamp) && IsOptionalNumber(schema.maximumTimestamp) && IsOptionalNumber(schema.minimumTimestamp) && IsOptionalNumber(schema.multipleOfTimestamp);
      }
      TypeGuard2.TDate = TDate;
      function TFunction(schema) {
        return TKindOf(schema, "Function") && schema.type === "Function" && IsOptionalString(schema.$id) && ValueGuard.IsArray(schema.parameters) && schema.parameters.every((schema2) => TSchema(schema2)) && TSchema(schema.returns);
      }
      TypeGuard2.TFunction = TFunction;
      function TInteger(schema) {
        return TKindOf(schema, "Integer") && schema.type === "integer" && IsOptionalString(schema.$id) && IsOptionalNumber(schema.exclusiveMaximum) && IsOptionalNumber(schema.exclusiveMinimum) && IsOptionalNumber(schema.maximum) && IsOptionalNumber(schema.minimum) && IsOptionalNumber(schema.multipleOf);
      }
      TypeGuard2.TInteger = TInteger;
      function TIntersect(schema) {
        return TKindOf(schema, "Intersect") && (ValueGuard.IsString(schema.type) && schema.type !== "object" ? false : true) && ValueGuard.IsArray(schema.allOf) && schema.allOf.every((schema2) => TSchema(schema2) && !TTransform(schema2)) && IsOptionalString(schema.type) && (IsOptionalBoolean(schema.unevaluatedProperties) || IsOptionalSchema(schema.unevaluatedProperties)) && IsOptionalString(schema.$id);
      }
      TypeGuard2.TIntersect = TIntersect;
      function TIterator(schema) {
        return TKindOf(schema, "Iterator") && schema.type === "Iterator" && IsOptionalString(schema.$id) && TSchema(schema.items);
      }
      TypeGuard2.TIterator = TIterator;
      function TKindOf(schema, kind) {
        return TKind(schema) && schema[exports2.Kind] === kind;
      }
      TypeGuard2.TKindOf = TKindOf;
      function TKind(schema) {
        return ValueGuard.IsObject(schema) && exports2.Kind in schema && ValueGuard.IsString(schema[exports2.Kind]);
      }
      TypeGuard2.TKind = TKind;
      function TLiteralString(schema) {
        return TLiteral(schema) && ValueGuard.IsString(schema.const);
      }
      TypeGuard2.TLiteralString = TLiteralString;
      function TLiteralNumber(schema) {
        return TLiteral(schema) && ValueGuard.IsNumber(schema.const);
      }
      TypeGuard2.TLiteralNumber = TLiteralNumber;
      function TLiteralBoolean(schema) {
        return TLiteral(schema) && ValueGuard.IsBoolean(schema.const);
      }
      TypeGuard2.TLiteralBoolean = TLiteralBoolean;
      function TLiteral(schema) {
        return TKindOf(schema, "Literal") && IsOptionalString(schema.$id) && (ValueGuard.IsBoolean(schema.const) || ValueGuard.IsNumber(schema.const) || ValueGuard.IsString(schema.const));
      }
      TypeGuard2.TLiteral = TLiteral;
      function TNever(schema) {
        return TKindOf(schema, "Never") && ValueGuard.IsObject(schema.not) && Object.getOwnPropertyNames(schema.not).length === 0;
      }
      TypeGuard2.TNever = TNever;
      function TNot(schema) {
        return TKindOf(schema, "Not") && TSchema(schema.not);
      }
      TypeGuard2.TNot = TNot;
      function TNull(schema) {
        return TKindOf(schema, "Null") && schema.type === "null" && IsOptionalString(schema.$id);
      }
      TypeGuard2.TNull = TNull;
      function TNumber(schema) {
        return TKindOf(schema, "Number") && schema.type === "number" && IsOptionalString(schema.$id) && IsOptionalNumber(schema.exclusiveMaximum) && IsOptionalNumber(schema.exclusiveMinimum) && IsOptionalNumber(schema.maximum) && IsOptionalNumber(schema.minimum) && IsOptionalNumber(schema.multipleOf);
      }
      TypeGuard2.TNumber = TNumber;
      function TObject(schema) {
        return TKindOf(schema, "Object") && schema.type === "object" && IsOptionalString(schema.$id) && ValueGuard.IsObject(schema.properties) && IsAdditionalProperties(schema.additionalProperties) && IsOptionalNumber(schema.minProperties) && IsOptionalNumber(schema.maxProperties) && Object.entries(schema.properties).every(([key, schema2]) => IsControlCharacterFree(key) && TSchema(schema2));
      }
      TypeGuard2.TObject = TObject;
      function TPromise(schema) {
        return TKindOf(schema, "Promise") && schema.type === "Promise" && IsOptionalString(schema.$id) && TSchema(schema.item);
      }
      TypeGuard2.TPromise = TPromise;
      function TRecord(schema) {
        return TKindOf(schema, "Record") && schema.type === "object" && IsOptionalString(schema.$id) && IsAdditionalProperties(schema.additionalProperties) && ValueGuard.IsObject(schema.patternProperties) && ((schema2) => {
          const keys = Object.getOwnPropertyNames(schema2.patternProperties);
          return keys.length === 1 && IsPattern(keys[0]) && ValueGuard.IsObject(schema2.patternProperties) && TSchema(schema2.patternProperties[keys[0]]);
        })(schema);
      }
      TypeGuard2.TRecord = TRecord;
      function TRecursive(schema) {
        return ValueGuard.IsObject(schema) && exports2.Hint in schema && schema[exports2.Hint] === "Recursive";
      }
      TypeGuard2.TRecursive = TRecursive;
      function TRef(schema) {
        return TKindOf(schema, "Ref") && IsOptionalString(schema.$id) && ValueGuard.IsString(schema.$ref);
      }
      TypeGuard2.TRef = TRef;
      function TString(schema) {
        return TKindOf(schema, "String") && schema.type === "string" && IsOptionalString(schema.$id) && IsOptionalNumber(schema.minLength) && IsOptionalNumber(schema.maxLength) && IsOptionalPattern(schema.pattern) && IsOptionalFormat(schema.format);
      }
      TypeGuard2.TString = TString;
      function TSymbol(schema) {
        return TKindOf(schema, "Symbol") && schema.type === "symbol" && IsOptionalString(schema.$id);
      }
      TypeGuard2.TSymbol = TSymbol;
      function TTemplateLiteral(schema) {
        return TKindOf(schema, "TemplateLiteral") && schema.type === "string" && ValueGuard.IsString(schema.pattern) && schema.pattern[0] === "^" && schema.pattern[schema.pattern.length - 1] === "$";
      }
      TypeGuard2.TTemplateLiteral = TTemplateLiteral;
      function TThis(schema) {
        return TKindOf(schema, "This") && IsOptionalString(schema.$id) && ValueGuard.IsString(schema.$ref);
      }
      TypeGuard2.TThis = TThis;
      function TTransform(schema) {
        return ValueGuard.IsObject(schema) && exports2.Transform in schema;
      }
      TypeGuard2.TTransform = TTransform;
      function TTuple(schema) {
        return TKindOf(schema, "Tuple") && schema.type === "array" && IsOptionalString(schema.$id) && ValueGuard.IsNumber(schema.minItems) && ValueGuard.IsNumber(schema.maxItems) && schema.minItems === schema.maxItems && // empty
        (ValueGuard.IsUndefined(schema.items) && ValueGuard.IsUndefined(schema.additionalItems) && schema.minItems === 0 || ValueGuard.IsArray(schema.items) && schema.items.every((schema2) => TSchema(schema2)));
      }
      TypeGuard2.TTuple = TTuple;
      function TUndefined(schema) {
        return TKindOf(schema, "Undefined") && schema.type === "undefined" && IsOptionalString(schema.$id);
      }
      TypeGuard2.TUndefined = TUndefined;
      function TUnionLiteral(schema) {
        return TUnion(schema) && schema.anyOf.every((schema2) => TLiteralString(schema2) || TLiteralNumber(schema2));
      }
      TypeGuard2.TUnionLiteral = TUnionLiteral;
      function TUnion(schema) {
        return TKindOf(schema, "Union") && IsOptionalString(schema.$id) && ValueGuard.IsObject(schema) && ValueGuard.IsArray(schema.anyOf) && schema.anyOf.every((schema2) => TSchema(schema2));
      }
      TypeGuard2.TUnion = TUnion;
      function TUint8Array(schema) {
        return TKindOf(schema, "Uint8Array") && schema.type === "Uint8Array" && IsOptionalString(schema.$id) && IsOptionalNumber(schema.minByteLength) && IsOptionalNumber(schema.maxByteLength);
      }
      TypeGuard2.TUint8Array = TUint8Array;
      function TUnknown(schema) {
        return TKindOf(schema, "Unknown") && IsOptionalString(schema.$id);
      }
      TypeGuard2.TUnknown = TUnknown;
      function TUnsafe(schema) {
        return TKindOf(schema, "Unsafe");
      }
      TypeGuard2.TUnsafe = TUnsafe;
      function TVoid(schema) {
        return TKindOf(schema, "Void") && schema.type === "void" && IsOptionalString(schema.$id);
      }
      TypeGuard2.TVoid = TVoid;
      function TReadonly(schema) {
        return ValueGuard.IsObject(schema) && schema[exports2.Readonly] === "Readonly";
      }
      TypeGuard2.TReadonly = TReadonly;
      function TOptional(schema) {
        return ValueGuard.IsObject(schema) && schema[exports2.Optional] === "Optional";
      }
      TypeGuard2.TOptional = TOptional;
      function TSchema(schema) {
        return ValueGuard.IsObject(schema) && (TAny(schema) || TArray(schema) || TBoolean(schema) || TBigInt(schema) || TAsyncIterator(schema) || TConstructor(schema) || TDate(schema) || TFunction(schema) || TInteger(schema) || TIntersect(schema) || TIterator(schema) || TLiteral(schema) || TNever(schema) || TNot(schema) || TNull(schema) || TNumber(schema) || TObject(schema) || TPromise(schema) || TRecord(schema) || TRef(schema) || TString(schema) || TSymbol(schema) || TTemplateLiteral(schema) || TThis(schema) || TTuple(schema) || TUndefined(schema) || TUnion(schema) || TUint8Array(schema) || TUnknown(schema) || TUnsafe(schema) || TVoid(schema) || TKind(schema) && TypeRegistry.Has(schema[exports2.Kind]));
      }
      TypeGuard2.TSchema = TSchema;
    })(TypeGuard || (exports2.TypeGuard = TypeGuard = {}));
    var ExtendsUndefined;
    (function(ExtendsUndefined2) {
      function Check(schema) {
        return schema[exports2.Kind] === "Intersect" ? schema.allOf.every((schema2) => Check(schema2)) : schema[exports2.Kind] === "Union" ? schema.anyOf.some((schema2) => Check(schema2)) : schema[exports2.Kind] === "Undefined" ? true : schema[exports2.Kind] === "Not" ? !Check(schema.not) : false;
      }
      ExtendsUndefined2.Check = Check;
    })(ExtendsUndefined || (exports2.ExtendsUndefined = ExtendsUndefined = {}));
    var TypeExtendsError = class extends TypeBoxError {
    };
    exports2.TypeExtendsError = TypeExtendsError;
    var TypeExtendsResult;
    (function(TypeExtendsResult2) {
      TypeExtendsResult2[TypeExtendsResult2["Union"] = 0] = "Union";
      TypeExtendsResult2[TypeExtendsResult2["True"] = 1] = "True";
      TypeExtendsResult2[TypeExtendsResult2["False"] = 2] = "False";
    })(TypeExtendsResult || (exports2.TypeExtendsResult = TypeExtendsResult = {}));
    var TypeExtends;
    (function(TypeExtends2) {
      function IntoBooleanResult(result) {
        return result === TypeExtendsResult.False ? result : TypeExtendsResult.True;
      }
      function Throw(message) {
        throw new TypeExtendsError(message);
      }
      function IsStructuralRight(right) {
        return TypeGuard.TNever(right) || TypeGuard.TIntersect(right) || TypeGuard.TUnion(right) || TypeGuard.TUnknown(right) || TypeGuard.TAny(right);
      }
      function StructuralRight(left, right) {
        return TypeGuard.TNever(right) ? TNeverRight(left, right) : TypeGuard.TIntersect(right) ? TIntersectRight(left, right) : TypeGuard.TUnion(right) ? TUnionRight(left, right) : TypeGuard.TUnknown(right) ? TUnknownRight(left, right) : TypeGuard.TAny(right) ? TAnyRight(left, right) : Throw("StructuralRight");
      }
      function TAnyRight(left, right) {
        return TypeExtendsResult.True;
      }
      function TAny(left, right) {
        return TypeGuard.TIntersect(right) ? TIntersectRight(left, right) : TypeGuard.TUnion(right) && right.anyOf.some((schema) => TypeGuard.TAny(schema) || TypeGuard.TUnknown(schema)) ? TypeExtendsResult.True : TypeGuard.TUnion(right) ? TypeExtendsResult.Union : TypeGuard.TUnknown(right) ? TypeExtendsResult.True : TypeGuard.TAny(right) ? TypeExtendsResult.True : TypeExtendsResult.Union;
      }
      function TArrayRight(left, right) {
        return TypeGuard.TUnknown(left) ? TypeExtendsResult.False : TypeGuard.TAny(left) ? TypeExtendsResult.Union : TypeGuard.TNever(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TArray(left, right) {
        return TypeGuard.TObject(right) && IsObjectArrayLike(right) ? TypeExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !TypeGuard.TArray(right) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
      }
      function TAsyncIterator(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : !TypeGuard.TAsyncIterator(right) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
      }
      function TBigInt(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeGuard.TBigInt(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TBooleanRight(left, right) {
        return TypeGuard.TLiteral(left) && ValueGuard.IsBoolean(left.const) ? TypeExtendsResult.True : TypeGuard.TBoolean(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TBoolean(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeGuard.TBoolean(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TConstructor(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : !TypeGuard.TConstructor(right) ? TypeExtendsResult.False : left.parameters.length > right.parameters.length ? TypeExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit(right.parameters[index], schema)) === TypeExtendsResult.True) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.returns, right.returns));
      }
      function TDate(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeGuard.TDate(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TFunction(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : !TypeGuard.TFunction(right) ? TypeExtendsResult.False : left.parameters.length > right.parameters.length ? TypeExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit(right.parameters[index], schema)) === TypeExtendsResult.True) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.returns, right.returns));
      }
      function TIntegerRight(left, right) {
        return TypeGuard.TLiteral(left) && ValueGuard.IsNumber(left.const) ? TypeExtendsResult.True : TypeGuard.TNumber(left) || TypeGuard.TInteger(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TInteger(left, right) {
        return TypeGuard.TInteger(right) || TypeGuard.TNumber(right) ? TypeExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeExtendsResult.False;
      }
      function TIntersectRight(left, right) {
        return right.allOf.every((schema) => Visit(left, schema) === TypeExtendsResult.True) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TIntersect(left, right) {
        return left.allOf.some((schema) => Visit(schema, right) === TypeExtendsResult.True) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TIterator(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : !TypeGuard.TIterator(right) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
      }
      function TLiteral(left, right) {
        return TypeGuard.TLiteral(right) && right.const === left.const ? TypeExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeGuard.TString(right) ? TStringRight(left, right) : TypeGuard.TNumber(right) ? TNumberRight(left, right) : TypeGuard.TInteger(right) ? TIntegerRight(left, right) : TypeGuard.TBoolean(right) ? TBooleanRight(left, right) : TypeExtendsResult.False;
      }
      function TNeverRight(left, right) {
        return TypeExtendsResult.False;
      }
      function TNever(left, right) {
        return TypeExtendsResult.True;
      }
      function UnwrapTNot(schema) {
        let [current, depth] = [schema, 0];
        while (true) {
          if (!TypeGuard.TNot(current))
            break;
          current = current.not;
          depth += 1;
        }
        return depth % 2 === 0 ? current : exports2.Type.Unknown();
      }
      function TNot(left, right) {
        return TypeGuard.TNot(left) ? Visit(UnwrapTNot(left), right) : TypeGuard.TNot(right) ? Visit(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
      }
      function TNull(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeGuard.TNull(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TNumberRight(left, right) {
        return TypeGuard.TLiteralNumber(left) ? TypeExtendsResult.True : TypeGuard.TNumber(left) || TypeGuard.TInteger(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TNumber(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeGuard.TInteger(right) || TypeGuard.TNumber(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function IsObjectPropertyCount(schema, count) {
        return Object.getOwnPropertyNames(schema.properties).length === count;
      }
      function IsObjectStringLike(schema) {
        return IsObjectArrayLike(schema);
      }
      function IsObjectSymbolLike(schema) {
        return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && TypeGuard.TUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (TypeGuard.TString(schema.properties.description.anyOf[0]) && TypeGuard.TUndefined(schema.properties.description.anyOf[1]) || TypeGuard.TString(schema.properties.description.anyOf[1]) && TypeGuard.TUndefined(schema.properties.description.anyOf[0]));
      }
      function IsObjectNumberLike(schema) {
        return IsObjectPropertyCount(schema, 0);
      }
      function IsObjectBooleanLike(schema) {
        return IsObjectPropertyCount(schema, 0);
      }
      function IsObjectBigIntLike(schema) {
        return IsObjectPropertyCount(schema, 0);
      }
      function IsObjectDateLike(schema) {
        return IsObjectPropertyCount(schema, 0);
      }
      function IsObjectUint8ArrayLike(schema) {
        return IsObjectArrayLike(schema);
      }
      function IsObjectFunctionLike(schema) {
        const length = exports2.Type.Number();
        return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit(schema.properties["length"], length)) === TypeExtendsResult.True;
      }
      function IsObjectConstructorLike(schema) {
        return IsObjectPropertyCount(schema, 0);
      }
      function IsObjectArrayLike(schema) {
        const length = exports2.Type.Number();
        return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit(schema.properties["length"], length)) === TypeExtendsResult.True;
      }
      function IsObjectPromiseLike(schema) {
        const then = exports2.Type.Function([exports2.Type.Any()], exports2.Type.Any());
        return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit(schema.properties["then"], then)) === TypeExtendsResult.True;
      }
      function Property(left, right) {
        return Visit(left, right) === TypeExtendsResult.False ? TypeExtendsResult.False : TypeGuard.TOptional(left) && !TypeGuard.TOptional(right) ? TypeExtendsResult.False : TypeExtendsResult.True;
      }
      function TObjectRight(left, right) {
        return TypeGuard.TUnknown(left) ? TypeExtendsResult.False : TypeGuard.TAny(left) ? TypeExtendsResult.Union : TypeGuard.TNever(left) || TypeGuard.TLiteralString(left) && IsObjectStringLike(right) || TypeGuard.TLiteralNumber(left) && IsObjectNumberLike(right) || TypeGuard.TLiteralBoolean(left) && IsObjectBooleanLike(right) || TypeGuard.TSymbol(left) && IsObjectSymbolLike(right) || TypeGuard.TBigInt(left) && IsObjectBigIntLike(right) || TypeGuard.TString(left) && IsObjectStringLike(right) || TypeGuard.TSymbol(left) && IsObjectSymbolLike(right) || TypeGuard.TNumber(left) && IsObjectNumberLike(right) || TypeGuard.TInteger(left) && IsObjectNumberLike(right) || TypeGuard.TBoolean(left) && IsObjectBooleanLike(right) || TypeGuard.TUint8Array(left) && IsObjectUint8ArrayLike(right) || TypeGuard.TDate(left) && IsObjectDateLike(right) || TypeGuard.TConstructor(left) && IsObjectConstructorLike(right) || TypeGuard.TFunction(left) && IsObjectFunctionLike(right) ? TypeExtendsResult.True : TypeGuard.TRecord(left) && TypeGuard.TString(RecordKey(left)) ? (() => {
          return right[exports2.Hint] === "Record" ? TypeExtendsResult.True : TypeExtendsResult.False;
        })() : TypeGuard.TRecord(left) && TypeGuard.TNumber(RecordKey(left)) ? (() => {
          return IsObjectPropertyCount(right, 0) ? TypeExtendsResult.True : TypeExtendsResult.False;
        })() : TypeExtendsResult.False;
      }
      function TObject(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : !TypeGuard.TObject(right) ? TypeExtendsResult.False : (() => {
          for (const key of Object.getOwnPropertyNames(right.properties)) {
            if (!(key in left.properties) && !TypeGuard.TOptional(right.properties[key])) {
              return TypeExtendsResult.False;
            }
            if (TypeGuard.TOptional(right.properties[key])) {
              return TypeExtendsResult.True;
            }
            if (Property(left.properties[key], right.properties[key]) === TypeExtendsResult.False) {
              return TypeExtendsResult.False;
            }
          }
          return TypeExtendsResult.True;
        })();
      }
      function TPromise(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) && IsObjectPromiseLike(right) ? TypeExtendsResult.True : !TypeGuard.TPromise(right) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.item, right.item));
      }
      function RecordKey(schema) {
        return exports2.PatternNumberExact in schema.patternProperties ? exports2.Type.Number() : exports2.PatternStringExact in schema.patternProperties ? exports2.Type.String() : Throw("Unknown record key pattern");
      }
      function RecordValue(schema) {
        return exports2.PatternNumberExact in schema.patternProperties ? schema.patternProperties[exports2.PatternNumberExact] : exports2.PatternStringExact in schema.patternProperties ? schema.patternProperties[exports2.PatternStringExact] : Throw("Unable to get record value schema");
      }
      function TRecordRight(left, right) {
        const [Key, Value] = [RecordKey(right), RecordValue(right)];
        return TypeGuard.TLiteralString(left) && TypeGuard.TNumber(Key) && IntoBooleanResult(Visit(left, Value)) === TypeExtendsResult.True ? TypeExtendsResult.True : TypeGuard.TUint8Array(left) && TypeGuard.TNumber(Key) ? Visit(left, Value) : TypeGuard.TString(left) && TypeGuard.TNumber(Key) ? Visit(left, Value) : TypeGuard.TArray(left) && TypeGuard.TNumber(Key) ? Visit(left, Value) : TypeGuard.TObject(left) ? (() => {
          for (const key of Object.getOwnPropertyNames(left.properties)) {
            if (Property(Value, left.properties[key]) === TypeExtendsResult.False) {
              return TypeExtendsResult.False;
            }
          }
          return TypeExtendsResult.True;
        })() : TypeExtendsResult.False;
      }
      function TRecord(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : !TypeGuard.TRecord(right) ? TypeExtendsResult.False : Visit(RecordValue(left), RecordValue(right));
      }
      function TStringRight(left, right) {
        return TypeGuard.TLiteral(left) && ValueGuard.IsString(left.const) ? TypeExtendsResult.True : TypeGuard.TString(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TString(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeGuard.TString(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TSymbol(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeGuard.TSymbol(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TTemplateLiteral(left, right) {
        return TypeGuard.TTemplateLiteral(left) ? Visit(TemplateLiteralResolver.Resolve(left), right) : TypeGuard.TTemplateLiteral(right) ? Visit(left, TemplateLiteralResolver.Resolve(right)) : Throw("Invalid fallthrough for TemplateLiteral");
      }
      function IsArrayOfTuple(left, right) {
        return TypeGuard.TArray(right) && left.items !== void 0 && left.items.every((schema) => Visit(schema, right.items) === TypeExtendsResult.True);
      }
      function TTupleRight(left, right) {
        return TypeGuard.TNever(left) ? TypeExtendsResult.True : TypeGuard.TUnknown(left) ? TypeExtendsResult.False : TypeGuard.TAny(left) ? TypeExtendsResult.Union : TypeExtendsResult.False;
      }
      function TTuple(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) && IsObjectArrayLike(right) ? TypeExtendsResult.True : TypeGuard.TArray(right) && IsArrayOfTuple(left, right) ? TypeExtendsResult.True : !TypeGuard.TTuple(right) ? TypeExtendsResult.False : ValueGuard.IsUndefined(left.items) && !ValueGuard.IsUndefined(right.items) || !ValueGuard.IsUndefined(left.items) && ValueGuard.IsUndefined(right.items) ? TypeExtendsResult.False : ValueGuard.IsUndefined(left.items) && !ValueGuard.IsUndefined(right.items) ? TypeExtendsResult.True : left.items.every((schema, index) => Visit(schema, right.items[index]) === TypeExtendsResult.True) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TUint8Array(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeGuard.TUint8Array(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TUndefined(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TRecord(right) ? TRecordRight(left, right) : TypeGuard.TVoid(right) ? VoidRight(left, right) : TypeGuard.TUndefined(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TUnionRight(left, right) {
        return right.anyOf.some((schema) => Visit(left, schema) === TypeExtendsResult.True) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TUnion(left, right) {
        return left.anyOf.every((schema) => Visit(schema, right) === TypeExtendsResult.True) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TUnknownRight(left, right) {
        return TypeExtendsResult.True;
      }
      function TUnknown(left, right) {
        return TypeGuard.TNever(right) ? TNeverRight(left, right) : TypeGuard.TIntersect(right) ? TIntersectRight(left, right) : TypeGuard.TUnion(right) ? TUnionRight(left, right) : TypeGuard.TAny(right) ? TAnyRight(left, right) : TypeGuard.TString(right) ? TStringRight(left, right) : TypeGuard.TNumber(right) ? TNumberRight(left, right) : TypeGuard.TInteger(right) ? TIntegerRight(left, right) : TypeGuard.TBoolean(right) ? TBooleanRight(left, right) : TypeGuard.TArray(right) ? TArrayRight(left, right) : TypeGuard.TTuple(right) ? TTupleRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TUnknown(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function VoidRight(left, right) {
        return TypeGuard.TUndefined(left) ? TypeExtendsResult.True : TypeGuard.TUndefined(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TVoid(left, right) {
        return TypeGuard.TIntersect(right) ? TIntersectRight(left, right) : TypeGuard.TUnion(right) ? TUnionRight(left, right) : TypeGuard.TUnknown(right) ? TUnknownRight(left, right) : TypeGuard.TAny(right) ? TAnyRight(left, right) : TypeGuard.TObject(right) ? TObjectRight(left, right) : TypeGuard.TVoid(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function Visit(left, right) {
        return (
          // resolvable
          TypeGuard.TTemplateLiteral(left) || TypeGuard.TTemplateLiteral(right) ? TTemplateLiteral(left, right) : TypeGuard.TNot(left) || TypeGuard.TNot(right) ? TNot(left, right) : (
            // standard
            TypeGuard.TAny(left) ? TAny(left, right) : TypeGuard.TArray(left) ? TArray(left, right) : TypeGuard.TBigInt(left) ? TBigInt(left, right) : TypeGuard.TBoolean(left) ? TBoolean(left, right) : TypeGuard.TAsyncIterator(left) ? TAsyncIterator(left, right) : TypeGuard.TConstructor(left) ? TConstructor(left, right) : TypeGuard.TDate(left) ? TDate(left, right) : TypeGuard.TFunction(left) ? TFunction(left, right) : TypeGuard.TInteger(left) ? TInteger(left, right) : TypeGuard.TIntersect(left) ? TIntersect(left, right) : TypeGuard.TIterator(left) ? TIterator(left, right) : TypeGuard.TLiteral(left) ? TLiteral(left, right) : TypeGuard.TNever(left) ? TNever(left, right) : TypeGuard.TNull(left) ? TNull(left, right) : TypeGuard.TNumber(left) ? TNumber(left, right) : TypeGuard.TObject(left) ? TObject(left, right) : TypeGuard.TRecord(left) ? TRecord(left, right) : TypeGuard.TString(left) ? TString(left, right) : TypeGuard.TSymbol(left) ? TSymbol(left, right) : TypeGuard.TTuple(left) ? TTuple(left, right) : TypeGuard.TPromise(left) ? TPromise(left, right) : TypeGuard.TUint8Array(left) ? TUint8Array(left, right) : TypeGuard.TUndefined(left) ? TUndefined(left, right) : TypeGuard.TUnion(left) ? TUnion(left, right) : TypeGuard.TUnknown(left) ? TUnknown(left, right) : TypeGuard.TVoid(left) ? TVoid(left, right) : Throw(`Unknown left type operand '${left[exports2.Kind]}'`)
          )
        );
      }
      function Extends(left, right) {
        return Visit(left, right);
      }
      TypeExtends2.Extends = Extends;
    })(TypeExtends || (exports2.TypeExtends = TypeExtends = {}));
    var TypeClone;
    (function(TypeClone2) {
      function ArrayType(value) {
        return value.map((value2) => Visit(value2));
      }
      function DateType(value) {
        return new Date(value.getTime());
      }
      function Uint8ArrayType(value) {
        return new Uint8Array(value);
      }
      function ObjectType(value) {
        const clonedProperties = Object.getOwnPropertyNames(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
        const clonedSymbols = Object.getOwnPropertySymbols(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
        return { ...clonedProperties, ...clonedSymbols };
      }
      function Visit(value) {
        return ValueGuard.IsArray(value) ? ArrayType(value) : ValueGuard.IsDate(value) ? DateType(value) : ValueGuard.IsUint8Array(value) ? Uint8ArrayType(value) : ValueGuard.IsObject(value) ? ObjectType(value) : value;
      }
      function Rest(schemas) {
        return schemas.map((schema) => Type(schema));
      }
      TypeClone2.Rest = Rest;
      function Type(schema, options = {}) {
        return { ...Visit(schema), ...options };
      }
      TypeClone2.Type = Type;
    })(TypeClone || (exports2.TypeClone = TypeClone = {}));
    var IndexedAccessor;
    (function(IndexedAccessor2) {
      function OptionalUnwrap(schema) {
        return schema.map((schema2) => {
          const { [exports2.Optional]: _, ...clone } = TypeClone.Type(schema2);
          return clone;
        });
      }
      function IsIntersectOptional(schema) {
        return schema.every((schema2) => TypeGuard.TOptional(schema2));
      }
      function IsUnionOptional(schema) {
        return schema.some((schema2) => TypeGuard.TOptional(schema2));
      }
      function ResolveIntersect(schema) {
        return IsIntersectOptional(schema.allOf) ? exports2.Type.Optional(exports2.Type.Intersect(OptionalUnwrap(schema.allOf))) : schema;
      }
      function ResolveUnion(schema) {
        return IsUnionOptional(schema.anyOf) ? exports2.Type.Optional(exports2.Type.Union(OptionalUnwrap(schema.anyOf))) : schema;
      }
      function ResolveOptional(schema) {
        return schema[exports2.Kind] === "Intersect" ? ResolveIntersect(schema) : schema[exports2.Kind] === "Union" ? ResolveUnion(schema) : schema;
      }
      function TIntersect(schema, key) {
        const resolved = schema.allOf.reduce((acc, schema2) => {
          const indexed = Visit(schema2, key);
          return indexed[exports2.Kind] === "Never" ? acc : [...acc, indexed];
        }, []);
        return ResolveOptional(exports2.Type.Intersect(resolved));
      }
      function TUnion(schema, key) {
        const resolved = schema.anyOf.map((schema2) => Visit(schema2, key));
        return ResolveOptional(exports2.Type.Union(resolved));
      }
      function TObject(schema, key) {
        const property = schema.properties[key];
        return ValueGuard.IsUndefined(property) ? exports2.Type.Never() : exports2.Type.Union([property]);
      }
      function TTuple(schema, key) {
        const items = schema.items;
        if (ValueGuard.IsUndefined(items))
          return exports2.Type.Never();
        const element = items[key];
        if (ValueGuard.IsUndefined(element))
          return exports2.Type.Never();
        return element;
      }
      function Visit(schema, key) {
        return schema[exports2.Kind] === "Intersect" ? TIntersect(schema, key) : schema[exports2.Kind] === "Union" ? TUnion(schema, key) : schema[exports2.Kind] === "Object" ? TObject(schema, key) : schema[exports2.Kind] === "Tuple" ? TTuple(schema, key) : exports2.Type.Never();
      }
      function Resolve(schema, keys, options = {}) {
        const resolved = keys.map((key) => Visit(schema, key.toString()));
        return ResolveOptional(exports2.Type.Union(resolved, options));
      }
      IndexedAccessor2.Resolve = Resolve;
    })(IndexedAccessor || (exports2.IndexedAccessor = IndexedAccessor = {}));
    var Intrinsic;
    (function(Intrinsic2) {
      function Uncapitalize(value) {
        const [first, rest] = [value.slice(0, 1), value.slice(1)];
        return `${first.toLowerCase()}${rest}`;
      }
      function Capitalize(value) {
        const [first, rest] = [value.slice(0, 1), value.slice(1)];
        return `${first.toUpperCase()}${rest}`;
      }
      function Uppercase(value) {
        return value.toUpperCase();
      }
      function Lowercase(value) {
        return value.toLowerCase();
      }
      function IntrinsicTemplateLiteral(schema, mode) {
        const expression = TemplateLiteralParser.ParseExact(schema.pattern);
        const finite = TemplateLiteralFinite.Check(expression);
        if (!finite)
          return { ...schema, pattern: IntrinsicLiteral(schema.pattern, mode) };
        const strings = [...TemplateLiteralGenerator.Generate(expression)];
        const literals = strings.map((value) => exports2.Type.Literal(value));
        const mapped = IntrinsicRest(literals, mode);
        const union = exports2.Type.Union(mapped);
        return exports2.Type.TemplateLiteral([union]);
      }
      function IntrinsicLiteral(value, mode) {
        return typeof value === "string" ? mode === "Uncapitalize" ? Uncapitalize(value) : mode === "Capitalize" ? Capitalize(value) : mode === "Uppercase" ? Uppercase(value) : mode === "Lowercase" ? Lowercase(value) : value : value.toString();
      }
      function IntrinsicRest(schema, mode) {
        if (schema.length === 0)
          return [];
        const [L, ...R] = schema;
        return [Map2(L, mode), ...IntrinsicRest(R, mode)];
      }
      function Visit(schema, mode) {
        return TypeGuard.TTemplateLiteral(schema) ? IntrinsicTemplateLiteral(schema, mode) : TypeGuard.TUnion(schema) ? exports2.Type.Union(IntrinsicRest(schema.anyOf, mode)) : TypeGuard.TLiteral(schema) ? exports2.Type.Literal(IntrinsicLiteral(schema.const, mode)) : schema;
      }
      function Map2(schema, mode) {
        return Visit(schema, mode);
      }
      Intrinsic2.Map = Map2;
    })(Intrinsic || (exports2.Intrinsic = Intrinsic = {}));
    var ObjectMap;
    (function(ObjectMap2) {
      function TIntersect(schema, callback) {
        return exports2.Type.Intersect(schema.allOf.map((inner) => Visit(inner, callback)), { ...schema });
      }
      function TUnion(schema, callback) {
        return exports2.Type.Union(schema.anyOf.map((inner) => Visit(inner, callback)), { ...schema });
      }
      function TObject(schema, callback) {
        return callback(schema);
      }
      function Visit(schema, callback) {
        return schema[exports2.Kind] === "Intersect" ? TIntersect(schema, callback) : schema[exports2.Kind] === "Union" ? TUnion(schema, callback) : schema[exports2.Kind] === "Object" ? TObject(schema, callback) : schema;
      }
      function Map2(schema, callback, options) {
        return { ...Visit(TypeClone.Type(schema), callback), ...options };
      }
      ObjectMap2.Map = Map2;
    })(ObjectMap || (exports2.ObjectMap = ObjectMap = {}));
    var KeyResolver;
    (function(KeyResolver2) {
      function UnwrapPattern(key) {
        return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
      }
      function TIntersect(schema, options) {
        return schema.allOf.reduce((acc, schema2) => [...acc, ...Visit(schema2, options)], []);
      }
      function TUnion(schema, options) {
        const sets = schema.anyOf.map((inner) => Visit(inner, options));
        return [...sets.reduce((set, outer) => outer.map((key) => sets.every((inner) => inner.includes(key)) ? set.add(key) : set)[0], /* @__PURE__ */ new Set())];
      }
      function TObject(schema, options) {
        return Object.getOwnPropertyNames(schema.properties);
      }
      function TRecord(schema, options) {
        return options.includePatterns ? Object.getOwnPropertyNames(schema.patternProperties) : [];
      }
      function Visit(schema, options) {
        return TypeGuard.TIntersect(schema) ? TIntersect(schema, options) : TypeGuard.TUnion(schema) ? TUnion(schema, options) : TypeGuard.TObject(schema) ? TObject(schema, options) : TypeGuard.TRecord(schema) ? TRecord(schema, options) : [];
      }
      function ResolveKeys(schema, options) {
        return [...new Set(Visit(schema, options))];
      }
      KeyResolver2.ResolveKeys = ResolveKeys;
      function ResolvePattern(schema) {
        const keys = ResolveKeys(schema, { includePatterns: true });
        const pattern = keys.map((key) => `(${UnwrapPattern(key)})`);
        return `^(${pattern.join("|")})$`;
      }
      KeyResolver2.ResolvePattern = ResolvePattern;
    })(KeyResolver || (exports2.KeyResolver = KeyResolver = {}));
    var KeyArrayResolverError = class extends TypeBoxError {
    };
    exports2.KeyArrayResolverError = KeyArrayResolverError;
    var KeyArrayResolver;
    (function(KeyArrayResolver2) {
      function Resolve(schema) {
        return Array.isArray(schema) ? schema : TypeGuard.TUnionLiteral(schema) ? schema.anyOf.map((schema2) => schema2.const.toString()) : TypeGuard.TLiteral(schema) ? [schema.const] : TypeGuard.TTemplateLiteral(schema) ? (() => {
          const expression = TemplateLiteralParser.ParseExact(schema.pattern);
          if (!TemplateLiteralFinite.Check(expression))
            throw new KeyArrayResolverError("Cannot resolve keys from infinite template expression");
          return [...TemplateLiteralGenerator.Generate(expression)];
        })() : [];
      }
      KeyArrayResolver2.Resolve = Resolve;
    })(KeyArrayResolver || (exports2.KeyArrayResolver = KeyArrayResolver = {}));
    var UnionResolver;
    (function(UnionResolver2) {
      function* TUnion(union) {
        for (const schema of union.anyOf) {
          if (schema[exports2.Kind] === "Union") {
            yield* TUnion(schema);
          } else {
            yield schema;
          }
        }
      }
      function Resolve(union) {
        return exports2.Type.Union([...TUnion(union)], { ...union });
      }
      UnionResolver2.Resolve = Resolve;
    })(UnionResolver || (exports2.UnionResolver = UnionResolver = {}));
    var TemplateLiteralPatternError = class extends TypeBoxError {
    };
    exports2.TemplateLiteralPatternError = TemplateLiteralPatternError;
    var TemplateLiteralPattern;
    (function(TemplateLiteralPattern2) {
      function Throw(message) {
        throw new TemplateLiteralPatternError(message);
      }
      function Escape(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function Visit(schema, acc) {
        return TypeGuard.TTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : TypeGuard.TUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit(schema2, acc)).join("|")})` : TypeGuard.TNumber(schema) ? `${acc}${exports2.PatternNumber}` : TypeGuard.TInteger(schema) ? `${acc}${exports2.PatternNumber}` : TypeGuard.TBigInt(schema) ? `${acc}${exports2.PatternNumber}` : TypeGuard.TString(schema) ? `${acc}${exports2.PatternString}` : TypeGuard.TLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : TypeGuard.TBoolean(schema) ? `${acc}${exports2.PatternBoolean}` : Throw(`Unexpected Kind '${schema[exports2.Kind]}'`);
      }
      function Create(kinds) {
        return `^${kinds.map((schema) => Visit(schema, "")).join("")}$`;
      }
      TemplateLiteralPattern2.Create = Create;
    })(TemplateLiteralPattern || (exports2.TemplateLiteralPattern = TemplateLiteralPattern = {}));
    var TemplateLiteralResolver;
    (function(TemplateLiteralResolver2) {
      function Resolve(template) {
        const expression = TemplateLiteralParser.ParseExact(template.pattern);
        if (!TemplateLiteralFinite.Check(expression))
          return exports2.Type.String();
        const literals = [...TemplateLiteralGenerator.Generate(expression)].map((value) => exports2.Type.Literal(value));
        return exports2.Type.Union(literals);
      }
      TemplateLiteralResolver2.Resolve = Resolve;
    })(TemplateLiteralResolver || (exports2.TemplateLiteralResolver = TemplateLiteralResolver = {}));
    var TemplateLiteralParserError = class extends TypeBoxError {
    };
    exports2.TemplateLiteralParserError = TemplateLiteralParserError;
    var TemplateLiteralParser;
    (function(TemplateLiteralParser2) {
      function IsNonEscaped(pattern, index, char) {
        return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
      }
      function IsOpenParen(pattern, index) {
        return IsNonEscaped(pattern, index, "(");
      }
      function IsCloseParen(pattern, index) {
        return IsNonEscaped(pattern, index, ")");
      }
      function IsSeparator(pattern, index) {
        return IsNonEscaped(pattern, index, "|");
      }
      function IsGroup(pattern) {
        if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
          return false;
        let count = 0;
        for (let index = 0; index < pattern.length; index++) {
          if (IsOpenParen(pattern, index))
            count += 1;
          if (IsCloseParen(pattern, index))
            count -= 1;
          if (count === 0 && index !== pattern.length - 1)
            return false;
        }
        return true;
      }
      function InGroup(pattern) {
        return pattern.slice(1, pattern.length - 1);
      }
      function IsPrecedenceOr(pattern) {
        let count = 0;
        for (let index = 0; index < pattern.length; index++) {
          if (IsOpenParen(pattern, index))
            count += 1;
          if (IsCloseParen(pattern, index))
            count -= 1;
          if (IsSeparator(pattern, index) && count === 0)
            return true;
        }
        return false;
      }
      function IsPrecedenceAnd(pattern) {
        for (let index = 0; index < pattern.length; index++) {
          if (IsOpenParen(pattern, index))
            return true;
        }
        return false;
      }
      function Or(pattern) {
        let [count, start] = [0, 0];
        const expressions = [];
        for (let index = 0; index < pattern.length; index++) {
          if (IsOpenParen(pattern, index))
            count += 1;
          if (IsCloseParen(pattern, index))
            count -= 1;
          if (IsSeparator(pattern, index) && count === 0) {
            const range2 = pattern.slice(start, index);
            if (range2.length > 0)
              expressions.push(Parse(range2));
            start = index + 1;
          }
        }
        const range = pattern.slice(start);
        if (range.length > 0)
          expressions.push(Parse(range));
        if (expressions.length === 0)
          return { type: "const", const: "" };
        if (expressions.length === 1)
          return expressions[0];
        return { type: "or", expr: expressions };
      }
      function And(pattern) {
        function Group(value, index) {
          if (!IsOpenParen(value, index))
            throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
          let count = 0;
          for (let scan = index; scan < value.length; scan++) {
            if (IsOpenParen(value, scan))
              count += 1;
            if (IsCloseParen(value, scan))
              count -= 1;
            if (count === 0)
              return [index, scan];
          }
          throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
        }
        function Range(pattern2, index) {
          for (let scan = index; scan < pattern2.length; scan++) {
            if (IsOpenParen(pattern2, scan))
              return [index, scan];
          }
          return [index, pattern2.length];
        }
        const expressions = [];
        for (let index = 0; index < pattern.length; index++) {
          if (IsOpenParen(pattern, index)) {
            const [start, end] = Group(pattern, index);
            const range = pattern.slice(start, end + 1);
            expressions.push(Parse(range));
            index = end;
          } else {
            const [start, end] = Range(pattern, index);
            const range = pattern.slice(start, end);
            if (range.length > 0)
              expressions.push(Parse(range));
            index = end - 1;
          }
        }
        return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
      }
      function Parse(pattern) {
        return IsGroup(pattern) ? Parse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: pattern };
      }
      TemplateLiteralParser2.Parse = Parse;
      function ParseExact(pattern) {
        return Parse(pattern.slice(1, pattern.length - 1));
      }
      TemplateLiteralParser2.ParseExact = ParseExact;
    })(TemplateLiteralParser || (exports2.TemplateLiteralParser = TemplateLiteralParser = {}));
    var TemplateLiteralFiniteError = class extends TypeBoxError {
    };
    exports2.TemplateLiteralFiniteError = TemplateLiteralFiniteError;
    var TemplateLiteralFinite;
    (function(TemplateLiteralFinite2) {
      function Throw(message) {
        throw new TemplateLiteralFiniteError(message);
      }
      function IsNumber(expression) {
        return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
      }
      function IsBoolean(expression) {
        return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
      }
      function IsString(expression) {
        return expression.type === "const" && expression.const === ".*";
      }
      function Check(expression) {
        return IsBoolean(expression) ? true : IsNumber(expression) || IsString(expression) ? false : expression.type === "and" ? expression.expr.every((expr) => Check(expr)) : expression.type === "or" ? expression.expr.every((expr) => Check(expr)) : expression.type === "const" ? true : Throw(`Unknown expression type`);
      }
      TemplateLiteralFinite2.Check = Check;
    })(TemplateLiteralFinite || (exports2.TemplateLiteralFinite = TemplateLiteralFinite = {}));
    var TemplateLiteralGeneratorError = class extends TypeBoxError {
    };
    exports2.TemplateLiteralGeneratorError = TemplateLiteralGeneratorError;
    var TemplateLiteralGenerator;
    (function(TemplateLiteralGenerator2) {
      function* Reduce(buffer) {
        if (buffer.length === 1)
          return yield* buffer[0];
        for (const left of buffer[0]) {
          for (const right of Reduce(buffer.slice(1))) {
            yield `${left}${right}`;
          }
        }
      }
      function* And(expression) {
        return yield* Reduce(expression.expr.map((expr) => [...Generate(expr)]));
      }
      function* Or(expression) {
        for (const expr of expression.expr)
          yield* Generate(expr);
      }
      function* Const(expression) {
        return yield expression.const;
      }
      function* Generate(expression) {
        return expression.type === "and" ? yield* And(expression) : expression.type === "or" ? yield* Or(expression) : expression.type === "const" ? yield* Const(expression) : (() => {
          throw new TemplateLiteralGeneratorError("Unknown expression");
        })();
      }
      TemplateLiteralGenerator2.Generate = Generate;
    })(TemplateLiteralGenerator || (exports2.TemplateLiteralGenerator = TemplateLiteralGenerator = {}));
    var TemplateLiteralDslParser;
    (function(TemplateLiteralDslParser2) {
      function* ParseUnion(template) {
        const trim = template.trim().replace(/"|'/g, "");
        return trim === "boolean" ? yield exports2.Type.Boolean() : trim === "number" ? yield exports2.Type.Number() : trim === "bigint" ? yield exports2.Type.BigInt() : trim === "string" ? yield exports2.Type.String() : yield (() => {
          const literals = trim.split("|").map((literal) => exports2.Type.Literal(literal.trim()));
          return literals.length === 0 ? exports2.Type.Never() : literals.length === 1 ? literals[0] : exports2.Type.Union(literals);
        })();
      }
      function* ParseTerminal(template) {
        if (template[1] !== "{") {
          const L = exports2.Type.Literal("$");
          const R = ParseLiteral(template.slice(1));
          return yield* [L, ...R];
        }
        for (let i = 2; i < template.length; i++) {
          if (template[i] === "}") {
            const L = ParseUnion(template.slice(2, i));
            const R = ParseLiteral(template.slice(i + 1));
            return yield* [...L, ...R];
          }
        }
        yield exports2.Type.Literal(template);
      }
      function* ParseLiteral(template) {
        for (let i = 0; i < template.length; i++) {
          if (template[i] === "$") {
            const L = exports2.Type.Literal(template.slice(0, i));
            const R = ParseTerminal(template.slice(i));
            return yield* [L, ...R];
          }
        }
        yield exports2.Type.Literal(template);
      }
      function Parse(template_dsl) {
        return [...ParseLiteral(template_dsl)];
      }
      TemplateLiteralDslParser2.Parse = Parse;
    })(TemplateLiteralDslParser || (exports2.TemplateLiteralDslParser = TemplateLiteralDslParser = {}));
    var TransformDecodeBuilder = class {
      constructor(schema) {
        this.schema = schema;
      }
      Decode(decode) {
        return new TransformEncodeBuilder(this.schema, decode);
      }
    };
    exports2.TransformDecodeBuilder = TransformDecodeBuilder;
    var TransformEncodeBuilder = class {
      constructor(schema, decode) {
        this.schema = schema;
        this.decode = decode;
      }
      Encode(encode) {
        const schema = TypeClone.Type(this.schema);
        return TypeGuard.TTransform(schema) ? (() => {
          const Encode = (value) => schema[exports2.Transform].Encode(encode(value));
          const Decode = (value) => this.decode(schema[exports2.Transform].Decode(value));
          const Codec = { Encode, Decode };
          return { ...schema, [exports2.Transform]: Codec };
        })() : (() => {
          const Codec = { Decode: this.decode, Encode: encode };
          return { ...schema, [exports2.Transform]: Codec };
        })();
      }
    };
    exports2.TransformEncodeBuilder = TransformEncodeBuilder;
    var TypeOrdinal = 0;
    var TypeBuilderError = class extends TypeBoxError {
    };
    exports2.TypeBuilderError = TypeBuilderError;
    var TypeBuilder = class {
      /** `[Internal]` Creates a schema without `static` and `params` types */
      Create(schema) {
        return schema;
      }
      /** `[Internal]` Throws a TypeBuilder error with the given message */
      Throw(message) {
        throw new TypeBuilderError(message);
      }
      /** `[Internal]` Discards property keys from the given record type */
      Discard(record, keys) {
        return keys.reduce((acc, key) => {
          const { [key]: _, ...rest } = acc;
          return rest;
        }, record);
      }
      /** `[Json]` Omits compositing symbols from this schema */
      Strict(schema) {
        return JSON.parse(JSON.stringify(schema));
      }
    };
    exports2.TypeBuilder = TypeBuilder;
    var JsonTypeBuilder = class extends TypeBuilder {
      // ------------------------------------------------------------------------
      // Modifiers
      // ------------------------------------------------------------------------
      /** `[Json]` Creates a Readonly and Optional property */
      ReadonlyOptional(schema) {
        return this.Readonly(this.Optional(schema));
      }
      /** `[Json]` Creates a Readonly property */
      Readonly(schema) {
        return { ...TypeClone.Type(schema), [exports2.Readonly]: "Readonly" };
      }
      /** `[Json]` Creates an Optional property */
      Optional(schema) {
        return { ...TypeClone.Type(schema), [exports2.Optional]: "Optional" };
      }
      // ------------------------------------------------------------------------
      // Types
      // ------------------------------------------------------------------------
      /** `[Json]` Creates an Any type */
      Any(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Any" });
      }
      /** `[Json]` Creates an Array type */
      Array(schema, options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Array", type: "array", items: TypeClone.Type(schema) });
      }
      /** `[Json]` Creates a Boolean type */
      Boolean(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Boolean", type: "boolean" });
      }
      /** `[Json]` Intrinsic function to Capitalize LiteralString types */
      Capitalize(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), "Capitalize"), ...options };
      }
      /** `[Json]` Creates a Composite object type */
      Composite(objects, options) {
        const intersect = exports2.Type.Intersect(objects, {});
        const keys = KeyResolver.ResolveKeys(intersect, { includePatterns: false });
        const properties = keys.reduce((acc, key) => ({ ...acc, [key]: exports2.Type.Index(intersect, [key]) }), {});
        return exports2.Type.Object(properties, options);
      }
      /** `[Json]` Creates a Enum type */
      Enum(item, options = {}) {
        if (ValueGuard.IsUndefined(item))
          return this.Throw("Enum undefined or empty");
        const values1 = Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
        const values2 = [...new Set(values1)];
        const anyOf = values2.map((value) => exports2.Type.Literal(value));
        return this.Union(anyOf, { ...options, [exports2.Hint]: "Enum" });
      }
      /** `[Json]` Creates a Conditional type */
      Extends(left, right, trueType, falseType, options = {}) {
        switch (TypeExtends.Extends(left, right)) {
          case TypeExtendsResult.Union:
            return this.Union([TypeClone.Type(trueType, options), TypeClone.Type(falseType, options)]);
          case TypeExtendsResult.True:
            return TypeClone.Type(trueType, options);
          case TypeExtendsResult.False:
            return TypeClone.Type(falseType, options);
        }
      }
      /** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
      Exclude(unionType, excludedMembers, options = {}) {
        return TypeGuard.TTemplateLiteral(unionType) ? this.Exclude(TemplateLiteralResolver.Resolve(unionType), excludedMembers, options) : TypeGuard.TTemplateLiteral(excludedMembers) ? this.Exclude(unionType, TemplateLiteralResolver.Resolve(excludedMembers), options) : TypeGuard.TUnion(unionType) ? (() => {
          const narrowed = unionType.anyOf.filter((inner) => TypeExtends.Extends(inner, excludedMembers) === TypeExtendsResult.False);
          return narrowed.length === 1 ? TypeClone.Type(narrowed[0], options) : this.Union(narrowed, options);
        })() : TypeExtends.Extends(unionType, excludedMembers) !== TypeExtendsResult.False ? this.Never(options) : TypeClone.Type(unionType, options);
      }
      /** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */
      Extract(type, union, options = {}) {
        return TypeGuard.TTemplateLiteral(type) ? this.Extract(TemplateLiteralResolver.Resolve(type), union, options) : TypeGuard.TTemplateLiteral(union) ? this.Extract(type, TemplateLiteralResolver.Resolve(union), options) : TypeGuard.TUnion(type) ? (() => {
          const narrowed = type.anyOf.filter((inner) => TypeExtends.Extends(inner, union) !== TypeExtendsResult.False);
          return narrowed.length === 1 ? TypeClone.Type(narrowed[0], options) : this.Union(narrowed, options);
        })() : TypeExtends.Extends(type, union) !== TypeExtendsResult.False ? TypeClone.Type(type, options) : this.Never(options);
      }
      /** `[Json]` Returns an Indexed property type for the given keys */
      Index(schema, unresolved, options = {}) {
        return TypeGuard.TArray(schema) && TypeGuard.TNumber(unresolved) ? (() => {
          return TypeClone.Type(schema.items, options);
        })() : TypeGuard.TTuple(schema) && TypeGuard.TNumber(unresolved) ? (() => {
          const items = ValueGuard.IsUndefined(schema.items) ? [] : schema.items;
          const cloned = items.map((schema2) => TypeClone.Type(schema2));
          return this.Union(cloned, options);
        })() : (() => {
          const keys = KeyArrayResolver.Resolve(unresolved);
          const clone = TypeClone.Type(schema);
          return IndexedAccessor.Resolve(clone, keys, options);
        })();
      }
      /** `[Json]` Creates an Integer type */
      Integer(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Integer", type: "integer" });
      }
      /** `[Json]` Creates an Intersect type */
      Intersect(allOf, options = {}) {
        if (allOf.length === 0)
          return exports2.Type.Never();
        if (allOf.length === 1)
          return TypeClone.Type(allOf[0], options);
        if (allOf.some((schema) => TypeGuard.TTransform(schema)))
          this.Throw("Cannot intersect transform types");
        const objects = allOf.every((schema) => TypeGuard.TObject(schema));
        const cloned = TypeClone.Rest(allOf);
        const clonedUnevaluatedProperties = TypeGuard.TSchema(options.unevaluatedProperties) ? { unevaluatedProperties: TypeClone.Type(options.unevaluatedProperties) } : {};
        return options.unevaluatedProperties === false || TypeGuard.TSchema(options.unevaluatedProperties) || objects ? this.Create({ ...options, ...clonedUnevaluatedProperties, [exports2.Kind]: "Intersect", type: "object", allOf: cloned }) : this.Create({ ...options, ...clonedUnevaluatedProperties, [exports2.Kind]: "Intersect", allOf: cloned });
      }
      /** `[Json]` Creates a KeyOf type */
      KeyOf(schema, options = {}) {
        return TypeGuard.TRecord(schema) ? (() => {
          const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
          return pattern === exports2.PatternNumberExact ? this.Number(options) : pattern === exports2.PatternStringExact ? this.String(options) : this.Throw("Unable to resolve key type from Record key pattern");
        })() : TypeGuard.TTuple(schema) ? (() => {
          const items = ValueGuard.IsUndefined(schema.items) ? [] : schema.items;
          const literals = items.map((_, index) => exports2.Type.Literal(index.toString()));
          return this.Union(literals, options);
        })() : TypeGuard.TArray(schema) ? (() => {
          return this.Number(options);
        })() : (() => {
          const keys = KeyResolver.ResolveKeys(schema, { includePatterns: false });
          if (keys.length === 0)
            return this.Never(options);
          const literals = keys.map((key) => this.Literal(key));
          return this.Union(literals, options);
        })();
      }
      /** `[Json]` Creates a Literal type */
      Literal(value, options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Literal", const: value, type: typeof value });
      }
      /** `[Json]` Intrinsic function to Lowercase LiteralString types */
      Lowercase(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), "Lowercase"), ...options };
      }
      /** `[Json]` Creates a Never type */
      Never(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Never", not: {} });
      }
      /** `[Json]` Creates a Not type */
      Not(schema, options) {
        return this.Create({ ...options, [exports2.Kind]: "Not", not: TypeClone.Type(schema) });
      }
      /** `[Json]` Creates a Null type */
      Null(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Null", type: "null" });
      }
      /** `[Json]` Creates a Number type */
      Number(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Number", type: "number" });
      }
      /** `[Json]` Creates an Object type */
      Object(properties, options = {}) {
        const propertyKeys = Object.getOwnPropertyNames(properties);
        const optionalKeys = propertyKeys.filter((key) => TypeGuard.TOptional(properties[key]));
        const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
        const clonedAdditionalProperties = TypeGuard.TSchema(options.additionalProperties) ? { additionalProperties: TypeClone.Type(options.additionalProperties) } : {};
        const clonedProperties = propertyKeys.reduce((acc, key) => ({ ...acc, [key]: TypeClone.Type(properties[key]) }), {});
        return requiredKeys.length > 0 ? this.Create({ ...options, ...clonedAdditionalProperties, [exports2.Kind]: "Object", type: "object", properties: clonedProperties, required: requiredKeys }) : this.Create({ ...options, ...clonedAdditionalProperties, [exports2.Kind]: "Object", type: "object", properties: clonedProperties });
      }
      /** `[Json]` Constructs a type whose keys are omitted from the given type */
      Omit(schema, unresolved, options = {}) {
        const keys = KeyArrayResolver.Resolve(unresolved);
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ["$id", exports2.Transform]), (object) => {
          if (ValueGuard.IsArray(object.required)) {
            object.required = object.required.filter((key) => !keys.includes(key));
            if (object.required.length === 0)
              delete object.required;
          }
          for (const key of Object.getOwnPropertyNames(object.properties)) {
            if (keys.includes(key))
              delete object.properties[key];
          }
          return this.Create(object);
        }, options);
      }
      /** `[Json]` Constructs a type where all properties are optional */
      Partial(schema, options = {}) {
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ["$id", exports2.Transform]), (object) => {
          const properties = Object.getOwnPropertyNames(object.properties).reduce((acc, key) => {
            return { ...acc, [key]: this.Optional(object.properties[key]) };
          }, {});
          return this.Object(
            properties,
            this.Discard(object, ["required"])
            /* object used as options to retain other constraints */
          );
        }, options);
      }
      /** `[Json]` Constructs a type whose keys are picked from the given type */
      Pick(schema, unresolved, options = {}) {
        const keys = KeyArrayResolver.Resolve(unresolved);
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ["$id", exports2.Transform]), (object) => {
          if (ValueGuard.IsArray(object.required)) {
            object.required = object.required.filter((key) => keys.includes(key));
            if (object.required.length === 0)
              delete object.required;
          }
          for (const key of Object.getOwnPropertyNames(object.properties)) {
            if (!keys.includes(key))
              delete object.properties[key];
          }
          return this.Create(object);
        }, options);
      }
      /** `[Json]` Creates a Record type */
      Record(key, schema, options = {}) {
        return TypeGuard.TTemplateLiteral(key) ? (() => {
          const expression = TemplateLiteralParser.ParseExact(key.pattern);
          return TemplateLiteralFinite.Check(expression) ? this.Object([...TemplateLiteralGenerator.Generate(expression)].reduce((acc, key2) => ({ ...acc, [key2]: TypeClone.Type(schema) }), {}), options) : this.Create({ ...options, [exports2.Kind]: "Record", type: "object", patternProperties: { [key.pattern]: TypeClone.Type(schema) } });
        })() : TypeGuard.TUnion(key) ? (() => {
          const union = UnionResolver.Resolve(key);
          if (TypeGuard.TUnionLiteral(union)) {
            const properties = union.anyOf.reduce((acc, literal) => ({ ...acc, [literal.const]: TypeClone.Type(schema) }), {});
            return this.Object(properties, { ...options, [exports2.Hint]: "Record" });
          } else
            this.Throw("Record key of type union contains non-literal types");
        })() : TypeGuard.TLiteral(key) ? (() => {
          return ValueGuard.IsString(key.const) || ValueGuard.IsNumber(key.const) ? this.Object({ [key.const]: TypeClone.Type(schema) }, options) : this.Throw("Record key of type literal is not of type string or number");
        })() : TypeGuard.TInteger(key) || TypeGuard.TNumber(key) ? (() => {
          return this.Create({ ...options, [exports2.Kind]: "Record", type: "object", patternProperties: { [exports2.PatternNumberExact]: TypeClone.Type(schema) } });
        })() : TypeGuard.TString(key) ? (() => {
          const pattern = ValueGuard.IsUndefined(key.pattern) ? exports2.PatternStringExact : key.pattern;
          return this.Create({ ...options, [exports2.Kind]: "Record", type: "object", patternProperties: { [pattern]: TypeClone.Type(schema) } });
        })() : this.Never();
      }
      /** `[Json]` Creates a Recursive type */
      Recursive(callback, options = {}) {
        if (ValueGuard.IsUndefined(options.$id))
          options.$id = `T${TypeOrdinal++}`;
        const thisType = callback({ [exports2.Kind]: "This", $ref: `${options.$id}` });
        thisType.$id = options.$id;
        return this.Create({ ...options, [exports2.Hint]: "Recursive", ...thisType });
      }
      /** `[Json]` Creates a Ref type. */
      Ref(unresolved, options = {}) {
        if (ValueGuard.IsString(unresolved))
          return this.Create({ ...options, [exports2.Kind]: "Ref", $ref: unresolved });
        if (ValueGuard.IsUndefined(unresolved.$id))
          this.Throw("Reference target type must specify an $id");
        return this.Create({ ...options, [exports2.Kind]: "Ref", $ref: unresolved.$id });
      }
      /** `[Json]` Constructs a type where all properties are required */
      Required(schema, options = {}) {
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ["$id", exports2.Transform]), (object) => {
          const properties = Object.getOwnPropertyNames(object.properties).reduce((acc, key) => {
            return { ...acc, [key]: this.Discard(object.properties[key], [exports2.Optional]) };
          }, {});
          return this.Object(
            properties,
            object
            /* object used as options to retain other constraints  */
          );
        }, options);
      }
      /** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
      Rest(schema) {
        return TypeGuard.TTuple(schema) && !ValueGuard.IsUndefined(schema.items) ? TypeClone.Rest(schema.items) : TypeGuard.TIntersect(schema) ? TypeClone.Rest(schema.allOf) : TypeGuard.TUnion(schema) ? TypeClone.Rest(schema.anyOf) : [];
      }
      /** `[Json]` Creates a String type */
      String(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "String", type: "string" });
      }
      /** `[Json]` Creates a TemplateLiteral type */
      TemplateLiteral(unresolved, options = {}) {
        const pattern = ValueGuard.IsString(unresolved) ? TemplateLiteralPattern.Create(TemplateLiteralDslParser.Parse(unresolved)) : TemplateLiteralPattern.Create(unresolved);
        return this.Create({ ...options, [exports2.Kind]: "TemplateLiteral", type: "string", pattern });
      }
      /** `[Json]` Creates a Transform type */
      Transform(schema) {
        return new TransformDecodeBuilder(schema);
      }
      /** `[Json]` Creates a Tuple type */
      Tuple(items, options = {}) {
        const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
        const clonedItems = TypeClone.Rest(items);
        const schema = items.length > 0 ? { ...options, [exports2.Kind]: "Tuple", type: "array", items: clonedItems, additionalItems, minItems, maxItems } : { ...options, [exports2.Kind]: "Tuple", type: "array", minItems, maxItems };
        return this.Create(schema);
      }
      /** `[Json]` Intrinsic function to Uncapitalize LiteralString types */
      Uncapitalize(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), "Uncapitalize"), ...options };
      }
      /** `[Json]` Creates a Union type */
      Union(union, options = {}) {
        return TypeGuard.TTemplateLiteral(union) ? TemplateLiteralResolver.Resolve(union) : (() => {
          const anyOf = union;
          if (anyOf.length === 0)
            return this.Never(options);
          if (anyOf.length === 1)
            return this.Create(TypeClone.Type(anyOf[0], options));
          const clonedAnyOf = TypeClone.Rest(anyOf);
          return this.Create({ ...options, [exports2.Kind]: "Union", anyOf: clonedAnyOf });
        })();
      }
      /** `[Json]` Creates an Unknown type */
      Unknown(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Unknown" });
      }
      /** `[Json]` Creates a Unsafe type that will infers as the generic argument T */
      Unsafe(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: options[exports2.Kind] || "Unsafe" });
      }
      /** `[Json]` Intrinsic function to Uppercase LiteralString types */
      Uppercase(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), "Uppercase"), ...options };
      }
    };
    exports2.JsonTypeBuilder = JsonTypeBuilder;
    var JavaScriptTypeBuilder = class extends JsonTypeBuilder {
      /** `[JavaScript]` Creates a AsyncIterator type */
      AsyncIterator(items, options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "AsyncIterator", type: "AsyncIterator", items: TypeClone.Type(items) });
      }
      /** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
      Awaited(schema, options = {}) {
        const Unwrap = (rest) => rest.length > 0 ? (() => {
          const [L, ...R] = rest;
          return [this.Awaited(L), ...Unwrap(R)];
        })() : rest;
        return TypeGuard.TIntersect(schema) ? exports2.Type.Intersect(Unwrap(schema.allOf)) : TypeGuard.TUnion(schema) ? exports2.Type.Union(Unwrap(schema.anyOf)) : TypeGuard.TPromise(schema) ? this.Awaited(schema.item) : TypeClone.Type(schema, options);
      }
      /** `[JavaScript]` Creates a BigInt type */
      BigInt(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "BigInt", type: "bigint" });
      }
      /** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
      ConstructorParameters(schema, options = {}) {
        return this.Tuple([...schema.parameters], { ...options });
      }
      /** `[JavaScript]` Creates a Constructor type */
      Constructor(parameters, returns, options) {
        const [clonedParameters, clonedReturns] = [TypeClone.Rest(parameters), TypeClone.Type(returns)];
        return this.Create({ ...options, [exports2.Kind]: "Constructor", type: "Constructor", parameters: clonedParameters, returns: clonedReturns });
      }
      /** `[JavaScript]` Creates a Date type */
      Date(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Date", type: "Date" });
      }
      /** `[JavaScript]` Creates a Function type */
      Function(parameters, returns, options) {
        const [clonedParameters, clonedReturns] = [TypeClone.Rest(parameters), TypeClone.Type(returns)];
        return this.Create({ ...options, [exports2.Kind]: "Function", type: "Function", parameters: clonedParameters, returns: clonedReturns });
      }
      /** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
      InstanceType(schema, options = {}) {
        return TypeClone.Type(schema.returns, options);
      }
      /** `[JavaScript]` Creates an Iterator type */
      Iterator(items, options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Iterator", type: "Iterator", items: TypeClone.Type(items) });
      }
      /** `[JavaScript]` Extracts the Parameters from the given Function type */
      Parameters(schema, options = {}) {
        return this.Tuple(schema.parameters, { ...options });
      }
      /** `[JavaScript]` Creates a Promise type */
      Promise(item, options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Promise", type: "Promise", item: TypeClone.Type(item) });
      }
      /** `[Extended]` Creates a String type */
      RegExp(unresolved, options = {}) {
        const pattern = ValueGuard.IsString(unresolved) ? unresolved : unresolved.source;
        return this.Create({ ...options, [exports2.Kind]: "String", type: "string", pattern });
      }
      /**
       * @deprecated Use `Type.RegExp`
       */
      RegEx(regex, options = {}) {
        return this.RegExp(regex, options);
      }
      /** `[JavaScript]` Extracts the ReturnType from the given Function type */
      ReturnType(schema, options = {}) {
        return TypeClone.Type(schema.returns, options);
      }
      /** `[JavaScript]` Creates a Symbol type */
      Symbol(options) {
        return this.Create({ ...options, [exports2.Kind]: "Symbol", type: "symbol" });
      }
      /** `[JavaScript]` Creates a Undefined type */
      Undefined(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Undefined", type: "undefined" });
      }
      /** `[JavaScript]` Creates a Uint8Array type */
      Uint8Array(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Uint8Array", type: "Uint8Array" });
      }
      /** `[JavaScript]` Creates a Void type */
      Void(options = {}) {
        return this.Create({ ...options, [exports2.Kind]: "Void", type: "void" });
      }
    };
    exports2.JavaScriptTypeBuilder = JavaScriptTypeBuilder;
    exports2.JsonType = new JsonTypeBuilder();
    exports2.Type = new JavaScriptTypeBuilder();
  }
});

// node_modules/@sinclair/typebox/value/guard.js
var require_guard = __commonJS({
  "node_modules/@sinclair/typebox/value/guard.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IsValueType = exports2.IsSymbol = exports2.IsFunction = exports2.IsString = exports2.IsBigInt = exports2.IsInteger = exports2.IsNumber = exports2.IsBoolean = exports2.IsNull = exports2.IsUndefined = exports2.IsArray = exports2.IsObject = exports2.IsPlainObject = exports2.HasPropertyKey = exports2.IsDate = exports2.IsUint8Array = exports2.IsPromise = exports2.IsTypedArray = exports2.IsIterator = exports2.IsAsyncIterator = void 0;
    function IsAsyncIterator(value) {
      return IsObject(value) && Symbol.asyncIterator in value;
    }
    exports2.IsAsyncIterator = IsAsyncIterator;
    function IsIterator(value) {
      return IsObject(value) && Symbol.iterator in value;
    }
    exports2.IsIterator = IsIterator;
    function IsTypedArray(value) {
      return ArrayBuffer.isView(value);
    }
    exports2.IsTypedArray = IsTypedArray;
    function IsPromise(value) {
      return value instanceof Promise;
    }
    exports2.IsPromise = IsPromise;
    function IsUint8Array(value) {
      return value instanceof Uint8Array;
    }
    exports2.IsUint8Array = IsUint8Array;
    function IsDate(value) {
      return value instanceof Date && Number.isFinite(value.getTime());
    }
    exports2.IsDate = IsDate;
    function HasPropertyKey(value, key) {
      return key in value;
    }
    exports2.HasPropertyKey = HasPropertyKey;
    function IsPlainObject(value) {
      return IsObject(value) && IsFunction(value.constructor) && value.constructor.name === "Object";
    }
    exports2.IsPlainObject = IsPlainObject;
    function IsObject(value) {
      return value !== null && typeof value === "object";
    }
    exports2.IsObject = IsObject;
    function IsArray(value) {
      return Array.isArray(value) && !ArrayBuffer.isView(value);
    }
    exports2.IsArray = IsArray;
    function IsUndefined(value) {
      return value === void 0;
    }
    exports2.IsUndefined = IsUndefined;
    function IsNull(value) {
      return value === null;
    }
    exports2.IsNull = IsNull;
    function IsBoolean(value) {
      return typeof value === "boolean";
    }
    exports2.IsBoolean = IsBoolean;
    function IsNumber(value) {
      return typeof value === "number";
    }
    exports2.IsNumber = IsNumber;
    function IsInteger(value) {
      return IsNumber(value) && Number.isInteger(value);
    }
    exports2.IsInteger = IsInteger;
    function IsBigInt(value) {
      return typeof value === "bigint";
    }
    exports2.IsBigInt = IsBigInt;
    function IsString(value) {
      return typeof value === "string";
    }
    exports2.IsString = IsString;
    function IsFunction(value) {
      return typeof value === "function";
    }
    exports2.IsFunction = IsFunction;
    function IsSymbol(value) {
      return typeof value === "symbol";
    }
    exports2.IsSymbol = IsSymbol;
    function IsValueType(value) {
      return IsBigInt(value) || IsBoolean(value) || IsNull(value) || IsNumber(value) || IsString(value) || IsSymbol(value) || IsUndefined(value);
    }
    exports2.IsValueType = IsValueType;
  }
});

// node_modules/@sinclair/typebox/system/system.js
var require_system = __commonJS({
  "node_modules/@sinclair/typebox/system/system.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DefaultErrorFunction = exports2.TypeSystemPolicy = exports2.TypeSystemErrorFunction = exports2.TypeSystem = exports2.TypeSystemDuplicateFormat = exports2.TypeSystemDuplicateTypeKind = void 0;
    var guard_1 = require_guard();
    var errors_1 = require_errors2();
    var Types = require_typebox();
    var TypeSystemDuplicateTypeKind = class extends Types.TypeBoxError {
      constructor(kind) {
        super(`Duplicate type kind '${kind}' detected`);
      }
    };
    exports2.TypeSystemDuplicateTypeKind = TypeSystemDuplicateTypeKind;
    var TypeSystemDuplicateFormat = class extends Types.TypeBoxError {
      constructor(kind) {
        super(`Duplicate string format '${kind}' detected`);
      }
    };
    exports2.TypeSystemDuplicateFormat = TypeSystemDuplicateFormat;
    var TypeSystem;
    (function(TypeSystem2) {
      function Type(kind, check) {
        if (Types.TypeRegistry.Has(kind))
          throw new TypeSystemDuplicateTypeKind(kind);
        Types.TypeRegistry.Set(kind, check);
        return (options = {}) => Types.Type.Unsafe({ ...options, [Types.Kind]: kind });
      }
      TypeSystem2.Type = Type;
      function Format(format, check) {
        if (Types.FormatRegistry.Has(format))
          throw new TypeSystemDuplicateFormat(format);
        Types.FormatRegistry.Set(format, check);
        return format;
      }
      TypeSystem2.Format = Format;
    })(TypeSystem || (exports2.TypeSystem = TypeSystem = {}));
    var TypeSystemErrorFunction;
    (function(TypeSystemErrorFunction2) {
      let errorMessageFunction = DefaultErrorFunction;
      function Reset() {
        errorMessageFunction = DefaultErrorFunction;
      }
      TypeSystemErrorFunction2.Reset = Reset;
      function Set2(callback) {
        errorMessageFunction = callback;
      }
      TypeSystemErrorFunction2.Set = Set2;
      function Get() {
        return errorMessageFunction;
      }
      TypeSystemErrorFunction2.Get = Get;
    })(TypeSystemErrorFunction || (exports2.TypeSystemErrorFunction = TypeSystemErrorFunction = {}));
    var TypeSystemPolicy;
    (function(TypeSystemPolicy2) {
      TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
      TypeSystemPolicy2.AllowArrayObject = false;
      TypeSystemPolicy2.AllowNaN = false;
      TypeSystemPolicy2.AllowNullVoid = false;
      function IsExactOptionalProperty(value, key) {
        return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== void 0;
      }
      TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
      function IsObjectLike(value) {
        const isObject = (0, guard_1.IsObject)(value);
        return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !(0, guard_1.IsArray)(value);
      }
      TypeSystemPolicy2.IsObjectLike = IsObjectLike;
      function IsRecordLike(value) {
        return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
      }
      TypeSystemPolicy2.IsRecordLike = IsRecordLike;
      function IsNumberLike(value) {
        const isNumber = (0, guard_1.IsNumber)(value);
        return TypeSystemPolicy2.AllowNaN ? isNumber : isNumber && Number.isFinite(value);
      }
      TypeSystemPolicy2.IsNumberLike = IsNumberLike;
      function IsVoidLike(value) {
        const isUndefined = (0, guard_1.IsUndefined)(value);
        return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
      }
      TypeSystemPolicy2.IsVoidLike = IsVoidLike;
    })(TypeSystemPolicy || (exports2.TypeSystemPolicy = TypeSystemPolicy = {}));
    function DefaultErrorFunction(schema, errorType) {
      switch (errorType) {
        case errors_1.ValueErrorType.ArrayContains:
          return "Expected array to contain at least one matching value";
        case errors_1.ValueErrorType.ArrayMaxContains:
          return `Expected array to contain no more than ${schema.maxContains} matching values`;
        case errors_1.ValueErrorType.ArrayMinContains:
          return `Expected array to contain at least ${schema.minContains} matching values`;
        case errors_1.ValueErrorType.ArrayMaxItems:
          return `Expected array length to be less or equal to ${schema.maxItems}`;
        case errors_1.ValueErrorType.ArrayMinItems:
          return `Expected array length to be greater or equal to ${schema.minItems}`;
        case errors_1.ValueErrorType.ArrayUniqueItems:
          return "Expected array elements to be unique";
        case errors_1.ValueErrorType.Array:
          return "Expected array";
        case errors_1.ValueErrorType.AsyncIterator:
          return "Expected AsyncIterator";
        case errors_1.ValueErrorType.BigIntExclusiveMaximum:
          return `Expected bigint to be less than ${schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.BigIntExclusiveMinimum:
          return `Expected bigint to be greater than ${schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.BigIntMaximum:
          return `Expected bigint to be less or equal to ${schema.maximum}`;
        case errors_1.ValueErrorType.BigIntMinimum:
          return `Expected bigint to be greater or equal to ${schema.minimum}`;
        case errors_1.ValueErrorType.BigIntMultipleOf:
          return `Expected bigint to be a multiple of ${schema.multipleOf}`;
        case errors_1.ValueErrorType.BigInt:
          return "Expected bigint";
        case errors_1.ValueErrorType.Boolean:
          return "Expected boolean";
        case errors_1.ValueErrorType.DateExclusiveMinimumTimestamp:
          return `Expected Date timestamp to be greater than ${schema.exclusiveMinimumTimestamp}`;
        case errors_1.ValueErrorType.DateExclusiveMaximumTimestamp:
          return `Expected Date timestamp to be less than ${schema.exclusiveMaximumTimestamp}`;
        case errors_1.ValueErrorType.DateMinimumTimestamp:
          return `Expected Date timestamp to be greater or equal to ${schema.minimumTimestamp}`;
        case errors_1.ValueErrorType.DateMaximumTimestamp:
          return `Expected Date timestamp to be less or equal to ${schema.maximumTimestamp}`;
        case errors_1.ValueErrorType.DateMultipleOfTimestamp:
          return `Expected Date timestamp to be a multiple of ${schema.multipleOfTimestamp}`;
        case errors_1.ValueErrorType.Date:
          return "Expected Date";
        case errors_1.ValueErrorType.Function:
          return "Expected function";
        case errors_1.ValueErrorType.IntegerExclusiveMaximum:
          return `Expected integer to be less than ${schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.IntegerExclusiveMinimum:
          return `Expected integer to be greater than ${schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.IntegerMaximum:
          return `Expected integer to be less or equal to ${schema.maximum}`;
        case errors_1.ValueErrorType.IntegerMinimum:
          return `Expected integer to be greater or equal to ${schema.minimum}`;
        case errors_1.ValueErrorType.IntegerMultipleOf:
          return `Expected integer to be a multiple of ${schema.multipleOf}`;
        case errors_1.ValueErrorType.Integer:
          return "Expected integer";
        case errors_1.ValueErrorType.IntersectUnevaluatedProperties:
          return "Unexpected property";
        case errors_1.ValueErrorType.Intersect:
          return "Expected all values to match";
        case errors_1.ValueErrorType.Iterator:
          return "Expected Iterator";
        case errors_1.ValueErrorType.Literal:
          return `Expected ${typeof schema.const === "string" ? `'${schema.const}'` : schema.const}`;
        case errors_1.ValueErrorType.Never:
          return "Never";
        case errors_1.ValueErrorType.Not:
          return "Value should not match";
        case errors_1.ValueErrorType.Null:
          return "Expected null";
        case errors_1.ValueErrorType.NumberExclusiveMaximum:
          return `Expected number to be less than ${schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.NumberExclusiveMinimum:
          return `Expected number to be greater than ${schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.NumberMaximum:
          return `Expected number to be less or equal to ${schema.maximum}`;
        case errors_1.ValueErrorType.NumberMinimum:
          return `Expected number to be greater or equal to ${schema.minimum}`;
        case errors_1.ValueErrorType.NumberMultipleOf:
          return `Expected number to be a multiple of ${schema.multipleOf}`;
        case errors_1.ValueErrorType.Number:
          return "Expected number";
        case errors_1.ValueErrorType.Object:
          return "Expected object";
        case errors_1.ValueErrorType.ObjectAdditionalProperties:
          return "Unexpected property";
        case errors_1.ValueErrorType.ObjectMaxProperties:
          return `Expected object to have no more than ${schema.maxProperties} properties`;
        case errors_1.ValueErrorType.ObjectMinProperties:
          return `Expected object to have at least ${schema.minProperties} properties`;
        case errors_1.ValueErrorType.ObjectRequiredProperty:
          return "Required property";
        case errors_1.ValueErrorType.Promise:
          return "Expected Promise";
        case errors_1.ValueErrorType.StringFormatUnknown:
          return `Unknown format '${schema.format}'`;
        case errors_1.ValueErrorType.StringFormat:
          return `Expected string to match '${schema.format}' format`;
        case errors_1.ValueErrorType.StringMaxLength:
          return `Expected string length less or equal to ${schema.maxLength}`;
        case errors_1.ValueErrorType.StringMinLength:
          return `Expected string length greater or equal to ${schema.minLength}`;
        case errors_1.ValueErrorType.StringPattern:
          return `Expected string to match '${schema.pattern}'`;
        case errors_1.ValueErrorType.String:
          return "Expected string";
        case errors_1.ValueErrorType.Symbol:
          return "Expected symbol";
        case errors_1.ValueErrorType.TupleLength:
          return `Expected tuple to have ${schema.maxItems || 0} elements`;
        case errors_1.ValueErrorType.Tuple:
          return "Expected tuple";
        case errors_1.ValueErrorType.Uint8ArrayMaxByteLength:
          return `Expected byte length less or equal to ${schema.maxByteLength}`;
        case errors_1.ValueErrorType.Uint8ArrayMinByteLength:
          return `Expected byte length greater or equal to ${schema.minByteLength}`;
        case errors_1.ValueErrorType.Uint8Array:
          return "Expected Uint8Array";
        case errors_1.ValueErrorType.Undefined:
          return "Expected undefined";
        case errors_1.ValueErrorType.Union:
          return "Expected union value";
        case errors_1.ValueErrorType.Void:
          return "Expected void";
        case errors_1.ValueErrorType.Kind:
          return `Expected kind '${schema[Types.Kind]}'`;
        default:
          return "Unknown error type";
      }
    }
    exports2.DefaultErrorFunction = DefaultErrorFunction;
  }
});

// node_modules/@sinclair/typebox/value/deref.js
var require_deref = __commonJS({
  "node_modules/@sinclair/typebox/value/deref.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Deref = exports2.TypeDereferenceError = void 0;
    var typebox_1 = require_typebox();
    var TypeDereferenceError = class extends typebox_1.TypeBoxError {
      constructor(schema) {
        super(`Unable to dereference schema with $id '${schema.$id}'`);
        this.schema = schema;
      }
    };
    exports2.TypeDereferenceError = TypeDereferenceError;
    function Deref(schema, references) {
      const index = references.findIndex((target) => target.$id === schema.$ref);
      if (index === -1)
        throw new TypeDereferenceError(schema);
      return references[index];
    }
    exports2.Deref = Deref;
  }
});

// node_modules/@sinclair/typebox/value/hash.js
var require_hash = __commonJS({
  "node_modules/@sinclair/typebox/value/hash.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Hash = exports2.ByteMarker = exports2.ValueHashError = void 0;
    var guard_1 = require_guard();
    var ValueHashError = class extends Error {
      constructor(value) {
        super(`Unable to hash value`);
        this.value = value;
      }
    };
    exports2.ValueHashError = ValueHashError;
    var ByteMarker;
    (function(ByteMarker2) {
      ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
      ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
      ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
      ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
      ByteMarker2[ByteMarker2["String"] = 4] = "String";
      ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
      ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
      ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
      ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
      ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
      ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
    })(ByteMarker || (exports2.ByteMarker = ByteMarker = {}));
    var Accumulator = BigInt("14695981039346656037");
    var [Prime, Size] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")];
    var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
    var F64 = new Float64Array(1);
    var F64In = new DataView(F64.buffer);
    var F64Out = new Uint8Array(F64.buffer);
    function* NumberToBytes(value) {
      const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
      for (let i = 0; i < byteCount; i++) {
        yield value >> 8 * (byteCount - 1 - i) & 255;
      }
    }
    function ArrayType(value) {
      FNV1A64(ByteMarker.Array);
      for (const item of value) {
        Visit(item);
      }
    }
    function BooleanType(value) {
      FNV1A64(ByteMarker.Boolean);
      FNV1A64(value ? 1 : 0);
    }
    function BigIntType(value) {
      FNV1A64(ByteMarker.BigInt);
      F64In.setBigInt64(0, value);
      for (const byte of F64Out) {
        FNV1A64(byte);
      }
    }
    function DateType(value) {
      FNV1A64(ByteMarker.Date);
      Visit(value.getTime());
    }
    function NullType(value) {
      FNV1A64(ByteMarker.Null);
    }
    function NumberType(value) {
      FNV1A64(ByteMarker.Number);
      F64In.setFloat64(0, value);
      for (const byte of F64Out) {
        FNV1A64(byte);
      }
    }
    function ObjectType(value) {
      FNV1A64(ByteMarker.Object);
      for (const key of globalThis.Object.keys(value).sort()) {
        Visit(key);
        Visit(value[key]);
      }
    }
    function StringType(value) {
      FNV1A64(ByteMarker.String);
      for (let i = 0; i < value.length; i++) {
        for (const byte of NumberToBytes(value.charCodeAt(i))) {
          FNV1A64(byte);
        }
      }
    }
    function SymbolType(value) {
      FNV1A64(ByteMarker.Symbol);
      Visit(value.description);
    }
    function Uint8ArrayType(value) {
      FNV1A64(ByteMarker.Uint8Array);
      for (let i = 0; i < value.length; i++) {
        FNV1A64(value[i]);
      }
    }
    function UndefinedType(value) {
      return FNV1A64(ByteMarker.Undefined);
    }
    function Visit(value) {
      if ((0, guard_1.IsArray)(value))
        return ArrayType(value);
      if ((0, guard_1.IsBoolean)(value))
        return BooleanType(value);
      if ((0, guard_1.IsBigInt)(value))
        return BigIntType(value);
      if ((0, guard_1.IsDate)(value))
        return DateType(value);
      if ((0, guard_1.IsNull)(value))
        return NullType(value);
      if ((0, guard_1.IsNumber)(value))
        return NumberType(value);
      if ((0, guard_1.IsPlainObject)(value))
        return ObjectType(value);
      if ((0, guard_1.IsString)(value))
        return StringType(value);
      if ((0, guard_1.IsSymbol)(value))
        return SymbolType(value);
      if ((0, guard_1.IsUint8Array)(value))
        return Uint8ArrayType(value);
      if ((0, guard_1.IsUndefined)(value))
        return UndefinedType(value);
      throw new ValueHashError(value);
    }
    function FNV1A64(byte) {
      Accumulator = Accumulator ^ Bytes[byte];
      Accumulator = Accumulator * Prime % Size;
    }
    function Hash(value) {
      Accumulator = BigInt("14695981039346656037");
      Visit(value);
      return Accumulator;
    }
    exports2.Hash = Hash;
  }
});

// node_modules/@sinclair/typebox/errors/errors.js
var require_errors2 = __commonJS({
  "node_modules/@sinclair/typebox/errors/errors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Errors = exports2.ValueErrorIterator = exports2.EscapeKey = exports2.ValueErrorsUnknownTypeError = exports2.ValueErrorType = void 0;
    var guard_1 = require_guard();
    var system_1 = require_system();
    var deref_1 = require_deref();
    var hash_1 = require_hash();
    var Types = require_typebox();
    var ValueErrorType;
    (function(ValueErrorType2) {
      ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
      ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
      ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
      ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
      ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
      ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
      ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
      ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
      ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
      ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
      ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
      ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
      ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
      ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
      ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
      ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
      ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
      ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
      ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
      ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
      ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
      ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
      ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
      ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
      ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
      ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
      ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
      ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
      ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
      ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
      ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
      ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
      ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
      ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
      ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
      ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
      ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
      ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
      ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
      ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 48] = "StringFormatUnknown";
      ValueErrorType2[ValueErrorType2["StringFormat"] = 49] = "StringFormat";
      ValueErrorType2[ValueErrorType2["StringMaxLength"] = 50] = "StringMaxLength";
      ValueErrorType2[ValueErrorType2["StringMinLength"] = 51] = "StringMinLength";
      ValueErrorType2[ValueErrorType2["StringPattern"] = 52] = "StringPattern";
      ValueErrorType2[ValueErrorType2["String"] = 53] = "String";
      ValueErrorType2[ValueErrorType2["Symbol"] = 54] = "Symbol";
      ValueErrorType2[ValueErrorType2["TupleLength"] = 55] = "TupleLength";
      ValueErrorType2[ValueErrorType2["Tuple"] = 56] = "Tuple";
      ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 57] = "Uint8ArrayMaxByteLength";
      ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 58] = "Uint8ArrayMinByteLength";
      ValueErrorType2[ValueErrorType2["Uint8Array"] = 59] = "Uint8Array";
      ValueErrorType2[ValueErrorType2["Undefined"] = 60] = "Undefined";
      ValueErrorType2[ValueErrorType2["Union"] = 61] = "Union";
      ValueErrorType2[ValueErrorType2["Void"] = 62] = "Void";
    })(ValueErrorType || (exports2.ValueErrorType = ValueErrorType = {}));
    var ValueErrorsUnknownTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Unknown type");
        this.schema = schema;
      }
    };
    exports2.ValueErrorsUnknownTypeError = ValueErrorsUnknownTypeError;
    function EscapeKey(key) {
      return key.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    exports2.EscapeKey = EscapeKey;
    function IsDefined(value) {
      return value !== void 0;
    }
    var ValueErrorIterator = class {
      constructor(iterator) {
        this.iterator = iterator;
      }
      [Symbol.iterator]() {
        return this.iterator;
      }
      /** Returns the first value error or undefined if no errors */
      First() {
        const next = this.iterator.next();
        return next.done ? void 0 : next.value;
      }
    };
    exports2.ValueErrorIterator = ValueErrorIterator;
    function Create(type, schema, path, value) {
      return { type, schema, path, value, message: system_1.TypeSystemErrorFunction.Get()(schema, type) };
    }
    function* TAny(schema, references, path, value) {
    }
    function* TArray(schema, references, path, value) {
      if (!(0, guard_1.IsArray)(value)) {
        return yield Create(ValueErrorType.Array, schema, path, value);
      }
      if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
      }
      if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
      }
      for (let i = 0; i < value.length; i++) {
        yield* Visit(schema.items, references, `${path}/${i}`, value[i]);
      }
      if (schema.uniqueItems === true && !function() {
        const set = /* @__PURE__ */ new Set();
        for (const element of value) {
          const hashed = (0, hash_1.Hash)(element);
          if (set.has(hashed)) {
            return false;
          } else {
            set.add(hashed);
          }
        }
        return true;
      }()) {
        yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
      }
      if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) {
        return;
      }
      const containsSchema = IsDefined(schema.contains) ? schema.contains : Types.Type.Never();
      const containsCount = value.reduce((acc, value2, index) => Visit(containsSchema, references, `${path}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
      if (containsCount === 0) {
        yield Create(ValueErrorType.ArrayContains, schema, path, value);
      }
      if ((0, guard_1.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
      }
      if ((0, guard_1.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
      }
    }
    function* TAsyncIterator(schema, references, path, value) {
      if (!(0, guard_1.IsAsyncIterator)(value))
        yield Create(ValueErrorType.AsyncIterator, schema, path, value);
    }
    function* TBigInt(schema, references, path, value) {
      if (!(0, guard_1.IsBigInt)(value))
        return yield Create(ValueErrorType.BigInt, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
      }
    }
    function* TBoolean(schema, references, path, value) {
      if (!(0, guard_1.IsBoolean)(value))
        yield Create(ValueErrorType.Boolean, schema, path, value);
    }
    function* TConstructor(schema, references, path, value) {
      yield* Visit(schema.returns, references, path, value.prototype);
    }
    function* TDate(schema, references, path, value) {
      if (!(0, guard_1.IsDate)(value))
        return yield Create(ValueErrorType.Date, schema, path, value);
      if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
      }
    }
    function* TFunction(schema, references, path, value) {
      if (!(0, guard_1.IsFunction)(value))
        yield Create(ValueErrorType.Function, schema, path, value);
    }
    function* TInteger(schema, references, path, value) {
      if (!(0, guard_1.IsInteger)(value))
        return yield Create(ValueErrorType.Integer, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
      }
    }
    function* TIntersect(schema, references, path, value) {
      for (const inner of schema.allOf) {
        const next = Visit(inner, references, path, value).next();
        if (!next.done) {
          yield Create(ValueErrorType.Intersect, schema, path, value);
          yield next.value;
        }
      }
      if (schema.unevaluatedProperties === false) {
        const keyCheck = new RegExp(Types.KeyResolver.ResolvePattern(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
          if (!keyCheck.test(valueKey)) {
            yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
          }
        }
      }
      if (typeof schema.unevaluatedProperties === "object") {
        const keyCheck = new RegExp(Types.KeyResolver.ResolvePattern(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
          if (!keyCheck.test(valueKey)) {
            const next = Visit(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
            if (!next.done)
              yield next.value;
          }
        }
      }
    }
    function* TIterator(schema, references, path, value) {
      if (!(0, guard_1.IsIterator)(value))
        yield Create(ValueErrorType.Iterator, schema, path, value);
    }
    function* TLiteral(schema, references, path, value) {
      if (!(value === schema.const))
        yield Create(ValueErrorType.Literal, schema, path, value);
    }
    function* TNever(schema, references, path, value) {
      yield Create(ValueErrorType.Never, schema, path, value);
    }
    function* TNot(schema, references, path, value) {
      if (Visit(schema.not, references, path, value).next().done === true)
        yield Create(ValueErrorType.Not, schema, path, value);
    }
    function* TNull(schema, references, path, value) {
      if (!(0, guard_1.IsNull)(value))
        yield Create(ValueErrorType.Null, schema, path, value);
    }
    function* TNumber(schema, references, path, value) {
      if (!system_1.TypeSystemPolicy.IsNumberLike(value))
        return yield Create(ValueErrorType.Number, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.NumberMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.NumberMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
      }
    }
    function* TObject(schema, references, path, value) {
      if (!system_1.TypeSystemPolicy.IsObjectLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
      }
      const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
      const knownKeys = Object.getOwnPropertyNames(schema.properties);
      const unknownKeys = Object.getOwnPropertyNames(value);
      for (const requiredKey of requiredKeys) {
        if (unknownKeys.includes(requiredKey))
          continue;
        yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, void 0);
      }
      if (schema.additionalProperties === false) {
        for (const valueKey of unknownKeys) {
          if (!knownKeys.includes(valueKey)) {
            yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
          }
        }
      }
      if (typeof schema.additionalProperties === "object") {
        for (const valueKey of unknownKeys) {
          if (knownKeys.includes(valueKey))
            continue;
          yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
        }
      }
      for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
          yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
          if (Types.ExtendsUndefined.Check(schema) && !(knownKey in value)) {
            yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, void 0);
          }
        } else {
          if (system_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
            yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
          }
        }
      }
    }
    function* TPromise(schema, references, path, value) {
      if (!(0, guard_1.IsPromise)(value))
        yield Create(ValueErrorType.Promise, schema, path, value);
    }
    function* TRecord(schema, references, path, value) {
      if (!system_1.TypeSystemPolicy.IsRecordLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
      }
      const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
      const regex = new RegExp(patternKey);
      for (const [propertyKey, propertyValue] of Object.entries(value)) {
        if (regex.test(propertyKey))
          yield* Visit(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
      }
      if (typeof schema.additionalProperties === "object") {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
          if (!regex.test(propertyKey))
            yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
      }
      if (schema.additionalProperties === false) {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
          if (regex.test(propertyKey))
            continue;
          return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
      }
    }
    function* TRef(schema, references, path, value) {
      yield* Visit((0, deref_1.Deref)(schema, references), references, path, value);
    }
    function* TString(schema, references, path, value) {
      if (!(0, guard_1.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
      if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
        yield Create(ValueErrorType.StringMinLength, schema, path, value);
      }
      if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
        yield Create(ValueErrorType.StringMaxLength, schema, path, value);
      }
      if ((0, guard_1.IsString)(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value)) {
          yield Create(ValueErrorType.StringPattern, schema, path, value);
        }
      }
      if ((0, guard_1.IsString)(schema.format)) {
        if (!Types.FormatRegistry.Has(schema.format)) {
          yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
        } else {
          const format = Types.FormatRegistry.Get(schema.format);
          if (!format(value)) {
            yield Create(ValueErrorType.StringFormat, schema, path, value);
          }
        }
      }
    }
    function* TSymbol(schema, references, path, value) {
      if (!(0, guard_1.IsSymbol)(value))
        yield Create(ValueErrorType.Symbol, schema, path, value);
    }
    function* TTemplateLiteral(schema, references, path, value) {
      if (!(0, guard_1.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
      const regex = new RegExp(schema.pattern);
      if (!regex.test(value)) {
        yield Create(ValueErrorType.StringPattern, schema, path, value);
      }
    }
    function* TThis(schema, references, path, value) {
      yield* Visit((0, deref_1.Deref)(schema, references), references, path, value);
    }
    function* TTuple(schema, references, path, value) {
      if (!(0, guard_1.IsArray)(value))
        return yield Create(ValueErrorType.Tuple, schema, path, value);
      if (schema.items === void 0 && !(value.length === 0)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
      }
      if (!(value.length === schema.maxItems)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
      }
      if (!schema.items) {
        return;
      }
      for (let i = 0; i < schema.items.length; i++) {
        yield* Visit(schema.items[i], references, `${path}/${i}`, value[i]);
      }
    }
    function* TUndefined(schema, references, path, value) {
      if (!(0, guard_1.IsUndefined)(value))
        yield Create(ValueErrorType.Undefined, schema, path, value);
    }
    function* TUnion(schema, references, path, value) {
      let count = 0;
      for (const subschema of schema.anyOf) {
        const errors = [...Visit(subschema, references, path, value)];
        if (errors.length === 0)
          return;
        count += errors.length;
      }
      if (count > 0) {
        yield Create(ValueErrorType.Union, schema, path, value);
      }
    }
    function* TUint8Array(schema, references, path, value) {
      if (!(0, guard_1.IsUint8Array)(value))
        return yield Create(ValueErrorType.Uint8Array, schema, path, value);
      if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
      }
      if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
      }
    }
    function* TUnknown(schema, references, path, value) {
    }
    function* TVoid(schema, references, path, value) {
      if (!system_1.TypeSystemPolicy.IsVoidLike(value))
        yield Create(ValueErrorType.Void, schema, path, value);
    }
    function* TKind(schema, references, path, value) {
      const check = Types.TypeRegistry.Get(schema[Types.Kind]);
      if (!check(schema, value))
        yield Create(ValueErrorType.Kind, schema, path, value);
    }
    function* Visit(schema, references, path, value) {
      const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[Types.Kind]) {
        case "Any":
          return yield* TAny(schema_, references_, path, value);
        case "Array":
          return yield* TArray(schema_, references_, path, value);
        case "AsyncIterator":
          return yield* TAsyncIterator(schema_, references_, path, value);
        case "BigInt":
          return yield* TBigInt(schema_, references_, path, value);
        case "Boolean":
          return yield* TBoolean(schema_, references_, path, value);
        case "Constructor":
          return yield* TConstructor(schema_, references_, path, value);
        case "Date":
          return yield* TDate(schema_, references_, path, value);
        case "Function":
          return yield* TFunction(schema_, references_, path, value);
        case "Integer":
          return yield* TInteger(schema_, references_, path, value);
        case "Intersect":
          return yield* TIntersect(schema_, references_, path, value);
        case "Iterator":
          return yield* TIterator(schema_, references_, path, value);
        case "Literal":
          return yield* TLiteral(schema_, references_, path, value);
        case "Never":
          return yield* TNever(schema_, references_, path, value);
        case "Not":
          return yield* TNot(schema_, references_, path, value);
        case "Null":
          return yield* TNull(schema_, references_, path, value);
        case "Number":
          return yield* TNumber(schema_, references_, path, value);
        case "Object":
          return yield* TObject(schema_, references_, path, value);
        case "Promise":
          return yield* TPromise(schema_, references_, path, value);
        case "Record":
          return yield* TRecord(schema_, references_, path, value);
        case "Ref":
          return yield* TRef(schema_, references_, path, value);
        case "String":
          return yield* TString(schema_, references_, path, value);
        case "Symbol":
          return yield* TSymbol(schema_, references_, path, value);
        case "TemplateLiteral":
          return yield* TTemplateLiteral(schema_, references_, path, value);
        case "This":
          return yield* TThis(schema_, references_, path, value);
        case "Tuple":
          return yield* TTuple(schema_, references_, path, value);
        case "Undefined":
          return yield* TUndefined(schema_, references_, path, value);
        case "Union":
          return yield* TUnion(schema_, references_, path, value);
        case "Uint8Array":
          return yield* TUint8Array(schema_, references_, path, value);
        case "Unknown":
          return yield* TUnknown(schema_, references_, path, value);
        case "Void":
          return yield* TVoid(schema_, references_, path, value);
        default:
          if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
            throw new ValueErrorsUnknownTypeError(schema);
          return yield* TKind(schema_, references_, path, value);
      }
    }
    function Errors(...args) {
      const iterator = args.length === 3 ? Visit(args[0], args[1], "", args[2]) : Visit(args[0], [], "", args[1]);
      return new ValueErrorIterator(iterator);
    }
    exports2.Errors = Errors;
  }
});

// node_modules/@sinclair/typebox/errors/index.js
var require_errors3 = __commonJS({
  "node_modules/@sinclair/typebox/errors/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_errors2(), exports2);
  }
});

// node_modules/ts-mixer/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Mixin: () => Mixin,
  decorate: () => decorate,
  hasMixin: () => hasMixin,
  mix: () => mix,
  settings: () => settings
});
function Mixin(...constructors) {
  var _a, _b, _c;
  const prototypes = constructors.map((constructor) => constructor.prototype);
  const initFunctionName = settings.initFunction;
  if (initFunctionName !== null) {
    const initFunctions = prototypes.map((proto) => proto[initFunctionName]).filter((func) => typeof func === "function");
    const combinedInitFunction = function(...args) {
      for (let initFunction of initFunctions)
        initFunction.apply(this, args);
    };
    const extraProto = { [initFunctionName]: combinedInitFunction };
    prototypes.push(extraProto);
  }
  function MixedClass(...args) {
    for (const constructor of constructors)
      copyProps(this, new constructor(...args));
    if (initFunctionName !== null && typeof this[initFunctionName] === "function")
      this[initFunctionName].apply(this, args);
  }
  MixedClass.prototype = settings.prototypeStrategy === "copy" ? hardMixProtos(prototypes, MixedClass) : softMixProtos(prototypes, MixedClass);
  Object.setPrototypeOf(MixedClass, settings.staticsStrategy === "copy" ? hardMixProtos(constructors, null, ["prototype"]) : proxyMix(constructors, Function.prototype));
  let DecoratedMixedClass = MixedClass;
  if (settings.decoratorInheritance !== "none") {
    const classDecorators = settings.decoratorInheritance === "deep" ? deepDecoratorSearch(...constructors) : directDecoratorSearch(...constructors);
    for (let decorator of (_a = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.class) !== null && _a !== void 0 ? _a : []) {
      const result = decorator(DecoratedMixedClass);
      if (result) {
        DecoratedMixedClass = result;
      }
    }
    applyPropAndMethodDecorators((_b = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.static) !== null && _b !== void 0 ? _b : {}, DecoratedMixedClass);
    applyPropAndMethodDecorators((_c = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.instance) !== null && _c !== void 0 ? _c : {}, DecoratedMixedClass.prototype);
  }
  registerMixins(DecoratedMixedClass, constructors);
  return DecoratedMixedClass;
}
var copyProps, protoChain, nearestCommonProto, hardMixProtos, unique, getIngredientWithProp, proxyMix, softMixProtos, settings, mixins, getMixinsForClass, registerMixins, hasMixin, mergeObjectsOfDecorators, mergePropertyAndMethodDecorators, mergeDecorators, decorators, findAllConstituentClasses, deepDecoratorSearch, directDecoratorSearch, getDecoratorsForClass, decorateClass, decorateMember, decorate, applyPropAndMethodDecorators, mix;
var init_esm = __esm({
  "node_modules/ts-mixer/dist/esm/index.js"() {
    copyProps = (dest, src, exclude = []) => {
      const props = Object.getOwnPropertyDescriptors(src);
      for (let prop of exclude)
        delete props[prop];
      Object.defineProperties(dest, props);
    };
    protoChain = (obj, currentChain = [obj]) => {
      const proto = Object.getPrototypeOf(obj);
      if (proto === null)
        return currentChain;
      return protoChain(proto, [...currentChain, proto]);
    };
    nearestCommonProto = (...objs) => {
      if (objs.length === 0)
        return void 0;
      let commonProto = void 0;
      const protoChains = objs.map((obj) => protoChain(obj));
      while (protoChains.every((protoChain2) => protoChain2.length > 0)) {
        const protos = protoChains.map((protoChain2) => protoChain2.pop());
        const potentialCommonProto = protos[0];
        if (protos.every((proto) => proto === potentialCommonProto))
          commonProto = potentialCommonProto;
        else
          break;
      }
      return commonProto;
    };
    hardMixProtos = (ingredients, constructor, exclude = []) => {
      var _a;
      const base = (_a = nearestCommonProto(...ingredients)) !== null && _a !== void 0 ? _a : Object.prototype;
      const mixedProto = Object.create(base);
      const visitedProtos = protoChain(base);
      for (let prototype of ingredients) {
        let protos = protoChain(prototype);
        for (let i = protos.length - 1; i >= 0; i--) {
          let newProto = protos[i];
          if (visitedProtos.indexOf(newProto) === -1) {
            copyProps(mixedProto, newProto, ["constructor", ...exclude]);
            visitedProtos.push(newProto);
          }
        }
      }
      mixedProto.constructor = constructor;
      return mixedProto;
    };
    unique = (arr) => arr.filter((e, i) => arr.indexOf(e) == i);
    getIngredientWithProp = (prop, ingredients) => {
      const protoChains = ingredients.map((ingredient) => protoChain(ingredient));
      let protoDepth = 0;
      let protosAreLeftToSearch = true;
      while (protosAreLeftToSearch) {
        protosAreLeftToSearch = false;
        for (let i = ingredients.length - 1; i >= 0; i--) {
          const searchTarget = protoChains[i][protoDepth];
          if (searchTarget !== void 0 && searchTarget !== null) {
            protosAreLeftToSearch = true;
            if (Object.getOwnPropertyDescriptor(searchTarget, prop) != void 0) {
              return protoChains[i][0];
            }
          }
        }
        protoDepth++;
      }
      return void 0;
    };
    proxyMix = (ingredients, prototype = Object.prototype) => new Proxy({}, {
      getPrototypeOf() {
        return prototype;
      },
      setPrototypeOf() {
        throw Error("Cannot set prototype of Proxies created by ts-mixer");
      },
      getOwnPropertyDescriptor(_, prop) {
        return Object.getOwnPropertyDescriptor(getIngredientWithProp(prop, ingredients) || {}, prop);
      },
      defineProperty() {
        throw new Error("Cannot define new properties on Proxies created by ts-mixer");
      },
      has(_, prop) {
        return getIngredientWithProp(prop, ingredients) !== void 0 || prototype[prop] !== void 0;
      },
      get(_, prop) {
        return (getIngredientWithProp(prop, ingredients) || prototype)[prop];
      },
      set(_, prop, val) {
        const ingredientWithProp = getIngredientWithProp(prop, ingredients);
        if (ingredientWithProp === void 0)
          throw new Error("Cannot set new properties on Proxies created by ts-mixer");
        ingredientWithProp[prop] = val;
        return true;
      },
      deleteProperty() {
        throw new Error("Cannot delete properties on Proxies created by ts-mixer");
      },
      ownKeys() {
        return ingredients.map(Object.getOwnPropertyNames).reduce((prev, curr) => curr.concat(prev.filter((key) => curr.indexOf(key) < 0)));
      }
    });
    softMixProtos = (ingredients, constructor) => proxyMix([...ingredients, { constructor }]);
    settings = {
      initFunction: null,
      staticsStrategy: "copy",
      prototypeStrategy: "copy",
      decoratorInheritance: "deep"
    };
    mixins = /* @__PURE__ */ new WeakMap();
    getMixinsForClass = (clazz) => mixins.get(clazz);
    registerMixins = (mixedClass, constituents) => mixins.set(mixedClass, constituents);
    hasMixin = (instance, mixin) => {
      if (instance instanceof mixin)
        return true;
      const constructor = instance.constructor;
      const visited = /* @__PURE__ */ new Set();
      let frontier = /* @__PURE__ */ new Set();
      frontier.add(constructor);
      while (frontier.size > 0) {
        if (frontier.has(mixin))
          return true;
        frontier.forEach((item) => visited.add(item));
        const newFrontier = /* @__PURE__ */ new Set();
        frontier.forEach((item) => {
          var _a;
          const itemConstituents = (_a = mixins.get(item)) !== null && _a !== void 0 ? _a : protoChain(item.prototype).map((proto) => proto.constructor).filter((item2) => item2 !== null);
          if (itemConstituents)
            itemConstituents.forEach((constituent) => {
              if (!visited.has(constituent) && !frontier.has(constituent))
                newFrontier.add(constituent);
            });
        });
        frontier = newFrontier;
      }
      return false;
    };
    mergeObjectsOfDecorators = (o1, o2) => {
      var _a, _b;
      const allKeys = unique([...Object.getOwnPropertyNames(o1), ...Object.getOwnPropertyNames(o2)]);
      const mergedObject = {};
      for (let key of allKeys)
        mergedObject[key] = unique([...(_a = o1 === null || o1 === void 0 ? void 0 : o1[key]) !== null && _a !== void 0 ? _a : [], ...(_b = o2 === null || o2 === void 0 ? void 0 : o2[key]) !== null && _b !== void 0 ? _b : []]);
      return mergedObject;
    };
    mergePropertyAndMethodDecorators = (d1, d2) => {
      var _a, _b, _c, _d;
      return {
        property: mergeObjectsOfDecorators((_a = d1 === null || d1 === void 0 ? void 0 : d1.property) !== null && _a !== void 0 ? _a : {}, (_b = d2 === null || d2 === void 0 ? void 0 : d2.property) !== null && _b !== void 0 ? _b : {}),
        method: mergeObjectsOfDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.method) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.method) !== null && _d !== void 0 ? _d : {})
      };
    };
    mergeDecorators = (d1, d2) => {
      var _a, _b, _c, _d, _e, _f;
      return {
        class: unique([...(_a = d1 === null || d1 === void 0 ? void 0 : d1.class) !== null && _a !== void 0 ? _a : [], ...(_b = d2 === null || d2 === void 0 ? void 0 : d2.class) !== null && _b !== void 0 ? _b : []]),
        static: mergePropertyAndMethodDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.static) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.static) !== null && _d !== void 0 ? _d : {}),
        instance: mergePropertyAndMethodDecorators((_e = d1 === null || d1 === void 0 ? void 0 : d1.instance) !== null && _e !== void 0 ? _e : {}, (_f = d2 === null || d2 === void 0 ? void 0 : d2.instance) !== null && _f !== void 0 ? _f : {})
      };
    };
    decorators = /* @__PURE__ */ new Map();
    findAllConstituentClasses = (...classes) => {
      var _a;
      const allClasses = /* @__PURE__ */ new Set();
      const frontier = /* @__PURE__ */ new Set([...classes]);
      while (frontier.size > 0) {
        for (let clazz of frontier) {
          const protoChainClasses = protoChain(clazz.prototype).map((proto) => proto.constructor);
          const mixinClasses = (_a = getMixinsForClass(clazz)) !== null && _a !== void 0 ? _a : [];
          const potentiallyNewClasses = [...protoChainClasses, ...mixinClasses];
          const newClasses = potentiallyNewClasses.filter((c) => !allClasses.has(c));
          for (let newClass of newClasses)
            frontier.add(newClass);
          allClasses.add(clazz);
          frontier.delete(clazz);
        }
      }
      return [...allClasses];
    };
    deepDecoratorSearch = (...classes) => {
      const decoratorsForClassChain = findAllConstituentClasses(...classes).map((clazz) => decorators.get(clazz)).filter((decorators2) => !!decorators2);
      if (decoratorsForClassChain.length == 0)
        return {};
      if (decoratorsForClassChain.length == 1)
        return decoratorsForClassChain[0];
      return decoratorsForClassChain.reduce((d1, d2) => mergeDecorators(d1, d2));
    };
    directDecoratorSearch = (...classes) => {
      const classDecorators = classes.map((clazz) => getDecoratorsForClass(clazz));
      if (classDecorators.length === 0)
        return {};
      if (classDecorators.length === 1)
        return classDecorators[0];
      return classDecorators.reduce((d1, d2) => mergeDecorators(d1, d2));
    };
    getDecoratorsForClass = (clazz) => {
      let decoratorsForClass = decorators.get(clazz);
      if (!decoratorsForClass) {
        decoratorsForClass = {};
        decorators.set(clazz, decoratorsForClass);
      }
      return decoratorsForClass;
    };
    decorateClass = (decorator) => (clazz) => {
      const decoratorsForClass = getDecoratorsForClass(clazz);
      let classDecorators = decoratorsForClass.class;
      if (!classDecorators) {
        classDecorators = [];
        decoratorsForClass.class = classDecorators;
      }
      classDecorators.push(decorator);
      return decorator(clazz);
    };
    decorateMember = (decorator) => (object, key, ...otherArgs) => {
      var _a, _b, _c;
      const decoratorTargetType = typeof object === "function" ? "static" : "instance";
      const decoratorType = typeof object[key] === "function" ? "method" : "property";
      const clazz = decoratorTargetType === "static" ? object : object.constructor;
      const decoratorsForClass = getDecoratorsForClass(clazz);
      const decoratorsForTargetType = (_a = decoratorsForClass === null || decoratorsForClass === void 0 ? void 0 : decoratorsForClass[decoratorTargetType]) !== null && _a !== void 0 ? _a : {};
      decoratorsForClass[decoratorTargetType] = decoratorsForTargetType;
      let decoratorsForType = (_b = decoratorsForTargetType === null || decoratorsForTargetType === void 0 ? void 0 : decoratorsForTargetType[decoratorType]) !== null && _b !== void 0 ? _b : {};
      decoratorsForTargetType[decoratorType] = decoratorsForType;
      let decoratorsForKey = (_c = decoratorsForType === null || decoratorsForType === void 0 ? void 0 : decoratorsForType[key]) !== null && _c !== void 0 ? _c : [];
      decoratorsForType[key] = decoratorsForKey;
      decoratorsForKey.push(decorator);
      return decorator(object, key, ...otherArgs);
    };
    decorate = (decorator) => (...args) => {
      if (args.length === 1)
        return decorateClass(decorator)(args[0]);
      return decorateMember(decorator)(...args);
    };
    applyPropAndMethodDecorators = (propAndMethodDecorators, target) => {
      const propDecorators = propAndMethodDecorators.property;
      const methodDecorators = propAndMethodDecorators.method;
      if (propDecorators)
        for (let key in propDecorators)
          for (let decorator of propDecorators[key])
            decorator(target, key);
      if (methodDecorators)
        for (let key in methodDecorators)
          for (let decorator of methodDecorators[key])
            decorator(target, key, Object.getOwnPropertyDescriptor(target, key));
    };
    mix = (...ingredients) => (decoratedClass) => {
      const mixedClass = Mixin(...ingredients.concat([decoratedClass]));
      Object.defineProperty(mixedClass, "name", {
        value: decoratedClass.name,
        writable: false
      });
      return mixedClass;
    };
  }
});

// node_modules/@trezor/schema-utils/lib/custom-types/array-buffer.js
var require_array_buffer = __commonJS({
  "node_modules/@trezor/schema-utils/lib/custom-types/array-buffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ArrayBufferBuilder = void 0;
    var typebox_1 = require_typebox();
    typebox_1.TypeRegistry.Set("ArrayBuffer", (_, value) => value instanceof ArrayBuffer);
    var ArrayBufferBuilder = class extends typebox_1.JavaScriptTypeBuilder {
      ArrayBuffer(options) {
        return this.Create(Object.assign(Object.assign({}, options), { [typebox_1.Kind]: "ArrayBuffer", type: "ArrayBuffer" }));
      }
    };
    exports2.ArrayBufferBuilder = ArrayBufferBuilder;
  }
});

// node_modules/@trezor/schema-utils/lib/custom-types/buffer.js
var require_buffer = __commonJS({
  "node_modules/@trezor/schema-utils/lib/custom-types/buffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BufferBuilder = void 0;
    var typebox_1 = require_typebox();
    typebox_1.TypeRegistry.Set("Buffer", (_, value) => value instanceof Buffer);
    var BufferBuilder = class extends typebox_1.JavaScriptTypeBuilder {
      Buffer(options) {
        return this.Create(Object.assign(Object.assign({}, options), { [typebox_1.Kind]: "Buffer", type: "Buffer" }));
      }
    };
    exports2.BufferBuilder = BufferBuilder;
  }
});

// node_modules/@trezor/schema-utils/lib/custom-types/keyof-enum.js
var require_keyof_enum = __commonJS({
  "node_modules/@trezor/schema-utils/lib/custom-types/keyof-enum.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.KeyofEnumBuilder = void 0;
    var typebox_1 = require_typebox();
    var KeyofEnumBuilder = class extends typebox_1.JavaScriptTypeBuilder {
      KeyOfEnum(schema, options) {
        const keys = Object.keys(schema).map((key) => this.Literal(key));
        return this.Union(keys, Object.assign(Object.assign({}, options), { [typebox_1.Hint]: "KeyOfEnum" }));
      }
      Enum(schema, options) {
        const anyOf = Object.entries(schema).filter(([key, _value]) => typeof key === "string" || !isNaN(key)).map(([key, value]) => this.Literal(value, { $id: key }));
        return this.Union(anyOf, Object.assign(Object.assign({}, options), { [typebox_1.Hint]: "Enum" }));
      }
    };
    exports2.KeyofEnumBuilder = KeyofEnumBuilder;
  }
});

// node_modules/@trezor/schema-utils/lib/custom-types/uint.js
var require_uint = __commonJS({
  "node_modules/@trezor/schema-utils/lib/custom-types/uint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UintBuilder = void 0;
    var typebox_1 = require_typebox();
    typebox_1.TypeRegistry.Set("Uint", (schema, value) => {
      if (typeof value !== "string" && typeof value !== "number") {
        return false;
      }
      if (typeof value === "number" && !Number.isSafeInteger(value) || !/^(?:[1-9]\d*|\d)$/.test(value.toString().replace(/^-/, schema.allowNegative ? "" : "-"))) {
        return false;
      }
      return true;
    });
    var UintBuilder = class extends typebox_1.JavaScriptTypeBuilder {
      Uint(options) {
        return this.Create(Object.assign(Object.assign({}, options), { [typebox_1.Kind]: "Uint", type: "Uint" }));
      }
    };
    exports2.UintBuilder = UintBuilder;
  }
});

// node_modules/@trezor/schema-utils/lib/custom-types/index.js
var require_custom_types = __commonJS({
  "node_modules/@trezor/schema-utils/lib/custom-types/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UintBuilder = exports2.KeyofEnumBuilder = exports2.BufferBuilder = exports2.ArrayBufferBuilder = void 0;
    var array_buffer_1 = require_array_buffer();
    Object.defineProperty(exports2, "ArrayBufferBuilder", { enumerable: true, get: function() {
      return array_buffer_1.ArrayBufferBuilder;
    } });
    var buffer_1 = require_buffer();
    Object.defineProperty(exports2, "BufferBuilder", { enumerable: true, get: function() {
      return buffer_1.BufferBuilder;
    } });
    var keyof_enum_1 = require_keyof_enum();
    Object.defineProperty(exports2, "KeyofEnumBuilder", { enumerable: true, get: function() {
      return keyof_enum_1.KeyofEnumBuilder;
    } });
    var uint_1 = require_uint();
    Object.defineProperty(exports2, "UintBuilder", { enumerable: true, get: function() {
      return uint_1.UintBuilder;
    } });
  }
});

// node_modules/@trezor/schema-utils/lib/errors.js
var require_errors4 = __commonJS({
  "node_modules/@trezor/schema-utils/lib/errors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InvalidParameter = void 0;
    var InvalidParameter = class extends Error {
      constructor(reason, field, type, value) {
        let message = `Invalid parameter`;
        message += ` "${field.substring(1)}"`;
        message += ` (= ${JSON.stringify(value)})`;
        message += `: ${reason.replace(/'/g, '"')}`;
        super(message);
        this.name = "InvalidParameter";
        this.field = field;
        this.type = type;
      }
    };
    exports2.InvalidParameter = InvalidParameter;
  }
});

// node_modules/@trezor/schema-utils/lib/utils.js
var require_utils = __commonJS({
  "node_modules/@trezor/schema-utils/lib/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getDeepValue = exports2.setDeepValue = void 0;
    function setDeepValue(obj, [prop, ...path], value) {
      if (!path.length) {
        obj[prop] = value;
      } else {
        if (!(prop in obj))
          obj[prop] = {};
        setDeepValue(obj[prop], path, value);
      }
    }
    exports2.setDeepValue = setDeepValue;
    function getDeepValue(obj, [prop, ...path]) {
      if (!path.length) {
        return obj[prop];
      } else {
        if (!(prop in obj))
          return void 0;
        return getDeepValue(obj[prop], path);
      }
    }
    exports2.getDeepValue = getDeepValue;
  }
});

// node_modules/@trezor/schema-utils/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/@trezor/schema-utils/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeClone = exports2.Optional = exports2.Type = exports2.AssertWeak = exports2.Assert = exports2.Validate = void 0;
    var typebox_1 = require_typebox();
    Object.defineProperty(exports2, "Optional", { enumerable: true, get: function() {
      return typebox_1.Optional;
    } });
    Object.defineProperty(exports2, "TypeClone", { enumerable: true, get: function() {
      return typebox_1.TypeClone;
    } });
    var errors_1 = require_errors3();
    var ts_mixer_1 = (init_esm(), __toCommonJS(esm_exports));
    var custom_types_1 = require_custom_types();
    var errors_2 = require_errors4();
    var utils_1 = require_utils();
    var CustomTypeBuilder = class extends (0, ts_mixer_1.Mixin)(typebox_1.JavaScriptTypeBuilder, custom_types_1.ArrayBufferBuilder, custom_types_1.BufferBuilder, custom_types_1.KeyofEnumBuilder, custom_types_1.UintBuilder) {
    };
    function Validate(schema, value) {
      try {
        Assert(schema, value);
        return true;
      } catch (e) {
        return false;
      }
    }
    exports2.Validate = Validate;
    function FindErrorInUnion(error) {
      const currentValue = error.value;
      const unionMembers = error.schema.anyOf;
      const hasValidMember = unionMembers.find((unionSchema) => Validate(unionSchema, currentValue));
      if (!hasValidMember) {
        const possibleMatchesByLiterals = unionMembers.filter((unionSchema) => {
          if (unionSchema[typebox_1.Kind] !== "Object")
            return false;
          return !Object.entries(unionSchema.properties).find(([property, propertySchema]) => propertySchema.const && propertySchema.const !== currentValue[property]);
        });
        if (possibleMatchesByLiterals.length === 1) {
          Assert(possibleMatchesByLiterals[0], currentValue);
        } else if (possibleMatchesByLiterals.length > 1) {
          const errorsOfPossibleMatches = possibleMatchesByLiterals.map((matchSchema) => ({
            schema: matchSchema,
            errors: [...(0, errors_1.Errors)(matchSchema, currentValue)]
          }));
          const sortedErrors = errorsOfPossibleMatches.sort((a, b) => a.errors.length - b.errors.length);
          const [bestMatch] = sortedErrors;
          Assert(bestMatch.schema, currentValue);
        }
        throw new errors_2.InvalidParameter(error.message, error.path, error.type, error.value);
      }
    }
    function Assert(schema, value) {
      const errors = [...(0, errors_1.Errors)(schema, value)];
      let [error] = errors;
      while (error) {
        if (error.path === "/" && errors.length > 1) {
        } else if (error.value == null && error.schema[typebox_1.Optional] === "Optional") {
        } else if (error.type === errors_1.ValueErrorType.Union) {
          FindErrorInUnion(error);
        } else if (error.type === errors_1.ValueErrorType.Number && typeof error.value === "string") {
          const currentValue = error.value;
          const parsedNumber = Number(currentValue);
          if (!Number.isNaN(parsedNumber) && currentValue === parsedNumber.toString()) {
            const pathParts = error.path.slice(1).split("/");
            (0, utils_1.setDeepValue)(value, pathParts, parsedNumber);
          } else {
            throw new errors_2.InvalidParameter(error.message, error.path, error.type, error.value);
          }
        } else {
          throw new errors_2.InvalidParameter(error.message, error.path, error.type, error.value);
        }
        errors.shift();
        [error] = errors;
      }
    }
    exports2.Assert = Assert;
    function AssertWeak(schema, value) {
      try {
        Assert(schema, value);
      } catch (e) {
        if (e instanceof errors_2.InvalidParameter) {
          if (e.type === errors_1.ValueErrorType.ObjectRequiredProperty) {
            throw e;
          }
          console.warn("Method params validation failed", e);
        } else {
          throw e;
        }
      }
    }
    exports2.AssertWeak = AssertWeak;
    exports2.Type = new CustomTypeBuilder();
  }
});

// node_modules/@trezor/connect/lib/constants/nem.js
var require_nem = __commonJS({
  "node_modules/@trezor/connect/lib/constants/nem.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EnumTxVersion = exports2.TxVersion = exports2.EnumTxType = exports2.TxType = exports2.EnumNetworks = exports2.Networks = void 0;
    var schema_utils_1 = require_lib4();
    var Networks;
    (function(Networks2) {
      Networks2[Networks2["mainnet"] = 104] = "mainnet";
      Networks2[Networks2["testnet"] = 152] = "testnet";
      Networks2[Networks2["mijin"] = 96] = "mijin";
    })(Networks || (exports2.Networks = Networks = {}));
    exports2.EnumNetworks = schema_utils_1.Type.Enum(Networks);
    var TxType;
    (function(TxType2) {
      TxType2[TxType2["TRANSFER"] = 257] = "TRANSFER";
      TxType2[TxType2["COSIGNING"] = 258] = "COSIGNING";
      TxType2[TxType2["IMPORTANCE_TRANSFER"] = 2049] = "IMPORTANCE_TRANSFER";
      TxType2[TxType2["AGGREGATE_MODIFICATION"] = 4097] = "AGGREGATE_MODIFICATION";
      TxType2[TxType2["MULTISIG_SIGNATURE"] = 4098] = "MULTISIG_SIGNATURE";
      TxType2[TxType2["MULTISIG"] = 4100] = "MULTISIG";
      TxType2[TxType2["PROVISION_NAMESPACE"] = 8193] = "PROVISION_NAMESPACE";
      TxType2[TxType2["MOSAIC_CREATION"] = 16385] = "MOSAIC_CREATION";
      TxType2[TxType2["SUPPLY_CHANGE"] = 16386] = "SUPPLY_CHANGE";
    })(TxType || (exports2.TxType = TxType = {}));
    exports2.EnumTxType = schema_utils_1.Type.Enum(TxType);
    var TxVersion;
    (function(TxVersion2) {
      TxVersion2[TxVersion2["mainnet"] = 1744830464] = "mainnet";
      TxVersion2[TxVersion2["testnet"] = -1744830464] = "testnet";
      TxVersion2[TxVersion2["mijin"] = 1610612736] = "mijin";
    })(TxVersion || (exports2.TxVersion = TxVersion = {}));
    exports2.EnumTxVersion = schema_utils_1.Type.Enum(TxVersion);
  }
});

// node_modules/@protobufjs/aspromise/index.js
var require_aspromise = __commonJS({
  "node_modules/@protobufjs/aspromise/index.js"(exports2, module2) {
    "use strict";
    module2.exports = asPromise;
    function asPromise(fn, ctx) {
      var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
      while (index < arguments.length)
        params[offset++] = arguments[index++];
      return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err) {
          if (pending) {
            pending = false;
            if (err)
              reject(err);
            else {
              var params2 = new Array(arguments.length - 1), offset2 = 0;
              while (offset2 < params2.length)
                params2[offset2++] = arguments[offset2];
              resolve.apply(null, params2);
            }
          }
        };
        try {
          fn.apply(ctx || null, params);
        } catch (err) {
          if (pending) {
            pending = false;
            reject(err);
          }
        }
      });
    }
  }
});

// node_modules/@protobufjs/base64/index.js
var require_base64 = __commonJS({
  "node_modules/@protobufjs/base64/index.js"(exports2) {
    "use strict";
    var base64 = exports2;
    base64.length = function length(string) {
      var p = string.length;
      if (!p)
        return 0;
      var n = 0;
      while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
      return Math.ceil(string.length * 3) / 4 - n;
    };
    var b64 = new Array(64);
    var s64 = new Array(123);
    for (i = 0; i < 64; )
      s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
    var i;
    base64.encode = function encode(buffer, start, end) {
      var parts = null, chunk = [];
      var i2 = 0, j = 0, t;
      while (start < end) {
        var b = buffer[start++];
        switch (j) {
          case 0:
            chunk[i2++] = b64[b >> 2];
            t = (b & 3) << 4;
            j = 1;
            break;
          case 1:
            chunk[i2++] = b64[t | b >> 4];
            t = (b & 15) << 2;
            j = 2;
            break;
          case 2:
            chunk[i2++] = b64[t | b >> 6];
            chunk[i2++] = b64[b & 63];
            j = 0;
            break;
        }
        if (i2 > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i2 = 0;
        }
      }
      if (j) {
        chunk[i2++] = b64[t];
        chunk[i2++] = 61;
        if (j === 1)
          chunk[i2++] = 61;
      }
      if (parts) {
        if (i2)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i2));
    };
    var invalidEncoding = "invalid encoding";
    base64.decode = function decode(string, buffer, offset) {
      var start = offset;
      var j = 0, t;
      for (var i2 = 0; i2 < string.length; ) {
        var c = string.charCodeAt(i2++);
        if (c === 61 && j > 1)
          break;
        if ((c = s64[c]) === void 0)
          throw Error(invalidEncoding);
        switch (j) {
          case 0:
            t = c;
            j = 1;
            break;
          case 1:
            buffer[offset++] = t << 2 | (c & 48) >> 4;
            t = c;
            j = 2;
            break;
          case 2:
            buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
            t = c;
            j = 3;
            break;
          case 3:
            buffer[offset++] = (t & 3) << 6 | c;
            j = 0;
            break;
        }
      }
      if (j === 1)
        throw Error(invalidEncoding);
      return offset - start;
    };
    base64.test = function test(string) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
    };
  }
});

// node_modules/@protobufjs/eventemitter/index.js
var require_eventemitter = __commonJS({
  "node_modules/@protobufjs/eventemitter/index.js"(exports2, module2) {
    "use strict";
    module2.exports = EventEmitter;
    function EventEmitter() {
      this._listeners = {};
    }
    EventEmitter.prototype.on = function on(evt, fn, ctx) {
      (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn,
        ctx: ctx || this
      });
      return this;
    };
    EventEmitter.prototype.off = function off(evt, fn) {
      if (evt === void 0)
        this._listeners = {};
      else {
        if (fn === void 0)
          this._listeners[evt] = [];
        else {
          var listeners = this._listeners[evt];
          for (var i = 0; i < listeners.length; )
            if (listeners[i].fn === fn)
              listeners.splice(i, 1);
            else
              ++i;
        }
      }
      return this;
    };
    EventEmitter.prototype.emit = function emit(evt) {
      var listeners = this._listeners[evt];
      if (listeners) {
        var args = [], i = 1;
        for (; i < arguments.length; )
          args.push(arguments[i++]);
        for (i = 0; i < listeners.length; )
          listeners[i].fn.apply(listeners[i++].ctx, args);
      }
      return this;
    };
  }
});

// node_modules/@protobufjs/float/index.js
var require_float = __commonJS({
  "node_modules/@protobufjs/float/index.js"(exports2, module2) {
    "use strict";
    module2.exports = factory(factory);
    function factory(exports3) {
      if (typeof Float32Array !== "undefined") (function() {
        var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
        function writeFloat_f32_cpy(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
        }
        function writeFloat_f32_rev(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[3];
          buf[pos + 1] = f8b[2];
          buf[pos + 2] = f8b[1];
          buf[pos + 3] = f8b[0];
        }
        exports3.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        exports3.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
        function readFloat_f32_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          return f32[0];
        }
        function readFloat_f32_rev(buf, pos) {
          f8b[3] = buf[pos];
          f8b[2] = buf[pos + 1];
          f8b[1] = buf[pos + 2];
          f8b[0] = buf[pos + 3];
          return f32[0];
        }
        exports3.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        exports3.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
      })();
      else (function() {
        function writeFloat_ieee754(writeUint, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0)
            writeUint(1 / val > 0 ? (
              /* positive */
              0
            ) : (
              /* negative 0 */
              2147483648
            ), buf, pos);
          else if (isNaN(val))
            writeUint(2143289344, buf, pos);
          else if (val > 34028234663852886e22)
            writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
          else if (val < 11754943508222875e-54)
            writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos);
          else {
            var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
            writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
          }
        }
        exports3.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports3.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
        function readFloat_ieee754(readUint, buf, pos) {
          var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
          return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 1401298464324817e-60 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }
        exports3.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports3.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
      })();
      if (typeof Float64Array !== "undefined") (function() {
        var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
        function writeDouble_f64_cpy(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
          buf[pos + 4] = f8b[4];
          buf[pos + 5] = f8b[5];
          buf[pos + 6] = f8b[6];
          buf[pos + 7] = f8b[7];
        }
        function writeDouble_f64_rev(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[7];
          buf[pos + 1] = f8b[6];
          buf[pos + 2] = f8b[5];
          buf[pos + 3] = f8b[4];
          buf[pos + 4] = f8b[3];
          buf[pos + 5] = f8b[2];
          buf[pos + 6] = f8b[1];
          buf[pos + 7] = f8b[0];
        }
        exports3.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        exports3.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
        function readDouble_f64_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          f8b[4] = buf[pos + 4];
          f8b[5] = buf[pos + 5];
          f8b[6] = buf[pos + 6];
          f8b[7] = buf[pos + 7];
          return f64[0];
        }
        function readDouble_f64_rev(buf, pos) {
          f8b[7] = buf[pos];
          f8b[6] = buf[pos + 1];
          f8b[5] = buf[pos + 2];
          f8b[4] = buf[pos + 3];
          f8b[3] = buf[pos + 4];
          f8b[2] = buf[pos + 5];
          f8b[1] = buf[pos + 6];
          f8b[0] = buf[pos + 7];
          return f64[0];
        }
        exports3.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        exports3.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
      })();
      else (function() {
        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0) {
            writeUint(0, buf, pos + off0);
            writeUint(1 / val > 0 ? (
              /* positive */
              0
            ) : (
              /* negative 0 */
              2147483648
            ), buf, pos + off1);
          } else if (isNaN(val)) {
            writeUint(0, buf, pos + off0);
            writeUint(2146959360, buf, pos + off1);
          } else if (val > 17976931348623157e292) {
            writeUint(0, buf, pos + off0);
            writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
          } else {
            var mantissa;
            if (val < 22250738585072014e-324) {
              mantissa = val / 5e-324;
              writeUint(mantissa >>> 0, buf, pos + off0);
              writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
            } else {
              var exponent = Math.floor(Math.log(val) / Math.LN2);
              if (exponent === 1024)
                exponent = 1023;
              mantissa = val * Math.pow(2, -exponent);
              writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
              writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
            }
          }
        }
        exports3.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports3.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
          var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
          var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
          return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }
        exports3.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports3.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
      })();
      return exports3;
    }
    function writeUintLE(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    function writeUintBE(val, buf, pos) {
      buf[pos] = val >>> 24;
      buf[pos + 1] = val >>> 16 & 255;
      buf[pos + 2] = val >>> 8 & 255;
      buf[pos + 3] = val & 255;
    }
    function readUintLE(buf, pos) {
      return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
    }
    function readUintBE(buf, pos) {
      return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
    }
  }
});

// node_modules/@protobufjs/inquire/index.js
var require_inquire = __commonJS({
  "node_modules/@protobufjs/inquire/index.js"(exports, module) {
    "use strict";
    module.exports = inquire;
    function inquire(moduleName) {
      try {
        var mod = eval("quire".replace(/^/, "re"))(moduleName);
        if (mod && (mod.length || Object.keys(mod).length))
          return mod;
      } catch (e) {
      }
      return null;
    }
  }
});

// node_modules/@protobufjs/utf8/index.js
var require_utf8 = __commonJS({
  "node_modules/@protobufjs/utf8/index.js"(exports2) {
    "use strict";
    var utf8 = exports2;
    utf8.length = function utf8_length(string) {
      var len = 0, c = 0;
      for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
          len += 1;
        else if (c < 2048)
          len += 2;
        else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
          ++i;
          len += 4;
        } else
          len += 3;
      }
      return len;
    };
    utf8.read = function utf8_read(buffer, start, end) {
      var len = end - start;
      if (len < 1)
        return "";
      var parts = null, chunk = [], i = 0, t;
      while (start < end) {
        t = buffer[start++];
        if (t < 128)
          chunk[i++] = t;
        else if (t > 191 && t < 224)
          chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
          t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
          chunk[i++] = 55296 + (t >> 10);
          chunk[i++] = 56320 + (t & 1023);
        } else
          chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i = 0;
        }
      }
      if (parts) {
        if (i)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i));
    };
    utf8.write = function utf8_write(string, buffer, offset) {
      var start = offset, c1, c2;
      for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
          buffer[offset++] = c1;
        } else if (c1 < 2048) {
          buffer[offset++] = c1 >> 6 | 192;
          buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
          c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
          ++i;
          buffer[offset++] = c1 >> 18 | 240;
          buffer[offset++] = c1 >> 12 & 63 | 128;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        } else {
          buffer[offset++] = c1 >> 12 | 224;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        }
      }
      return offset - start;
    };
  }
});

// node_modules/@protobufjs/pool/index.js
var require_pool = __commonJS({
  "node_modules/@protobufjs/pool/index.js"(exports2, module2) {
    "use strict";
    module2.exports = pool;
    function pool(alloc, slice, size) {
      var SIZE = size || 8192;
      var MAX = SIZE >>> 1;
      var slab = null;
      var offset = SIZE;
      return function pool_alloc(size2) {
        if (size2 < 1 || size2 > MAX)
          return alloc(size2);
        if (offset + size2 > SIZE) {
          slab = alloc(SIZE);
          offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size2);
        if (offset & 7)
          offset = (offset | 7) + 1;
        return buf;
      };
    }
  }
});

// node_modules/protobufjs/src/util/longbits.js
var require_longbits = __commonJS({
  "node_modules/protobufjs/src/util/longbits.js"(exports2, module2) {
    "use strict";
    module2.exports = LongBits;
    var util = require_minimal();
    function LongBits(lo, hi) {
      this.lo = lo >>> 0;
      this.hi = hi >>> 0;
    }
    var zero = LongBits.zero = new LongBits(0, 0);
    zero.toNumber = function() {
      return 0;
    };
    zero.zzEncode = zero.zzDecode = function() {
      return this;
    };
    zero.length = function() {
      return 1;
    };
    var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
    LongBits.fromNumber = function fromNumber(value) {
      if (value === 0)
        return zero;
      var sign = value < 0;
      if (sign)
        value = -value;
      var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
      if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
          lo = 0;
          if (++hi > 4294967295)
            hi = 0;
        }
      }
      return new LongBits(lo, hi);
    };
    LongBits.from = function from(value) {
      if (typeof value === "number")
        return LongBits.fromNumber(value);
      if (util.isString(value)) {
        if (util.Long)
          value = util.Long.fromString(value);
        else
          return LongBits.fromNumber(parseInt(value, 10));
      }
      return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
    };
    LongBits.prototype.toNumber = function toNumber(unsigned) {
      if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
        if (!lo)
          hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
      }
      return this.lo + this.hi * 4294967296;
    };
    LongBits.prototype.toLong = function toLong(unsigned) {
      return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
    };
    var charCodeAt = String.prototype.charCodeAt;
    LongBits.fromHash = function fromHash(hash) {
      if (hash === zeroHash)
        return zero;
      return new LongBits(
        (charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0,
        (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0
      );
    };
    LongBits.prototype.toHash = function toHash() {
      return String.fromCharCode(
        this.lo & 255,
        this.lo >>> 8 & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24,
        this.hi & 255,
        this.hi >>> 8 & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
      );
    };
    LongBits.prototype.zzEncode = function zzEncode() {
      var mask = this.hi >> 31;
      this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
      this.lo = (this.lo << 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.zzDecode = function zzDecode() {
      var mask = -(this.lo & 1);
      this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
      this.hi = (this.hi >>> 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.length = function length() {
      var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
      return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
    };
  }
});

// node_modules/protobufjs/src/util/minimal.js
var require_minimal = __commonJS({
  "node_modules/protobufjs/src/util/minimal.js"(exports2) {
    "use strict";
    var util = exports2;
    util.asPromise = require_aspromise();
    util.base64 = require_base64();
    util.EventEmitter = require_eventemitter();
    util.float = require_float();
    util.inquire = require_inquire();
    util.utf8 = require_utf8();
    util.pool = require_pool();
    util.LongBits = require_longbits();
    util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
    util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || exports2;
    util.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    );
    util.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    );
    util.isInteger = Number.isInteger || /* istanbul ignore next */
    function isInteger(value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
    util.isString = function isString(value) {
      return typeof value === "string" || value instanceof String;
    };
    util.isObject = function isObject(value) {
      return value && typeof value === "object";
    };
    util.isset = /**
     * Checks if a property on a message is considered to be present.
     * @param {Object} obj Plain object or message instance
     * @param {string} prop Property name
     * @returns {boolean} `true` if considered to be present, otherwise `false`
     */
    util.isSet = function isSet(obj, prop) {
      var value = obj[prop];
      if (value != null && obj.hasOwnProperty(prop))
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
      return false;
    };
    util.Buffer = function() {
      try {
        var Buffer2 = util.inquire("buffer").Buffer;
        return Buffer2.prototype.utf8Write ? Buffer2 : (
          /* istanbul ignore next */
          null
        );
      } catch (e) {
        return null;
      }
    }();
    util._Buffer_from = null;
    util._Buffer_allocUnsafe = null;
    util.newBuffer = function newBuffer(sizeOrArray) {
      return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
    };
    util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    util.Long = /* istanbul ignore next */
    util.global.dcodeIO && /* istanbul ignore next */
    util.global.dcodeIO.Long || /* istanbul ignore next */
    util.global.Long || util.inquire("long");
    util.key2Re = /^true|false|0|1$/;
    util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    util.longToHash = function longToHash(value) {
      return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
    };
    util.longFromHash = function longFromHash(hash, unsigned) {
      var bits = util.LongBits.fromHash(hash);
      if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
      return bits.toNumber(Boolean(unsigned));
    };
    function merge(dst, src, ifNotSet) {
      for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === void 0 || !ifNotSet)
          dst[keys[i]] = src[keys[i]];
      return dst;
    }
    util.merge = merge;
    util.lcFirst = function lcFirst(str) {
      return str.charAt(0).toLowerCase() + str.substring(1);
    };
    function newError(name) {
      function CustomError(message, properties) {
        if (!(this instanceof CustomError))
          return new CustomError(message, properties);
        Object.defineProperty(this, "message", { get: function() {
          return message;
        } });
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, CustomError);
        else
          Object.defineProperty(this, "stack", { value: new Error().stack || "" });
        if (properties)
          merge(this, properties);
      }
      CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
          value: CustomError,
          writable: true,
          enumerable: false,
          configurable: true
        },
        name: {
          get: function get() {
            return name;
          },
          set: void 0,
          enumerable: false,
          // configurable: false would accurately preserve the behavior of
          // the original, but I'm guessing that was not intentional.
          // For an actual error subclass, this property would
          // be configurable.
          configurable: true
        },
        toString: {
          value: function value() {
            return this.name + ": " + this.message;
          },
          writable: true,
          enumerable: false,
          configurable: true
        }
      });
      return CustomError;
    }
    util.newError = newError;
    util.ProtocolError = newError("ProtocolError");
    util.oneOfGetter = function getOneOf(fieldNames) {
      var fieldMap = {};
      for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;
      return function() {
        for (var keys = Object.keys(this), i2 = keys.length - 1; i2 > -1; --i2)
          if (fieldMap[keys[i2]] === 1 && this[keys[i2]] !== void 0 && this[keys[i2]] !== null)
            return keys[i2];
      };
    };
    util.oneOfSetter = function setOneOf(fieldNames) {
      return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
          if (fieldNames[i] !== name)
            delete this[fieldNames[i]];
      };
    };
    util.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: true
    };
    util._configure = function() {
      var Buffer2 = util.Buffer;
      if (!Buffer2) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
      }
      util._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || /* istanbul ignore next */
      function Buffer_from(value, encoding) {
        return new Buffer2(value, encoding);
      };
      util._Buffer_allocUnsafe = Buffer2.allocUnsafe || /* istanbul ignore next */
      function Buffer_allocUnsafe(size) {
        return new Buffer2(size);
      };
    };
  }
});

// node_modules/protobufjs/src/writer.js
var require_writer = __commonJS({
  "node_modules/protobufjs/src/writer.js"(exports2, module2) {
    "use strict";
    module2.exports = Writer;
    var util = require_minimal();
    var BufferWriter;
    var LongBits = util.LongBits;
    var base64 = util.base64;
    var utf8 = util.utf8;
    function Op(fn, len, val) {
      this.fn = fn;
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    function noop() {
    }
    function State(writer) {
      this.head = writer.head;
      this.tail = writer.tail;
      this.len = writer.len;
      this.next = writer.states;
    }
    function Writer() {
      this.len = 0;
      this.head = new Op(noop, 0, 0);
      this.tail = this.head;
      this.states = null;
    }
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
          return new BufferWriter();
        })();
      } : function create_array() {
        return new Writer();
      };
    };
    Writer.create = create();
    Writer.alloc = function alloc(size) {
      return new util.Array(size);
    };
    if (util.Array !== Array)
      Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
    Writer.prototype._push = function push(fn, len, val) {
      this.tail = this.tail.next = new Op(fn, len, val);
      this.len += len;
      return this;
    };
    function writeByte(val, buf, pos) {
      buf[pos] = val & 255;
    }
    function writeVarint32(val, buf, pos) {
      while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
      }
      buf[pos] = val;
    }
    function VarintOp(len, val) {
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    VarintOp.prototype = Object.create(Op.prototype);
    VarintOp.prototype.fn = writeVarint32;
    Writer.prototype.uint32 = function write_uint32(value) {
      this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5,
        value
      )).len;
      return this;
    };
    Writer.prototype.int32 = function write_int32(value) {
      return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
    };
    Writer.prototype.sint32 = function write_sint32(value) {
      return this.uint32((value << 1 ^ value >> 31) >>> 0);
    };
    function writeVarint64(val, buf, pos) {
      while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
      }
      while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
      }
      buf[pos++] = val.lo;
    }
    Writer.prototype.uint64 = function write_uint64(value) {
      var bits = LongBits.from(value);
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.int64 = Writer.prototype.uint64;
    Writer.prototype.sint64 = function write_sint64(value) {
      var bits = LongBits.from(value).zzEncode();
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.bool = function write_bool(value) {
      return this._push(writeByte, 1, value ? 1 : 0);
    };
    function writeFixed32(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    Writer.prototype.fixed32 = function write_fixed32(value) {
      return this._push(writeFixed32, 4, value >>> 0);
    };
    Writer.prototype.sfixed32 = Writer.prototype.fixed32;
    Writer.prototype.fixed64 = function write_fixed64(value) {
      var bits = LongBits.from(value);
      return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
    };
    Writer.prototype.sfixed64 = Writer.prototype.fixed64;
    Writer.prototype.float = function write_float(value) {
      return this._push(util.float.writeFloatLE, 4, value);
    };
    Writer.prototype.double = function write_double(value) {
      return this._push(util.float.writeDoubleLE, 8, value);
    };
    var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytes_for(val, buf, pos) {
      for (var i = 0; i < val.length; ++i)
        buf[pos + i] = val[i];
    };
    Writer.prototype.bytes = function write_bytes(value) {
      var len = value.length >>> 0;
      if (!len)
        return this._push(writeByte, 1, 0);
      if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
      }
      return this.uint32(len)._push(writeBytes, len, value);
    };
    Writer.prototype.string = function write_string(value) {
      var len = utf8.length(value);
      return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
    };
    Writer.prototype.fork = function fork() {
      this.states = new State(this);
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
      return this;
    };
    Writer.prototype.reset = function reset() {
      if (this.states) {
        this.head = this.states.head;
        this.tail = this.states.tail;
        this.len = this.states.len;
        this.states = this.states.next;
      } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
      }
      return this;
    };
    Writer.prototype.ldelim = function ldelim() {
      var head = this.head, tail = this.tail, len = this.len;
      this.reset().uint32(len);
      if (len) {
        this.tail.next = head.next;
        this.tail = tail;
        this.len += len;
      }
      return this;
    };
    Writer.prototype.finish = function finish() {
      var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
      while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
      }
      return buf;
    };
    Writer._configure = function(BufferWriter_) {
      BufferWriter = BufferWriter_;
      Writer.create = create();
      BufferWriter._configure();
    };
  }
});

// node_modules/protobufjs/src/writer_buffer.js
var require_writer_buffer = __commonJS({
  "node_modules/protobufjs/src/writer_buffer.js"(exports2, module2) {
    "use strict";
    module2.exports = BufferWriter;
    var Writer = require_writer();
    (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
    var util = require_minimal();
    function BufferWriter() {
      Writer.call(this);
    }
    BufferWriter._configure = function() {
      BufferWriter.alloc = util._Buffer_allocUnsafe;
      BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos);
      } : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy)
          val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length; )
          buf[pos++] = val[i++];
      };
    };
    BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
      if (util.isString(value))
        value = util._Buffer_from(value, "base64");
      var len = value.length >>> 0;
      this.uint32(len);
      if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
      return this;
    };
    function writeStringBuffer(val, buf, pos) {
      if (val.length < 40)
        util.utf8.write(val, buf, pos);
      else if (buf.utf8Write)
        buf.utf8Write(val, pos);
      else
        buf.write(val, pos);
    }
    BufferWriter.prototype.string = function write_string_buffer(value) {
      var len = util.Buffer.byteLength(value);
      this.uint32(len);
      if (len)
        this._push(writeStringBuffer, len, value);
      return this;
    };
    BufferWriter._configure();
  }
});

// node_modules/protobufjs/src/reader.js
var require_reader = __commonJS({
  "node_modules/protobufjs/src/reader.js"(exports2, module2) {
    "use strict";
    module2.exports = Reader;
    var util = require_minimal();
    var BufferReader;
    var LongBits = util.LongBits;
    var utf8 = util.utf8;
    function indexOutOfRange(reader, writeLength) {
      return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
    }
    function Reader(buffer) {
      this.buf = buffer;
      this.pos = 0;
      this.len = buffer.length;
    }
    var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
      if (buffer instanceof Uint8Array || Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    } : function create_array2(buffer) {
      if (Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    };
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer2) {
          return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
        })(buffer);
      } : create_array;
    };
    Reader.create = create();
    Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */
    util.Array.prototype.slice;
    Reader.prototype.uint32 = /* @__PURE__ */ function read_uint32_setup() {
      var value = 4294967295;
      return function read_uint32() {
        value = (this.buf[this.pos] & 127) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        if ((this.pos += 5) > this.len) {
          this.pos = this.len;
          throw indexOutOfRange(this, 10);
        }
        return value;
      };
    }();
    Reader.prototype.int32 = function read_int32() {
      return this.uint32() | 0;
    };
    Reader.prototype.sint32 = function read_sint32() {
      var value = this.uint32();
      return value >>> 1 ^ -(value & 1) | 0;
    };
    function readLongVarint() {
      var bits = new LongBits(0, 0);
      var i = 0;
      if (this.len - this.pos > 4) {
        for (; i < 4; ++i) {
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
        i = 0;
      } else {
        for (; i < 3; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
      }
      if (this.len - this.pos > 4) {
        for (; i < 5; ++i) {
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      } else {
        for (; i < 5; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      }
      throw Error("invalid varint encoding");
    }
    Reader.prototype.bool = function read_bool() {
      return this.uint32() !== 0;
    };
    function readFixed32_end(buf, end) {
      return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
    }
    Reader.prototype.fixed32 = function read_fixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4);
    };
    Reader.prototype.sfixed32 = function read_sfixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4) | 0;
    };
    function readFixed64() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);
      return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
    }
    Reader.prototype.float = function read_float() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readFloatLE(this.buf, this.pos);
      this.pos += 4;
      return value;
    };
    Reader.prototype.double = function read_double() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readDoubleLE(this.buf, this.pos);
      this.pos += 8;
      return value;
    };
    Reader.prototype.bytes = function read_bytes() {
      var length = this.uint32(), start = this.pos, end = this.pos + length;
      if (end > this.len)
        throw indexOutOfRange(this, length);
      this.pos += length;
      if (Array.isArray(this.buf))
        return this.buf.slice(start, end);
      if (start === end) {
        var nativeBuffer = util.Buffer;
        return nativeBuffer ? nativeBuffer.alloc(0) : new this.buf.constructor(0);
      }
      return this._slice.call(this.buf, start, end);
    };
    Reader.prototype.string = function read_string() {
      var bytes = this.bytes();
      return utf8.read(bytes, 0, bytes.length);
    };
    Reader.prototype.skip = function skip(length) {
      if (typeof length === "number") {
        if (this.pos + length > this.len)
          throw indexOutOfRange(this, length);
        this.pos += length;
      } else {
        do {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
      }
      return this;
    };
    Reader.prototype.skipType = function(wireType) {
      switch (wireType) {
        case 0:
          this.skip();
          break;
        case 1:
          this.skip(8);
          break;
        case 2:
          this.skip(this.uint32());
          break;
        case 3:
          while ((wireType = this.uint32() & 7) !== 4) {
            this.skipType(wireType);
          }
          break;
        case 5:
          this.skip(4);
          break;
        default:
          throw Error("invalid wire type " + wireType + " at offset " + this.pos);
      }
      return this;
    };
    Reader._configure = function(BufferReader_) {
      BufferReader = BufferReader_;
      Reader.create = create();
      BufferReader._configure();
      var fn = util.Long ? "toLong" : (
        /* istanbul ignore next */
        "toNumber"
      );
      util.merge(Reader.prototype, {
        int64: function read_int64() {
          return readLongVarint.call(this)[fn](false);
        },
        uint64: function read_uint64() {
          return readLongVarint.call(this)[fn](true);
        },
        sint64: function read_sint64() {
          return readLongVarint.call(this).zzDecode()[fn](false);
        },
        fixed64: function read_fixed64() {
          return readFixed64.call(this)[fn](true);
        },
        sfixed64: function read_sfixed64() {
          return readFixed64.call(this)[fn](false);
        }
      });
    };
  }
});

// node_modules/protobufjs/src/reader_buffer.js
var require_reader_buffer = __commonJS({
  "node_modules/protobufjs/src/reader_buffer.js"(exports2, module2) {
    "use strict";
    module2.exports = BufferReader;
    var Reader = require_reader();
    (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
    var util = require_minimal();
    function BufferReader(buffer) {
      Reader.call(this, buffer);
    }
    BufferReader._configure = function() {
      if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
    };
    BufferReader.prototype.string = function read_string_buffer() {
      var len = this.uint32();
      return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
    };
    BufferReader._configure();
  }
});

// node_modules/protobufjs/src/rpc/service.js
var require_service = __commonJS({
  "node_modules/protobufjs/src/rpc/service.js"(exports2, module2) {
    "use strict";
    module2.exports = Service;
    var util = require_minimal();
    (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
    function Service(rpcImpl, requestDelimited, responseDelimited) {
      if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");
      util.EventEmitter.call(this);
      this.rpcImpl = rpcImpl;
      this.requestDelimited = Boolean(requestDelimited);
      this.responseDelimited = Boolean(responseDelimited);
    }
    Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
      if (!request)
        throw TypeError("request must be specified");
      var self2 = this;
      if (!callback)
        return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
      if (!self2.rpcImpl) {
        setTimeout(function() {
          callback(Error("already ended"));
        }, 0);
        return void 0;
      }
      try {
        return self2.rpcImpl(
          method,
          requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
          function rpcCallback(err, response) {
            if (err) {
              self2.emit("error", err, method);
              return callback(err);
            }
            if (response === null) {
              self2.end(
                /* endedByRPC */
                true
              );
              return void 0;
            }
            if (!(response instanceof responseCtor)) {
              try {
                response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
              } catch (err2) {
                self2.emit("error", err2, method);
                return callback(err2);
              }
            }
            self2.emit("data", response, method);
            return callback(null, response);
          }
        );
      } catch (err) {
        self2.emit("error", err, method);
        setTimeout(function() {
          callback(err);
        }, 0);
        return void 0;
      }
    };
    Service.prototype.end = function end(endedByRPC) {
      if (this.rpcImpl) {
        if (!endedByRPC)
          this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
      }
      return this;
    };
  }
});

// node_modules/protobufjs/src/rpc.js
var require_rpc = __commonJS({
  "node_modules/protobufjs/src/rpc.js"(exports2) {
    "use strict";
    var rpc = exports2;
    rpc.Service = require_service();
  }
});

// node_modules/protobufjs/src/roots.js
var require_roots = __commonJS({
  "node_modules/protobufjs/src/roots.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/protobufjs/src/index-minimal.js
var require_index_minimal = __commonJS({
  "node_modules/protobufjs/src/index-minimal.js"(exports2) {
    "use strict";
    var protobuf = exports2;
    protobuf.build = "minimal";
    protobuf.Writer = require_writer();
    protobuf.BufferWriter = require_writer_buffer();
    protobuf.Reader = require_reader();
    protobuf.BufferReader = require_reader_buffer();
    protobuf.util = require_minimal();
    protobuf.rpc = require_rpc();
    protobuf.roots = require_roots();
    protobuf.configure = configure;
    function configure() {
      protobuf.util._configure();
      protobuf.Writer._configure(protobuf.BufferWriter);
      protobuf.Reader._configure(protobuf.BufferReader);
    }
    configure();
  }
});

// node_modules/@protobufjs/codegen/index.js
var require_codegen = __commonJS({
  "node_modules/@protobufjs/codegen/index.js"(exports2, module2) {
    "use strict";
    module2.exports = codegen;
    function codegen(functionParams, functionName) {
      if (typeof functionParams === "string") {
        functionName = functionParams;
        functionParams = void 0;
      }
      var body = [];
      function Codegen(formatStringOrScope) {
        if (typeof formatStringOrScope !== "string") {
          var source = toString();
          if (codegen.verbose)
            console.log("codegen: " + source);
          source = "return " + source;
          if (formatStringOrScope) {
            var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
            while (scopeOffset < scopeKeys.length) {
              scopeParams[scopeOffset] = scopeKeys[scopeOffset];
              scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
            }
            scopeParams[scopeOffset] = source;
            return Function.apply(null, scopeParams).apply(null, scopeValues);
          }
          return Function(source)();
        }
        var formatParams = new Array(arguments.length - 1), formatOffset = 0;
        while (formatOffset < formatParams.length)
          formatParams[formatOffset] = arguments[++formatOffset];
        formatOffset = 0;
        formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
          var value = formatParams[formatOffset++];
          switch ($1) {
            case "d":
            case "f":
              return String(Number(value));
            case "i":
              return String(Math.floor(value));
            case "j":
              return JSON.stringify(value);
            case "s":
              return String(value);
          }
          return "%";
        });
        if (formatOffset !== formatParams.length)
          throw Error("parameter count mismatch");
        body.push(formatStringOrScope);
        return Codegen;
      }
      function toString(functionNameOverride) {
        return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
      }
      Codegen.toString = toString;
      return Codegen;
    }
    codegen.verbose = false;
  }
});

// node_modules/@protobufjs/fetch/index.js
var require_fetch = __commonJS({
  "node_modules/@protobufjs/fetch/index.js"(exports2, module2) {
    "use strict";
    module2.exports = fetch;
    var asPromise = require_aspromise();
    var inquire2 = require_inquire();
    var fs = inquire2("fs");
    function fetch(filename, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else if (!options)
        options = {};
      if (!callback)
        return asPromise(fetch, this, filename, options);
      if (!options.xhr && fs && fs.readFile)
        return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
          return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
        });
      return fetch.xhr(filename, options, callback);
    }
    fetch.xhr = function fetch_xhr(filename, options, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function fetchOnReadyStateChange() {
        if (xhr.readyState !== 4)
          return void 0;
        if (xhr.status !== 0 && xhr.status !== 200)
          return callback(Error("status " + xhr.status));
        if (options.binary) {
          var buffer = xhr.response;
          if (!buffer) {
            buffer = [];
            for (var i = 0; i < xhr.responseText.length; ++i)
              buffer.push(xhr.responseText.charCodeAt(i) & 255);
          }
          return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
        }
        return callback(null, xhr.responseText);
      };
      if (options.binary) {
        if ("overrideMimeType" in xhr)
          xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.responseType = "arraybuffer";
      }
      xhr.open("GET", filename);
      xhr.send();
    };
  }
});

// node_modules/@protobufjs/path/index.js
var require_path = __commonJS({
  "node_modules/@protobufjs/path/index.js"(exports2) {
    "use strict";
    var path = exports2;
    var isAbsolute = (
      /**
       * Tests if the specified path is absolute.
       * @param {string} path Path to test
       * @returns {boolean} `true` if path is absolute
       */
      path.isAbsolute = function isAbsolute2(path2) {
        return /^(?:\/|\w+:)/.test(path2);
      }
    );
    var normalize = (
      /**
       * Normalizes the specified path.
       * @param {string} path Path to normalize
       * @returns {string} Normalized path
       */
      path.normalize = function normalize2(path2) {
        path2 = path2.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
        var parts = path2.split("/"), absolute = isAbsolute(path2), prefix = "";
        if (absolute)
          prefix = parts.shift() + "/";
        for (var i = 0; i < parts.length; ) {
          if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..")
              parts.splice(--i, 2);
            else if (absolute)
              parts.splice(i, 1);
            else
              ++i;
          } else if (parts[i] === ".")
            parts.splice(i, 1);
          else
            ++i;
        }
        return prefix + parts.join("/");
      }
    );
    path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
      if (!alreadyNormalized)
        includePath = normalize(includePath);
      if (isAbsolute(includePath))
        return includePath;
      if (!alreadyNormalized)
        originPath = normalize(originPath);
      return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
    };
  }
});

// node_modules/protobufjs/src/types.js
var require_types = __commonJS({
  "node_modules/protobufjs/src/types.js"(exports2) {
    "use strict";
    var types = exports2;
    var util = require_util();
    var s = [
      "double",
      // 0
      "float",
      // 1
      "int32",
      // 2
      "uint32",
      // 3
      "sint32",
      // 4
      "fixed32",
      // 5
      "sfixed32",
      // 6
      "int64",
      // 7
      "uint64",
      // 8
      "sint64",
      // 9
      "fixed64",
      // 10
      "sfixed64",
      // 11
      "bool",
      // 12
      "string",
      // 13
      "bytes"
      // 14
    ];
    function bake(values, offset) {
      var i = 0, o = {};
      offset |= 0;
      while (i < values.length) o[s[i + offset]] = values[i++];
      return o;
    }
    types.basic = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2,
      /* bytes    */
      2
    ]);
    types.defaults = bake([
      /* double   */
      0,
      /* float    */
      0,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      0,
      /* sfixed32 */
      0,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      0,
      /* sfixed64 */
      0,
      /* bool     */
      false,
      /* string   */
      "",
      /* bytes    */
      util.emptyArray,
      /* message  */
      null
    ]);
    types.long = bake([
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1
    ], 7);
    types.mapKey = bake([
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2
    ], 2);
    types.packed = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0
    ]);
  }
});

// node_modules/protobufjs/src/field.js
var require_field = __commonJS({
  "node_modules/protobufjs/src/field.js"(exports2, module2) {
    "use strict";
    module2.exports = Field;
    var ReflectionObject = require_object();
    ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    var Type;
    var ruleRe = /^required|optional|repeated$/;
    Field.fromJSON = function fromJSON(name, json) {
      return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
    };
    function Field(name, id, type, rule, extend, options, comment) {
      if (util.isObject(rule)) {
        comment = extend;
        options = rule;
        rule = extend = void 0;
      } else if (util.isObject(extend)) {
        comment = options;
        options = extend;
        extend = void 0;
      }
      ReflectionObject.call(this, name, options);
      if (!util.isInteger(id) || id < 0)
        throw TypeError("id must be a non-negative integer");
      if (!util.isString(type))
        throw TypeError("type must be a string");
      if (rule !== void 0 && !ruleRe.test(rule = rule.toString().toLowerCase()))
        throw TypeError("rule must be a string rule");
      if (extend !== void 0 && !util.isString(extend))
        throw TypeError("extend must be a string");
      if (rule === "proto3_optional") {
        rule = "optional";
      }
      this.rule = rule && rule !== "optional" ? rule : void 0;
      this.type = type;
      this.id = id;
      this.extend = extend || void 0;
      this.required = rule === "required";
      this.optional = !this.required;
      this.repeated = rule === "repeated";
      this.map = false;
      this.message = null;
      this.partOf = null;
      this.typeDefault = null;
      this.defaultValue = null;
      this.long = util.Long ? types.long[type] !== void 0 : (
        /* istanbul ignore next */
        false
      );
      this.bytes = type === "bytes";
      this.resolvedType = null;
      this.extensionField = null;
      this.declaringField = null;
      this._packed = null;
      this.comment = comment;
    }
    Object.defineProperty(Field.prototype, "packed", {
      get: function() {
        if (this._packed === null)
          this._packed = this.getOption("packed") !== false;
        return this._packed;
      }
    });
    Field.prototype.setOption = function setOption(name, value, ifNotSet) {
      if (name === "packed")
        this._packed = null;
      return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
    };
    Field.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "rule",
        this.rule !== "optional" && this.rule || void 0,
        "type",
        this.type,
        "id",
        this.id,
        "extend",
        this.extend,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Field.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if ((this.typeDefault = types.defaults[this.type]) === void 0) {
        this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
        if (this.resolvedType instanceof Type)
          this.typeDefault = null;
        else
          this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
      } else if (this.options && this.options.proto3_optional) {
        this.typeDefault = null;
      }
      if (this.options && this.options["default"] != null) {
        this.typeDefault = this.options["default"];
        if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
          this.typeDefault = this.resolvedType.values[this.typeDefault];
      }
      if (this.options) {
        if (this.options.packed === true || this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof Enum))
          delete this.options.packed;
        if (!Object.keys(this.options).length)
          this.options = void 0;
      }
      if (this.long) {
        this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
        if (Object.freeze)
          Object.freeze(this.typeDefault);
      } else if (this.bytes && typeof this.typeDefault === "string") {
        var buf;
        if (util.base64.test(this.typeDefault))
          util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
        else
          util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
        this.typeDefault = buf;
      }
      if (this.map)
        this.defaultValue = util.emptyObject;
      else if (this.repeated)
        this.defaultValue = util.emptyArray;
      else
        this.defaultValue = this.typeDefault;
      if (this.parent instanceof Type)
        this.parent.ctor.prototype[this.name] = this.defaultValue;
      return ReflectionObject.prototype.resolve.call(this);
    };
    Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
      if (typeof fieldType === "function")
        fieldType = util.decorateType(fieldType).name;
      else if (fieldType && typeof fieldType === "object")
        fieldType = util.decorateEnum(fieldType).name;
      return function fieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
      };
    };
    Field._configure = function configure(Type_) {
      Type = Type_;
    };
  }
});

// node_modules/protobufjs/src/oneof.js
var require_oneof = __commonJS({
  "node_modules/protobufjs/src/oneof.js"(exports2, module2) {
    "use strict";
    module2.exports = OneOf;
    var ReflectionObject = require_object();
    ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
    var Field = require_field();
    var util = require_util();
    function OneOf(name, fieldNames, options, comment) {
      if (!Array.isArray(fieldNames)) {
        options = fieldNames;
        fieldNames = void 0;
      }
      ReflectionObject.call(this, name, options);
      if (!(fieldNames === void 0 || Array.isArray(fieldNames)))
        throw TypeError("fieldNames must be an Array");
      this.oneof = fieldNames || [];
      this.fieldsArray = [];
      this.comment = comment;
    }
    OneOf.fromJSON = function fromJSON(name, json) {
      return new OneOf(name, json.oneof, json.options, json.comment);
    };
    OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        this.options,
        "oneof",
        this.oneof,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    function addFieldsToParent(oneof) {
      if (oneof.parent) {
        for (var i = 0; i < oneof.fieldsArray.length; ++i)
          if (!oneof.fieldsArray[i].parent)
            oneof.parent.add(oneof.fieldsArray[i]);
      }
    }
    OneOf.prototype.add = function add(field) {
      if (!(field instanceof Field))
        throw TypeError("field must be a Field");
      if (field.parent && field.parent !== this.parent)
        field.parent.remove(field);
      this.oneof.push(field.name);
      this.fieldsArray.push(field);
      field.partOf = this;
      addFieldsToParent(this);
      return this;
    };
    OneOf.prototype.remove = function remove(field) {
      if (!(field instanceof Field))
        throw TypeError("field must be a Field");
      var index = this.fieldsArray.indexOf(field);
      if (index < 0)
        throw Error(field + " is not a member of " + this);
      this.fieldsArray.splice(index, 1);
      index = this.oneof.indexOf(field.name);
      if (index > -1)
        this.oneof.splice(index, 1);
      field.partOf = null;
      return this;
    };
    OneOf.prototype.onAdd = function onAdd(parent) {
      ReflectionObject.prototype.onAdd.call(this, parent);
      var self2 = this;
      for (var i = 0; i < this.oneof.length; ++i) {
        var field = parent.get(this.oneof[i]);
        if (field && !field.partOf) {
          field.partOf = self2;
          self2.fieldsArray.push(field);
        }
      }
      addFieldsToParent(this);
    };
    OneOf.prototype.onRemove = function onRemove(parent) {
      for (var i = 0, field; i < this.fieldsArray.length; ++i)
        if ((field = this.fieldsArray[i]).parent)
          field.parent.remove(field);
      ReflectionObject.prototype.onRemove.call(this, parent);
    };
    OneOf.d = function decorateOneOf() {
      var fieldNames = new Array(arguments.length), index = 0;
      while (index < arguments.length)
        fieldNames[index] = arguments[index++];
      return function oneOfDecorator(prototype, oneofName) {
        util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
        Object.defineProperty(prototype, oneofName, {
          get: util.oneOfGetter(fieldNames),
          set: util.oneOfSetter(fieldNames)
        });
      };
    };
  }
});

// node_modules/protobufjs/src/namespace.js
var require_namespace = __commonJS({
  "node_modules/protobufjs/src/namespace.js"(exports2, module2) {
    "use strict";
    module2.exports = Namespace;
    var ReflectionObject = require_object();
    ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
    var Field = require_field();
    var util = require_util();
    var OneOf = require_oneof();
    var Type;
    var Service;
    var Enum;
    Namespace.fromJSON = function fromJSON(name, json) {
      return new Namespace(name, json.options).addJSON(json.nested);
    };
    function arrayToJSON(array, toJSONOptions) {
      if (!(array && array.length))
        return void 0;
      var obj = {};
      for (var i = 0; i < array.length; ++i)
        obj[array[i].name] = array[i].toJSON(toJSONOptions);
      return obj;
    }
    Namespace.arrayToJSON = arrayToJSON;
    Namespace.isReservedId = function isReservedId(reserved, id) {
      if (reserved) {
        for (var i = 0; i < reserved.length; ++i)
          if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id)
            return true;
      }
      return false;
    };
    Namespace.isReservedName = function isReservedName(reserved, name) {
      if (reserved) {
        for (var i = 0; i < reserved.length; ++i)
          if (reserved[i] === name)
            return true;
      }
      return false;
    };
    function Namespace(name, options) {
      ReflectionObject.call(this, name, options);
      this.nested = void 0;
      this._nestedArray = null;
    }
    function clearCache(namespace) {
      namespace._nestedArray = null;
      return namespace;
    }
    Object.defineProperty(Namespace.prototype, "nestedArray", {
      get: function() {
        return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
      }
    });
    Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
      return util.toObject([
        "options",
        this.options,
        "nested",
        arrayToJSON(this.nestedArray, toJSONOptions)
      ]);
    };
    Namespace.prototype.addJSON = function addJSON(nestedJson) {
      var ns = this;
      if (nestedJson) {
        for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
          nested = nestedJson[names[i]];
          ns.add(
            // most to least likely
            (nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : nested.id !== void 0 ? Field.fromJSON : Namespace.fromJSON)(names[i], nested)
          );
        }
      }
      return this;
    };
    Namespace.prototype.get = function get(name) {
      return this.nested && this.nested[name] || null;
    };
    Namespace.prototype.getEnum = function getEnum(name) {
      if (this.nested && this.nested[name] instanceof Enum)
        return this.nested[name].values;
      throw Error("no such enum: " + name);
    };
    Namespace.prototype.add = function add(object) {
      if (!(object instanceof Field && object.extend !== void 0 || object instanceof Type || object instanceof OneOf || object instanceof Enum || object instanceof Service || object instanceof Namespace))
        throw TypeError("object must be a valid nested object");
      if (!this.nested)
        this.nested = {};
      else {
        var prev = this.get(object.name);
        if (prev) {
          if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
            var nested = prev.nestedArray;
            for (var i = 0; i < nested.length; ++i)
              object.add(nested[i]);
            this.remove(prev);
            if (!this.nested)
              this.nested = {};
            object.setOptions(prev.options, true);
          } else
            throw Error("duplicate name '" + object.name + "' in " + this);
        }
      }
      this.nested[object.name] = object;
      object.onAdd(this);
      return clearCache(this);
    };
    Namespace.prototype.remove = function remove(object) {
      if (!(object instanceof ReflectionObject))
        throw TypeError("object must be a ReflectionObject");
      if (object.parent !== this)
        throw Error(object + " is not a member of " + this);
      delete this.nested[object.name];
      if (!Object.keys(this.nested).length)
        this.nested = void 0;
      object.onRemove(this);
      return clearCache(this);
    };
    Namespace.prototype.define = function define2(path, json) {
      if (util.isString(path))
        path = path.split(".");
      else if (!Array.isArray(path))
        throw TypeError("illegal path");
      if (path && path.length && path[0] === "")
        throw Error("path must be relative");
      var ptr = this;
      while (path.length > 0) {
        var part = path.shift();
        if (ptr.nested && ptr.nested[part]) {
          ptr = ptr.nested[part];
          if (!(ptr instanceof Namespace))
            throw Error("path conflicts with non-namespace objects");
        } else
          ptr.add(ptr = new Namespace(part));
      }
      if (json)
        ptr.addJSON(json);
      return ptr;
    };
    Namespace.prototype.resolveAll = function resolveAll() {
      var nested = this.nestedArray, i = 0;
      while (i < nested.length)
        if (nested[i] instanceof Namespace)
          nested[i++].resolveAll();
        else
          nested[i++].resolve();
      return this.resolve();
    };
    Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
      if (typeof filterTypes === "boolean") {
        parentAlreadyChecked = filterTypes;
        filterTypes = void 0;
      } else if (filterTypes && !Array.isArray(filterTypes))
        filterTypes = [filterTypes];
      if (util.isString(path) && path.length) {
        if (path === ".")
          return this.root;
        path = path.split(".");
      } else if (!path.length)
        return this;
      if (path[0] === "")
        return this.root.lookup(path.slice(1), filterTypes);
      var found = this.get(path[0]);
      if (found) {
        if (path.length === 1) {
          if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
            return found;
        } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true)))
          return found;
      } else
        for (var i = 0; i < this.nestedArray.length; ++i)
          if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true)))
            return found;
      if (this.parent === null || parentAlreadyChecked)
        return null;
      return this.parent.lookup(path, filterTypes);
    };
    Namespace.prototype.lookupType = function lookupType(path) {
      var found = this.lookup(path, [Type]);
      if (!found)
        throw Error("no such type: " + path);
      return found;
    };
    Namespace.prototype.lookupEnum = function lookupEnum(path) {
      var found = this.lookup(path, [Enum]);
      if (!found)
        throw Error("no such Enum '" + path + "' in " + this);
      return found;
    };
    Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
      var found = this.lookup(path, [Type, Enum]);
      if (!found)
        throw Error("no such Type or Enum '" + path + "' in " + this);
      return found;
    };
    Namespace.prototype.lookupService = function lookupService(path) {
      var found = this.lookup(path, [Service]);
      if (!found)
        throw Error("no such Service '" + path + "' in " + this);
      return found;
    };
    Namespace._configure = function(Type_, Service_, Enum_) {
      Type = Type_;
      Service = Service_;
      Enum = Enum_;
    };
  }
});

// node_modules/protobufjs/src/mapfield.js
var require_mapfield = __commonJS({
  "node_modules/protobufjs/src/mapfield.js"(exports2, module2) {
    "use strict";
    module2.exports = MapField;
    var Field = require_field();
    ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
    var types = require_types();
    var util = require_util();
    function MapField(name, id, keyType, type, options, comment) {
      Field.call(this, name, id, type, void 0, void 0, options, comment);
      if (!util.isString(keyType))
        throw TypeError("keyType must be a string");
      this.keyType = keyType;
      this.resolvedKeyType = null;
      this.map = true;
    }
    MapField.fromJSON = function fromJSON(name, json) {
      return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
    };
    MapField.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "keyType",
        this.keyType,
        "type",
        this.type,
        "id",
        this.id,
        "extend",
        this.extend,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    MapField.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if (types.mapKey[this.keyType] === void 0)
        throw Error("invalid key type: " + this.keyType);
      return Field.prototype.resolve.call(this);
    };
    MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
      if (typeof fieldValueType === "function")
        fieldValueType = util.decorateType(fieldValueType).name;
      else if (fieldValueType && typeof fieldValueType === "object")
        fieldValueType = util.decorateEnum(fieldValueType).name;
      return function mapFieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
      };
    };
  }
});

// node_modules/protobufjs/src/method.js
var require_method = __commonJS({
  "node_modules/protobufjs/src/method.js"(exports2, module2) {
    "use strict";
    module2.exports = Method;
    var ReflectionObject = require_object();
    ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
    var util = require_util();
    function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
      if (util.isObject(requestStream)) {
        options = requestStream;
        requestStream = responseStream = void 0;
      } else if (util.isObject(responseStream)) {
        options = responseStream;
        responseStream = void 0;
      }
      if (!(type === void 0 || util.isString(type)))
        throw TypeError("type must be a string");
      if (!util.isString(requestType))
        throw TypeError("requestType must be a string");
      if (!util.isString(responseType))
        throw TypeError("responseType must be a string");
      ReflectionObject.call(this, name, options);
      this.type = type || "rpc";
      this.requestType = requestType;
      this.requestStream = requestStream ? true : void 0;
      this.responseType = responseType;
      this.responseStream = responseStream ? true : void 0;
      this.resolvedRequestType = null;
      this.resolvedResponseType = null;
      this.comment = comment;
      this.parsedOptions = parsedOptions;
    }
    Method.fromJSON = function fromJSON(name, json) {
      return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
    };
    Method.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "type",
        this.type !== "rpc" && /* istanbul ignore next */
        this.type || void 0,
        "requestType",
        this.requestType,
        "requestStream",
        this.requestStream,
        "responseType",
        this.responseType,
        "responseStream",
        this.responseStream,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0,
        "parsedOptions",
        this.parsedOptions
      ]);
    };
    Method.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      this.resolvedRequestType = this.parent.lookupType(this.requestType);
      this.resolvedResponseType = this.parent.lookupType(this.responseType);
      return ReflectionObject.prototype.resolve.call(this);
    };
  }
});

// node_modules/protobufjs/src/service.js
var require_service2 = __commonJS({
  "node_modules/protobufjs/src/service.js"(exports2, module2) {
    "use strict";
    module2.exports = Service;
    var Namespace = require_namespace();
    ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
    var Method = require_method();
    var util = require_util();
    var rpc = require_rpc();
    function Service(name, options) {
      Namespace.call(this, name, options);
      this.methods = {};
      this._methodsArray = null;
    }
    Service.fromJSON = function fromJSON(name, json) {
      var service = new Service(name, json.options);
      if (json.methods)
        for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
          service.add(Method.fromJSON(names[i], json.methods[names[i]]));
      if (json.nested)
        service.addJSON(json.nested);
      service.comment = json.comment;
      return service;
    };
    Service.prototype.toJSON = function toJSON(toJSONOptions) {
      var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        inherited && inherited.options || void 0,
        "methods",
        Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */
        {},
        "nested",
        inherited && inherited.nested || void 0,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Object.defineProperty(Service.prototype, "methodsArray", {
      get: function() {
        return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
      }
    });
    function clearCache(service) {
      service._methodsArray = null;
      return service;
    }
    Service.prototype.get = function get(name) {
      return this.methods[name] || Namespace.prototype.get.call(this, name);
    };
    Service.prototype.resolveAll = function resolveAll() {
      var methods = this.methodsArray;
      for (var i = 0; i < methods.length; ++i)
        methods[i].resolve();
      return Namespace.prototype.resolve.call(this);
    };
    Service.prototype.add = function add(object) {
      if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
      if (object instanceof Method) {
        this.methods[object.name] = object;
        object.parent = this;
        return clearCache(this);
      }
      return Namespace.prototype.add.call(this, object);
    };
    Service.prototype.remove = function remove(object) {
      if (object instanceof Method) {
        if (this.methods[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.methods[object.name];
        object.parent = null;
        return clearCache(this);
      }
      return Namespace.prototype.remove.call(this, object);
    };
    Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
      for (var i = 0, method; i < /* initializes */
      this.methodsArray.length; ++i) {
        var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
        rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
          m: method,
          q: method.resolvedRequestType.ctor,
          s: method.resolvedResponseType.ctor
        });
      }
      return rpcService;
    };
  }
});

// node_modules/protobufjs/src/message.js
var require_message = __commonJS({
  "node_modules/protobufjs/src/message.js"(exports2, module2) {
    "use strict";
    module2.exports = Message;
    var util = require_minimal();
    function Message(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          this[keys[i]] = properties[keys[i]];
    }
    Message.create = function create(properties) {
      return this.$type.create(properties);
    };
    Message.encode = function encode(message, writer) {
      return this.$type.encode(message, writer);
    };
    Message.encodeDelimited = function encodeDelimited(message, writer) {
      return this.$type.encodeDelimited(message, writer);
    };
    Message.decode = function decode(reader) {
      return this.$type.decode(reader);
    };
    Message.decodeDelimited = function decodeDelimited(reader) {
      return this.$type.decodeDelimited(reader);
    };
    Message.verify = function verify(message) {
      return this.$type.verify(message);
    };
    Message.fromObject = function fromObject(object) {
      return this.$type.fromObject(object);
    };
    Message.toObject = function toObject(message, options) {
      return this.$type.toObject(message, options);
    };
    Message.prototype.toJSON = function toJSON() {
      return this.$type.toObject(this, util.toJSONOptions);
    };
  }
});

// node_modules/protobufjs/src/decoder.js
var require_decoder = __commonJS({
  "node_modules/protobufjs/src/decoder.js"(exports2, module2) {
    "use strict";
    module2.exports = decoder;
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    function missing(field) {
      return "missing required '" + field.name + "'";
    }
    function decoder(mtype) {
      var gen = util.codegen(["r", "l"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field2) {
        return field2.map;
      }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
      if (mtype.group) gen("if((t&7)===4)")("break");
      gen("switch(t>>>3){");
      var i = 0;
      for (; i < /* initializes */
      mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
        gen("case %i: {", field.id);
        if (field.map) {
          gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
          if (types.defaults[field.keyType] !== void 0) gen("k=%j", types.defaults[field.keyType]);
          else gen("k=null");
          if (types.defaults[type] !== void 0) gen("value=%j", types.defaults[type]);
          else gen("value=null");
          gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
          if (types.basic[type] === void 0) gen("value=types[%i].decode(r,r.uint32())", i);
          else gen("value=r.%s()", type);
          gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
          if (types.long[field.keyType] !== void 0) gen('%s[typeof k==="object"?util.longToHash(k):k]=value', ref);
          else gen("%s[k]=value", ref);
        } else if (field.repeated) {
          gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
          if (types.packed[type] !== void 0) gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");
          if (types.basic[type] === void 0) gen(field.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);
          else gen("%s.push(r.%s())", ref, type);
        } else if (types.basic[type] === void 0) gen(field.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i);
        else gen("%s=r.%s()", ref, type);
        gen("break")("}");
      }
      gen("default:")("r.skipType(t&7)")("break")("}")("}");
      for (i = 0; i < mtype._fieldsArray.length; ++i) {
        var rfield = mtype._fieldsArray[i];
        if (rfield.required) gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
      }
      return gen("return m");
    }
  }
});

// node_modules/protobufjs/src/verifier.js
var require_verifier = __commonJS({
  "node_modules/protobufjs/src/verifier.js"(exports2, module2) {
    "use strict";
    module2.exports = verifier;
    var Enum = require_enum();
    var util = require_util();
    function invalid(field, expected) {
      return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
    }
    function genVerifyValue(gen, field, fieldIndex, ref) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) {
          gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
          for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen("case %i:", field.resolvedType.values[keys[j]]);
          gen("break")("}");
        } else {
          gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
        }
      } else {
        switch (field.type) {
          case "int32":
          case "uint32":
          case "sint32":
          case "fixed32":
          case "sfixed32":
            gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
            break;
          case "int64":
          case "uint64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
            break;
          case "float":
          case "double":
            gen('if(typeof %s!=="number")', ref)("return%j", invalid(field, "number"));
            break;
          case "bool":
            gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field, "boolean"));
            break;
          case "string":
            gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
            break;
          case "bytes":
            gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field, "buffer"));
            break;
        }
      }
      return gen;
    }
    function genVerifyKey(gen, field, ref) {
      switch (field.keyType) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
          break;
        case "bool":
          gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
          break;
      }
      return gen;
    }
    function verifier(mtype) {
      var gen = util.codegen(["m"], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected");
      var oneofs = mtype.oneofsArray, seenFirstField = {};
      if (oneofs.length) gen("var p={}");
      for (var i = 0; i < /* initializes */
      mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(), ref = "m" + util.safeProp(field.name);
        if (field.optional) gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name);
        if (field.map) {
          gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
          genVerifyKey(gen, field, "k[i]");
          genVerifyValue(gen, field, i, ref + "[k[i]]")("}");
        } else if (field.repeated) {
          gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
          genVerifyValue(gen, field, i, ref + "[i]")("}");
        } else {
          if (field.partOf) {
            var oneofProp = util.safeProp(field.partOf.name);
            if (seenFirstField[field.partOf.name] === 1) gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
            seenFirstField[field.partOf.name] = 1;
            gen("p%s=1", oneofProp);
          }
          genVerifyValue(gen, field, i, ref);
        }
        if (field.optional) gen("}");
      }
      return gen("return null");
    }
  }
});

// node_modules/protobufjs/src/converter.js
var require_converter = __commonJS({
  "node_modules/protobufjs/src/converter.js"(exports2) {
    "use strict";
    var converter = exports2;
    var Enum = require_enum();
    var util = require_util();
    function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
      var defaultAlreadyEmitted = false;
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) {
          gen("switch(d%s){", prop);
          for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
            if (values[keys[i]] === field.typeDefault && !defaultAlreadyEmitted) {
              gen("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', prop, prop, prop);
              if (!field.repeated) gen("break");
              defaultAlreadyEmitted = true;
            }
            gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
          }
          gen("}");
        } else gen('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field.type) {
          case "double":
          case "float":
            gen("m%s=Number(d%s)", prop, prop);
            break;
          case "uint32":
          case "fixed32":
            gen("m%s=d%s>>>0", prop, prop);
            break;
          case "int32":
          case "sint32":
          case "sfixed32":
            gen("m%s=d%s|0", prop, prop);
            break;
          case "uint64":
            isUnsigned = true;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
            break;
          case "bytes":
            gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
            break;
          case "string":
            gen("m%s=String(d%s)", prop, prop);
            break;
          case "bool":
            gen("m%s=Boolean(d%s)", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter.fromObject = function fromObject(mtype) {
      var fields = mtype.fieldsArray;
      var gen = util.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
      if (!fields.length) return gen("return new this.ctor");
      gen("var m=new this.ctor");
      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(), prop = util.safeProp(field.name);
        if (field.map) {
          gen("if(d%s){", prop)('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop + "[ks[i]]"
          )("}")("}");
        } else if (field.repeated) {
          gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop + "[i]"
          )("}")("}");
        } else {
          if (!(field.resolvedType instanceof Enum)) gen("if(d%s!=null){", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop
          );
          if (!(field.resolvedType instanceof Enum)) gen("}");
        }
      }
      return gen("return m");
    };
    function genValuePartial_toObject(gen, field, fieldIndex, prop) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);
        else gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field.type) {
          case "double":
          case "float":
            gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
            break;
          case "uint64":
            isUnsigned = true;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen('if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
            break;
          case "bytes":
            gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
            break;
          default:
            gen("d%s=m%s", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter.toObject = function toObject(mtype) {
      var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
      if (!fields.length)
        return util.codegen()("return {}");
      var gen = util.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
      var repeatedFields = [], mapFields = [], normalFields = [], i = 0;
      for (; i < fields.length; ++i)
        if (!fields[i].partOf)
          (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
      if (repeatedFields.length) {
        gen("if(o.arrays||o.defaults){");
        for (i = 0; i < repeatedFields.length; ++i) gen("d%s=[]", util.safeProp(repeatedFields[i].name));
        gen("}");
      }
      if (mapFields.length) {
        gen("if(o.objects||o.defaults){");
        for (i = 0; i < mapFields.length; ++i) gen("d%s={}", util.safeProp(mapFields[i].name));
        gen("}");
      }
      if (normalFields.length) {
        gen("if(o.defaults){");
        for (i = 0; i < normalFields.length; ++i) {
          var field = normalFields[i], prop = util.safeProp(field.name);
          if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
          else if (field.long) gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());
          else if (field.bytes) {
            var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
            gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
          } else gen("d%s=%j", prop, field.typeDefault);
        }
        gen("}");
      }
      var hasKs2 = false;
      for (i = 0; i < fields.length; ++i) {
        var field = fields[i], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
        if (field.map) {
          if (!hasKs2) {
            hasKs2 = true;
            gen("var ks2");
          }
          gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop + "[ks2[j]]"
          )("}");
        } else if (field.repeated) {
          gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop + "[j]"
          )("}");
        } else {
          gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name);
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop
          );
          if (field.partOf) gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
        }
        gen("}");
      }
      return gen("return d");
    };
  }
});

// node_modules/protobufjs/src/wrappers.js
var require_wrappers = __commonJS({
  "node_modules/protobufjs/src/wrappers.js"(exports2) {
    "use strict";
    var wrappers = exports2;
    var Message = require_message();
    wrappers[".google.protobuf.Any"] = {
      fromObject: function(object) {
        if (object && object["@type"]) {
          var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
          var type = this.lookup(name);
          if (type) {
            var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"];
            if (type_url.indexOf("/") === -1) {
              type_url = "/" + type_url;
            }
            return this.create({
              type_url,
              value: type.encode(type.fromObject(object)).finish()
            });
          }
        }
        return this.fromObject(object);
      },
      toObject: function(message, options) {
        var googleApi = "type.googleapis.com/";
        var prefix = "";
        var name = "";
        if (options && options.json && message.type_url && message.value) {
          name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
          prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
          var type = this.lookup(name);
          if (type)
            message = type.decode(message.value);
        }
        if (!(message instanceof this.ctor) && message instanceof Message) {
          var object = message.$type.toObject(message, options);
          var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName;
          if (prefix === "") {
            prefix = googleApi;
          }
          name = prefix + messageName;
          object["@type"] = name;
          return object;
        }
        return this.toObject(message, options);
      }
    };
  }
});

// node_modules/protobufjs/src/type.js
var require_type = __commonJS({
  "node_modules/protobufjs/src/type.js"(exports2, module2) {
    "use strict";
    module2.exports = Type;
    var Namespace = require_namespace();
    ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
    var Enum = require_enum();
    var OneOf = require_oneof();
    var Field = require_field();
    var MapField = require_mapfield();
    var Service = require_service2();
    var Message = require_message();
    var Reader = require_reader();
    var Writer = require_writer();
    var util = require_util();
    var encoder = require_encoder();
    var decoder = require_decoder();
    var verifier = require_verifier();
    var converter = require_converter();
    var wrappers = require_wrappers();
    function Type(name, options) {
      Namespace.call(this, name, options);
      this.fields = {};
      this.oneofs = void 0;
      this.extensions = void 0;
      this.reserved = void 0;
      this.group = void 0;
      this._fieldsById = null;
      this._fieldsArray = null;
      this._oneofsArray = null;
      this._ctor = null;
    }
    Object.defineProperties(Type.prototype, {
      /**
       * Message fields by id.
       * @name Type#fieldsById
       * @type {Object.<number,Field>}
       * @readonly
       */
      fieldsById: {
        get: function() {
          if (this._fieldsById)
            return this._fieldsById;
          this._fieldsById = {};
          for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
            var field = this.fields[names[i]], id = field.id;
            if (this._fieldsById[id])
              throw Error("duplicate id " + id + " in " + this);
            this._fieldsById[id] = field;
          }
          return this._fieldsById;
        }
      },
      /**
       * Fields of this message as an array for iteration.
       * @name Type#fieldsArray
       * @type {Field[]}
       * @readonly
       */
      fieldsArray: {
        get: function() {
          return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
        }
      },
      /**
       * Oneofs of this message as an array for iteration.
       * @name Type#oneofsArray
       * @type {OneOf[]}
       * @readonly
       */
      oneofsArray: {
        get: function() {
          return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
        }
      },
      /**
       * The registered constructor, if any registered, otherwise a generic constructor.
       * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
       * @name Type#ctor
       * @type {Constructor<{}>}
       */
      ctor: {
        get: function() {
          return this._ctor || (this.ctor = Type.generateConstructor(this)());
        },
        set: function(ctor) {
          var prototype = ctor.prototype;
          if (!(prototype instanceof Message)) {
            (ctor.prototype = new Message()).constructor = ctor;
            util.merge(ctor.prototype, prototype);
          }
          ctor.$type = ctor.prototype.$type = this;
          util.merge(ctor, Message, true);
          this._ctor = ctor;
          var i = 0;
          for (; i < /* initializes */
          this.fieldsArray.length; ++i)
            this._fieldsArray[i].resolve();
          var ctorProperties = {};
          for (i = 0; i < /* initializes */
          this.oneofsArray.length; ++i)
            ctorProperties[this._oneofsArray[i].resolve().name] = {
              get: util.oneOfGetter(this._oneofsArray[i].oneof),
              set: util.oneOfSetter(this._oneofsArray[i].oneof)
            };
          if (i)
            Object.defineProperties(ctor.prototype, ctorProperties);
        }
      }
    });
    Type.generateConstructor = function generateConstructor(mtype) {
      var gen = util.codegen(["p"], mtype.name);
      for (var i = 0, field; i < mtype.fieldsArray.length; ++i)
        if ((field = mtype._fieldsArray[i]).map) gen("this%s={}", util.safeProp(field.name));
        else if (field.repeated) gen("this%s=[]", util.safeProp(field.name));
      return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
    };
    function clearCache(type) {
      type._fieldsById = type._fieldsArray = type._oneofsArray = null;
      delete type.encode;
      delete type.decode;
      delete type.verify;
      return type;
    }
    Type.fromJSON = function fromJSON(name, json) {
      var type = new Type(name, json.options);
      type.extensions = json.extensions;
      type.reserved = json.reserved;
      var names = Object.keys(json.fields), i = 0;
      for (; i < names.length; ++i)
        type.add(
          (typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]])
        );
      if (json.oneofs)
        for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
          type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
      if (json.nested)
        for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
          var nested = json.nested[names[i]];
          type.add(
            // most to least likely
            (nested.id !== void 0 ? Field.fromJSON : nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : Namespace.fromJSON)(names[i], nested)
          );
        }
      if (json.extensions && json.extensions.length)
        type.extensions = json.extensions;
      if (json.reserved && json.reserved.length)
        type.reserved = json.reserved;
      if (json.group)
        type.group = true;
      if (json.comment)
        type.comment = json.comment;
      return type;
    };
    Type.prototype.toJSON = function toJSON(toJSONOptions) {
      var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        inherited && inherited.options || void 0,
        "oneofs",
        Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
        "fields",
        Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
          return !obj.declaringField;
        }), toJSONOptions) || {},
        "extensions",
        this.extensions && this.extensions.length ? this.extensions : void 0,
        "reserved",
        this.reserved && this.reserved.length ? this.reserved : void 0,
        "group",
        this.group || void 0,
        "nested",
        inherited && inherited.nested || void 0,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Type.prototype.resolveAll = function resolveAll() {
      var fields = this.fieldsArray, i = 0;
      while (i < fields.length)
        fields[i++].resolve();
      var oneofs = this.oneofsArray;
      i = 0;
      while (i < oneofs.length)
        oneofs[i++].resolve();
      return Namespace.prototype.resolveAll.call(this);
    };
    Type.prototype.get = function get(name) {
      return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
    };
    Type.prototype.add = function add(object) {
      if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
      if (object instanceof Field && object.extend === void 0) {
        if (this._fieldsById ? (
          /* istanbul ignore next */
          this._fieldsById[object.id]
        ) : this.fieldsById[object.id])
          throw Error("duplicate id " + object.id + " in " + this);
        if (this.isReservedId(object.id))
          throw Error("id " + object.id + " is reserved in " + this);
        if (this.isReservedName(object.name))
          throw Error("name '" + object.name + "' is reserved in " + this);
        if (object.parent)
          object.parent.remove(object);
        this.fields[object.name] = object;
        object.message = this;
        object.onAdd(this);
        return clearCache(this);
      }
      if (object instanceof OneOf) {
        if (!this.oneofs)
          this.oneofs = {};
        this.oneofs[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
      }
      return Namespace.prototype.add.call(this, object);
    };
    Type.prototype.remove = function remove(object) {
      if (object instanceof Field && object.extend === void 0) {
        if (!this.fields || this.fields[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.fields[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
      }
      if (object instanceof OneOf) {
        if (!this.oneofs || this.oneofs[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.oneofs[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
      }
      return Namespace.prototype.remove.call(this, object);
    };
    Type.prototype.isReservedId = function isReservedId(id) {
      return Namespace.isReservedId(this.reserved, id);
    };
    Type.prototype.isReservedName = function isReservedName(name) {
      return Namespace.isReservedName(this.reserved, name);
    };
    Type.prototype.create = function create(properties) {
      return new this.ctor(properties);
    };
    Type.prototype.setup = function setup() {
      var fullName = this.fullName, types = [];
      for (var i = 0; i < /* initializes */
      this.fieldsArray.length; ++i)
        types.push(this._fieldsArray[i].resolve().resolvedType);
      this.encode = encoder(this)({
        Writer,
        types,
        util
      });
      this.decode = decoder(this)({
        Reader,
        types,
        util
      });
      this.verify = verifier(this)({
        types,
        util
      });
      this.fromObject = converter.fromObject(this)({
        types,
        util
      });
      this.toObject = converter.toObject(this)({
        types,
        util
      });
      var wrapper = wrappers[fullName];
      if (wrapper) {
        var originalThis = Object.create(this);
        originalThis.fromObject = this.fromObject;
        this.fromObject = wrapper.fromObject.bind(originalThis);
        originalThis.toObject = this.toObject;
        this.toObject = wrapper.toObject.bind(originalThis);
      }
      return this;
    };
    Type.prototype.encode = function encode_setup(message, writer) {
      return this.setup().encode(message, writer);
    };
    Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };
    Type.prototype.decode = function decode_setup(reader, length) {
      return this.setup().decode(reader, length);
    };
    Type.prototype.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof Reader))
        reader = Reader.create(reader);
      return this.decode(reader, reader.uint32());
    };
    Type.prototype.verify = function verify_setup(message) {
      return this.setup().verify(message);
    };
    Type.prototype.fromObject = function fromObject(object) {
      return this.setup().fromObject(object);
    };
    Type.prototype.toObject = function toObject(message, options) {
      return this.setup().toObject(message, options);
    };
    Type.d = function decorateType(typeName) {
      return function typeDecorator(target) {
        util.decorateType(target, typeName);
      };
    };
  }
});

// node_modules/protobufjs/src/root.js
var require_root = __commonJS({
  "node_modules/protobufjs/src/root.js"(exports2, module2) {
    "use strict";
    module2.exports = Root;
    var Namespace = require_namespace();
    ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
    var Field = require_field();
    var Enum = require_enum();
    var OneOf = require_oneof();
    var util = require_util();
    var Type;
    var parse;
    var common;
    function Root(options) {
      Namespace.call(this, "", options);
      this.deferred = [];
      this.files = [];
    }
    Root.fromJSON = function fromJSON(json, root) {
      if (!root)
        root = new Root();
      if (json.options)
        root.setOptions(json.options);
      return root.addJSON(json.nested);
    };
    Root.prototype.resolvePath = util.path.resolve;
    Root.prototype.fetch = util.fetch;
    function SYNC() {
    }
    Root.prototype.load = function load(filename, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = void 0;
      }
      var self2 = this;
      if (!callback)
        return util.asPromise(load, self2, filename, options);
      var sync = callback === SYNC;
      function finish(err, root) {
        if (!callback)
          return;
        if (sync)
          throw err;
        var cb = callback;
        callback = null;
        cb(err, root);
      }
      function getBundledFileName(filename2) {
        var idx = filename2.lastIndexOf("google/protobuf/");
        if (idx > -1) {
          var altname = filename2.substring(idx);
          if (altname in common) return altname;
        }
        return null;
      }
      function process2(filename2, source) {
        try {
          if (util.isString(source) && source.charAt(0) === "{")
            source = JSON.parse(source);
          if (!util.isString(source))
            self2.setOptions(source.options).addJSON(source.nested);
          else {
            parse.filename = filename2;
            var parsed = parse(source, self2, options), resolved2, i2 = 0;
            if (parsed.imports) {
              for (; i2 < parsed.imports.length; ++i2)
                if (resolved2 = getBundledFileName(parsed.imports[i2]) || self2.resolvePath(filename2, parsed.imports[i2]))
                  fetch(resolved2);
            }
            if (parsed.weakImports) {
              for (i2 = 0; i2 < parsed.weakImports.length; ++i2)
                if (resolved2 = getBundledFileName(parsed.weakImports[i2]) || self2.resolvePath(filename2, parsed.weakImports[i2]))
                  fetch(resolved2, true);
            }
          }
        } catch (err) {
          finish(err);
        }
        if (!sync && !queued)
          finish(null, self2);
      }
      function fetch(filename2, weak) {
        filename2 = getBundledFileName(filename2) || filename2;
        if (self2.files.indexOf(filename2) > -1)
          return;
        self2.files.push(filename2);
        if (filename2 in common) {
          if (sync)
            process2(filename2, common[filename2]);
          else {
            ++queued;
            setTimeout(function() {
              --queued;
              process2(filename2, common[filename2]);
            });
          }
          return;
        }
        if (sync) {
          var source;
          try {
            source = util.fs.readFileSync(filename2).toString("utf8");
          } catch (err) {
            if (!weak)
              finish(err);
            return;
          }
          process2(filename2, source);
        } else {
          ++queued;
          self2.fetch(filename2, function(err, source2) {
            --queued;
            if (!callback)
              return;
            if (err) {
              if (!weak)
                finish(err);
              else if (!queued)
                finish(null, self2);
              return;
            }
            process2(filename2, source2);
          });
        }
      }
      var queued = 0;
      if (util.isString(filename))
        filename = [filename];
      for (var i = 0, resolved; i < filename.length; ++i)
        if (resolved = self2.resolvePath("", filename[i]))
          fetch(resolved);
      if (sync)
        return self2;
      if (!queued)
        finish(null, self2);
      return void 0;
    };
    Root.prototype.loadSync = function loadSync(filename, options) {
      if (!util.isNode)
        throw Error("not supported");
      return this.load(filename, options, SYNC);
    };
    Root.prototype.resolveAll = function resolveAll() {
      if (this.deferred.length)
        throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
          return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
      return Namespace.prototype.resolveAll.call(this);
    };
    var exposeRe = /^[A-Z]/;
    function tryHandleExtension(root, field) {
      var extendedType = field.parent.lookup(field.extend);
      if (extendedType) {
        var sisterField = new Field(field.fullName, field.id, field.type, field.rule, void 0, field.options);
        if (extendedType.get(sisterField.name)) {
          return true;
        }
        sisterField.declaringField = field;
        field.extensionField = sisterField;
        extendedType.add(sisterField);
        return true;
      }
      return false;
    }
    Root.prototype._handleAdd = function _handleAdd(object) {
      if (object instanceof Field) {
        if (
          /* an extension field (implies not part of a oneof) */
          object.extend !== void 0 && /* not already handled */
          !object.extensionField
        ) {
          if (!tryHandleExtension(this, object))
            this.deferred.push(object);
        }
      } else if (object instanceof Enum) {
        if (exposeRe.test(object.name))
          object.parent[object.name] = object.values;
      } else if (!(object instanceof OneOf)) {
        if (object instanceof Type)
          for (var i = 0; i < this.deferred.length; )
            if (tryHandleExtension(this, this.deferred[i]))
              this.deferred.splice(i, 1);
            else
              ++i;
        for (var j = 0; j < /* initializes */
        object.nestedArray.length; ++j)
          this._handleAdd(object._nestedArray[j]);
        if (exposeRe.test(object.name))
          object.parent[object.name] = object;
      }
    };
    Root.prototype._handleRemove = function _handleRemove(object) {
      if (object instanceof Field) {
        if (
          /* an extension field */
          object.extend !== void 0
        ) {
          if (
            /* already handled */
            object.extensionField
          ) {
            object.extensionField.parent.remove(object.extensionField);
            object.extensionField = null;
          } else {
            var index = this.deferred.indexOf(object);
            if (index > -1)
              this.deferred.splice(index, 1);
          }
        }
      } else if (object instanceof Enum) {
        if (exposeRe.test(object.name))
          delete object.parent[object.name];
      } else if (object instanceof Namespace) {
        for (var i = 0; i < /* initializes */
        object.nestedArray.length; ++i)
          this._handleRemove(object._nestedArray[i]);
        if (exposeRe.test(object.name))
          delete object.parent[object.name];
      }
    };
    Root._configure = function(Type_, parse_, common_) {
      Type = Type_;
      parse = parse_;
      common = common_;
    };
  }
});

// node_modules/protobufjs/src/util.js
var require_util = __commonJS({
  "node_modules/protobufjs/src/util.js"(exports2, module2) {
    "use strict";
    var util = module2.exports = require_minimal();
    var roots = require_roots();
    var Type;
    var Enum;
    util.codegen = require_codegen();
    util.fetch = require_fetch();
    util.path = require_path();
    util.fs = util.inquire("fs");
    util.toArray = function toArray(object) {
      if (object) {
        var keys = Object.keys(object), array = new Array(keys.length), index = 0;
        while (index < keys.length)
          array[index] = object[keys[index++]];
        return array;
      }
      return [];
    };
    util.toObject = function toObject(array) {
      var object = {}, index = 0;
      while (index < array.length) {
        var key = array[index++], val = array[index++];
        if (val !== void 0)
          object[key] = val;
      }
      return object;
    };
    var safePropBackslashRe = /\\/g;
    var safePropQuoteRe = /"/g;
    util.isReserved = function isReserved(name) {
      return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
    };
    util.safeProp = function safeProp(prop) {
      if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop))
        return '["' + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, '\\"') + '"]';
      return "." + prop;
    };
    util.ucFirst = function ucFirst(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    };
    var camelCaseRe = /_([a-z])/g;
    util.camelCase = function camelCase(str) {
      return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
        return $1.toUpperCase();
      });
    };
    util.compareFieldsById = function compareFieldsById(a, b) {
      return a.id - b.id;
    };
    util.decorateType = function decorateType(ctor, typeName) {
      if (ctor.$type) {
        if (typeName && ctor.$type.name !== typeName) {
          util.decorateRoot.remove(ctor.$type);
          ctor.$type.name = typeName;
          util.decorateRoot.add(ctor.$type);
        }
        return ctor.$type;
      }
      if (!Type)
        Type = require_type();
      var type = new Type(typeName || ctor.name);
      util.decorateRoot.add(type);
      type.ctor = ctor;
      Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
      Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
      return type;
    };
    var decorateEnumIndex = 0;
    util.decorateEnum = function decorateEnum(object) {
      if (object.$type)
        return object.$type;
      if (!Enum)
        Enum = require_enum();
      var enm = new Enum("Enum" + decorateEnumIndex++, object);
      util.decorateRoot.add(enm);
      Object.defineProperty(object, "$type", { value: enm, enumerable: false });
      return enm;
    };
    util.setProperty = function setProperty(dst, path, value) {
      function setProp(dst2, path2, value2) {
        var part = path2.shift();
        if (part === "__proto__" || part === "prototype") {
          return dst2;
        }
        if (path2.length > 0) {
          dst2[part] = setProp(dst2[part] || {}, path2, value2);
        } else {
          var prevValue = dst2[part];
          if (prevValue)
            value2 = [].concat(prevValue).concat(value2);
          dst2[part] = value2;
        }
        return dst2;
      }
      if (typeof dst !== "object")
        throw TypeError("dst must be an object");
      if (!path)
        throw TypeError("path must be specified");
      path = path.split(".");
      return setProp(dst, path, value);
    };
    Object.defineProperty(util, "decorateRoot", {
      get: function() {
        return roots["decorated"] || (roots["decorated"] = new (require_root())());
      }
    });
  }
});

// node_modules/protobufjs/src/object.js
var require_object = __commonJS({
  "node_modules/protobufjs/src/object.js"(exports2, module2) {
    "use strict";
    module2.exports = ReflectionObject;
    ReflectionObject.className = "ReflectionObject";
    var util = require_util();
    var Root;
    function ReflectionObject(name, options) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      if (options && !util.isObject(options))
        throw TypeError("options must be an object");
      this.options = options;
      this.parsedOptions = null;
      this.name = name;
      this.parent = null;
      this.resolved = false;
      this.comment = null;
      this.filename = null;
    }
    Object.defineProperties(ReflectionObject.prototype, {
      /**
       * Reference to the root namespace.
       * @name ReflectionObject#root
       * @type {Root}
       * @readonly
       */
      root: {
        get: function() {
          var ptr = this;
          while (ptr.parent !== null)
            ptr = ptr.parent;
          return ptr;
        }
      },
      /**
       * Full name including leading dot.
       * @name ReflectionObject#fullName
       * @type {string}
       * @readonly
       */
      fullName: {
        get: function() {
          var path = [this.name], ptr = this.parent;
          while (ptr) {
            path.unshift(ptr.name);
            ptr = ptr.parent;
          }
          return path.join(".");
        }
      }
    });
    ReflectionObject.prototype.toJSON = /* istanbul ignore next */
    function toJSON() {
      throw Error();
    };
    ReflectionObject.prototype.onAdd = function onAdd(parent) {
      if (this.parent && this.parent !== parent)
        this.parent.remove(this);
      this.parent = parent;
      this.resolved = false;
      var root = parent.root;
      if (root instanceof Root)
        root._handleAdd(this);
    };
    ReflectionObject.prototype.onRemove = function onRemove(parent) {
      var root = parent.root;
      if (root instanceof Root)
        root._handleRemove(this);
      this.parent = null;
      this.resolved = false;
    };
    ReflectionObject.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if (this.root instanceof Root)
        this.resolved = true;
      return this;
    };
    ReflectionObject.prototype.getOption = function getOption(name) {
      if (this.options)
        return this.options[name];
      return void 0;
    };
    ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
      if (!ifNotSet || !this.options || this.options[name] === void 0)
        (this.options || (this.options = {}))[name] = value;
      return this;
    };
    ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
      if (!this.parsedOptions) {
        this.parsedOptions = [];
      }
      var parsedOptions = this.parsedOptions;
      if (propName) {
        var opt = parsedOptions.find(function(opt2) {
          return Object.prototype.hasOwnProperty.call(opt2, name);
        });
        if (opt) {
          var newValue = opt[name];
          util.setProperty(newValue, propName, value);
        } else {
          opt = {};
          opt[name] = util.setProperty({}, propName, value);
          parsedOptions.push(opt);
        }
      } else {
        var newOpt = {};
        newOpt[name] = value;
        parsedOptions.push(newOpt);
      }
      return this;
    };
    ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
      if (options)
        for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
          this.setOption(keys[i], options[keys[i]], ifNotSet);
      return this;
    };
    ReflectionObject.prototype.toString = function toString() {
      var className = this.constructor.className, fullName = this.fullName;
      if (fullName.length)
        return className + " " + fullName;
      return className;
    };
    ReflectionObject._configure = function(Root_) {
      Root = Root_;
    };
  }
});

// node_modules/protobufjs/src/enum.js
var require_enum = __commonJS({
  "node_modules/protobufjs/src/enum.js"(exports2, module2) {
    "use strict";
    module2.exports = Enum;
    var ReflectionObject = require_object();
    ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
    var Namespace = require_namespace();
    var util = require_util();
    function Enum(name, values, options, comment, comments, valuesOptions) {
      ReflectionObject.call(this, name, options);
      if (values && typeof values !== "object")
        throw TypeError("values must be an object");
      this.valuesById = {};
      this.values = Object.create(this.valuesById);
      this.comment = comment;
      this.comments = comments || {};
      this.valuesOptions = valuesOptions;
      this.reserved = void 0;
      if (values) {
        for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
          if (typeof values[keys[i]] === "number")
            this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
      }
    }
    Enum.fromJSON = function fromJSON(name, json) {
      var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
      enm.reserved = json.reserved;
      return enm;
    };
    Enum.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        this.options,
        "valuesOptions",
        this.valuesOptions,
        "values",
        this.values,
        "reserved",
        this.reserved && this.reserved.length ? this.reserved : void 0,
        "comment",
        keepComments ? this.comment : void 0,
        "comments",
        keepComments ? this.comments : void 0
      ]);
    };
    Enum.prototype.add = function add(name, id, comment, options) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      if (!util.isInteger(id))
        throw TypeError("id must be an integer");
      if (this.values[name] !== void 0)
        throw Error("duplicate name '" + name + "' in " + this);
      if (this.isReservedId(id))
        throw Error("id " + id + " is reserved in " + this);
      if (this.isReservedName(name))
        throw Error("name '" + name + "' is reserved in " + this);
      if (this.valuesById[id] !== void 0) {
        if (!(this.options && this.options.allow_alias))
          throw Error("duplicate id " + id + " in " + this);
        this.values[name] = id;
      } else
        this.valuesById[this.values[name] = id] = name;
      if (options) {
        if (this.valuesOptions === void 0)
          this.valuesOptions = {};
        this.valuesOptions[name] = options || null;
      }
      this.comments[name] = comment || null;
      return this;
    };
    Enum.prototype.remove = function remove(name) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      var val = this.values[name];
      if (val == null)
        throw Error("name '" + name + "' does not exist in " + this);
      delete this.valuesById[val];
      delete this.values[name];
      delete this.comments[name];
      if (this.valuesOptions)
        delete this.valuesOptions[name];
      return this;
    };
    Enum.prototype.isReservedId = function isReservedId(id) {
      return Namespace.isReservedId(this.reserved, id);
    };
    Enum.prototype.isReservedName = function isReservedName(name) {
      return Namespace.isReservedName(this.reserved, name);
    };
  }
});

// node_modules/protobufjs/src/encoder.js
var require_encoder = __commonJS({
  "node_modules/protobufjs/src/encoder.js"(exports2, module2) {
    "use strict";
    module2.exports = encoder;
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    function genTypePartial(gen, field, fieldIndex, ref) {
      return field.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
    }
    function encoder(mtype) {
      var gen = util.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
      var i, ref;
      var fields = (
        /* initializes */
        mtype.fieldsArray.slice().sort(util.compareFieldsById)
      );
      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
        ref = "m" + util.safeProp(field.name);
        if (field.map) {
          gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
          if (wireType === void 0) gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref);
          else gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
          gen("}")("}");
        } else if (field.repeated) {
          gen("if(%s!=null&&%s.length){", ref, ref);
          if (field.packed && types.packed[type] !== void 0) {
            gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()");
          } else {
            gen("for(var i=0;i<%s.length;++i)", ref);
            if (wireType === void 0)
              genTypePartial(gen, field, index, ref + "[i]");
            else gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
          }
          gen("}");
        } else {
          if (field.optional) gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name);
          if (wireType === void 0)
            genTypePartial(gen, field, index, ref);
          else gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
        }
      }
      return gen("return w");
    }
  }
});

// node_modules/protobufjs/src/index-light.js
var require_index_light = __commonJS({
  "node_modules/protobufjs/src/index-light.js"(exports2, module2) {
    "use strict";
    var protobuf = module2.exports = require_index_minimal();
    protobuf.build = "light";
    function load(filename, root, callback) {
      if (typeof root === "function") {
        callback = root;
        root = new protobuf.Root();
      } else if (!root)
        root = new protobuf.Root();
      return root.load(filename, callback);
    }
    protobuf.load = load;
    function loadSync(filename, root) {
      if (!root)
        root = new protobuf.Root();
      return root.loadSync(filename);
    }
    protobuf.loadSync = loadSync;
    protobuf.encoder = require_encoder();
    protobuf.decoder = require_decoder();
    protobuf.verifier = require_verifier();
    protobuf.converter = require_converter();
    protobuf.ReflectionObject = require_object();
    protobuf.Namespace = require_namespace();
    protobuf.Root = require_root();
    protobuf.Enum = require_enum();
    protobuf.Type = require_type();
    protobuf.Field = require_field();
    protobuf.OneOf = require_oneof();
    protobuf.MapField = require_mapfield();
    protobuf.Service = require_service2();
    protobuf.Method = require_method();
    protobuf.Message = require_message();
    protobuf.wrappers = require_wrappers();
    protobuf.types = require_types();
    protobuf.util = require_util();
    protobuf.ReflectionObject._configure(protobuf.Root);
    protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
    protobuf.Root._configure(protobuf.Type);
    protobuf.Field._configure(protobuf.Type);
  }
});

// node_modules/protobufjs/light.js
var require_light = __commonJS({
  "node_modules/protobufjs/light.js"(exports2, module2) {
    "use strict";
    module2.exports = require_index_light();
  }
});

// node_modules/@trezor/protobuf/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/@trezor/protobuf/lib/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMessageFromType = exports2.createMessageFromName = exports2.parseConfigure = exports2.isPrimitiveField = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var protobuf = tslib_1.__importStar(require_light());
    var primitiveTypes = [
      "bool",
      "string",
      "bytes",
      "int32",
      "int64",
      "uint32",
      "uint64",
      "sint32",
      "sint64",
      "fixed32",
      "fixed64",
      "sfixed32",
      "sfixed64",
      "double",
      "float"
    ];
    var isPrimitiveField = (field) => primitiveTypes.includes(field);
    exports2.isPrimitiveField = isPrimitiveField;
    function parseConfigure(data) {
      if (typeof data === "string") {
        return protobuf.Root.fromJSON(JSON.parse(data));
      }
      return protobuf.Root.fromJSON(data);
    }
    exports2.parseConfigure = parseConfigure;
    var createMessageFromName = (messages, name) => {
      const Message = messages.lookupType(name);
      const MessageType = messages.lookupEnum("MessageType");
      let messageTypeId = MessageType.values[`MessageType_${name}`];
      if (typeof messageTypeId !== "number" && Message.options) {
        messageTypeId = Message.options["(wire_type)"];
      }
      return {
        Message,
        messageType: messageTypeId !== null && messageTypeId !== void 0 ? messageTypeId : name
      };
    };
    exports2.createMessageFromName = createMessageFromName;
    var createMessageFromType = (messages, messageType) => {
      if (typeof messageType === "string") {
        const Message2 = messages.lookupType(messageType);
        return {
          Message: Message2,
          messageName: messageType
        };
      }
      const messageTypes = messages.lookupEnum("MessageType");
      const messageName = messageTypes.valuesById[messageType].replace("MessageType_", "");
      const Message = messages.lookupType(messageName);
      return {
        Message,
        messageName
      };
    };
    exports2.createMessageFromType = createMessageFromType;
  }
});

// node_modules/@trezor/protobuf/lib/decode.js
var require_decode = __commonJS({
  "node_modules/@trezor/protobuf/lib/decode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decode = exports2.messageToJSON = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var utils_1 = require_utils2();
    var transform = (field, value) => {
      if ((0, utils_1.isPrimitiveField)(field.type)) {
        if (field.optional && typeof value === "undefined") {
          return null;
        }
        if (field.type === "bytes") {
          return Buffer.from(value).toString("hex");
        }
        if (field.long) {
          if (Number.isSafeInteger(value.toNumber())) {
            return value.toNumber();
          }
          return value.toString();
        }
        return value;
      }
      if ("valuesById" in field.resolvedType) {
        return field.resolvedType.valuesById[value];
      }
      if (field.resolvedType.fields) {
        return messageToJSON(value, field.resolvedType.fields);
      }
      throw new Error(`transport: decode: case not handled: ${field}`);
    };
    function messageToJSON(MessageParam, fields) {
      if (!MessageParam) {
        return {};
      }
      const message = tslib_1.__rest(MessageParam, []);
      const res = {};
      Object.keys(fields).forEach((key) => {
        const field = fields[key];
        const value = message[key];
        if (field.repeated) {
          res[key] = value.map((v) => transform(field, v));
        } else {
          res[key] = transform(field, value);
        }
      });
      return res;
    }
    exports2.messageToJSON = messageToJSON;
    var decode = (MessageParam, data) => {
      const decoded = MessageParam.decode(new Uint8Array(data));
      return messageToJSON(decoded, decoded.$type.fields);
    };
    exports2.decode = decode;
  }
});

// node_modules/@trezor/protobuf/lib/encode.js
var require_encode = __commonJS({
  "node_modules/@trezor/protobuf/lib/encode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.encode = exports2.patch = void 0;
    var light_1 = require_light();
    var utils_1 = require_utils2();
    var transform = (fieldType, value) => {
      if (fieldType === "bytes") {
        if (typeof value === "string" && !value)
          return value;
        return Buffer.from(value, "hex");
      }
      if (typeof value === "number" && !Number.isSafeInteger(value)) {
        throw new RangeError("field value is not within safe integer range");
      }
      return value;
    };
    function patch(Message, payload) {
      const patched = {};
      if (!Message.fields) {
        return patched;
      }
      Object.keys(Message.fields).forEach((key) => {
        const field = Message.fields[key];
        const value = payload[key];
        if (typeof value === "undefined") {
          return;
        }
        if ((0, utils_1.isPrimitiveField)(field.type)) {
          if (field.repeated) {
            patched[key] = value.map((v) => transform(field.type, v));
          } else {
            patched[key] = transform(field.type, value);
          }
          return;
        }
        if (field.repeated) {
          const fieldType = Message.lookupTypeOrEnum(field.type);
          if (fieldType instanceof light_1.Enum) {
            patched[key] = value;
          } else {
            patched[key] = value.map((v) => patch(fieldType, v));
          }
        } else if (typeof value === "object" && value !== null) {
          const RefMessage = Message.lookupType(field.type);
          patched[key] = patch(RefMessage, value);
        } else if (typeof value === "number") {
          const RefMessage = Message.lookupEnum(field.type);
          patched[key] = RefMessage.values[value];
        } else {
          patched[key] = value;
        }
      });
      return patched;
    }
    exports2.patch = patch;
    var encode = (Message, data) => {
      const payload = patch(Message, data);
      const message = Message.fromObject(payload);
      const bytes = Message.encode(message).finish();
      return Buffer.from(bytes);
    };
    exports2.encode = encode;
  }
});

// node_modules/@trezor/protobuf/lib/messages.js
var require_messages = __commonJS({
  "node_modules/@trezor/protobuf/lib/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TezosBallotType = exports2.TezosContractType = exports2.StellarSignerType = exports2.StellarMemoType = exports2.StellarAssetType = exports2.NEMImportanceTransferMode = exports2.NEMModificationType = exports2.NEMSupplyChangeType = exports2.NEMMosaicLevy = exports2.MoneroNetworkType = exports2.BootCommand = exports2.Enum_WordRequestType = exports2.SdProtectOperationType = exports2.Enum_RecoveryType = exports2.RecoveryDeviceInputMethod = exports2.Enum_Capability = exports2.Enum_RecoveryStatus = exports2.Enum_BackupAvailability = exports2.Enum_HomescreenFormat = exports2.Enum_SafetyCheckLevel = exports2.Enum_BackupType = exports2.EthereumDataType = exports2.EthereumDefinitionType = exports2.DebugPhysicalButton = exports2.DebugButton = exports2.Enum_PinMatrixRequestType = exports2.Enum_ButtonRequestType = exports2.FailureType = exports2.CardanoTxWitnessType = exports2.CardanoTxSigningMode = exports2.CardanoCVoteRegistrationFormat = exports2.CardanoTxAuxiliaryDataSupplementType = exports2.CardanoPoolRelayType = exports2.CardanoDRepType = exports2.CardanoCertificateType = exports2.CardanoTxOutputSerializationFormat = exports2.CardanoNativeScriptHashDisplayFormat = exports2.CardanoNativeScriptType = exports2.CardanoAddressType = exports2.CardanoDerivationType = exports2.Enum_RequestType = exports2.AmountUnit = exports2.DecredStakingSpendType = exports2.Enum_OutputScriptType = exports2.Enum_InputScriptType = exports2.BinanceTimeInForce = exports2.BinanceOrderSide = exports2.BinanceOrderType = exports2.DeviceModelInternal = void 0;
    var DeviceModelInternal;
    (function(DeviceModelInternal2) {
      DeviceModelInternal2["T1B1"] = "T1B1";
      DeviceModelInternal2["T2T1"] = "T2T1";
      DeviceModelInternal2["T2B1"] = "T2B1";
      DeviceModelInternal2["T3T1"] = "T3T1";
    })(DeviceModelInternal || (exports2.DeviceModelInternal = DeviceModelInternal = {}));
    var BinanceOrderType;
    (function(BinanceOrderType2) {
      BinanceOrderType2[BinanceOrderType2["OT_UNKNOWN"] = 0] = "OT_UNKNOWN";
      BinanceOrderType2[BinanceOrderType2["MARKET"] = 1] = "MARKET";
      BinanceOrderType2[BinanceOrderType2["LIMIT"] = 2] = "LIMIT";
      BinanceOrderType2[BinanceOrderType2["OT_RESERVED"] = 3] = "OT_RESERVED";
    })(BinanceOrderType || (exports2.BinanceOrderType = BinanceOrderType = {}));
    var BinanceOrderSide;
    (function(BinanceOrderSide2) {
      BinanceOrderSide2[BinanceOrderSide2["SIDE_UNKNOWN"] = 0] = "SIDE_UNKNOWN";
      BinanceOrderSide2[BinanceOrderSide2["BUY"] = 1] = "BUY";
      BinanceOrderSide2[BinanceOrderSide2["SELL"] = 2] = "SELL";
    })(BinanceOrderSide || (exports2.BinanceOrderSide = BinanceOrderSide = {}));
    var BinanceTimeInForce;
    (function(BinanceTimeInForce2) {
      BinanceTimeInForce2[BinanceTimeInForce2["TIF_UNKNOWN"] = 0] = "TIF_UNKNOWN";
      BinanceTimeInForce2[BinanceTimeInForce2["GTE"] = 1] = "GTE";
      BinanceTimeInForce2[BinanceTimeInForce2["TIF_RESERVED"] = 2] = "TIF_RESERVED";
      BinanceTimeInForce2[BinanceTimeInForce2["IOC"] = 3] = "IOC";
    })(BinanceTimeInForce || (exports2.BinanceTimeInForce = BinanceTimeInForce = {}));
    var Enum_InputScriptType;
    (function(Enum_InputScriptType2) {
      Enum_InputScriptType2[Enum_InputScriptType2["SPENDADDRESS"] = 0] = "SPENDADDRESS";
      Enum_InputScriptType2[Enum_InputScriptType2["SPENDMULTISIG"] = 1] = "SPENDMULTISIG";
      Enum_InputScriptType2[Enum_InputScriptType2["EXTERNAL"] = 2] = "EXTERNAL";
      Enum_InputScriptType2[Enum_InputScriptType2["SPENDWITNESS"] = 3] = "SPENDWITNESS";
      Enum_InputScriptType2[Enum_InputScriptType2["SPENDP2SHWITNESS"] = 4] = "SPENDP2SHWITNESS";
      Enum_InputScriptType2[Enum_InputScriptType2["SPENDTAPROOT"] = 5] = "SPENDTAPROOT";
    })(Enum_InputScriptType || (exports2.Enum_InputScriptType = Enum_InputScriptType = {}));
    var Enum_OutputScriptType;
    (function(Enum_OutputScriptType2) {
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOADDRESS"] = 0] = "PAYTOADDRESS";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOSCRIPTHASH"] = 1] = "PAYTOSCRIPTHASH";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOMULTISIG"] = 2] = "PAYTOMULTISIG";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOOPRETURN"] = 3] = "PAYTOOPRETURN";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOWITNESS"] = 4] = "PAYTOWITNESS";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOP2SHWITNESS"] = 5] = "PAYTOP2SHWITNESS";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOTAPROOT"] = 6] = "PAYTOTAPROOT";
    })(Enum_OutputScriptType || (exports2.Enum_OutputScriptType = Enum_OutputScriptType = {}));
    var DecredStakingSpendType;
    (function(DecredStakingSpendType2) {
      DecredStakingSpendType2[DecredStakingSpendType2["SSGen"] = 0] = "SSGen";
      DecredStakingSpendType2[DecredStakingSpendType2["SSRTX"] = 1] = "SSRTX";
    })(DecredStakingSpendType || (exports2.DecredStakingSpendType = DecredStakingSpendType = {}));
    var AmountUnit;
    (function(AmountUnit2) {
      AmountUnit2[AmountUnit2["BITCOIN"] = 0] = "BITCOIN";
      AmountUnit2[AmountUnit2["MILLIBITCOIN"] = 1] = "MILLIBITCOIN";
      AmountUnit2[AmountUnit2["MICROBITCOIN"] = 2] = "MICROBITCOIN";
      AmountUnit2[AmountUnit2["SATOSHI"] = 3] = "SATOSHI";
    })(AmountUnit || (exports2.AmountUnit = AmountUnit = {}));
    var Enum_RequestType;
    (function(Enum_RequestType2) {
      Enum_RequestType2[Enum_RequestType2["TXINPUT"] = 0] = "TXINPUT";
      Enum_RequestType2[Enum_RequestType2["TXOUTPUT"] = 1] = "TXOUTPUT";
      Enum_RequestType2[Enum_RequestType2["TXMETA"] = 2] = "TXMETA";
      Enum_RequestType2[Enum_RequestType2["TXFINISHED"] = 3] = "TXFINISHED";
      Enum_RequestType2[Enum_RequestType2["TXEXTRADATA"] = 4] = "TXEXTRADATA";
      Enum_RequestType2[Enum_RequestType2["TXORIGINPUT"] = 5] = "TXORIGINPUT";
      Enum_RequestType2[Enum_RequestType2["TXORIGOUTPUT"] = 6] = "TXORIGOUTPUT";
      Enum_RequestType2[Enum_RequestType2["TXPAYMENTREQ"] = 7] = "TXPAYMENTREQ";
    })(Enum_RequestType || (exports2.Enum_RequestType = Enum_RequestType = {}));
    var CardanoDerivationType;
    (function(CardanoDerivationType2) {
      CardanoDerivationType2[CardanoDerivationType2["LEDGER"] = 0] = "LEDGER";
      CardanoDerivationType2[CardanoDerivationType2["ICARUS"] = 1] = "ICARUS";
      CardanoDerivationType2[CardanoDerivationType2["ICARUS_TREZOR"] = 2] = "ICARUS_TREZOR";
    })(CardanoDerivationType || (exports2.CardanoDerivationType = CardanoDerivationType = {}));
    var CardanoAddressType;
    (function(CardanoAddressType2) {
      CardanoAddressType2[CardanoAddressType2["BASE"] = 0] = "BASE";
      CardanoAddressType2[CardanoAddressType2["BASE_SCRIPT_KEY"] = 1] = "BASE_SCRIPT_KEY";
      CardanoAddressType2[CardanoAddressType2["BASE_KEY_SCRIPT"] = 2] = "BASE_KEY_SCRIPT";
      CardanoAddressType2[CardanoAddressType2["BASE_SCRIPT_SCRIPT"] = 3] = "BASE_SCRIPT_SCRIPT";
      CardanoAddressType2[CardanoAddressType2["POINTER"] = 4] = "POINTER";
      CardanoAddressType2[CardanoAddressType2["POINTER_SCRIPT"] = 5] = "POINTER_SCRIPT";
      CardanoAddressType2[CardanoAddressType2["ENTERPRISE"] = 6] = "ENTERPRISE";
      CardanoAddressType2[CardanoAddressType2["ENTERPRISE_SCRIPT"] = 7] = "ENTERPRISE_SCRIPT";
      CardanoAddressType2[CardanoAddressType2["BYRON"] = 8] = "BYRON";
      CardanoAddressType2[CardanoAddressType2["REWARD"] = 14] = "REWARD";
      CardanoAddressType2[CardanoAddressType2["REWARD_SCRIPT"] = 15] = "REWARD_SCRIPT";
    })(CardanoAddressType || (exports2.CardanoAddressType = CardanoAddressType = {}));
    var CardanoNativeScriptType;
    (function(CardanoNativeScriptType2) {
      CardanoNativeScriptType2[CardanoNativeScriptType2["PUB_KEY"] = 0] = "PUB_KEY";
      CardanoNativeScriptType2[CardanoNativeScriptType2["ALL"] = 1] = "ALL";
      CardanoNativeScriptType2[CardanoNativeScriptType2["ANY"] = 2] = "ANY";
      CardanoNativeScriptType2[CardanoNativeScriptType2["N_OF_K"] = 3] = "N_OF_K";
      CardanoNativeScriptType2[CardanoNativeScriptType2["INVALID_BEFORE"] = 4] = "INVALID_BEFORE";
      CardanoNativeScriptType2[CardanoNativeScriptType2["INVALID_HEREAFTER"] = 5] = "INVALID_HEREAFTER";
    })(CardanoNativeScriptType || (exports2.CardanoNativeScriptType = CardanoNativeScriptType = {}));
    var CardanoNativeScriptHashDisplayFormat;
    (function(CardanoNativeScriptHashDisplayFormat2) {
      CardanoNativeScriptHashDisplayFormat2[CardanoNativeScriptHashDisplayFormat2["HIDE"] = 0] = "HIDE";
      CardanoNativeScriptHashDisplayFormat2[CardanoNativeScriptHashDisplayFormat2["BECH32"] = 1] = "BECH32";
      CardanoNativeScriptHashDisplayFormat2[CardanoNativeScriptHashDisplayFormat2["POLICY_ID"] = 2] = "POLICY_ID";
    })(CardanoNativeScriptHashDisplayFormat || (exports2.CardanoNativeScriptHashDisplayFormat = CardanoNativeScriptHashDisplayFormat = {}));
    var CardanoTxOutputSerializationFormat;
    (function(CardanoTxOutputSerializationFormat2) {
      CardanoTxOutputSerializationFormat2[CardanoTxOutputSerializationFormat2["ARRAY_LEGACY"] = 0] = "ARRAY_LEGACY";
      CardanoTxOutputSerializationFormat2[CardanoTxOutputSerializationFormat2["MAP_BABBAGE"] = 1] = "MAP_BABBAGE";
    })(CardanoTxOutputSerializationFormat || (exports2.CardanoTxOutputSerializationFormat = CardanoTxOutputSerializationFormat = {}));
    var CardanoCertificateType;
    (function(CardanoCertificateType2) {
      CardanoCertificateType2[CardanoCertificateType2["STAKE_REGISTRATION"] = 0] = "STAKE_REGISTRATION";
      CardanoCertificateType2[CardanoCertificateType2["STAKE_DEREGISTRATION"] = 1] = "STAKE_DEREGISTRATION";
      CardanoCertificateType2[CardanoCertificateType2["STAKE_DELEGATION"] = 2] = "STAKE_DELEGATION";
      CardanoCertificateType2[CardanoCertificateType2["STAKE_POOL_REGISTRATION"] = 3] = "STAKE_POOL_REGISTRATION";
      CardanoCertificateType2[CardanoCertificateType2["STAKE_REGISTRATION_CONWAY"] = 7] = "STAKE_REGISTRATION_CONWAY";
      CardanoCertificateType2[CardanoCertificateType2["STAKE_DEREGISTRATION_CONWAY"] = 8] = "STAKE_DEREGISTRATION_CONWAY";
      CardanoCertificateType2[CardanoCertificateType2["VOTE_DELEGATION"] = 9] = "VOTE_DELEGATION";
    })(CardanoCertificateType || (exports2.CardanoCertificateType = CardanoCertificateType = {}));
    var CardanoDRepType;
    (function(CardanoDRepType2) {
      CardanoDRepType2[CardanoDRepType2["KEY_HASH"] = 0] = "KEY_HASH";
      CardanoDRepType2[CardanoDRepType2["SCRIPT_HASH"] = 1] = "SCRIPT_HASH";
      CardanoDRepType2[CardanoDRepType2["ABSTAIN"] = 2] = "ABSTAIN";
      CardanoDRepType2[CardanoDRepType2["NO_CONFIDENCE"] = 3] = "NO_CONFIDENCE";
    })(CardanoDRepType || (exports2.CardanoDRepType = CardanoDRepType = {}));
    var CardanoPoolRelayType;
    (function(CardanoPoolRelayType2) {
      CardanoPoolRelayType2[CardanoPoolRelayType2["SINGLE_HOST_IP"] = 0] = "SINGLE_HOST_IP";
      CardanoPoolRelayType2[CardanoPoolRelayType2["SINGLE_HOST_NAME"] = 1] = "SINGLE_HOST_NAME";
      CardanoPoolRelayType2[CardanoPoolRelayType2["MULTIPLE_HOST_NAME"] = 2] = "MULTIPLE_HOST_NAME";
    })(CardanoPoolRelayType || (exports2.CardanoPoolRelayType = CardanoPoolRelayType = {}));
    var CardanoTxAuxiliaryDataSupplementType;
    (function(CardanoTxAuxiliaryDataSupplementType2) {
      CardanoTxAuxiliaryDataSupplementType2[CardanoTxAuxiliaryDataSupplementType2["NONE"] = 0] = "NONE";
      CardanoTxAuxiliaryDataSupplementType2[CardanoTxAuxiliaryDataSupplementType2["CVOTE_REGISTRATION_SIGNATURE"] = 1] = "CVOTE_REGISTRATION_SIGNATURE";
    })(CardanoTxAuxiliaryDataSupplementType || (exports2.CardanoTxAuxiliaryDataSupplementType = CardanoTxAuxiliaryDataSupplementType = {}));
    var CardanoCVoteRegistrationFormat;
    (function(CardanoCVoteRegistrationFormat2) {
      CardanoCVoteRegistrationFormat2[CardanoCVoteRegistrationFormat2["CIP15"] = 0] = "CIP15";
      CardanoCVoteRegistrationFormat2[CardanoCVoteRegistrationFormat2["CIP36"] = 1] = "CIP36";
    })(CardanoCVoteRegistrationFormat || (exports2.CardanoCVoteRegistrationFormat = CardanoCVoteRegistrationFormat = {}));
    var CardanoTxSigningMode;
    (function(CardanoTxSigningMode2) {
      CardanoTxSigningMode2[CardanoTxSigningMode2["ORDINARY_TRANSACTION"] = 0] = "ORDINARY_TRANSACTION";
      CardanoTxSigningMode2[CardanoTxSigningMode2["POOL_REGISTRATION_AS_OWNER"] = 1] = "POOL_REGISTRATION_AS_OWNER";
      CardanoTxSigningMode2[CardanoTxSigningMode2["MULTISIG_TRANSACTION"] = 2] = "MULTISIG_TRANSACTION";
      CardanoTxSigningMode2[CardanoTxSigningMode2["PLUTUS_TRANSACTION"] = 3] = "PLUTUS_TRANSACTION";
    })(CardanoTxSigningMode || (exports2.CardanoTxSigningMode = CardanoTxSigningMode = {}));
    var CardanoTxWitnessType;
    (function(CardanoTxWitnessType2) {
      CardanoTxWitnessType2[CardanoTxWitnessType2["BYRON_WITNESS"] = 0] = "BYRON_WITNESS";
      CardanoTxWitnessType2[CardanoTxWitnessType2["SHELLEY_WITNESS"] = 1] = "SHELLEY_WITNESS";
    })(CardanoTxWitnessType || (exports2.CardanoTxWitnessType = CardanoTxWitnessType = {}));
    var FailureType;
    (function(FailureType2) {
      FailureType2[FailureType2["Failure_UnexpectedMessage"] = 1] = "Failure_UnexpectedMessage";
      FailureType2[FailureType2["Failure_ButtonExpected"] = 2] = "Failure_ButtonExpected";
      FailureType2[FailureType2["Failure_DataError"] = 3] = "Failure_DataError";
      FailureType2[FailureType2["Failure_ActionCancelled"] = 4] = "Failure_ActionCancelled";
      FailureType2[FailureType2["Failure_PinExpected"] = 5] = "Failure_PinExpected";
      FailureType2[FailureType2["Failure_PinCancelled"] = 6] = "Failure_PinCancelled";
      FailureType2[FailureType2["Failure_PinInvalid"] = 7] = "Failure_PinInvalid";
      FailureType2[FailureType2["Failure_InvalidSignature"] = 8] = "Failure_InvalidSignature";
      FailureType2[FailureType2["Failure_ProcessError"] = 9] = "Failure_ProcessError";
      FailureType2[FailureType2["Failure_NotEnoughFunds"] = 10] = "Failure_NotEnoughFunds";
      FailureType2[FailureType2["Failure_NotInitialized"] = 11] = "Failure_NotInitialized";
      FailureType2[FailureType2["Failure_PinMismatch"] = 12] = "Failure_PinMismatch";
      FailureType2[FailureType2["Failure_WipeCodeMismatch"] = 13] = "Failure_WipeCodeMismatch";
      FailureType2[FailureType2["Failure_InvalidSession"] = 14] = "Failure_InvalidSession";
      FailureType2[FailureType2["Failure_FirmwareError"] = 99] = "Failure_FirmwareError";
    })(FailureType || (exports2.FailureType = FailureType = {}));
    var Enum_ButtonRequestType;
    (function(Enum_ButtonRequestType2) {
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_Other"] = 1] = "ButtonRequest_Other";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_FeeOverThreshold"] = 2] = "ButtonRequest_FeeOverThreshold";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_ConfirmOutput"] = 3] = "ButtonRequest_ConfirmOutput";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_ResetDevice"] = 4] = "ButtonRequest_ResetDevice";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_ConfirmWord"] = 5] = "ButtonRequest_ConfirmWord";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_WipeDevice"] = 6] = "ButtonRequest_WipeDevice";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_ProtectCall"] = 7] = "ButtonRequest_ProtectCall";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_SignTx"] = 8] = "ButtonRequest_SignTx";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_FirmwareCheck"] = 9] = "ButtonRequest_FirmwareCheck";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_Address"] = 10] = "ButtonRequest_Address";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_PublicKey"] = 11] = "ButtonRequest_PublicKey";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_MnemonicWordCount"] = 12] = "ButtonRequest_MnemonicWordCount";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_MnemonicInput"] = 13] = "ButtonRequest_MnemonicInput";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["_Deprecated_ButtonRequest_PassphraseType"] = 14] = "_Deprecated_ButtonRequest_PassphraseType";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_UnknownDerivationPath"] = 15] = "ButtonRequest_UnknownDerivationPath";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_RecoveryHomepage"] = 16] = "ButtonRequest_RecoveryHomepage";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_Success"] = 17] = "ButtonRequest_Success";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_Warning"] = 18] = "ButtonRequest_Warning";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_PassphraseEntry"] = 19] = "ButtonRequest_PassphraseEntry";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_PinEntry"] = 20] = "ButtonRequest_PinEntry";
    })(Enum_ButtonRequestType || (exports2.Enum_ButtonRequestType = Enum_ButtonRequestType = {}));
    var Enum_PinMatrixRequestType;
    (function(Enum_PinMatrixRequestType2) {
      Enum_PinMatrixRequestType2[Enum_PinMatrixRequestType2["PinMatrixRequestType_Current"] = 1] = "PinMatrixRequestType_Current";
      Enum_PinMatrixRequestType2[Enum_PinMatrixRequestType2["PinMatrixRequestType_NewFirst"] = 2] = "PinMatrixRequestType_NewFirst";
      Enum_PinMatrixRequestType2[Enum_PinMatrixRequestType2["PinMatrixRequestType_NewSecond"] = 3] = "PinMatrixRequestType_NewSecond";
      Enum_PinMatrixRequestType2[Enum_PinMatrixRequestType2["PinMatrixRequestType_WipeCodeFirst"] = 4] = "PinMatrixRequestType_WipeCodeFirst";
      Enum_PinMatrixRequestType2[Enum_PinMatrixRequestType2["PinMatrixRequestType_WipeCodeSecond"] = 5] = "PinMatrixRequestType_WipeCodeSecond";
    })(Enum_PinMatrixRequestType || (exports2.Enum_PinMatrixRequestType = Enum_PinMatrixRequestType = {}));
    var DebugButton;
    (function(DebugButton2) {
      DebugButton2[DebugButton2["NO"] = 0] = "NO";
      DebugButton2[DebugButton2["YES"] = 1] = "YES";
      DebugButton2[DebugButton2["INFO"] = 2] = "INFO";
    })(DebugButton || (exports2.DebugButton = DebugButton = {}));
    var DebugPhysicalButton;
    (function(DebugPhysicalButton2) {
      DebugPhysicalButton2[DebugPhysicalButton2["LEFT_BTN"] = 0] = "LEFT_BTN";
      DebugPhysicalButton2[DebugPhysicalButton2["MIDDLE_BTN"] = 1] = "MIDDLE_BTN";
      DebugPhysicalButton2[DebugPhysicalButton2["RIGHT_BTN"] = 2] = "RIGHT_BTN";
    })(DebugPhysicalButton || (exports2.DebugPhysicalButton = DebugPhysicalButton = {}));
    var EthereumDefinitionType;
    (function(EthereumDefinitionType2) {
      EthereumDefinitionType2[EthereumDefinitionType2["NETWORK"] = 0] = "NETWORK";
      EthereumDefinitionType2[EthereumDefinitionType2["TOKEN"] = 1] = "TOKEN";
    })(EthereumDefinitionType || (exports2.EthereumDefinitionType = EthereumDefinitionType = {}));
    var EthereumDataType;
    (function(EthereumDataType2) {
      EthereumDataType2[EthereumDataType2["UINT"] = 1] = "UINT";
      EthereumDataType2[EthereumDataType2["INT"] = 2] = "INT";
      EthereumDataType2[EthereumDataType2["BYTES"] = 3] = "BYTES";
      EthereumDataType2[EthereumDataType2["STRING"] = 4] = "STRING";
      EthereumDataType2[EthereumDataType2["BOOL"] = 5] = "BOOL";
      EthereumDataType2[EthereumDataType2["ADDRESS"] = 6] = "ADDRESS";
      EthereumDataType2[EthereumDataType2["ARRAY"] = 7] = "ARRAY";
      EthereumDataType2[EthereumDataType2["STRUCT"] = 8] = "STRUCT";
    })(EthereumDataType || (exports2.EthereumDataType = EthereumDataType = {}));
    var Enum_BackupType;
    (function(Enum_BackupType2) {
      Enum_BackupType2[Enum_BackupType2["Bip39"] = 0] = "Bip39";
      Enum_BackupType2[Enum_BackupType2["Slip39_Basic"] = 1] = "Slip39_Basic";
      Enum_BackupType2[Enum_BackupType2["Slip39_Advanced"] = 2] = "Slip39_Advanced";
      Enum_BackupType2[Enum_BackupType2["Slip39_Single_Extendable"] = 3] = "Slip39_Single_Extendable";
      Enum_BackupType2[Enum_BackupType2["Slip39_Basic_Extendable"] = 4] = "Slip39_Basic_Extendable";
      Enum_BackupType2[Enum_BackupType2["Slip39_Advanced_Extendable"] = 5] = "Slip39_Advanced_Extendable";
    })(Enum_BackupType || (exports2.Enum_BackupType = Enum_BackupType = {}));
    var Enum_SafetyCheckLevel;
    (function(Enum_SafetyCheckLevel2) {
      Enum_SafetyCheckLevel2[Enum_SafetyCheckLevel2["Strict"] = 0] = "Strict";
      Enum_SafetyCheckLevel2[Enum_SafetyCheckLevel2["PromptAlways"] = 1] = "PromptAlways";
      Enum_SafetyCheckLevel2[Enum_SafetyCheckLevel2["PromptTemporarily"] = 2] = "PromptTemporarily";
    })(Enum_SafetyCheckLevel || (exports2.Enum_SafetyCheckLevel = Enum_SafetyCheckLevel = {}));
    var Enum_HomescreenFormat;
    (function(Enum_HomescreenFormat2) {
      Enum_HomescreenFormat2[Enum_HomescreenFormat2["Toif"] = 1] = "Toif";
      Enum_HomescreenFormat2[Enum_HomescreenFormat2["Jpeg"] = 2] = "Jpeg";
      Enum_HomescreenFormat2[Enum_HomescreenFormat2["ToiG"] = 3] = "ToiG";
    })(Enum_HomescreenFormat || (exports2.Enum_HomescreenFormat = Enum_HomescreenFormat = {}));
    var Enum_BackupAvailability;
    (function(Enum_BackupAvailability2) {
      Enum_BackupAvailability2[Enum_BackupAvailability2["NotAvailable"] = 0] = "NotAvailable";
      Enum_BackupAvailability2[Enum_BackupAvailability2["Required"] = 1] = "Required";
      Enum_BackupAvailability2[Enum_BackupAvailability2["Available"] = 2] = "Available";
    })(Enum_BackupAvailability || (exports2.Enum_BackupAvailability = Enum_BackupAvailability = {}));
    var Enum_RecoveryStatus;
    (function(Enum_RecoveryStatus2) {
      Enum_RecoveryStatus2[Enum_RecoveryStatus2["Nothing"] = 0] = "Nothing";
      Enum_RecoveryStatus2[Enum_RecoveryStatus2["Recovery"] = 1] = "Recovery";
      Enum_RecoveryStatus2[Enum_RecoveryStatus2["Backup"] = 2] = "Backup";
    })(Enum_RecoveryStatus || (exports2.Enum_RecoveryStatus = Enum_RecoveryStatus = {}));
    var Enum_Capability;
    (function(Enum_Capability2) {
      Enum_Capability2[Enum_Capability2["Capability_Bitcoin"] = 1] = "Capability_Bitcoin";
      Enum_Capability2[Enum_Capability2["Capability_Bitcoin_like"] = 2] = "Capability_Bitcoin_like";
      Enum_Capability2[Enum_Capability2["Capability_Binance"] = 3] = "Capability_Binance";
      Enum_Capability2[Enum_Capability2["Capability_Cardano"] = 4] = "Capability_Cardano";
      Enum_Capability2[Enum_Capability2["Capability_Crypto"] = 5] = "Capability_Crypto";
      Enum_Capability2[Enum_Capability2["Capability_EOS"] = 6] = "Capability_EOS";
      Enum_Capability2[Enum_Capability2["Capability_Ethereum"] = 7] = "Capability_Ethereum";
      Enum_Capability2[Enum_Capability2["Capability_Lisk"] = 8] = "Capability_Lisk";
      Enum_Capability2[Enum_Capability2["Capability_Monero"] = 9] = "Capability_Monero";
      Enum_Capability2[Enum_Capability2["Capability_NEM"] = 10] = "Capability_NEM";
      Enum_Capability2[Enum_Capability2["Capability_Ripple"] = 11] = "Capability_Ripple";
      Enum_Capability2[Enum_Capability2["Capability_Stellar"] = 12] = "Capability_Stellar";
      Enum_Capability2[Enum_Capability2["Capability_Tezos"] = 13] = "Capability_Tezos";
      Enum_Capability2[Enum_Capability2["Capability_U2F"] = 14] = "Capability_U2F";
      Enum_Capability2[Enum_Capability2["Capability_Shamir"] = 15] = "Capability_Shamir";
      Enum_Capability2[Enum_Capability2["Capability_ShamirGroups"] = 16] = "Capability_ShamirGroups";
      Enum_Capability2[Enum_Capability2["Capability_PassphraseEntry"] = 17] = "Capability_PassphraseEntry";
      Enum_Capability2[Enum_Capability2["Capability_Solana"] = 18] = "Capability_Solana";
      Enum_Capability2[Enum_Capability2["Capability_Translations"] = 19] = "Capability_Translations";
      Enum_Capability2[Enum_Capability2["Capability_Brightness"] = 20] = "Capability_Brightness";
      Enum_Capability2[Enum_Capability2["Capability_Haptic"] = 21] = "Capability_Haptic";
    })(Enum_Capability || (exports2.Enum_Capability = Enum_Capability = {}));
    var RecoveryDeviceInputMethod;
    (function(RecoveryDeviceInputMethod2) {
      RecoveryDeviceInputMethod2[RecoveryDeviceInputMethod2["ScrambledWords"] = 0] = "ScrambledWords";
      RecoveryDeviceInputMethod2[RecoveryDeviceInputMethod2["Matrix"] = 1] = "Matrix";
    })(RecoveryDeviceInputMethod || (exports2.RecoveryDeviceInputMethod = RecoveryDeviceInputMethod = {}));
    var Enum_RecoveryType;
    (function(Enum_RecoveryType2) {
      Enum_RecoveryType2[Enum_RecoveryType2["NormalRecovery"] = 0] = "NormalRecovery";
      Enum_RecoveryType2[Enum_RecoveryType2["DryRun"] = 1] = "DryRun";
      Enum_RecoveryType2[Enum_RecoveryType2["UnlockRepeatedBackup"] = 2] = "UnlockRepeatedBackup";
    })(Enum_RecoveryType || (exports2.Enum_RecoveryType = Enum_RecoveryType = {}));
    var SdProtectOperationType;
    (function(SdProtectOperationType2) {
      SdProtectOperationType2[SdProtectOperationType2["DISABLE"] = 0] = "DISABLE";
      SdProtectOperationType2[SdProtectOperationType2["ENABLE"] = 1] = "ENABLE";
      SdProtectOperationType2[SdProtectOperationType2["REFRESH"] = 2] = "REFRESH";
    })(SdProtectOperationType || (exports2.SdProtectOperationType = SdProtectOperationType = {}));
    var Enum_WordRequestType;
    (function(Enum_WordRequestType2) {
      Enum_WordRequestType2[Enum_WordRequestType2["WordRequestType_Plain"] = 0] = "WordRequestType_Plain";
      Enum_WordRequestType2[Enum_WordRequestType2["WordRequestType_Matrix9"] = 1] = "WordRequestType_Matrix9";
      Enum_WordRequestType2[Enum_WordRequestType2["WordRequestType_Matrix6"] = 2] = "WordRequestType_Matrix6";
    })(Enum_WordRequestType || (exports2.Enum_WordRequestType = Enum_WordRequestType = {}));
    var BootCommand;
    (function(BootCommand2) {
      BootCommand2[BootCommand2["STOP_AND_WAIT"] = 0] = "STOP_AND_WAIT";
      BootCommand2[BootCommand2["INSTALL_UPGRADE"] = 1] = "INSTALL_UPGRADE";
    })(BootCommand || (exports2.BootCommand = BootCommand = {}));
    var MoneroNetworkType;
    (function(MoneroNetworkType2) {
      MoneroNetworkType2[MoneroNetworkType2["MAINNET"] = 0] = "MAINNET";
      MoneroNetworkType2[MoneroNetworkType2["TESTNET"] = 1] = "TESTNET";
      MoneroNetworkType2[MoneroNetworkType2["STAGENET"] = 2] = "STAGENET";
      MoneroNetworkType2[MoneroNetworkType2["FAKECHAIN"] = 3] = "FAKECHAIN";
    })(MoneroNetworkType || (exports2.MoneroNetworkType = MoneroNetworkType = {}));
    var NEMMosaicLevy;
    (function(NEMMosaicLevy2) {
      NEMMosaicLevy2[NEMMosaicLevy2["MosaicLevy_Absolute"] = 1] = "MosaicLevy_Absolute";
      NEMMosaicLevy2[NEMMosaicLevy2["MosaicLevy_Percentile"] = 2] = "MosaicLevy_Percentile";
    })(NEMMosaicLevy || (exports2.NEMMosaicLevy = NEMMosaicLevy = {}));
    var NEMSupplyChangeType;
    (function(NEMSupplyChangeType2) {
      NEMSupplyChangeType2[NEMSupplyChangeType2["SupplyChange_Increase"] = 1] = "SupplyChange_Increase";
      NEMSupplyChangeType2[NEMSupplyChangeType2["SupplyChange_Decrease"] = 2] = "SupplyChange_Decrease";
    })(NEMSupplyChangeType || (exports2.NEMSupplyChangeType = NEMSupplyChangeType = {}));
    var NEMModificationType;
    (function(NEMModificationType2) {
      NEMModificationType2[NEMModificationType2["CosignatoryModification_Add"] = 1] = "CosignatoryModification_Add";
      NEMModificationType2[NEMModificationType2["CosignatoryModification_Delete"] = 2] = "CosignatoryModification_Delete";
    })(NEMModificationType || (exports2.NEMModificationType = NEMModificationType = {}));
    var NEMImportanceTransferMode;
    (function(NEMImportanceTransferMode2) {
      NEMImportanceTransferMode2[NEMImportanceTransferMode2["ImportanceTransfer_Activate"] = 1] = "ImportanceTransfer_Activate";
      NEMImportanceTransferMode2[NEMImportanceTransferMode2["ImportanceTransfer_Deactivate"] = 2] = "ImportanceTransfer_Deactivate";
    })(NEMImportanceTransferMode || (exports2.NEMImportanceTransferMode = NEMImportanceTransferMode = {}));
    var StellarAssetType;
    (function(StellarAssetType2) {
      StellarAssetType2[StellarAssetType2["NATIVE"] = 0] = "NATIVE";
      StellarAssetType2[StellarAssetType2["ALPHANUM4"] = 1] = "ALPHANUM4";
      StellarAssetType2[StellarAssetType2["ALPHANUM12"] = 2] = "ALPHANUM12";
    })(StellarAssetType || (exports2.StellarAssetType = StellarAssetType = {}));
    var StellarMemoType;
    (function(StellarMemoType2) {
      StellarMemoType2[StellarMemoType2["NONE"] = 0] = "NONE";
      StellarMemoType2[StellarMemoType2["TEXT"] = 1] = "TEXT";
      StellarMemoType2[StellarMemoType2["ID"] = 2] = "ID";
      StellarMemoType2[StellarMemoType2["HASH"] = 3] = "HASH";
      StellarMemoType2[StellarMemoType2["RETURN"] = 4] = "RETURN";
    })(StellarMemoType || (exports2.StellarMemoType = StellarMemoType = {}));
    var StellarSignerType;
    (function(StellarSignerType2) {
      StellarSignerType2[StellarSignerType2["ACCOUNT"] = 0] = "ACCOUNT";
      StellarSignerType2[StellarSignerType2["PRE_AUTH"] = 1] = "PRE_AUTH";
      StellarSignerType2[StellarSignerType2["HASH"] = 2] = "HASH";
    })(StellarSignerType || (exports2.StellarSignerType = StellarSignerType = {}));
    var TezosContractType;
    (function(TezosContractType2) {
      TezosContractType2[TezosContractType2["Implicit"] = 0] = "Implicit";
      TezosContractType2[TezosContractType2["Originated"] = 1] = "Originated";
    })(TezosContractType || (exports2.TezosContractType = TezosContractType = {}));
    var TezosBallotType;
    (function(TezosBallotType2) {
      TezosBallotType2[TezosBallotType2["Yay"] = 0] = "Yay";
      TezosBallotType2[TezosBallotType2["Nay"] = 1] = "Nay";
      TezosBallotType2[TezosBallotType2["Pass"] = 2] = "Pass";
    })(TezosBallotType || (exports2.TezosBallotType = TezosBallotType = {}));
  }
});

// node_modules/@trezor/protobuf/lib/types.js
var require_types2 = __commonJS({
  "node_modules/@trezor/protobuf/lib/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@trezor/protobuf/lib/messages-schema.js
var require_messages_schema = __commonJS({
  "node_modules/@trezor/protobuf/lib/messages-schema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TxRequest = exports2.TxRequestSerializedType = exports2.TxRequestDetailsType = exports2.RequestType = exports2.EnumEnum_RequestType = exports2.Enum_RequestType = exports2.SignTx = exports2.CoinJoinRequest = exports2.VerifyMessage = exports2.MessageSignature = exports2.SignMessage = exports2.OwnershipId = exports2.GetOwnershipId = exports2.Address = exports2.GetAddress = exports2.PublicKey = exports2.GetPublicKey = exports2.MultisigRedeemScriptType = exports2.HDNodePathType = exports2.HDNodeType = exports2.EnumAmountUnit = exports2.AmountUnit = exports2.EnumDecredStakingSpendType = exports2.DecredStakingSpendType = exports2.OutputScriptType = exports2.EnumEnum_OutputScriptType = exports2.Enum_OutputScriptType = exports2.InputScriptType = exports2.EnumEnum_InputScriptType = exports2.Enum_InputScriptType = exports2.BinanceSignedTx = exports2.BinanceCancelMsg = exports2.BinanceOrderMsg = exports2.EnumBinanceTimeInForce = exports2.BinanceTimeInForce = exports2.EnumBinanceOrderSide = exports2.BinanceOrderSide = exports2.EnumBinanceOrderType = exports2.BinanceOrderType = exports2.BinanceTransferMsg = exports2.BinanceInputOutput = exports2.BinanceCoin = exports2.BinanceTxRequest = exports2.BinanceSignTx = exports2.BinancePublicKey = exports2.BinanceGetPublicKey = exports2.BinanceAddress = exports2.BinanceGetAddress = exports2.EnumDeviceModelInternal = exports2.DeviceModelInternal = void 0;
    exports2.CardanoPoolRelayType = exports2.EnumCardanoDRepType = exports2.CardanoDRepType = exports2.EnumCardanoCertificateType = exports2.CardanoCertificateType = exports2.EnumCardanoTxOutputSerializationFormat = exports2.CardanoTxOutputSerializationFormat = exports2.EnumCardanoNativeScriptHashDisplayFormat = exports2.CardanoNativeScriptHashDisplayFormat = exports2.EnumCardanoNativeScriptType = exports2.CardanoNativeScriptType = exports2.EnumCardanoAddressType = exports2.CardanoAddressType = exports2.EnumCardanoDerivationType = exports2.CardanoDerivationType = exports2.ProdTestT1 = exports2.FirmwareUpload = exports2.FirmwareRequest = exports2.FirmwareErase = exports2.AuthorizeCoinJoin = exports2.OwnershipProof = exports2.GetOwnershipProof = exports2.TxAckPrevExtraData = exports2.TxAckPrevExtraDataWrapper = exports2.TxAckPrevOutput = exports2.TxAckPrevOutputWrapper = exports2.TxAckPrevInput = exports2.TxAckPrevInputWrapper = exports2.TxAckPrevMeta = exports2.TxAckOutput = exports2.TxAckOutputWrapper = exports2.TxAckInput = exports2.TxAckInputWrapper = exports2.TxAck = exports2.TxAckResponse = exports2.TxAckPaymentRequest = exports2.PaymentRequestMemo = exports2.CoinPurchaseMemo = exports2.RefundMemo = exports2.TextMemo = exports2.PrevOutput = exports2.PrevInput = exports2.PrevTx = exports2.TxOutput = exports2.TxOutputType = exports2.ChangeOutputScriptType = exports2.TxOutputBinType = exports2.TxInput = exports2.TxInputType = exports2.InternalInputScriptType = void 0;
    exports2.Failure = exports2.EnumFailureType = exports2.FailureType = exports2.Success = exports2.CardanoSignTxFinished = exports2.CardanoTxBodyHash = exports2.CardanoTxHostAck = exports2.CardanoTxWitnessResponse = exports2.CardanoTxWitnessRequest = exports2.CardanoTxAuxiliaryDataSupplement = exports2.CardanoTxItemAck = exports2.CardanoTxReferenceInput = exports2.CardanoTxRequiredSigner = exports2.CardanoTxCollateralInput = exports2.CardanoTxMint = exports2.CardanoTxAuxiliaryData = exports2.CardanoCVoteRegistrationParametersType = exports2.CardanoCVoteRegistrationDelegation = exports2.CardanoTxWithdrawal = exports2.CardanoTxCertificate = exports2.CardanoDRep = exports2.CardanoPoolParametersType = exports2.CardanoPoolMetadataType = exports2.CardanoPoolRelayParameters = exports2.CardanoPoolOwner = exports2.CardanoTxReferenceScriptChunk = exports2.CardanoTxInlineDatumChunk = exports2.CardanoToken = exports2.CardanoAssetGroup = exports2.CardanoTxOutput = exports2.CardanoTxInput = exports2.CardanoSignTxInit = exports2.CardanoPublicKey = exports2.CardanoGetPublicKey = exports2.CardanoAddress = exports2.CardanoGetAddress = exports2.CardanoAddressParametersType = exports2.CardanoNativeScriptHash = exports2.CardanoGetNativeScriptHash = exports2.CardanoNativeScript = exports2.CardanoBlockchainPointerType = exports2.EnumCardanoTxWitnessType = exports2.CardanoTxWitnessType = exports2.EnumCardanoTxSigningMode = exports2.CardanoTxSigningMode = exports2.EnumCardanoCVoteRegistrationFormat = exports2.CardanoCVoteRegistrationFormat = exports2.EnumCardanoTxAuxiliaryDataSupplementType = exports2.CardanoTxAuxiliaryDataSupplementType = exports2.EnumCardanoPoolRelayType = void 0;
    exports2.EosActionUnlinkAuth = exports2.EosActionLinkAuth = exports2.EosActionDeleteAuth = exports2.EosActionUpdateAuth = exports2.EosActionVoteProducer = exports2.EosActionSellRam = exports2.EosActionBuyRamBytes = exports2.EosActionBuyRam = exports2.EosActionRefund = exports2.EosActionUndelegate = exports2.EosActionDelegate = exports2.EosActionTransfer = exports2.EosActionCommon = exports2.EosAuthorization = exports2.EosAuthorizationWait = exports2.EosAuthorizationAccount = exports2.EosAuthorizationKey = exports2.EosPermissionLevel = exports2.EosAsset = exports2.EosTxActionRequest = exports2.EosSignTx = exports2.EosTxHeader = exports2.EosPublicKey = exports2.EosGetPublicKey = exports2.DebugLinkResetDebugEvents = exports2.EnumDebugPhysicalButton = exports2.DebugPhysicalButton = exports2.EnumDebugButton = exports2.DebugButton = exports2.ECDHSessionKey = exports2.GetECDHSessionKey = exports2.SignedIdentity = exports2.SignIdentity = exports2.IdentityType = exports2.CipheredKeyValue = exports2.CipherKeyValue = exports2.Deprecated_PassphraseStateAck = exports2.Deprecated_PassphraseStateRequest = exports2.PassphraseAck = exports2.PassphraseRequest = exports2.PinMatrixAck = exports2.PinMatrixRequest = exports2.PinMatrixRequestType = exports2.EnumEnum_PinMatrixRequestType = exports2.Enum_PinMatrixRequestType = exports2.ButtonAck = exports2.ButtonRequest = exports2.ButtonRequestType = exports2.EnumEnum_ButtonRequestType = exports2.Enum_ButtonRequestType = void 0;
    exports2.Enum_Capability = exports2.RecoveryStatus = exports2.EnumEnum_RecoveryStatus = exports2.Enum_RecoveryStatus = exports2.BackupAvailability = exports2.EnumEnum_BackupAvailability = exports2.Enum_BackupAvailability = exports2.GetFeatures = exports2.Initialize = exports2.HomescreenFormat = exports2.EnumEnum_HomescreenFormat = exports2.Enum_HomescreenFormat = exports2.SafetyCheckLevel = exports2.EnumEnum_SafetyCheckLevel = exports2.Enum_SafetyCheckLevel = exports2.BackupType = exports2.EnumEnum_BackupType = exports2.Enum_BackupType = exports2.EthereumTypedDataSignature = exports2.EthereumSignTypedHash = exports2.EthereumVerifyMessage = exports2.EthereumMessageSignature = exports2.EthereumSignMessage = exports2.EthereumTxAck = exports2.EthereumTxRequest = exports2.EthereumSignTxEIP1559 = exports2.EthereumAccessList = exports2.EthereumSignTx = exports2.EthereumAddress = exports2.EthereumGetAddress = exports2.EthereumPublicKey = exports2.EthereumGetPublicKey = exports2.EthereumTypedDataValueAck = exports2.EthereumTypedDataValueRequest = exports2.EthereumTypedDataStructAck = exports2.EthereumStructMember = exports2.EthereumFieldType = exports2.EnumEthereumDataType = exports2.EthereumDataType = exports2.EthereumTypedDataStructRequest = exports2.EthereumSignTypedData = exports2.EthereumDefinitions = exports2.EthereumTokenInfo = exports2.EthereumNetworkInfo = exports2.EnumEthereumDefinitionType = exports2.EthereumDefinitionType = exports2.EosSignedTx = exports2.EosTxActionAck = exports2.EosActionUnknown = exports2.EosActionNewAccount = void 0;
    exports2.RebootToBootloader = exports2.EnumBootCommand = exports2.BootCommand = exports2.CancelAuthorization = exports2.PreauthorizedRequest = exports2.DoPreauthorized = exports2.NextU2FCounter = exports2.GetNextU2FCounter = exports2.SetU2FCounter = exports2.WordAck = exports2.WordRequest = exports2.WordRequestType = exports2.EnumEnum_WordRequestType = exports2.Enum_WordRequestType = exports2.EntropyAck = exports2.EntropyRequest = exports2.BackupDevice = exports2.Slip39Group = exports2.ResetDevice = exports2.WipeDevice = exports2.AuthenticityProof = exports2.AuthenticateDevice = exports2.FirmwareHash = exports2.GetFirmwareHash = exports2.Entropy = exports2.GetEntropy = exports2.Cancel = exports2.Ping = exports2.SdProtect = exports2.EnumSdProtectOperationType = exports2.SdProtectOperationType = exports2.ChangeWipeCode = exports2.ChangePin = exports2.ApplyFlags = exports2.TranslationDataAck = exports2.TranslationDataRequest = exports2.ChangeLanguage = exports2.ApplySettings = exports2.EndSession = exports2.SetBusy = exports2.LockDevice = exports2.Features = exports2.RecoveryDevice = exports2.RecoveryType = exports2.EnumEnum_RecoveryType = exports2.Enum_RecoveryType = exports2.EnumRecoveryDeviceInputMethod = exports2.RecoveryDeviceInputMethod = exports2.Capability = exports2.EnumEnum_Capability = void 0;
    exports2.StellarGetAddress = exports2.StellarAsset = exports2.EnumStellarAssetType = exports2.StellarAssetType = exports2.SolanaTxSignature = exports2.SolanaSignTx = exports2.SolanaTxAdditionalInfo = exports2.SolanaTxTokenAccountInfo = exports2.SolanaAddress = exports2.SolanaGetAddress = exports2.SolanaPublicKey = exports2.SolanaGetPublicKey = exports2.RippleSignedTx = exports2.RippleSignTx = exports2.RipplePayment = exports2.RippleAddress = exports2.RippleGetAddress = exports2.NEMDecryptedMessage = exports2.NEMDecryptMessage = exports2.NEMSignedTx = exports2.NEMSignTx = exports2.NEMImportanceTransfer = exports2.EnumNEMImportanceTransferMode = exports2.NEMImportanceTransferMode = exports2.NEMAggregateModification = exports2.NEMCosignatoryModification = exports2.EnumNEMModificationType = exports2.NEMModificationType = exports2.NEMMosaicSupplyChange = exports2.EnumNEMSupplyChangeType = exports2.NEMSupplyChangeType = exports2.NEMMosaicCreation = exports2.NEMMosaicDefinition = exports2.EnumNEMMosaicLevy = exports2.NEMMosaicLevy = exports2.NEMProvisionNamespace = exports2.NEMTransfer = exports2.NEMMosaic = exports2.NEMTransactionCommon = exports2.NEMAddress = exports2.NEMGetAddress = exports2.EnumMoneroNetworkType = exports2.MoneroNetworkType = exports2.SetBrightness = exports2.UnlockBootloader = exports2.ShowDeviceTutorial = exports2.UnlockedPathRequest = exports2.UnlockPath = exports2.Nonce = exports2.GetNonce = void 0;
    exports2.MessageType = exports2.experimental_field = exports2.experimental_message = exports2.TezosSignedTx = exports2.TezosSignTx = exports2.TezosBallotOp = exports2.EnumTezosBallotType = exports2.TezosBallotType = exports2.TezosProposalOp = exports2.TezosDelegationOp = exports2.TezosOriginationOp = exports2.TezosTransactionOp = exports2.TezosParametersManager = exports2.TezosManagerTransfer = exports2.TezosRevealOp = exports2.TezosContractID = exports2.EnumTezosContractType = exports2.TezosContractType = exports2.TezosPublicKey = exports2.TezosGetPublicKey = exports2.TezosAddress = exports2.TezosGetAddress = exports2.StellarSignedTx = exports2.StellarClaimClaimableBalanceOp = exports2.StellarBumpSequenceOp = exports2.StellarManageDataOp = exports2.StellarAccountMergeOp = exports2.StellarAllowTrustOp = exports2.StellarChangeTrustOp = exports2.StellarSetOptionsOp = exports2.EnumStellarSignerType = exports2.StellarSignerType = exports2.StellarCreatePassiveSellOfferOp = exports2.StellarManageBuyOfferOp = exports2.StellarManageSellOfferOp = exports2.StellarPathPaymentStrictSendOp = exports2.StellarPathPaymentStrictReceiveOp = exports2.StellarCreateAccountOp = exports2.StellarPaymentOp = exports2.StellarTxOpRequest = exports2.StellarSignTx = exports2.EnumStellarMemoType = exports2.StellarMemoType = exports2.StellarAddress = void 0;
    var schema_utils_1 = require_lib4();
    var DeviceModelInternal;
    (function(DeviceModelInternal2) {
      DeviceModelInternal2["T1B1"] = "T1B1";
      DeviceModelInternal2["T2T1"] = "T2T1";
      DeviceModelInternal2["T2B1"] = "T2B1";
      DeviceModelInternal2["T3B1"] = "T3B1";
      DeviceModelInternal2["T3T1"] = "T3T1";
    })(DeviceModelInternal || (exports2.DeviceModelInternal = DeviceModelInternal = {}));
    exports2.EnumDeviceModelInternal = schema_utils_1.Type.Enum(DeviceModelInternal);
    exports2.BinanceGetAddress = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "BinanceGetAddress" });
    exports2.BinanceAddress = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String()
    }, { $id: "BinanceAddress" });
    exports2.BinanceGetPublicKey = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "BinanceGetPublicKey" });
    exports2.BinancePublicKey = schema_utils_1.Type.Object({
      public_key: schema_utils_1.Type.String()
    }, { $id: "BinancePublicKey" });
    exports2.BinanceSignTx = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      msg_count: schema_utils_1.Type.Number(),
      account_number: schema_utils_1.Type.Number(),
      chain_id: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      memo: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      sequence: schema_utils_1.Type.Number(),
      source: schema_utils_1.Type.Number(),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "BinanceSignTx" });
    exports2.BinanceTxRequest = schema_utils_1.Type.Object({}, { $id: "BinanceTxRequest" });
    exports2.BinanceCoin = schema_utils_1.Type.Object({
      amount: schema_utils_1.Type.Uint(),
      denom: schema_utils_1.Type.String()
    }, { $id: "BinanceCoin" });
    exports2.BinanceInputOutput = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      coins: schema_utils_1.Type.Array(exports2.BinanceCoin)
    }, { $id: "BinanceInputOutput" });
    exports2.BinanceTransferMsg = schema_utils_1.Type.Object({
      inputs: schema_utils_1.Type.Array(exports2.BinanceInputOutput),
      outputs: schema_utils_1.Type.Array(exports2.BinanceInputOutput),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "BinanceTransferMsg" });
    var BinanceOrderType;
    (function(BinanceOrderType2) {
      BinanceOrderType2[BinanceOrderType2["OT_UNKNOWN"] = 0] = "OT_UNKNOWN";
      BinanceOrderType2[BinanceOrderType2["MARKET"] = 1] = "MARKET";
      BinanceOrderType2[BinanceOrderType2["LIMIT"] = 2] = "LIMIT";
      BinanceOrderType2[BinanceOrderType2["OT_RESERVED"] = 3] = "OT_RESERVED";
    })(BinanceOrderType || (exports2.BinanceOrderType = BinanceOrderType = {}));
    exports2.EnumBinanceOrderType = schema_utils_1.Type.Enum(BinanceOrderType);
    var BinanceOrderSide;
    (function(BinanceOrderSide2) {
      BinanceOrderSide2[BinanceOrderSide2["SIDE_UNKNOWN"] = 0] = "SIDE_UNKNOWN";
      BinanceOrderSide2[BinanceOrderSide2["BUY"] = 1] = "BUY";
      BinanceOrderSide2[BinanceOrderSide2["SELL"] = 2] = "SELL";
    })(BinanceOrderSide || (exports2.BinanceOrderSide = BinanceOrderSide = {}));
    exports2.EnumBinanceOrderSide = schema_utils_1.Type.Enum(BinanceOrderSide);
    var BinanceTimeInForce;
    (function(BinanceTimeInForce2) {
      BinanceTimeInForce2[BinanceTimeInForce2["TIF_UNKNOWN"] = 0] = "TIF_UNKNOWN";
      BinanceTimeInForce2[BinanceTimeInForce2["GTE"] = 1] = "GTE";
      BinanceTimeInForce2[BinanceTimeInForce2["TIF_RESERVED"] = 2] = "TIF_RESERVED";
      BinanceTimeInForce2[BinanceTimeInForce2["IOC"] = 3] = "IOC";
    })(BinanceTimeInForce || (exports2.BinanceTimeInForce = BinanceTimeInForce = {}));
    exports2.EnumBinanceTimeInForce = schema_utils_1.Type.Enum(BinanceTimeInForce);
    exports2.BinanceOrderMsg = schema_utils_1.Type.Object({
      id: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      ordertype: exports2.EnumBinanceOrderType,
      price: schema_utils_1.Type.Number(),
      quantity: schema_utils_1.Type.Number(),
      sender: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      side: exports2.EnumBinanceOrderSide,
      symbol: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      timeinforce: exports2.EnumBinanceTimeInForce
    }, { $id: "BinanceOrderMsg" });
    exports2.BinanceCancelMsg = schema_utils_1.Type.Object({
      refid: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      sender: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      symbol: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "BinanceCancelMsg" });
    exports2.BinanceSignedTx = schema_utils_1.Type.Object({
      signature: schema_utils_1.Type.String(),
      public_key: schema_utils_1.Type.String()
    }, { $id: "BinanceSignedTx" });
    var Enum_InputScriptType;
    (function(Enum_InputScriptType2) {
      Enum_InputScriptType2[Enum_InputScriptType2["SPENDADDRESS"] = 0] = "SPENDADDRESS";
      Enum_InputScriptType2[Enum_InputScriptType2["SPENDMULTISIG"] = 1] = "SPENDMULTISIG";
      Enum_InputScriptType2[Enum_InputScriptType2["EXTERNAL"] = 2] = "EXTERNAL";
      Enum_InputScriptType2[Enum_InputScriptType2["SPENDWITNESS"] = 3] = "SPENDWITNESS";
      Enum_InputScriptType2[Enum_InputScriptType2["SPENDP2SHWITNESS"] = 4] = "SPENDP2SHWITNESS";
      Enum_InputScriptType2[Enum_InputScriptType2["SPENDTAPROOT"] = 5] = "SPENDTAPROOT";
    })(Enum_InputScriptType || (exports2.Enum_InputScriptType = Enum_InputScriptType = {}));
    exports2.EnumEnum_InputScriptType = schema_utils_1.Type.Enum(Enum_InputScriptType);
    exports2.InputScriptType = schema_utils_1.Type.KeyOfEnum(Enum_InputScriptType, { $id: "InputScriptType" });
    var Enum_OutputScriptType;
    (function(Enum_OutputScriptType2) {
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOADDRESS"] = 0] = "PAYTOADDRESS";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOSCRIPTHASH"] = 1] = "PAYTOSCRIPTHASH";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOMULTISIG"] = 2] = "PAYTOMULTISIG";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOOPRETURN"] = 3] = "PAYTOOPRETURN";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOWITNESS"] = 4] = "PAYTOWITNESS";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOP2SHWITNESS"] = 5] = "PAYTOP2SHWITNESS";
      Enum_OutputScriptType2[Enum_OutputScriptType2["PAYTOTAPROOT"] = 6] = "PAYTOTAPROOT";
    })(Enum_OutputScriptType || (exports2.Enum_OutputScriptType = Enum_OutputScriptType = {}));
    exports2.EnumEnum_OutputScriptType = schema_utils_1.Type.Enum(Enum_OutputScriptType);
    exports2.OutputScriptType = schema_utils_1.Type.KeyOfEnum(Enum_OutputScriptType, { $id: "OutputScriptType" });
    var DecredStakingSpendType;
    (function(DecredStakingSpendType2) {
      DecredStakingSpendType2[DecredStakingSpendType2["SSGen"] = 0] = "SSGen";
      DecredStakingSpendType2[DecredStakingSpendType2["SSRTX"] = 1] = "SSRTX";
    })(DecredStakingSpendType || (exports2.DecredStakingSpendType = DecredStakingSpendType = {}));
    exports2.EnumDecredStakingSpendType = schema_utils_1.Type.Enum(DecredStakingSpendType);
    var AmountUnit;
    (function(AmountUnit2) {
      AmountUnit2[AmountUnit2["BITCOIN"] = 0] = "BITCOIN";
      AmountUnit2[AmountUnit2["MILLIBITCOIN"] = 1] = "MILLIBITCOIN";
      AmountUnit2[AmountUnit2["MICROBITCOIN"] = 2] = "MICROBITCOIN";
      AmountUnit2[AmountUnit2["SATOSHI"] = 3] = "SATOSHI";
    })(AmountUnit || (exports2.AmountUnit = AmountUnit = {}));
    exports2.EnumAmountUnit = schema_utils_1.Type.Enum(AmountUnit);
    exports2.HDNodeType = schema_utils_1.Type.Object({
      depth: schema_utils_1.Type.Number(),
      fingerprint: schema_utils_1.Type.Number(),
      child_num: schema_utils_1.Type.Number(),
      chain_code: schema_utils_1.Type.String(),
      private_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      public_key: schema_utils_1.Type.String()
    }, { $id: "HDNodeType" });
    exports2.HDNodePathType = schema_utils_1.Type.Object({
      node: schema_utils_1.Type.Union([exports2.HDNodeType, schema_utils_1.Type.String()]),
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number())
    }, { $id: "HDNodePathType" });
    exports2.MultisigRedeemScriptType = schema_utils_1.Type.Object({
      pubkeys: schema_utils_1.Type.Array(exports2.HDNodePathType),
      signatures: schema_utils_1.Type.Array(schema_utils_1.Type.String()),
      m: schema_utils_1.Type.Number(),
      nodes: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.HDNodeType)),
      address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number()))
    }, { $id: "MultisigRedeemScriptType" });
    exports2.GetPublicKey = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      ecdsa_curve_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      script_type: schema_utils_1.Type.Optional(exports2.InputScriptType),
      ignore_xpub_magic: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "GetPublicKey" });
    exports2.PublicKey = schema_utils_1.Type.Object({
      node: exports2.HDNodeType,
      xpub: schema_utils_1.Type.String(),
      root_fingerprint: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      descriptor: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "PublicKey" });
    exports2.GetAddress = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      multisig: schema_utils_1.Type.Optional(exports2.MultisigRedeemScriptType),
      script_type: schema_utils_1.Type.Optional(exports2.InputScriptType),
      ignore_xpub_magic: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "GetAddress" });
    exports2.Address = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      mac: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "Address" });
    exports2.GetOwnershipId = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      multisig: schema_utils_1.Type.Optional(exports2.MultisigRedeemScriptType),
      script_type: schema_utils_1.Type.Optional(exports2.InputScriptType)
    }, { $id: "GetOwnershipId" });
    exports2.OwnershipId = schema_utils_1.Type.Object({
      ownership_id: schema_utils_1.Type.String()
    }, { $id: "OwnershipId" });
    exports2.SignMessage = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      message: schema_utils_1.Type.String(),
      coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      script_type: schema_utils_1.Type.Optional(exports2.InputScriptType),
      no_script_type: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "SignMessage" });
    exports2.MessageSignature = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String()
    }, { $id: "MessageSignature" });
    exports2.VerifyMessage = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String(),
      message: schema_utils_1.Type.String(),
      coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "VerifyMessage" });
    exports2.CoinJoinRequest = schema_utils_1.Type.Object({
      fee_rate: schema_utils_1.Type.Number(),
      no_fee_threshold: schema_utils_1.Type.Number(),
      min_registrable_amount: schema_utils_1.Type.Number(),
      mask_public_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      signature: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CoinJoinRequest" });
    exports2.SignTx = schema_utils_1.Type.Object({
      outputs_count: schema_utils_1.Type.Number(),
      inputs_count: schema_utils_1.Type.Number(),
      coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      version: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      lock_time: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      expiry: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      overwintered: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      version_group_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      timestamp: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      branch_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      amount_unit: schema_utils_1.Type.Optional(exports2.EnumAmountUnit),
      decred_staking_ticket: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      serialize: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      coinjoin_request: schema_utils_1.Type.Optional(exports2.CoinJoinRequest),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "SignTx" });
    var Enum_RequestType;
    (function(Enum_RequestType2) {
      Enum_RequestType2[Enum_RequestType2["TXINPUT"] = 0] = "TXINPUT";
      Enum_RequestType2[Enum_RequestType2["TXOUTPUT"] = 1] = "TXOUTPUT";
      Enum_RequestType2[Enum_RequestType2["TXMETA"] = 2] = "TXMETA";
      Enum_RequestType2[Enum_RequestType2["TXFINISHED"] = 3] = "TXFINISHED";
      Enum_RequestType2[Enum_RequestType2["TXEXTRADATA"] = 4] = "TXEXTRADATA";
      Enum_RequestType2[Enum_RequestType2["TXORIGINPUT"] = 5] = "TXORIGINPUT";
      Enum_RequestType2[Enum_RequestType2["TXORIGOUTPUT"] = 6] = "TXORIGOUTPUT";
      Enum_RequestType2[Enum_RequestType2["TXPAYMENTREQ"] = 7] = "TXPAYMENTREQ";
    })(Enum_RequestType || (exports2.Enum_RequestType = Enum_RequestType = {}));
    exports2.EnumEnum_RequestType = schema_utils_1.Type.Enum(Enum_RequestType);
    exports2.RequestType = schema_utils_1.Type.KeyOfEnum(Enum_RequestType, { $id: "RequestType" });
    exports2.TxRequestDetailsType = schema_utils_1.Type.Object({
      request_index: schema_utils_1.Type.Number(),
      tx_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      extra_data_len: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      extra_data_offset: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "TxRequestDetailsType" });
    exports2.TxRequestSerializedType = schema_utils_1.Type.Object({
      signature_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      signature: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      serialized_tx: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "TxRequestSerializedType" });
    exports2.TxRequest = schema_utils_1.Type.Object({
      request_type: exports2.RequestType,
      details: exports2.TxRequestDetailsType,
      serialized: schema_utils_1.Type.Optional(exports2.TxRequestSerializedType)
    }, { $id: "TxRequest" });
    exports2.InternalInputScriptType = schema_utils_1.Type.Exclude(exports2.InputScriptType, schema_utils_1.Type.Literal("EXTERNAL"), {
      $id: "InternalInputScriptType"
    });
    var CommonTxInputType = schema_utils_1.Type.Object({
      prev_hash: schema_utils_1.Type.String(),
      prev_index: schema_utils_1.Type.Number(),
      amount: schema_utils_1.Type.Uint(),
      sequence: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      multisig: schema_utils_1.Type.Optional(exports2.MultisigRedeemScriptType),
      decred_tree: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      orig_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      orig_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      decred_staking_spend: schema_utils_1.Type.Optional(exports2.EnumDecredStakingSpendType),
      script_pubkey: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      coinjoin_flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      script_sig: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      witness: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      ownership_proof: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      commitment_data: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CommonTxInputType" });
    exports2.TxInputType = schema_utils_1.Type.Union([
      schema_utils_1.Type.Intersect([
        CommonTxInputType,
        schema_utils_1.Type.Object({
          address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
          script_type: schema_utils_1.Type.Optional(exports2.InternalInputScriptType)
        })
      ]),
      schema_utils_1.Type.Intersect([
        CommonTxInputType,
        schema_utils_1.Type.Object({
          address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
          script_type: schema_utils_1.Type.Literal("EXTERNAL"),
          script_pubkey: schema_utils_1.Type.String()
        })
      ])
    ], { $id: "TxInputType" });
    exports2.TxInput = schema_utils_1.TypeClone.Type(exports2.TxInputType, { $id: "TxInput" });
    exports2.TxOutputBinType = schema_utils_1.Type.Object({
      amount: schema_utils_1.Type.Uint(),
      script_pubkey: schema_utils_1.Type.String(),
      decred_script_version: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "TxOutputBinType" });
    exports2.ChangeOutputScriptType = schema_utils_1.Type.Exclude(exports2.OutputScriptType, schema_utils_1.Type.Literal("PAYTOOPRETURN"), { $id: "ChangeOutputScriptType" });
    exports2.TxOutputType = schema_utils_1.Type.Union([
      schema_utils_1.Type.Object({
        address: schema_utils_1.Type.String(),
        address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
        script_type: schema_utils_1.Type.Literal("PAYTOADDRESS"),
        amount: schema_utils_1.Type.Uint(),
        multisig: schema_utils_1.Type.Optional(exports2.MultisigRedeemScriptType),
        orig_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        orig_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        payment_req_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
      }),
      schema_utils_1.Type.Object({
        address: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
        address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
        script_type: schema_utils_1.Type.Optional(exports2.ChangeOutputScriptType),
        amount: schema_utils_1.Type.Uint(),
        multisig: schema_utils_1.Type.Optional(exports2.MultisigRedeemScriptType),
        orig_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        orig_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        payment_req_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
      }),
      schema_utils_1.Type.Object({
        address: schema_utils_1.Type.String(),
        address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
        script_type: schema_utils_1.Type.Optional(exports2.ChangeOutputScriptType),
        amount: schema_utils_1.Type.Uint(),
        multisig: schema_utils_1.Type.Optional(exports2.MultisigRedeemScriptType),
        orig_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        orig_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        payment_req_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
      }),
      schema_utils_1.Type.Object({
        address: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
        address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
        amount: schema_utils_1.Type.Union([schema_utils_1.Type.Literal("0"), schema_utils_1.Type.Literal(0)]),
        op_return_data: schema_utils_1.Type.String(),
        script_type: schema_utils_1.Type.Literal("PAYTOOPRETURN"),
        orig_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        orig_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        payment_req_index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
      })
    ], { $id: "TxOutputType" });
    exports2.TxOutput = schema_utils_1.TypeClone.Type(exports2.TxOutputType, { $id: "TxOutput" });
    exports2.PrevTx = schema_utils_1.Type.Object({
      version: schema_utils_1.Type.Number(),
      lock_time: schema_utils_1.Type.Number(),
      inputs_count: schema_utils_1.Type.Number(),
      outputs_count: schema_utils_1.Type.Number(),
      extra_data_len: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      expiry: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      version_group_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      timestamp: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      branch_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "PrevTx" });
    exports2.PrevInput = schema_utils_1.Type.Object({
      prev_hash: schema_utils_1.Type.String(),
      prev_index: schema_utils_1.Type.Number(),
      script_sig: schema_utils_1.Type.String(),
      sequence: schema_utils_1.Type.Number(),
      decred_tree: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "PrevInput" });
    exports2.PrevOutput = schema_utils_1.Type.Object({
      amount: schema_utils_1.Type.Uint(),
      script_pubkey: schema_utils_1.Type.String(),
      decred_script_version: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "PrevOutput" });
    exports2.TextMemo = schema_utils_1.Type.Object({
      text: schema_utils_1.Type.String()
    }, { $id: "TextMemo" });
    exports2.RefundMemo = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      mac: schema_utils_1.Type.String()
    }, { $id: "RefundMemo" });
    exports2.CoinPurchaseMemo = schema_utils_1.Type.Object({
      coin_type: schema_utils_1.Type.Number(),
      amount: schema_utils_1.Type.Uint(),
      address: schema_utils_1.Type.String(),
      mac: schema_utils_1.Type.String()
    }, { $id: "CoinPurchaseMemo" });
    exports2.PaymentRequestMemo = schema_utils_1.Type.Object({
      text_memo: schema_utils_1.Type.Optional(exports2.TextMemo),
      refund_memo: schema_utils_1.Type.Optional(exports2.RefundMemo),
      coin_purchase_memo: schema_utils_1.Type.Optional(exports2.CoinPurchaseMemo)
    }, { $id: "PaymentRequestMemo" });
    exports2.TxAckPaymentRequest = schema_utils_1.Type.Object({
      nonce: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      recipient_name: schema_utils_1.Type.String(),
      memos: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.PaymentRequestMemo)),
      amount: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      signature: schema_utils_1.Type.String()
    }, { $id: "TxAckPaymentRequest" });
    exports2.TxAckResponse = schema_utils_1.Type.Union([
      schema_utils_1.Type.Object({
        inputs: schema_utils_1.Type.Array(schema_utils_1.Type.Union([exports2.TxInputType, exports2.PrevInput]))
      }),
      schema_utils_1.Type.Object({
        bin_outputs: schema_utils_1.Type.Array(exports2.TxOutputBinType)
      }),
      schema_utils_1.Type.Object({
        outputs: schema_utils_1.Type.Array(exports2.TxOutputType)
      }),
      schema_utils_1.Type.Object({
        extra_data: schema_utils_1.Type.String()
      }),
      schema_utils_1.Type.Object({
        version: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        lock_time: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        inputs_cnt: schema_utils_1.Type.Number(),
        outputs_cnt: schema_utils_1.Type.Number(),
        extra_data: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        extra_data_len: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        timestamp: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        version_group_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        expiry: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        branch_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
      })
    ], { $id: "TxAckResponse" });
    exports2.TxAck = schema_utils_1.Type.Object({
      tx: exports2.TxAckResponse
    }, { $id: "TxAck" });
    exports2.TxAckInputWrapper = schema_utils_1.Type.Object({
      input: exports2.TxInput
    }, { $id: "TxAckInputWrapper" });
    exports2.TxAckInput = schema_utils_1.Type.Object({
      tx: exports2.TxAckInputWrapper
    }, { $id: "TxAckInput" });
    exports2.TxAckOutputWrapper = schema_utils_1.Type.Object({
      output: exports2.TxOutput
    }, { $id: "TxAckOutputWrapper" });
    exports2.TxAckOutput = schema_utils_1.Type.Object({
      tx: exports2.TxAckOutputWrapper
    }, { $id: "TxAckOutput" });
    exports2.TxAckPrevMeta = schema_utils_1.Type.Object({
      tx: exports2.PrevTx
    }, { $id: "TxAckPrevMeta" });
    exports2.TxAckPrevInputWrapper = schema_utils_1.Type.Object({
      input: exports2.PrevInput
    }, { $id: "TxAckPrevInputWrapper" });
    exports2.TxAckPrevInput = schema_utils_1.Type.Object({
      tx: exports2.TxAckPrevInputWrapper
    }, { $id: "TxAckPrevInput" });
    exports2.TxAckPrevOutputWrapper = schema_utils_1.Type.Object({
      output: exports2.PrevOutput
    }, { $id: "TxAckPrevOutputWrapper" });
    exports2.TxAckPrevOutput = schema_utils_1.Type.Object({
      tx: exports2.TxAckPrevOutputWrapper
    }, { $id: "TxAckPrevOutput" });
    exports2.TxAckPrevExtraDataWrapper = schema_utils_1.Type.Object({
      extra_data_chunk: schema_utils_1.Type.String()
    }, { $id: "TxAckPrevExtraDataWrapper" });
    exports2.TxAckPrevExtraData = schema_utils_1.Type.Object({
      tx: exports2.TxAckPrevExtraDataWrapper
    }, { $id: "TxAckPrevExtraData" });
    exports2.GetOwnershipProof = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      script_type: schema_utils_1.Type.Optional(exports2.InputScriptType),
      multisig: schema_utils_1.Type.Optional(exports2.MultisigRedeemScriptType),
      user_confirmation: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      ownership_ids: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.String())),
      commitment_data: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "GetOwnershipProof" });
    exports2.OwnershipProof = schema_utils_1.Type.Object({
      ownership_proof: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String()
    }, { $id: "OwnershipProof" });
    exports2.AuthorizeCoinJoin = schema_utils_1.Type.Object({
      coordinator: schema_utils_1.Type.String(),
      max_rounds: schema_utils_1.Type.Number(),
      max_coordinator_fee_rate: schema_utils_1.Type.Number(),
      max_fee_per_kvbyte: schema_utils_1.Type.Number(),
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      coin_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      script_type: schema_utils_1.Type.Optional(exports2.InputScriptType),
      amount_unit: schema_utils_1.Type.Optional(exports2.EnumAmountUnit)
    }, { $id: "AuthorizeCoinJoin" });
    exports2.FirmwareErase = schema_utils_1.Type.Object({
      length: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "FirmwareErase" });
    exports2.FirmwareRequest = schema_utils_1.Type.Object({
      offset: schema_utils_1.Type.Number(),
      length: schema_utils_1.Type.Number()
    }, { $id: "FirmwareRequest" });
    exports2.FirmwareUpload = schema_utils_1.Type.Object({
      payload: schema_utils_1.Type.Union([schema_utils_1.Type.Buffer(), schema_utils_1.Type.ArrayBuffer()]),
      hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "FirmwareUpload" });
    exports2.ProdTestT1 = schema_utils_1.Type.Object({
      payload: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "ProdTestT1" });
    var CardanoDerivationType;
    (function(CardanoDerivationType2) {
      CardanoDerivationType2[CardanoDerivationType2["LEDGER"] = 0] = "LEDGER";
      CardanoDerivationType2[CardanoDerivationType2["ICARUS"] = 1] = "ICARUS";
      CardanoDerivationType2[CardanoDerivationType2["ICARUS_TREZOR"] = 2] = "ICARUS_TREZOR";
    })(CardanoDerivationType || (exports2.CardanoDerivationType = CardanoDerivationType = {}));
    exports2.EnumCardanoDerivationType = schema_utils_1.Type.Enum(CardanoDerivationType);
    var CardanoAddressType;
    (function(CardanoAddressType2) {
      CardanoAddressType2[CardanoAddressType2["BASE"] = 0] = "BASE";
      CardanoAddressType2[CardanoAddressType2["BASE_SCRIPT_KEY"] = 1] = "BASE_SCRIPT_KEY";
      CardanoAddressType2[CardanoAddressType2["BASE_KEY_SCRIPT"] = 2] = "BASE_KEY_SCRIPT";
      CardanoAddressType2[CardanoAddressType2["BASE_SCRIPT_SCRIPT"] = 3] = "BASE_SCRIPT_SCRIPT";
      CardanoAddressType2[CardanoAddressType2["POINTER"] = 4] = "POINTER";
      CardanoAddressType2[CardanoAddressType2["POINTER_SCRIPT"] = 5] = "POINTER_SCRIPT";
      CardanoAddressType2[CardanoAddressType2["ENTERPRISE"] = 6] = "ENTERPRISE";
      CardanoAddressType2[CardanoAddressType2["ENTERPRISE_SCRIPT"] = 7] = "ENTERPRISE_SCRIPT";
      CardanoAddressType2[CardanoAddressType2["BYRON"] = 8] = "BYRON";
      CardanoAddressType2[CardanoAddressType2["REWARD"] = 14] = "REWARD";
      CardanoAddressType2[CardanoAddressType2["REWARD_SCRIPT"] = 15] = "REWARD_SCRIPT";
    })(CardanoAddressType || (exports2.CardanoAddressType = CardanoAddressType = {}));
    exports2.EnumCardanoAddressType = schema_utils_1.Type.Enum(CardanoAddressType);
    var CardanoNativeScriptType;
    (function(CardanoNativeScriptType2) {
      CardanoNativeScriptType2[CardanoNativeScriptType2["PUB_KEY"] = 0] = "PUB_KEY";
      CardanoNativeScriptType2[CardanoNativeScriptType2["ALL"] = 1] = "ALL";
      CardanoNativeScriptType2[CardanoNativeScriptType2["ANY"] = 2] = "ANY";
      CardanoNativeScriptType2[CardanoNativeScriptType2["N_OF_K"] = 3] = "N_OF_K";
      CardanoNativeScriptType2[CardanoNativeScriptType2["INVALID_BEFORE"] = 4] = "INVALID_BEFORE";
      CardanoNativeScriptType2[CardanoNativeScriptType2["INVALID_HEREAFTER"] = 5] = "INVALID_HEREAFTER";
    })(CardanoNativeScriptType || (exports2.CardanoNativeScriptType = CardanoNativeScriptType = {}));
    exports2.EnumCardanoNativeScriptType = schema_utils_1.Type.Enum(CardanoNativeScriptType);
    var CardanoNativeScriptHashDisplayFormat;
    (function(CardanoNativeScriptHashDisplayFormat2) {
      CardanoNativeScriptHashDisplayFormat2[CardanoNativeScriptHashDisplayFormat2["HIDE"] = 0] = "HIDE";
      CardanoNativeScriptHashDisplayFormat2[CardanoNativeScriptHashDisplayFormat2["BECH32"] = 1] = "BECH32";
      CardanoNativeScriptHashDisplayFormat2[CardanoNativeScriptHashDisplayFormat2["POLICY_ID"] = 2] = "POLICY_ID";
    })(CardanoNativeScriptHashDisplayFormat || (exports2.CardanoNativeScriptHashDisplayFormat = CardanoNativeScriptHashDisplayFormat = {}));
    exports2.EnumCardanoNativeScriptHashDisplayFormat = schema_utils_1.Type.Enum(CardanoNativeScriptHashDisplayFormat);
    var CardanoTxOutputSerializationFormat;
    (function(CardanoTxOutputSerializationFormat2) {
      CardanoTxOutputSerializationFormat2[CardanoTxOutputSerializationFormat2["ARRAY_LEGACY"] = 0] = "ARRAY_LEGACY";
      CardanoTxOutputSerializationFormat2[CardanoTxOutputSerializationFormat2["MAP_BABBAGE"] = 1] = "MAP_BABBAGE";
    })(CardanoTxOutputSerializationFormat || (exports2.CardanoTxOutputSerializationFormat = CardanoTxOutputSerializationFormat = {}));
    exports2.EnumCardanoTxOutputSerializationFormat = schema_utils_1.Type.Enum(CardanoTxOutputSerializationFormat);
    var CardanoCertificateType;
    (function(CardanoCertificateType2) {
      CardanoCertificateType2[CardanoCertificateType2["STAKE_REGISTRATION"] = 0] = "STAKE_REGISTRATION";
      CardanoCertificateType2[CardanoCertificateType2["STAKE_DEREGISTRATION"] = 1] = "STAKE_DEREGISTRATION";
      CardanoCertificateType2[CardanoCertificateType2["STAKE_DELEGATION"] = 2] = "STAKE_DELEGATION";
      CardanoCertificateType2[CardanoCertificateType2["STAKE_POOL_REGISTRATION"] = 3] = "STAKE_POOL_REGISTRATION";
      CardanoCertificateType2[CardanoCertificateType2["STAKE_REGISTRATION_CONWAY"] = 7] = "STAKE_REGISTRATION_CONWAY";
      CardanoCertificateType2[CardanoCertificateType2["STAKE_DEREGISTRATION_CONWAY"] = 8] = "STAKE_DEREGISTRATION_CONWAY";
      CardanoCertificateType2[CardanoCertificateType2["VOTE_DELEGATION"] = 9] = "VOTE_DELEGATION";
    })(CardanoCertificateType || (exports2.CardanoCertificateType = CardanoCertificateType = {}));
    exports2.EnumCardanoCertificateType = schema_utils_1.Type.Enum(CardanoCertificateType);
    var CardanoDRepType;
    (function(CardanoDRepType2) {
      CardanoDRepType2[CardanoDRepType2["KEY_HASH"] = 0] = "KEY_HASH";
      CardanoDRepType2[CardanoDRepType2["SCRIPT_HASH"] = 1] = "SCRIPT_HASH";
      CardanoDRepType2[CardanoDRepType2["ABSTAIN"] = 2] = "ABSTAIN";
      CardanoDRepType2[CardanoDRepType2["NO_CONFIDENCE"] = 3] = "NO_CONFIDENCE";
    })(CardanoDRepType || (exports2.CardanoDRepType = CardanoDRepType = {}));
    exports2.EnumCardanoDRepType = schema_utils_1.Type.Enum(CardanoDRepType);
    var CardanoPoolRelayType;
    (function(CardanoPoolRelayType2) {
      CardanoPoolRelayType2[CardanoPoolRelayType2["SINGLE_HOST_IP"] = 0] = "SINGLE_HOST_IP";
      CardanoPoolRelayType2[CardanoPoolRelayType2["SINGLE_HOST_NAME"] = 1] = "SINGLE_HOST_NAME";
      CardanoPoolRelayType2[CardanoPoolRelayType2["MULTIPLE_HOST_NAME"] = 2] = "MULTIPLE_HOST_NAME";
    })(CardanoPoolRelayType || (exports2.CardanoPoolRelayType = CardanoPoolRelayType = {}));
    exports2.EnumCardanoPoolRelayType = schema_utils_1.Type.Enum(CardanoPoolRelayType);
    var CardanoTxAuxiliaryDataSupplementType;
    (function(CardanoTxAuxiliaryDataSupplementType2) {
      CardanoTxAuxiliaryDataSupplementType2[CardanoTxAuxiliaryDataSupplementType2["NONE"] = 0] = "NONE";
      CardanoTxAuxiliaryDataSupplementType2[CardanoTxAuxiliaryDataSupplementType2["CVOTE_REGISTRATION_SIGNATURE"] = 1] = "CVOTE_REGISTRATION_SIGNATURE";
    })(CardanoTxAuxiliaryDataSupplementType || (exports2.CardanoTxAuxiliaryDataSupplementType = CardanoTxAuxiliaryDataSupplementType = {}));
    exports2.EnumCardanoTxAuxiliaryDataSupplementType = schema_utils_1.Type.Enum(CardanoTxAuxiliaryDataSupplementType);
    var CardanoCVoteRegistrationFormat;
    (function(CardanoCVoteRegistrationFormat2) {
      CardanoCVoteRegistrationFormat2[CardanoCVoteRegistrationFormat2["CIP15"] = 0] = "CIP15";
      CardanoCVoteRegistrationFormat2[CardanoCVoteRegistrationFormat2["CIP36"] = 1] = "CIP36";
    })(CardanoCVoteRegistrationFormat || (exports2.CardanoCVoteRegistrationFormat = CardanoCVoteRegistrationFormat = {}));
    exports2.EnumCardanoCVoteRegistrationFormat = schema_utils_1.Type.Enum(CardanoCVoteRegistrationFormat);
    var CardanoTxSigningMode;
    (function(CardanoTxSigningMode2) {
      CardanoTxSigningMode2[CardanoTxSigningMode2["ORDINARY_TRANSACTION"] = 0] = "ORDINARY_TRANSACTION";
      CardanoTxSigningMode2[CardanoTxSigningMode2["POOL_REGISTRATION_AS_OWNER"] = 1] = "POOL_REGISTRATION_AS_OWNER";
      CardanoTxSigningMode2[CardanoTxSigningMode2["MULTISIG_TRANSACTION"] = 2] = "MULTISIG_TRANSACTION";
      CardanoTxSigningMode2[CardanoTxSigningMode2["PLUTUS_TRANSACTION"] = 3] = "PLUTUS_TRANSACTION";
    })(CardanoTxSigningMode || (exports2.CardanoTxSigningMode = CardanoTxSigningMode = {}));
    exports2.EnumCardanoTxSigningMode = schema_utils_1.Type.Enum(CardanoTxSigningMode);
    var CardanoTxWitnessType;
    (function(CardanoTxWitnessType2) {
      CardanoTxWitnessType2[CardanoTxWitnessType2["BYRON_WITNESS"] = 0] = "BYRON_WITNESS";
      CardanoTxWitnessType2[CardanoTxWitnessType2["SHELLEY_WITNESS"] = 1] = "SHELLEY_WITNESS";
    })(CardanoTxWitnessType || (exports2.CardanoTxWitnessType = CardanoTxWitnessType = {}));
    exports2.EnumCardanoTxWitnessType = schema_utils_1.Type.Enum(CardanoTxWitnessType);
    exports2.CardanoBlockchainPointerType = schema_utils_1.Type.Object({
      block_index: schema_utils_1.Type.Number(),
      tx_index: schema_utils_1.Type.Number(),
      certificate_index: schema_utils_1.Type.Number()
    }, { $id: "CardanoBlockchainPointerType" });
    exports2.CardanoNativeScript = schema_utils_1.Type.Recursive((This) => schema_utils_1.Type.Object({
      type: exports2.EnumCardanoNativeScriptType,
      scripts: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(This)),
      key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      key_path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
      required_signatures_count: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      invalid_before: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      invalid_hereafter: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint())
    }), { $id: "CardanoNativeScript" });
    exports2.CardanoGetNativeScriptHash = schema_utils_1.Type.Object({
      script: exports2.CardanoNativeScript,
      display_format: exports2.EnumCardanoNativeScriptHashDisplayFormat,
      derivation_type: exports2.EnumCardanoDerivationType
    }, { $id: "CardanoGetNativeScriptHash" });
    exports2.CardanoNativeScriptHash = schema_utils_1.Type.Object({
      script_hash: schema_utils_1.Type.String()
    }, { $id: "CardanoNativeScriptHash" });
    exports2.CardanoAddressParametersType = schema_utils_1.Type.Object({
      address_type: exports2.EnumCardanoAddressType,
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      address_n_staking: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      staking_key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      certificate_pointer: schema_utils_1.Type.Optional(exports2.CardanoBlockchainPointerType),
      script_payment_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      script_staking_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CardanoAddressParametersType" });
    exports2.CardanoGetAddress = schema_utils_1.Type.Object({
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      protocol_magic: schema_utils_1.Type.Number(),
      network_id: schema_utils_1.Type.Number(),
      address_parameters: exports2.CardanoAddressParametersType,
      derivation_type: exports2.EnumCardanoDerivationType,
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "CardanoGetAddress" });
    exports2.CardanoAddress = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String()
    }, { $id: "CardanoAddress" });
    exports2.CardanoGetPublicKey = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      derivation_type: exports2.EnumCardanoDerivationType
    }, { $id: "CardanoGetPublicKey" });
    exports2.CardanoPublicKey = schema_utils_1.Type.Object({
      xpub: schema_utils_1.Type.String(),
      node: exports2.HDNodeType
    }, { $id: "CardanoPublicKey" });
    exports2.CardanoSignTxInit = schema_utils_1.Type.Object({
      signing_mode: exports2.EnumCardanoTxSigningMode,
      protocol_magic: schema_utils_1.Type.Number(),
      network_id: schema_utils_1.Type.Number(),
      inputs_count: schema_utils_1.Type.Number(),
      outputs_count: schema_utils_1.Type.Number(),
      fee: schema_utils_1.Type.Uint(),
      ttl: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      certificates_count: schema_utils_1.Type.Number(),
      withdrawals_count: schema_utils_1.Type.Number(),
      has_auxiliary_data: schema_utils_1.Type.Boolean(),
      validity_interval_start: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      witness_requests_count: schema_utils_1.Type.Number(),
      minting_asset_groups_count: schema_utils_1.Type.Number(),
      derivation_type: exports2.EnumCardanoDerivationType,
      include_network_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      script_data_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      collateral_inputs_count: schema_utils_1.Type.Number(),
      required_signers_count: schema_utils_1.Type.Number(),
      has_collateral_return: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      total_collateral: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      reference_inputs_count: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      tag_cbor_sets: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "CardanoSignTxInit" });
    exports2.CardanoTxInput = schema_utils_1.Type.Object({
      prev_hash: schema_utils_1.Type.String(),
      prev_index: schema_utils_1.Type.Number()
    }, { $id: "CardanoTxInput" });
    exports2.CardanoTxOutput = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      address_parameters: schema_utils_1.Type.Optional(exports2.CardanoAddressParametersType),
      amount: schema_utils_1.Type.Uint(),
      asset_groups_count: schema_utils_1.Type.Number(),
      datum_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      format: schema_utils_1.Type.Optional(exports2.EnumCardanoTxOutputSerializationFormat),
      inline_datum_size: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      reference_script_size: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "CardanoTxOutput" });
    exports2.CardanoAssetGroup = schema_utils_1.Type.Object({
      policy_id: schema_utils_1.Type.String(),
      tokens_count: schema_utils_1.Type.Number()
    }, { $id: "CardanoAssetGroup" });
    exports2.CardanoToken = schema_utils_1.Type.Object({
      asset_name_bytes: schema_utils_1.Type.String(),
      amount: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      mint_amount: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint({ allowNegative: true }))
    }, { $id: "CardanoToken" });
    exports2.CardanoTxInlineDatumChunk = schema_utils_1.Type.Object({
      data: schema_utils_1.Type.String()
    }, { $id: "CardanoTxInlineDatumChunk" });
    exports2.CardanoTxReferenceScriptChunk = schema_utils_1.Type.Object({
      data: schema_utils_1.Type.String()
    }, { $id: "CardanoTxReferenceScriptChunk" });
    exports2.CardanoPoolOwner = schema_utils_1.Type.Object({
      staking_key_path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
      staking_key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CardanoPoolOwner" });
    exports2.CardanoPoolRelayParameters = schema_utils_1.Type.Object({
      type: exports2.EnumCardanoPoolRelayType,
      ipv4_address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      ipv6_address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      host_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      port: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "CardanoPoolRelayParameters" });
    exports2.CardanoPoolMetadataType = schema_utils_1.Type.Object({
      url: schema_utils_1.Type.String(),
      hash: schema_utils_1.Type.String()
    }, { $id: "CardanoPoolMetadataType" });
    exports2.CardanoPoolParametersType = schema_utils_1.Type.Object({
      pool_id: schema_utils_1.Type.String(),
      vrf_key_hash: schema_utils_1.Type.String(),
      pledge: schema_utils_1.Type.Uint(),
      cost: schema_utils_1.Type.Uint(),
      margin_numerator: schema_utils_1.Type.Uint(),
      margin_denominator: schema_utils_1.Type.Uint(),
      reward_account: schema_utils_1.Type.String(),
      metadata: schema_utils_1.Type.Optional(exports2.CardanoPoolMetadataType),
      owners_count: schema_utils_1.Type.Number(),
      relays_count: schema_utils_1.Type.Number()
    }, { $id: "CardanoPoolParametersType" });
    exports2.CardanoDRep = schema_utils_1.Type.Object({
      type: exports2.EnumCardanoDRepType,
      key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      script_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CardanoDRep" });
    exports2.CardanoTxCertificate = schema_utils_1.Type.Object({
      type: exports2.EnumCardanoCertificateType,
      path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
      pool: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      pool_parameters: schema_utils_1.Type.Optional(exports2.CardanoPoolParametersType),
      script_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      deposit: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      drep: schema_utils_1.Type.Optional(exports2.CardanoDRep)
    }, { $id: "CardanoTxCertificate" });
    exports2.CardanoTxWithdrawal = schema_utils_1.Type.Object({
      path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
      amount: schema_utils_1.Type.Uint(),
      script_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CardanoTxWithdrawal" });
    exports2.CardanoCVoteRegistrationDelegation = schema_utils_1.Type.Object({
      vote_public_key: schema_utils_1.Type.String(),
      weight: schema_utils_1.Type.Uint()
    }, { $id: "CardanoCVoteRegistrationDelegation" });
    exports2.CardanoCVoteRegistrationParametersType = schema_utils_1.Type.Object({
      vote_public_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      staking_path: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      payment_address_parameters: schema_utils_1.Type.Optional(exports2.CardanoAddressParametersType),
      nonce: schema_utils_1.Type.Uint(),
      format: schema_utils_1.Type.Optional(exports2.EnumCardanoCVoteRegistrationFormat),
      delegations: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.CardanoCVoteRegistrationDelegation)),
      voting_purpose: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      payment_address: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CardanoCVoteRegistrationParametersType" });
    exports2.CardanoTxAuxiliaryData = schema_utils_1.Type.Object({
      cvote_registration_parameters: schema_utils_1.Type.Optional(exports2.CardanoCVoteRegistrationParametersType),
      hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CardanoTxAuxiliaryData" });
    exports2.CardanoTxMint = schema_utils_1.Type.Object({
      asset_groups_count: schema_utils_1.Type.Number()
    }, { $id: "CardanoTxMint" });
    exports2.CardanoTxCollateralInput = schema_utils_1.Type.Object({
      prev_hash: schema_utils_1.Type.String(),
      prev_index: schema_utils_1.Type.Number()
    }, { $id: "CardanoTxCollateralInput" });
    exports2.CardanoTxRequiredSigner = schema_utils_1.Type.Object({
      key_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      key_path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number()))
    }, { $id: "CardanoTxRequiredSigner" });
    exports2.CardanoTxReferenceInput = schema_utils_1.Type.Object({
      prev_hash: schema_utils_1.Type.String(),
      prev_index: schema_utils_1.Type.Number()
    }, { $id: "CardanoTxReferenceInput" });
    exports2.CardanoTxItemAck = schema_utils_1.Type.Object({}, { $id: "CardanoTxItemAck" });
    exports2.CardanoTxAuxiliaryDataSupplement = schema_utils_1.Type.Object({
      type: exports2.EnumCardanoTxAuxiliaryDataSupplementType,
      auxiliary_data_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      cvote_registration_signature: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CardanoTxAuxiliaryDataSupplement" });
    exports2.CardanoTxWitnessRequest = schema_utils_1.Type.Object({
      path: schema_utils_1.Type.Array(schema_utils_1.Type.Number())
    }, { $id: "CardanoTxWitnessRequest" });
    exports2.CardanoTxWitnessResponse = schema_utils_1.Type.Object({
      type: exports2.EnumCardanoTxWitnessType,
      pub_key: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String(),
      chain_code: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CardanoTxWitnessResponse" });
    exports2.CardanoTxHostAck = schema_utils_1.Type.Object({}, { $id: "CardanoTxHostAck" });
    exports2.CardanoTxBodyHash = schema_utils_1.Type.Object({
      tx_hash: schema_utils_1.Type.String()
    }, { $id: "CardanoTxBodyHash" });
    exports2.CardanoSignTxFinished = schema_utils_1.Type.Object({}, { $id: "CardanoSignTxFinished" });
    exports2.Success = schema_utils_1.Type.Object({
      message: schema_utils_1.Type.String()
    }, { $id: "Success" });
    var FailureType;
    (function(FailureType2) {
      FailureType2[FailureType2["Failure_UnexpectedMessage"] = 1] = "Failure_UnexpectedMessage";
      FailureType2[FailureType2["Failure_ButtonExpected"] = 2] = "Failure_ButtonExpected";
      FailureType2[FailureType2["Failure_DataError"] = 3] = "Failure_DataError";
      FailureType2[FailureType2["Failure_ActionCancelled"] = 4] = "Failure_ActionCancelled";
      FailureType2[FailureType2["Failure_PinExpected"] = 5] = "Failure_PinExpected";
      FailureType2[FailureType2["Failure_PinCancelled"] = 6] = "Failure_PinCancelled";
      FailureType2[FailureType2["Failure_PinInvalid"] = 7] = "Failure_PinInvalid";
      FailureType2[FailureType2["Failure_InvalidSignature"] = 8] = "Failure_InvalidSignature";
      FailureType2[FailureType2["Failure_ProcessError"] = 9] = "Failure_ProcessError";
      FailureType2[FailureType2["Failure_NotEnoughFunds"] = 10] = "Failure_NotEnoughFunds";
      FailureType2[FailureType2["Failure_NotInitialized"] = 11] = "Failure_NotInitialized";
      FailureType2[FailureType2["Failure_PinMismatch"] = 12] = "Failure_PinMismatch";
      FailureType2[FailureType2["Failure_WipeCodeMismatch"] = 13] = "Failure_WipeCodeMismatch";
      FailureType2[FailureType2["Failure_InvalidSession"] = 14] = "Failure_InvalidSession";
      FailureType2[FailureType2["Failure_FirmwareError"] = 99] = "Failure_FirmwareError";
    })(FailureType || (exports2.FailureType = FailureType = {}));
    exports2.EnumFailureType = schema_utils_1.Type.Enum(FailureType);
    exports2.Failure = schema_utils_1.Type.Object({
      code: schema_utils_1.Type.Optional(exports2.EnumFailureType),
      message: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "Failure" });
    var Enum_ButtonRequestType;
    (function(Enum_ButtonRequestType2) {
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_Other"] = 1] = "ButtonRequest_Other";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_FeeOverThreshold"] = 2] = "ButtonRequest_FeeOverThreshold";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_ConfirmOutput"] = 3] = "ButtonRequest_ConfirmOutput";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_ResetDevice"] = 4] = "ButtonRequest_ResetDevice";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_ConfirmWord"] = 5] = "ButtonRequest_ConfirmWord";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_WipeDevice"] = 6] = "ButtonRequest_WipeDevice";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_ProtectCall"] = 7] = "ButtonRequest_ProtectCall";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_SignTx"] = 8] = "ButtonRequest_SignTx";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_FirmwareCheck"] = 9] = "ButtonRequest_FirmwareCheck";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_Address"] = 10] = "ButtonRequest_Address";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_PublicKey"] = 11] = "ButtonRequest_PublicKey";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_MnemonicWordCount"] = 12] = "ButtonRequest_MnemonicWordCount";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_MnemonicInput"] = 13] = "ButtonRequest_MnemonicInput";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["_Deprecated_ButtonRequest_PassphraseType"] = 14] = "_Deprecated_ButtonRequest_PassphraseType";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_UnknownDerivationPath"] = 15] = "ButtonRequest_UnknownDerivationPath";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_RecoveryHomepage"] = 16] = "ButtonRequest_RecoveryHomepage";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_Success"] = 17] = "ButtonRequest_Success";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_Warning"] = 18] = "ButtonRequest_Warning";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_PassphraseEntry"] = 19] = "ButtonRequest_PassphraseEntry";
      Enum_ButtonRequestType2[Enum_ButtonRequestType2["ButtonRequest_PinEntry"] = 20] = "ButtonRequest_PinEntry";
    })(Enum_ButtonRequestType || (exports2.Enum_ButtonRequestType = Enum_ButtonRequestType = {}));
    exports2.EnumEnum_ButtonRequestType = schema_utils_1.Type.Enum(Enum_ButtonRequestType);
    exports2.ButtonRequestType = schema_utils_1.Type.KeyOfEnum(Enum_ButtonRequestType, {
      $id: "ButtonRequestType"
    });
    exports2.ButtonRequest = schema_utils_1.Type.Object({
      code: schema_utils_1.Type.Optional(exports2.ButtonRequestType),
      pages: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "ButtonRequest" });
    exports2.ButtonAck = schema_utils_1.Type.Object({}, { $id: "ButtonAck" });
    var Enum_PinMatrixRequestType;
    (function(Enum_PinMatrixRequestType2) {
      Enum_PinMatrixRequestType2[Enum_PinMatrixRequestType2["PinMatrixRequestType_Current"] = 1] = "PinMatrixRequestType_Current";
      Enum_PinMatrixRequestType2[Enum_PinMatrixRequestType2["PinMatrixRequestType_NewFirst"] = 2] = "PinMatrixRequestType_NewFirst";
      Enum_PinMatrixRequestType2[Enum_PinMatrixRequestType2["PinMatrixRequestType_NewSecond"] = 3] = "PinMatrixRequestType_NewSecond";
      Enum_PinMatrixRequestType2[Enum_PinMatrixRequestType2["PinMatrixRequestType_WipeCodeFirst"] = 4] = "PinMatrixRequestType_WipeCodeFirst";
      Enum_PinMatrixRequestType2[Enum_PinMatrixRequestType2["PinMatrixRequestType_WipeCodeSecond"] = 5] = "PinMatrixRequestType_WipeCodeSecond";
    })(Enum_PinMatrixRequestType || (exports2.Enum_PinMatrixRequestType = Enum_PinMatrixRequestType = {}));
    exports2.EnumEnum_PinMatrixRequestType = schema_utils_1.Type.Enum(Enum_PinMatrixRequestType);
    exports2.PinMatrixRequestType = schema_utils_1.Type.KeyOfEnum(Enum_PinMatrixRequestType, {
      $id: "PinMatrixRequestType"
    });
    exports2.PinMatrixRequest = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Optional(exports2.PinMatrixRequestType)
    }, { $id: "PinMatrixRequest" });
    exports2.PinMatrixAck = schema_utils_1.Type.Object({
      pin: schema_utils_1.Type.String()
    }, { $id: "PinMatrixAck" });
    exports2.PassphraseRequest = schema_utils_1.Type.Object({
      _on_device: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "PassphraseRequest" });
    exports2.PassphraseAck = schema_utils_1.Type.Object({
      passphrase: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      _state: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      on_device: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "PassphraseAck" });
    exports2.Deprecated_PassphraseStateRequest = schema_utils_1.Type.Object({
      state: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "Deprecated_PassphraseStateRequest" });
    exports2.Deprecated_PassphraseStateAck = schema_utils_1.Type.Object({}, { $id: "Deprecated_PassphraseStateAck" });
    exports2.CipherKeyValue = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      key: schema_utils_1.Type.String(),
      value: schema_utils_1.Type.String(),
      encrypt: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      ask_on_encrypt: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      ask_on_decrypt: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      iv: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "CipherKeyValue" });
    exports2.CipheredKeyValue = schema_utils_1.Type.Object({
      value: schema_utils_1.Type.String()
    }, { $id: "CipheredKeyValue" });
    exports2.IdentityType = schema_utils_1.Type.Object({
      proto: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      user: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      host: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      port: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      path: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      index: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "IdentityType" });
    exports2.SignIdentity = schema_utils_1.Type.Object({
      identity: exports2.IdentityType,
      challenge_hidden: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      challenge_visual: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      ecdsa_curve_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "SignIdentity" });
    exports2.SignedIdentity = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      public_key: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String()
    }, { $id: "SignedIdentity" });
    exports2.GetECDHSessionKey = schema_utils_1.Type.Object({
      identity: exports2.IdentityType,
      peer_public_key: schema_utils_1.Type.String(),
      ecdsa_curve_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "GetECDHSessionKey" });
    exports2.ECDHSessionKey = schema_utils_1.Type.Object({
      session_key: schema_utils_1.Type.String(),
      public_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "ECDHSessionKey" });
    var DebugButton;
    (function(DebugButton2) {
      DebugButton2[DebugButton2["NO"] = 0] = "NO";
      DebugButton2[DebugButton2["YES"] = 1] = "YES";
      DebugButton2[DebugButton2["INFO"] = 2] = "INFO";
    })(DebugButton || (exports2.DebugButton = DebugButton = {}));
    exports2.EnumDebugButton = schema_utils_1.Type.Enum(DebugButton);
    var DebugPhysicalButton;
    (function(DebugPhysicalButton2) {
      DebugPhysicalButton2[DebugPhysicalButton2["LEFT_BTN"] = 0] = "LEFT_BTN";
      DebugPhysicalButton2[DebugPhysicalButton2["MIDDLE_BTN"] = 1] = "MIDDLE_BTN";
      DebugPhysicalButton2[DebugPhysicalButton2["RIGHT_BTN"] = 2] = "RIGHT_BTN";
    })(DebugPhysicalButton || (exports2.DebugPhysicalButton = DebugPhysicalButton = {}));
    exports2.EnumDebugPhysicalButton = schema_utils_1.Type.Enum(DebugPhysicalButton);
    exports2.DebugLinkResetDebugEvents = schema_utils_1.Type.Object({}, { $id: "DebugLinkResetDebugEvents" });
    exports2.EosGetPublicKey = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "EosGetPublicKey" });
    exports2.EosPublicKey = schema_utils_1.Type.Object({
      wif_public_key: schema_utils_1.Type.String(),
      raw_public_key: schema_utils_1.Type.String()
    }, { $id: "EosPublicKey" });
    exports2.EosTxHeader = schema_utils_1.Type.Object({
      expiration: schema_utils_1.Type.Number(),
      ref_block_num: schema_utils_1.Type.Number(),
      ref_block_prefix: schema_utils_1.Type.Number(),
      max_net_usage_words: schema_utils_1.Type.Number(),
      max_cpu_usage_ms: schema_utils_1.Type.Number(),
      delay_sec: schema_utils_1.Type.Number()
    }, { $id: "EosTxHeader" });
    exports2.EosSignTx = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      chain_id: schema_utils_1.Type.String(),
      header: exports2.EosTxHeader,
      num_actions: schema_utils_1.Type.Number(),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "EosSignTx" });
    exports2.EosTxActionRequest = schema_utils_1.Type.Object({
      data_size: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "EosTxActionRequest" });
    exports2.EosAsset = schema_utils_1.Type.Object({
      amount: schema_utils_1.Type.Uint(),
      symbol: schema_utils_1.Type.String()
    }, { $id: "EosAsset" });
    exports2.EosPermissionLevel = schema_utils_1.Type.Object({
      actor: schema_utils_1.Type.String(),
      permission: schema_utils_1.Type.String()
    }, { $id: "EosPermissionLevel" });
    exports2.EosAuthorizationKey = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      key: schema_utils_1.Type.String(),
      address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
      weight: schema_utils_1.Type.Number()
    }, { $id: "EosAuthorizationKey" });
    exports2.EosAuthorizationAccount = schema_utils_1.Type.Object({
      account: exports2.EosPermissionLevel,
      weight: schema_utils_1.Type.Number()
    }, { $id: "EosAuthorizationAccount" });
    exports2.EosAuthorizationWait = schema_utils_1.Type.Object({
      wait_sec: schema_utils_1.Type.Number(),
      weight: schema_utils_1.Type.Number()
    }, { $id: "EosAuthorizationWait" });
    exports2.EosAuthorization = schema_utils_1.Type.Object({
      threshold: schema_utils_1.Type.Number(),
      keys: schema_utils_1.Type.Array(exports2.EosAuthorizationKey),
      accounts: schema_utils_1.Type.Array(exports2.EosAuthorizationAccount),
      waits: schema_utils_1.Type.Array(exports2.EosAuthorizationWait)
    }, { $id: "EosAuthorization" });
    exports2.EosActionCommon = schema_utils_1.Type.Object({
      account: schema_utils_1.Type.String(),
      name: schema_utils_1.Type.String(),
      authorization: schema_utils_1.Type.Array(exports2.EosPermissionLevel)
    }, { $id: "EosActionCommon" });
    exports2.EosActionTransfer = schema_utils_1.Type.Object({
      sender: schema_utils_1.Type.String(),
      receiver: schema_utils_1.Type.String(),
      quantity: exports2.EosAsset,
      memo: schema_utils_1.Type.String()
    }, { $id: "EosActionTransfer" });
    exports2.EosActionDelegate = schema_utils_1.Type.Object({
      sender: schema_utils_1.Type.String(),
      receiver: schema_utils_1.Type.String(),
      net_quantity: exports2.EosAsset,
      cpu_quantity: exports2.EosAsset,
      transfer: schema_utils_1.Type.Boolean()
    }, { $id: "EosActionDelegate" });
    exports2.EosActionUndelegate = schema_utils_1.Type.Object({
      sender: schema_utils_1.Type.String(),
      receiver: schema_utils_1.Type.String(),
      net_quantity: exports2.EosAsset,
      cpu_quantity: exports2.EosAsset
    }, { $id: "EosActionUndelegate" });
    exports2.EosActionRefund = schema_utils_1.Type.Object({
      owner: schema_utils_1.Type.String()
    }, { $id: "EosActionRefund" });
    exports2.EosActionBuyRam = schema_utils_1.Type.Object({
      payer: schema_utils_1.Type.String(),
      receiver: schema_utils_1.Type.String(),
      quantity: exports2.EosAsset
    }, { $id: "EosActionBuyRam" });
    exports2.EosActionBuyRamBytes = schema_utils_1.Type.Object({
      payer: schema_utils_1.Type.String(),
      receiver: schema_utils_1.Type.String(),
      bytes: schema_utils_1.Type.Number()
    }, { $id: "EosActionBuyRamBytes" });
    exports2.EosActionSellRam = schema_utils_1.Type.Object({
      account: schema_utils_1.Type.String(),
      bytes: schema_utils_1.Type.Number()
    }, { $id: "EosActionSellRam" });
    exports2.EosActionVoteProducer = schema_utils_1.Type.Object({
      voter: schema_utils_1.Type.String(),
      proxy: schema_utils_1.Type.String(),
      producers: schema_utils_1.Type.Array(schema_utils_1.Type.String())
    }, { $id: "EosActionVoteProducer" });
    exports2.EosActionUpdateAuth = schema_utils_1.Type.Object({
      account: schema_utils_1.Type.String(),
      permission: schema_utils_1.Type.String(),
      parent: schema_utils_1.Type.String(),
      auth: exports2.EosAuthorization
    }, { $id: "EosActionUpdateAuth" });
    exports2.EosActionDeleteAuth = schema_utils_1.Type.Object({
      account: schema_utils_1.Type.String(),
      permission: schema_utils_1.Type.String()
    }, { $id: "EosActionDeleteAuth" });
    exports2.EosActionLinkAuth = schema_utils_1.Type.Object({
      account: schema_utils_1.Type.String(),
      code: schema_utils_1.Type.String(),
      type: schema_utils_1.Type.String(),
      requirement: schema_utils_1.Type.String()
    }, { $id: "EosActionLinkAuth" });
    exports2.EosActionUnlinkAuth = schema_utils_1.Type.Object({
      account: schema_utils_1.Type.String(),
      code: schema_utils_1.Type.String(),
      type: schema_utils_1.Type.String()
    }, { $id: "EosActionUnlinkAuth" });
    exports2.EosActionNewAccount = schema_utils_1.Type.Object({
      creator: schema_utils_1.Type.String(),
      name: schema_utils_1.Type.String(),
      owner: exports2.EosAuthorization,
      active: exports2.EosAuthorization
    }, { $id: "EosActionNewAccount" });
    exports2.EosActionUnknown = schema_utils_1.Type.Object({
      data_size: schema_utils_1.Type.Number(),
      data_chunk: schema_utils_1.Type.String()
    }, { $id: "EosActionUnknown" });
    exports2.EosTxActionAck = schema_utils_1.Type.Object({
      common: exports2.EosActionCommon,
      transfer: schema_utils_1.Type.Optional(exports2.EosActionTransfer),
      delegate: schema_utils_1.Type.Optional(exports2.EosActionDelegate),
      undelegate: schema_utils_1.Type.Optional(exports2.EosActionUndelegate),
      refund: schema_utils_1.Type.Optional(exports2.EosActionRefund),
      buy_ram: schema_utils_1.Type.Optional(exports2.EosActionBuyRam),
      buy_ram_bytes: schema_utils_1.Type.Optional(exports2.EosActionBuyRamBytes),
      sell_ram: schema_utils_1.Type.Optional(exports2.EosActionSellRam),
      vote_producer: schema_utils_1.Type.Optional(exports2.EosActionVoteProducer),
      update_auth: schema_utils_1.Type.Optional(exports2.EosActionUpdateAuth),
      delete_auth: schema_utils_1.Type.Optional(exports2.EosActionDeleteAuth),
      link_auth: schema_utils_1.Type.Optional(exports2.EosActionLinkAuth),
      unlink_auth: schema_utils_1.Type.Optional(exports2.EosActionUnlinkAuth),
      new_account: schema_utils_1.Type.Optional(exports2.EosActionNewAccount),
      unknown: schema_utils_1.Type.Optional(exports2.EosActionUnknown)
    }, { $id: "EosTxActionAck" });
    exports2.EosSignedTx = schema_utils_1.Type.Object({
      signature: schema_utils_1.Type.String()
    }, { $id: "EosSignedTx" });
    var EthereumDefinitionType;
    (function(EthereumDefinitionType2) {
      EthereumDefinitionType2[EthereumDefinitionType2["NETWORK"] = 0] = "NETWORK";
      EthereumDefinitionType2[EthereumDefinitionType2["TOKEN"] = 1] = "TOKEN";
    })(EthereumDefinitionType || (exports2.EthereumDefinitionType = EthereumDefinitionType = {}));
    exports2.EnumEthereumDefinitionType = schema_utils_1.Type.Enum(EthereumDefinitionType);
    exports2.EthereumNetworkInfo = schema_utils_1.Type.Object({
      chain_id: schema_utils_1.Type.Number(),
      symbol: schema_utils_1.Type.String(),
      slip44: schema_utils_1.Type.Number(),
      name: schema_utils_1.Type.String()
    }, { $id: "EthereumNetworkInfo" });
    exports2.EthereumTokenInfo = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      chain_id: schema_utils_1.Type.Number(),
      symbol: schema_utils_1.Type.String(),
      decimals: schema_utils_1.Type.Number(),
      name: schema_utils_1.Type.String()
    }, { $id: "EthereumTokenInfo" });
    exports2.EthereumDefinitions = schema_utils_1.Type.Object({
      encoded_network: schema_utils_1.Type.Optional(schema_utils_1.Type.ArrayBuffer()),
      encoded_token: schema_utils_1.Type.Optional(schema_utils_1.Type.ArrayBuffer())
    }, { $id: "EthereumDefinitions" });
    exports2.EthereumSignTypedData = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      primary_type: schema_utils_1.Type.String(),
      metamask_v4_compat: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      definitions: schema_utils_1.Type.Optional(exports2.EthereumDefinitions)
    }, { $id: "EthereumSignTypedData" });
    exports2.EthereumTypedDataStructRequest = schema_utils_1.Type.Object({
      name: schema_utils_1.Type.String()
    }, { $id: "EthereumTypedDataStructRequest" });
    var EthereumDataType;
    (function(EthereumDataType2) {
      EthereumDataType2[EthereumDataType2["UINT"] = 1] = "UINT";
      EthereumDataType2[EthereumDataType2["INT"] = 2] = "INT";
      EthereumDataType2[EthereumDataType2["BYTES"] = 3] = "BYTES";
      EthereumDataType2[EthereumDataType2["STRING"] = 4] = "STRING";
      EthereumDataType2[EthereumDataType2["BOOL"] = 5] = "BOOL";
      EthereumDataType2[EthereumDataType2["ADDRESS"] = 6] = "ADDRESS";
      EthereumDataType2[EthereumDataType2["ARRAY"] = 7] = "ARRAY";
      EthereumDataType2[EthereumDataType2["STRUCT"] = 8] = "STRUCT";
    })(EthereumDataType || (exports2.EthereumDataType = EthereumDataType = {}));
    exports2.EnumEthereumDataType = schema_utils_1.Type.Enum(EthereumDataType);
    exports2.EthereumFieldType = schema_utils_1.Type.Recursive((This) => schema_utils_1.Type.Object({
      data_type: exports2.EnumEthereumDataType,
      size: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      entry_type: schema_utils_1.Type.Optional(This),
      struct_name: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }), { $id: "EthereumFieldType" });
    exports2.EthereumStructMember = schema_utils_1.Type.Object({
      type: exports2.EthereumFieldType,
      name: schema_utils_1.Type.String()
    }, { $id: "EthereumStructMember" });
    exports2.EthereumTypedDataStructAck = schema_utils_1.Type.Object({
      members: schema_utils_1.Type.Array(exports2.EthereumStructMember)
    }, { $id: "EthereumTypedDataStructAck" });
    exports2.EthereumTypedDataValueRequest = schema_utils_1.Type.Object({
      member_path: schema_utils_1.Type.Array(schema_utils_1.Type.Number())
    }, { $id: "EthereumTypedDataValueRequest" });
    exports2.EthereumTypedDataValueAck = schema_utils_1.Type.Object({
      value: schema_utils_1.Type.String()
    }, { $id: "EthereumTypedDataValueAck" });
    exports2.EthereumGetPublicKey = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "EthereumGetPublicKey" });
    exports2.EthereumPublicKey = schema_utils_1.Type.Object({
      node: exports2.HDNodeType,
      xpub: schema_utils_1.Type.String()
    }, { $id: "EthereumPublicKey" });
    exports2.EthereumGetAddress = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      encoded_network: schema_utils_1.Type.Optional(schema_utils_1.Type.ArrayBuffer()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "EthereumGetAddress" });
    exports2.EthereumAddress = schema_utils_1.Type.Object({
      _old_address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      address: schema_utils_1.Type.String()
    }, { $id: "EthereumAddress" });
    exports2.EthereumSignTx = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      nonce: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      gas_price: schema_utils_1.Type.String(),
      gas_limit: schema_utils_1.Type.String(),
      to: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      value: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      data_initial_chunk: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      data_length: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      chain_id: schema_utils_1.Type.Number(),
      tx_type: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      definitions: schema_utils_1.Type.Optional(exports2.EthereumDefinitions),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "EthereumSignTx" });
    exports2.EthereumAccessList = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      storage_keys: schema_utils_1.Type.Array(schema_utils_1.Type.String())
    }, { $id: "EthereumAccessList" });
    exports2.EthereumSignTxEIP1559 = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      nonce: schema_utils_1.Type.String(),
      max_gas_fee: schema_utils_1.Type.String(),
      max_priority_fee: schema_utils_1.Type.String(),
      gas_limit: schema_utils_1.Type.String(),
      to: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      value: schema_utils_1.Type.String(),
      data_initial_chunk: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      data_length: schema_utils_1.Type.Number(),
      chain_id: schema_utils_1.Type.Number(),
      access_list: schema_utils_1.Type.Array(exports2.EthereumAccessList),
      definitions: schema_utils_1.Type.Optional(exports2.EthereumDefinitions),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "EthereumSignTxEIP1559" });
    exports2.EthereumTxRequest = schema_utils_1.Type.Object({
      data_length: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      signature_v: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      signature_r: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      signature_s: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "EthereumTxRequest" });
    exports2.EthereumTxAck = schema_utils_1.Type.Object({
      data_chunk: schema_utils_1.Type.String()
    }, { $id: "EthereumTxAck" });
    exports2.EthereumSignMessage = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      message: schema_utils_1.Type.String(),
      encoded_network: schema_utils_1.Type.Optional(schema_utils_1.Type.ArrayBuffer()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "EthereumSignMessage" });
    exports2.EthereumMessageSignature = schema_utils_1.Type.Object({
      signature: schema_utils_1.Type.String(),
      address: schema_utils_1.Type.String()
    }, { $id: "EthereumMessageSignature" });
    exports2.EthereumVerifyMessage = schema_utils_1.Type.Object({
      signature: schema_utils_1.Type.String(),
      message: schema_utils_1.Type.String(),
      address: schema_utils_1.Type.String(),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "EthereumVerifyMessage" });
    exports2.EthereumSignTypedHash = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      domain_separator_hash: schema_utils_1.Type.String(),
      message_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      encoded_network: schema_utils_1.Type.Optional(schema_utils_1.Type.ArrayBuffer())
    }, { $id: "EthereumSignTypedHash" });
    exports2.EthereumTypedDataSignature = schema_utils_1.Type.Object({
      signature: schema_utils_1.Type.String(),
      address: schema_utils_1.Type.String()
    }, { $id: "EthereumTypedDataSignature" });
    var Enum_BackupType;
    (function(Enum_BackupType2) {
      Enum_BackupType2[Enum_BackupType2["Bip39"] = 0] = "Bip39";
      Enum_BackupType2[Enum_BackupType2["Slip39_Basic"] = 1] = "Slip39_Basic";
      Enum_BackupType2[Enum_BackupType2["Slip39_Advanced"] = 2] = "Slip39_Advanced";
      Enum_BackupType2[Enum_BackupType2["Slip39_Single_Extendable"] = 3] = "Slip39_Single_Extendable";
      Enum_BackupType2[Enum_BackupType2["Slip39_Basic_Extendable"] = 4] = "Slip39_Basic_Extendable";
      Enum_BackupType2[Enum_BackupType2["Slip39_Advanced_Extendable"] = 5] = "Slip39_Advanced_Extendable";
    })(Enum_BackupType || (exports2.Enum_BackupType = Enum_BackupType = {}));
    exports2.EnumEnum_BackupType = schema_utils_1.Type.Enum(Enum_BackupType);
    exports2.BackupType = schema_utils_1.Type.KeyOfEnum(Enum_BackupType, { $id: "BackupType" });
    var Enum_SafetyCheckLevel;
    (function(Enum_SafetyCheckLevel2) {
      Enum_SafetyCheckLevel2[Enum_SafetyCheckLevel2["Strict"] = 0] = "Strict";
      Enum_SafetyCheckLevel2[Enum_SafetyCheckLevel2["PromptAlways"] = 1] = "PromptAlways";
      Enum_SafetyCheckLevel2[Enum_SafetyCheckLevel2["PromptTemporarily"] = 2] = "PromptTemporarily";
    })(Enum_SafetyCheckLevel || (exports2.Enum_SafetyCheckLevel = Enum_SafetyCheckLevel = {}));
    exports2.EnumEnum_SafetyCheckLevel = schema_utils_1.Type.Enum(Enum_SafetyCheckLevel);
    exports2.SafetyCheckLevel = schema_utils_1.Type.KeyOfEnum(Enum_SafetyCheckLevel, { $id: "SafetyCheckLevel" });
    var Enum_HomescreenFormat;
    (function(Enum_HomescreenFormat2) {
      Enum_HomescreenFormat2[Enum_HomescreenFormat2["Toif"] = 1] = "Toif";
      Enum_HomescreenFormat2[Enum_HomescreenFormat2["Jpeg"] = 2] = "Jpeg";
      Enum_HomescreenFormat2[Enum_HomescreenFormat2["ToiG"] = 3] = "ToiG";
    })(Enum_HomescreenFormat || (exports2.Enum_HomescreenFormat = Enum_HomescreenFormat = {}));
    exports2.EnumEnum_HomescreenFormat = schema_utils_1.Type.Enum(Enum_HomescreenFormat);
    exports2.HomescreenFormat = schema_utils_1.Type.KeyOfEnum(Enum_HomescreenFormat, { $id: "HomescreenFormat" });
    exports2.Initialize = schema_utils_1.Type.Object({
      session_id: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      _skip_passphrase: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      derive_cardano: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "Initialize" });
    exports2.GetFeatures = schema_utils_1.Type.Object({}, { $id: "GetFeatures" });
    var Enum_BackupAvailability;
    (function(Enum_BackupAvailability2) {
      Enum_BackupAvailability2[Enum_BackupAvailability2["NotAvailable"] = 0] = "NotAvailable";
      Enum_BackupAvailability2[Enum_BackupAvailability2["Required"] = 1] = "Required";
      Enum_BackupAvailability2[Enum_BackupAvailability2["Available"] = 2] = "Available";
    })(Enum_BackupAvailability || (exports2.Enum_BackupAvailability = Enum_BackupAvailability = {}));
    exports2.EnumEnum_BackupAvailability = schema_utils_1.Type.Enum(Enum_BackupAvailability);
    exports2.BackupAvailability = schema_utils_1.Type.KeyOfEnum(Enum_BackupAvailability, {
      $id: "BackupAvailability"
    });
    var Enum_RecoveryStatus;
    (function(Enum_RecoveryStatus2) {
      Enum_RecoveryStatus2[Enum_RecoveryStatus2["Nothing"] = 0] = "Nothing";
      Enum_RecoveryStatus2[Enum_RecoveryStatus2["Recovery"] = 1] = "Recovery";
      Enum_RecoveryStatus2[Enum_RecoveryStatus2["Backup"] = 2] = "Backup";
    })(Enum_RecoveryStatus || (exports2.Enum_RecoveryStatus = Enum_RecoveryStatus = {}));
    exports2.EnumEnum_RecoveryStatus = schema_utils_1.Type.Enum(Enum_RecoveryStatus);
    exports2.RecoveryStatus = schema_utils_1.Type.KeyOfEnum(Enum_RecoveryStatus, { $id: "RecoveryStatus" });
    var Enum_Capability;
    (function(Enum_Capability2) {
      Enum_Capability2[Enum_Capability2["Capability_Bitcoin"] = 1] = "Capability_Bitcoin";
      Enum_Capability2[Enum_Capability2["Capability_Bitcoin_like"] = 2] = "Capability_Bitcoin_like";
      Enum_Capability2[Enum_Capability2["Capability_Binance"] = 3] = "Capability_Binance";
      Enum_Capability2[Enum_Capability2["Capability_Cardano"] = 4] = "Capability_Cardano";
      Enum_Capability2[Enum_Capability2["Capability_Crypto"] = 5] = "Capability_Crypto";
      Enum_Capability2[Enum_Capability2["Capability_EOS"] = 6] = "Capability_EOS";
      Enum_Capability2[Enum_Capability2["Capability_Ethereum"] = 7] = "Capability_Ethereum";
      Enum_Capability2[Enum_Capability2["Capability_Lisk"] = 8] = "Capability_Lisk";
      Enum_Capability2[Enum_Capability2["Capability_Monero"] = 9] = "Capability_Monero";
      Enum_Capability2[Enum_Capability2["Capability_NEM"] = 10] = "Capability_NEM";
      Enum_Capability2[Enum_Capability2["Capability_Ripple"] = 11] = "Capability_Ripple";
      Enum_Capability2[Enum_Capability2["Capability_Stellar"] = 12] = "Capability_Stellar";
      Enum_Capability2[Enum_Capability2["Capability_Tezos"] = 13] = "Capability_Tezos";
      Enum_Capability2[Enum_Capability2["Capability_U2F"] = 14] = "Capability_U2F";
      Enum_Capability2[Enum_Capability2["Capability_Shamir"] = 15] = "Capability_Shamir";
      Enum_Capability2[Enum_Capability2["Capability_ShamirGroups"] = 16] = "Capability_ShamirGroups";
      Enum_Capability2[Enum_Capability2["Capability_PassphraseEntry"] = 17] = "Capability_PassphraseEntry";
      Enum_Capability2[Enum_Capability2["Capability_Solana"] = 18] = "Capability_Solana";
      Enum_Capability2[Enum_Capability2["Capability_Translations"] = 19] = "Capability_Translations";
      Enum_Capability2[Enum_Capability2["Capability_Brightness"] = 20] = "Capability_Brightness";
      Enum_Capability2[Enum_Capability2["Capability_Haptic"] = 21] = "Capability_Haptic";
    })(Enum_Capability || (exports2.Enum_Capability = Enum_Capability = {}));
    exports2.EnumEnum_Capability = schema_utils_1.Type.Enum(Enum_Capability);
    exports2.Capability = schema_utils_1.Type.KeyOfEnum(Enum_Capability, { $id: "Capability" });
    var RecoveryDeviceInputMethod;
    (function(RecoveryDeviceInputMethod2) {
      RecoveryDeviceInputMethod2[RecoveryDeviceInputMethod2["ScrambledWords"] = 0] = "ScrambledWords";
      RecoveryDeviceInputMethod2[RecoveryDeviceInputMethod2["Matrix"] = 1] = "Matrix";
    })(RecoveryDeviceInputMethod || (exports2.RecoveryDeviceInputMethod = RecoveryDeviceInputMethod = {}));
    exports2.EnumRecoveryDeviceInputMethod = schema_utils_1.Type.Enum(RecoveryDeviceInputMethod);
    var Enum_RecoveryType;
    (function(Enum_RecoveryType2) {
      Enum_RecoveryType2[Enum_RecoveryType2["NormalRecovery"] = 0] = "NormalRecovery";
      Enum_RecoveryType2[Enum_RecoveryType2["DryRun"] = 1] = "DryRun";
      Enum_RecoveryType2[Enum_RecoveryType2["UnlockRepeatedBackup"] = 2] = "UnlockRepeatedBackup";
    })(Enum_RecoveryType || (exports2.Enum_RecoveryType = Enum_RecoveryType = {}));
    exports2.EnumEnum_RecoveryType = schema_utils_1.Type.Enum(Enum_RecoveryType);
    exports2.RecoveryType = schema_utils_1.Type.KeyOfEnum(Enum_RecoveryType, { $id: "RecoveryType" });
    exports2.RecoveryDevice = schema_utils_1.Type.Object({
      word_count: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      passphrase_protection: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      pin_protection: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      language: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      label: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      enforce_wordlist: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      input_method: schema_utils_1.Type.Optional(exports2.EnumRecoveryDeviceInputMethod),
      u2f_counter: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      type: schema_utils_1.Type.Optional(exports2.RecoveryType)
    }, { $id: "RecoveryDevice" });
    exports2.Features = schema_utils_1.Type.Object({
      vendor: schema_utils_1.Type.String(),
      major_version: schema_utils_1.Type.Number(),
      minor_version: schema_utils_1.Type.Number(),
      patch_version: schema_utils_1.Type.Number(),
      bootloader_mode: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      device_id: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
      pin_protection: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      passphrase_protection: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      language: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
      label: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
      initialized: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      revision: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
      bootloader_hash: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
      imported: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      unlocked: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      _passphrase_cached: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      firmware_present: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      backup_availability: schema_utils_1.Type.Union([exports2.BackupAvailability, schema_utils_1.Type.Null()]),
      flags: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
      model: schema_utils_1.Type.String(),
      fw_major: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
      fw_minor: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
      fw_patch: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
      fw_vendor: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
      unfinished_backup: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      no_backup: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      recovery_status: schema_utils_1.Type.Union([exports2.RecoveryStatus, schema_utils_1.Type.Null()]),
      capabilities: schema_utils_1.Type.Array(exports2.Capability),
      backup_type: schema_utils_1.Type.Union([exports2.BackupType, schema_utils_1.Type.Null()]),
      sd_card_present: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      sd_protection: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      wipe_code_protection: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      session_id: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Null()]),
      passphrase_always_on_device: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      safety_checks: schema_utils_1.Type.Union([exports2.SafetyCheckLevel, schema_utils_1.Type.Null()]),
      auto_lock_delay_ms: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
      display_rotation: schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.Null()]),
      experimental_features: schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Null()]),
      busy: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      homescreen_format: schema_utils_1.Type.Optional(exports2.HomescreenFormat),
      hide_passphrase_from_host: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      internal_model: exports2.EnumDeviceModelInternal,
      unit_color: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      unit_btconly: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      homescreen_width: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      homescreen_height: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      bootloader_locked: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      language_version_matches: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      unit_packaging: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      haptic_feedback: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      recovery_type: schema_utils_1.Type.Optional(exports2.RecoveryType),
      optiga_sec: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "Features" });
    exports2.LockDevice = schema_utils_1.Type.Object({}, { $id: "LockDevice" });
    exports2.SetBusy = schema_utils_1.Type.Object({
      expiry_ms: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "SetBusy" });
    exports2.EndSession = schema_utils_1.Type.Object({}, { $id: "EndSession" });
    exports2.ApplySettings = schema_utils_1.Type.Object({
      language: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      label: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      use_passphrase: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      homescreen: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      _passphrase_source: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      auto_lock_delay_ms: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      display_rotation: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      passphrase_always_on_device: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      safety_checks: schema_utils_1.Type.Optional(exports2.SafetyCheckLevel),
      experimental_features: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      hide_passphrase_from_host: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      haptic_feedback: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "ApplySettings" });
    exports2.ChangeLanguage = schema_utils_1.Type.Object({
      data_length: schema_utils_1.Type.Number(),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "ChangeLanguage" });
    exports2.TranslationDataRequest = schema_utils_1.Type.Object({
      data_length: schema_utils_1.Type.Number(),
      data_offset: schema_utils_1.Type.Number()
    }, { $id: "TranslationDataRequest" });
    exports2.TranslationDataAck = schema_utils_1.Type.Object({
      data_chunk: schema_utils_1.Type.String()
    }, { $id: "TranslationDataAck" });
    exports2.ApplyFlags = schema_utils_1.Type.Object({
      flags: schema_utils_1.Type.Number()
    }, { $id: "ApplyFlags" });
    exports2.ChangePin = schema_utils_1.Type.Object({
      remove: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "ChangePin" });
    exports2.ChangeWipeCode = schema_utils_1.Type.Object({
      remove: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "ChangeWipeCode" });
    var SdProtectOperationType;
    (function(SdProtectOperationType2) {
      SdProtectOperationType2[SdProtectOperationType2["DISABLE"] = 0] = "DISABLE";
      SdProtectOperationType2[SdProtectOperationType2["ENABLE"] = 1] = "ENABLE";
      SdProtectOperationType2[SdProtectOperationType2["REFRESH"] = 2] = "REFRESH";
    })(SdProtectOperationType || (exports2.SdProtectOperationType = SdProtectOperationType = {}));
    exports2.EnumSdProtectOperationType = schema_utils_1.Type.Enum(SdProtectOperationType);
    exports2.SdProtect = schema_utils_1.Type.Object({
      operation: exports2.EnumSdProtectOperationType
    }, { $id: "SdProtect" });
    exports2.Ping = schema_utils_1.Type.Object({
      message: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      button_protection: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "Ping" });
    exports2.Cancel = schema_utils_1.Type.Object({}, { $id: "Cancel" });
    exports2.GetEntropy = schema_utils_1.Type.Object({
      size: schema_utils_1.Type.Number()
    }, { $id: "GetEntropy" });
    exports2.Entropy = schema_utils_1.Type.Object({
      entropy: schema_utils_1.Type.String()
    }, { $id: "Entropy" });
    exports2.GetFirmwareHash = schema_utils_1.Type.Object({
      challenge: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "GetFirmwareHash" });
    exports2.FirmwareHash = schema_utils_1.Type.Object({
      hash: schema_utils_1.Type.String()
    }, { $id: "FirmwareHash" });
    exports2.AuthenticateDevice = schema_utils_1.Type.Object({
      challenge: schema_utils_1.Type.String()
    }, { $id: "AuthenticateDevice" });
    exports2.AuthenticityProof = schema_utils_1.Type.Object({
      certificates: schema_utils_1.Type.Array(schema_utils_1.Type.String()),
      signature: schema_utils_1.Type.String()
    }, { $id: "AuthenticityProof" });
    exports2.WipeDevice = schema_utils_1.Type.Object({}, { $id: "WipeDevice" });
    exports2.ResetDevice = schema_utils_1.Type.Object({
      display_random: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      strength: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      passphrase_protection: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      pin_protection: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      language: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      label: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      u2f_counter: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      skip_backup: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      no_backup: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      backup_type: schema_utils_1.Type.Optional(exports2.EnumEnum_BackupType)
    }, { $id: "ResetDevice" });
    exports2.Slip39Group = schema_utils_1.Type.Object({
      member_threshold: schema_utils_1.Type.Number(),
      member_count: schema_utils_1.Type.Number()
    }, { $id: "Slip39Group" });
    exports2.BackupDevice = schema_utils_1.Type.Object({
      group_threshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      groups: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.Slip39Group))
    }, { $id: "BackupDevice" });
    exports2.EntropyRequest = schema_utils_1.Type.Object({}, { $id: "EntropyRequest" });
    exports2.EntropyAck = schema_utils_1.Type.Object({
      entropy: schema_utils_1.Type.String()
    }, { $id: "EntropyAck" });
    var Enum_WordRequestType;
    (function(Enum_WordRequestType2) {
      Enum_WordRequestType2[Enum_WordRequestType2["WordRequestType_Plain"] = 0] = "WordRequestType_Plain";
      Enum_WordRequestType2[Enum_WordRequestType2["WordRequestType_Matrix9"] = 1] = "WordRequestType_Matrix9";
      Enum_WordRequestType2[Enum_WordRequestType2["WordRequestType_Matrix6"] = 2] = "WordRequestType_Matrix6";
    })(Enum_WordRequestType || (exports2.Enum_WordRequestType = Enum_WordRequestType = {}));
    exports2.EnumEnum_WordRequestType = schema_utils_1.Type.Enum(Enum_WordRequestType);
    exports2.WordRequestType = schema_utils_1.Type.KeyOfEnum(Enum_WordRequestType, { $id: "WordRequestType" });
    exports2.WordRequest = schema_utils_1.Type.Object({
      type: exports2.WordRequestType
    }, { $id: "WordRequest" });
    exports2.WordAck = schema_utils_1.Type.Object({
      word: schema_utils_1.Type.String()
    }, { $id: "WordAck" });
    exports2.SetU2FCounter = schema_utils_1.Type.Object({
      u2f_counter: schema_utils_1.Type.Number()
    }, { $id: "SetU2FCounter" });
    exports2.GetNextU2FCounter = schema_utils_1.Type.Object({}, { $id: "GetNextU2FCounter" });
    exports2.NextU2FCounter = schema_utils_1.Type.Object({
      u2f_counter: schema_utils_1.Type.Number()
    }, { $id: "NextU2FCounter" });
    exports2.DoPreauthorized = schema_utils_1.Type.Object({}, { $id: "DoPreauthorized" });
    exports2.PreauthorizedRequest = schema_utils_1.Type.Object({}, { $id: "PreauthorizedRequest" });
    exports2.CancelAuthorization = schema_utils_1.Type.Object({}, { $id: "CancelAuthorization" });
    var BootCommand;
    (function(BootCommand2) {
      BootCommand2[BootCommand2["STOP_AND_WAIT"] = 0] = "STOP_AND_WAIT";
      BootCommand2[BootCommand2["INSTALL_UPGRADE"] = 1] = "INSTALL_UPGRADE";
    })(BootCommand || (exports2.BootCommand = BootCommand = {}));
    exports2.EnumBootCommand = schema_utils_1.Type.Enum(BootCommand);
    exports2.RebootToBootloader = schema_utils_1.Type.Object({
      boot_command: schema_utils_1.Type.Optional(exports2.EnumBootCommand),
      firmware_header: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      language_data_length: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "RebootToBootloader" });
    exports2.GetNonce = schema_utils_1.Type.Object({}, { $id: "GetNonce" });
    exports2.Nonce = schema_utils_1.Type.Object({
      nonce: schema_utils_1.Type.String()
    }, { $id: "Nonce" });
    exports2.UnlockPath = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      mac: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "UnlockPath" });
    exports2.UnlockedPathRequest = schema_utils_1.Type.Object({
      mac: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "UnlockedPathRequest" });
    exports2.ShowDeviceTutorial = schema_utils_1.Type.Object({}, { $id: "ShowDeviceTutorial" });
    exports2.UnlockBootloader = schema_utils_1.Type.Object({}, { $id: "UnlockBootloader" });
    exports2.SetBrightness = schema_utils_1.Type.Object({
      value: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "SetBrightness" });
    var MoneroNetworkType;
    (function(MoneroNetworkType2) {
      MoneroNetworkType2[MoneroNetworkType2["MAINNET"] = 0] = "MAINNET";
      MoneroNetworkType2[MoneroNetworkType2["TESTNET"] = 1] = "TESTNET";
      MoneroNetworkType2[MoneroNetworkType2["STAGENET"] = 2] = "STAGENET";
      MoneroNetworkType2[MoneroNetworkType2["FAKECHAIN"] = 3] = "FAKECHAIN";
    })(MoneroNetworkType || (exports2.MoneroNetworkType = MoneroNetworkType = {}));
    exports2.EnumMoneroNetworkType = schema_utils_1.Type.Enum(MoneroNetworkType);
    exports2.NEMGetAddress = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      network: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "NEMGetAddress" });
    exports2.NEMAddress = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String()
    }, { $id: "NEMAddress" });
    exports2.NEMTransactionCommon = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
      network: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      timestamp: schema_utils_1.Type.Number(),
      fee: schema_utils_1.Type.Uint(),
      deadline: schema_utils_1.Type.Number(),
      signer: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "NEMTransactionCommon" });
    exports2.NEMMosaic = schema_utils_1.Type.Object({
      namespace: schema_utils_1.Type.String(),
      mosaic: schema_utils_1.Type.String(),
      quantity: schema_utils_1.Type.Number()
    }, { $id: "NEMMosaic" });
    exports2.NEMTransfer = schema_utils_1.Type.Object({
      recipient: schema_utils_1.Type.String(),
      amount: schema_utils_1.Type.Uint(),
      payload: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      public_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      mosaics: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.NEMMosaic))
    }, { $id: "NEMTransfer" });
    exports2.NEMProvisionNamespace = schema_utils_1.Type.Object({
      namespace: schema_utils_1.Type.String(),
      parent: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      sink: schema_utils_1.Type.String(),
      fee: schema_utils_1.Type.Uint()
    }, { $id: "NEMProvisionNamespace" });
    var NEMMosaicLevy;
    (function(NEMMosaicLevy2) {
      NEMMosaicLevy2[NEMMosaicLevy2["MosaicLevy_Absolute"] = 1] = "MosaicLevy_Absolute";
      NEMMosaicLevy2[NEMMosaicLevy2["MosaicLevy_Percentile"] = 2] = "MosaicLevy_Percentile";
    })(NEMMosaicLevy || (exports2.NEMMosaicLevy = NEMMosaicLevy = {}));
    exports2.EnumNEMMosaicLevy = schema_utils_1.Type.Enum(NEMMosaicLevy);
    exports2.NEMMosaicDefinition = schema_utils_1.Type.Object({
      name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      ticker: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      namespace: schema_utils_1.Type.String(),
      mosaic: schema_utils_1.Type.String(),
      divisibility: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      levy: schema_utils_1.Type.Optional(exports2.EnumNEMMosaicLevy),
      fee: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      levy_address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      levy_namespace: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      levy_mosaic: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      supply: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      mutable_supply: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      transferable: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      description: schema_utils_1.Type.String(),
      networks: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number()))
    }, { $id: "NEMMosaicDefinition" });
    exports2.NEMMosaicCreation = schema_utils_1.Type.Object({
      definition: exports2.NEMMosaicDefinition,
      sink: schema_utils_1.Type.String(),
      fee: schema_utils_1.Type.Uint()
    }, { $id: "NEMMosaicCreation" });
    var NEMSupplyChangeType;
    (function(NEMSupplyChangeType2) {
      NEMSupplyChangeType2[NEMSupplyChangeType2["SupplyChange_Increase"] = 1] = "SupplyChange_Increase";
      NEMSupplyChangeType2[NEMSupplyChangeType2["SupplyChange_Decrease"] = 2] = "SupplyChange_Decrease";
    })(NEMSupplyChangeType || (exports2.NEMSupplyChangeType = NEMSupplyChangeType = {}));
    exports2.EnumNEMSupplyChangeType = schema_utils_1.Type.Enum(NEMSupplyChangeType);
    exports2.NEMMosaicSupplyChange = schema_utils_1.Type.Object({
      namespace: schema_utils_1.Type.String(),
      mosaic: schema_utils_1.Type.String(),
      type: exports2.EnumNEMSupplyChangeType,
      delta: schema_utils_1.Type.Number()
    }, { $id: "NEMMosaicSupplyChange" });
    var NEMModificationType;
    (function(NEMModificationType2) {
      NEMModificationType2[NEMModificationType2["CosignatoryModification_Add"] = 1] = "CosignatoryModification_Add";
      NEMModificationType2[NEMModificationType2["CosignatoryModification_Delete"] = 2] = "CosignatoryModification_Delete";
    })(NEMModificationType || (exports2.NEMModificationType = NEMModificationType = {}));
    exports2.EnumNEMModificationType = schema_utils_1.Type.Enum(NEMModificationType);
    exports2.NEMCosignatoryModification = schema_utils_1.Type.Object({
      type: exports2.EnumNEMModificationType,
      public_key: schema_utils_1.Type.String()
    }, { $id: "NEMCosignatoryModification" });
    exports2.NEMAggregateModification = schema_utils_1.Type.Object({
      modifications: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.NEMCosignatoryModification)),
      relative_change: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "NEMAggregateModification" });
    var NEMImportanceTransferMode;
    (function(NEMImportanceTransferMode2) {
      NEMImportanceTransferMode2[NEMImportanceTransferMode2["ImportanceTransfer_Activate"] = 1] = "ImportanceTransfer_Activate";
      NEMImportanceTransferMode2[NEMImportanceTransferMode2["ImportanceTransfer_Deactivate"] = 2] = "ImportanceTransfer_Deactivate";
    })(NEMImportanceTransferMode || (exports2.NEMImportanceTransferMode = NEMImportanceTransferMode = {}));
    exports2.EnumNEMImportanceTransferMode = schema_utils_1.Type.Enum(NEMImportanceTransferMode);
    exports2.NEMImportanceTransfer = schema_utils_1.Type.Object({
      mode: exports2.EnumNEMImportanceTransferMode,
      public_key: schema_utils_1.Type.String()
    }, { $id: "NEMImportanceTransfer" });
    exports2.NEMSignTx = schema_utils_1.Type.Object({
      transaction: exports2.NEMTransactionCommon,
      multisig: schema_utils_1.Type.Optional(exports2.NEMTransactionCommon),
      transfer: schema_utils_1.Type.Optional(exports2.NEMTransfer),
      cosigning: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      provision_namespace: schema_utils_1.Type.Optional(exports2.NEMProvisionNamespace),
      mosaic_creation: schema_utils_1.Type.Optional(exports2.NEMMosaicCreation),
      supply_change: schema_utils_1.Type.Optional(exports2.NEMMosaicSupplyChange),
      aggregate_modification: schema_utils_1.Type.Optional(exports2.NEMAggregateModification),
      importance_transfer: schema_utils_1.Type.Optional(exports2.NEMImportanceTransfer),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "NEMSignTx" });
    exports2.NEMSignedTx = schema_utils_1.Type.Object({
      data: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String()
    }, { $id: "NEMSignedTx" });
    exports2.NEMDecryptMessage = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      network: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      public_key: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      payload: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "NEMDecryptMessage" });
    exports2.NEMDecryptedMessage = schema_utils_1.Type.Object({
      payload: schema_utils_1.Type.String()
    }, { $id: "NEMDecryptedMessage" });
    exports2.RippleGetAddress = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "RippleGetAddress" });
    exports2.RippleAddress = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String()
    }, { $id: "RippleAddress" });
    exports2.RipplePayment = schema_utils_1.Type.Object({
      amount: schema_utils_1.Type.Uint(),
      destination: schema_utils_1.Type.String(),
      destination_tag: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "RipplePayment" });
    exports2.RippleSignTx = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      fee: schema_utils_1.Type.Uint(),
      flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      sequence: schema_utils_1.Type.Number(),
      last_ledger_sequence: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      payment: exports2.RipplePayment,
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "RippleSignTx" });
    exports2.RippleSignedTx = schema_utils_1.Type.Object({
      signature: schema_utils_1.Type.String(),
      serialized_tx: schema_utils_1.Type.String()
    }, { $id: "RippleSignedTx" });
    exports2.SolanaGetPublicKey = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "SolanaGetPublicKey" });
    exports2.SolanaPublicKey = schema_utils_1.Type.Object({
      public_key: schema_utils_1.Type.String()
    }, { $id: "SolanaPublicKey" });
    exports2.SolanaGetAddress = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "SolanaGetAddress" });
    exports2.SolanaAddress = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String()
    }, { $id: "SolanaAddress" });
    exports2.SolanaTxTokenAccountInfo = schema_utils_1.Type.Object({
      base_address: schema_utils_1.Type.String(),
      token_program: schema_utils_1.Type.String(),
      token_mint: schema_utils_1.Type.String(),
      token_account: schema_utils_1.Type.String()
    }, { $id: "SolanaTxTokenAccountInfo" });
    exports2.SolanaTxAdditionalInfo = schema_utils_1.Type.Object({
      token_accounts_infos: schema_utils_1.Type.Array(exports2.SolanaTxTokenAccountInfo)
    }, { $id: "SolanaTxAdditionalInfo" });
    exports2.SolanaSignTx = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      serialized_tx: schema_utils_1.Type.String(),
      additional_info: schema_utils_1.Type.Optional(exports2.SolanaTxAdditionalInfo)
    }, { $id: "SolanaSignTx" });
    exports2.SolanaTxSignature = schema_utils_1.Type.Object({
      signature: schema_utils_1.Type.String()
    }, { $id: "SolanaTxSignature" });
    var StellarAssetType;
    (function(StellarAssetType2) {
      StellarAssetType2[StellarAssetType2["NATIVE"] = 0] = "NATIVE";
      StellarAssetType2[StellarAssetType2["ALPHANUM4"] = 1] = "ALPHANUM4";
      StellarAssetType2[StellarAssetType2["ALPHANUM12"] = 2] = "ALPHANUM12";
    })(StellarAssetType || (exports2.StellarAssetType = StellarAssetType = {}));
    exports2.EnumStellarAssetType = schema_utils_1.Type.Enum(StellarAssetType);
    exports2.StellarAsset = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Union([
        schema_utils_1.Type.Literal(0),
        schema_utils_1.Type.Literal(1),
        schema_utils_1.Type.Literal(2),
        schema_utils_1.Type.Literal("NATIVE"),
        schema_utils_1.Type.Literal("ALPHANUM4"),
        schema_utils_1.Type.Literal("ALPHANUM12")
      ]),
      code: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      issuer: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }, { $id: "StellarAsset" });
    exports2.StellarGetAddress = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "StellarGetAddress" });
    exports2.StellarAddress = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String()
    }, { $id: "StellarAddress" });
    var StellarMemoType;
    (function(StellarMemoType2) {
      StellarMemoType2[StellarMemoType2["NONE"] = 0] = "NONE";
      StellarMemoType2[StellarMemoType2["TEXT"] = 1] = "TEXT";
      StellarMemoType2[StellarMemoType2["ID"] = 2] = "ID";
      StellarMemoType2[StellarMemoType2["HASH"] = 3] = "HASH";
      StellarMemoType2[StellarMemoType2["RETURN"] = 4] = "RETURN";
    })(StellarMemoType || (exports2.StellarMemoType = StellarMemoType = {}));
    exports2.EnumStellarMemoType = schema_utils_1.Type.Enum(StellarMemoType);
    exports2.StellarSignTx = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      network_passphrase: schema_utils_1.Type.String(),
      source_account: schema_utils_1.Type.String(),
      fee: schema_utils_1.Type.Uint(),
      sequence_number: schema_utils_1.Type.Uint(),
      timebounds_start: schema_utils_1.Type.Number(),
      timebounds_end: schema_utils_1.Type.Number(),
      memo_type: exports2.EnumStellarMemoType,
      memo_text: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      memo_id: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      memo_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.Buffer(), schema_utils_1.Type.String()])),
      num_operations: schema_utils_1.Type.Number()
    }, { $id: "StellarSignTx" });
    exports2.StellarTxOpRequest = schema_utils_1.Type.Object({}, { $id: "StellarTxOpRequest" });
    exports2.StellarPaymentOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      destination_account: schema_utils_1.Type.String(),
      asset: exports2.StellarAsset,
      amount: schema_utils_1.Type.Uint()
    }, { $id: "StellarPaymentOp" });
    exports2.StellarCreateAccountOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      new_account: schema_utils_1.Type.String(),
      starting_balance: schema_utils_1.Type.Uint()
    }, { $id: "StellarCreateAccountOp" });
    exports2.StellarPathPaymentStrictReceiveOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      send_asset: exports2.StellarAsset,
      send_max: schema_utils_1.Type.Uint(),
      destination_account: schema_utils_1.Type.String(),
      destination_asset: exports2.StellarAsset,
      destination_amount: schema_utils_1.Type.Uint(),
      paths: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.StellarAsset))
    }, { $id: "StellarPathPaymentStrictReceiveOp" });
    exports2.StellarPathPaymentStrictSendOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      send_asset: exports2.StellarAsset,
      send_amount: schema_utils_1.Type.Uint(),
      destination_account: schema_utils_1.Type.String(),
      destination_asset: exports2.StellarAsset,
      destination_min: schema_utils_1.Type.Uint(),
      paths: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.StellarAsset))
    }, { $id: "StellarPathPaymentStrictSendOp" });
    exports2.StellarManageSellOfferOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      selling_asset: exports2.StellarAsset,
      buying_asset: exports2.StellarAsset,
      amount: schema_utils_1.Type.Uint(),
      price_n: schema_utils_1.Type.Number(),
      price_d: schema_utils_1.Type.Number(),
      offer_id: schema_utils_1.Type.Uint()
    }, { $id: "StellarManageSellOfferOp" });
    exports2.StellarManageBuyOfferOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      selling_asset: exports2.StellarAsset,
      buying_asset: exports2.StellarAsset,
      amount: schema_utils_1.Type.Uint(),
      price_n: schema_utils_1.Type.Number(),
      price_d: schema_utils_1.Type.Number(),
      offer_id: schema_utils_1.Type.Uint()
    }, { $id: "StellarManageBuyOfferOp" });
    exports2.StellarCreatePassiveSellOfferOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      selling_asset: exports2.StellarAsset,
      buying_asset: exports2.StellarAsset,
      amount: schema_utils_1.Type.Uint(),
      price_n: schema_utils_1.Type.Number(),
      price_d: schema_utils_1.Type.Number()
    }, { $id: "StellarCreatePassiveSellOfferOp" });
    var StellarSignerType;
    (function(StellarSignerType2) {
      StellarSignerType2[StellarSignerType2["ACCOUNT"] = 0] = "ACCOUNT";
      StellarSignerType2[StellarSignerType2["PRE_AUTH"] = 1] = "PRE_AUTH";
      StellarSignerType2[StellarSignerType2["HASH"] = 2] = "HASH";
    })(StellarSignerType || (exports2.StellarSignerType = StellarSignerType = {}));
    exports2.EnumStellarSignerType = schema_utils_1.Type.Enum(StellarSignerType);
    exports2.StellarSetOptionsOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      inflation_destination_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      clear_flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      set_flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      master_weight: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      low_threshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      medium_threshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      high_threshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      home_domain: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      signer_type: schema_utils_1.Type.Optional(exports2.EnumStellarSignerType),
      signer_key: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.Buffer(), schema_utils_1.Type.String()])),
      signer_weight: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    }, { $id: "StellarSetOptionsOp" });
    exports2.StellarChangeTrustOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      asset: exports2.StellarAsset,
      limit: schema_utils_1.Type.Uint()
    }, { $id: "StellarChangeTrustOp" });
    exports2.StellarAllowTrustOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      trusted_account: schema_utils_1.Type.String(),
      asset_type: exports2.EnumStellarAssetType,
      asset_code: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      is_authorized: schema_utils_1.Type.Boolean()
    }, { $id: "StellarAllowTrustOp" });
    exports2.StellarAccountMergeOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      destination_account: schema_utils_1.Type.String()
    }, { $id: "StellarAccountMergeOp" });
    exports2.StellarManageDataOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      key: schema_utils_1.Type.String(),
      value: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.Buffer(), schema_utils_1.Type.String()]))
    }, { $id: "StellarManageDataOp" });
    exports2.StellarBumpSequenceOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      bump_to: schema_utils_1.Type.Uint()
    }, { $id: "StellarBumpSequenceOp" });
    exports2.StellarClaimClaimableBalanceOp = schema_utils_1.Type.Object({
      source_account: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      balance_id: schema_utils_1.Type.String()
    }, { $id: "StellarClaimClaimableBalanceOp" });
    exports2.StellarSignedTx = schema_utils_1.Type.Object({
      public_key: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String()
    }, { $id: "StellarSignedTx" });
    exports2.TezosGetAddress = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "TezosGetAddress" });
    exports2.TezosAddress = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String()
    }, { $id: "TezosAddress" });
    exports2.TezosGetPublicKey = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      show_display: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "TezosGetPublicKey" });
    exports2.TezosPublicKey = schema_utils_1.Type.Object({
      public_key: schema_utils_1.Type.String()
    }, { $id: "TezosPublicKey" });
    var TezosContractType;
    (function(TezosContractType2) {
      TezosContractType2[TezosContractType2["Implicit"] = 0] = "Implicit";
      TezosContractType2[TezosContractType2["Originated"] = 1] = "Originated";
    })(TezosContractType || (exports2.TezosContractType = TezosContractType = {}));
    exports2.EnumTezosContractType = schema_utils_1.Type.Enum(TezosContractType);
    exports2.TezosContractID = schema_utils_1.Type.Object({
      tag: schema_utils_1.Type.Number(),
      hash: schema_utils_1.Type.Uint8Array()
    }, { $id: "TezosContractID" });
    exports2.TezosRevealOp = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.Uint8Array(),
      fee: schema_utils_1.Type.Uint(),
      counter: schema_utils_1.Type.Number(),
      gas_limit: schema_utils_1.Type.Number(),
      storage_limit: schema_utils_1.Type.Number(),
      public_key: schema_utils_1.Type.Uint8Array()
    }, { $id: "TezosRevealOp" });
    exports2.TezosManagerTransfer = schema_utils_1.Type.Object({
      destination: exports2.TezosContractID,
      amount: schema_utils_1.Type.Uint()
    }, { $id: "TezosManagerTransfer" });
    exports2.TezosParametersManager = schema_utils_1.Type.Object({
      set_delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint8Array()),
      cancel_delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      transfer: schema_utils_1.Type.Optional(exports2.TezosManagerTransfer)
    }, { $id: "TezosParametersManager" });
    exports2.TezosTransactionOp = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.Uint8Array(),
      fee: schema_utils_1.Type.Uint(),
      counter: schema_utils_1.Type.Number(),
      gas_limit: schema_utils_1.Type.Number(),
      storage_limit: schema_utils_1.Type.Number(),
      amount: schema_utils_1.Type.Uint(),
      destination: exports2.TezosContractID,
      parameters: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
      parameters_manager: schema_utils_1.Type.Optional(exports2.TezosParametersManager)
    }, { $id: "TezosTransactionOp" });
    exports2.TezosOriginationOp = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.Uint8Array(),
      fee: schema_utils_1.Type.Uint(),
      counter: schema_utils_1.Type.Number(),
      gas_limit: schema_utils_1.Type.Number(),
      storage_limit: schema_utils_1.Type.Number(),
      manager_pubkey: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      balance: schema_utils_1.Type.Number(),
      spendable: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      delegatable: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint8Array()),
      script: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Array(schema_utils_1.Type.Number())])
    }, { $id: "TezosOriginationOp" });
    exports2.TezosDelegationOp = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.Uint8Array(),
      fee: schema_utils_1.Type.Uint(),
      counter: schema_utils_1.Type.Number(),
      gas_limit: schema_utils_1.Type.Number(),
      storage_limit: schema_utils_1.Type.Number(),
      delegate: schema_utils_1.Type.Uint8Array()
    }, { $id: "TezosDelegationOp" });
    exports2.TezosProposalOp = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.String(),
      period: schema_utils_1.Type.Number(),
      proposals: schema_utils_1.Type.Array(schema_utils_1.Type.String())
    }, { $id: "TezosProposalOp" });
    var TezosBallotType;
    (function(TezosBallotType2) {
      TezosBallotType2[TezosBallotType2["Yay"] = 0] = "Yay";
      TezosBallotType2[TezosBallotType2["Nay"] = 1] = "Nay";
      TezosBallotType2[TezosBallotType2["Pass"] = 2] = "Pass";
    })(TezosBallotType || (exports2.TezosBallotType = TezosBallotType = {}));
    exports2.EnumTezosBallotType = schema_utils_1.Type.Enum(TezosBallotType);
    exports2.TezosBallotOp = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.String(),
      period: schema_utils_1.Type.Number(),
      proposal: schema_utils_1.Type.String(),
      ballot: exports2.EnumTezosBallotType
    }, { $id: "TezosBallotOp" });
    exports2.TezosSignTx = schema_utils_1.Type.Object({
      address_n: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      branch: schema_utils_1.Type.Uint8Array(),
      reveal: schema_utils_1.Type.Optional(exports2.TezosRevealOp),
      transaction: schema_utils_1.Type.Optional(exports2.TezosTransactionOp),
      origination: schema_utils_1.Type.Optional(exports2.TezosOriginationOp),
      delegation: schema_utils_1.Type.Optional(exports2.TezosDelegationOp),
      proposal: schema_utils_1.Type.Optional(exports2.TezosProposalOp),
      ballot: schema_utils_1.Type.Optional(exports2.TezosBallotOp),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    }, { $id: "TezosSignTx" });
    exports2.TezosSignedTx = schema_utils_1.Type.Object({
      signature: schema_utils_1.Type.String(),
      sig_op_contents: schema_utils_1.Type.String(),
      operation_hash: schema_utils_1.Type.String()
    }, { $id: "TezosSignedTx" });
    exports2.experimental_message = schema_utils_1.Type.Object({}, { $id: "experimental_message" });
    exports2.experimental_field = schema_utils_1.Type.Object({}, { $id: "experimental_field" });
    exports2.MessageType = schema_utils_1.Type.Object({
      BinanceGetAddress: exports2.BinanceGetAddress,
      BinanceAddress: exports2.BinanceAddress,
      BinanceGetPublicKey: exports2.BinanceGetPublicKey,
      BinancePublicKey: exports2.BinancePublicKey,
      BinanceSignTx: exports2.BinanceSignTx,
      BinanceTxRequest: exports2.BinanceTxRequest,
      BinanceCoin: exports2.BinanceCoin,
      BinanceInputOutput: exports2.BinanceInputOutput,
      BinanceTransferMsg: exports2.BinanceTransferMsg,
      BinanceOrderMsg: exports2.BinanceOrderMsg,
      BinanceCancelMsg: exports2.BinanceCancelMsg,
      BinanceSignedTx: exports2.BinanceSignedTx,
      HDNodeType: exports2.HDNodeType,
      HDNodePathType: exports2.HDNodePathType,
      MultisigRedeemScriptType: exports2.MultisigRedeemScriptType,
      GetPublicKey: exports2.GetPublicKey,
      PublicKey: exports2.PublicKey,
      GetAddress: exports2.GetAddress,
      Address: exports2.Address,
      GetOwnershipId: exports2.GetOwnershipId,
      OwnershipId: exports2.OwnershipId,
      SignMessage: exports2.SignMessage,
      MessageSignature: exports2.MessageSignature,
      VerifyMessage: exports2.VerifyMessage,
      CoinJoinRequest: exports2.CoinJoinRequest,
      SignTx: exports2.SignTx,
      TxRequestDetailsType: exports2.TxRequestDetailsType,
      TxRequestSerializedType: exports2.TxRequestSerializedType,
      TxRequest: exports2.TxRequest,
      TxInputType: exports2.TxInputType,
      TxOutputBinType: exports2.TxOutputBinType,
      TxOutputType: exports2.TxOutputType,
      PrevTx: exports2.PrevTx,
      PrevInput: exports2.PrevInput,
      PrevOutput: exports2.PrevOutput,
      TextMemo: exports2.TextMemo,
      RefundMemo: exports2.RefundMemo,
      CoinPurchaseMemo: exports2.CoinPurchaseMemo,
      PaymentRequestMemo: exports2.PaymentRequestMemo,
      TxAckPaymentRequest: exports2.TxAckPaymentRequest,
      TxAck: exports2.TxAck,
      TxAckInputWrapper: exports2.TxAckInputWrapper,
      TxAckInput: exports2.TxAckInput,
      TxAckOutputWrapper: exports2.TxAckOutputWrapper,
      TxAckOutput: exports2.TxAckOutput,
      TxAckPrevMeta: exports2.TxAckPrevMeta,
      TxAckPrevInputWrapper: exports2.TxAckPrevInputWrapper,
      TxAckPrevInput: exports2.TxAckPrevInput,
      TxAckPrevOutputWrapper: exports2.TxAckPrevOutputWrapper,
      TxAckPrevOutput: exports2.TxAckPrevOutput,
      TxAckPrevExtraDataWrapper: exports2.TxAckPrevExtraDataWrapper,
      TxAckPrevExtraData: exports2.TxAckPrevExtraData,
      GetOwnershipProof: exports2.GetOwnershipProof,
      OwnershipProof: exports2.OwnershipProof,
      AuthorizeCoinJoin: exports2.AuthorizeCoinJoin,
      FirmwareErase: exports2.FirmwareErase,
      FirmwareRequest: exports2.FirmwareRequest,
      FirmwareUpload: exports2.FirmwareUpload,
      ProdTestT1: exports2.ProdTestT1,
      CardanoBlockchainPointerType: exports2.CardanoBlockchainPointerType,
      CardanoNativeScript: exports2.CardanoNativeScript,
      CardanoGetNativeScriptHash: exports2.CardanoGetNativeScriptHash,
      CardanoNativeScriptHash: exports2.CardanoNativeScriptHash,
      CardanoAddressParametersType: exports2.CardanoAddressParametersType,
      CardanoGetAddress: exports2.CardanoGetAddress,
      CardanoAddress: exports2.CardanoAddress,
      CardanoGetPublicKey: exports2.CardanoGetPublicKey,
      CardanoPublicKey: exports2.CardanoPublicKey,
      CardanoSignTxInit: exports2.CardanoSignTxInit,
      CardanoTxInput: exports2.CardanoTxInput,
      CardanoTxOutput: exports2.CardanoTxOutput,
      CardanoAssetGroup: exports2.CardanoAssetGroup,
      CardanoToken: exports2.CardanoToken,
      CardanoTxInlineDatumChunk: exports2.CardanoTxInlineDatumChunk,
      CardanoTxReferenceScriptChunk: exports2.CardanoTxReferenceScriptChunk,
      CardanoPoolOwner: exports2.CardanoPoolOwner,
      CardanoPoolRelayParameters: exports2.CardanoPoolRelayParameters,
      CardanoPoolMetadataType: exports2.CardanoPoolMetadataType,
      CardanoPoolParametersType: exports2.CardanoPoolParametersType,
      CardanoDRep: exports2.CardanoDRep,
      CardanoTxCertificate: exports2.CardanoTxCertificate,
      CardanoTxWithdrawal: exports2.CardanoTxWithdrawal,
      CardanoCVoteRegistrationDelegation: exports2.CardanoCVoteRegistrationDelegation,
      CardanoCVoteRegistrationParametersType: exports2.CardanoCVoteRegistrationParametersType,
      CardanoTxAuxiliaryData: exports2.CardanoTxAuxiliaryData,
      CardanoTxMint: exports2.CardanoTxMint,
      CardanoTxCollateralInput: exports2.CardanoTxCollateralInput,
      CardanoTxRequiredSigner: exports2.CardanoTxRequiredSigner,
      CardanoTxReferenceInput: exports2.CardanoTxReferenceInput,
      CardanoTxItemAck: exports2.CardanoTxItemAck,
      CardanoTxAuxiliaryDataSupplement: exports2.CardanoTxAuxiliaryDataSupplement,
      CardanoTxWitnessRequest: exports2.CardanoTxWitnessRequest,
      CardanoTxWitnessResponse: exports2.CardanoTxWitnessResponse,
      CardanoTxHostAck: exports2.CardanoTxHostAck,
      CardanoTxBodyHash: exports2.CardanoTxBodyHash,
      CardanoSignTxFinished: exports2.CardanoSignTxFinished,
      Success: exports2.Success,
      Failure: exports2.Failure,
      ButtonRequest: exports2.ButtonRequest,
      ButtonAck: exports2.ButtonAck,
      PinMatrixRequest: exports2.PinMatrixRequest,
      PinMatrixAck: exports2.PinMatrixAck,
      PassphraseRequest: exports2.PassphraseRequest,
      PassphraseAck: exports2.PassphraseAck,
      Deprecated_PassphraseStateRequest: exports2.Deprecated_PassphraseStateRequest,
      Deprecated_PassphraseStateAck: exports2.Deprecated_PassphraseStateAck,
      CipherKeyValue: exports2.CipherKeyValue,
      CipheredKeyValue: exports2.CipheredKeyValue,
      IdentityType: exports2.IdentityType,
      SignIdentity: exports2.SignIdentity,
      SignedIdentity: exports2.SignedIdentity,
      GetECDHSessionKey: exports2.GetECDHSessionKey,
      ECDHSessionKey: exports2.ECDHSessionKey,
      DebugLinkResetDebugEvents: exports2.DebugLinkResetDebugEvents,
      EosGetPublicKey: exports2.EosGetPublicKey,
      EosPublicKey: exports2.EosPublicKey,
      EosTxHeader: exports2.EosTxHeader,
      EosSignTx: exports2.EosSignTx,
      EosTxActionRequest: exports2.EosTxActionRequest,
      EosAsset: exports2.EosAsset,
      EosPermissionLevel: exports2.EosPermissionLevel,
      EosAuthorizationKey: exports2.EosAuthorizationKey,
      EosAuthorizationAccount: exports2.EosAuthorizationAccount,
      EosAuthorizationWait: exports2.EosAuthorizationWait,
      EosAuthorization: exports2.EosAuthorization,
      EosActionCommon: exports2.EosActionCommon,
      EosActionTransfer: exports2.EosActionTransfer,
      EosActionDelegate: exports2.EosActionDelegate,
      EosActionUndelegate: exports2.EosActionUndelegate,
      EosActionRefund: exports2.EosActionRefund,
      EosActionBuyRam: exports2.EosActionBuyRam,
      EosActionBuyRamBytes: exports2.EosActionBuyRamBytes,
      EosActionSellRam: exports2.EosActionSellRam,
      EosActionVoteProducer: exports2.EosActionVoteProducer,
      EosActionUpdateAuth: exports2.EosActionUpdateAuth,
      EosActionDeleteAuth: exports2.EosActionDeleteAuth,
      EosActionLinkAuth: exports2.EosActionLinkAuth,
      EosActionUnlinkAuth: exports2.EosActionUnlinkAuth,
      EosActionNewAccount: exports2.EosActionNewAccount,
      EosActionUnknown: exports2.EosActionUnknown,
      EosTxActionAck: exports2.EosTxActionAck,
      EosSignedTx: exports2.EosSignedTx,
      EthereumNetworkInfo: exports2.EthereumNetworkInfo,
      EthereumTokenInfo: exports2.EthereumTokenInfo,
      EthereumDefinitions: exports2.EthereumDefinitions,
      EthereumSignTypedData: exports2.EthereumSignTypedData,
      EthereumTypedDataStructRequest: exports2.EthereumTypedDataStructRequest,
      EthereumFieldType: exports2.EthereumFieldType,
      EthereumStructMember: exports2.EthereumStructMember,
      EthereumTypedDataStructAck: exports2.EthereumTypedDataStructAck,
      EthereumTypedDataValueRequest: exports2.EthereumTypedDataValueRequest,
      EthereumTypedDataValueAck: exports2.EthereumTypedDataValueAck,
      EthereumGetPublicKey: exports2.EthereumGetPublicKey,
      EthereumPublicKey: exports2.EthereumPublicKey,
      EthereumGetAddress: exports2.EthereumGetAddress,
      EthereumAddress: exports2.EthereumAddress,
      EthereumSignTx: exports2.EthereumSignTx,
      EthereumAccessList: exports2.EthereumAccessList,
      EthereumSignTxEIP1559: exports2.EthereumSignTxEIP1559,
      EthereumTxRequest: exports2.EthereumTxRequest,
      EthereumTxAck: exports2.EthereumTxAck,
      EthereumSignMessage: exports2.EthereumSignMessage,
      EthereumMessageSignature: exports2.EthereumMessageSignature,
      EthereumVerifyMessage: exports2.EthereumVerifyMessage,
      EthereumSignTypedHash: exports2.EthereumSignTypedHash,
      EthereumTypedDataSignature: exports2.EthereumTypedDataSignature,
      Initialize: exports2.Initialize,
      GetFeatures: exports2.GetFeatures,
      RecoveryDevice: exports2.RecoveryDevice,
      Features: exports2.Features,
      LockDevice: exports2.LockDevice,
      SetBusy: exports2.SetBusy,
      EndSession: exports2.EndSession,
      ApplySettings: exports2.ApplySettings,
      ChangeLanguage: exports2.ChangeLanguage,
      TranslationDataRequest: exports2.TranslationDataRequest,
      TranslationDataAck: exports2.TranslationDataAck,
      ApplyFlags: exports2.ApplyFlags,
      ChangePin: exports2.ChangePin,
      ChangeWipeCode: exports2.ChangeWipeCode,
      SdProtect: exports2.SdProtect,
      Ping: exports2.Ping,
      Cancel: exports2.Cancel,
      GetEntropy: exports2.GetEntropy,
      Entropy: exports2.Entropy,
      GetFirmwareHash: exports2.GetFirmwareHash,
      FirmwareHash: exports2.FirmwareHash,
      AuthenticateDevice: exports2.AuthenticateDevice,
      AuthenticityProof: exports2.AuthenticityProof,
      WipeDevice: exports2.WipeDevice,
      ResetDevice: exports2.ResetDevice,
      Slip39Group: exports2.Slip39Group,
      BackupDevice: exports2.BackupDevice,
      EntropyRequest: exports2.EntropyRequest,
      EntropyAck: exports2.EntropyAck,
      WordRequest: exports2.WordRequest,
      WordAck: exports2.WordAck,
      SetU2FCounter: exports2.SetU2FCounter,
      GetNextU2FCounter: exports2.GetNextU2FCounter,
      NextU2FCounter: exports2.NextU2FCounter,
      DoPreauthorized: exports2.DoPreauthorized,
      PreauthorizedRequest: exports2.PreauthorizedRequest,
      CancelAuthorization: exports2.CancelAuthorization,
      RebootToBootloader: exports2.RebootToBootloader,
      GetNonce: exports2.GetNonce,
      Nonce: exports2.Nonce,
      UnlockPath: exports2.UnlockPath,
      UnlockedPathRequest: exports2.UnlockedPathRequest,
      ShowDeviceTutorial: exports2.ShowDeviceTutorial,
      UnlockBootloader: exports2.UnlockBootloader,
      SetBrightness: exports2.SetBrightness,
      NEMGetAddress: exports2.NEMGetAddress,
      NEMAddress: exports2.NEMAddress,
      NEMTransactionCommon: exports2.NEMTransactionCommon,
      NEMMosaic: exports2.NEMMosaic,
      NEMTransfer: exports2.NEMTransfer,
      NEMProvisionNamespace: exports2.NEMProvisionNamespace,
      NEMMosaicDefinition: exports2.NEMMosaicDefinition,
      NEMMosaicCreation: exports2.NEMMosaicCreation,
      NEMMosaicSupplyChange: exports2.NEMMosaicSupplyChange,
      NEMCosignatoryModification: exports2.NEMCosignatoryModification,
      NEMAggregateModification: exports2.NEMAggregateModification,
      NEMImportanceTransfer: exports2.NEMImportanceTransfer,
      NEMSignTx: exports2.NEMSignTx,
      NEMSignedTx: exports2.NEMSignedTx,
      NEMDecryptMessage: exports2.NEMDecryptMessage,
      NEMDecryptedMessage: exports2.NEMDecryptedMessage,
      RippleGetAddress: exports2.RippleGetAddress,
      RippleAddress: exports2.RippleAddress,
      RipplePayment: exports2.RipplePayment,
      RippleSignTx: exports2.RippleSignTx,
      RippleSignedTx: exports2.RippleSignedTx,
      SolanaGetPublicKey: exports2.SolanaGetPublicKey,
      SolanaPublicKey: exports2.SolanaPublicKey,
      SolanaGetAddress: exports2.SolanaGetAddress,
      SolanaAddress: exports2.SolanaAddress,
      SolanaTxTokenAccountInfo: exports2.SolanaTxTokenAccountInfo,
      SolanaTxAdditionalInfo: exports2.SolanaTxAdditionalInfo,
      SolanaSignTx: exports2.SolanaSignTx,
      SolanaTxSignature: exports2.SolanaTxSignature,
      StellarAsset: exports2.StellarAsset,
      StellarGetAddress: exports2.StellarGetAddress,
      StellarAddress: exports2.StellarAddress,
      StellarSignTx: exports2.StellarSignTx,
      StellarTxOpRequest: exports2.StellarTxOpRequest,
      StellarPaymentOp: exports2.StellarPaymentOp,
      StellarCreateAccountOp: exports2.StellarCreateAccountOp,
      StellarPathPaymentStrictReceiveOp: exports2.StellarPathPaymentStrictReceiveOp,
      StellarPathPaymentStrictSendOp: exports2.StellarPathPaymentStrictSendOp,
      StellarManageSellOfferOp: exports2.StellarManageSellOfferOp,
      StellarManageBuyOfferOp: exports2.StellarManageBuyOfferOp,
      StellarCreatePassiveSellOfferOp: exports2.StellarCreatePassiveSellOfferOp,
      StellarSetOptionsOp: exports2.StellarSetOptionsOp,
      StellarChangeTrustOp: exports2.StellarChangeTrustOp,
      StellarAllowTrustOp: exports2.StellarAllowTrustOp,
      StellarAccountMergeOp: exports2.StellarAccountMergeOp,
      StellarManageDataOp: exports2.StellarManageDataOp,
      StellarBumpSequenceOp: exports2.StellarBumpSequenceOp,
      StellarClaimClaimableBalanceOp: exports2.StellarClaimClaimableBalanceOp,
      StellarSignedTx: exports2.StellarSignedTx,
      TezosGetAddress: exports2.TezosGetAddress,
      TezosAddress: exports2.TezosAddress,
      TezosGetPublicKey: exports2.TezosGetPublicKey,
      TezosPublicKey: exports2.TezosPublicKey,
      TezosContractID: exports2.TezosContractID,
      TezosRevealOp: exports2.TezosRevealOp,
      TezosManagerTransfer: exports2.TezosManagerTransfer,
      TezosParametersManager: exports2.TezosParametersManager,
      TezosTransactionOp: exports2.TezosTransactionOp,
      TezosOriginationOp: exports2.TezosOriginationOp,
      TezosDelegationOp: exports2.TezosDelegationOp,
      TezosProposalOp: exports2.TezosProposalOp,
      TezosBallotOp: exports2.TezosBallotOp,
      TezosSignTx: exports2.TezosSignTx,
      TezosSignedTx: exports2.TezosSignedTx,
      experimental_message: exports2.experimental_message,
      experimental_field: exports2.experimental_field
    }, { $id: "MessageType" });
  }
});

// node_modules/@trezor/protobuf/lib/index.js
var require_lib5 = __commonJS({
  "node_modules/@trezor/protobuf/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DeviceModelInternal = exports2.MessagesSchema = exports2.createMessageFromType = exports2.createMessageFromName = exports2.parseConfigure = exports2.Messages = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_decode(), exports2);
    tslib_1.__exportStar(require_encode(), exports2);
    exports2.Messages = tslib_1.__importStar(require_messages());
    tslib_1.__exportStar(require_types2(), exports2);
    var utils_1 = require_utils2();
    Object.defineProperty(exports2, "parseConfigure", { enumerable: true, get: function() {
      return utils_1.parseConfigure;
    } });
    Object.defineProperty(exports2, "createMessageFromName", { enumerable: true, get: function() {
      return utils_1.createMessageFromName;
    } });
    Object.defineProperty(exports2, "createMessageFromType", { enumerable: true, get: function() {
      return utils_1.createMessageFromType;
    } });
    exports2.MessagesSchema = tslib_1.__importStar(require_messages_schema());
    var messages_schema_1 = require_messages_schema();
    Object.defineProperty(exports2, "DeviceModelInternal", { enumerable: true, get: function() {
      return messages_schema_1.DeviceModelInternal;
    } });
  }
});

// node_modules/@trezor/connect/lib/constants/index.js
var require_constants2 = __commonJS({
  "node_modules/@trezor/connect/lib/constants/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PROTO = exports2.NEM = exports2.CARDANO = exports2.NETWORK = exports2.ERRORS = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    exports2.ERRORS = tslib_1.__importStar(require_errors());
    exports2.NETWORK = tslib_1.__importStar(require_network());
    exports2.CARDANO = tslib_1.__importStar(require_cardano());
    exports2.NEM = tslib_1.__importStar(require_nem());
    var protobuf_1 = require_lib5();
    Object.defineProperty(exports2, "PROTO", { enumerable: true, get: function() {
      return protobuf_1.MessagesSchema;
    } });
  }
});

// node_modules/@trezor/connect/lib/types/api/index.js
var require_api = __commonJS({
  "node_modules/@trezor/connect/lib/types/api/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@trezor/connect/lib/types/account.js
var require_account = __commonJS({
  "node_modules/@trezor/connect/lib/types/account.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@trezor/connect/lib/types/fees.js
var require_fees = __commonJS({
  "node_modules/@trezor/connect/lib/types/fees.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SelectFeeLevel = exports2.FeeLevel = exports2.FeeInfo = void 0;
    var schema_utils_1 = require_lib4();
    exports2.FeeInfo = schema_utils_1.Type.Object({
      blockTime: schema_utils_1.Type.Number(),
      minFee: schema_utils_1.Type.Number(),
      maxFee: schema_utils_1.Type.Number(),
      dustLimit: schema_utils_1.Type.Number()
    });
    exports2.FeeLevel = schema_utils_1.Type.Object({
      label: schema_utils_1.Type.Union([
        schema_utils_1.Type.Literal("high"),
        schema_utils_1.Type.Literal("normal"),
        schema_utils_1.Type.Literal("economy"),
        schema_utils_1.Type.Literal("low"),
        schema_utils_1.Type.Literal("custom")
      ]),
      feePerUnit: schema_utils_1.Type.String(),
      blocks: schema_utils_1.Type.Number(),
      feeLimit: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      feePerTx: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.SelectFeeLevel = schema_utils_1.Type.Union([
      schema_utils_1.Type.Object({
        name: schema_utils_1.Type.String(),
        fee: schema_utils_1.Type.Literal("0"),
        feePerByte: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
        disabled: schema_utils_1.Type.Literal(true)
      }),
      schema_utils_1.Type.Object({
        name: schema_utils_1.Type.String(),
        fee: schema_utils_1.Type.String(),
        feePerByte: schema_utils_1.Type.String(),
        minutes: schema_utils_1.Type.Number(),
        total: schema_utils_1.Type.String()
      })
    ]);
  }
});

// node_modules/@trezor/connect/lib/types/device.js
var require_device2 = __commonJS({
  "node_modules/@trezor/connect/lib/types/device.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DeviceModelInternal = exports2.FirmwareType = void 0;
    var FirmwareType;
    (function(FirmwareType2) {
      FirmwareType2["BitcoinOnly"] = "bitcoin-only";
      FirmwareType2["Regular"] = "regular";
    })(FirmwareType || (exports2.FirmwareType = FirmwareType = {}));
    var protobuf_1 = require_lib5();
    Object.defineProperty(exports2, "DeviceModelInternal", { enumerable: true, get: function() {
      return protobuf_1.DeviceModelInternal;
    } });
  }
});

// node_modules/@trezor/connect/lib/types/coinInfo.js
var require_coinInfo = __commonJS({
  "node_modules/@trezor/connect/lib/types/coinInfo.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CoinInfo = exports2.MiscNetworkInfo = exports2.EthereumNetworkInfo = exports2.BitcoinNetworkInfo = exports2.BlockchainLink = exports2.CoinSupport = exports2.CoinObj = exports2.Network = exports2.Bip32 = void 0;
    var schema_utils_1 = require_lib4();
    var fees_1 = require_fees();
    var device_1 = require_device2();
    exports2.Bip32 = schema_utils_1.Type.Object({
      public: schema_utils_1.Type.Number(),
      private: schema_utils_1.Type.Number()
    });
    exports2.Network = schema_utils_1.Type.Object({
      messagePrefix: schema_utils_1.Type.String(),
      bech32: schema_utils_1.Type.String(),
      bip32: exports2.Bip32,
      pubKeyHash: schema_utils_1.Type.Number(),
      scriptHash: schema_utils_1.Type.Number(),
      wif: schema_utils_1.Type.Number(),
      forkId: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    });
    exports2.CoinObj = schema_utils_1.Type.Object({
      coin: schema_utils_1.Type.String(),
      identity: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CoinSupport = schema_utils_1.Type.Composite([
      schema_utils_1.Type.Object({
        connect: schema_utils_1.Type.Boolean()
      }),
      schema_utils_1.Type.Record(schema_utils_1.Type.KeyOfEnum(device_1.DeviceModelInternal), schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Literal(false)]))
    ]);
    exports2.BlockchainLink = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.String(),
      url: schema_utils_1.Type.Array(schema_utils_1.Type.String())
    });
    var Common = schema_utils_1.Type.Object({
      label: schema_utils_1.Type.String(),
      name: schema_utils_1.Type.String(),
      shortcut: schema_utils_1.Type.String(),
      slip44: schema_utils_1.Type.Number(),
      support: exports2.CoinSupport,
      decimals: schema_utils_1.Type.Number(),
      blockchainLink: schema_utils_1.Type.Optional(exports2.BlockchainLink),
      blockTime: schema_utils_1.Type.Number(),
      minFee: schema_utils_1.Type.Number(),
      maxFee: schema_utils_1.Type.Number(),
      defaultFees: schema_utils_1.Type.Array(fees_1.FeeLevel)
    });
    exports2.BitcoinNetworkInfo = schema_utils_1.Type.Intersect([
      Common,
      schema_utils_1.Type.Object({
        type: schema_utils_1.Type.Literal("bitcoin"),
        cashAddrPrefix: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        curveName: schema_utils_1.Type.String(),
        dustLimit: schema_utils_1.Type.Number(),
        forceBip143: schema_utils_1.Type.Boolean(),
        hashGenesisBlock: schema_utils_1.Type.String(),
        maxAddressLength: schema_utils_1.Type.Number(),
        maxFeeSatoshiKb: schema_utils_1.Type.Number(),
        minAddressLength: schema_utils_1.Type.Number(),
        minFeeSatoshiKb: schema_utils_1.Type.Number(),
        segwit: schema_utils_1.Type.Boolean(),
        xPubMagic: schema_utils_1.Type.Number(),
        xPubMagicSegwitNative: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        xPubMagicSegwit: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
        taproot: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
        network: exports2.Network,
        isBitcoin: schema_utils_1.Type.Boolean()
      })
    ]);
    exports2.EthereumNetworkInfo = schema_utils_1.Type.Intersect([
      Common,
      schema_utils_1.Type.Object({
        type: schema_utils_1.Type.Literal("ethereum"),
        chainId: schema_utils_1.Type.Number(),
        network: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined())
      })
    ]);
    exports2.MiscNetworkInfo = schema_utils_1.Type.Intersect([
      Common,
      schema_utils_1.Type.Object({
        type: schema_utils_1.Type.Union([schema_utils_1.Type.Literal("misc"), schema_utils_1.Type.Literal("nem")]),
        curve: schema_utils_1.Type.String(),
        network: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined())
      })
    ]);
    exports2.CoinInfo = schema_utils_1.Type.Union([exports2.BitcoinNetworkInfo, exports2.EthereumNetworkInfo, exports2.MiscNetworkInfo]);
  }
});

// node_modules/@trezor/connect/lib/types/firmware.js
var require_firmware = __commonJS({
  "node_modules/@trezor/connect/lib/types/firmware.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IntermediaryVersion = void 0;
    var schema_utils_1 = require_lib4();
    exports2.IntermediaryVersion = schema_utils_1.Type.Union([schema_utils_1.Type.Literal(1), schema_utils_1.Type.Literal(2), schema_utils_1.Type.Literal(3)]);
  }
});

// node_modules/@trezor/connect/lib/types/params.js
var require_params = __commonJS({
  "node_modules/@trezor/connect/lib/types/params.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PublicKey = exports2.GetPublicKey = exports2.GetAddress = exports2.DerivationPath = exports2.Bundle = void 0;
    var schema_utils_1 = require_lib4();
    var Bundle = (type) => schema_utils_1.Type.Object({ bundle: schema_utils_1.Type.Array(type, { minItems: 1 }) });
    exports2.Bundle = Bundle;
    exports2.DerivationPath = schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Array(schema_utils_1.Type.Number())], {
      description: "Derivation Path (BIP32).",
      $id: "DerivationPath"
    });
    exports2.GetAddress = schema_utils_1.Type.Object({
      path: exports2.DerivationPath,
      address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      showOnTrezor: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean({ default: true })),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      useEventListener: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
    exports2.GetPublicKey = schema_utils_1.Type.Object({
      path: exports2.DerivationPath,
      showOnTrezor: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      suppressBackupWarning: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
    exports2.PublicKey = schema_utils_1.Type.Object({
      publicKey: schema_utils_1.Type.String(),
      path: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      serializedPath: schema_utils_1.Type.String()
    });
  }
});

// node_modules/@trezor/connect/lib/types/settings.js
var require_settings = __commonJS({
  "node_modules/@trezor/connect/lib/types/settings.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@trezor/connect/lib/types/api/cardano/index.js
var require_cardano2 = __commonJS({
  "node_modules/@trezor/connect/lib/types/api/cardano/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CardanoSignedTxData = exports2.CardanoAuxiliaryDataSupplement = exports2.CardanoSignedTxWitness = exports2.CardanoSignTransactionExtended = exports2.CardanoSignTransaction = exports2.CardanoAuxiliaryData = exports2.CardanoCVoteRegistrationParameters = exports2.CardanoCVoteRegistrationDelegation = exports2.CardanoReferenceInput = exports2.CardanoRequiredSigner = exports2.CardanoCollateralInput = exports2.CardanoMint = exports2.CardanoWithdrawal = exports2.CardanoCertificate = exports2.CardanoDRep = exports2.CardanoPoolParameters = exports2.CardanoPoolMargin = exports2.CardanoPoolMetadata = exports2.CardanoPoolRelay = exports2.CardanoPoolOwner = exports2.CardanoOutput = exports2.CardanoAssetGroup = exports2.CardanoToken = exports2.CardanoInput = exports2.CardanoGetPublicKey = exports2.CardanoNativeScriptHash = exports2.CardanoGetNativeScriptHash = exports2.CardanoNativeScript = exports2.CardanoGetAddress = exports2.CardanoAddressParameters = exports2.CardanoCertificatePointer = void 0;
    var schema_utils_1 = require_lib4();
    var constants_1 = require_constants2();
    var params_1 = require_params();
    exports2.CardanoCertificatePointer = schema_utils_1.Type.Object({
      blockIndex: schema_utils_1.Type.Number(),
      txIndex: schema_utils_1.Type.Number(),
      certificateIndex: schema_utils_1.Type.Number()
    });
    exports2.CardanoAddressParameters = schema_utils_1.Type.Object({
      addressType: constants_1.PROTO.EnumCardanoAddressType,
      path: schema_utils_1.Type.Optional(params_1.DerivationPath),
      stakingPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
      stakingKeyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      certificatePointer: schema_utils_1.Type.Optional(exports2.CardanoCertificatePointer),
      paymentScriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      stakingScriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CardanoGetAddress = schema_utils_1.Type.Object({
      addressParameters: exports2.CardanoAddressParameters,
      protocolMagic: schema_utils_1.Type.Number(),
      networkId: schema_utils_1.Type.Number(),
      address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      showOnTrezor: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
    exports2.CardanoNativeScript = schema_utils_1.Type.Recursive((This) => schema_utils_1.Type.Object({
      type: constants_1.PROTO.EnumCardanoNativeScriptType,
      scripts: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(This)),
      keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      keyPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
      requiredSignaturesCount: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      invalidBefore: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      invalidHereafter: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    }));
    exports2.CardanoGetNativeScriptHash = schema_utils_1.Type.Object({
      script: exports2.CardanoNativeScript,
      displayFormat: constants_1.PROTO.EnumCardanoNativeScriptHashDisplayFormat,
      derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType)
    });
    exports2.CardanoNativeScriptHash = schema_utils_1.Type.Object({
      scriptHash: schema_utils_1.Type.String()
    });
    exports2.CardanoGetPublicKey = schema_utils_1.Type.Intersect([
      params_1.GetPublicKey,
      schema_utils_1.Type.Object({
        derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType)
      })
    ]);
    exports2.CardanoInput = schema_utils_1.Type.Object({
      path: schema_utils_1.Type.Optional(params_1.DerivationPath),
      prev_hash: schema_utils_1.Type.String(),
      prev_index: schema_utils_1.Type.Number()
    });
    exports2.CardanoToken = schema_utils_1.Type.Object({
      assetNameBytes: schema_utils_1.Type.String(),
      amount: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      mintAmount: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CardanoAssetGroup = schema_utils_1.Type.Object({
      policyId: schema_utils_1.Type.String(),
      tokenAmounts: schema_utils_1.Type.Array(exports2.CardanoToken)
    });
    exports2.CardanoOutput = schema_utils_1.Type.Intersect([
      schema_utils_1.Type.Union([
        schema_utils_1.Type.Object({
          addressParameters: exports2.CardanoAddressParameters
        }),
        schema_utils_1.Type.Object({
          address: schema_utils_1.Type.String()
        })
      ]),
      schema_utils_1.Type.Object({
        amount: schema_utils_1.Type.String(),
        tokenBundle: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.CardanoAssetGroup)),
        datumHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        format: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoTxOutputSerializationFormat),
        inlineDatum: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        referenceScript: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
      })
    ]);
    exports2.CardanoPoolOwner = schema_utils_1.Type.Object({
      stakingKeyPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
      stakingKeyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CardanoPoolRelay = schema_utils_1.Type.Object({
      type: constants_1.PROTO.EnumCardanoPoolRelayType,
      ipv4Address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      ipv6Address: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      port: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      hostName: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CardanoPoolMetadata = schema_utils_1.Type.Object({
      url: schema_utils_1.Type.String(),
      hash: schema_utils_1.Type.String()
    });
    exports2.CardanoPoolMargin = schema_utils_1.Type.Object({
      numerator: schema_utils_1.Type.String(),
      denominator: schema_utils_1.Type.String()
    });
    exports2.CardanoPoolParameters = schema_utils_1.Type.Object({
      poolId: schema_utils_1.Type.String(),
      vrfKeyHash: schema_utils_1.Type.String(),
      pledge: schema_utils_1.Type.String(),
      cost: schema_utils_1.Type.String(),
      margin: exports2.CardanoPoolMargin,
      rewardAccount: schema_utils_1.Type.String(),
      owners: schema_utils_1.Type.Array(exports2.CardanoPoolOwner, { minItems: 1 }),
      relays: schema_utils_1.Type.Array(exports2.CardanoPoolRelay),
      metadata: schema_utils_1.Type.Optional(exports2.CardanoPoolMetadata)
    });
    exports2.CardanoDRep = schema_utils_1.Type.Object({
      type: constants_1.PROTO.EnumCardanoDRepType,
      keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      scriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CardanoCertificate = schema_utils_1.Type.Object({
      type: constants_1.PROTO.EnumCardanoCertificateType,
      path: schema_utils_1.Type.Optional(params_1.DerivationPath),
      pool: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      poolParameters: schema_utils_1.Type.Optional(exports2.CardanoPoolParameters),
      scriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      deposit: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      dRep: schema_utils_1.Type.Optional(exports2.CardanoDRep)
    });
    exports2.CardanoWithdrawal = schema_utils_1.Type.Object({
      path: schema_utils_1.Type.Optional(params_1.DerivationPath),
      amount: schema_utils_1.Type.String(),
      scriptHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CardanoMint = schema_utils_1.Type.Array(exports2.CardanoAssetGroup);
    exports2.CardanoCollateralInput = schema_utils_1.Type.Object({
      path: schema_utils_1.Type.Optional(params_1.DerivationPath),
      prev_hash: schema_utils_1.Type.String(),
      prev_index: schema_utils_1.Type.Number()
    });
    exports2.CardanoRequiredSigner = schema_utils_1.Type.Object({
      keyPath: schema_utils_1.Type.Optional(params_1.DerivationPath),
      keyHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CardanoReferenceInput = schema_utils_1.Type.Object({
      prev_hash: schema_utils_1.Type.String(),
      prev_index: schema_utils_1.Type.Number()
    });
    exports2.CardanoCVoteRegistrationDelegation = schema_utils_1.Type.Object({
      votePublicKey: schema_utils_1.Type.String(),
      weight: schema_utils_1.Type.Number()
    });
    exports2.CardanoCVoteRegistrationParameters = schema_utils_1.Type.Object({
      votePublicKey: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      stakingPath: params_1.DerivationPath,
      paymentAddressParameters: schema_utils_1.Type.Optional(exports2.CardanoAddressParameters),
      nonce: schema_utils_1.Type.String(),
      format: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoCVoteRegistrationFormat),
      delegations: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.CardanoCVoteRegistrationDelegation)),
      votingPurpose: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      paymentAddress: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CardanoAuxiliaryData = schema_utils_1.Type.Object({
      hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      cVoteRegistrationParameters: schema_utils_1.Type.Optional(exports2.CardanoCVoteRegistrationParameters)
    });
    exports2.CardanoSignTransaction = schema_utils_1.Type.Object({
      inputs: schema_utils_1.Type.Array(exports2.CardanoInput),
      outputs: schema_utils_1.Type.Array(exports2.CardanoOutput),
      fee: schema_utils_1.Type.Uint(),
      ttl: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      certificates: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.CardanoCertificate)),
      withdrawals: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.CardanoWithdrawal)),
      validityIntervalStart: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      auxiliaryData: schema_utils_1.Type.Optional(exports2.CardanoAuxiliaryData),
      mint: schema_utils_1.Type.Optional(exports2.CardanoMint),
      scriptDataHash: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      collateralInputs: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.CardanoCollateralInput)),
      requiredSigners: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.CardanoRequiredSigner)),
      collateralReturn: schema_utils_1.Type.Optional(exports2.CardanoOutput),
      totalCollateral: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      referenceInputs: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.CardanoReferenceInput)),
      additionalWitnessRequests: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(params_1.DerivationPath)),
      protocolMagic: schema_utils_1.Type.Number(),
      networkId: schema_utils_1.Type.Number(),
      signingMode: constants_1.PROTO.EnumCardanoTxSigningMode,
      derivationType: schema_utils_1.Type.Optional(constants_1.PROTO.EnumCardanoDerivationType),
      includeNetworkId: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      tagCborSets: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
    exports2.CardanoSignTransactionExtended = schema_utils_1.Type.Intersect([
      exports2.CardanoSignTransaction,
      schema_utils_1.Type.Object({
        unsignedTx: schema_utils_1.Type.Object({
          body: schema_utils_1.Type.String(),
          hash: schema_utils_1.Type.String()
        }),
        testnet: schema_utils_1.Type.Boolean()
      })
    ]);
    exports2.CardanoSignedTxWitness = schema_utils_1.Type.Object({
      type: constants_1.PROTO.EnumCardanoTxWitnessType,
      pubKey: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String(),
      chainCode: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CardanoAuxiliaryDataSupplement = schema_utils_1.Type.Object({
      type: constants_1.PROTO.EnumCardanoTxAuxiliaryDataSupplementType,
      auxiliaryDataHash: schema_utils_1.Type.String(),
      cVoteRegistrationSignature: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.CardanoSignedTxData = schema_utils_1.Type.Object({
      hash: schema_utils_1.Type.String(),
      witnesses: schema_utils_1.Type.Array(exports2.CardanoSignedTxWitness),
      auxiliaryDataSupplement: schema_utils_1.Type.Optional(exports2.CardanoAuxiliaryDataSupplement)
    });
  }
});

// node_modules/@trezor/connect/lib/types/api/binance/index.js
var require_binance = __commonJS({
  "node_modules/@trezor/connect/lib/types/api/binance/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BinanceSignTransaction = exports2.BinancePreparedTransaction = exports2.BinancePreparedMessage = exports2.BinanceSDKTransaction = void 0;
    var constants_1 = require_constants2();
    var params_1 = require_params();
    var schema_utils_1 = require_lib4();
    exports2.BinanceSDKTransaction = schema_utils_1.Type.Object({
      chain_id: schema_utils_1.Type.String(),
      account_number: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      memo: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      sequence: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      transfer: schema_utils_1.Type.Optional(constants_1.PROTO.BinanceTransferMsg),
      placeOrder: schema_utils_1.Type.Optional(constants_1.PROTO.BinanceOrderMsg),
      cancelOrder: schema_utils_1.Type.Optional(constants_1.PROTO.BinanceCancelMsg)
    });
    exports2.BinancePreparedMessage = schema_utils_1.Type.Union([
      schema_utils_1.Type.Intersect([
        constants_1.PROTO.BinanceTransferMsg,
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("BinanceTransferMsg")
        })
      ]),
      schema_utils_1.Type.Intersect([
        constants_1.PROTO.BinanceOrderMsg,
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("BinanceOrderMsg")
        })
      ]),
      schema_utils_1.Type.Intersect([
        constants_1.PROTO.BinanceCancelMsg,
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("BinanceCancelMsg")
        })
      ])
    ]);
    exports2.BinancePreparedTransaction = schema_utils_1.Type.Intersect([
      exports2.BinanceSDKTransaction,
      schema_utils_1.Type.Object({
        messages: schema_utils_1.Type.Array(exports2.BinancePreparedMessage),
        account_number: schema_utils_1.Type.Number(),
        sequence: schema_utils_1.Type.Number(),
        source: schema_utils_1.Type.Number()
      })
    ]);
    exports2.BinanceSignTransaction = schema_utils_1.Type.Object({
      path: params_1.DerivationPath,
      transaction: exports2.BinanceSDKTransaction,
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
  }
});

// node_modules/@trezor/connect/lib/types/api/bitcoin/index.js
var require_bitcoin = __commonJS({
  "node_modules/@trezor/connect/lib/types/api/bitcoin/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VerifyMessage = exports2.SignMessage = void 0;
    var params_1 = require_params();
    var schema_utils_1 = require_lib4();
    exports2.SignMessage = schema_utils_1.Type.Object({
      path: params_1.DerivationPath,
      coin: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      message: schema_utils_1.Type.String(),
      hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      no_script_type: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
    exports2.VerifyMessage = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String(),
      message: schema_utils_1.Type.String(),
      coin: schema_utils_1.Type.String(),
      hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
  }
});

// node_modules/@trezor/connect/lib/types/api/eos/index.js
var require_eos = __commonJS({
  "node_modules/@trezor/connect/lib/types/api/eos/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EosSignTransaction = exports2.EosSDKTransaction = exports2.EosTxAction = exports2.EosTxActionCommon = exports2.EosAuthorization = exports2.EosTxHeader = exports2.EosPublicKey = void 0;
    var constants_1 = require_constants2();
    var params_1 = require_params();
    var schema_utils_1 = require_lib4();
    exports2.EosPublicKey = schema_utils_1.Type.Object({
      wifPublicKey: schema_utils_1.Type.String(),
      rawPublicKey: schema_utils_1.Type.String(),
      path: schema_utils_1.Type.Array(schema_utils_1.Type.Number()),
      serializedPath: schema_utils_1.Type.String()
    });
    exports2.EosTxHeader = schema_utils_1.Type.Object({
      expiration: schema_utils_1.Type.Union([schema_utils_1.Type.Uint(), schema_utils_1.Type.String()]),
      refBlockNum: schema_utils_1.Type.Number(),
      refBlockPrefix: schema_utils_1.Type.Number(),
      maxNetUsageWords: schema_utils_1.Type.Number(),
      maxCpuUsageMs: schema_utils_1.Type.Number(),
      delaySec: schema_utils_1.Type.Number()
    });
    exports2.EosAuthorization = schema_utils_1.Type.Object({
      threshold: schema_utils_1.Type.Number(),
      keys: schema_utils_1.Type.Array(constants_1.PROTO.EosAuthorizationKey),
      accounts: schema_utils_1.Type.Array(schema_utils_1.Type.Object({
        permission: constants_1.PROTO.EosPermissionLevel,
        weight: schema_utils_1.Type.Number()
      })),
      waits: schema_utils_1.Type.Array(constants_1.PROTO.EosAuthorizationWait)
    });
    exports2.EosTxActionCommon = schema_utils_1.Type.Object({
      account: schema_utils_1.Type.String(),
      authorization: schema_utils_1.Type.Array(constants_1.PROTO.EosPermissionLevel)
    });
    exports2.EosTxAction = schema_utils_1.Type.Union([
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("transfer"),
          data: schema_utils_1.Type.Object({
            from: schema_utils_1.Type.String(),
            to: schema_utils_1.Type.String(),
            quantity: schema_utils_1.Type.String(),
            memo: schema_utils_1.Type.String()
          })
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("delegatebw"),
          data: schema_utils_1.Type.Object({
            from: schema_utils_1.Type.String(),
            receiver: schema_utils_1.Type.String(),
            stake_net_quantity: schema_utils_1.Type.String(),
            stake_cpu_quantity: schema_utils_1.Type.String(),
            transfer: schema_utils_1.Type.Boolean()
          })
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("undelegatebw"),
          data: schema_utils_1.Type.Object({
            from: schema_utils_1.Type.String(),
            receiver: schema_utils_1.Type.String(),
            unstake_net_quantity: schema_utils_1.Type.String(),
            unstake_cpu_quantity: schema_utils_1.Type.String()
          })
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("buyram"),
          data: schema_utils_1.Type.Object({
            payer: schema_utils_1.Type.String(),
            receiver: schema_utils_1.Type.String(),
            quant: schema_utils_1.Type.String()
          })
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("buyrambytes"),
          data: constants_1.PROTO.EosActionBuyRamBytes
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("sellram"),
          data: constants_1.PROTO.EosActionSellRam
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("voteproducer"),
          data: schema_utils_1.Type.Object({
            voter: schema_utils_1.Type.String(),
            proxy: schema_utils_1.Type.String(),
            producers: schema_utils_1.Type.Array(schema_utils_1.Type.String())
          })
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("refund"),
          data: constants_1.PROTO.EosActionRefund
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("updateauth"),
          data: schema_utils_1.Type.Object({
            account: schema_utils_1.Type.String(),
            permission: schema_utils_1.Type.String(),
            parent: schema_utils_1.Type.String(),
            auth: exports2.EosAuthorization
          })
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("deleteauth"),
          data: constants_1.PROTO.EosActionDeleteAuth
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("linkauth"),
          data: constants_1.PROTO.EosActionLinkAuth
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("unlinkauth"),
          data: constants_1.PROTO.EosActionUnlinkAuth
        })
      ]),
      schema_utils_1.Type.Intersect([
        exports2.EosTxActionCommon,
        schema_utils_1.Type.Object({
          name: schema_utils_1.Type.Literal("newaccount"),
          data: schema_utils_1.Type.Object({
            creator: schema_utils_1.Type.String(),
            name: schema_utils_1.Type.String(),
            owner: exports2.EosAuthorization,
            active: exports2.EosAuthorization
          })
        })
      ])
    ]);
    exports2.EosSDKTransaction = schema_utils_1.Type.Object({
      chainId: schema_utils_1.Type.String(),
      header: exports2.EosTxHeader,
      actions: schema_utils_1.Type.Array(schema_utils_1.Type.Union([
        exports2.EosTxAction,
        schema_utils_1.Type.Intersect([
          exports2.EosTxActionCommon,
          schema_utils_1.Type.Object({
            name: schema_utils_1.Type.String(),
            data: schema_utils_1.Type.String()
          })
        ])
      ]))
    });
    exports2.EosSignTransaction = schema_utils_1.Type.Object({
      path: params_1.DerivationPath,
      transaction: exports2.EosSDKTransaction,
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
  }
});

// node_modules/@trezor/connect/lib/types/api/ripple/index.js
var require_ripple = __commonJS({
  "node_modules/@trezor/connect/lib/types/api/ripple/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RippleSignedTx = exports2.RippleSignTransaction = exports2.RippleTransaction = exports2.RipplePayment = void 0;
    var params_1 = require_params();
    var schema_utils_1 = require_lib4();
    exports2.RipplePayment = schema_utils_1.Type.Object({
      amount: schema_utils_1.Type.String(),
      destination: schema_utils_1.Type.String(),
      destinationTag: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    });
    exports2.RippleTransaction = schema_utils_1.Type.Object({
      fee: schema_utils_1.Type.String(),
      flags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      sequence: schema_utils_1.Type.Number(),
      maxLedgerVersion: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      payment: exports2.RipplePayment
    });
    exports2.RippleSignTransaction = schema_utils_1.Type.Object({
      path: params_1.DerivationPath,
      transaction: exports2.RippleTransaction,
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
    exports2.RippleSignedTx = schema_utils_1.Type.Object({
      serializedTx: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String()
    });
  }
});

// node_modules/@trezor/connect/lib/types/api/ethereum/index.js
var require_ethereum = __commonJS({
  "node_modules/@trezor/connect/lib/types/api/ethereum/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EthereumVerifyMessage = exports2.EthereumSignTypedHash = exports2.EthereumSignTypedData = exports2.EthereumSignTypedDataMessage = exports2.EthereumSignTypedDataTypes = exports2.EthereumSignedTx = exports2.EthereumSignTransaction = exports2.EthereumTransactionEIP1559 = exports2.EthereumAccessList = exports2.EthereumTransaction = exports2.EthereumSignMessage = void 0;
    var schema_utils_1 = require_lib4();
    var params_1 = require_params();
    exports2.EthereumSignMessage = schema_utils_1.Type.Object({
      path: params_1.DerivationPath,
      message: schema_utils_1.Type.String(),
      hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
    exports2.EthereumTransaction = schema_utils_1.Type.Object({
      to: schema_utils_1.Type.String(),
      value: schema_utils_1.Type.String(),
      gasPrice: schema_utils_1.Type.String(),
      gasLimit: schema_utils_1.Type.String(),
      maxFeePerGas: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
      maxPriorityFeePerGas: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
      nonce: schema_utils_1.Type.String(),
      data: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      chainId: schema_utils_1.Type.Number(),
      txType: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
    });
    exports2.EthereumAccessList = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      storageKeys: schema_utils_1.Type.Array(schema_utils_1.Type.String())
    });
    exports2.EthereumTransactionEIP1559 = schema_utils_1.Type.Object({
      to: schema_utils_1.Type.String(),
      value: schema_utils_1.Type.String(),
      gasLimit: schema_utils_1.Type.String(),
      gasPrice: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
      nonce: schema_utils_1.Type.String(),
      data: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      chainId: schema_utils_1.Type.Number(),
      maxFeePerGas: schema_utils_1.Type.String(),
      maxPriorityFeePerGas: schema_utils_1.Type.String(),
      accessList: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.EthereumAccessList))
    });
    exports2.EthereumSignTransaction = schema_utils_1.Type.Object({
      path: params_1.DerivationPath,
      transaction: schema_utils_1.Type.Union([exports2.EthereumTransaction, exports2.EthereumTransactionEIP1559]),
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
    exports2.EthereumSignedTx = schema_utils_1.Type.Object({
      v: schema_utils_1.Type.String(),
      r: schema_utils_1.Type.String(),
      s: schema_utils_1.Type.String(),
      serializedTx: schema_utils_1.Type.String()
    });
    var EthereumSignTypedDataTypeProperty = schema_utils_1.Type.Object({
      name: schema_utils_1.Type.String(),
      type: schema_utils_1.Type.String()
    });
    exports2.EthereumSignTypedDataTypes = schema_utils_1.Type.Object({
      EIP712Domain: schema_utils_1.Type.Array(EthereumSignTypedDataTypeProperty)
    }, {
      additionalProperties: schema_utils_1.Type.Array(EthereumSignTypedDataTypeProperty)
    });
    exports2.EthereumSignTypedDataMessage = schema_utils_1.Type.Object({
      types: exports2.EthereumSignTypedDataTypes,
      primaryType: schema_utils_1.Type.String(),
      domain: schema_utils_1.Type.Object({
        name: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        version: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        chainId: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.Number(), schema_utils_1.Type.BigInt(), schema_utils_1.Type.String()])),
        verifyingContract: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        salt: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.ArrayBuffer(), schema_utils_1.Type.String()]))
      }),
      message: schema_utils_1.Type.Object({}, {
        additionalProperties: schema_utils_1.Type.Any()
      })
    });
    exports2.EthereumSignTypedData = schema_utils_1.Type.Object({
      path: params_1.DerivationPath,
      data: exports2.EthereumSignTypedDataMessage,
      metamask_v4_compat: schema_utils_1.Type.Boolean(),
      domain_separator_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined()),
      message_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Undefined())
    });
    exports2.EthereumSignTypedHash = schema_utils_1.Type.Object({
      path: params_1.DerivationPath,
      data: exports2.EthereumSignTypedDataMessage,
      metamask_v4_compat: schema_utils_1.Type.Boolean(),
      domain_separator_hash: schema_utils_1.Type.String(),
      message_hash: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.EthereumVerifyMessage = schema_utils_1.Type.Object({
      address: schema_utils_1.Type.String(),
      message: schema_utils_1.Type.String(),
      hex: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      signature: schema_utils_1.Type.String()
    });
  }
});

// node_modules/@trezor/connect/lib/types/api/solana/index.js
var require_solana = __commonJS({
  "node_modules/@trezor/connect/lib/types/api/solana/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SolanaSignedTransaction = exports2.SolanaSignTransaction = exports2.SolanaTxAdditionalInfo = exports2.SolanaTxTokenAccountInfo = exports2.SolanaPublicKey = void 0;
    var params_1 = require_params();
    var schema_utils_1 = require_lib4();
    exports2.SolanaPublicKey = schema_utils_1.Type.Intersect([
      params_1.PublicKey,
      schema_utils_1.Type.Object({
        publicKey: schema_utils_1.Type.String()
      })
    ]);
    exports2.SolanaTxTokenAccountInfo = schema_utils_1.Type.Object({
      baseAddress: schema_utils_1.Type.String(),
      tokenProgram: schema_utils_1.Type.String(),
      tokenMint: schema_utils_1.Type.String(),
      tokenAccount: schema_utils_1.Type.String()
    });
    exports2.SolanaTxAdditionalInfo = schema_utils_1.Type.Object({
      tokenAccountsInfos: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.SolanaTxTokenAccountInfo, { minItems: 1 }))
    });
    exports2.SolanaSignTransaction = schema_utils_1.Type.Object({
      path: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Array(schema_utils_1.Type.Number())]),
      serializedTx: schema_utils_1.Type.String(),
      additionalInfo: schema_utils_1.Type.Optional(exports2.SolanaTxAdditionalInfo)
    });
    exports2.SolanaSignedTransaction = schema_utils_1.Type.Object({
      signature: schema_utils_1.Type.String()
    });
  }
});

// node_modules/@trezor/connect/lib/types/api/stellar/index.js
var require_stellar = __commonJS({
  "node_modules/@trezor/connect/lib/types/api/stellar/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StellarOperationMessage = exports2.StellarSignedTx = exports2.StellarSignTransaction = exports2.StellarTransaction = exports2.StellarOperation = exports2.StellarClaimClaimableBalanceOperation = exports2.StellarInflationOperation = exports2.StellarBumpSequenceOperation = exports2.StellarManageDataOperation = exports2.StellarAccountMergeOperation = exports2.StellarAllowTrustOperation = exports2.StellarChangeTrustOperation = exports2.StellarSetOptionsOperation = exports2.StellarManageBuyOfferOperation = exports2.StellarManageSellOfferOperation = exports2.StellarPassiveSellOfferOperation = exports2.StellarPathPaymentStrictSendOperation = exports2.StellarPathPaymentStrictReceiveOperation = exports2.StellarPaymentOperation = exports2.StellarCreateAccountOperation = exports2.StellarAsset = void 0;
    var constants_1 = require_constants2();
    var params_1 = require_params();
    var schema_utils_1 = require_lib4();
    exports2.StellarAsset = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Union([constants_1.PROTO.EnumStellarAssetType, schema_utils_1.Type.KeyOfEnum(constants_1.PROTO.StellarAssetType)]),
      code: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      issuer: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.StellarCreateAccountOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("createAccount"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      destination: schema_utils_1.Type.String(),
      startingBalance: schema_utils_1.Type.String()
    });
    exports2.StellarPaymentOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("payment"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      destination: schema_utils_1.Type.String(),
      asset: exports2.StellarAsset,
      amount: schema_utils_1.Type.String()
    });
    exports2.StellarPathPaymentStrictReceiveOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("pathPaymentStrictReceive"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      sendAsset: exports2.StellarAsset,
      sendMax: schema_utils_1.Type.Uint(),
      destination: schema_utils_1.Type.String(),
      destAsset: exports2.StellarAsset,
      destAmount: schema_utils_1.Type.Uint(),
      path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.StellarAsset))
    });
    exports2.StellarPathPaymentStrictSendOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("pathPaymentStrictSend"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      sendAsset: exports2.StellarAsset,
      sendAmount: schema_utils_1.Type.Uint(),
      destination: schema_utils_1.Type.String(),
      destAsset: exports2.StellarAsset,
      destMin: schema_utils_1.Type.Uint(),
      path: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(exports2.StellarAsset))
    });
    exports2.StellarPassiveSellOfferOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("createPassiveSellOffer"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      buying: exports2.StellarAsset,
      selling: exports2.StellarAsset,
      amount: schema_utils_1.Type.Uint(),
      price: schema_utils_1.Type.Object({
        n: schema_utils_1.Type.Number(),
        d: schema_utils_1.Type.Number()
      })
    });
    exports2.StellarManageSellOfferOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("manageSellOffer"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      buying: exports2.StellarAsset,
      selling: exports2.StellarAsset,
      amount: schema_utils_1.Type.Uint(),
      offerId: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      price: schema_utils_1.Type.Object({
        n: schema_utils_1.Type.Number(),
        d: schema_utils_1.Type.Number()
      })
    });
    exports2.StellarManageBuyOfferOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("manageBuyOffer"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      buying: exports2.StellarAsset,
      selling: exports2.StellarAsset,
      amount: schema_utils_1.Type.Uint(),
      offerId: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      price: schema_utils_1.Type.Object({
        n: schema_utils_1.Type.Number(),
        d: schema_utils_1.Type.Number()
      })
    });
    exports2.StellarSetOptionsOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("setOptions"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      signer: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
        type: constants_1.PROTO.EnumStellarSignerType,
        key: schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Buffer()]),
        weight: schema_utils_1.Type.Optional(schema_utils_1.Type.Number())
      })),
      inflationDest: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      clearFlags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      setFlags: schema_utils_1.Type.Optional(schema_utils_1.Type.Number()),
      masterWeight: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      lowThreshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      medThreshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      highThreshold: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
      homeDomain: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.StellarChangeTrustOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("changeTrust"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      line: exports2.StellarAsset,
      limit: schema_utils_1.Type.String()
    });
    exports2.StellarAllowTrustOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("allowTrust"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      trustor: schema_utils_1.Type.String(),
      assetCode: schema_utils_1.Type.String(),
      assetType: constants_1.PROTO.EnumStellarAssetType,
      authorize: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.Boolean(), schema_utils_1.Type.Undefined()]))
    });
    exports2.StellarAccountMergeOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("accountMerge"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      destination: schema_utils_1.Type.String()
    });
    exports2.StellarManageDataOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("manageData"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      name: schema_utils_1.Type.String(),
      value: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Buffer()]))
    });
    exports2.StellarBumpSequenceOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("bumpSequence"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      bumpTo: schema_utils_1.Type.Uint()
    });
    exports2.StellarInflationOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("inflation"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String())
    });
    exports2.StellarClaimClaimableBalanceOperation = schema_utils_1.Type.Object({
      type: schema_utils_1.Type.Literal("claimClaimableBalance"),
      source: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      balanceId: schema_utils_1.Type.String()
    });
    exports2.StellarOperation = schema_utils_1.Type.Union([
      exports2.StellarCreateAccountOperation,
      exports2.StellarPaymentOperation,
      exports2.StellarPathPaymentStrictReceiveOperation,
      exports2.StellarPathPaymentStrictSendOperation,
      exports2.StellarPassiveSellOfferOperation,
      exports2.StellarManageSellOfferOperation,
      exports2.StellarManageBuyOfferOperation,
      exports2.StellarSetOptionsOperation,
      exports2.StellarChangeTrustOperation,
      exports2.StellarAllowTrustOperation,
      exports2.StellarAccountMergeOperation,
      exports2.StellarInflationOperation,
      exports2.StellarManageDataOperation,
      exports2.StellarBumpSequenceOperation,
      exports2.StellarClaimClaimableBalanceOperation
    ]);
    exports2.StellarTransaction = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.String(),
      fee: schema_utils_1.Type.Number(),
      sequence: schema_utils_1.Type.Uint(),
      timebounds: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
        minTime: schema_utils_1.Type.Number(),
        maxTime: schema_utils_1.Type.Number()
      })),
      memo: schema_utils_1.Type.Optional(schema_utils_1.Type.Object({
        type: constants_1.PROTO.EnumStellarMemoType,
        id: schema_utils_1.Type.Optional(schema_utils_1.Type.Uint()),
        text: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
        hash: schema_utils_1.Type.Optional(schema_utils_1.Type.Union([schema_utils_1.Type.String(), schema_utils_1.Type.Buffer()]))
      })),
      operations: schema_utils_1.Type.Array(exports2.StellarOperation)
    });
    exports2.StellarSignTransaction = schema_utils_1.Type.Object({
      path: params_1.DerivationPath,
      networkPassphrase: schema_utils_1.Type.String(),
      transaction: exports2.StellarTransaction
    });
    exports2.StellarSignedTx = schema_utils_1.Type.Object({
      publicKey: schema_utils_1.Type.String(),
      signature: schema_utils_1.Type.String()
    });
    exports2.StellarOperationMessage = schema_utils_1.Type.Union([
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarCreateAccountOp")
        }),
        constants_1.PROTO.StellarCreateAccountOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarPaymentOp")
        }),
        constants_1.PROTO.StellarPaymentOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarPathPaymentStrictReceiveOp")
        }),
        constants_1.PROTO.StellarPathPaymentStrictReceiveOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarPathPaymentStrictSendOp")
        }),
        constants_1.PROTO.StellarPathPaymentStrictSendOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarManageSellOfferOp")
        }),
        constants_1.PROTO.StellarManageSellOfferOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarManageBuyOfferOp")
        }),
        constants_1.PROTO.StellarManageBuyOfferOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarCreatePassiveSellOfferOp")
        }),
        constants_1.PROTO.StellarCreatePassiveSellOfferOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarSetOptionsOp")
        }),
        constants_1.PROTO.StellarSetOptionsOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarChangeTrustOp")
        }),
        constants_1.PROTO.StellarChangeTrustOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarAllowTrustOp")
        }),
        constants_1.PROTO.StellarAllowTrustOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarAccountMergeOp")
        }),
        constants_1.PROTO.StellarAccountMergeOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarManageDataOp")
        }),
        constants_1.PROTO.StellarManageDataOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarBumpSequenceOp")
        }),
        constants_1.PROTO.StellarBumpSequenceOp
      ]),
      schema_utils_1.Type.Intersect([
        schema_utils_1.Type.Object({
          type: schema_utils_1.Type.Literal("StellarClaimClaimableBalanceOp")
        }),
        constants_1.PROTO.StellarClaimClaimableBalanceOp
      ])
    ]);
  }
});

// node_modules/@trezor/connect/lib/types/api/tezos/index.js
var require_tezos = __commonJS({
  "node_modules/@trezor/connect/lib/types/api/tezos/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TezosSignTransaction = exports2.TezosOperation = exports2.TezosDelegationOperation = exports2.TezosOriginationOperation = exports2.TezosTransactionOperation = exports2.TezosParametersManager = exports2.TezosManagerTransfer = exports2.TezosRevealOperation = void 0;
    var params_1 = require_params();
    var schema_utils_1 = require_lib4();
    exports2.TezosRevealOperation = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.String(),
      fee: schema_utils_1.Type.Number(),
      counter: schema_utils_1.Type.Number(),
      gas_limit: schema_utils_1.Type.Number(),
      storage_limit: schema_utils_1.Type.Number(),
      public_key: schema_utils_1.Type.String()
    });
    exports2.TezosManagerTransfer = schema_utils_1.Type.Object({
      destination: schema_utils_1.Type.String(),
      amount: schema_utils_1.Type.Number()
    });
    exports2.TezosParametersManager = schema_utils_1.Type.Object({
      set_delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      cancel_delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean()),
      transfer: schema_utils_1.Type.Optional(exports2.TezosManagerTransfer)
    });
    exports2.TezosTransactionOperation = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.String(),
      destination: schema_utils_1.Type.String(),
      amount: schema_utils_1.Type.Number(),
      counter: schema_utils_1.Type.Number(),
      fee: schema_utils_1.Type.Number(),
      gas_limit: schema_utils_1.Type.Number(),
      storage_limit: schema_utils_1.Type.Number(),
      parameters: schema_utils_1.Type.Optional(schema_utils_1.Type.Array(schema_utils_1.Type.Number())),
      parameters_manager: schema_utils_1.Type.Optional(exports2.TezosParametersManager)
    });
    exports2.TezosOriginationOperation = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.String(),
      balance: schema_utils_1.Type.Number(),
      delegate: schema_utils_1.Type.Optional(schema_utils_1.Type.String()),
      script: params_1.DerivationPath,
      fee: schema_utils_1.Type.Number(),
      counter: schema_utils_1.Type.Number(),
      gas_limit: schema_utils_1.Type.Number(),
      storage_limit: schema_utils_1.Type.Number()
    });
    exports2.TezosDelegationOperation = schema_utils_1.Type.Object({
      source: schema_utils_1.Type.String(),
      delegate: schema_utils_1.Type.String(),
      fee: schema_utils_1.Type.Number(),
      counter: schema_utils_1.Type.Number(),
      gas_limit: schema_utils_1.Type.Number(),
      storage_limit: schema_utils_1.Type.Number()
    });
    exports2.TezosOperation = schema_utils_1.Type.Object({
      reveal: schema_utils_1.Type.Optional(exports2.TezosRevealOperation),
      transaction: schema_utils_1.Type.Optional(exports2.TezosTransactionOperation),
      origination: schema_utils_1.Type.Optional(exports2.TezosOriginationOperation),
      delegation: schema_utils_1.Type.Optional(exports2.TezosDelegationOperation)
    });
    exports2.TezosSignTransaction = schema_utils_1.Type.Object({
      path: params_1.DerivationPath,
      branch: schema_utils_1.Type.String(),
      operation: exports2.TezosOperation,
      chunkify: schema_utils_1.Type.Optional(schema_utils_1.Type.Boolean())
    });
  }
});

// node_modules/@trezor/connect/lib/types/index.js
var require_types3 = __commonJS({
  "node_modules/@trezor/connect/lib/types/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_api(), exports2);
    tslib_1.__exportStar(require_account(), exports2);
    tslib_1.__exportStar(require_coinInfo(), exports2);
    tslib_1.__exportStar(require_device2(), exports2);
    tslib_1.__exportStar(require_fees(), exports2);
    tslib_1.__exportStar(require_firmware(), exports2);
    tslib_1.__exportStar(require_params(), exports2);
    tslib_1.__exportStar(require_settings(), exports2);
    tslib_1.__exportStar(require_cardano2(), exports2);
    tslib_1.__exportStar(require_binance(), exports2);
    tslib_1.__exportStar(require_bitcoin(), exports2);
    tslib_1.__exportStar(require_eos(), exports2);
    tslib_1.__exportStar(require_ripple(), exports2);
    tslib_1.__exportStar(require_ethereum(), exports2);
    tslib_1.__exportStar(require_solana(), exports2);
    tslib_1.__exportStar(require_stellar(), exports2);
    tslib_1.__exportStar(require_tezos(), exports2);
  }
});

// node_modules/@trezor/connect/lib/exports.js
var require_exports = __commonJS({
  "node_modules/@trezor/connect/lib/exports.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parseConnectSettings = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_constants2(), exports2);
    tslib_1.__exportStar(require_events2(), exports2);
    tslib_1.__exportStar(require_types3(), exports2);
    var connectSettings_1 = require_connectSettings();
    Object.defineProperty(exports2, "parseConnectSettings", { enumerable: true, get: function() {
      return connectSettings_1.parseConnectSettings;
    } });
  }
});

// node_modules/@trezor/connect-web/lib/index.js
var require_lib6 = __commonJS({
  "node_modules/@trezor/connect-web/lib/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TrezorConnectDynamicImpl = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var factory_1 = require_factory();
    var core_in_iframe_1 = require_core_in_iframe();
    var core_in_popup_1 = require_core_in_popup();
    var proxy_event_emitter_1 = tslib_1.__importDefault(require_proxy_event_emitter());
    var connectSettings_1 = require_connectSettings2();
    var IFRAME_ERRORS = ["Init_IframeBlocked", "Init_IframeTimeout", "Transport_Missing"];
    var TrezorConnectDynamicImpl = class {
      constructor() {
        this.currentTarget = "iframe";
        this.coreInIframeImpl = new core_in_iframe_1.CoreInIframe();
        this.coreInPopupImpl = new core_in_popup_1.CoreInPopup();
        this.eventEmitter = new proxy_event_emitter_1.default([
          this.coreInIframeImpl.eventEmitter,
          this.coreInPopupImpl.eventEmitter
        ]);
      }
      getTarget() {
        return this.currentTarget === "iframe" ? this.coreInIframeImpl : this.coreInPopupImpl;
      }
      async switchTarget(target) {
        if (this.currentTarget === target) {
          return;
        }
        await this.getTarget().dispose();
        this.currentTarget = target;
        await this.getTarget().init(this.lastSettings);
      }
      manifest(manifest) {
        this.lastSettings = Object.assign(Object.assign({}, this.lastSettings), { manifest });
        this.getTarget().manifest(manifest);
      }
      async init(settings2 = {}) {
        const env = (0, connectSettings_1.getEnv)();
        if (settings2.coreMode === "iframe" || settings2.popup === false || env === "webextension") {
          this.currentTarget = "iframe";
        } else if (settings2.coreMode === "popup") {
          this.currentTarget = "core-in-popup";
        } else {
          settings2.coreMode = "auto";
          this.currentTarget = "iframe";
        }
        this.lastSettings = settings2;
        try {
          return await this.getTarget().init(settings2);
        } catch (error) {
          if (await this.handleErrorFallback(error.code)) {
            return await this.getTarget().init(settings2);
          }
          throw error;
        }
      }
      async call(params) {
        const response = await this.getTarget().call(params);
        if (!response.success) {
          if (await this.handleErrorFallback(response.payload.code)) {
            return await this.getTarget().call(params);
          }
        }
        return response;
      }
      async handleErrorFallback(errorCode) {
        var _a, _b;
        if (((_a = this.lastSettings) === null || _a === void 0 ? void 0 : _a.coreMode) === "auto" && IFRAME_ERRORS.includes(errorCode)) {
          const webUsbUnavailableInBrowser = !navigator.usb;
          const webUsbDisabledInSettings = ((_b = this.lastSettings.transports) === null || _b === void 0 ? void 0 : _b.includes("WebUsbTransport")) === false || this.lastSettings.webusb === false;
          if (errorCode === "Transport_Missing" && (webUsbUnavailableInBrowser || webUsbDisabledInSettings)) {
            return false;
          }
          await this.switchTarget("core-in-popup");
          return true;
        }
        return false;
      }
      requestLogin(params) {
        return this.getTarget().requestLogin(params);
      }
      uiResponse(params) {
        return this.getTarget().uiResponse(params);
      }
      renderWebUSBButton() {
        return this.getTarget().renderWebUSBButton();
      }
      disableWebUSB() {
        return this.getTarget().disableWebUSB();
      }
      requestWebUSBDevice() {
        return this.getTarget().requestWebUSBDevice();
      }
      cancel(error) {
        return this.getTarget().cancel(error);
      }
      dispose() {
        this.eventEmitter.removeAllListeners();
        return this.getTarget().dispose();
      }
    };
    exports2.TrezorConnectDynamicImpl = TrezorConnectDynamicImpl;
    var impl = new TrezorConnectDynamicImpl();
    var TrezorConnect = (0, factory_1.factory)({
      eventEmitter: impl.eventEmitter,
      init: impl.init.bind(impl),
      call: impl.call.bind(impl),
      manifest: impl.manifest.bind(impl),
      requestLogin: impl.requestLogin.bind(impl),
      uiResponse: impl.uiResponse.bind(impl),
      renderWebUSBButton: impl.renderWebUSBButton.bind(impl),
      disableWebUSB: impl.disableWebUSB.bind(impl),
      requestWebUSBDevice: impl.requestWebUSBDevice.bind(impl),
      cancel: impl.cancel.bind(impl),
      dispose: impl.dispose.bind(impl)
    });
    exports2.default = TrezorConnect;
    tslib_1.__exportStar(require_exports(), exports2);
  }
});
export default require_lib6();
//# sourceMappingURL=lib-CKDRCM6R.js.map
