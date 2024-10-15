import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitEntryComponent } from './visit-entry.component';

describe('VisitEntryComponent', () => {
  let component: VisitEntryComponent;
  let fixture: ComponentFixture<VisitEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
