import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/my',
    name: 'My',
    component: ()=>import('../views/My.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: ()=>import('../views/Order.vue')
  },
  {
    path: '/find',
    name: 'Find',
    component: ()=>import('../views/Find.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
