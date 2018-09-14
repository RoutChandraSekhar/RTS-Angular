import { Component, OnInit, Input } from '@angular/core';
import { ApplicantPastApplicationStatus } from '../../../../models/applicant-past-applications';

@Component({
  selector: 'app-applicant-past-application-status',
  templateUrl: './applicant-past-application-status.component.html',
  styleUrls: ['./applicant-past-application-status.component.css']
})
export class ApplicantPastApplicationStatusComponent implements OnInit {

  constructor() { }
  @Input() isPastApplicationExist:boolean;
@Input() ApplicantPastApplicationStatus:ApplicantPastApplicationStatus[] = [];

  ngOnInit() {
  }

}
