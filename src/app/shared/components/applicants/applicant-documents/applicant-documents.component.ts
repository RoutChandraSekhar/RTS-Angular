import { Component, OnInit,OnDestroy, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { FileToUpload } from '../../../../cv-database/add-candidate/add-candidate.component';
import { CurrentSelectedCandidatePageService } from '../../../services/current-selected-candidate-page.service';
import { ApplicantInfoDocuments } from '../../../models/applicant-info-documents';
import Swal, { SweetAlertType } from 'sweetalert2';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';

declare var $:any;
@Component({
  selector: 'app-applicant-documents',
  templateUrl: './applicant-documents.component.html',
  styleUrls: ['./applicant-documents.component.css']
})
export class ApplicantDocumentsComponent implements OnInit, OnDestroy {

DownloadLocation:string=environment.FileStorageURL;
  constructor(
    private CandidateService: CandidateService,
    private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService
  ) { }
  myFiles:FileToUpload [] = [];
  sMsg:string = '';
  isUpbloadButtonDisabled:boolean=true;
  UploadButtonText:string="Upload";


  CandidateID : string;
  FileTypeID: string;
  FileName:string;
  RequestID:string;
  isValid:boolean=false;

  ApplicantInfoDocuments:ApplicantInfoDocuments=new ApplicantInfoDocuments("","","","");
  CandidateName:string="";
  @ViewChild('myFileUpload') myInputVariable: ElementRef;
  @ViewChild('myFileUploadFileName') myFileUploadFileName: ElementRef;
  sub:Subscription;
  DoucmentSubscription:Subscription;
  Documents:any[]=[];

  isDocumentExist:boolean=false;




 


  ngOnInit() {
    console.clear();
    this.LoadInditialContents()

  }

 
  LoadDocuments(CandidateID:number){

    this.Documents=[];
  this.sub=  this.CandidateService.GetCandidateDocumentsActive(CandidateID).subscribe(
    
      (response)=>{
        console.clear();
        console.log(JSON.stringify(response));
        this.isDocumentExist=false;
        
      if(response !=null || response !=undefined){
        if (response["CandidateDocuments"] !=null || response["CandidateDocuments"] !=undefined){
          if (response["CandidateDocuments"]["TypeOfDocument"] !=null || response["CandidateDocuments"]["TypeOfDocument"] !=undefined){
          let a=response["CandidateDocuments"]["TypeOfDocument"];
          console.log("Log a ****************");
           console.log(a);
          // alert("Document Loaded");
          this.Documents = a;
       
          if(this.Documents.length>0){
            this.isDocumentExist=true;
          }
         
          }
        }
        
      }
      
        
      },
      (error)=>{}
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  
    if(!this.sub==null && !this.sub==undefined){
   this.sub.unsubscribe();
  }

  if(!this.DoucmentSubscription==null && !this.DoucmentSubscription==undefined){
    this.DoucmentSubscription.unsubscribe();
   }
 

 

  }

  getUserDetails(){
    this.DoucmentSubscription=  this.CurrentSelectedCandidatePageService.castCandidateDocumentUploadDetails.subscribe( 
    
      ApplicantInfoDocuments=>
      {
      
  
       if (ApplicantInfoDocuments !=null && ApplicantInfoDocuments != undefined){
        
        this.ApplicantInfoDocuments=ApplicantInfoDocuments 
        this.CandidateName=this.ApplicantInfoDocuments.CandidateName;
        this.CandidateID=this.ApplicantInfoDocuments.CandidateID;
        this.RequestID= this.ApplicantInfoDocuments.RequestID
        if (this.RequestID.toString().length==0){
          this.RequestID="0"
        }
       
      
      
       this.LoadDocuments(+this.CandidateID); 
       }
       
  
      } 
    );
   // this.FileTypeID= $('#DrpDocument').val(); 
  }


LoadInditialContents(){
  this.getUserDetails()
 // this.LoadDocuments(+this.CandidateID);
}

  getFileDetails (e) {
    //console.log (e.target.files);
    this.FileTypeID= $('#DrpDocument').val(); 
    
  

    this.myFiles=[];
    let f :FileToUpload= new FileToUpload;
    
    this.isValid=true;
    for (var i = 0; i < e.target.files.length; i++) { 
 
      if(e.target.files[i].name.split('.').pop() !="pdf" && e.target.files[i].name.split('.').pop() !="jpg" && e.target.files[i].name.split('.').pop() !="doc" && e.target.files[i].name.split('.').pop() !="docx" && e.target.files[i].name.split('.').pop() !="png" && e.target.files[i].name.split('.').pop() !="xls" && e.target.files[i].name.split('.').pop() !="xlsx" ){
       this.isValid=false;
       Swal("Invalid file format", "Only PDF, DOC, JPG, PNG files are allowed","error");
       return;
      }
     f.File=e.target.files[i];
     f.FileName=e.target.files[i].name;
      this.myFiles.push(f);
    }

    this.FileTypeID= $('#DrpDocument').val(); 
   
      this.isUpbloadButtonDisabled=false;
 
  }




  uploadFiles () {
    this.FileTypeID= $('#DrpDocument').val(); 
    if (+this.FileTypeID==0){
      Swal("Document Type not selected","Please select document type","info");
      return;
    }

    if (this.myFiles.length==0){
      Swal("Document not selected","Please select document ","info");
      return;
    }
    this.getUserDetails();
    this.isUpbloadButtonDisabled=true;
    this.UploadButtonText="Please wait.."
    const frmData = new FormData();
    
    for (var i = 0; i < this.myFiles.length; i++) { 
     // frmData.append("files", this.myFiles[i],"shabeer.jpg");
     frmData.append("files", this.myFiles[i].File, this.myFiles[i].FileName  );
    // alert(this.myFiles[i].FileName.split('.').pop() )
    }


    this.CandidateID=this.ApplicantInfoDocuments.CandidateID;
   
    frmData.append("CandidateID",this.CandidateID);
    frmData.append("FileTypeID",this.FileTypeID);
    frmData.append("FileDisplayName",this.FileName);
    frmData.append("RequestID",this.RequestID);

   this.sub= this.CandidateService.uploadDocuments(frmData).subscribe(result => {
      this.myFiles=[];
      this.myInputVariable.nativeElement.value = "";
      
      this.UploadButtonText="Upload"
      /*
      this.FileTypeID="0";
    $('#DrpDocument').prop('selectedIndex', 0); // Select the option with a value of '1'
    $('#DrpDocument').material_select();   // Notify any JS components that the value changed  
*/
      Swal('Uploaded Successfully',"Docuements uploaded successfully","success");
      this.LoadDocuments(+this.CandidateID);
      this.isUpbloadButtonDisabled=false;
     // this.myFileUploadFileName.nativeElement.setAttribute("type", "input");
     // this.myFileUploadFileName.nativeElement.setAttribute("type", "file");
      this.myFileUploadFileName.nativeElement.innerText="";
      this.myFileUploadFileName.nativeElement.value="";
      this.myFileUploadFileName.nativeElement.innerHTML="";
    }, (err) => {
      this.isUpbloadButtonDisabled=false;
      this.UploadButtonText="Upload"
      alert('error cv not uploaded :');
    })
    
    
  }

}
