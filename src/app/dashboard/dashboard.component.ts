import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.className ='loaded';

    const mainInner = document.getElementById('mninner');
    mainInner.className ='mn-inner inner-active-sidebar';

    this.counterup();
    this.flot1();
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


 flot1() {
    // var data = [[0, 50], [1, 42], [2, 40], [3, 65], [4, 48], [5, 56], [6, 80]];
     var data= [];
     var data2 = [[0, 25], [1, 19], [2, 20], [3, 35], [4, 23], [5, 28], [6, 45]];
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
     
     var ticks = [[0, "Mon"], [1, "Tue"], [2, "Wed"], [3, "Thu"], [4, "Fri"], [5, "Sat"], [6, "Sun"]];

     var plot1 = $.plot("#flotchart1", dataset, {
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
     
 };
 





  }
