import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {LoginGuard} from './guards/login.guard';
import {AuthorizedGuard} from './guards/authorized.guard';
import {AuthService} from './services/auth.service';
import {TokenInterceptor} from './token.interceptor';

@NgModule({
  declarations: [],
  providers: [
    LoginGuard,
    AuthService,
    AuthorizedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule {
}
