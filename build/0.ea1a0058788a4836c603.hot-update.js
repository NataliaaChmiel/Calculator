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
      console.error("Zaimle metodę w klasie dziedziczącej.");
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
  }, {
    key: "changeNumber",
    value: function changeNumber(root) {
      console.error("Zaimle metodę w klasie dziedziczącej.");
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
/******/ 	__webpack_require__.h = () => ("a0d87f0ddd92a5251fbf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsQ0FBQztNQUMxRCxJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ3NCLEdBQUcsQ0FDL0IsSUFBSSxDQUFDeEIsZ0JBQWdCLEVBQ3JCLElBQUksQ0FBQ0MsaUJBQWlCLENBQ3ZCO0lBQ0g7RUFBQztJQUFBO0lBQUEsT0FFRCxzQkFBYTtNQUFBO01BQ1gsSUFBSSxDQUFDSixxQkFBcUIsQ0FBQzRCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7UUFDNUQsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtVQUNuRSxJQUFNQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhO1VBQzlDLEtBQUksQ0FBQ0ksWUFBWSxDQUFDRCxXQUFXLENBQUM7UUFDaEM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUE7QUFBQTtBQUdILGlFQUFlckMsVUFBVTs7Ozs7Ozs7VUMxRXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2Fsa3VsYXRvci8uL2pzL0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8va2Fsa3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FsY3VsYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JOYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBzZWxlY3Rvck5hbWU7XHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKTtcclxuXHJcbiAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkgPSBbXTtcclxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlphaW1sZSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLlwiXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU51bWJlcihyb290KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlphaW1sZSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLlwiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmVzdWx0KCkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLnJlc3VsdC1iaXQgc3BhblwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheS5yZXZlcnNlKCkuZm9yRWFjaCgobnVtYmVyLCBpKSA9PiB7XHJcbiAgICAgIHJlc3VsdHNbaV0uaW5uZXJUZXh0ID0gbnVtYmVyO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIGBIZWxsbyBJIGFtICR7dGhpcy5uYW1lfWA7XHJcbiAgfVxyXG5cclxuICBjaGVja051bWJlcigpIHtcclxuICAgIGxldCByb290ID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQ7XHJcbiAgICBsZXQgJGZpcnN0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciBsYWJlbDpmaXJzdC1jaGlsZFwiKTtcclxuICAgIGxldCAkc2Vjb25kTnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5ncm91cC1udW1iZXIgbGFiZWw6bnRoLWNoaWxkKDIpXCJcclxuICAgICk7XHJcbiAgICBsZXQgJHJlc3VsdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgLnJlc3VsdC1iaXRcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9ICRmaXJzdE51bWJlci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkZmlyc3ROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkc2Vjb25kTnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJHJlc3VsdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TnVtYmVyQXJyYXksIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkpO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IHRoaXMuYWRkKFxyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXksXHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpbml0RXZlbnRzKCkge1xyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc3BsYXktbnVtYmVyXCIpKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TGFiZWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB0aGlzLmNoYW5nZU51bWJlcihwYXJlbnRMYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTBkODdmMGRkZDkyYTUyNTFmYmZcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsInNlbGVjdG9yTmFtZSIsIm5hbWUiLCIkY2FsY3VsYXRvckRPTUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdE51bWJlckFycmF5Iiwic2Vjb25kTnVtYmVyQXJyYXkiLCJyZXN1bHROdW1iZXJBcnJheSIsImluaXRFdmVudHMiLCJudW1iZXJYIiwibnVtYmVyWSIsImNvbnNvbGUiLCJlcnJvciIsInJvb3QiLCJyZXN1bHRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJldmVyc2UiLCJmb3JFYWNoIiwibnVtYmVyIiwiaSIsImlubmVyVGV4dCIsIiRmaXJzdE51bWJlciIsIiRzZWNvbmROdW1iZXIiLCIkcmVzdWx0TnVtYmVyIiwibGVuZ3RoIiwiaiIsInBhcnNlSW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsb2ciLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRMYWJlbCIsImNoYW5nZU51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=