import { Injectable, Inject } from '@angular/core';
import { Applicant } from '../models/applicant';
import {HttpClient} from  "@angular/common/http";
import {Observable} from 'rxjs';
import { ApplicantDetails } from '../models/applicant-details';
  
@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  ApplicantsList : Applicant[];

  
 public ApplicantDetails : ApplicantDetails[];
  constructor(@Inject(HttpClient) private http: HttpClient) {

   }


   /*
  public GetApplicantsList()
  {
    this.ApplicantsList=[
      new Applicant(15100,"Abdul Shabbeer NM","Web Developer","Male","",""),
      new Applicant(15101,"Mohammed Farhan","Web Developer","Male","",""),
      new Applicant(15102,"Hamed Al Herbawi","Web Developer","Male","",""),
      new Applicant(15103,"Mahendra Kakumanu","Web Developer","Male","",""),
      new Applicant(15104,"Firos Pattayi","Web Developer","Male","",""),
      new Applicant(15105,"Samer Khader Haddad","Web Developer","Male","","")
    ];
    return this.ApplicantsList

  }

  */

  public GetAllApplicants():Observable<Applicant[]>
  {
    return this.http.get<Applicant[]>("http://core.sharjahfdiforum.ae/api/values",{responseType:"json"});
  
   
  }

  /*
  public GetApplicantDetailsStatic(){
  this.ApplicantDetails=[
      new ApplicantDetails(1501,"Abdul Shabbeer","Application Developer","Male","1.jpg",
    []
    )
  ]
  }

  */

  public GetApplicantDetails():Observable<ApplicantDetails[]>
  {
    return this.http.get<ApplicantDetails[]>("http://core.sharjahfdiforum.ae/api/values/1",{responseType:"json"});
  }

  
}
