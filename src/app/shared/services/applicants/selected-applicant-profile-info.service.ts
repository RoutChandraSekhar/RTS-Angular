import { Injectable } from '@angular/core';
import { ApplicantDetails } from '../../models/applicant-details';
import { ApplicantBasicInfo } from '../../models/applicant-basic-info';

@Injectable({
  providedIn: 'root'
})
export class SelectedApplicantProfileInfoService {

 
  constructor() { }

  UpdateSelectedApplicantDetails(ApplicantDetails:ApplicantDetails){
    //this.Applicant.next(ApplicantDetails)
  }
}
