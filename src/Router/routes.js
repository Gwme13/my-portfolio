import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/home/HomePage.vue"

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: HomePage}
],
});

export default routes;