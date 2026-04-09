import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Competitions from '../components/Competitions.vue';
import Booking from '../components/Booking.vue';
import News from '../components/News.vue';
import Shop from '../components/Shop.vue';
import NotFoundPage from '../components/NotFoundPage.vue';
import Contact from '../components/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/booking',
        name: 'Booking',
        component: Booking
    },
    {
        path: '/competitions',
        name: 'Competitions',
        component: Competitions
    },
    {
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0 }
    }
})


export default router;