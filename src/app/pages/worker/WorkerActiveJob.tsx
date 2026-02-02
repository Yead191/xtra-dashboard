import * as React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { MapPin, Navigation, Clock, ShieldCheck, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

export function WorkerActiveJob() {
  const [status, setStatus] = React.useState<"NOT_STARTED" | "CHECKED_IN" | "COMPLETED">("NOT_STARTED");
  const [timer, setTimer] = React.useState(0);

  // Mock Timer
  React.useEffect(() => {
    let interval: any;
    if (status === "CHECKED_IN") {
      interval = setInterval(() => {
        setTimer(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Map Placeholder */}
      <div className="h-1/3 bg-slate-200 relative flex items-center justify-center overflow-hidden">
        {/* Abstract Map Background */}
        <div className="absolute inset-0 bg-gray-200" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center gap-2 z-10 border border-white/50">
           <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
           <span className="text-sm font-semibold text-green-700 flex items-center gap-1">
             <ShieldCheck className="w-4 h-4" />
             GPS Verified (10m)
           </span>
        </div>
        
        {/* Navigation FAB */}
        <Button size="icon" className="absolute bottom-4 right-4 rounded-full shadow-lg h-12 w-12 bg-primary hover:bg-primary/90">
           <Navigation className="w-5 h-5 text-white" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 -mt-6 rounded-t-3xl bg-white shadow-xl p-6 flex flex-col space-y-6 z-20">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="mb-2">Logistics Pro Inc.</Badge>
          <h1 className="text-2xl font-bold">Warehouse Assistant</h1>
          <div className="flex items-center justify-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-1 text-primary" />
            123 Industrial Blvd, Sector 4
          </div>
        </div>

        {/* Timer / Status Area */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-4 py-4">
           {status === "NOT_STARTED" && (
             <div className="text-center text-muted-foreground">
               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-200">
                 <Clock className="w-8 h-8 text-gray-400" />
               </div>
               <p className="font-medium text-gray-900">Shift starts at 2:00 PM</p>
               <p className="text-xs text-amber-600 mt-2 font-medium bg-amber-50 px-3 py-1 rounded-full inline-block border border-amber-100">
                 You are within the GPS radius.
               </p>
             </div>
           )}

           {status === "CHECKED_IN" && (
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="text-center w-full"
             >
               <div className="text-6xl font-mono font-bold text-gray-900 tabular-nums tracking-tighter">
                 {formatTime(timer)}
               </div>
               <div className="flex justify-center mt-4">
                 <Badge variant="success" className="animate-pulse">
                   ● Live Tracking Active
                 </Badge>
               </div>
             </motion.div>
           )}

            {status === "COMPLETED" && (
             <div className="text-center">
               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-green-50">
                 <ShieldCheck className="w-10 h-10 text-green-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900">Shift Completed!</h3>
               <p className="text-gray-500 mt-2">Payment of <span className="font-bold text-gray-900">$120.00</span> is processing.</p>
             </div>
           )}
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
           {status === "NOT_STARTED" && (
             <Button 
               size="lg" 
               className="w-full h-14 text-lg bg-green-600 hover:bg-green-700 shadow-lg shadow-green-200 font-bold"
               onClick={() => setStatus("CHECKED_IN")}
             >
               Slide to Check-In
             </Button>
           )}

           {status === "CHECKED_IN" && (
             <Button 
               size="lg" 
               variant="destructive"
               className="w-full h-14 text-lg shadow-lg shadow-red-200 font-bold"
               onClick={() => setStatus("COMPLETED")}
             >
               Check-Out
             </Button>
           )}
           
           {status === "COMPLETED" && (
             <Button size="lg" className="w-full h-14 font-semibold" variant="outline">
               View Summary
             </Button>
           )}

           <Button variant="ghost" className="w-full text-muted-foreground text-xs hover:bg-transparent hover:text-primary">
             Report an Issue
           </Button>
        </div>
      </div>
    </div>
  );
}
