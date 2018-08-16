import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-applicant-floating-filter-button',
  templateUrl: './applicant-floating-filter-button.component.html',
  styleUrls: ['./applicant-floating-filter-button.component.css']
})
export class ApplicantFloatingFilterButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showFilterModal(){
    $('#modal_filter_candidates').openModal(); 
    }
}
