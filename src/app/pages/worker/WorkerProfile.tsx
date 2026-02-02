import * as React from "react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Star, MapPin, UserCheck, Settings, LogOut } from "lucide-react";

export function WorkerProfile() {
  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <div className="flex justify-end">
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </div>
      
      <div className="flex flex-col items-center -mt-4">
        <div className="relative">
           <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary border-4 border-white shadow-lg">
             JD
           </div>
           <div className="absolute bottom-0 right-0 bg-green-500 border-2 border-white p-1 rounded-full">
             <UserCheck className="w-3 h-3 text-white" />
           </div>
        </div>
        <h2 className="text-xl font-bold mt-3">John Doe</h2>
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          <MapPin className="w-3 h-3" /> San Francisco, CA
        </p>
        <div className="flex gap-2 mt-3">
           <Badge variant="outline" className="px-3 py-1 bg-white">Warehouse</Badge>
           <Badge variant="outline" className="px-3 py-1 bg-white">Hospitality</Badge>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white p-3 rounded-xl border text-center shadow-sm">
           <div className="text-2xl font-bold text-primary">4.9</div>
           <div className="text-xs text-muted-foreground flex justify-center items-center gap-1">
             <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Rating
           </div>
        </div>
        <div className="bg-white p-3 rounded-xl border text-center shadow-sm">
           <div className="text-2xl font-bold text-primary">98%</div>
           <div className="text-xs text-muted-foreground">Attendance</div>
        </div>
        <div className="bg-white p-3 rounded-xl border text-center shadow-sm">
           <div className="text-2xl font-bold text-primary">42</div>
           <div className="text-xs text-muted-foreground">Jobs Done</div>
        </div>
      </div>

      <div className="space-y-2">
         <h3 className="font-semibold text-sm ml-1">Account</h3>
         <Button variant="outline" className="w-full justify-start bg-white h-12">
            Verification Status
            <Badge variant="success" className="ml-auto">Verified</Badge>
         </Button>
         <Button variant="outline" className="w-full justify-start bg-white h-12">
            Payment Methods
         </Button>
         <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 h-12">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
         </Button>
      </div>
    </div>
  );
}
