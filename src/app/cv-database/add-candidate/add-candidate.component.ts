import { Component, OnInit, ViewChild, ElementRef, Inject, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { CandidateService } from '../../shared/services/candidate.service';
import { CandidateAddFormVacancyList, CandidateAddLocationList, CandidateReligionList, CandidateCasteList, CandidateLanguageList, CandidateJobIndustryList, CountryNationalityList, GenderList } from '../../shared/models/candidate-addform/candidate-form-displaycompnents';
import { CandidateAddNew, EmployeeProfile, EducationProfile, PositionsApplied, PrefferedLocation, LanguagesKnown, JobIndustry } from '../../shared/models/candidate-addform/candidate-add-new';
import Swal, { SweetAlertType } from 'sweetalert2';
import swal from 'sweetalert2';
import { Subscription } from 'rxjs';

declare var $:any;

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit,OnDestroy {

  constructor(private router: Router,
    @Inject(CandidateService) private candidateService : CandidateService
  ) { }

   CandidateNew:CandidateAddNew ;
   EmployeeProfiles:EmployeeProfile[]=[];
   AcadmeicProfiles :EducationProfile[]=[];
  

  
  VacancyList:CandidateAddFormVacancyList[];
  LocationList:CandidateAddLocationList[];
  ReligionList:CandidateReligionList[];
  CasteList:CandidateCasteList[];
  LanguageList:CandidateLanguageList[];
  JobIndustryList:CandidateJobIndustryList[];
  CountryNationalityList:CountryNationalityList[];
 
  SelectedVacancies:CandidateAddFormVacancyList[];
  SelectedLocations:CandidateAddLocationList[];
  SelectedLanguages:any[];
  SelectedJobIndustrys:any[];
  SelectedReligions:any[];
  SelectedCastes:any[];
  




  
  index: number = 1;
  
  
    

    cvTitle: string="";
    Objective: string="";
    RefNo: string="";
    ExternalRefNo: string="";
    NameFirst: string="";
    NameMiddle: string="";
    NameLast: string="";
    cvFIle: string="mycv.doc";

    DateOfBirth: string= "";
    Gender: string="";
    ReligionID: number=0;
    CasteID: number=3;
    MaritialStatus: string="";
    NoOfDependant: number=0;
    Nationality: number=0;
    CountryOfResidence: number=0;
    CityID: number=1000;
    VisaStatusID: number=0;
    NoticePeriod: string="";
    Email: string="";
    uPassword: string="";
    MobileCountryCode: string="";
    MobileNo: string="";
    Address: string="";
    PoBox: string="";
    FaxCountryCode: string="";
    FaxNo: string="";
    isRelativeAtCompany: string="False";
    RelativeDetails: string="";
    WhyShurooq: string="";
    WorkExperienceTotal: number=0;
    WorkExperienceUAE: number=0;
    WorkExperienceNonUAE: number=0;
    RelevantExperience: number=0;
    PrefferedOtherLocations: string="";


 

  myFiles:FileToUpload [] = [];
  sMsg:string = '';
  isUpbloadButtonDisabled:boolean=true;
  UploadButtonText:string="Save Candidate";

  isCasteDropdownDisabled:boolean=true;
  isCityDisabled:boolean=true;

  isLoaded:boolean=false;

  @ViewChild('myFileUpload') myInputVariable: ElementRef;

  LoadDropDownConetnsSubscription:Subscription;
  candidateServiceSubscription:Subscription;
  CreateCandidateSubscription:Subscription;

  ngOnInit() {

    //$('#DrpPrefferedLocation').material_select();
   // $('#DrpPositionApplied').material_select();
    //$("#DrpReligion").material_select();
    //$("#DrpCaste").material_select();
    $("#DrpResidence").select2();
    $("#DrpJobIndustry1").select2();
    //$("#DrpEmirate").material_select();
    //$("#DrpLanguagesKnown").material_select();
    //$("#DrpVisaStatus").material_select();
    //$("#DrpNoticePeriod").material_select();
    //$("#DrpQualification").material_select();

  
    setTimeout(() => {
      this.LoadDropDownContents();
    }, 500);
   
  
  }

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  if (this.LoadDropDownConetnsSubscription!=undefined){
    this.LoadDropDownConetnsSubscription.unsubscribe();
  }

  if (this.candidateServiceSubscription!=undefined){
    this.candidateServiceSubscription.unsubscribe();
  }

  if (this.CreateCandidateSubscription!=undefined){
    this.CreateCandidateSubscription.unsubscribe();
  }

}

LoadDropDownContents(){
 this.LoadDropDownConetnsSubscription= this.candidateService.GetCandidateAddFormDisplayComponents().subscribe(
    (response)=>{
    this.VacancyList=response["VacancyList"];
    this.LocationList=response["Location"];
    this.ReligionList=response["Religion"];
    this.CasteList=response["Caste"];
    this.LanguageList=response["Language"];
    this.JobIndustryList=response["JobIndustry"];
    this.CountryNationalityList=response["CountryNationalityList"];
    },
    (error)=>{console.log(error)},
    ()=>{
      this.isLoaded=true
    }
  )
  
  this.NewEmployeeProfile()
  this.NewAcadmicProfiles()
}



 NewEmployeeProfile(){
  let e = new EmployeeProfile
  e.CountryID="5000"; 
  e.Description="";
  e.Designation=""
  e.Employer=""
  e.FromDate="";
  e.GrossMonthlySalary="";
  e.isLatestJob="False"
  e.ReasonForLeaving=""
  e.ReportingTo=""
  e.ToDate="";
  this.EmployeeProfiles.push(e)
 }

 NewAcadmicProfiles(){
  let e = new EducationProfile
  e.CompletionYear=""; 
  e.CountryID=5000;
  e.Description="";
  e.EducationQualificationID=0;
  e.ExamResult=""
  e.Institute=""
 
  this.AcadmeicProfiles.push(e)
 }


  addEmploymentProfiles() {
    this.NewEmployeeProfile()
  }

  addAcademicProfiles() {
    this.NewAcadmicProfiles()
  }

  RemoveEmployeProfile(id:number){
      console.log(id);

      Swal({
        title: 'Are you sure?',
        text: 'Do you want to delete the current employee profile details ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {

          /*******Delete starts Here */
          if (this.EmployeeProfiles.length>1){
            this.EmployeeProfiles.splice(id,1);
            console.log(this.EmployeeProfiles);
            } else {
                alert("cannot remove")
                  }
          /*******Deelte Ends Here */

          Swal(
            'Deleted!',
            '',
            'success'
          )
       
        } 
      })

    }

    RemoveAcademicProfile(id:number){
      Swal({
        title: 'Are you sure?',
        text: 'Do you want to delete the current academic profile details ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {

          /*******Delete starts Here */
          if (this.AcadmeicProfiles.length>1){
            this.AcadmeicProfiles.splice(id,1);
            
            } else {
                alert("cannot remove")
                  }
          /*******Deelte Ends Here */

          Swal('Deleted!', '', 'success' ) } 
      })

    }
    isEmployeProfileDeletable(){
      if (this.EmployeeProfiles.length>1){ return true;} else{return false;}
     
    }

    isAcademicProfileDeletable(){
      if (this.AcadmeicProfiles.length>1){ return true;} else{return false;}
     
    }




    GetEmployerName(Designation:string, Employer:string){
      alert(Designation);
      if (Designation.length>0 && Employer.length>0){
        return "(" + Designation  +", " + Employer + ")"
      }
      
    }


    getFileDetails (e) {
      //console.log (e.target.files);
      this.myFiles=[];
      let f :FileToUpload= new FileToUpload;
    
      for (var i = 0; i < e.target.files.length; i++) { 
       f.File=e.target.files[i];
       f.FileName=e.target.files[i].name;
        this.myFiles.push(f);
      }
      this.isUpbloadButtonDisabled=false;
    }

    GetCheckBoxValue(value:string):boolean{
    return false;
    }

  
    uploadFiles1(){
     console.log(this.GetSelectedJobIndustry());
    }

  
    uploadFiles () {
      
    
      if(this.ValidateForm()==true){
        this.isUpbloadButtonDisabled=true;
        this.UploadButtonText="Uploading CV... Please wait.."
        const frmData = new FormData();
        
        for (var i = 0; i < this.myFiles.length; i++) { 
         // frmData.append("files", this.myFiles[i],"01a-shabeer1temp"+ i);
         frmData.append("files", this.myFiles[i].File, this.myFiles[i].FileName  );
        
        }
        
    this.candidateServiceSubscription=this.candidateService.uploadCV(frmData).subscribe(result => {
          this.myFiles=[];
         
          this.UploadButtonText="Saving Data...Please Wait"
         this.AddNewCandidate(result);
         this.myInputVariable.nativeElement.value = "";
         // this.myInputVariable.nativeElement.text="";
          // frmData.delete("files");

    
       
  
          
        }, (err) => {
          this.isUpbloadButtonDisabled=false;
          this.UploadButtonText="Upload"
          Swal('Error!','Could not process the request', 'error' )
        })

       
        
      }

     
      
    }

    ResetFormConfirm(){
      Swal({
        title: 'Are you sure?',
        text: 'Do you want to reset this form?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, reset it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.ResetForm();
          Swal(
            'Reseted!',
            'Form reseted successfully',
            'success'
          )
          this.isUpbloadButtonDisabled=false;
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        }
      })

      }
    ResetForm(){
      this.cvTitle="";
      this.Objective="";
      this.RefNo="";
      this.ExternalRefNo="";
      this.NameFirst="";
      this.NameMiddle="";
      this.NameLast="";
      this.cvFIle="";
      this.DateOfBirth= "";
      this.Gender="";
      this.ReligionID=0;
      this.CasteID=0;
      this.MaritialStatus="";
      this.NoOfDependant=0;
      this.Nationality=0;
      this.CountryOfResidence=0;
      this.CityID=1000;
      this.VisaStatusID=0;
      this.NoticePeriod="";
      this.Email="";
      this.uPassword="";
      this.MobileCountryCode="";
      this.MobileNo="";
      this.Address="";
      this.PoBox="";
      this.FaxCountryCode="";
      this.FaxNo="";
      this.isRelativeAtCompany="False";
      this.RelativeDetails="";
      this.WhyShurooq="";
      this.WorkExperienceTotal=0;
      this.WorkExperienceUAE=0;
      this.WorkExperienceNonUAE=0;
      this.RelevantExperience=0;
      this.PrefferedOtherLocations="";

      this.SelectedVacancies=[];
      this.SelectedLocations=[];
      this.SelectedLanguages=[];
      this.SelectedJobIndustrys=[];
      this.SelectedReligions=[];
      this.SelectedCastes=[];
      this.EmployeeProfiles=[];
      this.AcadmeicProfiles=[];
      
      this.NewEmployeeProfile()
      this.NewAcadmicProfiles()

    }
    AddNewCandidate(CVFIleName :string ){

      if(this.ValidateForm()==true){
        //UPload CV 
      
        let a = new CandidateAddNew
        a.cvTitle=this.cvTitle;
        a.Objective=this.Objective;
        a.RefNo=this.RefNo;
        a.ExternalRefNo=this.ExternalRefNo;
        a.NameFirst=this.NameFirst;
        a.NameMiddle=this.NameMiddle;
        a.NameLast=this.NameLast;
        a.cvFIle=CVFIleName;
        a.DateOfBirth=this.DateOfBirth;
        if (this.DateOfBirth==""){
          a.DateOfBirth="01-01-1900";
        }
      
        a.Gender=this.Gender;
        a.ReligionID=this.ReligionID;
        a.CasteID=this.CasteID;
        if (this.CasteID=0){
        a.CasteID=3;
        }

        if (this.ReligionID > 1){
          a.CasteID=3;
          }
        
        a.MaritialStatus=this.MaritialStatus;
        a.NoOfDependant=this.NoOfDependant;
        a.Nationality=this.Nationality;
        a.CountryOfResidence=this.CountryOfResidence;
        a.CityID=this.CityID;
        if (this.CityID=0){
          a.CityID=1000;
        }
        if (a.CountryOfResidence> 1){
          a.CityID=1000;
        }
        a.VisaStatusID=this.VisaStatusID;
        a.NoticePeriod=this.NoticePeriod;
        a.Email=this.Email;
        a.uPassword=this.uPassword;
        a.MobileCountryCode=this.MobileCountryCode;
        a.MobileNo=this.MobileNo;
        a.Address=this.Address;
        a.PoBox=this.PoBox;
        a.FaxCountryCode=this.FaxCountryCode;
        a.FaxNo=this.FaxNo;
       
        a.RelativeDetails=this.RelativeDetails;
        if (this.RelativeDetails.length>0){a.isRelativeAtCompany="True"}
    
        a.WhyShurooq=this.WhyShurooq;
        a.WorkExperienceTotal=this.WorkExperienceTotal;
        a.WorkExperienceUAE=this.WorkExperienceUAE;
        a.WorkExperienceNonUAE=this.WorkExperienceNonUAE;
        a.RelevantExperience=this.RelevantExperience;
        a.PrefferedOtherLocations=this.PrefferedOtherLocations;
    
    
        a.EmployeeProfile=this.FormatEmployeeProfiles(this.EmployeeProfiles);
        a.EducationProfile= this.FormatAcademicProfiles(this.AcadmeicProfiles);
        a.PositionsApplied= this.GetPositionsApplied();
        a.LanguagesKnown=this.GetKnownLanguages();
        a.PrefferedLocation=this.GetPrefferedLocation();
        a.JobIndustry=this.GetSelectedJobIndustry();

        console.clear();
        console.log(JSON.stringify(a));
     
        this.CreateCandidateSubscription=  this.candidateService.CreateCandidate(JSON.stringify(a)).subscribe(result => {
      

          Swal({
            title: 'Successfully Registered',
            text: 'Candidate registered successfully.',
            type: 'success',
            showCancelButton: false,
            confirmButtonText: 'OK',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {
             
              /*******Email Notification & SMS Notification code here */
             
              /******* Ends Here */
            
            //  Swal('Candidate Notified!', 'Candidate was notified successfully.', 'success' ) 
              this.router.navigateByUrl('/candidates');
            }
              
            })
      
            
           
          },
          (error)=>{
            console.log("error");
            console.log(error);
          }
        )

        console.log(JSON.stringify(a));
      }
   
 //cool
    }

    ValidateForm():boolean{
      let isValid:boolean=true;
      if (this.NameFirst.toString().length==0){
        Swal('First Name not entered', 'Please enter first name', 'error')
        isValid=false;
      } else  if (this.NameLast.toString().length==0){
        Swal('Last Name not entered', 'Please enter last name', 'error')
        isValid=false;
      } else  if (this.DateOfBirth.toString().length==0){
        Swal('Date of birth not entered', 'Please enter Date of Birth', 'error')
        isValid=false;
      } else  if (this.Gender.toString().length==0){
        Swal('Gender not selected', 'Please select gender', 'error')
        isValid=false;
      } 
      
      
      else  if (this.ReligionID.toString().length==0 || this.ReligionID==0){
        Swal('Religion not selected', 'Please select religon', 'error')
        isValid=false;
      } else  if (this.CasteID.toString().length==0 || this.CasteID==0){
        Swal('Caste not selected', 'Please select caste', 'error')
        isValid=false;
      } else  if (this.NoticePeriod.toString().length==0 || this.NoticePeriod==""){
        Swal('Notice period not selected', 'Please select notice period', 'error')
        isValid=false;
      } else  if (this.Email.toString().length==0 || this.Email==""){
        Swal('Email not entered', 'Please enter email', 'error')
        isValid=false;
      } else  if (this.MobileNo.toString().length==0 || this.MobileNo==""){
        Swal('Mobile number not entered', 'Please enter mobile number', 'error')
        isValid=false;
      } else  if (this.SelectedJobIndustrys ==null || this.SelectedJobIndustrys ==undefined){
           Swal('Job industry not selected', 'Please select Job Industry', 'error')
           isValid=false;
        } 
     else  if (this.WorkExperienceTotal.toString().length==0 ){
        Swal('Work experience not entered', 'Please enter work experience', 'error')
        isValid=false;
      }  else  if (this.RelevantExperience.toString().length==0  && this.WorkExperienceTotal>0) {
        Swal('Relevant experience not entered', 'Please enter relevant work experience', 'error')
        isValid=false;
      } else  if (this.WhyShurooq.toString().length==0  || this.WhyShurooq=="") {
        Swal('Enter why candidate wish to join SHUROOQ', 'Please enter why the candidate would like to join SHUROOQ', 'error')
        isValid=false;
      }
     
      return isValid
    }

    FormatEmployeeProfiles(EmployeeProfiles:EmployeeProfile[]):EmployeeProfile[] {
      for (let prof of EmployeeProfiles) {
        if(prof.FromDate !=null){
          if(prof.FromDate.toString()==""){
            prof.FromDate="01-01-1900";
            prof.ToDate="01-01-1900";
          }

          if(prof.FromDate ==null){
            prof.FromDate="01-01-1900";
            prof.ToDate="01-01-1900";
          }
        }

        if(prof.GrossMonthlySalary !=null){
          if(prof.GrossMonthlySalary.toString()==""){
            prof.GrossMonthlySalary="0";
          }

          if(prof.GrossMonthlySalary ==null){
            prof.GrossMonthlySalary="0";
          }
        }
      
    } 
    return EmployeeProfiles
    }


    FormatAcademicProfiles(AcadmeicProfiles:EducationProfile[]):EducationProfile[] {
      for (let prof of AcadmeicProfiles) {
        if(prof.CompletionYear !=null){
          if(prof.CompletionYear.toString()==""){
            prof.CompletionYear="01-01-1900";
            
          }

          if(prof.CompletionYear ==null){
            prof.CompletionYear="01-01-1900";
            
          }
        }
    } 
    return AcadmeicProfiles
    }

    GetPositionsApplied():PositionsApplied[]{
      
      let AppliedVacancies:PositionsApplied[]=[];
      if(this.SelectedVacancies != null || this.SelectedVacancies !=undefined) {
        if(this.SelectedVacancies.length>0){
          for (let i of this.SelectedVacancies) {
            let a = new PositionsApplied
            a.VacancyID=+i;
            AppliedVacancies.push(a);
               }
        }
      }
          return AppliedVacancies
    }


    GetPrefferedLocation():PrefferedLocation[]{
     
      let AppliedPrefferedLocation:PrefferedLocation[]=[];
        if (this.SelectedLocations !=null || this.SelectedLocations !=undefined){
          if(this.SelectedLocations.length>0){
              for (let i of this.SelectedLocations) {
                  let a = new PrefferedLocation
                  a.LocationID=+i;
                  AppliedPrefferedLocation.push(a);
              }
          }
          
        }
     return AppliedPrefferedLocation
    }

    GetKnownLanguages():LanguagesKnown[]{
      let KnownLanguagesByCandidate:LanguagesKnown[]=[];
      if(this.SelectedLanguages !=null || this.SelectedLanguages !=undefined){
        if(this.SelectedLanguages.length>0){
          for (let i of this.SelectedLanguages) {
            let a = new LanguagesKnown
             a.LanguageID=+i;
             a.Proficiency=300
             KnownLanguagesByCandidate.push(a);
          }
        }
      }
     return KnownLanguagesByCandidate
    }

    GetSelectedJobIndustry():JobIndustry[]{

      let CandidateJobIndustry:JobIndustry[]=[];
      if (this.SelectedJobIndustrys !=null || this.SelectedJobIndustrys !=undefined){
        if(this.SelectedJobIndustrys.length>0){
          for (let i of this.SelectedJobIndustrys) {
            let a = new JobIndustry
            a.IndustryID=+i;
            console.log(a.IndustryID) + " value is " + console.log(i);
             CandidateJobIndustry.push(a);
          }
        }
      }
     return CandidateJobIndustry
    }

    onReligionChange(){
 
      if (this.ReligionID !=1){
        this.CasteID=999;
        this.isCasteDropdownDisabled=true;
      }
        else{
          this.isCasteDropdownDisabled=false;
          this.CasteID=0;
        }
    }

    onResidenceCountryChange(){
     // alert(this.CountryOfResidence);
      if (this.CountryOfResidence !=1){
        this.CityID=1000;
        this.isCityDisabled=true;
      }
        else{
          this.isCityDisabled=false;
          this.CityID=1000;
        }
    }
      

    test(){
   
    }

    
   onBtnClick(){

   
    
    
    
    /*
    console.log(this.FirstName);
     alert(this.FirstName);
 
    $("#chkSharjahCity").is(':checked');
    $("#chkSharjahCity").is(':checked');
    $("#chkSharjahCity").prop('checked',true);
   */
  }

}



export class FileToUpload
{
  File: any; 
  FileName: string;
}