import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jobs-home-quick-action-buttons',
  templateUrl: './jobs-home-quick-action-buttons.component.html',
  styleUrls: ['./jobs-home-quick-action-buttons.component.css']
})
export class JobsHomeQuickActionButtonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AddNewJob(){
    this.router.navigate(['/addjob']);
  }

}
