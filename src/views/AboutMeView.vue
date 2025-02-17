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
        <ul class="skills-list">
          <li><strong>💻 Programming languages:</strong> Java, Python, PHP, JavaScript</li>
          <li><strong>🌐 Frontend:</strong> HTML, CSS, Vue.js, Vite, Axios, Bootstrap</li>
          <li><strong>⚙️ Backend and Frameworks:</strong> Spring Boot + Spring Framework, Docker, REST APIs, Microservices, Design patterns, SOLID principles, SOA</li>
          <li><strong>🗄 Databases:</strong> MySQL, MariaDB, DynamoDB, MongoDB, NoSQL, Hibernate/JPA</li>
          <li><strong>🛠 Version Control:</strong> Git, GitHub</li>
          <li><strong>☁️ Cloud & DevOps:</strong> AWS, Docker</li>
          <li><strong>🔒 Security:</strong> OWASP, JWT, Encryption, IAM, KMS, OAuth</li>
          <li><strong>🧪 Testing:</strong> Unit Testing, Integration Testing, JUnit, Mockito, Postman</li>
          <li><strong>💬 Message Brokers:</strong> RabbitMQ</li>
          <li><strong>🌍 Networking & Protocols:</strong> TCP/IP, HTTP/HTTPS, DNS, DHCP, LAN/WAN, Routing/Switching, Port forwarding, Firewall configuration, Network Security basics, Load balancing, IPv4/IPv6, SSH, QoS</li>
          <li><strong>🖥️ Operating Systems:</strong> Linux (bash, system administration, apt, yum, cron jobs), Windows (PowerShell, task automation), macOS (brew, zsh)</li>
          <li><strong>🏢 Business & Process Analysis:</strong> BPMN, UML, Use Case Diagrams, Process Mapping, Business Requirements Analysis, Stakeholder management, Budgeting & Cost estimation, PLM</li>
        </ul>
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
</style>