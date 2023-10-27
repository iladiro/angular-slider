import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IladiroAngularSliderPaginatorComponent } from './slider-paginator.component';

describe('IladiroAngularSliderPaginatorComponent', () => {
  let component: IladiroAngularSliderPaginatorComponent;
  let fixture: ComponentFixture<IladiroAngularSliderPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IladiroAngularSliderPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IladiroAngularSliderPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
