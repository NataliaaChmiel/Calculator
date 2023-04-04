"use strict";
self["webpackHotUpdatekalkulator"](0,{

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DecCalculator)
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e977a8a78ec1bf25581")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtVQUNoQixNQUFJLENBQUNFLFlBQVksRUFBRTtRQUNyQixDQUFDLE1BQU07VUFDTCxNQUFJLENBQUN4QixXQUFXLENBQUMsa0NBQWtDLENBQUM7UUFDdEQ7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUE7QUFBQSxFQTVEd0NYLG1EQUFVOzs7Ozs7Ozs7VUNGckQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYWxrdWxhdG9yLy4vanMvRGVjQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9rYWxrdWxhdG9yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNDYWxjdWxhdG9yIGV4dGVuZHMgQ2FsY3VsYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHNlbGVjdG9yKTtcclxuICAgIHRoaXMuJHRvb2x0aXAgPSB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG92ZXJcIik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOdW1iZXIocGFyZW50RWxlbWVudCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBwYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgaW5wdXQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICB0aGlzLnNob3dUb29sdGlwKFwiTmFjacWbbmlqIGFieSBkb2RhxIcgd2FydG/Fm2NpXCIpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1Rvb2x0aXAodGV4dCkge1xyXG4gICAgdGhpcy4kdG9vbHRpcC5jaGlsZHJlblsxXS5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy4kdG9vbHRpcC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICB9XHJcblxyXG4gIGhpZGVUb29sdGlwKCkge1xyXG4gICAgdGhpcy4kdG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICB9XHJcblxyXG4gIGFkZChudW1iZXJzWCwgbnVtYmVyc1kpIHtcclxuICAgIGNvbnN0IHN1bU51bWJlcnMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSBudW1iZXJzWC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBjb25zdCBzdW1Sb3dzID0gbnVtYmVyc1hbaV0gKyBudW1iZXJzWVtpXTtcclxuICAgICAgY29uc3Qgc3VtID0gdHlwZW9mIHN1bU51bWJlcnNbaV0gPT09IFwidW5kZWZpbmVkXCIgPyBzdW1Sb3dzIDogc3VtUm93cyArIHN1bU51bWJlcnNbaV07XHJcblxyXG4gICAgICBpZiAoc3VtID4gOSkge1xyXG4gICAgICAgIHN1bU51bWJlcnNbaV0gPSBzdW0gJSAxMDtcclxuICAgICAgICBzdW1OdW1iZXJzW2kgLSAxXSA9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3VtTnVtYmVyc1tpXSA9IHN1bTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdW1OdW1iZXJzO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tOdW1iZXIoKSB7XHJcbiAgICBzdXBlci5jaGVja051bWJlcigpO1xyXG4gICAgcmV0dXJuIFsuLi50aGlzLmZpcnN0TnVtYmVyQXJyYXksIC4uLnRoaXMuc2Vjb25kTnVtYmVyQXJyYXldLmV2ZXJ5KChlbCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlbCwgdHlwZW9mIGVsID09PSBcIm51bWJlclwiICYmIGVsIDwgMTAgJiYgZWwgPj0gMCk7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIgJiYgZWwgPCAxMCAmJiBlbCA+PSAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0RXZlbnRzKCkge1xyXG4gICAgc3VwZXIuaW5pdEV2ZW50cygpO1xyXG5cclxuICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3BlcmF0b3ItYmFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrTnVtYmVycyA9IHRoaXMuY2hlY2tOdW1iZXIoKTtcclxuICAgICAgaWYgKGNoZWNrTnVtYmVycykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaG93VG9vbHRpcChcIldhcnRvxZtjaSBtdXN6xIUgYnnEhyBjeWZyYW1pICgwLTkpXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbiBcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWU5NzdhOGE3OGVjMWJmMjU1ODFcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkRlY0NhbGN1bGF0b3IiLCJzZWxlY3RvciIsIiR0b29sdGlwIiwiJGNhbGN1bGF0b3JET01FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJpbnB1dCIsImZpcnN0RWxlbWVudENoaWxkIiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJzaG93VG9vbHRpcCIsInRleHQiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm51bWJlcnNYIiwibnVtYmVyc1kiLCJzdW1OdW1iZXJzIiwiaSIsImxlbmd0aCIsInN1bVJvd3MiLCJzdW0iLCJmaXJzdE51bWJlckFycmF5Iiwic2Vjb25kTnVtYmVyQXJyYXkiLCJldmVyeSIsImVsIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlVG9vbHRpcCIsImNoZWNrTnVtYmVycyIsImNoZWNrTnVtYmVyIiwidXBkYXRlUmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==