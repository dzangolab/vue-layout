import { createRouter, createWebHistory } from 'vue-router'

const About = () => import(/* webpackChunkName: "accordion" */ '@/views/About.vue')
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')

const routes = [
  {
    component: About,
    meta: {
      authenticated: false,
      layout: 'AppLayout'
    },
    name: 'about',
    path: '/about'
  },
  {
    component: Home,
    meta: {
      authenticated: false,
      layout: 'AppLayout'
    },
    name: 'home',
    path: '/'
  }]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
