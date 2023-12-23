import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatHomeView from '../views/ChatHomeView.vue'
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
            path: '/chat',
            name: 'chat home',
            component: ChatHomeView,
        },
        {
            path: '/chat/margo',
            name: 'margo',
            component: MargoView,
        },
        {
            path: '/chat/nana',
            name: 'nana',
            component: NanaView,
        },
    ],
})

export default router
