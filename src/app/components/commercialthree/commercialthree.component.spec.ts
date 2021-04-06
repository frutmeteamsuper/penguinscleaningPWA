import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialthreeComponent } from './commercialthree.component';

describe('CommercialthreeComponent', () => {
  let component: CommercialthreeComponent;
  let fixture: ComponentFixture<CommercialthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
