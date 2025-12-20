import React, { useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

// Reusable BentoItem component
interface BentoItemProps {
  className?: string;
  children: React.ReactNode;
}

const BentoItem = ({ className, children }: BentoItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={itemRef} className={`bento-item ${className}`}>
      {children}
    </div>
  );
};

interface ProjectDetails {
  title: string;
  features: string[];
  techStack: string[];
  inspiration: string;
  timeline: string;
  difficulties: string[];
  solution: string;
}

interface ProjectDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectDetails | null;
}

const bentoGridStyles = `
  .main-container {
    width: 100%;
    padding: 1rem;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
    auto-rows: minmax(150px, auto);
  }

  .bento-item.col-span-2 {
    grid-column: span 2;
  }

  .bento-item.row-span-2 {
    grid-row: span 2;
  }

  .bento-item {
    position: relative;
    padding: 1.5rem;
    border-radius: 0.75rem;
    background: hsl(var(--card));
    border: 1px solid hsl(var(--border));
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .bento-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(99, 102, 241, 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .bento-item:hover::before {
    opacity: 1;
  }

  .bento-item:hover {
    border-color: hsl(var(--primary));
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .bento-item h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: hsl(var(--foreground));
    margin-bottom: 0.5rem;
  }

  .bento-item h3 {
    font-size: 1rem;
    font-weight: 600;
    color: hsl(var(--foreground));
    margin-bottom: 0.75rem;
  }

  .bento-item p,
  .bento-item ul {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    line-height: 1.6;
  }

  .bento-item ul {
    list-style: none;
    padding: 0;
  }

  .bento-item li {
    padding: 0.25rem 0;
    position: relative;
    padding-left: 1.25rem;
  }

  .bento-item li::before {
    content: '♟';
    position: absolute;
    left: 0;
    color: hsl(var(--primary));
  }

  @media (max-width: 768px) {
    .bento-grid {
      grid-template-columns: 1fr;
    }
    
    .bento-item.col-span-2 {
      grid-column: span 1;
    }
    
    .bento-item.row-span-2 {
      grid-row: span 1;
    }
  }
`;

export function ProjectDetailsModal({ open, onOpenChange, project }: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <>
      <style>{bentoGridStyles}</style>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-6">{project.title}</DialogTitle>
          </DialogHeader>
          <div className="main-container">
            <div className="bento-grid">
              <BentoItem className="col-span-2 row-span-2">
                <h2>Features Involved</h2>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </BentoItem>
              
              <BentoItem>
                <h3>Tech Stack</h3>
                <ul>
                  {project.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </BentoItem>
              
              <BentoItem>
                <h3>Inspiration</h3>
                <p>{project.inspiration}</p>
              </BentoItem>
              
              <BentoItem className="row-span-2">
                <h3>Timeline</h3>
                <p>{project.timeline}</p>
              </BentoItem>
              
              <BentoItem className="col-span-2">
                <h3>Difficulties Faced</h3>
                <ul>
                  {project.difficulties.map((difficulty, index) => (
                    <li key={index}>{difficulty}</li>
                  ))}
                </ul>
              </BentoItem>
              
              <BentoItem>
                <h3>How I Overcame the Challenges</h3>
                <p>{project.solution}</p>
              </BentoItem>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

