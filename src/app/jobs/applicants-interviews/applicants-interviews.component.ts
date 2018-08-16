import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicants-interviews',
  templateUrl: './applicants-interviews.component.html',
  styleUrls: ['./applicants-interviews.component.css']
})
export class ApplicantsInterviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.className ='mailbox loaded';
  }

}
