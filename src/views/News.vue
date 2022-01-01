<template>
  <the-header class="header"></the-header>
  <main>
    <h2>No News yet</h2>
  </main>
</template>

<script>
export default {
  mounted() {
    document.title = "News";
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--color-primary);
}
main {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
