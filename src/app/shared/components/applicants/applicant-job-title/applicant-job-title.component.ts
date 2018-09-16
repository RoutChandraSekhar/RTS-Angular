import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant-job-title',
  templateUrl: './applicant-job-title.component.html',
  styleUrls: ['./applicant-job-title.component.css']
})
export class ApplicantJobTitleComponent implements OnInit {

  constructor(private router: Router) { }

  isShowTitle:boolean=false;

  ngOnInit() {
    let CurrentURL:string=this.router.url;
    if(CurrentURL.toLowerCase().indexOf("mode=applicants")>=0){
      this.isShowTitle=true;
    } else  if(CurrentURL.toLowerCase().indexOf("mode=shortlist")>=0){
      this.isShowTitle=true;
    } 
  }



}
