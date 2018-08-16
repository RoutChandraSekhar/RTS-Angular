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
  declarations: [CvDatabaseComponent, BreadcrumbCvDatabaseComponent, CvDatabaseQuickActionButtonsComponent],
  exports:[CvDatabaseComponent]
})
export class CvDatabaseModule { 

}
