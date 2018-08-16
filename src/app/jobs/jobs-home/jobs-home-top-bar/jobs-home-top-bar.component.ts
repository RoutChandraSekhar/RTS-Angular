import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-jobs-home-top-bar',
  templateUrl: './jobs-home-top-bar.component.html',
  styleUrls: ['./jobs-home-top-bar.component.css']
})
export class JobsHomeTopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        $("select").select2();
       $('select').material_select();
  }

}
