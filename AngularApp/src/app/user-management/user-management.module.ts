import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthModule} from './auth/auth.module';

import {LoginScreenComponent} from './login-screen/login-screen.component';
import {LogoutComponent} from './logout/logout.component';
import {ProfileScreenComponent} from './profile-screen/profile-screen.component';
import {UserManagementRoutingModule} from './user-management-routing.module';
import {MaterialModule} from '../material-module';
import { RegisterScreenComponent } from './register-screen/register-screen.component';

@NgModule({
    declarations: [
        LoginScreenComponent,
        LogoutComponent,
        ProfileScreenComponent,
        RegisterScreenComponent,
    ],
  exports: [
    RegisterScreenComponent,
    LoginScreenComponent
  ],
    imports: [
        FormsModule,
        HttpClientModule,
        AuthModule,
        CommonModule,
        UserManagementRoutingModule,
        MaterialModule
    ]
})
export class UserManagementModule {
}
