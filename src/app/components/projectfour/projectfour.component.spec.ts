import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectfourComponent } from './projectfour.component';

describe('ProjectfourComponent', () => {
  let component: ProjectfourComponent;
  let fixture: ComponentFixture<ProjectfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
