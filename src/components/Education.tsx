import React from 'react';
import { Education as EducationType } from '../data/resumeData';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark inline-block mb-4">Education</h2>
          <span className="block w-20 h-1 bg-primary mx-auto"></span>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-2xl font-semibold text-dark mb-2">{edu.degree}</h3>
              <h4 className="text-xl font-medium text-gray mb-4">{edu.institution}</h4>
              <p className="text-gray mb-2">{edu.location}</p>
              <p className="text-gray mb-4">{edu.date}</p>
              
              {edu.website && (
                <a 
                  href={edu.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-primary font-medium hover:underline mt-4"
                >
                  Visit Institution Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;