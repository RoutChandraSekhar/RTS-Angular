import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-applicant-quick-action-buttons',
  templateUrl: './applicant-quick-action-buttons.component.html',
  styleUrls: ['./applicant-quick-action-buttons.component.css']
})
export class ApplicantQuickActionButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //$('#qJob').formSelect();
   
    $("#qJob").select2();
    $('select').material_select();
    
  }

  showQucikActionModal(){
    $('#modal_quickaction').openModal(); 
  }

  shortlistCandidate(){
    $('#modal_quickaction').closeModal(); 
  }

}
