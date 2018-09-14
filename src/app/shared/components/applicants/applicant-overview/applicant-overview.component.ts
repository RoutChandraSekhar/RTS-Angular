import { Component, OnInit } from '@angular/core';
import { ApplicantDetails } from '../../../models/applicant-details';
import { ApplicantEmploymentProfile } from '../../../models/applicant-employment-profile';
import { ApplicantPersonalProfileService } from '../../../services/applicants/applicant-personal-profile.service';
import { ApplicantDetailsInfo } from '../../../models/applicant-details-info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applicant-overview',
  templateUrl: './applicant-overview.component.html',
  styleUrls: ['./applicant-overview.component.css']
})
export class ApplicantOverviewComponent implements OnInit {

  constructor(
    private ApplicantPersonalProfileService : ApplicantPersonalProfileService,
    private route:ActivatedRoute

  ) { }
  ApplicantProfileInfo : ApplicantDetailsInfo;

  ngOnInit() {

    /*
    console.log("Opened--Applicant Overview")
    this.ApplicantPersonalProfileService.cast.subscribe(ApplicantDetailsInfo=>this.ApplicantProfileInfo=ApplicantDetailsInfo);
    console.log("applicant profle inside applicant overview component")
    console.log(this.ApplicantProfileInfo);
    */
  }

  
}
