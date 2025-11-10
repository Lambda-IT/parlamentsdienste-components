import 'node_modules/@parlamentsdienste/pdcomponents-core/dist/parlamentsdienstecore/parlamentsdienstecore.css';
import 'node_modules/@parlamentsdienste/pdcomponents-core/dist/parlamentsdienstecore/typography.css';
import { createApp } from 'vue';
import App from './app/App.vue';
import './styles.css';

import { setAssetPath } from '@parlamentsdienste/pdcomponents-core/components';

setAssetPath('http://localhost:4200');

const app = createApp(App);
app.mount('#root');
