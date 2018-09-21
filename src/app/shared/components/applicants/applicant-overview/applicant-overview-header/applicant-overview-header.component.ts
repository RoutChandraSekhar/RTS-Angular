import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CurrentSelectedCandidatePageService } from '../../../../services/current-selected-candidate-page.service';
import { CurrentSelectedCandidateCVInfo } from '../../../../models/current-selected-candidate';
import { environment } from '../../../../../../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applicant-overview-header',
  templateUrl: './applicant-overview-header.component.html',
  styleUrls: ['./applicant-overview-header.component.css']
})
export class ApplicantOverviewHeaderComponent implements OnInit, OnDestroy {
  CurrentSelectedCandidateCVInfo:CurrentSelectedCandidateCVInfo = new CurrentSelectedCandidateCVInfo("","","")
  CVInlineDisplayURL:string="";
  CVDownloadURL:string="";
  CurrentSelectedCandidatePageServiceSubscription:Subscription;

  constructor(
    private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService

  ) { }
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
 

  if(this.CurrentSelectedCandidatePageServiceSubscription !=undefined){
    this.CurrentSelectedCandidatePageServiceSubscription.unsubscribe();
  }

  
}

  ngOnInit() {

    setTimeout(() => {
      this.LoadDocuments();
    }, 500);
  }



  LoadDocuments(){
  this.CurrentSelectedCandidatePageServiceSubscription=  this.CurrentSelectedCandidatePageService.castCurrentSelectedApplicantCVInfo.subscribe(CurrentSelectedCandidateCVInfo=>
      {
        this.CurrentSelectedCandidateCVInfo=CurrentSelectedCandidateCVInfo;
        
        this.CVDownloadURL=environment.CVCDownloader +  this.CurrentSelectedCandidateCVInfo.cvFile;

        if (this.CurrentSelectedCandidateCVInfo.cvMimeType.toLowerCase()=="pdf"){
          this.CVInlineDisplayURL=environment.CVOnlinePDFViewer + this.CurrentSelectedCandidateCVInfo.cvFile;
        } else{
          this.CVInlineDisplayURL=environment.CVOnlineViewer + this.CurrentSelectedCandidateCVInfo.cvFile;
        }
      }
    )
  }
  }

    