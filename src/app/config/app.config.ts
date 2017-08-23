import { InjectionToken }   from '@angular/core';
import { AppConfig }        from '../interfaces/app.interface';

export const BASSET_CONFIG: AppConfig = {

  apiEndpoint: 'https://www.bassetgold.co.uk',
  phoneNumber: '0800 248 4555',
  BULLET_HALF: 'text-box col-xs-12 col-sm-7 col-md-8',
  BULLET_CENTER: 'text-box col-sm-12'
};

export let APP_CONFIG = new InjectionToken<AppConfig>( 'app.config' );
