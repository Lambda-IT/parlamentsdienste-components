import {
    PdCheckbox,
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
        inputValue: 'Hello World',
        checkboxValue: true,
        dateValue: '2023-01-01',
        dropdownValue: comboItems[0],
        radioGroupValue: '2',
        sliderValue: 70,
        textareaValue: 'This is a controlled textarea',
    });
    const [selectedItems, setSelectedItems] = useState<typeof comboItems>(comboItems.slice(1, 3));
    // const inputRef = useRef<HTMLPdInputElement>(null);

    console.log('App component rendered with formState:', formState);

    return (
        <div className="wrapper">
            <h1>Welcome to React Test!</h1>
            <h2>Controlled Input</h2>
            <PdInput
                value={formState.inputValue}
                placeholder="Type something..."
                onInput={e => setFormState({ ...formState, inputValue: (e.target as HTMLInputElement).value })}
            />
            <PdCheckbox
                checked={formState.checkboxValue}
                onPdChecked={e => {
                    setFormState({ ...formState, checkboxValue: e.detail });
                }}></PdCheckbox>

            <PdDatepicker
                date={formState.dateValue}
                onPdChange={e => {
                    console.log(e);
                    // setFormState({ ...formState, dateValue: e.detail });
                }}
                config={{ mode: 'time' }}></PdDatepicker>
            <PdDropdown
                items={comboItems}
                selected={formState.dropdownValue}
                onPdChange={e => {
                    setFormState({ ...formState, dropdownValue: e.detail as (typeof comboItems)[0] });
                }}></PdDropdown>
            <PdRadioGroup
                name="my-radio-group"
                value={formState.radioGroupValue}
                onPdChange={e => setFormState({ ...formState, radioGroupValue: e.detail })}>
                <PdRadio value="1" label="value1"></PdRadio>
                <PdRadio value="2" label="value2"></PdRadio>
                <PdRadio value="3" label="value3"></PdRadio>
            </PdRadioGroup>
            <PdSlider
                value={formState.sliderValue}
                onPdChange={e => {
                    setFormState({ ...formState, sliderValue: e.detail });
                }}></PdSlider>
            <PdTextarea
                value={formState.textareaValue}
                onPdChange={e => setFormState({ ...formState, textareaValue: e.detail })}></PdTextarea>
            {/* <h2>Uncontrolled Input</h2>
            <PdInput placeholder="Type something..." value="test" ref={inputRef} />
            <PdButton onClick={() => alert(inputRef.current?.value)}>Show Value</PdButton>
            <hr />
            <PdCombobox
                label="test combo"
                items={comboItems}
                multiselect
                selected={selectedItems}
                onPdChange={e => {
                    console.log(e);
                    setSelectedItems(e.detail as typeof comboItems);
                }}></PdCombobox>
            <PdAnimation name="under-construction"></PdAnimation> */}
        </div>
    );
}

export default App;
