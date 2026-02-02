import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { JobCard, Job } from "../../components/shared/JobCard";
import { DollarSign, Search, MapPin } from "lucide-react";

export function WorkerDashboard() {
  const [activeJob, setActiveJob] = React.useState<Job | null>({
    id: "job-123",
    title: "Warehouse Assistant",
    businessName: "Logistics Pro Inc.",
    businessRating: 4.8,
    payAmount: 120,
    payType: "KXED",
    distance: "1.2 km",
    startTime: "Today, 2:00 PM",
    status: "ACTIVE",
    category: "Logistics"
  });

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Hello, Alex 👋</h1>
          <p className="text-muted-foreground text-sm">Ready to work today?</p>
        </div>
        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
           <span className="text-primary font-bold">JD</span>
        </div>
      </div>

      {/* Earnings Card */}
      <Card className="bg-primary text-primary-foreground border-none shadow-lg shadow-primary/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium opacity-90">Total Earnings (This Week)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold flex items-center">
            <span className="opacity-50 text-2xl mr-1">$</span>
            450.00
          </div>
          <div className="mt-4 flex gap-4 text-sm">
            <div className="bg-white/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <span className="block opacity-70 text-xs">Today</span>
              <span className="font-semibold">$0.00</span>
            </div>
            <div className="bg-white/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <span className="block opacity-70 text-xs">Pending</span>
              <span className="font-semibold">$120.00</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Job / CTA */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Current Status</h2>
        </div>
        
        {activeJob ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-lg border border-amber-100 text-sm">
               <MapPin className="w-4 h-4" />
               <span className="font-medium">You have a job starting soon!</span>
            </div>
            <Link to="/worker/active-job">
              <JobCard 
                job={activeJob} 
                actionLabel="Open Active Mode" 
                className="border-primary/50 shadow-md ring-1 ring-primary/10"
              />
            </Link>
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-8 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <p className="font-medium">No active jobs</p>
                <p className="text-sm text-muted-foreground">Find a new shift to start earning.</p>
              </div>
              <Link to="/worker/jobs">
                <Button>Find Jobs</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Upcoming */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Suggested for You</h2>
        <div className="space-y-3">
          <JobCard job={{
            id: "2",
            title: "Event Server",
            businessName: "Grand Hotel",
            businessRating: 4.5,
            payAmount: 18,
            payType: "HOURLY",
            distance: "3.5 km",
            startTime: "Tomorrow, 6:00 PM",
            status: "OPEN",
            category: "Hospitality"
          }} />
           <JobCard job={{
            id: "3",
            title: "Construction Helper",
            businessName: "BuildRight LLC",
            businessRating: 4.2,
            payAmount: 22,
            payType: "HOURLY",
            distance: "5.0 km",
            startTime: "Wed, 7:00 AM",
            status: "OPEN",
            category: "Construction"
          }} />
        </div>
      </div>
    </div>
  );
}
