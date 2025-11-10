import 'node_modules/@parlamentsdienste/core/dist/parlamentsdienstecore/parlamentsdienstecore.css';
import 'node_modules/@parlamentsdienste/core/dist/parlamentsdienstecore/typography.css';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
// ...existing code...

import { setAssetPath } from '@parlamentsdienste/core/components';

setAssetPath('http://localhost:4200');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    // <StrictMode>
    <App />,
    // </StrictMode>,
);
