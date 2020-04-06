import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {LoginGuard} from './auth/guards/login.guard';
import {LogoutComponent} from './logout/logout.component';
import {HomeScreenComponent} from '../site/home-screen/home-screen.component';
import {AuthorizedGuard} from './auth/guards/authorized.guard';
import {ProfileScreenComponent} from './profile-screen/profile-screen.component';
import {RegisterScreenComponent} from './register-screen/register-screen.component';

export const USER_MANAGEMENT_ROUTES: Routes = [
  {
    path: 'user/register',
    component: RegisterScreenComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'user/login',
    component: LoginScreenComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'user/logout',
    component: LogoutComponent,
  },
  {
    path: 'user/profile',
    component: ProfileScreenComponent,
    canActivate: [AuthorizedGuard]
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(USER_MANAGEMENT_ROUTES)
  ]
})
export class UserManagementRoutingModule {
}
