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
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
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
        Component({
            selector: 'app-addproducts',
            templateUrl: './addproducts.component.html',
            styleUrls: ['./addproducts.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, HttpClient])
    ], AddproductsComponent);
    return AddproductsComponent;
}());
export { AddproductsComponent };
//# sourceMappingURL=addproducts.component.js.map