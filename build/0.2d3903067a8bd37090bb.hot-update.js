"use strict";
self["webpackHotUpdatekalkulator"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BinaryCalculator)
/* harmony export */ });
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BinaryCalculator = /*#__PURE__*/function (_Calculator) {
  _inherits(BinaryCalculator, _Calculator);
  var _super = _createSuper(BinaryCalculator);
  function BinaryCalculator(settings) {
    var _this;
    _classCallCheck(this, BinaryCalculator);
    _this = _super.call(this, settings);
    console.log(_this.getName());
    return _this;
  }
  _createClass(BinaryCalculator, [{
    key: "changeNumber",
    value: function changeNumber(root) {
      var input = root.firstElementChild;
      input.innerText = +input.innerText === 0 ? 1 : 0;
      this.checkNumber();
      this.updateResult();
    }
  }, {
    key: "add",
    value: function add(numberX, numberY) {
      var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (var i = numberX.length - 1; i >= 0; i--) {
        var carryBit = numberX[i] + numberY[i] + result[i];
        if (carryBit === 2) {
          result[i] = 0;
          result[i - 1] = 1;
        } else if (carryBit === 3) {
          result[i] = 1;
          result[i - 1] = 1;
        } else {
          result[i] = carryBit;
        }
      }
      return result;
    }
  }]);
  return BinaryCalculator;
}(_Calculator__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calculator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Calculator = /*#__PURE__*/function () {
  function Calculator(selectorName) {
    _classCallCheck(this, Calculator);
    this.name = selectorName;
    this.$calculatorDOMElement = document.querySelector(selectorName);
    this.firstNumberArray = [];
    this.secondNumberArray = [];
    this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.initEvents();
  }
  _createClass(Calculator, [{
    key: "changeNumber",
    value: function changeNumber(root) {
      console.error("Zaimplementuj tę metodę w klasie dziedziczącej.");
    }
  }, {
    key: "add",
    value: function add(numberX, numberY) {
      console.error("Zaimplementuj tę metodę w klasie dziedziczącej.");
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
  }, {
    key: "getName",
    value: function getName() {
      return "Hello I am ".concat(this.name);
    }
  }, {
    key: "checkNumber",
    value: function checkNumber() {
      var root = this.$calculatorDOMElement;
      var $firstNumber = root.querySelectorAll(".group-number label:first-child");
      var $secondNumber = root.querySelectorAll(".group-number label:nth-child(2)");
      var $resultNumber = root.querySelectorAll(".group-number .result-bit");
      for (var i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {
        this.firstNumberArray[i] = parseInt($firstNumber[j].firstElementChild.innerText);
        this.secondNumberArray[i] = parseInt($secondNumber[j].firstElementChild.innerText);
        this.resultNumberArray[i] = parseInt($resultNumber[j].firstElementChild.innerText);
      }
      console.log(this.firstNumberArray, this.secondNumberArray);
      this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
    }
  }, {
    key: "updateResult",
    value: function updateResult() {
      var results = this.$calculatorDOMElement.querySelectorAll(".result-bit span");
      this.resultNumberArray.reverse().forEach(function (number, i) {
        results[i].innerText = number;
      });
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this = this;
      this.$calculatorDOMElement.addEventListener("click", function (event) {
        if (event.target.parentElement.classList.contains("display-number")) {
          var parentLabel = event.target.parentElement;
          _this.changeNumber(parentLabel);
        }
      });
    }
  }]);
  return Calculator;
}(); //  Calculator;


/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DecCalculator = /*#__PURE__*/function (_Calculator) {
  _inherits(DecCalculator, _Calculator);
  var _super = _createSuper(DecCalculator);
  function DecCalculator(selector) {
    var _this;
    _classCallCheck(this, DecCalculator);
    _this = _super.call(this, selector);
    _this.$tooltip = _this.$calculatorDOMElement.querySelector(".popover");
    return _this;
  }
  _createClass(DecCalculator, [{
    key: "changeNumber",
    value: function changeNumber(parentElement) {
      var input = parentElement.firstElementChild;
      input.contentEditable = true;
      input.focus();
      this.showTooltip("Naciśnij aby dodać wartości");
    }
  }, {
    key: "showTooltip",
    value: function showTooltip(text) {
      this.$tooltip.children[1].innerText = text;
      this.$tooltip.classList.add("show");
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip() {
      this.$tooltip.classList.remove("show");
    }
  }, {
    key: "add",
    value: function add(numbersX, numbersY) {
      var sumNumbers = [];
      for (var i = numbersX.length - 1; i >= 0; i--) {
        var sumRows = numbersX[i] + numbersY[i];
        var sum = typeof sumNumbers[i] === "undefined" ? sumRows : sumRows + sumNumbers[i];
        if (sum > 9) {
          sumNumbers[i] = sum % 10;
          sumNumbers[i - 1] = 1;
        } else {
          sumNumbers[i] = sum;
        }
      }
      return sumNumbers;
    }
  }, {
    key: "checkNumber",
    value: function checkNumber() {
      _get(_getPrototypeOf(DecCalculator.prototype), "checkNumber", this).call(this);
      return [].concat(_toConsumableArray(this.firstNumberArray), _toConsumableArray(this.secondNumberArray)).every(function (el) {
        console.log(el, typeof el === "number" && el < 10 && el >= 0);
        return typeof el === "number" && el < 10 && el >= 0;
      });
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this2 = this;
      _get(_getPrototypeOf(DecCalculator.prototype), "initEvents", this).call(this);
      this.$calculatorDOMElement.querySelector(".operator-bar").addEventListener("click", function () {
        _this2.hideTooltip();
        var checkNumbers = _this2.checkNumber();
        if (checkNumbers) {
          _this2.updateResult();
        } else {
          _this2.showTooltip("Wartości muszą być cyframi (0-9)");
        }
      });
    }
  }]);
  return DecCalculator;
}(_Calculator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ef150983c5b0dc0a4be5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsTUFBTTtVQUNMMkMsVUFBVSxDQUFDM0MsQ0FBQyxDQUFDLEdBQUc2QyxHQUFHO1FBQ3JCO01BQ0Y7TUFFQSxPQUFPRixVQUFVO0lBQ25CO0VBQUM7SUFBQTtJQUFBLE9BRUQsdUJBQWM7TUFDWjtNQUNBLE9BQU8sNkJBQUksSUFBSSxDQUFDbkMsZ0JBQWdCLHNCQUFLLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUVxQyxLQUFLLENBQUMsVUFBQ0MsRUFBRSxFQUFLO1FBQ3pFM0QsT0FBTyxDQUFDQyxHQUFHLENBQUMwRCxFQUFFLEVBQUUsT0FBT0EsRUFBRSxLQUFLLFFBQVEsSUFBSUEsRUFBRSxHQUFHLEVBQUUsSUFBSUEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxPQUFPLE9BQU9BLEVBQUUsS0FBSyxRQUFRLElBQUlBLEVBQUUsR0FBRyxFQUFFLElBQUlBLEVBQUUsSUFBSSxDQUFDO01BQ3JELENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQTtJQUFBLE9BRUQsc0JBQWE7TUFBQTtNQUNYO01BRUEsSUFBSSxDQUFDMUMscUJBQXFCLENBQUNFLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ2lCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ3hGLE1BQUksQ0FBQ3dCLFdBQVcsRUFBRTtRQUVsQixJQUFNQyxZQUFZLEdBQUcsTUFBSSxDQUFDdEQsV0FBVyxFQUFFO1FBQ3ZDLElBQUlzRCxZQUFZLEVBQUU7VUFDaEIsTUFBSSxDQUFDckQsWUFBWSxFQUFFO1FBQ3JCLENBQUMsTUFBTTtVQUNMLE1BQUksQ0FBQ3lDLFdBQVcsQ0FBQyxrQ0FBa0MsQ0FBQztRQUN0RDtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQTtBQUFBLEVBNUR5QnBELG1EQUFVO0FBK0R0QyxpRUFBZStDLGFBQWE7Ozs7Ozs7O1VDakU1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2thbGt1bGF0b3IvLi9qcy9CaW5hcnlDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2thbGt1bGF0b3IvLi9qcy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2thbGt1bGF0b3IvLi9qcy9EZWNDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2thbGt1bGF0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmFyeUNhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xyXG4gICAgc3VwZXIoc2V0dGluZ3MpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5nZXROYW1lKCkpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTnVtYmVyKHJvb3QpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gcm9vdC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGlucHV0LmlubmVyVGV4dCA9ICtpbnB1dC5pbm5lclRleHQgPT09IDAgPyAxIDogMDtcclxuXHJcbiAgICB0aGlzLmNoZWNrTnVtYmVyKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVJlc3VsdCgpO1xyXG4gIH1cclxuXHJcbiAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcclxuICAgIGxldCByZXN1bHQgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICBmb3IgKGxldCBpID0gbnVtYmVyWC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBsZXQgY2FycnlCaXQgPSBudW1iZXJYW2ldICsgbnVtYmVyWVtpXSArIHJlc3VsdFtpXTtcclxuICAgICAgaWYgKGNhcnJ5Qml0ID09PSAyKSB7XHJcbiAgICAgICAgcmVzdWx0W2ldID0gMDtcclxuICAgICAgICByZXN1bHRbaSAtIDFdID0gMTtcclxuICAgICAgfSBlbHNlIGlmIChjYXJyeUJpdCA9PT0gMykge1xyXG4gICAgICAgIHJlc3VsdFtpXSA9IDE7XHJcbiAgICAgICAgcmVzdWx0W2kgLSAxXSA9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0W2ldID0gY2FycnlCaXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IHNlbGVjdG9yTmFtZTtcclxuICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck5hbWUpO1xyXG5cclxuICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTnVtYmVyKHJvb3QpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiWmFpbXBsZW1lbnR1aiB0xJkgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai5cIlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlphaW1wbGVtZW50dWogdMSZIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiBgSGVsbG8gSSBhbSAke3RoaXMubmFtZX1gO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tOdW1iZXIoKSB7XHJcbiAgICBsZXQgcm9vdCA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50O1xyXG4gICAgbGV0ICRmaXJzdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgbGFiZWw6Zmlyc3QtY2hpbGRcIik7XHJcbiAgICBsZXQgJHNlY29uZE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuZ3JvdXAtbnVtYmVyIGxhYmVsOm50aC1jaGlsZCgyKVwiXHJcbiAgICApO1xyXG4gICAgbGV0ICRyZXN1bHROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JvdXAtbnVtYmVyIC5yZXN1bHQtYml0XCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAkZmlyc3ROdW1iZXIubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcclxuICAgICAgdGhpcy5maXJzdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJGZpcnN0TnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNlY29uZE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJHNlY29uZE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KFxyXG4gICAgICAgICRyZXN1bHROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5maXJzdE51bWJlckFycmF5LCB0aGlzLnNlY29uZE51bWJlckFycmF5KTtcclxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSB0aGlzLmFkZChcclxuICAgICAgdGhpcy5maXJzdE51bWJlckFycmF5LFxyXG4gICAgICB0aGlzLnNlY29uZE51bWJlckFycmF5XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmVzdWx0KCkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLnJlc3VsdC1iaXQgc3BhblwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheS5yZXZlcnNlKCkuZm9yRWFjaCgobnVtYmVyLCBpKSA9PiB7XHJcbiAgICAgIHJlc3VsdHNbaV0uaW5uZXJUZXh0ID0gbnVtYmVyO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0RXZlbnRzKCkge1xyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc3BsYXktbnVtYmVyXCIpKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TGFiZWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB0aGlzLmNoYW5nZU51bWJlcihwYXJlbnRMYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gIENhbGN1bGF0b3I7XHJcbiIsImltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcclxuXHJcbmNsYXNzIERlY0NhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4gICAgc3VwZXIoc2VsZWN0b3IpO1xyXG4gICAgdGhpcy4kdG9vbHRpcCA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wb3ZlclwiKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU51bWJlcihwYXJlbnRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IHBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBpbnB1dC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xyXG4gICAgaW5wdXQuZm9jdXMoKTtcclxuICAgIHRoaXMuc2hvd1Rvb2x0aXAoXCJOYWNpxZtuaWogYWJ5IGRvZGHEhyB3YXJ0b8WbY2lcIik7XHJcbiAgfVxyXG5cclxuICBzaG93VG9vbHRpcCh0ZXh0KSB7XHJcbiAgICB0aGlzLiR0b29sdGlwLmNoaWxkcmVuWzFdLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLiR0b29sdGlwLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gIH1cclxuXHJcbiAgaGlkZVRvb2x0aXAoKSB7XHJcbiAgICB0aGlzLiR0b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gIH1cclxuXHJcbiAgYWRkKG51bWJlcnNYLCBudW1iZXJzWSkge1xyXG4gICAgY29uc3Qgc3VtTnVtYmVycyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IG51bWJlcnNYLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0IHN1bVJvd3MgPSBudW1iZXJzWFtpXSArIG51bWJlcnNZW2ldO1xyXG4gICAgICBjb25zdCBzdW0gPSB0eXBlb2Ygc3VtTnVtYmVyc1tpXSA9PT0gXCJ1bmRlZmluZWRcIiA/IHN1bVJvd3MgOiBzdW1Sb3dzICsgc3VtTnVtYmVyc1tpXTtcclxuXHJcbiAgICAgIGlmIChzdW0gPiA5KSB7XHJcbiAgICAgICAgc3VtTnVtYmVyc1tpXSA9IHN1bSAlIDEwO1xyXG4gICAgICAgIHN1bU51bWJlcnNbaSAtIDFdID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdW1OdW1iZXJzW2ldID0gc3VtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1bU51bWJlcnM7XHJcbiAgfVxyXG5cclxuICBjaGVja051bWJlcigpIHtcclxuICAgIHN1cGVyLmNoZWNrTnVtYmVyKCk7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuZmlyc3ROdW1iZXJBcnJheSwgLi4udGhpcy5zZWNvbmROdW1iZXJBcnJheV0uZXZlcnkoKGVsKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVsLCB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIgJiYgZWwgPCAxMCAmJiBlbCA+PSAwKTtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIiAmJiBlbCA8IDEwICYmIGVsID49IDA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRFdmVudHMoKSB7XHJcbiAgICBzdXBlci5pbml0RXZlbnRzKCk7XHJcblxyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVyYXRvci1iYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpO1xyXG5cclxuICAgICAgY29uc3QgY2hlY2tOdW1iZXJzID0gdGhpcy5jaGVja051bWJlcigpO1xyXG4gICAgICBpZiAoY2hlY2tOdW1iZXJzKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNob3dUb29sdGlwKFwiV2FydG/Fm2NpIG11c3rEhSBiecSHIGN5ZnJhbWkgKDAtOSlcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVjQ2FsY3VsYXRvcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWYxNTA5ODNjNWIwZGMwYTRiZTVcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkJpbmFyeUNhbGN1bGF0b3IiLCJzZXR0aW5ncyIsImNvbnNvbGUiLCJsb2ciLCJnZXROYW1lIiwicm9vdCIsImlucHV0IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbm5lclRleHQiLCJjaGVja051bWJlciIsInVwZGF0ZVJlc3VsdCIsIm51bWJlclgiLCJudW1iZXJZIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImNhcnJ5Qml0Iiwic2VsZWN0b3JOYW1lIiwibmFtZSIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcnN0TnVtYmVyQXJyYXkiLCJzZWNvbmROdW1iZXJBcnJheSIsInJlc3VsdE51bWJlckFycmF5IiwiaW5pdEV2ZW50cyIsImVycm9yIiwiJGZpcnN0TnVtYmVyIiwicXVlcnlTZWxlY3RvckFsbCIsIiRzZWNvbmROdW1iZXIiLCIkcmVzdWx0TnVtYmVyIiwiaiIsInBhcnNlSW50IiwiYWRkIiwicmVzdWx0cyIsInJldmVyc2UiLCJmb3JFYWNoIiwibnVtYmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50TGFiZWwiLCJjaGFuZ2VOdW1iZXIiLCJEZWNDYWxjdWxhdG9yIiwic2VsZWN0b3IiLCIkdG9vbHRpcCIsImNvbnRlbnRFZGl0YWJsZSIsImZvY3VzIiwic2hvd1Rvb2x0aXAiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJyZW1vdmUiLCJudW1iZXJzWCIsIm51bWJlcnNZIiwic3VtTnVtYmVycyIsInN1bVJvd3MiLCJzdW0iLCJldmVyeSIsImVsIiwiaGlkZVRvb2x0aXAiLCJjaGVja051bWJlcnMiXSwic291cmNlUm9vdCI6IiJ9