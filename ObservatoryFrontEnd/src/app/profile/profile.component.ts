import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { NO_CHANGE } from '@angular/core/src/render3';
import { resetComponentState } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  mask: any[] = ['+', '3', '0', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  newPass: string;
  confPass: string;
  checked: boolean = false;

  model: any = JSON.parse(localStorage.getItem("currentUser"));

  edit: boolean = false;
  public minDate: Date = new Date("01/01/1950");
  public maxDate: Date = new Date("12/12/2000");
  public value: Date = new Date("00/00/0000");
  ip: any = location.hostname;
  response: any;
  newModel: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

  }

  onSubmit() {

    if (this.checked) {
      this.newModel = {
        "email": this.model.email,
        "password": this.newPass,
        "firstname": this.model.firstname,
        "lastname": this.model.lastname,
        "phone_num": this.model.phone_num
      }

    } else {
    this.newModel = {
      "email": this.model.email,
      "firstname": this.model.firstname,
      "lastname": this.model.lastname,
      "phone_num": this.model.phone_num
    }
    }

  //  console.log(this.newModel);
    this.http.patch('http://' + this.ip + ':8764/observatory/api/user/' + this.model._id, this.newModel)
      .subscribe((response) => {
        this.response = response;
        localStorage.setItem('currentUser', JSON.stringify(this.model));
        setTimeout(function () { location.reload(); }, 10);

      })
  }


  nowEdit() {
    this.edit = true;
  }
  reset() {
    this.newPass = "";
    this.confPass = "";

  }
}

