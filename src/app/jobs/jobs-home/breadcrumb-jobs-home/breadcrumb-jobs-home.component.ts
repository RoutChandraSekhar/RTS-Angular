import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-jobs-home',
  templateUrl: './breadcrumb-jobs-home.component.html',
  styleUrls: ['./breadcrumb-jobs-home.component.css']
})
export class BreadcrumbJobsHomeComponent implements OnInit {
@Input() BreadCrumb:string;
  constructor() { }

  ngOnInit() {
  }

}
