import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'splash',
        component: () => import('../views/Splash.vue'),
    }],
});
