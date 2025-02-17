<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </router-link>

      <!-- Hamburger menu -->
      <HamburgerMenu
          v-if="isSmallScreen"
          @toggle="toggleMenu"
      />

      <!-- Links -->
      <div
          class="collapse navbar-collapse"
          :class="{ show: isMenuOpen }"
          id="navbarNav"
      >
        <ul class="navbar-nav ms-auto">
          <li
              class="nav-item"
              :class="{ active: isActiveRoute('/me') }"
          >
            <router-link to="/me" class="nav-link">About Me</router-link>
          </li>
          <li
              class="nav-item"
              :class="{ active: isActiveRoute('/projects') }"
          >
            <router-link to="/projects" class="nav-link">Projects</router-link>
          </li>
          <li
              class="nav-item"
              :class="{ active: isActiveRoute('/contacts') }"
          >
            <router-link to="/contacts" class="nav-link">Contacts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRoute } from "vue-router";
import HamburgerMenu from "./HamburgerMenu.vue";

export default {
  name: "Navbar",
  components: {
    HamburgerMenu,
  },
  setup() {
    const route = useRoute();

    const isActiveRoute = (path) => route.path === path;

    return {
      isActiveRoute,
    };
  },
  data() {
    return {
      isSmallScreen: window.innerWidth <= 992, // Detect initial screen size
      isMenuOpen: false, // Track menu open/close
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      this.isSmallScreen = window.innerWidth <= 992; // Update based on screen size
    },
  },
  mounted() {
    // Listen to window resize events
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    // Clean up resize event listener
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
}

.navbar-brand .logo {
  height: 40px;
}

.navbar-nav .nav-link {
  color: #333;
  font-weight: 800;
  font-size: 1.1rem;
  margin-left: 15px;
}

.navbar-nav .nav-link:hover {
  color: #000;
}


.navbar-nav .active .nav-link {
  color: #4859c8;
}

.collapse {
  transition: all 0.4s ease;
}
</style>