<template>
  <base-page-layout :title="pageTitle">
    <div class="main-languages mt-5">
      <h2 class="mb-5">Linguagens e Frameworks Principais</h2>
      <div class="content">
        <ul>
          <li
            v-for="item in experiences"
            :key="item"
            :style="`--accent-color: ${item.color}`"
          >
            <div class="icon">
              <v-icon color="#d9d9d9" size="60">mdi-{{item.icon}}</v-icon>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="descr">{{item.text}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-5">
      <h2>Linguagens e frameworks que possuo conhecimento.</h2>
      <div class="knowledge">
        <ul>
          <li
            v-for="item in knowledge"
            :key="item"
            :style="`--accent-color: ${item.color}`"
          >
            <div class="icon">
              <v-icon color="#f1f1f1" size="60">mdi-{{ item.icon }}</v-icon>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="descr">
              {{ item.text }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </base-page-layout>
</template>

<script>
import BasePageLayout from "@/components/BasePageLayout.vue";
export default {
  components: { BasePageLayout },
  computed: {
    pageTitle() {
      return "Conhecimentos";
    },
    experiences() {
      return [
        {
          icon: "language-javascript",
          title: "Javascript",
          text: "Experiência de 3+ anos com a linguagem",
          color: "#d2b53b",
        },
        {
          icon: "vuejs",
          title: "Vue Js",
          text: "Experiêncioa de 3+ anos com o framework",
          color: "#32663d",
        },
        {
          icon: "language-html5",
          title: "HTML 5",
          text: "Experiência de 3+ anos com a linguagem",
          color: "#ac2a1a",
        },
        {
          icon: "language-css3",
          title: "CSS 3",
          text: "Experiência de 3+ anos",
          color: "#da611e",
        },
        {
          icon: "vuetify",
          title: "Vuetify",
          text: "Experiência de 2+ anos",
          color: "#1286a8",
        },
      ];
    },
    knowledge() {
      return [
        {
          icon: "github",
          title: "Github",
          text: "Experiência em versionamento com Github",
          color: "#111211",
        },
        {
          icon: "graphql",
          title: "GraphQL",
          text: "Trabalhei 2+ anos utilizando GQL",
          color: "#2a9926",
        },
        {
          icon: "react",
          title: "React",
          text: "Familiaridade com react e redux",
          color: "#a62639",
        },
        {
          icon: "bootstrap",
          title: "Bootstrap",
          text: "3+ anos utilizando essa lib",
          color: "#ed6328",
        },
        {
          icon: "language-typescript",
          title: "Typescript",
          text: "Familiaridade com a linguagem",
          color: "#6a20b0",
        },
        {
          icon: "docker",
          title: "Docker",
          text: "Familiaridade com a ferramenta",
          color: "#d6cf3d",
        },
        {
          icon: "nodejs",
          title: "Node Js",
          text: "2+ anos trabalhando com Node como full stack",
          color: "#7aeb34",
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
    font-size: 38px;
}
.content {
  margin: 60px 0;
  & ul {
    --col-gap: 2rem;
    --barH: 1rem;
    --roleH: 2rem;
    --flapH: 2rem;

    width: min(60rem, 90%);
    margin-inline: auto;

    display: flex;
    flex-wrap: wrap;

    gap: var(--col-gap);
    padding-inline: calc(var(--col-gap) / 2);

    justify-content: center;
    align-items: flex-start;
    list-style: none;
  }
  & ul li {
    width: 10em;
    display: grid;
    grid-template:
      "role"
      "icon"
      "title"
      "descr";
    align-items: flex-start;
    gap: 1rem;
    padding-block-end: calc(var(--flapH) + 1rem);
    text-align: center;
    background: var(--accent-color);
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.6) var(--roleH),
      rgba(0, 0, 0, 0.4) calc(var(--roleH) + 0.5rem),
      rgba(0, 0, 0, 0) calc(var(--roleH) + 0.5rem + 5rem)
    );
    clip-path: polygon(
      calc(var(--col-gap) / -2 - 5px) 0,
      calc(100% + var(--col-gap) / 2 + 5px) 0,
      calc(100% + var(--col-gap) / 2 + 5px) calc(100% - var(--flapH)),
      50% 100%,
      calc(var(--col-gap) / -2 - 5px) calc(100% - var(--flapH))
    );
  }

  /* bar */
  & ul li::before {
    content: "";
    grid-area: role;
    height: var(--barH);
    width: calc(100% + var(--col-gap));
    margin-left: calc(var(--col-gap) / -2);
    margin-top: calc(var(--roleH) / 2 - var(--barH) / 2);
    background: grey;
    z-index: -1;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2) 30%,
      rgba(255, 255, 255, 0.1) 40%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.4)
    );
  }

  /* role */
  & ul li::after {
    content: "";
    grid-area: role;
    background: var(--accent-color);
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2) 30%,
      rgba(255, 255, 255, 0.1) 40%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.4)
    );
    height: var(--roleH);
  }

  & ul li .icon,
  ul li .title,
  ul li .descr {
    padding-inline: 1rem;
    color: white;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    // background: #d6cf3d;
  }

  & ul li .icon {
    font-size: 3rem;
  }
  & ul li .title {
    font-size: 1.25rem;
    font-weight: 700;
  }

  & ul li .descr {
    font-size: 1rem;
  }
}

.knowledge {
  margin: 60px 0 20px 0;
  & ul {
    width: min(60rem, 90%);
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    justify-content: center;
    gap: 2rem;
    list-style: none;
  }

  & ul li {
    max-width: 12rem;
    justify-self: center;
    display: grid;
    grid-template:
      "icon"
      "line"
      "dot"
      "title"
      "descr" 1fr;
    justify-items: center;
    align-items: flex-start;
    text-align: center;
    margin-bottom: 20px;
  }

  & ul li .icon {
    grid-area: icon;
    width: 6rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    color: white;
    font-size: 2.5rem;
    border: 0.4rem solid #f8f8f8;
    border-radius: 50%;
    background: var(--accent-color);
    box-shadow: -0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.45),
      inset -0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.45);
  }

  & ul li::before {
    content: "";
    grid-area: line;
    height: 2rem;
    border-right: 2px dotted currentColor;
  }

  & ul li::after {
    content: "";
    grid-area: dot;
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--accent-color);
    justify-self: center;
    margin-bottom: 0.5rem;
  }

  & ul li .title {
    grid-area: title;
    margin-block: 0.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }

  & ul li .descr {
    grid-area: descr;
    font-size: 1rem;
    text-align: center;
    font-weight: 700;
  }
}
</style>