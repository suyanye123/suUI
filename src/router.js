import { createWebHashHistory, createRouter } from "vue-router";
import introduce from "./views/introduce.vue";
import home from "./views/home.vue";
import Intro from "./components/Intro.vue";
import Button from "./components/ButtonDemo.vue";
import Dialog from "./components/DialogDemo.vue";
import Switch from "./components/SwitchDemo.vue";
import Tabs from "./components/TabsDemo.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: introduce,
    },
    {
      path: "/home",
      component: home,
      children: [
        {
          path: "",
          redirect: "/home/intro",
        },
        {
          path: "/home/intro",
          component: Intro,
        },
        {
          path: "/home/button",
          component: Button,
        },
        {
          path: "/home/dialog",
          component: Dialog,
        },
        {
          path: "/home/switch",
          component: Switch,
        },
        {
          path: "/home/tabs",
          component: Tabs,
        },
      ],
    },
  ],
});

export default router;
