<script setup>  
import { useRoute } from 'vue-router';

const route = useRoute();
const img = route.query.img;
const text = decodeURIComponent(route.query.text);
const time = route.query.time;
console.log(img)
</script>

<template>
  <div>
    <img :src="img" alt="Detail Image">
    <div>{{ text }}</div>
    <div>{{ time }}</div>
  </div>
</template>


    


