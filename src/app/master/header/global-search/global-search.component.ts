import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  onKey(event) {
    if(event.keyCode == 13){
   
      console.log(event.target.value);

      var currentURL = this.router.url;
      if( currentURL.indexOf('candidatesx') >= 0){
        this.router.navigateByUrl('/candidates?mode=globalsearch&keyword=' + event.target.value);
      } else{
        this.router.navigateByUrl('/candidatesx?mode=globalsearch&keyword=' + event.target.value);
      }

     
   
    }

  }

}
