import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggedInUserDetails } from '../../common/LoggedInUserDetails';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LoggedInUserDetails:LoggedInUserDetails=new LoggedInUserDetails("","","","","","","","")
  private JobList = new BehaviorSubject<LoggedInUserDetails>(this.LoggedInUserDetails);
cast = this.JobList.asObservable();
  constructor() { }


  UpdateLoggedInUserDetails(LoggedInUserDetails:LoggedInUserDetails){
    this.JobList.next(LoggedInUserDetails);
    
    //("***changed");
  }
}
