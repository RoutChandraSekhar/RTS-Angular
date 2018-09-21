import { Component, OnInit, Inject, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ApplicantBasicInfo } from '../../../models/applicant-basic-info';
import { ApplicantShortlistableJobs } from '../../../models/applicant-shortlistable-jobs';
import { ApplicantEmploymentProfile } from '../../../models/applicant-employment-profile';
import { ApplicantAcademicProfile } from '../../../models/applicant-academic-profile';
import { ApplicantDetailsInfo } from '../../../models/applicant-details-info';
import { ApplicantListResultInfo } from '../../../models/applicant-list-result-info';
import { CurrentSelectedCandidate } from '../../../models/current-selected-candidate';
import { Filter, CandidateFilter } from '../../../models/searchfilter';
import { CandidateService } from '../../../services/candidate.service';
import { ApplicantListService } from '../../../services/applicants/applicant-list.service';
import { ApplicantShortlistableJobsService } from '../../../services/applicants/applicant-shortlistable-jobs.service';
import { SelectedApplicantBasicInfoService } from '../../../services/applicants/selected-applicant-basic-info.service';
import { ApplicantPersonalProfileService } from '../../../services/applicants/applicant-personal-profile.service';
import { ApplicantAcademicProfileService } from '../../../services/applicants/applicant-academic-profile.service';
import { ApplicantEmploymentProfileService } from '../../../services/applicants/applicant-employment-profile.service';
import { CurrentSelectedCandidateService } from '../../../services/current-selected-candidate.service';
import { ActivatedRoute } from '@angular/router';
import { CurrentSlectedCandidateListService } from '../../../services/current-slected-candidate-list.service';
import { SelectedCandidatePageService } from '../../../services/pages/selected-candidate-page.service';
import { CandidatePageInfo } from '../../../models/pages/candidate-page-info';
import { CurrentSelectedCandidatePageService } from '../../../services/current-selected-candidate-page.service';
import { CandidateAddFormVacancyList, CandidateAddLocationList, CandidateReligionList, CandidateCasteList, CandidateLanguageList, CandidateJobIndustryList, CountryNationalityList } from '../../../models/candidate-addform/candidate-form-displaycompnents';
import Swal, { SweetAlertType } from 'sweetalert2';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';

declare var $:any;

@Component({
  selector: 'app-applicant-filter',
  templateUrl: './applicant-filter.component.html',
  styleUrls: ['./applicant-filter.component.css']
})
export class ApplicantFilterComponent implements OnInit,OnDestroy {
  
  Enteredkeywords:string="";
  SelectedJobIndustry:string="";
  SelectedNationality:string="";
  SelectedLanguagesKnown:string="";
  SelectedEducation:string="";
  SelectedGender:string="";
  SelectedExperience:string="";
  SelectedBAge:string="";
  SelectedVisaStatus:string="";






  ApplicantsList: ApplicantBasicInfo[];
    SelectedCandidateBasicInfo : ApplicantBasicInfo;
    //CandidateList :any[];
    ShortListableJobs: ApplicantShortlistableJobs[];
    SelectedCandidateEmploymentProfile: ApplicantEmploymentProfile[]=[];
    SelectedCandidateAcademicProfile : ApplicantAcademicProfile[]=[];


    ApplicantProfileInfo : ApplicantDetailsInfo;
    ApplicantListResultInfo:ApplicantListResultInfo=new ApplicantListResultInfo("","","","")
    TotalCandidates:string;

    
    CurrentSelectedCandidate:CurrentSelectedCandidate=new CurrentSelectedCandidate("");
    
    CurrentPageNo:string="1"
  


    VacancyList:CandidateAddFormVacancyList[];
    LocationList:CandidateAddLocationList[];
    ReligionList:CandidateReligionList[];
    CasteList:CandidateCasteList[];
    LanguageList:CandidateLanguageList[];
    JobIndustryList:CandidateJobIndustryList[];
    CountryNationalityList:CountryNationalityList[];
    EducationQualificationList: { EduacationQualificationID: number, Qualification: string }[] = [
      { "EduacationQualificationID": 1, "Qualification": "Lower than High School" },
      { "EduacationQualificationID": 2, "Qualification": "High School" },
      { "EduacationQualificationID": 3, "Qualification": "Diploma" },
      { "EduacationQualificationID": 4, "Qualification": "Higher Diploma" },
      { "EduacationQualificationID": 5, "Qualification": "Under Graduate" },
      { "EduacationQualificationID": 6, "Qualification": "Bachelors" },
      { "EduacationQualificationID": 7, "Qualification": "Masters" },
      { "EduacationQualificationID": 8, "Qualification": "Masters" }
  ];

  GenderList: { GenderID: number, Gender: string }[] = [
    { "GenderID": 1, "Gender": "Male" },
    { "GenderID": 2, "Gender": "Female" }
  ];

  ExperienceList: { ExperienceID: string, Experience: string }[] = [
    { "ExperienceID": "0-1", "Experience": "Less than 1 year" },
    { "ExperienceID": "1-2", "Experience": "1 to 2 years" },
    { "ExperienceID": "2-3", "Experience": "2 years to 3 years" },
    { "ExperienceID": "3-4", "Experience": "3 years to 4 years" },
    { "ExperienceID": "4-5", "Experience": "4 years to 5 years" },  
    { "ExperienceID": "5-7", "Experience": "5 years to 7 years" },
    { "ExperienceID": "7-100", "Experience": "More than 7 years" },
   
  ];

  VisaStatusList: { VisaStatusID: number, VisaStatus: string }[] = [
    { "VisaStatusID": 1, "VisaStatus": "Employment visa" },
    { "VisaStatusID": 2, "VisaStatus": "Residence visa" },
    { "VisaStatusID": 3, "VisaStatus": "Visit visa" },
    { "VisaStatusID": 4, "VisaStatus": "Dependant visa" },
    { "VisaStatusID": 5, "VisaStatus": "With family book" },  
    { "VisaStatusID": 6, "VisaStatus": "Without family book" }
   
  ];

 

  constructor( @Inject(CandidateService) private candidateService : CandidateService,
  private CurrentSlectedCandidateListService: CurrentSlectedCandidateListService,
  private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService,
  private route:ActivatedRoute,
  private router: Router) { }

  cPageInfo:CandidatePageInfo= new CandidatePageInfo;
 
  


  AppliedFilterCount:number =0;
  showKeywordsChip:boolean=false;
  showJobIndustryChip:boolean=false;
  JobIndustryChip:string;

  
  showNationalityChip:boolean=false;
  NationalityChip:string;

  showLanguagesKnownChip:boolean=false;
  LanguagesKnownChip:string;

  showEducationChip:boolean=false;
  EducationChp:string;

  showGenderChip:boolean=false;
  GenderChip:string;

  showExperienceChip:boolean=false;
  ExperienceChip:string;

  showVisaStatusChip:boolean=false;
  VisaStatusChip:string;

  isFilterDisabled:boolean=false;
  FilterCandidatesDisplayText:string="Filter Candidates";

  GetCandidateAddFormDisplayComponentsSubscription:Subscription;

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.GetCandidateAddFormDisplayComponentsSubscription !=undefined){
      this.GetCandidateAddFormDisplayComponentsSubscription.unsubscribe();
    }
  
}

  ngOnInit() {
    //$('.dropdown-button').dropdown();
   // $('.collapsible').collapsible();
    //$('.modal').openModal();
   // $('.tooltipped').tooltip();
    //$('#modal_filter_candidates').openModal();

  
    $('.collapsible').collapsible();
    $("#DrpJobIndustry").select2();
    $("#DrpNationality").select2();
    $("#DrpLanguagesKnown").select2();
    $("#DrpEducation").select2();

    $("#DrpGender").material_select();
    $("#DrpExperience").material_select();
    $("#DrpVisaStatus").material_select();
    
    
    


   this.LoadFilterDropDowns();
   
 

   
  this.GetCandidatePageInfo()
  this.CurrentPageNo = this.cPageInfo.CurrentPageNo.toString();
  this.CurrentSlectedCandidateListService.LoadCandidates(this.cPageInfo.PageFitler);
  }

 

  LoadFilterDropDowns(){
    this.GetCandidateAddFormDisplayComponentsSubscription= this.candidateService.GetCandidateAddFormDisplayComponents().subscribe(
      (response)=>{
       
      this.VacancyList=response["VacancyList"];
      this.LocationList=response["Location"];
      this.ReligionList=response["Religion"];
      this.CasteList=response["Caste"];
      this.LanguageList=response["Language"];
      this.JobIndustryList=response["JobIndustry"];
      this.CountryNationalityList=response["CountryNationalityList"];
     
     
  
      
      },
      (error)=>{console.log(error)}
    )

  }


  showFilterModal(){
    $('#modal_filter_candidates').openModal(); 
    }

    filterCandidates(){
      $('#filterCandidates').closeModal(); 
    }

    resetFilter(){
      $('#resetFilterCandidates').closeModal(); 
    }

    GetCandidatePageInfo(){
      let a : SelectedCandidatePageService = new SelectedCandidatePageService
      this.cPageInfo= a.GetCandidatePageInfo();
    }
    
    SetCandidatePageInfo(){
      let a : SelectedCandidatePageService = new SelectedCandidatePageService
      a.SetCandidatePageInfo(this.cPageInfo);
      
     
    }
    onSubmitFilterCandidate(){
      if ($('#DrpJobIndustry').val() !=null ||  $('#DrpJobIndustry').val() !=undefined){

      }


      if ($('#DrpJobIndustry').val() !=null ||  $('#DrpJobIndustry').val() !=undefined){
        this.SelectedJobIndustry=$('#DrpJobIndustry').val().toString();
      }
        else{
          this.SelectedJobIndustry="";
        }

        if ($('#DrpNationality').val() !=null ||  $('#DrpNationality').val() !=undefined){
          this.SelectedNationality=$('#DrpNationality').val().toString();
        }
          else{
            this.SelectedNationality="";
          }

          if ($('#DrpLanguagesKnown').val() !=null ||  $('#DrpLanguagesKnown').val() !=undefined){
            this.SelectedLanguagesKnown=$('#DrpLanguagesKnown').val().toString();
          }
            else{
              this.SelectedLanguagesKnown="";
            }

            if ($('#DrpEducation').val() !=null ||  $('#DrpEducation').val() !=undefined){
              this.SelectedEducation=$('#DrpEducation').val().toString();
            }
              else{
                this.SelectedEducation="";
              }

              if ($('#DrpGender').val() !=null ||  $('#DrpGender').val() !=undefined){
                this.SelectedGender=$('#DrpGender').val().toString();
              }
                else{
                  this.SelectedGender="";
              }


              if ($('#DrpExperience').val() !=null ||  $('#DrpExperience').val() !=undefined){
                this.SelectedExperience=$('#DrpExperience').val().toString();
              }
                else{
                  this.SelectedExperience="0";
              }
        
  
              if ($('#DrpVisaStatus').val() !=null ||  $('#DrpVisaStatus').val() !=undefined){
                this.SelectedVisaStatus=$('#DrpVisaStatus').val().toString();
              }
                else{
                  this.SelectedVisaStatus="";
              }
   
  
    this.isFilterDisabled=true;
    this.FilterCandidatesDisplayText="Searching...";
  
    this.GetCandidatePageInfo();
    this.AppliedFilterCount=0;
    this.cPageInfo.PageFitler.FilterType="filtered";
    this.cPageInfo.PageFitler.Filter.Keywords=this.Enteredkeywords.toString();
    this.cPageInfo.PageFitler.PageNo="1";
    
  
    this.cPageInfo.PageFitler.Filter.JobIndustryIDList=this.SelectedJobIndustry.toString();
    this.cPageInfo.PageFitler.Filter.NationalityID=this.SelectedNationality.toString();
    this.cPageInfo.PageFitler.Filter.LanguageSkills=this.SelectedLanguagesKnown.toString();
    this.cPageInfo.PageFitler.Filter.Education=this.SelectedEducation.toString();
   this.cPageInfo.PageFitler.Filter.Gender=this.SelectedGender.toString();
    this.cPageInfo.PageFitler.Filter.Experience=this.SelectedExperience.toString();
    this.cPageInfo.PageFitler.Filter.VisaStatusList=this.SelectedVisaStatus.toString();
 /**/
   this.ShowFilteredChipDisplay();


   if (this.AppliedFilterCount>0){

    this.CurrentSlectedCandidateListService.LoadCandidates(this.cPageInfo.PageFitler);
    
      Swal('Filter Applied', 'Filter applied successfully ', 'success')
    

    this.isFilterDisabled=false;
    this.FilterCandidatesDisplayText="Filter Candiates";
    
    //console.clear();
    console.log(this.cPageInfo.PageFitler  );
    console.log(JSON.stringify(this.cPageInfo.PageFitler));
    let CurrentURL = this.router.url;
    if (CurrentURL.indexOf("candidates/")>=0){
      this.router.navigateByUrl('/candidates/overview');
    } else{
      this.router.navigateByUrl('/candidatesx/overview');
    }
    

    $('#modal_filter_candidates').closeModal(); 
    this.cPageInfo.PageFitler.PageNo="1";
    this.CurrentSelectedCandidatePageService.UpdateApplicantListPageNo(+this.cPageInfo.PageFitler.PageNo);
    this.SetCandidatePageInfo();
   } else {
    Swal('No Filter Applied', 'Please select a filter. ', 'info')
   }

    
    
    }

    onClearFilterCandidate(){
    



      this.GetCandidatePageInfo();
      if(this.cPageInfo.PageFitler.RequestType.toLowerCase()=="applicants"){
        this.cPageInfo.PageFitler.FilterType="filtered"
      } else if(this.cPageInfo.PageFitler.RequestType.toLowerCase()=="candidates"){
        this.cPageInfo.PageFitler.FilterType="none"
      }
     
      this.cPageInfo.PageFitler.Filter.Keywords="";
      this.cPageInfo.PageFitler.Filter.JobIndustryIDList="";
      this.cPageInfo.PageFitler.Filter.NationalityID="";
      this.cPageInfo.PageFitler.Filter.LanguageSkills="";
      this.cPageInfo.PageFitler.Filter.Education="";
      this.cPageInfo.PageFitler.Filter.Gender="";
      this.cPageInfo.PageFitler.Filter.Experience="0";
      this.cPageInfo.PageFitler.Filter.VisaStatusList="";
      this.cPageInfo.PageFitler.Filter.StateGroupID="0"

      this.AppliedFilterCount=0;

      this.cPageInfo.PageFitler.PageNo="1"
      this.CurrentSelectedCandidatePageService.UpdateApplicantListPageNo(+this.cPageInfo.PageFitler.PageNo)
      this.SetCandidatePageInfo()
      this.CurrentSlectedCandidateListService.LoadCandidates(this.cPageInfo.PageFitler);

    //reset chip
    this.showJobIndustryChip=false;
    this.showNationalityChip=false;
    this.showLanguagesKnownChip=false;
    this.showEducationChip=false;
    this.showGenderChip=false;
    this.showExperienceChip=false;
    this.showVisaStatusChip=false;
    this.showKeywordsChip=false;


    this.Enteredkeywords="";
    
    
   
    $('#DrpJobIndustry').val(''); // Select the option with a value of '1'
    $('#DrpJobIndustry').trigger('change'); // Notify any JS components that the value changed  
    
    $('#DrpNationality').val(''); // Select the option with a value of '1'
    $('#DrpNationality').trigger('change'); // Notify any JS components that the value changed  

    $('#DrpLanguagesKnown').val(''); // Select the option with a value of '1'
    $('#DrpLanguagesKnown').trigger('change'); // Notify any JS components that the value changed  

    $('#DrpEducation').val(''); // Select the option with a value of '1'
    $('#DrpEducation').trigger('change'); // Notify any JS components that the value changed  
      
    $('#DrpGender').prop('selectedIndex', -1); // Select the option with a value of '1'
    $('#DrpGender').material_select();   // Notify any JS components that the value changed  

    $('#DrpExperience').prop('selectedIndex', -1); // Select the option with a value of '1'
    $('#DrpExperience').material_select();   // Notify any JS components that the value changed  

    $('#DrpVisaStatus').prop('selectedIndex', -1); // Select the option with a value of '1'
    $('#DrpVisaStatus').material_select();   // Notify any JS components that the value changed  



      Swal('Filter Cleared', 'Filter successfully cleared', 'success')
    }

    ShowFilteredChipDisplay(){
      //Keywords
      this.JobIndustryChip="";
      this.NationalityChip="";
      this.LanguagesKnownChip="";
      this.EducationChp="";
      this.GenderChip="";
      this.ExperienceChip="";
      this.VisaStatusChip="";
      
      if (this.Enteredkeywords !=null){
        if (this.Enteredkeywords.toString().length>0){
          this.AppliedFilterCount+=1;
          this.showKeywordsChip=true;
        }
      }
  

      //Job Industry  
      let selJobIndustry :string[]=$('#DrpJobIndustry').val();
      if (selJobIndustry !=null){
        selJobIndustry.forEach((itemSel, indexSel) => {
          this.JobIndustryList.forEach((itemJI, indexJI) => {
            if (itemSel == itemJI.IndustryID){ 
              this.showJobIndustryChip=true;
              this.JobIndustryChip = this.JobIndustryChip + "," +  itemJI.Industry;
              this.AppliedFilterCount+=1;
            }
        });
      });
      }

    
    
    
   

    //Nationality 
    let selNationality :string[]=$('#DrpNationality').val();
    if (selNationality !=null){
      selNationality.forEach((itemSel, indexSel) => {
        this.CountryNationalityList.forEach((itemJI, indexJI) => {
          if (+itemSel == itemJI.CountryID){ 
            this.showNationalityChip=true;
            this.NationalityChip = this.NationalityChip + "," + itemJI.Country;
            this.AppliedFilterCount+=1;
          }
      });
    });
    }
   

  //Languages
 let seLanguages :string[]=$('#DrpLanguagesKnown').val();
 if(seLanguages !=null){
  seLanguages.forEach((itemSel, indexSel) => {
    this.LanguageList.forEach((itemJI, indexJI) => {
      if (itemSel == itemJI.LanguageID){ 
        this.showLanguagesKnownChip=true;
        this.LanguagesKnownChip = this.LanguagesKnownChip + "," + itemJI.Language;
        this.AppliedFilterCount+=1;
      }
  });
 });
 }

//Education
let seEducation :string[]=$('#DrpEducation').val();
if (seEducation !=null){
  seEducation.forEach((itemSel, indexSel) => {
    this.EducationQualificationList.forEach((itemJI, indexJI) => {
      if (+itemSel == itemJI.EduacationQualificationID){ 
        this.showEducationChip=true;
        this.EducationChp = this.EducationChp + "," + itemJI.Qualification;
        this.AppliedFilterCount+=1;
      }
  });
  });
}

//Gender
let seGender :string[]=[];
seGender.push($('#DrpGender').val());
if (seGender !=null){
  
seGender.forEach((itemSel, indexSel) => {
  this.GenderList.forEach((itemJI, indexJI) => {
    if (itemSel == itemJI.Gender){ 
      this.showGenderChip=true;
      this.GenderChip = this.GenderChip + "," + itemJI.Gender;
      this.AppliedFilterCount+=1;
    }
});
});
}

//Experience
let seExperience :string[]=[];
seExperience.push($('#DrpExperience').val());
if(seExperience !=null){
  
seExperience.forEach((itemSel, indexSel) => {
  this.ExperienceList.forEach((itemJI, indexJI) => {
    if (itemSel == itemJI.ExperienceID){ 
    
      this.showExperienceChip=true;
      this.ExperienceChip = this.ExperienceChip + "," + itemJI.Experience;
      this.AppliedFilterCount+=1;
    }
});
});
}


//Visa Status
let seVisa :string[]=[];
seVisa.push($('#DrpVisaStatus').val());
if(seVisa !=null){
seVisa.forEach((itemSel, indexSel) => {
  this.VisaStatusList.forEach((itemJI, indexJI) => {
    if (+itemSel == itemJI.VisaStatusID){ 
      this.showVisaStatusChip=true;
      this.VisaStatusChip = this.VisaStatusChip + "," + itemJI.VisaStatus;
      this.AppliedFilterCount+=1;
    }
});
});
}


//Remove undefined...
    this.JobIndustryChip=this.JobIndustryChip.replace("undefined","");
    this.NationalityChip=this.NationalityChip.replace("undefined","");
    this.LanguagesKnownChip=this.LanguagesKnownChip.replace("undefined","");
    this.EducationChp=this.EducationChp.replace("undefined","");
    this.GenderChip=this.GenderChip.replace("undefined","");
    this.ExperienceChip=this.ExperienceChip.replace("undefined","");
    this.VisaStatusChip=this.VisaStatusChip.replace("undefined","");


    //Remove first Coma
    if (this.JobIndustryChip !=null){
    if (this.JobIndustryChip.indexOf(",")>=0){
      this.JobIndustryChip=this.JobIndustryChip.slice(this.JobIndustryChip.indexOf(",")+1,this.JobIndustryChip.length)
    } }
    
    if (this.NationalityChip !=null){
      if (this.NationalityChip.indexOf(",")>=0){
        this.NationalityChip=this.NationalityChip.slice(this.NationalityChip.indexOf(",")+1,this.NationalityChip.length)
      } }

    if (this.LanguagesKnownChip !=null){
      if (this.LanguagesKnownChip.indexOf(",")>=0){
          this.LanguagesKnownChip=this.LanguagesKnownChip.slice(this.LanguagesKnownChip.indexOf(",")+1,this.LanguagesKnownChip.length)
        } }

    if (this.EducationChp !=null){
      if (this.EducationChp.indexOf(",")>=0){
              this.EducationChp=this.EducationChp.slice(this.EducationChp.indexOf(",")+1,this.EducationChp.length)
        } }

    if (this.GenderChip !=null){
      if (this.GenderChip.indexOf(",")>=0){
                  this.GenderChip=this.GenderChip.slice(this.GenderChip.indexOf(",")+1,this.GenderChip.length)
       } }

     if (this.ExperienceChip !=null){
        if (this.ExperienceChip.indexOf(",")>=0){
                    this.ExperienceChip=this.ExperienceChip.slice(this.ExperienceChip.indexOf(",")+1,this.ExperienceChip.length)
         } }

         if (this.VisaStatusChip !=null){
          if (this.VisaStatusChip.indexOf(",")>=0){
                      this.VisaStatusChip=this.VisaStatusChip.slice(this.VisaStatusChip.indexOf(",")+1,this.VisaStatusChip.length)
           } }
    



    }

}
