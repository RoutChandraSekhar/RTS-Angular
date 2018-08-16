export class Applicant
{
    applicantID :number;
    applicantName:string;
    applicantTitle:string;
    gender:string;
    pic:string;
    education:string;
    constructor(ApplicantID:number, ApplicantName:string, ApplicantTitle:string,Gender:string, Pic:string, Education:string)
    {
        this.applicantID=ApplicantID;
        this.applicantName=ApplicantName;
        this.applicantTitle=ApplicantTitle;
        this.gender=Gender;
        this.pic=Pic;
        this.education=this.education;
    }
}