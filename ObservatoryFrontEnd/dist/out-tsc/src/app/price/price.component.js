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
import { HttpClient } from '@angular/common/http';
var PriceComponent = /** @class */ (function () {
    function PriceComponent(route, http) {
        this.route = route;
        this.http = http;
        //showMa: any[] = [];
        this.showMa = [];
        this.showMaState = [];
        this.results = [];
        this.boo = false;
    }
    PriceComponent.prototype.createDate = function (selected_date) {
        console.log(selected_date);
        return new Date(selected_date).toDateString();
    };
    PriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        var count = 0;
        this.qry = this.route.snapshot.params._id;
        this.ip = location.hostname;
        this.http.get('http://' + this.ip + ':8765/observatory/api/prices?' + this.qry)
            .subscribe(function (response) {
            _this.response = response;
            _this.productName = _this.response.pricesOut[0].productName;
            for (var i = 0; i < _this.response.pricesOut.length; i++) {
                _this.results[count] = _this.response.pricesOut[i];
                count++;
                _this.boo = true;
            }
            /*
                    //============FIND PRODUCT USING ID FROM API/PRODUCTS================//
                    this.http.get('http://'+this.ip+':8765/observatory/api/products/')
                     //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
                    .subscribe((response) => {
                    this.response = response;
                  
                    console.log(this.productId);
            
                    for (var i=0; i<this.response.products.length; i++){
                      if (this.productId == this.response.products[i]._id){
                        console.log(this.response.products[i].name);
                      }
                    }
            
            
                    })
            */
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
    PriceComponent = __decorate([
        Component({
            selector: 'app-price',
            templateUrl: './price.component.html',
            styleUrls: ['./price.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, HttpClient])
    ], PriceComponent);
    return PriceComponent;
}());
export { PriceComponent };
//# sourceMappingURL=price.component.js.map