import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerecordsComponent } from './officerecords.component';

describe('OfficerecordsComponent', () => {
  let component: OfficerecordsComponent;
  let fixture: ComponentFixture<OfficerecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
