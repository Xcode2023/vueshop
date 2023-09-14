<template>
  <div>
    <div ref="webgiCanvasContainer" id="webgi-canvas-container">
      <canvas
        class="w-100 h-100 rounded-2"
        ref="webgiCanvas"
        id="webgi-canvas"
      ></canvas>
      <button
        @click="definAnimation()"
        type="button"
        id="animate"
        class="btn btn-primary"
        ref="theplace"
      ></button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { setupViewer } from "./webgi.js";
import { animationFuntion } from "./animate.js";
// import { placeFuntion } from "@/api/getplace.js";

// const definePlace = async function (displayElement, ipPlace) {
//   try {
//     displayElement.value = ipPlace.data;
//   } catch (error) {
//     throwError();
//   }

//   console.log(displayElement.value);
// };
// const { getplace } = await placeFuntion();
// await definePlace(getplace);
const webgiCanvasContainer = ref();
const webgiCanvas = ref();
const theplace = ref([]);
let position, target;

// const definePosition = async function (t) {
//   position = t.position;
//   target = t.target;
//   console.log(position, target);
// };

const animateStart = async function (position, target) {
  definAnimation = animationFuntion(position, target);
};
// getplace();

onMounted(async () => {
  const getPosition = await setupViewer(webgiCanvas.value);
  // await definePosition(getPosition);
  // await animateStart(position, target);
});
</script>
<style scoped>
#webgi-canvas-container {
  width: 90vw;
  height: 80vh;
  margin: 10vh 5vw;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}
</style>
