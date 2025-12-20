// Centralized education data - Easy to add/edit education details
// Just add a new object to this array to add a new education entry
// The most recent education will be shown first

export const education = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications',
    institution: 'JAIN University',
    period: '2023-2025',
    cgpa: '8.5',
    description: 'Pursuing advanced studies in computer science with a focus on artificial intelligence, machine learning, and data science. The program emphasizes both theoretical foundations and practical applications, preparing students for cutting-edge roles in the tech industry.',
    achievement: 'Published research paper on machine learning applications. Secured multiple internship opportunities at leading tech companies. Maintained consistent academic performance while actively participating in coding competitions and hackathons.',
    lessonLearnt: 'Learned the importance of balancing theoretical knowledge with hands-on projects. Discovered that collaboration and knowledge sharing accelerate learning. Realized that staying updated with the latest technologies and contributing to open-source projects enhances both technical skills and professional network.',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications',
    institution: 'NPR College',
    period: '2020-2023',
    cgpa: '8.2',
    description: 'Completed undergraduate studies in computer applications, building a strong foundation in programming, software development, database management, and web technologies. The curriculum provided comprehensive exposure to various programming languages and development frameworks.',
    achievement: 'Graduated with distinction. Participated in multiple technical events and coding competitions. Completed several projects demonstrating proficiency in full-stack development. Served as a technical lead in college technical fest organizing committee.',
    lessonLearnt: 'Understood that consistent practice and building projects is key to mastering programming. Learned the value of problem-solving skills and logical thinking. Realized that networking with peers and mentors opens doors to opportunities. Discovered that curiosity and self-learning are essential traits for a successful career in technology.',
  },
];

// Helper function to get all education entries
export const getAllEducation = () => {
  return education;
};

// Helper function to get education by ID
export const getEducationById = (id) => {
  return education.find(edu => edu.id === id);
};

