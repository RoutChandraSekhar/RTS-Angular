import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { ApplicantActivityLog } from '../../../models/applicant-activity-log';
import { CurrentSelectedCandidate } from '../../../models/current-selected-candidate';
import { CurrentSelectedCandidateService } from '../../../services/current-selected-candidate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applicant-application-log',
  templateUrl: './applicant-application-log.component.html',
  styleUrls: ['./applicant-application-log.component.css']
})
export class ApplicantApplicationLogComponent implements OnInit,OnDestroy {
  ActivityLog:ApplicantActivityLog[]=[];
  ActivityLogFiltered:ApplicantActivityLog[]=[];
  SearchQuery:string="";

  CurrentSelectedCandidate:CurrentSelectedCandidate;
  SelectedCandidateID:number;

  CurrentSelectedCandidateServiceSubscription:Subscription;

  constructor(
    @Inject(CandidateService) private candidateService : CandidateService,
    private CurrentSelectedCandidateService:CurrentSelectedCandidateService
  ) { }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.CurrentSelectedCandidateServiceSubscription !=undefined){
      this.CurrentSelectedCandidateServiceSubscription.unsubscribe();
    }
  }
  ngOnInit() {

   this.CurrentSelectedCandidateServiceSubscription= this.CurrentSelectedCandidateService.cast.subscribe(CurrentSelectedCandidate=>this.CurrentSelectedCandidate=CurrentSelectedCandidate);
    this.SelectedCandidateID= + this.CurrentSelectedCandidate.CandidateID;

    this.candidateService.GetActivityLog(this.SelectedCandidateID).subscribe(
      (response)=>{
       
        if (response["CandidateActivityLog"]!==null){
        let rep = response["CandidateActivityLog"];
      
     
       
       let rep1 = rep["ActivityLog"]
       this.ActivityLog= rep1;
       this.ActivityLogFiltered=rep1;
      }
         // console.log(this.ActivityLog);

      },
      (error)=>{}
    )
  }

  filterActivity(){
 //   console.log(this.SearchQuery);
    this.ActivityLogFiltered= this.ActivityLog.filter(t=>t.Message.toUpperCase().indexOf(this.SearchQuery.toUpperCase() )>-1);
    //this.ActivityLogFiltered= this.ActivityLog.filter(t=>t.ActivityByUserFullName.toUpperCase().indexOf(this.SearchQuery.toUpperCase() )>-1);
   // this.ActivityLogFiltered= this.ActivityLog.filter(t=>t.ActivityOn.toUpperCase().indexOf(this.SearchQuery.toUpperCase() )>-1);
   
  }

}
