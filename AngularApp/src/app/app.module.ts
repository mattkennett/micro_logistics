import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {Router} from '@angular/router';

import {MicroLogisticsRoutingModule} from './micro-logistics-routing.module';

import {AppComponent} from './app.component';

import {SiteModule} from './site/site.module';
import {UserManagementModule} from './user-management/user-management.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SiteModule,
    UserManagementModule,
    MicroLogisticsRoutingModule, // !!!!!  This module needs to be last!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {

  }
}
