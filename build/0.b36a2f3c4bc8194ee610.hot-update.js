self["webpackHotUpdatekalkulator"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BinaryCalculator)
/* harmony export */ });
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Calculator__WEBPACK_IMPORTED_MODULE_0__);
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
}((_Calculator__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ 25:
/***/ (() => {

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
}();
Calculator;

/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Calculator__WEBPACK_IMPORTED_MODULE_0__);
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
}((_Calculator__WEBPACK_IMPORTED_MODULE_0___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fe7ac327008a1e5652f6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkIsQ0FBQyxNQUFNO1VBQ0wyQyxVQUFVLENBQUMzQyxDQUFDLENBQUMsR0FBRzZDLEdBQUc7UUFDckI7TUFDRjtNQUVBLE9BQU9GLFVBQVU7SUFDbkI7RUFBQztJQUFBO0lBQUEsT0FFRCx1QkFBYztNQUNaO01BQ0EsT0FBTyw2QkFBSSxJQUFJLENBQUNuQyxnQkFBZ0Isc0JBQUssSUFBSSxDQUFDQyxpQkFBaUIsR0FBRXFDLEtBQUssQ0FBQyxVQUFDQyxFQUFFLEVBQUs7UUFDekUzRCxPQUFPLENBQUNDLEdBQUcsQ0FBQzBELEVBQUUsRUFBRSxPQUFPQSxFQUFFLEtBQUssUUFBUSxJQUFJQSxFQUFFLEdBQUcsRUFBRSxJQUFJQSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELE9BQU8sT0FBT0EsRUFBRSxLQUFLLFFBQVEsSUFBSUEsRUFBRSxHQUFHLEVBQUUsSUFBSUEsRUFBRSxJQUFJLENBQUM7TUFDckQsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBO0lBQUEsT0FFRCxzQkFBYTtNQUFBO01BQ1g7TUFFQSxJQUFJLENBQUMxQyxxQkFBcUIsQ0FBQ0UsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDaUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDeEYsTUFBSSxDQUFDd0IsV0FBVyxFQUFFO1FBRWxCLElBQU1DLFlBQVksR0FBRyxNQUFJLENBQUN0RCxXQUFXLEVBQUU7UUFDdkMsSUFBSXNELFlBQVksRUFBRTtVQUNoQixNQUFJLENBQUNyRCxZQUFZLEVBQUU7UUFDckIsQ0FBQyxNQUFNO1VBQ0wsTUFBSSxDQUFDeUMsV0FBVyxDQUFDLGtDQUFrQyxDQUFDO1FBQ3REO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBO0FBQUEsRUE1RHlCcEQsb0RBQVU7QUErRHRDLGlFQUFlK0MsYUFBYTs7Ozs7Ozs7VUNqRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2Fsa3VsYXRvci8uL2pzL0JpbmFyeUNhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8va2Fsa3VsYXRvci8uL2pzL0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8va2Fsa3VsYXRvci8uL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8va2Fsa3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluYXJ5Q2FsY3VsYXRvciBleHRlbmRzIENhbGN1bGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XHJcbiAgICBzdXBlcihzZXR0aW5ncyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdldE5hbWUoKSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOdW1iZXIocm9vdCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSByb290LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgaW5wdXQuaW5uZXJUZXh0ID0gK2lucHV0LmlubmVyVGV4dCA9PT0gMCA/IDEgOiAwO1xyXG5cclxuICAgIHRoaXMuY2hlY2tOdW1iZXIoKTtcclxuICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XHJcbiAgfVxyXG5cclxuICBhZGQobnVtYmVyWCwgbnVtYmVyWSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIGZvciAobGV0IGkgPSBudW1iZXJYLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGxldCBjYXJyeUJpdCA9IG51bWJlclhbaV0gKyBudW1iZXJZW2ldICsgcmVzdWx0W2ldO1xyXG4gICAgICBpZiAoY2FycnlCaXQgPT09IDIpIHtcclxuICAgICAgICByZXN1bHRbaV0gPSAwO1xyXG4gICAgICAgIHJlc3VsdFtpIC0gMV0gPSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKGNhcnJ5Qml0ID09PSAzKSB7XHJcbiAgICAgICAgcmVzdWx0W2ldID0gMTtcclxuICAgICAgICByZXN1bHRbaSAtIDFdID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHRbaV0gPSBjYXJyeUJpdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuXHJcbiIsImNsYXNzIENhbGN1bGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gc2VsZWN0b3JOYW1lO1xyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yTmFtZSk7XHJcblxyXG4gICAgdGhpcy5maXJzdE51bWJlckFycmF5ID0gW107XHJcbiAgICB0aGlzLnNlY29uZE51bWJlckFycmF5ID0gW107XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOdW1iZXIocm9vdCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJaYWltcGxlbWVudHVqIHTEmSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLlwiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiWmFpbXBsZW1lbnR1aiB0xJkgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai5cIlxyXG4gICAgKTtcclxuICAgIHJldHVybiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIGBIZWxsbyBJIGFtICR7dGhpcy5uYW1lfWA7XHJcbiAgfVxyXG5cclxuICBjaGVja051bWJlcigpIHtcclxuICAgIGxldCByb290ID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQ7XHJcbiAgICBsZXQgJGZpcnN0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciBsYWJlbDpmaXJzdC1jaGlsZFwiKTtcclxuICAgIGxldCAkc2Vjb25kTnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5ncm91cC1udW1iZXIgbGFiZWw6bnRoLWNoaWxkKDIpXCJcclxuICAgICk7XHJcbiAgICBsZXQgJHJlc3VsdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgLnJlc3VsdC1iaXRcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9ICRmaXJzdE51bWJlci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkZmlyc3ROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkc2Vjb25kTnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJHJlc3VsdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TnVtYmVyQXJyYXksIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkpO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IHRoaXMuYWRkKFxyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXksXHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZXN1bHQoKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIucmVzdWx0LWJpdCBzcGFuXCJcclxuICAgICk7XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5LnJldmVyc2UoKS5mb3JFYWNoKChudW1iZXIsIGkpID0+IHtcclxuICAgICAgcmVzdWx0c1tpXS5pbm5lclRleHQgPSBudW1iZXI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRFdmVudHMoKSB7XHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzcGxheS1udW1iZXJcIikpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRMYWJlbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTnVtYmVyKHBhcmVudExhYmVsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4gQ2FsY3VsYXRvcjtcclxuIiwiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xyXG5cclxuY2xhc3MgRGVjQ2FsY3VsYXRvciBleHRlbmRzIENhbGN1bGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihzZWxlY3Rvcik7XHJcbiAgICB0aGlzLiR0b29sdGlwID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdmVyXCIpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTnVtYmVyKHBhcmVudEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gcGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGlucHV0LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XHJcbiAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgdGhpcy5zaG93VG9vbHRpcChcIk5hY2nFm25paiBhYnkgZG9kYcSHIHdhcnRvxZtjaVwiKTtcclxuICB9XHJcblxyXG4gIHNob3dUb29sdGlwKHRleHQpIHtcclxuICAgIHRoaXMuJHRvb2x0aXAuY2hpbGRyZW5bMV0uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuJHRvb2x0aXAuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgfVxyXG5cclxuICBoaWRlVG9vbHRpcCgpIHtcclxuICAgIHRoaXMuJHRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgfVxyXG5cclxuICBhZGQobnVtYmVyc1gsIG51bWJlcnNZKSB7XHJcbiAgICBjb25zdCBzdW1OdW1iZXJzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gbnVtYmVyc1gubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgY29uc3Qgc3VtUm93cyA9IG51bWJlcnNYW2ldICsgbnVtYmVyc1lbaV07XHJcbiAgICAgIGNvbnN0IHN1bSA9IHR5cGVvZiBzdW1OdW1iZXJzW2ldID09PSBcInVuZGVmaW5lZFwiID8gc3VtUm93cyA6IHN1bVJvd3MgKyBzdW1OdW1iZXJzW2ldO1xyXG5cclxuICAgICAgaWYgKHN1bSA+IDkpIHtcclxuICAgICAgICBzdW1OdW1iZXJzW2ldID0gc3VtICUgMTA7XHJcbiAgICAgICAgc3VtTnVtYmVyc1tpIC0gMV0gPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN1bU51bWJlcnNbaV0gPSBzdW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VtTnVtYmVycztcclxuICB9XHJcblxyXG4gIGNoZWNrTnVtYmVyKCkge1xyXG4gICAgc3VwZXIuY2hlY2tOdW1iZXIoKTtcclxuICAgIHJldHVybiBbLi4udGhpcy5maXJzdE51bWJlckFycmF5LCAuLi50aGlzLnNlY29uZE51bWJlckFycmF5XS5ldmVyeSgoZWwpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZWwsIHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIiAmJiBlbCA8IDEwICYmIGVsID49IDApO1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGVsID09PSBcIm51bWJlclwiICYmIGVsIDwgMTAgJiYgZWwgPj0gMDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEV2ZW50cygpIHtcclxuICAgIHN1cGVyLmluaXRFdmVudHMoKTtcclxuXHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZXJhdG9yLWJhclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XHJcblxyXG4gICAgICBjb25zdCBjaGVja051bWJlcnMgPSB0aGlzLmNoZWNrTnVtYmVyKCk7XHJcbiAgICAgIGlmIChjaGVja051bWJlcnMpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAoXCJXYXJ0b8WbY2kgbXVzesSFIGJ5xIcgY3lmcmFtaSAoMC05KVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWNDYWxjdWxhdG9yO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZTdhYzMyNzAwOGExZTU2NTJmNlwiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwiQmluYXJ5Q2FsY3VsYXRvciIsInNldHRpbmdzIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJyb290IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlubmVyVGV4dCIsImNoZWNrTnVtYmVyIiwidXBkYXRlUmVzdWx0IiwibnVtYmVyWCIsIm51bWJlclkiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiY2FycnlCaXQiLCJzZWxlY3Rvck5hbWUiLCJuYW1lIiwiJGNhbGN1bGF0b3JET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3ROdW1iZXJBcnJheSIsInNlY29uZE51bWJlckFycmF5IiwicmVzdWx0TnVtYmVyQXJyYXkiLCJpbml0RXZlbnRzIiwiZXJyb3IiLCIkZmlyc3ROdW1iZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHNlY29uZE51bWJlciIsIiRyZXN1bHROdW1iZXIiLCJqIiwicGFyc2VJbnQiLCJhZGQiLCJyZXN1bHRzIiwicmV2ZXJzZSIsImZvckVhY2giLCJudW1iZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRMYWJlbCIsImNoYW5nZU51bWJlciIsIkRlY0NhbGN1bGF0b3IiLCJzZWxlY3RvciIsIiR0b29sdGlwIiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJzaG93VG9vbHRpcCIsInRleHQiLCJjaGlsZHJlbiIsInJlbW92ZSIsIm51bWJlcnNYIiwibnVtYmVyc1kiLCJzdW1OdW1iZXJzIiwic3VtUm93cyIsInN1bSIsImV2ZXJ5IiwiZWwiLCJoaWRlVG9vbHRpcCIsImNoZWNrTnVtYmVycyJdLCJzb3VyY2VSb290IjoiIn0=