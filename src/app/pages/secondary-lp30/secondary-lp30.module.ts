import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BassetSharedModule }   from '../../shared/shared.module';
import { InfoFormModule }       from '../../components/infoForm/info-form.module';
import { routing } from './secondary-lp30.route';
import { SecondaryLP30Component } from './secondary-lp30.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    BassetSharedModule,
    InfoFormModule
  ],
  exports: [
    SecondaryLP30Component,
    CommonModule,
    FormsModule,
    BassetSharedModule,
    InfoFormModule
  ],
  declarations: [
    SecondaryLP30Component
  ]
})
export class SecondaryLp30Module {}
