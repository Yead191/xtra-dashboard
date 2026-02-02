import * as React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { LayoutDashboard, Users, Building2, Map, ShieldCheck, Settings, LogOut, TrendingUp } from "lucide-react";

export function AdminLayout() {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/services", label: "Services", icon: Building2 },
    { href: "/admin/analytics", label: "Analytics", icon: TrendingUp },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" />
            Admin Panel
          </h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = path === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50">
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8 justify-between md:hidden">
            <span className="font-bold text-lg">WorkConnect Admin</span>
            {/* Mobile menu trigger could go here */}
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
