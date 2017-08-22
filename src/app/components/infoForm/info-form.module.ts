import { NgModule }             from '@angular/core';
import { NouisliderModule }     from 'ng2-nouislider';
import { CheckboxModule }       from 'primeng/components/checkbox/checkbox';

import { BassetSharedModule }   from '../../shared/shared.module';
import { InfoFormComponent }    from './info-form.component';
import { InfoFormService }      from './info-form.service';
import { InfoFormBl }            from './info-form.bl';

@NgModule({
    imports: [
      BassetSharedModule,
      NouisliderModule,
      CheckboxModule
    ],
    exports: [
      InfoFormComponent
    ],
    declarations: [
      InfoFormComponent
    ],
    providers: [
      InfoFormService,
      InfoFormBl
    ],
})
export class InfoFormModule { }
