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

    /* Get the name of calculator selector
     *  @return {string}
     */
  }, {
    key: "getName",
    value: function getName() {
      return "Hello I am ".concat(this.name);
    }

    /* Check what number is set in both numbers and add
     *  @return {string}
     */
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
/******/ 	__webpack_require__.h = () => ("84f76571dc3c76f078fb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2QixnQkFBZ0IsRUFBRSxJQUFJLENBQUNDLGlCQUFpQixDQUFDO01BQzFELElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDc0IsR0FBRyxDQUMvQixJQUFJLENBQUN4QixnQkFBZ0IsRUFDckIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FDdkI7SUFDSDs7SUFFQTtBQUNGO0VBREU7SUFBQTtJQUFBLE9BRUEsc0JBQWE7TUFBQTtNQUNYLElBQUksQ0FBQ0oscUJBQXFCLENBQUM0QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO1FBQzVELElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7VUFDbkUsSUFBTUMsV0FBVyxHQUFHTCxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYTtVQUM5QyxLQUFJLENBQUNJLFlBQVksQ0FBQ0QsV0FBVyxDQUFDO1FBQ2hDO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBO0FBQUE7QUFHSCxpRUFBZXJDLFVBQVU7Ozs7Ozs7O1VDbkZ6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2thbGt1bGF0b3IvLi9qcy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2thbGt1bGF0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jbGFzcyBDYWxjdWxhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IHNlbGVjdG9yTmFtZTtcclxuICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck5hbWUpO1xyXG5cclxuICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiUG93aW5pZW5lxZsgemFpbXBsZW1lbnRvd2HEhyB0xIUgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai5cIlxyXG4gICAgKTtcclxuICAgIHJldHVybiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOdW1iZXIocm9vdCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJQb3dpbmllbmXFmyB6YWltcGxlbWVudG93YcSHIHTEhSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLlwiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmVzdWx0KCkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLnJlc3VsdC1iaXQgc3BhblwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheS5yZXZlcnNlKCkuZm9yRWFjaCgobnVtYmVyLCBpKSA9PiB7XHJcbiAgICAgIHJlc3VsdHNbaV0uaW5uZXJUZXh0ID0gbnVtYmVyO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiBHZXQgdGhlIG5hbWUgb2YgY2FsY3VsYXRvciBzZWxlY3RvclxyXG4gICAqICBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiBgSGVsbG8gSSBhbSAke3RoaXMubmFtZX1gO1xyXG4gIH1cclxuXHJcbiAgLyogQ2hlY2sgd2hhdCBudW1iZXIgaXMgc2V0IGluIGJvdGggbnVtYmVycyBhbmQgYWRkXHJcbiAgICogIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICBjaGVja051bWJlcigpIHtcclxuICAgIGxldCByb290ID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQ7XHJcbiAgICBsZXQgJGZpcnN0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciBsYWJlbDpmaXJzdC1jaGlsZFwiKTtcclxuICAgIGxldCAkc2Vjb25kTnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5ncm91cC1udW1iZXIgbGFiZWw6bnRoLWNoaWxkKDIpXCJcclxuICAgICk7XHJcbiAgICBsZXQgJHJlc3VsdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgLnJlc3VsdC1iaXRcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9ICRmaXJzdE51bWJlci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkZmlyc3ROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkc2Vjb25kTnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJHJlc3VsdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TnVtYmVyQXJyYXksIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkpO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IHRoaXMuYWRkKFxyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXksXHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiBTZXQgZXZlbnQgY2xpY2sgb24gbnVtYmVyXHJcbiAgICovXHJcbiAgaW5pdEV2ZW50cygpIHtcclxuICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNwbGF5LW51bWJlclwiKSkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudExhYmVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VOdW1iZXIocGFyZW50TGFiZWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg0Zjc2NTcxZGMzYzc2ZjA3OGZiXCIpIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJzZWxlY3Rvck5hbWUiLCJuYW1lIiwiJGNhbGN1bGF0b3JET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3ROdW1iZXJBcnJheSIsInNlY29uZE51bWJlckFycmF5IiwicmVzdWx0TnVtYmVyQXJyYXkiLCJpbml0RXZlbnRzIiwibnVtYmVyWCIsIm51bWJlclkiLCJjb25zb2xlIiwiZXJyb3IiLCJyb290IiwicmVzdWx0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXZlcnNlIiwiZm9yRWFjaCIsIm51bWJlciIsImkiLCJpbm5lclRleHQiLCIkZmlyc3ROdW1iZXIiLCIkc2Vjb25kTnVtYmVyIiwiJHJlc3VsdE51bWJlciIsImxlbmd0aCIsImoiLCJwYXJzZUludCIsImZpcnN0RWxlbWVudENoaWxkIiwibG9nIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50TGFiZWwiLCJjaGFuZ2VOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9