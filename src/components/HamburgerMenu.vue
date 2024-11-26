<template>
  <svg
      class="ham hamRotate"
      viewBox="0 0 100 100"
      width="50"
      @click="toggleMenu"
      :class="{ active: isActive }"
  >
    <path
        class="line top"
        d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
    />
    <path class="line middle" d="m 70,50 h -40" />
    <path
        class="line bottom"
        d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
    />
  </svg>
</template>

<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
      this.$emit("toggle"); // Notify parent to handle menu toggle
    },
  },
};
</script>

<style scoped>
.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  user-select: none;
}

.hamRotate.active {
  transform: rotate(45deg);
}

.line {
  fill: none;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
}

.ham .top {
  stroke-dasharray: 40 82;
}

.ham .middle {
  stroke-dasharray: 40 111;
}

.ham .bottom {
  stroke-dasharray: 40 161;
}

.ham.active .top {
  stroke-dasharray: 17 82;
  stroke-dashoffset: -62px;
}

.ham.active .middle {
  stroke-dashoffset: 23px;
}

.ham.active .bottom {
  stroke-dashoffset: -83px;
}
</style>