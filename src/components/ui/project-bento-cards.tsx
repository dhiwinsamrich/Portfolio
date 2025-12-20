import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Badge } from "./badge";
import { Code } from "lucide-react";

interface ProjectBentoCardsProps {
  project: {
    id?: string;
    name: string;
    description: string;
    previewImage: string;
    details?: {
      features?: string[];
      techStack?: string[];
      timeline?: string;
      difficulties?: string[];
      inspiration?: string;
      solution?: string;
      role?: string;
      impact?: string;
      vision?: string;
      featureCoverage?: number;
      coreProcess?: string;
      [key: string]: any; // Allow dynamic fields
    };
    [key: string]: any; // Allow dynamic fields on project object
  };
}

// Integration Card - Shows Role and Timeline with image
export const IntegrationCard = ({ project }: ProjectBentoCardsProps) => {
  const role = project.details?.role || 'Project Role';
  const timeline = project.details?.timeline || 'Timeline not specified';
  
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Code className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{role}</CardTitle>
        <CardDescription className="line-clamp-4 mt-2">
          {timeline}
        </CardDescription>
      </CardHeader>
      {project.previewImage && (
        <CardContent className="flex-1 pt-0 pb-5">
          <img
            src={project.previewImage}
            alt={project.name}
            className="w-full h-full min-h-[400px] rounded-lg object-cover"
          />
        </CardContent>
      )}
    </Card>
  );
};

// Trackers Card - Shows tech stack count
export const TrackersCard = ({ project }: ProjectBentoCardsProps) => {
  const techCount = project.details?.techStack?.length || 0;
  const techStack = project.details?.techStack || [];
  
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col justify-between p-6">
        <div>
          <CardTitle className="text-base font-medium">
            Technologies Used
          </CardTitle>
          <CardDescription>
            {techCount} {techCount === 1 ? 'Technology' : 'Technologies'} Integrated
          </CardDescription>
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-primary/30 text-primary bg-primary/5"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Focus Card - Shows features count or focus percentage
export const FocusCard = ({ project }: ProjectBentoCardsProps) => {
  const featuresCount = project.details?.features?.length || 0;
  // Use editable featureCoverage if provided, otherwise calculate from features count
  const focusPercentage = project.details?.featureCoverage ?? 
    (featuresCount > 0 ? Math.min(100, featuresCount * 15) : 0);
  
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base font-medium">Key Features</CardTitle>
            <CardDescription>Feature Implementation</CardDescription>
          </div>
          <Badge variant="outline" className="border-primary/30 text-primary">
            {featuresCount} Features
          </Badge>
        </div>
        <div>
          <span className="text-6xl font-bold">{focusPercentage}%</span>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Feature Coverage</span>
          <span>Project Scope</span>
        </div>
      </CardContent>
    </Card>
  );
};

// Statistic Card - Shows project impact/metric
export const StatisticCard = ({ project }: ProjectBentoCardsProps) => {
  // Use editable impact if provided, otherwise calculate from features count
  const featuresCount = project.details?.features?.length || 0;
  const multiplier = project.details?.impact ?? 
    (featuresCount > 0 ? `${featuresCount}X` : '10X');
  
  return (
    <Card className="relative h-full w-full overflow-hidden">
      {/* Dotted background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <CardContent className="relative z-10 flex h-full items-center justify-center p-6">
        <div className="text-center">
          <span className="text-8xl font-bold text-foreground/90">{multiplier}</span>
          <p className="mt-2 text-sm text-muted-foreground">Impact</p>
        </div>
      </CardContent>
    </Card>
  );
};

// Productivity Card - Shows project vision
export const ProductivityCard = ({ project }: ProjectBentoCardsProps) => {
  // Use editable vision if provided, otherwise fallback to inspiration or description
  const vision = project.details?.vision ?? 
    project.details?.inspiration ?? 
    project.description;
  
  return (
    <Card className="min-h-full">
      <CardContent className="flex flex-col p-6">
        <CardTitle className="text-base font-medium mb-2">
          Project Vision
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed whitespace-normal">
          {vision}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

// Core Process Card - Shows the development process
export const CoreProcessCard = ({ project }: ProjectBentoCardsProps) => {
  const coreProcess = project.details?.coreProcess || project.details?.timeline || 'Development process information not available.';
  
  return (
    <Card className="min-h-full">
      <CardContent className="flex flex-col gap-4 p-6">
        <div>
          <CardTitle className="text-base font-medium">Core Process</CardTitle>
          <CardDescription>
            The process of Developing it.
          </CardDescription>
        </div>
        <CardDescription className="text-sm leading-relaxed whitespace-normal">
          {coreProcess}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
