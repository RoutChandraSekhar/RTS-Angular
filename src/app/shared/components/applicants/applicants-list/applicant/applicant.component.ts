import { Component, OnInit, Inject, Input, OnDestroy } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { Applicant } from '../../../../models/applicant';

import { ApplicantDetails } from '../../../../models/applicant-details';
import { ApplicantBasicInfo } from '../../../../models/applicant-basic-info';
import { SelectedApplicantBasicInfoService } from '../../../../services/applicants/selected-applicant-basic-info.service';
import { CandidateService } from '../../../../services/candidate.service';
import { SelectedApplicantDetailsService } from '../../../../services/applicants/Selected-applicant-details.service';
import { ApplicantDetailsInfo } from '../../../../models/applicant-details-info';
import { ApplicantPersonalProfileService } from '../../../../services/applicants/applicant-personal-profile.service';
import { ApplicantEmploymentProfileService } from '../../../../services/applicants/applicant-employment-profile.service';
import { ApplicantEmploymentProfile } from '../../../../models/applicant-employment-profile';
import { ApplicantAcademicProfile } from '../../../../models/applicant-academic-profile';
import { ApplicantAcademicProfileService } from '../../../../services/applicants/applicant-academic-profile.service';
import { ApplicantShortlistableJobsService } from '../../../../services/applicants/applicant-shortlistable-jobs.service';
import { ApplicantShortlistableJobs } from '../../../../models/applicant-shortlistable-jobs';
import { ApplicantPastApplicationStatus } from '../../../../models/applicant-past-applications';
import { CurrentSelectedCandidateService } from '../../../../services/current-selected-candidate.service';
import { CurrentSelectedCandidate } from '../../../../models/current-selected-candidate';
import { CurrentSelectedCandidatePageService } from '../../../../services/current-selected-candidate-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit,OnDestroy {

  @Input() Applicant: ApplicantBasicInfo;
  ApplicantsList : Applicant[];
  ApplicantDetails:ApplicantDetails;
  CandidateBasicInfo: ApplicantDetailsInfo;
  SelectedCandidateBasicInfo : ApplicantBasicInfo;
  SelectedCandidateEmploymentProfile: ApplicantEmploymentProfile[]=[];
  SelectedCandidateAcademicProfile : ApplicantAcademicProfile[]=[];
  SelectedCandidateShortListableJobs : ApplicantShortlistableJobs[]=[];
  SelectedCandidateID:string;
  CurrentSelectedCandidate:CurrentSelectedCandidate=new CurrentSelectedCandidate("");
  CurrentSelectedCandidatePageServiceSubscription:Subscription;
  getCandidateDetailsSubscription:Subscription;

  @Input() ActiveCandidateID:number;
  isSelectedCandidate:boolean=false;

  constructor( 
    private router: Router,
    private ApplicantPersonalProfileService : ApplicantPersonalProfileService,
    private ApplicantBasicInfoService : SelectedApplicantBasicInfoService,
    private ApplicantEmploymentProfileService : ApplicantEmploymentProfileService,
    private ApplicantAcademicProfileService : ApplicantAcademicProfileService,
    private ApplicantShortlistableJobsService : ApplicantShortlistableJobsService,
    private CurrentSelectedCandidateService:CurrentSelectedCandidateService,
    private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService,
    private route:ActivatedRoute,
    
    @Inject(CandidateService) private candidateService : CandidateService
  ) {
   }


   ngOnDestroy(): void {
     //Called once, before the instance is destroyed.
     //Add 'implements OnDestroy' to the class.
     if(this.CurrentSelectedCandidatePageServiceSubscription!=undefined){
      this.CurrentSelectedCandidatePageServiceSubscription.unsubscribe();
    }

    if(this.getCandidateDetailsSubscription!=undefined){
      this.getCandidateDetailsSubscription.unsubscribe();
    }
    
   }
   
   
  ngOnInit() { 
    
  this.CurrentSelectedCandidatePageServiceSubscription= this.CurrentSelectedCandidatePageServiceSubscription= this.CurrentSelectedCandidatePageService.castCurrentSelectedApplicantID.subscribe(
      SelectedCandidateID=>{
      
        this.ActiveCandidateID=SelectedCandidateID;
        if (+this.Applicant.CandidateID==this.ActiveCandidateID){
          this.isSelectedCandidate=true;
        }
          else{
            this.isSelectedCandidate=false;
        }


    }

    );
  }

  GetProfilePic(gender:string):string{
    if(gender.toLowerCase()=="male"){ return "/assets/images/profile-image-2.png"} 
      else { return "/assets/images/profile-image-1.png"}
    }


  GetCandidateDetails(){
  //alert(this.Applicant.FullName);

  this.SelectedCandidateID=this.Applicant.CandidateID;
  this.CurrentSelectedCandidatePageService.UpdateCurrentSelectedApplicantID(+this.Applicant.CandidateID);
  this.isSelectedCandidate=true;

  
 this.getCandidateDetailsSubscription= this.candidateService.getCandidateDetails(+this.SelectedCandidateID).subscribe(
    (response)=>{


      this.ApplicantDetails=response;
      let candidateDetails =response["CandidateDetails"];
     //let candidateDetails =response;

     
      this.SelectedCandidateBasicInfo= candidateDetails["CandidateBasicInfo"];
      this.ApplicantDetails.CandidateBasicInfo= candidateDetails["CandidateBasicInfo"];
      this.SelectedCandidateEmploymentProfile=candidateDetails["EmploymentProfile"];
      this.SelectedCandidateAcademicProfile=candidateDetails["AcademicProfile"];
      this.SelectedCandidateShortListableJobs=candidateDetails["ShortlistableJobs"];

     // AcademicProfile
      
//console.log("************");
      // console.log("************");
      //this.SelectedApplicantDetailsService.UpdateSelectedApplicantDetails(this.ApplicantDetails);
      this.ApplicantPersonalProfileService.UpdateApplicantProfile(this.ApplicantDetails.CandidateBasicInfo);
      this.ApplicantBasicInfoService.UpdateAplicantBasicInfo(this.SelectedCandidateBasicInfo);
      this.ApplicantEmploymentProfileService.UpdateApplicantEmploymentProfile(this.SelectedCandidateEmploymentProfile);
      this.ApplicantAcademicProfileService.UpdateApplicantAcademicProfile(this.SelectedCandidateAcademicProfile);
      this.ApplicantShortlistableJobsService.UpdateShortListableJobs(this.SelectedCandidateShortListableJobs);

      //ShortlistableJobs

       
      this.CurrentSelectedCandidate.CandidateID=this.Applicant.CandidateID;
     
      this.CurrentSelectedCandidateService.UpdateCurrentSelectedCandidate(this.CurrentSelectedCandidate);
       
    },
    (error)=>{
      
      //console.log(error)
    }
)


 // this.ApplicantBasicInfoService.UpdateAplicantBasicInfo(this.Applicant);
 //   console.log(this.router.url);
   
 //let pageno =+this.route.snapshot.queryParams["pid"]
   let pageno= localStorage.getItem("currentpage");
 var currentURL = this.router.url;
 //alert(currentURL);
      if( currentURL.indexOf('candidates/overviewx') >= 0 ||  currentURL.indexOf('candidates/logsx') >= 0 ||  currentURL.indexOf('candidates/statusx') >= 0) {
       // alert("p1");
      this.router.navigateByUrl('candidates/overview?pid=' + pageno);

      } else  if( currentURL.indexOf('/candidates/overview') >= 0 ||  currentURL.indexOf('candidates/logs') >= 0 ||  currentURL.indexOf('candidates/status') >= 0){
       // alert("p2");
        this.router.navigateByUrl('/candidates/overviewx?pid=' + pageno);

      }else  if( currentURL.indexOf('/candidatesx/overviewx') >= 0 ||  currentURL.indexOf('candidatesx/logs') >= 0 ||  currentURL.indexOf('candidatesx/status') >= 0){
        //alert("p3");
        this.router.navigateByUrl('/candidatesx/overview?pid=' + pageno);
      }
      else  if( currentURL.indexOf('/candidatesx/overview') >= 0 ||  currentURL.indexOf('candidatesx/logs') >= 0 ||  currentURL.indexOf('candidatesx/status') >= 0){
        
        this.router.navigateByUrl('/candidatesx/overviewx?pid=' + pageno);
      }
    
}
    
  }

