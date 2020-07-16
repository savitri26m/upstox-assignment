import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isShown = false;
 
  constructor(private elRef: ElementRef) { }
 
  @HostListener('click') toggleShow(eventData: Event) {
    this.isShown = !this.isShown;
    if (this.isShown == true) {
      this.elRef.nativeElement.querySelector('.dropdown-menu').classList.add('show');
    } else {
      this.elRef.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
    }
 
  }

}


