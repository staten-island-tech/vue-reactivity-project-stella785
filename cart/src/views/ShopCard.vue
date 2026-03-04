<template>
    <div class="shoe-card">
        <h2>{{ item.name }}</h2>
        <img :src="item.image" :alt="item.name">
        <h3>${{ item.price }}</h3>
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
    width: 50%;
    border: 3px solid #000000;
    margin: 10px;
    padding: 10px;
    text-align: center;
}
h2{
    font-size: 1.5rem;
    margin: 15px;
    padding: 10px;
}
h3 {
    font-size: 1rem;
}
img {
    height: 100px;
    
}

</style>