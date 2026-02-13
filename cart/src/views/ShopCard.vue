<template>
    <div class="card">
        <h2>{{ item.name }}</h2>
        <h3>{{ item.price }}</h3>
        <img src="" alt="">
        <button @click="addToCart">Buy</button>
    </div>
</template>

<script setup>
import BuyList from './BuyList.vue';
import MainScreen from './MainScreen.vue';
defineProps({
    item:{
        type: Object,
        required: true,
    },
})


</script>

<style scoped>
.card {
    background-color: #ffffff;
    width: 30%;
    border: 3px solid #c0c0c0;
    margin: 10px;
    padding: 10px;
    text-align: center;
}

</style>