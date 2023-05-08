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
        <v-card-text class="mt-7">
          <p class="resumo"><strong>Resumo desta experiência: </strong> {{ item.resumo }}</p>
        </v-card-text>
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
          resumo:
            "No meu primeiro emprego como desenvolvedor, tive a oportunidade de trabalhar em uma equipe multidisciplinar, com PM, PO, designer, QA, team leader, techlead e outros desenvolvedores. Durante 1 ano e meio, fiz parte de um setor específico de desenvolvedores que cuidavam do core business da empresa, onde pude solidificar minhas habilidades em HTML, CSS e JavaScript, além de me especializar em Vue.js. Durante este período, trabalhei em vários projetos, desde pequenas melhorias até grandes features, sempre com foco na qualidade e na entrega dentro do prazo e seguindo boas práticas de desenvolvimento, como os princípios SOLID e o uso de testes. Foi meu primeiro contato com uma equipe profissional e aprendi demais com cada um desenvolvendo bastante minhas soft skills. Foi uma experiência enriquecedora e desafiadora, que me permitiu crescer tanto pessoalmente quanto profissionalmente como desenvolvedor Front-End em Vue.js.",
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
          resumo:
            "No meu segundo estágio, tive a oportunidade de trabalhar exclusivamente no desenvolvimento Front-End com Vue.Js, trabalhando em um projeto grande e que exigia responsabilidade. Durante este período, pude aprimorar minhas habilidades em HTML, CSS, bootstrap e JavaScript, além de aprofundar meus conhecimentos em Vue.js, incluindo Vuex e Vue Router.  Além disso, tive a chance de trabalhar em colaboração com um desenvolvedor Back-End, o que me permitiu entender melhor as necessidades e desafios de desenvolvimento em equipe. Aprendi como é importante a comunicação clara e constante com os membros da equipe, bem como a importância de seguir boas práticas de desenvolvimento para garantir a qualidade do código.",
          revert: true,
        },
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
          resumo:
            "Foi o lugar onde pude ter o primeiro contato com a área de desenvolvimento de softwares, tive a oportunidade de trabalhar tanto no Front-End quanto no Back-End, tendo a chance de estudar e aplicar meus conhecimentos em diversas tecnologias. Na parte de Front-End, tive a oportunidade de trabalhar com HTML, CSS, bootstrap e JavaScript, além de frameworks como Vue.js. Já no Back-End, tive a chance de trabalhar com Node.js, Express e MySQL, desenvolvendo soluções para APIs e bancos de dados.",
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
    & .resumo {
      font-size: 16px;
      font-weight: 500;
      color: #212020c5;
      line-height: 25px;
      text-align: justify;
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
  line-height: 25px;
  font-weight: 500;

  &:before {
    content: "";
    display: block;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    border: 2px solid #ddd;
    position: absolute;
    top: -8px;
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