import { Directive, ElementRef, OnInit } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appDateMoment]'
})
export class DateMomentDirective implements OnInit {
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
    this.element.innerText = moment(this.element.innerText).fromNow();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
