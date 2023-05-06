<template>
  <article class="base-layout" fluid>
    <div class="header-content"></div>
    <v-container class="title">
        <h2>{{title}}</h2>
    </v-container>
    <v-container class="content-slot">
      <slot></slot>
    </v-container>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.base-layout {
  position: relative;
}
.title {
    margin-bottom: 34px;
}
.title h2 {
  font-size: 38px;
  letter-spacing: -1px;
  font-weight: bold;
  color: #333333;
  position: relative;
  bottom: -20px;
}
.header-content {
  height: 100px;
  background-image: url("@/assets/bg-coffee.jpg");
  background-repeat: no-repeat;
  background-position: 50% 67%;
  background-size: cover;
  width: 100%;
  opacity: 0.3;
  position: absolute;
  top: 0;
}
</style>