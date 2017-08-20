import { InjectionToken }   from '@angular/core';
import { AppConfig }        from '../interfaces/app.interface';

export const BASSET_CONFIG: AppConfig = {

  apiEndpoint: 'https://www.bassetgold.co.uk',
  phoneNumber: '0800 248 4555'

};

export let APP_CONFIG = new InjectionToken<AppConfig>( 'app.config' );
