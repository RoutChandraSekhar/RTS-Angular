import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { JobsComponent } from '../jobs/jobs.component';
import { ApplicantsInterviewsComponent } from '../jobs/applicants-interviews/applicants-interviews.component';


var myroutes : Routes=[
  {path:"home", data:{depth:1}, component:DashboardComponent},
   {path:"dashboard1",  data:{depth:1},component:DashboardComponent},
   {path:"dashboard",  data:{depth:1}, component:DashboardComponent},
   {path:"jobs",  data:{depth:3}, component:JobsComponent},
   {path:"interviews",  data:{depth:4}, component:ApplicantsInterviewsComponent},
   
 ];
 
 var myroutes2 = RouterModule.forRoot(myroutes);



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
