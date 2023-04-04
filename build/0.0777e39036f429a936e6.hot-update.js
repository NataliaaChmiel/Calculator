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

  /* Abstract method add numbers in two array
   *  @param {array} numberX First number
   *  @param {array} numberY Second number
   *  @return {array}
   */
  _createClass(Calculator, [{
    key: "add",
    value: function add(numberX, numberY) {
      console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej.");
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }

    /* Abstract method changing number
     *  @param {jQuery element} root Parent element
     */
  }, {
    key: "changeNumber",
    value: function changeNumber(root) {
      console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej.");
    }

    /* Method changing Result
     */
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
/******/ 	__webpack_require__.h = () => ("0c531ff09a24151afc96")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UCxTQUFTLENBQzdDO01BQ0g7TUFFQVQsT0FBTyxDQUFDaUIsR0FBRyxDQUFDLElBQUksQ0FBQ3ZCLGdCQUFnQixFQUFFLElBQUksQ0FBQ0MsaUJBQWlCLENBQUM7TUFDMUQsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNzQixHQUFHLENBQy9CLElBQUksQ0FBQ3hCLGdCQUFnQixFQUNyQixJQUFJLENBQUNDLGlCQUFpQixDQUN2QjtJQUNIOztJQUVBO0FBQ0Y7RUFERTtJQUFBO0lBQUEsT0FFQSxzQkFBYTtNQUFBO01BQ1gsSUFBSSxDQUFDSixxQkFBcUIsQ0FBQzRCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7UUFDNUQsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtVQUNuRSxJQUFNQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhO1VBQzlDLEtBQUksQ0FBQ0ksWUFBWSxDQUFDRCxXQUFXLENBQUM7UUFDaEM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUE7QUFBQTtBQUdILGlFQUFlckMsVUFBVTs7Ozs7Ozs7VUM3RnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2Fsa3VsYXRvci8uL2pzL0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8va2Fsa3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIENhbGN1bGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gc2VsZWN0b3JOYW1lO1xyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yTmFtZSk7XHJcblxyXG4gICAgdGhpcy5maXJzdE51bWJlckFycmF5ID0gW107XHJcbiAgICB0aGlzLnNlY29uZE51bWJlckFycmF5ID0gW107XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICAvKiBBYnN0cmFjdCBtZXRob2QgYWRkIG51bWJlcnMgaW4gdHdvIGFycmF5XHJcbiAgICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclggRmlyc3QgbnVtYmVyXHJcbiAgICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclkgU2Vjb25kIG51bWJlclxyXG4gICAqICBAcmV0dXJuIHthcnJheX1cclxuICAgKi9cclxuICBhZGQobnVtYmVyWCwgbnVtYmVyWSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJQb3dpbmllbmXFmyB6YWltcGxlbWVudG93YcSHIHTEhSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLlwiXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICB9XHJcblxyXG4gIC8qIEFic3RyYWN0IG1ldGhvZCBjaGFuZ2luZyBudW1iZXJcclxuICAgKiAgQHBhcmFtIHtqUXVlcnkgZWxlbWVudH0gcm9vdCBQYXJlbnQgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNoYW5nZU51bWJlcihyb290KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlBvd2luaWVuZcWbIHphaW1wbGVtZW50b3dhxIcgdMSFIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouXCJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiBNZXRob2QgY2hhbmdpbmcgUmVzdWx0XHJcbiAgICovXHJcbiAgdXBkYXRlUmVzdWx0KCkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLnJlc3VsdC1iaXQgc3BhblwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheS5yZXZlcnNlKCkuZm9yRWFjaCgobnVtYmVyLCBpKSA9PiB7XHJcbiAgICAgIHJlc3VsdHNbaV0uaW5uZXJUZXh0ID0gbnVtYmVyO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiBHZXQgdGhlIG5hbWUgb2YgY2FsY3VsYXRvciBzZWxlY3RvclxyXG4gICAqICBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiBgSGVsbG8gSSBhbSAke3RoaXMubmFtZX1gO1xyXG4gIH1cclxuXHJcbiAgLyogQ2hlY2sgd2hhdCBudW1iZXIgaXMgc2V0IGluIGJvdGggbnVtYmVycyBhbmQgYWRkXHJcbiAgICogIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICBjaGVja051bWJlcigpIHtcclxuICAgIGxldCByb290ID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQ7XHJcbiAgICBsZXQgJGZpcnN0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciBsYWJlbDpmaXJzdC1jaGlsZFwiKTtcclxuICAgIGxldCAkc2Vjb25kTnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5ncm91cC1udW1iZXIgbGFiZWw6bnRoLWNoaWxkKDIpXCJcclxuICAgICk7XHJcbiAgICBsZXQgJHJlc3VsdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgLnJlc3VsdC1iaXRcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9ICRmaXJzdE51bWJlci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkZmlyc3ROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkc2Vjb25kTnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJHJlc3VsdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TnVtYmVyQXJyYXksIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkpO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IHRoaXMuYWRkKFxyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXksXHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiBTZXQgZXZlbnQgY2xpY2sgb24gbnVtYmVyXHJcbiAgICovXHJcbiAgaW5pdEV2ZW50cygpIHtcclxuICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNwbGF5LW51bWJlclwiKSkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudExhYmVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VOdW1iZXIocGFyZW50TGFiZWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBjNTMxZmYwOWEyNDE1MWFmYzk2XCIpIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJzZWxlY3Rvck5hbWUiLCJuYW1lIiwiJGNhbGN1bGF0b3JET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3ROdW1iZXJBcnJheSIsInNlY29uZE51bWJlckFycmF5IiwicmVzdWx0TnVtYmVyQXJyYXkiLCJpbml0RXZlbnRzIiwibnVtYmVyWCIsIm51bWJlclkiLCJjb25zb2xlIiwiZXJyb3IiLCJyb290IiwicmVzdWx0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXZlcnNlIiwiZm9yRWFjaCIsIm51bWJlciIsImkiLCJpbm5lclRleHQiLCIkZmlyc3ROdW1iZXIiLCIkc2Vjb25kTnVtYmVyIiwiJHJlc3VsdE51bWJlciIsImxlbmd0aCIsImoiLCJwYXJzZUludCIsImZpcnN0RWxlbWVudENoaWxkIiwibG9nIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50TGFiZWwiLCJjaGFuZ2VOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9