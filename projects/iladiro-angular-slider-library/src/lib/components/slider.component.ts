import { ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChild, ViewChildren, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';

// Interfaces
import { IladiroAngularSlide } from '../interfaces/slide.interface';
import { IladiroAngularConfigSlider } from '../interfaces/config-slider.interface';


@Component({
  selector: 'iladiro-angular-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class IladiroAngularSliderComponent implements OnChanges, AfterViewInit {

  @Input() slideList: IladiroAngularSlide[] = [];
  @Input() customClass = '';
  @Input() spaceBetweenSlide = 12;

  // CardConfig
  @Input() maxVisibleSlides!: number;

  // Paginator config
  @Input() paginatorTemplate!: string;
  @Input() paginatorArrowStart!: string;
  @Input() paginatorArrowEnd!: string;
  @Input() paginatorArrowNext!: string;
  @Input() paginatorArrowPrev!: string;
  @Input() paginatorMaxVisiblePages!: number;

  @Output() goNextEvent = new EventEmitter();
  @Output() goPrevEvent = new EventEmitter();
  @Output() goFirstEvent = new EventEmitter();
  @Output() goLastEvent = new EventEmitter();

  activeIndex = 0;
  currentDirection!: string;
  slideWidth = 455;
  wrapperWidth!: number;

  @ViewChild('sliderMain') sliderMain!: ElementRef;
  @ViewChild('sliderWrap') sliderWrap!: ElementRef;
  @ViewChildren('item') items!:  QueryList<any>;
  @ContentChild('customTemplate') customTemplate!: TemplateRef<any>;
  
  constructor(public cdRef: ChangeDetectorRef) { }

  setSlideByIndex(config: IladiroAngularConfigSlider): void {    
    this.items.forEach(item => {  
      const translate = item.nativeElement.clientWidth * config.index;  
      item.nativeElement.attributes['style'].value = this.calcTranslation(config.index, this.wrapperWidth, translate);
    });

    this.activeIndex = config.index;
    this.currentDirection = config.direction;

    this.sendPaginationEvent(config);
  }

  sendPaginationEvent(config: IladiroAngularConfigSlider): void {
    const obj = {
      page: config.page,
      direction: config.direction
    }
    if(config.direction === 'next') {
      this.goNextEvent.emit(obj);
    } else if(config.direction === 'prev') {
      this.goPrevEvent.emit(obj);
    } else if(config.direction === 'first') {
      this.goFirstEvent.emit(obj);
    } else if(config.direction === 'last') {
      this.goLastEvent.emit(obj);
    }
  }

  calcTranslation(index: number, wrapperWidth: number, translate: number): string {
    // Da rivedere perchè al momento funziona sui contenitori piccoli ma non bene su quelli grandi
    /* if(index == this.slideList.length - 1) {
      const leftovers = (wrapperWidth - itemWidth);
      return  `transform: translateX(-${translate - leftovers}px);`;
    } else {
      return `transform: translateX(-${translate}px);`;
    } */
    return `transform: translateX(-${translate}px); padding-right: ${this.spaceBetweenSlide}px`;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngAfterViewInit() {
    if(this.maxVisibleSlides) {
      console.log("entrato");
      this.wrapperWidth = this.sliderWrap?.nativeElement?.clientWidth;
      if(this.slideList.length > this.maxVisibleSlides) {
        if(this.maxVisibleSlides > 1) {
          this.slideWidth = (this.wrapperWidth / this.maxVisibleSlides) - this.spaceBetweenSlide;
        } else {
          this.slideWidth = (this.wrapperWidth / this.maxVisibleSlides)
        }
      }
    }

    this.cdRef.detectChanges();
  }

}
