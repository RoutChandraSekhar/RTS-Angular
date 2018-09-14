import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-add-candidate-form-postion-applied',
  templateUrl: './add-candidate-form-postion-applied.component.html',
  styleUrls: ['./add-candidate-form-postion-applied.component.css']
})
export class AddCandidateFormPostionAppliedComponent implements OnInit {

  constructor() { }



  
  index: number = 1;
  employmentProfiles = [
  { id: this.index, designation: '', reportingto:'', currentemployer:'', salary:'', employedfrom:'', employedto:'', reasonforleaving:''}
  ];

  FirstName:string="";
  MiddleName:string="";
  LastName:string="";
  Email:string="";
  MobileNo:string="";
  DetailsofRelativesinShurooq:string="";

  TotalWorkExperience:string="";
  UAEWorkExperience:string="";
  NonUAEWorkExperience:string="";
  RelevantWorkExperience:string="";
  Qualification:string="";
  WhyShurooq:string="";

  ngOnInit() {

   // $("select").select2();
    $('#DrpPrefferedLocation').material_select();
    $('#DrpPositionApplied').material_select();
    $("#DrpReligion").material_select();
    $("#DrpCaste").material_select();
    $("#DrpCountry").select2();
    $("#DrpEmirate").material_select();
    $("#DrpLanguagesKnown").material_select();
    $("#DrpVisaStatus").material_select();
    $("#DrpNoticePeriod").material_select();
    $("#DrpQualification").material_select();
    
    
    
    
    
    

    
    
  }
  @ViewChild('shabeer') someInput: ElementRef;
  onBtnClick(){

    console.log(this.employmentProfiles);
 alert(this.Qualification);
 
    $("#chkSharjahCity").is(':checked');
    $("#chkSharjahCity").is(':checked');
    $("#chkSharjahCity").prop('checked',true);
   console.log($('#chkbike').val());

  }


  addEmploymentProfiles() {
    this.index++;
    this.employmentProfiles.push({ id: this.index,designation: '', reportingto:'', currentemployer:'', salary:'', employedfrom:'', employedto:'', reasonforleaving:''});
    console.log(this.employmentProfiles)
  }

  RemoveEmployeProfile(id:number){
    console.log(id);
    if (this.employmentProfiles.length>1){
      this.employmentProfiles.splice(id,1);
      console.log(this.employmentProfiles);
} else {
  alert("cannot remove")
}
    }
    isEmployeProfileDeletable(){
      if (this.employmentProfiles.length>1){ return true;} else{return false;}
     
    }

    GetEmployerName(Designation:string, Employer:string){
      alert(Designation);
      if (Designation.length>0 && Employer.length>0){
        return "(" + Designation  +", " + Employer + ")"
      }
      
    }
      


}
