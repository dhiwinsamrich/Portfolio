// About Me page data - Easy to manage and update
// Add new content by updating the objects below

export const aboutMeSections = [
  {
    id: 1,
    category: "Background",
    title: "My Journey",
    description: "I'm a passionate developer and creative professional who loves building beautiful, functional experiences. My journey in tech started with curiosity and has evolved into a deep love for crafting digital solutions that make a difference.",
  },
  {
    id: 2,
    category: "Philosophy",
    title: "My Approach",
    description: "I believe in the power of clean code, thoughtful design, and user-centered thinking. Every project is an opportunity to learn, grow, and create something meaningful that resonates with people.",
  },
  {
    id: 3,
    category: "Vision",
    title: "Looking Forward",
    description: "I'm constantly exploring new technologies and creative possibilities. The future of digital experiences excites me, and I'm committed to being part of shaping it through innovation and craftsmanship.",
  },
];

export const favourites = {
  title: "My Favourites",
  items: [
    {
      category: "Tools",
      name: "React",
      description: "Building dynamic user interfaces",
    },
    {
      category: "Tools",
      name: "Framer Motion",
      description: "Creating smooth animations",
    },
    {
      category: "Tools",
      name: "TypeScript",
      description: "Type-safe development",
    },
    {
      category: "Design",
      name: "Minimalism",
      description: "Less is more philosophy",
    },
    {
      category: "Design",
      name: "Typography",
      description: "The art of text",
    },
    {
      category: "Interests",
      name: "Photography",
      description: "Capturing moments",
    },
    {
      category: "Interests",
      name: "Videography",
      description: "Telling visual stories",
    },
    {
      category: "Interests",
      name: "Creative Design",
      description: "Artistic expression",
    },
  ],
};

// Helper function to get all about me sections
export const getAboutMeSections = () => aboutMeSections;

// Helper function to get about me section by ID
export const getAboutMeSectionById = (id) => {
  return aboutMeSections.find(section => section.id === id);
};

// Helper function to get favourites
export const getFavourites = () => favourites;

