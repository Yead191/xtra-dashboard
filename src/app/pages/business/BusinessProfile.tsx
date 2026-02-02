import * as React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Building2, CreditCard, FileText, Settings, LogOut } from "lucide-react";

export function BusinessProfile() {
  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <div className="text-center py-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-xl font-bold">Logistics Pro Inc.</h2>
        <p className="text-muted-foreground text-sm">Business Account</p>
      </div>

      <div className="space-y-3">
         <Card className="hover:bg-gray-50 cursor-pointer transition-colors">
            <CardContent className="flex items-center gap-4 p-4">
               <div className="bg-blue-100 p-2 rounded-lg"><CreditCard className="w-5 h-5 text-blue-600" /></div>
               <div className="flex-1">
                 <h3 className="font-semibold text-sm">Payment Methods</h3>
                 <p className="text-xs text-muted-foreground">Visa ending in 4242</p>
               </div>
            </CardContent>
         </Card>
         
         <Card className="hover:bg-gray-50 cursor-pointer transition-colors">
            <CardContent className="flex items-center gap-4 p-4">
               <div className="bg-purple-100 p-2 rounded-lg"><FileText className="w-5 h-5 text-purple-600" /></div>
               <div className="flex-1">
                 <h3 className="font-semibold text-sm">Invoices & Reports</h3>
                 <p className="text-xs text-muted-foreground">Download monthly summaries</p>
               </div>
            </CardContent>
         </Card>

         <Card className="hover:bg-gray-50 cursor-pointer transition-colors">
            <CardContent className="flex items-center gap-4 p-4">
               <div className="bg-gray-100 p-2 rounded-lg"><Settings className="w-5 h-5 text-gray-600" /></div>
               <div className="flex-1">
                 <h3 className="font-semibold text-sm">Settings</h3>
                 <p className="text-xs text-muted-foreground">Notifications, Team members</p>
               </div>
            </CardContent>
         </Card>
      </div>

      <Button variant="destructive" className="w-full mt-8">
         <LogOut className="w-4 h-4 mr-2" /> Sign Out
      </Button>
    </div>
  );
}
