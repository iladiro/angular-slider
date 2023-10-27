import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IladiroAngularSliderLibraryComponent } from './iladiro-angular-slider-library.component';

describe('IladiroAngularSliderLibraryComponent', () => {
  let component: IladiroAngularSliderLibraryComponent;
  let fixture: ComponentFixture<IladiroAngularSliderLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IladiroAngularSliderLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IladiroAngularSliderLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
