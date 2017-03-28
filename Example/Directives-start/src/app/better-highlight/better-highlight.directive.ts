import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private rederer: Renderer2) { }

  ngOnInit() {
    // this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor== this.defaultColor;
  }

  @HostListener('mouserenter') mouseover(eventdata: Event) {
    // this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouserleave') mouseleave(eventdata: Event) {
    // this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
