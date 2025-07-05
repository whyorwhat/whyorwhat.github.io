import {
    FaJava,
    FaPython,
    FaPhp,
    FaReact,
    FaJsSquare,
    FaAws,
    FaDocker,
    FaVuejs,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
} from 'react-icons/fa';
import {RiTailwindCssFill} from "react-icons/ri";
import {DiMongodb} from "react-icons/di";
import {GrMysql} from "react-icons/gr";
import {SiAmazondynamodb, SiMariadb, SiSpring} from "react-icons/si";

// Label human-friendly
const labels = {
  spring: "Spring",
  java: "Java",
  python: "Python",
  php: "PHP",
  react: "React",
  tailwind: "Tailwind CSS",
  vuejs: "Vue.js",
  bootstrap: "Bootstrap",
  mariadb: "MariaDB",
  amazonwebservices: "AWS",
  dynamodb: "Amazon DynamoDB",
  docker: "Docker",
  mongodb: "MongoDB",
  mysql: "MySQL",
  html5: "HTML 5",
  javascript: "JavaScript",
  css3: "CSS 3",
};

const iconMap = {
    spring: SiSpring,
    java: FaJava,
    python: FaPython,
    php: FaPhp,
    react: FaReact,
    tailwind: RiTailwindCssFill,
    vuejs: FaVuejs,
    bootstrap: FaBootstrap,
    mariadb: SiMariadb,
    amazonwebservices: FaAws,
    dynamodb: SiAmazondynamodb,
    docker: FaDocker,
    mongodb: DiMongodb,
    mysql: GrMysql,
    html5: FaHtml5,
    javascript: FaJsSquare,
    css3: FaCss3Alt,
    css: FaCss3Alt,
};

export function TechnologiesIcons({ technologies }) {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => {
                const key = tech.toLowerCase();
                const Icon = iconMap[key];
                const label = labels[key] ?? tech;

                return Icon ? (
                    <span
                        key={tech}
                        className="relative group inline-flex"
                        aria-label={label}
                    >
                        <Icon className="w-6 h-6 text-gray-600" />

                        {/* tooltip */}
                        <span
                            role="tooltip"
                            className="absolute -top-8 left-1/2 -translate-x-1/2
                                rounded bg-gray-800 px-2 py-1 text-xs text-white whitespace-nowrap
                                opacity-0 group-hover:opacity-100
                                pointer-events-none transition-opacity"
                        >
                            {label}
                        </span>
                    </span>
                ) : (
                    <span key={tech} className="text-xs text-gray-500">{tech}</span>
                );
            })}
        </div>
    );
}