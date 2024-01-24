import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumericInput]'
})
export class NumericInputDirective {
  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value.replace(/[^0-9]/g, '');
    input.value = inputValue;
  }
}
