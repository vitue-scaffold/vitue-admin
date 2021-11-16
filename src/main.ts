import { createApp } from 'vue';

import App from './App.vue';

import '@/styles/index.scss';

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss';

import 'virtual:windi.css';

const app = createApp(App);
app.mount('#app');
