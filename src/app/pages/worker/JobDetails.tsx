import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { MapPin, Clock, DollarSign, Star, ArrowLeft, ShieldCheck, Info } from "lucide-react";
import { Job } from "../../components/shared/JobCard";

export function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data fetching based on ID
  const job: Job = {
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
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header Image Placeholder */}
      <div className="h-48 bg-slate-200 relative">
         <div className="absolute top-4 left-4 z-10">
           <Button variant="secondary" size="icon" className="rounded-full shadow-md bg-white/90" onClick={() => navigate(-1)}>
             <ArrowLeft className="w-5 h-5 text-gray-700" />
           </Button>
         </div>
         <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Job" className="w-full h-full object-cover" />
      </div>

      <div className="px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-t-3xl p-6 shadow-sm border border-b-0">
           <div className="flex justify-between items-start mb-2">
             <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">Hospitality</Badge>
             <div className="flex items-center text-amber-500 text-sm font-bold">
               <Star className="w-4 h-4 fill-current mr-1" />
               4.5
             </div>
           </div>
           <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
           <p className="text-muted-foreground font-medium">{job.businessName}</p>
        </div>
      </div>

      <div className="px-6 space-y-6 mt-4">
         {/* Pay & Info Grid */}
         <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-xl border border-green-100">
               <div className="text-green-600 mb-1"><DollarSign className="w-5 h-5" /></div>
               <div className="font-bold text-lg">${job.payAmount}/hr</div>
               <div className="text-xs text-green-700">Instant Pay</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
               <div className="text-blue-600 mb-1"><Clock className="w-5 h-5" /></div>
               <div className="font-bold text-lg">6:00 PM</div>
               <div className="text-xs text-blue-700">Tomorrow</div>
            </div>
         </div>

         {/* Location */}
         <div>
           <h3 className="font-bold text-lg mb-3">Location</h3>
           <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Grand Hotel Ballroom</p>
                <p className="text-sm text-gray-500">123 Market St, San Francisco, CA</p>
                <div className="mt-2 text-xs bg-gray-100 inline-block px-2 py-1 rounded text-gray-600">
                  {job.distance} away
                </div>
              </div>
           </div>
         </div>

         {/* Description */}
         <div>
            <h3 className="font-bold text-lg mb-2">Job Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We need experienced servers for a large wedding banquet. 
              Black vest and pants required. Experience with tray service is a plus.
            </p>
         </div>

         {/* Requirements */}
         <div>
           <h3 className="font-bold text-lg mb-2">Requirements</h3>
           <ul className="space-y-2">
             <li className="flex items-center gap-2 text-sm text-gray-600">
               <ShieldCheck className="w-4 h-4 text-green-600" /> ID Verification
             </li>
             <li className="flex items-center gap-2 text-sm text-gray-600">
               <ShieldCheck className="w-4 h-4 text-green-600" /> Professional Attire
             </li>
           </ul>
         </div>

         {/* Warning */}
         <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 flex gap-3">
           <Info className="w-5 h-5 text-amber-600 shrink-0" />
           <p className="text-xs text-amber-800">
             Cancellation within 2 hours of start time may result in a penalty on your profile rating.
           </p>
         </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
         <div className="max-w-md mx-auto flex gap-4">
            <div className="flex-1">
               <p className="text-xs text-gray-500">Total Est. Pay</p>
               <p className="font-bold text-lg">$108.00</p>
            </div>
            <Button size="lg" className="flex-[2] font-bold">
              Accept Job
            </Button>
         </div>
      </div>
    </div>
  );
}
