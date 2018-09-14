import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicantAcademicProfile } from '../../models/applicant-academic-profile';
@Injectable({
  providedIn: 'root'
})
export class ApplicantAcademicProfileService {
  ApplicantAcademicProfile: ApplicantAcademicProfile[] = [];
  private JobList = new BehaviorSubject<ApplicantAcademicProfile[]>(this.ApplicantAcademicProfile);
  cast = this.JobList.asObservable();
  constructor() { }

  UpdateApplicantAcademicProfile(ApplicantAcademicProfile:ApplicantAcademicProfile[]){
   
    this.JobList.next(ApplicantAcademicProfile);
    //("***changed");
  }
}
