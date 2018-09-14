export class ApplicantPastApplicationStatus{
    VacancyID: string;
    Title: string;
    OpeningDate: string;
    Entity: string;
    Department: string;
    constructor(
        VacancyID: string,
        Title: string,
        OpeningDate: string,
        Entity: string,
        Department: string,
    ){
        this.VacancyID=VacancyID;
        this.Title=Title;
        this.OpeningDate=OpeningDate;
        this.Entity=Entity;
        this.Department=Department;
    }
}