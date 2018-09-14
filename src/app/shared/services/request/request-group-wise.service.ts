import { Injectable } from '@angular/core';
import { RequestList } from '../../models/requests/request-details';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestGroupWiseService {

  RequestList:RequestList[]=[];
private JobList = new BehaviorSubject<RequestList[]>(this.RequestList);
cast = this.JobList.asObservable();
  constructor() { }


  UpdateInfo(JobInfo:RequestList[]){
    this.JobList.next(JobInfo);
    //("***changed");
  }
}
