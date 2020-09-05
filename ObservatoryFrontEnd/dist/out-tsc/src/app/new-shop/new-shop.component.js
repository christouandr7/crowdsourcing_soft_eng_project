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
var NewShopComponent = /** @class */ (function () {
    function NewShopComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.locationChosen = false;
        this.lat = 37.97945;
        this.lng = 23.71622;
        this.showMapBoolean = false;
        this.shop = {};
        this.shp = {};
        this.ip = location.hostname;
        this.addr = true;
        this.duplicate = false;
    }
    NewShopComponent.prototype.ngOnInit = function () {
        this.lat = this.lat;
        this.lng = this.lng;
    };
    NewShopComponent.prototype.onSubmit = function () {
        var _this = this;
        this.shp.name = this.shop.sname;
        this.shp.address = this.shop.address;
        this.shp.lng = this.lng;
        this.shp.lat = this.lat;
        if (this.shop.tagsS != null) {
            this.shp.tags = this.shop.tagsS.split(" ");
        }
        else {
            this.shp.tags = [];
        }
        this.shp.tags = this.shp.tags.concat(this.shp.name.split(" "));
        this.shp.tags = this.shp.tags.concat(this.shp.address.split(" "));
        for (var i = 0; i < this.shp.tags.length; i++) {
            if (!isNaN(this.shp.tags[i])) {
                this.shp.tags.splice(i, 1);
                i--;
            }
            else if (!/^[a-zA-Zα-ωΑ-ΩΆ-Ώά-ώ]+$/.test(this.shp.tags[i])) {
                this.shp.tags.splice(i, 1);
                i--;
            }
            else if (this.shp.tags[i].length == 1) {
                this.shp.tags.splice(i, 1);
                i--;
            }
        }
        this.http.post("http://" + this.ip + ":8765/observatory/api/shops", this.shp)
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
    NewShopComponent.prototype.onChosenLocation = function (event) {
        var _this = this;
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        console.log(this.lat);
        console.log(this.lng);
        this.locationChosen = true;
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'location': {
                lat: this.lat,
                lng: this.lng
            }
        }, function (results, status) {
            _this.shop.address = results[0].formatted_address;
            console.log(_this.shop.address);
            document.getElementById("address").value = _this.shop.address;
        });
    };
    //https://blog.ng-book.com/angular-and-google-maps-a-tutorial/
    NewShopComponent.prototype.showMap = function () {
        if (this.showMapBoolean)
            this.showMapBoolean = false;
        else
            this.showMapBoolean = true;
        this.addr = false;
    };
    NewShopComponent.prototype.findLocation = function (address) {
        var _this = this;
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'address': address
        }, function (results, status) {
            console.log(results);
            if (status == google.maps.GeocoderStatus.OK) {
                _this.lat = results[0].geometry.location.lat();
                _this.lng = results[0].geometry.location.lng();
                _this.shop.address = results[0].formatted_address;
                console.log(_this.lat);
                console.log(_this.lng);
                console.log(_this.shop.address);
                document.getElementById("address").value = _this.shop.address;
            }
            else {
                alert("Sorry, this search produced no results.");
            }
        });
    };
    NewShopComponent.prototype.findAddress = function () {
        if (this.shop.address == null)
            alert("Δώσε έγκυρη διεύθυνση!");
        else {
            console.log(this.shop.address);
            this.findLocation(this.shop.address);
        }
    };
    NewShopComponent.prototype.refresh = function () { };
    NewShopComponent = __decorate([
        Component({
            selector: 'app-new-shop',
            templateUrl: './new-shop.component.html',
            styleUrls: ['./new-shop.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, HttpClient])
    ], NewShopComponent);
    return NewShopComponent;
}());
export { NewShopComponent };
//# sourceMappingURL=new-shop.component.js.map