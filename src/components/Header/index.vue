<template>
  <el-alert
    type="warning"
    effect="light"
    show-icon
    closable
    class="d-sm-block d-xs-block d-md-none d-lg-none"
    >此页面为手机端浏览,内容有限,为展示完美视觉效果请移步桌面端——Odwr欧德薇儿</el-alert
  >
  <nav class="navbar navbar-expand-lg navbar-light d-flex align-items-center">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><img src="public/images/alpha/logo.png" ref="el" alt="" style="width: 140px"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item dropdown text-center">
            <a
              class="nav-link dropdown-toggle text-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              N&A
            </a>
            <ul class="dropdown-menu">
              <li
                class="dropdown-item"
                href="#"
                v-for="(e, y) in routerArray2"
                :key="y"
              >
                <a></a>{{ e.name }}
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown text-center">
            <a
              class="nav-link dropdown-toggle text-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              公司简介
            </a>
            <ul class="dropdown-menu">
              <li
                class="dropdown-item"
                v-for="(x, y) in routerArray3"
                :key="y"
                href="#"
              >
                <a></a>{{ x.name }}
              </li>
            </ul>
          </li>
          <li class="nav-item text-center">
            <a class="nav-link">报价表</a>
          </li>
          <li class="nav-item text-center">
            <a class="nav-link">后退</a>
          </li>
        </ul>
        <form class="d-flex">
          <searsh />

          <button class="btn btn-outline-success" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, watch } from "vue";

import searsh from "../autocomplate.vue";
import { storeToRefs } from "pinia";
import { useScroll } from "@vueuse/core";
import { useProdcutStore } from "@/stores/product.js";
const { x, y, isScrolling, arrivedState, directions } = useScroll(window);
const productStore = storeToRefs(useProdcutStore());
const { routerArray1, newimg, routerArray2, routerArray3, logoname } =
  productStore;
watch(y, (v) => {});


</script>
