import { NgModule } from '@angular/core';
import {ApplicantsComponent} from './applicants/applicants.component';
import {ApplicantsApprovedComponent} from './applicants-approved/applicants-approved.component';
import { ApplicantsHiredComponent } from './applicants-hired/applicants-hired.component';
import { ApplicantsInterviewsComponent } from './applicants-interviews/applicants-interviews.component';
import { ApplicantsJoinedComponent } from './applicants-joined/applicants-joined.component';
import { ApplicantsOffersComponent } from './applicants-offers/applicants-offers.component';
import { ApplicantsSecurityChecksComponent } from './applicants-security-checks/applicants-security-checks.component';
import { JobsComponent } from './jobs.component';
import { ApplicantsShortlistedComponent } from './applicants-shortlisted/applicants-shortlisted.component';
import { JobsHomeComponent } from './jobs-home/jobs-home.component';
import { BreadcrumbJobsHomeComponent } from './jobs-home/breadcrumb-jobs-home/breadcrumb-jobs-home.component';
import { JobsHomeQuickActionButtonsComponent } from './jobs-home/jobs-home-quick-action-buttons/jobs-home-quick-action-buttons.component';
import { JobsHomeTopBarComponent } from './jobs-home/jobs-home-top-bar/jobs-home-top-bar.component';
import { JobSummaryContainerComponent } from './jobs-home/job-summary-container/job-summary-container.component';
import { JobDescriptionComponent } from './jobs-home/job-summary-container/job-description/job-description.component';
import { BreadcrumbApplicantInterviewsComponent } from './applicants-interviews/breadcrumb-applicant-interviews/breadcrumb-applicant-interviews.component';
import { SharedModule } from '../shared/shared.module';
import { ApplicantInfoCardComponent } from './applicant-info-card/applicant-info-card.component';
import { ApplicantHistoryComponent } from './applicant-history/applicant-history.component';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { EvaluateCandidateComponent } from './evaluate-candidate/evaluate-candidate.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InterviewFilterComponent } from './applicants-interviews/interview-filter/interview-filter.component';
import { MatSelectModule, MatCheckboxModule, MatInputModule, MatAutocomplete, MatAutocompleteModule } from '@angular/material';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ShortlistFliterComponent } from './applicants-shortlisted/shortlist-fliter/shortlist-fliter.component';


@NgModule({
  imports: [
    BsDatepickerModule.forRoot(),
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatSelectModule,
    MatCheckboxModule,
   
  ],
  declarations: [
    JobsComponent,
    ApplicantsComponent,
    ApplicantsApprovedComponent,
    ApplicantsHiredComponent,
    ApplicantsInterviewsComponent,
    ApplicantsJoinedComponent,
    ApplicantsOffersComponent,
    ApplicantsSecurityChecksComponent,
    ApplicantsShortlistedComponent,
    JobsHomeComponent,
    BreadcrumbJobsHomeComponent,
    JobsHomeQuickActionButtonsComponent,
    JobsHomeTopBarComponent,
    JobSummaryContainerComponent,
    JobDescriptionComponent,
    BreadcrumbApplicantInterviewsComponent,
    ApplicantInfoCardComponent,
    ApplicantHistoryComponent,
    AddVacancyComponent,
    EvaluateCandidateComponent,
    InterviewFilterComponent,
    ShortlistFliterComponent
  ],
  exports:[
    JobsComponent,
    ApplicantsComponent,
    ApplicantsApprovedComponent,
    ApplicantsHiredComponent,
    ApplicantsInterviewsComponent,
    ApplicantsJoinedComponent,
    ApplicantsOffersComponent,
    ApplicantsSecurityChecksComponent,
    ApplicantsShortlistedComponent
  ]
})
export class JobsModule { }
