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
/******/ 	__webpack_require__.h = () => ("26c434408339c3a11020")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsQ0FBQztNQUMxRCxJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ3NCLEdBQUcsQ0FDL0IsSUFBSSxDQUFDeEIsZ0JBQWdCLEVBQ3JCLElBQUksQ0FBQ0MsaUJBQWlCLENBQ3ZCO0lBQ0g7RUFBQztJQUFBO0lBQUEsT0FFRCxzQkFBYTtNQUFBO01BQ1gsSUFBSSxDQUFDSixxQkFBcUIsQ0FBQzRCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7UUFDNUQsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtVQUNuRSxJQUFNQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhO1VBQzlDLEtBQUksQ0FBQ0ksWUFBWSxDQUFDRCxXQUFXLENBQUM7UUFDaEM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUE7QUFBQTtBQUdILGlFQUFlckMsVUFBVTs7Ozs7Ozs7VUM1RXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2Fsa3VsYXRvci8uL2pzL0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8va2Fsa3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FsY3VsYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JOYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBzZWxlY3Rvck5hbWU7XHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKTtcclxuXHJcbiAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkgPSBbXTtcclxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU51bWJlcihyb290KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlphaW1wbGVtZW50dWogdMSZIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouXCJcclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlphaW1wbGVtZW50dWogdMSZIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICB1cGRhdGVSZXN1bHQoKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIucmVzdWx0LWJpdCBzcGFuXCJcclxuICAgICk7XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5LnJldmVyc2UoKS5mb3JFYWNoKChudW1iZXIsIGkpID0+IHtcclxuICAgICAgcmVzdWx0c1tpXS5pbm5lclRleHQgPSBudW1iZXI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gYEhlbGxvIEkgYW0gJHt0aGlzLm5hbWV9YDtcclxuICB9XHJcblxyXG4gIGNoZWNrTnVtYmVyKCkge1xyXG4gICAgbGV0IHJvb3QgPSB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudDtcclxuICAgIGxldCAkZmlyc3ROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JvdXAtbnVtYmVyIGxhYmVsOmZpcnN0LWNoaWxkXCIpO1xyXG4gICAgbGV0ICRzZWNvbmROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLmdyb3VwLW51bWJlciBsYWJlbDpudGgtY2hpbGQoMilcIlxyXG4gICAgKTtcclxuICAgIGxldCAkcmVzdWx0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciAucmVzdWx0LWJpdFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gJGZpcnN0TnVtYmVyLmxlbmd0aCAtIDEsIGogPSAwOyBpID49IDA7IGktLSwgaisrKSB7XHJcbiAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KFxyXG4gICAgICAgICRmaXJzdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KFxyXG4gICAgICAgICRzZWNvbmROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkcmVzdWx0TnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3ROdW1iZXJBcnJheSwgdGhpcy5zZWNvbmROdW1iZXJBcnJheSk7XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gdGhpcy5hZGQoXHJcbiAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSxcclxuICAgICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGluaXRFdmVudHMoKSB7XHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzcGxheS1udW1iZXJcIikpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRMYWJlbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTnVtYmVyKHBhcmVudExhYmVsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNmM0MzQ0MDgzMzljM2ExMTAyMFwiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwic2VsZWN0b3JOYW1lIiwibmFtZSIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcnN0TnVtYmVyQXJyYXkiLCJzZWNvbmROdW1iZXJBcnJheSIsInJlc3VsdE51bWJlckFycmF5IiwiaW5pdEV2ZW50cyIsInJvb3QiLCJjb25zb2xlIiwiZXJyb3IiLCJudW1iZXJYIiwibnVtYmVyWSIsInJlc3VsdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmV2ZXJzZSIsImZvckVhY2giLCJudW1iZXIiLCJpIiwiaW5uZXJUZXh0IiwiJGZpcnN0TnVtYmVyIiwiJHNlY29uZE51bWJlciIsIiRyZXN1bHROdW1iZXIiLCJsZW5ndGgiLCJqIiwicGFyc2VJbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxvZyIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudExhYmVsIiwiY2hhbmdlTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==