import Vue from "vue";
import VueRouter from "vue-router";
import Exchange from "../views/Exchange.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Exchange",
    component: Exchange
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
