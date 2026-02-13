<template>
    <div>
        <h1>Shop</h1>
        <ShopStuff />
        <BuyList/>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import ShopStuff from './ShopStuff.vue'
import BuyList from './BuyList.vue';

const totalPrice = ref(0);
const cart = ref([

]);

function addToCart(item) {
    cart.value.push(item);
    totalPrice += item.price;
}
</script>

<style scoped>
h1{
    text-align: center;
}
</style>