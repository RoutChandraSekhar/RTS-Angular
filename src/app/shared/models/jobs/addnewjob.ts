export class JobsAddNewJob {
    ProcessID: number;
    OpenPositions: string;
    DesignationID: string;
    JobTitle: string;
    JobDescription: string;
    JobSkill: string;
    JobDuty: string;
    EducationInfo: string;
    NationalityInfo: string;
    RequestedByUserID: string;
    RequestingDepartmentID: string;
    RequestingEntityID: string;
    PositionTypeID: string;
    RefNo: string;
    RequestedOn: string;
    TargetJoiningDate: string;
    JobInterviewerList: JobInterviewerList[];
}

export class JobInterviewerList {
    InterviewerUserID: string;
    isMandatory: boolean;
    isEvaluator: boolean;
    Description: string;
}


