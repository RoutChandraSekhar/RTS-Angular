import { Injectable } from '@angular/core';
import { CandidatePageInfo } from '../../models/pages/candidate-page-info';

@Injectable({
  providedIn: 'root'
})
export class SelectedCandidatePageService {

  constructor() { }

  SetCandidatePageInfo(CandidatePageInfo:CandidatePageInfo){
    let a =CandidatePageInfo
    localStorage.setItem("CurrentCandidatePageInfo", JSON.stringify(a));
}

GetCandidatePageInfo(): CandidatePageInfo{
  return JSON.parse(localStorage.getItem("CurrentCandidatePageInfo"))
 
}
}
