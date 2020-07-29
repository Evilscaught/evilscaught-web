import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("@/views/Todos.vue"),
  },
  {
    path: "/photos",
    name: "Photos",
    component: () => import("@/views/Photos.vue"),
  },
  {
    path: "/employees",
    name: "Employees",
    component: () => import("@/views/Employees.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
