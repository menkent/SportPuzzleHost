(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-training-training-module"],{

/***/ "./src/app/classes/cardio-info.ts":
/*!****************************************!*\
  !*** ./src/app/classes/cardio-info.ts ***!
  \****************************************/
/*! exports provided: CardioInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardioInfo", function() { return CardioInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mappable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mappable */ "./src/app/classes/mappable.ts");
/* harmony import */ var _cardio_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardio-types.enum */ "./src/app/classes/cardio-types.enum.ts");



var CardioInfo = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CardioInfo, _super);
    function CardioInfo(data) {
        var _this = _super.call(this, data) || this;
        _this._cardioType = _cardio_types_enum__WEBPACK_IMPORTED_MODULE_2__["CardioTypes"].RUNNING;
        _this._time = 0; // in seconds
        if (data) {
            Object.assign(_this, data);
        }
        return _this;
    }
    Object.defineProperty(CardioInfo.prototype, "cardioType", {
        get: function () {
            return this._cardioType;
        },
        set: function (value) {
            this._cardioType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardioInfo.prototype, "averagePulse", {
        get: function () {
            return this._averagePulse;
        },
        set: function (value) {
            this._averagePulse = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardioInfo.prototype, "averageSpeed", {
        get: function () {
            return this._averageSpeed;
        },
        set: function (value) {
            this._averageSpeed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardioInfo.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardioInfo.prototype, "isCompleted", {
        get: function () {
            return this.time;
        },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardioInfo.prototype, "typeName", {
        get: function () {
            var _this = this;
            var finded = _cardio_types_enum__WEBPACK_IMPORTED_MODULE_2__["CardioTypesHB"].find(function (_a) {
                var sysname = _a.sysname;
                return sysname === _this.cardioType;
            });
            return finded && finded.name || '';
        },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return CardioInfo;
}(_mappable__WEBPACK_IMPORTED_MODULE_1__["Mappable"]));



/***/ }),

/***/ "./src/app/classes/cardio-types.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/classes/cardio-types.enum.ts ***!
  \**********************************************/
/*! exports provided: CardioTypes, CardioTypesHB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardioTypes", function() { return CardioTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardioTypesHB", function() { return CardioTypesHB; });
var CardioTypes;
(function (CardioTypes) {
    CardioTypes[CardioTypes["RUNNING"] = 1] = "RUNNING";
    CardioTypes[CardioTypes["WALK"] = 2] = "WALK";
    CardioTypes[CardioTypes["STEPPER"] = 3] = "STEPPER";
    CardioTypes[CardioTypes["ELLIPSE"] = 4] = "ELLIPSE";
    CardioTypes[CardioTypes["BICYCLE"] = 5] = "BICYCLE";
    CardioTypes[CardioTypes["WORKOUT"] = 6] = "WORKOUT";
})(CardioTypes || (CardioTypes = {}));
var CardioTypesHB = [
    { sysname: CardioTypes.RUNNING, name: 'Бег' },
    { sysname: CardioTypes.WALK, name: 'Ходьба' },
    { sysname: CardioTypes.STEPPER, name: 'STEPPER' },
    { sysname: CardioTypes.ELLIPSE, name: 'ELLIPSE' },
    { sysname: CardioTypes.BICYCLE, name: 'BICYCLE' },
    { sysname: CardioTypes.WORKOUT, name: 'Свободный вес' }
];


/***/ }),

/***/ "./src/app/classes/exercise.ts":
/*!*************************************!*\
  !*** ./src/app/classes/exercise.ts ***!
  \*************************************/
/*! exports provided: Exercise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise", function() { return Exercise; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _proto_exercise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proto-exercise */ "./src/app/classes/proto-exercise.ts");
/* harmony import */ var _my_try__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-try */ "./src/app/classes/my-try.ts");
/* harmony import */ var _mappable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mappable */ "./src/app/classes/mappable.ts");




var Exercise = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Exercise, _super);
    function Exercise(data) {
        var _this = _super.call(this, data) || this;
        _this._tryes = [];
        if (data) {
            Object.assign(_this, data);
            if (data['protoLink']) {
                _this.protoLink = new _proto_exercise__WEBPACK_IMPORTED_MODULE_1__["ProtoExercise"](data['protoLink']);
            }
            if (data['tryes']) {
                _this.tryes = data['tryes'].map(function (el) { return new _my_try__WEBPACK_IMPORTED_MODULE_2__["MyTry"](el); });
            }
        }
        return _this;
    }
    Object.defineProperty(Exercise.prototype, "protoLink", {
        get: function () {
            return this._protoLink;
        },
        set: function (value) {
            this._protoLink = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exercise.prototype, "tryes", {
        get: function () {
            return this._tryes;
        },
        set: function (value) {
            this._tryes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exercise.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exercise.prototype, "name", {
        get: function () { return this.protoLink.name; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exercise.prototype, "description", {
        get: function () { return this.protoLink.description; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exercise.prototype, "isCompleted", {
        get: function () { return this.tryes.length > 0; } // Упражнение считается выполненным, если есть хоть 1 подход
        ,
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Exercise.prototype.haveNotEmprtyTryes = function () {
        var notEmpty = false;
        this.tryes.map(function (el) { return notEmpty = notEmpty || !el.isEmpty(); });
        return notEmpty;
    };
    return Exercise;
}(_mappable__WEBPACK_IMPORTED_MODULE_3__["Mappable"]));



/***/ }),

/***/ "./src/app/classes/my-try-types.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/classes/my-try-types.enum.ts ***!
  \**********************************************/
/*! exports provided: MyTryTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTryTypes", function() { return MyTryTypes; });
var MyTryTypes;
(function (MyTryTypes) {
    MyTryTypes[MyTryTypes["POWER"] = 1] = "POWER";
    MyTryTypes[MyTryTypes["INTERVAL"] = 2] = "INTERVAL";
    MyTryTypes[MyTryTypes["ROTATION"] = 3] = "ROTATION";
})(MyTryTypes || (MyTryTypes = {}));


/***/ }),

/***/ "./src/app/classes/my-try.ts":
/*!***********************************!*\
  !*** ./src/app/classes/my-try.ts ***!
  \***********************************/
/*! exports provided: MyTry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTry", function() { return MyTry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _my_try_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-try-types.enum */ "./src/app/classes/my-try-types.enum.ts");
/* harmony import */ var _mappable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mappable */ "./src/app/classes/mappable.ts");



var MyTry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyTry, _super);
    function MyTry(data) {
        var _this = _super.call(this, data) || this;
        _this._type = _my_try_types_enum__WEBPACK_IMPORTED_MODULE_1__["MyTryTypes"].POWER;
        if (data) {
            Object.assign(_this, data);
        }
        return _this;
    }
    Object.defineProperty(MyTry.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTry.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (value) {
            this._weight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTry.prototype, "repeatCount", {
        get: function () {
            return this._repeatCount;
        },
        set: function (value) {
            this._repeatCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTry.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: true,
        configurable: true
    });
    MyTry.prototype.isEmpty = function () {
        return !this._repeatCount || this._repeatCount <= 0;
    };
    return MyTry;
}(_mappable__WEBPACK_IMPORTED_MODULE_2__["Mappable"]));



/***/ }),

/***/ "./src/app/classes/training.ts":
/*!*************************************!*\
  !*** ./src/app/classes/training.ts ***!
  \*************************************/
/*! exports provided: Training */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Training", function() { return Training; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _exercise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise */ "./src/app/classes/exercise.ts");
/* harmony import */ var _mappable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mappable */ "./src/app/classes/mappable.ts");
/* harmony import */ var _cardio_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardio-info */ "./src/app/classes/cardio-info.ts");




var Training = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Training, _super);
    function Training(data) {
        var _this = _super.call(this, data) || this;
        _this._exercises = [];
        _this._isCompleted = false; // Определет, что тренировка завершена, значит её можно использовать для анализа
        if (data) {
            Object.assign(_this, data);
            if (data['cardioStart']) {
                _this.cardioStart = new _cardio_info__WEBPACK_IMPORTED_MODULE_3__["CardioInfo"](data['cardioStart']);
            }
            if (data['cardioEnd']) {
                _this.cardioEnd = new _cardio_info__WEBPACK_IMPORTED_MODULE_3__["CardioInfo"](data['cardioEnd']);
            }
            if (data['exercises']) {
                _this.exercises = data['exercises'].map(function (el) { return new _exercise__WEBPACK_IMPORTED_MODULE_1__["Exercise"](el); });
            }
        }
        return _this;
    }
    Object.defineProperty(Training.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Training.prototype, "protoTrainig", {
        get: function () {
            return this._protoTrainig;
        },
        set: function (value) {
            this._protoTrainig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Training.prototype, "exercises", {
        get: function () {
            return this._exercises;
        },
        set: function (value) {
            this._exercises = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Training.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Training.prototype, "userWeight", {
        get: function () {
            return this._userWeight;
        },
        set: function (value) {
            this._userWeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Training.prototype, "cardioStart", {
        get: function () {
            return this._cardioStart;
        },
        set: function (value) {
            this._cardioStart = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Training.prototype, "cardioEnd", {
        get: function () {
            return this._cardioEnd;
        },
        set: function (value) {
            this._cardioEnd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Training.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Training.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        set: function (value) {
            this._isCompleted = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Training.prototype, "canComplete", {
        get: function () {
            // Нужно, чтобы были выполнены все упражнения
            if (this.protoTrainig.exercises.length === this.exercises.length) {
                for (var i = 0; i < this.exercises.length; i++) {
                    if (!this.exercises[i].isCompleted) {
                        return false;
                    }
                }
            }
            // Минимум 1 кардио
            if (!(this.cardioEnd.isCompleted || this.cardioStart.isCompleted)) {
                return false;
            }
            return true;
        },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Training.prototype.init = function () {
        this.cardioStart = new _cardio_info__WEBPACK_IMPORTED_MODULE_3__["CardioInfo"]();
        this.cardioEnd = new _cardio_info__WEBPACK_IMPORTED_MODULE_3__["CardioInfo"]();
        this.exercises = this.protoTrainig.exercises.map(function (exer) { return new _exercise__WEBPACK_IMPORTED_MODULE_1__["Exercise"]({ protoLink: exer }); });
    };
    Training.prototype.getExercise = function (protoExercise) {
        return this.exercises.find(function (ex) { return ex.protoLink.id === protoExercise.id; });
    };
    Training.prototype.getExercises = function (protoExercise) {
        return this.exercises.filter(function (ex) { return ex.protoLink.id === protoExercise.id; });
    };
    return Training;
}(_mappable__WEBPACK_IMPORTED_MODULE_2__["Mappable"]));



/***/ }),

/***/ "./src/app/pages/training/cardio-try/cardio-try.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/training/cardio-try/cardio-try.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row-flex\">\r\n  <mat-form-field class=\"col-6\">\r\n    <mat-label>Тип Кардио</mat-label>\r\n    <mat-select #cardioType [(value)]=\"namespace.cardioType\">\r\n      <ng-container *ngFor=\"let cardioType of CardioTypesHB\">\r\n        <mat-option [value]=\"cardioType.sysname\">{{ cardioType.name }}</mat-option>\r\n      </ng-container>\r\n    </mat-select>\r\n  </mat-form-field>\r\n    \r\n  <mat-form-field class=\"col-6\">\r\n      <input matInput type=\"number\" min=\"0\" max=\"50\" placeholder=\"averageSpeed\" name=\"averageSpeed\" [(ngModel)]=\"namespace.averageSpeed\">\r\n  </mat-form-field>\r\n  \r\n  <!-- <mat-form-field class=\"col-6\">\r\n      <input matInput type=\"number\" min=\"0\" max=\"50\" placeholder=\"averagePulse\" name=\"averagePulse\" [(ngModel)]=\"namespace.averagePulse\">\r\n  </mat-form-field> -->\r\n\r\n  \r\n</div>\r\n<div class=\"row-flex row-flex-center\">\r\n    <mat-form-field class=\"col-6\">\r\n      <input matInput [disabled]=\"timerIsActive\" type=\"time\" placeholder=\"time\" name=\"time\" [(ngModel)]=\"viewedTime\">\r\n    </mat-form-field>\r\n    <div class=\"col-6\">\r\n        <button mat-fab color=\"accent\" (click)=\"startStopClick()\" class=\"to-right-btn\"> \r\n            <mat-icon>{{ timerIsActive ? 'pause' : 'play_arrow' }}</mat-icon>\r\n        </button>\r\n    </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/pages/training/cardio-try/cardio-try.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/training/cardio-try/cardio-try.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".to-right-btn {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhaW5pbmcvY2FyZGlvLXRyeS9DOlxccHJvamVjdHNcXFNwb3J0UHV6emxlL3NyY1xcYXBwXFxwYWdlc1xcdHJhaW5pbmdcXGNhcmRpby10cnlcXGNhcmRpby10cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFpbmluZy9jYXJkaW8tdHJ5L2NhcmRpby10cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG8tcmlnaHQtYnRuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/training/cardio-try/cardio-try.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/training/cardio-try/cardio-try.component.ts ***!
  \*******************************************************************/
/*! exports provided: CardioTryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardioTryComponent", function() { return CardioTryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_classes_cardio_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/cardio-info */ "./src/app/classes/cardio-info.ts");
/* harmony import */ var src_app_classes_cardio_types_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/cardio-types.enum */ "./src/app/classes/cardio-types.enum.ts");




var CardioTryComponent = /** @class */ (function () {
    function CardioTryComponent() {
        this.CardioTypesHB = src_app_classes_cardio_types_enum__WEBPACK_IMPORTED_MODULE_3__["CardioTypesHB"];
        this.timerIsActive = false;
        this.timeToView = '00:00';
    }
    CardioTryComponent.prototype.ngOnInit = function () {
        this.setViewTimer();
    };
    CardioTryComponent.prototype.setViewTimer = function () {
        var totalSeconds = Math.floor(this.namespace.time + this.getTime() / 1000.);
        var seconds = totalSeconds % 60;
        var minutes = Math.floor(totalSeconds / 60.);
        this.timeToView = ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);
    };
    Object.defineProperty(CardioTryComponent.prototype, "viewedTime", {
        get: function () {
            return this.timeToView;
        },
        set: function (value) {
            var _a = value.split(':').map(function (x) { return +x; }), minutes = _a[0], secs = _a[1];
            this.namespace.time = minutes * 60 + secs;
        },
        enumerable: true,
        configurable: true
    });
    CardioTryComponent.prototype.getTime = function () {
        return this.timerIsActive ? new Date().getTime() - this.timeStart : 0;
    };
    CardioTryComponent.prototype.stop = function () {
        if (!this.timerIsActive)
            return;
        var timeLost = Math.floor(this.getTime() / 1000.);
        ;
        this.timerIsActive = false;
        clearInterval(this.timer);
        this.namespace.time += timeLost;
    };
    CardioTryComponent.prototype.start = function () {
        var _this = this;
        if (this.timerIsActive)
            return;
        this.timerIsActive = true;
        this.timeStart = new Date().getTime();
        this.timer = setInterval(function () { return _this.setViewTimer(); }, 1000);
    };
    CardioTryComponent.prototype.startStopClick = function () {
        if (this.timerIsActive) {
            this.stop();
        }
        else {
            this.start();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_classes_cardio_info__WEBPACK_IMPORTED_MODULE_2__["CardioInfo"])
    ], CardioTryComponent.prototype, "namespace", void 0);
    CardioTryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cardio-try',
            template: __webpack_require__(/*! ./cardio-try.component.html */ "./src/app/pages/training/cardio-try/cardio-try.component.html"),
            styles: [__webpack_require__(/*! ./cardio-try.component.scss */ "./src/app/pages/training/cardio-try/cardio-try.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardioTryComponent);
    return CardioTryComponent;
}());



/***/ }),

/***/ "./src/app/pages/training/my-stretching/my-stretching.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/training/my-stretching/my-stretching.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-stretching works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/training/my-stretching/my-stretching.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/training/my-stretching/my-stretching.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWluaW5nL215LXN0cmV0Y2hpbmcvbXktc3RyZXRjaGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/training/my-stretching/my-stretching.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/training/my-stretching/my-stretching.component.ts ***!
  \*************************************************************************/
/*! exports provided: MyStretchingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStretchingComponent", function() { return MyStretchingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyStretchingComponent = /** @class */ (function () {
    function MyStretchingComponent() {
    }
    MyStretchingComponent.prototype.ngOnInit = function () {
    };
    MyStretchingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-stretching',
            template: __webpack_require__(/*! ./my-stretching.component.html */ "./src/app/pages/training/my-stretching/my-stretching.component.html"),
            styles: [__webpack_require__(/*! ./my-stretching.component.scss */ "./src/app/pages/training/my-stretching/my-stretching.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyStretchingComponent);
    return MyStretchingComponent;
}());



/***/ }),

/***/ "./src/app/pages/training/my-try/my-try.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/training/my-try/my-try.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <!-- <mat-form-field class=\"col-2\"> -->\r\n        <!-- <input matInput disabled type=\"number\" min=\"0\" max=\"200\" placeholder=\"Number\" name=\"index\" [(ngModel)]=\"namespace.index\"> -->\r\n        \r\n    <!-- </mat-form-field> -->\r\n    <div class=\"col-2 vert-align\">\r\n        <span class=\"mat-title sub-header\">{{ namespace.index }}</span>\r\n    </div>\r\n    <mat-form-field class=\"col-5\">\r\n        <input matInput type=\"number\" min=\"0\" max=\"200\" placeholder=\"weight, kg\" name=\"weight\" [(ngModel)]=\"namespace.weight\">\r\n        <button mat-button *ngIf=\"namespace.weight\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"namespace.weight=''\">\r\n            <mat-icon>close</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n    \r\n    <mat-form-field class=\"col-5\">\r\n        <input matInput type=\"number\" min=\"0\" max=\"200\" placeholder=\"repeatCount\" name=\"repeatCount\" [(ngModel)]=\"namespace.repeatCount\">\r\n        <button mat-button *ngIf=\"namespace.repeatCount\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"namespace.repeatCount=''\">\r\n            <mat-icon>close</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/training/my-try/my-try.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/training/my-try/my-try.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vert-align {\n  display: flex;\n  align-items: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhaW5pbmcvbXktdHJ5L0M6XFxwcm9qZWN0c1xcU3BvcnRQdXp6bGUvc3JjXFxhcHBcXHBhZ2VzXFx0cmFpbmluZ1xcbXktdHJ5XFxteS10cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFhO0VBQ2IscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFpbmluZy9teS10cnkvbXktdHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi52ZXJ0LWFsaWduIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/training/my-try/my-try.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/training/my-try/my-try.component.ts ***!
  \***********************************************************/
/*! exports provided: MyTryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTryComponent", function() { return MyTryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_classes_my_try__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/my-try */ "./src/app/classes/my-try.ts");



var MyTryComponent = /** @class */ (function () {
    function MyTryComponent() {
    }
    MyTryComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_classes_my_try__WEBPACK_IMPORTED_MODULE_2__["MyTry"])
    ], MyTryComponent.prototype, "namespace", void 0);
    MyTryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-try',
            template: __webpack_require__(/*! ./my-try.component.html */ "./src/app/pages/training/my-try/my-try.component.html"),
            styles: [__webpack_require__(/*! ./my-try.component.scss */ "./src/app/pages/training/my-try/my-try.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyTryComponent);
    return MyTryComponent;
}());



/***/ }),

/***/ "./src/app/pages/training/my-warm/my-warm.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/training/my-warm/my-warm.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-warm works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/training/my-warm/my-warm.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/training/my-warm/my-warm.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWluaW5nL215LXdhcm0vbXktd2FybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/training/my-warm/my-warm.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/training/my-warm/my-warm.component.ts ***!
  \*************************************************************/
/*! exports provided: MyWarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWarmComponent", function() { return MyWarmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyWarmComponent = /** @class */ (function () {
    function MyWarmComponent() {
    }
    MyWarmComponent.prototype.ngOnInit = function () {
    };
    MyWarmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-warm',
            template: __webpack_require__(/*! ./my-warm.component.html */ "./src/app/pages/training/my-warm/my-warm.component.html"),
            styles: [__webpack_require__(/*! ./my-warm.component.scss */ "./src/app/pages/training/my-warm/my-warm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyWarmComponent);
    return MyWarmComponent;
}());



/***/ }),

/***/ "./src/app/pages/training/programs-complex/programs-complex.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/training/programs-complex/programs-complex.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ng-container *ngFor=\"let complex of programComplexes; let last = last\">\r\n  <mat-expansion-panel>\r\n\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        {{complex.name}}\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    {{ complex.comment }}\r\n    <mat-list role=\"list\">\r\n        <ng-container *ngFor=\"let trainig of complex.protoTrainigs; let last = last\">\r\n            <mat-list-item \r\n              (click)=\"trainigClick(trainig.id)\"\r\n              role=\"listitem\"\r\n            >\r\n            {{ trainig.name }}\r\n            </mat-list-item>\r\n            <mat-divider *ngIf=\"!last\"></mat-divider>\r\n        </ng-container>\r\n    </mat-list>\r\n\r\n  </mat-expansion-panel>\r\n  <mat-divider *ngIf=\"!last\"></mat-divider>\r\n</ng-container>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/training/programs-complex/programs-complex.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/training/programs-complex/programs-complex.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWluaW5nL3Byb2dyYW1zLWNvbXBsZXgvcHJvZ3JhbXMtY29tcGxleC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/training/programs-complex/programs-complex.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/training/programs-complex/programs-complex.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProgramsComplexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsComplexComponent", function() { return ProgramsComplexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_programs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/programs.service */ "./src/app/services/programs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProgramsComplexComponent = /** @class */ (function () {
    function ProgramsComplexComponent(programsService, router) {
        this.programsService = programsService;
        this.router = router;
        this.programComplexes = [];
    }
    ProgramsComplexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.programsService.getProgramComplex().subscribe(function (res) {
            _this.programComplexes = res.programComplexes;
            console.log(_this.programComplexes);
        });
    };
    ProgramsComplexComponent.prototype.trainigClick = function (trainigId) {
        console.log('trainigClick::', trainigId);
        this.router.navigate(['/trainig', trainigId]);
    };
    ProgramsComplexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-programs-complex',
            template: __webpack_require__(/*! ./programs-complex.component.html */ "./src/app/pages/training/programs-complex/programs-complex.component.html"),
            styles: [__webpack_require__(/*! ./programs-complex.component.scss */ "./src/app/pages/training/programs-complex/programs-complex.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_programs_service__WEBPACK_IMPORTED_MODULE_2__["ProgramsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProgramsComplexComponent);
    return ProgramsComplexComponent;
}());



/***/ }),

/***/ "./src/app/pages/training/trainig/trainig.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/training/trainig/trainig.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mat-divider></mat-divider>\r\n<!-- <mat-toolbar>\r\n  <button (click)=\"showDebug()\">Отобразить инфу!</button>\r\n\r\n</mat-toolbar> -->\r\n<mat-divider></mat-divider>\r\n<form ngForm #f *ngIf=\"trainig\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <mat-form-field class=\"col-6 col-md-6\">\r\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Дата тренеровки\"\r\n          name=\"trainingDate\" \r\n          [value]=\"getTrainigDate()\"\r\n          (dateChange)=\"setTrainigDate($event)\"\r\n          (dateInput)=\"setTrainigDate($event)\"\r\n        >\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"col-6 col-md-6\">\r\n          <input matInput type=\"number\" min=\"30\" max=\"150\" placeholder=\"Вес\" name=\"userWeight\" [(ngModel)]=\"trainig.userWeight\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <mat-divider></mat-divider>\r\n\r\n  <!-- <div class=\"container\">\r\n    <span class=\"mat-h3\">Стартовое кардио</span>\r\n  </div>\r\n  <mat-divider></mat-divider>\r\n\r\n  <div class=\"container\">\r\n    <span class=\"mat-h3\">Разминка</span>\r\n  </div>\r\n  <mat-divider></mat-divider> -->\r\n\r\n  <div class=\"container\">\r\n    \r\n    <mat-vertical-stepper [linear]=\"false\" #stepper\r\n    (selectionChange)=\"cardioStart.stop(); cardioEnd.stop(); changeSelection($event);\"\r\n    >\r\n\r\n        <mat-step>\r\n            <ng-template matStepLabel \r\n                matStepLabel[completed]=\"true\"\r\n              >Стартовое кардио</ng-template>\r\n            \r\n            <app-cardio-try #cardioStart\r\n              [namespace]=\"trainig.cardioStart\"\r\n            ></app-cardio-try>\r\n\r\n            \r\n            <!-- Кнопки -->\r\n            <div class=\"row btns-row solo-btn\">\r\n                <button mat-fab matStepperNext color=\"primary\">\r\n                    <mat-icon>arrow_forward</mat-icon>\r\n                </button>\r\n              </div>\r\n        </mat-step>\r\n    \r\n        <mat-step>\r\n            <ng-template matStepLabel>Разминка</ng-template>\r\n            <app-my-warm></app-my-warm>\r\n            <div>\r\n              <button mat-raised-button matStepperNext color=\"primary\">Next</button>\r\n            </div>\r\n        </mat-step>\r\n\r\n        <!-- УПРАЖНЕНИЯ -->\r\n        <ng-container *ngFor=\"let protoExercise of protoTrainig.exercises; let last = last; \">\r\n            <mat-step>\r\n                <ng-template matStepLabel>\r\n                    <div class=\"exercise-label-wrapper\">\r\n                      <div class=\"exercise-label-name\">{{ protoExercise.name }}</div>\r\n                      \r\n                      <div class=\"exercise-label-icons\">\r\n                          <button mat-icon-button\r\n                                  *ngIf=\"protoExercise.description\"\r\n                                  (click)=\"openHelpDialogExercise(protoExercise, $event);\"\r\n                          >\r\n                              <mat-icon>error_outline</mat-icon>\r\n                          </button>\r\n                          <button mat-icon-button\r\n                                  *ngIf=\"protoExercise.videoLink\"\r\n                                  (click)=\"openVideoLinkExercise(protoExercise, $event)\">\r\n                              <mat-icon>videocam</mat-icon>\r\n                          </button>\r\n                          <!-- <button mat-icon-button>\r\n                              <mat-icon>find_replace</mat-icon>\r\n                          </button> -->\r\n                      </div>\r\n\r\n                    </div>\r\n                </ng-template>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 sub-header\" innerHTML=\"{{ getPrevExercise(protoExercise) }}\">\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- список подходов, кнопка добавления подхода. По завершению этого - нужно убрать пустые подходы -->\r\n                <div class=\"row\">\r\n                  <ng-container *ngFor=\"let oneTry of getTryesByProtoExercise(protoExercise); let index = index;\">\r\n                    <app-my-try \r\n                      [namespace]=\"oneTry\"\r\n                    ></app-my-try>\r\n                  </ng-container>\r\n                </div>  \r\n        \r\n                <!-- Кнопки -->\r\n                <div class=\"row btns-row\">\r\n                  <button mat-fab color=\"basic\" class=\"add-try-btn\"\r\n                    (click)=\"addNewTry(protoExercise)\"\r\n                  >\r\n                    <mat-icon>add</mat-icon>\r\n                  </button>\r\n\r\n                  <!-- <button mat-fab color=\"primary\" (click)=\"add_comment = true;\">\r\n                    <mat-icon>add_comment</mat-icon>\r\n                  </button> -->\r\n                \r\n                  <button mat-fab matStepperNext color=\"primary\">\r\n                      <mat-icon>arrow_forward</mat-icon>\r\n                  </button>\r\n                </div>\r\n            </mat-step>\r\n        </ng-container>\r\n\r\n        <mat-step>\r\n            <ng-template matStepLabel>Растяжка</ng-template>\r\n            <app-my-stretching></app-my-stretching>\r\n            <div>\r\n              <button mat-raised-button matStepperNext color=\"primary\">Next</button>\r\n            </div>\r\n        </mat-step>\r\n\r\n        <mat-step>\r\n            <ng-template matStepLabel>Финальное кардио</ng-template>\r\n\r\n            <app-cardio-try #cardioEnd\r\n              [namespace]=\"trainig.cardioEnd\"\r\n            ></app-cardio-try>\r\n           \r\n        </mat-step>\r\n\r\n      </mat-vertical-stepper>\r\n  </div>\r\n  <mat-divider></mat-divider>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <mat-form-field class=\"\" class=\"col-12\">\r\n        <textarea matInput name=\"commentTrainig\" placeholder=\"Comment to Training\" [(ngModel)]=\"trainig.comment\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container final-trainig-wrapper\">\r\n    <div class=\"row btns-row solo-btn final\">\r\n        <button mat-fab color=\"basic\" class=\"green-btn\" (click)=\"trySave()\">\r\n            <mat-icon>check</mat-icon>\r\n        </button>\r\n    </div>\r\n  </div>\r\n  \r\n</form>"

/***/ }),

/***/ "./src/app/pages/training/trainig/trainig.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/training/trainig/trainig.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".exercise-label-wrapper {\n  display: block; }\n\n.exercise-label-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  position: absolute;\n  display: block;\n  float: left;\n  width: calc(100% - 135px);\n  top: 28px; }\n\n.exercise-label-icons {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 15px; }\n\n.btns-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1rem; }\n\n.btns-row.solo-btn {\n    justify-content: flex-end; }\n\n.final-trainig-wrapper {\n  padding: 0.25rem 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhaW5pbmcvdHJhaW5pZy9DOlxccHJvamVjdHNcXFNwb3J0UHV6emxlL3NyY1xcYXBwXFxwYWdlc1xcdHJhaW5pbmdcXHRyYWluaWdcXHRyYWluaWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsU0FBUyxFQUFBOztBQUdiO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUliO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlLEVBQUE7O0FBSG5CO0lBTVEseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFpbmluZy90cmFpbmlnL3RyYWluaWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmV4ZXJjaXNlLWxhYmVsLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5leGVyY2lzZS1sYWJlbC1uYW1lIHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTM1cHgpO1xyXG4gICAgdG9wOiAyOHB4O1xyXG59XHJcblxyXG4uZXhlcmNpc2UtbGFiZWwtaWNvbnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTVweDtcclxufVxyXG5cclxuXHJcbi5idG5zLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG5cclxuICAgICYuc29sby1idG4ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maW5hbC10cmFpbmlnLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/training/trainig/trainig.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/training/trainig/trainig.component.ts ***!
  \*************************************************************/
/*! exports provided: TrainigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainigComponent", function() { return TrainigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_classes_training__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/training */ "./src/app/classes/training.ts");
/* harmony import */ var src_app_services_programs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/programs.service */ "./src/app/services/programs.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_classes_exercise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/classes/exercise */ "./src/app/classes/exercise.ts");
/* harmony import */ var src_app_classes_my_try__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/classes/my-try */ "./src/app/classes/my-try.ts");
/* harmony import */ var src_app_sport_common_dialog_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sport-common/dialog-info.service */ "./src/app/sport-common/dialog-info.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");











var TrainigComponent = /** @class */ (function () {
    // todo: Сделать сохранение через поток: то есть вызывает next, а оно вызывает saveTrainig()
    function TrainigComponent(route, router, programService, dialogInfo) {
        this.route = route;
        this.router = router;
        this.programService = programService;
        this.dialogInfo = dialogInfo;
        this.prevTrainig = null;
        this.prevExercises = [];
        this.protoTrainig = null;
        this.trainig = null;
    }
    TrainigComponent.prototype.getTrainigDate = function () {
        var d = this.trainig.date;
        return d ? new Date(d) : new Date();
    };
    TrainigComponent.prototype.setTrainigDate = function (event) {
        var time = event.value && event.value.getTime();
        if (time) {
            this.trainig.date = time;
        }
    };
    TrainigComponent.prototype._createNewTrainig = function () {
        this.trainig = new src_app_classes_training__WEBPACK_IMPORTED_MODULE_3__["Training"]({
            protoTrainig: this.protoTrainig,
            date: new Date().getTime(),
        });
        this.trainig.init();
        this.programService.adjunctionWithID(this.trainig);
        this.programService.addTrainig(this.trainig);
    };
    TrainigComponent.prototype.ngOnInit = function () {
        var _this = this;
        // todo: реализвать через merge или forkJoin, чтобы все обсёрваблы сразу выполнились
        this.programService.getProgramComplex().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return _this.route.paramMap; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (params) {
            _this.protoTrainig = _this.programService.getProtoTrainigById(params.get('protoid'));
            return _this.protoTrainig;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () {
            if (_this.protoTrainig) {
                return _this.programService.loadTrainigs();
            }
            else {
                // 
                _this.openDialog({ info: 'Программа не найдена. Попробуйте ещё раз!' }, function () {
                    _this.router.navigate(['']);
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(null);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (el) { return !!el; })).subscribe(function (trainigs) {
            // ищем все тренеровки, которые похожи на эту прото тренеровку
            var asProtoTrainigs = trainigs
                .filter(function (tr) { return tr.protoTrainig.id === _this.protoTrainig.id; })
                .sort(function (a, b) { return a.date - b.date; });
            // console.log('asProtoTrainigs::', asProtoTrainigs);
            // ищем незаконченные тренеровки. Если есть незаконченная, то предлагаем её продолжить, иначе создаём новую
            var nowDate = new Date().getTime();
            var hours12ms = 12 * 60 * 60 * 1000;
            // Последняя незавершённая тренировка, не страше 12 часов
            var findLastNotCompleted = asProtoTrainigs.find(function (tr) { return !tr.isCompleted && (nowDate - tr.date < hours12ms); });
            // Последняя завершённая тренировка
            _this.prevTrainig = asProtoTrainigs.find(function (tr) { return tr.isCompleted; });
            _this.prevExercises = _this.prevTrainig && _this.prevTrainig.exercises || [];
            // Если есть последня незавершённая тренировка, то предложить её продолжить
            if (findLastNotCompleted) {
                _this.openDialog({
                    info: 'Найдена предыдущая незавершённая тренеровка. Продолжить её?',
                    btnOk: true
                }, function (res) {
                    if (res) {
                        _this.trainig = findLastNotCompleted;
                    }
                    else {
                        _this._createNewTrainig();
                    }
                });
            }
            else {
                _this._createNewTrainig();
            }
        });
    };
    TrainigComponent.prototype.showDebug = function () {
        console.log(this.protoTrainig);
        console.log(this.trainig);
        console.log(this.prevTrainig);
    };
    TrainigComponent.prototype.openDialog = function (data, callback) {
        this.dialogInfo.openDialog(data, function (result) {
            if (callback) {
                callback(result);
            }
        });
    };
    TrainigComponent.prototype.changeSelection = function (event) {
        // console.log('changeSelection', event);
        var countStepBeforeExercises = 2;
        var selectedIndex = event.selectedIndex;
        var exerciseIndex = selectedIndex - countStepBeforeExercises;
        if (exerciseIndex >= 0 && selectedIndex < this.protoTrainig.exercises.length + countStepBeforeExercises) {
            var protoExercise = this.protoTrainig.exercises[exerciseIndex];
            var exercise = this.trainig.getExercise(protoExercise);
            if (!exercise) {
                exercise = new src_app_classes_exercise__WEBPACK_IMPORTED_MODULE_7__["Exercise"]({
                    protoLink: protoExercise
                });
                this.trainig.exercises.push(exercise);
            }
            if (!exercise.tryes.length) {
                this.addNewTry(protoExercise);
            }
        }
        // Обработка предыдущего поля: удаление не заполненных траев
        var previouslySelectedIndex = event.previouslySelectedIndex - countStepBeforeExercises;
        if (previouslySelectedIndex >= 0 && previouslySelectedIndex < this.protoTrainig.exercises.length + countStepBeforeExercises) {
            var exercise = this.trainig.getExercise(this.protoTrainig.exercises[previouslySelectedIndex]);
            if (exercise) {
                var filtered = exercise.tryes.filter(function (el) { return !el.isEmpty(); });
                exercise.tryes = filtered;
                exercise.tryes.forEach(function (el, index) { return el.index = index; });
            }
        }
        // Сохраняем текущую тренеровку: 
        this.programService.saveTrainig().subscribe();
    };
    TrainigComponent.prototype.getTryesByProtoExercise = function (protoExercise) {
        var exercise = this.trainig.getExercise(protoExercise);
        return exercise && exercise.tryes || [];
    };
    TrainigComponent.prototype.getExerciseByProtoExercise = function (protoExercise) {
        return this.trainig.getExercise(protoExercise);
    };
    TrainigComponent.prototype.addNewTry = function (protoExercise) {
        // console.log('addNewTry::', protoExercise);
        var exercise = this.trainig.getExercise(protoExercise);
        if (!exercise) {
            return;
        }
        var nTry = new src_app_classes_my_try__WEBPACK_IMPORTED_MODULE_8__["MyTry"]();
        nTry.index = exercise.tryes.length;
        exercise.tryes.push(nTry);
    };
    TrainigComponent.prototype.openHelpDialogExercise = function (protoExercise, event) {
        console.log('openHelpDialogExercise::', event);
        event.stopPropagation();
        this.openDialog({ info: protoExercise.description, title: protoExercise.name });
    };
    TrainigComponent.prototype.openVideoLinkExercise = function (protoExercise, event) {
        console.log('openVideoLinkExercise::', protoExercise.videoLink);
        event.stopPropagation();
        window.open(protoExercise.videoLink, '_blank');
    };
    TrainigComponent.prototype._closeTrainig = function () {
        console.log('Close Trainig');
        this.trainig.isCompleted = true;
        this.programService.saveTrainig().subscribe();
        this.router.navigate(['/']);
    };
    ;
    TrainigComponent.prototype.trySave = function () {
        var _this = this;
        // todo: Проверить, всё ли заполнено, если да, то сохранить и перейти назад в навигаторе
        this.showDebug();
        this.programService.saveTrainig().subscribe();
        // console.log('trySave::', this.trainig, this.trainig.canComplete);
        if (!this.trainig.canComplete) {
            this.openDialog({
                info: 'Не все упрежнения выполнены. Завершить тренеровку?',
                btnOk: true
            }, function (res) {
                if (res) {
                    _this._closeTrainig();
                }
            });
        }
        else {
            this._closeTrainig();
        }
    };
    TrainigComponent.prototype.getPrevExercise = function (protoExercise) {
        var lastExercise = this.prevExercises.find(function (ex) { return ex.protoLink.id === protoExercise.id; });
        if (!lastExercise || !lastExercise.haveNotEmprtyTryes()) {
            return '';
        }
        var countExercise = lastExercise.tryes.length;
        var exercises = lastExercise.tryes.map(function (mtry) { return "<b>" + (mtry.weight || 0) + "</b>/" + (mtry.repeatCount || 0); });
        return countExercise + " [" + exercises.join(' - ') + "]";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatVerticalStepper"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatVerticalStepper"])
    ], TrainigComponent.prototype, "stepper", void 0);
    TrainigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trainig',
            template: __webpack_require__(/*! ./trainig.component.html */ "./src/app/pages/training/trainig/trainig.component.html"),
            styles: [__webpack_require__(/*! ./trainig.component.scss */ "./src/app/pages/training/trainig/trainig.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_programs_service__WEBPACK_IMPORTED_MODULE_4__["ProgramsService"], src_app_sport_common_dialog_info_service__WEBPACK_IMPORTED_MODULE_9__["DialogInfoService"]])
    ], TrainigComponent);
    return TrainigComponent;
}());



/***/ }),

/***/ "./src/app/pages/training/training-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/training/training-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TrainingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingRoutingModule", function() { return TrainingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _programs_complex_programs_complex_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programs-complex/programs-complex.component */ "./src/app/pages/training/programs-complex/programs-complex.component.ts");
/* harmony import */ var _trainig_trainig_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trainig/trainig.component */ "./src/app/pages/training/trainig/trainig.component.ts");





var routes = [
    {
        path: '',
        component: _programs_complex_programs_complex_component__WEBPACK_IMPORTED_MODULE_3__["ProgramsComplexComponent"]
    },
    {
        path: 'trainig',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'trainig/:protoid',
        component: _trainig_trainig_component__WEBPACK_IMPORTED_MODULE_4__["TrainigComponent"],
    }
];
var TrainingRoutingModule = /** @class */ (function () {
    function TrainingRoutingModule() {
    }
    TrainingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TrainingRoutingModule);
    return TrainingRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/training/training.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/training/training.module.ts ***!
  \***************************************************/
/*! exports provided: TrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModule", function() { return TrainingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training-routing.module */ "./src/app/pages/training/training-routing.module.ts");
/* harmony import */ var _programs_complex_programs_complex_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./programs-complex/programs-complex.component */ "./src/app/pages/training/programs-complex/programs-complex.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _trainig_trainig_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trainig/trainig.component */ "./src/app/pages/training/trainig/trainig.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_try_my_try_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-try/my-try.component */ "./src/app/pages/training/my-try/my-try.component.ts");
/* harmony import */ var _cardio_try_cardio_try_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cardio-try/cardio-try.component */ "./src/app/pages/training/cardio-try/cardio-try.component.ts");
/* harmony import */ var _my_stretching_my_stretching_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-stretching/my-stretching.component */ "./src/app/pages/training/my-stretching/my-stretching.component.ts");
/* harmony import */ var _my_warm_my_warm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-warm/my-warm.component */ "./src/app/pages/training/my-warm/my-warm.component.ts");
/* harmony import */ var src_app_sport_common_sport_common_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/sport-common/sport-common.module */ "./src/app/sport-common/sport-common.module.ts");













var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_programs_complex_programs_complex_component__WEBPACK_IMPORTED_MODULE_4__["ProgramsComplexComponent"], _trainig_trainig_component__WEBPACK_IMPORTED_MODULE_6__["TrainigComponent"], _my_try_my_try_component__WEBPACK_IMPORTED_MODULE_8__["MyTryComponent"], _cardio_try_cardio_try_component__WEBPACK_IMPORTED_MODULE_9__["CardioTryComponent"], _my_stretching_my_stretching_component__WEBPACK_IMPORTED_MODULE_10__["MyStretchingComponent"], _my_warm_my_warm_component__WEBPACK_IMPORTED_MODULE_11__["MyWarmComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _training_routing_module__WEBPACK_IMPORTED_MODULE_3__["TrainingRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                src_app_sport_common_sport_common_module__WEBPACK_IMPORTED_MODULE_12__["SportCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
            ],
            exports: [_programs_complex_programs_complex_component__WEBPACK_IMPORTED_MODULE_4__["ProgramsComplexComponent"], _trainig_trainig_component__WEBPACK_IMPORTED_MODULE_6__["TrainigComponent"], _my_try_my_try_component__WEBPACK_IMPORTED_MODULE_8__["MyTryComponent"], _cardio_try_cardio_try_component__WEBPACK_IMPORTED_MODULE_9__["CardioTryComponent"], _my_stretching_my_stretching_component__WEBPACK_IMPORTED_MODULE_10__["MyStretchingComponent"], _my_warm_my_warm_component__WEBPACK_IMPORTED_MODULE_11__["MyWarmComponent"]]
        })
    ], TrainingModule);
    return TrainingModule;
}());



/***/ }),

/***/ "./src/app/services/programs.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/programs.service.ts ***!
  \**********************************************/
/*! exports provided: ProgramsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsService", function() { return ProgramsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _classes_training__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/training */ "./src/app/classes/training.ts");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-info.service */ "./src/app/services/user-info.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var ProgramsService = /** @class */ (function () {
    function ProgramsService(rest, userInfo) {
        this.rest = rest;
        this.userInfo = userInfo;
        this.isLoadTrainigsForUser = '';
        // trainigs: Training[] = [];
        // Старые тренировки + текущая тренировка
        this._trainigs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.trainigs$ = this._trainigs.asObservable();
        console.log('ProgramsService:: INIT');
        this.getProgramComplex().subscribe();
    }
    Object.defineProperty(ProgramsService.prototype, "programComplexes", {
        get: function () {
            var user = this.userInfo.user;
            return user && user.programComplexes || [];
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ProgramsService.prototype, "trainigs", {
        get: function () {
            return this._trainigs.value;
        },
        set: function (value) {
            this._trainigs.next(value);
        },
        enumerable: true,
        configurable: true
    });
    ProgramsService.prototype.addTrainig = function (trainig) {
        this.trainigs = this.trainigs.concat([trainig]);
    };
    ProgramsService.prototype.generateId = function () {
        return (new Date().getTime() + (Math.random() * 100).toFixed(0)).toString();
    };
    ProgramsService.prototype.adjunctionWithID = function (obj) {
        obj.id = this.generateId();
        return obj.id;
    };
    ProgramsService.prototype.getProgramComplex = function () {
        return this.rest.fakeCall('', { programComplexes: this.programComplexes });
    };
    Object.defineProperty(ProgramsService.prototype, "localStorageUserName", {
        get: function () {
            return "user_" + (this.userInfo.user && this.userInfo.user.id);
        },
        enumerable: true,
        configurable: true
    });
    ProgramsService.prototype.saveTrainig = function () {
        // localStorage.setItem('whatever', 'something');
        var trainigsString = JSON.stringify(this.trainigs.map(function (tr) {
            var m = tr.toMap();
            m['protoTrainig'] = tr.protoTrainig.id;
            // todo: exercises -> to proto exercises_id
            return m;
        }));
        // console.log('saveTrainig::', trainigsString);
        localStorage.setItem(this.localStorageUserName, trainigsString);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(true);
    };
    ProgramsService.prototype.loadTrainigs = function () {
        var _this = this;
        if (this.isLoadTrainigsForUser === (this.userInfo.user && this.userInfo.user.id)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.trainigs);
        }
        var trainigsString = localStorage.getItem(this.localStorageUserName);
        // console.log('loadTrainigs::', trainigsString);
        this.isLoadTrainigsForUser = this.userInfo.user && this.userInfo.user.id || '';
        if (trainigsString) {
            var trMaps = JSON.parse(trainigsString);
            // console.log('trMaps::', trMaps);
            var trainings = trMaps.map(function (trM) {
                var protoTraining = _this.getProtoTrainigById(trM['protoTrainig']);
                delete trM['protoTrainig'];
                // todo: proto_exercies -> exercises
                // console.log('protoTraining::', protoTraining);
                var tr = new _classes_training__WEBPACK_IMPORTED_MODULE_3__["Training"](trM);
                tr.protoTrainig = protoTraining;
                return tr;
            });
            // console.log('trainings::', trainings);
            this.trainigs = trainings;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.trainigs);
    };
    ProgramsService.prototype.getProtoTrainigById = function (protoId) {
        var trainigs = this.programComplexes.reduce(function (accumulator, complex) { return accumulator.concat(complex.protoTrainigs); }, []);
        return trainigs.find(function (tr) { return tr.id === protoId; });
    };
    ProgramsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"]])
    ], ProgramsService);
    return ProgramsService;
}());



/***/ }),

/***/ "./src/app/sport-common/dialog-info.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/sport-common/dialog-info.service.ts ***!
  \*****************************************************/
/*! exports provided: DialogInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogInfoService", function() { return DialogInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-dialog/info-dialog.component */ "./src/app/sport-common/info-dialog/info-dialog.component.ts");




var DialogInfoService = /** @class */ (function () {
    function DialogInfoService(dialog) {
        this.dialog = dialog;
    }
    DialogInfoService.prototype.openDialog = function (data, onClose) {
        var dialogRef = this.dialog.open(_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogComponent"], {
            width: '80%',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed::', result);
            if (typeof onClose === 'function') {
                onClose(result);
            }
        });
    };
    DialogInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DialogInfoService);
    return DialogInfoService;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-training-training-module.js.map