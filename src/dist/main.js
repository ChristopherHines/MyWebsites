(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".caption {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #000;\r\n}\r\n\r\n.caption span.border {\r\n  background-color: #111;\r\n  color: #fff;\r\n  padding: 18px;\r\n  font-size: 25px;\r\n  letter-spacing: 10px;\r\n}\r\n\r\nh3 {\r\n  letter-spacing: 5px;\r\n  text-transform: uppercase;\r\n  font: 20px \"Lato\", sans-serif;\r\n  color: #111;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmNhcHRpb24gc3Bhbi5ib3JkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udDogMjBweCBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzExMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg-1\">\n  <div class=\"caption\">\n  <span class=\"border\">The Daily Trombone</span>\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n\n\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my playground';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");







var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/home']\" href=\"#\">back</a>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n    height: 100%;\r\n    margin: 0;\r\n    font: 400 15px/1.8 \"Lato\", sans-serif;\r\n    color: #777;\r\n  }\r\n  \r\n  .bgimg-1, .bgimg-2, .bgimg-3 {\r\n    position: relative;\r\n    opacity: 0.65;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  \r\n  }\r\n  \r\n  .bgimg-1 {\r\n    background-image: url('libary.jpg');\r\n    min-height: 100%;\r\n  }\r\n  \r\n  .bgimg-2 {\r\n    background-image: url('trees.jpg');\r\n    min-height: 400px;\r\n  }\r\n  \r\n  .bgimg-3 {\r\n    background-image: url('umbrellas.jpg');\r\n    min-height: 400px;\r\n  }\r\n  \r\n  .caption {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50%;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n  \r\n  .caption span.border {\r\n    background-color: #111;\r\n    color: #fff;\r\n    padding: 18px;\r\n    font-size: 25px;\r\n    letter-spacing: 10px;\r\n  }\r\n  \r\n  h3 {\r\n    letter-spacing: 5px;\r\n    text-transform: uppercase;\r\n    font: 20px \"Lato\", sans-serif;\r\n    color: #111;\r\n  }\r\n  \r\n  /* Turn off parallax scrolling for tablets and phones */\r\n  \r\n  @media only screen and (max-device-width: 1024px) {\r\n    .bgimg-1, .bgimg-2, .bgimg-3 {\r\n      background-attachment: scroll;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHNDQUFzQztJQUN0QyxZQUFZO0dBQ2I7O0VBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1Qjs7R0FFeEI7O0VBQ0Q7SUFDRSxvQ0FBaUQ7SUFDakQsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsbUNBQWdEO0lBQ2hELGtCQUFrQjtHQUNuQjs7RUFFRDtJQUNFLHVDQUFvRDtJQUNwRCxrQkFBa0I7R0FDbkI7O0VBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjs7RUFFRDtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7R0FDdEI7O0VBRUQ7SUFDRSxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixZQUFZO0dBQ2I7O0VBRUQsd0RBQXdEOztFQUN4RDtJQUNFO01BQ0UsOEJBQThCO0tBQy9CO0dBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udDogNDAwIDE1cHgvMS44IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZ2ltZy0xLCAuYmdpbWctMiwgLmJnaW1nLTMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMC42NTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBcclxuICB9XHJcbiAgLmJnaW1nLTEge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2xpYmFyeS5qcGdcIik7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYmdpbWctMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdHJlZXMuanBnXCIpO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZ2ltZy0zIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy91bWJyZWxsYXMuanBnXCIpO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXB0aW9uIHNwYW4uYm9yZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250OiAyMHB4IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFR1cm4gb2ZmIHBhcmFsbGF4IHNjcm9sbGluZyBmb3IgdGFibGV0cyBhbmQgcGhvbmVzICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuYmdpbWctMSwgLmJnaW1nLTIsIC5iZ2ltZy0zIHtcclxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"color: #777;background-color:white;text-align:center;padding:50px 80px;text-align: justify;\">\n  <h3 style=\"text-align:center;\">About Me</h3>\n  <p>My name is Christopher Hines and I was born and raised in Dallas, Texas. I graduated from Cedar Hill High\n     School in 2012, and I graduated from the University of North Texas in 2017. My hobbies include playing video\n     games and full stack web development.\n  </p>\n</div>\n\n<div class=\"bgimg-2\">\n  <div class=\"caption\">\n  <span class=\"border\" style=\"background-color:transparent;font-size:25px;color: #f7f7f7;\">The best person ever? Probably.</span>\n  </div>\n</div>\n\n<div style=\"position:relative;\">\n  <div style=\"color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;\">\n  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>\n  </div>\n</div>\n\n<div class=\"bgimg-3\">\n  <div class=\"caption\">\n  <span class=\"border\" style=\"background-color:transparent;font-size:25px;color: #f7f7f7;\">SCROLL UP</span>\n  </div>\n</div>\n\n<div style=\"position:relative;\">\n  <div style=\"color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;\">\n  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>\n  </div>\n</div>\n\n<div class=\"bgimg-1\" [routerLink]=\"['/gallery']\" style=\"cursor: pointer\">\n  <div class=\"caption\">\n  <span class=\"border\">gallery</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Christopher Hines\Desktop\MyWebsites\playground\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map