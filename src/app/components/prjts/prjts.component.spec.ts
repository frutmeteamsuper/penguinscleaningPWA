import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjtsComponent } from './prjts.component';

describe('PrjtsComponent', () => {
  let component: PrjtsComponent;
  let fixture: ComponentFixture<PrjtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrjtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
