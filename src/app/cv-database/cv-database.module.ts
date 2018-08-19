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

var myroutes : Routes=[
  {path:"candidates",  data:{depth:2}, component:CvDatabaseComponent,
       children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview',  data:{depth:1}, component: ApplicantOverviewComponent },
    { path: 'status',  data:{depth:2}, component: ApplicantApplicationStatusComponent },
    { path: 'logs',  data:{depth:3}, component: ApplicantApplicationLogComponent }
    
  ]
  }
 ];
 
 var myroutesCVDatabase = RouterModule.forChild(myroutes);

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    myroutesCVDatabase
  ],
  declarations: [CvDatabaseComponent, BreadcrumbCvDatabaseComponent, CvDatabaseQuickActionButtonsComponent, AddCandidateComponent, BreadcrumbAddCandidateComponent, AddCandidateQuickAcionButtonsComponent, AddCandidateFormPostionAppliedComponent, AddCandidateFormPersonalProfileComponent, AddCandidateFormWorkExperienceComponent, AddCandidateFormEmploymentProfileComponent, AddCandidateFormAcademicProfileComponent, AddCandidateFormWhyshurooqComponent, AddCandidateFormUploadcvComponent, AddCandidateFormEmploymentProfilesComponent, AddCandidateFormAcademicProfilesComponent],
  exports:[CvDatabaseComponent]
})
export class CvDatabaseModule { 

}
