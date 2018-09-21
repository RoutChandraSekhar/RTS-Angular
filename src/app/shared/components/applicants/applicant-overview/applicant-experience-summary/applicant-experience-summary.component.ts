import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicantPersonalProfileService } from '../../../../services/applicants/applicant-personal-profile.service';
import { ApplicantDetailsInfo } from '../../../../models/applicant-details-info';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applicant-experience-summary',
  templateUrl: './applicant-experience-summary.component.html',
  styleUrls: ['./applicant-experience-summary.component.css']
})
export class ApplicantExperienceSummaryComponent implements OnInit,OnDestroy {

  constructor(
    private ApplicantPersonalProfileService : ApplicantPersonalProfileService

  ) { }
  ApplicantProfileInfo : ApplicantDetailsInfo;
  ApplicantPersonalProfileServiceSubscripiton:Subscription;

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.ApplicantPersonalProfileServiceSubscripiton !=undefined){
      this.ApplicantPersonalProfileServiceSubscripiton.unsubscribe();
    }

  }
  ngOnInit() {
   this.ApplicantPersonalProfileServiceSubscripiton= this.ApplicantPersonalProfileService.cast.subscribe(ApplicantProfileInfo=>this.ApplicantProfileInfo=ApplicantProfileInfo);
  }

}
