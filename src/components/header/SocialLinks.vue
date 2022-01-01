<template>
  <div class="social-links">
    <a target="_blank" href="https://facebook.com">
      <svg>
        <use href="sprite.svg#icon-facebook"></use>
      </svg>
    </a>
    <a target="_blank" href="https://linkedin.com">
      <svg>
        <use href="sprite.svg#icon-linkedin"></use>
      </svg>
    </a>
    <a target="_blank" href="https://youtube.com">
      <svg>
        <use href="sprite.svg#icon-youtube"></use>
      </svg>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social-links {
  a:hover {
    border-bottom: 2px solid transparent !important;
  }
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
</style>
