import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Product from '@/views/Products.vue';
import NotFound from '@/views/NotFound.vue'; 

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Welcome',
            description: 'My first vue router !'
        }
    },
    {
        name: 'About',
        path: '/about',
        component: About,
        meta: {
            title: 'About',
            description: 'My first vue router !'
        }
    },
    {
        name: 'Products',
        path: '/products',
        component: Product,
        props: true,
        meta: {
            title: 'Products',
            description: 'My first vue router !'
        }
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: 'Erreur 404 - NotFound',
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((from, to) => {
    console.log(from, to)
    document.title = from.meta.title
})

export default router;