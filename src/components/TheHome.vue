<template>
  <div class="home">
    <slot></slot>
    <svg @click="leftChevron" class="chevron chevron-left">
      <use href="sprite.svg#icon-chevron-left"></use>
    </svg>
    <svg @click="rightChevron" class="chevron chevron-right">
      <use href="sprite.svg#icon-chevron-right"></use>
    </svg>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup(_, { emit }) {
    const store = useStore();
    const leftChevron = () => {
      store.dispatch("leftClick");
      emit("click-left");
    };
    const rightChevron = () => {
      store.dispatch("rightClick");
      emit("click-right");
    };
    return {
      leftChevron,
      rightChevron,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100%;
  transition: all 0.3s;
  background-size: cover;
  background-position: center;
  backface-visibility: hidden;
  overflow: hidden;
}

.chevron {
  fill: rgba(255, 255, 255, 0.295);
  width: 6rem;
  height: 6rem;
  position: absolute;
  top: 50%;
  transition: all 0.2s;
  cursor: pointer;
  transform: translateY(-50%);
  transform-origin: center;
  &-left {
    left: 5%;
    &:hover {
      transform: translate(-8%, -50%);
      transform-origin: center;
      // width: 8rem;
      // height: 8rem;
      fill: rgba(255, 255, 255, 0.719);
    }
  }

  &-right {
    right: 5%;
    &:hover {
      transform: translate(8%, -50%);
      transform-origin: center;
      // width: 8rem;
      // height: 8rem;
      fill: rgba(255, 255, 255, 0.719);
    }
  }

  &:hover {
  }
}
</style>
