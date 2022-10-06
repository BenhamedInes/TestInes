import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionQuatreComponent } from './section-quatre.component';

describe('SectionQuatreComponent', () => {
  let component: SectionQuatreComponent;
  let fixture: ComponentFixture<SectionQuatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionQuatreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionQuatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
