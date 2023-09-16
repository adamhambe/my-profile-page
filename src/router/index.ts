import { createRouter, createWebHistory } from "vue-router";

const routes = [

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    const navbar = document.querySelector("#navbar");
    const navbarHeight = navbar?.clientHeight;
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "auto",
        top: navbarHeight,
      };
    }
  },
});

export default router;
