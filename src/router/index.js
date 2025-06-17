import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/work',
        name: 'Work',
        component: () => import('../views/Work.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/resume',
        name: 'Resume',
        component: () => import('../views/Resume.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 