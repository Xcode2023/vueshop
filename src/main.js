import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import axios from "axios";

import ElementPlus from "element-plus";

import * as bootstrap from "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "element-plus/dist/index.css";

import "aos/dist/aos.css";
import "@/assets/css/reset.css";
import "@/assets/css/scoll.css";

import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(TDesign);
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount("#app");
