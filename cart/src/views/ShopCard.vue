<template>
    <div class="card">
        <h2>{{ item.name }}</h2>
        <h3>${{ item.price }}</h3>
        <img :src="item.image" :alt="item.name">
        <slot></slot>
        <!-- <button @click="addToCart(item)">Buy</button> -->
    </div>
</template>

<script setup>
import ShopStuff from './ShopStuff.vue';
defineProps({
    item:{
        type: Object,
        required: true,
    },
    addToCart:{
        type: Function,
    }
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
h2, h3 {
    font-size: 1.5rem;
    text-align: center;
    margin: 15px;
    padding: 10px;
}
img {
    height: 100px;
}
button {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    vertical-align: middle;
    border: 1px solid;
    border-radius: 6px;
    color: #24292e;
    background-color: #fafbfc;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
        :hover {
            background-color: #f3f4f6;
            border-color: #1b1f2326;
            transition-duration: 0.1s;
        }
}

</style>