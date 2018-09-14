import { Component, OnInit } from '@angular/core';
import { SelectedApplicantBasicInfoService } from '../../../services/applicants/selected-applicant-basic-info.service';
import { ApplicantBasicInfo } from '../../../models/applicant-basic-info';

@Component({
  selector: 'app-applicant-title-info',
  templateUrl: './applicant-title-info.component.html',
  styleUrls: ['./applicant-title-info.component.css']
})
export class ApplicantTitleInfoComponent implements OnInit {

  constructor(
    private ApplicantBasicInfoService : SelectedApplicantBasicInfoService

  ) { }
  SelectedCandidateBasicInfo : ApplicantBasicInfo;
 
  ngOnInit() {
    this.ApplicantBasicInfoService.cast.subscribe(SelectedCandidateBasicInfo=>this.SelectedCandidateBasicInfo=SelectedCandidateBasicInfo);

  }

  GetProfilePic(gender:string):string{
    if(gender.toLowerCase()=="male"){ return "/assets/images/profile-image-2.png"} 
      else { return "/assets/images/profile-image-1.png"}
    }

}
