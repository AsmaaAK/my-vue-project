import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/dashboard', component: DashboardView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
