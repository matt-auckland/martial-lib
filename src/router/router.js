import Vue from "vue";
import VueRouter from "vue-router";
import Technique from "../views/Technique.vue";
import Home from "../views/Home.vue";
import Category from "../views/Category.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "Categories",
    children: [
      {
        path: "/",
        component: Category,
        name: "Categories",
      },
      { path: "/:category", component: Category },
      { path: "/:category/:subcategory/", component: Category },
      { path: "/:category/:subcategory/:technique", component: Technique },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
