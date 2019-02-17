(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/pages/settings/settings.module": [
		"./src/app/pages/settings/settings.module.ts",
		"app-pages-settings-settings-module"
	],
	"../app/pages/stats/stats.module": [
		"./src/app/pages/stats/stats.module.ts",
		"app-pages-stats-stats-module"
	],
	"../app/pages/training/training.module": [
		"./src/app/pages/training/training.module.ts",
		"app-pages-training-training-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sport_common_authorization_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sport-common/authorization.guard */ "./src/app/sport-common/authorization.guard.ts");
/* harmony import */ var _sport_common_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sport-common/authorization/authorization.component */ "./src/app/sport-common/authorization/authorization.component.ts");





var routes = [
    {
        path: "",
        loadChildren: "../app/pages/training/training.module#TrainingModule",
        canActivate: [_sport_common_authorization_guard__WEBPACK_IMPORTED_MODULE_3__["AuthorizationGuard"]],
    },
    {
        path: "settings",
        loadChildren: "../app/pages/settings/settings.module#SettingsModule",
        canActivate: [_sport_common_authorization_guard__WEBPACK_IMPORTED_MODULE_3__["AuthorizationGuard"]],
    },
    {
        path: "stats",
        loadChildren: "../app/pages/stats/stats.module#StatsModule",
        canActivate: [_sport_common_authorization_guard__WEBPACK_IMPORTED_MODULE_3__["AuthorizationGuard"]],
    },
    {
        path: 'login',
        component: _sport_common_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_4__["AuthorizationComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"loader-info\" [hidden]=\"!viewLoadBar\">\n  <mat-progress-bar\n        [mode]=\"'indeterminate'\"\n  ></mat-progress-bar>\n</div>\n\n<mat-toolbar>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" style=\"position: absolute;\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item routerLink=\"/\" routerLinkActive=\"active\">\n        <mat-icon>fitness_center</mat-icon>\n        <span>Main</span>\n      </button>\n      <button mat-menu-item routerLink=\"/settings\" routerLinkActive=\"active\">\n        <mat-icon>settings</mat-icon>\n        <span>Settings</span>\n      </button>\n      <button mat-menu-item routerLink=\"/stats\" routerLinkActive=\"active\">\n        <mat-icon>free_breakfast</mat-icon>\n        <span>Statistics</span>\n      </button>\n      <button mat-menu-item (click)=\"quit()\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span>Exit</span>\n      </button>\n    </mat-menu>\n    <div class=\"header-main\">{{ title }}</div>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-info {\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.header-main {\n  font-size: 1.25rem;\n  text-align: center;\n  font-weight: bold;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHByb2plY3RzXFxTcG9ydFB1enpsZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvYWRlci1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVyLW1haW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user-info.service */ "./src/app/services/user-info.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(restService, userService) {
        this.restService = restService;
        this.userService = userService;
        this.title = 'SportPuzzle';
    }
    Object.defineProperty(AppComponent.prototype, "viewLoadBar", {
        get: function () {
            return this.restService.isLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "user", {
        get: function () {
            return this.userService.user$;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.quit = function () {
        this.userService.qiut();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sport_common_sport_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sport-common/sport-common.module */ "./src/app/sport-common/sport-common.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _sport_common_sport_common_module__WEBPACK_IMPORTED_MODULE_8__["SportCommonModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            ],
            // exports: [...modules],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/mappable.ts":
/*!*************************************!*\
  !*** ./src/app/classes/mappable.ts ***!
  \*************************************/
/*! exports provided: Mappable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mappable", function() { return Mappable; });
var Mappable = /** @class */ (function () {
    function Mappable(data) {
        if (data) {
            Object.assign(this, data);
        }
    }
    // toJson
    Mappable.prototype.toJson = function () {
        return JSON.stringify(this.toMap());
    };
    // toMap
    Mappable.prototype.toMap = function (obj) {
        if (obj === void 0) { obj = this; }
        return this.objToMap(obj);
    };
    // objToMap
    Mappable.prototype.objToMap = function (obj) {
        if (obj === void 0) { obj = this; }
        if (obj === null) {
            return obj;
        }
        var isObject = obj instanceof Object;
        var isMappable = obj instanceof Mappable;
        var isArray = Array.isArray(obj);
        var objValues = isArray ? [] : {};
        if (isMappable) {
            // Iterate over each property for this object and its prototypes.
            // We'll get each property only once regardless of how many times it exists on parent prototypes.
            for (var key in obj) {
                if (key) {
                    var proto = obj;
                    // Check getOwnPropertyDescriptor to see if the property is a getter.
                    // It will only return the descriptor for properties on this object (not prototypes),
                    // so we have to walk the prototype chain.
                    while (proto) {
                        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
                        if (descriptor && descriptor.get) {
                            // Access the getter on the original object (not proto),
                            // because while the getter may be defined on proto,
                            // we want the property it gets to be the one from the lowest level
                            var rawValue = obj[key];
                            var value = void 0;
                            if (Array.isArray(rawValue)) {
                                // массив - следует обработать каждый элемент
                                value = [];
                                for (var rawItemIndex in rawValue) {
                                    if (rawItemIndex) {
                                        var rawItem = rawValue[rawItemIndex];
                                        if (rawItem) {
                                            var item = this.objToMap(rawItem);
                                            value.push(item);
                                        }
                                    }
                                }
                            }
                            else if (rawValue instanceof Object) {
                                // объект - следует проанализировать геттеры
                                value = this.objToMap(rawValue);
                            }
                            else {
                                value = rawValue;
                            }
                            if (value !== undefined) {
                                objValues[key] = value;
                            }
                            proto = null;
                        }
                        else {
                            proto = Object.getPrototypeOf(proto);
                        }
                    }
                }
            }
        }
        else if (isObject) {
            // объект является обычной нетипизированной мапой или массивом
            // следует вернуть его как совокупность проверок на геттеры его элементов
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var rawValue = obj[key];
                    var value = (rawValue) ? this.objToMap(rawValue) : rawValue;
                    objValues[key] = value;
                }
            }
        }
        else {
            return obj;
        }
        return objValues;
    };
    return Mappable;
}());



/***/ }),

/***/ "./src/app/classes/program-complex.ts":
/*!********************************************!*\
  !*** ./src/app/classes/program-complex.ts ***!
  \********************************************/
/*! exports provided: ProgramComplex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComplex", function() { return ProgramComplex; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mappable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mappable */ "./src/app/classes/mappable.ts");


var ProgramComplex = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProgramComplex, _super);
    function ProgramComplex(data) {
        var _this = _super.call(this, data) || this;
        _this._protoTrainigs = [];
        if (data) {
            Object.assign(_this, data);
        }
        return _this;
    }
    Object.defineProperty(ProgramComplex.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgramComplex.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgramComplex.prototype, "protoTrainigs", {
        get: function () {
            return this._protoTrainigs;
        },
        set: function (value) {
            this._protoTrainigs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgramComplex.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProgramComplex;
}(_mappable__WEBPACK_IMPORTED_MODULE_1__["Mappable"]));



/***/ }),

/***/ "./src/app/classes/proto-exercise.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/proto-exercise.ts ***!
  \*******************************************/
/*! exports provided: ProtoExercise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtoExercise", function() { return ProtoExercise; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mappable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mappable */ "./src/app/classes/mappable.ts");


var ProtoExercise = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProtoExercise, _super);
    function ProtoExercise(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            Object.assign(_this, data);
        }
        return _this;
    }
    Object.defineProperty(ProtoExercise.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProtoExercise.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProtoExercise.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProtoExercise.prototype, "videoLink", {
        get: function () {
            return this._videoLink;
        },
        set: function (value) {
            this._videoLink = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProtoExercise;
}(_mappable__WEBPACK_IMPORTED_MODULE_1__["Mappable"]));



/***/ }),

/***/ "./src/app/classes/proto-training.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/proto-training.ts ***!
  \*******************************************/
/*! exports provided: ProtoTraining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtoTraining", function() { return ProtoTraining; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mappable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mappable */ "./src/app/classes/mappable.ts");


var ProtoTraining = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProtoTraining, _super);
    function ProtoTraining(data) {
        var _this = _super.call(this, data) || this;
        _this._exercises = [];
        if (data) {
            Object.assign(_this, data);
        }
        return _this;
    }
    Object.defineProperty(ProtoTraining.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProtoTraining.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProtoTraining.prototype, "exercises", {
        get: function () {
            return this._exercises;
        },
        set: function (value) {
            this._exercises = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProtoTraining;
}(_mappable__WEBPACK_IMPORTED_MODULE_1__["Mappable"]));



/***/ }),

/***/ "./src/app/classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mappable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mappable */ "./src/app/classes/mappable.ts");


var User = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](User, _super);
    function User(data) {
        var _this = _super.call(this, data) || this;
        _this._programComplexes = [];
        _this._trainigs = [];
        if (data) {
            Object.assign(_this, data);
        }
        return _this;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "programComplexes", {
        get: function () {
            return this._programComplexes;
        },
        set: function (value) {
            this._programComplexes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "trainigs", {
        get: function () {
            return this._trainigs;
        },
        set: function (value) {
            this._trainigs = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}(_mappable__WEBPACK_IMPORTED_MODULE_1__["Mappable"]));



/***/ }),

/***/ "./src/app/consts/program_complex.ts":
/*!*******************************************!*\
  !*** ./src/app/consts/program_complex.ts ***!
  \*******************************************/
/*! exports provided: PROGCOMPLEX1, PROGCOMPLEX2, USER_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGCOMPLEX1", function() { return PROGCOMPLEX1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGCOMPLEX2", function() { return PROGCOMPLEX2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LIST", function() { return USER_LIST; });
/* harmony import */ var _classes_program_complex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/program-complex */ "./src/app/classes/program-complex.ts");
/* harmony import */ var _classes_proto_training__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/proto-training */ "./src/app/classes/proto-training.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proto-exercises-andrew */ "./src/app/consts/proto-exercises-andrew.ts");
/* harmony import */ var _proto_exercises_vika__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proto-exercises-vika */ "./src/app/consts/proto-exercises-vika.ts");





var TestProtoTrainigVika1 = new _classes_proto_training__WEBPACK_IMPORTED_MODULE_1__["ProtoTraining"]({
    name: 'ДЕНЬ 1: ноги, спина(широчайшие), бицепс',
    id: '1',
    exercises: _proto_exercises_vika__WEBPACK_IMPORTED_MODULE_4__["protoExercisesVikaDay1"],
});
var TestProtoTrainigVika2 = new _classes_proto_training__WEBPACK_IMPORTED_MODULE_1__["ProtoTraining"]({
    name: 'ДЕНЬ 2: грудь, орешек, трицепс',
    id: '2',
    exercises: _proto_exercises_vika__WEBPACK_IMPORTED_MODULE_4__["protoExercisesVikaDay2"],
});
var TestProtoTrainigVika3 = new _classes_proto_training__WEBPACK_IMPORTED_MODULE_1__["ProtoTraining"]({
    name: 'ДЕНЬ 3: ноги, плечи(дельты), руки',
    id: '1',
    exercises: _proto_exercises_vika__WEBPACK_IMPORTED_MODULE_4__["protoExercisesVikaDay3"],
});
var TestProtoTrainigA1 = new _classes_proto_training__WEBPACK_IMPORTED_MODULE_1__["ProtoTraining"]({
    name: 'ДЕНЬ 1: ноги, спина(широчайшие), бицепс',
    id: 'a1',
    exercises: _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_3__["protoExercisesAndrewDay1"],
});
var TestProtoTrainigA2 = new _classes_proto_training__WEBPACK_IMPORTED_MODULE_1__["ProtoTraining"]({
    name: 'ДЕНЬ 2: грудь, плечи+спина, трицепс',
    id: 'a2',
    exercises: _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_3__["protoExercisesAndrewDay2"],
});
var TestProtoTrainigA3 = new _classes_proto_training__WEBPACK_IMPORTED_MODULE_1__["ProtoTraining"]({
    name: 'ДЕНЬ 3: ноги, плечи(дельты), руки',
    id: 'a3',
    exercises: _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_3__["protoExercisesAndrewDay3"],
});
var PROGCOMPLEX1 = new _classes_program_complex__WEBPACK_IMPORTED_MODULE_0__["ProgramComplex"]({
    id: 'adad13213',
    name: 'test 1',
    protoTrainigs: [TestProtoTrainigVika1, TestProtoTrainigVika2, TestProtoTrainigVika3],
});
var PROGCOMPLEX2 = new _classes_program_complex__WEBPACK_IMPORTED_MODULE_0__["ProgramComplex"]({
    id: 'aasdadasdad123213',
    name: 'Первый ОФП комплекс',
    protoTrainigs: [TestProtoTrainigA1, TestProtoTrainigA2, TestProtoTrainigA3],
});
var USER_LIST = [
    new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"]({
        id: 'vika',
        programComplexes: [PROGCOMPLEX1],
    }),
    new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"]({
        id: 'andrew',
        programComplexes: [PROGCOMPLEX2],
    }),
];


/***/ }),

/***/ "./src/app/consts/proto-exercises-andrew.ts":
/*!**************************************************!*\
  !*** ./src/app/consts/proto-exercises-andrew.ts ***!
  \**************************************************/
/*! exports provided: protoExercisesAndrewDay1, protoExercisesAndrewDay2, protoExercisesAndrewDay3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoExercisesAndrewDay1", function() { return protoExercisesAndrewDay1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoExercisesAndrewDay2", function() { return protoExercisesAndrewDay2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoExercisesAndrewDay3", function() { return protoExercisesAndrewDay3; });
/* harmony import */ var _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/proto-exercise */ "./src/app/classes/proto-exercise.ts");

var protoExercisesAndrewDay1 = [
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad1_1',
        name: 'Жим ногами платформы лёжа',
        description: "\n            10 - \u043D\u0438\u0437\u043A\u0430\u044F \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043D\u043E\u0433<br>\n            10 - \u043F\u043B\u0438\u0435,<br>\n            10 - \u0432\u044B\u0441\u043E\u043A\u0430\u044F (\u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F  \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043D\u043E\u0433 \u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0435 \u043F\u043B\u0435\u0447, \u043D\u043E\u0441\u043A\u0438 \u043F\u043E \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u0443 \u0441\u0442\u0443\u043F\u043D\u0435\u0439 (\u043A\u0430\u043A \u0445\u043E\u0434\u0438\u0448\u044C)<br>\n            \u0433\u043E\u043B\u0435\u043D\u044C \u043A \u0431\u0435\u0434\u0440\u0443 90\u0966 <br>\n            \u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u0433\u043B\u0443\u0431\u043E\u043A\u043E!!! (\u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440 - \u0442\u0430\u0437 \u043E\u0442 \u0441\u043F\u0438\u043D\u043A\u0438 \u043E\u0442\u0440\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D, \u043A\u0430\u043A \u043D\u0430\u0447\u0430\u043B\u0441\u044F \u043E\u0442\u0440\u044B\u0432 - \u0434\u0430\u0432\u0438\u043C)<br>\n            \u043A\u043E\u043B\u0435\u043D\u0438 \u043D\u0435 \u0432\u044B\u043F\u0440\u044F\u043C\u043B\u044F\u0435\u043C<br>\n            \u0434\u0430\u0432\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043F\u044F\u0442\u043A\u0443<br>\n            \u0436\u0438\u043C \u043D\u0430 \u0432\u044B\u0434\u043E\u0445\u0435<br>\n            (\u043F\u043E \u0441\u0443\u0442\u0438 \u044D\u0442\u043E \u043F\u0440\u0438\u0441\u0435\u0434 \u0441\u043E \u0448\u0442\u0430\u043D\u0433\u043E\u0439 \u0431\u0435\u0437 \u043E\u0441\u0435\u0432\u043E\u0433\u043E \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0430 \u043F\u043E\u0437\u0432\u043E\u043D\u043E\u0447\u043D\u0438\u043A)\n        ",
        videoLink: 'https://youtu.be/B_9Vh-GiAcQ',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad1_2',
        name: 'Присед с гирей/гантелей в стиле сумо',
        description: "",
        videoLink: 'https://tvoytrener.com/yprajnenia/prisedania_mejdy_nog.php',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad1_3',
        name: 'Выпады с шагом назад',
        description: "\n        \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0441\u043E \u0441\u0433\u0438\u0431\u0430\u043D\u0438\u044F \u0442\u0430\u0437\u0430, \u043A\u043E\u043B\u0435\u043D\u043E \u0443\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u0434 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 <br>\n        \u043A\u043E\u0440\u043F\u0443\u0441 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432\u043F\u0435\u0440\u0435\u0434 \u0437\u0430 \u0441\u0447\u0435\u0442 \u043E\u0442\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0442\u0430\u0437\u0430 \u043D\u0430\u0437\u0430\u0434 <br>\n        \u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C\u0441\u044F \u0434\u043E \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u0438 \u0441 \u043F\u043E\u043B\u043E\u043C, \u043F\u0440\u0438 \u043F\u043E\u0434\u044A\u0435\u043C\u0435 \u0434\u0430\u0432\u0438\u043C \u043D\u0430 \u043F\u044F\u0442\u043A\u0443 <br>\n        3-5 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432, 15-20 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439 \u043D\u0430 \u043A\u0430\u0436\u0434\u0443\u044E \u043D\u043E\u0433\u0443\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad1_4',
        name: 'Тяга в верхнем блоке широким хватом к груди',
        description: "\n        (\u043B\u043E\u043A\u043E\u0442\u044C \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442\u0441\u044F, \u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F) - \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043B\u043E\u043F\u0430\u0442\u043A\u0430 (\u0441\u0432\u043E\u0434\u0438\u043C \u0432 \u043F\u0438\u043A\u043E\u0432\u043E\u0439 \u0442\u043E\u0447\u043A\u0435). \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0441\u0442\u0430\u0440\u0430\u0442\u044C\u0441\u044F \u0440\u0443\u043A\u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E.<br>\n        1-2 \u0440\u0430\u0437\u043C\u0438\u043D\u043E\u0447\u043D\u044B\u0445 (20 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439), 1 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 (\u0432\u0435\u0441) - 10-12-15 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439 (\u043D\u0430 \u043E\u0442\u043A\u0430\u0437) <br>\n        \u0433\u043E\u043B\u043E\u0432\u0430 \u0447\u0443\u0442\u044C \u0432\u044B\u0448\u0435, \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431 \u0432\u044B\u043F\u0440\u044F\u043C\u0438\u0442\u044C \u043F\u043E\u044F\u0441\u043D\u0438\u0446\u0443 <br>\n        \u043F\u043E \u0441\u0443\u0442\u0438 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u0430 \u043F\u043E\u0434\u0442\u044F\u0433\u0438\u0432\u0430\u043D\u0438\u044F\u043C \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u0432\u0435\u0441\u043E\u043C - \u0432\u044B\u0439\u0442\u0438 \u043D\u0430 \u043F\u043E\u0434\u0442\u044F\u0433\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\n        ",
        videoLink: 'https://tvoytrener.com/yprajnenia/tiaga_s_verhnego_bloka.php',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad1_5',
        name: 'Тяга гантели к поясу в наклоне одной рукой',
        description: "\n        \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u043E \u0438\u0437 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0440\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u043D\u043E \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043C\u044B\u0448\u0446\u044B \u0441\u043F\u0438\u043D\u044B \u0438\u0437 \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0435 \u0432\u044B\u043A\u043B\u044E\u0447\u0430\u0435\u043C, \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u043E \u0442\u0438\u043F\u0443 \u043F\u0430\u0440\u0430\u0432\u043E\u0437\u0430,\n        \u0431\u0438\u0446\u0435\u043F\u0441 \u0440\u0430\u0441\u0441\u043B\u0430\u0431\u043B\u0435\u043D \u0438 \u0442\u044F\u043D\u0435\u043C \u0441\u043F\u0438\u043D\u043E\u0439 \u043B\u043E\u043F\u0430\u0442\u043A\u0443 \u0441\u0442\u0430\u0440\u0430\u0435\u043C\u0441\u044F \u043A \u043F\u043E\u0437\u0432\u043E\u043D\u043E\u0447\u043D\u0438\u043A\u0443, \u043A\u043E\u0440\u043F\u0443\u0441\u043E\u043C \u0434\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u043C, \u0433\u0430\u043D\u0442\u0435\u043B\u044C \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u043A \u0442\u0430\u043B\u0438\u0438, \u043A \u0431\u0435\u0434\u0440\u0443\n        \u043D\u0430\u0437\u0430\u0434 \u043B\u043E\u043A\u043E\u0442\u044C \u043D\u0435 \u043E\u0442\u043A\u0438\u0434\u044B\u0432\u0430\u0435\u043C \u0438 \u043D\u0435 \u0433\u043E\u043B\u043E\u0432\u0443 \u043D\u0435 \u043E\u043F\u0443\u0441\u043A\u0430\u0442\u044C!\n        ",
        videoLink: 'https://tvoytrener.com/yprajnenia/tiaga_ganteli.php',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad1_6',
        name: 'Тяга горизонтального блока к себе',
        description: "\n        \u043D\u0435 \u0441\u0443\u0442\u0443\u043B\u0438\u0442\u044C\u0441\u044F, \u043D\u043E\u0433\u0438 \u0447\u0443\u0442\u044C \u0441\u043E\u0433\u043D\u0443\u0442\u044B, \u0430\u043A\u0446\u0435\u043D\u0442 \u043D\u0430 \u0441\u043F\u0438\u043D\u0443 \u043D\u0430 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043B\u043E\u043F\u0430\u0442\u043E\u043A\n        ",
        videoLink: 'https://tvoytrener.com/yprajnenia/tiaga_gorizontalnogo_bloka.php',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad1_7',
        name: 'Попеременное сгибание на бицепс с гантелью',
        description: "\n        \u043D\u0430\u043F\u0440\u044F\u0433\u0430\u0442\u044C \u0431\u0438\u0446\u0435\u043F\u0441 \u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u0442\u043E\u0447\u043A\u0435<br>\n        \u043B\u043E\u043A\u043E\u0442\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u044B\u0445\u043E\u0434\u0438\u0442\u044C \u0447\u0443\u0442\u044C \u0432\u043F\u0435\u0440\u0451\u0434, \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 30.<br>\n        \u0440\u0430\u0437\u0433\u0438\u0431\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0447\u0442\u0438 \u0434\u043E \u043A\u043E\u043D\u0446\u0430<br>\n        \u041D\u0415 \u0417\u0410\u0411\u0420\u0410\u0421\u042B\u0412\u0410\u0422\u042C \u0413\u0410\u041D\u0422\u0415\u041B\u042E<br>\n        ",
        videoLink: '',
    }),
];
var protoExercisesAndrewDay2 = [
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad2_1',
        name: 'Жим штанги лёжа',
        description: 'Жим штанги лёжа',
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad2_2',
        name: 'Разведение гантелей на наклонной скамье',
        description: "\n        30-40 \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432, \u043C\u0435\u0436\u0434\u0443 \u0433\u0430\u043D\u0442\u0435\u043B\u044F\u043C\u0438 15-20 \u0441\u043C \u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u0442\u043E\u0447\u043A\u0435<br>\n        \u043A\u0443\u043B\u0430\u043A\u0438 \u0441\u043C\u043E\u0442\u0440\u044F\u0442 \u0432\u0432\u0435\u0440\u0445 \u0432\u0441\u0435\u0433\u0434\u0430, <br>\n        \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u043E \u0434\u0443\u0433\u0435, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043B\u043E\u043A\u0442\u0435\u0439<br>\n        1 \u0440\u0430\u0437\u043C\u0438\u043D\u043E\u0447\u043D\u044B\u0439 \u0438 2 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043F\u043E\u0434\u0445\u043E\u0434\u0430  \u043F\u043E 12-15 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439<br>\n        \u0434\u043B\u044F \u043F\u043E\u0434\u044A\u0435\u043C\u0430 - \u0433\u0430\u043D\u0442\u0435\u043B\u0438 \u043D\u0430 \u043A\u043E\u043B\u0435\u043D\u0438 (\u043D\u043E\u0433\u0438 \u043A \u043D\u0438\u043C), \u0432\u0441\u0442\u0430\u0435\u043C \u043F\u043E\u043A\u0430\u0442\u043E\u0439 \u0441\u043F\u0438\u043D\u043E\u0439<br>\n        ",
        videoLink: 'https://tvoytrener.com/yprajnenia/prisedania_mejdy_nog.php',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad2_3',
        name: 'Тренажёр для груди',
        description: "\n        \u0422\u0430\u043C \u0435\u0441\u0442\u044C \u0441\u043F\u0435\u0446. \u0442\u0440\u0435\u043D\u0430\u0436\u0451\u0440.\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad2_4',
        name: 'Тяга штанги в наклоне',
        description: 'Тяга штанги в наклоне',
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad2_5',
        name: 'Жим гантелей сидя вверх',
        description: "\n        \u043F\u043E\u0434 \u0443\u0433\u043B\u043E\u043C 80\u0433\u0440.<br>\n        4 \u0442\u043E\u0447\u043A\u0438 \u043E\u043F\u043E\u0440\u044B - \u0441\u0442\u043E\u043F\u044B,\u0442\u0430\u0437 \u043B\u043E\u043F\u0430\u0442\u043A\u0438,\u0437\u0430\u0442\u044B\u043B\u043E\u043A, \u0440\u0443\u043A\u0438 \u0438 \u0433\u043E\u043B\u043E\u0432\u0430 \u0432 \u043E\u0434\u043D\u043E\u0439 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438<br>\n        \u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0433\u0430\u043D\u0442\u0435\u043B\u0438 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0434\u043E \u0443\u0448\u0435\u0439, \u043C\u043E\u0447\u043A\u0430, \u043F\u0440\u0438 \u043F\u043E\u0434\u044A\u0435\u043C\u0435 \u0447\u0443\u0442\u044C \u0438\u0445 \u0441\u0432\u043E\u0434\u0438\u043C \u0432\u043C\u0435\u0441\u0442\u0435, \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u043E \u0434\u0443\u0433\u0435. \u041B\u043E\u043A\u0442\u0438 \u043D\u0435 \u0432\u044B\u043F\u0440\u044F\u043C\u043B\u044F\u0442\u044C.<br>\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad2_6',
        name: 'Обратное разведение (батэрфляй)',
        description: "\u041E\u0431\u0440\u0430\u0442\u043D\u043E\u0435 \u0440\u0430\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 (\u0431\u0430\u0442\u044D\u0440\u0444\u043B\u044F\u0439) - \u0442\u043E\u0436\u0435 \u0435\u0441\u0442\u044C \u0442\u0440\u0435\u043D\u0430\u0436\u0451\u0440. \u041D\u0430 \u0441\u0435\u0431\u044F \u043D\u0435 \u0442\u044F\u043D\u0443\u0442\u044C<br>\n        \u0438\u043C\u0438\u0442\u0430\u0446\u0438\u044F \u0440\u0430\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0440\u0443\u043A \u0432 \u043D\u0430\u043A\u043B\u043E\u043D\u0435<br>\n        \u043F\u043B\u0435\u0447\u0438 \u043A\u0430\u043A \u043D\u0430 \u0432\u0435\u0448\u0430\u043B\u043A\u0435<br>\n        \u0441\u0435\u043B, \u043F\u0440\u0438\u0436\u0430\u043B\u0441\u044F \u0433\u0440\u0443\u0434\u044C\u044E, \u043F\u043E\u0434\u0431\u043E\u0440\u043E\u0434\u043E\u043A \u043D\u0435 \u043A\u043B\u0430\u0441\u0442\u044C<br>\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad2_7',
        name: 'Французский жим штанги лежа',
        description: "\n        \u0445\u0432\u0430\u0442 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0443\u0436\u0435 \u0447\u0435\u043C \u0448\u0438\u0440\u0438\u043D\u0430 \u043F\u043B\u0435\u0447, \u043B\u043E\u043A\u0442\u0438 \u0447\u0443\u0442\u044C \u0437\u0430\u0432\u0430\u043B\u0435\u043D\u044B \u043D\u0430\u0437\u0430\u0434, \u043E\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u0433\u0440\u0438\u0444 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0433\u0434\u0435 \u0432\u043E\u043B\u043E\u0441\u044B \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F\n        ",
        videoLink: '',
    }),
];
var protoExercisesAndrewDay3 = [
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad3_1',
        name: 'Присед со штангой',
        description: "\n        \u043D\u043E\u0433\u0438 \u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0435 \u043F\u043B\u0435\u0447, \u043D\u043E\u0441\u043A\u0438 \u0447\u0443\u0442\u044C \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u043A\u043B\u0430\u0434\u0435\u043C \u043D\u0430 \u0442\u0440\u0430\u043F\u0435\u0446\u0435\u0432\u0438\u0434\u043D\u044B\u0435 \u043C\u044B\u0448\u0446\u044B, \u043A\u0438\u0441\u0442\u0438 \u0431\u0435\u0440\u0435\u043C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E.<br>\n        \u0434\u043E \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u0438 \u0441 \u043F\u043E\u043B\u043E\u043C, \u0433\u043E\u043B\u043E\u0432\u0443 \u043D\u0435 \u043E\u043F\u0443\u0441\u043A\u0430\u0442\u044C<br>\n        \u0432\u044B\u0434\u043E\u0445 \u043D\u0430 \u043F\u043E\u0434\u044A\u0435\u043C, \u043D\u043E\u0433\u0443 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u043D\u0435 \u0432\u044B\u043F\u0440\u044F\u043C\u043B\u044F\u0442\u044C \u0432 \u043A\u043E\u043B\u0435\u043D\u0435!!!<br>\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad3_2',
        name: 'Мертвая тяга',
        description: 'Мертвая тяга',
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad3_3',
        name: 'Сгибания на заднюю поверхность бедра лежа в тренажере',
        description: "\n        12-15 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439 \u0432 \u043F\u043E\u0434\u0445\u043E\u0434\u0435, \u0432\u0435\u0441 \u0441 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435\u043C, \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 - \u0432 \u043E\u0442\u043A\u0430\u0437 (\u043C\u0438\u043D\u0438\u043C\u0443\u043C 8 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439 \u0434\u043E \u043E\u0442\u043A\u0430\u0437\u0430)<br>\n        \u041D\u0410\u0421\u0422\u0420\u041E\u0419 \u0422\u0420\u0415\u041D\u0410\u0416\u0415\u0420: \u0432\u0430\u043B\u0438\u043A \u043D\u0430 \u0430\u0445\u0438\u043B\u043B\u043E\u0432\u043E\u043C \u0441\u0443\u0445\u043E\u0436\u0438\u043B\u0438\u0438, \u043D\u0435 \u043A\u0430\u0442\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u043B\u0435\u043D\u043D\u0430\u044F \u0447\u0430\u0448\u0435\u0447\u043A\u0430 \u043D\u0430\u0432\u0435\u0441\u0443, \u043F\u043E\u0434 \u043D\u0438\u0437\u043E\u043C \u0441\u043A\u0430\u043C\u044C\u0438), \u043D\u043E\u0441\u043E\u0447\u0435\u043A \u043D\u0430 \u0441\u0435\u0431\u044F!<br>\n        \u043D\u0435 \u043E\u0442\u0440\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u0434\u0432\u0437\u0434\u043E\u0448\u043D\u0443\u044E \u043A\u043E\u0441\u0442\u044C \u043E\u0442 \u0441\u043A\u0430\u043C\u0435\u0439\u043A\u0438<br>\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad3_4',
        name: 'Кувшинчики - ПЛЕЧИ - разведение с гантелями в стороны стоя',
        description: "\n        \u0432 \u0440\u0443\u043A\u0430\u0445 2 \u043A\u0443\u0432\u0448\u0438\u043D\u0430, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0432\u044B\u043B\u0438\u0442\u044C \u0432\u043E\u0434\u0443: \n        \u0440\u0430\u0437\u0432\u043E\u0434\u0438\u043C \u0440\u0443\u043A\u0438 \u0432\u0432\u0435\u0440\u0445 \u0438 \u0440\u0430\u0437\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u043C \u043A\u0438\u0441\u0442\u0438 \u043F\u043E \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0443 \u043C\u0438\u0437\u0438\u043D\u0447\u0438\u043A \u0447\u0443\u0442\u044C \u0432\u044B\u0448\u0435, \u0447\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043F\u0430\u043B\u0435\u0446, \u043B\u043E\u043A\u0442\u0438 \u0447\u0443\u0442\u044C \u0432\u044B\u0448\u0435, \u0447\u0435\u043C \u043A\u0438\u0441\u0442\u0438<br>\n        \u043F\u043B\u0435\u0447\u0438 \u0432\u0432\u0435\u0440\u0445 \u043D\u0435 \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u043C, \u043A\u0438\u0441\u0442\u0438 \u0440\u0430\u0441\u043B\u0430\u0431\u043B\u0435\u043D\u044B<br>\n        \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u043B\u0435\u0447 \u0442\u044F\u043D\u0435\u043C \u043B\u043E\u043A\u0442\u0438 \u0432\u0432\u0435\u0440\u0445<br>\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad3_5',
        name: 'Жим Арнольда (формирующее для дельты)',
        description: "\n        \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0432\u044B \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0433\u0430\u043D\u0442\u0435\u043B\u0438 \u043F\u0435\u0440\u0435\u0434 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C\u044E \u0442\u0443\u043B\u043E\u0432\u0438\u0449\u0430 (\u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043B\u043E\u043A\u0442\u0438 \u043F\u043B\u0430\u0432\u043D\u043E \u0440\u0430\u0437\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u044B),\n        \u0437\u0430\u0442\u0435\u043C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0432 \u043F\u043B\u0435\u0447\u0435\u0432\u043E\u043C \u0441\u0443\u0441\u0442\u0430\u0432\u0435 \u0438 \u0440\u0443\u043A\u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044E\u0442 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0443\u0436\u0435 \u0432 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438 \u0442\u0443\u043B\u043E\u0432\u0438\u0449\u0430<br>\n        \u0433\u0430\u043D\u0442\u0435\u043B\u0438 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 \u0443\u0448\u0435\u0439 \u0432\u044B\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u0435\u043C<br>\n        \u0435\u0441\u043B\u0438 \u043F\u043E \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0435 - \u0436\u0438\u043C \u043E\u0442 \u0443\u0433\u043B\u0430 \u0432 \u043B\u043E\u043A\u0442\u044F\u0445 \u0432 90 \u0433\u0440, \u0438 \u0432 \u043A\u0440\u0430\u0439\u043D\u0438\u0445 \u0442\u043E\u0447\u043A\u0430\u0445 \u0440\u0430\u0441\u0441\u043B\u0430\u0431\u043B\u0435\u043D\u0438\u0435.<br>\n        \u0423 \u0410\u0440\u043D\u0438 \u0440\u0430\u0441\u0441\u043B\u0430\u0431\u043B\u0435\u043D\u0438\u044F \u043D\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442, \u043C\u044B \u0432\u044B\u0432\u043E\u0434\u0438\u043C \u0440\u0443\u043A\u0438 \u0432\u043F\u0435\u0440\u0435\u0434 \u0438 \u0434\u0435\u0440\u0436\u0438\u043C \u0433\u0430\u043D\u0442\u0435\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u043C\u0438 \u0434\u0435\u043B\u044C\u0442\u0430\u043C\u0438<br>\n        \u043C\u043E\u0436\u043D\u043E \u0438 \u0441\u0442\u043E\u044F, \u0438 \u0441\u0438\u0434\u044F<br>\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad3_6',
        name: 'Жим штанги перед собой',
        description: "\n        \u0432\u0441\u0442\u0430\u043B\u0438 (\u043C\u043E\u0436\u043D\u043E \u0432 \u0441\u043C\u0438\u0442\u0435)<br>\n        \u0442\u044F\u043D\u0435\u043C \u043B\u043E\u043A\u0442\u0438 \u0432\u0432\u0435\u0440\u0445, \u0434\u043E \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u0438 \u0441 \u043F\u043E\u043B\u043E\u043C<br>\n        \u0442\u044F\u043D\u0435\u043C \u043A \u0433\u0440\u0443\u0434\u0438, \u043A\u043E\u0440\u043F\u0443\u0441 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043D\u0430\u043A\u043B\u043E\u043D\u0438\u043B\u0438<br>\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad3_7',
        name: 'Сгибание на бицепс с z-грифом',
        description: "\n        \u0431\u0438\u0446\u0435\u043F\u0441 \u043D\u0430\u043F\u0440\u044F\u0447\u044C \u043D\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u043F\u0440\u0438 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u0438<br>\n        1 \u0440\u0430\u0437\u043C\u0438\u043D\u043E\u0447\u043D\u044B\u0439 \u0438 3-4 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043F\u043E\u0434\u0445\u043E\u0434\u0430 \u043F\u043E 10-12 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439<br>\n        \u043F\u043E\u0441\u043B\u0435 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0440\u0443\u043A\u0438 \u0440\u0430\u0437\u043E\u0432\u044C\u0435\u043C - \u0442\u0435\u0445\u043D\u0438\u043A\u0430 \u043A\u0430\u043A \u0441 \u043D\u043E\u0433\u0430\u043C\u0438 - \u0440\u0430\u0437\u043C\u0438\u043D\u043E\u0447\u043D\u044B\u0439, \u043F\u043E\u0434\u0432\u043E\u0434\u044F\u0449\u0438\u0435, \u0440\u0430\u0431\u043E\u0447\u0438\u0435<br>\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'ad3_8',
        name: 'Разгибание рук с верхнего блока (Верёвка, а лучше палка)',
        description: "\n        \u0442\u044F\u043D\u0435\u043C \u0432\u043D\u0438\u0437 \u0438 \u0440\u0430\u0437\u0432\u043E\u0434\u0438\u043C \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043A\u0430\u043A \u0431\u044B \u043D\u0430\u0441\u0430\u0436\u0438\u0432\u0430\u044F), \u0432 \u043D\u0438\u0436\u043D\u0435\u043C \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u043D\u0430\u043F\u0440\u044F\u0447\u044C \u0442\u0440\u0438\u0446\u0435\u043F\u0441 \u043D\u0430 \u0441\u0435\u043A\n        ",
        videoLink: '',
    }),
];


/***/ }),

/***/ "./src/app/consts/proto-exercises-vika.ts":
/*!************************************************!*\
  !*** ./src/app/consts/proto-exercises-vika.ts ***!
  \************************************************/
/*! exports provided: protoExercisesVikaDay1, protoExercisesVikaDay2, protoExercisesVikaDay3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoExercisesVikaDay1", function() { return protoExercisesVikaDay1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoExercisesVikaDay2", function() { return protoExercisesVikaDay2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoExercisesVikaDay3", function() { return protoExercisesVikaDay3; });
/* harmony import */ var _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/proto-exercise */ "./src/app/classes/proto-exercise.ts");
/* harmony import */ var _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proto-exercises-andrew */ "./src/app/consts/proto-exercises-andrew.ts");


var protoExercisesVikaDay1 = _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_1__["protoExercisesAndrewDay1"].slice();
var protoExercisesVikaDay2 = [
    _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_1__["protoExercisesAndrewDay2"][0],
    _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_1__["protoExercisesAndrewDay2"][1],
    _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_1__["protoExercisesAndrewDay2"][2],
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'vd2_4',
        name: 'Подъемы на тумбу',
        description: "\n        \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0441 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430 40 \u0441\u043C \u043E\u0442 \u043F\u043E\u043B\u0430 - \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u0441\u043E\u0442\u044B \u0442\u0443\u043C\u0431\u044B, \u0437\u0430\u0442\u0435\u043C \u043D\u0430 \u0432\u044B\u0441\u043E\u043A\u0443\u044E 70 \u0441\u043C - \u0437\u0430\u0442\u0435\u043C \u0443\u0436\u0435 \u0431\u0435\u0440\u0435\u043C \u043E\u0442\u044F\u0433\u043E\u0449\u0435\u043D\u0438\u044F - \u0430 \u0437\u0430\u0442\u0435\u043C \u0443\u0436\u0435 \u0431\u043B\u0438\u043D<br>\n        \u0433\u043E\u043B\u0435\u043D\u044C \u043F\u0435\u0440\u043F\u0435\u043D\u0434\u0438\u043A\u0443\u043B\u044F\u0440\u043D\u0430 \u0442\u0443\u043C\u0431\u0435, \u0441\u043B\u0435\u0434\u0438 \u0437\u0430 \u043A\u043E\u043B\u0435\u043D\u043E\u043C<br>\n        \u0442\u043E\u043B\u0447\u043E\u043A \u043D\u043E\u0433\u043E\u0439, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u043E\u0438\u0442 \u043D\u0430 \u0442\u0443\u043C\u0431\u0435<br>\n        \u043F\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u0442\u043E\u0440\u0443\u044E \u043D\u043E\u0433\u0443 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0432\u0435\u0441\u0443<br>\n        \u043F\u043E 10 \u043D\u0430 \u043A\u0430\u0436\u0434\u0443\u044E \u043D\u043E\u0433\u0443 - 3 \u043F\u043E\u0434\u0445\u043E\u0434\u0430<br>\n        ",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'vd2_5',
        name: 'Разведение ног в тренажере сидя',
        description: "20 \u043F\u043E\u0432\u0442\u043E\u0440\u043E\u0432 \u0441 \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u043D\u0430 \u043F\u0438\u043A\u043E\u0432\u0443\u044E \u0442\u043E\u0447\u043A\u0443+10 \u043C\u0435\u043B\u043A\u043E\u0430\u043C\u043F\u043B\u0438\u0442\u0443\u0434\u043D\u044B\u0445) * 3 \u043F\u043E\u0434\u0445\u043E\u0434\u0430",
        videoLink: '',
    }),
    new _classes_proto_exercise__WEBPACK_IMPORTED_MODULE_0__["ProtoExercise"]({
        id: 'vd2_6',
        name: 'Ягодичный мостик',
        description: "\n        \u043F\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0441 \u0440\u0435\u0437\u0438\u043D\u043A\u043E\u0439<br>\n        \u043A\u0430\u043A \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0448\u044C\u0441\u044F - \u043D\u0430\u0434\u043E \u0434\u043E\u0432\u0432\u0435\u0441\u0442\u0438 \u043F\u0440\u0438\u0441\u0435\u0434 \u0441 \u043F\u0440\u043E\u0436\u0438\u043C\u0430\u043D\u0438\u0435\u043C \u044F\u0433\u043E\u0434\u0438\u0446 \u0432 \u043D\u0438\u0436\u043D\u0435\u0439 \u0442\u043E\u0447\u043A\u0435\n        ",
        videoLink: '',
    }),
    _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_1__["protoExercisesAndrewDay2"][6],
];
var protoExercisesVikaDay3 = _proto_exercises_andrew__WEBPACK_IMPORTED_MODULE_1__["protoExercisesAndrewDay3"].slice();


/***/ }),

/***/ "./src/app/services/my-cookies.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/my-cookies.service.ts ***!
  \************************************************/
/*! exports provided: MyCookiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCookiesService", function() { return MyCookiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MyCookiesService = /** @class */ (function () {
    function MyCookiesService() {
    }
    MyCookiesService.prototype.setCookie = function (name, value, options) {
        options = options || {};
        var expires = options.expires;
        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        var updatedCookie = name + "=" + value;
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    };
    MyCookiesService.prototype.getCookie = function (name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };
    MyCookiesService.prototype.get = function (name) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.getCookie(name); }));
    };
    MyCookiesService.prototype.set = function (name, value, options) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.setCookie(name, value, options); }));
    };
    MyCookiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyCookiesService);
    return MyCookiesService;
}());



/***/ }),

/***/ "./src/app/services/rest.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var RestService = /** @class */ (function () {
    function RestService() {
        this._countCallings = 0;
        console.log('RestService::');
    }
    Object.defineProperty(RestService.prototype, "isLoading", {
        get: function () {
            return this._countCallings !== 0;
        },
        enumerable: true,
        configurable: true
    });
    RestService.prototype.doCall = function (url, data) {
        var _this = this;
        this._countCallings++;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this._countCallings--;
            if (_this._countCallings < 0) {
                _this._countCallings = 0;
            }
        }));
    };
    RestService.prototype.fakeCall = function (url, data) {
        var _this = this;
        this._countCallings++;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this._countCallings--;
            if (_this._countCallings < 0) {
                _this._countCallings = 0;
            }
        }));
    };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/services/user-info.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-info.service.ts ***!
  \***********************************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _my_cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-cookies.service */ "./src/app/services/my-cookies.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _consts_program_complex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../consts/program_complex */ "./src/app/consts/program_complex.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var UserInfoService = /** @class */ (function () {
    function UserInfoService(rest, cookie, router) {
        this.rest = rest;
        this.cookie = cookie;
        this.router = router;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.user$ = this._user.asObservable();
        console.log('UserInfoService:: INIT');
    }
    Object.defineProperty(UserInfoService.prototype, "user", {
        get: function () {
            return this._user.value;
        },
        set: function (value) {
            this._user.next(value);
        },
        enumerable: true,
        configurable: true
    });
    UserInfoService.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    UserInfoService.prototype.tryLoadUser = function () {
        var _this = this;
        return this.user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.user) : this.cookie.get('userId').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (userId) { return userId ? _this.loadUser(userId) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null); }));
    };
    UserInfoService.prototype.loadUser = function (userId) {
        var _this = this;
        var user = _consts_program_complex__WEBPACK_IMPORTED_MODULE_6__["USER_LIST"].find(function (u) { return u.id === userId; });
        return this.rest.fakeCall('', { user: user }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var user = _a.user;
            _this.user = user;
            return user;
        }));
        // попробовать загрузить юзера из локалстоража (или куков), если его там нет, то предложить выбрать (авторизоваться)
    };
    UserInfoService.prototype.authorizeUser = function () {
        if (this.user) {
            this.cookie.set('userId', this.user.id).subscribe();
        }
    };
    UserInfoService.prototype.qiut = function () {
        if (this.user) {
            this.cookie.set('userId', '').subscribe();
            this.user = null;
            this.router.navigate(['/login']);
        }
    };
    Object.defineProperty(UserInfoService.prototype, "isAuthenticated", {
        get: function () {
            console.log('isAuthenticated::', !!this.user);
            return !!this.user;
        },
        enumerable: true,
        configurable: true
    });
    UserInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _my_cookies_service__WEBPACK_IMPORTED_MODULE_3__["MyCookiesService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], UserInfoService);
    return UserInfoService;
}());



/***/ }),

/***/ "./src/app/sport-common/authorization.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/sport-common/authorization.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthorizationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationGuard", function() { return AuthorizationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-info.service */ "./src/app/services/user-info.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthorizationGuard = /** @class */ (function () {
    function AuthorizationGuard(userInfo, router) {
        this.userInfo = userInfo;
        this.router = router;
    }
    AuthorizationGuard.prototype.canActivate = function () {
        var _this = this;
        return this.userInfo.tryLoadUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (!user) {
                _this.router.navigate(['login']);
                return false;
            }
            else {
                return true;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    AuthorizationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthorizationGuard);
    return AuthorizationGuard;
}());



/***/ }),

/***/ "./src/app/sport-common/authorization/authorization.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/sport-common/authorization/authorization.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <mat-form-field class=\"col-6\">\n      <input matInput type=\"text\" placeholder=\"Имя пользователя\" name=\"userName\" [(ngModel)]=\"userName\">\n    </mat-form-field>\n    <div class=\"col-12\">\n        <button mat-raised-button color=\"primary\" (click)=\"authorize()\">Authorize</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sport-common/authorization/authorization.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/sport-common/authorization/authorization.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0LWNvbW1vbi9hdXRob3JpemF0aW9uL2F1dGhvcml6YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sport-common/authorization/authorization.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sport-common/authorization/authorization.component.ts ***!
  \***********************************************************************/
/*! exports provided: AuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function() { return AuthorizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-info.service */ "./src/app/services/user-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthorizationComponent = /** @class */ (function () {
    function AuthorizationComponent(userInfoService, router) {
        var _this = this;
        this.userInfoService = userInfoService;
        this.router = router;
        this.userName = '';
        this.userInfoService.user$.subscribe(function (user) {
            if (user) {
                _this.userInfoService.authorizeUser();
                _this.router.navigate(['']);
            }
        });
    }
    AuthorizationComponent.prototype.authorize = function () {
        this.userInfoService.loadUser(this.userName).subscribe();
    };
    AuthorizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authorization',
            template: __webpack_require__(/*! ./authorization.component.html */ "./src/app/sport-common/authorization/authorization.component.html"),
            styles: [__webpack_require__(/*! ./authorization.component.scss */ "./src/app/sport-common/authorization/authorization.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthorizationComponent);
    return AuthorizationComponent;
}());



/***/ }),

/***/ "./src/app/sport-common/info-dialog/info-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/sport-common/info-dialog/info-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"data.title\" mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p innerHtml=\"{{ data.info }}\"></p>\n</div>\n\n<mat-dialog-actions align=\"end\" *ngIf=\"data.btnOk\">\n  <button mat-button (click)=\"onOKClick()\">Ok</button>\n  <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/sport-common/info-dialog/info-dialog.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/sport-common/info-dialog/info-dialog.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0LWNvbW1vbi9pbmZvLWRpYWxvZy9pbmZvLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sport-common/info-dialog/info-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sport-common/info-dialog/info-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: InfoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDialogComponent", function() { return InfoDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var InfoDialogComponent = /** @class */ (function () {
    function InfoDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    InfoDialogComponent.prototype.onOKClick = function () {
        this.dialogRef.close(true);
    };
    InfoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-dialog',
            template: __webpack_require__(/*! ./info-dialog.component.html */ "./src/app/sport-common/info-dialog/info-dialog.component.html"),
            styles: [__webpack_require__(/*! ./info-dialog.component.scss */ "./src/app/sport-common/info-dialog/info-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], InfoDialogComponent);
    return InfoDialogComponent;
}());



/***/ }),

/***/ "./src/app/sport-common/sport-common.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/sport-common/sport-common.module.ts ***!
  \*****************************************************/
/*! exports provided: SportCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportCommonModule", function() { return SportCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-dialog/info-dialog.component */ "./src/app/sport-common/info-dialog/info-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authorization/authorization.component */ "./src/app/sport-common/authorization/authorization.component.ts");







var SportCommonModule = /** @class */ (function () {
    function SportCommonModule() {
    }
    SportCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogComponent"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_6__["AuthorizationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            ],
            exports: [_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogComponent"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_6__["AuthorizationComponent"]],
            entryComponents: [
                _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogComponent"]
            ],
        })
    ], SportCommonModule);
    return SportCommonModule;
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

module.exports = __webpack_require__(/*! C:\projects\SportPuzzle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map