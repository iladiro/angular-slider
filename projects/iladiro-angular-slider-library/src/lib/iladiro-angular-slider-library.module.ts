import { NgModule } from '@angular/core';
import { IladiroAngularSliderComponent } from './components/slider.component';
import { IladiroAngularSliderPaginatorComponent } from './components/slider-paginator/slider-paginator.component';
import { IladiroAngularSliderCardComponent } from './components/slider-card/slider-card.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    IladiroAngularSliderComponent,
    IladiroAngularSliderPaginatorComponent,
    IladiroAngularSliderCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IladiroAngularSliderComponent,
    IladiroAngularSliderPaginatorComponent,
    IladiroAngularSliderCardComponent
  ]
})
export class IladiroAngularSliderLibraryModule { }
