import {Component, OnInit} from '@angular/core';
import {MicroLogisticsApiService} from '../../micro-logistics-api.service';
import {tap} from "rxjs/operators";

@Component({
    selector: 'app-claimed-stock',
    templateUrl: './claimed-stock.component.html',
    styleUrls: ['./claimed-stock.component.css']
})
export class ClaimedStockComponent implements OnInit {
    public stockTypeNames: string[]

    constructor(
        private apiService: MicroLogisticsApiService,
    ) {
        this.stockTypeNames = [];
    }

    ngOnInit(): void {
        this.apiService.listCurrentClaims().pipe(
            tap(
            (result) => {
                result.forEach(element => {
                    console.log(element['stock_type']);
                    this.stockTypeNames.push(this.apiService.getStockTypeName(element['stock_type']));
                });

                console.log(this.stockTypeNames);
            })
        );
    }
}
