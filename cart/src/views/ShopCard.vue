<template>
    <div>
        <h2>{{ item.name }}</h2>
        <h3>{{ item.price }}</h3>
        <button>Buy</button>
    </div>
</template>

<script setup>
defineProps({
    item:{
        type: Object,
        required: true,
    },
})
</script>

<style scoped>
div{

}
</style>