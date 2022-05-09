import { createApp } from 'vue'
import "./index.css";
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from '../src/router/route.js'

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.mount('#app');
