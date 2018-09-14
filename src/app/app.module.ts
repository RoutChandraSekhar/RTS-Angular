import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HashLocationStrategy,LocationStrategy} from '@angular/common'
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ReportsComponent } from './reports/reports.component';


import { CvDatabaseModule } from './cv-database/cv-database.module';
import { MasterModule } from './master/master.module';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RTSInterceptorService } from './shared/services/rtsinterceptor.service';
import { SelectedApplicantDetailsService } from './shared/services/applicants/Selected-applicant-details.service';
import { ApplicantPersonalProfileService } from './shared/services/applicants/applicant-personal-profile.service';
import { ApplicantListService } from './shared/services/applicants/applicant-list.service';
import { ApplicantEmploymentProfileService } from './shared/services/applicants/applicant-employment-profile.service';
import { ApplicantAcademicProfileService } from './shared/services/applicants/applicant-academic-profile.service';
import { ApplicantShortlistableJobsService } from './shared/services/applicants/applicant-shortlistable-jobs.service';
import { ApplicantPastApplicationsService } from './shared/services/applicants/applicant-past-applications.service';
import { JobinfoService } from './shared/services/jobs/jobinfo.service';
import { RequestGroupWiseService } from './shared/services/request/request-group-wise.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './shared/services/login/login.service';
import { CurrentSelectedCandidateService } from './shared/services/current-selected-candidate.service';
import { MatButtonModule, MatCheckbox, MatCheckboxModule, MatSelectModule } from '@angular/material';








@NgModule({
  declarations: [
    
    AppComponent,
    OnboardingComponent,
    ReportsComponent,
    LoginComponent
    
   
    
  ],
  imports: [
    FormsModule,
    BrowserModule, 
    
    MasterModule,
    CvDatabaseModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule
   
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:RTSInterceptorService, multi:true},
    {provide:LocationStrategy, useClass:HashLocationStrategy},
    SelectedApplicantDetailsService,
    ApplicantPersonalProfileService,
    ApplicantListService,
    ApplicantEmploymentProfileService,
    ApplicantAcademicProfileService,
    ApplicantShortlistableJobsService,
    ApplicantPastApplicationsService,
    JobinfoService,
    RequestGroupWiseService,
    LoginService,
    CurrentSelectedCandidateService

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
