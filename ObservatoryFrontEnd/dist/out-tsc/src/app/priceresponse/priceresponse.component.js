var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        Component({
            selector: 'app-priceresponse',
            templateUrl: './priceresponse.component.html',
            styleUrls: ['./priceresponse.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute])
    ], PriceresponseComponent);
    return PriceresponseComponent;
}());
export { PriceresponseComponent };
//# sourceMappingURL=priceresponse.component.js.map