export const personalInfo = {
  name: "Aishwarya Brahmankar",
  roleTitle: "Full-Stack Developer & AI Systems Engineer",
  tagline: "Building intelligent web architectures, high-performance backends, and autonomous agent workflows.",
  location: "Nagpur, Maharashtra (Open to Remote)",
  email: "aishwaryabrahmankar06@gmail.com",
  roles: [
    "Full-Stack Developer",
    "Backend & Database Developer",
    "AI/ML & Agentic Automation Specialist",
    "Open Source Contributor"
  ],
  bio: [
    "I am a 3rd-year Computer Science Engineering student specializing in AI & Machine Learning at Symbiosis Institute of Technology, Nagpur. I blend core backend engineering with modern web architecture and agentic AI systems.",
    "My focus is on crafting robust, data-driven web applications with reliable backend logic, optimized SQL workflows, and automated pipeline integration. I take pride in taking ideas from raw algorithms to polished, functional web products."
  ],
  stats: [
    { label: "Academic Standing", value: "3rd Year", description: "B.Tech CSE (AI & ML) at SIT Nagpur" },
    { label: "Core Tech Stack", value: "10+", description: "Python, Java, C, JS, SQL, AI Agents" },
    { label: "Database Proficiency", value: "Advanced", description: "SQL, PL/SQL & pgPL/SQL optimization" },
    { label: "Focus Area", value: "Backend & AI", description: "Scalable logic, automation & web backends" },
  ],
  socials: {
    github: "https://github.com/aishwarya602",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:aishwaryabrahmankar06@gmail.com",
  },
  resumeUrl: "#resume",
};

export const skillsData = {
  Backend: [
    { name: "FastAPI & REST APIs", level: "Advanced", years: "2 yrs", hot: true },
    { name: "Python", level: "Advanced", years: "3 yrs", hot: true },
    { name: "Node.js & Express", level: "Intermediate", years: "2 yrs" },
    { name: "Java & C", level: "Intermediate", years: "3 yrs" },
    { name: "SQLAlchemy & Pydantic", level: "Advanced", years: "2 yrs" },
  ],
  "AI & Machine Learning": [
    { name: "Agentic AI (LangChain / Groq)", level: "Advanced", years: "1 yr", hot: true },
    { name: "Computer Vision & OpenCV", level: "Advanced", years: "2 yrs", hot: true },
    { name: "Reinforcement Learning (Q-Learning)", level: "Intermediate", years: "1 yr" },
    { name: "Google Earth Engine & Remote Sensing", level: "Advanced", years: "1 yr", hot: true },
    { name: "Scikit-Learn & Random Forest", level: "Advanced", years: "2 yrs" },
  ],
  Frontend: [
    { name: "React (React 19)", level: "Advanced", years: "2 yrs", hot: true },
    { name: "JavaScript (ES6+)", level: "Advanced", years: "3 yrs", hot: true },
    { name: "Tailwind CSS", level: "Advanced", years: "2 yrs", hot: true },
    { name: "Zustand State Management", level: "Intermediate", years: "1 yr" },
    { name: "Streamlit UI", level: "Advanced", years: "1 yr" },
  ],
  "Databases & SQL": [
    { name: "PostgreSQL & SQLite", level: "Advanced", years: "2 yrs", hot: true },
    { name: "SQL & PL/SQL Stored Procedures", level: "Advanced", years: "2 yrs", hot: true },
    { name: "Relational Schema Design", level: "Advanced", years: "2 yrs" },
    { name: "Alembic Migrations", level: "Intermediate", years: "1 yr" },
  ],
  "Tools & Workflow": [
    { name: "Git & GitHub", level: "Advanced", years: "3 yrs", hot: true },
    { name: "Vite & Modern Tooling", level: "Advanced", years: "2 yrs" },
    { name: "Lex / Yacc & Compilers", level: "Intermediate", years: "1 yr" },
    { name: "Postman & API Testing", level: "Advanced", years: "2 yrs" },
  ],
  "Soft Skills": [
    { name: "Problem Solving & Logic", level: "Master", description: "Algorithmic thinking, data structures, and query optimization" },
    { name: "Systems Thinking", level: "Advanced", description: "Architecting end-to-end full-stack and agentic AI flows" },
    { name: "Rapid Prototyping", level: "High", description: "20+ weekly AI/ML projects and rapid technical implementation" },
    { name: "Technical Communication", level: "Clear", description: "Documenting system architectures, APIs, and clean code" },
  ],
};

export const projectsData = [
  {
    id: "shopscout-ai-agent",
    title: "ShopScout: Autonomous Shopping Recommendation Agent",
    category: "AI & Machine Learning",
    summary: "Agentic shopping assistant utilizing Groq Llama 3.3 70B, LangChain tool execution, and live SerpApi Google Shopping search.",
    description: "An autonomous shopping intelligence system designed around agentic AI principles. ShopScout analyzes natural-language user constraints, independently plans information gathering, and invokes live SerpApi tools ('search_products' and 'get_product_reviews_snippet') without hallucinating prices. Incorporates multi-turn session memory enabling users to iteratively adjust preferences (e.g. 'under ₹1500', 'only boAt brand') while maintaining full conversational context, supported by a modern Streamlit web interface and resilient fallback mock catalog.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "LangChain", "Llama 3.3", "Groq API", "SerpApi", "Streamlit", "Agentic AI"],
    featured: true,
    challenges: [
      "Engineered an AgentExecutor tool-calling loop (up to 6 autonomous iterations) preventing cyclic recursion and hallucinations.",
      "Implemented multi-turn conversational session memory allowing dynamic constraint re-planning without state loss.",
      "Created a dual-mode data layer with real SerpApi queries and automatic fallback to bundled mock catalogs for offline execution."
    ],
    github: "https://github.com/aishwarya602/shopscout-ai-agent",
    liveDemo: "https://github.com/aishwarya602/shopscout-ai-agent#readme",
  },
  {
    id: "construction-erp",
    title: "Full-Stack Construction ERP & Project Management",
    category: "Full-Stack & Web",
    summary: "Enterprise resource platform with FastAPI backend, SQLAlchemy ORM, and modern React 19 + Tailwind CSS frontend.",
    description: "A comprehensive, multi-tiered Enterprise Resource Planning (ERP) platform built for modern construction workflows, milestone monitoring, and material procurement. The backend leverages FastAPI, SQLAlchemy 2.0, Alembic migrations, and Pydantic v2 schemas across modular service architectures. The client is powered by React 19, Vite, Zustand centralized state management, and Tailwind CSS with Lucide icons for responsive project telemetry dashboards.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    tags: ["React 19", "FastAPI", "Python", "SQLAlchemy", "Tailwind CSS", "Zustand", "Alembic"],
    featured: true,
    challenges: [
      "Architected normalized relational database schemas with Alembic migrations for tracking construction stages, expenses, and inventory.",
      "Engineered modular asynchronous REST endpoints in FastAPI utilizing Pydantic v2 for strict request validation.",
      "Built a responsive operational dashboard with React 19 and Zustand state management for instant UI reactivity."
    ],
    github: "https://github.com/aishwarya602/construction-erp",
    liveDemo: "https://github.com/aishwarya602/construction-erp#readme",
  },
  {
    id: "ai-multihazard-monitoring",
    title: "AI Multi-Hazard Environmental Monitoring Dashboard",
    category: "AI & Machine Learning",
    summary: "Geospatial monitoring combining Google Earth Engine, Sentinel satellite imagery, and Random Forest classification.",
    description: "An intelligent geospatial monitoring system that harnesses satellite remote sensing and machine learning via Google Earth Engine. Analyzes Sentinel-1 SAR and Sentinel-2 multispectral imagery to compute critical spectral indices (NDVI for vegetation, NDWI for water, NDBI for built-up urban index, and NBR for burn severity). Applies Random Forest classification algorithms to detect urban encroachment, track flood inundation, map wildfire burn scars, and generate environmental risk projections.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    tags: ["Google Earth Engine", "JavaScript", "Machine Learning", "Sentinel-2", "Remote Sensing", "Random Forest"],
    featured: true,
    challenges: [
      "Processed high-volume Sentinel multispectral data collections on Google Earth Engine with cloud-masking and atmospheric corrections.",
      "Computed multi-temporal spectral indices (NDVI, NDWI, NDBI, NBR) for precise land-cover and disaster change detection.",
      "Trained and evaluated Random Forest supervised classifiers to categorize urban sprawl and forecast vegetation trends."
    ],
    github: "https://github.com/aishwarya602/AI-MultiHazard-Environmental-Monitoring",
    liveDemo: "https://github.com/aishwarya602/AI-MultiHazard-Environmental-Monitoring#readme",
  },
  {
    id: "hybrid-server-load-balancer",
    title: "Hybrid Server Load Balancer with Reinforcement Learning",
    category: "Systems & Algorithms",
    summary: "Adaptive traffic management blending Weighted Round Robin, Least Connections, and Q-learning RL.",
    description: "An adaptive distributed request balancing framework that integrates classical scheduling algorithms with reinforcement learning. Evaluates servers using Weighted Round Robin (WRR) and Least Connections (LC) alongside Q-learning with an Epsilon-Greedy policy. Continuously updates Bellman equation state-action values from real-time feedback (latency, connection health, request failures) to dynamically exploit optimal server nodes, backed by SQLite persistence and asynchronous logging.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Reinforcement Learning", "Q-Learning", "Distributed Systems", "SQLite", "Algorithms"],
    featured: true,
    challenges: [
      "Designed reward formulations that balance server latency, queue depth, and throughput without inducing oscillating states.",
      "Calibrated Epsilon-Greedy decay schedules to ensure optimal exploration of new servers while maximizing exploitation of healthy ones.",
      "Implemented thread-safe asynchronous logging and persistent SQLite storage for tracking server states and reward history."
    ],
    github: "https://github.com/aishwarya602/Hybrid_Server_Load_Balancer",
    liveDemo: "https://github.com/aishwarya602/Hybrid_Server_Load_Balancer#readme",
  },
  {
    id: "hack-o-week-suite",
    title: "Hack-O-Week: Rapid AI, Computer Vision & NLP Suite",
    category: "AI & Machine Learning",
    summary: "A curated suite of 20+ weekly applied AI implementations across Computer Vision, NLP, and IoT automation.",
    description: "A versatile collection of 20+ weekly AI/ML mini-projects exploring practical machine learning across domains. Features real-world Computer Vision systems (assembly line object counter, parking slot occupancy detector, forklift safety alert, warehouse collision avoidance), Natural Language Processing bots (TF-IDF retrieval FAQ bot, fallback-and-handover conversational agent, student query intent classification and entity extraction), and smart IoT automation prototypes.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Computer Vision", "OpenCV", "NLP", "Scikit-Learn", "IoT Automation"],
    featured: false,
    challenges: [
      "Formulated real-time computer vision heuristics using OpenCV for industrial object counting and spatial safety zones.",
      "Engineered intent classification, entity extraction, and synonym-aware TF-IDF retrieval for student support chatbots.",
      "Standardized end-to-end prototyping pipeline from sensor data cleaning to deployment across diverse hardware scenarios."
    ],
    github: "https://github.com/aishwarya602/Hack_o_week",
    liveDemo: "https://github.com/aishwarya602/Hack_o_week",
  },
  {
    id: "compiler-construction",
    title: "Compiler Construction: Lexical Analysis & Syntax Parser",
    category: "Systems & Algorithms",
    summary: "Multi-phase compiler front-end implementation using Lex/Flex, Yacc/Bison, and grammar validation in C.",
    description: "A foundational systems programming project implementing the front-end stages of a compiler. Utilizes Lex/Flex for lexical analysis and tokenization, and Yacc/Bison for LALR syntax parsing of context-free grammars. Features custom symbol table implementations, semantic attribute validation, parse tree generation, and error-recovery routines for procedural programming language constructs.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Yacc", "Lex", "C", "Compilers", "Parsing", "Automata Theory", "Data Structures"],
    featured: false,
    challenges: [
      "Eliminated shift/reduce and reduce/reduce conflicts in complex context-free grammars through unambiguous operator precedence rules.",
      "Built efficient hash-based symbol tables handling nested scopes and identifier attribute tracking.",
      "Implemented syntax error detection and recovery handlers during grammar evaluation and parse tree construction."
    ],
    github: "https://github.com/aishwarya602/Compiler-Construction",
    liveDemo: "https://github.com/aishwarya602/Compiler-Construction",
  }
];

export const experienceData = [
  {
    id: "exp-1",
    role: "B.Tech Computer Science (AI & ML Specialization)",
    company: "Symbiosis Institute of Technology, Nagpur",
    period: "2024 - Present (3rd Year)",
    location: "Nagpur, Maharashtra",
    type: "Undergraduate Student",
    description: "Pursuing core Computer Science degree with deep coursework in AI, Machine Learning, Database Management Systems (DBMS), Systems Programming, and Software Engineering.",
    achievements: [
      "Specializing in AI/ML model deployment, Agentic AI, and dynamic database architectures.",
      "Built multi-tiered software projects incorporating C, Java, Python, and SQL/pgPL/SQL.",
      "Developed web applications using modular JavaScript and modern backend frameworks."
    ],
    tech: ["Python", "Java", "C", "SQL", "pgPL/SQL", "JavaScript", "Agentic AI"]
  }
];

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];