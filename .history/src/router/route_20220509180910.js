// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import Introduction from "../components/introduction.vue"
import Product from "../components/product.vue"
import Purchase from "../components/purchase.vue"
import Strategy from "../components/strategy.vue"
import Contact from "../components/contact.vue"

const route = new VueRouter({
    routes:[
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
})
//创建并暴露一个路由器
export default route
