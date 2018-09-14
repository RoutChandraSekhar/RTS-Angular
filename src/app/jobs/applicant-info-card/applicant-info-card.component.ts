import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RequestList, RequestDetails } from '../../shared/models/requests/request-details';
import Swal, { SweetAlertType } from 'sweetalert2';
import { RequestGroupWiseService } from '../../shared/services/request/request-group-wise.service';
import { CurrentSelectedCandidatePageService } from '../../shared/services/current-selected-candidate-page.service';
import { ApplicantInfoDocuments } from '../../shared/models/applicant-info-documents';
declare var $:any;
@Component({
  selector: 'app-applicant-info-card',
  templateUrl: './applicant-info-card.component.html',
  styleUrls: ['./applicant-info-card.component.css']
})
export class ApplicantInfoCardComponent implements OnInit {

  constructor(
    private RequestGroupWiseService : RequestGroupWiseService,
    private CurrentSelectedCandidatePageService : CurrentSelectedCandidatePageService
  ) { }
  /*reqdetail:RequestDetails = new RequestDetails("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","")
requdetails:RequestDetails[];
*/
 // @Output() onDocumentUploadModalShow: EventEmitter<any> = new EventEmitter();
  @Input() RequestList:RequestList = new RequestList("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",[]);
  
  
  ngOnInit() {
    $('.tooltipped').tooltip();
   console.log(this.RequestList);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

  showApplicantDocuments(){
    let c:ApplicantInfoDocuments = new ApplicantInfoDocuments("","","","")
    c.ApplicationID=this.RequestList.ApplicationID;
    c.CandidateID=this.RequestList.CandidateID;
    c.CandidateName=this.RequestList.FullName;
    c.RequestID=this.RequestList.RequestID;
    this.CurrentSelectedCandidatePageService.UpdateCandidateDocumentDetails(c)
   // this.onDocumentUploadModalShow.emit(c);
   

    
    $('#modalApplicantDocuments').openModal(); 
  }

  showApplicantHistory(){
    $('#modalApplicantHistory').openModal(); 
  }
  salert(ModalTitle:string, ModalText:string, ModalType:SweetAlertType, ShowCancelButton:string,ConfirmButtonText:string,CancelButtonText:string, SuccessMesssageTitle:string,
  SuccessText:string, SuccessIcon:SweetAlertType,ShowFailureMessage:boolean,FailureMessageTitle:string, FailureMessageText:string, FailureMessageIcon:SweetAlertType){
    
    var tmpShowCancelButton:boolean=true;
    if (ShowCancelButton.toUpperCase()=="FALSE"){
      tmpShowCancelButton=false;
    }
    
    Swal({
      title: ModalTitle,
      text: ModalText,
      type: ModalType,
      
      showCancelButton:tmpShowCancelButton,
      confirmButtonText: ConfirmButtonText,
      cancelButtonText: CancelButtonText
    }).then((result) => {
      if (result.value) {

        alert('execute suucess here');
        Swal(
          SuccessMesssageTitle,
          SuccessText,
          SuccessIcon
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
      
      else if (result.dismiss === Swal.DismissReason.cancel) {
        if (ShowFailureMessage==true){
          Swal(
            FailureMessageTitle,
            FailureMessageText,
            FailureMessageIcon
          )
        }
       
      }
    })


  }
}
