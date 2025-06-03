import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { defineCustomElement } from '@parlamentsdienste-components/core/components/my-component';

@Component({
  selector: 'lib-angular',
  imports: [],
  standalone: true,
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AngularComponent {
  constructor(public r: ElementRef) {
    defineCustomElement();
  }

  @Input() name = 'Angular Wrapper';

  @Output() outWrapper = new EventEmitter<string>();

  wrapperOutEmit(text: CustomEvent) {
    this.outWrapper.emit(text.detail);
    this.outWrapper.emit('This is text from angular-wrapper');
  }
}
