<template>
    <div class="stuff">
        <h1>Cart</h1>
        <li></li>
    </div>
</template>

<script setup>
import ShopStuff from './ShopStuff.vue';
const totalPrice = ref(0);
const price = ref(0);
const cart = ref([

]);
function addtoCart() {
    //add price of selected cards
    totalPrice = item[price]++;
    //push selected cards to the cart
}
</script>

<style scoped>
/* .stuff {
    display: flex;
    justify-content: flex-end;
    border: 1px solid;
    height: 100vh;
    padding-right: 20px;
} */
</style>