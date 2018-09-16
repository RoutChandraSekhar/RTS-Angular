    
    
    export class CandidateFilter{
            UserID: string;
            isGetType: string;
            FilterType: string;
            RequestType: string;
            PageNo: string;
            Count: string;
            Filter: Filter;

            constructor(
                UserID: string,
                isGetType: string,
                FilterType: string,
                RequestType: string,
                PageNo: string,
                Count: string,
                Filter: Filter
            ){
                this.UserID=UserID;
                this.isGetType=isGetType;
                this.FilterType=FilterType;
                this.RequestType=RequestType;
                this.PageNo=PageNo;
                this.Count=Count;
                this.Filter=Filter;
    
    
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
        VisaStatusList:string;
        showOnlyFavourites: boolean;
        showOnlyBanned: boolean;
        StateGroupID:string;
        constructor(
            VacanyID: string,
            Keywords: string,
            JobIndustryIDList: string,
            Experience: string,
            Age: string,
            CandidateStatusID: string,
            Gender: string,
            NationalityID: string,
            Education: string,
            LanguageSkills: string,
            VisaStatusList:string,
            showOnlyFavourites: boolean,
            showOnlyBanned: boolean,
            StateGroupID:string
    
        ){
            this.VacanyID=VacanyID;
            this.Keywords=Keywords;
            this.JobIndustryIDList=JobIndustryIDList;
            this.Experience=Experience;
            this.Age=Age;
            this.CandidateStatusID=CandidateStatusID;
            this.Gender=Gender;
            this.NationalityID=NationalityID;
            this.Education=Education;
            this.LanguageSkills=LanguageSkills;
            this.VisaStatusList=VisaStatusList;
            this.showOnlyFavourites=showOnlyFavourites;
            this.showOnlyBanned=showOnlyBanned;
            this.StateGroupID=StateGroupID;
    
        }
    }