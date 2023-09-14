import { createRouter, createWebHistory } from "vue-router";
import index from "@/pages/Index/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: index,
    },
    {
      path: "/three",
      name: "three",
      component: () => import("@/pages/three/index.vue"),
    },

    {
      path: "/about",
      component: () => import("@/pages/About/index.vue"),
    },
    {
      path: "/connection",
      component: () => import("@/pages/connection/index.vue"),
    },

    {
      path: "/template/:type",
      component: () => import("@/components/Header/template.vue"),
      props: true,
    },
    {
      path: "/test",
      component: () => import("@/pages/test/index.vue"),
      props: true,
    },
    {
      path: "/spline",
      component: () => import("@/pages/spline/index.vue"),
      props: true,
    },
  ],
});

export default router;
