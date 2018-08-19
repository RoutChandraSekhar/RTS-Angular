import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.css']
})
export class AddVacancyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
   // $('.collapsible').collapsible();
     $("select").select2();
   $('select').material_select();
  }


}
