import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadcardsComponent } from './squadcards.component';

describe('SquadcardsComponent', () => {
  let component: SquadcardsComponent;
  let fixture: ComponentFixture<SquadcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
