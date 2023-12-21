import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MargoView from '../views/MargoView.vue'
import NanaView from '../views/NanaView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/margo',
            name: 'margo',
            component: MargoView,
        },
        {
            path: '/nana',
            name: 'nana',
            component: NanaView,
        },
    ],
})

export default router
