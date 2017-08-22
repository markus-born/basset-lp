import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LP30BaseComponent } from './lp-30-base.component';

const routes: Routes = [
  {
    path: '',
    component: LP30BaseComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
