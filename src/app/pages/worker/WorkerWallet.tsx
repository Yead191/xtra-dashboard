import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowUpRight, ArrowDownLeft, Wallet, CreditCard, History } from "lucide-react";

export function WorkerWallet() {
  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Wallet</h1>
      
      {/* Balance Card */}
      <Card className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 border-none">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-4">
             <div>
               <p className="text-primary-foreground/80 text-sm">Available Balance</p>
               <h2 className="text-4xl font-bold mt-1">$1,240.50</h2>
             </div>
             <div className="bg-white/20 p-2 rounded-lg">
               <Wallet className="w-6 h-6 text-white" />
             </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Button variant="secondary" className="flex-1 bg-white text-primary hover:bg-white/90 border-none">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Withdraw
            </Button>
            <Button variant="outline" className="flex-1 border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
              <History className="w-4 h-4 mr-2" />
              History
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Held Amount */}
      <Card className="bg-gray-50 border-dashed border-2">
        <CardContent className="flex items-center justify-between py-4">
           <div className="flex items-center gap-3">
             <div className="bg-amber-100 p-2 rounded-full">
               <CreditCard className="w-5 h-5 text-amber-600" />
             </div>
             <div>
               <p className="font-semibold text-gray-900">Held in Escrow</p>
               <p className="text-xs text-muted-foreground">Pending job completion</p>
             </div>
           </div>
           <span className="font-bold text-lg text-gray-900">$320.00</span>
        </CardContent>
      </Card>

      {/* Transactions */}
      <div>
        <h3 className="font-semibold mb-3">Recent Transactions</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <ArrowDownLeft className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Payment from Logistics Pro</p>
                  <p className="text-xs text-muted-foreground">Today, 2:30 PM</p>
                </div>
              </div>
              <span className="font-bold text-green-600">+$120.00</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
