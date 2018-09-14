import { Component, OnInit,Input } from '@angular/core';
import { ApplicantShortlistableJobs } from '../../../../models/applicant-shortlistable-jobs';
import { ApplicantShortlistableJobsService } from '../../../../services/applicants/applicant-shortlistable-jobs.service';
import { ApplicantBasicInfo } from '../../../../models/applicant-basic-info';
import { SelectedApplicantBasicInfoService } from '../../../../services/applicants/selected-applicant-basic-info.service';
declare var $:any;

@Component({
  selector: 'app-applicant-quick-action-buttons',
  templateUrl: './applicant-quick-action-buttons.component.html',
  styleUrls: ['./applicant-quick-action-buttons.component.css']
})
export class ApplicantQuickActionButtonsComponent implements OnInit {
  ShortListableJobs: ApplicantShortlistableJobs[];
 
  ShortListableJob:string;
  SelectedJobToShortList:string;
 
  constructor(
    private ShortlistableJobsService : ApplicantShortlistableJobsService,
    private ApplicantBasicInfoService : SelectedApplicantBasicInfoService
  ) { }

  SelectedCandidateBasicInfo : ApplicantBasicInfo;
 


  ngOnInit() {
    //console.log("Applicant Full Name here from Quick Action Buttons...")
    this.ApplicantBasicInfoService.cast.subscribe(SelectedCandidateBasicInfo=>this.SelectedCandidateBasicInfo=SelectedCandidateBasicInfo);
    this.ShortlistableJobsService.cast.subscribe(ShortListableJobs=>this.ShortListableJobs=ShortListableJobs);

    //console.log(this.SelectedCandidateBasicInfo);
//console.log(this.SelectedCandidateBasicInfo.FullName.toString());
   // this.ApplicantFullName=this.SelectedCandidateBasicInfo.FullName.toString();
    //$('#qJob').formSelect();
   
    $("#qJob").select2();
    //$('select').material_select();

   
    
  }


  showQucikActionModal(){
    $('#modal_quickaction').openModal(); 
  }

  shortlistCandidate(){
    $('#modal_quickaction').closeModal(); 
  }

}
