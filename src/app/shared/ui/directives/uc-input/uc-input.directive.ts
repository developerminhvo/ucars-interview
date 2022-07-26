import { Directive, inject, Inject, INJECTOR, TemplateRef } from '@angular/core';

@Directive({
  selector: 'input[uc-input]',
  standalone: true
})
export class UcInputDirective {

  public templateRef = inject(TemplateRef);
  constructor(
    
  ) { }

}
