import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinetorScreenComponent } from './coordinetor-screen.component';

describe('CoordinetorScreenComponent', () => {
  let component: CoordinetorScreenComponent;
  let fixture: ComponentFixture<CoordinetorScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinetorScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinetorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
