<template>
  <el-carousel trigger="click" height="150px">
    <el-carousel-item v-for="(x, y) in bannerImgList" :key="y">
    <img :src="x" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script setup>
import { useProdcutStore } from "@/stores/product.js";
import {onMounted } from 'vue'
const store1 = useProdcutStore();
  const { bannerImgList } = store1;

  console.log(bannerImgList );

onMounted(() => {

})

</script>
<style scoped></style>
