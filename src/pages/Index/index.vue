<template>
  <section>
  </section>

  <img
    v-for="(x, y) in indexImgList"
    :key="y"
    :src="x.img"
    :alt="altname"
    :title="titlename"
    class="img-fluid w-100"
    :class="x.class"
  />
  <section>
 
  </section>
</template>
<script setup>
import { reactive } from "vue";
// import banner from "@/components/banner.vue";
import { useProdcutStore } from "@/stores/product.js";
import { storeToRefs } from "pinia";

const productStore = storeToRefs(useProdcutStore());

const { altname, titlename, indexImgList } = productStore;
console.log(indexImgList[0]);

</script>
