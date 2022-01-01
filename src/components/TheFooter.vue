<template>
  <footer>
    <div class="upper-footer">
      <img alt="wildwater logo" src="logo-white.png" />
      <ul class="upper-footer__list">
        <li class="upper-footer__item">
          <h3>About us</h3>
          <ul class="item__list">
            <li class="item__item">
              <router-link class="item__link" to="/our-mission"
                >Our mission</router-link
              >
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/our-history"
                >Our history</router-link
              >
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/our-values"
                >Our values</router-link
              >
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/our-governance"
                >Our governance</router-link
              >
            </li>
          </ul>
        </li>
        <li class="upper-footer__item">
          <h3>Our Brands</h3>
          <ul class="item__list">
            <li class="item__item">
              <router-link class="item__link" to="/velenia"
                >Velenia</router-link
              >
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/saint-mountain"
                >Saint mountain</router-link
              >
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/oxo">Oxo</router-link>
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/rawsource"
                >Rawsource</router-link
              >
            </li>
          </ul>
        </li>

        <li class="upper-footer__item">
          <h3>Our Engagement</h3>
          <ul class="item__list">
            <li class="item__item">
              <router-link class="item__link" to="/absolute-quality"
                >Absolute quality</router-link
              >
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/environment"
                >Environment</router-link
              >
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/our-collaborators"
                >Our collaborators</router-link
              >
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/our-communities"
                >Our communities</router-link
              >
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/our-partners"
                >Our partners</router-link
              >
            </li>
          </ul>
        </li>
        <li class="upper-footer__item">
          <h3>Actuality</h3>
          <ul class="item__list">
            <li class="item__item">
              <router-link class="item__link" to="/news">news</router-link>
            </li>
            <li class="item__item">
              <router-link class="item__link" to="/press">Press</router-link>
            </li>
          </ul>
        </li>
        <!-- <li class="upper-footer__item">
          <h3>
            <router-link class="item__link" to="/inversters"
              >Investers</router-link
            >
          </h3>
        </li> -->
        <li class="upper-footer__item">
          <h3>
            <router-link class="item__link" to="/career">Career</router-link>
          </h3>
        </li>
      </ul>
    </div>
    <div class="sub-footer">
      <div class="copyright">
        <p>© Wildwater 2021</p>
        <router-link to="/contact">contact</router-link>
        <router-link to="/legal">Legal</router-link>
        <a target="_blank" href="http://hamzasehouli.ma"
          >built by Hamza Sehouli</a
        >
      </div>
      <social-links></social-links>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: white;
  width: 100%;
}
a {
  text-decoration: none;
  color: inherit;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  &:hover {
    border-bottom: 2px solid white;
  }
}

ul {
  list-style: none;
}
.upper-footer {
  img {
    display: block;
  }
  padding: 4rem 0;
  background-color: var(--color-tertiary-dark);
  display: flex;
  justify-content: center !important;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 56rem) {
    flex-direction: column;
  }
  // & > * {
  //   &:not(:last-child) {
  //     margin-right: 7rem;
  //   }
  // }

  &__list {
    display: flex;
    list-style: none;
    padding: 2rem 3rem;
    @media only screen and (max-width: 47rem) {
      display: grid;
      // justify-content: center;
      // justify-items: center;
      row-gap: 3rem;
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    }
  }
  &__item {
    &:not(:last-child) {
      margin-right: 7rem;
    }
  }
}

img {
  width: 15rem;
  height: 15rem;
  display: block;
  object-fit: cover;
  margin: 0;
  padding: 0;
}
h3 {
  margin-bottom: 1rem;
}

.sub-footer {
  padding: 0.6rem;
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > * {
      margin-right: 2rem;
    }
    @media only screen and (max-width: 33rem) {
      flex-direction: column;
      margin-bottom: 1rem;
    }
  }
  @media only screen and (max-width: 49rem) {
    flex-direction: column;
    padding: 2rem 0;
    & > * {
      margin-bottom: 2rem;
    }
  }
}

.item__item {
  opacity: 0.8;
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
}

.active {
  background-color: transparent !important;
}
</style>
