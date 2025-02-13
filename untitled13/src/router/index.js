//createRouter 创建router实例对象
//createWebHistory 创建路由模式

import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from "@/views/Member/components/UserInfo.vue";
import UserOrder from "@/views/Member/components/UserOrder.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    component: Home
                },
                {
                    path: 'category/:id',
                    component: Category
                },
                {
                    path: 'category/sub/:id',
                    component: SubCategory
                },
                {
                    path: 'detail/:id',
                    component: Detail
                },
                {
                    path: 'cartlist',
                    component: CartList
                },
                {
                    path: "checkout",
                    component: Checkout
                },
                {
                    path: "pay",
                    component: Pay
                },
                {
                    path: "paycallback",
                    component: PayBack
                },
                {
                    path: "member",
                    component: Member,
                    children: [
                        {
                            path: "",
                            component: UserInfo
                        },
                        {
                            path: "order",
                            component: UserOrder
                        }
                    ]
                },

            ]
        },
        {
            path: '/login',
            component: Login
        }
    ],
    // 路由跳转后页面滚动到顶部
    scrollBehavior() {
        return {top: 0}
    }
})

export default router