import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicantDetailsInfo } from '../../../../models/applicant-details-info';
import { ApplicantPersonalProfileService } from '../../../../services/applicants/applicant-personal-profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applicant-why-shurooq',
  templateUrl: './applicant-why-shurooq.component.html',
  styleUrls: ['./applicant-why-shurooq.component.css']
})
export class ApplicantWhyShurooqComponent implements OnInit,OnDestroy {

  constructor(
    private ApplicantPersonalProfileService : ApplicantPersonalProfileService

  ) { }
  ApplicantProfileInfo : ApplicantDetailsInfo;
  ApplicantPersonalProfileServiceSubscription:Subscription;

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  if(this.ApplicantPersonalProfileServiceSubscription !=undefined){
    this.ApplicantPersonalProfileServiceSubscription.unsubscribe();
  }
}

  ngOnInit() {
   this.ApplicantPersonalProfileServiceSubscription= this.ApplicantPersonalProfileService.cast.subscribe(ApplicantProfileInfo=>this.ApplicantProfileInfo=ApplicantProfileInfo);
  
  }

}
