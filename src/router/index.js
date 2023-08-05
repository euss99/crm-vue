import { createRouter, createWebHistory } from "vue-router";
import ClientesView from "../views/ClientesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ClientesView,
    },
  ],
});

export default router;
