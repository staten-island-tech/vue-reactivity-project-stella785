<template>
    <div class="shoe-card">
        <h2>{{ item.name }}</h2>
        <h3>${{ item.price }}</h3>
        <img :src="item.image" :alt="item.name">
        <slot></slot>
    </div>
</template>

<script setup>
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
.shoe-card {
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

</style>