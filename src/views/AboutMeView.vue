<template>
  <div class="layout">
    <Navbar />

    <div class="container mt-5">
      <!-- Description -->
      <div class="description">
        <h1 class="page-title">About me</h1>
        <div class="description-text">
          <p>
            I am a <strong>Full Stack Software Engineer</strong> from Italy with a passion for <strong>business solutions</strong>, <strong>artificial intelligence (AI)</strong>, and <strong>cybersecurity</strong>. I focus on delivering efficient, tailored solutions, particularly in <strong>web and cloud-oriented environments</strong>.
          </p>
          <p>
            Combining a strategic mindset with hands-on technical expertise, I specialize in developing <strong>scalable software architectures</strong>, optimizing <strong>cloud infrastructures</strong>, and enhancing <strong>system security</strong>.
          </p>
          <p>
            I am fascinated by the transformative power of AI and the crucial role of cybersecurity in today’s digital world.
          </p>
          <p>
            My goal is to create <strong>future-ready solutions</strong> that drive innovation and empower businesses.
          </p>
        </div>
      </div>

      <!-- Skills -->
      <div class="skills-text">
        <h2 class="page-title">Skills</h2>
        <div class="skills-container">
          <div class="skill-block" v-for="(skill, index) in skills" :key="index">
            <div class="skill-title">
              <span v-html="skill.icon"></span>
              <strong>{{ skill.title.toUpperCase() }}</strong>
            </div>
            <div class="skill-content">{{ skill.content }}</div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="skills">
        <SkillsSection />
      </div>
    </div>

    <Footer />
  </div>

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AboutMeView",
  components: {Footer, SkillsSection, Navbar},
  data() {
    return {
      skills: [
        { icon: '💻', title: 'Programming languages', content: 'Java, Python, PHP, JavaScript' },
        { icon: '🌐', title: 'Frontend', content: 'HTML, CSS, Vue.js, Vite, Axios, Bootstrap' },
        { icon: '⚙️', title: 'Backend and Frameworks', content: 'Spring Boot + Spring Framework, Docker, REST APIs, Microservices, Design patterns, SOLID principles, SOA' },
        { icon: '🗄', title: 'Databases', content: 'MySQL, MariaDB, DynamoDB, MongoDB, NoSQL, Hibernate/JPA' },
        { icon: '🛠', title: 'Version Control', content: 'Git, GitHub' },
        { icon: '☁️', title: 'Cloud & DevOps', content: 'AWS, Docker' },
        { icon: '🔒', title: 'Security', content: 'OWASP, JWT, Encryption, IAM, KMS, OAuth' },
        { icon: '🧪', title: 'Testing', content: 'Unit Testing, Integration Testing, JUnit, Mockito, Postman' },
        { icon: '💬', title: 'Message Brokers', content: 'RabbitMQ' },
        { icon: '🌍', title: 'Networking & Protocols', content: 'TCP/IP, HTTP/HTTPS, DNS, DHCP, LAN/WAN, Routing/Switching, Port forwarding, Firewall configuration, Network Security basics, Load balancing, IPv4/IPv6, SSH, QoS' },
        { icon: '🖥️', title: 'Operating Systems', content: 'Linux (bash, system administration, apt, yum, cron jobs), Windows (PowerShell, task automation), macOS (brew, zsh)' },
        { icon: '🏢', title: 'Business & Process Analysis', content: 'BPMN, UML, Use Case Diagrams, Process Mapping, Business Requirements Analysis, Stakeholder management, Budgeting & Cost estimation, PLM' },
      ]
    }
  }

}

</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  flex-grow: 1;
  padding-bottom: 50px;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}

.description{
  margin-bottom: 5rem;
}

strong{
  font-weight: 600;
  color: black !important;
}

.description-text p{
  font-family: "Ubuntu", monospace;
  margin-bottom: 0.5rem;
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>