export class CurrentApplicationStatus{
    ApplicationID: string;
    CandidateID: string;
    VacancyID: string;
    Title: string;
    Company: string;
    Dept_Name: string;
    Dept_Head: string;
    Division_Head: string;
    RequestStatus: string;
    constructor(
        ApplicationID: string,
        CandidateID: string,
        VacancyID: string,
        Title: string,
        Company: string,
        Dept_Name: string,
        Dept_Head: string,
        Division_Head: string,
        RequestStatus: string

    ){
        this.ApplicationID=ApplicationID;
        this.CandidateID=CandidateID;
        this.VacancyID=VacancyID;
        this.Title=Title;
        this.Company=Company;
        this.Dept_Name=Dept_Name;
        this.Dept_Head=Dept_Head;
        this.Division_Head=Division_Head;
        this.RequestStatus=RequestStatus;
    }
}