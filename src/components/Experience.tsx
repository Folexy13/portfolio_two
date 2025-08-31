import React from 'react';
import { Experience as ExperienceType } from '../data/resumeData';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark inline-block mb-4">Professional Experience</h2>
          <span className="block w-20 h-1 bg-primary mx-auto"></span>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-light transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10"></div>
              
              {/* Date - Left side on desktop, top on mobile */}
              <div className="md:absolute md:top-0 md:left-0 md:w-[40%] md:text-right md:pr-8 mb-4 md:mb-0">
                <span className="font-semibold text-primary">{exp.date}</span>
              </div>
              
              {/* Content - Right side on desktop, below date on mobile */}
              <div className="md:ml-[55%] bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-dark mb-2">{exp.position}</h3>
                <h4 className="text-base font-medium text-gray mb-4">{exp.company} - {exp.location}</h4>
                <ul className="list-disc pl-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray mb-2">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;