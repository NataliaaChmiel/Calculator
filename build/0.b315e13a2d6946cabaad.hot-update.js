"use strict";
self["webpackHotUpdatekalkulator"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

    /* Method changing number
     */
  }, {
    key: "changeNumber",
    value: function changeNumber(root) {
      var input = root.firstElementChild;
      input.innerText = +input.innerText === 0 ? 1 : 0;
      this.checkNumber();
      this.updateResult();
    }
  }]);
  return BinaryCalculator;
}(_Calculator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BinaryCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8bdbc4b95334b0a3c240")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMzE1ZTEzYTJkNjk0NmNhYmFhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUFBLElBRWhDQyxnQkFBZ0I7RUFBQTtFQUFBO0VBQ3BCLDBCQUFZQyxRQUFRLEVBQUU7SUFBQTtJQUFBO0lBQ3BCLDBCQUFNQSxRQUFRO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQUtDLE9BQU8sRUFBRSxDQUFDO0lBQUM7RUFDOUI7RUFBQztJQUFBO0lBQUEsT0FFRCxhQUFJQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtNQUNwQixJQUFJQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUN4QyxLQUFLLElBQUlDLENBQUMsR0FBR0gsT0FBTyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFFRCxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtRQUM1QyxJQUFJRSxRQUFRLEdBQUdMLE9BQU8sQ0FBQ0csQ0FBQyxDQUFDLEdBQUdGLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLEdBQUdELE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDO1FBQ2xELElBQUlFLFFBQVEsS0FBSyxDQUFDLEVBQUU7VUFDbEJILE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQztVQUNiRCxNQUFNLENBQUNDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ25CLENBQUMsTUFBTSxJQUFJRSxRQUFRLEtBQUssQ0FBQyxFQUFFO1VBQ3pCSCxNQUFNLENBQUNDLENBQUMsQ0FBQyxHQUFHLENBQUM7VUFDYkQsTUFBTSxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNuQixDQUFDLE1BQU07VUFDTEQsTUFBTSxDQUFDQyxDQUFDLENBQUMsR0FBR0UsUUFBUTtRQUN0QjtNQUNGO01BQ0EsT0FBT0gsTUFBTTtJQUNmOztJQUVBO0FBQ0Y7RUFERTtJQUFBO0lBQUEsT0FFQSxzQkFBYUksSUFBSSxFQUFFO01BQ2pCLElBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxpQkFBaUI7TUFDcENELEtBQUssQ0FBQ0UsU0FBUyxHQUFHLENBQUNGLEtBQUssQ0FBQ0UsU0FBUyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztNQUVoRCxJQUFJLENBQUNDLFdBQVcsRUFBRTtNQUNsQixJQUFJLENBQUNDLFlBQVksRUFBRTtJQUNyQjtFQUFDO0VBQUE7QUFBQSxFQS9CNEJqQixtREFBVTtBQWtDekMsaUVBQWVDLGdCQUFnQjs7Ozs7Ozs7VUNwQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2Fsa3VsYXRvci8uL2pzL0JpbmFyeUNhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8va2Fsa3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xyXG5cclxuY2xhc3MgQmluYXJ5Q2FsY3VsYXRvciBleHRlbmRzIENhbGN1bGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XHJcbiAgICBzdXBlcihzZXR0aW5ncyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdldE5hbWUoKSk7XHJcbiAgfVxyXG5cclxuICBhZGQobnVtYmVyWCwgbnVtYmVyWSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIGZvciAobGV0IGkgPSBudW1iZXJYLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGxldCBjYXJyeUJpdCA9IG51bWJlclhbaV0gKyBudW1iZXJZW2ldICsgcmVzdWx0W2ldO1xyXG4gICAgICBpZiAoY2FycnlCaXQgPT09IDIpIHtcclxuICAgICAgICByZXN1bHRbaV0gPSAwO1xyXG4gICAgICAgIHJlc3VsdFtpIC0gMV0gPSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKGNhcnJ5Qml0ID09PSAzKSB7XHJcbiAgICAgICAgcmVzdWx0W2ldID0gMTtcclxuICAgICAgICByZXN1bHRbaSAtIDFdID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHRbaV0gPSBjYXJyeUJpdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qIE1ldGhvZCBjaGFuZ2luZyBudW1iZXJcclxuICAgKi9cclxuICBjaGFuZ2VOdW1iZXIocm9vdCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSByb290LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgaW5wdXQuaW5uZXJUZXh0ID0gK2lucHV0LmlubmVyVGV4dCA9PT0gMCA/IDEgOiAwO1xyXG5cclxuICAgIHRoaXMuY2hlY2tOdW1iZXIoKTtcclxuICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaW5hcnlDYWxjdWxhdG9yO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YmRiYzRiOTUzMzRiMGEzYzI0MFwiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwiQmluYXJ5Q2FsY3VsYXRvciIsInNldHRpbmdzIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJudW1iZXJYIiwibnVtYmVyWSIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJjYXJyeUJpdCIsInJvb3QiLCJpbnB1dCIsImZpcnN0RWxlbWVudENoaWxkIiwiaW5uZXJUZXh0IiwiY2hlY2tOdW1iZXIiLCJ1cGRhdGVSZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9