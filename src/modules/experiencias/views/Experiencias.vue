<template>
  <base-page-layout :title="pageTitle">
    <div class="xp-content" v-for="item in experiencias" :key="item">
      <div class="date" v-if="item.revert">
        <p>{{ item.dataInicio }}</p>
        <p>{{ item.dataFinal }}</p>
      </div>
      <v-card class="xp-card" width="950">
        <p class="head">
          <span class="company">{{ item.company }}</span> – {{ item.role }} —
          {{ item.contract }}
        </p>
        <ol class="alternating-colors">
          <li v-for="name in item.text" :key="name">
            {{ name }}
          </li>
        </ol>
      </v-card>
      <div class="date" v-if="!item.revert">
        <p>{{ item.dataInicio }}</p>
        <p>{{ item.dataFinal }}</p>
      </div>
    </div>
    <div class="content">
      <v-progress-circular
      class="circle-top"
        :size="35"
        color="#333333"
        indeterminate
      ></v-progress-circular>
    </div>
    <div class="continue">
      <!-- <img src="@/assets/to-be-continued-one-piece.gif" alt=""> -->
    </div>
  </base-page-layout>
</template>

<script>
import BasePageLayout from "@/components/BasePageLayout.vue";
export default {
  components: { BasePageLayout },
  computed: {
    pageTitle() {
      return "Experiências";
    },
    experiencias() {
      return [
        {
          company: "Guarda Municipal de Belém",
          role: "Estagiário",
          contract: "Estágio",
          text: [
            "Criação e manutenção de uma aplicação single page utilizando vue.js e um servidor de aplicação utilizando node.js.",
            "Criação de endpoints e criação de recursos CRUD.",
            "Criação e manutenção de queries SQL no banco MySQL.",
            "Trabalho em conjunto com o cliente.",
          ],
          dataInicio: "OUTUBRO / 2020",
          dataFinal: "ABRIL / 2021",
          revert: false,
        },
        {
          company: "Advocacia Geral da União (AGU)",
          role: "Estagiário",
          contract: "Estágio",
          text: [
            "Criação e manutenção de um sistema responsável pelo cálculo previdenciário de processos judiciais.",
            "Design e layout do projeto desenhados no figma.",
            "Trabalho em conjunto com estagiário responsável pelo back-end do projeto.",
            "Estudo e implementação de metodologias ágeis.",
          ],
          dataInicio: "JULHO / 2021",
          dataFinal: "DEZEMBRO / 2021",
          revert: true,
        },
        {
          company: "Mercafacil",
          role: "Desenvolvedor Front-End Jr",
          contract: "Integral",
          text: [
            "Desenvolvimento e manutenção de aplicações web responsivas usando HTML, CSS e JavaScript in vue.Js.",
            "Trabalho em conjunto com a equipe de design para criar interfaces e experiências centradas no usuário.",
            "Trabalho em conjunto com desenvolvedores back-end para integrar o código front-end com a lógica do lado do servidor.",
            "Realização de testes automatizados para assegurar a qualidade da aplicação e a diminuição de bugs.",
            "Contribuição para a melhoria contínua dos processos e ferramentas de desenvolvimento.",
            "Participação em code reviews e feedbacks sobre a qualidade do código.",
            "Manutenção da documentação do código e repositório de códigos atualizado.",
          ],
          dataInicio: "SETEMBRO / 2021",
          dataFinal: "FEVEREIRO / 2023",
          revert: false,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.xp-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .xp-card {
    padding: 30px 30px;
    margin: 20px 0;
    //   width: 800px;
    & .head {
      font-size: 24px;
    }
    & .company {
      letter-spacing: -1px;
      font-weight: 700;
      color: #a32470;
    }
  }

  & .date {
    background: rgba(177, 152, 152, 0.463);
    width: 180px;
    height: 180px;
    padding: 20px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .date p {
    line-height: 8px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.5px;
    color: #333333;
    position: relative;
    top: 55px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 85px 0;
}

.continue {
  background: black;
  height: 450px;
  width: 100%;
  border-radius: 10px;
  background-image: url("@/assets/to-be-continued-one-piece.gif");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}

li {
  color: #414141;
  padding-left: 20px;
  margin-top: 26px;
  position: relative;
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;

  &:before {
    content: "";
    display: block;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    border: 2px solid #ddd;
    position: absolute;
    top: -12px;
    left: -34px;
  }
}

ol.alternating-colors {
  li:nth-child(odd):before {
    border-color: #8217a4;
  }
  li:nth-child(even):before {
    border-color: #333333;
  }
}
</style>