import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStockScreenComponent } from './current-stock-screen.component';

describe('CurrentStockScreenComponent', () => {
  let component: CurrentStockScreenComponent;
  let fixture: ComponentFixture<CurrentStockScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentStockScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentStockScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
