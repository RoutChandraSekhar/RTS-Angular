export class CandidateRequest
{
    UserID: number;
    isGetType: string;
    FilterType: string;
    RequestType: string;
    PageNo: string;
    Count: string;
    Filter: Filter;
    constructor(UserID:number, isGetType:string, FilterType:string,RequestType:string, PageNo:string, Count:string,Filter:Filter)
    {
        this.UserID=UserID;
        this.isGetType=isGetType;
        this.FilterType=FilterType;
        this.RequestType=RequestType;
        this.PageNo=PageNo;
        this.Count=this.Count;
        this.Filter=this.Filter;
    }
}

export class Filter {
    VacanyID: string;
    Keywords: string;
    JobIndustryIDList: string;
    Experience: string;
    Age: string;
    CandidateStatusID: string;
    Gender: string;
    NationalityID: string;
    Education: string;
    LanguageSkills: string;
    showOnlyFavourites: boolean;
    showOnlyBanned: boolean;
}