import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Particulargiveaway from '@/views/Particulargiveaway'
import Sortgiveaways from '@/views/SortGiveaways'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/particulargiveaway/:id',
        name: 'Particulargiveaway',
        component: Particulargiveaway
    },
    {
        path: '/sortgiveaways/',
        name: 'Sortgiveaways',
        component: Sortgiveaways
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
