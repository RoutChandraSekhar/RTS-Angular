import { Component, OnInit, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { CandidateService } from '../shared/services/candidate.service';
import { Vacancy } from '../shared/models/vacancy';
import { Dashboard, RecentCandidates } from '../shared/models/dashboard/dashboard';
import { DashboardService } from '../shared/services/dashboard/dashboard.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {Chart} from 'chart.js'

declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

 TotalCandidates:string;
 TotalActiveJobs:string;
 TotalActiveApplicants:string;
 ChartTicks:  string[]= [];
 ChartData:number[]=[];
 RecentCandidates:RecentCandidates[]=[];

  Dashboard:Dashboard=new Dashboard("","","","","",[],[]);
  DashboardSubscription:Subscription;

  LineChart=[];
  constructor(
      @Inject(CandidateService) private candidateService : CandidateService,
      private router : Router
     // @Inject(DashboardService ) private DashboardService : DashboardService
) { }

 ngOnDestroy(): void {
     //Called once, before the instance is destroyed.
     //Add 'implements OnDestroy' to the class.

     if (this.DashboardSubscription != undefined) {
        this.DashboardSubscription.unsubscribe();
      }

     
 }

  ngOnInit() {

  


   $('.tooltipped').tooltip();
 this.DashboardSubscription=  this.candidateService.GetDashboard( "1","7").subscribe(
        (response)=>{
           
            let dash =response["dashboard"][0];
            
            this.Dashboard=dash;
            this.TotalActiveJobs=this.Dashboard.ActiveJobs;
            this.TotalCandidates=this.Dashboard.TotalCandidates;
            this.TotalActiveApplicants=this.Dashboard.ActiveApplicants;

           let chartData=(response["chart"]);
           for (let d of chartData) {
            this.ChartTicks.push(d.ApplicationDate);
            this.ChartData.push(d.Candidates);
        }
        
            this.RecentCandidates=response["recentcandidates"];
            this.RenderCharts(this.ChartTicks,this.ChartData);
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




  ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
   /*
      setTimeout(() => {
        this.RenderCharts(this.ChartTicks,this.ChartData);
      }, 500);
      */
  }

  RenderCharts(ChartTicks:string[], chartData:number[]){
      //console.log(ChartTicks);
     // console.log(chartData);
    this.LineChart = new Chart('lineChart',{
        type: 'line',
        data:{
            labels: ChartTicks,
            datasets: [{
                label : 'Applicants registered',
                data:chartData,
                fill:true,
                lineTension:0.8,
                borderColor:"#00acc1",
                borderWidth:3
            }
            /*
            ,
            {
                label : 'Applicants shorlisted',
                data:[9,8,4,7,5,2,4],
                fill:false,
                lineTension:0.6,
                borderColor:"#CD5C5C",
                borderWidth:2
            }
            */
        
        ]
        },
        options:{
            title:{
                text:"Latest Registrations",
                display:false
            },
            legend: {
                display: false
             },
            
            scales:{
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    },
                    gridLines: {
                        display:false
                    }
                }],
                yAxes:[{
                    ticks: {
                        beginAtZero:true
                    },
                    gridLines: {
                        display:false
                    }
                }]
            }
        }
    }

)
  }


  GotToCandidatesPage(){
    this.router.navigateByUrl("/candidates");
  }

  GotToActiveJobs(){
    this.router.navigateByUrl("/jobs");
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








  }
