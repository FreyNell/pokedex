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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_pokemones_pokemones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pokemones/pokemones.component */ "./src/app/components/pokemones/pokemones.component.ts");
/* harmony import */ var _components_pokedetail_pokedetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pokedetail/pokedetail.component */ "./src/app/components/pokedetail/pokedetail.component.ts");








const routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'detail/:namepoke', component: _components_pokedetail_pokedetail_component__WEBPACK_IMPORTED_MODULE_5__["PokedetailComponent"] },
    { path: '', component: _components_pokemones_pokemones_component__WEBPACK_IMPORTED_MODULE_4__["PokemonesComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




/**
 *  selector: es donde se pinta el elemento.
 *  templateUrl: la plantilla html que utilizará el elemento.
 *  styleUrls: estilos que utilizará el elemento.
 */
// Las vairables que puedo usar en el template html
class AppComponent {
    constructor() {
        this.title = 'pokedex';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__["TopbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#app[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcHB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_pokemones_pokemones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pokemones/pokemones.component */ "./src/app/components/pokemones/pokemones.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _components_pokedetail_pokedetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pokedetail/pokedetail.component */ "./src/app/components/pokedetail/pokedetail.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_pokemones_pokemones_component__WEBPACK_IMPORTED_MODULE_6__["PokemonesComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"],
        _components_pokedetail_pokedetail_component__WEBPACK_IMPORTED_MODULE_9__["PokedetailComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                // Componentes van aquí
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _components_pokemones_pokemones_component__WEBPACK_IMPORTED_MODULE_6__["PokemonesComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                    _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"],
                    _components_pokedetail_pokedetail_component__WEBPACK_IMPORTED_MODULE_9__["PokedetailComponent"]
                ],
                // Módulos van aquí
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                // Servicios van aquí
                providers: [],
                // Componente raíz va aquí
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _transversal_validEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transversal/validEmail */ "./src/app/transversal/validEmail.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "err-center": a0 }; };
const _c1 = function (a0) { return { "errorMsg": a0 }; };
class LoginComponent {
    constructor(router) {
        this.router = router;
        this.email = "";
        this.password = "";
        this.msgErr = "";
        this.err = false;
    }
    ngOnInit() {
        this.validSession();
    }
    logIn() {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));
            users.forEach(user => {
                if (user.email === this.email && user.password === this.password) {
                    sessionStorage.setItem("userAuth", user.fullName);
                }
            });
        }
        this.validSession();
    }
    validSession() {
        if (sessionStorage.getItem("userAuth")) {
            this.router.navigate(['/'], { skipLocationChange: true });
        }
        else {
            this.err = true;
            if (this.email && this.password) {
                this.msgErr = "Credenciales incorrectas";
            }
            else {
                this.err = false;
                this.msgErr = "";
            }
        }
    }
    signUp() {
        this.router.navigate(['/signup'], { skipLocationChange: true });
    }
    setEmail(event) {
        this.email = event.target.value;
        let re = new RegExp(_transversal_validEmail__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.err = !re.test(this.email);
        if (this.err) {
            this.msgErr = "El formato del email no es valido.";
        }
        else {
            this.msgErr = "";
        }
        if (event.keyCode === 13) {
            this.logIn();
        }
    }
    setPassword(event) {
        this.password = event.target.value;
        if (event.keyCode === 13) {
            this.logIn();
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 7, consts: [[1, "login"], [1, "login-triangle-left"], [1, "login-container"], [3, "ngClass"], [1, "login-content"], ["type", "text", "placeholder", "E-mail", 1, "input-email", 3, "keyup"], ["type", "password", "placeholder", "Contrase\u00F1a ", 1, "input-password", 3, "keyup"], [1, "buttons"], [3, "click"], [1, "login-triangle-right"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "INICIAR SESI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LoginComponent_Template_input_keyup_10_listener($event) { return ctx.setEmail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LoginComponent_Template_input_keyup_11_listener($event) { return ctx.setPassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_13_listener() { return ctx.logIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Iniciar sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_16_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.err));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.err));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msgErr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".login[_ngcontent-%COMP%] {\r\n    z-index: 3;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.login-container[_ngcontent-%COMP%]{\r\n    float: left;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(255,255,255,0.3);\r\n    height:260px;\r\n    width: 300px;\r\n}\r\n.login-triangle-left[_ngcontent-%COMP%]{\r\n    float: left;\r\n    border-right: 50px solid  rgba(255,255,255,0.3);\r\n    border-top: 130px solid transparent;\r\n    border-bottom: 130px solid transparent;\r\n}\r\n.login-triangle-right[_ngcontent-%COMP%]{    \r\n    float: left;\r\n    border-left: 50px solid rgba(255,255,255,0.3);\r\n    border-top: 130px solid transparent;\r\n    border-bottom: 130px solid transparent;\r\n}\r\nheader[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: var(--quaternary);\r\n    margin-bottom: 15px;\r\n}\r\n.login-content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.input-email[_ngcontent-%COMP%] {\r\n    background-image: url('account_box-24px.svg');\r\n}\r\n.input-password[_ngcontent-%COMP%] {\r\n    background-image: url('lock-black-24dp.svg');\r\n}\r\n.buttons[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n.buttons[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    text-transform: capitalize;\r\n    color: gray;\r\n}\r\n.err-center[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7SUFDWCwrQ0FBK0M7SUFDL0MsbUNBQW1DO0lBQ25DLHNDQUFzQztBQUMxQztBQUVBO0lBQ0ksV0FBVztJQUNYLDZDQUE2QztJQUM3QyxtQ0FBbUM7SUFDbkMsc0NBQXNDO0FBQzFDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSw2Q0FBMkQ7QUFDL0Q7QUFDQTtJQUNJLDRDQUEwRDtBQUM5RDtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgICBoZWlnaHQ6MjYwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi10cmlhbmdsZS1sZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDUwcHggc29saWQgIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgIGJvcmRlci10b3A6IDEzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTMwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuICAgXHJcbi5sb2dpbi10cmlhbmdsZS1yaWdodHsgICAgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgIGJvcmRlci10b3A6IDEzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTMwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubG9naW4tY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1lbWFpbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2FjY291bnRfYm94LTI0cHguc3ZnKTtcclxufVxyXG4uaW5wdXQtcGFzc3dvcmQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9sb2NrLWJsYWNrLTI0ZHAuc3ZnKTtcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9ucyA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmVyci1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pokedetail/pokedetail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pokedetail/pokedetail.component.ts ***!
  \***************************************************************/
/*! exports provided: PokedetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokedetailComponent", function() { return PokedetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/pokemon */ "./src/app/models/pokemon.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function PokedetailComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r2);
} }
function PokedetailComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3);
} }
class PokedetailComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        sessionStorage.setItem("poke", this.namepoke);
    }
    ngOnInit() {
        this.namepoke = this.route.snapshot.paramMap.get("namepoke");
        this.pokemon = new _models_pokemon__WEBPACK_IMPORTED_MODULE_1__["Pokemon"](this.namepoke);
    }
    backPokedex() {
        this.router.navigate(['/'], { skipLocationChange: true });
        sessionStorage.removeItem("poke");
    }
}
PokedetailComponent.ɵfac = function PokedetailComponent_Factory(t) { return new (t || PokedetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PokedetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokedetailComponent, selectors: [["app-pokedetail"]], decls: 36, vars: 7, consts: [[1, "pokedetail-container"], [3, "click"], [1, "pokemon-image", 3, "src"], [1, "pokemon-table"], [1, "pokemon-name"], ["class", "pokemon-name", 4, "ngFor", "ngForOf"]], template: function PokedetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokedetailComponent_Template_button_click_1_listener() { return ctx.backPokedex(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Volver a la Pokedex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tipos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PokedetailComponent_li_19_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Altura:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Peso:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lista de movimientos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PokedetailComponent_li_35_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pokemon.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.pokemon.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.namepoke);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemon.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemon.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@media(min-height:800px){\r\n    .pokedetail-container[_ngcontent-%COMP%]{    \r\n        margin-top: 70px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n    \r\n    .pokemon-image[_ngcontent-%COMP%]{\r\n        margin-top: 25px;\r\n        width:300px;\r\n        height:300px;\r\n    }\r\n    \r\n    .pokemon-table[_ngcontent-%COMP%]{\r\n        border-radius: 4px;\r\n        padding: 5px 5px 5px 5px;\r\n        background-color: rgba(255,255,255,0.7);\r\n        flex-direction: column;\r\n        margin-top: 15px;\r\n        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);\r\n        border-collapse: separate;\r\n        border-spacing: 0 1em;\r\n        width: 320px;\r\n        padding-left: 10px;\r\n    }\r\n    \r\n    .pokemon-name[_ngcontent-%COMP%]{\r\n        text-transform: capitalize;\r\n    }\r\n    \r\n    ul[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n        list-style: none;\r\n    }\r\n}\r\n\r\n@media(max-height:799px){\r\n    .pokedetail-container[_ngcontent-%COMP%]{    \r\n        margin-top: 70px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n    \r\n    .pokemon-image[_ngcontent-%COMP%]{\r\n        margin-top: 25px;\r\n        width:150px;\r\n        height:150px;\r\n    }\r\n    \r\n    .pokemon-table[_ngcontent-%COMP%]{\r\n        border-radius: 4px;\r\n        background-color: rgba(255,255,255,0.7);\r\n        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);\r\n    }\r\n    \r\n    .pokemon-name[_ngcontent-%COMP%]{\r\n        text-transform: capitalize;\r\n    }\r\n    \r\n    ul[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n        list-style: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlZGV0YWlsL3Bva2VkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsdUNBQXVDO1FBQ3ZDLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsOENBQThDO1FBQzlDLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsdUNBQXVDO1FBQ3ZDLDhDQUE4QztJQUNsRDs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bva2VkZXRhaWwvcG9rZWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi1oZWlnaHQ6ODAwcHgpe1xyXG4gICAgLnBva2VkZXRhaWwtY29udGFpbmVyeyAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucG9rZW1vbi1pbWFnZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgIGhlaWdodDozMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBva2Vtb24tdGFibGV7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMCAxZW07XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBva2Vtb24tbmFtZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdWwge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtaGVpZ2h0Ojc5OXB4KXtcclxuICAgIC5wb2tlZGV0YWlsLWNvbnRhaW5lcnsgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBva2Vtb24taW1hZ2V7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wb2tlbW9uLXRhYmxle1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBva2Vtb24tbmFtZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdWwge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokedetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokedetail',
                templateUrl: './pokedetail.component.html',
                styleUrls: ['./pokedetail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pokemones/pokemones.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pokemones/pokemones.component.ts ***!
  \*************************************************************/
/*! exports provided: PokemonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonesComponent", function() { return PokemonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/pokemon */ "./src/app/models/pokemon.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_pokemones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pokemones.service */ "./src/app/services/pokemones.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PokemonesComponent_div_5_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipo_r4 = ctx.$implicit;
    const pokemon_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-namePoke", pokemon_r1.name)("data-idPoke", pokemon_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tipo_r4, " ");
} }
function PokemonesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonesComponent_div_5_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goDetail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokemonesComponent_div_5_span_6_Template, 2, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-namePoke", pokemon_r1.name)("data-idPoke", pokemon_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-namePoke", pokemon_r1.name)("data-idPoke", pokemon_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pokemon_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-namePoke", pokemon_r1.name)("data-idPoke", pokemon_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-namePoke", pokemon_r1.name)("data-idPoke", pokemon_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-namePoke", pokemon_r1.name)("data-idPoke", pokemon_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pokemon_r1.type);
} }
class PokemonesComponent {
    constructor(router, pokeService) {
        this.router = router;
        this.pokeService = pokeService;
        this.pokemones = [];
        this.visibles = [];
    }
    ngOnInit() {
        this.pokeService.getPokes().subscribe(poke => {
            this.pokemones = poke.results.map(e => new _models_pokemon__WEBPACK_IMPORTED_MODULE_1__["Pokemon"](e.name));
            this.visibles = this.pokemones;
        });
    }
    namePoke(event) {
        this.search = event.target.value;
        let re = new RegExp(this.search, 'i');
        this.visibles = this.pokemones.filter(poke => re.test(poke.name));
    }
    goDetail(e) {
        if (e.target.dataset.namepoke) {
            this.router.navigate(['/detail/' + e.target.dataset.namepoke], { skipLocationChange: true });
        }
    }
}
PokemonesComponent.ɵfac = function PokemonesComponent_Factory(t) { return new (t || PokemonesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemones_service__WEBPACK_IMPORTED_MODULE_3__["PokemonesService"])); };
PokemonesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonesComponent, selectors: [["app-pokemones"]], decls: 6, vars: 1, consts: [[1, "pokemon-search"], ["type", "text", "placeholder", "Buscar...", 1, "input-search", 3, "keyup"], [1, "pokemon-container"], ["class", "pokemon-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "pokemon-card", 3, "click"], [1, "pokemon-name"], ["width", "100", "height", "100", 1, "pokemon-img", 3, "src"], [1, "pokemon-attribute-divisor"], [1, "pokemon-atribute-container"], ["class", "pokemon-atribute", 4, "ngFor", "ngForOf"], [1, "pokemon-atribute"]], template: function PokemonesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PokemonesComponent_Template_input_keyup_1_listener($event) { return ctx.namePoke($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonesComponent_div_5_Template, 7, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visibles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".pokemon-container[_ngcontent-%COMP%]{    \r\n    display: flex;\r\n    flex-flow: wrap;\r\n    overflow-y: auto;\r\n    justify-content: center;\r\n    z-index: 2;\r\n    height: 80%;\r\n}\r\n\r\n.pokemon-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n    background-color: rgba(255, 255, 255,0.7);\r\n    min-width: 200px;\r\n    min-height: 250px;\r\n    width: 200px;\r\n    height: 250px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center; \r\n    margin: 15px;\r\n    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);\r\n    transition: all .2s ease-in-out;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.pokemon-img[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n.pokemon-card[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.1);\r\n}\r\n\r\n.pokemon-name[_ngcontent-%COMP%]{\r\n    text-transform: capitalize;\r\n}\r\n\r\n.pokemon-attribute-divisor[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    margin-top: 15px;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.pokemon-atribute-container[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n}\r\n\r\n.pokemon-atribute[_ngcontent-%COMP%]{\r\n    margin:5px;    \r\n    border-radius: 4px;    \r\n    padding: 5px 10px 5px 10px ;\r\n}\r\n\r\n.pokemon-search[_ngcontent-%COMP%]{\r\n    margin:10px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.input-search[_ngcontent-%COMP%]{\r\n    background-image: url('search-24px.svg');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uZXMvcG9rZW1vbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osOENBQThDO0lBQzlDLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsd0NBQXdDO0FBQzVDOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3Q0FBc0Q7QUFDMUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bva2Vtb25lcy9wb2tlbW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2tlbW9uLWNvbnRhaW5lcnsgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4ucG9rZW1vbi1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsMC43KTtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wb2tlbW9uLWltZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucG9rZW1vbi1jYXJkOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ucG9rZW1vbi1uYW1le1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLnBva2Vtb24tYXR0cmlidXRlLWRpdmlzb3Ige1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4ucG9rZW1vbi1hdHJpYnV0ZS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5wb2tlbW9uLWF0cmlidXRle1xyXG4gICAgbWFyZ2luOjVweDsgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7ICAgIFxyXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHggO1xyXG59XHJcblxyXG4ucG9rZW1vbi1zZWFyY2h7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtc2VhcmNoe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9zZWFyY2gtMjRweC5zdmcpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemones',
                templateUrl: './pokemones.component.html',
                styleUrls: ['./pokemones.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_pokemones_service__WEBPACK_IMPORTED_MODULE_3__["PokemonesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _transversal_validEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transversal/validEmail */ "./src/app/transversal/validEmail.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "err-center": a0 }; };
const _c1 = function (a0) { return { "errorMsg": a0 }; };
const _c2 = function (a0) { return { "redError": a0 }; };
class RegisterComponent {
    constructor(router) {
        this.router = router;
        this.fullName = "";
        this.email = "";
        this.password = "";
        this.confirmpassword = "";
        this.successName = false;
        this.successfullName = false;
        this.successfullPass = false;
        this.successfullEmail = false;
        this.errorMsg = "";
        this.err = false;
    }
    ngOnInit() {
    }
    signUp() {
        let newUser = { fullName: this.fullName, email: this.email, password: this.password };
        let users;
        if (localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
            users.forEach(user => {
                if (user === newUser) {
                    this.err = true;
                    this.errorMsg = "Usuario ya existe!";
                }
            });
        }
        else {
            users = [];
        }
        if (this.successfullName && this.successfullEmail && this.successfullPass) {
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            this.router.navigate(['/login'], { skipLocationChange: true });
            alert("Registrado");
        }
    }
    cancel() {
        this.router.navigate(['/login'], { skipLocationChange: true });
    }
    setFullName(event) {
        this.fullName = event.target.value;
        let re = new RegExp("^[A-Za-z ]+$");
        this.successfullName = re.test(this.fullName);
        if (!this.successfullName) {
            this.errorMsg = "Nombre no tiene formato válido";
            this.err = true;
        }
        else {
            this.err = false;
        }
    }
    setEmail(event) {
        this.email = event.target.value;
        let re = new RegExp(_transversal_validEmail__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.successfullEmail = re.test(this.email);
        if (!this.successfullEmail) {
            this.errorMsg = "formato de E-mail incorrecto.";
            this.err = true;
        }
        else {
            this.err = false;
        }
    }
    setPassword(event) {
        this.password = event.target.value;
        let listRe = [
            { re: "(?=.*[a-z])", err: "La contraseña no tiene una letra minúscula." },
            { re: "(?=.*[A-Z]{2,})", err: "La contraseña no posee dos letras mayúsculas" },
            { re: "(?=.*[0-9])", err: "Debe haber almenos un número." },
            { re: "(?=.*[!@#$%^&*])", err: "Debe contener un caracter especial." },
            { re: "(?=.{8,})", err: "Debe superar los ocho caracteres" },
        ];
        if (this.confirmpassword === this.password) {
            this.errorMsg = "";
            this.err = false;
            let count = 0;
            listRe.forEach(r => {
                let re = RegExp(r.re);
                if (re.test(this.password)) {
                    count += 1;
                }
                else {
                    this.errorMsg = r.err;
                    this.err = true;
                }
            });
            if (count === listRe.length) {
                this.successfullPass = true;
                this.errorMsg = "";
                this.err = false;
            }
            else {
                this.err = true;
            }
        }
        else {
            this.successfullPass = false;
            this.err = true;
            this.errorMsg = "Las contraseñas no coinciden.";
        }
    }
    setConfirmPassword(event) {
        this.confirmpassword = event.target.value;
        if (this.confirmpassword === this.password) {
            this.successfullPass = true;
        }
        else {
            this.successfullPass = false;
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 21, vars: 19, consts: [[1, "register"], [1, "register-triangle-left"], [1, "register-container"], [1, "register-content"], [3, "ngClass"], ["type", "text", "placeholder", "Nombre completo", 1, "input-user", 3, "ngClass", "keyup"], ["type", "text", "placeholder", "Correo electr\u00F3nico", 1, "input-email", 3, "ngClass", "keyup"], ["type", "password", "placeholder", "Contrase\u00F1a", 1, "input-password", 3, "ngClass", "keyup"], ["type", "password", "placeholder", "Confirmar contrase\u00F1a", 1, "input-password", 3, "ngClass", "keyup"], [1, "buttons"], [3, "click"], [1, "register-triangle-right"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "REGISTRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RegisterComponent_Template_input_keyup_10_listener($event) { return ctx.setFullName($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RegisterComponent_Template_input_keyup_11_listener($event) { return ctx.setEmail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RegisterComponent_Template_input_keyup_12_listener($event) { return ctx.setPassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RegisterComponent_Template_input_keyup_13_listener($event) { return ctx.setConfirmPassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_15_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_18_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.err));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.err));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, !ctx.successfullName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, !ctx.successfullEmail));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, !ctx.successfullPass));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, !ctx.successfullPass));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".register[_ngcontent-%COMP%] {\r\n    z-index: 3;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.register-container[_ngcontent-%COMP%]{\r\n    float: left;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(255,255,255,0.3);\r\n    height:300px;\r\n    width: 300px;\r\n}\r\n.register-triangle-left[_ngcontent-%COMP%]{\r\n    float: left;\r\n    border-right: 50px solid  rgba(255,255,255,0.3);\r\n    border-top: 150px solid transparent;\r\n    border-bottom: 150px solid transparent;\r\n}\r\n.register-triangle-right[_ngcontent-%COMP%]{    \r\n    float: left;\r\n    border-left: 50px solid rgba(255,255,255,0.3);\r\n    border-top: 150px solid transparent;\r\n    border-bottom: 150px solid transparent;\r\n}\r\nheader[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: var(--quaternary);\r\n    margin-bottom: 15px;\r\n}\r\n.register-content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.input-user[_ngcontent-%COMP%] {\r\n    background-image: url('account_box-24px.svg');\r\n}\r\n.input-email[_ngcontent-%COMP%] {\r\n    background-image: url('alternate_email-24px.svg');\r\n}\r\n.input-password[_ngcontent-%COMP%] {\r\n    background-image: url('lock-black-24dp.svg');\r\n}\r\n.buttons[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n.buttons[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    text-transform: capitalize;\r\n    color: gray;\r\n}\r\n.err-center[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;   \r\n}\r\n.redError[_ngcontent-%COMP%] {\r\n    border:1px solid;\r\n    border-color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7SUFDWCwrQ0FBK0M7SUFDL0MsbUNBQW1DO0lBQ25DLHNDQUFzQztBQUMxQztBQUVBO0lBQ0ksV0FBVztJQUNYLDZDQUE2QztJQUM3QyxtQ0FBbUM7SUFDbkMsc0NBQXNDO0FBQzFDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSw2Q0FBMkQ7QUFDL0Q7QUFDQTtJQUNJLGlEQUErRDtBQUNuRTtBQUNBO0lBQ0ksNENBQTBEO0FBQzlEO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnJlZ2lzdGVyLWNvbnRhaW5lcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgIGhlaWdodDozMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLXRyaWFuZ2xlLWxlZnR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCAgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICAgYm9yZGVyLXRvcDogMTUwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4gICBcclxuLnJlZ2lzdGVyLXRyaWFuZ2xlLXJpZ2h0eyAgICBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICAgYm9yZGVyLXRvcDogMTUwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0LXVzZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hY2NvdW50X2JveC0yNHB4LnN2Zyk7XHJcbn1cclxuLmlucHV0LWVtYWlsIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYWx0ZXJuYXRlX2VtYWlsLTI0cHguc3ZnKTtcclxufVxyXG4uaW5wdXQtcGFzc3dvcmQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9sb2NrLWJsYWNrLTI0ZHAuc3ZnKTtcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9ucyA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmVyci1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxyXG59XHJcblxyXG4ucmVkRXJyb3Ige1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/topbar/topbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.ts ***!
  \*******************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TopbarComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TopbarComponent {
    constructor(router) {
        this.router = router;
        this.user = "";
    }
    ngOnInit() {
        if (sessionStorage.getItem("userAuth")) {
            this.router.navigate(['/'], { skipLocationChange: true });
            this.user = sessionStorage.getItem("userAuth");
        }
        else {
            this.router.navigate(['/login'], { skipLocationChange: true });
        }
    }
    ngDoCheck() {
        if (sessionStorage.getItem("userAuth")) {
            this.user = sessionStorage.getItem("userAuth");
        }
    }
    logOut() {
        sessionStorage.clear();
        this.user = "";
        this.router.navigate(['/login'], { skipLocationChange: true });
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], decls: 7, vars: 2, consts: [["src", "logo.png", "width", "32", "height", "32", 1, "logo"], ["id", "title"], ["id", "user"], ["id", "logout", 3, "click", 4, "ngIf"], ["id", "logout", 3, "click"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pokedex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TopbarComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user !== "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    vertical-align: center;\r\n    height: 50px;\r\n    padding: 10px 10px 10px 10px;\r\n    background-color: rgba(var(--primary),0.1);\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\r\n   color:var(--quaternary);\r\n   margin-right: 10px;\r\n   text-align: right;\r\n   font-size: 18px;\r\n   margin-top: 0;\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    flex-grow: 1;\r\n    text-align: left;\r\n}\r\n\r\n#user[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    margin-top:0px ;\r\n    margin-right:10px ;\r\n    margin-left:10px ;\r\n}\r\n\r\n@media(max-width:375px){\r\n    #user[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        width: 100px;\r\n        margin-top: 5px;\r\n    }\r\n    #logout[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n        height: 32px;\r\n    }\r\n    #title[_ngcontent-%COMP%] {\r\n        margin-left:10px ;\r\n        font-size: 18px;\r\n    }\r\n    nav[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\r\n       color:var(--quaternary);\r\n       margin-right: 10px;\r\n       margin-top: 0;\r\n    }\r\n    \r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-top:0px ;\r\n        margin-right:0px ;\r\n        margin-left:0px ;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QiwwQ0FBMEM7QUFDOUM7O0FBRUE7R0FDRyx1QkFBdUI7R0FDdkIsa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2YsYUFBYTtBQUNoQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0lBQ0E7T0FDRyx1QkFBdUI7T0FDdkIsa0JBQWtCO09BQ2xCLGFBQWE7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnkpLDAuMSk7XHJcbn1cclxuXHJcbm5hdiA+IGgzIHtcclxuICAgY29sb3I6dmFyKC0tcXVhdGVybmFyeSk7XHJcbiAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4jdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4jdXNlcntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIG1hcmdpbi10b3A6MHB4IDtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4IDtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHggO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjM3NXB4KXtcclxuICAgICN1c2VyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgICNsb2dvdXR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbiAgICAjdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHggO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIG5hdiA+IGgzIHtcclxuICAgICAgIGNvbG9yOnZhcigtLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6MHB4IDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4IDtcclxuICAgICAgICBtYXJnaW4tbGVmdDowcHggO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topbar',
                templateUrl: './topbar.component.html',
                styleUrls: ['./topbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/pokemon.ts":
/*!***********************************!*\
  !*** ./src/app/models/pokemon.ts ***!
  \***********************************/
/*! exports provided: Pokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pokemon", function() { return Pokemon; });
class Pokemon {
    constructor(poke) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + poke)
            .then(rta => rta.json()).then(rta => {
            this.name = rta.name;
            this.type = rta.types.map(type => type.type.name);
            this.img = rta.sprites.front_default;
            console.log(this.img);
            this.skills = rta.abilities.map(abi => abi.ability.name);
            this.height = rta.height;
            this.weight = rta.weight;
            this.id = rta.id;
        });
    }
}


/***/ }),

/***/ "./src/app/services/pokemones.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/pokemones.service.ts ***!
  \***********************************************/
/*! exports provided: PokemonesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonesService", function() { return PokemonesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class PokemonesService {
    constructor(http) {
        this.http = http;
        this.pokeUrl = "https://pokeapi.co/api/v2/pokemon";
        this.pokeLimit = "?limit=50";
    }
    // Obtener
    getPokes() {
        return this.http.get(`${this.pokeUrl}${this.pokeLimit}`);
    }
}
PokemonesService.ɵfac = function PokemonesService_Factory(t) { return new (t || PokemonesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PokemonesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonesService, factory: PokemonesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/transversal/validEmail.js":
/*!*******************************************!*\
  !*** ./src/app/transversal/validEmail.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const validEmail = "^[A-Za-z0-9]+[\.\_\-]{0,1}[A-Za-z0-9]+@[A-Za-z0-9]+[\.\_\-]{0,1}[A-Za-z0-9]+\.[A-Za-z]+$";
/* harmony default export */ __webpack_exports__["default"] = (validEmail);

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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\freym\Documents\pokedex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map