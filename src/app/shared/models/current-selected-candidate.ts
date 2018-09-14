export class CurrentSelectedCandidate{
    CandidateID: string;
    constructor(
        CandidateID: string
    ){  
        this.CandidateID=CandidateID;     
    }
}

export class CurrentSelectedCandidateCVInfo{
    CandidateID: string;
    cvMimeType : string;
    cvFile : string;
    constructor(
        CandidateID: string,
        cvMimeType : string,
        cvFile : string
    ){  
        this.CandidateID=CandidateID;
        this.cvMimeType=cvMimeType;
        this.cvFile=cvFile;     
    }
}