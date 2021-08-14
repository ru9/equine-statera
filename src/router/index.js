import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/horseexercises',
        name: 'HorseExercises',
        component: () =>
            import ( /* webpackChunkName: "horseexercises" */ '../views/HorseExercises.vue')
    },
    {
        path: '/horseexercisecard/:id',
        name: 'HorseExerciseCard',
        component: () =>
            import ( /* webpackChunkName: "horseexercisecard" */ '../views/HorseExerciseCard.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router