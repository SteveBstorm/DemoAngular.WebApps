import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective {

  constructor(private _elementRef : ElementRef) { 
    this._elementRef.nativeElement.classList.add('test');
  }

  @HostListener('mouseenter') whenMouseOn(){
    this.changeColor('blue');
  }

  @HostListener('mouseleave') whenMouseOut(){
    this.changeColor('');
  }

  private changeColor(color : string){
    this._elementRef.nativeElement.style.backgroundColor = color;
  }

}
