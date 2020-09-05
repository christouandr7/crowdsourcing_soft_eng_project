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
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
var SearchresultsComponent = /** @class */ (function () {
    function SearchresultsComponent(route, http) {
        this.route = route;
        this.http = http;
        this.results = [];
        this.booRes = 3;
        this.boo = false;
        this.url = ".";
        this.res = this.results;
        this.res1 = this.str;
    }
    SearchresultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        var count = 0;
        this.url = this.route.snapshot.params.searchAttribute;
        if (this.url !== undefined) {
            var parameters = this.url.split(" ");
        }
        this.ip = location.hostname;
        if (parameters !== undefined) {
            parameters = parameters.map(function (parameters) {
                return "tags=" + parameters;
            });
        }
        if (parameters !== undefined) {
            this.str = parameters.toString();
        }
        if (this.str !== undefined) {
            this.str = this.str.replace(/,/g, "&");
        }
        console.log(this.str);
        this.http.get('http://' + this.ip + ':8765/observatory/api/prices?' + this.str)
            .subscribe(function (response) {
            _this.response = response;
            _this.http.get('http://' + _this.ip + ':8765/observatory/api/products')
                .subscribe(function (resp) {
                _this.resp = resp;
                for (var i = 0; i < _this.response.pricesOut.length; i++) {
                    for (var j = 0; j < _this.resp.products.length; j++) {
                        if ((_this.response.pricesOut[i].productId === _this.resp.products[j]._id) && (!_this.results.includes(_this.resp.products[j]))) {
                            _this.results[count] = _this.resp.products[j];
                            count++;
                            _this.booRes = 0;
                        }
                    }
                }
            });
        }, function (error) {
            if (error instanceof HttpErrorResponse && error.status == 404) {
                _this.booRes = 1;
            }
            else {
                _this.booRes = 2;
            }
        });
    };
    SearchresultsComponent = __decorate([
        Component({
            selector: 'app-searchresults',
            templateUrl: './searchresults.component.html',
            styleUrls: ['./searchresults.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, HttpClient])
    ], SearchresultsComponent);
    return SearchresultsComponent;
}());
export { SearchresultsComponent };
//# sourceMappingURL=searchresults.component.js.map