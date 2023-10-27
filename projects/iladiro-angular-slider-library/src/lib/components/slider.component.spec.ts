import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IladiroAngularSliderComponent } from './slider.component';

describe('IladiroAngularSliderComponent', () => {
  let component: IladiroAngularSliderComponent;
  let fixture: ComponentFixture<IladiroAngularSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IladiroAngularSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IladiroAngularSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
