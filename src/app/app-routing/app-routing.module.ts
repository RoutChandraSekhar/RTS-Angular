import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule, PreloadAllModules} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { JobsComponent } from '../jobs/jobs.component';
import { ApplicantsInterviewsComponent } from '../jobs/applicants-interviews/applicants-interviews.component';
import { AddVacancyComponent } from '../jobs/add-vacancy/add-vacancy.component';
import { AddCandidateComponent } from '../cv-database/add-candidate/add-candidate.component';
import { EvaluateCandidateComponent } from '../jobs/evaluate-candidate/evaluate-candidate.component';
import { ApplicantsShortlistedComponent } from '../jobs/applicants-shortlisted/applicants-shortlisted.component';


var myroutes : Routes=[
   {path:"home", data:{depth:1}, component:DashboardComponent},
   {path:"dashboard1",  data:{depth:2},component:DashboardComponent},
   {path:"dashboard",  data:{depth:3}, component:DashboardComponent},
   {path:"jobs",  data:{depth:4}, component:JobsComponent},
   {path:"jobsclosed",  data:{depth:5}, component:JobsComponent},
   {path:"evaluatecandidate",  data:{depth:6}, component:EvaluateCandidateComponent},
   
   {path:"shortlisted",  data:{depth:11}, component:ApplicantsShortlistedComponent},
   {path:"interviews",  data:{depth:7}, component:ApplicantsInterviewsComponent},
   {path:"addjob",  data:{depth:8}, component:AddVacancyComponent},
   {path:"addcandidate",  data:{depth:9}, component:AddCandidateComponent},
   {path:"evaluatecandidate",  data:{depth:10}, component:EvaluateCandidateComponent},
   {path:"", data:{depth:1}, component:DashboardComponent},
   
 ];
 
 var myroutes2 = RouterModule.forRoot(myroutes,{preloadingStrategy:PreloadAllModules});
 //var myroutes2 = RouterModule.forRoot(myroutes);


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    myroutes2
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule {myroutes}
