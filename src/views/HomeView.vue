<template>
  <div class="layout">
    <header>
      <HeaderHome />
    </header>
    <main class="content">
      <div class="button-container">
        <router-link class="custom-btn" to="/me">
          <font-awesome-icon :icon="['fas', 'quote-left']" /> About Me
        </router-link>
        <router-link class="custom-btn" to="/projects">
          <font-awesome-icon :icon="['fas', 'terminal']" /> Projects
        </router-link>
        <router-link class="custom-btn" to="/contacts">
          <font-awesome-icon :icon="['far', 'paper-plane']" /> Contact
        </router-link>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HeaderHome from "@/components/HeaderHome.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    HeaderHome,
    Footer,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {

  },
};
</script>

<style scoped>
.layout {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}

header {
  flex-shrink: 0; /* Fixed header */
}


.content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Permits to buttons to go under if they cannot fit */
  justify-content: center;
}
@media (max-width: 600px) {
  .button-container {
    flex-direction: column;
    align-items: center;
  }
}

.custom-btn {
  flex: 1;
  text-align: left;
  min-width: 150px;
  max-width: 200px;
}
</style>