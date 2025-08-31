import React from 'react';
import { PersonalInfo } from '../data/resumeData';

interface AboutProps {
  personalInfo: PersonalInfo;
  profile: string;
}

const About: React.FC<AboutProps> = ({ personalInfo, profile }) => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark inline-block mb-4">About Me</h2>
          <span className="block w-20 h-1 bg-primary mx-auto"></span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="about-text">
            <p className="text-base md:text-lg leading-relaxed mb-6">
              {profile}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <span className="block font-semibold text-dark mb-2">Name:</span>
              <span className="text-gray">{personalInfo.name}</span>
            </div>
            
            <div className="mb-4">
              <span className="block font-semibold text-dark mb-2">Email:</span>
              <span className="text-gray">{personalInfo.email}</span>
            </div>
            
            <div className="mb-4">
              <span className="block font-semibold text-dark mb-2">Phone:</span>
              <span className="text-gray">{personalInfo.phone}</span>
            </div>
            
            <div className="mb-4">
              <span className="block font-semibold text-dark mb-2">Location:</span>
              <span className="text-gray">{personalInfo.location}</span>
            </div>
            
            <div className="mb-4">
              <span className="block font-semibold text-dark mb-2">Nationality:</span>
              <span className="text-gray">{personalInfo.nationality}</span>
            </div>
            
            <div className="mb-4">
              <span className="block font-semibold text-dark mb-2">Username:</span>
              <span className="text-gray">{personalInfo.username}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;