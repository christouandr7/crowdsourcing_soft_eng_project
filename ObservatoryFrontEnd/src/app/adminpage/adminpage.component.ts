import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  model: any = JSON.parse(localStorage.getItem("currentUser"));

  response: any;
  showMsg: boolean = false;
  msg: any; msgName: any; msgEmail: any; msgId: any;
  usr: any; usrAdmin: any;
  products: any[] = [];
  users: any[] = [];
  show: any[] = [];
  prices: any[] = [];
  shops: any[] = [];
  withdrawnProducts: any[] = [];
  withdrawnPrices: any[] = [];
  messages: any[] = [];
  ip: any;
  total: number;
  next: boolean;
  prev: boolean;
  start: number = 0;
  count: number = 20;
  pgNum: number;
  c: number = 1;
  //OPTION 0 = SHOW ALL PRODUCTS
  //OPTION 1 = SHOW ALL PRICES
  //OPTION 2 = SHOW ALL SHOPS
  //OPTION 3 = SHOW ALL WITHDRAWN PRODUCTS
  //OPTION 4 = SHOW ALL WITHDRAWN PRICES
  //OPTION 5 = SHOW ALL USERS
  //OPTION 6 = SHOW ALL MESSAGES

  ngOnInit() {
    window.scroll(0, 0);
    this.ip = location.hostname;
    for (var i = 0; i < 7; i++) {
      this.show[i] = false;
    }

  }

  showAllProducts(start, count, c) {
    window.scroll(0, 0);
    //	console.log("showAllProducts");
    this.products = [];
    this.showMsg = false;
    for (var i = 0; i < 7; i++) {
      if (i != 0) this.show[i] = false;
    }
    if (this.show[0] == false) this.show[0] = true;
    else this.show[0] = false;
    this.start = start;
    this.count = count;
    this.c = c;
    this.http.get('http://' + this.ip + ':8764/observatory/api/products?start=' + start + "&count=" + count)
      .subscribe((response) => {
        this.response = response;
        for (var i = 0; i < this.response.products.length; i++) {
          this.products[i] = this.response.products[i];
          //console.log(this.products[i]);
        }
        if (this.start == 0) {
          this.prev = false;
        } else { this.prev = true }

        if (this.response.total < count) {
          this.next = false;
        } else this.next = true;

      })
  }

  deleteProduct(id) {
    this.http.delete('http://' + this.ip + ':8764/observatory/api/products/' + id)
      .subscribe();
    setTimeout(() => { this.show[0] = false; this.showAllProducts(this.start, this.count, this.c) }, 300); //delay to refresh API
    // console.log("Product with id = " + id + " deleted!");

  }



  showAllPrices(start, count, c) {
    window.scroll(0, 0);
    //	console.log("showAllPrices");
    this.showMsg = false;
    this.prices = [];
    for (var i = 0; i < 7; i++) {
      if (i != 1) this.show[i] = false;
    }
    if (this.show[1] == false) this.show[1] = true;
    else this.show[1] = false;

    this.http.get('http://' + this.ip + ':8764/observatory/api/prices?dateFrom=2000-01-01&dateTo=2030-12-12&start=' + start + "&count=" + count)
      .subscribe((response) => {
        this.response = response;
        //console.log(this.response);

        for (var i = 0; i < this.response.pricesOut.length; i++) {
          this.prices[i] = this.response.pricesOut[i];
          //console.log(this.prices[i]);
        }
        this.start = start;
        this.count = count;
        this.c = c;


        if (this.start == 0) {
          this.prev = false;
        } else { this.prev = true }

      //  console.log(this.response.total);
      //  console.log(start + count);

        if (this.response.total < count) {
          this.next = false;
        } else this.next = true;

      })
  }


  deletePrice(id) {
    this.http.delete('http://' + this.ip + ':8764/observatory/api/prices/' + id)
      .subscribe();
    setTimeout(function () { location.reload(); }, 10);
    setTimeout( () => { this.show[1]=false; this.showAllPrices(this.start,this.count,this.c) }, 300 ); //delay to refresh API
    //  console.log("Price with id = " + id + " deleted!");

  }



  showAllShops(start,count,c) {
    window.scroll(0, 0);
    //	console.log("showAllShops");
    this.showMsg = false;
    this.shops=[];
    for (var i = 0; i < 7; i++) {
      if (i != 2) this.show[i] = false;
    }
    if (this.show[2] == false) this.show[2] = true;
    else this.show[2] = false;

    this.http.get('http://' + this.ip + ':8764/observatory/api/shops?start='+start +"&count=" +count)
      .subscribe((response) => {
        this.response = response;
        //console.log(this.response);

        for (var i = 0; i < this.response.shops.length; i++) {
          this.shops[i] = this.response.shops[i];
          //console.log(this.shops[i]);
        }
        this.start = start;
        this.count = count;
        this.c = c;
    

        if (this.start == 0) {
          this.prev = false;
        } else { this.prev = true }

      //  console.log(this.response.total);
     //   console.log(start + count);

        if (this.response.total < count) {
          this.next = false;
        } else this.next = true;
      })
  }


  deleteShop(id) {
    this.http.delete('http://' + this.ip + ':8764/observatory/api/shops/' + id)
      .subscribe();
    setTimeout(() => { this.show[2] = false; this.showAllShops(this.start,this.count,this.c) }, 300); //delay to refresh API
    //	console.log("Shop with id = " + id + " deleted!");
  }


  showAllProductsWithdrawn(start,count,c) {
    window.scroll(0, 0);
    //	console.log("showAllProductsWithdrawn");
    this.showMsg = false;
    this.withdrawnProducts=[];
    for (var i = 0; i < 7; i++) {
      if (i != 3) this.show[i] = false;
    }
    if (this.show[3] == false) this.show[3] = true;
    else this.show[3] = false;

    this.http.get('http://' + this.ip + ':8764/observatory/api/products?status=WITHDRAWN&start='+start+'&count='+count)
      .subscribe((response) => {
        this.response = response;
        for (var i = 0; i < this.response.products.length; i++) {
          this.withdrawnProducts[i] = this.response.products[i];
        }
        this.start = start;
        this.count = count;
        this.c = c;


        if (this.start == 0) {
          this.prev = false;
        } else { this.prev = true }

      //  console.log(this.response.total);
      //  console.log(start + count);

        if (this.response.total < count) {
          this.next = false;
        } else this.next = true;
      })
  }

  deleteProductW(id) {
    this.http.delete('http://' + this.ip + ':8764/observatory/api/products/' + id)
      .subscribe();
    setTimeout(() => { this.show[3] = false; this.showAllProductsWithdrawn(this.start,this.count,this.c) }, 300); //delay to refresh API
    //  console.log("Product with id = " + id + " deleted!");
  }



  showAllPricesWithdrawn(start,count,c) {
    window.scroll(0, 0);
    //	console.log("showAllPricesWithdrawn");
    this.showMsg = false;
    this.withdrawnPrices=[];
    for (var i = 0; i < 7; i++) {
      if (i != 4) this.show[i] = false;
    }
    if (this.show[4] == false) this.show[4] = true;
    else this.show[4] = false;

    this.http.get('http://' + this.ip + ':8764/observatory/api/prices?status=WITHDRAWN&start='+start +'&count='+count )
      .subscribe((response) => {
        this.response = response;
        for (var i = 0; i < this.response.pricesOut.length; i++) {
          this.withdrawnPrices[i] = this.response.pricesOut[i];
        }
        this.start = start;
        this.count = count;
        this.c = c;


        if (this.start == 0) {
          this.prev = false;
        } else { this.prev = true }

    //    console.log(this.response.total);
      //  console.log(start + count);

        if (this.response.total < count) {
          this.next = false;
        } else this.next = true;
      })
  }

  deletePriceW(idPrW) {
    this.http.delete('http://' + this.ip + ':8764/observatory/api/prices/' + idPrW)
      .subscribe();
   // setTimeout(function () { location.reload(); }, 10);

    setTimeout( () => { this.show[4]=false; this.showAllPricesWithdrawn(this.start,this.count,this.c) }, 300 ); //delay to refresh API
    //  console.log("Price with id = " + idPrW + " deleted!");
  }


  showAllUsers() {
    window.scroll(0, 0);
    // console.log("showAllUsers");
    this.showMsg = false;

    for (var i = 0; i < 7; i++) {
      if (i != 5) this.show[i] = false;
    }
    if (this.show[5] == false) this.show[5] = true;
    else this.show[5] = false;

    this.http.get('http://' + this.ip + ':8764/observatory/api/user')
      .subscribe((response) => {
        this.response = response;
        //    console.log(this.response);
        for (var i = 0; i < this.response.length; i++) {
          this.users[i] = this.response[i];
          //    console.log(this.users[i]);
        }
      })
  }

  updateUser(id, adm) {
    //console.log(id + " " + adm);
    this.http.patch('http://' + this.ip + ':8764/observatory/api/user/' + id, { "admin": adm })
      .subscribe((response) => {
        this.response = response;
        //console.log(this.response);
      })
  }

  deleteUser(id) {
    this.http.delete('http://' + this.ip + ':8764/observatory/api/user/' + id)
      .subscribe(() => {
        //this.response= response;
        setTimeout(function () { location.reload(); }, 10);

        //setTimeout( () => { this.showAllUsers() }, 800 ); //delay to refresh API

        //console.log(this.response);
      })
  }


  showAllMessages() {
    window.scroll(0, 0);
    //	console.log("showAllMessages");
    this.showMsg = false;

    for (var i = 0; i < 7; i++) {
      if (i != 6) this.show[i] = false;
    }
    if (this.show[6] == false) this.show[6] = true;
    else this.show[6] = false;

    this.http.get('http://' + this.ip + ':8764/observatory/api/messages')
      .subscribe((response) => {
        this.response = response;
        //console.log(this.response);
        for (var i = 0; i < this.response.msgs.length; i++) {
          this.messages[i] = this.response.msgs[i];
          //console.log(this.messages[i]);
        }
      })
  }



  showMessage(id, message, name, email) {
    window.scroll(0, 0);
    //	console.log("showMessageId");
    this.http.get('http://' + this.ip + ':8764/observatory/api/messages/' + id)
      .subscribe((response) => {
        this.response = response;
        //    console.log(this.response);
        this.msg = this.response.message;
        this.msgId = id;
        this.msgName = name;
        this.msgEmail = email;
        //    console.log("showMessageId: " + id + " " + this.msg);
        this.show[6] = false;
        this.showMsg = true;
      })
  }



  sendAnswer() {
    //UPDATE MESSAGE WITH ANSWERED = TRUE
    //		console.log("Answered!");
    setTimeout(() => { this.showAllMessages() }, 300); //delay to refresh API	}
  }

  deleteMsg() {
    //DELETE MESSAGE
    //const params = new HttpParams().set('_id', this.msgId); //?_id=
    this.http.delete('http://' + this.ip + ':8764/observatory/api/messages/' + this.msgId)
      .subscribe();
    setTimeout(() => { this.showAllMessages() }, 300); //delay to refresh API
    //	console.log("Message with id = " + this.msgId + " deleted!");

  }

  nextPr() {
    this.c = this.c + 1;
   // console.log(this.next);
   // console.log(this.prev);
    this.start = this.start + this.count;
    setTimeout(() => { this.show[0] = false; this.showAllProducts(this.start, this.count, this.c) }, 300);

  }



  prevPr() {
    this.c = this.c - 1;
   // console.log(this.next);
  //  console.log(this.prev);
    this.start = this.start - this.count;
    setTimeout(() => { this.show[0] = false; this.showAllProducts(this.start, this.count, this.c) }, 300);

  }

  nextPrice() {
    this.c = this.c + 1;
  //  console.log(this.next);
  //  console.log(this.prev);
    this.start = this.start + this.count;
    setTimeout(() => { this.show[1] = false; this.showAllPrices(this.start, this.count, this.c) }, 300);

  }



  prevPrice() {
    this.c = this.c - 1;
   // console.log(this.next);
   // console.log(this.prev);
    this.start = this.start - this.count;
    setTimeout(() => { this.show[1] = false; this.showAllPrices(this.start, this.count, this.c) }, 300);

  }


  nextShp() {
    this.c = this.c + 1;
   // console.log(this.next);
  //  console.log(this.prev);
    this.start = this.start + this.count;
    setTimeout(() => { this.show[2] = false; this.showAllShops(this.start, this.count, this.c) }, 300);

  }



  prevShp() {
    this.c = this.c - 1;
  //  console.log(this.next);
  //  console.log(this.prev);
    this.start = this.start - this.count;
    setTimeout(() => { this.show[2] = false; this.showAllShops(this.start, this.count, this.c) }, 300);

  }


  nextWithdPr() {
    this.c = this.c + 1;
  //  console.log(this.next);
  //  console.log(this.prev);
    this.start = this.start + this.count;
    setTimeout(() => { this.show[3] = false; this.showAllProductsWithdrawn(this.start, this.count, this.c) }, 300);

  }



  prevWithdPr() {
    this.c = this.c - 1;
   // console.log(this.next);
  //  console.log(this.prev);
    this.start = this.start - this.count;
    setTimeout(() => { this.show[3] = false; this.showAllProductsWithdrawn(this.start, this.count, this.c) }, 300);

  }



  nextWithdPrice() {
    this.c = this.c + 1;
  //  console.log(this.next);
  //  console.log(this.prev);
    this.start = this.start + this.count;
    setTimeout(() => { this.show[4] = false; this.showAllPricesWithdrawn(this.start, this.count, this.c) }, 300);

  }



  prevWithdPrice() {
    this.c = this.c - 1;
  //  console.log(this.next);
 //   console.log(this.prev);
    this.start = this.start - this.count;
    setTimeout(() => { this.show[4] = false; this.showAllPricesWithdrawn(this.start, this.count, this.c) }, 300);

  }

}
