import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Список дел',
            layout: 'main-layout'
        },
        component: ()=> import('@/pages/HomePage')
    },
    {
        path: '/info',
        name: 'about',
        meta: {
            title: 'Информация',
            layout: 'info-layout'
        },
        component: ()=> import('@/pages/InfoPage')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Вход',
            layout: 'auth-layout'
        },
        component: ()=> import('@/pages/LoginPage')
    },
    {
        path: '/registration',
        name: 'registration',
        meta: {
            title: 'Регистрация',
            layout: 'registration-layout'
        },
        component: ()=> import('@/pages/RegistrationPage')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact-active',
    routes
})
router.beforeEach((to, from, next)=>{
    const { token } = localStorage;
    if(token || to.name === 'login' || to.name === 'registration'){
        next();
    }else{
        next('/login');
    }
})
export default router