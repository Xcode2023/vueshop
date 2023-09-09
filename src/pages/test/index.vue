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
        ><img :src="logo" ref="el" alt="" style="width: 140px"
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
          <li class="nav-item dropdown text-center" v-for='(x,y) in routerArray1' :key='y'   >
            <a
              class="nav-link dropdown-toggle text-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             {{ x.name }}
            </a>
            <ul class="dropdown-menu">
              <li
                class="dropdown-item"
                href="#"
                v-for="(x, y) in x.children"
                :key="y"
              >
                <a></a>{{ x.name }}
              </li>
            </ul>
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
import img1 from "@/images/alpha/logo.png";
import { storeToRefs } from "pinia";
import { useScroll } from "@vueuse/core";
import { useProdcutStore } from "@/stores/product.js";
const { x, y, isScrolling, arrivedState, directions } = useScroll(window);
const productStore = storeToRefs(useProdcutStore());
const { routerArray1, newimg, routerArray2, routerArray3, logoname } =
  productStore;
watch(y, (v) => {});

const logo = ref(img1);
</script>
