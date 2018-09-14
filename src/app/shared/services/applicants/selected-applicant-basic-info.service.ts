import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicantBasicInfo } from '../../models/applicant-basic-info';


@Injectable({
  providedIn: 'root'
})
export class SelectedApplicantBasicInfoService {
  ApplicantBasicInfo : ApplicantBasicInfo= new ApplicantBasicInfo("","","","","","","","","","");
  


  private Applicant = new BehaviorSubject<ApplicantBasicInfo>(this.ApplicantBasicInfo);
  cast = this.Applicant.asObservable();
  constructor() { }

  UpdateAplicantBasicInfo(ApplicantBasicInfo:ApplicantBasicInfo){

 //   console.log("***********going to execute next");
   // console.log(ApplicantBasicInfo)
    this.Applicant.next(ApplicantBasicInfo);
    //console.log("executeed next");
    //console.log("Applicant name is as below")
//console.log(ApplicantBasicInfo.FullName)

  }
}
