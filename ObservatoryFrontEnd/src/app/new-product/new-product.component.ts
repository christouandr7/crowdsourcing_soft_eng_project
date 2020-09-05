import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  categories = [];
  product: any = {};
  response: any;
  prod: any = {};
  selectedOption3;
  ip: any = location.hostname;
  duplicate: boolean = false;

  counter(msg) {
    if (msg == null) {
      return 0;
    }
    else { return msg.length }
  }
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    window.scroll(0, 0);
    var ip = location.hostname;
    this.http.get('http://' + ip + ':8764/observatory/api/products/')
      //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
      .subscribe((response) => {
        this.response = response;
        console.log(response);
        for (var i = 0; i < this.response.products.length; i++) {
          if (!this.categories.includes(this.response.products[i].category)) {
            this.categories.push(this.response.products[i].category);
          }
        }
      })

  }
  res3 = this.categories;

  onSubmit() {

    this.prod.name = this.product.pname;
    this.prod.description = this.product.description;
    this.prod.category = this.selectedOption3;

    if(this.product.tagsP!=null){
      this.prod.tags = this.product.tagsP.split(" ");}
      else {this.prod.tags=[];}

    this.prod.tags.push(this.selectedOption3);
    this.prod.tags = this.prod.tags.concat(this.prod.name.split(" "));
    for (var i = 0; i < this.prod.tags.length; i++) {
      if (!isNaN(this.prod.tags[i])) {
        this.prod.tags.splice(i, 1);
        i--;
      } else if (! /^[a-zA-Zα-ωΑ-ΩΆ-Ώά-ώ]+$/.test(this.prod.tags[i])) {
        this.prod.tags.splice(i, 1);
        i--;
      }
      else if (this.prod.tags[i].length == 1) {
        this.prod.tags.splice(i, 1);
        i--;
      }
    }
    this.http.post("http://" + this.ip + ":8764/observatory/api/products", this.prod)
      .subscribe((response) => {
        console.log("POST Request is successful ", response);
        setTimeout(() => { this.router.navigate(['/addproducts/']) }, 1000);
      },
        error => {
          if (error = "Not Acceptable") {
            this.duplicate = true;
          }
          console.log("Error", error);
        }
      )


  }

}
