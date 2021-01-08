import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Schedule from "../views/Schedule.vue"
import Team from "../views/Team.vue"
import Sponsors from "../views/Sponsors.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    component: Sponsors
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
