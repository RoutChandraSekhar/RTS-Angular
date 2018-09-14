export class ApplicantActivityLog{
    ActivityLogID: string;
        CandidateID: string;
        TypeID: string;
        LogType: string;
        ActivityByUserID: string;
        ActivityOnUserID: string;
        Message: string;
        ActivityOn: string;
        isInActive1: string;
        ActivityOnUserName: string;
        ActivityByUserName: string;
        ActivityOnUserFullName: string;
        ActivityByUserFullName: string;
        ActivityDocuments: ApplicantActivityDocument[];
    constructor( ActivityLogID: string,
        CandidateID: string,
        TypeID: string,
        LogType: string,
        ActivityByUserID: string,
        ActivityOnUserID: string,
        Message: string,
        ActivityOn: string,
        isInActive1: string,
        ActivityOnUserName: string,
        ActivityByUserName: string,
        ActivityOnUserFullName: string,
        ActivityByUserFullName: string,
        ActivityDocuments: ApplicantActivityDocument[]
    ){
        this.CandidateID=CandidateID
        this.TypeID=TypeID
        this.LogType=LogType
        this.ActivityByUserID=ActivityByUserID
        this.ActivityOnUserID=ActivityOnUserID
        this.Message=Message
        this.ActivityOn=ActivityOn
        this.isInActive1=isInActive1
        this.ActivityOnUserName=ActivityOnUserName
        this.ActivityByUserName=ActivityByUserName
        this.ActivityOnUserFullName=ActivityOnUserFullName
        this.ActivityByUserFullName=ActivityByUserFullName
        this.ActivityDocuments=ActivityDocuments
    }
}

export class ApplicantActivityDocument{
    ActivityLogID: string;
    ActivityOnUserID: string;
    CandidateID: string;
    ActivityLogDocumentID: string;
    Title: string;
    Description: string;
    FileName: string;
    FileLocation: string;
    DateUploaded: string;
    ActivityLogDocumentisInActive: string;
    activitylogIsInActive: string;
    constructor(
        ActivityLogID: string,
        ActivityOnUserID: string,
        CandidateID: string,
        ActivityLogDocumentID: string,
        Title: string,
        Description: string,
        FileName: string,
        FileLocation: string,
        DateUploaded: string,
        ActivityLogDocumentisInActive: string,
        activitylogIsInActive: string
    ){
        this.ActivityLogID=ActivityLogID
        this.ActivityOnUserID=ActivityOnUserID
        this.CandidateID=CandidateID
        this.ActivityLogDocumentID=ActivityLogDocumentID
        this.Title=Title
        this.Description=Description
        this.FileName=FileName
        this.FileLocation=FileLocation
        this.DateUploaded=DateUploaded
        this.ActivityLogDocumentisInActive=ActivityLogDocumentisInActive
        this.activitylogIsInActive=activitylogIsInActive
    }
}