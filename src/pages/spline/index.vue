<template>
  <main ref="box"><canvas id="canvas3d" ref="canvas"></canvas></main>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { Application } from "@splinetool/runtime";

const box = ref();

const animate1 = () => {
  gsap.from(canvas.value, {
    y: -30,
    opacity: 0,
    rotation: 30,
  });
};

const canvas = ref(null);
onMounted(() => {
  const app = new Application(canvas.value);
  app.load("public/spline/rabbit.spline");
  // const parallaxInstance = new Parallax(box.value, {
  //   relativeInput: true,
  // });
  // parallaxInstance.friction(0.2, 0.2);
});
</script>
<style scoped></style>
