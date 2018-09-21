import { Component, OnInit, OnDestroy } from '@angular/core';

import { ApplicantDetailsInfo } from '../../../../models/applicant-details-info';
import { ApplicantPersonalProfileService } from '../../../../services/applicants/applicant-personal-profile.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-applicant-objective',
  templateUrl: './applicant-objective.component.html',
  styleUrls: ['./applicant-objective.component.css']
})
export class ApplicantObjectiveComponent implements OnInit, OnDestroy {

  ApplicantProfileInfo : ApplicantDetailsInfo;
  FullName :string;
  ApplicantPersonalProfileServiceSubscripiton:Subscription;
  constructor(
    private ApplicantPersonalProfileService : ApplicantPersonalProfileService

  ) { }

  //applicant=new ApplicantDetails(null,null, null,null,null, null);
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.ApplicantPersonalProfileServiceSubscripiton !=undefined){
      this.ApplicantPersonalProfileServiceSubscripiton.unsubscribe();
    }

  }

  ngOnInit() {
    
  this.ApplicantPersonalProfileServiceSubscripiton=  this.ApplicantPersonalProfileService.cast.subscribe(ApplicantProfileInfo=>this.ApplicantProfileInfo=ApplicantProfileInfo);
  
   //console.log (this.ApplicantProfileInfo);
 
  
    //let candidateDetails =this.ApplicantDetails["CandidateDetails"];
   // console.log(candidateDetails);
    //console.log(this.ApplicantDetails.CandidateBasicInfo.FullName.toString())
  }

}
