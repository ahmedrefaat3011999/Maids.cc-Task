import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { SharedService } from '../shared.service';

@Directive({
  selector: '[appRotateCard]'
})
export class RotateCardDirective {
  private isRotated = false;

  constructor(private el: ElementRef, private renderer: Renderer2,    private sharedService:SharedService
    ) {
      this.sharedService.isSearchEnabled =true ;

  }

  @HostListener('click') onClick() {
    this.rotateCard();
  }

  rotateCard() {
    const card = this.el.nativeElement;
    this.isRotated = !this.isRotated;
    this.renderer.setStyle(card, 'transform', this.isRotated ? 'rotate(180deg)' : 'none' );
  }
}