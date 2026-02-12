<template>
    <div>
        <h2>{{ item.name }}</h2>
        <h3>{{ item.price }}</h3>
        <button @click="addToCart">Buy</button>
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

</style>