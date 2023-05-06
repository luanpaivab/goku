export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home Page",
    component: () =>
    import("@/modules/home/views/Home.vue"),
  },
];
