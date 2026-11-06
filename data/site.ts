// =============================================================================
// Single source of truth for site content & metadata
// =============================================================================

export type SocialKey = "github" | "linkedin" | "twitter" | "email";

export interface Social {
  label: string;
  href: string;
  icon: SocialKey;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  proficiencyTag?: string; // e.g. "daily use", "core stack"
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  category: "Web" | "App" | "AI/ML";
  tech: string[];
  github: string;
  live: string;
  thumbnail?: string;
  featured?: boolean;
}

export interface ProjectGroup {
  id: string;
  number: string;
  title: string;
  description: string;
  projects: Project[];
}

export interface ClientWork {
  title: string;
  tagline: string;
  description: string;
  category: "E-Commerce" | "SaaS Dashboard" | "Portfolio" | "Corporate" | "Hospitality";
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  type: "work" | "education" | "plans";
  achievements: string[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  shortInstitution: string;
  semester: string;
  startYear: string;
  expectedGraduation: string;
  relevantCourses: string[];
}

const projectGroups: ProjectGroup[] = [
  {
    id: "rag-healthcare",
    number: "01 / category",
    title: "RAG, Search & Healthcare Systems",
    description:
      "Specialized search, academic discovery, clinical healthcare assistance, and advanced Retrieval-Augmented Generation architectures.",
    projects: [
      {
        title: "RozgarBot — AI Career & Opportunity Finder",
        description:
          "Pakistani job, scholarship, and opportunity finder using RAG + Google Gemini API over PostgreSQL with city-level accuracy and bilingual Roman Urdu support.",
        category: "AI/ML",
        tech: ["Python", "RAG", "Google Gemini API", "PostgreSQL", "FastAPI"],
        github: "https://github.com/Muhammad08-dot/rozgor_bot",
        live: "https://github.com/Muhammad08-dot/rozgor_bot",
        featured: true,
      },
      {
        title: "AI Research Assistant",
        description:
          "Local-first academic paper synthesis tool searching arXiv & CrossRef with credibility verification, LLM summarization, and one-click BibTeX export.",
        category: "Web",
        tech: ["Next.js 16", "React 19", "LangChain", "OpenAI", "arXiv API"],
        github: "https://github.com/Muhammad08-dot/ai-research-assistant-project",
        live: "https://github.com/Muhammad08-dot/ai-research-assistant-project",
        featured: true,
      },
      {
        title: "AI Medical Report Simplifier (ClearPath)",
        description:
          "Healthcare Next.js web application designed to translate dense laboratory blood tests and clinical findings into patient-friendly plain language.",
        category: "Web",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
        github: "https://github.com/Muhammad08-dot/ai_medical_report_simplifier-",
        live: "https://github.com/Muhammad08-dot/ai_medical_report_simplifier-",
        featured: true,
      },
      {
        title: "Codebase RAG Assistant",
        description:
          "Intelligent contextual assistant to chat with and navigate entire software codebases using AST-aware Retrieval-Augmented Generation.",
        category: "AI/ML",
        tech: ["Python", "ChromaDB", "LangChain", "Vector Embeddings"],
        github: "https://github.com/Muhammad08-dot/codebase-rag-assistant",
        live: "https://github.com/Muhammad08-dot/codebase-rag-assistant",
      },
      {
        title: "Knowledge Graph RAG Architecture",
        description:
          "Knowledge Graph-backed RAG architecture for interconnected data retrieval, entity relationship discovery, and hallucination reduction.",
        category: "AI/ML",
        tech: ["Python", "Knowledge Graphs", "Neo4j / NetworkX", "RAG", "Embeddings"],
        github: "https://github.com/Muhammad08-dot/knowledge_graph_rag",
        live: "https://github.com/Muhammad08-dot/knowledge_graph_rag",
      },
    ],
  },
  {
    id: "autonomous-agents",
    number: "02 / category",
    title: "Autonomous Agents & Workflow Orchestration",
    description:
      "Multi-agent collaborative systems, Model Context Protocol (MCP) tooling, and production conversational agents.",
    projects: [
      {
        title: "WhatsApp Gemini AI Agent",
        description:
          "Production-ready AI assistant connecting WhatsApp to Google's Gemini LLM with multi-key rotation and model fallback for 24/7 high availability.",
        category: "AI/ML",
        tech: ["Python", "FastAPI", "Google Gemini API", "WhatsApp API", "HuggingFace"],
        github: "https://github.com/Muhammad08-dot/whatsapp_agent",
        live: "https://github.com/Muhammad08-dot/whatsapp_agent",
        featured: true,
      },
      {
        title: "Notion MCP Agent",
        description:
          "Terminal-based autonomous AI agent to read, write, and manage Notion workspaces via Model Context Protocol (MCP) and Agno framework with persistent memory.",
        category: "AI/ML",
        tech: ["Python", "MCP", "Agno", "OpenAI", "Notion API"],
        github: "https://github.com/Muhammad08-dot/notion_mcp_agent",
        live: "https://github.com/Muhammad08-dot/notion_mcp_agent",
        featured: true,
      },
      {
        title: "LangGraph Multi-Agent Workflows",
        description:
          "A suite of 5 production-grade multi-agent autonomous workflows built with LangGraph to orchestrate complex real-world task execution.",
        category: "AI/ML",
        tech: ["Python", "LangGraph", "LangChain", "FastAPI"],
        github: "https://github.com/Muhammad08-dot/langgraph_projects_mid-advance",
        live: "https://github.com/Muhammad08-dot/langgraph_projects_mid-advance",
        featured: true,
      },
      {
        title: "Autonomous AI Startup Builder",
        description:
          "AI-powered Next.js application that transforms raw business ideas into comprehensive Startup Plans, market analyses, and execution roadmaps.",
        category: "AI/ML",
        tech: ["Next.js", "React 19", "TypeScript", "LangChain", "OpenAI"],
        github: "https://github.com/Muhammad08-dot/autonomous-ai-startup-builder",
        live: "https://github.com/Muhammad08-dot/autonomous-ai-startup-builder",
        featured: true,
      },
      {
        title: "AI Fraud Investigation Agent",
        description:
          "Autonomous multi-agent system built with Pydantic AI and FastAPI that automates entity due diligence and scores fraud risk across 7 dimensions.",
        category: "AI/ML",
        tech: ["Python", "Pydantic AI", "FastAPI", "AsyncIO"],
        github: "https://github.com/Muhammad08-dot/ai_fraud_investigation_agent",
        live: "https://github.com/Muhammad08-dot/ai_fraud_investigation_agent",
      },
      {
        title: "Autonomous Software Engineer (AutoDev)",
        description:
          "Autonomous engineering agent that plans, writes, tests, and validates complete software features in isolated Docker sandbox environments.",
        category: "AI/ML",
        tech: ["Python", "LangGraph", "Docker", "LLM Tooling"],
        github: "https://github.com/Muhammad08-dot/autodev-agent",
        live: "https://github.com/Muhammad08-dot/autodev-agent",
      },
      {
        title: "Autonomous Agentic Email Assistant",
        description:
          "Autonomous AI agent that monitors inboxes, categorizes incoming communications, drafts context-aware replies, and manages action items.",
        category: "AI/ML",
        tech: ["Python", "LangChain", "FastAPI", "OAuth2"],
        github: "https://github.com/Muhammad08-dot/agentic-email-assistant",
        live: "https://github.com/Muhammad08-dot/agentic-email-assistant",
      },
    ],
  },
  {
    id: "vision-deep-learning",
    number: "03 / category",
    title: "Computer Vision, Edge AI & Deep Learning",
    description:
      "Real-time video processing, algorithmic decision making, and hardware-integrated assistive technology.",
    projects: [
      {
        title: "Khidmat — AI Home Services Platform",
        description:
          "AI-powered on-demand home services platform connecting customers with vetted local professionals via smart AI matching, live tracking, and real-time chat.",
        category: "App",
        tech: ["React Native", "Next.js", "AI Matching Engine", "FastAPI", "WebSockets"],
        github: "https://github.com/Muhammad08-dot/khidmat_app-main",
        live: "https://github.com/Muhammad08-dot/khidmat_app-main",
        featured: true,
      },
      {
        title: "Autonomous Trading System",
        description:
          "Algorithmic trading engine utilizing Deep Q-Learning (DQN), technical analysis indicators, and real-time paper trading simulation.",
        category: "AI/ML",
        tech: ["Python", "PyTorch", "Deep Q-Learning", "NumPy", "Pandas"],
        github: "https://github.com/Muhammad08-dot/autonomous-trading-system",
        live: "https://github.com/Muhammad08-dot/autonomous-trading-system",
        featured: true,
      },
      {
        title: "Real-Time Face Recognition System",
        description:
          "Real-time Face Detection and Recognition System built with Python and OpenCV, featuring live video capture and identification through a modern UI.",
        category: "AI/ML",
        tech: ["Python", "OpenCV", "Deep Learning", "NumPy"],
        github: "https://github.com/Muhammad08-dot/Face-Recognition-System",
        live: "https://github.com/Muhammad08-dot/Face-Recognition-System",
      },
      {
        title: "Women Safety Edge AI",
        description:
          "Real-time Edge AI system running on device to detect danger signals, SOS gesture movements, and audio distress cues under low latency.",
        category: "AI/ML",
        tech: ["Python", "Edge AI", "Computer Vision", "Audio Analysis"],
        github: "https://github.com/Muhammad08-dot/women-safety-ai",
        live: "https://github.com/Muhammad08-dot/women-safety-ai",
      },
      {
        title: "Blind AI Companion",
        description:
          "Vision-Language wearable-integrated assistive system providing real-time ambient scene descriptions, obstacle alerts, and live document reading.",
        category: "App",
        tech: ["Python", "Vision-Language Models", "OpenCV", "TTS"],
        github: "https://github.com/Muhammad08-dot/blind-ai-companion",
        live: "https://github.com/Muhammad08-dot/blind-ai-companion",
      },
      {
        title: "Vision Document Data Extractor",
        description:
          "Document parsing pipeline extracting structured JSON data from complex invoices, reports, and receipts using Vision Language Models.",
        category: "AI/ML",
        tech: ["Python", "VLM", "FastAPI", "Pydantic"],
        github: "https://github.com/Muhammad08-dot/vision-data-extractor",
        live: "https://github.com/Muhammad08-dot/vision-data-extractor",
      },
    ],
  },
  {
    id: "fullstack-systems",
    number: "04 / category",
    title: "Data Platforms & Full-Stack Systems",
    description:
      "Distributed machine learning simulations, intelligent data scientist tooling, and modern analytical dashboards.",
    projects: [
      {
        title: "DataMate AI — Autonomous Data Scientist",
        description:
          "Agentic data science web app allowing users to upload datasets (CSV, Excel, JSON) or connect directly to SQL/NoSQL databases with automated EDA.",
        category: "AI/ML",
        tech: ["Streamlit", "Python", "GPT-4o", "PostgreSQL", "Firebase"],
        github: "https://github.com/Muhammad08-dot/-DataMate_AI-",
        live: "https://github.com/Muhammad08-dot/-DataMate_AI-",
        featured: true,
      },
      {
        title: "Urdu Mental Health Counseling Bot",
        description:
          "Culturally-aware anonymous CBT mental health counseling AI system with integrated emergency crisis detection and safety mechanisms.",
        category: "AI/ML",
        tech: ["Python", "NLP", "FastAPI", "Prompt Engineering"],
        github: "https://github.com/Muhammad08-dot/urdu-mental-health-bot",
        live: "https://github.com/Muhammad08-dot/urdu-mental-health-bot",
      },
      {
        title: "Next.js SaaS Enterprise Dashboard",
        description:
          "High-performance analytical SaaS dashboard featuring modern data tables, live metrics, role-based access control, and dark/light modes.",
        category: "Web",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/Muhammad08-dot/nextjs-saas-dashboard",
        live: "https://github.com/Muhammad08-dot/nextjs-saas-dashboard",
      },
      {
        title: "Federated Learning Simulation",
        description:
          "Privacy-preserving distributed machine learning framework simulated across nodes without centralizing raw training datasets.",
        category: "AI/ML",
        tech: ["Python", "PyTorch", "Federated Learning", "DP"],
        github: "https://github.com/Muhammad08-dot/federated-learning-simulation",
        live: "https://github.com/Muhammad08-dot/federated-learning-simulation",
      },
    ],
  },
];

const allProjects: Project[] = projectGroups.flatMap((g) => g.projects);

export const site = {
  // ---- Brand / hero --------------------------------------------------------
  name: "Muhammad Hamiz",
  firstName: "Muhammad",
  role: "Full-Stack & AI Engineer",
  locationDisplay: "working remotely",
  studentTagline: "BS AI student at NUML Faisalabad",
  tagline:
    "I design and build refreshing digital experiences — from robust web applications to intelligent autonomous AI systems.",
  shortBio:
    "Full-stack and AI engineer building production-grade web systems, agentic AI workflows, and machine learning solutions.",

  // ---- Education -----------------------------------------------------------
  education: {
    degree: "BS Artificial Intelligence",
    institution: "National University of Modern Languages (NUML), Faisalabad Campus",
    shortInstitution: "NUML Faisalabad Campus",
    semester: "5th semester",
    startYear: "2024",
    expectedGraduation: "TODO: Expected 2027",
    relevantCourses: [
      "Currently enrolled in 5th semester.",
      "Core theoretical foundation in Machine Learning, Knowledge Representation & Reasoning, and Deep Learning.",
      "TODO: Add semester CGPA / Society / FYP idea if desired.",
    ],
  } as EducationInfo,

  // ---- SEO -----------------------------------------------------------------
  metadataBase: "https://devfolio.example.com",
  title: "Muhammad Hamiz — Full-Stack & AI Engineer",
  description:
    "Portfolio of Muhammad Hamiz, a full-stack and AI developer building modern web and autonomous AI systems with Next.js, React, and Python.",

  // ---- Navigation ----------------------------------------------------------
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Client Work", href: "/previous-work" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],

  // ---- Social links (Repositories page as primary GitHub destination) -----
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Muhammad08-dot?tab=repositories",
      icon: "github",
    },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "Email", href: "mailto:mhamiz279@gmail.com", icon: "email" },
  ] as Social[],

  email: "mhamiz279@gmail.com",
  whatsapp: "+92 305 3999279",
  whatsappUrl: "https://wa.me/923053999279",

  // ---- About ---------------------------------------------------------------
  about: {
    profileImage: "/profile.jpg",
    location: "Remote · Worldwide",
    availability: "Open to freelance & full-time",
    currentlyBuilding: "TODO: Building agentic workflows & local AI systems",
    interests: ["Autonomous Agents", "Open Source", "Design Systems", "Edge AI"],
    bio: [
      "I'm a full-stack engineer and AI specialist with a strong focus on clean architectures and intelligent autonomous systems. I have designed and shipped solutions across web applications, multi-agent frameworks, and machine learning pipelines.",
      "I'm also studying BS Artificial Intelligence at NUML Faisalabad Campus, currently in my 5th semester, which is where the theory behind the systems I build comes from.",
      "My work bridges the gap between modern frontend engineering and scalable backend/AI infrastructures — crafting intuitive interfaces backed by high-throughput systems.",
      "When I'm not coding, you'll find me exploring state-of-the-art LLM architectures, contributing to open-source agent ecosystems, and experimenting with new tech stacks.",
    ],
  },

  // ---- Skills (clean categories without fake percentage numbers) ----------
  skillCategories: [
    {
      title: "Frontend",
      proficiencyTag: "daily use",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend & Systems",
      proficiencyTag: "core stack",
      skills: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      title: "AI / ML & Agents",
      proficiencyTag: "daily use",
      skills: [
        "LangGraph",
        "LangChain",
        "PyTorch",
        "OpenCV",
        "Model Context Protocol (MCP)",
        "RAG & Vector DBs",
      ],
    },
    {
      title: "Mobile & Edge",
      proficiencyTag: "familiar",
      skills: ["React Native", "Edge AI / Computer Vision"],
    },
    {
      title: "Tools & DevOps",
      proficiencyTag: "daily use",
      skills: ["Git & GitHub", "CI / CD Pipelines", "Streamlit", "Linux"],
    },
  ] as SkillCategory[],

  // ---- Previous Work / Live Deployed Production Sites ---------------------
  previousWork: [
    {
      title: "Halden — E-Commerce Store",
      tagline: "Handmade ceramics, linen and warm lighting storefront",
      description:
        "Considered homewares e-commerce experience featuring product catalogues, filterable collections, detailed item showcases, responsive cart workflows, and high-conversion editorial checkout aesthetics.",
      category: "E-Commerce",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Cart Management", "Responsive UI"],
      liveUrl: "https://05-ecommerce-store.vercel.app/",
      highlights: [
        "Minimalist aesthetic with high-density editorial image gallery.",
        "Smooth client-side cart drawer and currency checkout state.",
        "Fully responsive mobile-first architecture with zero layout shift.",
      ],
    },
    {
      title: "SaaSPanel — Admin Dashboard",
      tagline: "Comprehensive analytical SaaS control plane",
      description:
        "Enterprise-grade administration dashboard with interactive real-time data charts, user management tables, revenue analytics metrics, activity logs, and permission toggles.",
      category: "SaaS Dashboard",
      tech: ["React", "Next.js", "Tailwind CSS", "Data Visualizations", "Admin UI"],
      liveUrl: "https://04-saas-dashboard-admin.vercel.app/",
      highlights: [
        "Rich analytics widgets, MRR tracking, and churn statistics.",
        "Paginated data tables with filtering, search, and sorting.",
        "Clean modular layout with responsive sidebar and top-bar telemetry.",
      ],
    },
    {
      title: "Adeel Ahmed — Developer Portfolio",
      tagline: "Production full-stack engineering portfolio showcase",
      description:
        "Curated portfolio platform for a senior full-stack engineer highlighting production web applications, architecture case studies, client reviews, and direct booking channels.",
      category: "Portfolio",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Editorial Layout"],
      liveUrl: "https://03-developer-portfolio.vercel.app/",
      highlights: [
        "Focused narrative layout showcasing engineering depth and tech stacks.",
        "Performance-optimized static generation with sub-second load times.",
        "Accessible, high-contrast typography and minimalist aesthetics.",
      ],
    },
    {
      title: "Calderwood Partners — Corporate Consultancy",
      tagline: "Operations & growth advisory firm website",
      description:
        "High-trust corporate presence for an industrial, logistics, and healthcare consultancy firm. Features case study breakdowns, leadership profiles, insights journal, and client onboarding forms.",
      category: "Corporate",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Optimization", "Corporate UI"],
      liveUrl: "https://02-business-corporate-site.vercel.app/",
      highlights: [
        "Polished, authoritative branding tailored for enterprise decision-makers.",
        "Deep-dive client engagement case studies with quantifiable outcomes.",
        "WCAG-compliant contrast ratios and fluid responsive grids.",
      ],
    },
    {
      title: "Saffron & Ash — Wood-Fire Restaurant",
      tagline: "Wood-fire Anatolian kitchen & dining experience",
      description:
        "Immersive dining and hospitality web platform featuring curated seasonal dinner & cocktail menus, table reservations, private event bookings, and location hours.",
      category: "Hospitality",
      tech: ["Next.js", "React", "Tailwind CSS", "Reservation Flow", "Editorial Design"],
      liveUrl: "https://01-restaurant-site-zeta.vercel.app/",
      highlights: [
        "Atmospheric visual design showcasing culinary atmosphere and dishes.",
        "Interactive categorized food & beverage menu with pricing and dietary flags.",
        "Direct reservation links and operational schedule clarity.",
      ],
    },
  ] as ClientWork[],

  // ---- Categorized Project Groups -----------------------------------------
  projectGroups,

  // Flat list for any generic lookups
  projects: allProjects,

  projectFilters: ["All", "Web", "App", "AI/ML"] as const,

  // ---- Experience & Education (Curated realistic journey) -----------------
  educationHistory: [
    {
      role: "BS Artificial Intelligence",
      company: "National University of Modern Languages (NUML), Faisalabad Campus",
      duration: "2024 — Present",
      type: "education",
      achievements: [
        "Currently studying in 5th semester with active coursework in core computing & AI.",
        "Theoretical focus: Machine Learning algorithms, Knowledge Representation, and intelligent systems design.",
        "TODO: Mention key semester project / FYP direction.",
      ],
    },
  ] as ExperienceItem[],

  experienceHistory: [
    {
      role: "App & AI/ML Development Intern",
      company: "Developers Hub",
      duration: "Recent",
      type: "work",
      achievements: [
        "Worked on mobile application development and intelligent machine learning features.",
        "Integrated AI/ML inference pipelines with client applications for enhanced automation.",
        "Collaborated with engineering teams on code reviews, debugging, and feature delivery.",
      ],
    },
    {
      role: "Web Development Intern",
      company: "Tech Hub",
      duration: "3 Months",
      type: "work",
      achievements: [
        "Completed a 3-month intensive web development internship building responsive web interfaces.",
        "Collaborated on frontend UI components, state management, and API integrations.",
        "Practiced industry-standard git workflows, responsive layout design, and clean code principles.",
      ],
    },
  ] as ExperienceItem[],

  futurePlans: [
    {
      role: "Next Milestones & Research Focus",
      company: "Independent & Academic Roadmap",
      duration: "Upcoming",
      type: "plans",
      achievements: [
        "Specializing further in Autonomous Multi-Agent Systems and Model Context Protocol (MCP) integrations.",
        "Preparing capstone Final Year Project (FYP) focused on production-grade agentic workflows.",
        "Contributing to impactful open-source AI libraries and preparing for global full-stack AI roles.",
      ],
    },
  ] as ExperienceItem[],

  // ---- Contact -------------------------------------------------------------
  contact: {
    heading: "Let's build something substantial.",
    subtitle:
      "Have a project in mind, an autonomous AI system to design, or a role to discuss? My inbox is always open.",
  },
} as const;

export type Site = typeof site;
