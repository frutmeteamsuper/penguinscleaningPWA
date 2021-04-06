import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialfourComponent } from './commercialfour.component';

describe('CommercialfourComponent', () => {
  let component: CommercialfourComponent;
  let fixture: ComponentFixture<CommercialfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
