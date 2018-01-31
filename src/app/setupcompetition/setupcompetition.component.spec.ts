import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {SetupcompetitionComponent} from './setupcompetition.component';

describe('SetupcompetitionComponent', () => {
  let component: SetupcompetitionComponent;
  let fixture: ComponentFixture<SetupcompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupcompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupcompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
