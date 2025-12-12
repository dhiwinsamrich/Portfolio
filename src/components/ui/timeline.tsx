import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline = ({ 
  data
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-background font-sans"
      ref={containerRef}
    >
      <div ref={ref} className="relative w-full pt-4">
        {data.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="flex justify-start pt-1 md:pt-8 pb-8 md:pb-12"
          >
            <div className="sticky flex flex-col z-40 items-start top-40 self-start w-full md:w-full lg:w-full flex-shrink-0">
              <div className="flex items-start gap-4 w-full">
                <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center z-10 flex-shrink-0 mt-1">
                  <div className="h-4 w-4 rounded-full bg-muted border border-border p-2" />
                </div>
                <div className="flex-1 min-w-0 pl-12 md:pl-12 pt-5 md:pt-5">
                  <h3 className="block text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground mb-4">
                    {item.title}
                  </h3>
                  <div className="w-full">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-4 md:left-4 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
