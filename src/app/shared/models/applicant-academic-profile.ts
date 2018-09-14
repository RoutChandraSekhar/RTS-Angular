export class ApplicantAcademicProfile{
        CandidateID: string;
        EducationQualificationID: string;
        Qualification: string;
        Institute: string;
        CompletionYear: string;
        ExamResult: string;
        candidateInactive: string;
        educationHistoryInactive: string;
        EducationQualificationInactive: string;
    constructor(
        CandidateID: string,
        EducationQualificationID: string,
        Qualification: string,
        Institute: string,
        CompletionYear: string,
        ExamResult: string,
        candidateInactive: string,
        educationHistoryInactive: string,
        EducationQualificationInactive: string

    ){
        this.CandidateID=CandidateID;
        this.EducationQualificationID=EducationQualificationID;
        this.Qualification=Qualification;
        this.Institute=Institute;
        this.CompletionYear=CompletionYear;
        this.ExamResult=ExamResult;
        this.candidateInactive=candidateInactive;
        this.educationHistoryInactive=educationHistoryInactive;
        this.EducationQualificationInactive=EducationQualificationInactive;
        
    }
}