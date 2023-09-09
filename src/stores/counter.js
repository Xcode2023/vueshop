import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const doubleCount = computed(() => count.value * 2);
  const shopList = {
    1: [
      {
        name: "商品1",
        text: "shop1",
        advantage: ["植物原萃", "沁爽无害", "", ""],
        imgList: ["../images/fule/001.jpg", "../images/goongchang/aaa2.png"],
      },
    ],
    2: [
      {
        name: "1",
        text: "shop1",
        advantage: ["植物原萃", "沁爽无害", "", ""],
        imgList: ["../images/fule/001.jpg", "../images/goongchang/aaa2.png"],
      },
    ],
  };
  const routerArray = [];
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment, shopList, routerArray };
});
