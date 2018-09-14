import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicantTimeline } from '../models/applicant-timeline';
import { CurrentSelectedCandidateCVInfo } from '../models/current-selected-candidate';
import { ApplicantInfoDocuments } from '../models/applicant-info-documents';
@Injectable({
  providedIn: 'root'
})
export class CurrentSelectedCandidatePageService {
  CurrentPage:number=0;
  TotalCandiates:number=0;
  isApplicantsExist:any=false;
  CurrentSelectedApplicantID:number=0;
  ApplicantTimeline:ApplicantTimeline[]=[];
  CurrentSelectedCandidateCVInfo:CurrentSelectedCandidateCVInfo;
  ApplicantInfoDocuments:ApplicantInfoDocuments;

  CurrentSelectedJobIDforModal:number;

  private JobList = new BehaviorSubject<number>(this.CurrentPage);
  cast = this.JobList.asObservable();

  private JbTotalCandiates = new BehaviorSubject<number>(this.TotalCandiates);
  casTotalCandidates = this.JbTotalCandiates.asObservable();

  private JbApplicantExist = new BehaviorSubject<any>(this.isApplicantsExist);
  castIsApplicantExist = this.JbApplicantExist.asObservable();

  private JbCurrentSelectedApplicantID = new BehaviorSubject<number>(this.CurrentSelectedApplicantID);
  castCurrentSelectedApplicantID = this.JbCurrentSelectedApplicantID.asObservable();

  private JbCurrentSelectedApplicantTimeline = new BehaviorSubject<ApplicantTimeline[]>(this.ApplicantTimeline);
  castCurrentSelectedApplicantTimeline = this.JbCurrentSelectedApplicantTimeline.asObservable();

  private JbCVInfo = new BehaviorSubject<CurrentSelectedCandidateCVInfo>(this.CurrentSelectedCandidateCVInfo);
  castCurrentSelectedApplicantCVInfo = this.JbCVInfo.asObservable();

  private JobIDForDetails = new BehaviorSubject<number>(this.CurrentSelectedJobIDforModal);
  castCurrentSelectedJobID = this.JobIDForDetails.asObservable();

  private JBCandidateDocuments = new BehaviorSubject<ApplicantInfoDocuments>(this.ApplicantInfoDocuments);
  castCandidateDocumentUploadDetails = this.JBCandidateDocuments.asObservable();


  constructor() { }

  UpdateApplicantListPageNo(CurrentPage:number){
    this.JobList.next(CurrentPage);
  }

  UpdateCandidatesCount(TotalCandiates:number){
    this.JbTotalCandiates.next(TotalCandiates);
  }

  UpdateIsApplicantExist(isApplicantsExist:boolean){
    this.JbApplicantExist.next(isApplicantsExist);
  }

  UpdateCurrentSelectedApplicantID(CurrentSelectedApplicantID:number){
    this.JbCurrentSelectedApplicantID.next(CurrentSelectedApplicantID);
  }

  UpdateCurrentSelectedApplicantTimeline(ApplicantTimeline:ApplicantTimeline[]){
    this.JbCurrentSelectedApplicantTimeline.next(ApplicantTimeline);
  }

  UpdateCurrentSelectedApplicantCVInfo(CurrentSelectedCandidateCVInfo:CurrentSelectedCandidateCVInfo){
    this.JbCVInfo.next(CurrentSelectedCandidateCVInfo);
  }

  UpdateJobIDforModal(JobID:number){
    this.JobIDForDetails.next(JobID);
  }

  UpdateCandidateDocumentDetails(ApplicantInfoDocuments:ApplicantInfoDocuments){
    
    this.JBCandidateDocuments.next(ApplicantInfoDocuments);

  }

  
}
