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
/******/ 	__webpack_require__.h = () => ("3a25ae341f312e7465ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYzUzMWZmMDlhMjQxNTFhZmM5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDTUEsVUFBVTtFQUNkLG9CQUFZQyxZQUFZLEVBQUU7SUFBQTtJQUN4QixJQUFJLENBQUNDLElBQUksR0FBR0QsWUFBWTtJQUN4QixJQUFJLENBQUNFLHFCQUFxQixHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0osWUFBWSxDQUFDO0lBRWpFLElBQUksQ0FBQ0ssZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUNDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELElBQUksQ0FBQ0MsVUFBVSxFQUFFO0VBQ25CO0VBQUM7SUFBQTtJQUFBLE9BR0QsYUFBSUMsT0FBTyxFQUFFQyxPQUFPLEVBQUU7TUFDcEJDLE9BQU8sQ0FBQ0MsS0FBSyxDQUNYLDhEQUE4RCxDQUMvRDtNQUNELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUE7SUFBQSxPQUdBLHNCQUFhQyxJQUFJLEVBQUU7TUFDakJGLE9BQU8sQ0FBQ0MsS0FBSyxDQUNYLDhEQUE4RCxDQUMvRDtJQUNIOztJQUVBO0FBQ0Y7RUFERTtJQUFBO0lBQUEsT0FFQSx3QkFBZTtNQUNiLElBQU1FLE9BQU8sR0FBRyxJQUFJLENBQUNaLHFCQUFxQixDQUFDYSxnQkFBZ0IsQ0FDekQsa0JBQWtCLENBQ25CO01BQ0QsSUFBSSxDQUFDUixpQkFBaUIsQ0FBQ1MsT0FBTyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxVQUFDQyxNQUFNLEVBQUVDLENBQUMsRUFBSztRQUN0REwsT0FBTyxDQUFDSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHRixNQUFNO01BQy9CLENBQUMsQ0FBQztJQUNKOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUE7SUFBQSxPQUdBLG1CQUFVO01BQ1IsNEJBQXFCLElBQUksQ0FBQ2pCLElBQUk7SUFDaEM7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQTtJQUFBLE9BR0EsdUJBQWM7TUFDWixJQUFJWSxJQUFJLEdBQUcsSUFBSSxDQUFDWCxxQkFBcUI7TUFDckMsSUFBSW1CLFlBQVksR0FBR1IsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQyxpQ0FBaUMsQ0FBQztNQUMzRSxJQUFJTyxhQUFhLEdBQUdULElBQUksQ0FBQ0UsZ0JBQWdCLENBQ3ZDLGtDQUFrQyxDQUNuQztNQUNELElBQUlRLGFBQWEsR0FBR1YsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQztNQUV0RSxLQUFLLElBQUlJLENBQUMsR0FBR0UsWUFBWSxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFTixDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRU0sQ0FBQyxFQUFFLEVBQUU7UUFDN0QsSUFBSSxDQUFDcEIsZ0JBQWdCLENBQUNjLENBQUMsQ0FBQyxHQUFHTyxRQUFRLENBQ2pDTCxZQUFZLENBQUNJLENBQUMsQ0FBQyxDQUFDRSxpQkFBaUIsQ0FBQ1AsU0FBUyxDQUM1QztRQUNELElBQUksQ0FBQ2QsaUJBQWlCLENBQUNhLENBQUMsQ0FBQyxHQUFHTyxRQUFRLENBQ2xDSixhQUFhLENBQUNHLENBQUMsQ0FBQyxDQUFDRSxpQkFBaUIsQ0FBQ1AsU0FBUyxDQUM3QztRQUNELElBQUksQ0FBQ2IsaUJBQWlCLENBQUNZLENBQUMsQ0FBQyxHQUFHTyxRQUFRLENBQ2xDSCxhQUFhLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxpQkFBaUIsQ0FBQ1AsU0FBUyxDQUM3QztNQUNIO01BRUFULE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQyxJQUFJLENBQUN2QixnQkFBZ0IsRUFBRSxJQUFJLENBQUNDLGlCQUFpQixDQUFDO01BQzFELElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDc0IsR0FBRyxDQUMvQixJQUFJLENBQUN4QixnQkFBZ0IsRUFDckIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FDdkI7SUFDSDs7SUFFQTtBQUNGO0VBREU7SUFBQTtJQUFBLE9BRUEsc0JBQWE7TUFBQTtNQUNYLElBQUksQ0FBQ0oscUJBQXFCLENBQUM0QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO1FBQzVELElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7VUFDbkUsSUFBTUMsV0FBVyxHQUFHTCxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYTtVQUM5QyxLQUFJLENBQUNJLFlBQVksQ0FBQ0QsV0FBVyxDQUFDO1FBQ2hDO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBO0FBQUE7QUFHSCxpRUFBZXJDLFVBQVU7Ozs7Ozs7O1VDekZ6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2thbGt1bGF0b3IvLi9qcy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2thbGt1bGF0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jbGFzcyBDYWxjdWxhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IHNlbGVjdG9yTmFtZTtcclxuICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck5hbWUpO1xyXG5cclxuICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gIH1cclxuXHJcblxyXG4gIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlBvd2luaWVuZcWbIHphaW1wbGVtZW50b3dhxIcgdMSFIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gIH1cclxuXHJcbiAgLyogQWJzdHJhY3QgbWV0aG9kIGNoYW5naW5nIG51bWJlclxyXG4gICAqICBAcGFyYW0ge2pRdWVyeSBlbGVtZW50fSByb290IFBhcmVudCBlbGVtZW50XHJcbiAgICovXHJcbiAgY2hhbmdlTnVtYmVyKHJvb3QpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiUG93aW5pZW5lxZsgemFpbXBsZW1lbnRvd2HEhyB0xIUgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai5cIlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qIE1ldGhvZCBjaGFuZ2luZyBSZXN1bHRcclxuICAgKi9cclxuICB1cGRhdGVSZXN1bHQoKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIucmVzdWx0LWJpdCBzcGFuXCJcclxuICAgICk7XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5LnJldmVyc2UoKS5mb3JFYWNoKChudW1iZXIsIGkpID0+IHtcclxuICAgICAgcmVzdWx0c1tpXS5pbm5lclRleHQgPSBudW1iZXI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qIEdldCB0aGUgbmFtZSBvZiBjYWxjdWxhdG9yIHNlbGVjdG9yXHJcbiAgICogIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIGBIZWxsbyBJIGFtICR7dGhpcy5uYW1lfWA7XHJcbiAgfVxyXG5cclxuICAvKiBDaGVjayB3aGF0IG51bWJlciBpcyBzZXQgaW4gYm90aCBudW1iZXJzIGFuZCBhZGRcclxuICAgKiAgQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIGNoZWNrTnVtYmVyKCkge1xyXG4gICAgbGV0IHJvb3QgPSB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudDtcclxuICAgIGxldCAkZmlyc3ROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JvdXAtbnVtYmVyIGxhYmVsOmZpcnN0LWNoaWxkXCIpO1xyXG4gICAgbGV0ICRzZWNvbmROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLmdyb3VwLW51bWJlciBsYWJlbDpudGgtY2hpbGQoMilcIlxyXG4gICAgKTtcclxuICAgIGxldCAkcmVzdWx0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciAucmVzdWx0LWJpdFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gJGZpcnN0TnVtYmVyLmxlbmd0aCAtIDEsIGogPSAwOyBpID49IDA7IGktLSwgaisrKSB7XHJcbiAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KFxyXG4gICAgICAgICRmaXJzdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KFxyXG4gICAgICAgICRzZWNvbmROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludChcclxuICAgICAgICAkcmVzdWx0TnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3ROdW1iZXJBcnJheSwgdGhpcy5zZWNvbmROdW1iZXJBcnJheSk7XHJcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gdGhpcy5hZGQoXHJcbiAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSxcclxuICAgICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qIFNldCBldmVudCBjbGljayBvbiBudW1iZXJcclxuICAgKi9cclxuICBpbml0RXZlbnRzKCkge1xyXG4gICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc3BsYXktbnVtYmVyXCIpKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TGFiZWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB0aGlzLmNoYW5nZU51bWJlcihwYXJlbnRMYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2EyNWFlMzQxZjMxMmU3NDY1ZWVcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsInNlbGVjdG9yTmFtZSIsIm5hbWUiLCIkY2FsY3VsYXRvckRPTUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdE51bWJlckFycmF5Iiwic2Vjb25kTnVtYmVyQXJyYXkiLCJyZXN1bHROdW1iZXJBcnJheSIsImluaXRFdmVudHMiLCJudW1iZXJYIiwibnVtYmVyWSIsImNvbnNvbGUiLCJlcnJvciIsInJvb3QiLCJyZXN1bHRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJldmVyc2UiLCJmb3JFYWNoIiwibnVtYmVyIiwiaSIsImlubmVyVGV4dCIsIiRmaXJzdE51bWJlciIsIiRzZWNvbmROdW1iZXIiLCIkcmVzdWx0TnVtYmVyIiwibGVuZ3RoIiwiaiIsInBhcnNlSW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsb2ciLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRMYWJlbCIsImNoYW5nZU51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=