import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundScreenComponent} from './not-found-screen/not-found-screen.component';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import {AuthorizedGuard} from '../user-management/auth/guards/authorized.guard';
import {IndexScreenComponent} from './index-screen/index-screen.component';
import {LoginGuard} from '../user-management/auth/guards/login.guard';

export const SITE_ROUTES: Routes = [
  {
    path: 'not_found',
    component: NotFoundScreenComponent
  },
  {
    path: 'index',
    component: IndexScreenComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'home',
    component: HomeScreenComponent,
    canActivate: [AuthorizedGuard],
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(SITE_ROUTES)
  ]
})
export class SiteRoutingModule {
}
