import React from 'react';

interface FooterProps {
  personalInfo: {
    name: string;
  };
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const Footer: React.FC<FooterProps> = ({ personalInfo, links }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-16 text-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              {personalInfo.name.split(' ')[0]}
              <span className="text-primary">.</span>
            </h2>
          </div>
          
          <div className="flex gap-6 mb-8">
            {links.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10 text-light hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            
            {links.linkedin && (
              <a 
                href={links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10 text-light hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            
            {links.twitter && (
              <a 
                href={links.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10 text-light hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
          </div>
          
          <div className="text-sm text-white/70">
            <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;