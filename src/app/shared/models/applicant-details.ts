import { Education } from "./education";

export class ApplicantDetails{
    ApplicantID : number;
    ApplicantName: string;
    ApplicantTitle : string;
    Gender : string;
    Pic : string;
    Education : Education[];
    constructor(ApplicantID : number, ApplicantName : string, 
                ApplicantTitle: string, Gender: string, Pic: string, Education:Education[] )
                {
                
                    this.ApplicantID=ApplicantID;
                    this.ApplicantName=ApplicantName;
                    this.ApplicantTitle=ApplicantTitle;
                    this.Gender=Gender;
                    this.Education=Education;
                }

}