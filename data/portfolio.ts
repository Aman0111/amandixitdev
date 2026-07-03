import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UsersRound,
  Wrench
} from "lucide-react";

export const profile = {
  name: "Aman Dixit",
  title: "AI/ML Engineer | Agentic AI Developer | Full Stack MERN Specialist",
  intro:
    "I build production-grade AI and full-stack systems across healthcare, SaaS, fintech, e-commerce, and delivery programs: from LLM orchestration and RAG pipelines to polished React experiences and scalable Node/FastAPI backends.",
  email: "dixitaman.now.wwe@gmail.com",
  phone: "+91-8595604117",
  location: "Bengaluru, Karnataka, India",
  resumeUrl: "/resume.pdf",
  linkedin: "https://www.linkedin.com/in/aman-dixit-1a999117a/",
  socials: [
    { label: "GitHub", href: "https://github.com/Aman0111/", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aman-dixit-1a999117a/", icon: Linkedin },
    { label: "Email", href: "mailto:dixitaman.now.wwe@gmail.com", icon: Mail }
  ]
};

export const navItems = [
  { id: "home", label: "// home" },
  { id: "about", label: "// profile" },
  { id: "skills", label: "// expertise" },
  { id: "experience", label: "// experience" },
  { id: "projects", label: "// work" },
  { id: "contact", label: "// contact" }
];

export const stats = [
  { value: 6, suffix: "+", label: "Years building AI and full-stack systems" },
  { value: 50, suffix: "K+", label: "Daily AI/API requests handled" },
  { value: 99.5, suffix: "%", label: "Platform uptime delivered" },
  { value: 60, suffix: "%", label: "Critical incident reduction through automation" }
];

export const proofPoints = [
  "4 agentic AI systems shipped",
  "100K+ healthcare records indexed",
  "10+ engineers led",
  "40% faster release cycles",
  "80%+ test coverage standards",
  "Sub-2-second AI retrieval"
];

export const skillGroups = [
  {
    title: "AI / GenAI",
    icon: BrainCircuit,
    items: ["Python", "FastAPI", "LangChain", "LlamaIndex", "OpenAI GPT-4o", "Claude API", "Gemini API", "RAG"]
  },
  {
    title: "Agentic AI",
    icon: Sparkles,
    items: ["LangGraph", "CrewAI", "AutoGen", "MCP", "Tool-use Pipelines", "Function Calling", "Agent Memory"]
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["React.js", "Next.js", "TypeScript", "Redux", "MobX", "React Native", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "FastAPI", "Laravel", "Core PHP", "GraphQL", "WebSockets", "JWT/OAuth"]
  },
  {
    title: "Vector & Data",
    icon: Database,
    items: ["ChromaDB", "FAISS", "Pinecone", "MongoDB", "MySQL", "PostgreSQL", "Redis", "ETL"]
  },
  {
    title: "Cloud / DevOps",
    icon: Cloud,
    items: ["Docker", "Jenkins", "AWS", "GCP", "Nginx", "Linux", "CI/CD", "Monitoring"]
  },
  {
    title: "Quality & Tools",
    icon: Wrench,
    items: ["Jest", "Mocha", "PHPUnit", "Selenium", "Postman", "Jira", "Confluence", "Agile/Scrum"]
  },
  {
    title: "Languages",
    icon: TerminalSquare,
    items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "C#", "HTML5", "CSS3"]
  }
];

export const experiences = [
  {
    role: "Senior AI/ML Engineer & Agentic AI Developer",
    company: "Advantage AI Engineering Private Limited",
    period: "Jul 2024 - Mar 2026",
    location: "Bengaluru, India",
    description:
      "Owned AI/backend architecture and delivery for 3 HIPAA-compliant healthcare platforms integrating LLMs, RAG, Python microservices, React, Node.js, and MongoDB.",
    points: ["4 agentic AI systems", "50K+ daily requests", "99.5% uptime", "60% fewer incidents"]
  },
  {
    role: "Senior Software Engineer",
    company: "NIIT",
    period: "Sep 2023 - Apr 2024",
    location: "Bengaluru, India",
    description:
      "Delivered SaaS learning platform features end-to-end and introduced AI-generated quiz, summary, and recommendation workflows using OpenAI and Python services.",
    points: ["15+ features", "28% engagement lift", "35% fewer AI response errors"]
  },
  {
    role: "Senior Software Developer",
    company: "Ksolves India Limited",
    period: "Dec 2021 - Jun 2023",
    location: "Bengaluru, India",
    description:
      "Architected MERN/Next.js SaaS features for 10K+ monthly users, optimized MongoDB workflows, raised test coverage, and supported technical lead delivery responsibilities.",
    points: ["12+ SaaS features", "10K+ MAU", "80% test coverage", "55% fewer regressions"]
  },
  {
    role: "Software Developer",
    company: "LitSpark Solutions",
    period: "Jun 2020 - Nov 2021",
    location: "Bengaluru, India",
    description:
      "Built full-stack education and retail applications using React, Node.js, PHP/Laravel, MySQL, and real-time interfaces for client-facing workflows.",
    points: ["6 apps shipped", "5K+ concurrent users", "25% performance lift"]
  },
  {
    role: "Software Engineer",
    company: "Get Ahead Education Limited",
    period: "Jun 2019 - Apr 2020",
    location: "Bengaluru, India",
    description:
      "Delivered enterprise HR automation, student registration, and reporting systems using Core PHP, MySQL, JavaScript, and role-based workflows.",
    points: ["200+ employees", "1K+ registrations", "80% manual effort reduction"]
  }
];

export const projects = [
  {
    title: "MedAgent",
    description:
      "Multi-agent clinical AI assistant coordinating retrieval, symptom analysis, summarization, and response formatting with source-cited RAG answers.",
    stack: ["Python", "FastAPI", "LangGraph", "GPT-4o", "ChromaDB", "MCP", "React"],
    
    image: "/projects/medagent.svg",
    accent: "92% Q&A accuracy",
    detail:
      "Indexed 100K+ medical documents, delivered sub-2-second semantic retrieval, streamed token-by-token responses, reduced hallucinations by 40%, and cut LLM cost by 30% with Redis caching and model routing."
  },
  {
    title: "DocuMind",
    description:
      "Agentic document intelligence pipeline for PDF ingestion, OCR, semantic chunking, entity extraction, and structured medical/insurance summaries.",
    stack: ["FastAPI", "LangChain", "Claude API", "FAISS", "Celery", "Redis", "PostgreSQL"],
    
    image: "/projects/documind.svg",
    accent: "500+ docs/hour",
    detail:
      "Used ReAct reasoning and function calling to extract entities, dates, amounts, and relationships from unstructured forms with 89% extraction accuracy."
  },
  {
    title: "AutoLearn AI",
    description:
      "Personalized learning path generator that analyzes learner performance, goals, and skill gaps to recommend adaptive course journeys.",
    stack: ["OpenAI GPT", "Pinecone", "LangChain", "FastAPI", "Node.js", "React"],
    
    image: "/projects/autolearn.svg",
    accent: "85% satisfaction",
    detail:
      "Embedded course content and learner profiles into Pinecone, generated curriculum-aligned JSON plans, and improved learner engagement through AI recommendations."
  },
  {
    title: "AgentOps Monitor",
    description:
      "LLMOps observability dashboard tracking token usage, latency per agent step, prompt variants, cost per session, and error rates.",
    stack: ["Python", "FastAPI", "Prometheus", "Grafana", "Redis", "React"],
    
    image: "/projects/agentops.svg",
    accent: "25% quality lift",
    detail:
      "Collected telemetry across production AI agents and enabled prompt A/B testing that improved response quality by 25% and reduced tokens per request by 18%."
  },
  {
    title: "Diagnostic Healthcare Platform",
    description:
      "HIPAA-compliant healthcare platform combining React, Node.js, FastAPI AI microservices, MongoDB, and real-time patient-doctor communication.",
    stack: ["React", "Node.js", "FastAPI", "MongoDB", "WebSockets", "RAG"],
    
    image: "/projects/diagnostic-platform.svg",
    accent: "99.9% availability",
    detail:
      "Designed microservices and API gateway workflows handling 10K+ daily requests with intelligent symptom analysis and context-aware AI responses."
  },
  {
    title: "Countabout Financial Platform",
    description:
      "Financial transaction system with React dashboards for 5 roles, Node/MongoDB backend, payment APIs, and real-time balance calculations.",
    stack: ["React", "Node.js", "MongoDB", "Payment APIs", "ACID Workflows"],
    
    image: "/projects/countabout.svg",
    accent: "500+ accounts",
    detail:
      "Built secure transaction flows, role-based dashboards, and data integrity safeguards for active account management and finance operations."
  },
  {
    title: "Gezeno E-Commerce",
    description:
      "Complete commerce platform with React storefront, Node/Express APIs, MongoDB order flows, multi-gateway payments, CMS, and inventory automation.",
    stack: ["React", "Express", "MongoDB", "CMS", "Payments", "Email Automation"],
    
    image: "/projects/gezeno.svg",
    accent: "2K+ monthly orders",
    detail:
      "Implemented cart, checkout, inventory, multi-gateway payments, automated notifications, and live stock updates across frontend and backend."
  },
  {
    title: "AI Healthcare Delivery Program",
    description:
      "End-to-end technical delivery leadership for 3 AI-powered healthcare applications across frontend, backend, AI/ML, QA, and DevOps teams.",
    stack: ["Agile", "Jira", "CI/CD", "HIPAA", "Risk Governance", "Team Leadership"],
    
    image: "/projects/delivery-leadership.svg",
    accent: "40% faster releases",
    detail:
      "Managed sprint governance, RAID logs, stakeholder reporting, multi-vendor coordination, release planning, and SLA tracking for a 10+ member team."
  }
];

export const sectionKicker = {
  about: "Profile",
  skills: "Expertise",
  experience: "Professional Experience",
  projects: "Selected Work",
  contact: "Available for Select Opportunities"
};

export const highlights = [
  {
    icon: BrainCircuit,
    title: "Agentic AI with production discipline",
    copy: "I have shipped multi-agent workflows with LangGraph, MCP, RAG, vector search, prompt versioning, model routing, and LLMOps monitoring."
  },
  {
    icon: ShieldCheck,
    title: "Healthcare-grade reliability",
    copy: "I have worked on HIPAA-conscious platforms where uptime, validation, source citations, incident reduction, and security gates matter."
  },
  {
    icon: UsersRound,
    title: "Hands-on engineering plus delivery leadership",
    copy: "I can write the system, review the architecture, mentor developers, run sprint governance, and keep stakeholders aligned on delivery health."
  }
];

export const testimonials = [
  {
    quote:
      "Aman brings the rare blend of AI architecture, full-stack execution, and delivery ownership that turns complex product ideas into shipped systems.",
    author: "Delivery Leadership Snapshot"
  },
  {
    quote:
      "His work spans production AI agents, healthcare platforms, SaaS features, financial systems, and commerce workflows with measurable impact.",
    author: "Portfolio Summary"
  }
];
