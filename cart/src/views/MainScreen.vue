<template>
    <div>
        <h1>Shop</h1>
        <ShopCard v-for="item in items" :key="item.name" {{ item.name }} :item="item"/>
    </div>
</template>

<script setup>
import {ref} from 'vue'

</script>

<style scoped>
h1{
    text-align: center;
}
</style>