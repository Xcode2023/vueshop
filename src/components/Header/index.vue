<template>
  <el-alert type="warning" effect="light" show-icon closable
    >此页面为手机端浏览，内容有限，为展示完美视觉效果请移步桌面端——Odwr欧德薇儿</el-alert
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
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about"
              >产品展示</router-link
            >
          </li>

          <li class="nav-item text-center">
            <el-dropdown :hide-on-click="false" class="nav-link">
              <span class="el-dropdown-link"> N&A颜究室 </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-for="(x, y) in array3" :key="y" divided
                    ><router-link :to="x.to" class="dropdown-item text-center">
                      <p>{{ x.name }}</p>
                    </router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li class="nav-item text-center">
            <el-dropdown :hide-on-click="false" class="nav-link">
              <span class="el-dropdown-link"> 产品总览 </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-for="(x, y) in array2" :key="y" divided
                    ><router-link :to="x.to" class="dropdown-item text-center">
                      <p>{{ x.name }}</p>
                    </router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>

          <li class="nav-item d-sm-none k d-lg-block d-xxl-block">
            <router-link to="" class="nav-link disabled">|</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#"> 企业文化</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">刷酶报价</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link">联系我们</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="搜索"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
  <img  alt="">
</template>
<script setup>
import { ref, watch } from "vue";
import img1 from "@/images/alpha/logo.png";
import searsh from '../autocomplate.vue'
import { storeToRefs } from "pinia";
import { useScroll } from "@vueuse/core";
import { useProdcutStore } from "@/stores/product.js";
const { x, y, isScrolling, arrivedState, directions } = useScroll(window);
const productStore = storeToRefs(useProdcutStore());
const { routerArray1, newimg,routerArray2, routerArray3, logoname } = productStore;
watch(y, (v) => {
  console.log(v);
});

const logo = ref(img1);
</script>
