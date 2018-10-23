import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('mouseenter') show() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') hide() {
    this.isOpen = !this.isOpen;
  }
}
