import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SiteUser, Stock} from './data-classes';
import {URL_ROOT} from './globals';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

const URL_REGISTER = URL_ROOT + '/api/register/';
const URL_PROFILE = URL_ROOT + '/api/profile/';
const URL_NEW_PASSWORD = URL_ROOT + '/api/update_password/';

const URL_STOCK_TYPE = URL_ROOT + '/api/stock_type/';
const URL_CURRENT_STOCK = URL_ROOT + '/api/current_stock/';
const URL_STOCK = URL_ROOT + '/api/stock/';
const URL_STOCK_SEARCH = URL_ROOT + '/api/stock/search/';

@Injectable({
  providedIn: 'root'
})
export class MicroLogisticsApiService {
  private currentUser: SiteUser;

  constructor(
    private http: HttpClient,
  ) {
    this.currentUser = null;
  }

  registerUser(newUser: SiteUser): Observable<any> {
    return this.http.post(URL_REGISTER, {
      password: newUser.password,
      email: newUser.email,
      first_name: newUser.firstName,
      last_name: newUser.lastName,
      provides_stock: newUser.providesStock,
      needs_stock: newUser.needsStock,
      street_1: newUser.street1,
      street_2: newUser.street2,
      city: newUser.city,
      county: newUser.county,
      state: newUser.state,
      zip: newUser.zip,
      phone: newUser.phone,
    });
  }

  getUserProfile(): Observable<SiteUser> {
    if (this.currentUser) {
      return of(this.currentUser);
    } else {
      return this.http.get(URL_PROFILE).pipe(
        tap(response => {
          if (response['id']) {
            this.currentUser = response;
          }
        }),
      );
    }
  }

  updateUserPassword(newPassword: string): Observable<any> {
    return this.http.post(URL_NEW_PASSWORD, {new_password: newPassword});
  }

  getStockTypes(): Observable<any> {
    return this.http.get(URL_STOCK_TYPE);
  }

  getCurrentStock(): Observable<any> {
    return this.http.get(URL_CURRENT_STOCK).pipe(
      tap(response => {
      }));
  }

  createStock(name: string, count: number): Observable<any> {
    return this.http.post(URL_STOCK, {
      name,
      count,
    });
  }

  searchStock(searchParameters: object): Observable<any> {
    return this.http.post(URL_STOCK_SEARCH, searchParameters).pipe(
      tap(
      result => {
        console.log(result);
      }
      )
    );
  }
}
