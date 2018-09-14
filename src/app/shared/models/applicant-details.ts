import { Education } from "./education";
import { ApplicantBasicInfo } from "./applicant-basic-info";
import { ApplicantShortlistableJobs } from "./applicant-shortlistable-jobs";
import { ApplicantAcademicProfile } from "./applicant-academic-profile";
import { ApplicantEmploymentProfile } from "./applicant-employment-profile";
import { ApplicantPrefferedLocation } from "./applicant-preffered-location";
import { ApplicantJobIndustry } from "./applicant-job-industry";
import { ApplicantDetailsInfo } from "./applicant-details-info";

export class ApplicantDetails{
    CandidateBasicInfo: ApplicantDetailsInfo;
    ShortlistableJobs: ApplicantShortlistableJobs[];
    AcademicProfile: ApplicantAcademicProfile[];
    EmploymentProfile: ApplicantEmploymentProfile[];
    CandidatePrefferedLocation: ApplicantPrefferedLocation[];
    CandidateJobIndustry: ApplicantJobIndustry[];
    constructor(
        CandidateBasicInfo: ApplicantDetailsInfo,
        ShortlistableJobs: ApplicantShortlistableJobs[],
        AcademicProfile: ApplicantAcademicProfile[],
        EmploymentProfile: ApplicantEmploymentProfile[],
        CandidatePrefferedLocation: ApplicantPrefferedLocation[],
        CandidateJobIndustry: ApplicantJobIndustry[]

    )
                {
                
                    this.CandidateBasicInfo=CandidateBasicInfo;
                    this.ShortlistableJobs=ShortlistableJobs;
                    this.AcademicProfile=AcademicProfile;
                    this.EmploymentProfile=EmploymentProfile;
                    this.CandidatePrefferedLocation=CandidatePrefferedLocation;
                    this.CandidateJobIndustry=CandidateJobIndustry;
                    
                }

}