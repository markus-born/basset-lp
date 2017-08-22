import { InjectionToken }   from '@angular/core';
import { AppConfig }        from '../interfaces/app.interface';

export const BASSET_CONFIG: AppConfig = {

  apiEndpoint: 'https://www.bassetgold.co.uk',
  phoneNumber: '0800 248 4555',
  BULLET_HALF: 'text-box col-sm-7 col-xs-12 col-lg-7',
  BULLET_CENTER: 'text-box col-sm-12 col-md-10 col-lg-10 col-lg-offset-1 col-md-offset-1'
};

export let APP_CONFIG = new InjectionToken<AppConfig>( 'app.config' );
