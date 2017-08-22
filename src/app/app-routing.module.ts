import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { LP30BaseComponent }      from './pages/lp30/lp-30-base.component';
import { Bad404Component }        from './pages/404/404.component';

export const routes: Routes = [

  { path: '', redirectTo: 'landing30', pathMatch: 'full' },
  { path: 'landing30', loadChildren: './pages/lp30/lp-30.module#Lp30BaseModule' },
  { path: 'landing30-2', loadChildren: './pages/secondary-lp30/secondary-lp30.module#SecondaryLp30Module' },
  { path: '404', component: Bad404Component },
  { path: '**', redirectTo:'404' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash:true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
