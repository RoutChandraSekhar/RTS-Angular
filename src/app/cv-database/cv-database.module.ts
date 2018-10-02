import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CvDatabaseComponent} from './cv-database.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ApplicantOverviewComponent } from '../shared/components/applicants/applicant-overview/applicant-overview.component';
import { ApplicantApplicationStatusComponent } from '../shared/components/applicants/applicant-application-status/applicant-application-status.component';
import { ApplicantApplicationLogComponent } from '../shared/components/applicants/applicant-application-log/applicant-application-log.component';
import { BreadcrumbCvDatabaseComponent } from './breadcrumb-cv-database/breadcrumb-cv-database.component';
import { CvDatabaseQuickActionButtonsComponent } from './cv-database-quick-action-buttons/cv-database-quick-action-buttons.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { BreadcrumbAddCandidateComponent } from './add-candidate/breadcrumb-add-candidate/breadcrumb-add-candidate.component';
import { AddCandidateQuickAcionButtonsComponent } from './add-candidate/add-candidate-quick-acion-buttons/add-candidate-quick-acion-buttons.component';
import { AddCandidateFormPostionAppliedComponent } from './add-candidate/add-candidate-form-postion-applied/add-candidate-form-postion-applied.component';
import { AddCandidateFormPersonalProfileComponent } from './add-candidate/add-candidate-form-personal-profile/add-candidate-form-personal-profile.component';
import { AddCandidateFormWorkExperienceComponent } from './add-candidate/add-candidate-form-work-experience/add-candidate-form-work-experience.component';
import { AddCandidateFormEmploymentProfileComponent } from './add-candidate/add-candidate-form-employment-profiles/add-candidate-form-employment-profile/add-candidate-form-employment-profile.component';
import { AddCandidateFormAcademicProfileComponent } from './add-candidate/add-candidate-form-academic-profiles/add-candidate-form-academic-profile/add-candidate-form-academic-profile.component';
import { AddCandidateFormWhyshurooqComponent } from './add-candidate/add-candidate-form-whyshurooq/add-candidate-form-whyshurooq.component';
import { AddCandidateFormUploadcvComponent } from './add-candidate/add-candidate-form-uploadcv/add-candidate-form-uploadcv.component';
import { AddCandidateFormEmploymentProfilesComponent } from './add-candidate/add-candidate-form-employment-profiles/add-candidate-form-employment-profiles.component';
import { AddCandidateFormAcademicProfilesComponent } from './add-candidate/add-candidate-form-academic-profiles/add-candidate-form-academic-profiles.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { ApplicantPersonalProfileService } from '../shared/services/applicants/applicant-personal-profile.service';
import { ApplicantListService } from '../shared/services/applicants/applicant-list.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatInput, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatCheckboxModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
var myroutes : Routes=[
  {path:"candidates",  data:{depth:2000}, component:CvDatabaseComponent,
       children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview/:mode',  data:{depth:2001}, component: ApplicantOverviewComponent },
    { path: 'status',  data:{depth:2002}, component: ApplicantApplicationStatusComponent },
    { path: 'logs',  data:{depth:2003}, component: ApplicantApplicationLogComponent },
    { path: 'overview',  data:{depth:2004}, component: ApplicantOverviewComponent },
    { path: 'overviewx',  data:{depth:2005}, component: ApplicantOverviewComponent },
    
  ]
  },
  {path:"candidatesx",  data:{depth:3000}, component:CvDatabaseComponent,
  children: [
{ path: '', redirectTo: 'overview', pathMatch: 'full' },
{ path: 'overview/:mode',  data:{depth:3001}, component: ApplicantOverviewComponent },
{ path: 'status',  data:{depth:3002}, component: ApplicantApplicationStatusComponent },
{ path: 'logs',  data:{depth:3003}, component: ApplicantApplicationLogComponent },
{ path: 'overview',  data:{depth:3004}, component: ApplicantOverviewComponent },
{ path: 'overviewx',  data:{depth:3005}, component: ApplicantOverviewComponent },

]
}
 ];

 var myroutesCVDatabase = RouterModule.forChild(myroutes);

@NgModule({
  imports: [
    BsDatepickerModule.forRoot(),
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
    myroutesCVDatabase,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule

  ],
  declarations: [CvDatabaseComponent, BreadcrumbCvDatabaseComponent, CvDatabaseQuickActionButtonsComponent, AddCandidateComponent, BreadcrumbAddCandidateComponent, AddCandidateQuickAcionButtonsComponent, AddCandidateFormPostionAppliedComponent, AddCandidateFormPersonalProfileComponent, AddCandidateFormWorkExperienceComponent, AddCandidateFormEmploymentProfileComponent, AddCandidateFormAcademicProfileComponent, AddCandidateFormWhyshurooqComponent, AddCandidateFormUploadcvComponent, AddCandidateFormEmploymentProfilesComponent, AddCandidateFormAcademicProfilesComponent, CandidateDetailsComponent],
  exports:[CvDatabaseComponent],
  providers:
  [
    ApplicantPersonalProfileService,
    ApplicantListService
  ]
})
export class CvDatabaseModule { 

}
