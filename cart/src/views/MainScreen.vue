<template>
    <div>
        <h1>Shop</h1>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const items = ref([
    {
        name: '',
        price: ''
    }
])
</script>

<style scoped>
h1{
    text-align: center;
}
</style>