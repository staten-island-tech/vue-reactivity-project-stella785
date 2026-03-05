<template>
    <h1>Shop</h1>
    <div class="container">
        <ShopStuff />
        <BuyList />
    </div>
</template>

<script setup>
import ShopStuff from './ShopStuff.vue';
import BuyList from './BuyList.vue';

</script>

<style scoped>
h1{
    background-color: antiquewhite;
    text-align: center;
    border-radius: 25px;
    font-size: 50px;
    margin: 20px;
    padding: 10px;
}
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px;
}
</style>