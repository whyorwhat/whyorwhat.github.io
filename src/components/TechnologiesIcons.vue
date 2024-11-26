<template>
  <div class="technologies">
    <i
        v-for="tech in technologies"
        :key="tech"
        :class="`devicon-${tech}-plain`"
        aria-hidden="true"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    technologies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.technologies {
  display: flex;
  gap: 10px;
}

.technologies i {
  font-size: 1.5rem;
  color: #555;
  transition: transform 0.2s, color 0.2s;
}

.technologies i:hover {
  transform: scale(1.08);
  color: #7e7d7d;
}
</style>