"use strict";
self["webpackHotUpdatekalkulator"](0,{

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
    key: "add",
    value: function add(numberX, numberY) {
      console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej.");
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
  }, {
    key: "changeNumber",
    value: function changeNumber(root) {
      console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej.");
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

    /* Set event click on number
     */
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a14c755aae6f238b08b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsQ0FBQztNQUMxRCxJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ3NCLEdBQUcsQ0FDL0IsSUFBSSxDQUFDeEIsZ0JBQWdCLEVBQ3JCLElBQUksQ0FBQ0MsaUJBQWlCLENBQ3ZCO0lBQ0g7O0lBRUE7QUFDRjtFQURFO0lBQUE7SUFBQSxPQUVBLHNCQUFhO01BQUE7TUFDWCxJQUFJLENBQUNKLHFCQUFxQixDQUFDNEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtRQUM1RCxJQUFJQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1VBQ25FLElBQU1DLFdBQVcsR0FBR0wsS0FBSyxDQUFDQyxNQUFNLENBQUNDLGFBQWE7VUFDOUMsS0FBSSxDQUFDSSxZQUFZLENBQUNELFdBQVcsQ0FBQztRQUNoQztNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQTtBQUFBO0FBR0gsaUVBQWVyQyxVQUFVOzs7Ozs7OztVQzdFekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYWxrdWxhdG9yLy4vanMvQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9rYWxrdWxhdG9yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2xhc3MgQ2FsY3VsYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JOYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBzZWxlY3Rvck5hbWU7XHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKTtcclxuXHJcbiAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkgPSBbXTtcclxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlBvd2luaWVuZcWbIHphaW1wbGVtZW50b3dhxIcgdMSFIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTnVtYmVyKHJvb3QpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiUG93aW5pZW5lxZsgemFpbXBsZW1lbnRvd2HEhyB0xIUgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai5cIlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJlc3VsdCgpIHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5yZXN1bHQtYml0IHNwYW5cIlxyXG4gICAgKTtcclxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkucmV2ZXJzZSgpLmZvckVhY2goKG51bWJlciwgaSkgPT4ge1xyXG4gICAgICByZXN1bHRzW2ldLmlubmVyVGV4dCA9IG51bWJlcjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiBgSGVsbG8gSSBhbSAke3RoaXMubmFtZX1gO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tOdW1iZXIoKSB7XHJcbiAgICBsZXQgcm9vdCA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50O1xyXG4gICAgbGV0ICRmaXJzdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgbGFiZWw6Zmlyc3QtY2hpbGRcIik7XHJcbiAgICBsZXQgJHNlY29uZE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuZ3JvdXAtbnVtYmVyIGxhYmVsOm50aC1jaGlsZCgyKVwiXHJcbiAgICApO1xyXG4gICAgbGV0ICRyZXN1bHROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JvdXAtbnVtYmVyIC5yZXN1bHQtYml0XCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAkZmlyc3ROdW1iZXIubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcclxuICAgICAgdGhpcy5maXJzdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJGZpcnN0TnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNlY29uZE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJHNlY29uZE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KFxyXG4gICAgICAgICRyZXN1bHROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5maXJzdE51bWJlckFycmF5LCB0aGlzLnNlY29uZE51bWJlckFycmF5KTtcclxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSB0aGlzLmFkZChcclxuICAgICAgdGhpcy5maXJzdE51bWJlckFycmF5LFxyXG4gICAgICB0aGlzLnNlY29uZE51bWJlckFycmF5XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyogU2V0IGV2ZW50IGNsaWNrIG9uIG51bWJlclxyXG4gICAqL1xyXG4gIGluaXRFdmVudHMoKSB7XHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzcGxheS1udW1iZXJcIikpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRMYWJlbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTnVtYmVyKHBhcmVudExhYmVsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMTRjNzU1YWFlNmYyMzhiMDhiNlwiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwic2VsZWN0b3JOYW1lIiwibmFtZSIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcnN0TnVtYmVyQXJyYXkiLCJzZWNvbmROdW1iZXJBcnJheSIsInJlc3VsdE51bWJlckFycmF5IiwiaW5pdEV2ZW50cyIsIm51bWJlclgiLCJudW1iZXJZIiwiY29uc29sZSIsImVycm9yIiwicm9vdCIsInJlc3VsdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmV2ZXJzZSIsImZvckVhY2giLCJudW1iZXIiLCJpIiwiaW5uZXJUZXh0IiwiJGZpcnN0TnVtYmVyIiwiJHNlY29uZE51bWJlciIsIiRyZXN1bHROdW1iZXIiLCJsZW5ndGgiLCJqIiwicGFyc2VJbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxvZyIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudExhYmVsIiwiY2hhbmdlTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==