import { Component, OnInit, Inject } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { CurrentApplicationStatus } from '../../../models/current-application-status';
import { ApplicantTimeline } from '../../../models/applicant-timeline';
import { ApplicantPastApplicationStatus } from '../../../models/applicant-past-applications';
import { CurrentSelectedCandidateService } from '../../../services/current-selected-candidate.service';
import { CurrentSelectedCandidate } from '../../../models/current-selected-candidate';
import { CurrentSelectedCandidatePageService } from '../../../services/current-selected-candidate-page.service';

@Component({
  selector: 'app-applicant-application-status',
  templateUrl: './applicant-application-status.component.html',
  styleUrls: ['./applicant-application-status.component.css']
})
export class ApplicantApplicationStatusComponent implements OnInit {

  constructor(
    @Inject(CandidateService) private candidateService : CandidateService,
    private CurrentSelectedCandidateService:CurrentSelectedCandidateService,
    private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService

  ) { }
  CurrentAppliationStatus:CurrentApplicationStatus = new CurrentApplicationStatus("","","","","","","","","");
  ApplicantTimeline:ApplicantTimeline[]=[];
  ApplicantPastApplicationStatus:ApplicantPastApplicationStatus[]=[];
  CurrentCandidateID:number=0;
  CurrentSelectedCandidate:CurrentSelectedCandidate;
  isCurrentApplicationExist:boolean;
  isPastApplicationExist:boolean;
  ActiveApplications: any[]=[];
  

  isLoaded:boolean=false;
  ngOnInit() {
    this.CurrentSelectedCandidateService.cast.subscribe(CurrentSelectedCandidate=>this.CurrentSelectedCandidate=CurrentSelectedCandidate);
    this.CurrentCandidateID=+this.CurrentSelectedCandidate.CandidateID;
    //alert(this.CurrentSelectedCandidate.CandidateID);
   // alert(this.CurrentCandidateID);


    this.LoadContents()
 

   
  }


  LoadContents(){
    this.candidateService.GetApplicationStatusDetails(this.CurrentCandidateID).subscribe(
      (response)=>{
    
      
        console.log(response);

        if ((!(response["ApplicationDetails"]==undefined)) || (!(response["ApplicationDetails"]==null))){



        if((!(response.ApplicationDetails["CurrentAppliationStatus"]== null)) || (!(response.ApplicationDetails["CurrentAppliationStatus"] == undefined))){
          
          this.CurrentAppliationStatus=response.ApplicationDetails["CurrentAppliationStatus"][0];
          this.ActiveApplications=response.ApplicationDetails["ActiveJobApplications"];
        
        } 
        
        if((!(response.ApplicationDetails["Timeline"]== null)) || (!(response.ApplicationDetails["Timeline"] == undefined))){
          this.ApplicantTimeline=response.ApplicationDetails["Timeline"];
          this.CurrentSelectedCandidatePageService.UpdateCurrentSelectedApplicantTimeline( this.ApplicantTimeline);
        } 

       if((!(response.ApplicationDetails["PastApplications"]== null)) || (!(response.ApplicationDetails["PastApplications"] == undefined))){
          this.ApplicantPastApplicationStatus=response.ApplicationDetails["PastApplications"];
        } 
        
      }
        
        
      if (this.CurrentAppliationStatus.ApplicationID.length>0){
        this.isCurrentApplicationExist=true
      }else {
        this.isCurrentApplicationExist=false
        
      }

      if (this.ApplicantPastApplicationStatus.length<=0){
            this.isPastApplicationExist=false
      } else{
        this.isPastApplicationExist=true
      }


      this.isLoaded=true;
      },
      (error)=>{console.log(error)}
    )
  }


}
