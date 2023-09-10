<template>
  <main><canvas id="canvas3d" ref="canvas"></canvas></main>
</template>
<script setup>
import {ref,onMounted} from 'vue'
// import * as es from './spline/esmodule.js'
// import module from 'P/spline/rabbit.spline'
import { Application } from "@splinetool/runtime";

const canvas = ref(null)
onMounted(()=> {
  const app = new Application(canvas.value);
  app.load("public/spline/rabbit.spline");

})


</script>
<style scoped></style>
