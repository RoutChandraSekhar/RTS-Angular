import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicantPastApplicationStatus } from '../../models/applicant-past-applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicantPastApplicationsService {
  ApplicantPastApplications: ApplicantPastApplicationStatus[] = [];
  private JobList = new BehaviorSubject<ApplicantPastApplicationStatus[]>(this.ApplicantPastApplications);
  cast = this.JobList.asObservable();
  constructor() { }

  UpdateApplicantAcademicProfile(ApplicantPastApplications:ApplicantPastApplicationStatus[]){
   
    this.JobList.next(ApplicantPastApplications);
    //("***changed");
  }
}
