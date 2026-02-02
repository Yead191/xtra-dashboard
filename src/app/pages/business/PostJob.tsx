import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowLeft, MapPin, Calendar, DollarSign, Users } from "lucide-react";
import { Badge } from "../../components/ui/badge";

export function PostJob() {
  const navigate = useNavigate();
  const [payRate, setPayRate] = React.useState(18);
  const [workers, setWorkers] = React.useState(1);
  const [hours, setHours] = React.useState(4);

  const subtotal = payRate * workers * hours;
  const fee = subtotal * 0.15; // 15% fee
  const total = subtotal + fee;

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3 sticky top-0 z-20">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-bold text-lg">Post a New Job</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
        {/* Step 1: Basic Info */}
        <div className="space-y-4">
           <h2 className="font-semibold text-gray-900 flex items-center gap-2">
             <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">1</span>
             Job Details
           </h2>
           <Card>
             <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Job Title</label>
                  <Input placeholder="e.g. Warehouse Assistant" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option>General Labor</option>
                    <option>Hospitality</option>
                    <option>Retail</option>
                    <option>Construction</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <textarea className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[80px]" placeholder="Briefly describe the tasks..." />
                </div>
             </CardContent>
           </Card>
        </div>

        {/* Step 2: Location & Time */}
        <div className="space-y-4">
           <h2 className="font-semibold text-gray-900 flex items-center gap-2">
             <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">2</span>
             Location & Schedule
           </h2>
           <Card>
             <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-9" placeholder="Search address..." defaultValue="123 Industrial Blvd" />
                  </div>
                  {/* Map placeholder */}
                  <div className="h-32 bg-gray-100 rounded-md mt-2 flex items-center justify-center text-muted-foreground text-xs">
                    Map Preview
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-sm font-medium">Date</label>
                     <Input type="date" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium">Start Time</label>
                     <Input type="time" />
                   </div>
                </div>
             </CardContent>
           </Card>
        </div>

        {/* Step 3: Workers & Pay */}
        <div className="space-y-4">
           <h2 className="font-semibold text-gray-900 flex items-center gap-2">
             <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">3</span>
             Workers & Pay
           </h2>
           <Card>
             <CardContent className="p-4 space-y-6">
                <div className="space-y-4">
                   <div className="flex justify-between items-center">
                     <label className="text-sm font-medium flex items-center gap-2">
                       <Users className="w-4 h-4 text-gray-500" /> Workers Needed
                     </label>
                     <Input 
                       type="number" 
                       className="w-20 text-right" 
                       value={workers} 
                       onChange={(e) => setWorkers(Number(e.target.value))} 
                       min={1}
                     />
                   </div>
                   <div className="flex justify-between items-center">
                     <label className="text-sm font-medium flex items-center gap-2">
                       <Clock className="w-4 h-4 text-gray-500" /> Est. Hours
                     </label>
                     <Input 
                       type="number" 
                       className="w-20 text-right" 
                       value={hours} 
                       onChange={(e) => setHours(Number(e.target.value))} 
                       min={1}
                     />
                   </div>
                   <div className="flex justify-between items-center">
                     <label className="text-sm font-medium flex items-center gap-2">
                       <DollarSign className="w-4 h-4 text-gray-500" /> Hourly Rate
                     </label>
                     <Input 
                       type="number" 
                       className="w-20 text-right" 
                       value={payRate} 
                       onChange={(e) => setPayRate(Number(e.target.value))} 
                       min={15}
                     />
                   </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg space-y-2 border border-dashed border-gray-200">
                   <div className="flex justify-between text-sm">
                     <span className="text-muted-foreground">Subtotal</span>
                     <span>${subtotal.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-muted-foreground">Platform Fee (15%)</span>
                     <span>${fee.toFixed(2)}</span>
                   </div>
                   <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                     <span>Total Deposit</span>
                     <span>${total.toFixed(2)}</span>
                   </div>
                   <div className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                     * Held in secure Escrow until completion
                   </div>
                </div>
             </CardContent>
           </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-20">
         <div className="max-w-md mx-auto">
            <Button size="lg" className="w-full font-bold bg-primary hover:bg-primary/90">
              Confirm & Deposit ${total.toFixed(2)}
            </Button>
         </div>
      </div>
    </div>
  );
}
