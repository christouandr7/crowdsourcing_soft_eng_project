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
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.mask = ['+', '3', '0', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.checked = false;
        this.model = JSON.parse(localStorage.getItem("currentUser"));
        this.edit = false;
        this.minDate = new Date("01/01/1950");
        this.maxDate = new Date("12/12/2000");
        this.value = new Date("00/00/0000");
        this.ip = location.hostname;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.checked) {
            this.newModel = {
                "email": this.model.email,
                "password": this.newPass,
                "firstname": this.model.firstname,
                "lastname": this.model.lastname,
                "phone_num": this.model.phone_num
            };
        }
        else {
            this.newModel = {
                "email": this.model.email,
                "firstname": this.model.firstname,
                "lastname": this.model.lastname,
                "phone_num": this.model.phone_num
            };
        }
        //  console.log(this.newModel);
        this.http.patch('http://' + this.ip + ':8765/observatory/api/user/' + this.model._id, this.newModel)
            .subscribe(function (response) {
            _this.response = response;
            localStorage.setItem('currentUser', JSON.stringify(_this.model));
            setTimeout(function () { location.reload(); }, 10);
        });
    };
    ProfileComponent.prototype.nowEdit = function () {
        this.edit = true;
    };
    ProfileComponent.prototype.reset = function () {
        this.newPass = "";
        this.confPass = "";
    };
    ProfileComponent = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, HttpClient])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map