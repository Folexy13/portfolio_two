import React, { useEffect, lazy, Suspense } from 'react';
import resumeData from './data/resumeData';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const Loading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  // Add Font Awesome script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Header personalInfo={resumeData.personalInfo} />
        
        <main>
          <Hero 
            personalInfo={resumeData.personalInfo} 
            profile={resumeData.profile} 
            links={resumeData.links} 
          />
          
          <About 
            personalInfo={resumeData.personalInfo} 
            profile={resumeData.profile} 
          />
          
          <Experience experiences={resumeData.experience} />
          
          <Skills skills={resumeData.skills} />
          
          <Education education={resumeData.education} />
          
          <Contact personalInfo={resumeData.personalInfo} />
        </main>
        
        <Footer 
          personalInfo={resumeData.personalInfo} 
          links={resumeData.links} 
        />
      </Suspense>
    </div>
  );
}

export default React.memo(App);
