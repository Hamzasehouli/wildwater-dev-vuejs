import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(_, _1, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
  linkActiveClass: "active",
});

export default router;
