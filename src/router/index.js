import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tarefas',
    name: 'tarefas',
  
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/login',
    name: 'login',
  
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/form/:id',
    name: 'form',
  
    component: () => import('../views/formView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
