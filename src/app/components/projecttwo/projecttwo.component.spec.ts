import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecttwoComponent } from './projecttwo.component';

describe('ProjecttwoComponent', () => {
  let component: ProjecttwoComponent;
  let fixture: ComponentFixture<ProjecttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjecttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
