import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos, ...props }: LogoCloudProps) {
  return (
    <div className="relative mx-auto max-w-6xl bg-gradient-to-r from-secondary via-transparent to-secondary py-6 md:border-x" {...props}>
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <InfiniteSlider gap={42} reverse speed={5} speedOnHover={0}>
        {logos.map((logo) => {
          const hasCustomSize = logo.width || logo.height;
          return (
          <img
            alt={logo.alt}
              className={hasCustomSize ? "pointer-events-none select-none" : "pointer-events-none h-4 select-none md:h-5"}
              height={logo.height || "auto"}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
              width={logo.width || "auto"}
              style={hasCustomSize ? {
                height: logo.height ? `${logo.height}px` : 'auto',
                width: logo.width ? `${logo.width}px` : 'auto',
              } : undefined}
          />
          );
        })}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px]"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}

