import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialtwoComponent } from './commercialtwo.component';

describe('CommercialtwoComponent', () => {
  let component: CommercialtwoComponent;
  let fixture: ComponentFixture<CommercialtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
