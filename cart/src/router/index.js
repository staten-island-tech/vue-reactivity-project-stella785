import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from '@/views/MainScreen.vue'
import ShopList from '@/views/ShopList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'home',
      component: MainScreen,
    },
    {
      path: '/shoplist',
      name:'list',
      component: ShopList,
    }
  ],
})

export default router
