import { createRouter, createWebHashHistory } from "vue-router";
//引入组件
import MainPage from "../components/mainPage.vue";
import Introduction from "../components/introduction.vue"
import Product from "../components/product.vue"
import Purchase from "../components/purchase.vue"
import Strategy from "../components/strategy.vue"
import Contact from "../components/contact.vue"

const route = [
    {
        path:'/',
        component:MainPage
    },
    {
        path:'/introduction',
        component:Introduction
    },
    {
        path:'/product',
        component:Product
    },
    {
        path:'/strategy',
        component:Strategy
    },
    {
        path:'/purchase',
        component:Purchase
    },
    {
        path:'/contact',
        component:-Contact
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: route
  });


export default router
