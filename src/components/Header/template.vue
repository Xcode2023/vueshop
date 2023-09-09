<template>
  <section class="row">
    <main class="col-md-6"></main>
    <main class="col-md-6">
      <h2>{{ shopList[type][0].name }}</h2>
      <p>{{ shopList[type][0].text }}</p>
      <h2 v-for="(x, y) in shopList[type][0].advantage" :key="y">
        {{ x }}
      </h2>
      <p></p>
    </main>
  </section>
</template>
<script setup>
import { useCounterStore } from "@/stores/counter";
const mydata = defineProps({
  type: String,
});
const { shopList } = useCounterStore();
</script>
<style scoped></style>
