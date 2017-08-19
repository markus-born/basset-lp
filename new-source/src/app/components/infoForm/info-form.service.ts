import { Injectable, Inject }       from '@angular/core';
import { Http }                     from "@angular/http";

import { APP_CONFIG }               from '../../../config/app.config';
import { AppConfig }                from '../../../interfaces/app.interface';

@Injectable()
export class InfoFormService {

    private FORM_URL: string = '/backend/infopack';
    private VALIDATE_EMAIL_URL: string = '/LP/validation/validate-email.php?email=';
    private VALIDATE_PHONE_URL: string = '/LP/validation/validate-phone.php?phone=';

    constructor(@Inject(APP_CONFIG) private config: AppConfig,
                private http:Http
    ) {

      console.log(this.config.apiEndpoint)

    }

    validatePhone(phone) {

      console.log(phone)

      return this.http.get(`${this.config.apiEndpoint}/${this.VALIDATE_PHONE_URL}${phone}`)

    }

}
