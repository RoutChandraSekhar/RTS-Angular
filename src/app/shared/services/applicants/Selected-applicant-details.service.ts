import { Injectable } from '@angular/core';
import { ApplicantDetails } from '../../models/applicant-details';
import { BehaviorSubject } from 'rxjs';
import { ApplicantDetailsInfo } from '../../models/applicant-details-info';
import { ApplicantShortlistableJobs } from '../../models/applicant-shortlistable-jobs';
import { ApplicantAcademicProfile } from '../../models/applicant-academic-profile';
import { ApplicantEmploymentProfile } from '../../models/applicant-employment-profile';
import { ApplicantPrefferedLocation } from '../../models/applicant-preffered-location';
import { ApplicantJobIndustry } from '../../models/applicant-job-industry';
@Injectable({
  providedIn: 'root'
})
export class SelectedApplicantDetailsService {
  CanidateBasicInfo: ApplicantDetailsInfo = new ApplicantDetailsInfo("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","")
  ShortlistableJobs : ApplicantShortlistableJobs[];
  AccademicProfile : ApplicantAcademicProfile[];
  EmpolymentProfile : ApplicantEmploymentProfile[];
  CandidatePrefferedLocation : ApplicantPrefferedLocation[];
  CandidateJobIndustry : ApplicantJobIndustry[];
  ApplicantDetails : ApplicantDetails = new ApplicantDetails(this.CanidateBasicInfo,this.ShortlistableJobs,this.AccademicProfile,this.EmpolymentProfile,this.CandidatePrefferedLocation,this.CandidateJobIndustry)
  private Applicant = new BehaviorSubject<ApplicantDetails>(this.ApplicantDetails);
  cast = this.Applicant.asObservable();
  constructor() { }

  UpdateSelectedApplicantDetails(ApplicantDetails:ApplicantDetails){
    this.Applicant.next(ApplicantDetails);
  }
}
