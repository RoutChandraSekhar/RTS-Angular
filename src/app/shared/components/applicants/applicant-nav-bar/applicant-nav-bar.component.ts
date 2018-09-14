import { Component, OnInit,Input } from '@angular/core';
import { ApplicantShortlistableJobs } from '../../../models/applicant-shortlistable-jobs';

@Component({
  selector: 'app-applicant-nav-bar',
  templateUrl: './applicant-nav-bar.component.html',
  styleUrls: ['./applicant-nav-bar.component.css']
})
export class ApplicantNavBarComponent implements OnInit {
  ShortListableJobs: ApplicantShortlistableJobs[];
  constructor() { }

  ngOnInit() {
  }

}
