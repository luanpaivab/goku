<template>
  <footer>
    <v-container class="my-footer">
      <p>Developed by <strong>Me</strong> !</p>
      <div class="contacts">
        <div class="line-contacts">
          <v-icon color="#d9d9d9">mdi-gmail</v-icon>
          <p>luanpb0511@gmail.com</p>
        </div>
        <div class="line-contacts">
          <v-icon color="#d9d9d9">mdi-github</v-icon>
          <a v-bind:href="github" target="_blank"
            >https://github.com/luanpaivab</a
          >
        </div>
        <div class="line-contacts">
          <v-icon color="#d9d9d9">mdi-linkedin</v-icon>
          <a v-bind:href="linkedin" target="_blank"
            >https://www.linkedin.com/in/luanpaivab/</a
          >
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script>
export default {
  computed: {
    linkedin() {
      return "https://www.linkedin.com/in/luanpaivab/";
    },
    github() {
      return "https://github.com/luanpaivab";
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  height: 30vh;
  background: #333333;
}
.my-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.my-footer p {
  color: #d9d9d9;
}

.my-footer strong {
  text-decoration: underline;
}

.line-contacts {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.line-contacts p, a{
  margin: 0 0 0 10px;
}

.line-contacts a{
  text-decoration: none;
  color: #d9d9d9;
}

.line-contacts a:hover{
  text-decoration: underline;
  color: #d9d9d9;
}
</style>