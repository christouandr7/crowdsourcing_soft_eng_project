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

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.admin && route.data.admin.indexOf(currentUser.admin) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });




/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    'x-observatory-auth': currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.register = function (data) {
        var _this = this;
        return this.http.post("http://localhost:8765/observatory/api/register", {
            "username": data.username,
            "email": data.email,
            "password": data.password,
            "firstname": data.firstname,
            "lastname": data.lastname,
            "date_of_birth": data.date_of_birth,
            "gender": data.gender,
            "phone_num": data.phone_num
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post("http://localhost:8765/observatory/api/login", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            console.log("user", user);
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return this.http.get("http://localhost:8765/observatory/api/logout")
            .subscribe(function (msg) {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            _this.currentUserSubject.next(null);
        });
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });





/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"height: 100vh;\">\n\n\n<h1 style=\"color:#fd9501;\">Ποιοι είμαστε;</h1>\n\n<br>\n\n<div align=\"center\">\n<p align=\"justify\" style= \"font-size: 15px; font-weight: bold; align-content: center; width: 60%; min-width: 350px; \">Είμαστε μία ομάδα 6 ατόμων, οι Segmentation Folks, με οράματα και κάποιους κοινούς στόχους. Ξεκινήσαμε αυτή την προσπάθεια υλοποίησης αυτής της εφαρμογής με σκοπό να βοηθήσουμε όσο το δυνατόν περισσότερο κόσμο ωστε να βρίσκει φθηνότερα κάποια προϊόντα. Η οικονομική κρίση που έχει ξεσπάσει την τελευταία σχεδόν δεκαετία στην χώρα μας, καθιστά τέτοιου είδος εφαρμογές αδήριτη ανάγκη. </p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2IsMEZBQTBGLENBQUM7O0FBRTNGO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGlCQUFpQjs7QUFFbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7O1FBRVE7WUFDSSxZQUFZO1FBQ2hCO0FBQ1I7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUdBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUdBOztJQUVJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblx0Y29sb3I6IGJsYWNrO1xuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBsaWdodHNreWJsdWUsICM4ODZlYjgsICM4ODZlYjggLCBsaWdodHNreWJsdWUpO31cblxuaDEge1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuaDN7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cbiAgICAgICAgLm5vbW9iaWxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgfVxufVxuXG4ucGFyYWdyYXBoe1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDE3cHg7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdG1hcmdpbjogMTVweDtcblx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblxufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uc2Vjb25kYXJ5X2xvZ297XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDEwJTtcblx0bWluLXdpZHRoOiAxMDBweDtcblx0cGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4jY2Vue1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaW1wbGUtZm9ybXtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDEwMHB4IDBweDtcbn1cblxuLnRhYi10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcblxufVxuLnRhYi1jb250ZW50e1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDUxMDE5O1xufVxuI3JlZ2lzdHJhdGlvbntcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNTEwMTk7XG5cdG9wYWNpdHk6IDAuOTtcblx0Y29sb3I6IGJsYWNrO1xuXHRwYWRkaW5nOiAyMHB4IDBweCA1MHB4IDBweDtcbn1cblxuI3JlZ2lzdHJhdGlvbjF7XG5cdHdpZHRoOiAxMDAlO1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmZpbHRlcl9idG57XG5cdC8vd2lkdGg6IDE1ZW07XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjliNDI7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdC8vZm9udC1zaXplOiAxNnB4O1xuXHQvL2NvbG9yOiB3aGl0ZTtcbn1cbiNidXR0b257XG5cdHdpZHRoOiAyNWVtO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG59XG5cbiNidXR0b25JbnB7XG5cdHdpZHRoOiAyNSU7XG5cdGhlaWdodDogMTAwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2J1dHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDE4cHg7XG59XG4uaW5mb3tcbmJhY2tncm91bmQtY29sb3I6ICNmZmJiN2Y7XG59XG5cbiNidXR0e1xuXHR3aWR0aDogMjUlO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwYzY5OTY7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2J1dHQxe1xuXHR3aWR0aDogMjAlO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwYzY5OTY7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuI3RpdGx7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAyNnB4O1xufVxuXG4jdGl0bDF7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG5cbiNidXR0MWluZGV4e1xuXHR3aWR0aDogMTBlbTtcblx0cGFkZGluZzogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmOWI0Mjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdC8vbWFyZ2luOiAxMHB4IGF1dG87XG5cdC8vZGlzcGxheTogYmxvY2s7XG59XG5cblxuI21hcHBcbntcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NEODUzRiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0NEODUzRjtcbiAgcGFkZGluZy1ib3R0b206IDJweDsgICAgICBcbn1cbi5uYXYtbGluayB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNDRDg1M0YgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0NEODUzRiAhaW1wb3J0YW50OyAgICAgIFxufVxuLm5hdi10YWJze1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/addproducts/addproducts.component.html":
/*!********************************************************!*\
  !*** ./src/app/addproducts/addproducts.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"min-height: 100vh; max-height: 100%;\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n  <form class=\"text-center border border-light p-5\" style=\"padding: 10px; max-width: 500px;\">\n      <!--Header-->\n      <p style=\"font-size: 25px; font-weight: bold; color:#fd9501;\">Προσθήκη Τιμών Προιόντων</p>\n  \n  <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\t\n\n    <mat-form-field>\n        <mat-select name=selectPr [(ngModel)]=\"selectedOption\" placeholder=\"Επιλογή Προιόντος\" [disabled]=\"dis\" required>\n                <mat-option></mat-option>\n                <mat-option *ngFor=\"let a of res\" [value]=\"a._id\">\n            {{a.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <br>\n        <button class=\"btn btn-primary\" (click)=\"prodPage()\">Προσθήκη Νέου Προιόντος</button>\n      \n   <br>\n\n  \n      <mat-form-field>\n          <mat-select name=selectSh [(ngModel)]=\"selectedOption2\" placeholder=\"Επιλογή Καταστήματος\" [disabled]=\"dis\" required>\n              <mat-option></mat-option>     \n            <mat-option *ngFor=\"let o of res2\" [value]=\"o._id\">\n              {{o.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <br>\n        <button class=\"btn btn-primary\" (click)=\"shopPage()\">Προσθήκη Νέου Καταστήματος</button>\n      \n              \n  <hr>\n  <p style=\"font-size: 25px; font-weight: bold;\">Νέα Τιμή</p>\n\n  <!--Date-->\n\n  <mat-form-field class=\"mat-cell-input-number\" max-height=\"1px\">\n      <uix-mat-number-spinner increase=\"0.01\" decrease=\"0.01\" fix=\"2\"  [(value)]=\"number1\"></uix-mat-number-spinner>\n      <input matInput placeholder=Τιμή type=\"number\" required name=\"price\" #price=\"ngModel\" min=\"0\"  step=\".01\" [(ngModel)]=\"number1\">\n    </mat-form-field>\n    <div *ngIf=\"number1==0\" class=\"help-block\" >\n        <span max-height=\"1px\" style=\"color:#f44336\" class=\"help-block\" *ngIf=\"number1==0 && price.touched\">Παρακαλώ εισάγετε νέα τιμή</span>\n      </div>\n\n    <br>\n    \n  <div class=\"row\">\n    <div class=\"col-xs-6\">\n        <label for=\"field1\">Από:</label>\n        <ejs-datepicker #dateFromP=\"ngModel\" id='datepicker' name=\"dateFromP\"  [min]='minDate' [max]='maxDate' [(ngModel)]=\"pr.dateFrom\"></ejs-datepicker>\n    </div>\n    <div class=\"col-xs-6\">\n        <label for=\"field2\">Μέχρι:</label>\n        <ejs-datepicker #dateToP=\"ngModel\"  id='datepicker2' name='dateToP'  [min]='minDateTo' [max]='maxDate' [(ngModel)]=\"pr.dateTo\"></ejs-datepicker>\n      </div>\n      <div *ngIf=\"dateFromP.pristine || dateToP.pristine\" class=\"help-block\" >\n          <span max-height=\"1px\" style=\"color:#f44336\" class=\"help-block\" *ngIf=\"dateFromP.pristine || dateToP.pristine\">Αφηνοντας οποιαδηποτε απο τις ημερομηνίες κενή αυτόματα μπαίνει η σημερινή </span>\n      </div>\n</div>\n\n\n  <!-- Sign up button -->\n  <br>\n  <div class=\"form-group\">\n        <button class=\"btn btn-primary\" [disabled]=\"f.form.pristine ||f.form.invalid ||number1==0\">Προσθήκη</button>\n  </div>\n  </form>\n  </form>\n</div>\n  \n"

/***/ }),

/***/ "./src/app/addproducts/addproducts.component.scss":
/*!********************************************************!*\
  !*** ./src/app/addproducts/addproducts.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHByb2R1Y3RzL2FkZHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/addproducts/addproducts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/addproducts/addproducts.component.ts ***!
  \******************************************************/
/*! exports provided: AddproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductsComponent", function() { return AddproductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddproductsComponent = /** @class */ (function () {
    function AddproductsComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.minDate = new Date("01/01/2019");
        this.maxDate = new Date("12/12/2100");
        this.minDateTo = new Date(this.getToday());
        this.shown = false;
        this.shown1 = false;
        this.pr = {};
        this.number1 = 0;
        this.options = [];
        this.options2 = [];
        this.prod = {};
        this.shp = {};
        this.newPrice = {};
        this.ret = [];
        this.ip = location.hostname;
        this.count = 0;
        this.dis = false;
        this.res = this.options;
        this.res2 = this.options2;
        this.np = this.newProd;
    }
    AddproductsComponent.prototype.getToday = function () {
        var today = new Date();
        var todayy;
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        todayy = yyyy + "-" + mm + "-" + dd;
        return todayy;
    };
    AddproductsComponent.prototype.dateMod = function (longDate) {
        this.params = longDate.split(" ");
        this.mm = this.params[1];
        switch (this.mm) {
            case "Jan":
                this.mm = "01";
                break;
            case "Feb":
                this.mm = "02";
                break;
            case "Mar":
                this.mm = "03";
                break;
            case "Apr":
                this.mm = "04";
                break;
            case "May":
                this.mm = "05";
                break;
            case "Jun":
                this.mm = "06";
                break;
            case "Jul":
                this.mm = "07";
                break;
            case "Aug":
                this.mm = "08";
                break;
            case "Sep":
                this.mm = "09";
                break;
            case "Oct":
                this.mm = "10";
                break;
            case "Nov":
                this.mm = "11";
                break;
            case "Dec":
                this.mm = "12";
                break;
        }
        this.dd = this.params[2];
        this.yyyy = this.params[3];
        return this.yyyy + "-" + this.mm + "-" + this.dd;
    };
    AddproductsComponent.prototype.onSubmit = function () {
        if (this.pr.dateTo == null || this.pr.dateTo == "") {
            var newDate = new Date(this.getToday());
            this.pr.dateTo = this.dateMod(newDate.toString());
            console.log("{dateTo:" + this.pr.dateTo + "}");
        }
        else {
            console.log("{dateTo:" + this.dateMod(this.pr.dateTo.toString()) + "}");
        }
        if (this.pr.dateFrom == null || this.pr.dateFrom == "") {
            var newDate = new Date(this.getToday());
            this.pr.dateFrom = this.dateMod(newDate.toString());
            console.log("{dateFrom:" + this.pr.dateFrom + "}");
        }
        else {
            console.log("{dateFrom:" + this.dateMod(this.pr.dateFrom.toString()) + "}");
        }
        this.newPrice.price = this.number1;
        this.newPrice.dateFrom = this.dateMod(this.pr.dateFrom.toString());
        this.newPrice.dateTo = this.dateMod(this.pr.dateTo.toString());
        this.newPrice.productId = this.selectedOption;
        this.newPrice.shopId = this.selectedOption2;
        this.http.post("http://" + this.ip + ":8765/observatory/api/prices", this.newPrice)
            .subscribe(function (data) {
            //  console.log("POST Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
        var navigationExtras = {
            queryParams: {
                "ProductID": this.selectedOption,
                "ShopID": this.selectedOption2,
                "Price": this.number1,
                "DateFrom": this.newPrice.dateFrom,
                "DateTo": this.newPrice.dateTo,
            }
        };
        this.router.navigate(['/priceresponse/'], navigationExtras);
    };
    AddproductsComponent.prototype.prodPage = function () {
        this.dis = true;
        this.router.navigate(['/new-product/']);
    };
    AddproductsComponent.prototype.shopPage = function () {
        this.dis = true;
        this.router.navigate(['/new-shop/']);
    };
    AddproductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        var c = 0;
        var s = 0;
        var ip = location.hostname;
        this.http.get('http://' + ip + ':8765/observatory/api/products/')
            //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
            .subscribe(function (response) {
            _this.response = response;
            for (var i = 0; i < _this.response.products.length; i++) {
                _this.options[c] = _this.response.products[i];
                c++;
            }
        });
        this.http.get('http://' + ip + ':8765/observatory/api/shops/')
            //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
            .subscribe(function (response) {
            _this.response = response;
            for (var i = 0; i < _this.response.shops.length; i++) {
                _this.options2[s] = _this.response.shops[i];
                s++;
            }
        });
    };
    AddproductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addproducts',
            template: __webpack_require__(/*! ./addproducts.component.html */ "./src/app/addproducts/addproducts.component.html"),
            styles: [__webpack_require__(/*! ./addproducts.component.scss */ "./src/app/addproducts/addproducts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddproductsComponent);
    return AddproductsComponent;
}());



/***/ }),

/***/ "./src/app/adminpage/adminpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"min-height: 100vh;\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n<div align=\"center\" *ngIf = \"model\">\n\t<h1 style = \"font-size: 3.5vw;\">Καλωσόρισες στη σελίδα διαχείρισης {{model.firstname}}!</h1>\n</div>\n\n        <div align=\"center\">\n            <button class=\"btn btn-primary\" (click)=\"showAllProducts(0,20,1)\">Όλα τα προϊόντα</button>\n            <button class=\"btn btn-primary\" (click)=\"showAllPrices(0,20,1)\">Όλες οι ενεργές τιμές</button>\n            <button class=\"btn btn-primary\" (click)=\"showAllShops(0,20,1)\">Όλα τα καταστήματα</button>\n            <br>\n            <button class=\"btn btn-primary\" (click)=\"showAllProductsWithdrawn(0,20,1)\">Όλα τα withdrawn προϊόντα</button>\n            <button class=\"btn btn-primary\" (click)=\"showAllPricesWithdrawn(0,20,1)\">Όλες οι withdrawn τιμές</button>\n            <br>\n            <button class=\"btn btn-primary\" (click)=\"showAllUsers()\">Όλοι οι χρήστες</button>\n            <button class=\"btn btn-primary\" (click)=\"showAllMessages()\">Όλα τα μηνύματα</button>\n\n\n        </div>\n\n \n          <div id=\"products\" align=\"center\" *ngIf=\"show[0]\" style=\"overflow-x:auto;\">\n          \t<br>\n  \t\t\t<table style=\"table-layout: fixed; max-width: 1000px; margin-left: 10px; margin-right: 10px;\" >\n  \t\t\t\t<tr style=\"background-color: white; font-size: 16px;\">\n   \t\t\t\t \t<th style=\"text-align: center; max-width: 20%;\"><b>ID</b></th>\n    \t\t\t\t<th style=\"text-align: center;\"><b>Όνομα προϊόντος</b></th> \n    \t\t\t\t<th style=\"text-align: center; max-width: 15%\"><b>Κατηγορία</b></th>\n    \t\t\t\t<th style=\"text-align: center; max-width: 10%\"><b>Withdrawn</b></th>\n\t\t\t\t\t<th style=\"max-width: 10%; text-align: center;\"><b>Διαγραφή</b></th>\n\n  \t\t\t\t</tr>\n \t\t\t\t<tr *ngFor=\"let pro of products\"> \n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 20%;\">{{ pro._id }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center;\">{{ pro.name }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 15%\">{{ pro.category }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 8%\">{{ pro.withdrawn }}</th>\n\t\t\t\t\t<th style=\"max-width: 10%;\"><button class=\"btn btn-danger\" (click)=\"deleteProduct(pro._id)\" style=\"max-width: 100%;\">Διαγραφή</button></th>\n  \t\t\t\t</tr>\n  \t\t\t</table>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"btn-group mr-2 justify-content-center\" role=\"group\" aria-label=\"First group\">\n\t\t\t\t\t\t\t\t<button [disabled]=\"!prev\" class=\"btn btn-primary\" (click)=\"prevPr()\" style=\"max-width: 100%;\">Previous</button>\n\t\t\t\t\t\t\t\t<button [disabled]=\"!next\" type=\"button\" (click)=\"nextPr()\"class=\"btn btn-primary\">Next</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<label padding-left=\"10px\">Page {{c}} of {{pgNum}}</label>\n</div>\n          <div id=\"prices\" align=\"center\" *ngIf=\"show[1]\" style=\"overflow-x:auto;\">\n          \t<br>\n  \t\t\t<table style=\"table-layout: fixed; max-width: 1000px; margin-left: 10px; margin-right: 10px;\" >\n  \t\t\t\t<tr style=\"background-color: white; font-size: 16px;\">\n   \t\t\t\t \t<th style=\"text-align: center;\"><b>Product Name</b></th>\n    \t\t\t\t<th style=\"text-align: center; max-width: 15%\"><b>Όνομα Καταστήματος</b></th> \n    \t\t\t\t<th style=\"text-align: center; max-width: 10%\"><b>Τιμή</b></th>\n    \t\t\t\t<th style=\"text-align: center; max-width: 10%\"><b>Withdrawn</b></th>\n    \t\t\t\t<th style=\"text-align: center; max-width: 20%\"><b>Ισχύει Μέχρι</b></th>\n\t\t\t\t\t<th style=\"max-width: 10%; text-align: center;\"><b>Διαγραφή</b></th>\n\n  \t\t\t\t</tr>\n \t\t\t\t<tr *ngFor=\"let pri of prices\"> \n  \t\t\t\t  \t<th style=\"text-align: center;\">{{ pri.productName }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 15%\">{{ pri.shopName }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 10%\">{{ pri.price }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 10%\">{{ pri.withdrawn }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 20%\">{{ pri.dateTo }}</th>\n\t\t\t\t\t<th style=\"max-width: 10%;\"><button class=\"btn btn-danger\" (click)=\"deletePrice(pri._id)\" style=\"max-width: 100%;\">Διαγραφή</button></th>\n  \t\t\t\t</tr>\n  \t\t\t</table>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"btn-group mr-2 justify-content-center\" role=\"group\" aria-label=\"First group\">\n\t\t\t\t\t\t\t\t<button [disabled]=\"!prev\" class=\"btn btn-primary\" (click)=\"prevPrice()\" style=\"max-width: 100%;\">Previous</button>\n\t\t\t\t\t\t\t\t<button [disabled]=\"!next\" type=\"button\" (click)=\"nextPrice()\"class=\"btn btn-primary\">Next</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<label padding-left=\"10px\">Page {{c}} of {{pgNum}}</label>\n          </div>\n\n\n           <div id=\"shops\" align=\"center\" *ngIf=\"show[2]\" style=\"overflow-x:auto;\">\n          \t<br>\n  \t\t\t<table style=\"table-layout: fixed; max-width: 1000px; margin-left: 10px; margin-right: 10px;\" >\n  \t\t\t\t<tr style=\"background-color: white; font-size: 16px;\">\n    \t\t\t\t<th style=\"text-align: center; max-width: 15%\"><b>Όνομα καταστήματος</b></th> \n    \t\t\t\t<th style=\"text-align: center;\"><b>Διεύθυνση Καταστήματος</b></th>\n    \t\t\t\t<th style=\"text-align: center; max-width: 10%\"><b>Withdrawn</b></th>\n\t\t\t\t\t<th style=\"max-width: 10%; text-align: center;\"><b>Διαγραφή</b></th>\n\n  \t\t\t\t</tr>\n \t\t\t\t<tr *ngFor=\"let sho of shops\"> \n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 20%\">{{ sho.name }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center;\">{{ sho.address }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 10%\">{{ sho.withdrawn }}</th>\n\t\t\t\t\t<th style=\"max-width: 10%;\"><button class=\"btn btn-danger\" (click)=\"deleteShop(sho._id)\" style=\"max-width: 100%;\">Διαγραφή</button></th>\n  \t\t\t\t</tr>\n  \t\t\t</table>\n          \t<br>\n\t\t\t\t\t\t<div class=\"btn-group mr-2 justify-content-center\" role=\"group\" aria-label=\"First group\">\n\t\t\t\t\t\t\t<button [disabled]=\"!prev\" class=\"btn btn-primary\" (click)=\"prevShp()\" style=\"max-width: 100%;\">Previous</button>\n\t\t\t\t\t\t\t<button [disabled]=\"!next\" type=\"button\" (click)=\"nextShp()\"class=\"btn btn-primary\">Next</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label padding-left=\"10px\">Page {{c}} of {{pgNum}}</label>\n          </div>\n\n\n          <div id=\"productsW\" align=\"center\" *ngIf=\"show[3]\" style=\"overflow-x:auto;\">\n          \t<br>\n  \t\t\t<table style=\"table-layout: fixed; max-width: 1000px; margin-left: 10px; margin-right: 10px;\" >\n  \t\t\t\t<tr style=\"background-color: white; font-size: 16px;\">\n   \t\t\t\t \t<th style=\"text-align: center; max-width: 20%;\"><b>ID</b></th>\n    \t\t\t\t<th style=\"text-align: center;\"><b>Όνομα προϊόντος</b></th> \n    \t\t\t\t<th style=\"text-align: center; max-width: 15%\"><b>Κατηγορία</b></th>\n    \t\t\t\t<th style=\"text-align: center; max-width: 10%\"><b>Withdrawn</b></th>\n\t\t\t\t\t<th style=\"max-width: 10%; text-align: center;\"><b>Διαγραφή</b></th>\n\n  \t\t\t\t</tr>\n \t\t\t\t<tr *ngFor=\"let proW of withdrawnProducts\"> \n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 20%;\">{{ proW._id }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center;\">{{ proW.name }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 15%\">{{ proW.category }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 8%\">{{ proW.withdrawn }}</th>\n\t\t\t\t\t<th style=\"max-width: 10%;\"><button class=\"btn btn-danger\" (click)=\"deleteProductW(proW._id)\" style=\"max-width: 100%;\">Διαγραφή</button></th>\n  \t\t\t\t</tr>\n  \t\t\t</table>\n\t\t\t\t\t\t<br>\n\n\t\t\t\t\t\t<div class=\"btn-group mr-2 justify-content-center\" role=\"group\" aria-label=\"First group\">\n\t\t\t\t\t\t\t<button [disabled]=\"!prev\" class=\"btn btn-primary\" (click)=\"prevWithdPr()\" style=\"max-width: 100%;\">Previous</button>\n\t\t\t\t\t\t\t<button [disabled]=\"!next\" type=\"button\" (click)=\"nextWithdPr()\"class=\"btn btn-primary\">Next</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label padding-left=\"10px\">Page {{c}} of {{pgNum}}</label>\n          </div>\n\n\n\n          <div id=\"pricesW\" align=\"center\" *ngIf=\"show[4]\" style=\"overflow-x:auto;\">\n          \t<br>\n  \t\t\t<table style=\"table-layout: fixed; max-width: 1000px; margin-left: 10px; margin-right: 10px;\" >\n  \t\t\t\t<tr style=\"background-color: white; font-size: 16px;\">\n   \t\t\t\t \t<th style=\"text-align: center;\"><b>Product Name</b></th>\n    \t\t\t\t<th style=\"text-align: center; max-width: 15%\"><b>Όνομα Καταστήματος</b></th> \n    \t\t\t\t<th style=\"text-align: center; max-width: 10%\"><b>Τιμή</b></th>\n    \t\t\t\t<th style=\"text-align: center; max-width: 10%\"><b>Withdrawn</b></th>\n    \t\t\t\t<th style=\"text-align: center; max-width: 20%\"><b>Ισχύει Μέχρι</b></th>\n\t\t\t\t\t<th style=\"max-width: 10%; text-align: center;\"><b>Διαγραφή</b></th>\n\n  \t\t\t\t</tr>\n \t\t\t\t<tr *ngFor=\"let priW of withdrawnPrices\"> \n  \t\t\t\t  \t<th style=\"text-align: center;\">{{ priW.productName }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 15%\">{{ priW.shopName }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 10%\">{{ priW.price }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 10%\">{{ priW.withdrawn }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 20%\">{{ priW.dateTo }}</th>\n\t\t\t\t\t<th style=\"max-width: 10%;\"><button class=\"btn btn-danger\" (click)=\"deletePriceW(priW._id)\" style=\"max-width: 100%;\">Διαγραφή</button></th>\n  \t\t\t\t</tr>\n  \t\t\t</table>\n          \t<br>\n\n\t\t\t\t\t\t<div class=\"btn-group mr-2 justify-content-center\" role=\"group\" aria-label=\"First group\">\n\t\t\t\t\t\t\t<button [disabled]=\"!prev\" class=\"btn btn-primary\" (click)=\"prevWithdPrice()\" style=\"max-width: 100%;\">Previous</button>\n\t\t\t\t\t\t\t<button [disabled]=\"!next\" type=\"button\" (click)=\"nextWithdPrice()\"class=\"btn btn-primary\">Next</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label padding-left=\"10px\">Page {{c}} of {{pgNum}}</label>\n          </div>\n\n\n          <div id=\"users\" align=\"center\" *ngIf=\"show[5]\" style=\"overflow-x:auto;\">\n            <br>\n        <table style=\"table-layout: fixed; max-width: 1000px; margin-left: 10px; margin-right: 10px;\" >\n          <tr style=\"background-color: white; font-size: 16px;\">\n            <th style=\"text-align: center;\"><b>Ψευδώνυμο</b></th>\n            <th style=\"text-align: center; max-width: 15%\"><b>Όνομα</b></th> \n            <th style=\"text-align: center; max-width: 10%\"><b>Επώνυμο</b></th>\n            <th style=\"text-align: center; max-width: 10%\"><b>Email</b></th>\n            <th style=\"text-align: center; max-width: 20%\"><b>Τηλέφωνο</b></th>\n            <th style=\"max-width: 10%; text-align: center;\"><b>Admin</b></th>\n            <th style=\"max-width: 10%; text-align: center;\"><b>Διαγραφή</b></th>\n          </tr>\n\n        <tr *ngFor=\"let u of users\"> \n              <th style=\"text-align: center;\">{{ u.username }}</th>\n              <th style=\"text-align: center; max-width: 15%\">{{ u.firstname }}</th>\n              <th style=\"text-align: center; max-width: 10%\">{{ u.lastname }}</th>\n              <th style=\"text-align: center; max-width: 10%\">{{ u.email }}</th>\n              <th style=\"text-align: center; max-width: 20%\">{{ u.phone_num }}</th>\n              <th style=\"text-align: center; max-width: 20%\"><input type=\"checkbox\" name=\"adm\" class=\"form-check-input\" [(ngModel)]= \"u.admin\" (change)=\"updateUser(u._id,u.admin)\"></th>\n              <th style=\"max-width: 10%;\"><button class=\"btn btn-danger\" (click)=\"deleteUser(u._id)\" style=\"max-width: 100%;\">Διαγραφή</button></th>\n          </tr>\n        </table>\n            <br>\n\n          </div>\n\n\n          <div id=\"msgs\" align=\"center\" *ngIf=\"show[6]\" style=\"overflow-x:auto;\">\n          \t<br>\n  \t\t\t<table style=\"table-layout: fixed; max-width: 1000px; margin-left: 10px; margin-right: 10px;\" >\n  \t\t\t\t<tr style=\"background-color: white; font-size: 16px;\">\n   \t\t\t\t \t<th style=\"text-align: center; max-width: 25%;\"><b>Ονοματεπώνυμο</b></th>\n    \t\t\t\t<th style=\"text-align: center;\"><b>Email Address</b></th> \n    \t\t\t\t<th style=\"text-align: center; max-width: 25%;\"><b>Θέμα</b></th>\n\t\t\t\t\t<th style=\"max-width: 15%; text-align: center;\"><b>Προβολή</b></th>\n\n  \t\t\t\t</tr>\n \t\t\t\t<tr *ngFor=\"let msg of messages\"> \n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 25%;\">{{ msg.fullname }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center;\">{{ msg.email }}</th>\n  \t\t\t\t  \t<th style=\"text-align: center; max-width: 25%;\">{{ msg.subject }}</th>\n\t\t\t\t\t<th style=\"max-width: 15%;\"><button class=\"btn btn-info\" (click)=\"showMessage(msg._id,msg.message,msg.fullname,msg.email)\" style=\"max-width: 100%;\">Προβολή</button></th>\n  \t\t\t\t</tr>\n  \t\t\t</table>\n          \t<br>\n\n          </div>\n\n\n            <div id=\"msg\" align=\"center\" *ngIf=\"showMsg\" style=\"overflow-x:auto;\">\n\t\t\t\t<h4>Αποστολέας: {{msgName}}</h4> \n\t\t\t\t<h4>Email: {{msgEmail}}</h4> \n\t\t\t\t<div align=\"center\" style=\"background-color: papayawhip; border-radius: 25px; height: 100px; max-width: 380px; overflow-y:auto;\">\n\t\t\t\t\t<p style=\"font-size: 15px; text-align: left; padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">{{msg}}</p>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div align=\"center\" style=\"max-width: 250px;\">\n\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"deleteMsg()\" style=\"max-width: 50%;\">Διαγραφή</button>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div id=\"msg\" align=\"center\" *ngIf=\"showMsg\" class=\"form-group\">\n\t\t\t\t\t<h4>Απάντηση:</h4> \n\t\t\t\t\t<div align=\"center\">\n\t\t\t\t\t\t<textarea rows=\"5\" cols=\"50\" class=\"form-control\" style=\"height: 100px; max-width: 380px;\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div align=\"center\" style=\"max-width: 250px;\">\n\t\t\t\t\t\t<button class=\"btn btn-info\" (click)=\"sendAnswer()\" style=\"max-width: 50%;\">Αποστολή</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/adminpage/adminpage.component.scss":
/*!****************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\n  border: 2px solid black;\n}\n\ntr {\n\tbackground-color: grey;\n}\n\ntr:hover {\n          background-color: #E0FFFF;\n        }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYWdlL3N0Y3NzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFDQTtVQUNVLHlCQUF5QjtRQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFnZS9hZG1pbnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbnRyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cbnRyOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBGRkZGO1xuICAgICAgICB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/adminpage/adminpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.ts ***!
  \**************************************************/
/*! exports provided: AdminpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpageComponent", function() { return AdminpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminpageComponent = /** @class */ (function () {
    function AdminpageComponent(route, http) {
        this.route = route;
        this.http = http;
        this.model = JSON.parse(localStorage.getItem("currentUser"));
        this.showMsg = false;
        this.products = [];
        this.users = [];
        this.show = [];
        this.prices = [];
        this.shops = [];
        this.withdrawnProducts = [];
        this.withdrawnPrices = [];
        this.messages = [];
        this.start = 0;
        this.count = 20;
        this.c = 1;
    }
    //OPTION 0 = SHOW ALL PRODUCTS
    //OPTION 1 = SHOW ALL PRICES
    //OPTION 2 = SHOW ALL SHOPS
    //OPTION 3 = SHOW ALL WITHDRAWN PRODUCTS
    //OPTION 4 = SHOW ALL WITHDRAWN PRICES
    //OPTION 5 = SHOW ALL USERS
    //OPTION 6 = SHOW ALL MESSAGES
    AdminpageComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        this.ip = location.hostname;
        for (var i = 0; i < 7; i++) {
            this.show[i] = false;
        }
    };
    AdminpageComponent.prototype.showAllProducts = function (start, count, c) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllProducts");
        this.products = [];
        this.showMsg = false;
        for (var i = 0; i < 7; i++) {
            if (i != 0)
                this.show[i] = false;
        }
        if (this.show[0] == false)
            this.show[0] = true;
        else
            this.show[0] = false;
        this.start = start;
        this.count = count;
        this.c = c;
        this.http.get('http://' + this.ip + ':8765/observatory/api/products?start=' + start + "&count=" + count)
            .subscribe(function (response) {
            _this.response = response;
            for (var i = 0; i < _this.response.products.length; i++) {
                _this.products[i] = _this.response.products[i];
                //console.log(this.products[i]);
            }
            if (_this.start == 0) {
                _this.prev = false;
            }
            else {
                _this.prev = true;
            }
            _this.pageNum(_this.response.total);
            //  console.log(this.response.total);
            // console.log(start + count);
            if (_this.response.total > start + count) {
                _this.next = true;
            }
            else
                _this.next = false;
        });
    };
    AdminpageComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/products/' + id)
            .subscribe();
        setTimeout(function () { _this.show[0] = false; _this.showAllProducts(_this.start, _this.count, _this.c); }, 300); //delay to refresh API
        // console.log("Product with id = " + id + " deleted!");
    };
    AdminpageComponent.prototype.showAllPrices = function (start, count, c) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllPrices");
        this.showMsg = false;
        this.prices = [];
        for (var i = 0; i < 7; i++) {
            if (i != 1)
                this.show[i] = false;
        }
        if (this.show[1] == false)
            this.show[1] = true;
        else
            this.show[1] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/prices?dateFrom=2000-01-01&dateTo=2030-12-12&start=' + start + "&count=" + count)
            .subscribe(function (response) {
            _this.response = response;
            //console.log(this.response);
            for (var i = 0; i < _this.response.pricesOut.length; i++) {
                _this.prices[i] = _this.response.pricesOut[i];
                //console.log(this.prices[i]);
            }
            _this.start = start;
            _this.count = count;
            _this.c = c;
            _this.pageNum(_this.response.total);
            if (_this.start == 0) {
                _this.prev = false;
            }
            else {
                _this.prev = true;
            }
            //  console.log(this.response.total);
            //  console.log(start + count);
            if (_this.response.total > start + count) {
                _this.next = true;
            }
            else
                _this.next = false;
        });
    };
    AdminpageComponent.prototype.deletePrice = function (id) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/prices/' + id)
            .subscribe();
        setTimeout(function () { location.reload(); }, 10);
        setTimeout(function () { _this.show[1] = false; _this.showAllPrices(_this.start, _this.count, _this.c); }, 300); //delay to refresh API
        //  console.log("Price with id = " + id + " deleted!");
    };
    AdminpageComponent.prototype.showAllShops = function (start, count, c) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllShops");
        this.showMsg = false;
        this.shops = [];
        for (var i = 0; i < 7; i++) {
            if (i != 2)
                this.show[i] = false;
        }
        if (this.show[2] == false)
            this.show[2] = true;
        else
            this.show[2] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/shops?start=' + start + "&count=" + count)
            .subscribe(function (response) {
            _this.response = response;
            //console.log(this.response);
            for (var i = 0; i < _this.response.shops.length; i++) {
                _this.shops[i] = _this.response.shops[i];
                //console.log(this.shops[i]);
            }
            _this.start = start;
            _this.count = count;
            _this.c = c;
            _this.pageNum(_this.response.total);
            if (_this.start == 0) {
                _this.prev = false;
            }
            else {
                _this.prev = true;
            }
            //  console.log(this.response.total);
            //   console.log(start + count);
            if (_this.response.total > start + count) {
                _this.next = true;
            }
            else
                _this.next = false;
        });
    };
    AdminpageComponent.prototype.deleteShop = function (id) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/shops/' + id)
            .subscribe();
        setTimeout(function () { _this.show[2] = false; _this.showAllShops(_this.start, _this.count, _this.c); }, 300); //delay to refresh API
        //	console.log("Shop with id = " + id + " deleted!");
    };
    AdminpageComponent.prototype.showAllProductsWithdrawn = function (start, count, c) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllProductsWithdrawn");
        this.showMsg = false;
        this.withdrawnProducts = [];
        for (var i = 0; i < 7; i++) {
            if (i != 3)
                this.show[i] = false;
        }
        if (this.show[3] == false)
            this.show[3] = true;
        else
            this.show[3] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/products?status=WITHDRAWN&start=' + start + '&count=' + count)
            .subscribe(function (response) {
            _this.response = response;
            for (var i = 0; i < _this.response.products.length; i++) {
                _this.withdrawnProducts[i] = _this.response.products[i];
            }
            _this.start = start;
            _this.count = count;
            _this.c = c;
            _this.pageNum(_this.response.total);
            if (_this.start == 0) {
                _this.prev = false;
            }
            else {
                _this.prev = true;
            }
            //  console.log(this.response.total);
            //  console.log(start + count);
            if (_this.response.total > start + count) {
                _this.next = true;
            }
            else
                _this.next = false;
        });
    };
    AdminpageComponent.prototype.deleteProductW = function (id) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/products/' + id)
            .subscribe();
        setTimeout(function () { _this.show[3] = false; _this.showAllProductsWithdrawn(_this.start, _this.count, _this.c); }, 300); //delay to refresh API
        //  console.log("Product with id = " + id + " deleted!");
    };
    AdminpageComponent.prototype.showAllPricesWithdrawn = function (start, count, c) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllPricesWithdrawn");
        this.showMsg = false;
        this.withdrawnPrices = [];
        for (var i = 0; i < 7; i++) {
            if (i != 4)
                this.show[i] = false;
        }
        if (this.show[4] == false)
            this.show[4] = true;
        else
            this.show[4] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/prices?status=WITHDRAWN&start=' + start + '&count=' + count)
            .subscribe(function (response) {
            _this.response = response;
            for (var i = 0; i < _this.response.pricesOut.length; i++) {
                _this.withdrawnPrices[i] = _this.response.pricesOut[i];
            }
            _this.start = start;
            _this.count = count;
            _this.c = c;
            _this.pageNum(_this.response.total);
            if (_this.start == 0) {
                _this.prev = false;
            }
            else {
                _this.prev = true;
            }
            //    console.log(this.response.total);
            //  console.log(start + count);
            if (_this.response.total > start + count) {
                _this.next = true;
            }
            else
                _this.next = false;
        });
    };
    AdminpageComponent.prototype.deletePriceW = function (idPrW) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/prices/' + idPrW)
            .subscribe();
        // setTimeout(function () { location.reload(); }, 10);
        setTimeout(function () { _this.show[4] = false; _this.showAllPricesWithdrawn(_this.start, _this.count, _this.c); }, 300); //delay to refresh API
        //  console.log("Price with id = " + idPrW + " deleted!");
    };
    AdminpageComponent.prototype.showAllUsers = function () {
        var _this = this;
        window.scroll(0, 0);
        // console.log("showAllUsers");
        this.showMsg = false;
        for (var i = 0; i < 7; i++) {
            if (i != 5)
                this.show[i] = false;
        }
        if (this.show[5] == false)
            this.show[5] = true;
        else
            this.show[5] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/user')
            .subscribe(function (response) {
            _this.response = response;
            //    console.log(this.response);
            for (var i = 0; i < _this.response.length; i++) {
                _this.users[i] = _this.response[i];
                //    console.log(this.users[i]);
            }
        });
    };
    AdminpageComponent.prototype.updateUser = function (id, adm) {
        var _this = this;
        //console.log(id + " " + adm);
        this.http.patch('http://' + this.ip + ':8765/observatory/api/user/' + id, { "admin": adm })
            .subscribe(function (response) {
            _this.response = response;
            //console.log(this.response);
        });
    };
    AdminpageComponent.prototype.deleteUser = function (id) {
        this.http.delete('http://' + this.ip + ':8765/observatory/api/user/' + id)
            .subscribe(function () {
            //this.response= response;
            setTimeout(function () { location.reload(); }, 10);
            //setTimeout( () => { this.showAllUsers() }, 800 ); //delay to refresh API
            //console.log(this.response);
        });
    };
    AdminpageComponent.prototype.showAllMessages = function () {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllMessages");
        this.showMsg = false;
        for (var i = 0; i < 7; i++) {
            if (i != 6)
                this.show[i] = false;
        }
        if (this.show[6] == false)
            this.show[6] = true;
        else
            this.show[6] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/messages')
            .subscribe(function (response) {
            _this.response = response;
            //console.log(this.response);
            for (var i = 0; i < _this.response.msgs.length; i++) {
                _this.messages[i] = _this.response.msgs[i];
                //console.log(this.messages[i]);
            }
        });
    };
    AdminpageComponent.prototype.showMessage = function (id, message, name, email) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showMessageId");
        this.http.get('http://' + this.ip + ':8765/observatory/api/messages/' + id)
            .subscribe(function (response) {
            _this.response = response;
            //    console.log(this.response);
            _this.msg = _this.response.message;
            _this.msgId = id;
            _this.msgName = name;
            _this.msgEmail = email;
            //    console.log("showMessageId: " + id + " " + this.msg);
            _this.show[6] = false;
            _this.showMsg = true;
        });
    };
    AdminpageComponent.prototype.sendAnswer = function () {
        var _this = this;
        //UPDATE MESSAGE WITH ANSWERED = TRUE
        //		console.log("Answered!");
        setTimeout(function () { _this.showAllMessages(); }, 300); //delay to refresh API	}
    };
    AdminpageComponent.prototype.deleteMsg = function () {
        var _this = this;
        //DELETE MESSAGE
        //const params = new HttpParams().set('_id', this.msgId); //?_id=
        this.http.delete('http://' + this.ip + ':8765/observatory/api/messages/' + this.msgId)
            .subscribe();
        setTimeout(function () { _this.showAllMessages(); }, 300); //delay to refresh API
        //	console.log("Message with id = " + this.msgId + " deleted!");
    };
    AdminpageComponent.prototype.nextPr = function () {
        var _this = this;
        this.c = this.c + 1;
        // console.log(this.next);
        // console.log(this.prev);
        this.start = this.start + this.count;
        setTimeout(function () { _this.show[0] = false; _this.showAllProducts(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.prevPr = function () {
        var _this = this;
        this.c = this.c - 1;
        // console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start - this.count;
        setTimeout(function () { _this.show[0] = false; _this.showAllProducts(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.nextPrice = function () {
        var _this = this;
        this.c = this.c + 1;
        //  console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start + this.count;
        setTimeout(function () { _this.show[1] = false; _this.showAllPrices(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.prevPrice = function () {
        var _this = this;
        this.c = this.c - 1;
        // console.log(this.next);
        // console.log(this.prev);
        this.start = this.start - this.count;
        setTimeout(function () { _this.show[1] = false; _this.showAllPrices(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.nextShp = function () {
        var _this = this;
        this.c = this.c + 1;
        // console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start + this.count;
        setTimeout(function () { _this.show[2] = false; _this.showAllShops(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.prevShp = function () {
        var _this = this;
        this.c = this.c - 1;
        //  console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start - this.count;
        setTimeout(function () { _this.show[2] = false; _this.showAllShops(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.nextWithdPr = function () {
        var _this = this;
        this.c = this.c + 1;
        //  console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start + this.count;
        setTimeout(function () { _this.show[3] = false; _this.showAllProductsWithdrawn(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.prevWithdPr = function () {
        var _this = this;
        this.c = this.c - 1;
        // console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start - this.count;
        setTimeout(function () { _this.show[3] = false; _this.showAllProductsWithdrawn(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.nextWithdPrice = function () {
        var _this = this;
        this.c = this.c + 1;
        //  console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start + this.count;
        setTimeout(function () { _this.show[4] = false; _this.showAllPricesWithdrawn(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.prevWithdPrice = function () {
        var _this = this;
        this.c = this.c - 1;
        //  console.log(this.next);
        //   console.log(this.prev);
        this.start = this.start - this.count;
        setTimeout(function () { _this.show[4] = false; _this.showAllPricesWithdrawn(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.pageNum = function (total) {
        this.pgNum = Math.ceil(total / this.count);
    };
    AdminpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminpage',
            template: __webpack_require__(/*! ./adminpage.component.html */ "./src/app/adminpage/adminpage.component.html"),
            styles: [__webpack_require__(/*! ./adminpage.component.scss */ "./src/app/adminpage/adminpage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminpageComponent);
    return AdminpageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _contactresponse_contactresponse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contactresponse/contactresponse.component */ "./src/app/contactresponse/contactresponse.component.ts");
/* harmony import */ var _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchresults/searchresults.component */ "./src/app/searchresults/searchresults.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _addproducts_addproducts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addproducts/addproducts.component */ "./src/app/addproducts/addproducts.component.ts");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-product/new-product.component */ "./src/app/new-product/new-product.component.ts");
/* harmony import */ var _new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./new-shop/new-shop.component */ "./src/app/new-shop/new-shop.component.ts");
/* harmony import */ var _priceresponse_priceresponse_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./priceresponse/priceresponse.component */ "./src/app/priceresponse/priceresponse.component.ts");
/* harmony import */ var _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./adminpage/adminpage.component */ "./src/app/adminpage/adminpage.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'contactresp', component: _contactresponse_contactresponse_component__WEBPACK_IMPORTED_MODULE_8__["ContactresponseComponent"] },
    { path: 'searchresults', component: _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"] },
    { path: 'searchresults/:searchAttribute', component: _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"] },
    { path: 'price/:_id', component: _price_price_component__WEBPACK_IMPORTED_MODULE_11__["PriceComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'addproducts', component: _addproducts_addproducts_component__WEBPACK_IMPORTED_MODULE_13__["AddproductsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'new-product', component: _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_14__["NewProductComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'new-shop', component: _new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_15__["NewShopComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'priceresponse', component: _priceresponse_priceresponse_component__WEBPACK_IMPORTED_MODULE_16__["PriceresponseComponent"] },
    { path: 'adminpage', component: _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_17__["AdminpageComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]], data: { admin: [true] } },
    { path: 'priceresponse/:response', component: _priceresponse_priceresponse_component__WEBPACK_IMPORTED_MODULE_16__["PriceresponseComponent"] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__["NotfoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_17__["AdminpageComponent"], _price_price_component__WEBPACK_IMPORTED_MODULE_11__["PriceComponent"], _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_9__["SearchresultsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__["NotfoundComponent"], _contactresponse_contactresponse_component__WEBPACK_IMPORTED_MODULE_8__["ContactresponseComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"]];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body style=\"background-color: #ece9dc;\">\n\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<br>\n<app-footer></app-footer>\n\n</body>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'ObservatoryFrontEnd';
        this.minDate = new Date("05/07/2017");
        this.maxDate = new Date("05/27/2017");
        this.value = new Date("05/16/2017");
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    Object.defineProperty(AppComponent.prototype, "isAdmin", {
        get: function () {
            return this.currentUser && this.currentUser.admin;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var uix_mat_number_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uix-mat-number-spinner */ "./node_modules/uix-mat-number-spinner/fesm5/uix-mat-number-spinner.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _maintext_maintext_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./maintext/maintext.component */ "./src/app/maintext/maintext.component.ts");
/* harmony import */ var _mainsearch_mainsearch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mainsearch/mainsearch.component */ "./src/app/mainsearch/mainsearch.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _addproducts_addproducts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./addproducts/addproducts.component */ "./src/app/addproducts/addproducts.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _priceresponse_priceresponse_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./priceresponse/priceresponse.component */ "./src/app/priceresponse/priceresponse.component.ts");
/* harmony import */ var _confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./confirm-equal-validator.directive */ "./src/app/confirm-equal-validator.directive.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./adminpage/adminpage.component */ "./src/app/adminpage/adminpage.component.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _searchfilters_searchfilters_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./searchfilters/searchfilters.component */ "./src/app/searchfilters/searchfilters.component.ts");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./new-product/new-product.component */ "./src/app/new-product/new-product.component.ts");
/* harmony import */ var _new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./new-shop/new-shop.component */ "./src/app/new-shop/new-shop.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./searchresults/searchresults.component */ "./src/app/searchresults/searchresults.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HttpClientModule } from '@angular/common/http';






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _maintext_maintext_component__WEBPACK_IMPORTED_MODULE_14__["MaintextComponent"],
                _mainsearch_mainsearch_component__WEBPACK_IMPORTED_MODULE_15__["MainsearchComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["routingComponents"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
                _addproducts_addproducts_component__WEBPACK_IMPORTED_MODULE_19__["AddproductsComponent"],
                _priceresponse_priceresponse_component__WEBPACK_IMPORTED_MODULE_21__["PriceresponseComponent"],
                _confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_22__["ConfirmEqualValidatorDirective"],
                _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_24__["AdminpageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_27__["SearchbarComponent"],
                _searchfilters_searchfilters_component__WEBPACK_IMPORTED_MODULE_28__["SearchfiltersComponent"],
                _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_29__["NewProductComponent"],
                _new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_30__["NewShopComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_32__["SearchComponent"],
                _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_33__["SearchresultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_6__["DatePickerModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__["TextMaskModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                uix_mat_number_spinner__WEBPACK_IMPORTED_MODULE_8__["UixMatNumberSpinnerModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_9__["Ng5SliderModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_23__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCxthBcp0Dzs9cNbJ6nKe-S1EOhxW77PNw'
                })
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_31__["DataService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_25__["JwtInterceptor"], multi: true } /*,
                      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }*/
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirm-equal-validator.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/confirm-equal-validator.directive.ts ***!
  \******************************************************/
/*! exports provided: ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    var ConfirmEqualValidatorDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"height: 100vh;\">\n      <p style=\"font-size: 25px; font-weight: bold; color: #fd9501\">Επικοινωνήστε μαζί μας!</p>\n<form style=\"width: 400px; text-align: center; padding: 10px;\" >\n\n<form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n<label for=\"fullname\">Ονοματεπώνυμο</label>\n<div class=\"form-group\" [class.has-error]=\"fullname.invalid && (fullname.dirty || fullname.touched)\">\n    <input id=\"fullname\" type=\"text\" name=\"fullname\" placeholder=\"Ονοματεπώνυμο\" class=\"form-control \"\n        [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\" required fullname  />\n    <div *ngIf=\"fullname.invalid && (fullname.dirty || fullname.touched)\" class=\"help-block\">   \n        <span class=\"help-block\" \n         *ngIf=\"fullname.errors.required && fullname.touched\">Το πεδίο Ονοματεπώνυμο είναι υποχρεωτικό</span>\n    </div>\n</div>\n\n<label for=\"subject\">Θέμα</label>\n<div class=\"form-group\" [class.has-error]=\"subject.invalid && (subject.dirty || subject.touched)\">\n  <input id=\"subject\" type=\"text\" name=\"subject\" placeholder=\"Θέμα\" class=\"form-control \"\n  [(ngModel)]=\"model.subject\" #subject=\"ngModel\" required subject  />\n    <div *ngIf=\"subject.invalid && (subject.dirty || subject.touched)\" class=\"help-block\">   \n      <span class=\"help-block\" \n      *ngIf=\"subject.errors.required && subject.touched\">Το πεδίο Θέμα είναι υποχρεωτικό</span>\n    </div>\n</div>\n\n<label for=\"Email\">Email</label>\n<div class=\"form-group\" [class.has-error]=\"email.invalid &&(email.dirty || email.touched)\">\n  <input id=\"email\" type=\"text\" name=\"email\" placeholder=\"name@example.com\" class=\"form-control \"\n  [(ngModel)]=\"model.email\" #email=\"ngModel\" required email  />\n   <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"help-block\">   \n<span class=\"help-block\" \n   *ngIf=\"email.errors.required && email.touched\">Το πεδίο email είναι υποχρεωτικό</span>\n<span class=\"help-block\"\n*ngIf=\"email.errors.email\">Λανθασμένη διεύθυνση Email</span>\n</div>\n</div>\n\n<label for=\"message\">Πώς μπορύμε να βοηθήσουμε;</label>\n<div class=\"form-group\">\n  <textarea class=\"form-control\" id=\"message\" placeholder=\"Το μήνυμά σου...\" name=\"message\" rows=\"9\"[(ngModel)]=\"model.message\" #message=\"ngModel\" required maxlength=\"300\" [ngClass]=\"{ 'is-invalid': f.submitted && message.invalid }\" required message></textarea>\n  <div id=\"the-count\" align=\"right\" style=\"width: 100%; height: 5px; \">\n      <span id=\"current\">{{counter(message.value)}} </span>\n      <span id=\"maximum\">/300</span>\n    </div>\n  <div *ngIf=\"message.invalid && (message.dirty || message.touched)\" class=\"help-block\">  \n    <span class=\"help-block\" style=\"color:brown\"\n      *ngIf=\"message.errors.required\">Παρακαλώ εισάγετε το μήνυμά σας</span>\n\n  </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.form.valid\">Αποστολή</button>\n  </div>\n\n</form>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(http, router) {
        this.http = http;
        this.router = router;
        this.model = {};
    }
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
        //console.log(this.model.fullname);
        this.http.post("http://" + this.ip + ":8765/observatory/api/messages", this.model)
            .subscribe(function (data) {
            //console.log("POST Request is successful ", data);
            _this.router.navigate(['contactresp']);
        }, function (error) {
            console.log("Error", error);
        });
    };
    ContactComponent.prototype.counter = function (msg) {
        if (msg == null) {
            return 0;
        }
        else {
            return msg.length;
        }
    };
    ContactComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        this.ip = location.hostname;
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contactresponse/contactresponse.component.html":
/*!****************************************************************!*\
  !*** ./src/app/contactresponse/contactresponse.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100vh; text-align: center; padding-top: 50px;\">\n\t<h1 style=\"font-family: arial; font-size: 14px;\">Ευχαριστούμε! Θα επικοινωνησουμε μαζί σας το συντομότερο!</h1>\n\t<button id = \"butt1index\" style=\"font-size: 14px; width: 300px;\" routerLink='/home'>Μεταφερθείτε στην αρχική!</button>\n</div>"

/***/ }),

/***/ "./src/app/contactresponse/contactresponse.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/contactresponse/contactresponse.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2IsMEZBQTBGLENBQUM7O0FBRTNGO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGlCQUFpQjs7QUFFbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7O1FBRVE7WUFDSSxZQUFZO1FBQ2hCO0FBQ1I7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUdBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUdBOztJQUVJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cmVzcG9uc2UvY29udGFjdHJlc3BvbnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXHRjb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGxpZ2h0c2t5Ymx1ZSwgIzg4NmViOCwgIzg4NmViOCAsIGxpZ2h0c2t5Ymx1ZSk7fVxuXG5oMSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXdlaWdodDogYm9sZDtcblxufVxuXG5oM3tcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblxuICAgICAgICAubm9tb2JpbGUge1xuICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICB9XG59XG5cbi5wYXJhZ3JhcGh7XG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMTdweDtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0bWFyZ2luOiAxNXB4O1xuXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5zZWNvbmRhcnlfbG9nb3tcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogMTAlO1xuXHRtaW4td2lkdGg6IDEwMHB4O1xuXHRwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG59XG5cbiNjZW57XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpbXBsZS1mb3Jte1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMTAwcHggMHB4O1xufVxuXG4udGFiLXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuXG59XG4udGFiLWNvbnRlbnR7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNTEwMTk7XG59XG4jcmVnaXN0cmF0aW9ue1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA1MTAxOTtcblx0b3BhY2l0eTogMC45O1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDIwcHggMHB4IDUwcHggMHB4O1xufVxuXG4jcmVnaXN0cmF0aW9uMXtcblx0d2lkdGg6IDEwMCU7XG5cdGNvbG9yOiBibGFjaztcblx0cGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uZmlsdGVyX2J0bntcblx0Ly93aWR0aDogMTVlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmOWI0Mjtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0Ly9mb250LXNpemU6IDE2cHg7XG5cdC8vY29sb3I6IHdoaXRlO1xufVxuI2J1dHRvbntcblx0d2lkdGg6IDI1ZW07XG5cdFx0cGFkZGluZzogMTBweDtcbn1cblxuI2J1dHRvbklucHtcblx0d2lkdGg6IDI1JTtcblx0aGVpZ2h0OiAxMDBweDtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jYnV0e1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbi5pbmZve1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmYmI3Zjtcbn1cblxuI2J1dHR7XG5cdHdpZHRoOiAyNSU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBjNjk5Njtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG4jYnV0dDF7XG5cdHdpZHRoOiAyMCU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBjNjk5Njtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG4jdGl0bHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDI2cHg7XG59XG5cbiN0aXRsMXtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cblxuI2J1dHQxaW5kZXh7XG5cdHdpZHRoOiAxMGVtO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YjQyO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ly9tYXJnaW46IDEwcHggYXV0bztcblx0Ly9kaXNwbGF5OiBibG9jaztcbn1cblxuXG4jbWFwcFxue1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q4NTNGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjQ0Q4NTNGO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4OyAgICAgIFxufVxuLm5hdi1saW5rIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0NEODUzRiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDNweCBzb2xpZCAjQ0Q4NTNGICFpbXBvcnRhbnQ7ICAgICAgXG59XG4ubmF2LXRhYnN7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contactresponse/contactresponse.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/contactresponse/contactresponse.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactresponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactresponseComponent", function() { return ContactresponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactresponseComponent = /** @class */ (function () {
    function ContactresponseComponent() {
    }
    ContactresponseComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    ContactresponseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactresponse',
            template: __webpack_require__(/*! ./contactresponse.component.html */ "./src/app/contactresponse/contactresponse.component.html"),
            styles: [__webpack_require__(/*! ./contactresponse.component.scss */ "./src/app/contactresponse/contactresponse.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactresponseComponent);
    return ContactresponseComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.querySource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            start: 0,
            count: 20,
            sort_field: "price",
            sorting: "ASC",
            distance: null,
            latitude: null,
            longitude: null,
            date_from: null,
            date_to: null,
            tags: null,
            product: null
        });
        this.currentQuery = this.querySource.asObservable();
    }
    DataService.prototype.changeQuery = function (query) {
        this.querySource.next(query);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer style=\"position: relative;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.5rem;\n  background-color: black;\n  color: grey;\n  text-align: center;\">\n\n<div \nstyle=\"text-align: center;\"><a routerLink=\"/home\" routerLinkActive = \"active\"><span class = \"Footer_inner_right\"></span>Αρχική</a>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n\n\n<a style=\"text-align: center;\" data-toggle=\"collapse\" data-target=\"#navHeaderCollapse\"> <a routerLink=\"/about\"  routerLinkActive = \"active\"><span class = \"Footer_inner_right\"></span>Σχετικά</a></a>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n\n\n<a style=\"text-align: center\" data-toggle=\"collapse\" data-target=\"#navHeaderCollapse\"> <a routerLink=\"/contact\"  routerLinkActive = \"active\"><span class = \"Footer_inner_right\"></span>Επικοινωνία</a></a>\n<div class=\"divider\"></div>\n</div>\n<br>\n\n<div style=\"text-align: center\" class=\"footer-copyright text-center py-3\">Copyright © 2019 <a routerLink= \"/home\"> Segmentation Folks. </a>All rights reserved\n</div>\n\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Footer_inner_left {\n  width: 49%;\n  Float: left;\n  display: inline; }\n\n.Footer_inner_right {\n  width: 49%;\n  Float: right;\n  display: inline; }\n\n.Footer_inner_center {\n  width: 49%;\n  Float: right;\n  display: inline; }\n\n.divider {\n  width: 5px;\n  height: 5px;\n  display: inline-block; }\n\na {\n  color: gray;\n  text-decoration: none; }\n\na:hover {\n  color: whitesmoke;\n  text-decoration: none;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvdWFuZHI3L0RvY3VtZW50cy9HaXRIdWIvdGV4bm9sb2dpYV9sb2dpc21pa291L09ic2VydmF0b3J5RnJvbnRFbmQvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFjLEVBQUE7O0FBR2Q7RUFDQSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWMsRUFBQTs7QUFHZDtFQUNBLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBYyxFQUFBOztBQUdkO0VBQ0ksVUFBUztFQUNULFdBQVU7RUFDVixxQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBR3pCO0VBRUssaUJBQWlCO0VBQ2pCLHFCQUFvQjtFQUNwQixlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkZvb3Rlcl9pbm5lcl9sZWZ0e1xud2lkdGg6IDQ5JTtcbkZsb2F0OiBsZWZ0O1xuZGlzcGxheTppbmxpbmU7XG59XG5cbi5Gb290ZXJfaW5uZXJfcmlnaHR7XG53aWR0aDogNDklO1xuRmxvYXQ6IHJpZ2h0O1xuZGlzcGxheTppbmxpbmU7XG59XG5cbi5Gb290ZXJfaW5uZXJfY2VudGVye1xud2lkdGg6IDQ5JTtcbkZsb2F0OiByaWdodDtcbmRpc3BsYXk6aW5saW5lO1xufVxuXG4uZGl2aWRlcntcbiAgICB3aWR0aDo1cHg7XG4gICAgaGVpZ2h0OjVweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cbiBcbmEge1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciBcbntcbiAgICAgY29sb3I6IHdoaXRlc21va2U7IFxuICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTsgXG4gICAgIGN1cnNvcjpwb2ludGVyOyAgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mainsearch></app-mainsearch>\n<app-maintext></app-maintext>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"height: 100vh;\">\n\n<!-- Default form register -->\n<form class=\"text-center border border-light p-5\" style=\"padding: 10px; width: 400px;\">\n    <!--Header-->\n    <p style=\"font-size: 25px; font-weight: bold;\">Σύνδεση</p>\n\n<form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n\n <!-- Username -->\n\n\n<div class=\"form-group\" [class.has-error]=\"username.invalid && (username.dirty || username.touched)\">\n     <input id=\"username\" placeholder=\"Ψευδώνυμο\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required minlength=\"6\" [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\" required username />\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"help-block\">\n        <span class=\"help-block\"\n         *ngIf=\"username.errors.required\">Username is required</span>\n        <span class=\"help-block\"\n         *ngIf=\"username.errors.minlength\">Username must be at least 6 characters</span>\n      </div>\n</div>\n\n <!--password-->\n<div class=\"form-group\" [class.has-error]=\"password.invalid && (password.dirty || password.touched)\">\n     <input type=\"password\" id=\"password\" placeholder=\"Kωδικός Πρόσβασης\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required minlength=\"6\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required password />\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"help-block\">\n        <span class=\"help-block\"\n         *ngIf=\"password.errors.required\">Password is required</span>\n        <span class=\"help-block\"\n         *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</span>\n      </div>\n</div>\n<div *ngIf=\"nomatch\" class=\"help-block\">\n    <span class=\"help-block\" style=\"color:#f44336\">Username and Password don't match</span>\n\n</div>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.form.pristine || f.form.invalid\">Σύνδεση</button>\n  <br><br>\n   <label for=\"newAcount\" style=\"padding: 4px;\">Δεν έχετε λογαριασμό;</label>\n   <button type=\"submit\" class=\"btn btn-primary\" routerLink=\"/register\" routerLinkActive = \"active\">Δημιουργήστε τώρα!</button>\n\n</form>\n\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, http) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.http = http;
        this.model = {};
        this.error = '';
        this.nomatch = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var username = this.model.username;
        var password = this.model.password;
        this.http.post("http://localhost:8765/observatory/api/login", { username: username, password: password })
            .subscribe(function (token) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-observatory-auth': token.token
            });
            _this.http.get("http://localhost:8765/observatory/api/me", { headers: headers })
                .subscribe(function (user) {
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    _this.authenticationService.currentUserSubject.next(user);
                    _this.router.navigate([_this.returnUrl]);
                }
            });
        }, function (error) {
            console.log("error", error);
            _this.nomatch = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainsearch/mainsearch.component.html":
/*!******************************************************!*\
  !*** ./src/app/mainsearch/mainsearch.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"height: 100vh;\">\n\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<img src=\"../../assets/logo.png\" class=\"center\">\n\t<form id=\"search\">\n\t\t<p style=\"text-align: center;\">\n\t\t<input type=\"text\" id=\"button\" placeholder=\"Αναζήτηση προϊόντος\" [(ngModel)]=\"searchAttribute\" name=\"searchAttribute\"\n\t\tstyle=\"  border-radius: 10px;\">\n\t\t<button type=\"button\" id=\"butt1index\" (click)=\"search(searchAttribute)\" style=\"  border-radius: 10px;\"> Αναζήτηση</button>\n\t\t</p>\n\t\t\n\t<br>\n\t<br>\n\n\t</form>\n\t</div>\n\t<div class=\"row\">\n\t\t<section>\n\n\t\t\t<table style=\"width: 75%; min-width: 400px;\" height=\"auto\" bgcolor=\"oldlace\" align=\"center\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td align=\"center\" bgcolor=\"#e38129\" colspan=\"3\" style=\"padding: 10px;\" ><font color=\"white\"><b>Γρήγορη Αναζήτηση</b></font></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td align=\"center\" style=\"padding-bottom: 10px; background-color: #E6E6FA\t; width: 33%;\"><strong><br><a routerLink='/searchresults/Σαπούνια Σαμπουάν'>Σαμπουάν - Σαπούνια</a></strong></td>\n\t\t\t\t\t\t<td align=\"center\" style=\"padding-bottom: 10px; background-color: #FFDAB9; width: 33%;\"><strong><br><a routerLink='/searchresults/Στόμα'>Στοματική Υγιεινή</a></strong></td>\n\t\t\t\t\t\t<td align=\"center\" style=\"padding-bottom: 10px; background-color: #E0FFFF; width: 33%;\"><strong><br><a routerLink='/searchresults/Αποσμητικό Άρωμα'>Άλλα Προϊόντα</a></strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td align=\"center\" style=\"background-color: #E6E6FA;\"><img src=\"../../assets/s4.jpg\" width=\"130px\" height=\"110px\" style=\"border-radius: 20%; \"></td>\n\t\t\t\t\t\t<td align=\"center\" style=\"background-color: #FFDAB9;\"><img src=\"../../assets/s3.jpg\" width=\"130px\" height=\"110px\" style=\"border-radius: 20%;\"></td>\n\t\t\t\t\t\t<td align=\"center\" style=\"background-color: #E0FFFF;\"><img src=\"../../assets/s5.jpg\" width=\"130px\" height=\"110px\" style=\"border-radius: 20%;\"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td align=\"center\" style=\"background-color: #E6E6FA;\">\n\t\t\t\t\t\t\t<p style=\"text-align: center;\"><a routerLink='/searchresults/Σαπούνια'>Σαπούνια</a><p>\n\t\t\t\t\t\t\t<p style=\"text-align: center;\"><a routerLink='/searchresults/Σαμπουάν'>Σαμπουάν</a><p>\n\t\t\t\t\t\t</td >\n\t\t\t\t\t\t<td align=\"center\" style=\"background-color: #FFDAB9;\">\n\t\t\t\t\t\t\t<p style=\"text-align: center;\"><a routerLink='/searchresults/Οδοντόκρεμα'>Οδοντόκρεμες</a></p>\n\t\t\t\t\t\t\t<p style=\"text-align: center;\"><a routerLink='/searchresults/Οδοντόβουρτσα'>Οδοντόβουρτσες</a></p>\n\t\t\t\t\t\t\t<p style=\"text-align: center;\"><a routerLink='/searchresults/Διαλύματα'>Διαλύματα</a></p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td align=\"center\" style=\"background-color: #E0FFFF;\">\n\t\t\t\t\t\t\t<p style=\"text-align: center;\"><a routerLink='/searchresults/Αποσμητικά'>Αποσμητικά</a></p>\n\t\t\t\t\t\t\t<p style=\"text-align: center;\"><a routerLink='/searchresults/Αρώματα'>Αρώματα</a></p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\t\n\n\t\t\t</section>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/mainsearch/mainsearch.component.scss":
/*!******************************************************!*\
  !*** ./src/app/mainsearch/mainsearch.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2IsMEZBQTBGLENBQUM7O0FBRTNGO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGlCQUFpQjs7QUFFbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7O1FBRVE7WUFDSSxZQUFZO1FBQ2hCO0FBQ1I7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUdBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUdBOztJQUVJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tYWluc2VhcmNoL21haW5zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cdGNvbG9yOiBibGFjaztcbmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbGlnaHRza3libHVlLCAjODg2ZWI4LCAjODg2ZWI4ICwgbGlnaHRza3libHVlKTt9XG5cbmgxIHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbmgze1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXG4gICAgICAgIC5ub21vYmlsZSB7XG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIH1cbn1cblxuLnBhcmFncmFwaHtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAxN3B4O1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRtYXJnaW46IDE1cHg7XG5cdG1hcmdpbi1yaWdodDogMTVweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLnNlY29uZGFyeV9sb2dve1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiAxMCU7XG5cdG1pbi13aWR0aDogMTAwcHg7XG5cdHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcbn1cblxuI2Nlbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2ltcGxlLWZvcm17XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luOiAxMDBweCAwcHg7XG59XG5cbi50YWItdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG5cbn1cbi50YWItY29udGVudHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA1MTAxOTtcbn1cbiNyZWdpc3RyYXRpb257XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDUxMDE5O1xuXHRvcGFjaXR5OiAwLjk7XG5cdGNvbG9yOiBibGFjaztcblx0cGFkZGluZzogMjBweCAwcHggNTBweCAwcHg7XG59XG5cbiNyZWdpc3RyYXRpb24xe1xuXHR3aWR0aDogMTAwJTtcblx0Y29sb3I6IGJsYWNrO1xuXHRwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5maWx0ZXJfYnRue1xuXHQvL3dpZHRoOiAxNWVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YjQyO1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHQvL2ZvbnQtc2l6ZTogMTZweDtcblx0Ly9jb2xvcjogd2hpdGU7XG59XG4jYnV0dG9ue1xuXHR3aWR0aDogMjVlbTtcblx0XHRwYWRkaW5nOiAxMHB4O1xufVxuXG4jYnV0dG9uSW5we1xuXHR3aWR0aDogMjUlO1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNidXR7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuLmluZm97XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjdmO1xufVxuXG4jYnV0dHtcblx0d2lkdGg6IDI1JTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGM2OTk2O1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbiNidXR0MXtcblx0d2lkdGg6IDIwJTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGM2OTk2O1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbiN0aXRse1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMjZweDtcbn1cblxuI3RpdGwxe1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuXG4jYnV0dDFpbmRleHtcblx0d2lkdGg6IDEwZW07XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjliNDI7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6IHdoaXRlO1xuXHQvL21hcmdpbjogMTBweCBhdXRvO1xuXHQvL2Rpc3BsYXk6IGJsb2NrO1xufVxuXG5cbiNtYXBwXG57XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRDg1M0YgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNDRDg1M0Y7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7ICAgICAgXG59XG4ubmF2LWxpbmsge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQ0Q4NTNGICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNDRDg1M0YgIWltcG9ydGFudDsgICAgICBcbn1cbi5uYXYtdGFic3tcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mainsearch/mainsearch.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mainsearch/mainsearch.component.ts ***!
  \****************************************************/
/*! exports provided: MainsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainsearchComponent", function() { return MainsearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainsearchComponent = /** @class */ (function () {
    function MainsearchComponent(http, router) {
        this.http = http;
        this.router = router;
        this.searchAttribute = "";
    }
    MainsearchComponent.prototype.ngOnInit = function () {
    };
    MainsearchComponent.prototype.search = function (searchAttribute) {
        if (this.searchAttribute == "") {
            window.alert("Σφάλμα Αναζήτησης! Δοκιμάστε ξανά!");
        }
        /* else {
      this.http.get('http://localhost:8765/observatory/api/products/'+ this.searchAttribute)
      //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
      .subscribe((response) => {
          this.response = response;
  
          console.log(this.response);
          console.log(this.response.name);
          console.log(this.response.description);
          //window.alert(this.response.name);
  
  
  
      })
      
      */
        else
            this.router.navigate(['/searchresults/', searchAttribute]);
    };
    MainsearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainsearch',
            template: __webpack_require__(/*! ./mainsearch.component.html */ "./src/app/mainsearch/mainsearch.component.html"),
            styles: [__webpack_require__(/*! ./mainsearch.component.scss */ "./src/app/mainsearch/mainsearch.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainsearchComponent);
    return MainsearchComponent;
}());



/***/ }),

/***/ "./src/app/maintext/maintext.component.html":
/*!**************************************************!*\
  !*** ./src/app/maintext/maintext.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"height: 40vh;\">\n\n<br>\n<div class=\"container info\">\n\n<ngb-tabset type=\"pills\" >\n  <ngb-tab>\n  <ng-template ngbTabTitle><span class=\"tab-title\">Τι είναι το crowdsourcing;</span></ng-template>\n    <ng-template ngbTabContent>\n      <p align=\"justify\">Σύμφωνα με τον ορισμό του Λεξικού Oxford English “Πληθοπορισμός είναι μια πρακτική συλλογής πληροφοριών ή υπηρεσιών με εξωτερική ανάθεση καθηκόντων σε μία μεγάλη ομάδα ανθρώπων ή κοινότητας συνήθως μέσω internet και ενίοτε χωρίς ανταμοιβή”. Όπως αναφέρει και η μελέτη της Mia Ridge (2013) ο πληθοπορισμός προσφέρει στους πολιτιστικούς φορείς μία μοναδική ευκαιρία να φέρουν το κοινό τους κοντά στις συλλογές και να προσθέσουν αξία αναθέτοντας στο κοινό συγκεκριμένες εργασίες, όπως δημιουργία ετικέτας (tagging), καταχώρησης γεωχωρικών δεδομένων (geo-location), μεταγραφής (transcription), συλλογής (collection) και ταξινόμησης στοιχείων (classification) και συνεργατικής επιμέλειας των πολιτιστικών συλλογών (co-curation).  Η αξιοποίηση της “σοφίας του πλήθους\" (crowd wisdom) είναι άρρηκτα συνυφασμένη με τα κίνητρα που την ενεργοποιούν. Ως εκ τούτου η δημιουργία μίας \"αλτρουιστικής πρωτοβουλίας\" η οποία προκαλεί τις δεξιότητες του μεμονωμένου ανθρώπου εμπλέκοντάς τον σε ψυχαγωγικές και συμμετοχικές δραστηριότητας είναι ένα σημαντικό κίνητρο που μπορεί να δοθεί.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle><span class=\"tab-title\">Μια καλύτερη εξήγηση;</span></ng-template>\n    <ng-template ngbTabContent>\n      <p align=\"justify\">Βεβαίως! Υποθέστε ότι έχετε ξεμείνει από σαμπουάν. Γνωρίζετε όμως ότι η τιμή του συγκεκριμένου σαμπουάν που παίρνετε, είναι πολύ ψηλή στο κατάστημα που επισκέπτεστε συνήθως και θα επιθυμούσατε μια ενημέρωση σχετικά με το πού θα μπορούσατε να βρείτε το συγκεκριμένο προϊόν φθηνότερα. Εδώ έρχεται και το crowdsourcing! Αντί να ρωτάτε δεξιά και αριστερά, φίλους συγγενείς κτλ για το πού θα μπορούσατε να το βρείτε πιο φθηνά, θα μπορείτε να το κάνετε μέρω του υπολογιστή σας ή του κινητόυ τηλεφώνου. Τα δεδομένα καταχωρούνται από άλλους χρήστες του συστήματος μας, παρέχοντας όσο το δυνατόν καλύτερη εξυπηρέτηση στους άλλους χρήστες. Οι τιμές ανανεώνονται όταν κάποιος χρήστης επιστευθεί ένα κατάστημα, παρατηρήσει ότι η τιμή ενός προϊόντος είναι χαμηλότερη από αυτήν που υπάρχει στο σύστημα και αποφασίσει να την καταχωρήσει, βοηθώντας τους χρήστες της εφαρμογής να έχουν άμεσα διαθέσιμες τις πληροφορίες που χρειάζονται για κάποιο προϊόν.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n  <ng-template ngbTabTitle><span class=\"tab-title\">Ποιο είναι το κόστος;</span></ng-template>\n    <ng-template ngbTabContent>\n      <p>Η υπηρεσία μας είναι απολύτως δωρεάν για όλους!</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n  <ng-template ngbTabTitle><span class=\"tab-title\">Γίνε Εθελοντής!</span></ng-template>\n    <ng-template ngbTabContent>\n      <p align=\"justify\">Βοήθησε και εσύ στη συλλογή των δεδομένων βοηθώντας και εσύ με τη σειρά σου τους άλλους χρήστες! Η λειτουργία της εφαρμογής αυτής εξαρτάται καθαρά από εσας! Όσο περισσότεροι βοηθάνε στην καταγραφή και ανανέωση των τιμών των προϊόντων, τόσο πιο αξιόπιστη και λειτουργική θα είναι η εφαρμογή.<br>\n      Είναι πολύ απλό. Απλά πατήστε στον πιο κάτω σύνδεσμο, κάντε εγγραφή δίνοντας τα στοιχεία σας και είστε έτοιμοι να εξερευνήσετε τα προϊόντα που χρειάζεστε στις καλύτερες τιμές!<br>\n\n      Με την εγγραφή σας, μπορείτε να δείτε και την έκπληξη που επιφυλάσσουμε στους εγγεγραμμένους χρήστες! Τι περιμένετε;</p>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n</div>\n"

/***/ }),

/***/ "./src/app/maintext/maintext.component.scss":
/*!**************************************************!*\
  !*** ./src/app/maintext/maintext.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2IsMEZBQTBGLENBQUM7O0FBRTNGO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGlCQUFpQjs7QUFFbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7O1FBRVE7WUFDSSxZQUFZO1FBQ2hCO0FBQ1I7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUdBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUdBOztJQUVJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tYWludGV4dC9tYWludGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblx0Y29sb3I6IGJsYWNrO1xuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBsaWdodHNreWJsdWUsICM4ODZlYjgsICM4ODZlYjggLCBsaWdodHNreWJsdWUpO31cblxuaDEge1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuaDN7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cbiAgICAgICAgLm5vbW9iaWxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgfVxufVxuXG4ucGFyYWdyYXBoe1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDE3cHg7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdG1hcmdpbjogMTVweDtcblx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblxufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uc2Vjb25kYXJ5X2xvZ297XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDEwJTtcblx0bWluLXdpZHRoOiAxMDBweDtcblx0cGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4jY2Vue1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaW1wbGUtZm9ybXtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDEwMHB4IDBweDtcbn1cblxuLnRhYi10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcblxufVxuLnRhYi1jb250ZW50e1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDUxMDE5O1xufVxuI3JlZ2lzdHJhdGlvbntcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNTEwMTk7XG5cdG9wYWNpdHk6IDAuOTtcblx0Y29sb3I6IGJsYWNrO1xuXHRwYWRkaW5nOiAyMHB4IDBweCA1MHB4IDBweDtcbn1cblxuI3JlZ2lzdHJhdGlvbjF7XG5cdHdpZHRoOiAxMDAlO1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmZpbHRlcl9idG57XG5cdC8vd2lkdGg6IDE1ZW07XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjliNDI7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdC8vZm9udC1zaXplOiAxNnB4O1xuXHQvL2NvbG9yOiB3aGl0ZTtcbn1cbiNidXR0b257XG5cdHdpZHRoOiAyNWVtO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG59XG5cbiNidXR0b25JbnB7XG5cdHdpZHRoOiAyNSU7XG5cdGhlaWdodDogMTAwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2J1dHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDE4cHg7XG59XG4uaW5mb3tcbmJhY2tncm91bmQtY29sb3I6ICNmZmJiN2Y7XG59XG5cbiNidXR0e1xuXHR3aWR0aDogMjUlO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwYzY5OTY7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2J1dHQxe1xuXHR3aWR0aDogMjAlO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwYzY5OTY7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuI3RpdGx7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAyNnB4O1xufVxuXG4jdGl0bDF7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG5cbiNidXR0MWluZGV4e1xuXHR3aWR0aDogMTBlbTtcblx0cGFkZGluZzogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmOWI0Mjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdC8vbWFyZ2luOiAxMHB4IGF1dG87XG5cdC8vZGlzcGxheTogYmxvY2s7XG59XG5cblxuI21hcHBcbntcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NEODUzRiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0NEODUzRjtcbiAgcGFkZGluZy1ib3R0b206IDJweDsgICAgICBcbn1cbi5uYXYtbGluayB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNDRDg1M0YgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0NEODUzRiAhaW1wb3J0YW50OyAgICAgIFxufVxuLm5hdi10YWJze1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maintext/maintext.component.ts":
/*!************************************************!*\
  !*** ./src/app/maintext/maintext.component.ts ***!
  \************************************************/
/*! exports provided: MaintextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintextComponent", function() { return MaintextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaintextComponent = /** @class */ (function () {
    function MaintextComponent() {
    }
    MaintextComponent.prototype.ngOnInit = function () {
    };
    MaintextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintext',
            template: __webpack_require__(/*! ./maintext.component.html */ "./src/app/maintext/maintext.component.html"),
            styles: [__webpack_require__(/*! ./maintext.component.scss */ "./src/app/maintext/maintext.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MaintextComponent);
    return MaintextComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a routerLink=\"/home\" routerLinkActive = \"active\" class=\"navbar-brand\">Segmentation Folks</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li style=\"text-align: center;\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"> <a routerLink=\"/home\" routerLinkActive = \"active\"><span class=\"glyphicon glyphicon-home\"></span> Αρχική</a></li>\n        <li style=\"text-align: center;\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><a routerLink=\"/about\" routerLinkActive = \"active\"><span class=\"glyphicon glyphicon-eye-open\"></span> Σχετικά</a></li>\n        <li style=\"text-align: center;\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><a routerLink=\"/contact\" routerLinkActive = \"active\"><span class=\"glyphicon glyphicon-envelope\"></span> Επικοινωνία</a></li>\n        <li style=\"text-align: center;\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><a routerLink=\"/addproducts\" routerLinkActive = \"active\"><span class=\"glyphicon glyphicon-plus\"></span> Προσθήκη Προϊόντος</a></li>\n        <li style=\"text-align: center;\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" *ngIf=\"isAdmin\"><a routerLink=\"/adminpage\" routerLinkActive = \"active\"><span class=\"glyphicon glyphicon-lock\"></span> Διαχείριση</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li style=\"text-align: center;\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" *ngIf=\"!isUser\"><a routerLink=\"/login\"  routerLinkActive = \"active\"><span class=\"glyphicon glyphicon-log-in\"></span> Είσοδος</a></li>\n        <li style=\"text-align: center;\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"  *ngIf=\"isUser\"><a routerLink=\"/profile\"  routerLinkActive = \"active\"><span class=\"glyphicon glyphicon-user\"></span> Προφίλ</a></li>\n        <li style=\"text-align: center;\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" *ngIf=\"isUser\"><a routerLink=\"/login\" routerLinkActive = \"active\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Έξοδος</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    Object.defineProperty(NavbarComponent.prototype, "isAdmin", {
        get: function () {
            return this.currentUser && this.currentUser.admin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "isUser", {
        get: function () {
            return this.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/new-product/new-product.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-product/new-product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"min-height: 100vh; max-height: 100%;\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n  <form class=\"text-center border border-light p-5\" style=\"padding: 10px; max-width: 500px;\">\n    <!--Header-->\n    <p style=\"font-size: 25px; font-weight: bold;\">Προσθήκη Νέων Προϊόντων</p>\n\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n\n      <!-- Ονομα -->\n      <div class=\"form-group\" [class.has-error]=\"pname.invalid && (pname.dirty || pname.touched)\">\n        <input id=\"pname\" type=\"text\" name=\"pname\" placeholder=\"*Όνομα Προιόντος\" class=\"form-control \"\n          [(ngModel)]=\"product.pname\" #pname=\"ngModel\" required pname />\n        <div *ngIf=\"pname.invalid && (pname.dirty || pname.touched)\" class=\"help-block\">\n          <span class=\"help-block\" *ngIf=\"pname.errors.required && pname.touched\">Product name is required</span>\n        </div>\n        <div *ngIf=\"duplicate\" class=\"help-block\">\n            <span class=\"help-block\" style=\"color:#f44336\">Product name already exist</span>\n\n        </div>\n      </div>\n\n      <!--category-->\n      <mat-form-field>\n        <mat-select id=\"category\" name=\"category\" [(ngModel)]=\"selectedOption3\" placeholder=\"Επιλογή Κατηγορίας\"\n          required>\n          <mat-option></mat-option>\n          <mat-option *ngFor=\"let b of res3\" [value]=\"b\">\n            {{b}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n\n      <!-- Description-->\n      <div class=\"form-group\">\n        <textarea class=\"form-control\" id=\"description\" placeholder=\"*Περιγραφή Προιόντος...\" name=\"description\" rows=\"9\"\n          [(ngModel)]=\"product.description\" #description=\"ngModel\" required maxlength=\"300\"\n          [ngClass]=\"{ 'is-invalid': f.submitted && description.invalid }\" required description></textarea>\n        <div id=\"the-count\" align=\"right\" style=\"max-width: 100%; max-height: 5px; \">\n          <span id=\"current\">{{counter(description.value)}} </span>\n          <span id=\"maximum\">/300</span>\n        </div>\n        <div *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"help-block\">\n          <span class=\"help-block\" style=\"color:#f44336\" *ngIf=\"description.errors.required\">Παρακαλούμε εισάγετε μια\n            μικρή περιγραφή</span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" >\n          <input id=\"tagsP\" type=\"text\" name=\"tagsP\" placeholder=\"Λέξεις Κλείδια (Για κάθε λέξη αφήστε κενο)\"\n            class=\"form-control \" [(ngModel)]=\"product.tagsP\" #tagsP=\"ngModel\" tagsP />\n        </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" [disabled]=\"f.form.pristine ||f.form.invalid \">Προσθήκη</button>\n      </div>\n\n    </form>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/new-product/new-product.component.scss":
/*!********************************************************!*\
  !*** ./src/app/new-product/new-product.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wcm9kdWN0L25ldy1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/new-product/new-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-product/new-product.component.ts ***!
  \******************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.categories = [];
        this.product = {};
        this.prod = {};
        this.ip = location.hostname;
        this.duplicate = false;
        this.res3 = this.categories;
    }
    NewProductComponent.prototype.counter = function (msg) {
        if (msg == null) {
            return 0;
        }
        else {
            return msg.length;
        }
    };
    NewProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        var ip = location.hostname;
        this.http.get('http://' + ip + ':8765/observatory/api/products/')
            //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
            .subscribe(function (response) {
            _this.response = response;
            console.log(response);
            for (var i = 0; i < _this.response.products.length; i++) {
                if (!_this.categories.includes(_this.response.products[i].category)) {
                    _this.categories.push(_this.response.products[i].category);
                }
            }
        });
    };
    NewProductComponent.prototype.onSubmit = function () {
        var _this = this;
        this.prod.name = this.product.pname;
        this.prod.description = this.product.description;
        this.prod.category = this.selectedOption3;
        if (this.product.tagsP != null) {
            this.prod.tags = this.product.tagsP.split(" ");
        }
        else {
            this.prod.tags = [];
        }
        this.prod.tags.push(this.selectedOption3);
        this.prod.tags = this.prod.tags.concat(this.prod.name.split(" "));
        for (var i = 0; i < this.prod.tags.length; i++) {
            if (!isNaN(this.prod.tags[i])) {
                this.prod.tags.splice(i, 1);
                i--;
            }
            else if (!/^[a-zA-Zα-ωΑ-ΩΆ-Ώά-ώ]+$/.test(this.prod.tags[i])) {
                this.prod.tags.splice(i, 1);
                i--;
            }
            else if (this.prod.tags[i].length == 1) {
                this.prod.tags.splice(i, 1);
                i--;
            }
        }
        this.http.post("http://" + this.ip + ":8765/observatory/api/products", this.prod)
            .subscribe(function (response) {
            console.log("POST Request is successful ", response);
            setTimeout(function () { _this.router.navigate(['/addproducts/']); }, 1000);
        }, function (error) {
            if (error = "Not Acceptable") {
                _this.duplicate = true;
            }
            console.log("Error", error);
        });
    };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.scss */ "./src/app/new-product/new-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/new-shop/new-shop.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-shop/new-shop.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"min-height: 100vh; max-height: 100%;\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n  <form class=\"text-center border border-light p-5\" style=\"padding: 10px; max-width: 500px;\">\n    <!--Header-->\n    <p style=\"font-size: 25px; font-weight: bold;\">Προσθήκη Νέου Καταστήματος</p>\n\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n\n<!--Όνομα-->\n\n      <div class=\"form-group\" [class.has-error]=\"sname.invalid && (sname.dirty || sname.touched)\">\n        <input id=\"sname\" type=\"text\" name=\"sname\" placeholder=\"*Όνομα Καταστήματος\" class=\"form-control \"\n          [(ngModel)]=\"shop.sname\" #sname=\"ngModel\" required sname />\n        <div *ngIf=\"sname.invalid && (sname.dirty || sname.touched)\" class=\"help-block\">\n          <span class=\"help-block\" *ngIf=\"sname.errors.required && sname.touched\">Shop Name is required</span>\n        </div>\n        <div *ngIf=\"duplicate\" class=\"help-block\">\n          <span class=\"help-block\" style=\"color:#f44336\">Shop Name already exist</span>\n      </div>\n      </div>\n      <!--shop tags-->\n      <div class=\"form-group\" >\n        <input id=\"tagsS\" type=\"text\" name=\"tagsS\" placeholder=\"Λέξεις Κλείδια (Για κάθε λέξη αφήστε κενο)\"\n          class=\"form-control \" [(ngModel)]=\"shop.tagsS\" #tagsS=\"ngModel\" tagsS />\n      </div>\n\n      <div class=\"form-group\" [class.has-error]=\"address.invalid && (address.dirty || address.touched)\">\n        <input id=\"address\" type=\"text\" name=\"address\" placeholder=\"*Διεύθυνση\" class=\"form-control \"\n          [(ngModel)]=\"shop.address\" #address=\"ngModel\" required address />\n        <div *ngIf=\"address.invalid && (address.dirty || address.touched)\" class=\"help-block\">\n          <span class=\"help-block\" *ngIf=\"address.errors.required && address.touched\">Address is required</span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"addr\">\n        <button class=\"btn btn-primary\" (click)=\"showMap() \">Εμφάνιση Χάρτη</button>\n      </div>\n\n\n      <div id=\"mapp\" style=\"max-height: 500px; max-width: 100%;\" align=\"center\" *ngIf=\"showMapBoolean\">\n\n\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"findAddress()\">Αναζήτηση Καταστήματος στον χάρτη</button>\n\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"refresh()\"\n            class=\"btn btn-danger\">Refresh Map</button>\n        </div>\n\n   \n        <agm-map style=\"height: 400px; width: 100%;\" [zoom]=\"14\" [latitude]=\"lat\" [longitude]=\"lng\"\n          (mapClick)=\"onChosenLocation($event)\" [usePanning]=\"true\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n<br>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" [disabled]=\"(f.form.pristine ||f.form.invalid) \">Προσθήκη Καταστήματος</button>\n      </div>\n    </form>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/new-shop/new-shop.component.scss":
/*!**************************************************!*\
  !*** ./src/app/new-shop/new-shop.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1zaG9wL25ldy1zaG9wLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/new-shop/new-shop.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-shop/new-shop.component.ts ***!
  \************************************************/
/*! exports provided: NewShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewShopComponent", function() { return NewShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewShopComponent = /** @class */ (function () {
    function NewShopComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.locationChosen = false;
        this.lat = 37.97945;
        this.lng = 23.71622;
        this.showMapBoolean = false;
        this.shop = {};
        this.shp = {};
        this.ip = location.hostname;
        this.addr = true;
        this.duplicate = false;
    }
    NewShopComponent.prototype.ngOnInit = function () {
        this.lat = this.lat;
        this.lng = this.lng;
    };
    NewShopComponent.prototype.onSubmit = function () {
        var _this = this;
        this.shp.name = this.shop.sname;
        this.shp.address = this.shop.address;
        this.shp.lng = this.lng;
        this.shp.lat = this.lat;
        if (this.shop.tagsS != null) {
            this.shp.tags = this.shop.tagsS.split(" ");
        }
        else {
            this.shp.tags = [];
        }
        this.shp.tags = this.shp.tags.concat(this.shp.name.split(" "));
        this.shp.tags = this.shp.tags.concat(this.shp.address.split(" "));
        for (var i = 0; i < this.shp.tags.length; i++) {
            if (!isNaN(this.shp.tags[i])) {
                this.shp.tags.splice(i, 1);
                i--;
            }
            else if (!/^[a-zA-Zα-ωΑ-ΩΆ-Ώά-ώ]+$/.test(this.shp.tags[i])) {
                this.shp.tags.splice(i, 1);
                i--;
            }
            else if (this.shp.tags[i].length == 1) {
                this.shp.tags.splice(i, 1);
                i--;
            }
        }
        this.http.post("http://" + this.ip + ":8765/observatory/api/shops", this.shp)
            .subscribe(function (response) {
            console.log("POST Request is successful ", response);
            setTimeout(function () { _this.router.navigate(['/addproducts/']); }, 1000);
        }, function (error) {
            if (error = "Not Acceptable") {
                _this.duplicate = true;
            }
            console.log("Error", error);
        });
    };
    NewShopComponent.prototype.onChosenLocation = function (event) {
        var _this = this;
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        console.log(this.lat);
        console.log(this.lng);
        this.locationChosen = true;
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'location': {
                lat: this.lat,
                lng: this.lng
            }
        }, function (results, status) {
            _this.shop.address = results[0].formatted_address;
            console.log(_this.shop.address);
            document.getElementById("address").value = _this.shop.address;
        });
    };
    //https://blog.ng-book.com/angular-and-google-maps-a-tutorial/
    NewShopComponent.prototype.showMap = function () {
        if (this.showMapBoolean)
            this.showMapBoolean = false;
        else
            this.showMapBoolean = true;
        this.addr = false;
    };
    NewShopComponent.prototype.findLocation = function (address) {
        var _this = this;
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'address': address
        }, function (results, status) {
            console.log(results);
            if (status == google.maps.GeocoderStatus.OK) {
                _this.lat = results[0].geometry.location.lat();
                _this.lng = results[0].geometry.location.lng();
                _this.shop.address = results[0].formatted_address;
                console.log(_this.lat);
                console.log(_this.lng);
                console.log(_this.shop.address);
                document.getElementById("address").value = _this.shop.address;
            }
            else {
                alert("Sorry, this search produced no results.");
            }
        });
    };
    NewShopComponent.prototype.findAddress = function () {
        if (this.shop.address == null)
            alert("Δώσε έγκυρη διεύθυνση!");
        else {
            console.log(this.shop.address);
            this.findLocation(this.shop.address);
        }
    };
    NewShopComponent.prototype.refresh = function () { };
    NewShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-shop',
            template: __webpack_require__(/*! ./new-shop.component.html */ "./src/app/new-shop/new-shop.component.html"),
            styles: [__webpack_require__(/*! ./new-shop.component.scss */ "./src/app/new-shop/new-shop.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewShopComponent);
    return NewShopComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100vh; text-align: center; padding-top: 50px;\">\n\t<h1 style=\"font-family: arial; font-size: 20px;\">Πρόβλημα! Η σελίδα δε βρέθηκε!</h1>\n\t<button id = \"butt1index\" style=\"font-size: 14px; width: 300px;\" routerLink='/home'>Μεταφερθείτε στην αρχική!</button>\n</div>"

/***/ }),

/***/ "./src/app/notfound/notfound.component.scss":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2IsMEZBQTBGLENBQUM7O0FBRTNGO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGlCQUFpQjs7QUFFbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7O1FBRVE7WUFDSSxZQUFZO1FBQ2hCO0FBQ1I7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUdBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUdBOztJQUVJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblx0Y29sb3I6IGJsYWNrO1xuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBsaWdodHNreWJsdWUsICM4ODZlYjgsICM4ODZlYjggLCBsaWdodHNreWJsdWUpO31cblxuaDEge1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuaDN7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cbiAgICAgICAgLm5vbW9iaWxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgfVxufVxuXG4ucGFyYWdyYXBoe1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDE3cHg7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdG1hcmdpbjogMTVweDtcblx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblxufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uc2Vjb25kYXJ5X2xvZ297XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDEwJTtcblx0bWluLXdpZHRoOiAxMDBweDtcblx0cGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4jY2Vue1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaW1wbGUtZm9ybXtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDEwMHB4IDBweDtcbn1cblxuLnRhYi10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcblxufVxuLnRhYi1jb250ZW50e1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDUxMDE5O1xufVxuI3JlZ2lzdHJhdGlvbntcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNTEwMTk7XG5cdG9wYWNpdHk6IDAuOTtcblx0Y29sb3I6IGJsYWNrO1xuXHRwYWRkaW5nOiAyMHB4IDBweCA1MHB4IDBweDtcbn1cblxuI3JlZ2lzdHJhdGlvbjF7XG5cdHdpZHRoOiAxMDAlO1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmZpbHRlcl9idG57XG5cdC8vd2lkdGg6IDE1ZW07XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjliNDI7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdC8vZm9udC1zaXplOiAxNnB4O1xuXHQvL2NvbG9yOiB3aGl0ZTtcbn1cbiNidXR0b257XG5cdHdpZHRoOiAyNWVtO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG59XG5cbiNidXR0b25JbnB7XG5cdHdpZHRoOiAyNSU7XG5cdGhlaWdodDogMTAwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2J1dHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDE4cHg7XG59XG4uaW5mb3tcbmJhY2tncm91bmQtY29sb3I6ICNmZmJiN2Y7XG59XG5cbiNidXR0e1xuXHR3aWR0aDogMjUlO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwYzY5OTY7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2J1dHQxe1xuXHR3aWR0aDogMjAlO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwYzY5OTY7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuI3RpdGx7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAyNnB4O1xufVxuXG4jdGl0bDF7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG5cbiNidXR0MWluZGV4e1xuXHR3aWR0aDogMTBlbTtcblx0cGFkZGluZzogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmOWI0Mjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdC8vbWFyZ2luOiAxMHB4IGF1dG87XG5cdC8vZGlzcGxheTogYmxvY2s7XG59XG5cblxuI21hcHBcbntcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NEODUzRiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0NEODUzRjtcbiAgcGFkZGluZy1ib3R0b206IDJweDsgICAgICBcbn1cbi5uYXYtbGluayB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNDRDg1M0YgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0NEODUzRiAhaW1wb3J0YW50OyAgICAgIFxufVxuLm5hdi10YWJze1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/notfound/notfound.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/price/price.component.html":
/*!********************************************!*\
  !*** ./src/app/price/price.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\t\t\n\n\t\t\t\t<div *ngIf=\"status=='success'\">\n\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t    \t<div>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" id=\"location\" (click)=\"showAllShops()\">Δες στον χάρτη όλα τα καταστήματα</button>\n\n\n\t\t\t\t\t\t\t\t<div id=\"mapp\" align=\"center\" *ngIf=\"showShops\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<agm-map [zoom]=\"16\"  [latitude]=\"lat\" [longitude]=\"lng\" [fitBounds]=\"true\">\n\t\t\t\t\t\t\t\t\t\t<agm-marker [latitude]=\"lo.lat\" [longitude]=\"lo.lng\" [agmFitBounds]=\"true\" *ngFor = \"let lo of loc;\">\n\t\t\t\t\t\t\t\t\t\t\t<agm-info-window>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{lo.name}}</strong>\n\t           \t\t\t\t\t\t\t\t\t<br>\n\t            \t\t\t\t\t\t\t\t<br>{{lo.address}}\n\t            \t\t\t\t\t\t\t</agm-info-window>\n\t\t\t\t\t\t\t\t\t\t</agm-marker>\n\t\t\t\t\t\t\t\t\t\t<agm-marker *ngIf = \"showMyLocationMarker\" [latitude]=\"ConvertString(query['latitude'])\" [longitude]=\"ConvertString(this.query['longitude'])\" [iconUrl] =\"icon\" [agmFitBounds]=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t<agm-info-window>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{mylocation}}</strong>\n\t            \t\t\t\t\t\t\t</agm-info-window>\n\t\t\t\t\t\t\t\t\t\t</agm-marker>\n\t\t\t\t\t\t\t\t\t</agm-map>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card\" *ngFor=\"let p of results\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h3>Κατάστημα: {{p.shopName}}</h3>\n\t\t\t\t\t\t\t<h4>Τιμή: {{p.price}}€</h4>\n\t\t\t\t\t\t\t<h5>Διεύθυνση: {{p.shopAddress}}</h5>\n\t\t\t\t\t\t\t<h5>Από {{createDate(p.dateFrom)}} Μέχρι {{createDate(p.dateTo)}}</h5>\n\t\t\t\t\t\t\t<h5 *ngIf=\"showDist\">Απόσταση: {{p.shopDist.toFixed(2)}} km</h5>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"showMap(p.shopId)\">Δες την τοποθεσία\n\t\t\t\t\t\t\t\tστον χάρτη</button>\n\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"deletePrice(p._id)\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-danger\">Δεν ισχύει</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"mapp\" align=\"center\" *ngIf=\"showMaState[showMa.indexOf(p.shopId)]\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<agm-map [zoom]=\"16\"  [latitude]=\"lat\" [longitude]=\"lng\" [fitBounds]=\"true\">\n\t\t\t\t\t\t\t\t\t\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [agmFitBounds]=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t<agm-info-window>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{p.shopName}}</strong>\n\t           \t\t\t\t\t\t\t\t\t\t<br>\n\t            \t\t\t\t\t\t\t\t\t<br>{{p.shopAddress}}\n\t            \t\t\t\t\t\t\t</agm-info-window>\n\t\t\t\t\t\t\t\t\t\t</agm-marker>\n\t\t\t\t\t\t\t\t\t\t<agm-marker [latitude]=\"ConvertString(query['latitude'])\" [longitude]=\"ConvertString(this.query['longitude'])\" [iconUrl] =\"icon\" [agmFitBounds]=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t<agm-info-window>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{mylocation}}</strong>\n\t            \t\t\t\t\t\t\t</agm-info-window>\n\t\t\t\t\t\t\t\t\t\t</agm-marker>\n\t\t\t\t\t\t\t\t\t</agm-map>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\t\t\t\t<div align=\"center\" *ngIf=\"status=='no_results'\">\n\t\t\t\t\t<div style=\"height: 100vh;\">\n\t\t\t\t\t\t<h1 style=\"background-color: #E6E6FA; border-radius: 25px; width: 70%; padding-bottom: 15px; padding-top: 15px;\">Κανένα\n\t\t\t\t\t\tΑποτέλεσμα :(</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div align=\"center\" *ngIf=\"status=='error'\">\n\t\t\t\t\t<div style=\"height: 100vh;\">\n\t\t\t\t\t\t<h1 style=\"background-color: #E6E6FA; border-radius: 25px; width: 70%; padding-bottom: 15px; padding-top: 15px;\">{{ errormessage }}</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div align=\"center\" *ngIf=\"status=='loading'\">\n\t\t\t\t\t<div style=\"height: 100vh;\">\n\t\t\t\t\t\t<h1 style=\"background-color: #E6E6FA; border-radius: 25px; width: 70%; padding-bottom: 15px; padding-top: 15px;\">Loading</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n"

/***/ }),

/***/ "./src/app/price/price.component.scss":
/*!********************************************!*\
  !*** ./src/app/price/price.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\nagm-map {\n  height: 400px;\n  width: 100%; }\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n  background-color: #f1f1f1;\n  border-radius: 15px;\n  margin-bottom: 20px;\n  width: 100%; }\n\n.descr {\n  color: rgba(20, 19, 19, 0.733);\n  font-size: 15px; }\n\n.name {\n  font: bold; }\n\n.card button:hover {\n  opacity: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIiwiL1VzZXJzL2NocmlzdG91YW5kcjcvRG9jdW1lbnRzL0dpdEh1Yi90ZXhub2xvZ2lhX2xvZ2lzbWlrb3UvT2JzZXJ2YXRvcnlGcm9udEVuZC9zcmMvYXBwL3ByaWNlL3ByaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2IsMEZBQTBGLENBQUM7O0FBRTNGO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGlCQUFpQjs7QUFFbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7O1FBRVE7WUFDSSxZQUFZO1FBQ2hCO0FBQ1I7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUdBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUdBOztJQUVJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FDM0tBO0VBQ0UsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFLYjtFQUNFLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVUsRUFBQTs7QUFJWjtFQUNFLDhCQUE2QjtFQUM3QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0ksVUFBUyxFQUFBOztBQUdiO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJpY2UvcHJpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cdGNvbG9yOiBibGFjaztcbmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbGlnaHRza3libHVlLCAjODg2ZWI4LCAjODg2ZWI4ICwgbGlnaHRza3libHVlKTt9XG5cbmgxIHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbmgze1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXG4gICAgICAgIC5ub21vYmlsZSB7XG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIH1cbn1cblxuLnBhcmFncmFwaHtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAxN3B4O1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRtYXJnaW46IDE1cHg7XG5cdG1hcmdpbi1yaWdodDogMTVweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLnNlY29uZGFyeV9sb2dve1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiAxMCU7XG5cdG1pbi13aWR0aDogMTAwcHg7XG5cdHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcbn1cblxuI2Nlbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2ltcGxlLWZvcm17XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luOiAxMDBweCAwcHg7XG59XG5cbi50YWItdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG5cbn1cbi50YWItY29udGVudHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA1MTAxOTtcbn1cbiNyZWdpc3RyYXRpb257XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDUxMDE5O1xuXHRvcGFjaXR5OiAwLjk7XG5cdGNvbG9yOiBibGFjaztcblx0cGFkZGluZzogMjBweCAwcHggNTBweCAwcHg7XG59XG5cbiNyZWdpc3RyYXRpb24xe1xuXHR3aWR0aDogMTAwJTtcblx0Y29sb3I6IGJsYWNrO1xuXHRwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5maWx0ZXJfYnRue1xuXHQvL3dpZHRoOiAxNWVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YjQyO1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHQvL2ZvbnQtc2l6ZTogMTZweDtcblx0Ly9jb2xvcjogd2hpdGU7XG59XG4jYnV0dG9ue1xuXHR3aWR0aDogMjVlbTtcblx0XHRwYWRkaW5nOiAxMHB4O1xufVxuXG4jYnV0dG9uSW5we1xuXHR3aWR0aDogMjUlO1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNidXR7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuLmluZm97XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjdmO1xufVxuXG4jYnV0dHtcblx0d2lkdGg6IDI1JTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGM2OTk2O1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbiNidXR0MXtcblx0d2lkdGg6IDIwJTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGM2OTk2O1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbiN0aXRse1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMjZweDtcbn1cblxuI3RpdGwxe1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuXG4jYnV0dDFpbmRleHtcblx0d2lkdGg6IDEwZW07XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjliNDI7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6IHdoaXRlO1xuXHQvL21hcmdpbjogMTBweCBhdXRvO1xuXHQvL2Rpc3BsYXk6IGJsb2NrO1xufVxuXG5cbiNtYXBwXG57XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRDg1M0YgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNDRDg1M0Y7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7ICAgICAgXG59XG4ubmF2LWxpbmsge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQ0Q4NTNGICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNDRDg1M0YgIWltcG9ydGFudDsgICAgICBcbn1cbi5uYXYtdGFic3tcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnLi4vbWFpbnRleHQvc3Rjc3MuY3NzJztcbmFnbS1tYXAge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOjEwMCU7XG59XG5cblxuLmRlc2NyIHtcbiAgY29sb3I6cmdiYSgyMCwgMTksIDE5LCAwLjczMyk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm5hbWUge1xuICAgIGZvbnQ6Ym9sZDtcbn1cblxuLmNhcmQgYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/price/price.component.ts":
/*!******************************************!*\
  !*** ./src/app/price/price.component.ts ***!
  \******************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PriceComponent = /** @class */ (function () {
    function PriceComponent(route, http, data) {
        this.route = route;
        this.http = http;
        this.data = data;
        //showMa: any[] = [];
        this.showMa = [];
        this.showMaState = [];
        this.results = [];
        this.status = "loading";
        this.mylocation = "Η τοποθεσία σου";
        this.errormessage = "Internal Error";
        this.showShops = false;
        this.loc = [];
        this.icon = 'http://maps.google.com/mapfiles/kml/pal3/icon48.png';
        this.showMyLocationMarker = false;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PriceComponent.prototype.ConvertString = function (value) {
        return parseFloat(value);
    };
    PriceComponent.prototype.createDate = function (selected_date) {
        return new Date(selected_date).toDateString();
    };
    PriceComponent.prototype.productClick = function (pname) {
        this.messageEvent.emit(pname);
    };
    PriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        //this.product = this.route.snapshot.params._id;
        //console.log(this.product);
        this.ip = location.hostname;
        this.showMyLocationMarker = false;
        /*this.http.get('http://' + this.ip + ':8765/observatory/api/prices?' + this.product)
        .subscribe((response) => {
          this.response = response;
          this.productName = this.response.pricesOut[0].productName;
          for (var i = 0; i < this.response.pricesOut.length; i++)
          {
            this.results.push(this.response.pricesOut[i]);
            this.boo = true;
          }
        })
        */
        this.data.currentQuery.subscribe(function (query) {
            _this.showMyLocationMarker = false;
            console.log("I am in Price");
            _this.query = query;
            console.log(query);
            _this.results = [];
            _this.status = "loading";
            var paging = 'start=' + _this.query["start"] + '&count=' + _this.query["count"];
            var product = _this.query["tags"] + '&products=' + _this.query["product"];
            var geo = "";
            var dates = "";
            var sort = '&sort=' + _this.query["sort_field"] + '|' + _this.query["sorting"];
            _this.showMyLocationMarker = _this.query["showCurrentLoc"];
            console.log(_this.query["showCurrentLoc"]);
            _this.loc = [];
            var lat;
            var lng;
            var k = 0;
            _this.showShops = false;
            //check presence of geo filters
            if (_this.query["distance"] != null && _this.query["distance"] != "0") {
                geo = "&geoDist=" + _this.query["distance"] + "&geoLng=" + _this.query["longitude"] + "&geoLat=" + _this.query["latitude"];
                _this.showDist = true;
            }
            else {
                _this.showDist = false;
            }
            //check presence of date filters
            if (_this.query["date_from"] != null) {
                dates = '&dateFrom=' + _this.query["date_from"] + '&dateTo=' + _this.query["date_to"];
            }
            var full_query = 'http://' + _this.ip + ':8765/observatory/api/prices?' + paging + '&' + product + geo + dates + sort;
            console.log(full_query);
            _this.http.get(full_query)
                .subscribe(function (response) {
                _this.response = response;
                if (_this.response.pricesOut.length != 0) {
                    _this.productName = _this.response.pricesOut[0].productName;
                    _this.productClick(_this.productName);
                    for (var i = 0; i < _this.response.pricesOut.length; i++) {
                        _this.results.push(_this.response.pricesOut[i]);
                        _this.status = "success";
                        _this.shopIdd = _this.response.pricesOut[i].shopId;
                        //console.log(this.shopIdd);
                        _this.http.get('http://' + _this.ip + ':8765/observatory/api/shops/' + _this.shopIdd)
                            //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
                            .subscribe(function (response) {
                            _this.resp = response;
                            var obj = { lat: _this.resp.lat, lng: _this.resp.lng, name: _this.resp.name, address: _this.resp.address };
                            _this.loc[k] = obj;
                            //console.log(this.loc[k]);
                            k++;
                        });
                    }
                }
                else {
                    _this.productClick("");
                    _this.status = "no_results";
                }
            }, function (error) {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] || error.status == 400) {
                    _this.status = "error";
                }
                else {
                    _this.status = "no_results";
                }
            });
            console.log(_this.results);
        });
        this.http.get('http://' + this.ip + ':8765/observatory/api/shops/')
            //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
            .subscribe(function (response) {
            _this.response = response;
            console.log(_this.response);
            _this.shopLength = _this.response.shops.length;
            for (var i = 0; i < _this.shopLength; i++) {
                _this.showMa.push(_this.response.shops[i]._id);
                _this.showMaState.push(false);
            }
            // console.log(this.showMa);
        });
    };
    PriceComponent.prototype.showMap = function (shopId) {
        var _this = this;
        this.http.get('http://' + this.ip + ':8765/observatory/api/shops/' + shopId)
            //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
            .subscribe(function (response) {
            _this.response = response;
            _this.lat = _this.response.lat;
            _this.lng = _this.response.lng;
            console.log(_this.response.lat);
            console.log(_this.response.lng);
            _this.index = _this.showMa.indexOf(shopId);
            if (_this.showMaState[_this.index] == true)
                _this.showMaState[_this.index] = false;
            else {
                for (var i = 0; i < _this.shopLength; i++) {
                    _this.showMaState[i] = false;
                }
                _this.showMaState[_this.index] = true;
            }
            console.log(_this.index);
            //this.showMa[index][1]=true;
        });
    };
    PriceComponent.prototype.deletePrice = function (priceID) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/prices/' + priceID)
            .subscribe(function (response) {
            _this.response = response;
        }, function (error) {
            console.log(error);
        });
        console.log(priceID);
    };
    PriceComponent.prototype.showAllShops = function () {
        if (this.showShops == false)
            this.showShops = true;
        else
            this.showShops = false;
        console.log("show shops");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PriceComponent.prototype, "messageEvent", void 0);
    PriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.scss */ "./src/app/price/price.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/priceresponse/priceresponse.component.html":
/*!************************************************************!*\
  !*** ./src/app/priceresponse/priceresponse.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"min-height: 100vh; max-height: 100%;padding-top: 30px\">\n\n  <h1 style=\"font-family: arial; font-size: 60px;\">Ευχαριστούμε!!</h1>\n\n  <div class=\"card text-center\" style=\"width:fit-content;\">\n    <div class=\"card-body\">\n      <h3 class=\"card-title\">Στοιχεία νέας Τιμής:</h3>\n      <h3 class=\"card-subtitle mb-2 text-muted\">Κωδικός Προιόντος:{{prID}}</h3>\n      <h3 class=\"card-subtitle mb-2 text-muted\">Κωδικός Καταστήματος:{{shID}}</h3>\n      <h4 class=\"card-text\">Τιμή:{{price}}</h4>\n      <h4 class=\"card-text\">Απο:{{dateF}}</h4>\n      <h4 class=\"card-text\">Μέχρι:{{dateT}}</h4>\n      <a href=\"#\" class=\"btn btn-primary\" routerLink='/home'>Μεταφερθείτε στην αρχική!</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/priceresponse/priceresponse.component.scss":
/*!************************************************************!*\
  !*** ./src/app/priceresponse/priceresponse.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlcmVzcG9uc2UvcHJpY2VyZXNwb25zZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/priceresponse/priceresponse.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/priceresponse/priceresponse.component.ts ***!
  \**********************************************************/
/*! exports provided: PriceresponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceresponseComponent", function() { return PriceresponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PriceresponseComponent = /** @class */ (function () {
    function PriceresponseComponent(route) {
        var _this = this;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.prID = params["ProductID"];
            _this.shID = params["ShopID"];
            _this.price = params["Price"];
            _this.dateF = params["DateFrom"];
            _this.dateT = params["DateTo"];
        });
    }
    PriceresponseComponent.prototype.ngOnInit = function () {
        console.log(this.prID, this.shID, this.price);
    };
    PriceresponseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-priceresponse',
            template: __webpack_require__(/*! ./priceresponse.component.html */ "./src/app/priceresponse/priceresponse.component.html"),
            styles: [__webpack_require__(/*! ./priceresponse.component.scss */ "./src/app/priceresponse/priceresponse.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PriceresponseComponent);
    return PriceresponseComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"height: 100vh;\">\n\n<div align=\"center\" style=\"height:auto;\">\n  <form class=\"text-center border border-light p-5\" style=\"padding: 10px; width: 500px;\">\n    <div *ngIf=\"!edit\">\n\n      <p style=\"font-size: 25px; font-weight: bold; color:#fd9501\">Το Προφίλ μου</p>\n<br>\n      <div class=\"row\" *ngIf=\"model\">\n        <div class=\"col-xs-2\" align=\"left\">Username:</div>\n        <div class=\"col-xs-10\"><input type=\"text\" name=\"username\" class=\"form-control\" name=\"username\"\n            class=\"form-control\" [(ngModel)]=\"model.username\" #username=\"ngModel\" username readonly></div>\n      </div>\n      <br>\n\n      <div class=\"row\" *ngIf=\"model\">\n        <div class=\"col-xs-2\" align=\"left\">Όνομα:</div>\n        <div class=\"col-xs-10\" [class.has-error]=\"firstname.invalid && (firstname.dirty || firstname.touched)\"><input\n            type=\"text\" name=\"fname\" class=\"form-control\" name=\"firstname\" class=\"form-control\"\n            [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\" firstname readonly></div>\n        <div *ngIf=\"firstname.invalid && (firstname.dirty || firstname.touched)\" class=\"help-block\">\n          <span class=\"help-block\" *ngIf=\"firstname.errors.required && firstname.touched\">Το πεδίο είναι\n            υποχρεωτικό</span>\n        </div>\n      </div>\n      <br>\n\n      <div class=\"row\" *ngIf=\"model\">\n        <div class=\"col-xs-2\" align=\"left\">Επίθετο:</div>\n        <div class=\"col-xs-10\" [class.has-error]=\"lastname.invalid && (lastname.dirty || lastname.touched)\"><input\n            id=\"lastname\" type=\"text\" name=\"lastname\" placeholder=\"Επίθετο\" class=\"form-control \"\n            [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\" required readonly />\n          <div *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\" class=\"help-block\">\n            <span class=\"help-block\" *ngIf=\"lastname.errors.required && lastname.touched\">Το πεδίο είναι\n              υποχρεωτικό</span>\n          </div>\n        </div>\n      </div>\n\n      <br>\n      <!--DateofBirth-->\n      <div class=\"row\" *ngIf=\"model\">\n        <div class=\"col-xs-4\" align=\"left\">Ημ.Γεννήσεως:</div>\n        <div class=\"col-xs-6\" align=\"right\">\n          <ejs-datepicker #date_of_birth=\"ngModel\" id='datepicker' name=\"date_of_birth\"\n            placeholder='Ημερομηνία Γέννησης' [value]='model.date_of_birth' [min]='minDate' [max]='maxDate'\n            [(ngModel)]=\"model.date_of_birth\" disabled></ejs-datepicker>\n        </div>\n      </div>\n\n      <br>\n\n      <div class=\"row\" *ngIf=\"model\">\n        <div class=\"col-xs-2\" align=\"left\">Τηλέφωνο:</div>\n        <div class=\"col-xs-10\" [class.has-error]=\"phone_num.invalid &&(phone_num.dirty || phone_num.touched)\"> <input\n            id=\"phone_num\" type=\"text\" placeholder=\"+30\" [textMask]=\"{mask: mask}\" class=\"form-control\" name=\"phone_num\"\n            [(ngModel)]=\"model.phone_num\" #phone_num=\"ngModel\" required minlength=\"10\" readonly phone_num />\n          <div *ngIf=\"phone_num.invalid && (phone_num.dirty || phone_num.touched)\" class=\"help-block\">\n            <span class=\"help-block\" *ngIf=\"phone_num.errors.required && phone_num.touched\">Το πεδίο είναι\n              υποχρεωτικό</span>\n          </div>\n        </div>\n      </div>\n      <br>\n\n      <div class=\"row\" *ngIf=\"model\">\n        <div class=\"col-xs-2\" align=\"left\">Email:</div>\n        <div class=\"col-xs-10\" [class.has-error]=\"email.invalid &&(email.dirty || email.touched)\">\n          <input id=\"email\" type=\"text\" name=\"email\" placeholder=\"name@example.com\" class=\"form-control \"\n            [(ngModel)]=\"model.email\" #email=\"ngModel\" readonly email />\n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"help-block\">\n            <span class=\"help-block\" *ngIf=\"email.errors.required && email.touched\">Το πεδίο είναι υποχρεωτικό</span>\n            <span class=\"help-block\" *ngIf=\"email.errors.email\">Λανθασμένη Ηλεκτρονική Διεύθυνση</span>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\" *ngIf=\"model\">\n        <div class=\"col-xs-4\" align=\"left\">Φύλο:</div>\n        <div class=\"col-xs-6\">\n          <select class=\"mdb-select\" style=\"width: 50%; height: 25px; \" #gender=\"ngModel\" name=\"gender\"\n            [(ngModel)]=\"model.gender\" disabled>\n            <option value=\"\" disabled selected hidden>Φύλο</option>\n            <option value=\"M\">Άνδρας</option>\n            <option value=\"F\">Γυναίκα</option>\n          </select>\n        </div>\n      </div>\n\n      <br>\n\n    </div>\n    <div *ngIf=\"edit\">\n      <p style=\"font-size: 25px; font-weight: bold; color:#fd9501\">Επεξεργασία Προφίλ</p>\n      <br>\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n        <div class=\"row\">\n          <div class=\"col-xs-2\" align=\"left\">*Username:</div>\n          <div class=\"col-xs-10\"><input type=\"text\" name=\"username\" class=\"form-control\" name=\"username\"\n              class=\"form-control\" [(ngModel)]=\"model.username\" #username=\"ngModel\" username readonly></div>\n        </div>\n        <br>\n\n    <!--    <div class=\"row\">\n          <div class=\"col-xs-2\" align=\"left\">Όνομα:</div>\n          <div class=\"col-xs-10\" [class.has-error]=\"firstname.invalid && (firstname.dirty || firstname.touched)\">\n            <input type=\"text\" id=\"firstname\" class=\"form-control\" name=\"firstname\" class=\"form-control\"\n              [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\" firstname required></div>\n          <div *ngIf=\"firstname.invalid && (firstname.dirty || firstname.touched)\" class=\"help-block\">\n            <span class=\"help-block\" *ngIf=\"firstname.errors.required && firstname.touched\">Το πεδίο είναι\n              υποχρεωτικό</span>\n          </div>\n        </div>\n        <br>\n      -->\n      <div class=\"row\">\n        <div class=\"col-xs-2\" align=\"left\">Όνομα:</div>\n        <div class=\"col-xs-10\" [class.has-error]=\"firstname.invalid && (firstname.dirty || firstname.touched)\"><input\n            id=\"firstname\" type=\"text\" name=\"firstname\" placeholder=\"Όνομα\" class=\"form-control \"\n            [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\" required firstname />\n          <div *ngIf=\"firstname.invalid && (firstname.dirty || firstname.touched)\" class=\"help-block\">\n            <span class=\"help-block\" *ngIf=\"firstname.errors.required && firstname.touched\">Το πεδίο είναι\n              υποχρεωτικό</span>\n          </div>\n        </div>\n      </div>\n      <br>\n\n        <div class=\"row\">\n          <div class=\"col-xs-2\" align=\"left\">Επίθετο:</div>\n          <div class=\"col-xs-10\" [class.has-error]=\"lastname.invalid && (lastname.dirty || lastname.touched)\"><input\n              id=\"lastname\" type=\"text\" name=\"lastname\" placeholder=\"Επίθετο\" class=\"form-control \"\n              [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\" required lastname />\n            <div *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\" class=\"help-block\">\n              <span class=\"help-block\" *ngIf=\"lastname.errors.required && lastname.touched\">Το πεδίο είναι\n                υποχρεωτικό</span>\n            </div>\n          </div>\n        </div>\n        <br>\n\n      <!--DateofBirth-->\n      <div class=\"row\">\n        <div class=\"col-xs-4\" align=\"left\">*Ημ.Γεννήσεως:</div>\n        <div class=\"col-xs-6\" align=\"right\">\n          <ejs-datepicker #date_of_birth=\"ngModel\" id='datepicker' name=\"date_of_birth\"\n            placeholder='Ημερομηνία Γέννησης' [value]='model.date_of_birth' [min]='minDate' [max]='maxDate'\n            [(ngModel)]=\"model.date_of_birth\" disabled></ejs-datepicker>\n        </div>\n      </div>\n      <br>\n        <div class=\"row\">\n          <div class=\"col-xs-2\" align=\"left\">Τηλέφωνο:</div>\n          <div class=\"col-xs-10\" [class.has-error]=\"phone_num.invalid &&(phone_num.dirty || phone_num.touched)\">\n            <input id=\"phone_num\" type=\"text\" placeholder=\"+30\" [textMask]=\"{mask: mask}\" class=\"form-control\"\n              name=\"phone_num\" [(ngModel)]=\"model.phone_num\" #phone_num=\"ngModel\" required minlength=\"10\" required\n              phone_num />\n            <div *ngIf=\"phone_num.invalid && (phone_num.dirty || phone_num.touched)\" class=\"help-block\">\n              <span class=\"help-block\" *ngIf=\"phone_num.errors.required && phone_num.touched\">Το πεδίο είναι\n                υποχρεωτικό</span>\n            </div>\n          </div>\n        </div>\n        <br>\n\n        <div class=\"row\">\n          <div class=\"col-xs-2\" align=\"left\">Email:</div>\n          <div class=\"col-xs-10\" [class.has-error]=\"email.invalid &&(email.dirty || email.touched)\">\n            <input id=\"email\" type=\"text\" name=\"email\" placeholder=\"name@example.com\" class=\"form-control \"\n              [(ngModel)]=\"model.email\" #email=\"ngModel\" required email />\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"help-block\">\n              <span class=\"help-block\" *ngIf=\"email.errors.required && email.touched\">Το πεδίο είναι\n                υποχρεωτικό</span>\n              <span class=\"help-block\" *ngIf=\"email.errors.email\">Λανθασμένη Ηλεκτρονική Διεύθυνση</span>\n            </div>\n          </div>\n        </div>\n        <br>\n\n        <div class=\"row\">\n          <div class=\"col-xs-4\" align=\"left\">*Φύλο:</div>\n          <div class=\"col-xs-6\">\n            <select class=\"mdb-select\" style=\"width: 50%; height: 25px; \" #gender=\"ngModel\" name=\"gender\"\n              [(ngModel)]=\"model.gender\" disabled>\n              <option value=\"\" disabled selected hidden>Φύλο</option>\n              <option value=\"M\">Άνδρας</option>\n              <option value=\"F\">Γυναίκα</option>\n            </select>\n          </div>\n        </div>\n\n        <hr>\n\n        <mat-checkbox labelPosition=\"before\" [(ngModel)]=\"checked\" (change)=\"reset()\" #isChecked=\"ngModel\" name=\"isChecked\" aria-label=\"Αλλαγή Κωδικού Πρόσβασης\">\n            Αλλαγή Κωδικού Πρόσβασης\n        </mat-checkbox>\n        <div *ngIf=\"checked\">\n        <div class=\"form-group\" [class.has-error]=\"password.invalid && (password.dirty || password.touched)\">\n          <input type=\"password\" id=\"password\" placeholder=\"Kωδικός Πρόσβασης\" class=\"form-control\" name=\"password\"\n            [(ngModel)]=\"newPass\" #password=\"ngModel\" required minlength=\"6\"\n            [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required password />\n          <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"help-block\">\n            <span class=\"help-block\" *ngIf=\"password.errors.required\">Το πεδίο είναι υποχρεωτικό</span>\n            <span class=\"help-block\" *ngIf=\"password.errors.minlength\">Ο Κωδικός Πρόσβασης πρέπει να είναι τουλάχιστον\n              6 χαρακτήρες</span>\n          </div>\n        </div>\n\n        <!--Confirm Password-->\n        <div class=\"form-group\" [class.has-error]=\"confirmPassword.touched && confirmPassword.invalid\">\n          <input type=\"password\" name=\"confirmPassword\" appConfirmEqualValidator=\"password\" required\n            placeholder=\"Επιβεβαίωση Κωδικού Πρόσβασης\" id=\"confirmPassword\" class=\"form-control\"\n            [(ngModel)]=\"confPass\" #confirmPassword=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"confirmPassword.touched && confirmPassword.errors?.required\">Επιβεβαιώστε\n            τον Κωδικό Πρόσβασης</span>\n          <span class=\"help-block\" *ngIf=\"confirmPassword.touched && confirmPassword.errors?.notEqual &&\n          !confirmPassword.errors?.required\">Οι Κωδικοί Πρόσβασης δεν είναι ίδιοι</span>\n        </div>\n      </div>\n        <br>\n        <div class=\"form-group\">\n          <button class=\"btn btn-primary\" [disabled]=\"f.form.invalid\">Αποθήκευση</button>\n        </div>\n\n      </form>\n    </div>\n\n\n    <button *ngIf=\"!edit\" class=\"btn btn-primary\" (click)=\"nowEdit()\"> <p style = \"font-weight: bold;\"> Edit</p> </button>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 300px;\n  margin: auto;\n  text-align: center; }\n\n.title {\n  color: grey;\n  font-size: 18px; }\n\nbutton {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 18px; }\n\na {\n  text-decoration: none;\n  font-size: 22px;\n  color: black; }\n\nbutton:hover, a:hover {\n  opacity: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIiwiL1VzZXJzL2NocmlzdG91YW5kcjcvRG9jdW1lbnRzL0dpdEh1Yi90ZXhub2xvZ2lhX2xvZ2lzbWlrb3UvT2JzZXJ2YXRvcnlGcm9udEVuZC9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsWUFBWTtBQUNiLDBGQUEwRixDQUFDOztBQUUzRjtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDhCQUE4QjtDQUM5QixZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBOztRQUVRO1lBQ0ksWUFBWTtRQUNoQjtBQUNSOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsaUJBQWlCOztBQUVsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjs7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFlBQVk7Q0FDWiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxXQUFXO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQzVLQTtFQUNFLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXHRjb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGxpZ2h0c2t5Ymx1ZSwgIzg4NmViOCwgIzg4NmViOCAsIGxpZ2h0c2t5Ymx1ZSk7fVxuXG5oMSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXdlaWdodDogYm9sZDtcblxufVxuXG5oM3tcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblxuICAgICAgICAubm9tb2JpbGUge1xuICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICB9XG59XG5cbi5wYXJhZ3JhcGh7XG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMTdweDtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0bWFyZ2luOiAxNXB4O1xuXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5zZWNvbmRhcnlfbG9nb3tcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogMTAlO1xuXHRtaW4td2lkdGg6IDEwMHB4O1xuXHRwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG59XG5cbiNjZW57XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpbXBsZS1mb3Jte1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMTAwcHggMHB4O1xufVxuXG4udGFiLXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuXG59XG4udGFiLWNvbnRlbnR7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNTEwMTk7XG59XG4jcmVnaXN0cmF0aW9ue1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA1MTAxOTtcblx0b3BhY2l0eTogMC45O1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDIwcHggMHB4IDUwcHggMHB4O1xufVxuXG4jcmVnaXN0cmF0aW9uMXtcblx0d2lkdGg6IDEwMCU7XG5cdGNvbG9yOiBibGFjaztcblx0cGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uZmlsdGVyX2J0bntcblx0Ly93aWR0aDogMTVlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmOWI0Mjtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0Ly9mb250LXNpemU6IDE2cHg7XG5cdC8vY29sb3I6IHdoaXRlO1xufVxuI2J1dHRvbntcblx0d2lkdGg6IDI1ZW07XG5cdFx0cGFkZGluZzogMTBweDtcbn1cblxuI2J1dHRvbklucHtcblx0d2lkdGg6IDI1JTtcblx0aGVpZ2h0OiAxMDBweDtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jYnV0e1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbi5pbmZve1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmYmI3Zjtcbn1cblxuI2J1dHR7XG5cdHdpZHRoOiAyNSU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBjNjk5Njtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG4jYnV0dDF7XG5cdHdpZHRoOiAyMCU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBjNjk5Njtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG4jdGl0bHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDI2cHg7XG59XG5cbiN0aXRsMXtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cblxuI2J1dHQxaW5kZXh7XG5cdHdpZHRoOiAxMGVtO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YjQyO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ly9tYXJnaW46IDEwcHggYXV0bztcblx0Ly9kaXNwbGF5OiBibG9jaztcbn1cblxuXG4jbWFwcFxue1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q4NTNGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjQ0Q4NTNGO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4OyAgICAgIFxufVxuLm5hdi1saW5rIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0NEODUzRiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDNweCBzb2xpZCAjQ0Q4NTNGICFpbXBvcnRhbnQ7ICAgICAgXG59XG4ubmF2LXRhYnN7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbiIsIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmJ1dHRvbjpob3ZlciwgYTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuQGltcG9ydCAnLi4vbWFpbnRleHQvc3Rjc3MuY3NzJzsiXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.mask = ['+', '3', '0', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.checked = false;
        this.model = JSON.parse(localStorage.getItem("currentUser"));
        this.edit = false;
        this.minDate = new Date("01/01/1950");
        this.maxDate = new Date("12/12/2000");
        this.value = new Date("00/00/0000");
        this.ip = location.hostname;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.checked) {
            this.newModel = {
                "email": this.model.email,
                "password": this.newPass,
                "firstname": this.model.firstname,
                "lastname": this.model.lastname,
                "phone_num": this.model.phone_num
            };
        }
        else {
            this.newModel = {
                "email": this.model.email,
                "firstname": this.model.firstname,
                "lastname": this.model.lastname,
                "phone_num": this.model.phone_num
            };
        }
        //  console.log(this.newModel);
        this.http.patch('http://' + this.ip + ':8765/observatory/api/user/' + this.model._id, this.newModel)
            .subscribe(function (response) {
            _this.response = response;
            localStorage.setItem('currentUser', JSON.stringify(_this.model));
            setTimeout(function () { location.reload(); }, 10);
        });
    };
    ProfileComponent.prototype.nowEdit = function () {
        this.edit = true;
    };
    ProfileComponent.prototype.reset = function () {
        this.newPass = "";
        this.confPass = "";
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "2<div align=\"center\" style=\"height: 100vh;\">\n\n<!-- Default form register -->\n<form class=\"text-center border border-light p-5\" style=\"padding: 10px; width: 400px;\">\n    <!--Header-->\n    <p style=\"font-size: 25px; font-weight: bold;\">Δημιουργία Λογαριασμού</p>\n\n<form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n\n<!-- Username -->\n<div class=\"form-group\" [class.has-error]=\"username.invalid && (username.dirty || username.touched)\">\n     <input id=\"username\" placeholder=\"Ψευδώνυμο\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required minlength=\"6\" [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\" required username />\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"help-block\">\n        <span class=\"help-block\"\n         *ngIf=\"username.errors.required\">Το πεδίο είναι υποχρεωτικό</span>\n        <span class=\"help-block\"\n         *ngIf=\"username.errors.minlength\">Το Ψευδώνυμο πρέπει να είναι τουλάχιστον 6 χαρακτήρες</span>\n      </div>\n</div>\n\n<div *ngIf=\"duplicate\" class=\"help-block\">\n    <span class=\"help-block\" style=\"color:#f44336\">Username already exists</span>\n\n</div>\n\n\n\n<!-- Ονομα -->\n<div class=\"form-group\" [class.has-error]=\"firstname.invalid && (firstname.dirty || firstname.touched)\">\n        <input id=\"firstname\" type=\"text\" name=\"firstname\" placeholder=\"Όνομα\" class=\"form-control \"\n        [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\" required firstname  />\n    <div *ngIf=\"firstname.invalid && (firstname.dirty || firstname.touched)\" class=\"help-block\">\n        <span class=\"help-block\"\n         *ngIf=\"firstname.errors.required && firstname.touched\">Το πεδίο είναι υποχρεωτικό</span>\n    </div>\n</div>\n\n\n<!-- Eπιθετο -->\n<div class=\"form-group\" [class.has-error]=\"lastname.invalid &&(lastname.dirty || lastname.touched)\">\n        <input id=\"lastname\" type=\"text\" name=\"lastname\" placeholder=\"Επίθετο\" class=\"form-control \"\n        [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\" required lastname  />\n    <div *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\" class=\"help-block\">\n        <span class=\"help-block\"\n         *ngIf=\"lastname.errors.required && lastname.touched\">Το πεδίο είναι υποχρεωτικό</span>\n    </div>\n</div>\n\n<!--DateofBirth-->\n<div class=\"form-group\">\n<ejs-datepicker #date_of_birth=\"ngModel\" id='datepicker' name=\"date_of_birth\" placeholder='Ημερομηνία Γέννησης' [value]='' [min]='minDate' [max]='maxDate' [(ngModel)]=\"model.date_of_birth\"></ejs-datepicker>\n</div>\n\n\n<!--phone number-->\n<div class=\"form-group\" [class.has-error]=\"phone_num.invalid &&(phone_num.dirty || phone_num.touched)\">\n     <input id=\"phone_num\" type=\"text\" placeholder=\"+30\" [textMask]=\"{mask: mask}\" class=\"form-control\" name=\"phone_num\" [(ngModel)]=\"model.phone_num\" #phone_num=\"ngModel\" required minlength=\"10\" required phone_num />\n    <div *ngIf=\"phone_num.invalid && (phone_num.dirty || phone_num.touched)\" class=\"help-block\">\n        <span class=\"help-block\"\n         *ngIf=\"phone_num.errors.required && phone_num.touched\">Το πεδίο είναι υποχρεωτικό</span>\n    </div>\n</div>\n\n\n<!--email-->\n<div class=\"form-group\" [class.has-error]=\"email.invalid &&(email.dirty || email.touched)\">\n        <input id=\"email\" type=\"text\" name=\"email\" placeholder=\"name@example.com\" class=\"form-control \"\n        [(ngModel)]=\"model.email\" #email=\"ngModel\" required email  />\n         <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"help-block\">\n    <span class=\"help-block\"\n         *ngIf=\"email.errors.required && email.touched\">Το πεδίο είναι υποχρεωτικό</span>\n    <span class=\"help-block\"\n     *ngIf=\"email.errors.email\">Λανθασμένη Ηλεκτρονική Διεύθυνση</span>\n</div>\n</div>\n\n<!--password-->\n<div class=\"form-group\" [class.has-error]=\"password.invalid && (password.dirty || password.touched)\">\n     <input type=\"password\" id=\"password\" placeholder=\"Kωδικός Πρόσβασης\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required minlength=\"6\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required password />\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"help-block\">\n        <span class=\"help-block\"\n         *ngIf=\"password.errors.required\">Το πεδίο είναι υποχρεωτικό</span>\n        <span class=\"help-block\"\n         *ngIf=\"password.errors.minlength\">Ο Κωδικός Πρόσβασης πρέπει να είναι τουλάχιστον 6 χαρακτήρες</span>\n      </div>\n</div>\n\n<!--Confirm Password-->\n<div class=\"form-group\"\n     [class.has-error]=\"confirmPassword.touched && confirmPassword.invalid\">\n  <input type=\"password\" name=\"confirmPassword\" appConfirmEqualValidator=\"password\" required placeholder=\"Επιβεβαίωση Κωδικού Πρόσβασης\"\n         id=\"confirmPassword\" class=\"form-control\"\n         [(ngModel)]=\"model.confirmPassword\" #confirmPassword=\"ngModel\">\n  <span class=\"help-block\"\n        *ngIf=\"confirmPassword.touched && confirmPassword.errors?.required\">Επιβεβαιώστε τον Κωδικό Πρόσβασης</span>\n  <span class=\"help-block\"\n        *ngIf=\"confirmPassword.touched && confirmPassword.errors?.notEqual &&\n          !confirmPassword.errors?.required\">Οι Κωδικοί Πρόσβασης δεν είναι ίδιοι</span>\n</div>\n\n\n\n<!-- Gender -->\n<div class=\"form-group\">\n            <select class=\"mdb-select\" style=\"width: 50%; height: 25px; \" #gender=\"ngModel\" name=\"gender\" [(ngModel)]=\"model.gender\">\n                <option value=\"\" disabled selected>Φύλο</option>\n                <option value=\"M\">Άνδρας</option>\n                <option value=\"F\">Γυναίκα</option>\n            </select>\n</div>\n\n\n\n<!-- Sign up button -->\n<br>\n<div class=\"form-group\">\n      <button class=\"btn btn-primary\" [disabled]=\"f.form.pristine || f.form.invalid\">Εγγραφή</button>\n</div>\n\n\n<!--\n     <br>\n    <button type=\"submit\" class=\"btn btn-primary\" routerLink='/login'>Εγγραφή</button>\n -->\n\n\n</form>\n\n</form>\n<!-- Default form register -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.mask = ['+', '3', '0', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.minDate = new Date("01/01/1950");
        this.maxDate = new Date("12/12/2000");
        this.value = new Date("00/00/0000");
        this.model = {};
        this.error = '';
        this.duplicate = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authenticationService.register(this.model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            if (error = "Not Acceptable") {
                _this.duplicate = true;
            }
            console.log("Error", error);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n<body>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<app-searchbar></app-searchbar>\n\t\t\t<div *ngIf=\"search_step==2\">\n\t\t\t\t<h1 style=\"text-align: center;\">{{productName}}</h1>\n\t\t\t\t<br>\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\n\t\t<div class=\"row\" align=\"center\">\n\t\t\t<div class=\"col-12 col-sm-4\">\n\t\t\t\t<app-searchfilters></app-searchfilters>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"search_step==1\">\n\t\t\t\t<div class=\"col-12 col-sm-8\">\n\n\t\t\t\t\t<app-searchresults (messageEvent)=\"receiveMessage($event)\"></app-searchresults>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"search_step==2\">\n\t\t\t\t<div class=\"col-12 col-sm-8\">\n\t\t\t\t\t\n\t\t\t\t\t<app-price (messageEvent)=\"receiveProduct($event)\"></app-price>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</body>"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2IsMEZBQTBGLENBQUM7O0FBRTNGO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGlCQUFpQjs7QUFFbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7O1FBRVE7WUFDSSxZQUFZO1FBQ2hCO0FBQ1I7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUdBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUdBOztJQUVJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXHRjb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGxpZ2h0c2t5Ymx1ZSwgIzg4NmViOCwgIzg4NmViOCAsIGxpZ2h0c2t5Ymx1ZSk7fVxuXG5oMSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXdlaWdodDogYm9sZDtcblxufVxuXG5oM3tcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblxuICAgICAgICAubm9tb2JpbGUge1xuICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICB9XG59XG5cbi5wYXJhZ3JhcGh7XG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMTdweDtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0bWFyZ2luOiAxNXB4O1xuXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5zZWNvbmRhcnlfbG9nb3tcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogMTAlO1xuXHRtaW4td2lkdGg6IDEwMHB4O1xuXHRwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG59XG5cbiNjZW57XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpbXBsZS1mb3Jte1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMTAwcHggMHB4O1xufVxuXG4udGFiLXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuXG59XG4udGFiLWNvbnRlbnR7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNTEwMTk7XG59XG4jcmVnaXN0cmF0aW9ue1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA1MTAxOTtcblx0b3BhY2l0eTogMC45O1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDIwcHggMHB4IDUwcHggMHB4O1xufVxuXG4jcmVnaXN0cmF0aW9uMXtcblx0d2lkdGg6IDEwMCU7XG5cdGNvbG9yOiBibGFjaztcblx0cGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uZmlsdGVyX2J0bntcblx0Ly93aWR0aDogMTVlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmOWI0Mjtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0Ly9mb250LXNpemU6IDE2cHg7XG5cdC8vY29sb3I6IHdoaXRlO1xufVxuI2J1dHRvbntcblx0d2lkdGg6IDI1ZW07XG5cdFx0cGFkZGluZzogMTBweDtcbn1cblxuI2J1dHRvbklucHtcblx0d2lkdGg6IDI1JTtcblx0aGVpZ2h0OiAxMDBweDtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jYnV0e1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbi5pbmZve1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmYmI3Zjtcbn1cblxuI2J1dHR7XG5cdHdpZHRoOiAyNSU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBjNjk5Njtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG4jYnV0dDF7XG5cdHdpZHRoOiAyMCU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBjNjk5Njtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG4jdGl0bHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDI2cHg7XG59XG5cbiN0aXRsMXtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cblxuI2J1dHQxaW5kZXh7XG5cdHdpZHRoOiAxMGVtO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YjQyO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ly9tYXJnaW46IDEwcHggYXV0bztcblx0Ly9kaXNwbGF5OiBibG9jaztcbn1cblxuXG4jbWFwcFxue1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q4NTNGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjQ0Q4NTNGO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4OyAgICAgIFxufVxuLm5hdi1saW5rIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0NEODUzRiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDNweCBzb2xpZCAjQ0Q4NTNGICFpbXBvcnRhbnQ7ICAgICAgXG59XG4ubmF2LXRhYnN7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.search_step = 1;
    }
    SearchComponent.prototype.receiveMessage = function ($event) {
        console.log($event);
        this.search_step = $event;
    };
    SearchComponent.prototype.receiveProduct = function ($event) {
        this.productName = $event;
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/searchbar/searchbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"search\">\n\t<img src=\"../../assets/logo.png\" class=\"secondary_logo\">\n\t<input type=\"text\" id=\"button\" [(ngModel)]=\"searchAttribute\" name=\"searchAttribute\" \n\t\tstyle= \"width: 30%; \n\t\t\tmin-width: 170px;\n\t\t\t  border-radius: 10px;\">\n\t<button type=\"button\" id=\"butt1index\" (click)=\"search(searchAttribute)\" \n\t\tstyle= \"width: 15%; \n\t\t\tmin-width: 100px;\n\t\t\tborder-radius: 10px;\"> Αναζήτηση</button>\n</form>"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.scss":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2IsMEZBQTBGLENBQUM7O0FBRTNGO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGlCQUFpQjs7QUFFbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7O1FBRVE7WUFDSSxZQUFZO1FBQ2hCO0FBQ1I7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUdBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUdBOztJQUVJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXHRjb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGxpZ2h0c2t5Ymx1ZSwgIzg4NmViOCwgIzg4NmViOCAsIGxpZ2h0c2t5Ymx1ZSk7fVxuXG5oMSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXdlaWdodDogYm9sZDtcblxufVxuXG5oM3tcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblxuICAgICAgICAubm9tb2JpbGUge1xuICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICB9XG59XG5cbi5wYXJhZ3JhcGh7XG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMTdweDtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0bWFyZ2luOiAxNXB4O1xuXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5zZWNvbmRhcnlfbG9nb3tcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogMTAlO1xuXHRtaW4td2lkdGg6IDEwMHB4O1xuXHRwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG59XG5cbiNjZW57XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpbXBsZS1mb3Jte1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMTAwcHggMHB4O1xufVxuXG4udGFiLXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuXG59XG4udGFiLWNvbnRlbnR7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNTEwMTk7XG59XG4jcmVnaXN0cmF0aW9ue1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA1MTAxOTtcblx0b3BhY2l0eTogMC45O1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDIwcHggMHB4IDUwcHggMHB4O1xufVxuXG4jcmVnaXN0cmF0aW9uMXtcblx0d2lkdGg6IDEwMCU7XG5cdGNvbG9yOiBibGFjaztcblx0cGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uZmlsdGVyX2J0bntcblx0Ly93aWR0aDogMTVlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmOWI0Mjtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0Ly9mb250LXNpemU6IDE2cHg7XG5cdC8vY29sb3I6IHdoaXRlO1xufVxuI2J1dHRvbntcblx0d2lkdGg6IDI1ZW07XG5cdFx0cGFkZGluZzogMTBweDtcbn1cblxuI2J1dHRvbklucHtcblx0d2lkdGg6IDI1JTtcblx0aGVpZ2h0OiAxMDBweDtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jYnV0e1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbi5pbmZve1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmYmI3Zjtcbn1cblxuI2J1dHR7XG5cdHdpZHRoOiAyNSU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBjNjk5Njtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG4jYnV0dDF7XG5cdHdpZHRoOiAyMCU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBjNjk5Njtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG4jdGl0bHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDI2cHg7XG59XG5cbiN0aXRsMXtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cblxuI2J1dHQxaW5kZXh7XG5cdHdpZHRoOiAxMGVtO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YjQyO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ly9tYXJnaW46IDEwcHggYXV0bztcblx0Ly9kaXNwbGF5OiBibG9jaztcbn1cblxuXG4jbWFwcFxue1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q4NTNGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjQ0Q4NTNGO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4OyAgICAgIFxufVxuLm5hdi1saW5rIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0NEODUzRiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDNweCBzb2xpZCAjQ0Q4NTNGICFpbXBvcnRhbnQ7ICAgICAgXG59XG4ubmF2LXRhYnN7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.searchAttribute = "";
    }
    SearchbarComponent.prototype.ngOnInit = function () {
        this.searchAttribute = this.route.snapshot.params.searchAttribute;
    };
    SearchbarComponent.prototype.search = function (searchAttribute) {
        if (this.searchAttribute == "") {
            window.alert("Σφάλμα Αναζήτησης! Δοκιμάστε ξανά!");
        }
        else {
            this.router.navigate(['/searchresults/', searchAttribute]);
            location.reload();
        }
    };
    SearchbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! ./searchbar.component.html */ "./src/app/searchbar/searchbar.component.html"),
            styles: [__webpack_require__(/*! ./searchbar.component.scss */ "./src/app/searchbar/searchbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/searchfilters/searchfilters.component.html":
/*!************************************************************!*\
  !*** ./src/app/searchfilters/searchfilters.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<div class=\"card-body\">\n\t\t<p class=\"descr-title\">Φίλτρα Αναζήτησης</p>\n\t\t<p> Ταξινόμηση Κατά: \n\t\t<select [(ngModel)]=\"selectedSortField\">\n        \t<option value=\"price\">Τιμή</option>\n        \t<option value=\"date\">Ημερομηνία Λήξης</option>\n        \t<option *ngIf=\"!showFirst\" value=\"geo.dist\">Απόσταση από μένα</option>\n    \t</select>\n    \t</p>\n    \t<p> Τρόπος Ταξινόμησης:\n    \t<select [(ngModel)]=\"selectedSorting\">\n\t\t\t<option value=\"ASC\">Αύξουσα</option>\n        \t<option value=\"DESC\">Φθίνουσα</option>\n    \t</select>\n    \t<p class=\"descr-subtitle\">Απόσταση από μένα</p>\n    \t<div *ngIf=\"showFirst\">\n\t\t<button type=\"button\" class=\"btn btn-primary filter_btn\" id=\"location\" (click)=\"location()\"> Εντοπισμός Τοποθεσίας</button>\n\t\t</div>\n\t\t<div *ngIf=\"!showFirst\">\n\t\t<ng5-slider  [(value)]=\"value\" [options]=\"options\"></ng5-slider>\n\t\t</div>\n\t\t<p class=\"descr-subtitle\">Διάρκεια Προσφοράς</p>\n\t\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-5\">\n\t\t\t\t<ejs-datepicker placeholder='ΑΡΧΗ' (change)='onChange1($event)'></ejs-datepicker>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t<p>ΜΕΧΡΙ</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-5\">\n\t\t\t\t<ejs-datepicker placeholder='ΤΕΛΟΣ' (change)='onChange2($event)'></ejs-datepicker>\n\t\t\t</div>\n\t\t</div>\n\t\t<p class=\"descr-subtitle\">Αριθμός Προϊόντων ανά σελίδα</p>\n\t\t<ng5-slider [(value)]=\"value2\" [options]=\"options2\"></ng5-slider>\n\t\t<br>\n\t\t<br>\n\t\t<button type=\"button\" class=\"btn btn-primary filter_btn\" (click)=\"filter()\">Εφαρμογή Φίλτρων</button>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/searchfilters/searchfilters.component.scss":
/*!************************************************************!*\
  !*** ./src/app/searchfilters/searchfilters.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n  background-color: #f1f1f1;\n  border-radius: 15px;\n  margin-bottom: 20px; }\n\n.descr-title {\n  color: rgba(20, 19, 19, 0.733);\n  font-size: 23px;\n  font: bold; }\n\n.descr-subtitle {\n  font-family: \"Times New Roman\";\n  color: rgba(20, 19, 19, 0.733);\n  font-size: 17px;\n  text-align: justify;\n  font-weight: bold; }\n\n.name {\n  font: bold; }\n\n.card button:hover {\n  opacity: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIiwiL1VzZXJzL2NocmlzdG91YW5kcjcvRG9jdW1lbnRzL0dpdEh1Yi90ZXhub2xvZ2lhX2xvZ2lzbWlrb3UvT2JzZXJ2YXRvcnlGcm9udEVuZC9zcmMvYXBwL3NlYXJjaGZpbHRlcnMvc2VhcmNoZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsWUFBWTtBQUNiLDBGQUEwRixDQUFDOztBQUUzRjtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDhCQUE4QjtDQUM5QixZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBOztRQUVRO1lBQ0ksWUFBWTtRQUNoQjtBQUNSOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsaUJBQWlCOztBQUVsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjs7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFlBQVk7Q0FDWiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxXQUFXO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQzFLQTtFQUNJLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQ0YsRUFBQTs7QUFHQTtFQUNFLDhCQUE2QjtFQUM3QixlQUFlO0VBQ2YsVUFBUyxFQUFBOztBQUdYO0VBQ0UsOEJBQThCO0VBQzlCLDhCQUE2QjtFQUM3QixlQUFlO0VBQ2YsbUJBQW1CO0VBRW5CLGlCQUFpQixFQUFBOztBQUduQjtFQUNJLFVBQVMsRUFBQTs7QUFHYjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGZpbHRlcnMvc2VhcmNoZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblx0Y29sb3I6IGJsYWNrO1xuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBsaWdodHNreWJsdWUsICM4ODZlYjgsICM4ODZlYjggLCBsaWdodHNreWJsdWUpO31cblxuaDEge1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuaDN7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cbiAgICAgICAgLm5vbW9iaWxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgfVxufVxuXG4ucGFyYWdyYXBoe1xuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDE3cHg7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdG1hcmdpbjogMTVweDtcblx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblxufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uc2Vjb25kYXJ5X2xvZ297XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDEwJTtcblx0bWluLXdpZHRoOiAxMDBweDtcblx0cGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4jY2Vue1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaW1wbGUtZm9ybXtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDEwMHB4IDBweDtcbn1cblxuLnRhYi10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcblxufVxuLnRhYi1jb250ZW50e1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDUxMDE5O1xufVxuI3JlZ2lzdHJhdGlvbntcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNTEwMTk7XG5cdG9wYWNpdHk6IDAuOTtcblx0Y29sb3I6IGJsYWNrO1xuXHRwYWRkaW5nOiAyMHB4IDBweCA1MHB4IDBweDtcbn1cblxuI3JlZ2lzdHJhdGlvbjF7XG5cdHdpZHRoOiAxMDAlO1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmZpbHRlcl9idG57XG5cdC8vd2lkdGg6IDE1ZW07XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjliNDI7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdC8vZm9udC1zaXplOiAxNnB4O1xuXHQvL2NvbG9yOiB3aGl0ZTtcbn1cbiNidXR0b257XG5cdHdpZHRoOiAyNWVtO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG59XG5cbiNidXR0b25JbnB7XG5cdHdpZHRoOiAyNSU7XG5cdGhlaWdodDogMTAwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2J1dHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDE4cHg7XG59XG4uaW5mb3tcbmJhY2tncm91bmQtY29sb3I6ICNmZmJiN2Y7XG59XG5cbiNidXR0e1xuXHR3aWR0aDogMjUlO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwYzY5OTY7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2J1dHQxe1xuXHR3aWR0aDogMjAlO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwYzY5OTY7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuI3RpdGx7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAyNnB4O1xufVxuXG4jdGl0bDF7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG5cbiNidXR0MWluZGV4e1xuXHR3aWR0aDogMTBlbTtcblx0cGFkZGluZzogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmOWI0Mjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdC8vbWFyZ2luOiAxMHB4IGF1dG87XG5cdC8vZGlzcGxheTogYmxvY2s7XG59XG5cblxuI21hcHBcbntcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NEODUzRiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0NEODUzRjtcbiAgcGFkZGluZy1ib3R0b206IDJweDsgICAgICBcbn1cbi5uYXYtbGluayB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNDRDg1M0YgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0NEODUzRiAhaW1wb3J0YW50OyAgICAgIFxufVxuLm5hdi10YWJze1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0ICcuLi9tYWludGV4dC9zdGNzcy5jc3MnO1xuXG4uY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gIH1cblxuXG4gIC5kZXNjci10aXRsZSB7XG4gICAgY29sb3I6cmdiYSgyMCwgMTksIDE5LCAwLjczMyk7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGZvbnQ6Ym9sZDtcbiAgfVxuXG4gIC5kZXNjci1zdWJ0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG4gICAgY29sb3I6cmdiYSgyMCwgMTksIDE5LCAwLjczMyk7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5uYW1lIHtcbiAgICAgIGZvbnQ6Ym9sZDtcbiAgfVxuXG4gIC5jYXJkIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgIl19 */"

/***/ }),

/***/ "./src/app/searchfilters/searchfilters.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/searchfilters/searchfilters.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchfiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchfiltersComponent", function() { return SearchfiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchfiltersComponent = /** @class */ (function () {
    function SearchfiltersComponent(route, http, router, data, datePipe) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.data = data;
        this.datePipe = datePipe;
        this.showFirst = true;
        this.showMyLocationMarker = false;
        this.selectedSortField = "price";
        this.selectedSorting = "ASC";
        this.value = null;
        this.options = {
            showTicks: true,
            showSelectionBar: true,
            stepsArray: [
                { value: 2 },
                { value: 5 },
                { value: 10 },
                { value: null }
            ],
            translate: function (value) {
                switch (value) {
                    case null:
                        return 'Όλα';
                    default:
                        return value + 'km';
                }
            }
        };
        this.value2 = 20;
        this.options2 = {
            showTicks: true,
            showSelectionBar: true,
            stepsArray: [
                { value: 10 },
                { value: 20 },
                { value: 40 },
                { value: 60 }
            ]
        };
    }
    SearchfiltersComponent.prototype.location = function () {
        var _this = this;
        this.showFirst = false;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position,
                    console.log(position);
                _this.latitude = _this.geolocationPosition.coords.latitude;
                _this.longitude = _this.geolocationPosition.coords.longitude;
                _this.showMyLocationMarker = true;
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            });
        }
        ;
    };
    SearchfiltersComponent.prototype.onChange1 = function (args) {
        if (args.value != null) {
            var date = new Date(args.value);
            this.dateValueFrom = this.datePipe.transform(date, "yyyy-MM-dd");
        }
        else {
            this.dateValueFrom = null;
        }
    };
    SearchfiltersComponent.prototype.onChange2 = function (args) {
        if (args.value != null) {
            var date = new Date(args.value);
            this.dateValueTo = this.datePipe.transform(date, "yyyy-MM-dd");
        }
        else {
            this.dateValueTo = null;
        }
    };
    SearchfiltersComponent.prototype.filter = function () {
        this.query["sort_field"] = this.selectedSortField;
        this.query["sorting"] = this.selectedSorting;
        this.query["count"] = this.value2;
        this.query["date_from"] = this.dateValueFrom;
        this.query["date_to"] = this.dateValueTo;
        this.query["distance"] = this.value;
        this.query["latitude"] = this.latitude;
        this.query["longitude"] = this.longitude;
        this.query["showCurrentLoc"] = this.showMyLocationMarker;
        this.data.changeQuery(this.query);
        //this.router.navigate(['/searchresults/', this.searchAttributes]);
        //location.reload();
    };
    SearchfiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentQuery.subscribe(function (query) { return _this.query = query; });
    };
    SearchfiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchfilters',
            template: __webpack_require__(/*! ./searchfilters.component.html */ "./src/app/searchfilters/searchfilters.component.html"),
            styles: [__webpack_require__(/*! ./searchfilters.component.scss */ "./src/app/searchfilters/searchfilters.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], SearchfiltersComponent);
    return SearchfiltersComponent;
}());



/***/ }),

/***/ "./src/app/searchresults/searchresults.component.html":
/*!************************************************************!*\
  !*** ./src/app/searchresults/searchresults.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t\t\t\n\n\t\t\t\t<div *ngIf=\"status=='success'\">\n\t\t\t\t\t<div class=\"card\" *ngFor=\"let resu of final_results\" padding>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h3 class=\"name\">{{ resu.name }}</h3>\n\t\t\t\t\t\t\t<p  class=\"descr paragraph nomobile\" style=\"height: 12vh; min-height: 120px;  overflow-y: auto;\">{{ resu.description }}</p>\n\t\t\t\t\t\t\t<button id=\"butt1index\" style=\"width: 100%;\" name=\"{{resu._id}}\"  (click)=\"productClick($event)\">Δείτε τις τιμές και τα καταστήματα</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\n\t\t\t\t<div align=\"center\" *ngIf=\"status=='no_results'\">\n\t\t\t\t\t<div style=\"height: 100vh;\">\n\t\t\t\t\t\t<h1 style=\"background-color: #E6E6FA; border-radius: 25px; width: 70%; padding-bottom: 15px; padding-top: 15px;\">Κανένα\n\t\t\t\t\t\tΑποτέλεσμα :(</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div align=\"center\" *ngIf=\"status=='error'\">\n\t\t\t\t\t<div style=\"height: 100vh;\">\n\t\t\t\t\t\t<h1 style=\"background-color: #E6E6FA; border-radius: 25px; width: 70%; padding-bottom: 15px; padding-top: 15px;\">Internal\n\t\t\t\t\t\tError :(</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div align=\"center\" *ngIf=\"status=='loading'\">\n\t\t\t\t\t<div style=\"height: 100vh;\">\n\t\t\t\t\t\t<h1 style=\"background-color: #E6E6FA; border-radius: 25px; width: 70%; padding-bottom: 15px; padding-top: 15px;\">Loading</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t"

/***/ }),

/***/ "./src/app/searchresults/searchresults.component.scss":
/*!************************************************************!*\
  !*** ./src/app/searchresults/searchresults.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tbackground-repeat: repeat;\n\tbackground-size: 100%;\n\tcolor: black;\nbackground-image: linear-gradient(to right, lightskyblue, #886eb8, #886eb8 , lightskyblue);}\n\nh1 {\n\tcolor: white;\n\tfont-size: 30px;\n\tfont-family: \"Times New Roman\";\n\ttext-align: center;\n\tfont-weight: bold;\n\n}\n\nh3{\n\ttext-align: center;\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n\n        .nomobile {\n            display:none;\n        }\n}\n\n.paragraph{\n\tfont-family: \"Times New Roman\";\n\tcolor: black;\n\tfont-size: 17px;\n\ttext-align: justify;\n\tmargin: 15px;\n\tmargin-right: 15px;\n\tfont-weight: bold;\n\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align:center;\n}\n\n.secondary_logo{\n\tdisplay: inline-block;\n\twidth: 10%;\n\tmin-width: 100px;\n\tpadding: 5px 10px 10px 10px;\n}\n\n#cen{\n\ttext-align: center;\n}\n\n.simple-form{\n\ttext-align: center;\n\tmargin: 100px 0px;\n}\n\n.tab-title {\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.tab-content{\n\tbackground-color: #051019;\n}\n\n#registration{\n\twidth: 100%;\n\tbackground-color: #051019;\n\topacity: 0.9;\n\tcolor: black;\n\tpadding: 20px 0px 50px 0px;\n}\n\n#registration1{\n\twidth: 100%;\n\tcolor: black;\n\tpadding: 0px 0px 0px 0px;\n}\n\n.filter_btn{\n\t//width: 15em;\n\tbackground-color: #ff9b42;\n\tmargin-bottom: 10px;\n\t//font-size: 16px;\n\t//color: white;\n}\n\n#button{\n\twidth: 25em;\n\t\tpadding: 10px;\n}\n\n#buttonInp{\n\twidth: 25%;\n\theight: 100px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n#but{\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n.info{\nbackground-color: #ffbb7f;\n}\n\n#butt{\n\twidth: 25%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#butt1{\n\twidth: 20%;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #0c6996;\n\tfont-size: 18px;\n}\n\n#titl{\n\tcolor: white;\n\tfont-size: 26px;\n}\n\n#titl1{\n\tcolor: white;\n\tfont-size: 20px;\n}\n\n#butt1index{\n\twidth: 10em;\n\tpadding: 10px;\n\tbackground-color: #ff9b42;\n\tfont-size: 16px;\n\tcolor: white;\n\t//margin: 10px auto;\n\t//display: block;\n}\n\n#mapp\n{\n    height: 400px;\n    width: 100%;\n}\n\n.nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #CD853F !important;\n  color: white !important;\n  border-radius: 0;\n  border: 3px solid #CD853F;\n  padding-bottom: 2px;      \n}\n\n.nav-link {\n  margin-bottom: 25px !important;\n  color: #CD853F !important;\n  border: 3px solid #CD853F !important;      \n}\n\n.nav-tabs{\n  border-bottom: 0 !important;\n}\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n  background-color: #f1f1f1;\n  border-radius: 15px;\n  margin-bottom: 20px; }\n\n.descr-title {\n  color: rgba(20, 19, 19, 0.733);\n  font-size: 23px;\n  font: bold; }\n\n.descr-subtitle {\n  color: rgba(20, 19, 19, 0.733);\n  font-size: 17px; }\n\n.name {\n  font: bold; }\n\n.card button:hover {\n  opacity: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRleHQvc3Rjc3MuY3NzIiwiL1VzZXJzL2NocmlzdG91YW5kcjcvRG9jdW1lbnRzL0dpdEh1Yi90ZXhub2xvZ2lhX2xvZ2lzbWlrb3UvT2JzZXJ2YXRvcnlGcm9udEVuZC9zcmMvYXBwL3NlYXJjaHJlc3VsdHMvc2VhcmNocmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsWUFBWTtBQUNiLDBGQUEwRixDQUFDOztBQUUzRjtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQixpQkFBaUI7O0FBRWxCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDhCQUE4QjtDQUM5QixZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBOztRQUVRO1lBQ0ksWUFBWTtRQUNoQjtBQUNSOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsaUJBQWlCOztBQUVsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjs7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFlBQVk7Q0FDWiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxXQUFXO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQzFLQTtFQUNJLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQ0YsRUFBQTs7QUFHQTtFQUNFLDhCQUE2QjtFQUM3QixlQUFlO0VBQ2YsVUFBUyxFQUFBOztBQUdYO0VBQ0UsOEJBQTZCO0VBQzdCLGVBQWUsRUFBQTs7QUFHakI7RUFDSSxVQUFTLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hyZXN1bHRzL3NlYXJjaHJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cdGNvbG9yOiBibGFjaztcbmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbGlnaHRza3libHVlLCAjODg2ZWI4LCAjODg2ZWI4ICwgbGlnaHRza3libHVlKTt9XG5cbmgxIHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbmgze1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXG4gICAgICAgIC5ub21vYmlsZSB7XG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIH1cbn1cblxuLnBhcmFncmFwaHtcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAxN3B4O1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRtYXJnaW46IDE1cHg7XG5cdG1hcmdpbi1yaWdodDogMTVweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLnNlY29uZGFyeV9sb2dve1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiAxMCU7XG5cdG1pbi13aWR0aDogMTAwcHg7XG5cdHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcbn1cblxuI2Nlbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2ltcGxlLWZvcm17XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luOiAxMDBweCAwcHg7XG59XG5cbi50YWItdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG5cbn1cbi50YWItY29udGVudHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA1MTAxOTtcbn1cbiNyZWdpc3RyYXRpb257XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDUxMDE5O1xuXHRvcGFjaXR5OiAwLjk7XG5cdGNvbG9yOiBibGFjaztcblx0cGFkZGluZzogMjBweCAwcHggNTBweCAwcHg7XG59XG5cbiNyZWdpc3RyYXRpb24xe1xuXHR3aWR0aDogMTAwJTtcblx0Y29sb3I6IGJsYWNrO1xuXHRwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5maWx0ZXJfYnRue1xuXHQvL3dpZHRoOiAxNWVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YjQyO1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHQvL2ZvbnQtc2l6ZTogMTZweDtcblx0Ly9jb2xvcjogd2hpdGU7XG59XG4jYnV0dG9ue1xuXHR3aWR0aDogMjVlbTtcblx0XHRwYWRkaW5nOiAxMHB4O1xufVxuXG4jYnV0dG9uSW5we1xuXHR3aWR0aDogMjUlO1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNidXR7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuLmluZm97XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjdmO1xufVxuXG4jYnV0dHtcblx0d2lkdGg6IDI1JTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGM2OTk2O1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbiNidXR0MXtcblx0d2lkdGg6IDIwJTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGM2OTk2O1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbiN0aXRse1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMjZweDtcbn1cblxuI3RpdGwxe1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuXG4jYnV0dDFpbmRleHtcblx0d2lkdGg6IDEwZW07XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjliNDI7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6IHdoaXRlO1xuXHQvL21hcmdpbjogMTBweCBhdXRvO1xuXHQvL2Rpc3BsYXk6IGJsb2NrO1xufVxuXG5cbiNtYXBwXG57XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRDg1M0YgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNDRDg1M0Y7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7ICAgICAgXG59XG4ubmF2LWxpbmsge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQ0Q4NTNGICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNDRDg1M0YgIWltcG9ydGFudDsgICAgICBcbn1cbi5uYXYtdGFic3tcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnLi4vbWFpbnRleHQvc3Rjc3MuY3NzJztcblxuLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICB9XG5cblxuICAuZGVzY3ItdGl0bGUge1xuICAgIGNvbG9yOnJnYmEoMjAsIDE5LCAxOSwgMC43MzMpO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250OmJvbGQ7XG4gIH1cblxuICAuZGVzY3Itc3VidGl0bGUge1xuICAgIGNvbG9yOnJnYmEoMjAsIDE5LCAxOSwgMC43MzMpO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuXG4gIC5uYW1lIHtcbiAgICAgIGZvbnQ6Ym9sZDtcbiAgfVxuXG4gIC5jYXJkIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/searchresults/searchresults.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/searchresults/searchresults.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchresultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresultsComponent", function() { return SearchresultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchresultsComponent = /** @class */ (function () {
    function SearchresultsComponent(route, http, data) {
        this.route = route;
        this.http = http;
        this.data = data;
        this.results = [];
        this.booRes = 3;
        this.boo = false;
        this.url = ".";
        this.initial_search = 1;
        this.status = "loading";
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchresultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.url = this.route.snapshot.params.searchAttribute;
        this.subscription = this.data.currentQuery.subscribe(function (query) {
            _this.query = query;
            console.log("I am in Search Results");
            console.log(query);
            _this.results = [];
            if (_this.initial_search == 1) {
                if (_this.url !== undefined) {
                    var parameters = _this.url.split(" ");
                }
                _this.ip = location.hostname;
                if (parameters !== undefined) {
                    parameters = parameters.map(function (parameters) {
                        return "tags=" + parameters;
                    });
                }
                //console.log(parameters);
                if (parameters !== undefined) {
                    _this.tags = parameters.toString();
                }
                //console.log(this.str);
                if (_this.tags !== undefined) {
                    _this.tags = _this.tags.replace(/,/g, "&");
                }
                var full_query = 'http://' + _this.ip + ':8765/observatory/api/prices?' + _this.tags;
                _this.results = _this.findResults(_this.ip, full_query);
                _this.initial_search = 0;
            }
            else if (_this.initial_search == 0) {
                var paging = 'start=' + _this.query["start"] + '&count=' + _this.query["count"];
                var geo = "";
                var dates = "";
                var sort = '&sort=' + _this.query["sort_field"] + '|' + _this.query["sorting"];
                //check presence of geo filters
                if (_this.query["distance"] != null && _this.query["distance"] != "0" && _this.query["latitude"] != null && _this.query["longitude"] != null) {
                    geo = "&geoDist=" + _this.query["distance"] + "&geoLng=" + _this.query["longitude"] + "&geoLat=" + _this.query["latitude"];
                }
                //check presence of date filters
                if (_this.query["date_from"] != null) {
                    dates = '&dateFrom=' + _this.query["date_from"] + '&dateTo=' + _this.query["date_to"];
                }
                var full_query = 'http://' + _this.ip + ':8765/observatory/api/prices?' + paging + '&' + _this.tags + geo + dates + sort;
                console.log(full_query);
                _this.results = _this.findResults(_this.ip, full_query);
            }
            _this.final_results = _this.results;
            console.log(_this.status);
        });
    };
    SearchresultsComponent.prototype.productClick = function (event) {
        this.subscription.unsubscribe();
        this.messageEvent.emit(2);
        this.query["tags"] = this.tags;
        this.query["product"] = event.srcElement.name;
        this.data.changeQuery(this.query);
    };
    SearchresultsComponent.prototype.findResults = function (ip, query) {
        var _this = this;
        var results = [];
        this.http.get(query)
            .subscribe(function (responsee) {
            _this.response = responsee;
            _this.http.get('http://' + ip + ':8765/observatory/api/products')
                .subscribe(function (respp) {
                _this.resp = respp;
                if (_this.response.pricesOut.length != 0) {
                    for (var i = 0; i < _this.response.pricesOut.length; i++) {
                        for (var j = 0; j < _this.resp.products.length; j++) {
                            if ((_this.response.pricesOut[i].productId === _this.resp.products[j]._id) && (!results.includes(_this.resp.products[j]))) {
                                results.push(_this.resp.products[j]);
                                _this.status = "success";
                            }
                        }
                    }
                }
                else {
                    _this.status = "no_results";
                }
            });
        }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status == 404) {
                _this.status = "no_results";
            }
            else {
                _this.status = "error";
            }
        });
        return results;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchresultsComponent.prototype, "messageEvent", void 0);
    SearchresultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchresults',
            template: __webpack_require__(/*! ./searchresults.component.html */ "./src/app/searchresults/searchresults.component.html"),
            styles: [__webpack_require__(/*! ./searchresults.component.scss */ "./src/app/searchresults/searchresults.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], SearchresultsComponent);
    return SearchresultsComponent;
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

module.exports = __webpack_require__(/*! /Users/christouandr7/Documents/GitHub/texnologia_logismikou/ObservatoryFrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map