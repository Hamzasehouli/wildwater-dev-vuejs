<template>
  <the-home @click-left="clickLeft" @click-right="clickRight" class="hom">
    <div :class="getPath" class="background"></div>
    <the-header v-if="$route.path === '/'"></the-header>
    <transition appear @enter="enter" mode="out-in">
      <first-hero v-if="getHeroState === 1"></first-hero>
      <second-hero v-else-if="getHeroState === 2"></second-hero>
      <third-hero v-else-if="getHeroState === 3"></third-hero>
    </transition>
  </the-home>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import TheHeader from "../components/TheHeader.vue";
import TheHome from "../components/TheHome.vue";
import FirstHero from "@/components/FirstHero.vue";
import SecondHero from "@/components/SecondHero.vue";
import ThirdHero from "@/components/ThirdHero.vue";

export default {
  components: { FirstHero, SecondHero, ThirdHero, TheHeader, TheHome },
  name: "Home",
  data() {
    return {
      counter: 1,
      scaler: 1,
      opaque: 0,
      mamakaka: "",
      other: 1,
      path: "home-1",
      papa: "",
    };
  },
  computed: {
    getHeroState() {
      return this.counter;
    },
    getPath() {
      return this.path;
    },
  },
  methods: {
    enter() {
      this.mamakaka = setInterval(() => {
        this.scaler += 0.0001;

        document.querySelector(".background").style.transform = `scale(${
          1 * this.scaler
        })`;
      }, 10);
    },
    myFunOptions() {
      this.path = `home-${this.counter}`;
      this.scaler = 1;
      clearInterval(this.mamakaka);
    },
    myFunLeft() {
      if (this.counter < 2) {
        this.counter = 4;
      }
      this.counter--;
      this.myFunOptions();
    },
    myFunRight() {
      if (this.counter > 2) {
        this.counter = 0;
      }
      this.counter++;
      this.myFunOptions();
    },
    clickLeft() {
      clearInterval(this.papa);
      this.papa = setInterval(() => {
        this.myFunRight();
      }, 10000);
      this.myFunLeft();
    },
    clickRight() {
      clearInterval(this.papa);
      this.papa = setInterval(() => {
        this.myFunRight();
      }, 10000);
      this.myFunRight();
    },
  },
  created() {
    this.papa = setInterval(() => {
      this.myFunRight();
    }, 10000);
  },
  watch: {
    $route() {
      this.scaler = 1;
      clearInterval(this.mamakaka);
    },
  },
};
</script>

<style lang="scss" scoped>
.hom {
  height: 100vh;
  position: relative;
}
.home-1 {
  background-image: linear-gradient(#07070757, #1a19192f),
    url("../../public/images/hero-1.jpg");
}
.home-2 {
  background-image: linear-gradient(#07070757, #1a19192f),
    url("../../public/images/hero-2.jpg");
}
.home-3 {
  background-image: linear-gradient(#07070757, #1a19192f),
    url("../../public/images/hero-3.jpg");
}
.home-1,
.home-2,
.home-3 {
  background-size: cover !important;
  background-position: center !important;
}

.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: all 1.4s;
}
.v-enter-to {
  opacity: 1;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -99;
}
</style>
