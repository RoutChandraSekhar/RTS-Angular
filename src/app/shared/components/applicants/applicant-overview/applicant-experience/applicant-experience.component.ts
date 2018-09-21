import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SelectedApplicantDetailsService } from '../../../../services/applicants/Selected-applicant-details.service';
import { ApplicantDetails } from '../../../../models/applicant-details';
import { ApplicantEmploymentProfile } from '../../../../models/applicant-employment-profile';
import { ApplicantEmploymentProfileService } from '../../../../services/applicants/applicant-employment-profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applicant-experience',
  templateUrl: './applicant-experience.component.html',
  styleUrls: ['./applicant-experience.component.css']
})
export class ApplicantExperienceComponent implements OnInit,OnDestroy {
  ApplicantEmployementInfo: ApplicantEmploymentProfile[]=[];
  ApplicantEmploymentProfileServiceSubscription:Subscription;
  constructor(
    private ApplicantEmploymentProfileService : ApplicantEmploymentProfileService

  ) { }
  isDataExist:boolean =false;

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.ApplicantEmploymentProfileServiceSubscription !=undefined){
      this.ApplicantEmploymentProfileServiceSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    
    this.ApplicantEmploymentProfileServiceSubscription=  this.ApplicantEmploymentProfileService.cast.subscribe(ApplicantProfileInfo=>
      {
        this.ApplicantEmployementInfo=ApplicantProfileInfo
        if (this.ApplicantEmployementInfo ==null || this.ApplicantEmployementInfo==undefined){
          this.isDataExist=false;
        } else if (this.ApplicantEmployementInfo.length<=0){
          this.isDataExist=false;
        } else {
          this.isDataExist=true;
        }
      }
     
    );
  
  
  //  console.log(this.ApplicantEmployementInfo);
  

  }

}
