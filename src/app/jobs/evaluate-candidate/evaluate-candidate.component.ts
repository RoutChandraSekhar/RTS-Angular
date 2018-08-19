import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-evaluate-candidate',
  templateUrl: './evaluate-candidate.component.html',
  styleUrls: ['./evaluate-candidate.component.css']
})
export class EvaluateCandidateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // $('.collapsible').collapsible();
      $("select").select2();
    $('select').material_select();
   }
}
