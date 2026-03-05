<template>
    <div class="cart">
        <h1>Your cart:</h1>
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
    background-color:aliceblue;
    border-radius: 25px;
    border-style: solid;
    padding: 20px;
    width: 30%;
    margin: 10px;
}
</style>