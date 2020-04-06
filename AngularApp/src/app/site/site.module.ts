import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HomeScreenComponent} from './home-screen/home-screen.component';

import {NavTopComponent} from './navigation/nav-top/nav-top.component';
import {NotFoundScreenComponent} from './not-found-screen/not-found-screen.component';
import {SiteRoutingModule} from './site-routing.module';
import {MaterialModule} from '../material-module';
import { CurrentStockScreenComponent } from './current-stock-screen/current-stock-screen.component';
import { IndexScreenComponent } from './index-screen/index-screen.component';
import {UserManagementModule} from '../user-management/user-management.module';

@NgModule({
  declarations: [
    HomeScreenComponent,
    NavTopComponent,
    NotFoundScreenComponent,
    CurrentStockScreenComponent,
    IndexScreenComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    SiteRoutingModule,
    MaterialModule,
    UserManagementModule,
  ],
  exports: [
    NavTopComponent,
  ]
})
export class SiteModule {
  constructor() {
  }
}
