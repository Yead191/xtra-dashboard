import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { JobCard, Job } from "../../components/shared/JobCard";
import { Search, Filter, Map } from "lucide-react";
import { Badge } from "../../components/ui/badge";

const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "Event Server",
    businessName: "Grand Hotel",
    businessRating: 4.5,
    payAmount: 18,
    payType: "HOURLY",
    distance: "3.5 km",
    startTime: "Tomorrow, 6:00 PM",
    status: "OPEN",
    category: "Hospitality"
  },
  {
    id: "2",
    title: "Construction Helper",
    businessName: "BuildRight LLC",
    businessRating: 4.2,
    payAmount: 22,
    payType: "HOURLY",
    distance: "5.0 km",
    startTime: "Wed, 7:00 AM",
    status: "OPEN",
    category: "Construction"
  },
  {
    id: "3",
    title: "Retail Associate",
    businessName: "Fashion Outlet",
    businessRating: 4.9,
    payAmount: 16,
    payType: "HOURLY",
    distance: "1.2 km",
    startTime: "Today, 4:00 PM",
    status: "OPEN",
    category: "Retail"
  },
  {
    id: "4",
    title: "Mover",
    businessName: "Fast Moves",
    businessRating: 3.8,
    payAmount: 150,
    payType: "KXED",
    distance: "8.0 km",
    startTime: "Sat, 8:00 AM",
    status: "OPEN",
    category: "General Labor"
  }
];

export function WorkerJobs() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 z-10 bg-white border-b p-4 space-y-4 shadow-sm">
        <h1 className="text-xl font-bold">Find Work</h1>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search jobs, roles..." className="pl-9 bg-gray-50 border-gray-200" />
          </div>
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="shrink-0">
            <Map className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <Badge variant="secondary" className="whitespace-nowrap cursor-pointer">All Jobs</Badge>
          <Badge variant="outline" className="whitespace-nowrap cursor-pointer bg-white">Hospitality</Badge>
          <Badge variant="outline" className="whitespace-nowrap cursor-pointer bg-white">Construction</Badge>
          <Badge variant="outline" className="whitespace-nowrap cursor-pointer bg-white">Retail</Badge>
          <Badge variant="outline" className="whitespace-nowrap cursor-pointer bg-white">Logistics</Badge>
        </div>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto">
        {MOCK_JOBS.map((job) => (
          <Link to={`/worker/jobs/${job.id}`} key={job.id}>
             <JobCard job={job} className="mb-4" />
          </Link>
        ))}
      </div>
    </div>
  );
}
