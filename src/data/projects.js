// Centralized projects data - Easy to add new projects in the future
// Just add a new object to this array

export const projects = [
  /* =======================
     01. PPT AUTOMATION
     ======================= */
  {
    id: 'ppt-automation',
    number: '01',
    name: 'AI PPT Automation',
    description:
      'AI PPT Automation was born from a simple truth: every slide shouldn\'t be a struggle. Driven by the vision of transforming hours of manual work into minutes of intelligent automation, I built a platform where presentations aren\'t just created - they\'re orchestrated with precision and brand consistency.',
    hoverKeywords: [
      { text: 'intelligent automation', key: 'ppt-automation' },
      { text: 'presentations', key: 'ppt-automation' }
    ],
    liveSiteUrl: 'https://slides.bdcode.in',
    githubUrl: '#',
    previewImage:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'AI PPT Automation',
    previewSubtitle: '80% faster deck generation',
    details: {
      title: 'AI PPT Automation',
      role: 'AI Engineer & Backend Developer',
      features: [
        'Automated proposal deck generation',
        'Automated case-study deck generation',
        'Brand-aware theme and layout analysis',
        'Dynamic text and image placement',
        'Google Slides, Sheets & Drive API integration'
      ],
      techStack: [
        'Python',
        'FastAPI',
        'Google Slides API',
        'Google Sheets API',
        'Google Drive API',
        'Google Gemini'
      ],
      whatIBuilt: [
        'Created an AI-driven theme analysis tool utilizing Google Gemini to automatically deduce company identity, colour scheme, typography, and layout producing brand-consistent presentations 90% quicker than traditional design processes.',
        'Automated complete presentation generation through the Google Slides API, combining AI-generated text and images with precise dimension management (up to 15 image placeholders) and consistent emoji/logo alignment, guaranteeing 100% visual accuracy.',
        'Enhanced system efficiency using pre-cropping, EMU-PT conversions, and transform-preserving placement, reducing image placement errors by over 95% and increasing API response speed by 42%.'
      ],
      inspiration:
        'Manual slide creation was repetitive, time-consuming, and error-prone.',
      vision:
        'Enable anyone to generate enterprise-ready presentations in minutes.',
      timeline: '3 months',
      coreProcess:
        'Built slide orchestration pipelines with EMU-PT precision placement and Gemini-powered theme inference.',
      impact: '80%',
      featureCoverage: 90,
      metrics: [
        'Reduced deck creation time from ~3 hours to <30 minutes',
        'Automated 2 complete enterprise deck types',
        '95%+ layout accuracy across dynamic content'
      ],
      difficulties: [
        'Precise slide element placement',
        'Handling dynamic content sizes'
      ],
      solution:
        'Implemented EMU-based positioning logic and AI-assisted layout intelligence.'
    }
  },

  /* =======================
     02. SOCIAL MEDIA AUTOMATION
     ======================= */
  {
    id: 'autosocioly',
    number: '02',
    name: 'AutoSocioly – Social Media Automation',
    description:
      'AutoSocioly emerged from a challenge: social media shouldn\'t consume your day. Fueled by the ambition to turn content creation from a chore into an automated art, I crafted a platform where AI doesn\'t just assist - it orchestrates your entire social presence across platforms.',
    hoverKeywords: [
      { text: 'social media', key: 'autosocioly' },
      { text: 'automated art', key: 'autosocioly' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'AutoSocioly',
    previewSubtitle: 'AI-powered social media automation',
    details: {
      title: 'AutoSocioly',
      role: 'Full Stack AI Engineer',
      features: [
        'AI-generated text & image content',
        'Multi-platform posting automation',
        'A/B content variation',
        'Hashtag & tone optimization',
        'Engagement analytics'
      ],
      techStack: [
        'Python',
        'FastAPI',
        'ReactJS',
        'Docker',
        'Nginx',
        'GetLate API',
        'Google Gemini'
      ],
      whatIBuilt: [
        'Developed a comprehensive AI content generation pipeline using Google Gemini API that automatically creates engaging text and image content for 6+ social media platforms (X, LinkedIn, Facebook, Instagram, Reddit, Pinterest), reducing content creation time by 40% and ensuring brand consistency across all channels.',
        'Built a robust multi-platform posting automation system with adaptive rate limiting and platform-specific API integrations, achieving 99.9% uptime and enabling scheduled posting across all platforms with A/B content variation capabilities.',
        'Engineered a production-grade backend infrastructure using FastAPI, Docker containerization, and Nginx reverse proxy, implementing modular AI pipelines that handle hashtag optimization, tone analysis, and engagement analytics, resulting in 85% workload reduction for content teams.'
      ],
      inspiration:
        'Manual social media workflows were inefficient and inconsistent.',
      vision:
        'Automate the entire social media lifecycle using AI.',
      timeline: '5 months',
      coreProcess:
        'Built modular AI pipelines and deployed with Docker + Nginx.',
      impact: '85% workload reduction',
      featureCoverage: 88,
      metrics: [
        'Automated posting across 6+ platforms',
        '40% faster content generation',
        '99.9% uptime'
      ],
      difficulties: [
        'Platform-specific constraints',
        'Rate limiting'
      ],
      solution:
        'Adaptive posting logic with production-grade backend.'
    }
  },

  /* =======================
     03. JUSTICIA
     ======================= */
  {
    id: 'justicia',
    number: '03',
    name: 'Justicia – Legal AI',
    description:
      'Justicia was born for a mission to merge cutting-edge AI with the complexities of Indian law. Driven to bridge the gap between fast-moving tech and the traditionally slow, opaque legal system, I built a platform where accessibility and precision aren\'t just aims - they\'re assured.',
    hoverKeywords: [
      { text: 'Indian law', key: 'justicia' },
      { text: 'legal system', key: 'justicia' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Justicia – Legal AI',
    previewSubtitle: '92%+ legal accuracy',
    details: {
      title: 'Justicia – Legal AI',
      role: 'Full Stack Developer & AI Engineer',
      features: [
        'AI-powered legal document analysis',
        'Real-time case law search and retrieval',
        'Legal precedent matching',
        'Multi-language support for Indian legal documents',
        'User-friendly interface for legal professionals'
      ],
      techStack: [
        'Next.js',
        'AdaptLLM-13B',
        'Supabase',
        'AWS',
        'Vercel',
        'n8n'
      ],
      whatIBuilt: [
        'Fine-tuned AdaptLLM-13B specifically for Indian legal domain, achieving 92%+ accuracy in legal document analysis and case law retrieval by training on comprehensive datasets of Indian legal precedents, statutes, and judgments, enabling context-aware legal Q&A with 10ms inference latency.',
        'Built a scalable legal knowledge base using Supabase for vector storage and retrieval, implementing semantic search capabilities that bridge the gap between fast-moving tech and traditional legal systems, resulting in 40% increase in user engagement.',
        'Developed an automated workflow system using n8n for legal document processing and updates, deployed on AWS with Vercel frontend, creating a platform where legal intelligence is fast, transparent, and accessible, with multi-language support for Indian legal documents.'
      ],
      inspiration:
        'The complexity and opacity of the Indian legal system inspired me to create a platform that makes legal information accessible and understandable for everyone.',
      vision:
        'Make legal intelligence fast, transparent, and accurate.',
      timeline: '6 months',
      coreProcess:
        'Fine-tuned domain-specific LLMs and automated workflows.',
      impact: '92%+ accuracy',
      featureCoverage: 85,
      metrics: [
        '10ms inference latency',
        '40% user engagement increase',
        '92%+ QA accuracy'
      ],
      difficulties: [
        'Legal context understanding',
        'Latency optimization',
        'Processing complex legal terminology',
        'Integrating multiple legal databases'
      ],
      solution:
        'Domain tuning with low-latency deployment and hybrid approach combining fine-tuned language models with vector databases.'
    }
  },

  /* =======================
     04. CHESS RL
     ======================= */
  {
    id: 'chess',
    number: '04',
    name: 'Chess Game – Reinforcement Learning',
    description:
      'Every chess match is a dialogue - a test of strategy, creativity, and learning. "Chess Game" isn\'t just a web-based app; it\'s a bold AI experiment that blends traditional gameplay with Deep-Q Learning to create an ever-evolving digital opponent.',
    hoverKeywords: [
      { text: 'Deep-Q Learning', key: 'chess' },
      { text: 'AI experiment', key: 'chess' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage:
      'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Chess Game – RL',
    previewSubtitle: 'Self-learning chess AI',
    details: {
      title: 'Chess Game – RL',
      role: 'AI Engineer & Frontend Developer',
      features: [
        'Deep-Q Learning agent',
        'Adaptive difficulty',
        'Move prediction',
        'Real-time gameplay',
        'Learning from each game played'
      ],
      techStack: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'React',
        'WebSockets',
        'Chess.js'
      ],
      whatIBuilt: [
        'Implemented a Deep-Q Learning reinforcement learning agent using TensorFlow and PyTorch that learns optimal chess strategies through self-play, training on 10,000+ games with experience replay and reward shaping techniques, achieving 5× faster learning efficiency compared to baseline approaches.',
        'Built a real-time chess gameplay system using React frontend and WebSockets for instant move communication, integrating Chess.js for game logic validation and move generation, enabling seamless human-AI interaction with adaptive difficulty that adjusts based on player skill level.',
        'Developed an intelligent move prediction system with optimized replay buffers and MCTS (Monte Carlo Tree Search) integration, reducing inference latency to under 200ms while maintaining strategic depth, creating an ever-evolving digital opponent that improves through each game played.'
      ],
      inspiration:
        'Exploring intelligence through strategic learning.',
      vision:
        'Create an AI that improves through play.',
      timeline: '4 months',
      coreProcess:
        'Experience replay, reward shaping, iterative training.',
      impact: '5× learning efficiency',
      featureCoverage: 80,
      metrics: [
        '10,000+ self-play games',
        '<200ms inference latency',
        '5× faster learning compared to baseline'
      ],
      difficulties: [
        'Training stability',
        'Real-time inference',
        'Balancing difficulty progression'
      ],
      solution:
        'Optimized replay buffers and reward tuning with Deep-Q Networks and MCTS for move selection.'
    }
  },

  /* =======================
     05. WEBRTC VAD
     ======================= */
  {
    id: 'webrtc-vad',
    number: '05',
    name: 'WebRTC VAD Implementation',
    description:
      'WebRTC VAD was crafted from a need: communication should be seamless, not interrupted. Inspired by the vision of making voice detection invisible yet powerful, I built a system where every word matters and every silence is understood - all in real-time.',
    hoverKeywords: [
      { text: 'voice detection', key: 'webrtc-vad' },
      { text: 'real-time', key: 'webrtc-vad' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'WebRTC VAD',
    previewSubtitle: 'Real-time voice detection',
    details: {
      title: 'WebRTC VAD',
      role: 'Frontend Developer',
      features: [
        'Real-time voice activity detection',
        'Low-latency audio processing',
        'Browser-based implementation'
      ],
      whatIBuilt: [
        'Implemented WebRTC Voice Activity Detection (VAD) API integration with optimized audio buffer processing, achieving ultra-low latency voice detection of under 50ms by efficiently handling audio stream analysis and real-time voice activity classification in browser-based environments.',
        'Developed a robust audio processing pipeline that handles various audio qualities and environmental conditions, implementing adaptive threshold algorithms that accurately distinguish between speech and silence, ensuring seamless communication without interruptions.',
        'Created a lightweight, browser-native solution that eliminates server-side processing overhead, enabling real-time voice detection directly in the client using WebRTC APIs, making voice activity detection invisible yet powerful for communication applications.'
      ],
      techStack: ['WebRTC', 'JavaScript'],
      inspiration:
        'Need for efficient voice detection in real-time communication applications.',
      vision:
        'Enable seamless voice activity detection with minimal latency.',
      timeline: '1 month',
      coreProcess:
        'Implemented WebRTC VAD API integration with optimized audio processing.',
      impact: 'Ultra-low latency detection',
      featureCoverage: 75,
      metrics: ['<50ms detection latency'],
      difficulties: [
        'Achieving low latency',
        'Handling various audio qualities'
      ],
      solution:
        'Optimized audio buffer processing and efficient WebRTC API utilization.'
    }
  },

  /* =======================
     06. YOLOV8 BLUEPRINT DETECTOR
     ======================= */
  {
    id: 'yolov8-blueprint',
    number: '06',
    name: 'YOLOv8 Blueprint Detector',
    description:
      'YOLOv8 Blueprint Detector was born from a vision: architecture shouldn\'t be analyzed manually. Driven by the power of computer vision, I built a system where blueprints speak their secrets - doors and windows detected, visualized, and delivered in moments, not hours.',
    hoverKeywords: [
      { text: 'blueprints', key: 'yolov8-blueprint' },
      { text: 'computer vision', key: 'yolov8-blueprint' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'YOLOv8 Blueprint Detector',
    previewSubtitle: '95% detection accuracy',
    details: {
      title: 'YOLOv8 Blueprint Detector',
      role: 'AI Engineer & Backend Developer',
      features: [
        'Door & window detection',
        'JSON inference output',
        'Interactive drag-and-drop frontend',
        'Image visualization',
        'Seamless API integration'
      ],
      whatIBuilt: [
        'Trained a custom YOLOv8 model specifically for architectural blueprint analysis, achieving 95% detection accuracy for doors and windows by creating a comprehensive dataset of architectural drawings and fine-tuning the model for precise element recognition, enabling sub-second inference times.',
        'Built a FastAPI backend service that processes blueprint images through the YOLOv8 model, generating structured JSON outputs with detected element coordinates, types, and confidence scores, seamlessly integrating computer vision capabilities with RESTful API architecture.',
        'Developed an interactive drag-and-drop frontend with real-time visualization capabilities, allowing users to upload blueprints and instantly see detected architectural elements overlaid on the original image, delivering results in moments rather than hours of manual analysis.'
      ],
      techStack: ['YOLOv8', 'FastAPI', 'Python', 'OpenCV'],
      inspiration:
        'Need for automated architectural element detection in blueprints.',
      vision:
        'Streamline blueprint analysis with AI-powered detection.',
      timeline: '2 months',
      coreProcess:
        'Trained YOLOv8 model on architectural blueprints, built FastAPI backend, and created interactive frontend.',
      impact: '95% detection accuracy',
      featureCoverage: 85,
      metrics: [
        '95% detection accuracy',
        'Sub-second inference time',
        'Real-time processing capability'
      ],
      difficulties: [
        'Training on architectural drawings',
        'Handling various blueprint formats'
      ],
      solution:
        'Custom dataset creation and model fine-tuning for architectural elements.'
    }
  },

  /* =======================
     07. FOOD CALORIE PREDICTION
     ======================= */
  {
    id: 'food-calorie',
    number: '07',
    name: 'Food Calorie Prediction App',
    description:
      'Food Calorie Prediction emerged from a simple desire: nutrition tracking shouldn\'t be guesswork. Fueled by the power of machine learning, I created an app where every meal tells its story - food recognized, calories revealed, health made effortless through the lens of AI.',
    hoverKeywords: [
      { text: 'calories', key: 'food-calorie' },
      { text: 'machine learning', key: 'food-calorie' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Food Calorie Prediction',
    previewSubtitle: '85%+ classification accuracy',
    details: {
      title: 'Food Calorie Prediction',
      role: 'ML Engineer',
      features: [
        'Food image classification',
        'Calorie estimation',
        'User-friendly interface',
        'Docker deployment ready'
      ],
      whatIBuilt: [
        'Trained CNN models using TensorFlow and Keras on diverse food image datasets, achieving 85%+ classification accuracy by implementing data augmentation techniques to handle various lighting conditions, food varieties, and presentation styles, making nutrition tracking effortless through AI-powered recognition.',
        'Integrated a comprehensive calorie database with the classification system, enabling automatic calorie estimation based on recognized food items, creating a seamless workflow where food images are analyzed and nutritional information is instantly revealed.',
        'Built a user-friendly Streamlit interface with Docker deployment capabilities, allowing users to upload food images and receive instant calorie predictions, packaged as a containerized application ready for production deployment with minimal setup requirements.'
      ],
      techStack: ['TensorFlow', 'Keras', 'Streamlit', 'Docker', 'Python'],
      inspiration:
        'Helping people track nutrition through automated food recognition.',
      vision:
        'Make calorie tracking effortless through AI-powered food recognition.',
      timeline: '2 months',
      coreProcess:
        'Trained CNN models on food datasets, integrated calorie database, built Streamlit interface.',
      impact: '85%+ classification accuracy',
      featureCoverage: 80,
      metrics: ['85%+ classification accuracy'],
      difficulties: [
        'Food variety and lighting conditions',
        'Accurate calorie estimation'
      ],
      solution:
        'Data augmentation and multi-class classification with calorie database integration.'
    }
  },

  /* =======================
     08. RSA ENCRYPTION
     ======================= */
  {
    id: 'rsa-encryption',
    number: '08',
    name: 'RSA Encryption System',
    description:
      'RSA Encryption was built on a foundation: security shouldn\'t be an afterthought. Created for JAIN Global Campus, this system embodies the principle that data protection isn\'t just a feature - it\'s a promise, encrypted with mathematical precision and cryptographic strength.',
    hoverKeywords: [
      { text: 'encryption', key: 'rsa-encryption' },
      { text: 'data protection', key: 'rsa-encryption' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'RSA Encryption',
    previewSubtitle: '2048-bit key encryption',
    details: {
      title: 'RSA Encryption',
      role: 'Security Developer',
      features: [
        'Public-key encryption',
        'Secure key generation',
        'Encrypted data transmission',
        '2048-bit key support'
      ],
      whatIBuilt: [
        'Implemented a complete RSA encryption system with 2048-bit key generation using optimized prime number generation algorithms, ensuring secure key pair creation with mathematical precision and cryptographic strength for JAIN Global Campus academic systems.',
        'Developed secure encryption and decryption functions with efficient modular arithmetic operations, handling large number computations required for RSA cryptography, enabling encrypted data transmission with 100% secure key generation reliability.',
        'Created a robust cryptographic framework that embodies the principle that data protection isn\'t just a feature but a promise, providing public-key encryption capabilities that protect sensitive academic information with industry-standard security measures.'
      ],
      techStack: ['Python', 'RSA Cryptography', 'Cryptography Libraries'],
      inspiration:
        'Need for secure data transmission in academic systems.',
      vision:
        'Implement robust encryption for secure communications.',
      timeline: '1 month',
      coreProcess:
        'Implemented RSA algorithm with secure key generation and encryption/decryption functions.',
      impact: 'Secure data transmission',
      featureCoverage: 90,
      metrics: ['2048-bit key encryption', '100% secure key generation'],
      difficulties: [
        'Key generation efficiency',
        'Large number handling'
      ],
      solution:
        'Optimized prime number generation and efficient modular arithmetic operations.'
    }
  },

  /* =======================
     09. RAG QA BOT
     ======================= */
  {
    id: 'rag-qa-bot',
    number: '09',
    name: 'RAG-based QA Bot',
    description:
      'RAG QA Bot was conceived from a belief: knowledge shouldn\'t be buried in documents. Driven by the fusion of retrieval and generation, I built a system where questions find answers not just in text, but in understanding - where context meets intelligence to bring information to life.',
    hoverKeywords: [
      { text: 'questions find answers', key: 'rag-qa-bot' },
      { text: 'retrieval and generation', key: 'rag-qa-bot' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'RAG QA Bot',
    previewSubtitle: 'High-relevance retrieval',
    details: {
      title: 'RAG QA Bot',
      role: 'AI Engineer',
      features: [
        'Document retrieval',
        'Context-aware answer generation',
        'Vector database integration',
        'Semantic search capabilities',
        'Multi-document knowledge base'
      ],
      whatIBuilt: [
        'Built a comprehensive RAG (Retrieval-Augmented Generation) pipeline using LangChain for orchestration, integrating Pinecone vector database for semantic document storage and retrieval, achieving high-relevance retrieval accuracy by combining dense vector search with keyword-based retrieval and re-ranking models.',
        'Implemented context-aware answer generation using Cohere API, creating a system where questions find answers not just in text but in understanding, managing context window limitations through intelligent chunking and hybrid search approaches that ensure relevant information retrieval.',
        'Developed a multi-document knowledge base system that brings information to life by connecting retrieval with generation, enabling accurate question answering through the fusion of retrieval and generation, where context meets intelligence to provide meaningful responses from document collections.'
      ],
      techStack: ['LangChain', 'Pinecone', 'Cohere API', 'Python'],
      inspiration:
        'The need to create intelligent systems that can bring knowledge to life by connecting information retrieval with natural language generation.',
      vision:
        'Enable accurate question answering through retrieval-augmented generation.',
      timeline: '2 months',
      coreProcess:
        'Implemented RAG pipeline with Pinecone for vector storage, Cohere API for generation, and LangChain for orchestration.',
      impact: 'High-relevance retrieval accuracy',
      featureCoverage: 85,
      metrics: ['High-relevance retrieval accuracy', 'Context-aware responses'],
      difficulties: [
        'Optimizing retrieval accuracy',
        'Managing context window limitations',
        'Ensuring relevant information retrieval'
      ],
      solution:
        'Hybrid search combining dense vector search with keyword-based retrieval and re-ranking models.'
    }
  },

  /* =======================
     10. FRAUD DETECTION SYSTEM
     ======================= */
  {
    id: 'fraud-detection',
    number: '10',
    name: 'Real-Time Fraud Detection System',
    description:
      'Real-Time Fraud Detection was forged from urgency: threats shouldn\'t wait for analysis. Built on the backbone of Spark, Kafka, and Cassandra, I created a pipeline where every transaction is watched, every pattern is learned, and every fraud attempt is caught - all in the blink of an eye.',
    hoverKeywords: [
      { text: 'Fraud Detection', key: 'fraud-detection' },
      { text: 'fraud attempt', key: 'fraud-detection' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage:
      'https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Fraud Detection',
    previewSubtitle: 'Real-time ML pipeline',
    details: {
      title: 'Fraud Detection System',
      role: 'Big Data Engineer & ML Engineer',
      features: [
        'Spark ML pipeline',
        'Kafka streaming ingestion',
        'Real-time fraud classification',
        'Cassandra data storage',
        'Spring Boot dashboard',
        'Flask REST APIs'
      ],
      whatIBuilt: [
        'Engineered a real-time fraud detection pipeline using Spark ML with Random Forest classifier, processing 10,000+ transactions from 100 customer profiles stored in Cassandra, achieving real-time fraud classification by optimizing Spark SQL queries and implementing efficient preprocessing workflows.',
        'Built a Kafka streaming ingestion system that enables real-time transaction monitoring, integrating with Spark ML pipeline for instant fraud prediction, creating a system where every transaction is watched, every pattern is learned, and every fraud attempt is caught in the blink of an eye.',
        'Developed a comprehensive dashboard using Spring Boot and Flask REST APIs, providing real-time fraud detection insights and transaction analytics, enabling financial institutions to monitor and respond to fraudulent activities immediately with high accuracy and minimal latency.'
      ],
      techStack: [
        'Spark',
        'Kafka',
        'Cassandra',
        'Spring Boot',
        'Flask',
        'Python',
        'Java'
      ],
      inspiration:
        'Need for real-time fraud detection in financial transactions.',
      vision:
        'Detect fraudulent transactions in real-time with high accuracy.',
      timeline: '3 months',
      coreProcess:
        'Simulated 100 customers and 10K+ transactions, stored in Cassandra via Spark SQL, trained Random Forest model with Spark ML, implemented Kafka streaming for real-time prediction, and built dashboard with Spring Boot.',
      impact: 'Real-time fraud detection',
      featureCoverage: 90,
      metrics: [
        '10,000+ transactions processed',
        'Real-time fraud classification',
        '100 customer profiles analyzed'
      ],
      difficulties: [
        'Real-time processing latency',
        'Model accuracy optimization',
        'Streaming data integration'
      ],
      solution:
        'Optimized Spark ML pipeline with efficient preprocessing and real-time Kafka streaming integration.'
    }
  },

  /* =======================
     11. EMART SHOPPING PLATFORM
     ======================= */
  {
    id: 'emart',
    number: '11',
    name: 'EMART – Shopping Platform',
    description:
      'EMART was built from a dream: shopping should be seamless, not complicated. Crafted with React, Node.js, and MongoDB, I designed a platform where products find buyers, carts become orders, and every click brings you closer to what you need - all wrapped in a smooth, modern experience.',
    hoverKeywords: [
      { text: 'shopping', key: 'emart' },
      { text: 'seamless', key: 'emart' }
    ],
    liveSiteUrl: '#',
    githubUrl: 'https://github.com/dhiwinsamrich/EMART',
    previewImage:
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'EMART',
    previewSubtitle: 'E-commerce platform',
    details: {
      title: 'EMART',
      role: 'Full Stack Developer',
      features: [
        'Product management',
        'Cart & checkout system',
        'User authentication',
        'Order management'
      ],
      whatIBuilt: [
        'Developed a complete e-commerce platform using React for the frontend and Node.js with Express for the backend, implementing product management, shopping cart functionality, and secure checkout processes, creating a seamless shopping experience where products find buyers and carts become orders.',
        'Built a robust MongoDB database schema for product catalog, user authentication, and order management, implementing secure session handling and user authentication systems that ensure safe and reliable transactions throughout the shopping journey.',
        'Integrated payment gateway systems and inventory management features, creating a full-stack solution that handles the entire e-commerce workflow from product browsing to order fulfillment, wrapped in a smooth, modern user experience that makes shopping effortless.'
      ],
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      inspiration:
        'Building a complete e-commerce solution from scratch.',
      vision:
        'Create a seamless online shopping experience.',
      timeline: '2 months',
      coreProcess:
        'Developed React frontend, Node.js backend, MongoDB database, and integrated payment systems.',
      impact: 'Complete e-commerce solution',
      featureCoverage: 85,
      metrics: ['Full shopping cart functionality', 'Secure checkout process'],
      difficulties: [
        'Payment integration',
        'Inventory management',
        'User session handling'
      ],
      solution:
        'Implemented secure authentication, session management, and integrated payment gateways.'
    }
  },

  /* =======================
     12. CTR PREDICTION
     ======================= */
  {
    id: 'ctr-prediction',
    number: '12',
    name: 'Click-Through Rate Prediction',
    description:
      'Click-Through Rate Prediction was born from curiosity: what makes an ad clickable? Developed during my Innovate Intern journey, I built a model where data tells stories, patterns reveal opportunities, and every prediction brings marketing closer to perfection - one click at a time.',
    hoverKeywords: [
      { text: 'prediction', key: 'ctr-prediction' },
      { text: 'Click-Through Rate', key: 'ctr-prediction' }
    ],
    liveSiteUrl: '#',
    githubUrl: 'https://github.com/dhiwinsamrich/Click-Through-Rate-Prediction-INNOVATE_INTERN',
    previewImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'CTR Prediction',
    previewSubtitle: 'Marketing optimization',
    details: {
      title: 'Click-Through Rate Prediction',
      role: 'ML Engineer (Intern at Innovate Intern)',
      features: [
        'CTR prediction model',
        'Feature engineering',
        'Model evaluation',
        'Marketing insights'
      ],
      whatIBuilt: [
        'Developed a comprehensive CTR prediction model by processing datasets with 50,000+ records, performing advanced feature engineering and training multiple ML models including ensemble techniques, enabling accurate prediction of ad clickability to optimize marketing campaigns.',
        'Implemented data balancing strategies and model optimization techniques to handle imbalanced data, creating a system where data tells stories, patterns reveal opportunities, and every prediction brings marketing closer to perfection through improved baseline performance.',
        'Built an end-to-end machine learning pipeline using Scikit-learn, TensorFlow, and PyTorch, with comprehensive model evaluation metrics that provide actionable marketing insights, helping advertisers understand what makes an ad clickable and optimize their campaigns accordingly.'
      ],
      techStack: [
        'Python',
        'Scikit-learn',
        'TensorFlow',
        'PyTorch',
        'Pandas',
        'NumPy'
      ],
      inspiration:
        'Supporting marketing optimization through predictive analytics.',
      vision:
        'Improve ad campaign performance with accurate CTR predictions.',
      timeline: '2 months',
      coreProcess:
        'Processed datasets with 50,000+ records, trained multiple ML models, and evaluated performance metrics.',
      impact: 'Improved prediction accuracy',
      featureCoverage: 80,
      metrics: [
        '50,000+ records processed',
        'Improved baseline performance',
        'Accurate CTR predictions'
      ],
      difficulties: [
        'Feature selection',
        'Model optimization',
        'Handling imbalanced data'
      ],
      solution:
        'Advanced feature engineering, model ensemble techniques, and data balancing strategies.'
    }
  },

  /* =======================
     13. HANDWRITTEN CHARACTER RECOGNITION
     ======================= */
  {
    id: 'handwritten-char',
    number: '13',
    name: 'Handwritten Character Recognition',
    description:
      'Handwritten Character Recognition was crafted from a mission: every stroke matters, every character tells a story. Built during my Code Alpha internship, I created a system where pen meets pixel, where handwriting becomes data, and where 94% accuracy isn\'t just a number - it\'s a bridge between analog and digital.',
    hoverKeywords: [
      { text: 'character recognition', key: 'handwritten-char' },
      { text: 'character', key: 'handwritten-char' }
    ],
    liveSiteUrl: '#',
    githubUrl: 'https://github.com/dhiwinsamrich/CodeAlpha_Task3_HandwrittenCharacterRecognition',
    previewImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Handwritten Character Recognition',
    previewSubtitle: '94% classification accuracy',
    details: {
      title: 'Handwritten Character Recognition',
      role: 'ML Engineer (Code Alpha Intern)',
      features: [
        'Character image classification',
        'CNN-based feature extraction',
        'Multi-character support',
        'High accuracy recognition'
      ],
      whatIBuilt: [
        'Built a CNN-based handwritten character recognition system using TensorFlow and Keras, achieving 94% classification accuracy by implementing advanced data augmentation techniques and preprocessing methods that handle handwriting variations, creating a bridge between analog and digital text.',
        'Developed sophisticated image preprocessing pipelines using OpenCV that normalize handwriting samples, extract meaningful features, and prepare images for classification, ensuring robust recognition across different writing styles and quality levels.',
        'Created a multi-character support system that processes handwritten text character by character, enabling digitization of handwritten documents with high accuracy, where every stroke matters and every character tells a story through precise recognition algorithms.'
      ],
      techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      inspiration:
        'Automating handwritten text recognition for digitization.',
      vision:
        'Achieve high accuracy in handwritten character recognition.',
      timeline: '1.5 months',
      coreProcess:
        'Built CNN architecture, trained on handwritten character datasets, optimized for accuracy.',
      impact: '94% classification accuracy',
      featureCoverage: 85,
      metrics: ['94% classification accuracy', 'Multi-character support'],
      difficulties: [
        'Handwriting variation',
        'Image preprocessing',
        'Model accuracy optimization'
      ],
      solution:
        'Data augmentation, advanced preprocessing techniques, and CNN architecture optimization.'
    }
  },

  /* =======================
     14. PREDICTIVE REAL ESTATE
     ======================= */
  {
    id: 'real-estate-pricing',
    number: '14',
    name: 'Predictive Real Estate Pricing',
    description:
      'Predictive Real Estate was built from a vision: property value shouldn\'t be a mystery. Developed during my Prodigy Info Tech journey, I created a model where features speak prices, where data reveals patterns, and where R² > 0.85 isn\'t just accuracy - it\'s confidence in every prediction.',
    hoverKeywords: [
      { text: 'real estate', key: 'real-estate-pricing' },
      { text: 'prediction', key: 'real-estate-pricing' }
    ],
    liveSiteUrl: '#',
    githubUrl: 'https://github.com/dhiwinsamrich/PRODIGY_ML_01',
    previewImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Predictive Real Estate',
    previewSubtitle: 'R² score > 0.85',
    details: {
      title: 'Predictive Real Estate',
      role: 'ML Engineer (Prodigy Info Tech)',
      features: [
        'House price prediction',
        'Feature correlation analysis',
        'Linear regression model',
        'Data visualization'
      ],
      whatIBuilt: [
        'Developed a predictive real estate pricing model using linear regression with Scikit-learn, achieving R² score greater than 0.85 by performing comprehensive feature engineering, analyzing property features, and identifying key factors that influence house prices, providing confidence in every prediction.',
        'Built a data analysis pipeline using Pandas and NumPy that processes real estate datasets, performs feature correlation analysis, and handles outliers effectively, creating a model where features speak prices and data reveals patterns that guide property valuation decisions.',
        'Created comprehensive data visualizations using Matplotlib that illustrate price trends, feature correlations, and model performance, enabling buyers and sellers to understand property value through clear, data-driven insights that make real estate pricing transparent and accessible.'
      ],
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'NumPy'],
      inspiration:
        'Helping buyers and sellers understand property value through data science.',
      vision:
        'Provide accurate house price predictions using machine learning.',
      timeline: '1 month',
      coreProcess:
        'Analyzed real estate datasets, performed feature engineering, trained linear regression models, and evaluated performance.',
      impact: 'R² score > 0.85',
      featureCoverage: 80,
      metrics: ['R² score > 0.85', 'Accurate price predictions'],
      difficulties: [
        'Feature selection',
        'Model accuracy',
        'Handling outliers'
      ],
      solution:
        'Comprehensive feature engineering, outlier detection, and model optimization techniques.'
    }
  },

  /* =======================
     15. CATS VS DOGS CLASSIFICATION
     ======================= */
  {
    id: 'cats-vs-dogs',
    number: '15',
    name: 'Cats vs Dogs Classification (SVM)',
    description:
      'Cats vs Dogs Classification was born from a playful challenge: can classical ML still compete? Built during my Prodigy Info Tech internship, I crafted a system where SVM meets pixels, where features tell species, and where 88% accuracy proves that sometimes, the classic approach is the winning move.',
    hoverKeywords: [
      { text: 'SVM', key: 'cats-vs-dogs' },
      { text: 'Classification', key: 'cats-vs-dogs' }
    ],
    liveSiteUrl: '#',
    githubUrl: 'https://github.com/dhiwinsamrich/PRODIGY_ML_03',
    previewImage:
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Cats vs Dogs (SVM)',
    previewSubtitle: '88% classification accuracy',
    details: {
      title: 'Cats vs Dogs (SVM)',
      role: 'ML Engineer (Prodigy Info Tech Intern)',
      features: [
        'Binary image classification',
        'Feature extraction & evaluation',
        'SVM model implementation',
        'Image preprocessing'
      ],
      whatIBuilt: [
        'Implemented a binary image classification system using Support Vector Machine (SVM) with Scikit-learn, achieving 88% classification accuracy by developing advanced feature extraction techniques from image pixels, proving that classical ML approaches can still compete effectively in image recognition tasks.',
        'Built a comprehensive image preprocessing pipeline using OpenCV that handles image variations, normalizes features, and prepares data for SVM classification, creating a system where SVM meets pixels and features tell species with reliable accuracy.',
        'Developed an optimized SVM classifier with parameter tuning and feature engineering, demonstrating that sometimes the classic approach is the winning move, achieving 88% accuracy in distinguishing between cats and dogs through traditional machine learning techniques rather than deep learning.'
      ],
      techStack: ['Python', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'],
      inspiration:
        'Exploring classical ML approaches for image classification.',
      vision:
        'Achieve accurate binary classification using SVM.',
      timeline: '1 month',
      coreProcess:
        'Preprocessed images, extracted features, trained SVM classifier, and evaluated performance.',
      impact: '88% classification accuracy',
      featureCoverage: 75,
      metrics: ['88% classification accuracy', 'Binary classification'],
      difficulties: [
        'Feature extraction',
        'Model optimization',
        'Handling image variations'
      ],
      solution:
        'Advanced feature extraction techniques, SVM parameter tuning, and image preprocessing optimization.'
    }
  },

  /* =======================
     16. RETAIL CUSTOMER CLUSTERING
     ======================= */
  {
    id: 'customer-clustering',
    number: '16',
    name: 'Retail Customer Clustering',
    description:
      'Retail Customer Clustering was created from insight: customers aren\'t all the same, but patterns reveal their stories. Developed during my Prodigy Info Tech experience, I built a system where K-means finds segments, where spending patterns speak volumes, and where 5 distinct groups emerge from 4,000+ records - each with its own story.',
    hoverKeywords: [
      { text: 'clustering', key: 'customer-clustering' },
      { text: 'Customer Clustering', key: 'customer-clustering' }
    ],
    liveSiteUrl: '#',
    githubUrl: 'https://github.com/dhiwinsamrich/PRODIGY_ML_02',
    previewImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Retail Customer Clustering',
    previewSubtitle: '5 customer segments',
    details: {
      title: 'Retail Customer Clustering',
      role: 'ML Engineer (Prodigy Info Tech)',
      features: [
        'Customer segmentation',
        'Spending pattern analysis',
        'K-means clustering',
        'Data visualization'
      ],
      whatIBuilt: [
        'Implemented K-means clustering algorithm using Scikit-learn to analyze customer spending patterns, processing 4,000+ customer records and identifying 5 distinct customer segments, where K-means finds segments and spending patterns speak volumes about customer behavior.',
        'Developed a comprehensive feature engineering and normalization pipeline using Pandas and NumPy, applying the elbow method for optimal cluster selection and feature scaling, enabling accurate customer segmentation that reveals meaningful patterns in retail data.',
        'Created detailed data visualizations using Matplotlib that illustrate customer segments, spending patterns, and cluster characteristics, building a system where 5 distinct groups emerge from thousands of records, each with its own story that helps businesses understand and target their customers effectively.'
      ],
      techStack: ['Python', 'Scikit-learn', 'Matplotlib', 'Pandas', 'NumPy'],
      inspiration:
        'Helping businesses understand customer behavior through segmentation.',
      vision:
        'Identify distinct customer segments for targeted marketing.',
      timeline: '1 month',
      coreProcess:
        'Analyzed customer data, performed feature engineering, applied K-means clustering, and visualized segments.',
      impact: '5 customer segments identified',
      featureCoverage: 80,
      metrics: [
        'Identified 5 customer segments',
        'Processed 4,000+ records',
        'Clear spending pattern analysis'
      ],
      difficulties: [
        'Optimal cluster number selection',
        'Feature scaling',
        'Interpreting clusters'
      ],
      solution:
        'Elbow method for cluster selection, feature normalization, and comprehensive cluster analysis.'
    }
  }
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

// Helper function to get projects for preview (used in hover preview)
export const getProjectsPreviewData = () => {
  const previewData = {};
  projects.forEach(project => {
    previewData[project.id] = {
      image: project.previewImage,
      title: project.previewTitle,
      subtitle: project.previewSubtitle
    };
  });
  return previewData;
};

// Helper function to get project details for modal
export const getProjectDetails = () => {
  const details = {};
  projects.forEach(project => {
    details[project.id] = project.details;
  });
  return details;
};
