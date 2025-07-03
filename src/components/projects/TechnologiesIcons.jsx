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
    FaSass,
    FaBootstrap,
    FaDatabase,
    FaGitAlt,
    FaSeedling
} from 'react-icons/fa';
import {RiTailwindCssFill} from "react-icons/ri";
import {DiMongodb} from "react-icons/di";
import {GrMysql} from "react-icons/gr";
import {SiAmazondynamodb, SiMariadb} from "react-icons/si";

const iconMap = {
    spring: FaSeedling,
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
                return Icon ? (
                    <Icon key={tech} className="w-6 h-6 text-gray-600" />
                ) : (
                    <span key={tech} className="text-xs text-gray-500">{tech}</span>
                );
            })}
        </div>
    );
}