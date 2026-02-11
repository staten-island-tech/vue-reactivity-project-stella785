<template>
    <div>
        <h2>{{ item.name }}</h2>
        <h3>{{ item.price }}</h3>
        <button @click="">Buy</button>
    </div>
</template>

<script setup>
import BuyList from './BuyList.vue';
defineProps({
    item:{
        type: Object,
        required: true,
    },
})
</script>

<style scoped>

</style>