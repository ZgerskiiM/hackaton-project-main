import { createRouter, createWebHistory } from "vue-router";
import Main from "/src/components/Main.vue";
import Shop from "/src/components/Shop.vue";
import Settings from "/src/components/Settings.vue";
import TodoList from "/src/components/TodoList.vue";
import DailyReward from "/src/components/DailyReward.vue";
import Calendar from "/src/components/Calendar.vue"
import Family from "/src/components/Family.vue";



export const router = createRouter({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
    },
    {
      path: "/todolist",
      name: "TodoList",
      component: TodoList,
    },
    {
      path: "/daily",
      name: "Reward",
      component: DailyReward,
    },
    {
      path: "/calendar",
      name: "Calendar",
      component: Calendar,
    },
    {
      path: "/family",
      name: "Family",
      component: Family,
    },
  ],
  history: createWebHistory(),
});
