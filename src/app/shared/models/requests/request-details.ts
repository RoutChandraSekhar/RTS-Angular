export class RequestList{
        RequestID: string;
        StateID: string;
        RequesterUserID: string;
        CurrentStateID: string;
        isCurrentStatePartialUpdated:string;
        CurrentStateGroupID: string;
        GroupName: string;
        ApplicationID: string;
        VacancyID: string;
        LastUpdatedDate: string;
        CandidateID: string;
        CandidateDisplayID: string;
        FullName: string;
        Gender: string;
        ProcessID: string;
        OpenPositions: string;
        Title: string;
        isPublished: string;
        isClosed: string;
        StatusID: string;
        OpeningDate: string;
        DepartmentID: string;
        Department: string;
        EntityID: string;
        Entity: string;
        ApplicationDate: string;
        StateName: string;
        ProfilePic: string;
        DisplayName: string;
        DisplayAlias: string;
        ParialUpdateDisplayName: string;
    RequestDetails: RequestDetails[];
    constructor(
        RequestID: string,
        StateID: string,
        RequesterUserID: string,
        CurrentStateID: string,
        isCurrentStatePartialUpdated:string,
        CurrentStateGroupID: string,
        GroupName: string,
        ApplicationID: string,
        VacancyID: string,
        LastUpdatedDate: string,
        CandidateID: string,
        CandidateDisplayID: string,
        FullName: string,
        Gender: string,
        ProcessID: string,
        OpenPositions: string,
        Title: string,
        isPublished: string,
        isClosed: string,
        StatusID: string,
        OpeningDate: string,
        DepartmentID: string,
        Department: string,
        EntityID: string,
        Entity: string,
        ApplicationDate: string,
        StateName: string,
        ProfilePic: string,
        DisplayName: string,
        DisplayAlias: string,
        ParialUpdateDisplayName: string,
        RequestDetails: RequestDetails[]

    ){
        this.RequestID=RequestID;
        this.StateID=StateID;
        this.RequesterUserID=RequesterUserID;
        this.CurrentStateID=CurrentStateID;
        this.isCurrentStatePartialUpdated=isCurrentStatePartialUpdated;
        this.CurrentStateGroupID=CurrentStateGroupID;
        this.GroupName=GroupName;
        this.ApplicationID=ApplicationID;
        this.VacancyID=VacancyID;
        this.LastUpdatedDate=LastUpdatedDate;
        this.CandidateID=CandidateID;
        this.CandidateDisplayID=CandidateDisplayID;
        this.FullName=FullName;
        this.Gender=Gender;
        this.ProcessID=ProcessID;
        this.OpenPositions=OpenPositions;
        this.Title=Title;
        this.isPublished=isPublished;
        this.isClosed=isClosed;
        this.StatusID=StatusID;
        this.OpeningDate=OpeningDate;
        this.DepartmentID=DepartmentID;
        this.Department=Department;
        this.EntityID=EntityID;
        this.Entity=Entity;
        this.ApplicationDate=ApplicationDate;
        this.StateName=StateName;
        this.ProfilePic=ProfilePic;
        this.DisplayName=DisplayName;
        this.DisplayAlias=DisplayAlias;
        this.ParialUpdateDisplayName=ParialUpdateDisplayName;
        
    this.RequestDetails=RequestDetails;
    }
}


export class RequestDetails{
    RequestID: string;
        ApplicationID: string;
        DateRequested: string;
        RequesterUserID: string;
        CurrentStateID: string;
        TransitionID: string;
        ProcessID: string;
        NextStateID: string;
        ETAMins: string;
        isDisplayAlias: string;
        ActionID: string;
        DisplayOrder: string;
        ActionName: string;
        DisplayName: string;
        DisplayAlias: string;
        DisplayIcon: string;
        DisplayImage: string;
        Tooltip: string;
        Description: string;
        ActionTypeID: string;
        Name: string;
        StateGroupID: string;
        GroupName: string;
        ModalID: string;
        ModalTitle: string;
        ModalText: string;
        ModalType: string;
        ModalName: string;
        ShowCancelButton: string;
        ConfirmButtonText: string;
        CancelButtonText: string;
        SuccessMesssageTitle: string;
        SuccessText: string;
        SuccessIcon: string;
        ShowFailureMessage: string;
        FailureMessageTitle: string;
        FailureMessageText: string;
        FailureMessageIcon: string;
    constructor(
        RequestID: string,
        ApplicationID: string,
        DateRequested: string,
        RequesterUserID: string,
        CurrentStateID: string,
        TransitionID: string,
        ProcessID: string,
        NextStateID: string,
        ETAMins: string,
        isDisplayAlias: string,
        ActionID: string,
        DisplayOrder: string,
        ActionName: string,
        DisplayName: string,
        DisplayAlias: string,
        DisplayIcon: string,
        DisplayImage: string,
        Tooltip: string,
        Description: string,
        ActionTypeID: string,
        Name: string,
        StateGroupID: string,
        GroupName: string,
        ModalID: string,
        ModalTitle: string,
        ModalText: string,
        ModalType: string,
        ModalName: string,
        ShowCancelButton: string,
        ConfirmButtonText: string,
        CancelButtonText: string,
        SuccessMesssageTitle: string,
        SuccessText: string,
        SuccessIcon: string,
        ShowFailureMessage: string,
        FailureMessageTitle: string,
        FailureMessageText: string,
        FailureMessageIcon: string
    ){
        this.RequestID=RequestID
        this.ApplicationID=ApplicationID
        this.DateRequested=DateRequested
        this.RequesterUserID=RequesterUserID
        this.CurrentStateID=CurrentStateID
        this.TransitionID=TransitionID
        this.ProcessID=ProcessID
        this.NextStateID=NextStateID
        this.ETAMins=ETAMins
        this.isDisplayAlias=isDisplayAlias
        this.ActionID=ActionID
        this.DisplayOrder=DisplayOrder
        this.ActionName=ActionName
        this.DisplayName=DisplayName
        this.DisplayAlias=DisplayAlias
        this.DisplayIcon=DisplayIcon
        this.DisplayImage=DisplayImage
        this.Tooltip=Tooltip
        this.Description=Description
        this.ActionTypeID=ActionTypeID
        this.Name=Name
        this.StateGroupID=StateGroupID
        this.GroupName=GroupName
        this.ModalID=ModalID
        this.ModalTitle=ModalTitle
        this.ModalText=ModalText
        this.ModalType=ModalType
        this.ModalName=ModalName
        this.ShowCancelButton=ShowCancelButton
        this.ConfirmButtonText=ConfirmButtonText
        this.CancelButtonText=CancelButtonText
        this.SuccessMesssageTitle=SuccessMesssageTitle
        this.SuccessText=SuccessText
        this.SuccessIcon=SuccessIcon
        this.ShowFailureMessage=ShowFailureMessage
        this.FailureMessageTitle=FailureMessageTitle
        this.FailureMessageText=FailureMessageText
        this.FailureMessageIcon=FailureMessageIcon
        
    }
}