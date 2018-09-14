import { Component, OnInit } from '@angular/core';
import { ApplicantPersonalProfileService } from '../../../../services/applicants/applicant-personal-profile.service';
import { ApplicantDetailsInfo } from '../../../../models/applicant-details-info';

@Component({
  selector: 'app-applicant-experience-summary',
  templateUrl: './applicant-experience-summary.component.html',
  styleUrls: ['./applicant-experience-summary.component.css']
})
export class ApplicantExperienceSummaryComponent implements OnInit {

  constructor(
    private ApplicantPersonalProfileService : ApplicantPersonalProfileService

  ) { }
  ApplicantProfileInfo : ApplicantDetailsInfo;
  ngOnInit() {
    this.ApplicantPersonalProfileService.cast.subscribe(ApplicantProfileInfo=>this.ApplicantProfileInfo=ApplicantProfileInfo);
  }

}
