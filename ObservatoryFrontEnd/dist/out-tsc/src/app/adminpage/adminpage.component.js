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
var AdminpageComponent = /** @class */ (function () {
    function AdminpageComponent(route, http) {
        this.route = route;
        this.http = http;
        this.showMsg = false;
        this.products = [];
        this.users = [];
        this.show = [];
        this.prices = [];
        this.shops = [];
        this.withdrawnProducts = [];
        this.withdrawnPrices = [];
        this.messages = [];
        this.start = 0;
        this.count = 20;
        this.c = 1;
    }
    //OPTION 0 = SHOW ALL PRODUCTS
    //OPTION 1 = SHOW ALL PRICES
    //OPTION 2 = SHOW ALL SHOPS
    //OPTION 3 = SHOW ALL WITHDRAWN PRODUCTS
    //OPTION 4 = SHOW ALL WITHDRAWN PRICES
    //OPTION 5 = SHOW ALL USERS
    //OPTION 6 = SHOW ALL MESSAGES
    AdminpageComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        this.ip = location.hostname;
        for (var i = 0; i < 7; i++) {
            this.show[i] = false;
        }
    };
    AdminpageComponent.prototype.showAllProducts = function (start, count, c) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllProducts");
        this.products = [];
        this.showMsg = false;
        for (var i = 0; i < 7; i++) {
            if (i != 0)
                this.show[i] = false;
        }
        if (this.show[0] == false)
            this.show[0] = true;
        else
            this.show[0] = false;
        this.start = start;
        this.count = count;
        this.c = c;
        this.http.get('http://' + this.ip + ':8765/observatory/api/products?start=' + start + "&count=" + count)
            .subscribe(function (response) {
            _this.response = response;
            for (var i = 0; i < _this.response.products.length; i++) {
                _this.products[i] = _this.response.products[i];
                //console.log(this.products[i]);
            }
            if (_this.start == 0) {
                _this.prev = false;
            }
            else {
                _this.prev = true;
            }
            _this.pageNum(_this.response.total);
            //  console.log(this.response.total);
            // console.log(start + count);
            if (_this.response.total > start + count) {
                _this.next = true;
            }
            else
                _this.next = false;
        });
    };
    AdminpageComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/products/' + id)
            .subscribe();
        setTimeout(function () { _this.show[0] = false; _this.showAllProducts(_this.start, _this.count, _this.c); }, 300); //delay to refresh API
        // console.log("Product with id = " + id + " deleted!");
    };
    AdminpageComponent.prototype.showAllPrices = function (start, count, c) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllPrices");
        this.showMsg = false;
        this.prices = [];
        for (var i = 0; i < 7; i++) {
            if (i != 1)
                this.show[i] = false;
        }
        if (this.show[1] == false)
            this.show[1] = true;
        else
            this.show[1] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/prices?dateFrom=2000-01-01&dateTo=2030-12-12&start=' + start + "&count=" + count)
            .subscribe(function (response) {
            _this.response = response;
            //console.log(this.response);
            for (var i = 0; i < _this.response.pricesOut.length; i++) {
                _this.prices[i] = _this.response.pricesOut[i];
                //console.log(this.prices[i]);
            }
            _this.start = start;
            _this.count = count;
            _this.c = c;
            _this.pageNum(_this.response.total);
            if (_this.start == 0) {
                _this.prev = false;
            }
            else {
                _this.prev = true;
            }
            //  console.log(this.response.total);
            //  console.log(start + count);
            if (_this.response.total > start + count) {
                _this.next = true;
            }
            else
                _this.next = false;
        });
    };
    AdminpageComponent.prototype.deletePrice = function (id) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/prices/' + id)
            .subscribe();
        setTimeout(function () { location.reload(); }, 10);
        setTimeout(function () { _this.show[1] = false; _this.showAllPrices(_this.start, _this.count, _this.c); }, 300); //delay to refresh API
        //  console.log("Price with id = " + id + " deleted!");
    };
    AdminpageComponent.prototype.showAllShops = function (start, count, c) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllShops");
        this.showMsg = false;
        this.shops = [];
        for (var i = 0; i < 7; i++) {
            if (i != 2)
                this.show[i] = false;
        }
        if (this.show[2] == false)
            this.show[2] = true;
        else
            this.show[2] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/shops?start=' + start + "&count=" + count)
            .subscribe(function (response) {
            _this.response = response;
            //console.log(this.response);
            for (var i = 0; i < _this.response.shops.length; i++) {
                _this.shops[i] = _this.response.shops[i];
                //console.log(this.shops[i]);
            }
            _this.start = start;
            _this.count = count;
            _this.c = c;
            _this.pageNum(_this.response.total);
            if (_this.start == 0) {
                _this.prev = false;
            }
            else {
                _this.prev = true;
            }
            //  console.log(this.response.total);
            //   console.log(start + count);
            if (_this.response.total > start + count) {
                _this.next = true;
            }
            else
                _this.next = false;
        });
    };
    AdminpageComponent.prototype.deleteShop = function (id) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/shops/' + id)
            .subscribe();
        setTimeout(function () { _this.show[2] = false; _this.showAllShops(_this.start, _this.count, _this.c); }, 300); //delay to refresh API
        //	console.log("Shop with id = " + id + " deleted!");
    };
    AdminpageComponent.prototype.showAllProductsWithdrawn = function (start, count, c) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllProductsWithdrawn");
        this.showMsg = false;
        this.withdrawnProducts = [];
        for (var i = 0; i < 7; i++) {
            if (i != 3)
                this.show[i] = false;
        }
        if (this.show[3] == false)
            this.show[3] = true;
        else
            this.show[3] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/products?status=WITHDRAWN&start=' + start + '&count=' + count)
            .subscribe(function (response) {
            _this.response = response;
            for (var i = 0; i < _this.response.products.length; i++) {
                _this.withdrawnProducts[i] = _this.response.products[i];
            }
            _this.start = start;
            _this.count = count;
            _this.c = c;
            _this.pageNum(_this.response.total);
            if (_this.start == 0) {
                _this.prev = false;
            }
            else {
                _this.prev = true;
            }
            //  console.log(this.response.total);
            //  console.log(start + count);
            if (_this.response.total > start + count) {
                _this.next = true;
            }
            else
                _this.next = false;
        });
    };
    AdminpageComponent.prototype.deleteProductW = function (id) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/products/' + id)
            .subscribe();
        setTimeout(function () { _this.show[3] = false; _this.showAllProductsWithdrawn(_this.start, _this.count, _this.c); }, 300); //delay to refresh API
        //  console.log("Product with id = " + id + " deleted!");
    };
    AdminpageComponent.prototype.showAllPricesWithdrawn = function (start, count, c) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllPricesWithdrawn");
        this.showMsg = false;
        this.withdrawnPrices = [];
        for (var i = 0; i < 7; i++) {
            if (i != 4)
                this.show[i] = false;
        }
        if (this.show[4] == false)
            this.show[4] = true;
        else
            this.show[4] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/prices?status=WITHDRAWN&start=' + start + '&count=' + count)
            .subscribe(function (response) {
            _this.response = response;
            for (var i = 0; i < _this.response.pricesOut.length; i++) {
                _this.withdrawnPrices[i] = _this.response.pricesOut[i];
            }
            _this.start = start;
            _this.count = count;
            _this.c = c;
            _this.pageNum(_this.response.total);
            if (_this.start == 0) {
                _this.prev = false;
            }
            else {
                _this.prev = true;
            }
            //    console.log(this.response.total);
            //  console.log(start + count);
            if (_this.response.total > start + count) {
                _this.next = true;
            }
            else
                _this.next = false;
        });
    };
    AdminpageComponent.prototype.deletePriceW = function (idPrW) {
        var _this = this;
        this.http.delete('http://' + this.ip + ':8765/observatory/api/prices/' + idPrW)
            .subscribe();
        // setTimeout(function () { location.reload(); }, 10);
        setTimeout(function () { _this.show[4] = false; _this.showAllPricesWithdrawn(_this.start, _this.count, _this.c); }, 300); //delay to refresh API
        //  console.log("Price with id = " + idPrW + " deleted!");
    };
    AdminpageComponent.prototype.showAllUsers = function () {
        var _this = this;
        window.scroll(0, 0);
        // console.log("showAllUsers");
        this.showMsg = false;
        for (var i = 0; i < 7; i++) {
            if (i != 5)
                this.show[i] = false;
        }
        if (this.show[5] == false)
            this.show[5] = true;
        else
            this.show[5] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/user')
            .subscribe(function (response) {
            _this.response = response;
            //    console.log(this.response);
            for (var i = 0; i < _this.response.length; i++) {
                _this.users[i] = _this.response[i];
                //    console.log(this.users[i]);
            }
        });
    };
    AdminpageComponent.prototype.updateUser = function (id, adm) {
        var _this = this;
        //console.log(id + " " + adm);
        this.http.patch('http://' + this.ip + ':8765/observatory/api/user/' + id, { "admin": adm })
            .subscribe(function (response) {
            _this.response = response;
            //console.log(this.response);
        });
    };
    AdminpageComponent.prototype.deleteUser = function (id) {
        this.http.delete('http://' + this.ip + ':8765/observatory/api/user/' + id)
            .subscribe(function () {
            //this.response= response;
            setTimeout(function () { location.reload(); }, 10);
            //setTimeout( () => { this.showAllUsers() }, 800 ); //delay to refresh API
            //console.log(this.response);
        });
    };
    AdminpageComponent.prototype.showAllMessages = function () {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showAllMessages");
        this.showMsg = false;
        for (var i = 0; i < 7; i++) {
            if (i != 6)
                this.show[i] = false;
        }
        if (this.show[6] == false)
            this.show[6] = true;
        else
            this.show[6] = false;
        this.http.get('http://' + this.ip + ':8765/observatory/api/messages')
            .subscribe(function (response) {
            _this.response = response;
            //console.log(this.response);
            for (var i = 0; i < _this.response.msgs.length; i++) {
                _this.messages[i] = _this.response.msgs[i];
                //console.log(this.messages[i]);
            }
        });
    };
    AdminpageComponent.prototype.showMessage = function (id, message, name, email) {
        var _this = this;
        window.scroll(0, 0);
        //	console.log("showMessageId");
        this.http.get('http://' + this.ip + ':8765/observatory/api/messages/' + id)
            .subscribe(function (response) {
            _this.response = response;
            //    console.log(this.response);
            _this.msg = _this.response.message;
            _this.msgId = id;
            _this.msgName = name;
            _this.msgEmail = email;
            //    console.log("showMessageId: " + id + " " + this.msg);
            _this.show[6] = false;
            _this.showMsg = true;
        });
    };
    AdminpageComponent.prototype.sendAnswer = function () {
        var _this = this;
        //UPDATE MESSAGE WITH ANSWERED = TRUE
        //		console.log("Answered!");
        setTimeout(function () { _this.showAllMessages(); }, 300); //delay to refresh API	}
    };
    AdminpageComponent.prototype.deleteMsg = function () {
        var _this = this;
        //DELETE MESSAGE
        //const params = new HttpParams().set('_id', this.msgId); //?_id=
        this.http.delete('http://' + this.ip + ':8765/observatory/api/messages/' + this.msgId)
            .subscribe();
        setTimeout(function () { _this.showAllMessages(); }, 300); //delay to refresh API
        //	console.log("Message with id = " + this.msgId + " deleted!");
    };
    AdminpageComponent.prototype.nextPr = function () {
        var _this = this;
        this.c = this.c + 1;
        // console.log(this.next);
        // console.log(this.prev);
        this.start = this.start + this.count;
        setTimeout(function () { _this.show[0] = false; _this.showAllProducts(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.prevPr = function () {
        var _this = this;
        this.c = this.c - 1;
        // console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start - this.count;
        setTimeout(function () { _this.show[0] = false; _this.showAllProducts(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.nextPrice = function () {
        var _this = this;
        this.c = this.c + 1;
        //  console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start + this.count;
        setTimeout(function () { _this.show[1] = false; _this.showAllPrices(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.prevPrice = function () {
        var _this = this;
        this.c = this.c - 1;
        // console.log(this.next);
        // console.log(this.prev);
        this.start = this.start - this.count;
        setTimeout(function () { _this.show[1] = false; _this.showAllPrices(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.nextShp = function () {
        var _this = this;
        this.c = this.c + 1;
        // console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start + this.count;
        setTimeout(function () { _this.show[2] = false; _this.showAllShops(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.prevShp = function () {
        var _this = this;
        this.c = this.c - 1;
        //  console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start - this.count;
        setTimeout(function () { _this.show[2] = false; _this.showAllShops(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.nextWithdPr = function () {
        var _this = this;
        this.c = this.c + 1;
        //  console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start + this.count;
        setTimeout(function () { _this.show[3] = false; _this.showAllProductsWithdrawn(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.prevWithdPr = function () {
        var _this = this;
        this.c = this.c - 1;
        // console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start - this.count;
        setTimeout(function () { _this.show[3] = false; _this.showAllProductsWithdrawn(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.nextWithdPrice = function () {
        var _this = this;
        this.c = this.c + 1;
        //  console.log(this.next);
        //  console.log(this.prev);
        this.start = this.start + this.count;
        setTimeout(function () { _this.show[4] = false; _this.showAllPricesWithdrawn(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.prevWithdPrice = function () {
        var _this = this;
        this.c = this.c - 1;
        //  console.log(this.next);
        //   console.log(this.prev);
        this.start = this.start - this.count;
        setTimeout(function () { _this.show[4] = false; _this.showAllPricesWithdrawn(_this.start, _this.count, _this.c); }, 300);
    };
    AdminpageComponent.prototype.pageNum = function (total) {
        this.pgNum = Math.ceil(total / this.count);
    };
    AdminpageComponent = __decorate([
        Component({
            selector: 'app-adminpage',
            templateUrl: './adminpage.component.html',
            styleUrls: ['./adminpage.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, HttpClient])
    ], AdminpageComponent);
    return AdminpageComponent;
}());
export { AdminpageComponent };
//# sourceMappingURL=adminpage.component.js.map