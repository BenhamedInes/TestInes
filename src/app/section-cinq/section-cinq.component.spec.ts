import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCinqComponent } from './section-cinq.component';

describe('SectionCinqComponent', () => {
  let component: SectionCinqComponent;
  let fixture: ComponentFixture<SectionCinqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCinqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCinqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
