<script>
import HeaderComp from '@/components/shared/HeaderComp.vue'
import { productData } from '@/utils/ProductData'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart'

export default {
  components: { HeaderComp },
  setup() {
    const router = useRouter()
    const cartStore = useCartStore()
    console.log(cartStore.cartProducts)
    const params = router.currentRoute.value.params.name
    const findProduct = productData.filter((x) => x.id === parseInt(params))[0]
    const qty = ref(findProduct.qty)
    const isProductInCart = computed(() => {
      let check = cartStore.cartProducts.filter((x) => x.id === findProduct.id)
      return check.length === 0 ? true : false
    })
    return { findProduct, qty, cartStore, isProductInCart }
  },
  methods: {
    addProductToCart() {
      const cartStore = useCartStore()
      let finalProduct = {
        ...this.findProduct,
        qty: this.qty,
        totalPrice: this.findProduct.price * this.qty
      }
      cartStore.addToCart(finalProduct)
    },
    removeProductFromCart(id) {
      const cartStore = useCartStore()
      cartStore.removeFromCart(id)
    }
  }
}
</script>

<template>
  <div>
    <HeaderComp />
    <div class="flex items-center w-full h-screen">
      <div class="flex w-1/2 justify-center items-center">
        <img src="/images/sample.jpeg" alt="product_img" class="w-[500px]" />
      </div>
      <div class="flex flex-col gap-2 w-1/2">
        <p class="text-[24px] font-bold">{{ findProduct.name }}</p>
        <p class="text-[20px] text-gray-500">{{ findProduct.description }}</p>
        <p class="text-[22px] font-bold text-teal-500">Rs {{ findProduct.price }}</p>
        <div class="flex items-center">
          <button
            class="flex justify-center items-center text-white font-bold w-9 h-9 bg-green-500"
            @click="
              () => {
                if (qty > 1) {
                  qty--
                }
              }
            "
          >
            -</button
          ><input
            type="number"
            class="w-9 h-9 focus:outline-none border-[1px] border-gray-200 pl-[10px]"
            :value="qty"
          /><button
            class="flex justify-center items-center text-white font-bold w-9 h-9 bg-green-500"
            @click="qty++"
          >
            +
          </button>
        </div>
        <button
          v-if="isProductInCart"
          class="flex justify-center items-center text-white font-bold w-[130px] h-9 bg-blue-500"
          @click="addProductToCart"
        >
          Add to cart
        </button>
        <button
          v-else
          class="flex justify-center items-center text-white font-bold w-[150px] h-9 bg-red-500"
          @click="removeProductFromCart(findProduct.id)"
        >
          Remove from cart
        </button>
      </div>
    </div>
  </div>
</template>
