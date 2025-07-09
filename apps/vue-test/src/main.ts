import 'node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/parlamentsdienstecore.css';
import 'node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/typography.css';
import { createApp } from 'vue';
import App from './app/App.vue';
import './styles.css';

const app = createApp(App);
app.mount('#root');
