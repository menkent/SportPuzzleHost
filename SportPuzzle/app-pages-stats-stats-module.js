(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-stats-stats-module"],{

/***/ "./src/app/pages/stats/main-stats/main-stats.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/stats/main-stats/main-stats.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main-stats works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/stats/main-stats/main-stats.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/stats/main-stats/main-stats.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRzL21haW4tc3RhdHMvbWFpbi1zdGF0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/stats/main-stats/main-stats.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/stats/main-stats/main-stats.component.ts ***!
  \****************************************************************/
/*! exports provided: MainStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainStatsComponent", function() { return MainStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainStatsComponent = /** @class */ (function () {
    function MainStatsComponent() {
    }
    MainStatsComponent.prototype.ngOnInit = function () {
    };
    MainStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-stats',
            template: __webpack_require__(/*! ./main-stats.component.html */ "./src/app/pages/stats/main-stats/main-stats.component.html"),
            styles: [__webpack_require__(/*! ./main-stats.component.scss */ "./src/app/pages/stats/main-stats/main-stats.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainStatsComponent);
    return MainStatsComponent;
}());



/***/ }),

/***/ "./src/app/pages/stats/stats-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/stats/stats-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StatsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsRoutingModule", function() { return StatsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_stats_main_stats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-stats/main-stats.component */ "./src/app/pages/stats/main-stats/main-stats.component.ts");




var routes = [
    {
        path: "",
        component: _main_stats_main_stats_component__WEBPACK_IMPORTED_MODULE_3__["MainStatsComponent"],
    },
];
var StatsRoutingModule = /** @class */ (function () {
    function StatsRoutingModule() {
    }
    StatsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StatsRoutingModule);
    return StatsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/stats/stats.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/stats/stats.module.ts ***!
  \*********************************************/
/*! exports provided: StatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsModule", function() { return StatsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stats_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stats-routing.module */ "./src/app/pages/stats/stats-routing.module.ts");
/* harmony import */ var _main_stats_main_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-stats/main-stats.component */ "./src/app/pages/stats/main-stats/main-stats.component.ts");





var StatsModule = /** @class */ (function () {
    function StatsModule() {
    }
    StatsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_main_stats_main_stats_component__WEBPACK_IMPORTED_MODULE_4__["MainStatsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _stats_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatsRoutingModule"]
            ],
            exports: [_main_stats_main_stats_component__WEBPACK_IMPORTED_MODULE_4__["MainStatsComponent"]]
        })
    ], StatsModule);
    return StatsModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-stats-stats-module.js.map