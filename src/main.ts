import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './stores';

// In a real application, you would import component library styles here.
// e.g., import 'element-plus/dist/index.css';
// e.g., import 'vant/lib/index.css';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
