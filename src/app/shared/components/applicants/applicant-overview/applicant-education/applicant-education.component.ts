import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicantAcademicProfile } from '../../../../models/applicant-academic-profile';
import { ApplicantAcademicProfileService } from '../../../../services/applicants/applicant-academic-profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applicant-education',
  templateUrl: './applicant-education.component.html',
  styleUrls: ['./applicant-education.component.css']
})
export class ApplicantEducationComponent implements OnInit,OnDestroy {
  ApplicantAcademicProfile : ApplicantAcademicProfile[]=[];
  ApplicantAcademicProfileServiceSubscription:Subscription;
  constructor(
    private ApplicantAcademicProfileService : ApplicantAcademicProfileService
  ) { }

  isDataExist:boolean=false;
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.ApplicantAcademicProfileServiceSubscription !=undefined){
      this.ApplicantAcademicProfileServiceSubscription.unsubscribe();
    }
  }
  ngOnInit() {
   this.ApplicantAcademicProfileServiceSubscription= this.ApplicantAcademicProfileService.cast.subscribe(ApplicantAcademicProfile=>
      
      {
        this.ApplicantAcademicProfile=ApplicantAcademicProfile
        if (this.ApplicantAcademicProfile ==null || this.ApplicantAcademicProfile==undefined){
          this.isDataExist=false;
        } else if (this.ApplicantAcademicProfile.length<=0){
          this.isDataExist=false;
        } else {
          this.isDataExist=true;
        }
      }
      
    
    );
  
  }

}
