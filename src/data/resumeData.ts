// Resume Data Structure for Portfolio Website

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  nationality: string;
  gender: string;
  status: string;
  username: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  date: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  website?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  profile: string;
  experience: Experience[];
  education: Education[];
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
  links: {
    institutionWebsite: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Aluko Opeyemi Folajimi",
    title: "Senior Software Engineer",
    email: "folajimiopeyemisax13@gmail.com",
    phone: "09126669941",
    location: "Futa South gate, Akure, Ondo state",
    nationality: "Nigerian",
    gender: "Male",
    status: "Engaged",
    username: "Folexy13"
  },
  profile: "Results-driven Senior Software Engineer with over 5 years of experience in designing, developing, and optimizing scalable web applications. Proficient in JavaScript, TypeScript, Node.js, React, and cloud services (Azure, AWS). Strong expertise in software architecture, microservices, real-time systems, and database management (PostgreSQL, MongoDB). Passionate about building high-performance, secure, and maintainable software solutions. Adept at leading teams, conducting code reviews, and implementing DevOps practices to enhance development efficiency.",
  experience: [
    {
      position: "Software Engineer",
      company: "Luminarix Inc (remote)",
      location: "Bradford, United Kingdom",
      date: "12/2024 – present",
      achievements: [
        "Designed and implemented an Interview Copilot using microservices architecture",
        "Integrated SuperTokens for secure authentication across the platform",
        "Optimized AI response latency, reducing feedback time from 3s to 1s",
        "Built an automated job scraper and application bot",
        "Engineered an AI-powered Smart Resume Builder"
      ]
    },
    {
      position: "Chief Technical Officer",
      company: "Pyramid Technology",
      location: "Akure, Nigeria",
      date: "05/2023 – 02/2025",
      achievements: [
        "Led the architecture and development of a high-performance e-commerce platform using React.js and Golang with GraphQL",
        "Optimized GraphQL resolvers and Golang microservices, reducing API response times by 40%",
        "Implemented a real-time inventory & pricing engine with WebSockets and GraphQL subscriptions",
        "Mentored junior developer",
        "Pioneered a zero-downtime CI/CD pipeline using ArgoCD and GitHub Actions, cutting deployment times by 70%"
      ]
    },
    {
      position: "Fullstack Engineer",
      company: "Klasshour",
      location: "Akure, Nigeria",
      date: "12/2022 – 08/2024",
      achievements: [
        "Architected a real-time tutoring platform with Next.js, NestJS, and WebSockets",
        "Integrated Paystack for seamless cross-border payments, reducing transaction failures by 60%",
        "Deployed AI-assisted answer verification to detect plagiarism and ensure solution accuracy",
        "Created v2 of the platform frontend and backend"
      ]
    },
    {
      position: "Software Instructor",
      company: "MathClinic",
      location: "Akure, Nigeria",
      date: "12/2019 – 08/2023",
      achievements: [
        "Created the homepage of the organization",
        "Mentored 8 students from beginner to proficiency in web development"
      ]
    },
    {
      position: "Frontend Engineer",
      company: "Abos Technology (remote)",
      location: "United Kingdom",
      date: "01/2022 – 12/2022",
      achievements: [
        "Created v1 of Tbobo rider and driver GraphQL backend",
        "Created the base and currency control for the app",
        "Integrated Stripe payment gateway",
        "Created the organization website"
      ]
    },
    {
      position: "Junior Fullstack Engineer",
      company: "FountainPay",
      location: "Akure, Nigeria",
      date: "11/2021 – 10/2022",
      achievements: [
        "Created the landing page of the company",
        "Mentored intern in the company"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology",
      institution: "Federal University of Technology, Akure",
      location: "Akure, Nigeria",
      date: "11/2016 – 05/2023",
      website: "http://futa.edu.ng/"
    }
  ],
  skills: {
    programmingLanguages: ["JavaScript (Node.js, TypeScript)", "Python", "Go"],
    backendDevelopment: ["NodeJs", "Django", "Golang", "Microservices"],
    cloudTechnologies: [
      "AWS (EC2, S3, Lambda, RDS)",
      "Azure (AI services, CDN & Frontdoor, WebPubSub, Storage account, AKS)",
      "Google Cloud Platform (GCP)",
      "Docker",
      "Kubernetes"
    ],
    testingDebugging: ["Unit Testing", "Integration Testing", "End-to-End Test", "SonarQube"],
    documentation: ["Wiki.js", "Swagger", "Postman"],
    webDevelopment: ["React / NextJs", "VueJs", "GraphQL", "RESTful APIs"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    devopsTools: ["Terraform", "Github Actions", "CI/CD pipelines", "ArgoCD", "Grafana & Prometheus"],
    agileCollaboration: ["Jira", "Confluence"],
    agenticAi: ["VAPI", "Vonage", "Google AI Studio", "Cursor AI", "Kilocode"]
  },
  links: {
    institutionWebsite: "http://futa.edu.ng/",
    github: "https://github.com/Folexy13",
    linkedin: "https://linkedin.com/in/aluko-opeyemi",
    twitter: "https://twitter.com/folexy13"
  }
};

export default resumeData;