//1、创建组件并引入组件
import Vue from 'vue'
import Welcome from '@/components/Welcome.vue'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Users from '@/components/Users.vue'
import Rights from '@/components/power/Rights.vue'
import Roles from '@/components/power/Roles.vue'
import Cate from '@/components/goods/Cate.vue'
import Params from '@/components/goods/Params.vue'
import Router from 'vue-router'
import News from '@/components/News'
import Content from '@/components/Content.vue'
import List from '@/components/goods/List.vue'
import Add from '@/components/goods/Add.vue'
import Order from '@/components/order/Order.vue'
import Report from '@/components/report/Report.vue'
Vue.use(Router)

//2、定义路由
const routes = [{
        path: '/news',
        component: News,
        name: 'url_news'
    },
    {
        path: '/content/:cid',
        component: Content
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        redirect: '/welcome',
        children: [{
                path: '/welcome',
                component: Welcome
            },
            {
                path: '/users',
                component: Users
            }, {
                path: '/rights',
                component: Rights
            },
            {
                path: '/roles',
                component: Roles
            },
            {
                path: '/lists',
                component: List
            },
            {
                path: '/categories',
                component: Cate
            },
            {
                path: '/params',
                component: Params
            },
            {
                path: '/goods/add',
                component: Add
            },
            {
                path: '/order',
                component: Order
            },
            {
                path: '/report',
                component: Report
            },
        ]
    },

]

//3、实例化Router
const router = new Router({
    mode: 'history',
    routes
});

//4、暴露组件，在mian.js中引入该router
export default router