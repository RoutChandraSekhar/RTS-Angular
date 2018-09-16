import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  LoadCandidateURL(){
    let CurrentURL= this.router.url;
    if (CurrentURL.indexOf("candidates/")>=0){
      this.router.navigateByUrl("/candidatesx");
    }else{
      this.router.navigateByUrl("/candidates");
    }
  }

}
