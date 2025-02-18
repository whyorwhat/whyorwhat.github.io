<template>
  <div class="layout">
    <header>
      <Navbar />
    </header>
    <main class="content">
      <h1 class="page-title">Contacts</h1>
      <div class="button-container">
        <a
            class="custom-btn"
            href="https://linkedin.com/in/simone-cotardo"
            target="_blank"
            rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
        </a>
        <a
            class="custom-btn"
            href="https://github.com/whyorwhat"
            target="_blank"
            rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'github']" /> GitHub
        </a>
        <a
            class="custom-btn"
            href="mailto:simo.cotardo@gmail.com"
        >
          <font-awesome-icon :icon="['fas', 'at']" /> Send Email
        </a>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ContactView",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.layout {
  min-height: 100vh;  /* Min page size */

  display: flex;
  flex-direction: column;
}

header {
  flex-shrink: 0; /* Fixed header */
}

.content {
  flex-grow: 1; /* Content can expand */
  display: flex;
  flex-direction: column;
  align-items: center; /* Buttons vertically centered */
  justify-content: center; /* Buttons horizontally centered */
  padding: 20px;
}

.button-container {
  display: flex;
  flex-direction: column; /* Vertical positioning */
  gap: 15px;
}
.page-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}
</style>