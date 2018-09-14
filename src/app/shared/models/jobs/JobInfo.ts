export class JobInfo{
    VacancyID: string;
    Title: string;
    OpenPositions: string;
    DesignationID: string;
    DepartmentID: string;
    Department: string;
    EntityID: string;
    Entity: string;
    isPublished: string;
    isClosed: string;
    VacancyStatusID: string;
    VacancyStatus: string;
    PublishedDate: string;
    JobApplicationsInfo: JobApplicationsInfo[];
    constructor(
        VacancyID: string,
        Title: string,
        OpenPositions: string,
        DesignationID: string,
        DepartmentID: string,
        Department: string,
        EntityID: string,
        Entity: string,
        isPublished: string,
        isClosed: string,
        VacancyStatusID: string,
        VacancyStatus: string,
        PublishedDate: string,
        JobApplicationsInfo: JobApplicationsInfo[]
    ){
        this.VacancyID=VacancyID;
        this.Title=Title;
        this.OpenPositions=OpenPositions;
        this.DesignationID=DesignationID;
        this.DepartmentID=DepartmentID;
        this.Department=Department;
        this.EntityID=EntityID;
        this.Entity=Entity;
        this.isPublished=isPublished;
        this.isClosed=isClosed;
        this.VacancyStatusID=VacancyStatusID;
        this.VacancyStatus=VacancyStatus;
        this.PublishedDate= PublishedDate;
        this.JobApplicationsInfo=JobApplicationsInfo;
        
    }
}


export class JobApplicationsInfo{
    ListingSummaryID: string;
    GroupName: string;
    DisplayText: string;
    VacancyID: string;
    GroupValue: string;
    DisplayOrder: string;
    constructor(
        ListingSummaryID: string,
        GroupName: string,
        DisplayText: string,
        VacancyID: string,
        GroupValue: string,
        DisplayOrder: string,
    ){
       this.ListingSummaryID=ListingSummaryID;
       this.GroupName=GroupName;
       this.DisplayText=DisplayText;
       this.VacancyID=VacancyID;
       this.GroupValue=GroupValue;
       this.DisplayOrder=DisplayOrder;
    }
}