<template>
  <div class="layout">
    <header>
      <Navbar />
    </header>

    <div class="container d-flex align-items-center justify-content-center">
      <div class="card shadow-lg p-4 text-center" style="max-width: 600px; width: 100%;">
        <div class="card-body">
          <h1 class="card-title mb-3">Customer Radar</h1>
          <p class="card-text text-muted mb-4">
            The presentation page of the project is currently under development. Check back soon!
          </p>
          <router-link to="/projects" class="btn btn-primary">
            Back to other projects
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "CustomerRadarView",
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

.container {
  margin-top: 20px;
}
.card {
  border-radius: 12px;
}
</style>