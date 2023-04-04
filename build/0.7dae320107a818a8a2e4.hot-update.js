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
/******/ 	__webpack_require__.h = () => ("cf2f67ab68454be77756")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZGFlMzIwMTA3YTgxOGE4YTJlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsVUFBVTtFQUNkLG9CQUFZQyxZQUFZLEVBQUU7SUFBQTtJQUN4QixJQUFJLENBQUNDLElBQUksR0FBR0QsWUFBWTtJQUN4QixJQUFJLENBQUNFLHFCQUFxQixHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0osWUFBWSxDQUFDO0lBRWpFLElBQUksQ0FBQ0ssZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUNDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELElBQUksQ0FBQ0MsVUFBVSxFQUFFO0VBQ25CO0VBQUM7SUFBQTtJQUFBLE9BRUQsc0JBQWFDLElBQUksRUFBRTtNQUNqQkMsT0FBTyxDQUFDQyxLQUFLLENBQ1gsaURBQWlELENBQ2xEO0lBQ0g7RUFBQztJQUFBO0lBQUEsT0FFRCxhQUFJQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtNQUNwQkgsT0FBTyxDQUFDQyxLQUFLLENBQ1gsaURBQWlELENBQ2xEO01BQ0QsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakM7RUFBQztJQUFBO0lBQUEsT0FHRCxtQkFBVTtNQUNSLDRCQUFxQixJQUFJLENBQUNWLElBQUk7SUFDaEM7RUFBQztJQUFBO0lBQUEsT0FFRCx1QkFBYztNQUNaLElBQUlRLElBQUksR0FBRyxJQUFJLENBQUNQLHFCQUFxQjtNQUNyQyxJQUFJWSxZQUFZLEdBQUdMLElBQUksQ0FBQ00sZ0JBQWdCLENBQUMsaUNBQWlDLENBQUM7TUFDM0UsSUFBSUMsYUFBYSxHQUFHUCxJQUFJLENBQUNNLGdCQUFnQixDQUN2QyxrQ0FBa0MsQ0FDbkM7TUFDRCxJQUFJRSxhQUFhLEdBQUdSLElBQUksQ0FBQ00sZ0JBQWdCLENBQUMsMkJBQTJCLENBQUM7TUFFdEUsS0FBSyxJQUFJRyxDQUFDLEdBQUdKLFlBQVksQ0FBQ0ssTUFBTSxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUYsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUVFLENBQUMsRUFBRSxFQUFFO1FBQzdELElBQUksQ0FBQ2YsZ0JBQWdCLENBQUNhLENBQUMsQ0FBQyxHQUFHRyxRQUFRLENBQ2pDUCxZQUFZLENBQUNNLENBQUMsQ0FBQyxDQUFDRSxpQkFBaUIsQ0FBQ0MsU0FBUyxDQUM1QztRQUNELElBQUksQ0FBQ2pCLGlCQUFpQixDQUFDWSxDQUFDLENBQUMsR0FBR0csUUFBUSxDQUNsQ0wsYUFBYSxDQUFDSSxDQUFDLENBQUMsQ0FBQ0UsaUJBQWlCLENBQUNDLFNBQVMsQ0FDN0M7UUFDRCxJQUFJLENBQUNoQixpQkFBaUIsQ0FBQ1csQ0FBQyxDQUFDLEdBQUdHLFFBQVEsQ0FDbENKLGFBQWEsQ0FBQ0csQ0FBQyxDQUFDLENBQUNFLGlCQUFpQixDQUFDQyxTQUFTLENBQzdDO01BQ0g7TUFFQWIsT0FBTyxDQUFDYyxHQUFHLENBQUMsSUFBSSxDQUFDbkIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQztNQUMxRCxJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ2tCLEdBQUcsQ0FDL0IsSUFBSSxDQUFDcEIsZ0JBQWdCLEVBQ3JCLElBQUksQ0FBQ0MsaUJBQWlCLENBQ3ZCO0lBQ0g7RUFBQztJQUFBO0lBQUEsT0FFRCxzQkFBYTtNQUFBO01BQ1gsSUFBSSxDQUFDSixxQkFBcUIsQ0FBQ3dCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7UUFDNUQsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtVQUNuRSxJQUFNQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhO1VBQzlDLEtBQUksQ0FBQ0ksWUFBWSxDQUFDRCxXQUFXLENBQUM7UUFDaEM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUE7QUFBQTtBQUdILGlFQUFlakMsVUFBVTs7Ozs7Ozs7VUNsRXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2Fsa3VsYXRvci8uL2pzL0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8va2Fsa3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FsY3VsYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JOYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBzZWxlY3Rvck5hbWU7XHJcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKTtcclxuXHJcbiAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkgPSBbXTtcclxuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU51bWJlcihyb290KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlphaW1wbGVtZW50dWogdMSZIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouXCJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhZGQobnVtYmVyWCwgbnVtYmVyWSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJaYWltcGxlbWVudHVqIHTEmSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLlwiXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICB9XHJcblxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIGBIZWxsbyBJIGFtICR7dGhpcy5uYW1lfWA7XHJcbiAgfVxyXG5cclxuICBjaGVja051bWJlcigpIHtcclxuICAgIGxldCByb290ID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQ7XHJcbiAgICBsZXQgJGZpcnN0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciBsYWJlbDpmaXJzdC1jaGlsZFwiKTtcclxuICAgIGxldCAkc2Vjb25kTnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5ncm91cC1udW1iZXIgbGFiZWw6bnRoLWNoaWxkKDIpXCJcclxuICAgICk7XHJcbiAgICBsZXQgJHJlc3VsdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgLnJlc3VsdC1iaXRcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9ICRmaXJzdE51bWJlci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkZmlyc3ROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkc2Vjb25kTnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoXHJcbiAgICAgICAgJHJlc3VsdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TnVtYmVyQXJyYXksIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkpO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IHRoaXMuYWRkKFxyXG4gICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXksXHJcbiAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpbml0RXZlbnRzKCkge1xyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc3BsYXktbnVtYmVyXCIpKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TGFiZWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB0aGlzLmNoYW5nZU51bWJlcihwYXJlbnRMYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2YyZjY3YWI2ODQ1NGJlNzc3NTZcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsInNlbGVjdG9yTmFtZSIsIm5hbWUiLCIkY2FsY3VsYXRvckRPTUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdE51bWJlckFycmF5Iiwic2Vjb25kTnVtYmVyQXJyYXkiLCJyZXN1bHROdW1iZXJBcnJheSIsImluaXRFdmVudHMiLCJyb290IiwiY29uc29sZSIsImVycm9yIiwibnVtYmVyWCIsIm51bWJlclkiLCIkZmlyc3ROdW1iZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHNlY29uZE51bWJlciIsIiRyZXN1bHROdW1iZXIiLCJpIiwibGVuZ3RoIiwiaiIsInBhcnNlSW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbm5lclRleHQiLCJsb2ciLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRMYWJlbCIsImNoYW5nZU51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=