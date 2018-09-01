webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__orderby_pipe__ = __webpack_require__("../../../../../src/app/orderby.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard/cart', component: __WEBPACK_IMPORTED_MODULE_17__components_cart_cart_component__["a" /* CartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_product_product_component__["a" /* ProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_18__orderby_pipe__["a" /* OrderbyPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>My Cart</h1>\n<table class=\"table\" *ngIf='selectedProducts && selectedProducts.length' style=\"margin-bottom: 0px; margin-right: 0px\">\n  <thead>\n    <tr class=\"tableheadercolor\">\n      <th class=\"center\">Product</th>\n      <th class=\"center\">Quantity</th>\n      <th class=\"center\">Price</th>\n      <th class=\"center\">Total Price</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let product of selectedProducts; let i=index\">\n      <td class=\"center\">{{ product.productName }}</td>\n      <td class=\"center\">\n        <input type=\"number\" ngDefaultControl [(ngModel)]=\"product.quantity\"\n          min=\"1\" max=\"100\" (change)=\"updateCart(product)\">\n      </td>\n      <td class=\"center\">{{ product.price | currency:'INR':'symbol':'1.2-2' }}</td>\n      <td class=\"center\">{{ product.totalPrice | currency:'INR':'symbol':'1.2-2'}}</td>\n      <td>\n        <a (click)=\"remove(i)\">\n          <span title=\"Delete\" >X</span>\n        </a>\n      </td>\n\n    </tr>\n\n    \n    <tr>\n      <th class=\"center\">Total</th>\n      <td></td>\n      <td></td>\n      <td class=\"center\">\n        <strong> {{ grandTotal }}</strong>\n      </td>\n    </tr>\n\n    <tr>\n      <td></td>\n\n      <td>\n        <button type=\"button\" class=\"btn btn-primary\" (click)='onBack()'>\n          <span></span> Continue Shopping\n        </button>\n      </td>\n      <td>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkout()\">\n          Checkout\n          <span class=\"glyphicon glyphicon-play\"></span>\n        </button>\n      </td>\n      <td></td>\n      <td></td>\n    </tr>\n\n  </tbody>\n\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(authService, _route, _router) {
        this.authService = authService;
        this._route = _route;
        this._router = _router;
        this.selectedProducts = [];
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.grandTotal = 0;
        this.quantity = 0;
        this.chect = [{ "orderId": "ORD_1",
                "_id": "5b852c33f03253d25dd2003c",
                "userId": "gopinath",
                "productName": "Oranges - Navel, 72",
                "price": 1465,
                "quantity": 1,
                "dateOfPurchase": "Wed Aug 29 2018 17:22:19 GMT+0530 (India Standard Time)",
                "totalPrice": 1465 }];
        this.selectedProducts = this.authService.selectedProducts;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem('grandTotal', this.grandTotal);
        sessionStorage.setItem('selectedItems', this.quantity);
        console.log(this.authService.selectedProducts);
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.updateCart = function (product) {
        product.totalPrice = product.price * product.quantity;
        this.grandTotal = 0;
        this.quantity = 0;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
        sessionStorage.setItem('grandTotal', this.grandTotal);
        sessionStorage.setItem('selectedItems', this.quantity);
        console.log('updated');
    };
    CartComponent.prototype.remove = function (index) {
        this.selectedProducts.splice(index, 1);
        this.grandTotal = 0;
        this.quantity = 0;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
        sessionStorage.setItem('grandTotal', this.grandTotal);
        sessionStorage.setItem('selectedItems', this.quantity);
    };
    CartComponent.prototype.onBack = function () {
        this._router.navigate(['/dashboard']);
        console.log(this.selectedProducts._id);
    };
    CartComponent.prototype.checkout = function () {
        this.submit = false;
        this.authService.selectedProducts = [];
        sessionStorage.removeItem('selectedProducts');
        alert('Order placed successfully, Thanks');
        this._router.navigate(['/']);
    };
    CartComponent.prototype.gotoProducts = function () {
        sessionStorage.removeItem('grandTotal');
        sessionStorage.removeItem('selectedItems');
        this._router.navigate(['/dashboard']);
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu {\r\n  min-width: 30rem;\r\n  padding: 1rem 1rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <div>\n                <h2>Dashboard </h2>\n            </div>\n            \n        </div>\n\n        <div class=\"col-6\">\n            <div class=\"float-right\">\n                <h3>Item's :<a [routerLink]=\"['cart']\">{{ selectedItems }}</a> | Total: {{ total }}</h3>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row m-1\">\n        <div class=\"col-xs-4 w-25\">\n            <div class=\"dropdown show\">\n                <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Filter\n                </a>\n              \n                <div class=\"dropdown-menu w-50\" aria-labelledby=\"dropdownMenuLink\">\n                  <div class=\"row\">\n                      <div class=\"col-4\">\n                        <h4>Manufacturer</h4>\n                        <li *ngFor=\"let manufac of manufacturers\">\n                            <input type=\"checkbox\" [ngModel]=\"manufac.checked\" (change)=\"filter(manufac)\">\n                            <label> {{manufac.id}} </label>\n                        </li>                        \n                      </div>\n                      <div class=\"col-4\">\n                        <h4>OS</h4>\n                        <li *ngFor=\"let ostypes of os\">\n                            <input type=\"checkbox\" [ngModel]=\"ostypes.checked\" (change)=\"filter(ostypes)\">\n                            <label> {{ostypes.id}}</label>\n                        </li>\n                    </div>\n                    <div class=\"col-4\">\n                        <h4>Price Range</h4>\n                        <li *ngFor=\"let price of price_range\">\n                            <input type=\"checkbox\" [ngModel]=\"price.checked\" (change)=filter(price)>\n                            <label>{{ price.id}} </label>\n                        </li>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n        </div><!--filter code end here -->\n\n        <div class=\"col-xs-4 w-50\">\n            <nav aria-label=\"Page navigation example\">\n                <ul class=\"pagination justify-content-center\">\n                    <li class=\"page-item\">\n                    <a class=\"page-link\" ngDefaultControl [(ngModel)]=\"previous\" name=\"previous\" (click)=\"previousPage()\">Previous</a>\n                    </li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                    <li class=\"page-item\">\n                    <a class=\"page-link\" ngDefaultControl [(ngModel)]=\"next\" name=\"next\" (click)=\"nextPage()\">Next</a>\n                    </li>\n                </ul>\n            </nav>\n        </div><!-- pagination html code end here -->\n\n        <div class=\"col-xs-4 w-25\">\n            <!-- <h4 class=\"d-inline\">Sort By</h4> -->\n            <select class=\"form-control\" name=\"Sort By\" [ngModel]=\"sortoption\" (change)=\"onChange($event.target.value)\">\n                <option value=\"popularity\">Popularity</option>\n                <option value=\"pricelh\">Price - Low to High</option>\n                <option value=\"pricehl\">Price - High to Low</option>\n            </select>\n        </div><!-- sorting code end here -->\n    </div>\n</div>\n            \n<!--Previous: {{ previous }} \nNext: {{ next }} -->\n\n\n<div class=\"container\">\n    <div class=\"row\" >\n        <div class=\"col-sm-4 d-flex mb-2\" *ngFor= \"let p of products | orderby:sortoption; let i = index\">\n            <div class=\"card p-1\">\n                    <a [routerLink]=\"[p._id]\"><img class=\"card-img-top img\" src='{{p.imageUrl}}' style=\"width: 100%; height: 200px;\"></a>\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{p.productName}}</h5>\n                    <h4>Price: {{p.price}}</h4>\n                    <div class=\"card-text\">\n                        <span class=\"text-info\">Product ID: </span>{{p._id}}<br>\n                        <span class=\"text-info\">Product Code: </span>{{p.productCode}}<br>\n                        <div class=\"text-justify\">\n                                <span class=\"text-info\">Description: </span>{{ p.description}}<br>\n                        </div>\n\t\t\t\t\t\t<span class=\"text-info\">Manufacturer: </span>{{ p.manufacturer}}<br>\n\t\t\t\t\t\t<span class=\"text-info\">Os: </span>{{ p.ostype}}<br>\n                        <span class=\"text-info\">Rating: </span>{{p.rating}}\n                    </div>\n                    <a (click)=\"addCart(p._id)\" class=\"btn btn-primary\">Add To Cart</a>\n                    <a [routerLink]=\"[p._id]\" class=\"btn btn-secondary\">View Product</a>\n                    </div>\t\t\t\t\t\n            </div>\n        </div><!-- col 1 -->\n\n        <!--\n        <div class=\"col-xs-4\" >\n            <div class=\"card\" >\n                <img class=\"card-img-top img\" src='{{products[i+1].imageUrl}}' style=\"width: 100%; \">\n                <div class=\"card-body\">\n                <h5 class=\"card-title\">{{products[i+1].productName}}</h5>\n                <h4>Price: {{products[i+1].price}}</h4>\n                <div class=\"card-text\">\n                    Product ID: {{products[i+1]._id}}<br><br>\n                    Product Code: {{products[i+1].productCode}}<br><br>\n                    <div>\n                        Description: {{ products[i+1].description}}<br><br>\n                    </div>\n                    Manufacturer: {{ products[i+1].manufacturer}}<br><br>\n                    Os: {{ products[i+1].ostype}}<br><br>\n                    Rating: {{products[i+1].rating}}\n                </div>\n                <a (click)=\"addCart(products[i+1]._id)\" class=\"btn btn-primary\">Add To Cart</a>\n                <a [routerLink]=\"[products[i+1]._id]\" class=\"btn btn-secondary\">View Product</a>\n                </div>\n                \n            </div>\n        </div><!-- col 2 -->\n        <!--\n        <div class=\"col-xs-4\" >\n            <div class=\"card\" >\n                <img class=\"card-img-top img\" src='{{products[i+2].imageUrl}}' style=\"width: 100%;\">\n                <div class=\"card-body\">\n                <h5 class=\"card-title\">{{products[i+2].productName}}</h5>\n                <h4>Price: {{products[i+2].price}}</h4>\n                <div class=\"card-text\">\n                    Product ID: {{products[i+2]._id}}<br><br>\n                    Product Code: {{products[i+2].productCode}}<br><br>\n                    <div>\n                        Description: {{ products[i+2].description}}<br><br>\n                    </div>\n                    Manufacturer: {{ products[i+2].manufacturer}}<br><br>\n                    Os: {{ products[i+2].ostype}}<br><br>\n                    Rating: {{products[i+2].rating}}\n                </div>\n                <a (click)=\"addCart(products[i+2]._id)\" class=\"btn btn-primary\">Add To Cart</a>\n                <a [routerLink]=\"[products[i+2]._id]\" class=\"btn btn-secondary\">View Product</a>\n                </div>\n                \n            </div>\n        </div><!-- col 3 -->\n        <!--\n        <div class=\"col-xs-3\" >\n            <div class=\"card\" >\n                <img class=\"card-img-top img\" src='{{products[i+3].imageUrl}}' style=\"width: 100%;\">\n                <div class=\"card-body\">\n                <h5 class=\"card-title\">{{products[i+3].productName}}</h5>\n                <h4>Price: {{products[i+3].price}}</h4>\n                <div class=\"card-text\" >\n                    Product ID: {{products[i+3]._id}}<br><br>\n                    Product Code: {{products[i+3].productCode}}<br><br>\n                    <div>\n                        Description: {{ products[i+3].description}}<br><br>\n                    </div>\n                    Manufacturer: {{ products[i+3].manufacturer}}<br><br>\n                    Os: {{ products[i+3].ostype}}<br><br>\n                    Rating: {{products[i+3].rating}}\n                </div>\n                <a (click)=\"addCart(products[i+3]._id)\" class=\"btn btn-primary\">Add To Cart</a>\n                <a [routerLink]=\"[products[i+3]._id]\" class=\"btn btn-secondary\">View Product</a>\n                </div>\n                \n            </div>\n        </div><!-- col 4 -->\n          \n        \n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
        this.products = [];
        this.myCart = [];
        this.orderId = 0;
        this.total = 0;
        this.selectedItems = 0;
        this.selectedProducts = [];
        this.current = 1;
        //sorting var
        this.sortoption = '';
        //filter variable
        this.manufacturers = [{ 'id': 'Samsung', 'checked': false },
            { 'id': 'Microsoft', 'checked': false },
            { 'id': 'Apple', 'checked': false },
            { 'id': 'Micromax', 'checked': false }];
        this.os = [{ 'id': 'Android', 'checked': false },
            { 'id': 'Windows', 'checked': false },
            { 'id': 'iOS', 'checked': false }];
        this.price_range = [{ 'id': '3000-5000', 'checked': false },
            { 'id': '13000-15000', 'checked': false },
            { 'id': '19000-35000', 'checked': false },
            { 'id': '40000-70000', 'checked': false }];
        this.chkmanosprice = [];
        this.loadProducts(1);
        this.orderId++;
        if (authService.selectedProducts.length > 0) {
            this.selectedItems = Number(sessionStorage.getItem('selectedItems'));
            this.total = Number(sessionStorage.getItem('grandTotal'));
        }
        else {
            console.log('no items in the selected product array');
        }
        this.selectedProducts = this.authService.selectedProducts;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            sessionStorage.setItem('grandTotal', this.grandTotal);
        }
        console.log(this.grandTotal);
    }
    DashboardComponent.prototype.previousPage = function () {
        if (this.current == 0 || this.current < 0) {
            this.current = 1;
            this.loadProducts(this.current);
        }
        else {
            this.previous = this.current;
            this.current--;
            this.loadProducts(this.previous);
        }
    };
    DashboardComponent.prototype.nextPage = function () {
        if (this.current == 0 || this.current >= 10) {
            this.current = 1;
            this.loadProducts(this.current);
        }
        else if (this.current == 1) {
            this.current++;
            this.next = this.current;
            this.loadProducts(this.next);
        }
        else {
            this.next = this.current + 1;
            this.loadProducts(this.next);
            this.current++;
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        /* Working code This below code fetch all the data from Database
        ----------------------------------------------------------------
             this.authService.getProducts().subscribe( data =>{
              if(data){
                console.log("Found data " + data);
                //this.products.push(data);
                //this.products.push(data[0]);
                data.forEach(element => {
                  this.products.push(element);
                });
                
                //this.products = data;
                
              }else{
                console.log('No Product details in DB');
                this.products.push({
                  "title": 'One post',
                  "description": 'Test data'
                });
              }
            }); */
    };
    DashboardComponent.prototype.loadProducts = function (pageNumber) {
        var _this = this;
        this.authService.getProductByQuery(pageNumber)
            .subscribe(function (products) {
            _this.authService.Products = products; // getting values form serive(getProducts function) and store it back in service Array variable
            _this.products = _this.authService.Products; // storing values in local Arr arr(producrs) which is feteched from service(Produts Array variable)
        });
        /*this.authService.getProducts()
          .subscribe( products => {
            this.authService.Products = products; // getting values form serive(getProducts function) and store it back in service Array variable
            this.products = this.authService.Products; // storing values in local Arr arr(producrs) which is feteched from service(Produts Array variable)
          });*/
    };
    DashboardComponent.prototype.addCart = function (id) {
        this.selectedItems += 1;
        var product = this.authService.Products.filter(function (currProduct) { return currProduct._id == id; })[0];
        console.log('product price', product.price);
        this.total += product.price;
        var sp = this.authService.selectedProducts.filter(function (currProduct) { return currProduct._id == id; })[0];
        sessionStorage.setItem('selectedItems', this.selectedItems);
        if (sp) {
            var index = this.authService.selectedProducts.findIndex(function (currProduct) { return currProduct._id == id; });
            this.authService.selectedProducts[index].quantity += 1;
            this.authService.selectedProducts[index].totalPrice += product.price;
        }
        else {
            this.authService.selectedProducts.push({
                "orderId": 'ORD_' + this.orderId,
                "_id": id,
                "userId": 'gopinath',
                "productName": product.productName,
                "price": product.price,
                "quantity": 1,
                "dateOfPurchase": new Date().toString(),
                "totalPrice": product.price * 1
            });
            console.log('add to cart from else', this.authService.selectedProducts);
            sessionStorage.setItem('selectedProducts', JSON.stringify(this.authService.selectedProducts));
            this.orderId++;
        }
    };
    DashboardComponent.prototype.onChange = function (value) {
        this.sortoption = value;
    };
    DashboardComponent.prototype.filter = function (name) {
        var checkedProducts;
        var chkman = [];
        var chkmanos = [];
        this.chkmanosprice = [];
        var index = 0;
        checkedProducts = this.authService.Products;
        name.checked = (name.checked) ? false : true;
        this.checkedManufacturers = this.manufacturers.filter(function (product) { return product.checked; }).map(function (product) { return product.id; });
        this.checkedOS = this.os.filter(function (product) { return product.checked; }).map(function (product) { return product.id; });
        this.checkedPrice = this.price_range.filter(function (product) { return product.checked; }).map(function (product) { return product.id; });
        if (this.checkedManufacturers.length > 0) {
            for (var i = 0; i < this.checkedManufacturers.length; i++) {
                for (var j = 0; j < checkedProducts.length; j++) {
                    if (checkedProducts[j].manufacturer.toLowerCase() === this.checkedManufacturers[i].toLowerCase()) {
                        chkman.push(checkedProducts[j]);
                    }
                }
            }
        }
        else {
            chkman = checkedProducts;
        }
        if (this.checkedOS.length > 0) {
            for (var i = 0; i < this.checkedOS.length; i++) {
                for (var j = 0; j < chkman.length; j++) {
                    if (chkman[j].ostype.toLowerCase() === this.checkedOS[i].toLowerCase()) {
                        chkmanos.push(chkman[j]);
                    }
                }
            }
        }
        else {
            chkmanos = chkman;
        }
        if (this.checkedPrice.length > 0) {
            for (var i = 0; i < this.checkedPrice.length; i++) {
                for (var j = 0; j < chkmanos.length; j++) {
                    if (this.checkedPrice[i] === '3000-5000') {
                        if (chkmanos[j].price >= 3000 && chkmanos[j].price <= 5000) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                    if (this.checkedPrice[i] === '13000-15000') {
                        if (chkmanos[j].price > 13000 && chkmanos[j].price <= 15000) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                    if (this.checkedPrice[i] === '19000-35000') {
                        if (chkmanos[j].price > 19000 && chkmanos[j].price <= 35000) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                    if (this.checkedPrice[i] === '40000-70000') {
                        if (chkmanos[j].price > 40000 && chkmanos[j].price <= 70000) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                }
            }
        }
        else {
            this.chkmanosprice = chkmanos;
        }
        this.products = [];
        this.products = this.chkmanosprice;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN Authentication App</h1>\n  <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch </p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-dark\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"Username\">Username</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n        <label for=\"Password\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLogged = Boolean(localStorage.getItem('user'));
        if (this.isLogged) {
            console.log(this.isLogged);
            this.router.navigate(['/']);
        }
        else {
            console.log('Not logged in already');
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n      <a class=\"navbar-brand\" href=\"#\">MEAN Auth App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span></span></a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-lg-8 mt-4 mb-2\" *ngFor= \"let p of product\">\n          <div class=\"card\" >\n              <div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">{{p.productName}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top img\" src='{{p.imageUrl}}' style=\"width: 100%; height: 50%;\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5>{{p.productName}}</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Price: {{p.price}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tProduct ID: {{p._id}}<br><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\tProduct Code: {{p.productCode}}<br><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\tDescription: {{ p.description}}<br><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\tManufacturer: {{ p.manufacturer}}<br><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\tOs: {{ p.ostype}}<br><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\tRating: {{p.rating}}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-success\">Book Now</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t  \n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = (function () {
    function ProductComponent(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.product = [];
        this.id = '';
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
    }
    ProductComponent.prototype.ngOnInit = function () {
        /* this.id = +this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        
          this.id = '5b62c6681e2cc0c01ddbeb37';
          console.log(this.id); */
        //this.product = this.authService.getProduct.filter((product: any) => product.productId === this.id)[0];
        var _this = this;
        this.authService.getProduct(this.id).subscribe(function (data) {
            if (data) {
                console.log("Found data " + data);
                _this.product.push(data);
                //this.product.push(data[0]);
                //data.forEach(element => {
                //  this.product.push(element);
                //});
                console.log("Product details " + _this.product);
            }
            else {
                console.log('No Product details in DB');
                _this.product.push({
                    "title": 'One post',
                    "description": 'Test data'
                });
            }
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/components/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.isLogged = Boolean(localStorage.getItem('user'));
        if (this.isLogged) {
            console.log(this.isLogged);
            this.router.navigate(['/']);
        }
        else {
            console.log('Not logged in already');
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderbyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderbyPipe = (function () {
    function OrderbyPipe() {
    }
    OrderbyPipe.prototype.transform = function (value, args) {
        if (args === 'popularity') {
            return value.sort(function (a, b) {
                if (a.rating > b.rating) {
                    return -1;
                }
                else if (a.rating < b.rating) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (args === 'pricelh') {
            return value.sort(function (a, b) {
                if (a.price < b.price) {
                    return -1;
                }
                else if (a.price > b.price) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (args === 'pricehl') {
            return value.sort(function (a, b) {
                if (a.price > b.price) {
                    return -1;
                }
                else if (a.price < b.price) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return value;
    };
    OrderbyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderby'
        })
    ], OrderbyPipe);
    return OrderbyPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    //---------------------------------------------------------------------------------------
    function AuthService(http) {
        this.http = http;
        //my own service properties--------------------------------------------------------------
        this.selectedProducts = [];
        this.Products = [];
        //this.isDev = true;  // Change to false before deployment
        if (sessionStorage.getItem('selectedProducts')) {
            this.selectedProducts = JSON.parse(sessionStorage.getItem('selectedProducts'));
        }
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //my own service--------------------------------------------------------------
    AuthService.prototype.getProducts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/data', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProduct = function (id) {
        return this.getProducts()
            .map(function (products) { return products.filter(function (products) { return products._id === id; })[0]; });
    };
    AuthService.prototype.getProdutBySize = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/dataPagining', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProductByQuery = function (pageNum) {
        console.log('pageNum ', pageNum);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('pageNumber', pageNum);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/dataByQuery/?pageNumber=' + pageNum, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //-------------------------------------------------------------------------------
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        sessionStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map