import { Component, OnInit } from '@angular/core';
import {trigger, transition, group, query, style,animate} from '@angular/animations';
declare var $:any;
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  animations: [
    trigger('routeAnimation', [
        transition('1 => 2, 2 => 3, *<=>*', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(100%)' }),{optional: true}),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }) , {optional: true}),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
                ],{optional: true}),
                // and now reveal the enter
                query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' })),{optional: true}),
            ] ),
        ]),
        transition('3 => 2, 2 => 1, 3=>1, *<=>*', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(-100%)' }),{optional: true}),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }),{optional: true}),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
                ],{optional: true}),
                // and now reveal the enter
                query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' })),{optional: true}),
            ]),
        ]),
    ])
]

})
export class MasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $(".fixed-sidebar .navigation-toggle a").removeClass("button-collapse")
    $(".fixed-sidebar .navigation-toggle a").addClass("reverse-icon")
    $(".fixed-sidebar .navigation-toggle a").click(function() {
    $("#slide-out").toggle(), $(".mn-inner").toggleClass("hidden-fixed-sidebar"), $(".mn-content").toggleClass("fixed-sidebar-on-hidden"), $(document).trigger("fixedSidebarClick")
    })
    $(".dropdown-button").dropdown()

}

  getDepth(outlet){
    return outlet.activatedRouteData['depth'];

  }

}
