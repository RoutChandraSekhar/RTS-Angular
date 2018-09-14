export class ApplicantPrefferedLocation{
    CandidateID: string;
    LocationID: string;
    Location: string;
    cityID: string;
    city: string;
    CountryID: string;
    Country: string;
    constructor(
        CandidateID: string,
        LocationID: string,
        Location: string,
        cityID: string,
        city: string,
        CountryID: string,
        Country: string,
    ){
        this.CandidateID=CandidateID;
        this.LocationID=LocationID;
        this.Location=Location;
        this.cityID=cityID;
        this.city=city;
        this.CountryID=CountryID;
        this.Country=Country;
        
    }
}