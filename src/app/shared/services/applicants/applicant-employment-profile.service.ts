import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicantEmploymentProfile } from '../../models/applicant-employment-profile';

@Injectable({
  providedIn: 'root'
})
export class ApplicantEmploymentProfileService {

  ApplicantEmployementInfo: ApplicantEmploymentProfile[] = [];
  private JobList = new BehaviorSubject<ApplicantEmploymentProfile[]>(this.ApplicantEmployementInfo);
  cast = this.JobList.asObservable();
  constructor() { }

  UpdateApplicantEmploymentProfile(ApplicantEmployementInfo:ApplicantEmploymentProfile[]){
   
    this.JobList.next(ApplicantEmployementInfo);
    //("***changed");
  }
}
