<template>
    <div>
        <ShopCard v-for="item in items" :key="item.name" :item="item"/>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import ShopCard from './ShopCard.vue';
const items = ref([
    {
        name: 'Kobe IX Elite Low EM Protro',
        price: 190,
//image here
    },
    {
        name: 'Giannis Immortality 4',
        price: 79,
    }
])
</script>

<style scoped>
div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #BDBDBD;
}
</style>