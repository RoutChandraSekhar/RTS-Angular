import { Component, OnInit, Inject } from '@angular/core';
import { CandidateService } from '../../../shared/services/candidate.service';
import { RequestList } from '../../../shared/models/requests/request-details';
import { RequestGroupWiseService } from '../../../shared/services/request/request-group-wise.service';
declare var $: any;
@Component({
  selector: 'app-interview-filter',
  templateUrl: './interview-filter.component.html',
  styleUrls: ['./interview-filter.component.css']
})
export class InterviewFilterComponent implements OnInit {
  RequestList:RequestList[]=[];
  constructor(
    private RequestGroupWiseService : RequestGroupWiseService,
    @Inject(CandidateService) private candidateService : CandidateService
  ) { }

  ngOnInit() {
 this.candidateService.GetRequestDetailsGroupWise(2).subscribe(
   (response)=>{
     console.log(JSON.stringify(response));
     let resp = response["Request"];
     this.RequestList=resp["RequestList"];
    
    


     this.RequestGroupWiseService.UpdateInfo( this.RequestList);
     //console.log('Hereerere after updation');
     this.RequestList;
     console.log(this.RequestList);
    },
   (error)=>{console.log(error);}
 )



  }
  ngAfterViewInit(){
    $('.collapsible').collapsible();
     $("select").select2();
   $('select').material_select();
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
}
