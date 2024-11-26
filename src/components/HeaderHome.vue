<template>
  <header class="main-header">
    <h1 :style="{ '--x': x + '%', '--y': y + '%' }">
      Ciao!
    </h1>
    <p :style="{ '--x': x + '%', '--y': y + '%' }">
      It's {{ name }}.
    </p>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: 'Simone Cotardo',
      x: 50, // Gradient starting position
      y: 50,
    };
  },
  mounted() {
    // Global listener for mouse movement (only desktop size)
    if (window.innerWidth >= 768) {
      window.addEventListener("mousemove", this.updateGradient);
    }
  },
  beforeUnmount() {
    // Remove global listener when the component is destroyed
    if (window.innerWidth >= 768) {
      window.removeEventListener("mousemove", this.updateGradient);
    }
  },
  methods: {
    updateGradient(event) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calculate % of mouse position in relation to the entire window
      this.x = Math.round((event.clientX / width) * 100);
      this.y = Math.round((event.clientY / height) * 100);
    },
  },
};
</script>

<style scoped>
/* Header */
.main-header {
  text-align: center;
  margin-top: 100px;
  position: relative;
}

/* Text gradient */
.main-header h1,
.main-header p {
  font-size: 6rem;
  font-weight: bold;
  color: transparent; /* Make the text transparent */
  background: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      cyan,
      blue,
      indigo,
      violet,
      magenta,
      red,
      orange,
      yellow,
      green
  ); /* Continuous gradient */
  background-size: 400%; /* Gradient extension */
  background-position: var(--x, var(--y)); /* Dynamic CSS variables */
  -webkit-background-clip: text; /* Safari compatibility */
  background-clip: text;
  transition: background-position 0.1s ease;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

/* Mobile screen */
@media (max-width: 768px) {
  .main-header h1,
  .main-header p {
    background-position: 0 50%; /* Gradient starting position */
    animation: gradientShift 8s infinite linear; /* Continuous animation */
  }
}

/* Mobile screens animation */
@keyframes gradientShift {
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.main-header p {
  font-size: 2.8rem;
}
</style>