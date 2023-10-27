import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPaginatorComponent } from './slider-paginator.component';

describe('SliderPaginatorComponent', () => {
  let component: SliderPaginatorComponent;
  let fixture: ComponentFixture<SliderPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
