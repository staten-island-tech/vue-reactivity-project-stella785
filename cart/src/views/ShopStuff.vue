<template>
    <div>
    <ShopCard v-for="item in items" :key="item.name" :item="item">
        <button @click="store.addToCart(item)">Add to Cart</button>
    </ShopCard>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { store } from '@/stores/store';
import ShopCard from './ShopCard.vue';
defineProps({
    addToCart:{
        type: Function,
    }
})
const items = ref([
    {
        name: 'Kobe IX Elite Low EM Protro',
        price: 190,
        image: '/kobe.avif'
    },
    {
        name: 'Giannis Immortality 4',
        price: 79,
        image: '/giannis.avif'
    },
    {
        name: 'Ja 3 "Warning Label"',
        price: 117,
        image: '/ja3.avif'
    },
    {
        name: 'Ja 2',
        price: 97,
        image: '/ja2.avif'
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