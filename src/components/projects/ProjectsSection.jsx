import React, { useMemo } from 'react';
import { ProjectCard } from './ProjectCard.jsx';

export function ProjectsSection() {
    const projects = useMemo(
        () => [
            {
                id: 1,
                title: 'ReplyIA',
                description:
                    'A Support Chatbot for WhatsApp that allows multi-user teams to efficiently manage and respond to large volumes of customer requests from a single shared interface.',
                viewLink: '/replyia',
                technologies: ['java', 'python', 'spring', 'react', 'tailwind', 'dynamodb', 'amazonwebservices', 'docker'],
            },
            {
                id: 2,
                title: 'AuroraKeep',
                description:
                    'A user-friendly accounting web app for businesses and individuals, offering features such as expense tracking, invoicing, tax calculations, file management, and support for customizable formulas.',
                viewLink: 'https://aurorakeep.com',
                technologies: ['java', 'spring', 'vuejs', 'bootstrap', 'mariadb', 'amazonwebservices']
            },
            {
                id: 3,
                title: 'ParlArte',
                description:
                    'A web app for speech therapists, leveraging AI to create personalized images and visual aids that support children with communication challenges, enhancing therapy effectiveness and engagement.',
                viewLink: 'https://parlarte.com',
                technologies: ['python', 'vuejs', 'bootstrap', 'dynamodb', 'amazonwebservices', 'docker']
            },
            {
                id: 4,
                title: 'TiSeguo',
                description:
                    'A revolutionary web app that streamlines and centralizes insurance claims processing for insurance companies. It enhances efficiency, reduces processing time, and improves communication, providing faster resolutions and a superior customer experience.',
                viewLink: '/ti-seguo',
                technologies: ['java','spring', 'vuejs', 'mongodb', 'mysql', 'amazonwebservices', 'bootstrap']
            },
            {
                id: 5,
                title: 'Business website',
                description:
                    'A simple and professional website designed for the local branch of an insurance company, providing clear information, easy navigation, and enhanced accessibility for customers.',
                viewLink: 'https://vittoriaassicurazioniluino.com',
                technologies: ['php', 'html5', 'javascript', 'mysql', 'css3']
            },
            {
                id: 6,
                title: 'Portfolio website',
                description: 'See the full code of my application on GitHub.',
                githubLink: 'https://github.com/whyorwhat/whyorwhat.github.io',
                technologies: ['react', 'tailwind']
            },
            {
                id: 7,
                title: 'Customer Radar',
                description:
                    'Enterprise CRM software powered by AI, designed to analyze customer behavior and preferences. The system provides targeted recommendations for cross-selling and up-selling, helping businesses enhance customer engagement and maximize revenue opportunities. By leveraging advanced analytics, it enables data-driven decision-making and personalized customer interactions.',
                viewLink: '/customer-radar',
                technologies: ['python', 'dynamodb', 'mongodb']
            }
        ],
        []
    );

    return (
        <div className="flex flex-col items-center gap-8 py-8">
            {projects.map((project, index) => (
                <ProjectCard key={project.id} {...project} delay={index} />
            ))}
        </div>
    );
}