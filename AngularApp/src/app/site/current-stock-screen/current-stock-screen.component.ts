import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SiteUser, Stock} from '../../data-classes';
import {MicroLogisticsApiService} from '../../micro-logistics-api.service';
import {share} from 'rxjs/operators';

@Component({
  selector: 'app-current-stock-screen',
  templateUrl: './current-stock-screen.component.html',
  styleUrls: ['./current-stock-screen.component.css']
})
export class CurrentStockScreenComponent implements OnInit {
  @Input() stockRole: string;

  currentUser$: Observable<SiteUser>;
  stockTypes$: Observable<any>;
  currentStock$: Observable<any>;

  newStock = new Stock();

  addFormHeading: string;
  stockTypeMessage: string;
  addButtonMessage: string;
  noStockMessage: string;

  constructor(
    private apiService: MicroLogisticsApiService,
  ) {
  }

  ngOnInit(): void {
    this.stockTypes$ = this.apiService.getStockTypes().pipe(share());
    this.currentStock$ = this.apiService.getCurrentStock().pipe(share());
    this.currentUser$ = this.apiService.getUserProfile().pipe(share());

    if (this.stockRole === 'provide') {
      this.addFormHeading = 'Add Stock';
      this.stockTypeMessage = 'I Have';
      this.addButtonMessage = 'Add Stock';
      this.noStockMessage = 'No Stock Added Yet';
    } else {
      this.addFormHeading = 'Request Stock';
      this.stockTypeMessage = 'I Need';
      this.addButtonMessage = 'Request Stock';
      this.noStockMessage = 'No Stock Requested Yet';
    }
  }

  createStock(): void {
    if (this.stockRole === 'request') {
      this.newStock.count *= -1;
    }
    this.apiService.createStock(this.newStock.name, this.newStock.count).subscribe(
      response => {
        console.log(response);
        this.newStock = new Stock();
        this.currentStock$ = this.apiService.getCurrentStock().pipe(share());
      }
    );
  }

}
