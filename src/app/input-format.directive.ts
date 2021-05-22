import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @Input('appInputFormat') case: string;

  @HostListener('blur') onBlur() {
    //console.log("on blur.");
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = (this.case == "uppercase") 
                                    ? value.toUpperCase() 
                                    : value.toLowerCase();
  }
}
