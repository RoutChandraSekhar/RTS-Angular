export class ApplicantBasicInfo{
    CandidateID: string;
    CandidateDisplayID: string;
    cvTitle: string;
    FullName: string;
    Gender: string;
    CandidateNationality: string;
    isFavourite: string;
    isBanned: string;
    ProfilePic: string;
    LanguagesKnown:string;
    constructor(CandidateID:string, CandidateDisplayID:string,cvTitle:string,FullName:string,Gender:string, CandidateNationality:string,isFavourite:string, isBanned:string, ProfilePic:string,LanguagesKnown:string){
        this.CandidateID=CandidateID;
        this.CandidateDisplayID=CandidateDisplayID;
        this.cvTitle=cvTitle;
        this.FullName=FullName;
        this.Gender=Gender;
        this.CandidateNationality=CandidateNationality;
        this.isFavourite=isFavourite;
        this.isBanned=isBanned;
        this.ProfilePic=ProfilePic;
        this.LanguagesKnown=LanguagesKnown;
    }
}