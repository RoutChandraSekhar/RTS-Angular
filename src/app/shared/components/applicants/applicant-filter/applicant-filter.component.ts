import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-applicant-filter',
  templateUrl: './applicant-filter.component.html',
  styleUrls: ['./applicant-filter.component.css']
})
export class ApplicantFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //$('.dropdown-button').dropdown();
   // $('.collapsible').collapsible();
    //$('.modal').openModal();
   // $('.tooltipped').tooltip();
    //$('#modal_filter_candidates').openModal();
  //  $("select").select2();
   // $('select').material_select();
   

  }

  ngAfterViewInit(){
    $('.collapsible').collapsible();
     $("select").select2();
   $('select').material_select();
  }

  showFilterModal(){
    $('#modal_filter_candidates').openModal(); 
    }

    filterCandidates(){
      $('#filterCandidates').closeModal(); 
    }

    resetFilter(){
      $('#resetFilterCandidates').closeModal(); 
    }

}
