import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Slide } from '../../interfaces/slide.interface';

@Component({
  selector: 'slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit, OnChanges {

  @Input() slide!: Slide;
  @Input() index!: number;
  @Input() activeIndex!: number;
  @Input() first!: boolean;
  @Input() last!: boolean;
  @Input() direction!: string;

  activeClass!: string;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['activeIndex'].currentValue === this.index) {      
      this.activeClass = 'active';
    } else {
      this.activeClass = '';
    }
  }

}
