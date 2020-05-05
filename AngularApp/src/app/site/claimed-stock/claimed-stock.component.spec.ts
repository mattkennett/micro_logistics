import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimedStockComponent } from './claimed-stock.component';

describe('ClaimedStockComponent', () => {
  let component: ClaimedStockComponent;
  let fixture: ComponentFixture<ClaimedStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimedStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimedStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
