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
        Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], ContactComponent);
    return ContactComponent;
}());
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map