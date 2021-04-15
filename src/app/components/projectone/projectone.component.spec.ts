import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectoneComponent } from './projectone.component';

describe('ProjectoneComponent', () => {
  let component: ProjectoneComponent;
  let fixture: ComponentFixture<ProjectoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
