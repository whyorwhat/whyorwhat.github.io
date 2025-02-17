<template>
  <div class="layout">
    <Navbar />
    <div class="container mt-5">
      <!-- Projects -->
      <div class="projects">
        <h1 class="page-title">Projects</h1>
        <ProjectsSection />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import Footer from '../components/Footer.vue';
import SkillsSection from "@/components/SkillsSection.vue";

export default {
  name: 'ProjectsView',
  components: {
    SkillsSection,
    Navbar,
    ProjectsSection,
    Footer,
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  flex-grow: 1;
  padding-bottom: 50px;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}

</style>