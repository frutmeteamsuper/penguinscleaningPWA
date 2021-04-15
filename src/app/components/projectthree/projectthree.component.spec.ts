import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectthreeComponent } from './projectthree.component';

describe('ProjectthreeComponent', () => {
  let component: ProjectthreeComponent;
  let fixture: ComponentFixture<ProjectthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
