import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { CandidateService } from '../shared/services/candidate.service';
import { Vacancy } from '../shared/models/vacancy';
import { Dashboard, RecentCandidates } from '../shared/models/dashboard/dashboard';
import { DashboardService } from '../shared/services/dashboard/dashboard.service';
import { Subscription } from 'rxjs';


declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

 TotalCandidates:string;
 TotalActiveJobs:string;
 TotalActiveApplicants:string;
 ChartTicks:String;
 ChartData:String;
 RecentCandidates:RecentCandidates[]=[];

  Dashboard:Dashboard=new Dashboard("","","","","",[],[]);
  DashboardSubscription:Subscription;
  constructor(
      @Inject(CandidateService) private candidateService : CandidateService,
     // @Inject(DashboardService ) private DashboardService : DashboardService
) { }

 ngOnDestroy(): void {
     //Called once, before the instance is destroyed.
     //Add 'implements OnDestroy' to the class.
     this.DashboardSubscription.unsubscribe();
     
 }

  ngOnInit() {

    /*
    $('.datepicker').pickadate(
        {
        selectMonths: true,
        selectYears: 200, 
        format: 'dd/mm/yyyy',
        autoClose:true
      },
    
    );

    */


   $('.tooltipped').tooltip();
 this.DashboardSubscription=  this.candidateService.GetDashboard("1","25").subscribe(
        (response)=>{
            console.log(response);
            console.log(response["dashboard"][0]);
            let dash =response["dashboard"][0];
            this.Dashboard=dash;
            this.TotalActiveJobs=this.Dashboard.ActiveJobs;
            this.TotalCandidates=this.Dashboard.TotalCandidates;
            this.TotalActiveApplicants=this.Dashboard.ActiveApplicants;
            this.ChartData=this.Dashboard.ChartData;
            this.ChartTicks=this.Dashboard.ChartTicks;

            this.RecentCandidates=response["recentcandidates"];

            console.log(response);
            console.log(this.Dashboard.ChartData)
            console.log( this.RecentCandidates)
            


            /*
            setTimeout(()=>{
                console.log(this.ChartData);
                this.flot1(this.ChartData, this.ChartTicks);
               
               }
                ,2000)
            */













        
        
        },
        (error)=>{console.log(error)}

   )

    const body = document.getElementsByTagName('body')[0];
    body.className ='loaded';

    const mainInner = document.getElementById('mninner');
    mainInner.className ='mn-inner inner-active-sidebar';

    /*
    setTimeout( () => { 
        this.counterup();
    },1000)
    */
   


    /*
    this.candidateService.getCategories().subscribe(
        (response)=>{
            //alert('success');
            this.VacancyList=response;
           // alert(response);
          // console.log(response);
           // console.log("success executed" +response);
        },
        (error)=>{
            alert('error');
            //console.log( error);
        }
    )
*/
   
  
  }


 


  
  onRegisterClick(){
   // console.log(this.country);
  }

  counterup(){
    $('.counter').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 1500,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
              $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
          }
      });
  });
  }


 flot1(ChartData, ChartTicks) {
    // var data = [[0, 50], [1, 42], [2, 40], [3, 65], [4, 48], [5, 56], [6, 80]];
     var data= [];
     //var data2 = [[0, 25], [1, 19], [2, 20], [3, 35], [4, 23], [5, 28], [6, 45]];
    var data2 = ChartData;
    //alert(data2);
     //data2=[[0,2],[1,1],[2,16],[3,8],[4,1]];
  
     //var ticks = [[0, "JAN 1"], [1, "JAN 2"], [2, "Wed"], [3, "Thu"], [4, "Fri"], [5, "Sat"], [6, "Sun"]];
    var ticks=ChartTicks;
    alert(ticks);
    //ticks=[[0,"Jan 04"],[1,"Jul 23"],[2,"Aug 01"],[3,"Aug 09"],[4,"Aug 15"]]
     
   
   
   

   setTimeout(() => {
    var dataset =  [
        {
            data: data,
            color: "#E0E0E0",
            lines: {
                show: true,
                fill: 0.4,
            },
            shadowSize: 0,
        }, {
            data: data,
            color: "#E0E0E0",
            lines: {
                show: false,
            },
            points: {
                show: true,
                fill: true,
                radius: 4,
                fillColor: "#fff",
                lineWidth: 2
            },
            curvedLines: {
                apply: false,
            },
            shadowSize: 0
        }, {
            data: data2,
            color: "#26A69A",
            lines: {
                show: true,
                fill: 0.4,
            },
            shadowSize: 0,
        },{
            data: data2,
            color: "#26A69A",
            lines: {
                show: false,
            },
            curvedLines: {
                apply: false,
            },
            points: {
                show: true,
                fill: true,
                radius: 4,
                fillColor: "#fff",
                lineWidth: 2
            },
            shadowSize: 0
        }
    ];

    $.plot(".flowchart2", dataset, {
        series: {
            color: "#14D1BD",
            lines: {
                show: true,
                fill: 0.2
            },
            shadowSize: 0,
            curvedLines: {
                apply: true,
                active: true
            }
        },
        xaxis: {
            ticks: ticks,
        },
        legend: {
            show: false
        },
        grid: {
            color: "#AFAFAF",
            hoverable: true,
            borderWidth: 0,
            backgroundColor: '#FFF'
        },
        tooltip: true,
        tooltipOpts: {
           // content: "%yK",
           content: '%y',
            defaultTheme: false
        }
    });
   }, 5000);
     
 };
 





  }
