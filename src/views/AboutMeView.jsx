import React, { useMemo } from "react";
import SkillsSection from "@/components/aboutMe/SkillsSection.jsx";
import WindowCard from "@/components/elements/WindowCard.jsx";
import {
  FaBuilding,
  FaCloud, FaComments,
  FaDatabase, FaDesktop,
  FaGitAlt,
  FaGlobe,
  FaLaptopCode,
  FaLock, FaNetworkWired,
  FaPaintBrush,
  FaServer, FaVial
} from "react-icons/fa";
import AnimatedText from "@/components/elements/AnimatedText.jsx";

export default function AboutMeView() {
  const skills = useMemo(
      () => [
        {
          icon: FaLaptopCode,
          title: "Programming Languages",
          content: "Java, Python, PHP, React, JavaScript",
        },
        {
          icon: FaGlobe,
          title: "Frontend",
          content: "HTML, CSS, React, Tailwind, Vite, Axios",
        },
        {
          icon: FaServer,
          title: "Backend & Frameworks",
          content:
              "Spring Boot, Docker, REST APIs, Microservices, Design Patterns, SOLID, SOA",
        },
        {
          icon: FaDatabase,
          title: "Databases",
          content: "MySQL, MariaDB, DynamoDB, MongoDB, NoSQL, Hibernate/JPA",
        },
        {
          icon: FaGitAlt,
          title: "Version Control",
          content: "Git, GitHub",
        },
        {
          icon: FaCloud,
          title: "Cloud & DevOps",
          content: "AWS, Docker",
        },
        {
          icon: FaLock,
          title: "Security",
          content: "OWASP, JWT, Encryption, IAM, KMS, OAuth",
        },
        {
          icon: FaVial,
          title: "Testing",
          content: "Unit & Integration Testing, JUnit, Mockito, Postman",
        },
        {
          icon: FaComments,
          title: "Message Brokers",
          content: "RabbitMQ",
        },
        {
          icon: FaNetworkWired,
          title: "Networking & Protocols",
          content:
              "TCP/IP, HTTP/HTTPS, DNS, DHCP, LAN/WAN, Routing, Firewall, Load Balancing, SSH",
        },
        {
          icon: FaDesktop,
          title: "Operating Systems",
          content: "Linux, Windows, macOS",
        },
        {
          icon: FaBuilding,
          title: "Business Analysis",
          content:
              "BPMN, UML, Use Case Diagrams, Process Mapping, Requirements Analysis",
        },
        {
          icon: FaPaintBrush,
          title: "Design",
          content: "Photoshop, Illustrator, Final Cut Pro",
        },
      ],
      []
  );

  return (
      <div className="container mx-auto max-w-4xl px-4 py-12 text-gray-800">
        {/* Description */}
        <section className="mb-20">
            <div className="text-center">
                <AnimatedText
                    text="About Me"
                    className="text-4xl mb-10 font-bold"
                    delay={60}
                    duration={0.4}
                    splitType="chars"
                />
            </div>

          <div className="space-y-4 text-lg font-light leading-relaxed">
            <p>
              I am a <strong>Full Stack Software Engineer</strong> from Italy with a passion for{" "}
              <strong>business solutions</strong>, <strong>artificial intelligence (AI)</strong>,
              and <strong>cybersecurity</strong>. I focus on delivering efficient, tailored solutions,
              particularly in <strong>web and cloud-oriented environments</strong>.
            </p>
            <p>
              Combining a strategic mindset with hands-on technical expertise, I specialize in developing{" "}
              <strong>scalable software architectures</strong>, optimizing <strong>cloud infrastructures</strong>,
              and enhancing <strong>system security</strong>.
            </p>
            <p>
              I am fascinated by the transformative power of AI and the crucial role of cybersecurity in today’s digital world.
            </p>
            <p>
              My goal is to create <strong>future-ready solutions</strong> that drive innovation and empower businesses.
            </p>
          </div>
        </section>

        {/* Skills List */}
        <section className="mb-16">
            <div className="text-center">
                <AnimatedText
                    text="Skills"
                    className="text-4xl mb-8 font-bold"
                    delay={60}
                    duration={0.4}
                    splitType="chars"
                />
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                  <WindowCard key={index} delay={index} className="h-full">
                    <Icon className="text-4xl text-blue-600 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-center mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed text-center">
                      {skill.content}
                    </p>
                  </WindowCard>
              );
            })}
          </div>
        </section>

        {/* Carousel */}
        {/*
        <section className="mt-12">
          <SkillsSection />
        </section>
        */}
      </div>
  );
}