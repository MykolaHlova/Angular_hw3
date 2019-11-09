import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverizer]'
})
export class HoverizerDirective {

  constructor(private component: ElementRef) {
  }

  @Input() appHoverizer;

  @HostBinding('style.backgroundColor') bgC;

  @HostListener('mouseenter') colorPoint() {
    this.bgC = 'dodgerblue'
  }

  @HostListener('mouseleave') colorMove() {
    this.bgC = 'AliceBlue '
  }
}
