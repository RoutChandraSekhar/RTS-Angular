export class ApplicantListResultInfo{
    TotalCandidates: string;
    TotalInCurrentResult: string;
    CurrentPage: string;
    isFilterApplied: string;
    constructor(
        TotalCandidates: string,
        TotalInCurrentResult: string,
        CurrentPage: string,
        isFilterApplied: string

    ){
        this.TotalCandidates=TotalCandidates;
        this.TotalInCurrentResult=TotalInCurrentResult;
        this.isFilterApplied=isFilterApplied;
    }
}