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
/******/ 	__webpack_require__.h = () => ("65bbc69b2a3f86062101")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUksQ0FBQ3ZCLGdCQUFnQixFQUFFLElBQUksQ0FBQ0MsaUJBQWlCLENBQUM7TUFDMUQsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNzQixHQUFHLENBQy9CLElBQUksQ0FBQ3hCLGdCQUFnQixFQUNyQixJQUFJLENBQUNDLGlCQUFpQixDQUN2QjtJQUNIOztJQUVBO0FBQ0Y7RUFERTtJQUFBO0lBQUEsT0FFQSxzQkFBYTtNQUFBO01BQ1gsSUFBSSxDQUFDSixxQkFBcUIsQ0FBQzRCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7UUFDNUQsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtVQUNuRSxJQUFNQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhO1VBQzlDLEtBQUksQ0FBQ0ksWUFBWSxDQUFDRCxXQUFXLENBQUM7UUFDaEM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUE7QUFBQTtBQUdILGlFQUFlckMsVUFBVTs7Ozs7Ozs7VUN0RnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2Fsa3VsYXRvci8uL2pzL0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8va2Fsa3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIENhbGN1bGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gc2VsZWN0b3JOYW1lO1xyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yTmFtZSk7XHJcblxyXG4gICAgdGhpcy5maXJzdE51bWJlckFycmF5ID0gW107XHJcbiAgICB0aGlzLnNlY29uZE51bWJlckFycmF5ID0gW107XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiUG93aW5pZW5lxZsgemFpbXBsZW1lbnRvd2HEhyB0xIUgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai5cIlxyXG4gICAgKTtcclxuICAgIHJldHVybiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOdW1iZXIocm9vdCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJQb3dpbmllbmXFmyB6YWltcGxlbWVudG93YcSHIHTEhSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLlwiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyogTWV0aG9kIGNoYW5naW5nIFJlc3VsdFxyXG4gICAqL1xyXG4gIHVwZGF0ZVJlc3VsdCgpIHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5yZXN1bHQtYml0IHNwYW5cIlxyXG4gICAgKTtcclxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkucmV2ZXJzZSgpLmZvckVhY2goKG51bWJlciwgaSkgPT4ge1xyXG4gICAgICByZXN1bHRzW2ldLmlubmVyVGV4dCA9IG51bWJlcjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogR2V0IHRoZSBuYW1lIG9mIGNhbGN1bGF0b3Igc2VsZWN0b3JcclxuICAgKiAgQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gYEhlbGxvIEkgYW0gJHt0aGlzLm5hbWV9YDtcclxuICB9XHJcblxyXG4gIC8qIENoZWNrIHdoYXQgbnVtYmVyIGlzIHNldCBpbiBib3RoIG51bWJlcnMgYW5kIGFkZFxyXG4gICAqICBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgY2hlY2tOdW1iZXIoKSB7XHJcbiAgICBsZXQgcm9vdCA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50O1xyXG4gICAgbGV0ICRmaXJzdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgbGFiZWw6Zmlyc3QtY2hpbGRcIik7XHJcbiAgICBsZXQgJHNlY29uZE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuZ3JvdXAtbnVtYmVyIGxhYmVsOm50aC1jaGlsZCgyKVwiXHJcbiAgICApO1xyXG4gICAgbGV0ICRyZXN1bHROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JvdXAtbnVtYmVyIC5yZXN1bHQtYml0XCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAkZmlyc3ROdW1iZXIubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcclxuICAgICAgdGhpcy5maXJzdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJGZpcnN0TnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNlY29uZE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJHNlY29uZE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KFxyXG4gICAgICAgICRyZXN1bHROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5maXJzdE51bWJlckFycmF5LCB0aGlzLnNlY29uZE51bWJlckFycmF5KTtcclxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSB0aGlzLmFkZChcclxuICAgICAgdGhpcy5maXJzdE51bWJlckFycmF5LFxyXG4gICAgICB0aGlzLnNlY29uZE51bWJlckFycmF5XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyogU2V0IGV2ZW50IGNsaWNrIG9uIG51bWJlclxyXG4gICAqL1xyXG4gIGluaXRFdmVudHMoKSB7XHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzcGxheS1udW1iZXJcIikpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRMYWJlbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTnVtYmVyKHBhcmVudExhYmVsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NWJiYzY5YjJhM2Y4NjA2MjEwMVwiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwic2VsZWN0b3JOYW1lIiwibmFtZSIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcnN0TnVtYmVyQXJyYXkiLCJzZWNvbmROdW1iZXJBcnJheSIsInJlc3VsdE51bWJlckFycmF5IiwiaW5pdEV2ZW50cyIsIm51bWJlclgiLCJudW1iZXJZIiwiY29uc29sZSIsImVycm9yIiwicm9vdCIsInJlc3VsdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmV2ZXJzZSIsImZvckVhY2giLCJudW1iZXIiLCJpIiwiaW5uZXJUZXh0IiwiJGZpcnN0TnVtYmVyIiwiJHNlY29uZE51bWJlciIsIiRyZXN1bHROdW1iZXIiLCJsZW5ndGgiLCJqIiwicGFyc2VJbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxvZyIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudExhYmVsIiwiY2hhbmdlTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==