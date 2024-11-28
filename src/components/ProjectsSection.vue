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
          description: 'A user-friendly accounting web app for businesses and individuals, offering features such as expense tracking, invoicing, tax calculations, file management, and support for customizable formulas.',
          liveLink: 'https://aurorakeep.com',
          technologies: ['spring', 'java', 'vuejs', 'bootstrap', 'mariadb', 'aws'],
        },
        {
          id: 2,
          title: 'ParlArte',
          description: 'A web app for speech therapists, leveraging AI to create personalized images and visual aids that support children with communication challenges, enhancing therapy effectiveness and engagement.',
          liveLink: 'https://parlarte.com',
          technologies: ['python', 'vuejs', 'bootstrap', 'dynamodb', 'aws'],
        },
        {
          id: 3,
          title: 'TiSeguo',
          description: 'A revolutionary web app that streamlines and centralizes insurance claims processing for insurance companies. It enhances efficiency, reduces processing time, and improves communication, providing faster resolutions and a superior customer experience.',
          discoverLink: '/ti-seguo',
          technologies: ['spring', 'java', 'vuejs', 'mongodb', 'mysql', 'aws', 'bootstrap'],
        },
        {
          id: 4,
          title: 'Business website',
          description: 'A simple and professional website designed for the local branch of an insurance company, providing clear information, easy navigation, and enhanced accessibility for customers.',
          liveLink: 'https://vittoriaassicurazioniluino.com',
          technologies: ['php', 'html5', 'javascript', 'mysql', 'css3'],
        },
        {
          id: 5,
          title: 'Portfolio website',
          description: 'See the full code of my application on GitHub.',
          githubLink: 'https://github.com/whyorwhat/whyorwhat.github.io',
          technologies: ['vuejs', 'html5', 'css', 'sass', 'bootstrap'],
        },
        {
          id: 6,
          title: 'Customer Radar',
          description: 'Enterprise CRM software powered by AI, designed to analyze customer behavior and preferences. The system provides targeted recommendations for cross-selling and up-selling, helping businesses enhance customer engagement and maximize revenue opportunities. By leveraging advanced analytics, it enables data-driven decision-making and personalized customer interactions.',
          discoverLink: '/customer-radar',
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