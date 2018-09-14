import { Component, OnInit } from '@angular/core';
import { ApplicantDetailsInfo } from '../../../../models/applicant-details-info';
import { ApplicantPersonalProfileService } from '../../../../services/applicants/applicant-personal-profile.service';

@Component({
  selector: 'app-applicant-why-shurooq',
  templateUrl: './applicant-why-shurooq.component.html',
  styleUrls: ['./applicant-why-shurooq.component.css']
})
export class ApplicantWhyShurooqComponent implements OnInit {

  constructor(
    private ApplicantPersonalProfileService : ApplicantPersonalProfileService

  ) { }
  ApplicantProfileInfo : ApplicantDetailsInfo;
  ngOnInit() {
    this.ApplicantPersonalProfileService.cast.subscribe(ApplicantProfileInfo=>this.ApplicantProfileInfo=ApplicantProfileInfo);
  
  }

}
