import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { CandidateService } from '../../../shared/services/candidate.service';
import { RequestList } from '../../../shared/models/requests/request-details';
import { RequestGroupWiseService } from '../../../shared/services/request/request-group-wise.service';
import { Subscription } from 'rxjs';
import { LoginService } from '../../../shared/services/login/login.service';
import { LoggedInUserDetails } from '../../../shared/common/LoggedInUserDetails';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-shortlist-fliter',
  templateUrl: './shortlist-fliter.component.html',
  styleUrls: ['./shortlist-fliter.component.css']
})
export class ShortlistFliterComponent implements OnInit,OnDestroy {
  RequestList:RequestList[]=[];
  GetRequestDetailsGroupWiseSubscription:Subscription;
  LoginServiceSubscription:Subscription;
  LoggedInUserID:number;
  LoggedInUserDetails:LoggedInUserDetails;

  CurrentGroupID:number=3;
  constructor(
    private RequestGroupWiseService : RequestGroupWiseService,
    private LoginService : LoginService,
    @Inject(CandidateService) private candidateService : CandidateService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.GetRequestDetailsGroupWiseSubscription !=undefined){
      this.GetRequestDetailsGroupWiseSubscription.unsubscribe();
    }
    if(this.LoginServiceSubscription !=undefined){
      this.LoginServiceSubscription.unsubscribe();
    }
    
   
   
  }

  ngOnInit() {

   this.LoginServiceSubscription= this.LoginService.cast.subscribe(LoggedInUserDetails=>
      {
       
        this.LoggedInUserDetails=LoggedInUserDetails[0]
        this.LoggedInUserID=+this.LoggedInUserDetails.userid;
        if (this.route.snapshot.queryParams['groupid'] ==null ||  this.route.snapshot.queryParams['groupid'] ==undefined){
     
        this.router.navigateByUrl('/home');
        } else {
          this.CurrentGroupID=this.route.snapshot.queryParams['groupid'];
        }
      



        this.LoadRequestList(this.LoggedInUserID,this.CurrentGroupID)
      }
    
    );
  




  }

  ngAfterViewInit(){
    $('.collapsible').collapsible();
     $("select").select2();
   $('select').material_select();
  }

  LoadRequestList(UserID:number, GroupID:number){
    this.RequestList=[];
   this.GetRequestDetailsGroupWiseSubscription =this.candidateService.GetRequestDetailsGroupWise(UserID, GroupID).subscribe(
  (response)=>{
    //console.log(JSON.stringify(response));


    let resp 
    if (response["Request"] !=null && response["Request"] !=undefined){
      resp=response["Request"];
          if (resp["RequestList"] !=null && resp["RequestList"] !=undefined){
            this.RequestList=resp["RequestList"];
            
          }

    }
  
    this.RequestGroupWiseService.UpdateInfo( this.RequestList);
    //console.log('Hereerere after updation');
 
   // console.log(this.RequestList);
   },
  (error)=>{console.log(error);}
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
}
