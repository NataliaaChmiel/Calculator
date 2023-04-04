self["webpackHotUpdatekalkulator"](0,{

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
}(); //  Calculator;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d3903067a8bd37090bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLENBQUMsVUFBQ0MsTUFBTSxFQUFFWCxDQUFDLEVBQUs7UUFDdERRLE9BQU8sQ0FBQ1IsQ0FBQyxDQUFDLENBQUNLLFNBQVMsR0FBR00sTUFBTTtNQUMvQixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUE7SUFBQSxPQUVELHNCQUFhO01BQUE7TUFDWCxJQUFJLENBQUMzQixxQkFBcUIsQ0FBQzRCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7UUFDNUQsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtVQUNuRSxJQUFNQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhO1VBQzlDLEtBQUksQ0FBQ0ksWUFBWSxDQUFDRCxXQUFXLENBQUM7UUFDaEM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUE7QUFBQSxLQUdIOzs7Ozs7OztVQzFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2thbGt1bGF0b3IvLi9qcy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2thbGt1bGF0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbGN1bGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gc2VsZWN0b3JOYW1lO1xyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yTmFtZSk7XHJcblxyXG4gICAgdGhpcy5maXJzdE51bWJlckFycmF5ID0gW107XHJcbiAgICB0aGlzLnNlY29uZE51bWJlckFycmF5ID0gW107XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOdW1iZXIocm9vdCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJaYWltcGxlbWVudHVqIHTEmSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLlwiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiWmFpbXBsZW1lbnR1aiB0xJkgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai5cIlxyXG4gICAgKTtcclxuICAgIHJldHVybiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIGBIZWxsbyBJIGFtICR7dGhpcy5uYW1lfWA7XHJcbiAgfVxyXG5cclxuICBjaGVja051bWJlcigpIHtcclxuICAgIGxldCByb290ID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQ7XHJcbiAgICBsZXQgJGZpcnN0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciBsYWJlbDpmaXJzdC1jaGlsZFwiKTtcclxuICAgIGxldCAkc2Vjb25kTnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5ncm91cC1udW1iZXIgbGFiZWw6bnRoLWNoaWxkKDIpXCJcclxuICAgICk7XHJcbiAgICBsZXQgJHJlc3VsdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgLnJlc3VsdC1iaXRcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9ICRmaXJzdE51bWJlci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkZmlyc3ROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkc2Vjb25kTnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJHJlc3VsdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TnVtYmVyQXJyYXksIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkpO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IHRoaXMuYWRkKFxyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXksXHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZXN1bHQoKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIucmVzdWx0LWJpdCBzcGFuXCJcclxuICAgICk7XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5LnJldmVyc2UoKS5mb3JFYWNoKChudW1iZXIsIGkpID0+IHtcclxuICAgICAgcmVzdWx0c1tpXS5pbm5lclRleHQgPSBudW1iZXI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRFdmVudHMoKSB7XHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzcGxheS1udW1iZXJcIikpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRMYWJlbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTnVtYmVyKHBhcmVudExhYmVsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAgQ2FsY3VsYXRvcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmQzOTAzMDY3YThiZDM3MDkwYmJcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsInNlbGVjdG9yTmFtZSIsIm5hbWUiLCIkY2FsY3VsYXRvckRPTUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdE51bWJlckFycmF5Iiwic2Vjb25kTnVtYmVyQXJyYXkiLCJyZXN1bHROdW1iZXJBcnJheSIsImluaXRFdmVudHMiLCJyb290IiwiY29uc29sZSIsImVycm9yIiwibnVtYmVyWCIsIm51bWJlclkiLCIkZmlyc3ROdW1iZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHNlY29uZE51bWJlciIsIiRyZXN1bHROdW1iZXIiLCJpIiwibGVuZ3RoIiwiaiIsInBhcnNlSW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbm5lclRleHQiLCJsb2ciLCJhZGQiLCJyZXN1bHRzIiwicmV2ZXJzZSIsImZvckVhY2giLCJudW1iZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRMYWJlbCIsImNoYW5nZU51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=