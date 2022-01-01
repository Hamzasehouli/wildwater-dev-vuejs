<template>
  <transition appear>
    <keep-alive><the-header class="header"></the-header></keep-alive
  ></transition>

  <section :style="{ 'background-image': path }" class="hero">
    <svg class="icon" @click="scrollUp">
      <use href="sprite.svg#icon-chevron-left"></use>
    </svg>
    <div class="hero__infos">
      <div>
        <h1>{{ title }}</h1>
        <p><router-link to="/">Home </router-link>> {{ title }}</p>
      </div>
      <p class="hero__info-para">
        {{ para }}
      </p>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { toRefs, onMounted } from "vue";
export default {
  props: ["obj"],
  setup(props) {
    const store = useStore();
    const { title, para, path } = toRefs(props.obj);

    onMounted(function () {
      const hero = document.querySelector(".hero");
      const chevron = document.querySelector(".icon");

      let callback = (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting || entry.boundingClientRect.y === 0) {
          store.dispatch("inter", false);

          chevron.style.opacity = 0;
          chevron.style.visibility = "hidden";
        } else {
          store.dispatch("inter", true);
          chevron.style.opacity = 1;
          chevron.style.visibility = "visible";
        }
      };
      let options = {
        root: null,
        threshold: 0.7,
      };

      let observer = new IntersectionObserver(callback, options);
      observer.observe(hero);
    });
    const scrollUp = function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    return { title, para, path, scrollUp };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  font-size: 8rem;
  @media only screen and (max-width: 56rem) {
    font-size: 6rem;
  }
  @media only screen and (max-width: 33rem) {
    font-size: 3rem;
  }
}
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999999;
}
.hero {
  min-height: 90vh;
  position: relative;
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 56rem) {
    min-height: 100vh;
  }
  &__infos {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 70%;

    font-size: 2.3rem;
    div {
      display: flex;
      color: white;
      justify-content: space-between;
      align-items: center;
      padding-right: 1rem;
      font-size: 1.3rem;
      @media only screen and (max-width: 33rem) {
        flex-direction: column;
      }
      @media only screen and (max-width: 56rem) {
        padding: 2rem;
      }

      a {
        text-decoration: none;
        color: inherit;
        border-bottom: 1px solid transparent;
        transition: all 0.3s;

        &:hover {
          border-bottom: 1px solid white;
        }
      }
    }
    .hero__info-para {
      padding: 4.5rem;
      background-color: rgb(255, 255, 255);
      @media only screen and (max-width: 33rem) {
        padding: 2rem;
      }
    }
    @media only screen and (max-width: 56rem) {
      font-size: 1.6rem;
      width: 100%;
    }
  }
}
.v-enter-from {
  opacity: 0;
  transform: translateY(-2rem);
}
.v-enter-active {
  transition: all 0.7s;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.icon {
  width: 5rem;
  height: 5rem;
  background-color: var(--color-primary);
  position: fixed;
  bottom: 6rem;
  right: 5rem;
  fill: white;
  transform: rotate(90deg);
  z-index: 9999;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  @media only screen and (max-width: 33rem) {
    width: 2rem;
    height: 2rem;
    bottom: 12rem;
    right: 2rem;
    background-color: var(--color-secondary);
  }
}
</style>
