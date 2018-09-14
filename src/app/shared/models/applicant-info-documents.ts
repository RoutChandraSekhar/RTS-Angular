export class ApplicantInfoDocuments
{
    CandidateID :string;
    ApplicationID:string;
    CandidateName:string;
    RequestID:string;
  
    constructor(
      CandidateID:string,
      ApplicationID:string,
      CandidateName:string,
      RequestID:string

    )
    {
       this.CandidateID=CandidateID;
       this.ApplicationID=ApplicationID;
       this.CandidateName=CandidateName;
       this.RequestID=RequestID;
    }
}