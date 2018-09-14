import { Component, OnInit } from '@angular/core';

import { ApplicantDetailsInfo } from '../../../../models/applicant-details-info';
import { ApplicantPersonalProfileService } from '../../../../services/applicants/applicant-personal-profile.service';


@Component({
  selector: 'app-applicant-objective',
  templateUrl: './applicant-objective.component.html',
  styleUrls: ['./applicant-objective.component.css']
})
export class ApplicantObjectiveComponent implements OnInit {

  ApplicantProfileInfo : ApplicantDetailsInfo;
  FullName :string;
  constructor(
    private ApplicantPersonalProfileService : ApplicantPersonalProfileService

  ) { }

  //applicant=new ApplicantDetails(null,null, null,null,null, null);
  
  ngOnInit() {
    
    this.ApplicantPersonalProfileService.cast.subscribe(ApplicantProfileInfo=>this.ApplicantProfileInfo=ApplicantProfileInfo);
  
   //console.log (this.ApplicantProfileInfo);
 
  
    //let candidateDetails =this.ApplicantDetails["CandidateDetails"];
   // console.log(candidateDetails);
    //console.log(this.ApplicantDetails.CandidateBasicInfo.FullName.toString())
  }

}
