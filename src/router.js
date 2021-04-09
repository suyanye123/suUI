import { createWebHashHistory, createRouter } from "vue-router";
import Doc from "./views/doc.vue";
import Home from "./views/home.vue";
import Intro from "./components/doc/intro.vue";
import GetStart from './components/doc/getStart.vue'
import Button from "./components/doc/ButtonDemo.vue";
import Dialog from "./components/doc/DialogDemo.vue";
import Switch from "./components/doc/SwitchDemo.vue";
import Tabs from "./components/doc/TabsDemo.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "",
          redirect: "/doc/intro",
        },
        
        {
          path: "/doc/intro",
          component: Intro,
        }, {
          path: "/doc/getstart",
          component: GetStart,
        },
        {
          path: "/doc/button",
          component: Button,
        },
        {
          path: "/doc/dialog",
          component: Dialog,
        },
        {
          path: "/doc/switch",
          component: Switch,
        },
        {
          path: "/doc/tabs",
          component: Tabs,
        },
      ],
    },
  ],
});

export default router;
