// src/views/ContactsView.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaAt } from 'react-icons/fa';
import FancyButton from '@/components/elements/FancyButton.jsx';
import AnimatedText from "@/components/elements/AnimatedText.jsx";

export default function ContactsView() {
  return (
      <main className="flex-grow flex flex-col items-center justify-start">
          <AnimatedText
              text="Contacts"
              className="text-4xl py-12 px-4 font-bold"
              delay={60}
              duration={0.4}
              splitType="chars"
          />

        <div className="mt-24 flex flex-wrap justify-center gap-6 px-4">
          {/* LinkedIn */}
          <FancyButton
              icon={FaLinkedin}
              text="LinkedIn"
              href="https://linkedin.com/in/simone-cotardo"
              color="#0A66C2"
          />

          {/* GitHub */}
          <FancyButton
              icon={FaGithub}
              text="GitHub"
              href="https://github.com/whyorwhat"
              color="#333333"
          />

          {/* Email */}
          <FancyButton
              icon={FaAt}
              text="Send Email"
              href="mailto:simo.cotardo@gmail.com"
              color="#059669"
          />
        </div>
      </main>
  );
}