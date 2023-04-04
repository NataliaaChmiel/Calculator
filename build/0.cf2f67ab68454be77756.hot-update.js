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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("74dabc4a3938123d07fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLE9BQU8sQ0FBQyxVQUFDQyxNQUFNLEVBQUVYLENBQUMsRUFBSztRQUN0RFEsT0FBTyxDQUFDUixDQUFDLENBQUMsQ0FBQ0ssU0FBUyxHQUFHTSxNQUFNO01BQy9CLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsc0JBQWE7TUFBQTtNQUNYLElBQUksQ0FBQzNCLHFCQUFxQixDQUFDNEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtRQUM1RCxJQUFJQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1VBQ25FLElBQU1DLFdBQVcsR0FBR0wsS0FBSyxDQUFDQyxNQUFNLENBQUNDLGFBQWE7VUFDOUMsS0FBSSxDQUFDSSxZQUFZLENBQUNELFdBQVcsQ0FBQztRQUNoQztNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQTtBQUFBO0FBR0gsaUVBQWVyQyxVQUFVOzs7Ozs7OztVQzFFekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYWxrdWxhdG9yLy4vanMvQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9rYWxrdWxhdG9yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYWxjdWxhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IHNlbGVjdG9yTmFtZTtcclxuICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck5hbWUpO1xyXG5cclxuICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTnVtYmVyKHJvb3QpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiWmFpbXBsZW1lbnR1aiB0xJkgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai5cIlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlphaW1wbGVtZW50dWogdMSZIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gYEhlbGxvIEkgYW0gJHt0aGlzLm5hbWV9YDtcclxuICB9XHJcblxyXG4gIGNoZWNrTnVtYmVyKCkge1xyXG4gICAgbGV0IHJvb3QgPSB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudDtcclxuICAgIGxldCAkZmlyc3ROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JvdXAtbnVtYmVyIGxhYmVsOmZpcnN0LWNoaWxkXCIpO1xyXG4gICAgbGV0ICRzZWNvbmROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLmdyb3VwLW51bWJlciBsYWJlbDpudGgtY2hpbGQoMilcIlxyXG4gICAgKTtcclxuICAgIGxldCAkcmVzdWx0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciAucmVzdWx0LWJpdFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gJGZpcnN0TnVtYmVyLmxlbmd0aCAtIDEsIGogPSAwOyBpID49IDA7IGktLSwgaisrKSB7XHJcbiAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KFxyXG4gICAgICAgICRmaXJzdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KFxyXG4gICAgICAgICRzZWNvbmROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkcmVzdWx0TnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3ROdW1iZXJBcnJheSwgdGhpcy5zZWNvbmROdW1iZXJBcnJheSk7XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gdGhpcy5hZGQoXHJcbiAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSxcclxuICAgICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJlc3VsdCgpIHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5yZXN1bHQtYml0IHNwYW5cIlxyXG4gICAgKTtcclxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkucmV2ZXJzZSgpLmZvckVhY2goKG51bWJlciwgaSkgPT4ge1xyXG4gICAgICByZXN1bHRzW2ldLmlubmVyVGV4dCA9IG51bWJlcjtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpbml0RXZlbnRzKCkge1xyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc3BsYXktbnVtYmVyXCIpKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TGFiZWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB0aGlzLmNoYW5nZU51bWJlcihwYXJlbnRMYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzRkYWJjNGEzOTM4MTIzZDA3ZmRcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsInNlbGVjdG9yTmFtZSIsIm5hbWUiLCIkY2FsY3VsYXRvckRPTUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdE51bWJlckFycmF5Iiwic2Vjb25kTnVtYmVyQXJyYXkiLCJyZXN1bHROdW1iZXJBcnJheSIsImluaXRFdmVudHMiLCJyb290IiwiY29uc29sZSIsImVycm9yIiwibnVtYmVyWCIsIm51bWJlclkiLCIkZmlyc3ROdW1iZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHNlY29uZE51bWJlciIsIiRyZXN1bHROdW1iZXIiLCJpIiwibGVuZ3RoIiwiaiIsInBhcnNlSW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbm5lclRleHQiLCJsb2ciLCJhZGQiLCJyZXN1bHRzIiwicmV2ZXJzZSIsImZvckVhY2giLCJudW1iZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRMYWJlbCIsImNoYW5nZU51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=