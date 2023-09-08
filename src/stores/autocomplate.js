import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("autocounter", () => {
  
const autoCounterArray=[
    { value: '主页', link: '/' },
    { value: '联系', link: 'https://github.com/ElemeFE/element' },
    { value: '企业', link: 'https://github.com/ElemeFE/cooking' },
    { value: '白薇', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
  return { autoCounterArray };
});
