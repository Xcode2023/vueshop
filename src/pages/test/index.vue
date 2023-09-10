<template>
  <main><canvas id="canvas3d" ref="canvas"></canvas></main>
</template>
<script setup>
import {ref,onMounted} from 'vue'
// import * as es from './spline/esmodule.js'
// import module from 'P/spline/rabbit.spline'
import { Application } from "@splinetool/runtime";

import gsap from 'gsap'

import ScrollTrigger from 'gsap/ScrollTrigger'

const animate1=()=>{
gsap.from(canvas.value,{
  y:-30,
  opacity:0,
  rotation:30
})

  // ScrollTrigger.create(
  //   {

  //   }
  // )
}

const canvas = ref(null)
onMounted(()=> {
  const app = new Application(canvas.value);
  app.load("public/spline/rabbit.spline");
  setTimeout(() => {
      animate1()

  }, 3000);
})


</script>
<style scoped></style>
