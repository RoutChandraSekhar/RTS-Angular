import { Component, OnInit, Output, EventEmitter, Inject, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { CandidateService } from '../shared/services/candidate.service';
import Swal, { SweetAlertType } from 'sweetalert2';
import { LoggedInUserDetails } from '../shared/common/LoggedInUserDetails';
import { LoginService } from '../shared/services/login/login.service';
import { Subscription } from 'rxjs';

declare var $:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  UserName:string;
  Password:String;
  isLoggedIn:boolean;
  isSigninDisabled:boolean=false;
  SigninBtnText:string="Login"
  LoginUserSubscripiton:Subscription;

  LoggedInUserDetails:LoggedInUserDetails=new LoggedInUserDetails("","","","","","","","")
  constructor(private router: Router,
    @Inject(CandidateService) private candidateService : CandidateService,
    @Inject(LoginService) private  LoginService: LoginService
  
  
  ) { }

  ngOnInit() {
   
 const body = document.getElementsByTagName('body')[0];
 body.className ='signin-page loaded';


 

  }

  ngOnDestroy(): void {
    if (this.LoginUserSubscripiton!=undefined){
      this.LoginUserSubscripiton.unsubscribe();
    }
  }


 
  @Output() isLoggedinEvent = new EventEmitter<boolean>()
  LogMeIn(){
//console.log(this.UserName.length)
      if (this.UserName.length==0 || this.Password.length==0){
        Swal('Credentials not entered', 'Please enter username and password', 'error')
        return;
      }

    this.isSigninDisabled=true;
    this.SigninBtnText="Authenticating.."
    this.CheckLogin()

    

  }  

   CheckLogin(){
     let result:boolean=false;
    this.LoginUserSubscripiton=  this.candidateService.LoginUser(this.UserName,this.Password).subscribe
    (result => {
      
  
      if (result["UserDetails"].length>0){
       this.LoggedInUserDetails=(result["UserDetails"]);
        this.isLoggedIn=true;
        result=true;
      }
        else{
          result=false;
      }
       
      },
      (error)=>{
        Swal('Oops...', 'Something went wrong! Please contact IT Deparment', 'error');
        result=false;
      },

      ()=>{
        if (this.isLoggedIn==true){
          this.LoginService.UpdateLoggedInUserDetails(this.LoggedInUserDetails);
          this.isLoggedinEvent.emit(true);
          this.router.navigate(['/home']);
      }
      else{       
      this.isSigninDisabled=false;
      this.SigninBtnText="Login"
        console.log('here');
        Swal('Invalid Login', 'Username and password is not valid.', 'error')
      }

      }

      

    )
 
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.LogMeIn()
      // rest of your code
    }
  }


}
