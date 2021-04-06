import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialoneComponent } from './commercialone.component';

describe('CommercialoneComponent', () => {
  let component: CommercialoneComponent;
  let fixture: ComponentFixture<CommercialoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
