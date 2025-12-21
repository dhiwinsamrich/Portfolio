"use client";

import React, { useRef } from "react";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const CONTACT_EMAIL = "dhiwinsamrich916@gmail.com";
const CONTACT_PHONE = "+91 00000 00000";
const CONTACT_LINKEDIN = "https://linkedin.com/in/dhiwinsamrich";
const CONTACT_GITHUB = "https://github.com/dhiwinsamrich";
const CONTACT_LOCATION = "India • Remote";
const CONTACT_LOCATION_MAP = "https://www.google.com/maps/place/Chennai,+Tamil+Nadu,+India";
const CONTACT_EMAIL_SUBJECT = "Let's Connect";

const Skiper19 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <section
      ref={ref}
      className="flex h-[350vh] w-full flex-col items-center overflow-hidden bg-background text-foreground"
    >
      <div className="relative mt-24 flex w-fit flex-col items-center justify-center gap-5 text-center lg:mt-32">
        <h1 className="font-jakarta-sans relative z-10 text-6xl font-medium tracking-[-0.08em] sm:text-7xl lg:text-9xl">
          Contact Me <br /> Let’s build <br />
          something great
        </h1>
        <p className="font-jakarta-sans text-muted-foreground relative z-10 max-w-2xl text-lg font-medium sm:text-xl">
          Scroll down to reveal ways to reach me
        </p>

        <LinePath
          className="absolute -right-[40%] top-0 z-0"
          scrollYProgress={scrollYProgress}
        />
        <PathCallouts
          className="absolute -right-[35%] top-8 z-10 hidden w-[320px] sm:block"
          scrollYProgress={scrollYProgress}
        />
      </div>

      {/* Quick contact details strip (between hero and big title) */}
      <ContactQuickDetails />

      <div className="w-full translate-y-[200vh] rounded-none bg-foreground pb-10 text-background">
        <h1 className="mt-10 text-center text-[15.5vw] font-bold leading-[0.9] tracking-tighter lg:text-[16.6vw]">
          contact
        </h1>
        <div className="mt-80 flex w-full flex-col items-start gap-5 px-6 md:px-12 lg:px-16 font-medium uppercase lg:mt-0 lg:flex-row lg:justify-between">
          <div className="flex w-full items-center justify-between gap-12 lg:w-fit lg:justify-center">
            <button
              onClick={() => window.open(CONTACT_LOCATION_MAP, "_blank", "noopener,noreferrer")}
              className="w-fit text-sm cursor-pointer hover:opacity-70 transition-opacity text-left"
            >
              INDIA <br />
              AND ONLINE
            </button>
            <p className="w-fit text-right text-sm lg:text-left">
              dhiwinsamrich <br /> available
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-between gap-12 lg:w-fit lg:justify-center">
            <button
              onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_EMAIL_SUBJECT)}`}
              className="w-fit text-sm cursor-pointer hover:opacity-70 transition-opacity text-left"
            >
              EMAIL <br /> FAST REPLY
            </button>
            <button
              onClick={() => window.open(CONTACT_GITHUB, "_blank", "noopener,noreferrer")}
              className="w-fit text-right text-sm lg:text-left cursor-pointer hover:opacity-70 transition-opacity"
            >
              GITHUB <br /> PROJECTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skiper19 };

function ContactQuickDetails() {
  const items: Array<{
    label: string;
    value: string;
    href?: string;
    external?: boolean;
  }> = [
    { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { label: "Phone", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE}` },
    { label: "LinkedIn", value: "linkedin.com/in/dhiwinsamrich", href: CONTACT_LINKEDIN, external: true },
    { label: "GitHub", value: "github.com/dhiwinsamrich", href: CONTACT_GITHUB, external: true },
    { label: "Location", value: CONTACT_LOCATION },
  ];

  return (
    <div className="mt-8 w-full max-w-2xl mx-auto px-6 md:px-12 lg:px-16 pt-5">
      <div className="rounded-2xl border bg-background/60 px-4 py-4 backdrop-blur md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-left">
          {items.map((item) => (
            <div key={item.label} className="flex items-baseline gap-2">
              <span className="text-muted-foreground text-[11px] font-semibold tracking-widest uppercase">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="font-mono text-sm font-medium hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <span className="font-mono text-sm font-medium">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LinePath({
  className,
  scrollYProgress,
}: Readonly<{
  className: string;
  scrollYProgress: MotionValue<number>;
}>) {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <svg
      width="1278"
      height="2319"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="#22c55e"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          pathLength,
          strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
        }}
      />
    </svg>
  );
}

function PathCallouts({
  className,
  scrollYProgress,
}: Readonly<{
  className: string;
  scrollYProgress: MotionValue<number>;
}>) {
  const o1 = useTransform(scrollYProgress, [0.05, 0.12, 0.19], [0, 1, 0]);
  const o2 = useTransform(scrollYProgress, [0.21, 0.28, 0.35], [0, 1, 0]);
  const o3 = useTransform(scrollYProgress, [0.41, 0.48, 0.55], [0, 1, 0]);
  const o4 = useTransform(scrollYProgress, [0.61, 0.68, 0.75], [0, 1, 0]);

  return (
    <div className={className}>
      <motion.div
        style={{ opacity: o1 }}
        className="mb-4 rounded-xl border bg-background/80 px-4 py-3 text-left shadow-sm backdrop-blur"
      >
        <p className="text-xs font-semibold text-muted-foreground">EMAIL</p>
        <p className="font-mono text-sm font-medium">dhiwinsamrich916@gmail.com</p>
      </motion.div>

      <motion.div
        style={{ opacity: o2 }}
        className="mb-4 ml-10 rounded-xl border bg-background/80 px-4 py-3 text-left shadow-sm backdrop-blur"
      >
        <p className="text-xs font-semibold text-muted-foreground">LINKEDIN</p>
        <p className="font-mono text-sm font-medium">linkedin.com/in/dhiwinsamrich</p>
      </motion.div>

      <motion.div
        style={{ opacity: o3 }}
        className="mb-4 ml-4 rounded-xl border bg-background/80 px-4 py-3 text-left shadow-sm backdrop-blur"
      >
        <p className="text-xs font-semibold text-muted-foreground">GITHUB</p>
        <p className="font-mono text-sm font-medium">github.com/dhiwinsamrich</p>
      </motion.div>

      <motion.div
        style={{ opacity: o4 }}
        className="ml-14 rounded-xl border bg-background/80 px-4 py-3 text-left shadow-sm backdrop-blur"
      >
        <p className="text-xs font-semibold text-muted-foreground">LOCATION</p>
        <p className="font-mono text-sm font-medium">India • Remote</p>
      </motion.div>
    </div>
  );
}
