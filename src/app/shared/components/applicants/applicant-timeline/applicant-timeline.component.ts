import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApplicantTimeline } from '../../../models/applicant-timeline';
import { CurrentSelectedCandidatePageService } from '../../../services/current-selected-candidate-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applicant-timeline',
  templateUrl: './applicant-timeline.component.html',
  styleUrls: ['./applicant-timeline.component.css']
})
export class ApplicantTimelineComponent implements OnInit, OnDestroy {

  constructor(private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService) { }
  @Input() ApplicantTimeline:ApplicantTimeline[]=[];
  CurrentSelectedCandidatePageServiceSubscription:Subscription;

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.CurrentSelectedCandidatePageServiceSubscription !=undefined){
      this.CurrentSelectedCandidatePageServiceSubscription.unsubscribe();
    }
  }

  ngOnInit() {
   //console.log(this.ApplicantTimeline);

   this.CurrentSelectedCandidatePageServiceSubscription= this.CurrentSelectedCandidatePageService.castCurrentSelectedApplicantTimeline.subscribe(
     
    ApplicantTimeline=>
    {
   
      this.ApplicantTimeline=ApplicantTimeline
    }
   
  )
  }

}
