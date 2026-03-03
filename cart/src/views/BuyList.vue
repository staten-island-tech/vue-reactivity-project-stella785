<template>
    <div class="stuff">
        <h1>Cart</h1>
        <li v-for="item in store.cart" :key="item.name">{{item.name}}, ${{ item.price }}</li>
        <p>Total: ${{ store.totalPrice }}</p>
    </div>
</template>

<script setup>
defineProps({
    cart: {
        type: Array,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    }
})
</script>

<style scoped>

</style>