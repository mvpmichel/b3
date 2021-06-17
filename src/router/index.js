import Vue from 'vue'
import VueRouter from 'vue-router'
import viewAtivos from '@/views/viewAtivos'
import viewIndices from '@/views/viewIndices'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'viewAtivos',
    component: viewAtivos
  },
  {
    path: '/indices',
    name: 'viewIndices',
    component: viewIndices
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
