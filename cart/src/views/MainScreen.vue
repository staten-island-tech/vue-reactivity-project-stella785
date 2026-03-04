<template>
    <h1>Shop</h1>
    <div class="container">
        <ShopStuff />
        <BuyList />
    </div>
</template>

<script setup>
import {ref} from 'vue'
import ShopStuff from './ShopStuff.vue';
import BuyList from './BuyList.vue';

</script>

<style scoped>
h1{
    text-align: center;
}
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px;
}
</style>