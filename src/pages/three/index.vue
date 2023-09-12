<template>
  <div>
    <div ref="webgiCanvasContainer" id="webgi-canvas-container">
      <canvas
        class="w-100 h-100 rounded-2"
        ref="webgiCanvas"
        id="webgi-canvas"
      ></canvas>
      <button
        @click="animateStart()"
        type="button"
        id="animate"
        class="btn btn-outline-primary"
      >
        {{ theplace }}
      </button>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { setupViewer } from "./webgi.js";
import { animationFuntion } from "./animate.js";
const webgiCanvasContainer = ref();
const webgiCanvas = ref();
let position, target, theplace;
const getplace = async () => {
  const place = await axios("https://ip.useragentinfo.com/json");
  console.log(place.data);
  theplace = place.data;
};getplace();

onMounted(async () => {
  const getPosition = await setupViewer(webgiCanvas.value);
  console.log(getPosition);

  postion = getPosition.position;
  target = postion.target;

});
const animateStart = function () {
  animationFuntion(position, target);
};

</script>
<style scoped>
#webgi-canvas-container {
  width: 80vw;
  height: 80vh;
  margin: 10vh 10vw;
  border-radius: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}
</style>
