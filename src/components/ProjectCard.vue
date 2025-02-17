<template>
    <div
        class="custom-btn project-card"
        :class="{ 'in-view': isVisible, 'above-view': hasBeenVisible }"
        ref="card"
    >
      <div class="content">

        <h3 class="project-title">{{ title }}</h3>

        <p class="project-description">{{ description }}</p>

        <!-- Technologies -->
        <div class="made-with">
          <span>Made with:</span>
          <TechnologiesIcons :technologies="technologies" />
        </div>

        <div class="button-container">
          <!-- Live button-->
          <a
              v-if="liveLink"
              :href="liveLink"
              class="view-btn"
              target="_blank"
          >
            <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" /> View live
          </a>

          <!-- Github button-->
          <a
              v-if="githubLink"
              :href="githubLink"
              class="view-btn github-btn"
              target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'github']" /> GitHub
          </a>

          <!-- Discover button-->
          <router-link
              v-if="discoverLink"
              :to="discoverLink"
              class="view-btn discover-btn"
          >
            <font-awesome-icon :icon="['fas', 'diagram-project']" /> Discover
          </router-link>
        </div>
      </div>

      <!-- App preview -->
      <img
          :src="`/images/projects/${id}.png`"
          :alt="title"
          class="project-image"
      />
    </div>
</template>

<script>
import TechnologiesIcons from "@/components/TechnologiesIcons.vue";

export default {
  components: {
    TechnologiesIcons,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: false,
    },
    githubLink: {
      type: String,
      required: false,
    },
    discoverLink: {
      type: String,
      required: false,
    },
    technologies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isVisible: false,
      hasBeenVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.hasBeenVisible = true; // Mark the cards as "already visible"
          } else if (entry.boundingClientRect.top > 0) {
            // Hide below cards
            this.isVisible = false;
          }
        },
        {
          threshold: 0.5, // Trigger animation when 50% of the card is visible
        }
    );
    observer.observe(this.$refs.card);
  },
};
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  justify-content: space-between;
  min-height: 300px;  /* Ensure enough space for content and image */
  max-width: 800px;
  width: 100%;
  background: #fff;
  padding: 20px;
  position: relative; /* Needed to position the image */

  /* Cards are initially not visible and reduced in size */
  transform: scale(0.8); /* Starting scale */
  opacity: 0; /* Starting opacity */
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.project-card.in-view {
  transform: scale(1); /* Full size when in view */
  opacity: 1; /* Fully visible */
}

.content {
  flex-grow: 1;
  padding-right: 350px;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #333;
}

.project-description {
  font-size: 0.9rem;
  font-weight: 400;
  color: #555;
  margin-bottom: 10px;
  text-transform: none;
}

.made-with {
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  margin-bottom: 20px;
}
.made-with span {
  margin-right: 10px;
}

.project-image {
  /* Bottom-right position */
  position: absolute;
  bottom: 0;
  right: 0;
  width: clamp(350px, 30%, 450px); /* Dynamic size */
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 8px 0;
}
/* Device screens */
@media (max-width: 768px) {
  .project-card {
    min-height: 400px; /* Ensure enough space for content and image */
    display: flex;
    justify-content: flex-start;
    flex-direction: column; /* Stack content vertically */
    align-items: flex-start; /* Align items to the start */
    padding: 20px 20px 340px 20px;
    gap: 20px;
    box-sizing: border-box;
  }

  .content {
    order: 1;
    padding: 0; /* No extra padding */
  }

  .project-image {
    order: 2;
    /* Placed at the bottom */
    position: absolute;
    bottom: 0;
    right: 0;
    width: 98%;
    max-width: none; /* Ignore max limit */
    height: auto;
  }
  .view-btn {
    order: 3;
    position: relative; /* No overlap */
    align-self: flex-start; /* Left alignment  */
    margin-top: 20px;
  }
}

.button-container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.view-btn {
  align-self: flex-end; /* Align button to the bottom-right */
  padding: 8px 10px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #232323;
  background: #d68388;
  border: 1px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s, box-shadow 0.1s;
  text-align: center;
}

.view-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.view-btn:active {
  transform: translateY(2px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.github-btn {
  background: none;
  color: #555;
}

.discover-btn {
  background: none;
  color: #555;
}
</style>