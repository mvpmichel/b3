import Vue from 'vue'
import VueRouter from 'vue-router'
import Ativos from '@/views/Ativos'
import Indices from '@/views/Indices'
import HomeBroker from "@/components/HomeBroker";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ativos',
    component: HomeBroker
  },
  {
    path: '/indices',
    name: 'Indices',
    component: Indices
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
