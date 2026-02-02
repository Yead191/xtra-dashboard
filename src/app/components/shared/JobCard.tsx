import * as React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, Clock, DollarSign, Star, Briefcase } from "lucide-react";
import { cn } from "../../../lib/utils";

export type JobStatus = "OPEN" | "FILLED" | "ACTIVE" | "COMPLETED" | "PENDING";

export interface Job {
  id: string;
  title: string;
  businessName: string;
  businessRating: number;
  payAmount: number;
  payType: "HOURLY" | "KXED";
  distance: string; // e.g., "2.5 km"
  startTime: string; // e.g. "Tomorrow, 9:00 AM"
  status: JobStatus;
  category?: string;
}

interface JobCardProps {
  job: Job;
  onClick?: () => void;
  className?: string;
  showAction?: boolean;
  actionLabel?: string;
  onAction?: (e: React.MouseEvent) => void;
}

export function JobCard({ job, onClick, className, showAction = true, actionLabel = "View Details", onAction }: JobCardProps) {
  
  const getStatusBadgeVariant = (status: JobStatus) => {
    switch (status) {
      case "OPEN": return "default"; // Blue
      case "ACTIVE": return "success"; // Green
      case "COMPLETED": return "secondary";
      case "FILLED": return "warning";
      case "PENDING": return "warning";
      default: return "outline";
    }
  };

  return (
    <Card 
      className={cn("w-full cursor-pointer hover:shadow-md transition-shadow", className)}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className="mb-2 text-xs text-muted-foreground border-none px-0 font-normal">
              {job.category || "General Labor"}
            </Badge>
            <CardTitle className="text-lg font-bold text-foreground">{job.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <span className="font-medium text-foreground mr-2">{job.businessName}</span>
              <span className="flex items-center text-amber-500 text-xs">
                <Star className="w-3 h-3 fill-current mr-0.5" />
                {job.businessRating.toFixed(1)}
              </span>
            </CardDescription>
          </div>
          <Badge variant={getStatusBadgeVariant(job.status)} className="capitalize">
            {job.status.toLowerCase()}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <DollarSign className="w-4 h-4 mr-1.5 text-primary" />
            <span className="font-semibold text-foreground">${job.payAmount}</span>
            <span className="text-xs ml-0.5">{job.payType === "HOURLY" ? "/hr" : " total"}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1.5 text-primary" />
            <span>{job.distance}</span>
          </div>

          <div className="flex items-center text-muted-foreground col-span-2">
            <Clock className="w-4 h-4 mr-1.5 text-primary" />
            <span>{job.startTime}</span>
          </div>
        </div>
      </CardContent>

      {showAction && (
        <CardFooter className="pt-2">
          <Button 
            className="w-full font-semibold" 
            onClick={(e) => {
              e.stopPropagation();
              onAction?.(e);
            }}
          >
            {actionLabel}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
