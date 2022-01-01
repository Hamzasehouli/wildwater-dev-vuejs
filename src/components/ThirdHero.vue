<template>
  <div class="hero">
    <h1>A heritage of over 90 years</h1>
    <router-link class="path" :to="{ name: 'history' }">Learn more</router-link>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.sub-hero {
  width: 100%;
  overflow: hidden;
}

.path {
  text-decoration: none;
  padding: 1rem;
  background-image: linear-gradient(
    90deg,
    var(--color-primary-light) 0%,
    var(--color-primary-dark) 50%,
    var(--color-tertiary) 50%
  );
  color: black;
  background-size: 200%;
  transition: all 0.3s;
  &:hover {
    background-position: 100px;
    color: white;
  }
}

h1 {
  text-align: center;
  position: relative;
  font-size: 4.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 2rem 0;
  width: 70%;
  // &::before {
  //   content: "";
  //   position: absolute;
  //   width: 0.5rem;
  //   height: 100%;
  //   background-color: white;
  //   top: 0;
  //   left: -6rem;
  //   transform: rotate(35deg);
  // }
  @media only screen and (max-width: 49rem) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 33rem) {
    font-size: 2rem;
  }
}

.hero {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 33rem) {
    top: 40%;
  }
}
</style>
