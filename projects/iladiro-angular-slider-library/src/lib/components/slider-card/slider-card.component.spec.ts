import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IladiroAngularSliderCardComponent } from './slider-card.component';

describe('IladiroAngularSliderCardComponent', () => {
  let component: IladiroAngularSliderCardComponent;
  let fixture: ComponentFixture<IladiroAngularSliderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IladiroAngularSliderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IladiroAngularSliderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
