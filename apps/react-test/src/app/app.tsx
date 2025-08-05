import { PdAnimation, PdButton, PdCombobox, PdInput } from '@parlamentsdienste-components/react';
import { useRef, useState } from 'react';
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
    const [inputValue, setInputValue] = useState('Hello World');
    const [selectedItems, setSelectedItems] = useState<typeof comboItems>(comboItems.slice(1, 3));
    const inputRef = useRef<HTMLPdInputElement>(null);

    console.log('App component rendered with inputValue:', inputValue);

    return (
        <div className="wrapper">
            <h1>Welcome to React Test!</h1>

            <h2>Controlled Input</h2>
            <PdInput
                value={inputValue}
                placeholder="Type something..."
                onInput={e => setInputValue((e.target as HTMLInputElement).value)}
            />
            <h2>Uncontrolled Input</h2>
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
            <PdAnimation name="under-construction"></PdAnimation>
        </div>
    );
}

export default App;
