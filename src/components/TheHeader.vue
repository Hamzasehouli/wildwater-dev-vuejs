<template>
  <header>
    <nav :class="{ inter: interr && $route.path !== '/' }" class="nav">
      <teleport to="body"
        ><transition name="form"
          ><form v-if="formVisible" class="form" @submit.prevent="submitSearch">
            <input placeholder="Search" type="text" />
            <button @click="search" type="button">Close</button>
          </form></transition
        ></teleport
      >
      <teleport to="body">
        <div v-if="bar" class="newMenu">
          <span class="close" @click="closeMenu" type="button">X</span>
          <a class="logo__link" href="/"
            ><img class="logo" src="logo-white.png"
          /></a>
          <transition-group class="newLinks" tag="ul">
            <li key="about" class="newLinks__item">
              <button
                type="button"
                @click="clickAbout"
                class="newLinks__link"
                href="#"
              >
                <span>About</span
                ><svg><use href="sprite.svg#icon-chevron-right"></use></svg>
              </button>
              <ul v-if="about" class="newList">
                <headerlink-cmp
                  :data="about"
                  :key="about.designation"
                  v-for="about in abouts"
                ></headerlink-cmp>
              </ul>
            </li>
            <li key="brand" class="newLinks__item">
              <button
                @click="clickBrands"
                type="button"
                class="newLinks__link"
                href="#"
              >
                <span>Our brands</span
                ><svg><use href="sprite.svg#icon-chevron-right"></use></svg>
              </button>
              <ul v-if="bran" class="newList">
                <headerlink-cmp
                  :data="brand"
                  :key="brand.designation"
                  v-for="brand in brands"
                ></headerlink-cmp>
              </ul>
            </li>
            <li key="rr" class="newLinks__item">
              <button
                @click="clickEng"
                type="button"
                class="newLinks__link"
                href="#"
              >
                <span>Our engagements</span
                ><svg><use href="sprite.svg#icon-chevron-right"></use></svg>
              </button>
              <ul v-if="eng" class="newList">
                <headerlink-cmp
                  :data="eng"
                  :key="eng.designation"
                  v-for="eng in engs"
                ></headerlink-cmp>
              </ul>
            </li>

            <li key="es" class="newLinks__item">
              <router-link class="newLinks__link" to="/career"
                >Career</router-link
              >
            </li>
            <li key="qa" class="newLinks__item">
              <button
                @click="clickNews"
                type="button"
                class="newLinks__link"
                href="#"
              >
                <span>News</span
                ><svg><use href="sprite.svg#icon-chevron-right"></use></svg>
              </button>
              <ul v-if="news" class="newList">
                <headerlink-cmp
                  :data="actua"
                  :key="actua.designation"
                  v-for="actua in actuas"
                ></headerlink-cmp>
              </ul>
            </li>
          </transition-group>
          <social-links></social-links></div
      ></teleport>
      <a class="logo-link" href="/"
        ><img class="logo" src="logo-white.png"
      /></a>
      <div class="menu">
        <div class="sub-links">
          <svg @click="search" class="search-btn">
            <use href="sprite.svg#icon-search"></use>
          </svg>

          <!-- <a target="_blank" class="order-link" href="#"
            ><svg><use href="sprite.svg#icon-cart"></use></svg
            ><span>Order</span></a
          > -->
          <social-links></social-links>
          <div @click="clickBar" class="mediaBox">
            <span class="mediaBtn"></span>
          </div>
        </div>
        <ul class="links">
          <li class="links__item">
            <a class="links__link" href="#">About</a>
            <ul class="list">
              <headerlink-cmp
                :data="about"
                :key="about.designation"
                v-for="about in abouts"
              ></headerlink-cmp>
            </ul>
          </li>
          <li class="links__item">
            <a class="links__link" href="#">Our brands</a>
            <ul class="list">
              <headerlink-cmp
                :data="brand"
                :key="brand.designation"
                v-for="brand in brands"
              ></headerlink-cmp>
            </ul>
          </li>
          <li class="links__item">
            <a class="links__link" href="#">Our engagements</a>
            <ul class="list">
              <headerlink-cmp
                :data="eng"
                :key="eng.designation"
                v-for="eng in engs"
              ></headerlink-cmp>
            </ul>
          </li>

          <li class="links__item">
            <router-link class="links__link" to="/career">Career</router-link>
          </li>
          <li class="links__item">
            <a class="links__link" href="#">News</a>
            <ul class="list">
              <headerlink-cmp
                :data="actua"
                :key="actua.designation"
                v-for="actua in actuas"
              ></headerlink-cmp>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const about = ref(false);
    const bran = ref(false);
    const eng = ref(false);
    const news = ref(false);
    const bar = ref(false);

    const store = useStore();
    const abouts = ref([
      { path: "/our-mission", designation: "Our Mission" },
      { path: "/our-history", designation: "Our history" },
      { path: "/our-governance", designation: "Our Governance" },
      { path: "/our-values", designation: "Our Values" },
    ]);
    const brands = ref([{ path: "/velenia", designation: "Velenia" }]);
    const actuas = ref([
      { path: "/news", designation: "News" },
      { path: "/press", designation: "Press" },
    ]);
    const engs = ref([
      { path: "/absolute-quality", designation: "Absolute quality" },
      { path: "/environment", designation: "Environment" },
      { path: "/our-collaborators", designation: "Our collaborators" },
      { path: "/our-communitites", designation: "Our communitites" },
      { path: "/our-partner", designation: "Our partners" },
    ]);

    const search = () => {
      store.dispatch("search");
    };

    const formVisible = computed(function () {
      return store.getters.getSearchClicked;
    });

    const interr = computed(function () {
      return store.getters.getInter;
    });

    const clickAbout = function () {
      about.value = !about.value;
      news.value = false;
      bran.value = false;
      eng.value = false;
    };
    const clickBrands = function () {
      bran.value = !bran.value;
      news.value = false;
      about.value = false;
      eng.value = false;
    };
    const clickEng = function () {
      eng.value = !eng.value;
      news.value = false;
      bran.value = false;
      about.value = false;
    };
    const clickNews = function () {
      news.value = !news.value;
      about.value = false;
      bran.value = false;
      eng.value = false;
    };
    const clickBar = function () {
      bar.value = !bar.value;
    };
    const closeMenu = function () {
      bar.value = !bar.value;
    };

    return {
      clickBar,
      brands,
      abouts,
      engs,
      actuas,
      search,
      formVisible,
      interr,
      about,
      clickAbout,
      bar,
      closeMenu,
      clickBrands,
      clickEng,
      clickNews,
      news,
      eng,
      bran,
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  align-items: center;
  @media only screen and (max-width: 49rem) {
    flex-direction: column;
  }
  // @media only screen and (max-width: 20rem) {
  //   transform: scale(0.8);
  // }
}

.order-link {
  display: flex;
  background-color: var(--color-primary);
  border-radius: 4px;
  color: white;
  padding: 0.5rem;
  justify-content: space-between;
  font-weight: 700;
  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    fill: white;
  }
}

.sub-links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > * {
    margin-right: 1rem;
  }
  @media only screen and (max-width: 49rem) {
    justify-content: center;
  }
  @media only screen and (max-width: 21rem) {
    flex-direction: column;
    & > * {
      margin-bottom: 2rem;
    }
  }
}

.menu {
  display: flex;
  flex-direction: column;
}

.social-links {
  svg {
    fill: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid white;
    padding: 0.6rem;
    display: inline-block;

    margin-right: 1rem;
  }
}

.search-btn {
  width: 2rem;
  height: 2rem;
  fill: white;
  cursor: pointer;
}

.logo {
  width: 25rem;
  height: 7rem;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
  &-link {
    display: block;
  }
}
.inter {
  background-image: linear-gradient(
    130deg,
    var(--color-primary) 0%,
    var(--color-primary) 40%,
    var(--color-tertiary) 40%
  );
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.473);
  .logo {
    width: 15rem;
    height: 3rem;
  }
  @media only screen and (max-width: 49rem) {
    background-image: linear-gradient(
      130deg,
      var(--color-primary) 0%,
      var(--color-tertiary) 100%
    );
  }
}

.hidden {
  display: hidden;
}

.links {
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin-top: 1rem;
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: white;
  }

  &__item {
    position: relative;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 33rem) {
    display: none;
  }
}
.links__item:hover .list {
  display: block;
  opacity: 1;
  visibility: visible;
}

.list {
  display: hidden;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: 999;
  background-color: var(--color-primary);
  top: 100%;
  width: 15rem;
}

.form {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.904);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999999999999;
  button,
  input {
    outline: none;
    border: none;
    border: 2px solid rgba(124, 124, 124, 0.555);
    padding: 2rem;
    background-color: transparent;
    font-size: 3rem;
    color: white;
    @media only screen and (max-width: 33rem) {
      font-size: 1.5rem;
      padding: 1rem;
    }
  }

  button {
    cursor: pointer;
  }

  input {
    width: 65%;
    height: 8rem;
    margin-right: 2rem;

    @media only screen and (max-width: 33rem) {
      width: 70%;
      height: 4rem;
      margin-right: 1rem;
      margin-bottom: 1.5rem;
      margin-bottom: 3rem;
    }

    &::placeholder {
      font-size: 3rem;
      @media only screen and (max-width: 33rem) {
        font-size: 1.5rem;
      }
    }
  }

  @media only screen and (max-width: 33rem) {
    flex-direction: column;
  }
}

.form-enter-from,
.form-leave-to {
  opacity: 0;
  transform: translateY(-2rem);
}
.form-enter-active,
.form-leave-active {
  transition: all 0.4s;
}
.form-enter-to,
.form-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.mediaBox {
  position: relative;
  cursor: pointer;

  width: 3rem;
  height: 2rem;
  align-items: center;
  &:hover {
    .mediaBtn:before {
      top: -0.7rem;
    }
    .mediaBtn:after {
      top: 0.7rem;
    }
  }
  display: none;

  @media only screen and (max-width: 33rem) {
    display: flex;
  }
}

.mediaBtn {
  display: block;
  width: 2.5rem;
  height: 0.2rem;
  background-color: white;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    background-color: inherit;
    content: "";
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
  &:before {
    top: -0.5rem;
  }
  &:after {
    top: 0.5rem;
  }
}

.newMenu {
  min-height: 100vh;
  width: 70vw;
  background-color: var(--color-tertiary);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  z-index: 9999999999999999;
  display: none;
  .close {
    position: absolute;
    top: 2rem;
    right: 1rem;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    width: 5rem;
    height: 5rem;
  }

  img {
    width: 15rem;
    height: 15rem;
  }

  @media only screen and (max-width: 33rem) {
    display: flex;
  }
}

.newLinks {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  &__item {
    font-size: 2rem !important;
    padding: 0.4rem;
    width: 100%;
    &:not(:last-of-type) {
      margin-bottom: 1rem;
      border-bottom: 1px solid var(--color-primary-light);
    }
  }
  &__link {
    text-decoration: none;
    color: white;
    width: 100%;
    display: inline-block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
    font-size: 1.2rem;
    svg {
      fill: white;
      width: 2rem;
      height: 2rem;
    }
  }
}
.newList {
  list-style: none;
  font-size: 1.2rem;
}

.v-move {
  transition: transform 0.8s ease;
}
</style>
