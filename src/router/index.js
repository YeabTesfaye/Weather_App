import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            name : "home",
            component : () => import('../views/HomeView.vue')
        },
        {
            path : "/weather/:state/:city",
            name : "cityView",
            component: () => import('../views/CityView.vue')
        }
    ]
})

export default router;