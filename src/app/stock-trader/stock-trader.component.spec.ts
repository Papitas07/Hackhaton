import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTraderComponent } from './stock-trader.component';

describe('StockTraderComponent', () => {
  let component: StockTraderComponent;
  let fixture: ComponentFixture<StockTraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
