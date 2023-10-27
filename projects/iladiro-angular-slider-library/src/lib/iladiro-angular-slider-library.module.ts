import { NgModule } from '@angular/core';
import { SliderComponent } from './components/slider.component';
import { SliderPaginatorComponent } from './components/slider-paginator/slider-paginator.component';
import { SliderCardComponent } from './components/slider-card/slider-card.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SliderComponent,
    SliderPaginatorComponent,
    SliderCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent,
    SliderPaginatorComponent,
    SliderCardComponent
  ]
})
export class IladiroAngularSliderLibraryModule { }
