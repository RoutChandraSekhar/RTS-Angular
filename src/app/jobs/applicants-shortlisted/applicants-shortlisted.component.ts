import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestGroupWiseService } from '../../shared/services/request/request-group-wise.service';
import { CurrentSelectedCandidatePageService } from '../../shared/services/current-selected-candidate-page.service';
import { RequestList } from '../../shared/models/requests/request-details';
import { Subscription } from 'rxjs';
import { ApplicantInfoDocuments } from '../../shared/models/applicant-info-documents';

@Component({
  selector: 'app-applicants-shortlisted',
  templateUrl: './applicants-shortlisted.component.html',
  styleUrls: ['./applicants-shortlisted.component.css']
})
export class ApplicantsShortlistedComponent implements OnInit,OnDestroy {
  isContentLoaded:boolean=true;
  constructor(
    private RequestGroupWiseService : RequestGroupWiseService,
    private CurrentSelectedCandidatePageService : CurrentSelectedCandidatePageService

  ) { }
  RequestList:RequestList[]=[];

  RequestGroupwiseSubscription:Subscription;


  ApplicantInfoDocuments:ApplicantInfoDocuments=new ApplicantInfoDocuments("","","","")

  isContentExist:boolean=true;
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
    this.RequestGroupwiseSubscription.unsubscribe();
  }

  LoadContents(){
    this.RequestList=[];
    this.isContentExist=true;
    this.RequestGroupwiseSubscription= this.RequestGroupWiseService.cast.subscribe(RequestList=>
         {
          this.RequestList=[];
           this.isContentLoaded=true;
           this.RequestList=RequestList
           this.isContentLoaded=true;
           if (this.RequestList.length<=0){
            this.isContentExist=false;
           }

         }
        
        
       );
     }
   
     onDocumentUploadModalShow($event){
     this. ApplicantInfoDocuments=$event;
     this.CurrentSelectedCandidatePageService.UpdateCandidateDocumentDetails(this. ApplicantInfoDocuments)
       
     }

}
