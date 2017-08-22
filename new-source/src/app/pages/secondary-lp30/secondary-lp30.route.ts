import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondaryLP30Component } from './secondary-lp30.component';

const routes: Routes = [
  {
    path: '',
    component: SecondaryLP30Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
