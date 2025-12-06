import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "../../lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-border" />

      <LogoCard
        className="relative border-r border-b border-border bg-secondary dark:bg-secondary/30"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          alt: "Python Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-foreground/40"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-border md:border-r"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          alt: "JavaScript Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-border md:bg-secondary dark:md:bg-secondary/30"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          alt: "Java Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-foreground/40"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-foreground/40"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-border bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
          alt: "C++ Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-border bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
          alt: "PyTorch Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-foreground/40"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-border bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
          alt: "FastAPI Logo",
        }}
      />

      <LogoCard
        className="border-r border-border"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          alt: "MongoDB Logo",
        }}
      />

      <LogoCard
        className="bg-secondary dark:bg-secondary/30"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          alt: "MySQL Logo",
        }}
      />

      <LogoCard
        className="border-r border-border bg-background md:bg-secondary dark:md:bg-secondary/30"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          alt: "Docker Logo",
        }}
      />

      <LogoCard
        className="border-b border-border md:border-r md:border-b-0"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          alt: "Git Logo",
        }}
      />

      <LogoCard
        className="border-r border-b border-border bg-secondary dark:bg-secondary/30"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          alt: "GitHub Logo",
        }}
      />

      <LogoCard
        className="border-b border-border"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
          alt: "AWS Logo",
        }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-border" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-2 py-8 md:px-4 md:py-8",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}

