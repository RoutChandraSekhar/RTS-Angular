import { Injectable, Inject } from '@angular/core';
import {HttpClient,HttpHeaders} from  "@angular/common/http";
import {RequestOptions} from "@angular/http";
import{Observable} from 'rxjs';
import { Vacancy } from '../models/vacancy';
import { environment } from '../../../environments/environment';
import { ApplicantDetails } from '../models/applicant-details';
import { map } from 'rxjs/operators';
import {  CandidateFilter } from '../models/searchfilter';



@Injectable({
  providedIn: 'root'
})
export class CandidateService {
 
ApiEndPoint : string = environment.ApiEndPoint;
headers={
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

  constructor(@Inject(HttpClient) private http : HttpClient) { 
    this.displayHeaders();
  }
  displayHeaders(){
    let header = new HttpHeaders();
    header.set('apikey','mango');
    header.set('userkey','apple');
    header.set('consumerkey','good');
    header.set('token','123');
    header.set('userid','1');
    return header;

  }

  /*
  public getCandidates(){
    return this.http.post<any[]>(this.ApiEndPoint + "api/candidate/list",
    {
      
        "UserID":2,
        "isGetType": "Active",
        "FilterType": "none",
        "RequestType": "candidates",
        "PageNo": "1",
        "Count": "100",
          "Filter":  
                  {  
                     "VacanyID":"0",
                     "Keywords":"",
                     "JobIndustryIDList":"",
                     "Experience":"0",
                     "Age":"",
                     "CandidateStatusID":"",
                     "Gender":"",
                     "NationalityID":"",
                     "Education":"",
                     "LanguageSkills":"",
                     "showOnlyFavourites":false,
                     "showOnlyBanned" :true	
                  }
      
    });
   
  }
*/

public getCandidates12(FilterOptions : CandidateFilter ){
 
  return this.http.post<any[]>(this.ApiEndPoint + "api/candidate/list",
  {
      
    "UserID":FilterOptions.UserID,
    "isGetType": "" + FilterOptions.isGetType + "",
    "FilterType": "" + FilterOptions.FilterType + "",
    "RequestType": "" + FilterOptions.RequestType + "",
    "PageNo": "" + FilterOptions.PageNo + "",
    "Count": "" + FilterOptions.Count + "",
      "Filter":  
              {  
                 "VacanyID":"" + FilterOptions.Filter.VacanyID + "",
                 "Keywords":"" + FilterOptions.Filter.Keywords + "",
                 "JobIndustryIDList":"" + FilterOptions.Filter.JobIndustryIDList + "",
                 "Experience":"" + FilterOptions.Filter.Experience + "",
                 "Age":"" + FilterOptions.Filter.Age + "",
                 "CandidateStatusID":"" + FilterOptions.Filter.CandidateStatusID + "",
                 "Gender":"" + FilterOptions.Filter.Gender + "",
                 "NationalityID":"" + FilterOptions.Filter.NationalityID+ "" ,
                 "Education":"" + FilterOptions.Filter.Education + "",
                 "LanguageSkills":"" + FilterOptions.Filter.LanguageSkills + "",
                 "showOnlyFavourites": FilterOptions.Filter.showOnlyFavourites ,
                 "showOnlyBanned" : FilterOptions.Filter.showOnlyBanned	
              }
  
});

}


public getCandidates(FilterOptions : CandidateFilter ){
 let headers = new HttpHeaders();
 let body =JSON.stringify(FilterOptions)
 console.log(body);
  headers.append('Content-Type', 'application/json');
  //return this.http.post<any[]>(this.ApiEndPoint + "api/candidate/list",body,  this.headers)
  return this.http.post(this.ApiEndPoint + "api/candidate/list",body,  this.headers)
}


public CreateCandidate(Candidate:string) {
  let headers = new HttpHeaders();
   headers.append('Content-Type', 'application/json');
   return this.http.post(this.ApiEndPoint + "api/candidate/create",Candidate,  this.headers)
 }
 
public CreateNewVacancy(Vacancy:string ){
  let headers = new HttpHeaders();
   headers.append('Content-Type', 'application/json');
   return this.http.post<any[]>(this.ApiEndPoint + "api/jobs/addvacancy",Vacancy,  this.headers)
 }
 

/*
  public getCandidateDetails(CandidateID :number) :Observable<any>{
    return this.http.get<ApplicantDetails>(this.ApiEndPoint + "api/candidate/" + CandidateID,{responseType:"json"});
  }

  */

 public getCandidateDetails(CandidateID :number){
  return this.http.get<any>(this.ApiEndPoint + "api/candidate/" + CandidateID,{responseType:"json"});
}

  public GetCandidateAddFormDisplayComponents() {
    return this.http.get<any>(this.ApiEndPoint + "api/candidate/CandidateAddFormDisplayComponents",{responseType:"json"});
  }

  public GetJobAddFormDisplayComponents(){
    return this.http.get<any>(this.ApiEndPoint + "api/jobs/JobAddFormDisplayComponents",{responseType:"json"});
  }


  public LoginUser(UserName :string, Password: String){
    //alert(this.ApiEndPoint + "api/common/loginsystemuser");
    return this.http.get(this.ApiEndPoint + "api/common/loginsystemuser?username="+ UserName +"&password=" + Password,{responseType:"json"});
  }


  public GetDashboard(DashboardID :string, ChartDailyPlotDisplayCount: String): Observable<any>{
    return this.http.get(this.ApiEndPoint + "api/common/getdashboard/" + DashboardID +"?ChartDailyPlotDisplayCount=" + ChartDailyPlotDisplayCount,{responseType:"json"});
  }

  public PublishUnpublishJob(VacancyID :number, isPublish: string): Observable<any>{
    return this.http.get<any>(this.ApiEndPoint + "api/jobs/PublishJob/" + VacancyID +"/" + isPublish,{responseType:"json"});
  }

  public CloseJob(VacancyID :number, isPublish: string): Observable<any>{
    console.log(this.ApiEndPoint + "api/jobs/CloseJob/" + VacancyID +"/" + isPublish);
    return this.http.get(this.ApiEndPoint + "api/jobs/CloseJob/" + VacancyID +"/" + isPublish,{responseType:"json"});
  }

  public GetApplicationStatusDetails(CandidateID :number){
    return this.http.get<any>(this.ApiEndPoint + "api/candidate/applicationstatusdetails/" + CandidateID,{responseType:"json"});
  }


  public GetVacancyDetails(VacancyID :number): Observable<any>{
    return this.http.get<any>(this.ApiEndPoint + "api/jobs/vacancydetails/" + VacancyID,{responseType:"json"});
  }

  public GetActiveJobApplications(CandidateID :number){
    return this.http.get<any>(this.ApiEndPoint + "api/candidate/ActiveJobApplications/" + CandidateID,{responseType:"json"});
  }

  public GetCandidateParticularApplicationStatus(ApplicationID :number){
    return this.http.get<any>(this.ApiEndPoint + "api/candidate/CandidateApplicationStatus/" + ApplicationID,{responseType:"json"});
  }
  public GetCandidateParticularApplicationTimeLine(ApplicationID :number){
    return this.http.get<any>(this.ApiEndPoint + "api/candidate/timeline/" + ApplicationID,{responseType:"json"});
  }

  public GetCandidateDocumentsActive(CandidateID :number){
    return this.http.get<any>(this.ApiEndPoint + "api/candidate/candidatesocuments/" + CandidateID,
    {responseType:"json"});
  }
  


  public GetActivityLog(CandidateID :number){
    return this.http.get<any>(this.ApiEndPoint + "api/candidate/activitylog/" + CandidateID,{responseType:"json"});
  }

  public GetJobListingSummary(isClosed:boolean){
    return this.http.get<any>(this.ApiEndPoint + "api/jobs/listingsummary?isClosed="+ isClosed ,{responseType:"json"});
  }

  public GetRequestDetailsGroupWise(GroupID:number){
    return this.http.get<any>(this.ApiEndPoint + "api/request/groupdetails/2/"+ GroupID ,{responseType:"json"});
  }

  uploadCV(payload: FormData) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.ApiEndPoint + "api/documentupload/uploadCV?apikey=123", payload, { headers: headers, responseType: 'text' })
}


uploadDocuments(payload: FormData) {
  let headers: HttpHeaders = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post(this.ApiEndPoint + "api/documentupload/uploadDocuments?apikey=123", payload, { headers: headers, responseType: 'text' })
}




  public getCategories():Observable<Vacancy[]>
  {
    //this.http.request
    let myHeaders = new HttpHeaders().set('apikey','mango');
    myHeaders.set('userkey','apple');
    /*myHeaders.set('apikey','mango');
    myHeaders.set('userkey','apple');
    myHeaders.set('consumerkey','good');
    myHeaders.set('token','123');
    myHeaders.set('userid','1');
    let myParams = new URLSearchParams();
    myParams.append('id', "1");*/
   // let options = new RequestOptions({ headers: myHeaders, params: myParams });

   
    return this.http.get<Vacancy[]>("http://api.planetshabeer.com/api/candidate/ActiveVacancies",{responseType:"json"});
  }
}
