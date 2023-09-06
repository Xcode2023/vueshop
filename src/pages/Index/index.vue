<template>
  <section>
    <banner />
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
    <div class="sketchfab-embed-wrapper w-100">
      <iframe
        style="height: 640px"
        class="w-100"
        title="The Sketchfab Store Teapot"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/215b6016c804491ea98ab87cc379b2b7/embed?ui_watermark=0"
      >
      </iframe>
    </div>
  </section>
</template>
<script setup>
import { reactive } from "vue";
import banner from "@/components/banner.vue";
import { useProdcutStore } from "@/stores/product.js";
import { storeToRefs } from "pinia";

const productStore = storeToRefs(useProdcutStore());
console.log(productStore);

const { altname, titlename, indexImgList } = productStore;
</script>
