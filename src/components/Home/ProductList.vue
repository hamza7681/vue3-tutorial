<script>
import { useCartStore } from '@/stores/cart'
import { productData } from '../../utils/ProductData'
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      products: productData
    }
  },
  setup() {
    const router = useRouter()
    const cartStore = useCartStore()
    return { router, cartStore }
  },
  methods: {
    addProductToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
    },
    removeProductFromCart(id) {
      const cartStore = useCartStore()
      cartStore.removeFromCart(id)
    }
  }
}
</script>

<template>
  <div class="w-full flex gap-4 py-4 items-center justify-start flex-wrap">
    <div
      class="w-[300px] flex flex-col shadow-md border-[1px] border-gray-200 rounded-[4px]"
      v-for="x in products"
      v-bind:key="x.id"
    >
      <img src="/images/sample.jpeg" alt="product_img" class="w-full" />
      <div class="flex flex-col gap-3 p-3">
        <p class="font-semibold text-[22px]">{{ x.name }}</p>
        <p class="text-gray-400 text-[14px]">{{ x.description }}</p>
        <p class="text-teal-500 font-bold">{{ x.price }} Rs</p>
      </div>
      <div class="flex justify-start items-center gap-3 p-3">
        <button
          class="flex justify-center items-center w-[100px] h-[40px] bg-blue-500 text-white rounded-[4px] font-semibold"
          @click="
            () => {
              router.push(`/product/${x.id}`)
            }
          "
        >
          View
        </button>
        <!-- <button
          v-if="!isProductInCart(x.id)"
          class="flex justify-center items-center text-white font-bold w-[130px] h-9 bg-blue-500"
          @click="addProductToCart(x)"
        >
          Add to cart
        </button>
        <button
          v-else
          class="flex justify-center items-center text-white font-bold w-[150px] h-9 bg-red-500"
          @click="removeProductFromCart(x.id)"
        >
          Remove from cart
        </button> -->
      </div>
    </div>
  </div>
</template>
