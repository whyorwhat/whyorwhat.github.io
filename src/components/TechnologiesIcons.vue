<template>
  <div class="technologies">
    <div
        v-for="tech in technologies"
        :key="tech"
        class="technology"
    >
      <i
          :class="`devicon-${tech}-plain colored`"
          aria-hidden="true"
      ></i>
      <span class="tooltip">{{ tech }}</span>
    </div>
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
  transition: transform 0.2s, color 0.2s;
}

.tooltip {
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 5px 8px;
  border-radius: 4px;
  position: absolute;
  transform: translateX(-50%);
  font-size: 0.8rem;
  white-space: nowrap;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.technology:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
</style>