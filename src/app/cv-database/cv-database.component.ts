import { Component, OnInit , Inject, OnDestroy} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {trigger, transition, group, query, style,animate} from '@angular/animations';
import { CandidateService } from '../shared/services/candidate.service';
import { Applicant } from '../shared/models/applicant';
import { ApplicantShortlistableJobs } from '../shared/models/applicant-shortlistable-jobs';
import { ApplicantListService } from '../shared/services/applicants/applicant-list.service';
import { ApplicantBasicInfo } from '../shared/models/applicant-basic-info';
import { ApplicantShortlistableJobsService } from '../shared/services/applicants/applicant-shortlistable-jobs.service';
import { SelectedApplicantBasicInfoService } from '../shared/services/applicants/selected-applicant-basic-info.service';
import { ApplicantDetailsInfo } from '../shared/models/applicant-details-info';
import { ApplicantPersonalProfileService } from '../shared/services/applicants/applicant-personal-profile.service';
import { ApplicantEmploymentProfileService } from '../shared/services/applicants/applicant-employment-profile.service';
import { ApplicantEmploymentProfile } from '../shared/models/applicant-employment-profile';
import { ApplicantAcademicProfileService } from '../shared/services/applicants/applicant-academic-profile.service';
import { ApplicantAcademicProfile } from '../shared/models/applicant-academic-profile';
import { ApplicantListResultInfo } from '../shared/models/applicant-list-result-info';
import { CurrentSelectedCandidateService } from '../shared/services/current-selected-candidate.service';
import { CurrentSelectedCandidate } from '../shared/models/current-selected-candidate';
import { Filter, CandidateFilter } from '../shared/models/searchfilter';
import { CurrentSelectedCandidatePageService } from '../shared/services/current-selected-candidate-page.service';
import { CandidatePageInfo } from '../shared/models/pages/candidate-page-info';
import { SelectedCandidatePageService } from '../shared/services/pages/selected-candidate-page.service';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cv-database',
  templateUrl: './cv-database.component.html',
  styleUrls: ['./cv-database.component.css'],
  animations: [
    trigger('routeAnimation', [
        transition('1 => 2, 2 => 3, 1=>3, 1=> 4, 2=>4, 3=>4, *<=>*', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(100%)' }),{optional: true}),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }),{optional: true}),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
                ],{optional: true}),
                // and now reveal the enter
                query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' })),{optional: true}),
            ]),
        ]),
        transition('3 => 2, 2 => 1, 3=>1, *<=>*', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(-100%)' }),{optional: true}),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }),{optional: true}),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
                ],{optional: true}),
                // and now reveal the enter
                query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' })),{optional: true}),
            ]),
        ]),
    ])
]

})
export class CvDatabaseComponent implements OnInit,OnDestroy {

   
    isApplicantExist:boolean=true;
  constructor(
    private CurrentSelectedCandidatePageService:CurrentSelectedCandidatePageService,
    private route:ActivatedRoute
    ) { }
    
  ApplicantExistSubscription:Subscription;

  ngOnInit() {
    
    this.SetCandidatePageInof()
    const body = document.getElementsByTagName('body')[0];
    body.className ='mailbox loaded';
    this.CurrentSelectedCandidatePageService.UpdateApplicantListPageNo(1);
    this.CurrentSelectedCandidatePageService.UpdateCandidatesCount(0);
    this.CurrentSelectedCandidatePageService.UpdateIsApplicantExist(true);

   this.ApplicantExistSubscription= this.CurrentSelectedCandidatePageService.castIsApplicantExist.subscribe(isApplicantExist=>this.isApplicantExist=isApplicantExist);

  }


  ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.ApplicantExistSubscription.unsubscribe();
      
  }
  SetCandidatePageInof(){
      let a : SelectedCandidatePageService = new SelectedCandidatePageService
      let i: CandidatePageInfo = new CandidatePageInfo
      i.CurrentPageNo=1;
     let PageSize : string = environment.CandidatePageListSize;

     let pagemode ="none"
     if (this.route.snapshot.queryParams['mode'] ==null ||  this.route.snapshot.queryParams['mode'] ==undefined){
        pagemode ="none";
     } else{
        pagemode= this.route.snapshot.queryParams['mode'];
     }
  
   

      let f;
      let ft;

      console.log ("page mode is" + pagemode )
      if (pagemode=="none")  {
          console.log("page mode is none");
         f= new Filter("0","","","0","","","","","","","",false, false)
         ft = new CandidateFilter("2","active","none","candidates","1",PageSize, f)
      } else if(pagemode=="globalsearch"){
        console.log("page mode is not none..it is " + pagemode);
         
        let searchkeword="";
        if (this.route.snapshot.queryParams['keyword'] !=null &&  this.route.snapshot.queryParams['keyword'] !=undefined){
            searchkeword= this.route.snapshot.queryParams['keyword'];
          
        }
        f= new Filter("0",searchkeword,"","0","","","","","","","",false, false)
        ft = new CandidateFilter("2","active","filtered","candidates","1",PageSize, f)
      }
    
    


      
      i.PageFitler=ft;
      
      
      a.SetCandidatePageInfo(i);
  }

  
  getDepth(outlet){
    return outlet.activatedRouteData['depth'];

  }

  


  ngAfterContentInit() {
    
  }

 


}
