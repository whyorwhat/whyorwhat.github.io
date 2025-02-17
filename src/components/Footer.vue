<template>
  <footer class="footer">
    <p>&copy; {{ currentYear }} Simone Cotardo. All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  flex-shrink: 0;
  text-align: center;
  padding: 10px;
  background-color: #e7e7ea;
}

.footer p {
  font-family: "Ubuntu", monospace;
  font-size: 1em;
  color: #333;
}
</style>