import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { CandidateService } from '../../shared/services/candidate.service';
import { JobInfo } from '../../shared/models/jobs/JobInfo';
import { JobinfoService } from '../../shared/services/jobs/jobinfo.service';
import { Subscription } from 'rxjs';
declare var $:any;
@Component({
  selector: 'app-jobs-home',
  templateUrl: './jobs-home.component.html',
  styleUrls: ['./jobs-home.component.css']
})
export class JobsHomeComponent implements OnInit,OnDestroy {

  JobInfo:JobInfo[]=[];
  JobInfoFiltered:JobInfo[]=[];
  SearchQuery:string="";
  BreadCrumb:string="Active Jobs"
  JobInfoSubcription:Subscription;
  constructor(
    @Inject(CandidateService) private candidateService : CandidateService,
    private JobinfoService : JobinfoService

  ) { }
 
  isLoaded:boolean=true  ;
  ngOnInit() {
   
      this.LoadInitialContents();
 
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.JobInfoSubcription.unsubscribe();
  }

  LoadInitialContents(){
    this.JobInfoFiltered=[];
   // this.isLoaded=true;  //change to false to enable loader
  this.JobInfoSubcription=  this.JobinfoService.cast.subscribe(JobInfoFiltered=>
      {

        this.JobInfoFiltered=JobInfoFiltered;

    //  this.isLoaded=true;
      }
      
    
    );

  }

  onChangeBreadCrumb($event){
    this.BreadCrumb = $event;
  }
 

     

}



