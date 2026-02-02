import * as React from "react";
import { JobCard, Job } from "../../components/shared/JobCard";
import { Button } from "../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

const JOBS: Job[] = [
  {
    id: "101",
    title: "Warehouse Assistant",
    businessName: "Logistics Pro",
    businessRating: 4.8,
    payAmount: 120,
    payType: "KXED",
    distance: "Sector 4",
    startTime: "Today, 2:00 PM",
    status: "ACTIVE",
    category: "Logistics"
  },
  {
    id: "102",
    title: "Forklift Operator",
    businessName: "Logistics Pro",
    businessRating: 4.8,
    payAmount: 160,
    payType: "KXED",
    distance: "Dock B",
    startTime: "Tomorrow, 8:00 AM",
    status: "PENDING",
    category: "Logistics"
  },
  {
    id: "103",
    title: "Inventory Clerk",
    businessName: "Logistics Pro",
    businessRating: 4.8,
    payAmount: 110,
    payType: "KXED",
    distance: "Main Hub",
    startTime: "Yesterday",
    status: "COMPLETED",
    category: "Admin"
  }
];

export function BusinessJobs() {
  return (
    <div className="p-4 space-y-4 max-w-md mx-auto h-full flex flex-col">
      <h1 className="text-2xl font-bold">My Jobs</h1>
      
      <Tabs defaultValue="active" className="w-full flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Open</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4 mt-4">
           {JOBS.filter(j => j.status === 'ACTIVE').map(job => (
             <JobCard key={job.id} job={job} actionLabel="Manage Shift" />
           ))}
        </TabsContent>
        
        <TabsContent value="pending" className="space-y-4 mt-4">
           {JOBS.filter(j => j.status === 'PENDING').map(job => (
             <JobCard key={job.id} job={job} actionLabel="Edit Posting" />
           ))}
           <div className="p-8 text-center text-muted-foreground border-2 border-dashed rounded-xl">
              No other open jobs.
           </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4 mt-4">
           {JOBS.filter(j => j.status === 'COMPLETED').map(job => (
             <JobCard key={job.id} job={job} actionLabel="View Invoice" />
           ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
