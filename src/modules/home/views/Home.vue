<template>
  <base-page-layout :title="pageTitle">
    <div class="content">
      <div>
        <p>
          Bem-vindos ao meu portfólio web! Meu nome é Luan e sou um
          desenvolvedor Front-End com mais de três anos de experiência. Este
          portfólio foi criado para apresentar meus projetos anteriores,
          experiências e mostrar minhas habilidades e conhecimentos técnicos em
          Vue.js, bem como em outras tecnologias e técnicas de Front-End e
          também para eu poder falar um pouco de mim.
        </p>
        <p>
          Como desenvolvedor Front-End, acredito que é importante ter um
          portfólio para apresentar meu trabalho e demonstrar minhas habilidades
          de forma mais acessível para os tech recruiters, clientes e outros
          devs que podem se basear neste para poder criar o seu próprio
          portfólio.
        </p>
      </div>
      <img src="@/assets/welcome.png" alt="welcome img" />
    </div>
    <div class="second-part">
      <p>
        Além disso, criar este portfólio web me permitiu pensar um pouco fora da
        caixa e trabalhar mais minhas habilidades de design, desafiando-me a
        criar uma experiência de usuário atraente e intuitiva enquanto aplicava
        as melhores práticas de desenvolvimento.
      </p>
      <p>
        Espero que você goste de navegar pelo meu portfólio e ver meu trabalho
        em ação. Sinta-se à vontade para entrar em contato comigo caso tenha
        alguma oportunidade de trabalho ou tenha alguma pergunta.
      </p>
      <p>Obrigado por visitar meu portfólio web</p>
    </div>
  </base-page-layout>
</template>

<script>
import BasePageLayout from "@/components/BasePageLayout.vue";
export default {
  components: { BasePageLayout },
  computed: {
    pageTitle() {
      return "Home";
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  & p {
    font-size: 24px;
    letter-spacing: -1px;
    text-indent: 50px;
    text-align: justify;
    font-weight: 500;
    color: #5b5a5a;
  }
  & img {
    height: 400px;
    width: 550px;
  }
}

.second-part {
  & p {
    font-size: 24px;
    letter-spacing: -1px;
    text-indent: 50px;
    text-align: justify;
    font-weight: 500;
    color: #5b5a5a;
  }
}


@media only screen and (max-width: 1251px) {
  .content {
    & img {
      height: 250px;
      width: 350px;
    }
  }
}
</style>