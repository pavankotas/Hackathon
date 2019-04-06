import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTicketsComponent } from './history-tickets.component';

describe('HistoryTicketsComponent', () => {
  let component: HistoryTicketsComponent;
  let fixture: ComponentFixture<HistoryTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
