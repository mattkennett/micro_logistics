import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSearchScreenComponent } from './stock-search-screen.component';

describe('StockSearchScreenComponent', () => {
  let component: StockSearchScreenComponent;
  let fixture: ComponentFixture<StockSearchScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSearchScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSearchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
