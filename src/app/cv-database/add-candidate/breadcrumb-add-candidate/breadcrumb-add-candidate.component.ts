import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-breadcrumb-add-candidate',
  templateUrl: './breadcrumb-add-candidate.component.html',
  styleUrls: ['./breadcrumb-add-candidate.component.css']
})
export class BreadcrumbAddCandidateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToDashboard(){
    this.router.navigate(['/home']);
  }

  GoToCandidateList(){
    this.router.navigate(['/candidates']);
  }

}
