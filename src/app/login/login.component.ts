import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
   
 const body = document.getElementsByTagName('body')[0];
 body.className ='signin-page loaded';
    
  }

 
  @Output() isLoggedinEvent = new EventEmitter<boolean>()
  LogMeIn(){
    this.isLoggedinEvent.emit(true);
    this.router.navigate(['/home']);
  }  

}
