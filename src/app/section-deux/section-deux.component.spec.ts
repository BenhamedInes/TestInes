import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDeuxComponent } from './section-deux.component';

describe('SectionDeuxComponent', () => {
  let component: SectionDeuxComponent;
  let fixture: ComponentFixture<SectionDeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDeuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
