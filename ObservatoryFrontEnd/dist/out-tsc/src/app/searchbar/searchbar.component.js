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
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.searchAttribute = "";
    }
    SearchbarComponent.prototype.ngOnInit = function () {
        this.url = this.route.snapshot.params.searchAttribute;
    };
    SearchbarComponent.prototype.search = function (searchAttribute) {
        if (this.searchAttribute == "") {
            window.alert("Σφάλμα Αναζήτησης! Δοκιμάστε ξανά!");
        }
        else
            this.router.navigate(['/searchresults/', searchAttribute]);
        location.reload();
    };
    SearchbarComponent = __decorate([
        Component({
            selector: 'app-searchbar',
            templateUrl: './searchbar.component.html',
            styleUrls: ['./searchbar.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, HttpClient, Router])
    ], SearchbarComponent);
    return SearchbarComponent;
}());
export { SearchbarComponent };
//# sourceMappingURL=searchbar.component.js.map