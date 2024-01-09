import CartViewVue from '@/views/CartView.vue'
import HomeViewVue from '@/views/HomeView.vue'
import ProductDetailViewVue from '@/views/ProductDetailView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeViewVue
    },
    {
      path: '/cart',
      component: CartViewVue
    },
    {
      path: '/product/:name',
      component: ProductDetailViewVue
    }
  ]
})

export default router
