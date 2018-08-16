import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ReportsComponent } from './reports/reports.component';


import { CvDatabaseModule } from './cv-database/cv-database.module';
import { MasterModule } from './master/master.module';







@NgModule({
  declarations: [
    
    AppComponent,
    OnboardingComponent,
    ReportsComponent
    
   
    
  ],
  imports: [
    BrowserModule, 
    MasterModule,
    CvDatabaseModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
