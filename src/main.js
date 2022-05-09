import { createApp } from 'vue'
import "./index.css";
//引入路由器
import router from '../src/router/route.js'

import App from './App.vue'

const app = createApp(App);
app.use(router);
app.mount('#app');
