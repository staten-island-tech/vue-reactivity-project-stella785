<template>
    <div class="cart">
        <h1>Cart</h1>
        <ul>
            <li v-for="item in store.cart" :key="item.name">{{ item.name }}, ${{ item.price }}</li>
        </ul>
        <p>Total: ${{ store.totalPrice }}</p>
    </div>
</template>

<script setup>
import { store } from '@/stores/store';


</script>

<style scoped>
.cart {
    border-style: solid;
    padding: 20px;
    width: 30%;
}
</style>