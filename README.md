# IladiroAngularSliderLibrary Documentation

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.<br><br>
Angular Slider plugin is flexible and easily customizable

## Description
You can use the default template or pass your custom template following some configurations.

![Alt text](./projects/iladiro-angular-slider-library/src/lib/documentation/images/default-card.png?raw=true "Default Card")

## Before start
1. npm i @iladiro/angular-slider<br>
1. Import IladiroSliderModule into your module from "import { IladiroSliderModule } from '@iladiro/angular-slider';"

## Getting Setup

  Use ```<iladiro-slider></iladiro-slider>``` selector to show the slider

  Note: The example below shows the mandatory data! Slider Widget accept only Slide object type array.
    
    <iladiro-slider [slideList]="list"></iladiro-slider>

## Interface
Convert your array in an Slide object array. As you can see, not all properties are required.

    interface Slide {
        link?: string;
        mediaSrc: string;
        tag?: string;
        title: string;
        description?: string;
        cta?: string;
    }

## Examples
  Note: <strong>Default template</strong><br>
    <pre>
        ```
        <slider-widget
            [slideList]="list">
        </slider-widget>
        ```
    </pre>

  Note: <strong>Custom template</strong><br>
    <pre>
        ```
        <slider-widget
            [slideList]="list">
            [maxVisibleSlides]="2"
            [paginatorArrowNext]="'fa fa-arrow-circle-o-right fa-4x'"
            [paginatorArrowPrev]="'fa fa-arrow-circle-o-left fa-4x'"
            [paginatorTemplate]="'templateOne'">
        </slider-widget>
        ```
    </pre>

  Note: <strong>Custom dynamic template</strong><br>
    <pre>
        ```
        <slider-widget
            [maxVisibleSlides]="1"
            [paginatorArrowNext]="'fa fa-arrow-circle-o-right fa-4x'"
            [paginatorArrowPrev]="'fa fa-arrow-circle-o-left fa-4x'"
            [paginatorTemplate]="'templateOne'"
            [slideList]="list">
            <ng-template
                #customTemplate
                let-slide="slide"
                let-first="first"
                let-last="last"
                let-index="index"
                let-activeIndex="activeIndex"
                let-direction="direction">
                <your-template
                    [slide]="slide"
                    [index]="index"
                    [activeIndex]="activeIndex"
                    [first]="first"
                    [last]="last"
                    [direction]="direction">
                </your-template>
            </ng-template>
        </slider-widget>
        ```
    </pre>

## Paginator
You can choose which type of <strong>paginator</strong> to use, there are three different types.
* default
* templateOne
* templatetwo

<pre>
    <div style="display: flex">
        <div>
            <img src="./projects/iladiro-angular-slider-library/src/lib/documentation/images/paginator-default.png">
        </div>
        <div>
            <img src="./projects/iladiro-angular-slider-library/src/lib/documentation/images/paginator-template-one.png">
        </div>
        <div>
            <img src="./projects/iladiro-angular-slider-library/src/lib/documentation/images/paginator-template-two.png">
        </div>
    </div>
</pre>

## Options

  Other options are available besides the mandatory ones

  property | type | required | default | notes
  ------------ | ------------- | ------------- | ------------- | -------------
  slideList | ``` Array ``` | yes | ``` undefined ``` | This widget expect a list of Slide to show it.                                                         
  maxVisibleSlides | ``` Number ``` | no | ``` undefined ``` | You can choose how many slides to show at a time
  paginatorTemplate | ``` String ``` | no | ``` undefined ``` | You can choose which type of pagination you want to use between: default, templateOne, templateTwo
  paginatorArrowStart | ``` String ``` | no | ``` fa fa-angle-double-left ``` | You can change the arrow that jumps to the first item in the list
  paginatorArrowEnd | ``` String ``` | no | ``` fa fa-angle-double-right ``` | You can change the arrow that jumps to the last item in the list
  paginatorArrowNext | ``` String ``` | no | ``` fa fa-chevron-right ``` | You can change the arrow that goes to the next item
  paginatorArrowPrev | ``` String ``` | no | ``` fa fa-chevron-left ``` | You can change the arrow that moves to the previous item
  paginatorMaxVisiblePages | ``` Number ``` | no | ``` 5 ``` | If you were to use the templateTwo template, you might need this option, i.e. it allows you to tell the paginator that you want to display maximum n numbers of pages
  customClass | ``` String ``` | no | ``` undefined ``` | You can also pass a class or a list of classes to add to the parent slide tag. It can be useful, for example, to use the default card but customize it specifically for that section

## Events
  Event name | Return | Description | Example
  ------------ | ------------- | ------------- | -------------
  goNextEvent | ``` Object Es. {page: 2, direction: 'next'} ``` | Allows you to capture the event when the pager is used to move to the next slide | ```<slider-widget (goNextEvent)="console.log($event)"></slider-widget>```
  goPrevEvent | ``` Object Es. {page: 2, direction: 'prev'} ``` | Allows you to capture the event when the pager is used to move to the previous slide | ```<slider-widget (goPrevEvent)="console.log($event)"></slider-widget>```
  goFirstEvent | ``` Object Es. {page: 2, direction: 'first'} ``` | Allows you to capture the event when the pager is used to return to the first slide | ```<slider-widget (goFirstEvent)="console.log($event)"></slider-widget>```
  goLastEvent | ``` Object Es. {page: 2, direction: 'last'} ``` | Allows you to capture the event when the pager is used to go back to the last slide | ```<slider-widget (goLastEvent)="console.log($event)"></slider-widget>```
