import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Briefcase, User, ShieldCheck, MapPin } from "lucide-react";
import heroImage from 'figma:asset/e98f5559640f4b7a3ad0c89dc6a04133e4c81781.png';
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 space-y-8">
      <div className="text-center space-y-4 max-w-md">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
            <ShieldCheck className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Work<span className="text-primary">Connect</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          The trust-first marketplace for temporary work. 
          GPS-verified attendance and secure Escrow payments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <Link to="/worker/dashboard" className="w-full">
          <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <User className="w-6 h-6" />
                I am a Worker
              </CardTitle>
              <CardDescription>Find jobs, check-in with GPS, get paid instantly.</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link to="/business/dashboard" className="w-full">
          <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <Briefcase className="w-6 h-6" />
                I am a Business
              </CardTitle>
              <CardDescription>Post jobs, track attendance, secure payments.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>

      <div className="mt-8">
         <Link to="/admin/dashboard">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Admin Portal Login
            </Button>
         </Link>
      </div>
      
      {/* Visual Flair using the imported image */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none w-64 h-64 overflow-hidden">
         <ImageWithFallback src={heroImage} alt="App Preview" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
