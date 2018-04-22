import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScreenComponent } from './team-screen.component';

describe('TeamScreenComponent', () => {
  let component: TeamScreenComponent;
  let fixture: ComponentFixture<TeamScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
