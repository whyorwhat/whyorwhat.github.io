<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inconsolata');
@import url('https://fonts.googleapis.com/css2?family=Figtree');

#app{
  font-family: "Inconsolata", monospace;
  background-color: #e2e2e2;
  min-height: 100vh;
}
p{
  font-family: "Figtree", monospace;
}
body {
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none !important;
}
</style>