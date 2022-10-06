import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionUnComponent } from './section-un.component';

describe('SectionUnComponent', () => {
  let component: SectionUnComponent;
  let fixture: ComponentFixture<SectionUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionUnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
