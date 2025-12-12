// Play page data - Easy to manage and update
// Add new images/videos by adding objects to the arrays below

// Full screen scroll sections for the hero section
export const scrollSections = [
  {
    leftLabel: "Silence",
    title: "Absence",
    rightLabel: "Silence",
    background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    leftLabel: "Essence",
    title: "Stillness",
    rightLabel: "Essence",
    background: "https://images.unsplash.com/photo-1514525253160-9ae63c665f48?q=80&w=2000&auto=format&fit=crop",
  },
  {
    leftLabel: "Rebirth",
    title: "Growth",
    rightLabel: "Rebirth",
    background: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000&auto=format&fit=crop",
  },
  {
    leftLabel: "Change",
    title: "Opportunity",
    rightLabel: "Change",
    background: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",
  },
];

// Gallery items showcasing passions and photography/videography work
// To add a new item, copy the structure below and update the values
export const mediaItems = [
  {
    id: 1,
    type: "image", // "image" or "video"
    title: "Sunset Photography",
    desc: "Capturing the golden hour",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2", // Grid layout classes
  },
  {
    id: 2,
    type: "video",
    title: "Nature Walk",
    desc: "Exploring the wilderness",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Urban Architecture",
    desc: "Modern cityscapes",
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Mountain Landscape",
    desc: "Majestic peaks",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "video",
    title: "Wildlife Documentary",
    desc: "Nature in motion",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Beach Paradise",
    desc: "Tropical vibes",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 7,
    type: "video",
    title: "City Life",
    desc: "Urban exploration",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 8,
    type: "image",
    title: "Abstract Art",
    desc: "Creative expression",
    url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 9,
    type: "image",
    title: "Night Photography",
    desc: "City lights",
    url: "https://images.unsplash.com/photo-1514525253160-9ae63c665f48?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 10,
    type: "image",
    title: "Portrait Session",
    desc: "Human stories",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
];

// Helper function to get media items (useful for filtering, sorting, etc.)
export const getMediaItems = () => mediaItems;

// Helper function to get media item by ID
export const getMediaItemById = (id) => {
  return mediaItems.find(item => item.id === id);
};

// Helper function to get scroll sections
export const getScrollSections = () => scrollSections;

