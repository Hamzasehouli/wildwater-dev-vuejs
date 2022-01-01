<template>
  <section
    :style="{ 'flex-direction': state ? 'row-reverse' : '' }"
    class="content"
  >
    <div class="content__container">
      <div class="cmp-styler"><slot name="default"></slot></div>
    </div>

    <div class="content__container">
      <slot name="img"><img :src="img" /></slot>
    </div>
  </section>
</template>
<script>
import { onMounted } from "vue";
export default {
  props: ["img", "state"],
  setup() {
    onMounted(function () {
      const content = Array.from(document.querySelectorAll(".content"));

      const contentCallBack = function (entries) {
        let [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.firstChild.style.opacity = 1;
        entry.target.firstChild.style.transform = "translateY(0)";
        entry.target.lastChild.style.opacity = 1;
        entry.target.lastChild.style.transform = "scale(1)";
      };
      const contentOptions = {
        root: null,
        threshold: 0.2,
      };
      const observer = new IntersectionObserver(
        contentCallBack,
        contentOptions
      );
      content.forEach((c) => {
        observer.observe(c);
      });
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  display: flex;
  // flex-direction: row-reverse;
  padding: 7rem 0;
  max-width: 1420px;
  margin: 0 auto;
  // grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  // row-gap: 5.5rem;
  &__container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 37.5rem) {
      width: 100% !important;
      margin-bottom: 4rem;
    }
  }
  @media only screen and (max-width: 37.5rem) {
    flex-direction: column !important;
  }
}
img {
  width: 70%;
  height: auto;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.411);
  border-radius: 3px;
}
.cmp-styler {
  width: 70%;
}

.content__container {
  &:first-of-type {
    opacity: 0;
    transform: translateY(5rem);
    transition: all 0.8s;
  }
  &:last-of-type {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.8s;
  }
}
</style>
