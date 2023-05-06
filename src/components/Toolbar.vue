<template>
  <header>
    <v-container class="toolbar">
      <div class="toolbar__me">
        <div class="new-img"></div>
        <div class="toolbar__me__title">
          <h2>Luan Paiva Barbosa</h2>
          <img
            class="toolbar__me__underline"
            src="@/assets/unnderlin2.png"
            alt="underline"
          />
        </div>
      </div>
      <div>
        <v-list class="menu">
          <v-list-item
            v-for="item in menu"
            :key="item"
            class="item"
            :to="item.to"
          >
            <v-list-item-content>
              <p class="content">
                {{ item.name }}
              </p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-container>
  </header>
</template>

<script>
export default {
  computed: {
    menu() {
      return [
        {
          name: "Home",
          to: "/home",
        },
        {
          name: "perfil",
          to: "/perfil",
        },
        {
          name: "Experiências",
          to: "/experiencias",
        },
        {
          name: "Conhecimentos",
          to: "/conhecimentos",
        },
        // {
        //   name: "Redes",
        //   to: "/redes",
        // },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: rgb(95, 46, 122);
  background: linear-gradient(
    90deg,
    rgba(95, 46, 122, 0.9613095238095238) 0%,
    rgba(114, 36, 138, 0.9697128851540616) 59%,
    rgba(130, 23, 164, 0.9473039215686274) 100%
  );
  height: 30vh;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  &__me {
    display: flex;
    align-items: center;
    & .new-img {
      width: 160px;
      height: 160px;
      border-radius: 100%;
      background-image: url("@/assets/perfil.jpeg");
      background-size: cover;
      background-position: center;
    }
    &__underline {
      height: 100px;
      width: 360px;
      position: relative;
      left: -15px;
    }
    & h2 {
      font-size: 34px;
      letter-spacing: -1px;
      color: #dbdbdb;
      font-weight: 700;
      margin-left: 30px;
      position: relative;
      bottom: -50px;
    }
  }
}

.menu {
  background: transparent !important;
  display: flex;
  justify-content: center;
  align-items: center;
  & .item {
    // background: red;
    width: 150px;
    // margin: 0 2px;
  }
  & .item:hover {
    background-color: rgba(59, 54, 54, 0.262);
    border-radius: 30px;
    // margin: 0 2px;
    color: transparent;
  }
  & .content {
    // background: red;
    margin: 0;
    color: #d9d9d9;
    letter-spacing: -1;
    font-size: 18px;
    font-weight: 700;
    text-align: center !important;
  }
}

.v-list-item--active {
  background-color: rgba(59, 54, 54, 0.262) !important;
  border-radius: 30px !important;
  color: transparent;
}

@media only screen and (max-width: 1260px) {
  // header {
  //   height: 35vh;
  // }
  .toolbar {
  margin: 0;
  }
}

@media only screen and (max-width: 1140px) {
  header {
    height: 35vh;
  }
  .toolbar {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
}
</style>