import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadsheetsComponent } from './squadsheets.component';

describe('SquadsheetsComponent', () => {
  let component: SquadsheetsComponent;
  let fixture: ComponentFixture<SquadsheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadsheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadsheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
