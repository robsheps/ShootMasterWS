import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizecalculatorComponent } from './prizecalculator.component';

describe('PrizecalculatorComponent', () => {
  let component: PrizecalculatorComponent;
  let fixture: ComponentFixture<PrizecalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizecalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
