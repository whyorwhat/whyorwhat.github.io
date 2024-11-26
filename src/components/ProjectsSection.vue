<template>
  <div class="container projects">
    <div class="project-list">
      <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :liveLink="project.liveLink"
          :githubLink="project.githubLink"
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
          description: 'Descrizione del progetto 1.',
          liveLink: 'https://simonecotardo.com',
          githubLink: 'https://simonecotardo.com',
          image: 'https://via.placeholder.com/300x200',
          technologies: ['php', 'javascript'],
        },
        {
          id: 2,
          title: 'ParlArte',
          description: 'Descrizione del progetto 2.',
          liveLink: 'https://simonecotardo.com',
          githubLink: 'https://simonecotardo.com',
          image: 'https://via.placeholder.com/300x200',
          technologies: ['python', 'html5'],
        },
        {
          id: 3,
          title: 'TiSeguo',
          description: 'Descrizione del progetto 3.',
          liveLink: 'https://simonecotardo.com',
          image: 'https://via.placeholder.com/300x200',
          technologies: ['python', 'html5'],
        },
        {
          id: 4,
          title: 'Web app',
          description: 'Descrizione del progetto 4.',
          githubLink: 'https://vittoriaassicurazioniluino.com',
          image: 'https://via.placeholder.com/300x200',
          technologies: ['python', 'html5'],
        },
        {
          id: 5,
          title: 'Project5',
          description: 'Descrizione del progetto 5.',
          liveLink: 'https://simonecotardo.com/ti-seguo',
          image: 'https://via.placeholder.com/300x200',
          technologies: ['python', 'html5'],
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