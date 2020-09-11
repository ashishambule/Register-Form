import {
  Directive,
  ElementRef,
  HostListener,
  OnChanges,
  Input,
} from '@angular/core';
@Directive({
  selector: '[appAppinput]',
})
export class AppinputDirective implements OnChanges {
  @Input('appAppinput') isErrorBorder: boolean;

  constructor(private el: ElementRef) {}

  @HostListener('click') onMouseEnter() {
    this.el.nativeElement.style.border = `1px solid #0984FA`;
  }
  @HostListener('keypress') onKeyPress() {
    if (this.isErrorBorder) {
      this.el.nativeElement.style.border = `1px solid #0984FA`;
    }
  }

  @HostListener('focusout', ['$event.target'])
  onFocusout(target) {
    if (!this.isErrorBorder) {
      this.el.nativeElement.style.border = '';
    }
  }

  ngOnChanges() {
    if (this.isErrorBorder) {
      this.el.nativeElement.style.border = `1px solid red`;
    }
  }
}
