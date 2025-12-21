// Centralized internship experience data - Easy to add/edit experiences
// Just add a new object to this array to add a new experience
// The most recent experiences will be shown first (top 4)

export const experiences = [
  {
    id: 'white-mastery',
    title: 'AI/ML Engineer Intern',
    company: 'White Mastery Systems Pvt Ltd',
    period: 'Aug 2025 - Present',
    type: 'Internship',
    location: {
      city: 'Guindy, Chennai',
      country: 'India',
      timezone: 'IST',
    },
    descriptions: [
      'Designed and implemented AI-driven automation systems for social media content creation using Google Gemini across 6+ platforms (X, LinkedIn, Facebook, Instagram, Reddit, Pinterest), reducing manual workload by ~85% and improving content turnaround time by ~40%.',
      'Developed an end-to-end PPT Automation system using Google Slides, Sheets, and Drive APIs, fully automating 2 enterprise-grade deck types (Project Proposal & Case Study), reducing presentation creation time from ~3 hours to under 30 minutes (~80% effort reduction).',
      'Built an SEO Automation pipeline leveraging DataForSEO APIs, integrated with web scraping and automated email workflows to analyze 10+ client and competitor websites per run, auto-generating website summaries, SEO observations, and case-study PPTs, cutting outreach preparation time by ~70%.',
      'Engineered machine learning pipelines for content evaluation, engagement prediction, and thematic analysis, improving predictive accuracy by up to 28% and reducing manual content review effort by ~60%.',
      'Developing an ONNX-based, multi-tenant LoRA system for CPU-only optimized LLM deployment, achieving 27+ tokens/second inference with structured JSON schema outputs and tool-calling support using Ministral-3-3B-Instruct and Phi-4-Mini-Instruct models.',
      'Implemented CPU-efficient LLM inference using GGUF models with llama.cpp, reducing memory footprint by ~35% and enabling stable inference on CPU-only servers without GPU dependency.',
      'Deployed production-grade services using FastAPI, Docker, and Nginx with secure session handling, CORS origin control, and advanced rate limiting, maintaining 99.9% uptime and reducing API error rates by ~40% under concurrent load.',
      'Developed a custom LLM evaluation framework using LangGraph and LangChain to automatically score response accuracy, consistency, and tool-usage correctness across 100+ test prompts per evaluation cycle.'
    ],
    skills: [
      'Python', 'FastAPI', 'Docker', 'Nginx', 'LLM', 'ONNX', 'LoRA',
      'LangChain', 'LangGraph', 'Google Gemini API',
      'Machine Learning', 'AI Automation'
    ],
    projectsInvolved: [
      'Social Media Content Automation System',
      'PPT Automation Platform',
      'SEO Automation Pipeline',
      'Multi-tenant LoRA LLM System',
      'LLM Evaluation Framework'
    ],
  },

  {
    id: 'krutanic',
    title: 'Machine Learning Engineer Intern',
    company: 'Krutanic',
    period: 'Jan 2025',
    type: 'Internship',
    descriptions: [
      'Designed and optimized a Retrieval-Augmented Generation (RAG) system for PDF analysis and question answering over documents exceeding 200+ pages.',
      'Improved model precision by approximately 95% through optimized embeddings, retriever tuning, and prompt engineering.',
      'Built AI-powered user interfaces using Python, TensorFlow, and Streamlit, enabling real-time querying with sub-second response times.',
      'Prepared the system for deployment by optimizing inference pipelines and reducing response latency by ~30%.'
    ],
    skills: [
      'Python', 'TensorFlow', 'Streamlit', 'RAG',
      'NLP', 'Machine Learning', 'Embeddings', 'Prompt Engineering'
    ],
    projectsInvolved: [
      'RAG-based PDF Analysis System',
      'AI-Powered Document Q&A Interface'
    ],
  },

  {
    id: 'zidio',
    title: 'Data Science & Analyst Intern',
    company: 'Zidio Development',
    period: 'Aug 2024 - Nov 2024',
    type: 'Internship',
    descriptions: [
      'Performed exploratory data analysis (EDA) and feature engineering on datasets exceeding 100,000+ records using Pandas, NumPy, and SQL.',
      'Developed 3+ predictive models with Python, achieving up to 92% accuracy and improving baseline performance by ~20%.',
      'Generated actionable insights through dashboards and statistical analysis, accelerating stakeholder decision-making by ~30%.',
      'Translated analytical findings into business-ready reports used by cross-functional teams.'
    ],
    skills: [
      'Python', 'Pandas', 'NumPy', 'SQL',
      'Data Analysis', 'Machine Learning',
      'Data Visualization', 'Statistical Analysis'
    ],
    projectsInvolved: [
      'Predictive Analytics Models',
      'Business Intelligence Dashboards',
      'Data-Driven Decision Support System'
    ],
  },

  {
    id: 'novitech',
    title: 'Artificial Intelligence Intern',
    company: 'NoviTech R&D Pvt Ltd',
    period: 'Feb 2024 - Apr 2024',
    type: 'Internship',
    descriptions: [
      'Researched and implemented NLP models for text classification and semantic analysis across multiple domain datasets.',
      'Fine-tuned transformer-based models, improving classification performance by ~15–20% compared to baseline models.',
      'Developed REST APIs for AI model deployment, enabling seamless integration with internal tools.',
      'Documented experiments and presented results, contributing to faster iteration cycles and improved model selection.'
    ],
    skills: [
      'Python', 'NLP', 'Transformers',
      'Machine Learning', 'REST APIs',
      'Model Fine-tuning', 'Text Classification'
    ],
    projectsInvolved: [
      'NLP Text Classification System',
      'Transformer-based Semantic Analysis',
      'AI Model Deployment API'
    ],
  },

  {
    id: 'innovate-intern',
    title: 'Artificial Intelligence & Machine Learning Intern',
    company: 'Innovate Intern',
    period: 'Jul 2024 - Nov 2024',
    type: 'Internship',
    descriptions: [
      'Led a Click-Through Rate (CTR) prediction project using advanced machine learning techniques to support marketing optimization.',
      'Processed and trained models on datasets with 50,000+ records using Python, Scikit-learn, TensorFlow, and PyTorch.',
      'Deployed models using Flask and Docker, enabling scalable inference with consistent response times.',
      'Improved CTR prediction accuracy beyond baseline models through iterative experimentation.'
    ],
    skills: [
      'Python', 'Scikit-learn', 'TensorFlow',
      'PyTorch', 'Flask', 'Docker',
      'Machine Learning', 'CTR Prediction'
    ],
    projectsInvolved: [
      'CTR Prediction Model',
      'Marketing Optimization System'
    ],
  },

  {
    id: 'pantech',
    title: 'Software Developer Intern',
    company: 'Pantech Solutions',
    period: 'Aug 2022 - Nov 2024',
    type: 'Internship',
    location: {
      city: 'Karnataka',
      country: 'India',
      timezone: 'IST',
    },
    descriptions: [
      'Worked on 5+ real-time projects spanning deep learning, AI, and data analytics using Python and MATLAB.',
      'Implemented computer vision and NLP algorithms for applied use cases.',
      'Performed data analysis on structured and unstructured datasets to extract actionable insights.',
      'Strengthened practical skills in model optimization, debugging, and applied AI research.'
    ],
    skills: [
      'Python', 'MATLAB', 'Deep Learning',
      'Computer Vision', 'NLP',
      'Data Analytics', 'AI Research'
    ],
    projectsInvolved: [
      'Deep Learning Applications',
      'Computer Vision Solutions',
      'NLP Research Projects',
      'Data Analytics Platforms'
    ],
  },

  {
    id: 'digital-bhem',
    title: 'AI & Machine Learning Intern',
    company: 'Digital Bhem',
    period: 'May 2024 - Aug 2024',
    type: 'Internship',
    descriptions: [
      'Designed and developed the DIGIBHEM-AI-Bot, handling 100+ user queries during testing with improved response accuracy.',
      'Implemented NLP pipelines using RASA and Dialogflow for intent recognition and conversational flow.',
      'Integrated APIs and databases for real-time data retrieval, reducing response latency.',
      'Optimized chatbot performance through testing and A/B experimentation, improving user engagement metrics.'
    ],
    skills: [
      'Python', 'RASA', 'Dialogflow',
      'NLP', 'Chatbot Development',
      'API Integration', 'Machine Learning'
    ],
    projectsInvolved: [
      'DIGIBHEM-AI-Bot',
      'Conversational AI Platform'
    ],
  },
];



// Helper function to get experiences formatted for Timeline component
// Returns only the most recent 4 experiences
export const getTimelineData = () => {
  return experiences.slice(0, 4);
};

// Helper function to get all experiences
export const getAllExperiences = () => {
  return experiences;
};

// Helper function to get experience by ID
export const getExperienceById = (id) => {
  return experiences.find(exp => exp.id === id);
};
