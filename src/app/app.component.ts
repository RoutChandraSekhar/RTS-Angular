import { Component } from '@angular/core';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLogged : boolean=false;

  constructor(private router: Router) { 
   // this.router.navigate(['/home']);
   // this.isLogged=true;
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $(".fixed-sidebar .navigation-toggle a").removeClass("button-collapse")
    $(".fixed-sidebar .navigation-toggle a").addClass("reverse-icon")
    $(".fixed-sidebar .navigation-toggle a").click(function() {
        $("#slide-out").toggle(), $(".mn-inner").toggleClass("hidden-fixed-sidebar"), $(".mn-content").toggleClass("fixed-sidebar-on-hidden"), $(document).trigger("fixedSidebarClick")
    })

}

  isLoggedIn($event){
    this.isLogged=$event;
  //  alert(this.isLogged);
   // this.router.navigate(['/home'];
    }

}
