export class ApplicantEmploymentProfile{
    WorkHistoryID: string;
    CandidateID: string;
    Designation: string;
    Employer: string;
    ReportingTo: string;
    FromDate: string;
    ToDate: string;
    isLatestJob: string;
    GrossMonthlySalary: string;
    ReasonForLeaving: string;
    constructor(
        WorkHistoryID: string,
        CandidateID: string,
        Designation: string,
        Employer: string,
        ReportingTo: string,
        FromDate: string,
        ToDate: string,
        isLatestJob: string,
        GrossMonthlySalary: string,
        ReasonForLeaving: string

    ){
      
        this.WorkHistoryID=WorkHistoryID;
        this.CandidateID=CandidateID;
        this.Designation=Designation;
        this.Employer=Employer;
        this.ReportingTo=ReportingTo;
        this.FromDate= FromDate;
        this.ToDate=ToDate;
        this.isLatestJob=isLatestJob;
        this.GrossMonthlySalary=GrossMonthlySalary;
        this.ReasonForLeaving=ReasonForLeaving;

    }
}