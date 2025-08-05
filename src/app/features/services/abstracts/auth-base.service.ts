import { Injectable } from "@angular/core";
import { ApplicantForRegisterRequest } from "../../models/requests/auth/applicant-for-register-request";
import { Observable } from "rxjs";

import { TokenModel } from "../../models";

@Injectable()
export abstract class AuthBaseService {
    abstract registerApplicant(applicantforRegisterRequest: ApplicantForRegisterRequest)
        : Observable<TokenModel>
}