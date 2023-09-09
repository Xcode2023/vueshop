<template>
  <el-alert type="warning" effect="light" show-icon closable
    >此页面为电脑端浏览，现已适配移动端——Odwr欧德薇儿</el-alert
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
</template>
<script setup>
import { ref, watch } from "vue";
import img1 from "@/images/alpha/logo.png";
import { useScroll } from "@vueuse/core";

const { x, y, isScrolling, arrivedState, directions } = useScroll(window);

watch(y, (v) => {
  console.log(v);
});

const logo = ref(img1);
const logoname = "欧德薇儿";
const array1 = [
  {
    name: "产品展示",
    img: "",
    txt: "",
    to: "",
  },
  {
    name: "N&A颜究室",
    img: "",
    txt: "",
    to: "",
  },
  {
    name: "产品总览",
    img: "",
    txt: "",
    to: "",
  },
  {
    name: "｜",
    img: "",
    txt: "",
    to: "",
  },
  {
    name: "刷酶报价",
    img: "",
    txt: "",
    to: "",
  },
  {
    name: "后退",
    img: "",
    txt: "",
    to: "",
  },
  {
    name: "搜索",
    img: "",
    txt: "",
    to: "",
  },
];

const array2 = [
  {
    name: "公司简介",
    icon: "bi bi-banek",
    prop: "weilan",
    to: "/about",
  },
  {
    name: "我们的企业信仰",
    icon: "bi bi-heart-pulse-fill",
    prop: "weilan",
    to: "/template/1",
  },
  {
    name: "进口设备展示",
    icon: "bi bi-heart-pulse-fill",
    prop: "weilan",
    to: "",
  },
  {
    name: "我们的企业信仰",
    icon: "bi bi-safe2-fill",
    prop: "weilan",
    to: "",
  },
  {
    name: "高端萃取技术",
    icon: "bi bi-heart-pulse-fill",
    prop: "weilan",
    to: "",
  },
  {
    name: "德国进口原料",
    icon: "bi bi-flower1",
    prop: "weilan",
    to: "",
  },
  {
    name: "Odm Area",
    icon: "bi bi-share-fill",
    prop: "weilan",
    to: "",
  },
  {
    name: "信息反馈",
    icon: "bi bi-send-check-fill",
    prop: "weilan",
    to: "",
  },
  {
    name: "售后服务",
    icon: "bi bi-headset",
    prop: "weilan",
    to: "",
  },
];
const array3 = [
  {
    name: "欧石楠",
    img: "https://pic.imgdb.cn/item/62c439b55be16ec74afffbe5.png",
    prop: "oushinan",
    to: "/template/1",
  },
  {
    name: "白薇沁润莹肌面膜",
    img: "https://pic.imgdb.cn/item/62c439b55be16ec74afffb93.png",
    prop: "baiwei",
    to: "/template/1",
  },
  {
    name: "寡肽冻干粉",
    img: "https://pic.imgdb.cn/item/62c439b55be16ec74afffbd9.png",
    prop: "",
    to: "/template/1",
  },
  {
    name: "那片蔚蓝色",
    img: "https://pic.imgdb.cn/item/62c439b55be16ec74afffbaa.png",
    prop: "weilan",
    to: "/template/1",
  },
  {
    name: "乳酸菌",
    img: "https://pic.imgdb.cn/item/62c439b55be16ec74afffc24.png",
    prop: "rusuan",
    to: "/template/1",
  },
  {
    name: "家居护肤系列",
    img: "https://pic.imgdb.cn/item/62c439b55be16ec74afffc50.png",
    prop: "jiaju",
    to: "/template/1",
  },
  {
    name: "套盒护肤系列",
    img: "https://pic.imgdb.cn/item/62c439b55be16ec74afffc99.png",
    prop: "weilan",
    to: "/template/1",
  },
  {
    name: "院装护肤系列",
    img: "https://pic.imgdb.cn/item/62c439b55be16ec74afffbd3.png",
    prop: "weilan",
    to: "/template/1",
  },
];
</script>
