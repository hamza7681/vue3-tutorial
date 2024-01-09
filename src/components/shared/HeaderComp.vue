<script>
import { useRouter } from 'vue-router'
import { useCartStore } from '../../stores/cart'

export default {
  data() {
    return {
      routes: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Cart',
          path: '/cart'
        }
      ]
    }
  },
  setup() {
    const router = useRouter()
    const cartStore = useCartStore()
    const currentRoute = router.currentRoute?.value?.path
    return { currentRoute, cartStore }
  }
}
</script>

<template>
  <div
    class="bg-white h-[70px] sticky top-0 shadow-md flex w-full justify-between items-center px-10"
  >
    <p class="text-teal-500 font-bold text-[22px]">Vue E-Commerce</p>
    <ul class="flex items-center gap-3">
      <li class="font-bold" v-for="(item, index) in routes" v-bind:key="index">
        <router-link :to="item.path" :class="currentRoute === item.path ? 'text-teal-500' : ''"
          >{{ item.name }}
          <span v-if="item.name === 'Cart'">({{ cartStore.cartProducts.length }})</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
