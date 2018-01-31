import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationlistsComponent } from './presentationlists.component';

describe('PresentationlistsComponent', () => {
  let component: PresentationlistsComponent;
  let fixture: ComponentFixture<PresentationlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
