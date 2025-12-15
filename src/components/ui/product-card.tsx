"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

// Define the properties for the ProductHighlightCard component
interface ProductHighlightCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  categoryIcon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  imageSrc: string | React.ReactNode;
  imageAlt: string;
}

export const ProductHighlightCard = React.forwardRef<HTMLDivElement, ProductHighlightCardProps>(
  ({ className, categoryIcon, category, title, description, imageSrc, imageAlt, ...props }, ref) => {
    
    // --- Animation Logic for 3D Tilt Effect (only on hover) ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      if (!isHovered) return;
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };

    // Transform mouse position into a rotation value (only when hovered)
    const baseRotateX = useTransform(mouseY, [0, 350], [10, -10]);
    const baseRotateY = useTransform(mouseX, [0, 350], [-10, 10]);
    
    // Only apply rotation when hovered, otherwise 0
    const rotateX = useTransform(baseRotateX, (latest) => isHovered ? latest : 0);
    const rotateY = useTransform(baseRotateY, (latest) => isHovered ? latest : 0);
    
    // Apply spring physics for a smoother animation
    const springConfig = { stiffness: 300, damping: 20 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);
    
    // --- Animation Logic for Glow Effect ---
    const glowOpacity = useTransform(mouseX, [0, 350], isHovered ? [0, 0.5] : [0, 0]);
    const glowRef = React.useRef<HTMLDivElement>(null);
    
    // Update glow position based on mouse
    React.useEffect(() => {
      if (!isHovered) {
        mouseX.set(0);
        mouseY.set(0);
        return;
      }
      const unsubscribeX = mouseX.on("change", (latest) => {
        if (glowRef.current) {
          const x = (latest / 350) * 100;
          glowRef.current.style.setProperty('--glow-x', `${x}%`);
        }
      });
      const unsubscribeY = mouseY.on("change", (latest) => {
        if (glowRef.current) {
          const y = (latest / 350) * 100;
          glowRef.current.style.setProperty('--glow-y', `${y}%`);
        }
      });
      return () => {
        unsubscribeX();
        unsubscribeY();
      };
    }, [mouseX, mouseY, isHovered]);

    return (
      <motion.div
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setIsHovered(false);
          mouseX.set(0);
          mouseY.set(0);
        }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative h-[350px] w-[350px] rounded-2xl bg-card shadow-lg transition-shadow duration-300 hover:shadow-2xl",
          className
        )}
        {...props}
      >
        <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="absolute inset-4 rounded-xl bg-card-foreground/5 shadow-inner">
          
          {/* Diagonal line texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          {/* Glow effect that follows the mouse */}
          <motion.div
            ref={glowRef}
            className="pointer-events-none absolute -inset-px rounded-xl"
            style={{
              opacity: glowOpacity,
              background: "radial-gradient(80px at var(--glow-x, 50%) var(--glow-y, 50%), hsl(var(--primary)), transparent 40%)",
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div className="flex items-center space-x-2 text-card-foreground">
              {categoryIcon}
              <span className="text-sm font-medium">{category}</span>
            </div>
            
            <div className="text-card-foreground">
              <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
              <p className="mt-2 max-w-[60%] text-xs text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
          
          {/* Product Image */}
          <motion.div
            style={{ transform: "translateZ(50px)" }}
            whileHover={{ scale: 1.1, y: -20, x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute right-4 bottom-4 h-32 w-32 flex items-center justify-center"
          >
            {typeof imageSrc === 'string' ? (
              <img src={imageSrc} alt={imageAlt} className="h-full w-full object-contain" />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                {imageSrc}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

ProductHighlightCard.displayName = "ProductHighlightCard";
