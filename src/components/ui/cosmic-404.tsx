import createGlobe, { type COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { Button } from "./button";

const GLOBE_CONFIG: COBEOptions = {
  width: 600,
  height: 600,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [-23.5505, -46.6333], size: 0.1 },
  ],
};

export interface GlobeProps {
  className?: string;
  config?: COBEOptions;
}

export function Globe({ className, config = GLOBE_CONFIG }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);

  const onRender = useCallback((state: Record<string, any>) => {
    phiRef.current += 0.005; 
    state.phi = phiRef.current;
    state.width = widthRef.current * 2;
    state.height = widthRef.current * 2;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      widthRef.current = canvas.offsetWidth;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const globe = createGlobe(canvas, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [config, onRender]);

  return (
    <div className={cn("relative aspect-square w-full max-w-md", className)}>
      <canvas
        ref={canvasRef}
        className="size-full [contain:layout_paint_size]"
      />
    </div>
  );
}

export function Cosmic404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left side - Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
          <h1 className="text-8xl lg:text-9xl font-bold">404</h1>
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Page Not Found
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-md">
            Looks like you've ventured into the cosmic void. The page you're looking for doesn't exist in this universe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
              <Link to="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        {/* Right side - Globe */}
        <div className="flex-shrink-0">
          <Globe className="w-full max-w-sm lg:max-w-md" />
        </div>
      </div>
    </div>
  );
}

