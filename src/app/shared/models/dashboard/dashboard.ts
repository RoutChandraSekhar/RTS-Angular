export class Dashboard{
    TotalCandidates: string;
    ActiveJobs: string;
    ActiveApplicants: string;
    ChartTicks:string;
    ChartData:string;
    DashboardChart:DashboardChart[];
    RecentCandidates:RecentCandidates[];
    
constructor(
    TotalCandidates: string,
    ActiveJobs: string,
    ActiveApplicants: string,
    ChartTicks:string,
    ChartData:string,
    DashboardChart:DashboardChart[],
    RecentCandidates:RecentCandidates[]

){
   this.TotalCandidates=TotalCandidates;
   this.ActiveJobs=ActiveJobs;
   this.ActiveApplicants=ActiveApplicants;
   this.DashboardChart=DashboardChart;
   this.RecentCandidates=RecentCandidates;
   this.ChartTicks=ChartTicks;
   this.ChartData=ChartData;
}
}

export class DashboardChart{
    ApplicationDate: string;
    Candidates: string;
    constructor(
        ApplicationDate: string,
        Candidates: string
    ){
        this.ApplicationDate=ApplicationDate;
        this.Candidates=Candidates;
    }
}

export class RecentCandidates{
    CandidateID:string;
    FullName: string;
    Gender: string;
    UpdatedOn: string;
    PostedOn: string;
    PostedAgo: string;
    constructor(
    CandidateID:string,
    FullName: string,
    Gender: string,
    UpdatedOn: string,
    PostedOn: string,
    PostedAgo: string
    ){
        this.CandidateID=CandidateID;
        this.FullName=FullName;
        this.Gender=Gender;
        this.UpdatedOn=UpdatedOn;
        this.PostedOn=PostedOn;
        this.PostedAgo=PostedAgo;
    }

}