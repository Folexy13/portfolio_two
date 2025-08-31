import React from 'react';
import { PersonalInfo } from '../data/resumeData';

interface HeroProps {
  personalInfo: PersonalInfo;
  profile: string;
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const Hero: React.FC<HeroProps> = ({ personalInfo, profile, links }) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-header-height bg-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h4 className="text-lg md:text-xl font-medium text-primary mb-4">Hello, I'm</h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4">{personalInfo.name}</h1>
          <h3 className="text-xl md:text-2xl font-semibold text-gray mb-6">{personalInfo.title}</h3>
          <p className="text-base md:text-lg mb-8 max-w-2xl">{profile.split('.')[0]}.</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <a href="#contact" className="btn primary-btn">Contact Me</a>
            <a href="#experience" className="btn secondary-btn">View My Work</a>
          </div>
          
          <div className="flex gap-4">
            {links.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full bg-light text-dark shadow-sm hover:bg-primary hover:text-light hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            
            {links.linkedin && (
              <a 
                href={links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full bg-light text-dark shadow-sm hover:bg-primary hover:text-light hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            
            {links.twitter && (
              <a 
                href={links.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full bg-light text-dark shadow-sm hover:bg-primary hover:text-light hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;