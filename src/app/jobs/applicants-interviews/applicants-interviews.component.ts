import { Component, OnInit,OnDestroy, EventEmitter, Output } from '@angular/core';
import { RequestGroupWiseService } from '../../shared/services/request/request-group-wise.service';
import { RequestList } from '../../shared/models/requests/request-details';
import { CurrentSelectedCandidatePageService } from '../../shared/services/current-selected-candidate-page.service';
import { Subscription } from 'rxjs';
import { ApplicantInfoDocuments } from '../../shared/models/applicant-info-documents';


@Component({
  selector: 'app-applicants-interviews',
  templateUrl: './applicants-interviews.component.html',
  styleUrls: ['./applicants-interviews.component.css']
})
export class ApplicantsInterviewsComponent implements OnInit,OnDestroy {
  isContentLoaded:boolean=true;
  constructor(
    private RequestGroupWiseService : RequestGroupWiseService,
    private CurrentSelectedCandidatePageService : CurrentSelectedCandidatePageService

  ) { }
  RequestList:RequestList[]=[];

  RequestGroupwiseSubscription:Subscription;

  //@Output() DocumentUploadModalLoadEvent: EventEmitter<any> = new EventEmitter();

  ApplicantInfoDocuments:ApplicantInfoDocuments=new ApplicantInfoDocuments("","","","")

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.className ='mailbox loaded';
    this.isContentLoaded=false;
 
    setTimeout(() => {
   this.LoadContents();
    }, 500);
  
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    if( this.RequestGroupwiseSubscription != undefined){
      this.RequestGroupwiseSubscription.unsubscribe();
    }

  }
  LoadContents(){
 this.RequestGroupwiseSubscription= this.RequestGroupWiseService.cast.subscribe(RequestList=>
      {
        this.isContentLoaded=false;
        this.RequestList=RequestList
        this.isContentLoaded=true;
      }
     
     
    );
  }

  onDocumentUploadModalShow($event){
  this. ApplicantInfoDocuments=$event;
  this.CurrentSelectedCandidatePageService.UpdateCandidateDocumentDetails(this. ApplicantInfoDocuments)
    
  }

}
