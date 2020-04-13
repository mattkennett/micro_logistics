import { Component, OnInit } from '@angular/core';
import {MicroLogisticsApiService} from '../../micro-logistics-api.service';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

@Component({
  selector: 'app-stock-search-screen',
  templateUrl: './stock-search-screen.component.html',
  styleUrls: ['./stock-search-screen.component.css']
})
export class StockSearchScreenComponent implements OnInit {
  searchResults$: Observable<any>;
  displayedColumns: string[] = ['stockType', 'zip', 'count', 'claim'];

  constructor(
    private apiService: MicroLogisticsApiService
  ) { }

  ngOnInit(): void {
    this.searchResults$ = this.apiService.searchStock({}).pipe(share());
  }

}
