import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicantBasicInfo } from '../../models/applicant-basic-info';
@Injectable({
  providedIn: 'root'
})
export class ApplicantListService {
  ApplicantList : ApplicantBasicInfo[];
  
  private Applicants = new BehaviorSubject<ApplicantBasicInfo[]>(this.ApplicantList);
  cast = this.Applicants.asObservable();
  constructor() { }

  UpdateAplicantList(ApplicantList:ApplicantBasicInfo[]){
    this.Applicants.next(ApplicantList);
  }
}
