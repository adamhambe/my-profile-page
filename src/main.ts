import { createApp } from "vue";
import App from "./App.vue";
import Home from "./views/Home/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import ExpenseTracker from "./views/ExpenseTracker/ExpenseTracker.vue";
import HabitTracker from './views/HabitTracker/HabitTracker.vue';
import FitnessTracker from "./views/FitnessTracker/FitnessTracker.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/expense-tracker", name: "expense-tracker", component: ExpenseTracker },
    { path: "/habit-tracker", name: "HabitTracker", component: HabitTracker },
    { path: "/fitness-tracker", name: "FitnessTracker", component: FitnessTracker },
  ],
});

createApp(App).use(router).mount("#app");
