import { createWebHashHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      name: "Doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "/doc/intro", component: Intro },
        { path: "/doc/button", component: Button },
        { path: "/doc/Tabs", component: Tabs },
      ],
    },
  ],
});

export default router;
