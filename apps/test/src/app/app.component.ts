import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdAlert, PdButton, PdIcon, PdInput } from '@parlamentsdienste-components/angular';
// import { setAssetPath } from '@parlamentsdienste-components/core/components';
import { ValueAccessorComponent } from '../valueAccessor/valueAccessor.component';

@Component({
    imports: [PdAlert, PdInput, FormsModule, ValueAccessorComponent, PdIcon, PdButton, PdButton],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
    title = 'test';
    myVar = 'Hello World';

    forValueAccessorComp = 'Value Accessor Test';

    constructor() {}

    modelChange(event: Event) {
        console.log('Input changed:', event);
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
        setInterval(() => {
            console.log('Timeout in ngAfterViewInit', this.myVar);
        }, 1000);
    }
}
