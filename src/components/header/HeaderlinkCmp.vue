<template>
  <li class="list__item">
    <router-link class="list__link" :to="path">{{ designation }}</router-link>
  </li>
</template>

<script>
import { toRefs } from "vue";
export default {
  props: ["data"],
  setup(props) {
    const { path, designation } = toRefs(props.data);
    return { path, designation };
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
}
.list {
  &__item {
    &:hover {
      background-color: var(--color-tertiary);
    }
  }
  &__link {
    padding: 0.6rem 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
