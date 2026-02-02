import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { Home, Search, Briefcase, User, Wallet, MapPin, PlusSquare } from "lucide-react";

type NavType = "WORKER" | "BUSINESS";

interface BottomNavProps {
  type: NavType;
}

export function BottomNav({ type }: BottomNavProps) {
  const location = useLocation();
  const path = location.pathname;

  const workerLinks = [
    { href: "/worker/dashboard", label: "Home", icon: Home },
    { href: "/worker/jobs", label: "Jobs", icon: Search },
    { href: "/worker/active-job", label: "Active", icon: MapPin },
    { href: "/worker/wallet", label: "Wallet", icon: Wallet },
    { href: "/worker/profile", label: "Profile", icon: User },
  ];

  const businessLinks = [
    { href: "/business/dashboard", label: "Home", icon: Home },
    { href: "/business/post-job", label: "Post", icon: PlusSquare },
    { href: "/business/jobs", label: "My Jobs", icon: Briefcase },
    { href: "/business/profile", label: "Profile", icon: User },
  ];

  const links = type === "WORKER" ? workerLinks : businessLinks;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border pb-safe">
      <nav className="flex justify-around items-center h-16">
        {links.map((link) => {
          const isActive = path === link.href;
          const Icon = link.icon;
          
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                isActive 
                  ? "text-primary font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-6 h-6", isActive && "fill-current/20")} />
              <span className="text-[10px]">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
