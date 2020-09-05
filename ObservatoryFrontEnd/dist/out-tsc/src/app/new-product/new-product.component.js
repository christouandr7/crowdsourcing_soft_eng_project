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
        Component({
            selector: 'app-new-product',
            templateUrl: './new-product.component.html',
            styleUrls: ['./new-product.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, HttpClient])
    ], NewProductComponent);
    return NewProductComponent;
}());
export { NewProductComponent };
//# sourceMappingURL=new-product.component.js.map