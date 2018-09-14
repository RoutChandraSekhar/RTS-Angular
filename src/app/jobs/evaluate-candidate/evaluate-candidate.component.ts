import { Component, OnInit } from '@angular/core';
import Swal, { SweetAlertType } from 'sweetalert2';
import swal from 'sweetalert2';
declare var $ : any;
@Component({
  selector: 'app-evaluate-candidate',
  templateUrl: './evaluate-candidate.component.html',
  styleUrls: ['./evaluate-candidate.component.css']
})
export class EvaluateCandidateComponent implements OnInit {

  constructor() { }

  CandidateName:string="";
  ERFNo:string="";
  CandidateNo:string="";
  ApplciationNo:string="";
  InterviewDate:string="";
  PositionInterviewedFor:string="";
  Division:string="";
  Department:string="";
  Interviewer:string="";
  JobTitle:string="";


  JobKnowledge:number=0;
  Innovation:number=0;
  RelevantJobExperience:number=0;
  ServiceExcellence:number=0;
  RelevantEducation:number=0;
  AttentionToDetails:number=0;
  MarketIntelligence:number=0;

  LeadershipSkills:number=0;

  TotalPercentage:number=0;
  TotalScore:number=0;

  GapAnalysis:string="";
  isSuitableForAnotherPosition:boolean=false;
  OtherSuitablePosition:string="";

  HRComments:string="";






  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.className ='mailbox loaded';
  }

  CalculateScore(){
  
    if (this.JobKnowledge>10 || this.Innovation>10 || this.RelevantJobExperience>10 || this.ServiceExcellence>10 || this.RelevantEducation>10 || this.AttentionToDetails>10 || this.MarketIntelligence>10 || this.LeadershipSkills>10 || this.JobKnowledge<0 || this.Innovation<0 || this.RelevantJobExperience<0 || this.ServiceExcellence<0 || this.RelevantEducation<0 || this.AttentionToDetails<0 || this.MarketIntelligence<0 || this.LeadershipSkills<0){
      swal("Invalid rating value","Rating should be between 1 and 10 ","error");
    }else{
      this.TotalScore=this.JobKnowledge+ this.Innovation+ this.RelevantJobExperience + this.ServiceExcellence + this.RelevantEducation + this.AttentionToDetails + this.MarketIntelligence + this.LeadershipSkills
      this.TotalPercentage= Math.round(((this.JobKnowledge+ this.Innovation+ this.RelevantJobExperience + this.ServiceExcellence + this.RelevantEducation + this.AttentionToDetails + this.MarketIntelligence + this.LeadershipSkills)/80) * 100)
  
    }

    }

  ngAfterViewInit(){
    // $('.collapsible').collapsible();
      $("select").select2();
    $('select').material_select();
   }


   onHireCandidate(){

    if (this.JobKnowledge>10 || this.Innovation>10 || this.RelevantJobExperience>10 || this.ServiceExcellence>10 || this.RelevantEducation>10 || this.AttentionToDetails>10 || this.MarketIntelligence>10 || this.LeadershipSkills>10 || this.JobKnowledge<0 || this.Innovation<0 || this.RelevantJobExperience<0 || this.ServiceExcellence<0 || this.RelevantEducation<0 || this.AttentionToDetails<0 || this.MarketIntelligence<0 || this.LeadershipSkills<0){
      swal("Invalid rating value","Rating should be between 1 and 10 ","error");
      return;
    }else{
      this.TotalScore=this.JobKnowledge+ this.Innovation+ this.RelevantJobExperience + this.ServiceExcellence + this.RelevantEducation + this.AttentionToDetails + this.MarketIntelligence + this.LeadershipSkills
      this.TotalPercentage= Math.round(((this.JobKnowledge+ this.Innovation+ this.RelevantJobExperience + this.ServiceExcellence + this.RelevantEducation + this.AttentionToDetails + this.MarketIntelligence + this.LeadershipSkills)/80) * 100)
  
    }


  
      if (this.TotalPercentage<60){
        Swal({
          title: 'Rating should be more than 60%',
          text: 'To hire a candidate, rating should be more than 60%, however you may continue.',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, continue',
          cancelButtonText: 'No, cancel'
        }).then((result) => {
          if (result.value) {
            Swal(
              'Thank you!',
              'Your evaluation has been submitted',
              'success'
            )
          // For more information about handling dismissals please visit
          // https://sweetalert2.github.io/#handling-dismissals
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal(
              'Review the score and submit',
              'You may review the score and submit',
              'info'
            )
          }
        })
      }
  

   }
   onRejectCandidate(){

   }
   onFurherInteview(){

   }
   onReset(){

   }
   


}
