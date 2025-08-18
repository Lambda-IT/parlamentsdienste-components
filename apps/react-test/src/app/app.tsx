import {
    PdButton,
    PdCheckbox,
    PdCombobox,
    PdDatepicker,
    PdDropdown,
    PdInput,
    PdRadio,
    PdRadioGroup,
    PdSlider,
    PdTextarea,
} from '@parlamentsdienste-components/react';
import { useState } from 'react';
import './app.css';

const comboItems = [
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
    {
        id: '3',
        label: 'Obligatorisches',
        value: 'a3',
    },
    {
        id: '4',
        label: 'Anfrage',
        value: 'a4',
    },
    {
        id: '5',
        label: 'Interpellation',
        value: 'a5',
    },
    {
        id: '6',
        label: 'Motion',
        value: 'a6',
    },
];

export function App() {
    const [formState, setFormState] = useState({
        input: 'Some text...',
        dropdown: comboItems[5],
        comboboxSelectable: comboItems[2],
        comboboxMultiselect: [comboItems[0], comboItems[1]],
        date: '2025-07-23',
        checkbox: true,
        radio: '2',
        slider: 50,
        textarea: 'start Text textarea',
    });
    // const inputRef = useRef<HTMLPdInputElement>(null);

    console.log('App component rendered with formState:', formState);

    return (
        <div className="wrapper">
            <h1>Parlamentsdienste Components</h1>
            <h2>Angular Test Page</h2>
            <form>
                <PdInput
                    label="pd-input"
                    value={formState.input}
                    onInput={e => setFormState({ ...formState, input: (e.target as HTMLInputElement).value })}
                />
                <PdDropdown
                    label="pd-dropdown"
                    emptyItem
                    items={comboItems}
                    selected={formState.dropdown}
                    onPdChange={e => setFormState({ ...formState, dropdown: e.detail })}
                />
                <PdCombobox
                    label="pd-combobox selectable"
                    items={comboItems}
                    selectable
                    selected={formState.comboboxSelectable}
                    onPdChange={e => setFormState({ ...formState, comboboxSelectable: e.detail })}
                />
                <PdCombobox
                    label="pd-combobox multiselect"
                    items={comboItems}
                    multiselect
                    emptyItem
                    selected={formState.comboboxMultiselect}
                    onPdChange={e => setFormState({ ...formState, comboboxMultiselect: e.detail })}
                />
                <PdDatepicker
                    label="pd-datepicker"
                    date={formState.date}
                    onPdChange={e => setFormState({ ...formState, date: e.detail })}
                />
                <PdCheckbox
                    text="pd-checkbox"
                    checked={formState.checkbox}
                    onPdChecked={e => setFormState({ ...formState, checkbox: e.detail })}
                />
                <PdRadioGroup
                    name="radio-group-1"
                    value={formState.radio}
                    onPdChange={e => setFormState({ ...formState, radio: e.detail })}>
                    <PdRadio value="1" label="Radio 1" name="tom" />
                    <PdRadio value="2" label="Radio 2" />
                    <PdRadio value="3" label="Radio 3" />
                </PdRadioGroup>
                <PdSlider value={formState.slider} onPdChange={e => setFormState({ ...formState, slider: e.detail })} />
                <PdTextarea
                    label="pd-textarea"
                    value={formState.textarea}
                    autoGrow
                    onPdChange={e => setFormState({ ...formState, textarea: e.detail })}
                />
                <PdButton
                    onClick={e => {
                        e.preventDefault();
                        setFormState({ ...formState, input: '' });
                    }}>
                    pd-button
                </PdButton>
            </form>
        </div>
    );
}

export default App;
