import { Injectable, Inject, OnDestroy } from '@angular/core';
import { CandidateService } from './candidate.service';
import { ApplicantListService } from './applicants/applicant-list.service';
import { ApplicantShortlistableJobsService } from './applicants/applicant-shortlistable-jobs.service';
import { SelectedApplicantBasicInfoService } from './applicants/selected-applicant-basic-info.service';
import { ApplicantPersonalProfileService } from './applicants/applicant-personal-profile.service';
import { ApplicantAcademicProfileService } from './applicants/applicant-academic-profile.service';
import { ApplicantEmploymentProfileService } from './applicants/applicant-employment-profile.service';
import { CurrentSelectedCandidateService } from './current-selected-candidate.service';
import { ActivatedRoute } from '@angular/router';
import { ApplicantBasicInfo } from '../models/applicant-basic-info';
import { ApplicantShortlistableJobs } from '../models/applicant-shortlistable-jobs';
import { ApplicantEmploymentProfile } from '../models/applicant-employment-profile';
import { ApplicantAcademicProfile } from '../models/applicant-academic-profile';
import { ApplicantDetailsInfo } from '../models/applicant-details-info';
import { ApplicantListResultInfo } from '../models/applicant-list-result-info';
import { CurrentSelectedCandidate, CurrentSelectedCandidateCVInfo } from '../models/current-selected-candidate';
import { CurrentSelectedCandidatePageService } from './current-selected-candidate-page.service';
import { ApplicantTimeline } from '../models/applicant-timeline';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentSlectedCandidateListService implements OnDestroy {

  constructor( @Inject(CandidateService) private candidateService : CandidateService,
  private ApplicantListService : ApplicantListService,
  private ShortlistableJobsService : ApplicantShortlistableJobsService,
  private ApplicantBasicInfoService : SelectedApplicantBasicInfoService,
  private ApplicantPersonalProfileService : ApplicantPersonalProfileService,
  private ApplicantAcademicProfileService : ApplicantAcademicProfileService,
  private ApplicantEmploymentProfileService : ApplicantEmploymentProfileService,
  private CurrentSelectedCandidateService: CurrentSelectedCandidateService,
  private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService
) { }



ApplicantsList: ApplicantBasicInfo[];
    SelectedCandidateBasicInfo : ApplicantBasicInfo;
    //CandidateList :any[];
    ShortListableJobs: ApplicantShortlistableJobs[];
    SelectedCandidateEmploymentProfile: ApplicantEmploymentProfile[]=[];
    SelectedCandidateAcademicProfile : ApplicantAcademicProfile[]=[];


    ApplicantProfileInfo : ApplicantDetailsInfo;
    ApplicantListResultInfo:ApplicantListResultInfo=new ApplicantListResultInfo("","","","")
    TotalCandidates:string;
    CurrentSelectedCandidate:CurrentSelectedCandidate=new CurrentSelectedCandidate("");


    ApplicantTimeline:ApplicantTimeline[]=[];

    CurrentSelectedCandidateCVInfo:CurrentSelectedCandidateCVInfo = new CurrentSelectedCandidateCVInfo("","","")
    getCandidatesSubscription:Subscription;
    GetCandidateParticularApplicationTimeLineSubscription:Subscription;

    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      if(this.getCandidatesSubscription!=undefined){
        this.getCandidatesSubscription.unsubscribe();
      }

      if(this.GetCandidateParticularApplicationTimeLineSubscription!=undefined){
        this.GetCandidateParticularApplicationTimeLineSubscription.unsubscribe();
      }
    }

  LoadCandidates(CandidateFilterOptions){


    //Clear Applicant TimeLine
   // this.CurrentSelectedCandidatePageService.UpdateCurrentSelectedApplicantTimeline( this.ApplicantTimeline);

    //Clear Applicnt List
    //this.ApplicantListService.UpdateAplicantList(this.ApplicantsList);

    //Reset Candiate Count
    //this.CurrentSelectedCandidatePageService.UpdateCandidatesCount(0);


   this.getCandidatesSubscription= this.candidateService.getCandidates(CandidateFilterOptions).subscribe(
      (data:any)=>{

        //Reset All to zero/blank
        this.CurrentSelectedCandidatePageService.UpdateCandidatesCount(0);
          this.ApplicantsList=data["Candidates"];
          this.ApplicantListResultInfo=data["GeneralInfo"][0];
         // alert(this.CurrentPageNo + " from acandiadate comp");
        
        //  console.log(this.ApplicantProfileInfo);
          

          this.ApplicantListService.UpdateAplicantList(this.ApplicantsList);

          if (this.ApplicantsList.length>0){
             // console.log("**************");
            //  console.log(this.ApplicantsList[0]);
              this.ApplicantBasicInfoService.UpdateAplicantBasicInfo(this.ApplicantsList[0]);
              

             // console.log("update--profileservice")
             this.ApplicantProfileInfo=data["CandidateBasicInfo"][0];
             
             this.CurrentSelectedCandidateCVInfo.CandidateID=this.ApplicantProfileInfo.CandidateID;
             this.CurrentSelectedCandidateCVInfo.cvFile=this.ApplicantProfileInfo.cvFIle;
             this.CurrentSelectedCandidateCVInfo.cvMimeType=this.ApplicantProfileInfo.cvMimeType;
            
           
             this.CurrentSelectedCandidatePageService.UpdateCurrentSelectedApplicantCVInfo(this.CurrentSelectedCandidateCVInfo);
    

            

             this.CurrentSelectedCandidatePageService.UpdateCurrentSelectedApplicantID(+this.ApplicantProfileInfo.CandidateID); //this is used to update current selected candidate CSS

              this.ApplicantPersonalProfileService.UpdateApplicantProfile( this.ApplicantProfileInfo)

              this.SelectedCandidateEmploymentProfile=data["EmploymentProfile"];
              this.ApplicantEmploymentProfileService.UpdateApplicantEmploymentProfile(this.SelectedCandidateEmploymentProfile);
             
              this.SelectedCandidateAcademicProfile=data["AcademicProfile"];
              this.ApplicantAcademicProfileService.UpdateApplicantAcademicProfile(this.SelectedCandidateAcademicProfile);
            

              this.TotalCandidates=this.ApplicantListResultInfo.TotalCandidates;
              this.CurrentSelectedCandidatePageService.UpdateCandidatesCount(+this.TotalCandidates);
     
              
              this.CurrentSelectedCandidate.CandidateID=this.ApplicantProfileInfo.CandidateID;
            //  alert( this.CurrentSelectedCandidate.CandidateID);
              this.CurrentSelectedCandidateService.UpdateCurrentSelectedCandidate(this.CurrentSelectedCandidate);
             
                //console.log(data["ShortlistableJobs"]);
              this.ShortListableJobs=data["ShortlistableJobs"];
              this.ShortlistableJobsService.UpdateShortListableJobs(this.ShortListableJobs);
              this.CurrentSelectedCandidatePageService.UpdateIsApplicantExist(true); //this is used to show/hide applicant list.
    

          } else{
            this.CurrentSelectedCandidatePageService.UpdateIsApplicantExist(false); //this is used to show/hide applicant list.
          }

      }
  )
  }


  GetCandidateApplicationTimeLine(ApplicationID:number){
   this.GetCandidateParticularApplicationTimeLineSubscription= this.candidateService.GetCandidateParticularApplicationTimeLine(ApplicationID).subscribe(
      (response)=>{
      var ApplicationTimeline : any[] = response["ApplicationTimeline"]

      if( ApplicationTimeline !=null){
        this.ApplicantTimeline=response["ApplicationTimeline"]["Timeline"];
      } else {
        this.ApplicantTimeline=response["ApplicationTimeline"];
      }

        this.CurrentSelectedCandidatePageService.UpdateCurrentSelectedApplicantTimeline(this.ApplicantTimeline);
      },
      (error)=>{console.log("error")}

    )
    
  }
}
