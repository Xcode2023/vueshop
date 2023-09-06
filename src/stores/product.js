import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import img0 from "@/images/alpha/indexbanner.png";
import img1 from "@/images/header/sdsd.png";
import img2 from "@/images/nanda/jihe.png";
export const useProdcutStore = defineStore("product", () => {
  const logoname = "欧德薇儿";
  const altname = "颜究室";
  const titlename = "欧德薇儿颜究室";
  const routerArray1 = reactive([
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
  ]);

  const routerArray2 = reactive([
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
  ]);
  const routerArray3 = reactive([
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
  ]);

  const indexImgList = reactive([
    {
      img: img0,
      class: "",
    },
    {
      img: img1,
      class: "",
    },
    {
      img: img2,

      class: "",
    },
    {
      img: "https://pic.imgdb.cn/item/62fc78e116f2c2beb16e1e48.png",

      class: " d-none d-sm-block d-xs-block d-md-none d-lg-none",
    },
    {
      img: "https://pic.imgdb.cn/item/62c439b65be16ec74a0001e2.png",

      class: "",
    },
    {
      img: "https://pic.imgdb.cn/item/62c439b65be16ec74affff3a.jpg",

      class: "",
    },
  ]);
  return {
    routerArray1,
    logoname,
    routerArray2,
    routerArray3,
    altname,
    titlename,
    indexImgList,
  };
});
