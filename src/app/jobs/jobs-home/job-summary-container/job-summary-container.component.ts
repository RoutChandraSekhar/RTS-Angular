import { Component, OnInit, Input, Inject, EventEmitter, Output, OnDestroy } from '@angular/core';
import { JobInfo, JobApplicationsInfo } from '../../../shared/models/jobs/JobInfo';
declare var $:any;
import Swal, { SweetAlertType } from 'sweetalert2';
import { Router } from '@angular/router';
import { JobinfoService } from '../../../shared/services/jobs/jobinfo.service';
import { CandidateService } from '../../../shared/services/candidate.service';
import { CurrentSelectedCandidatePageService } from '../../../shared/services/current-selected-candidate-page.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-job-summary-container',
  templateUrl: './job-summary-container.component.html',
  styleUrls: ['./job-summary-container.component.css']
})
export class JobSummaryContainerComponent implements OnInit,OnDestroy {

  constructor(
    @Inject(CandidateService) private candidateService : CandidateService,
    private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService,
    private router: Router,private JobinfoService : JobinfoService) { }
  @Input() JobInfo:JobInfo;
  JobApplicationsInfo: JobApplicationsInfo[]=[];
  ShowActionButtons:boolean=true;

  PublishUnpublishJobSubscription:Subscription;
  CloseJobSubscription: Subscription;
  GetJobListingSummarySubscription:Subscription;
  

 ngOnDestroy(): void {
   //Called once, before the instance is destroyed.
   //Add 'implements OnDestroy' to the class.
   if (this.PublishUnpublishJobSubscription !=undefined){
    this.PublishUnpublishJobSubscription.unsubscribe();
   }

   if (this.CloseJobSubscription !=undefined){
    this.CloseJobSubscription.unsubscribe();
   }
   if (this.GetJobListingSummarySubscription !=undefined){
    this.GetJobListingSummarySubscription.unsubscribe();
   }
  
   
  
 }

  ngOnInit() {
   this.JobApplicationsInfo=this.JobInfo["JobApplicationsInfo"];
   //console.clear();
   console.log(this.JobApplicationsInfo);
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
      this.PublishUnpublishJobSubscription=  this.candidateService.PublishUnpublishJob(+VacancyID,"false").subscribe(
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
       this.CloseJobSubscription= this.candidateService.CloseJob(VacancyID,"true").subscribe(
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
       this.PublishUnpublishJobSubscription= this.candidateService.PublishUnpublishJob(VacancyID,"true").subscribe(
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
   this.GetJobListingSummarySubscription= this.candidateService.GetJobListingSummary(ShowOnlyClosedJobs).subscribe(
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

GetRouteLink(GroupName:string, VacancyID:number){
  var URL= ""
  if(GroupName.toLowerCase()=="applicants"){
    URL="/candidates/overview?mode=applicants&vacancyID="+ VacancyID +"&frompage=jobapplicants"
  } else if (GroupName.toLowerCase()=="shortlist"){
    URL="/candidates/overview?mode=shortlist&vacancyID="+ VacancyID +"&frompage=jobapplicants"
  } else if (GroupName.toLowerCase()=="approved"){
    URL="/shortlisted?mode=approved&vacancyID="+ VacancyID +"&frompage=jobapplicants&groupid=3"
  } else if (GroupName.toLowerCase()=="interview"){
    URL="/shortlisted?mode=interview&vacancyID="+ VacancyID +"&frompage=jobapplicants&groupid=4"
  }  else if (GroupName.toLowerCase()=="security"){
    URL="/shortlisted?mode=security&vacancyID="+ VacancyID +"&frompage=jobapplicants&groupid=5"
  }  else if (GroupName.toLowerCase()=="offer"){
    URL="/shortlisted?mode=offer&vacancyID="+ VacancyID +"&frompage=jobapplicants&groupid=6"
  }   else if (GroupName.toLowerCase()=="hired"){
    URL="/shortlisted?mode=hired&vacancyID="+ VacancyID +"&frompage=jobapplicants&groupid=7"
  }  else if (GroupName.toLowerCase()=="joined"){
    URL="/shortlisted?mode=joined&vacancyID="+ VacancyID +"&frompage=jobapplicants&groupid=8"
  }  
  this.router.navigateByUrl(URL);     
}
    
}
