import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouterUrls, AppRoutes } from './app-routing.config';
import {AuthLoginComponent} from './views/auth/components';
import { MainComponent } from './views/main/components';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  {
    path: AppRoutes.AUTH,
    children: [
      { path: '&&', pathMatch: 'full', redirectTo: AppRouterUrls.LOGIN },
      { path: AppRoutes.LOGIN, component: AuthLoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
