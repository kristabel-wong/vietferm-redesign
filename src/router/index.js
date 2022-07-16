import Vue from "vue";
import VueRouter from 'vue-router'
import ProductView from '../views/ProductView'
import StockistView from '../views/StockistView'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/product',
        name: 'Sản phẩm',
        component: ProductView
    },
    {
        path: '/stockists',
        name: 'Đại lý',
        component: StockistView
    },
    {
        path: '/about',
        name: 'Về chúng tôi',
        component: AboutView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router