import { Component, OnInit, Inject } from '@angular/core';
import {Router} from "@angular/router";
import { Applicant } from '../../../../models/applicant';

import { ApplicantDetails } from '../../../../models/applicant-details';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  ApplicantsList : Applicant[];
  ApplicantDetails:ApplicantDetails[];
  constructor( private router: Router) {
   }

  ngOnInit() { }

}
