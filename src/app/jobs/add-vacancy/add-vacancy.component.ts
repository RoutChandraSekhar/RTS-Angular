import { Component, OnInit, Inject, ViewChild, OnDestroy } from '@angular/core';
import { CandidateService } from '../../shared/services/candidate.service';
import { JobInterviewerList, JobsAddNewJob } from '../../shared/models/jobs/addnewjob';
import Swal, { SweetAlertType } from 'sweetalert2';
import { DatePipe } from '@angular/common';
import swal from 'sweetalert2';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
declare var $:any;

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.css']
})
export class AddVacancyComponent implements OnInit,OnDestroy {

  constructor(
    private router: Router,
    @Inject(CandidateService) private candidateService : CandidateService
  ) { }



  DesignationsList:any [];
  DestinationsList:any[];
  UsersList:any[];
  DepartmentsList:any[];
  PositionTypesList:any[];

  JobInterviewers:JobInterviewerList[]=[];

  


  ProcessID: number=1;
  OpenPositions: string="0";
  DesignationID: string="0";
  PrimaryInterviewerID:string="0"
  JobTitle: string="";
  JobDescription: string="";
  JobSkill: string="";
  JobDuty: string="";
  EducationInfo: string="";
  NationalityInfo: string="";
  RequestedByUserID: string="0";
  RequestingDepartmentID: string="0";
  RequestingEntityID: string="0";
  PositionTypeID: string="0";
  RefNo: string="";
  RequestedOn: string=new Date().toDateString();
  TargetJoiningDate: string="";

  isLoaded:boolean=false;
  isSubmitButtonDisabled:boolean=false;

  GetJobAddFormDisplayComponentsSubscription:Subscription;
  CreateNewVacancySubscription:Subscription;

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    if (this.GetJobAddFormDisplayComponentsSubscription !=null || this.GetJobAddFormDisplayComponentsSubscription!=undefined){
      this.GetJobAddFormDisplayComponentsSubscription.unsubscribe();
    }

    if (this.CreateNewVacancySubscription !=null || this.CreateNewVacancySubscription!=undefined){
      this.CreateNewVacancySubscription.unsubscribe();
    }
    
   
    
  }

  ngOnInit() {

   


    var datePipe = new DatePipe("en-UK");
    this.RequestedOn=datePipe.transform(this.RequestedOn, 'dd/MM/yyyy');
    //this.TargetJoiningDate=datePipe.transform(this.TargetJoiningDate, 'dd/MM/yyyy');
    this.isLoaded=false;
  
    setTimeout(() => {
      this.LoadJobControls();
    }, 500);

    
  }


  LoadJobControls(){
    this.isLoaded=false;
  this.GetJobAddFormDisplayComponentsSubscription= this.candidateService.GetJobAddFormDisplayComponents().subscribe(
      (response)=>{
        
      this.DesignationsList=response["Designations"];
      this.DestinationsList=response["Destinations"];
      this.UsersList=response["Users"];
      this.DepartmentsList=response["Departments"];
      this.PositionTypesList=response["PositionTypes"];

      this.AddNewJobInterviewer();
      //console.log(response);

      this.isLoaded=true;
      
      
      },
      (error)=>{console.log(error)}
    )
  }

  ValidateForm():boolean{
  let isValidated:boolean=true;
  if(this.DesignationID.toString().length==0 || this.DesignationID=="0"){
    swal("Designation not selected","Please select designation", "error");
    isValidated=false;
  } else if(this.JobTitle.toString().length==0){
    swal("Job title not entered","Please enter job title", "error");
    isValidated=false;
  } else if(this.RequestingEntityID.toString().length==0 || this.RequestingEntityID=="0"){
    swal("Destination not selected","Please select destination", "error");
    isValidated=false;
  } else if(this.PrimaryInterviewerID.toString().length==0 || this.PrimaryInterviewerID=="0"){
    swal("Primary interviewer not selected","Please select primary interviewer", "error");
    isValidated=false;
  } else if(this.JobDescription.toString().length==0 ){
    swal("Job description not entered","Please enter job description", "error");
    isValidated=false;
  } else if(this.RequestedByUserID.length==0 || this.RequestedByUserID=="0"){
    swal("Requestor not selected","Please select requestor", "error");
    isValidated=false;
  } else if(this.RequestingDepartmentID.toString().length==0 || this.RequestingDepartmentID=="0"){
    swal("Requesting Department not selected","Please select requesting department", "error");
    isValidated=false;
  }  else if(this.RequestedOn.toString().length==0 || this.RequestedOn=="0" || this.RequestedOn.toString()=="invalid date"){
    swal("Request date  not selected","Please select request date", "error");
    isValidated=false;
  } else if(this.OpenPositions.toString().length==0 || this.OpenPositions=="0" ){
    swal("No of open positions not entered","Please enter number of open positions", "error");
    isValidated=false;
  } else if(this.PositionTypeID.toString().length==0 || this.PositionTypeID=="0" ){
    swal("Position type not selected","Please select position type", "error");
    isValidated=false;
  } else if(this.TargetJoiningDate.toString().length==0 || this.TargetJoiningDate=="0" || this.TargetJoiningDate.toString()=="invalid date" ){
    swal("Target joining date not selected","Please select target joining date", "error");
    isValidated=false;
  }


  return isValidated
  }

  AddNewJob(){
        if (this.ValidateForm()==true){
        
          this.isSubmitButtonDisabled=true

          let a = new JobsAddNewJob
          a.ProcessID=this.ProcessID;
          a.OpenPositions=this.OpenPositions;
          a.DesignationID=this.DesignationID;
          a.JobTitle=this.JobTitle;
          a.JobDescription=this.JobDescription;
          a.JobSkill=this.JobSkill;
          a.JobDuty=this.JobDuty;
          a.EducationInfo=this.EducationInfo;
          a.NationalityInfo=this.NationalityInfo;
          a.RequestedByUserID=this.RequestedByUserID;
          a.RequestingDepartmentID=this.RequestingDepartmentID;
          a.RequestingEntityID=this.RequestingEntityID;
          a.PositionTypeID=this.PositionTypeID;
          a.RefNo=this.RefNo;
          a.RequestedOn=this.RequestedOn;

         
          a.JobInterviewerList=this.FormatJobInterviewerList(this.JobInterviewers);
        
          //console.log();

         this.CreateNewVacancySubscription=  this.candidateService.CreateNewVacancy(JSON.stringify(a)).subscribe(
            (response)=>{

               // console.log(response);
              Swal({
                title: 'Vacancy created',
                text: 'vacancy created successfully',
                type: 'success',
                showCancelButton: false,
                confirmButtonText: 'OK',
                cancelButtonText: ''
              }).then((result) => {
                if (result.value) {
                  this.isSubmitButtonDisabled=false
                  this.router.navigateByUrl('/jobs'); 
                }
              })


            
              

            
            
            },
            (error)=>{
              alert('error')
              this.isSubmitButtonDisabled=false
            

          }
          )

         
        }



  }


  ResetForm(){
  
    this.OpenPositions="0"
    this.DesignationID="0"
    this.JobTitle=""
    this.JobDescription=""
    this.JobSkill=""
    this.JobDuty=""
    this.EducationInfo=""
    this.NationalityInfo=""
    this.RequestedByUserID="0"
    this.RequestingDepartmentID="0"
    this.RequestingEntityID="0"
    this.PositionTypeID="0"
    this.RefNo=""
    this.RequestedOn=""
    this.PrimaryInterviewerID=""
    this.JobInterviewers=[];
    this.AddNewJobInterviewer();
    swal("Successfully cleared the form","All data cleared successfully","success");

   
  }
  FormatJobInterviewerList(JobList:JobInterviewerList[]):JobInterviewerList[] {

    let FormatedList :JobInterviewerList[] =[];

         //Add Primary Interviewer to the arrry
         let a = new JobInterviewerList;
         a.Description="";
         a.InterviewerUserID=this.PrimaryInterviewerID;
         a.isEvaluator=true;
         a.isEvaluator=true;
         FormatedList.push(a);

    //let jtemp =Object.assign([], JobInterviewerList);
    
  //  jtemp.forEach((item, index) => {
    JobList.forEach((item, index) => {

      if(item.InterviewerUserID.toString()!="0"){
        FormatedList.push(item);
      }
  });
  console.log(FormatedList);
      return FormatedList;
  }

  AddNewJobInterviewer(){
    let a = new JobInterviewerList;
   a.Description="";
   a.InterviewerUserID="0"
   a.isEvaluator=false;
   a.isMandatory=false;
  this.JobInterviewers.push(a);
  }

  onAddNewJobInterviewer() {
    this.AddNewJobInterviewer()
  }

  isJobInterviewerDeletable(){
    if (this.JobInterviewers.length>1){ return true;} else{return false;}
   
  }

  
  RemoveJobInterviewer(id:number){
    Swal({
      title: 'Are you sure?',
      text: 'Do you want to delete the current interviewer ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

        /*******Delete starts Here */
        if (this.JobInterviewers.length>1){
          this.JobInterviewers.splice(id,1);
          
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


  AddNewJob1(){
    this.isSubmitButtonDisabled=true;
  }
}
