import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ApplicantApplicationLogComponent } from './components/applicants/applicant-application-log/applicant-application-log.component';
import { ApplicantApplicationStatusComponent } from './components/applicants/applicant-application-status/applicant-application-status.component';
import { ApplicantFilterComponent } from './components/applicants/applicant-filter/applicant-filter.component';
import { ApplicantFloatingButtonsComponent } from './components/applicants/applicant-floating-buttons/applicant-floating-buttons.component';
import { ApplicantFloatingFilterButtonComponent } from './components/applicants/applicant-floating-filter-button/applicant-floating-filter-button.component';
import { ApplicantNavBarComponent } from './components/applicants/applicant-nav-bar/applicant-nav-bar.component';
import { ApplicantOverviewComponent } from './components/applicants/applicant-overview/applicant-overview.component';
import { ApplicantTimelineComponent } from './components/applicants/applicant-timeline/applicant-timeline.component';
import { ApplicantTitleInfoComponent } from './components/applicants/applicant-title-info/applicant-title-info.component';
import { ApplicantsListComponent } from './components/applicants/applicants-list/applicants-list.component';
import { ApplicantCurrentApplicationStatusComponent } from './components/applicants/applicant-application-status/applicant-current-application-status/applicant-current-application-status.component';
import { ApplicantPastApplicationStatusComponent } from './components/applicants/applicant-application-status/applicant-past-application-status/applicant-past-application-status.component';
import { ApplicantBasicInfoComponent } from './components/applicants/applicant-overview/applicant-basic-info/applicant-basic-info.component';
import { ApplicantEducationComponent } from './components/applicants/applicant-overview/applicant-education/applicant-education.component';
import { ApplicantExperienceComponent } from './components/applicants/applicant-overview/applicant-experience/applicant-experience.component';
import { ApplicantObjectiveComponent } from './components/applicants/applicant-overview/applicant-objective/applicant-objective.component';
import { ApplicantOverviewHeaderComponent } from './components/applicants/applicant-overview/applicant-overview-header/applicant-overview-header.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ApplicantContactDetailsComponent } from './components/applicants/applicant-overview/applicant-contact-details/applicant-contact-details.component';
import { ApplicantSkillsComponent } from './components/applicants/applicant-overview/applicant-skills/applicant-skills.component';
import { ApplicantQuickActionButtonsComponent } from './components/applicants/applicant-nav-bar/applicant-quick-action-buttons/applicant-quick-action-buttons.component';
import { ApplicantJobTitleComponent } from './components/applicants/applicant-job-title/applicant-job-title.component';
import { ApplicantDocumentsComponent } from './components/applicants/applicant-documents/applicant-documents.component';
import { ApplicantComponent } from './components/applicants/applicants-list/applicant/applicant.component';
import { BrowserModule } from '@angular/platform-browser';


import { ApplicantService } from './services/applicant.service';
import { HttpClientModule } from '@angular/common/http';
import { TestComponentComponent } from './components/test-component/test-component.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    ApplicantApplicationLogComponent,
    ApplicantApplicationStatusComponent,
    ApplicantFilterComponent,
    ApplicantFloatingButtonsComponent,
    ApplicantFloatingFilterButtonComponent,
    ApplicantNavBarComponent,
    ApplicantOverviewComponent,
    ApplicantTimelineComponent,
    ApplicantTitleInfoComponent,
    ApplicantsListComponent,
    ApplicantCurrentApplicationStatusComponent,
    ApplicantPastApplicationStatusComponent,
    ApplicantBasicInfoComponent,
    ApplicantEducationComponent,
    ApplicantExperienceComponent,
    ApplicantObjectiveComponent,
    ApplicantOverviewHeaderComponent,
    ApplicantContactDetailsComponent,
    ApplicantSkillsComponent,
    ApplicantQuickActionButtonsComponent,
    ApplicantJobTitleComponent,
    ApplicantDocumentsComponent,
    ApplicantComponent,
    TestComponentComponent //check the use of this


  ],
  exports:[
    ApplicantApplicationLogComponent,
    ApplicantApplicationStatusComponent,
    ApplicantFilterComponent,
    ApplicantFloatingButtonsComponent,
    ApplicantFloatingFilterButtonComponent,
    ApplicantNavBarComponent,
    ApplicantOverviewComponent,
    ApplicantTimelineComponent,
    ApplicantTitleInfoComponent,
    ApplicantsListComponent,
    ApplicantJobTitleComponent,
    ApplicantFilterComponent,
    ApplicantDocumentsComponent
  ],
  providers:[ApplicantService]
})
export class SharedModule { }
