import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import axios from "axios";
import { createI18n } from 'vue-i18n'
import ElementPlus from "element-plus";

import * as bootstrap from "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "element-plus/dist/index.css";
import en from "./i18n/en";
import zh from "./i18n/zh";
import "aos/dist/aos.css";
import "@/assets/css/reset.css";
import "@/assets/css/scoll.css";

import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";

import "bootstrap-icons/font/bootstrap-icons.css";


const i18n = createI18n({
    locale: 'zh',
    allowComposition: true,
    messages: {
      en: en,
      zh: zh 
    }
  })

  
const app = createApp(App);
app.config.globalProperties.axios = axios;
// app.use(TDesign);
app.use(createPinia());
app.use(router);
app.use(i18n)
app.use(ElementPlus);
app.mount("#app");
