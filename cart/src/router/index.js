import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from '@/views/MainScreen.vue'
import ShopStuff from '@/views/ShopStuff.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'home',
      component: MainScreen,
    },
    {
      path: '/shopstuff',
      name:'stuff',
      component: ShopStuff,
    }
  ],
})

export default router
