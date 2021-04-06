import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialfiveComponent } from './commercialfive.component';

describe('CommercialfiveComponent', () => {
  let component: CommercialfiveComponent;
  let fixture: ComponentFixture<CommercialfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
