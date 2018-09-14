import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { JobInfo, JobApplicationsInfo } from '../../../shared/models/jobs/JobInfo';
declare var $:any;
import Swal, { SweetAlertType } from 'sweetalert2';
import { Router } from '@angular/router';
import { JobinfoService } from '../../../shared/services/jobs/jobinfo.service';
import { CandidateService } from '../../../shared/services/candidate.service';
import { CurrentSelectedCandidatePageService } from '../../../shared/services/current-selected-candidate-page.service';



@Component({
  selector: 'app-job-summary-container',
  templateUrl: './job-summary-container.component.html',
  styleUrls: ['./job-summary-container.component.css']
})
export class JobSummaryContainerComponent implements OnInit {

  constructor(
    @Inject(CandidateService) private candidateService : CandidateService,
    private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService,
    private router: Router,private JobinfoService : JobinfoService) { }
  @Input() JobInfo:JobInfo;
  JobApplicationsInfo: JobApplicationsInfo[]=[];
  ShowActionButtons:boolean=true;

 

  ngOnInit() {
   this.JobApplicationsInfo=this.JobInfo["JobApplicationsInfo"];
   this.showJobs();

  }

  showJobDescriptionModal(VacancyID:string){
   this.CurrentSelectedCandidatePageService.UpdateJobIDforModal(+VacancyID);
    $('#modal_job_description').openModal(); 
    }

    GetBoolean(value:string):boolean{
      
      if ( value.toString()=="0"){ return false} else {return true}
    }

    unpublishjob(VacancyID:string){
      Swal({
        title: 'Unpublish this job?',
        text: 'Would you like to unpublish this job from career portal?',
        type: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes, unpublish!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {

        // Publish Code Here
        this.candidateService.PublishUnpublishJob(+VacancyID,"false").subscribe(
          ()=>{
            Swal('Unpublished!','This job is now unpublished from SHUROOQ career portal ','success')
            this.RefreshJobs(false);
          },
          (errror)=>{alert("Error occured. Please contact it@shurooq.gov.ae")}
        )
        
        } 
      })

    }

    closeJob(VacancyID:number){
      Swal({
        title: 'Are you sure?',
        text: 'Do you want to close this job? This action cannot be reverted back',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Close this job!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {

        // Publish Code Here
        this.candidateService.CloseJob(VacancyID,"true").subscribe(
          ()=>{
            Swal('Unpublished!','This job is closed and archived ','success')
            this.RefreshJobs(false);
          },
          (errror)=>{alert("Error occured. Please contact it@shurooq.gov.ae")}
        )
        
        } 
      })

    }

    publishjob(VacancyID:number){

      Swal({
        title: 'Publish this job?',
        text: 'Would you like to publish this job at  career portal?',
        type: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes, Publish!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {

        // Publish Code Here
        this.candidateService.PublishUnpublishJob(VacancyID,"true").subscribe(
          ()=>{
            Swal('Published!','This job is now published at SHUROOQ career portal ','success')
            this.RefreshJobs(false);
          },
          (errror)=>{alert("Error occured. Please contact it@shurooq.gov.ae")}
        )
        
         
        } 
      })
    }



    RefreshJobs(ShowOnlyClosedJobs){
      this.candidateService.GetJobListingSummary(ShowOnlyClosedJobs).subscribe(
        (response)=>{
          let rep = response["JobListSummary"];
          let rep1 = rep["JobInfo"];
          this.JobinfoService.UpdateJobInfo(rep1);
         

        },
        (error)=>{console.log(error)}
  
      )
    }


    showJobs(){
       
      var currentURL = this.router.url;
      if( currentURL.indexOf('jobsclosed') >= 0){
        this.ShowActionButtons=false
      }
        else {
          this.ShowActionButtons=true
          
     }

}
    
}
