import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JobInfo } from '../../models/jobs/JobInfo';

@Injectable({
  providedIn: 'root'
})
export class JobinfoService {
JobInfo : JobInfo[]=[];
private JobList = new BehaviorSubject<JobInfo[]>(this.JobInfo);
cast = this.JobList.asObservable();
  constructor() { }


  UpdateJobInfo(JobInfo:JobInfo[]){
    this.JobList.next(JobInfo);
    //("***changed");
  }
}
