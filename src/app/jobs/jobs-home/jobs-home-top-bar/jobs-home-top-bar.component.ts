import { Component, OnInit, Inject, Output,EventEmitter } from '@angular/core';
import { JobInfo } from '../../../shared/models/jobs/JobInfo';
import { CandidateService } from '../../../shared/services/candidate.service';
import { JobinfoService } from '../../../shared/services/jobs/jobinfo.service';
import {Router} from "@angular/router";
import { Subscription } from 'rxjs';
declare var $:any;

@Component({
  selector: 'app-jobs-home-top-bar',
  templateUrl: './jobs-home-top-bar.component.html',
  styleUrls: ['./jobs-home-top-bar.component.css']
})
export class JobsHomeTopBarComponent implements OnInit {
  JobInfo:JobInfo[]=[];
  JobInfoFiltered:JobInfo[]=[];
  SearchQuery:string="";
  ShowOnlyClosedJobs:boolean=false;
  SelectedJobStatus:string="active";
  candidate:String;
  ShowActiveOrClosedJobsButtonDisplayText: string;
  SelectedJobType:string;
  private JobType = [
    {
       key:"Active",
       value:"false"
    },
    {
       key:"Closed",
       value:"true"
    }
 ]

 CandidateList :any[];
 @Output() onSelectedJobType: EventEmitter<string> = new EventEmitter();
 GetJobListingSummarySubscription:Subscription;
  constructor(
    @Inject(CandidateService) private candidateService : CandidateService,
    private JobinfoService : JobinfoService,
    private router: Router


  ) { }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.GetJobListingSummarySubscription !=null){
      this.GetJobListingSummarySubscription.unsubscribe();
    }
   
  }
  ngOnInit() {
        $("select").select2();
       $('select').material_select();

       var currentURL = this.router.url;
       if( currentURL.indexOf('jobsclosed') >= 0){
         this.ShowActiveOrClosedJobsButtonDisplayText="Show Active Jobs"
         this.ShowOnlyClosedJobs=true;

         this.SelectedJobType="Closed Jobs";
         this.onSelectedJobType.emit(this.SelectedJobType);
       }
         else {
           this.ShowActiveOrClosedJobsButtonDisplayText="Show Closed Jobs"
           this.ShowOnlyClosedJobs=false;
           this.SelectedJobType="Active Jobs";
           this.onSelectedJobType.emit(this.SelectedJobType);
      }

      


     this.GetJobListingSummarySubscription=  this.candidateService.GetJobListingSummary(this.ShowOnlyClosedJobs).subscribe(
        (response)=>{
          let rep = response["JobListSummary"];
          let rep1 = rep["JobInfo"];
          this.JobInfo=rep1;
          this.JobInfoFiltered=rep1;
          this.JobinfoService.UpdateJobInfo( this.JobInfoFiltered);

        },
        (error)=>{console.log(error)}
  
      )

      this.CandidateList=this.JobType;
  
  }

  ChangeJobType(){
    alert('here');
      // console.log('reached');
     }

  onRegisterClick(){
  //  console.log(this.candidate);
  }

  filterJobs(){
    //   console.log(this.SearchQuery);
    this.JobInfoFiltered=this.JobInfo;
       this.JobInfoFiltered= this.JobInfoFiltered.filter(t=>t.Title.toUpperCase().indexOf(this.SearchQuery.toUpperCase() )>-1);
       this.JobInfoFiltered=  this.JobInfoFiltered.concat( this.JobInfo.filter(t=>t.Entity.toUpperCase().indexOf(this.SearchQuery.toUpperCase())>-1));
       this.JobInfoFiltered=  this.JobInfoFiltered.concat( this.JobInfo.filter(t=>t.Department.toUpperCase().indexOf(this.SearchQuery.toUpperCase())>-1));
      //console.log("Filtered concatenated jobs.........")
     // console.log(this.JobInfoFiltered);
       //  this.JobInfoFiltered=  this.JobInfoFiltered.concat( this.JobInfo.filter(t=>t.Title.toUpperCase().indexOf("PAY" )>-1));
       //this.JobInfoFiltered= this.JobInfo.filter(t=>t.ActivityByUserFullName.toUpperCase().indexOf(this.SearchQuery.toUpperCase() )>-1);
     //  this.JobInfoFiltered= this.JobInfo.filter(t=>t.ActivityOn.toUpperCase().indexOf(this.SearchQuery.toUpperCase() )>-1);


     let uniqueJobs: JobInfo[]=[];
     let isExist:boolean=false;

     
     for (let entry of this.JobInfoFiltered) {
       for (let uniqueentry of uniqueJobs) {
          if(entry.VacancyID==uniqueentry.VacancyID){
           isExist=true;
           break;
          }
        

       }  
      
          if (isExist==false){
            uniqueJobs.push(entry);
          }
         
  }

  this.JobInfoFiltered=uniqueJobs;
  //console.log(uniqueJobs);
  this.JobinfoService.UpdateJobInfo( this.JobInfoFiltered);
     }

     showJobs(){
       
      var currentURL = this.router.url;
      if( currentURL.indexOf('jobsclosed') >= 0){
      this.router.navigateByUrl('/jobs');
      }
        else {
          this.router.navigateByUrl('jobsclosed');
     }

}
}