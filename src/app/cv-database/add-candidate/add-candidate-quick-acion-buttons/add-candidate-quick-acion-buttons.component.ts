import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-candidate-quick-acion-buttons',
  templateUrl: './add-candidate-quick-acion-buttons.component.html',
  styleUrls: ['./add-candidate-quick-acion-buttons.component.css']
})
export class AddCandidateQuickAcionButtonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  EvaluateCandiate(){
    this.router.navigate(['/evaluatecandidate']);
   }
}
