import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from '@/views/MainScreen.vue'
import ShopStuff from '@/views/ShopStuff.vue'
import BuyList from '@/views/BuyList.vue'
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
    },
    {
      path: '/buylist',
      name: 'buylist',
      component: BuyList,
    }
  ],
})

export default router
