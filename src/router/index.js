import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/',
    component: Home
  }]
})

export default router