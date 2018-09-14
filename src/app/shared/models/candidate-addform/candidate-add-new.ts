export class CandidateAddNew{
    cvTitle: string;
    Objective: string;
    RefNo: string;
    ExternalRefNo: string;
    NameFirst: string;
    NameMiddle: string;
    NameLast: string;
    cvFIle: string;
    DateOfBirth: string;
    Gender: string;
    ReligionID: number;
    CasteID: number;
    MaritialStatus: string;
    NoOfDependant: number;
    Nationality: number;
    CountryOfResidence: number;
    CityID: number;
    VisaStatusID: number;
    NoticePeriod: string;
    Email: string;
    uPassword: string;
    MobileCountryCode: string;
    MobileNo: string;
    Address: string;
    PoBox: string;
    FaxCountryCode: string;
    FaxNo: string;
    isRelativeAtCompany: string;
    RelativeDetails: string;
    WhyShurooq: string;
    WorkExperienceTotal: number;
    WorkExperienceUAE: number;
    WorkExperienceNonUAE: number;
    RelevantExperience: number;
    PrefferedOtherLocations: string;
    EmployeeProfile: EmployeeProfile[];
    EducationProfile: EducationProfile[];
    PositionsApplied: PositionsApplied[];
    LanguagesKnown: LanguagesKnown[];
    PrefferedLocation: PrefferedLocation[];
    JobIndustry: JobIndustry[];
}

export class EmployeeProfile {
    Designation: string;
    Employer: string;
    ReportingTo: string;
    ReasonForLeaving: string;
    FromDate: string;
    ToDate: string;
    isLatestJob: string;
    GrossMonthlySalary: string;
    CountryID: string;
    Description: string;
}

export class EducationProfile {
    EducationQualificationID: number;
    Institute: string;
    CompletionYear: string;
    ExamResult: string;
    CountryID: number;
    Description: string;
}

export class PositionsApplied {
    VacancyID: number;
}

export class LanguagesKnown {
    LanguageID: number;
    Proficiency: number;
}

export class PrefferedLocation {
    LocationID: number;
}

export class JobIndustry {
    IndustryID: number;
}