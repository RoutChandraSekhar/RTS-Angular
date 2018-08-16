import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-applicant-info-card',
  templateUrl: './applicant-info-card.component.html',
  styleUrls: ['./applicant-info-card.component.css']
})
export class ApplicantInfoCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showApplicantDocuments(){
    $('#modalApplicantDocuments').openModal(); 
  }

  showApplicantHistory(){
    $('#modalApplicantHistory').openModal(); 
  }
}
