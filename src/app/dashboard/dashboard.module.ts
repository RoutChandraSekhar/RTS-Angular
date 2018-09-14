import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { DashboardComponent } from './dashboard.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [FormsModule,CommonModule
  ],
  declarations: [DashboardComponent],
  exports:[DashboardComponent]
})
export class DashboardModule { }
