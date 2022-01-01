<template>
  <main><router-view> </router-view></main>
  <the-footer v-if="route.path !== '/'"></the-footer>
</template>
<script>
import { useRoute } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
// import TheHeader from "./components/TheHeader.vue";
export default {
  components: { TheFooter },
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,300&display=swap");

:root {
  --color-primary-light: hsl(165, 100%, 40%);
  --color-primary: #00cc99;
  --color-primary-dark: #00cc99;

  --color-secondary-light: hsla(345, 100%, 60%, 0.6);
  --color-secondary: hsl(345, 100%, 60%);
  --color-secondary-dark: hsla(345, 100%, 60%, 0.9);

  --color-tertiary-light: hsla(217, 100%, 36.5%, 0.6);
  --color-tertiary: rgb(0, 71, 186);
  --color-tertiary-dark: hsla(217, 100%, 36.5%, 0.9);
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
}
body {
  font-weight: 400;
  font-size: 1.6rem;
  font-family: "Lato", sans-serif;
}

// main {
//   max-width: 1420px;
//   min-height: 100vh;
//   margin: 0 auto;
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
//   transform: translateY(-3rem);
// }
// .fade-enter-active,
// .fade-leave-active {
//   transition: all 0.4s;
// }
// .fade-enter-to,
// .fade-leave-from {
//   opacity: 1;
//   transform: translateY(0);
// }

.active {
  background-color: var(--color-secondary) !important;
  padding: 0.2rem 0.5rem;
}
h2 {
  color: var(--color-tertiary);
  margin-bottom: 1rem;
}
.globalPara {
  line-height: 150%;
  font-size: 1.8rem;
}
</style>
