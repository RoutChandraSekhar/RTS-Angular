import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-breadcrumb-cv-database',
  templateUrl: './breadcrumb-cv-database.component.html',
  styleUrls: ['./breadcrumb-cv-database.component.css']
})
export class BreadcrumbCvDatabaseComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  isShowJobsLink:boolean=false;
  frompage:string="";
  ngOnInit() {
    if (this.route.snapshot.queryParams['frompage'] ==null ||  this.route.snapshot.queryParams['frompage'] ==undefined){
      this.frompage ="none";
   } else{
      this.frompage= this.route.snapshot.queryParams['frompage'];
   } 
  
   if(this.frompage=="jobapplicants"){
     this.isShowJobsLink=true;
   } else  if(this.frompage=="jobsfindcandidates"){
    this.isShowJobsLink=true;
  }

  }

}
