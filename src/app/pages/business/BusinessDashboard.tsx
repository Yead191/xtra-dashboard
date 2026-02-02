import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Plus, Users, Clock, ArrowRight } from "lucide-react";
import { Badge } from "../../components/ui/badge";

export function BusinessDashboard() {
  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Logistics Pro</h1>
          <p className="text-muted-foreground text-sm">Dashboard</p>
        </div>
        <Link to="/business/post-job">
           <Button size="sm" className="gap-1">
             <Plus className="w-4 h-4" /> Post Job
           </Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-primary/5 border-none">
          <CardContent className="p-4">
             <div className="flex justify-between items-start mb-2">
               <Users className="w-5 h-5 text-primary" />
               <span className="text-2xl font-bold">12</span>
             </div>
             <p className="text-xs text-muted-foreground font-medium">Workers Active Now</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-none">
          <CardContent className="p-4">
             <div className="flex justify-between items-start mb-2">
               <Clock className="w-5 h-5 text-green-600" />
               <span className="text-2xl font-bold text-green-700">98%</span>
             </div>
             <p className="text-xs text-green-800 font-medium">On-Time Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Active Shifts */}
      <div>
        <div className="flex items-center justify-between mb-3">
           <h2 className="text-lg font-semibold">Live Shifts</h2>
           <Button variant="link" className="text-xs p-0 h-auto">View All</Button>
        </div>
        
        <div className="space-y-3">
           {/* Active Shift Card */}
           <Card className="overflow-hidden">
             <div className="h-1 bg-green-500 w-full" />
             <CardContent className="p-4">
               <div className="flex justify-between items-start mb-3">
                 <div>
                   <h3 className="font-bold text-base">Warehouse Assistant</h3>
                   <p className="text-xs text-muted-foreground">Sector 4 • Shift 2:00 PM - 10:00 PM</p>
                 </div>
                 <Badge variant="success" className="animate-pulse">Live</Badge>
               </div>
               
               <div className="space-y-2">
                 <div className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded-lg">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">JD</div>
                     <span className="font-medium">John Doe</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-green-600 text-xs font-medium">Checked In</span>
                     <span className="font-mono text-xs text-muted-foreground">2:01 PM</span>
                   </div>
                 </div>
                 <div className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded-lg">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-700">SJ</div>
                     <span className="font-medium">Sarah Jenkins</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-green-600 text-xs font-medium">Checked In</span>
                     <span className="font-mono text-xs text-muted-foreground">1:58 PM</span>
                   </div>
                 </div>
               </div>
               
               <div className="mt-3 pt-3 border-t flex justify-between items-center">
                 <span className="text-xs text-muted-foreground">4/5 Workers Checked In</span>
                 <Button variant="ghost" size="sm" className="h-8 text-xs">Manage <ArrowRight className="w-3 h-3 ml-1" /></Button>
               </div>
             </CardContent>
           </Card>

           {/* Upcoming Shift Card */}
           <Card>
             <div className="h-1 bg-amber-500 w-full" />
             <CardContent className="p-4">
               <div className="flex justify-between items-start mb-1">
                 <div>
                   <h3 className="font-bold text-base">Forklift Operator</h3>
                   <p className="text-xs text-muted-foreground">Dock B • Tomorrow, 8:00 AM</p>
                 </div>
                 <Badge variant="warning">Pending</Badge>
               </div>
               <div className="mt-2 flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white" />
                 ))}
                 <div className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] text-gray-500">+2</div>
               </div>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
