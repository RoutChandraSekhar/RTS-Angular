import { Component, OnInit } from '@angular/core';
import { ApplicantAcademicProfile } from '../../../../models/applicant-academic-profile';
import { ApplicantAcademicProfileService } from '../../../../services/applicants/applicant-academic-profile.service';

@Component({
  selector: 'app-applicant-education',
  templateUrl: './applicant-education.component.html',
  styleUrls: ['./applicant-education.component.css']
})
export class ApplicantEducationComponent implements OnInit {
  ApplicantAcademicProfile : ApplicantAcademicProfile[]=[];
  constructor(
    private ApplicantAcademicProfileService : ApplicantAcademicProfileService
  ) { }

  isDataExist:boolean=false;
  ngOnInit() {
    this.ApplicantAcademicProfileService.cast.subscribe(ApplicantAcademicProfile=>
      
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
