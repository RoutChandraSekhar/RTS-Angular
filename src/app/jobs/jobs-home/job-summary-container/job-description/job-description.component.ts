import { Component, OnInit, Input, Inject, OnDestroy } from '@angular/core';
import { CurrentSelectedCandidatePageService } from '../../../../shared/services/current-selected-candidate-page.service';
import { CandidateService } from '../../../../shared/services/candidate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit,OnDestroy {

  constructor(
    @Inject(CandidateService) private candidateService : CandidateService,
private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService

  ) { }

  VacancyID:number;
  Title:string="";
  JobDescription:string="";
  JobSkill:string="";
  JobDuty:string="";
  EducationInfo:string="";

  VacancyDetailsSubscription:Subscription;
  candidateServiceSubscription: Subscription;

  ngOnDestroy(): void {

    if (this.VacancyDetailsSubscription !=undefined){
      this.VacancyDetailsSubscription.unsubscribe();
    }

    if (this.candidateServiceSubscription !=undefined){
      this.candidateServiceSubscription.unsubscribe();
    }
   
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
  ngOnInit() {

 this.VacancyDetailsSubscription=this.CurrentSelectedCandidatePageService.castCurrentSelectedJobID.subscribe(VacancyID=>
      {
      
        this.VacancyID=VacancyID;
       this.candidateServiceSubscription= this.candidateService.GetVacancyDetails(this.VacancyID).subscribe(
          (response)=>{

            if (response["VacancyDetails"][0] != undefined && response["VacancyDetails"][0] != null){
              if (response !=null && response != undefined){
                let rep = response["VacancyDetails"][0]
               
         
                //if (rep.length>0){
                  this.Title=rep["Title"];
                  this.JobDescription=rep["JobDescription"] ;
                  this.JobSkill=rep["JobSkill"] ;
                  this.JobDuty=rep["JobDuty"];
                  this.EducationInfo=rep["EducationInfo"] ;
                 
               // }
                
              }
            }
          

           

          }
        )
      }

    )
  }

}
