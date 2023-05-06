<template>
  <base-page-layout :title="pageTitle">
    <div class="title">
      <h2>Desenvolvedor Web Front-end</h2>
    </div>
    <div class="content">
      <div>
        <ul>
          <li>
            <p><span>CEP: </span>Belém, Pará, Brasil</p>
          </li>
          <li>
            <p><span>Formação: </span>Engenharia da Comutação / UFPA - 2023</p>
          </li>
          <li>
            <p><span>Nascimento: </span> 10 / 07 / 1994</p>
          </li>
        </ul>
        <p class="perfil">
          Sou desenvolvedor Front-end com experiência de 3+ anos em aplicações
          single page utilizando vue.js. Tenho experiência também em:
          versionamento de projetos em Git; práticas de Code Review, feedback e
          orientações/instruções de melhorias contínuas de desenvolvimento;
          desenvolvimento orientado a testes; refatorações de códigos;
          metodologias Scrum.
        </p>
      </div>
      <img
        src="@/assets/person-managing-digital-tasks.png"
        alt="sobre mim img"
      />
    </div>
    <div class="second-part">
      <h3>Objetivo</h3>
      <p>
        Procuro alavancar minhas habilidades técnicas, desenvolver e melhorar
        projetos em vue. Implementar código limpo e de fácil manutenção. Também procuro uma chance de atuar ou participar de projetos com React ou Angular.
      </p>
    </div>
  </base-page-layout>
</template>
  
  <script>
import BasePageLayout from "@/components/BasePageLayout.vue";
export default {
  components: { BasePageLayout },
  computed: {
    pageTitle() {
      return "Sobre mim";
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.title {
  margin: 30px 0;
  & h2 {
    font-size: 42px;
    text-align: center;
    color: #5f2e7a;
    letter-spacing: -1.5px;
  }
}
.content {
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
  & ul {
    list-style: none;
    padding: 0;
  }

  & li p {
    font-size: 20px;
    letter-spacing: -1px;
    font-weight: 700;
    color: #5b5a5a;
    margin: 10px 0;
  }
  & li span {
    color: #5f2e7a;
    font-weight: 700;
    margin-right: 10px;
  }
  & .perfil {
    font-size: 24px;
    letter-spacing: -1px;
    text-indent: 50px;
    text-align: justify;
    font-weight: 400;
    color: #5b5a5a;
    margin-top: 20px;
  }
  & img {
    height: 400px;
    width: 550px;
  }
}
.second-part {
    margin-bottom: 80px;
  & h3 {
    font-size: 28px;
    color: #333333;
    letter-spacing: -1px;
  }
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