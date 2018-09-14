import { Component, OnInit, Inject, Input } from '@angular/core';
import { CurrentApplicationStatus } from '../../../../models/current-application-status';
import { CandidateService } from '../../../../services/candidate.service';
import { CurrentSelectedCandidateService } from '../../../../services/current-selected-candidate.service';
import { CurrentSelectedCandidate } from '../../../../models/current-selected-candidate';
import { CurrentSelectedCandidatePageService } from '../../../../services/current-selected-candidate-page.service';
import { ApplicantTimeline } from '../../../../models/applicant-timeline';

declare var $:any;

@Component({
  selector: 'app-applicant-current-application-status',
  templateUrl: './applicant-current-application-status.component.html',
  styleUrls: ['./applicant-current-application-status.component.css']
})
export class ApplicantCurrentApplicationStatusComponent implements OnInit {

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

  ngOnInit() {
    this.CurrentSelectedCandidatePageService.UpdateCurrentSelectedApplicantTimeline(this.ApplicantTimeline);
    this.CurrentSelectedCandidateService.cast.subscribe(
      CurrentSelectedCandidate=>{
        this.CurrentSelectedCandidate=CurrentSelectedCandidate;
        this.GetActiveApplications(this.CurrentSelectedCandidate.CandidateID);
        // this.CurrentSelectedApplicationID=this.CurrentAppliationStatus.;

      }
      
    );
  
    $("#CurrentApplicationID").dropdown()


  }
  onApplicationChange(ApplicationID:number){

    this.candidateService.GetCandidateParticularApplicationStatus(ApplicationID).subscribe(
      (response)=>{
       this.CurrentAppliationStatus=response["ApplicationStatus"][0] 
       this.GetCandidateApplicationTimeLine(ApplicationID)

      
      },
      (error)=>{console.log("error")}
    )
    
  }

  GetCandidateApplicationTimeLine(ApplicationID:number){
    this.candidateService.GetCandidateParticularApplicationTimeLine(ApplicationID).subscribe(
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
   
    this.candidateService.GetActiveJobApplications(+CandiateID).subscribe(
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
  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
   
  }

}
