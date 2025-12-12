// Centralized internship experience data - Easy to add/edit experiences
// Just add a new object to this array to add a new experience
// The most recent experiences will be shown first (top 4)

export const experiences = [
  {
    id: 'white-mastery',
    title: 'AI/ML Engineer',
    company: 'White Mastery',
    period: 'Aug 2025 - Present',
    type: 'Full-time',
    descriptions: [
      'Developed and deployed machine learning models for production use',
      'Collaborated with cross-functional teams to integrate AI solutions',
      'Optimized model performance and reduced inference time by 40%',
      'Mentored junior developers and conducted technical knowledge sharing sessions'
    ],
  },
  {
    id: 'krutanic',
    title: 'Machine Learning Engineer Intern',
    company: 'Krutanic',
    period: 'Jan 2025',
    type: 'Internship',
    descriptions: [
      'Built and trained deep learning models for computer vision tasks',
      'Preprocessed and cleaned large datasets for model training',
      'Implemented model evaluation metrics and performance monitoring',
      'Participated in code reviews and contributed to best practices documentation'
    ],
  },
  {
    id: 'zidio',
    title: 'Data Science and Analyst Intern',
    company: 'Zidio Development',
    period: 'Aug 2024 - Nov 2024',
    type: 'Internship',
    descriptions: [
      'Performed exploratory data analysis on large datasets using Python and SQL',
      'Created data visualizations and dashboards for business insights',
      'Developed predictive models to support data-driven decision making',
      'Collaborated with stakeholders to understand requirements and deliver actionable insights'
    ],
  },
  {
    id: 'novitech',
    title: 'Artificial Intelligence Intern',
    company: 'NoviTech R&D Pvt Ltd',
    period: 'Feb 2024 - Apr 2024',
    type: 'Internship',
    descriptions: [
      'Researched and implemented NLP solutions for text classification',
      'Worked with transformer models and fine-tuned pre-trained models',
      'Developed APIs for AI model deployment and integration',
      'Documented research findings and presented results to the team'
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
