import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { RequestList, RequestDetails } from '../../shared/models/requests/request-details';
import Swal, { SweetAlertType } from 'sweetalert2';
import { RequestGroupWiseService } from '../../shared/services/request/request-group-wise.service';
import { CurrentSelectedCandidatePageService } from '../../shared/services/current-selected-candidate-page.service';
import { ApplicantInfoDocuments } from '../../shared/models/applicant-info-documents';
import { CandidateService } from '../../shared/services/candidate.service';
import { Subscription } from 'rxjs';
import { LoginService } from '../../shared/services/login/login.service';
import { LoggedInUserDetails } from '../../shared/common/LoggedInUserDetails';
declare var $:any;
@Component({
  selector: 'app-applicant-info-card',
  templateUrl: './applicant-info-card.component.html',
  styleUrls: ['./applicant-info-card.component.css']
})
export class ApplicantInfoCardComponent implements OnInit {

  constructor(
    private RequestGroupWiseService : RequestGroupWiseService,
    private CurrentSelectedCandidatePageService : CurrentSelectedCandidatePageService,
    @Inject(CandidateService) private candidateService : CandidateService,
    private LoginService : LoginService
  ) { }
  /*reqdetail:RequestDetails = new RequestDetails("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","")
requdetails:RequestDetails[];
*/
 // @Output() onDocumentUploadModalShow: EventEmitter<any> = new EventEmitter();
  @Input() RequestList:RequestList = new RequestList("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",[]);
  
  CurrentPageDisplayedGroupID:number=2;
  CurrentStateGroupID=0;
  ParialUpdateDisplayName:string="-";
  isCurrentStatePartialUpdated:string;
  LoggedInUserID:number=2;
 
  LoggedInUserDetails:LoggedInUserDetails;
  CandidateServiceSubcriptionTransitState:Subscription;
  LoginServiceSubscription:Subscription;
  GetRequestDetailsGroupWiseSingleRequestSubscription:Subscription;
  ngOnInit() {
    $('.tooltipped').tooltip();
  this.GetLoggedInUserID();
   this.ParialUpdateDisplayName=this.RequestList.ParialUpdateDisplayName;
   this.isCurrentStatePartialUpdated=this.RequestList.isCurrentStatePartialUpdated
   this.CurrentStateGroupID=+this.RequestList.CurrentStateGroupID

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if( this.LoginServiceSubscription != undefined){
      this.LoginServiceSubscription.unsubscribe();
    }

    if(this.CandidateServiceSubcriptionTransitState != undefined){
      this.CandidateServiceSubcriptionTransitState.unsubscribe();
    }
   
    if(this.GetRequestDetailsGroupWiseSingleRequestSubscription != undefined){
      this.GetRequestDetailsGroupWiseSingleRequestSubscription.unsubscribe();
    }

  
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

  onTakeAction(ModalTitle:string, ModalText:string, ModalType:SweetAlertType, 
    ShowCancelButton:string,ConfirmButtonText:string,
    CancelButtonText:string, SuccessMesssageTitle:string,
    SuccessText:string,SuccessIcon:SweetAlertType,ShowFailureMessage:string,
    FailureMessageTitle:string, FailureMessageText:string, FailureMessageIcon:SweetAlertType,
    ActionTypeID:number, ActionID:number, ApplicationID:number,ReuqesterUserID:number,
    DesiredStateID:number,RequestID:number, TransitionID:number)
    
     {
    
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

      //**********Eexecute Action Here */

      this.TransitState(ActionTypeID,ActionID,ApplicationID,ReuqesterUserID,
        DesiredStateID,RequestID,TransitionID,this.LoggedInUserID,
        SuccessMesssageTitle,SuccessText,SuccessIcon)

     

      } 
      
      else if (result.dismiss === Swal.DismissReason.cancel) {
        if (ShowFailureMessage.toUpperCase()=="TRUE"){
          Swal(
            FailureMessageTitle,
            FailureMessageText,
            FailureMessageIcon
          )
        }
       
      }
    })

  }

  TransitState( ActionTypeID:number, ActionID:number, ApplicationID:number,ReuqesterUserID:number,
    DesiredStateID:number,RequestID:number, TransitionID:number, TransactionUserID:number,
    SuccessMesssageTitle:string,SuccessText:string,SuccessIcon:SweetAlertType
  ){

      if (this.isCurrentStatePartialUpdated=="1"){
        //Don't allow to update.
        //Hide Action Buttons
        alert("partial updated");  
        return;
      }

      if(this.CurrentPageDisplayedGroupID!= this.CurrentStateGroupID){
        //Request is in different Group(pool). Dont' allow to udpate
        alert("different group");
        return;
      }

      //Update tranist state
      this.CandidateServiceSubcriptionTransitState=this.candidateService.transitstate(ActionTypeID,ActionID,ApplicationID,ReuqesterUserID,
        DesiredStateID,RequestID,TransactionUserID,TransitionID).subscribe(
          (Data)=>{
            this.LoadUpdatedRequestDetails(this.LoggedInUserID,this.CurrentPageDisplayedGroupID,+this.RequestList.RequestID)
            Swal(SuccessMesssageTitle,SuccessText, SuccessIcon)
          },
          (Error)=>{alert("Error")}
        )

  }

  GetLoggedInUserID(){
    this.LoginServiceSubscription= this.LoginService.cast.subscribe(LoggedInUserDetails=>
      {

        this.LoggedInUserDetails=LoggedInUserDetails[0]
        this.LoggedInUserID=+this.LoggedInUserDetails.userid;
      }
    
    );
  }


  LoadUpdatedRequestDetails(UserID:number, GroupID:number, RequestID:number){
 this.GetRequestDetailsGroupWiseSingleRequestSubscription=   this.candidateService.GetRequestDetailsGroupWiseSingleRequest(UserID, GroupID, RequestID).subscribe(
      (response)=>{
       // console.clear();
        console.log(response);
        this.RequestList=response["Request"]["RequestList"][0];

        console.log(this.RequestList);
      }
    )
  }
}
