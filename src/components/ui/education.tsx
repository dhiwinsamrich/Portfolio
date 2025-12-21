import * as React from "react";
import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  GraduationCapIcon,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { Separator } from "./separator";
import { cn } from "../../lib/utils";

export type EducationItemType = {
  /** Unique identifier for the education item */
  id: string;
  /** The degree name */
  degree: string;
  /** Name of the institution */
  institution: string;
  /** The period during which the education was pursued (e.g., "2023-2025") */
  period: string;
  /** CGPA scored */
  cgpa?: string;
  /** Description of the education */
  description?: string;
  /** Achievements during the education */
  achievement?: string;
  /** Specialization areas */
  specialization?: string;
  /** Indicates if the education details are expanded in the UI */
  isExpanded?: boolean;
};

export function Education({
  className,
  education,
}: Readonly<{
  className?: string;
  education: EducationItemType[];
}>) {
  return (
    <div className={cn("bg-background px-4", className)}>
      {education.map((edu) => (
        <EducationItem key={edu.id} education={edu} />
      ))}
    </div>
  );
}

export function EducationItem({
  education,
}: Readonly<{
  education: EducationItemType;
}>) {
  return (
    <Collapsible defaultOpen={education.isExpanded} asChild>
      <div className="relative py-4 last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger className="group/education not-prose block w-full select-none text-left">
          <div className="relative z-10 mb-1 flex items-center gap-3 bg-background">
            <div
              className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
              aria-hidden
            >
              <GraduationCapIcon className="size-4" />
            </div>

            <h4 className="flex-1 text-base font-medium text-balance">
              {education.degree}
            </h4>

            <div
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
              aria-hidden
            >
              <ChevronsDownUpIcon className="hidden group-data-[state=open]/education:block" />
              <ChevronsUpDownIcon className="hidden group-data-[state=closed]/education:block" />
            </div>
          </div>

          <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
            <dl>
              <dt className="sr-only">Institution</dt>
              <dd>{education.institution}</dd>
            </dl>

            <Separator
              className="data-[orientation=vertical]:h-4"
              orientation="vertical"
            />

            <dl>
              <dt className="sr-only">Period</dt>
              <dd>{education.period}</dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="pt-4 pl-9 space-y-4">

          {education.specialization && (
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Specialization:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {education.specialization}
                </p>
              </div>
            )}
            
            {education.cgpa && (
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">CGPA:</p>
                <p className="text-sm text-muted-foreground">{education.cgpa}</p>
              </div>
            )}

            {education.description && (
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Description:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {education.description}
                </p>
              </div>
            )}

            {education.achievement && (
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Achievement:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {education.achievement}
                </p>
              </div>
            )}

          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

