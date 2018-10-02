import { Component, OnInit, Inject, Input, OnDestroy } from '@angular/core';
import { CurrentApplicationStatus } from '../../../../models/current-application-status';
import { CandidateService } from '../../../../services/candidate.service';
import { CurrentSelectedCandidateService } from '../../../../services/current-selected-candidate.service';
import { CurrentSelectedCandidate } from '../../../../models/current-selected-candidate';
import { CurrentSelectedCandidatePageService } from '../../../../services/current-selected-candidate-page.service';
import { ApplicantTimeline } from '../../../../models/applicant-timeline';
import { Subscription } from 'rxjs';

declare var $:any;

@Component({
  selector: 'app-applicant-current-application-status',
  templateUrl: './applicant-current-application-status.component.html',
  styleUrls: ['./applicant-current-application-status.component.css']
})
export class ApplicantCurrentApplicationStatusComponent implements OnInit,OnDestroy {

  constructor(
    @Inject(CandidateService) private candidateService : CandidateService,
    private CurrentSelectedCandidateService:CurrentSelectedCandidateService,
    private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService
   ) { }
  @Input() CurrentAppliationStatus:CurrentApplicationStatus = new CurrentApplicationStatus("","","","","","","","","");
  
  @Input() isCurrentApplicationExist:boolean;
  @Input() CurrentCandidateID:number;
  ActiveApplications:any[]=[];
  ApplicantTimeline:ApplicantTimeline[]=[];
  CurrentSelectedCandidate:CurrentSelectedCandidate;
  CurrentSelectedApplicationID:string;
  
  isMultipleApplicationsExist:boolean=false;


  CurrentSelectedCandidateServiceSubscription:Subscription;
  GetCandidateParticularApplicationStatusSubscription:Subscription;
  GetCandidateParticularApplicationTimeLineSubscription:Subscription;
  GetActiveJobApplicationsSubcription:Subscription;


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.CurrentSelectedCandidateServiceSubscription !=undefined){
      this.CurrentSelectedCandidateServiceSubscription.unsubscribe();
    }

    if(this.GetCandidateParticularApplicationStatusSubscription !=undefined){
      this.GetCandidateParticularApplicationStatusSubscription.unsubscribe();
    }

    if(this.GetCandidateParticularApplicationTimeLineSubscription !=undefined){
      this.GetCandidateParticularApplicationTimeLineSubscription.unsubscribe();
    }

    if(this.GetActiveJobApplicationsSubcription !=undefined){
      this.GetActiveJobApplicationsSubcription.unsubscribe();
    }
  }

  ngOnInit() {
   
    //this.CurrentSelectedCandidatePageService.UpdateCurrentSelectedApplicantTimeline(this.ApplicantTimeline);
    this.CurrentSelectedCandidateServiceSubscription= this.CurrentSelectedCandidateService.cast.subscribe(
      CurrentSelectedCandidate=>{
        this.CurrentSelectedCandidate=CurrentSelectedCandidate;
        this.GetActiveApplications(this.CurrentSelectedCandidate.CandidateID);
        // this.CurrentSelectedApplicationID=this.CurrentAppliationStatus.;

      }
      
    );

   
  
    $("#CurrentApplicationID").dropdown()


  }
  onApplicationChange(ApplicationID:number){

  this.GetCandidateParticularApplicationStatusSubscription=  this.candidateService.GetCandidateParticularApplicationStatus(ApplicationID).subscribe(
      (response)=>{
       this.CurrentAppliationStatus=response["ApplicationStatus"][0] 
       this.GetCandidateApplicationTimeLine(ApplicationID)

      
      },
      (error)=>{console.log("error")}
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
  GetActiveApplications(CandiateID:string){
   
  this.GetActiveJobApplicationsSubcription=   this.candidateService.GetActiveJobApplications(+CandiateID).subscribe(
      (response)=>{
       
        this.ActiveApplications=response["ActiveJobApplications"];
        if(this.ActiveApplications !=null || this.ActiveApplications != undefined){
          if(this.ActiveApplications.length>0){
            this.isMultipleApplicationsExist=true;
           // $("#CurrentApplicationID").dropdown();
          }
        }

        
        
      },
      (error)=>{}
    )
  }
 

}
