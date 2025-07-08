import 'node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/parlamentsdienstecore.css';
import 'node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/typography.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
// ...existing code...

// setAssetPath('http://localhost:4201');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
