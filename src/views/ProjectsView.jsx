import React from 'react';
import {ProjectsSection} from "@/components/projects/ProjectsSection.jsx";
import AnimatedText from "@/components/elements/AnimatedText.jsx";

export default function ProjectsView() {
  return (
      <div className="flex flex-col min-h-screen font-sans bg-white">
        <main className="flex-grow container mx-auto px-4 py-12">
            <div className="text-center">
                <AnimatedText
                    text="Projects"
                    className="text-4xl mb-10 font-bold text-center"
                    delay={60}
                    duration={0.4}
                    splitType="chars"
                />
            </div>

          <ProjectsSection />
        </main>
      </div>
  );
}