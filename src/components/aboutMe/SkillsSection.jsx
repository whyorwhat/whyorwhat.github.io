// src/components/SkillsSection.jsx
import { useEffect, useRef, useState } from "react";

const techList = [
    { name: "Java", icon: "java" },
    { name: "Python", icon: "python" },
    { name: "PHP", icon: "php" },
    { name: "React", icon: "react" },
    { name: "JavaScript", icon: "javascript" },
    { name: "AWS", icon: "amazonwebservices" },
    { name: "Vue.js", icon: "vuejs" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "HTML5", icon: "html5" },
    { name: "Docker", icon: "docker" },
    { name: "Spring", icon: "spring" },
    { name: "CSS", icon: "css3" },
    { name: "SASS", icon: "sass" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "MariaDB", icon: "mariadb" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "Linux", icon: "linux" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "RabbitMQ", icon: "rabbitmq" },
    { name: "Vite", icon: "vitejs" },
];

export default function SkillsSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        let scrollAmount = 0;
        const interval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollLeft = scrollAmount;
                scrollAmount += 1;
                if (scrollAmount >= containerRef.current.scrollWidth) {
                    scrollAmount = 0;
                }
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={containerRef}
            className="overflow-x-auto whitespace-nowrap scroll-smooth border rounded-md py-4 px-2 cursor-grab"
        >
            <div className="inline-flex gap-10">
                {techList.map((tech, idx) => (
                    <div key={idx} className="min-w-[100px] text-center flex flex-col items-center">
                        <i className={`devicon-${tech.icon}-plain colored text-5xl`} />
                        <span className="mt-2 text-sm">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}