import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model: any = {};
  ip:any;
  constructor( private http: HttpClient, private router: Router) { }

  onSubmit() {
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
        //console.log(this.model.fullname);
        this.http.post("http://"+ this.ip +":8764/observatory/api/messages",this.model)
        .subscribe(
            data => {
                //console.log("POST Request is successful ", data);
                this.router.navigate(['contactresp']);
            },
            error => {
                console.log("Error", error);
            }
        );

        
  }
  
  counter(msg){
    if(msg== null){
    return 0;}
    else {return msg.length}
  }
  
  ngOnInit() {
    window.scroll(0,0);
    this.ip=location.hostname;

  }

}