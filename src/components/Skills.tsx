import React from 'react';

interface SkillsProps {
  skills: {
    programmingLanguages: string[];
    backendDevelopment: string[];
    cloudTechnologies: string[];
    testingDebugging: string[];
    documentation: string[];
    webDevelopment: string[];
    databases: string[];
    devopsTools: string[];
    agileCollaboration: string[];
    agenticAi: string[];
  };
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Function to render a skill category
  const renderSkillCategory = (title: string, skillsList: string[]) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-dark mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-primary">
        {title}
      </h3>
      <div className="flex flex-wrap gap-4">
        {skillsList.map((skill, index) => (
          <div 
            key={index} 
            className="bg-white py-3 px-5 rounded-full text-sm text-dark shadow-sm hover:bg-primary hover:text-light hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark inline-block mb-4">Skills</h2>
          <span className="block w-20 h-1 bg-primary mx-auto"></span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderSkillCategory('Programming Languages', skills.programmingLanguages)}
          {renderSkillCategory('Backend Development', skills.backendDevelopment)}
          {renderSkillCategory('Cloud Technologies', skills.cloudTechnologies)}
          {renderSkillCategory('Testing & Debugging', skills.testingDebugging)}
          {renderSkillCategory('Documentation', skills.documentation)}
          {renderSkillCategory('Web Development', skills.webDevelopment)}
          {renderSkillCategory('Databases', skills.databases)}
          {renderSkillCategory('DevOps Tools', skills.devopsTools)}
          {renderSkillCategory('Agile Collaboration', skills.agileCollaboration)}
          {renderSkillCategory('Agentic AI', skills.agenticAi)}
        </div>
      </div>
    </section>
  );
};

export default Skills;