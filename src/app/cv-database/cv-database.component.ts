import { Component, OnInit } from '@angular/core';
import {trigger, transition, group, query, style,animate} from '@angular/animations';

@Component({
  selector: 'app-cv-database',
  templateUrl: './cv-database.component.html',
  styleUrls: ['./cv-database.component.css'],
  animations: [
    trigger('routeAnimation', [
        transition('1 => 2, 2 => 3, 1=>3, 1=> 4, 2=>4, 3=>4, *<=>*', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(100%)' }),{optional: true}),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }),{optional: true}),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
                ],{optional: true}),
                // and now reveal the enter
                query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' })),{optional: true}),
            ]),
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
export class CvDatabaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.className ='mailbox loaded';
  
  }
  getDepth(outlet){
    return outlet.activatedRouteData['depth'];

  }



}
