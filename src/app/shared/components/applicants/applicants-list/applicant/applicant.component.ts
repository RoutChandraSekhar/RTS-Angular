import { Component, OnInit, Inject } from '@angular/core';
import {Router} from "@angular/router";
import { Applicant } from '../../../../models/applicant';
import { ApplicantService } from '../../../../services/applicant.service';
import { ApplicantDetails } from '../../../../models/applicant-details';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  ApplicantsList : Applicant[];
  ApplicantDetails:ApplicantDetails[];
  constructor(@Inject(ApplicantService) private a : ApplicantService, private router: Router) {
   }

  ngOnInit() {

  console.log(  this.a.GetApplicantsList());
 // this.ApplicantsList=
  this.a.GetAllApplicants().subscribe(
    (response)=>{
      console.log(response);
     // this.ApplicantsList=response;
   
    },
    (error)=>{
      console.log(error);
    },
  );

  //Get Applicant Details
  this.a.GetApplicantDetails().subscribe(
    (response)=>{
     // console.log(response);
      this.ApplicantDetails=response;

     console.log(this.ApplicantDetails);
      
   
    },
    (error)=>{
      console.log(error);
    },
  );


  }

  GetApplicantInfo(ApplicantID:number){
    this.router.navigate(['/home']);
 
  }

}
