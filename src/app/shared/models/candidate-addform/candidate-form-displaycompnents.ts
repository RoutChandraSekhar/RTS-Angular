export class CandidateAddFormVacancyList{
    VacancyID: string;
        Title: string;
    constructor(
        VacancyID: string,
        Title: string
    ){
       this.VacancyID=VacancyID;
       this.Title=Title;
       
    }
}

export class CandidateAddLocationList{
    locationID: string;
    Location: string;
    constructor(
        locationID: string,
        Location: string,
    ){
       this.locationID=locationID;
       this.Location=Location;
       
    }
}

export class CandidateReligionList{
    ReligionID: string;
    Religion: string;
    constructor(
    ReligionID: string,
    Religion: string
    ){
       this.Religion=Religion;
       this.ReligionID=ReligionID;
       
    }
}

export class CandidateCasteList{
    casteID: string;
    Caste: string;
    ReligionID: string;
    constructor(
        casteID: string,
        Caste: string,
        ReligionID: string
    ){
       this.casteID=casteID;
       this.Caste=Caste;
       this.ReligionID=ReligionID;
       
       
    }
    
}

export class CandidateLanguageList{
    LanguageID: string;
    Language: string;
    constructor(
        LanguageID: string,
        Language: string
    ){
       this.Language=Language;
      this.LanguageID=LanguageID;
       
    }
    
}


export class CandidateJobIndustryList{
    IndustryID: string;
    Industry: string;
    constructor(
    IndustryID: string,
    Industry: string,
    ){
       this.IndustryID=IndustryID;
      this.Industry=Industry;
       
    }
}

export class GenderList{
    GenderID: string;
    Gender: string;
    constructor(
    GenderID: string,
    Gender: string,
    ){
       this.GenderID=GenderID;
      this.Gender=Gender;
       
    }
}

export class CountryNationalityList{
    CountryID: number;
    Country: string;
    Nationality:string;
    constructor(
        CountryID: number,
        Country: string,
        Nationality:string,
    ){
    this.CountryID=CountryID;
    this.Country=Country;
    this.Nationality=Nationality;
       
    }
}