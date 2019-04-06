import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPermitsComponent } from './list-permits.component';

describe('ListPermitsComponent', () => {
  let component: ListPermitsComponent;
  let fixture: ComponentFixture<ListPermitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
