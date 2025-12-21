// Centralized education data - Easy to add/edit education details
// Just add a new object to this array to add a new education entry
// The most recent education will be shown first

export const education = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications',
    institution: 'JAIN University',
    period: '2023-2025',
    cgpa: '9.55/10',
    description:
      'Postgraduate studies focused on advanced computer science concepts with specialization in artificial intelligence, machine learning, and data science. The program emphasizes strong theoretical foundations combined with real-world AI/ML system development, research, and competitive problem solving.',
    achievement:
      'University Gold Medalist with a CGPA of 9.55/10. Secured 2nd position in a 24-hour Make-A-Thon by presenting a working prototype. Published a research paper on machine learning applications and actively participated in competitive hackathons and technical events.',
    specialization:
      'Artificial Intelligence, Machine Learning, Data Science, Deep Learning, Natural Language Processing',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications',
    institution: 'NPR College',
    period: '2020-2023',
    cgpa: '9.1/10',
    description:
      'Undergraduate program in computer applications that built a strong foundation in programming, software development, databases, and web technologies. Emphasis was placed on problem-solving, logical thinking, and hands-on project development.',
    achievement:
      'University Gold Medalist in majors with a CGPA of 9.1/10. Secured 1st position in the Tech World competition by developing an AI Assistant. Won multiple awards in inter- and intra-college technical competitions and consistently demonstrated academic and technical excellence.',
    specialization:
      'Programming Fundamentals, Web Development, Database Management, Software Engineering, Object-Oriented Programming',
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

