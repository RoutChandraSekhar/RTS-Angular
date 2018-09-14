import { Injectable } from '@angular/core';
import { Dashboard } from '../../models/dashboard/dashboard';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  Dashboard: Dashboard;
  private JobList = new BehaviorSubject<Dashboard>(this.Dashboard);
  cast = this.JobList.asObservable();
  constructor() { }

  UpdateApplicantAcademicProfile(Dashboard:Dashboard){
   
    this.JobList.next(Dashboard);
    //("***changed");
  }
}
