<template>
  <div class="container projects">
    <div class="project-list">
      <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :id="project.id"
          :title="project.title"
          :description="project.description"
          :liveLink="project.liveLink"
          :githubLink="project.githubLink"
          :discoverLink="project.discoverLink"
          :image="project.image"
          :technologies="project.technologies"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'AuroraKeep',
          description: 'Accounting web app, designed for businesses and individuals',
          liveLink: 'https://aurorakeep.com',
          technologies: ['spring', 'java', 'vuejs', 'bootstrap', 'mariadb', 'aws'],
        },
        {
          id: 2,
          title: 'ParlArte',
          description: 'Web app designed for speech therapists. Based on AI, it generates customized images to help children with communication issues.',
          liveLink: 'https://parlarte.com',
          technologies: ['python', 'vuejs', 'bootstrap', 'dynamodb', 'aws'],
        },
        {
          id: 3,
          title: 'TiSeguo',
          description: 'A revolutionary web app to manage, connect and centralize insurance claims for insurance companies.',
          discoverLink: 'https://simonecotardo.com/tiseguo',
          technologies: ['spring', 'java', 'vuejs', 'mongodb', 'mysql', 'aws', 'bootstrap'],
        },
        {
          id: 4,
          title: 'Web development',
          description: 'Descrizione del progetto 4.',
          liveLink: 'https://vittoriaassicurazioniluino.com',
          technologies: ['php', 'html5', 'javascript', 'mysql', 'css3'],
        },
        {
          id: 5,
          title: 'simonecotardo.com',
          description: 'Descrizione del progetto 5.',
          githubLink: 'https://github.com/whyorwhat/whyorwhat.github.io',
          technologies: ['vuejs', 'html5', 'scss'],
        },
        {
          id: 6,
          title: 'Customer Radar',
          description: 'Enterprise CRM software. Based on AI, it analyzes customers and provides target recommendations for cross-selling and up-selling.',
          discoverLink: 'https://simonecotardo.com/customer-radar',
          technologies: ['python', 'dynamodb', 'mongodb'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  margin-top: 50px;
}

.project-list {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center cards horizontally */
  gap: 30px;
}
</style>