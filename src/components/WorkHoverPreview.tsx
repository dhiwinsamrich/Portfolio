import React, { useState, useCallback, useRef, useEffect } from "react";

interface PreviewData {
  image: string;
  title: string;
  subtitle: string;
}

interface WorkHoverPreviewProps {
  previewData: Record<string, PreviewData>;
  children: React.ReactNode;
}

const previewCardStyles = `
  .work-preview-card {
    position: fixed;
    pointer-events: none;
    z-index: 40;
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, opacity;
  }

  .work-preview-card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .work-preview-card-inner {
    background: hsl(var(--background));
    border-radius: 16px;
    padding: 8px;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.25),
      0 0 0 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 1px solid hsl(var(--border));
  }

  .work-preview-card img {
    width: 280px;
    height: auto;
    border-radius: 10px;
    display: block;
  }

  .work-preview-card-title {
    padding: 12px 8px 8px;
    font-size: 0.85rem;
    color: hsl(var(--foreground));
    font-weight: 600;
  }

  .work-preview-card-subtitle {
    padding: 0 8px 8px;
    font-size: 0.75rem;
    color: hsl(var(--muted-foreground));
  }

  .work-hover-link {
    cursor: pointer;
    position: relative;
    display: inline-block;
    transition: color 0.3s ease;
  }

  .work-hover-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: hsl(var(--primary));
    transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .work-hover-link:hover::after {
    width: 100%;
  }
`;

const PreviewCard = ({
  data,
  position,
  isVisible,
  cardRef,
}: {
  data: PreviewData | null;
  position: { x: number; y: number };
  isVisible: boolean;
  cardRef: React.RefObject<HTMLDivElement | null>;
}) => {
  if (!data) return null;

  return (
    <div
      ref={cardRef}
      className={`work-preview-card ${isVisible ? "visible" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="work-preview-card-inner">
        <img
          src={data.image || "/placeholder.svg"}
          alt={data.title || ""}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <div className="work-preview-card-title">{data.title}</div>
        <div className="work-preview-card-subtitle">{data.subtitle}</div>
      </div>
    </div>
  );
};

export function useWorkHoverPreview(previewData: Record<string, PreviewData>) {
  const [activePreview, setActivePreview] = useState<PreviewData | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Preload all images on mount
  useEffect(() => {
    Object.entries(previewData).forEach(([, data]) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = data.image;
    });
  }, [previewData]);

  const updatePosition = useCallback((e: React.MouseEvent | MouseEvent) => {
    const cardWidth = 300;
    const cardHeight = 250;
    const offsetX = 15;
    const offsetY = 5; // Reduced to position closer to cursor

    let x = e.clientX - cardWidth / 2;
    let y = e.clientY - cardHeight - offsetY; // Position above cursor with minimal gap

    if (x + cardWidth > window.innerWidth - 20) {
      x = window.innerWidth - cardWidth - 20;
    }
    if (x < 20) {
      x = 20;
    }

    // If card would go above viewport, position below cursor instead
    if (y < 20) {
      y = e.clientY + offsetY + 10; // Position below cursor with small gap
    }

    setPosition({ x, y });
  }, []);

  const handleHoverStart = useCallback(
    (key: string, e: React.MouseEvent) => {
      const preview = previewData[key];
      if (preview) {
        setActivePreview(preview);
        setIsVisible(true);
        updatePosition(e);
      }
    },
    [previewData, updatePosition],
  );

  const handleHoverMove = useCallback(
    (e: React.MouseEvent) => {
      if (isVisible) {
        updatePosition(e);
      }
    },
    [isVisible, updatePosition],
  );

  const handleHoverEnd = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    handleHoverStart,
    handleHoverMove,
    handleHoverEnd,
    PreviewCardComponent: (
      <PreviewCard
        data={activePreview}
        position={position}
        isVisible={isVisible}
        cardRef={cardRef}
      />
    ),
  };
}

export const HoverLink = ({
  previewKey,
  children,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}: {
  previewKey: string;
  children: React.ReactNode;
  onHoverStart: (key: string, e: React.MouseEvent) => void;
  onHoverMove: (e: React.MouseEvent) => void;
  onHoverEnd: () => void;
}) => {
  return (
    <span
      className="work-hover-link"
      onMouseEnter={(e) => onHoverStart(previewKey, e)}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
    >
      {children}
    </span>
  );
};

export function WorkHoverPreviewStyles() {
  return <style>{previewCardStyles}</style>;
}

