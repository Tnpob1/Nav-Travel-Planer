<template>
  <div class="nav">
    <div class="nav-iner">
      <RouterLink to="/"
        ><div class="logo"><p>Travel Planner</p></div></RouterLink
      >
      <div class="mobile-nav">
        <RouterLink to="/"><a>Home</a></RouterLink>
        <RouterLink to="/"><a>About</a></RouterLink>
        <RouterLink to="/"><a>Reviews</a></RouterLink>
        <RouterLink to="/"><a>Contact</a></RouterLink>
        <RouterLink class="b-start links" to="/plan"><a>Start</a></RouterLink>
      </div>
      <button class="hamburger">
        <div class="bar"></div>
      </button>
      <div class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/">Reviews</RouterLink>
        <RouterLink to="/">Contact</RouterLink>
      </div>
      <RouterLink class="b-start links" to="/plan">Start</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
.nav {
  position: sticky;
  z-index: 90;
}

.nav .nav-iner {
  position: fixed;
  left: 0;
  top: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  color: rgb(255, 0, 0);
  padding: 40px 0px;
  box-shadow: 0px 0.4px 7.5px rgb(121, 121, 121);
}

.nav-iner .links RouterLink {
  font-weight: 400;
  font-size: 14px;
  color: black;
}

.links {
  padding: 5px;
  margin-right: 110px;
}
.nav-iner .links RouterLink:hover {
  border-color: black;
}

.nav .logo {
  position: relative;
  font-weight: 700;
  font-size: 2em;
}
.b-start {
  border: 6px solid transparent;
  border-image: linear-gradient(to right, #cc2e5d, #ff5858);
  border-image-slice: 1;
  border-radius: 20px;
  padding: 6px;
  width: 100px;
  text-align: center;
}

.hamburger {
  position: relative;
  display: block;
  width: 50px;
  cursor: pointer;
  appearance: none;
  background: none;
  outline: none;
  border: none;
  padding-right: 6px;
}

.hamburger .bar,
.hamburger::after,
.hamburger::before {
  content: "";
  display: block;
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, #CC2E5D, #FF5858);
  margin: 6px 0px;
  transition: 0.4s;
  border-radius: 10px;
  opacity: 100%;
  z-index: 90;
}

.hamburger.is-active .bar {
  opacity: 0;
}

.hamburger.is-active::before {
  transform: rotate(-45deg) translate(-8px, 6px);
}

.hamburger.is-active::after {
  transform: rotate(45deg) translate(-9px, -8px);
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  display: block;
  background-color: rgba(235, 235, 235, 0.8);
  padding-top: 120px;
  transition: 0.4s;
}

.mobile-nav.is-active {
  left: 0;
}

.mobile-nav a {
  width: 100%;
  max-width: 200px;
  margin: 0 auto 20px;
  display: block;
  text-align: center;
  padding: 5px 16px;
  margin-top: 15px;
  background-color: rgb(255, 255, 255);
  text-decoration: none;
  border-radius: 10px;
}


@media (min-width: 1050px) {
  .mobile-nav {
    display: none;
  }
  .hamburger {
    display: none;
  }
}
@media (max-width: 1050px) {
  .links {
    display: none;
  }
}
</style>
