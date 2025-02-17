<template>
  <div
      class="carousel"
      ref="carousel"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="endDrag"
  >
    <div class="carousel-track" ref="carouselTrack">
      <div
          v-for="(tech, index) in extendedTechList"
          :key="index"
          class="carousel-item"
      >
        <i :class="`devicon-${tech.icon}-plain colored`"></i>
        <span>{{ tech.name }}</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      techList: [
        { name: "Java", icon: "java" },
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Vue.js", icon: "vuejs" },
        { name: "HTML5", icon: "html5" },
        { name: "AWS", icon: "amazonwebservices" },
        { name: "Docker", icon: "docker" },
        { name: "Spring", icon: "spring" },
        { name: "CSS", icon: "css3" },
        { name: "SASS", icon: "sass" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "MariaDB", icon: "mariadb" },
        { name: "DynamoDB", icon: "dynamodb" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
        { name: "PHP", icon: "php" },
      ],
      extendedTechList: [], // Dynamic list

      isDragging: false,
      startX: 0,
      scrollLeftStart: 0,
      autoScrollAnimation: null,
      resumeTimeout: null,
      scrollSpeed: 0.5, // Default speed (px per frame)
      itemWidth: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const carousel = this.$refs.carousel;
      const firstItem = carousel.querySelector(".carousel-item");
      if (firstItem) {
        this.itemWidth = firstItem.offsetWidth;
      }

      this.populateInitialList();

      // Slower speed on desktop
      if (window.innerWidth >= 1024) {
        this.scrollSpeed = 0.3;
      }

      this.startAutoScroll();
    });
  },
  beforeDestroy() {
    this.stopAutoScroll();
  },
  methods: {
    populateInitialList() {
      // Dynamically fill the list
      while (this.extendedTechList.length < 3 * this.techList.length) {
        this.addNextBatch();
      }
    },

    addNextBatch() {
      // Add a copy of next elements inside the original list
      const nextBatch = this.techList.map((item) => ({
        ...item,
        uid: Math.random(), // UID to ensure Vue will not reuse same keys
      }));
      this.extendedTechList.push(...nextBatch);
    },

    checkAndExtendList() {
      const carousel = this.$refs.carousel;
      const track = this.$refs.carouselTrack;

      const scrollRightEdge = carousel.scrollLeft + carousel.offsetWidth;
      const trackRightEdge = track.scrollWidth;

      // When we are near the right side, add elements
      if (trackRightEdge - scrollRightEdge < this.itemWidth * 5) {
        this.addNextBatch();
      }
    },

    // Automatically start scroll through requestAnimationFrame
    startAutoScroll() {
      const carousel = this.$refs.carousel;

      const step = () => {
        if (!this.isDragging) {
          carousel.scrollLeft += this.scrollSpeed;
          this.checkAndExtendList();
        }
        this.autoScrollAnimation = requestAnimationFrame(step);
      };

      this.autoScrollAnimation = requestAnimationFrame(step);
    },

    stopAutoScroll() {
      cancelAnimationFrame(this.autoScrollAnimation);
      clearTimeout(this.resumeTimeout);
    },

    // ** Manual drag**
    startDrag(e) {
      this.stopAutoScroll();
      this.isDragging = true;
      this.startX = e.pageX || (e.touches && e.touches[0].pageX);
      this.scrollLeftStart = this.$refs.carousel.scrollLeft;
    },

    onDrag(e) {
      if (!this.isDragging) return;
      const x = e.pageX || (e.touches && e.touches[0].pageX);
      const delta = x - this.startX;
      this.$refs.carousel.scrollLeft = this.scrollLeftStart - delta;
      this.checkAndExtendList();
      e.preventDefault();
    },

    endDrag() {
      if (this.isDragging) {
        this.isDragging = false;
        this.resumeTimeout = setTimeout(() => {
          this.startAutoScroll();
        }, 2000);
      }
    },
    // ** **

  }
};
</script>

<style scoped>
.carousel {
  overflow: hidden;
  width: 100%;
  margin-top: 20px;
  cursor: grab;
  white-space: nowrap;
}

.carousel:active {
  cursor: grabbing;
}

.carousel-track {
  display: flex;
  justify-content: space-between;
  gap: 100px;
  width: calc(200%);
  animation: scroll 20s linear infinite;
}

.carousel-item {
  flex: 0 0 auto;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.carousel-item i {
  font-size: 48px;
  margin-bottom: 10px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>