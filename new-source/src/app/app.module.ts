import { NgModule }                   from '@angular/core';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';

import { AppComponent }               from './app.component';
import { AppRoutingModule }           from './app-routing.module';
import { CoreModule }                 from './core/core.module';

import { Bad404Component }            from './pages/404/404.component';
import { Lp30BaseModule }             from './pages/lp30/lp-30.module';
import { APP_CONFIG, BASSET_CONFIG }  from './config/app.config';


@NgModule({
  declarations: [
    AppComponent,
    Bad404Component
  ],
  imports: [
    CoreModule.forRoot(),
    AppRoutingModule,
    Lp30BaseModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: BASSET_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
