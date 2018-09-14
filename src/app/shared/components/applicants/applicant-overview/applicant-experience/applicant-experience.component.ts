import { Component, OnInit, Input } from '@angular/core';
import { SelectedApplicantDetailsService } from '../../../../services/applicants/Selected-applicant-details.service';
import { ApplicantDetails } from '../../../../models/applicant-details';
import { ApplicantEmploymentProfile } from '../../../../models/applicant-employment-profile';
import { ApplicantEmploymentProfileService } from '../../../../services/applicants/applicant-employment-profile.service';

@Component({
  selector: 'app-applicant-experience',
  templateUrl: './applicant-experience.component.html',
  styleUrls: ['./applicant-experience.component.css']
})
export class ApplicantExperienceComponent implements OnInit {
  ApplicantEmployementInfo: ApplicantEmploymentProfile[]=[];

  constructor(
    private ApplicantEmploymentProfileService : ApplicantEmploymentProfileService

  ) { }
  isDataExist:boolean =false;
  ngOnInit() {
    
    this.ApplicantEmploymentProfileService.cast.subscribe(ApplicantProfileInfo=>
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
