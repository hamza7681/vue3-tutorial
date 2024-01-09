import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartProducts: useLocalStorage('cartProducts', [])
  }),
  actions: {
    addToCart(product) {
      this.cartProducts.push(product)
    },
    removeFromCart(id) {
      this.cartProducts = this.cartProducts.filter((x) => x.id !== id)
    }
  }
})
