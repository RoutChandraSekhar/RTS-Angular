import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cv-database-quick-action-buttons',
  templateUrl: './cv-database-quick-action-buttons.component.html',
  styleUrls: ['./cv-database-quick-action-buttons.component.css']
})
export class CvDatabaseQuickActionButtonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AddNewCandidate(){
    this.router.navigate(['/addcandidate']);
    
  }

}
