import * as React from "react";
import {
  BriefcaseBusinessIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { Separator } from "./separator";
import { cn } from "../../lib/utils";

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
} as const;

/**
 * Represents the valid keys of the `iconMap` object, used to specify the type of icon
 * associated with an experience position.
 */
export type ExperiencePositionIconType = keyof typeof iconMap;

export type ExperiencePositionItemType = {
  /** Unique identifier for the position */
  id: string;
  /** The job title or position name */
  title: string;
  /** The period during which the position was held (e.g., "Jan 2020 - Dec 2021") */
  employmentPeriod: string;
  /** The type of employment (e.g., "Full-time", "Part-time", "Contract") */
  employmentType?: string;
  /** A brief description of the position or responsibilities */
  description?: string;
  /** An icon representing the position */
  icon?: ExperiencePositionIconType;
  /** A list of skills associated with the position */
  skills?: string[];
  /** Projects involved in during this position */
  projectsInvolved?: string[];
  /** Indicates if the position details are expanded in the UI */
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  /** Unique identifier for the experience item */
  id: string;
  /** Name of the company where the experience was gained */
  companyName: string;
  /** URL or path to the company's logo image */
  companyLogo?: string;
  /** List of positions held at the company */
  positions: ExperiencePositionItemType[];
  /** Indicates if this is the user's current employer */
  isCurrentEmployer?: boolean;
};

export function WorkExperience({
  className,
  experiences,
}: Readonly<{
  className?: string;
  experiences: ExperienceItemType[];
}>) {
  // Flatten all positions from all experiences into a single list
  const allPositions = React.useMemo(() => {
    const positions: Array<ExperiencePositionItemType & { companyName: string; isCurrentEmployer?: boolean }> = [];
    experiences.forEach((experience) => {
      experience.positions.forEach((position) => {
        positions.push({
          ...position,
          companyName: experience.companyName,
          isCurrentEmployer: experience.isCurrentEmployer,
        });
      });
    });
    return positions;
  }, [experiences]);

  return (
    <div className={cn("bg-background px-4", className)}>
      {allPositions.map((position) => (
        <ExperiencePositionItem key={position.id} position={position} />
      ))}
    </div>
  );
}

export function ExperiencePositionItem({
  position,
}: Readonly<{
  position: ExperiencePositionItemType & { companyName?: string; isCurrentEmployer?: boolean };
}>) {
  const ExperienceIcon = iconMap[position.icon || "business"];

  return (
    <Collapsible defaultOpen={position.isExpanded} asChild>
      <div className="relative py-4 last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger className="group/experience not-prose block w-full select-none text-left">
          <div className="relative z-10 mb-1 flex items-center gap-3 bg-background">
            <div
              className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
              aria-hidden
            >
              <ExperienceIcon className="size-4" />
            </div>

            <h4 className="flex-1 text-base font-medium text-balance">
              {position.title}
            </h4>

            <div
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
              aria-hidden
            >
              <ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
              <ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
            </div>
          </div>

          <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
            {position.companyName && (
              <>
                <dl>
                  <dt className="sr-only">Company</dt>
                  <dd>{position.companyName}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )}

            {position.employmentType && (
              <>
                <dl>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )}

            <dl>
              <dt className="sr-only">Employment Period</dt>
              <dd>{position.employmentPeriod}</dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="pt-4 pl-9 space-y-4">
            {position.description && (
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Description:</p>
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {position.description}
                </div>
              </div>
            )}

             {Array.isArray(position.projectsInvolved) && position.projectsInvolved.length > 0 && (
               <div className="space-y-1">
                 <p className="text-sm font-medium text-foreground">Projects Involved:</p>
                 <ul className="space-y-2">
                   {position.projectsInvolved.map((project, idx) => (
                     <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                       <span className="text-foreground mt-0.5">♜</span>
                       <span>{project}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             )}

            {Array.isArray(position.skills) && position.skills.length > 0 && (
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Skills:</p>
                <ul className="not-prose flex flex-wrap gap-1.5 pt-1">
                  {position.skills.map((skill) => (
                    <li key={skill} className="flex">
                      <Skill>{skill}</Skill>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert",
        "prose-a:break-words prose-a:font-medium prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        className
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}








