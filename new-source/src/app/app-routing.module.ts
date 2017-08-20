import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { LP30BaseComponent }      from './pages/lp30/lp-30-base.component';
import { Bad404Component }        from './pages/404/404.component';

export const routes: Routes = [

  { path: '', redirectTo: 'landing30', pathMatch: 'full' },
  { path: 'landing30', component: LP30BaseComponent },
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
