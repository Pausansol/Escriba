var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function (context) {
  (0, _analytics2['default'])(context, "Escriba settings", "Open");

  // create the alertWindow UI
  var alertWindow = (0, _createAlertWindow2['default'])(context);

  // create the radioButtons
  // Create inputs

  // Create the main view
  var viewWidth = 400;
  var viewHeight = 210;
  var viewSpacer = 10;
  var layerStyleCheckbox = NSButton.alloc().initWithFrame(NSMakeRect(0, viewHeight - 125, viewWidth - viewSpacer, 20));
  var textStyleCheckbox = NSButton.alloc().initWithFrame(NSMakeRect(0, viewHeight - 150, viewWidth / 2 - viewSpacer, 20));
  var stringValueCheckbox = NSButton.alloc().initWithFrame(NSMakeRect(0, viewHeight - 175, viewWidth / 2 - viewSpacer, 20));
  var symbolIDCheckbox = NSButton.alloc().initWithFrame(NSMakeRect(0, viewHeight - 200, viewWidth / 2 - viewSpacer, 20));

  var layerStyleSetting = Settings.settingForKey('ValuelayerStyle');
  var textStyleSetting = Settings.settingForKey('ValuetextStyle');
  var stringValueSetting = Settings.settingForKey('ValuestringValue');
  var symbolIDSetting = Settings.settingForKey('ValuesymbolID');
  // Configure checkboxes

  layerStyleCheckbox.setButtonType(NSSwitchButton);
  layerStyleCheckbox.setBezelStyle(0);
  layerStyleCheckbox.setTitle("Layer Style");
  if (layerStyleSetting == 1 || layerStyleSetting == undefined) {
    layerStyleCheckbox.setState(NSOnState);
  } else {
    layerStyleCheckbox.setState(NSOffState);
  }

  textStyleCheckbox.setButtonType(NSSwitchButton);
  textStyleCheckbox.setBezelStyle(0);
  textStyleCheckbox.setTitle("Text Style");
  if (textStyleSetting == 1 || textStyleSetting == undefined) {
    textStyleCheckbox.setState(NSOnState);
  } else {
    textStyleCheckbox.setState(NSOffState);
  }

  stringValueCheckbox.setButtonType(NSSwitchButton);
  stringValueCheckbox.setBezelStyle(0);
  stringValueCheckbox.setTitle("Text content");
  if (stringValueSetting == 1 || stringValueSetting == undefined) {
    stringValueCheckbox.setState(NSOnState);
  } else {
    stringValueCheckbox.setState(NSOffState);
  }

  symbolIDCheckbox.setButtonType(NSSwitchButton);
  symbolIDCheckbox.setBezelStyle(0);
  symbolIDCheckbox.setTitle("Symbol");
  if (symbolIDSetting == 1 || symbolIDSetting == undefined) {
    symbolIDCheckbox.setState(NSOnState);
  } else {
    symbolIDCheckbox.setState(NSOffState);
  }

  //Adding inputs to the dialog
  alertWindow.addAccessoryView(layerStyleCheckbox);
  alertWindow.addAccessoryView(textStyleCheckbox);
  alertWindow.addAccessoryView(stringValueCheckbox);
  alertWindow.addAccessoryView(symbolIDCheckbox);

  alertWindow.addButtonWithTitle('Save');
  alertWindow.addButtonWithTitle('Cancel');

  if (alertWindow.runModal() == NSAlertFirstButtonReturn) {
    Settings.setSettingForKey('ValuelayerStyle', layerStyleCheckbox.state());
    Settings.setSettingForKey('ValuetextStyle', textStyleCheckbox.state());
    Settings.setSettingForKey('ValuestringValue', stringValueCheckbox.state());
    Settings.setSettingForKey('ValuesymbolID', symbolIDCheckbox.state());
    (0, _analytics2['default'])(context, "Escriba settings", "Save");
  }
};

var _createAlertWindow = __webpack_require__(1);

var _createAlertWindow2 = _interopRequireDefault(_createAlertWindow);

var _analytics = __webpack_require__(2);

var _analytics2 = _interopRequireDefault(_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Settings = __webpack_require__(3);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createAlertWindow;
function createAlertWindow(context) {
  var alertWindow = COSAlertWindow['new']();

  alertWindow.setIcon(NSImage.alloc().initByReferencingFile(context.plugin.urlForResourceNamed('icon.png').path()));
  alertWindow.setMessageText('Escriba');
  alertWindow.setInformativeText("Configure your Escriba preferences. What properties of overrides do you want to Copy&Paste?");

  return alertWindow;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = googleAnalytics;
function googleAnalytics(context, category, action, label, value) {
  var trackingID = "UA-128191866-1";
  var uuidKey = "google.analytics.uuid";
  var url = "https://www.google-analytics.com/collect?v=1";
  var uuid = NSUserDefaults.standardUserDefaults().objectForKey(uuidKey);

  if (!uuid) {
    uuid = NSUUID.UUID().UUIDString();
    NSUserDefaults.standardUserDefaults().setObject_forKey(uuid, uuidKey);
  }

  // Tracking ID
  url += "&tid=" + trackingID;
  // Source
  url += "&ds=sketch" + MSApplicationMetadata.metadata().appVersion;
  // Client ID
  url += "&cid=" + uuid;
  // pageview, screenview, event, transaction, item, social, exception, timing
  url += "&t=event";
  // App Name
  url += "&an=" + encodeURI(context.plugin.name());
  // App Version
  url += "&av=" + context.plugin.version();
  // Event category
  url += "&ec=" + encodeURI(category);
  // Event action
  url += "&ea=" + encodeURI(action);
  // Event label
  if (label) {
    url += "&el=" + encodeURI(label);
  }
  // Event value
  if (value) {
    url += "&ev=" + encodeURI(value);
  }

  var session = NSURLSession.sharedSession(),
      task = session.dataTaskWithURL(NSURL.URLWithString(NSString.stringWithString(url)));
  task.resume();
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ })
/******/ ]);
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')
