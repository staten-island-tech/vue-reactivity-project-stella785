<template>
    <div class="stuff">
        <h1>Cart</h1>
        <li>{{ item.name }}: ${{item.price}}</li>
        <p>Total: ${{ totalPrice }}</p>
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