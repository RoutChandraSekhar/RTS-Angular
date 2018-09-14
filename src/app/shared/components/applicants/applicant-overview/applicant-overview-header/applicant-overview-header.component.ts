import { Component, OnInit, Input } from '@angular/core';
import { CurrentSelectedCandidatePageService } from '../../../../services/current-selected-candidate-page.service';
import { CurrentSelectedCandidateCVInfo } from '../../../../models/current-selected-candidate';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-applicant-overview-header',
  templateUrl: './applicant-overview-header.component.html',
  styleUrls: ['./applicant-overview-header.component.css']
})
export class ApplicantOverviewHeaderComponent implements OnInit {
  CurrentSelectedCandidateCVInfo:CurrentSelectedCandidateCVInfo = new CurrentSelectedCandidateCVInfo("","","")
  CVInlineDisplayURL:string="";
  CVDownloadURL:string="";
  constructor(
    private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService

  ) { }
  ngOnInit() {

    setTimeout(() => {
      this.LoadDocuments();
    }, 500);
  }



  LoadDocuments(){
    this.CurrentSelectedCandidatePageService.castCurrentSelectedApplicantCVInfo.subscribe(CurrentSelectedCandidateCVInfo=>
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

    