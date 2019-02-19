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
exports.copySelected = copySelected;

exports['default'] = function (context) {
	var selectedOverrides = context.document.documentData().selectedOverrides();
	if (selectedOverrides.length == 1) {
		selectedOverrides.forEach(function (selectedOverride) {
			var tokens = selectedOverride.split('#');
			var element = tokens[tokens.length - 1];
			var tokensSplit = element.split('_');
			var selectedOverrideId = tokensSplit[tokensSplit.length - 2];
			// googleAnalytics(context, "Escriba Initiated", "Copy selected", selectedOverrideId);
			copySelected(selectedOverrideId, context);
		});
	}
	if (selectedOverrides.length < 1) {
		UI.message('⚠️ Select one Symbol override to copy ⚠️');
		// googleAnalytics(context, "Escriba UI", "No override selected to copy");	
	}
	if (selectedOverrides.length > 1) {
		UI.message('⚠️ You have selected more than one override, select only one Symbol override to copy ⚠️');
		// googleAnalytics(context, "Escriba UI", "More than one override selected to copy");
	}
};

var _analytics = __webpack_require__(1);

var _analytics2 = _interopRequireDefault(_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var sketch = __webpack_require__(2);
var doc = sketch.getSelectedDocument();
var selection = doc.selectedLayers.layers;
var UI = __webpack_require__(3);
var Settings = __webpack_require__(4);

function copySelected(selectedOverrideId, context) {
	selection.forEach(function (layer) {
		layer.overrides.forEach(function (override) {
			if (selectedOverrideId == override.affectedLayer.id) {
				var string = override.value;

				var property = override.property;
				var settingName = ['settings' + String(property)];
				Settings.setSessionVariable(settingName, string);

				// googleAnalytics(context, "Escriba Success", "Copy done", string);
			}
		});
	});
}
// para hacer varios overrides
// var pedro = 'dede';
// var settings = [`settings${pedro}`];
// console.log(settings)

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ }),
/* 4 */
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
