import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }
  ngAfterViewInit(){
    // $('.collapsible').collapsible();
      $("select").select2();
    $('select').material_select();
   }

  

}
