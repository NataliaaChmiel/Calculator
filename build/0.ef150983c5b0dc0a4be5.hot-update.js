"use strict";
self["webpackHotUpdatekalkulator"](0,{

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
}();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce1042a7254930c20429")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNDLE1BQU0sRUFBRVgsQ0FBQyxFQUFLO1FBQ3REUSxPQUFPLENBQUNSLENBQUMsQ0FBQyxDQUFDSyxTQUFTLEdBQUdNLE1BQU07TUFDL0IsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBO0lBQUEsT0FFRCxzQkFBYTtNQUFBO01BQ1gsSUFBSSxDQUFDM0IscUJBQXFCLENBQUM0QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO1FBQzVELElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7VUFDbkUsSUFBTUMsV0FBVyxHQUFHTCxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYTtVQUM5QyxLQUFJLENBQUNJLFlBQVksQ0FBQ0QsV0FBVyxDQUFDO1FBQ2hDO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBO0FBQUE7Ozs7Ozs7OztVQ3ZFSCIsInNvdXJjZXMiOlsid2VicGFjazovL2thbGt1bGF0b3IvLi9qcy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2thbGt1bGF0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gc2VsZWN0b3JOYW1lO1xyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yTmFtZSk7XHJcblxyXG4gICAgdGhpcy5maXJzdE51bWJlckFycmF5ID0gW107XHJcbiAgICB0aGlzLnNlY29uZE51bWJlckFycmF5ID0gW107XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOdW1iZXIocm9vdCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJaYWltcGxlbWVudHVqIHTEmSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLlwiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiWmFpbXBsZW1lbnR1aiB0xJkgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai5cIlxyXG4gICAgKTtcclxuICAgIHJldHVybiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIGBIZWxsbyBJIGFtICR7dGhpcy5uYW1lfWA7XHJcbiAgfVxyXG5cclxuICBjaGVja051bWJlcigpIHtcclxuICAgIGxldCByb290ID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQ7XHJcbiAgICBsZXQgJGZpcnN0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciBsYWJlbDpmaXJzdC1jaGlsZFwiKTtcclxuICAgIGxldCAkc2Vjb25kTnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5ncm91cC1udW1iZXIgbGFiZWw6bnRoLWNoaWxkKDIpXCJcclxuICAgICk7XHJcbiAgICBsZXQgJHJlc3VsdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgLnJlc3VsdC1iaXRcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9ICRmaXJzdE51bWJlci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkZmlyc3ROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkc2Vjb25kTnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJHJlc3VsdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TnVtYmVyQXJyYXksIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkpO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IHRoaXMuYWRkKFxyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXksXHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZXN1bHQoKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIucmVzdWx0LWJpdCBzcGFuXCJcclxuICAgICk7XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5LnJldmVyc2UoKS5mb3JFYWNoKChudW1iZXIsIGkpID0+IHtcclxuICAgICAgcmVzdWx0c1tpXS5pbm5lclRleHQgPSBudW1iZXI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRFdmVudHMoKSB7XHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzcGxheS1udW1iZXJcIikpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRMYWJlbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTnVtYmVyKHBhcmVudExhYmVsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZTEwNDJhNzI1NDkzMGMyMDQyOVwiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwic2VsZWN0b3JOYW1lIiwibmFtZSIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcnN0TnVtYmVyQXJyYXkiLCJzZWNvbmROdW1iZXJBcnJheSIsInJlc3VsdE51bWJlckFycmF5IiwiaW5pdEV2ZW50cyIsInJvb3QiLCJjb25zb2xlIiwiZXJyb3IiLCJudW1iZXJYIiwibnVtYmVyWSIsIiRmaXJzdE51bWJlciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCIkc2Vjb25kTnVtYmVyIiwiJHJlc3VsdE51bWJlciIsImkiLCJsZW5ndGgiLCJqIiwicGFyc2VJbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlubmVyVGV4dCIsImxvZyIsImFkZCIsInJlc3VsdHMiLCJyZXZlcnNlIiwiZm9yRWFjaCIsIm51bWJlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudExhYmVsIiwiY2hhbmdlTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==