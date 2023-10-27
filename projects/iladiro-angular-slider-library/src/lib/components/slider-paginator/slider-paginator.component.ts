import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'iladiro-angular-slider-paginator',
  templateUrl: './slider-paginator.component.html',
  styleUrls: ['./slider-paginator.component.scss']
})
export class IladiroAngularSliderPaginatorComponent implements OnChanges {

  @Input() totalPages!: number;
  @Input() maxVisiblePages = 5;
  @Input() template = 'default';
  @Input() arrowStart = 'fa fa-angle-double-left';
  @Input() arrowEnd = 'fa fa-angle-double-right';
  @Input() arrowNext = 'fa fa-chevron-right';
  @Input() arrowPrev = 'fa fa-chevron-left';
  @Output() selectedPageEvent = new EventEmitter();

  currentPage = 1;
  paginatorList: number[] = [];

  sendEvent(direction: string): void {
    this.selectedPageEvent.emit({
      page: this.currentPage,
      index: this.currentPage-1,
      direction: direction
    });
  }

  goTo(page: number): void {
    const res = page > this.currentPage ? 'next' : 'prev';   
    this.currentPage = page;    
    this.sendEvent(res);
  }

  goNext(): void {    
    this.currentPage += 1;
    // da riattivare per implementazione sul template 2
    if(this.template === 'templateTwo') {
      this.increasePagination();
    }
    // end
    this.sendEvent('next');
  }  

  goPrev(): void {
    this.currentPage -= 1;    
    // da riattivare per implementazione sul template 2
    if(this.template === 'templateTwo') {          
      this.decreasePagination();   
    }
    // end
    this.sendEvent('prev');
  }

  goFirst(): void {
    this.currentPage = 1;
    if(this.template === 'templateTwo') {
      this.paginatorList = this.generatePaginatorList(1, this.maxVisiblePages);          
    }    
    this.sendEvent('first');
  }

  goLast(): void {
    this.currentPage = this.totalPages;
    if(this.template === 'templateTwo') {
      this.paginatorList = this.generatePaginatorList(this.currentPage - (this.maxVisiblePages - 1), this.currentPage);          
    }    
    this.sendEvent('last');
  }

  decreasePagination(): void {
    if((this.currentPage <= this.maxVisiblePages)) {   
      if(this.currentPage <= this.totalPages) {
        console.log("currentPage", this.currentPage);
        if(this.currentPage >= this.paginatorList[0]) {
          //console.log("do not anythings");     
        } else {            
          //console.log("change pagination");       
          this.paginatorList = this.generatePaginatorList(this.currentPage, this.currentPage + (this.maxVisiblePages - 1));          
        }   
      }             
    }
  }

  increasePagination(): void {
    if((this.currentPage >= this.maxVisiblePages)) {   
      if(this.currentPage <= this.totalPages) {
        //console.log("currentPage", this.currentPage);
        if(this.currentPage <= this.paginatorList[this.maxVisiblePages - 1]) {
          //console.log("do not anythings");
        } else {
          //console.log("change pagination");
          this.paginatorList = this.generatePaginatorList(this.currentPage - (this.maxVisiblePages - 1), this.currentPage);          
        }   
      }             
    } 
  }

  generatePaginatorList(startFrom: number, untilTo: number): number[] {
    /* console.log("startFrom", startFrom);
    console.log("untilTo", untilTo); */
    const pages: number[] = [];
    for (let i = startFrom; i <= untilTo; i++) {
      pages.push(i);
    }

    return pages;
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes.totalPages);
    if(this.template === 'templateTwo') {
      if(changes['maxVisiblePages']?.currentValue) {
        this.paginatorList = this.generatePaginatorList(1, this.maxVisiblePages ? this.maxVisiblePages : this.totalPages);
      } 
    }       
  }

}
