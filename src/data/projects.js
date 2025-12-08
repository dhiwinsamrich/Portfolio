// Centralized projects data - Easy to add new projects in the future
// Just add a new object to this array

export const projects = [
  {
    id: 'justicia',
    number: '01',
    name: 'Justicia - Legal AI',
    description: 'Justicia was born for a mission to merge cutting-edge AI with the complexities of Indian law. Driven to bridge the gap between fast-moving tech and the traditionally slow, opaque legal system, I built a platform where accessibility and precision aren\'t just aims - they\'re assured.',
    hoverKeywords: [
      { text: 'Indian law', key: 'justicia' },
      { text: 'legal system', key: 'justicia' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Justicia - Legal AI',
    previewSubtitle: 'AI-powered legal platform for Indian law',
    details: {
      title: 'Justicia - Legal AI',
      features: [
        'AI-powered legal document analysis',
        'Real-time case law search and retrieval',
        'Legal precedent matching',
        'Multi-language support for Indian legal documents',
        'User-friendly interface for legal professionals'
      ],
      techStack: [
        'Python',
        'FastAPI',
        'React',
        'PostgreSQL',
        'OpenAI GPT-4',
        'Vector Databases'
      ],
      inspiration: 'The complexity and opacity of the Indian legal system inspired me to create a platform that makes legal information accessible and understandable for everyone.',
      timeline: '6 months - Developed from concept to deployment, including research, development, testing, and integration with legal databases.',
      difficulties: [
        'Processing complex legal terminology and context',
        'Integrating multiple legal databases',
        'Ensuring accuracy in legal document analysis',
        'Handling large volumes of legal documents'
      ],
      solution: 'Implemented a hybrid approach combining fine-tuned language models with vector databases for semantic search, ensuring high accuracy while maintaining performance.'
    }
  },
  {
    id: 'chess',
    number: '02',
    name: 'Chess Game - RL',
    description: 'Every chess match is a dialogue - a test of strategy, creativity, and learning. "Chess Game" isn\'t just a web-based app; it\'s a bold AI experiment that blends traditional gameplay with Deep-Q Learning to create an ever-evolving digital opponent.',
    hoverKeywords: [
      { text: '"Chess Game"', key: 'chess' },
      { text: 'Deep-Q Learning', key: 'chess' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Chess Game - RL',
    previewSubtitle: 'Deep-Q Learning chess opponent',
    details: {
      title: 'Chess Game - RL',
      features: [
        'Deep-Q Learning based AI opponent',
        'Adaptive difficulty levels',
        'Real-time game analysis',
        'Move prediction and suggestions',
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
      inspiration: 'The challenge of creating an AI that learns and improves through gameplay, making each match a unique experience.',
      timeline: '4 months - Focused on RL model training, game integration, and creating an intuitive user interface.',
      difficulties: [
        'Training the RL model to play at competitive levels',
        'Balancing difficulty progression',
        'Optimizing model inference for real-time gameplay',
        'Handling edge cases in chess rules'
      ],
      solution: 'Used Deep-Q Networks with experience replay and prioritized experience replay to accelerate learning, combined with MCTS for move selection.'
    }
  },
  {
    id: 'rag',
    number: '03',
    name: 'RAG',
    description: 'Every powerful system starts with a bold vision: transforming how humans connect with information. Driven by this ambition. I didn\'t just build a system that stores knowledge - I built one that brings it to life.',
    hoverKeywords: [
      { text: 'humans', key: 'rag' },
      { text: 'brings it to life', key: 'rag' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'RAG System',
    previewSubtitle: 'Retrieval-Augmented Generation system',
    details: {
      title: 'RAG System',
      features: [
        'Retrieval-Augmented Generation',
        'Semantic search capabilities',
        'Context-aware responses',
        'Multi-document knowledge base',
        'Real-time information retrieval'
      ],
      techStack: [
        'Python',
        'LangChain',
        'OpenAI API',
        'Pinecone/Weaviate',
        'FastAPI',
        'React'
      ],
      inspiration: 'The need to create intelligent systems that can bring knowledge to life by connecting information retrieval with natural language generation.',
      timeline: '5 months - Built the RAG pipeline, integrated vector databases, and developed the user interface for knowledge interaction.',
      difficulties: [
        'Optimizing retrieval accuracy',
        'Managing context window limitations',
        'Ensuring relevant information retrieval',
        'Balancing response quality and speed'
      ],
      solution: 'Implemented hybrid search combining dense vector search with keyword-based retrieval, and used re-ranking models to improve relevance.'
    }
  },
  {
    id: 'handSign',
    number: '04',
    name: 'Hand Sign Recognition',
    description: 'Every gesture tells a story. My Hand Sign Recognition Glove was inspired by a passion to give voice and visibility to those who communicate through sign language - technology as a bridge for connection and understanding.',
    hoverKeywords: [
      { text: 'Glove', key: 'handSign' },
      { text: 'sign language', key: 'handSign' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Hand Sign Recognition',
    previewSubtitle: 'Sign language recognition glove',
    details: {
      title: 'Hand Sign Recognition',
      features: [
        'Real-time sign language recognition',
        'Wearable glove with sensors',
        'Multi-gesture support',
        'Visual feedback system',
        'Integration with communication apps'
      ],
      techStack: [
        'Arduino',
        'Python',
        'Machine Learning',
        'TensorFlow Lite',
        'React Native',
        'Bluetooth Communication'
      ],
      inspiration: 'A passion to give voice and visibility to those who communicate through sign language - technology as a bridge for connection and understanding.',
      timeline: '7 months - Hardware development, sensor integration, ML model training, and mobile app development.',
      difficulties: [
        'Sensor calibration and accuracy',
        'Real-time gesture recognition',
        'Hardware-software integration',
        'Battery life optimization',
        'Cross-platform compatibility'
      ],
      solution: 'Developed a lightweight ML model optimized for edge devices, implemented efficient sensor data processing, and created a robust communication protocol.'
    }
  },
  {
    id: 'project5',
    number: '05',
    name: 'AI Chatbot Assistant',
    description: 'An intelligent conversational AI assistant that understands context and provides meaningful interactions. Built with advanced NLP techniques to deliver human-like conversations and assist users in various tasks.',
    hoverKeywords: [
      { text: 'conversational AI', key: 'project5' },
      { text: 'NLP techniques', key: 'project5' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'AI Chatbot Assistant',
    previewSubtitle: 'Intelligent conversational AI',
    details: {
      title: 'AI Chatbot Assistant',
      features: [
        'Context-aware conversations',
        'Multi-turn dialogue support',
        'Sentiment analysis',
        'Multi-language support',
        'Integration with external APIs'
      ],
      techStack: [
        'Python',
        'Transformers',
        'FastAPI',
        'React',
        'WebSocket',
        'PostgreSQL'
      ],
      inspiration: 'Creating an AI that can truly understand and engage in meaningful conversations, making technology more accessible and helpful.',
      timeline: '5 months - Model training, API development, frontend implementation, and testing.',
      difficulties: [
        'Maintaining context across conversations',
        'Handling ambiguous queries',
        'Ensuring response quality',
        'Scaling for multiple users'
      ],
      solution: 'Implemented transformer-based models with attention mechanisms, context caching, and fine-tuning on domain-specific data.'
    }
  },
  {
    id: 'project6',
    number: '06',
    name: 'Computer Vision Pipeline',
    description: 'A comprehensive computer vision system for real-time object detection and image classification. Designed to process and analyze visual data with high accuracy and efficiency.',
    hoverKeywords: [
      { text: 'object detection', key: 'project6' },
      { text: 'image classification', key: 'project6' }
    ],
    liveSiteUrl: '#',
    githubUrl: '#',
    previewImage: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1280&auto=format&fit=crop',
    previewTitle: 'Computer Vision Pipeline',
    previewSubtitle: 'Real-time object detection system',
    details: {
      title: 'Computer Vision Pipeline',
      features: [
        'Real-time object detection',
        'Image classification',
        'Video stream processing',
        'Custom model training',
        'API for integration'
      ],
      techStack: [
        'Python',
        'OpenCV',
        'YOLO',
        'TensorFlow',
        'FastAPI',
        'Docker'
      ],
      inspiration: 'Building a robust computer vision system that can accurately identify and classify objects in real-time, opening possibilities for automation and analysis.',
      timeline: '6 months - Model development, optimization, API creation, and deployment.',
      difficulties: [
        'Achieving real-time performance',
        'Handling various lighting conditions',
        'Model accuracy optimization',
        'Resource management'
      ],
      solution: 'Used YOLO architecture for fast inference, implemented model quantization, and optimized preprocessing pipelines for efficiency.'
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

