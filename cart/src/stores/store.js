import { reactive } from 'vue'

export const store = reactive({
  cart: [],
  totalPrice: 0,
  addToCart(item) {
    this.cart.push(item)
    this.totalPrice += item.price
  },
})

export {addToCart}