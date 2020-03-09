(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row bottom-border\">\n    \n      <div class=\"col-6\">\n        <!-- Material Form Elements -->\n        <form *ngIf=\"showMaterial\" [formGroup]=\"formGroup1\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>First Name</mat-label>\n                <input id=\"peepee\" formControlName=\"firstName\" matInput required/>\n                <mat-error *ngIf=\"f1.firstName.errors\">First Name is required</mat-error>\n                <mat-hint>Identical to your government ID</mat-hint>\n              </mat-form-field>\n            </div>\n            <div class=\"col-6\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Last Name</mat-label>\n                <input formControlName=\"lastName\" matInput required/>\n                <mat-error *ngIf=\"f1.lastName.errors\">Last Name is required</mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n    \n          <div class=\"row\">\n            <div class=\"col-12\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Street</mat-label>\n                <input matInput/>\n              </mat-form-field>\n            </div>\n          </div>\n    \n          <div class=\"row\">\n            <div class=\"col-3\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>State</mat-label>\n                <mat-select>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                  <mat-option>DE</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n    \n            <div class=\"col-6\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>City</mat-label>\n                <input matInput/>\n              </mat-form-field>\n            </div>\n    \n            <div class=\"col-3\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>ZIP</mat-label>\n                <input matInput/>\n              </mat-form-field>\n            </div>\n          </div>\n    \n          <div class=\"row\">\n            <div class=\"col-12\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Email</mat-label>\n                <input matInput/>\n              </mat-form-field>\n            </div>\n          </div>\n    \n          <div class=\"row\">\n            <div class=\"col-6\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Birthday</mat-label>\n                <input matInput [matDatepicker]=\"picker\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n    \n          <div class=\"row non-mat-row\">\n            <div class=\"col-2\">\n              Employed?\n            </div>\n            <div class=\"col-8\">\n              <mat-checkbox></mat-checkbox>\n            </div>\n          </div>\n    \n          <div class=\"row non-mat-row\">\n            <div class=\"col-2\">\n              Best Animal\n            </div>\n            <div class=\"col-8\">\n              <mat-radio-group aria-label=\"Select an option\">\n                <mat-radio-button value=\"1\">Red Knee Tarantula</mat-radio-button>\n                <mat-radio-button value=\"2\">Human</mat-radio-button>\n                <mat-radio-button value=\"3\">Capybara</mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n        </form>\n    \n        <!-- inline bootstrap -->\n        <form *ngIf=\"!showMaterial\" [formGroup]=\"formGroup2\" (ngSubmit)=\"submit()\">\n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\">First Name *</label>\n            <div class=\"col-9\">\n              <input id=\"poopee\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f2.firstName.errors }\" />\n              <div *ngIf=\"submitted && f2.firstName.errors\" class=\"invalid-feedback\">\n                First Name is required\n              </div>\n              <small class=\"form-text text-muted\">\n                Identical to your government ID\n              </small>\n            </div>\n          </div>\n    \n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\">Last Name *</label>\n            <div class=\"col-9\">\n              <input formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f2.lastName.errors }\">\n              <div *ngIf=\"submitted && f2.lastName.errors\" class=\"invalid-feedback\">\n                Last Name is required\n              </div>\n            </div>\n          </div>\n    \n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\">Street</label>\n            <div class=\"col-9\">\n              <input class=\"form-control\">\n            </div>\n          </div>\n    \n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\">State</label>\n            <div class=\"col-9\">\n              <select class=\"form-control\">\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>...</option>\n              </select>\n            </div>\n          </div>\n    \n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\">City</label>\n            <div class=\"col-9\">\n              <input class=\"form-control\">\n            </div>\n          </div>\n    \n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\">ZIP</label>\n            <div class=\"col-9\">\n              <input class=\"form-control\">\n            </div>\n          </div>\n    \n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\">Email</label>\n            <div class=\"col-9\">\n              <input class=\"form-control\">\n            </div>\n          </div>\n    \n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\">Birthday</label>\n            <div class=\"input-group col-9\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker2></mat-datepicker>\n                </div>\n              </div>\n              <input type=\"text\" class=\"form-control\" placeholder=\"mm/dd/yyyy\" [matDatepicker]=\"picker2\">\n            </div>\n          </div>\n    \n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\">Employed?</label>\n            <div class=\"col-9\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" class=\"form-check-input\" value=\"\">\n              </div>\n            </div>\n          </div>\n    \n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\">Best Animal</label>\n            <div class=\"col-9\">\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"optradio\">Red Knee Tarantula\n                </label>\n              </div>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"optradio\">Human\n                </label>\n              </div>\n              <div class=\"form-check-inline disabled\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"optradio\">Capybara\n                </label>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    \n    \n    \n      <!-- Bootstrap Form Elements -->\n      <div class=\"col-6\">\n        <form [formGroup]=\"formGroup3\" (ngSubmit)=\"submit()\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-6\">\n              <label>First Name *</label>\n              <input formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f3.firstName.errors }\" />\n              <div *ngIf=\"submitted && f3.firstName.errors\" class=\"invalid-feedback\">\n                First Name is required\n              </div>\n              <small class=\"form-text text-muted\">\n                Identical to your government ID\n              </small>\n            </div>\n            <div class=\"form-group col-6\">\n              <label>Last Name *</label>\n              <input formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f3.lastName.errors }\">\n              <div *ngIf=\"submitted && f3.lastName.errors\" class=\"invalid-feedback\">\n                Last Name is required\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"form-row\">\n            <div class=\"form-group col-12\">\n              <label>Street</label>\n              <input class=\"form-control\">\n            </div>\n          </div>\n          \n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label>State</label>\n              <select class=\"form-control\">\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>DE</option>\n                <option>...</option>\n              </select>\n            </div>\n          \n            <div class=\"form-group col-6\">\n              <label>City</label>\n              <input class=\"form-control\">\n            </div>\n          \n            <div class=\"form-group col-3\">\n              <label>ZIP</label>\n              <input class=\"form-control\">\n            </div>\n          </div>\n          \n          <div class=\"form-row\">\n            <div class=\"form-group col-12\">\n              <label>Email</label>\n              <input class=\"form-control\">\n            </div>\n          </div>\n          \n          <div class=\"form-row\">\n            <div class=\"form-group col-6\">\n              <label>Birthday</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker3></mat-datepicker>\n                  </div>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"mm/dd/yyyy\" [matDatepicker]=\"picker3\">\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"form-row\">\n            <div class=\"form-check-inline\">\n              <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\" value=\"\">Employed?\n              </label>\n            </div>\n          </div>\n          \n          <div class=\"form-row\">\n            <label class=\"mr-4 mt-1\">Best Animal</label>\n            <div class=\"form-check-inline\">\n              <label class=\"form-check-label\">\n                <input type=\"radio\" class=\"form-check-input\" name=\"optradio\">Red Knee Tarantula\n              </label>\n            </div>\n            <div class=\"form-check-inline\">\n              <label class=\"form-check-label\">\n                <input type=\"radio\" class=\"form-check-input\" name=\"optradio\">Human\n              </label>\n            </div>\n            <div class=\"form-check-inline disabled\">\n              <label class=\"form-check-label\">\n                <input type=\"radio\" class=\"form-check-input\" name=\"optradio\">Capybara\n              </label>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <button (click)=\"submit()\">Submit Form</button>\n    <!-- <button (click)=\"showMaterial = !showMaterial\">toggle material</button> -->\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: white;\n  height: 100vh;\n  padding: 15px;\n}\n\n.non-mat-row {\n  padding-bottom: 1.34375em;\n}\n\n.bottom-border {\n  border-bottom: solid black 1px;\n}\n\n.input-group-text {\n  padding: 0;\n  height: 29px;\n  width: 30px;\n}\n\n::ng-deep mat-datepicker-toggle .mat-icon-button {\n  padding: 0;\n  width: 29px;\n  height: 29px;\n  line-height: 29px;\n}\n\n::ng-deep mat-datepicker-toggle svg {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxSTGV5XFxEb2N1bWVudHNcXHByb2plY3RzXFxjb21wYXJlLW1hdGVyaWFsLWJvb3RzdHJhcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBREFBO0VBQ0UsOEJBQUE7QUNHRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VGOztBRENFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubm9uLW1hdC1yb3cgeyAgICBcclxuICBwYWRkaW5nLWJvdHRvbTogMS4zNDM3NWVtO1xyXG59XHJcbi5ib3R0b20tYm9yZGVyIHtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuXHJcbi8vIGRhdGUtcGlja2VyIGJ1dHRvblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDI5cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuOjpuZy1kZWVwIG1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XHJcbiAgLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDI5cHg7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjlweDtcclxuICB9XHJcbiAgXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gIH1cclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5ub24tbWF0LXJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjM0Mzc1ZW07XG59XG5cbi5ib3R0b20tYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2sgMXB4O1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMjlweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbjo6bmctZGVlcCBtYXQtZGF0ZXBpY2tlci10b2dnbGUgLm1hdC1pY29uLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAyOXB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuOjpuZy1kZWVwIG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBzdmcge1xuICB3aWR0aDogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'compare-material-bootstrap';
        this.showMaterial = true;
        this.submitted = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.formGroup1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.formGroup2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.formGroup3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    AppComponent.prototype.submit = function () {
        console.log(this.formGroup2);
        this.submitted = true;
        if (this.formGroup2.invalid) {
            return;
        }
    };
    Object.defineProperty(AppComponent.prototype, "f1", {
        get: function () { return this.formGroup1.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "f2", {
        get: function () { return this.formGroup2.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "f3", {
        get: function () { return this.formGroup3.controls; },
        enumerable: true,
        configurable: true
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RLey\Documents\projects\compare-material-bootstrap\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map