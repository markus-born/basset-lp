/* tslint:disable:member-ordering no-unused-variable */
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf }                 from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { HttpModule }        from '@angular/http';
import { CommonModule }      from '@angular/common';

@NgModule({
  imports:      [ CommonModule, BrowserModule, HttpModule ],
  declarations: [  ],
  exports:      [  ],
  providers:    [  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [

      ]
    };
  }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
