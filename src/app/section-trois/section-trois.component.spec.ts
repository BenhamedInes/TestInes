import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTroisComponent } from './section-trois.component';

describe('SectionTroisComponent', () => {
  let component: SectionTroisComponent;
  let fixture: ComponentFixture<SectionTroisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTroisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
