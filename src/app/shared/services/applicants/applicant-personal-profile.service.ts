import { Injectable } from '@angular/core';
import { ApplicantDetailsInfo } from '../../models/applicant-details-info';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantPersonalProfileService {

  ApplicantProfileInfo : ApplicantDetailsInfo = new ApplicantDetailsInfo("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  private JobList = new BehaviorSubject<ApplicantDetailsInfo>(this.ApplicantProfileInfo);
  cast = this.JobList.asObservable();
  constructor() { }

  UpdateApplicantProfile(ApplicantProfileInfo:ApplicantDetailsInfo){
    console.log("Profile info will be changed now using  UpdateApplicantProfile(ApplicantProfileInfo:ApplicantDetailsInfo)");
    this.JobList.next(ApplicantProfileInfo);
    console.log("***changed");
  }
}
