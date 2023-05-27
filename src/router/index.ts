import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import Projects from "../views/Projects/Projects.vue";
import Contact from "../views/Contact/Contact.vue";

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
