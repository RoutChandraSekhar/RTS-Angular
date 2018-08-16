import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-job-summary-container',
  templateUrl: './job-summary-container.component.html',
  styleUrls: ['./job-summary-container.component.css']
})
export class JobSummaryContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

  showJobDescriptionModal(){
    $('#modal_job_description').openModal(); 
    }
}
