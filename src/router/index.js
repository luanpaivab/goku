import Vue from "vue";
import VueRouter from "vue-router";
import paths from "./paths";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: paths,
});
