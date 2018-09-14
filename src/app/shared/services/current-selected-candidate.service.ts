import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentSelectedCandidate } from '../models/current-selected-candidate';
@Injectable({
  providedIn: 'root'
})
export class CurrentSelectedCandidateService {
  CurrentSelectedCandidate: CurrentSelectedCandidate=new CurrentSelectedCandidate("");
  private JobList = new BehaviorSubject<CurrentSelectedCandidate>(this.CurrentSelectedCandidate);
  cast = this.JobList.asObservable();
  constructor() { }

  UpdateCurrentSelectedCandidate(CurrentSelectedCandidate:CurrentSelectedCandidate){
   
    this.JobList.next(CurrentSelectedCandidate);
  //  alert("updated");
    //("***changed");
  }
}
