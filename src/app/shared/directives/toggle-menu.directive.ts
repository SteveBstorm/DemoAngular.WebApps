import { Directive, HostListener, Input } from '@angular/core';
import { Link } from 'src/app/models/link';

@Directive({
  selector: '[appToggleMenu]'
})
export class ToggleMenuDirective {

  @Input() public appToggleMenu! : Link;

  constructor() { }

  @HostListener('mouseenter')
  showChildren(){
    this.appToggleMenu.children?.forEach(c => c.isVisible=true);
  }

  

  @HostListener('mouseleave')
  hiddenChildren(){
    this.appToggleMenu.children?.forEach(c => c.isVisible=false);
  }
}
