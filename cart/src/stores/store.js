import { reactive } from 'vue'

export const store = reactive({
    cart: [],
    totalPrice: 0,
})

function addToCart(item) {
    store.cart.push(item)
    store.totalPrice += item.price
}

export {addToCart}