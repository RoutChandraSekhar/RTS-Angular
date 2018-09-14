import { Component, OnInit, Input } from '@angular/core';
import { ApplicantTimeline } from '../../../models/applicant-timeline';
import { CurrentSelectedCandidatePageService } from '../../../services/current-selected-candidate-page.service';

@Component({
  selector: 'app-applicant-timeline',
  templateUrl: './applicant-timeline.component.html',
  styleUrls: ['./applicant-timeline.component.css']
})
export class ApplicantTimelineComponent implements OnInit {

  constructor(private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService) { }
  @Input() ApplicantTimeline:ApplicantTimeline[]=[];
  ngOnInit() {
   //console.log(this.ApplicantTimeline);

   this.CurrentSelectedCandidatePageService.castCurrentSelectedApplicantTimeline.subscribe(
     
    ApplicantTimeline=>
    {
   
      this.ApplicantTimeline=ApplicantTimeline
    }
   
  )
  }

}
