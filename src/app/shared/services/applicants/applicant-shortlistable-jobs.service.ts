import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicantShortlistableJobs } from '../../models/applicant-shortlistable-jobs';
@Injectable({
  providedIn: 'root'
})
export class ApplicantShortlistableJobsService {

  ShortListableJobs : ApplicantShortlistableJobs[]=[];
  private JobList = new BehaviorSubject<ApplicantShortlistableJobs[]>(this.ShortListableJobs);
  cast = this.JobList.asObservable();
  constructor() { }

  UpdateShortListableJobs(ShortListableJobs:ApplicantShortlistableJobs[]){
    this.JobList.next(ShortListableJobs);
  }
}
