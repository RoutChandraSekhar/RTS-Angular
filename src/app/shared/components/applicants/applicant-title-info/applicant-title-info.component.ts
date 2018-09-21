import { Component, OnInit, OnDestroy } from '@angular/core';
import { SelectedApplicantBasicInfoService } from '../../../services/applicants/selected-applicant-basic-info.service';
import { ApplicantBasicInfo } from '../../../models/applicant-basic-info';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applicant-title-info',
  templateUrl: './applicant-title-info.component.html',
  styleUrls: ['./applicant-title-info.component.css']
})
export class ApplicantTitleInfoComponent implements OnInit,OnDestroy {

  ApplicantBasicInfoServiceSubscription:Subscription;
  constructor(
    private ApplicantBasicInfoService : SelectedApplicantBasicInfoService

  ) { }
  SelectedCandidateBasicInfo : ApplicantBasicInfo;

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.ApplicantBasicInfoServiceSubscription!=undefined){
      this.ApplicantBasicInfoServiceSubscription.unsubscribe();
    }
  }
 
  ngOnInit() {
    this.ApplicantBasicInfoServiceSubscription=   this.ApplicantBasicInfoService.cast.subscribe(SelectedCandidateBasicInfo=>this.SelectedCandidateBasicInfo=SelectedCandidateBasicInfo);

  }

  GetProfilePic(gender:string):string{
    if(gender.toLowerCase()=="male"){ return "/assets/images/profile-image-2.png"} 
      else { return "/assets/images/profile-image-1.png"}
    }

}
