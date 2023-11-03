import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IladiroAngularSlide } from '../../interfaces/slide.interface';

@Component({
  selector: 'iladiro-angular-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class IladiroAngularSliderCardComponent implements OnChanges {

  @Input() slide!: IladiroAngularSlide;
  @Input() index!: number;
  @Input() activeIndex!: number;
  @Input() first!: boolean;
  @Input() last!: boolean;
  @Input() direction!: string;
  @Input() clickableSlide!: boolean;
  @Output() clickSlideEvent = new EventEmitter();

  activeClass!: string;

  clickOnSlide() {
    this.clickSlideEvent.emit()
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['activeIndex'].currentValue === this.index) {      
      this.activeClass = 'active';
    } else {
      this.activeClass = '';
    }
  }

}
