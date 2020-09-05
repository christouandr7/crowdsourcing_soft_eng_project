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
        Component({
            selector: 'app-mainsearch',
            templateUrl: './mainsearch.component.html',
            styleUrls: ['./mainsearch.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], MainsearchComponent);
    return MainsearchComponent;
}());
export { MainsearchComponent };
//# sourceMappingURL=mainsearch.component.js.map