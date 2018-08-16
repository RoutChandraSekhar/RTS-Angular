import { Component, OnInit, Inject } from '@angular/core';
import { Applicant } from '../../models/applicant';
import { ApplicantService } from '../../services/applicant.service';
import { ApplicantDetails } from '../../models/applicant-details';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
 ApplicantDetails: ApplicantDetails[];

  constructor(@Inject(ApplicantService) private a : ApplicantService) { }

  ngOnInit() {
    //this.ApplicantDetails=this.a.ApplicantDetails;
    //console.log("its from here" + this.ApplicantDetails);
  }

}
