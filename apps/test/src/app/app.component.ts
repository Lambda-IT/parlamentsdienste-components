import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdAlert, PdButton, PdCombobox, PdDropdownItem, PdIcon, PdInput } from '@parlamentsdienste-components/angular';
// import { setAssetPath } from '@parlamentsdienste-components/core/components';
import { ValueAccessorComponent } from '../valueAccessor/valueAccessor.component';

console.log('AppComponent initialized');
@Component({
    imports: [
        PdAlert,
        PdInput,
        FormsModule,
        ValueAccessorComponent,
        PdIcon,
        PdButton,
        PdButton,
        PdCombobox,
        PdDropdownItem,
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.Default,
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
    el = viewChild.required(PdCombobox);

    title = 'test';
    myVar = 'Hello World';

    label = signal('Combobox Label');

    forValueAccessorComp = 'Value Accessor Test';

    comboboxItems = [
        {
            id: '1',
            label: 'Mitteilungen und Verschiedenes',
            value: 'a1',
        },
        {
            id: '2',
            label: 'Pa.Iv. Semadeni. Fakultatives',
            value: 'a2',
        },
    ];

    constructor() {
        this.label.set('Combobox Label QQQQ');
    }

    modelChange(event: Event) {
        console.log('Input changed:', event);
    }

    ngAfterViewInit() {
        const combobox = this.el();
        console.log('ngAfterViewInit called', combobox);
        if (combobox) {
            combobox.emptyItem = true;
            combobox.items = [
                {
                    id: '3',
                    label: 'Referendum für die Unterstützung Olympischer Spiele durch den Bund',
                    value: 'a3',
                    iconName: 'group',
                },
                {
                    id: '4',
                    label: 'Gesamtkonzeption, Präsentation und Diskussion',
                    value: 'a4',
                },
                {
                    id: '5',
                    label: 'Controlling, Präsentation, Diskussion und Beschluss',
                    value: 'a5',
                    iconName: 'profile',
                },
            ];
        }
    }
}
