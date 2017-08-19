import { NgModule }                           from '@angular/core';
import { CommonModule }                       from '@angular/common';
// import { ViewportModule }                     from 'angular2-viewport';
import {
  FormsModule,
  ReactiveFormsModule}                        from '@angular/forms';
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';

import { BassetHeaderComponent }              from '../app/components/header/header.component';
import { BgFooterComponent }                  from '../app/components/footer/footer.component';
import { YellowBtnComponent }                 from '../app/components/yellow-btn/yellow-btn.component';
import { BlockHalfBulletsComponent }          from '../app/components/block-half-bullets/block-half-bullets.component';
import { BlockTestimonialComponent }          from '../app/components/block-testimonial/block-testimonial.component';
import { BlockCenteredTextComponent }         from '../app/components/block-centered-text/block-centered-text.component';
import { BlockCenteredBulletsComponent }      from '../app/components/block-centered-bullets/block-centered-bullets.component';

const importExportDeclarationArray = [
  BgFooterComponent,
  BassetHeaderComponent,
  YellowBtnComponent,
  BlockHalfBulletsComponent,
  BlockTestimonialComponent,
  BlockCenteredTextComponent,
  BlockCenteredBulletsComponent
];

@NgModule({
  imports:      [
    CommonModule,
    // ViewportModule,
    BrowserAnimationsModule
  ],
  declarations: importExportDeclarationArray,
  exports:      [ ...importExportDeclarationArray,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ]
})
export class BassetSharedModule {



}

