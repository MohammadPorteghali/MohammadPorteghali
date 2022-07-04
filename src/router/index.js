import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/components/Landing";
import Demos from "@/components/Demos";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing,
  },
  {
    path: "/demos",
    name: "demos",
    component: Demos,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
