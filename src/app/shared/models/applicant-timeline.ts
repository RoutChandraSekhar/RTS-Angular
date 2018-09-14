export class ApplicantTimeline{
        TimeLineID: string;
        TransactionByUser: string;
        TransasctionDate: string;
        ApplicationID: string;
        Message: string;
        CandidateID: string;
        TimeLineUpdateTypeID: string;
        UpdateType: string;
        ImageURL: string;
        Icon: string;
        isUseImage: string;
        TransactionUserPersonName: string;
        TransactionUserName: string;
        TransactionUserDepartment: string;
        TransactionUserDesignation: string;
        CandidateFullName: string;
        TimelineDocuments:TimelineDocuments= new TimelineDocuments("","","","","","","","","","","","","","","","","")
    constructor(
        TimeLineID: string,
        TransactionByUser: string,
        TransasctionDate: string,
        ApplicationID: string,
        Message: string,
        CandidateID: string,
        TimeLineUpdateTypeID: string,
        UpdateType: string,
        ImageURL: string,
        Icon: string,
        isUseImage: string,
        TransactionUserPersonName: string,
        TransactionUserName: string,
        TransactionUserDepartment: string,
        TransactionUserDesignation: string,
        CandidateFullName: string,
       // TimelineDocuments:TimelineDocuments

    ){
        this.TimeLineID=TimeLineID;
        this.TransactionByUser=TransactionByUser;
        this.TransasctionDate=TransasctionDate;
        this.ApplicationID=ApplicationID;
        this.Message=Message;
        this.CandidateID=CandidateID;
        this.TimeLineUpdateTypeID=TimeLineUpdateTypeID;
        this.UpdateType=UpdateType;
        this.ImageURL=ImageURL;
        this.Icon=Icon;
        this.isUseImage=isUseImage;
        this.TransactionUserPersonName=TransactionUserPersonName;
        this.TransactionUserName=TransactionUserName;
        this.TransactionUserDepartment=TransactionUserDepartment;
        this.TransactionUserDesignation=TransactionUserDesignation;
        this.CandidateFullName=CandidateFullName;
       // this.TimelineDocuments=TimelineDocuments;
        
    }
}

export class TimelineDocuments{
    TimeLineID: string;
    CandidateDocumentID: string;
    isInActive: string;
    jobapplicationtimelineisInActive: string;
    TransactionByUser: string;
    TransasctionDate: string;
    CandidateID: string;
    CandidateDocumentTypeID: string;
    Title: string;
    Description: string;
    FileName: string;
    FileLocation: string;
    isAlwaysDisplay: string;
    candidatedocumentisInActive: string;
    DocumentType: string;
    candidatedocumenttypeisInActive: string;
    ApplicationID: string;

    constructor(
    TimeLineID: string,
    CandidateDocumentID: string,
    isInActive: string,
    jobapplicationtimelineisInActive: string,
    TransactionByUser: string,
    TransasctionDate: string,
    CandidateID: string,
    CandidateDocumentTypeID: string,
    Title: string,
    Description: string,
    FileName: string,
    FileLocation: string,
    isAlwaysDisplay: string,
    candidatedocumentisInActive: string,
    DocumentType: string,
    candidatedocumenttypeisInActive: string,
    ApplicationID: string
    ){
        this.TimeLineID=TimeLineID;
        this.CandidateDocumentID=CandidateDocumentID;
        this.isInActive=isInActive;
        this.jobapplicationtimelineisInActive=jobapplicationtimelineisInActive;
        this.TransactionByUser=TransactionByUser;
        this.TransasctionDate=TransasctionDate;
        this.CandidateID=CandidateID;
        this.CandidateDocumentTypeID=CandidateDocumentTypeID;
        this.Title=Title;
        this.Description=Description;
        this.FileName=FileName;
        this.FileLocation=FileLocation;
        this.isAlwaysDisplay=isAlwaysDisplay;
        this.candidatedocumentisInActive=candidatedocumentisInActive;
        this.DocumentType=DocumentType;
        this.candidatedocumenttypeisInActive=candidatedocumenttypeisInActive;
        this.ApplicationID=ApplicationID;
        
    }
}