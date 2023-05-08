<template>
  <v-app>
    <toolbar />
    <v-main class="main-layout">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "App",

  components: {
    Toolbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
.v-application {
  font-family: "Lato", sans-serif !important;
}
.main-layout {
  background: #f5f5f5;
}

</style>