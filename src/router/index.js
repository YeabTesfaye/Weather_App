import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            name : "home",
            component : () => import('../views/HomeVue.vue')
        }
    ]
})

export default router;