<template>
  <el-carousel trigger="click" height="150px">
    <el-carousel-item v-for="(x, y) in bannerImgList" :key="y">
    <img :src="x.img" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script setup>
import { useProdcutStore } from "@/stores/product.js";
import {onMounted } from 'vue'
const store = useProdcutStore();


onMounted(() => {
  const { bannerImgList } = store;
  console.log(bannerImgList);

})

</script>
<style scoped></style>
