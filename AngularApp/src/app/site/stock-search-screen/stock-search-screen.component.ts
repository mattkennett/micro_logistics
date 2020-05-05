import { Component, OnInit } from '@angular/core';
import {MicroLogisticsApiService} from '../../micro-logistics-api.service';
import {Observable} from 'rxjs';
import {share, tap} from 'rxjs/operators';

@Component({
  selector: 'app-stock-search-screen',
  templateUrl: './stock-search-screen.component.html',
  styleUrls: ['./stock-search-screen.component.css']
})
export class StockSearchScreenComponent implements OnInit {
  searchResults$: Observable<any>;
  displayedColumns: string[] = ['stockType', 'zip', 'count', 'claim'];
  displayClaimDetails = false;
  errorMessage: string;
  claimAvailable: number;
  claimClaimed: number;
  claimStockId: number;

  constructor(
    private apiService: MicroLogisticsApiService
  ) { }

  ngOnInit(): void {
    this.searchResults$ = this.apiService.searchStock({}).pipe(share());
  }

  startClaim(stockId: number, count: number): void {
    this.displayClaimDetails = true;
    this.claimAvailable = count;
    this.claimStockId = stockId;
  }

  submitClaim(): void {
    this.apiService.createClaim(this.claimStockId, this.claimClaimed).subscribe(
        response => {
          if (response.status && response.status === 'success') {
            // This means the claim was created successfully
            this.claimClaimed = null;
            this.searchResults$ = this.apiService.searchStock({}).pipe(share());
          }
        }
    );
  }

}
