<template>
  <div class="app">
    <div>
      <Header></Header>
      <div>
        <router-view ref="rel"></router-view>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script setup>
import Header from "@/components/Header/index.vue";
import largeNav from "@/components/Header/largeNav.vue";
import Foot from "@/components/foot.vue";
import { ref } from "vue";
let Device = true;

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  Device = false;
} else {
  Device = true;
  console.log(Device);
  
  
}
</script>

<style scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.maindiv {
  flex: 1;
}
</style>
