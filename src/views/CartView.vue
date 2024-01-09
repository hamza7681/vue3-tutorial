<script>
import HeaderComp from '@/components/shared/HeaderComp.vue'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
export default {
  components: { HeaderComp },
  setup() {
    const cartStore = useCartStore()
    const totalPrice = computed(() => {
      return cartStore.cartProducts.reduce((total, sum) => {
        return total + sum.totalPrice
      }, 0)
    })
    return { cartStore, totalPrice }
  },
  methods: {
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
    <div class="w-full flex pt-10">
      <div class="flex flex-col w-full">
        <div class="flex px-[100px] h-16 w-full items-center">
          <div class="w-1/6 font-bold">Sr. No</div>
          <div class="w-1/6 font-bold">Name</div>
          <div class="w-1/6 font-bold">Price</div>
          <div class="w-1/6 font-bold">Qty</div>
          <div class="w-1/6 font-bold">Total Price</div>
          <div class="w-1/6 font-bold">Actions</div>
        </div>
        <div
          v-for="(x, i) in cartStore.cartProducts"
          :key="i"
          class="flex px-[100px] h-16 w-full items-center"
        >
          <div class="w-1/6">{{ i + 1 }}</div>
          <div class="w-1/6">{{ x.name }}</div>
          <div class="w-1/6">{{ x.price }}</div>
          <div class="w-1/6">
            <div class="flex items-center">
              <button
                class="flex justify-center items-center text-white font-bold w-9 h-9 bg-green-500"
              >
                -</button
              ><input
                type="number"
                class="w-9 h-9 focus:outline-none border-[1px] border-gray-200 pl-[10px]"
                :value="x.qty"
              /><button
                class="flex justify-center items-center text-white font-bold w-9 h-9 bg-green-500"
              >
                +
              </button>
            </div>
          </div>
          <div class="w-1/6">{{ x.qty * x.price }}</div>
          <div class="w-1/6">
            <button
              @click="removeProductFromCart(x.id)"
              class="w-8 h-8 bg-red-500 flex justify-center items-center text-white font-bold"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
    <p>Total Price:{{ totalPrice }}</p>
  </div>
</template>
