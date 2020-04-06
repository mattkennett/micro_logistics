import {Component, OnInit} from '@angular/core';
import {MicroLogisticsApiService} from '../../micro-logistics-api.service';
import {SiteUser, Stock} from '../../data-classes';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  currentUser$: Observable<SiteUser>;

  constructor(
    private apiService: MicroLogisticsApiService,
  ) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.apiService.getUserProfile().pipe(share());
  }
}
