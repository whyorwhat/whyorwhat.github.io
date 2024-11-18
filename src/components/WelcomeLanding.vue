<template>
  <div class="welcome-container">
    <h1 class="welcome-name">Welcome to my website</h1>
    <p class="welcome-text">Come back soon... something special is under develop</p>
    <div class="animation-container">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeLanding",
};
</script>

<style scoped>
/* Container Styling */
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #fff;
}

/* Welcome Text Styling */
.welcome-name {
  font-size: 3rem;
  margin: 0;
  animation: fadeIn 2s ease-in-out;
}

.welcome-text {
  font-size: 1.5rem;
  margin: 10px 0;
  animation: fadeIn 2s ease-in-out 1s;
}

/* Circle Animation */
.animation-container {
  margin-top: 30px;
  position: relative;
  width: 100px;
  height: 100px;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  animation: pulse 2s infinite;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>