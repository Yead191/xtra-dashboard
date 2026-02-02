import { useState } from "react";
import {
  Smartphone,
  Briefcase,
  Shield,
  ArrowLeft,
  User,
  Store,
} from "lucide-react";
import { Toaster } from "./components/ui/sonner";

// Web Admin Dashboard
import AdminDashboard from "./admin/AdminDashboard";

type AppMode = "launcher" | "client" | "provider" | "worker" | "admin";

export default function App() {
  const [mode, setMode] = useState<AppMode>("admin");
  console.log(mode);

  if (mode === "admin") {
    return (
      <div className="relative min-h-screen bg-gray-50">
        <AdminDashboard />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">XTRAA</h1>
          <p className="text-gray-500">Select an application to launch</p>
          <div className="mt-2 text-xs text-gray-400">
            Mobile Prototype (430px)
          </div>
        </div>

        <div className="grid gap-4">
          <AppCard
            title="Client App"
            description="Customer interface for booking services"
            icon={<Smartphone className="w-6 h-6 text-blue-600" />}
            colorClass="bg-blue-100"
            onClick={() => setMode("client")}
          />

          <AppCard
            title="Worker App"
            description="Find and manage part-time jobs"
            icon={<User className="w-6 h-6 text-blue-600" />}
            colorClass="bg-blue-100"
            onClick={() => setMode("worker")}
          />

          <AppCard
            title="Business App (Provider)"
            description="Post jobs and hire workers"
            icon={<Store className="w-6 h-6 text-[#3164E6]" />}
            colorClass="bg-blue-100"
            onClick={() => setMode("provider")}
          />

          <AppCard
            title="Admin App"
            description="Platform management dashboard"
            icon={<Shield className="w-6 h-6 text-purple-600" />}
            colorClass="bg-purple-100"
            onClick={() => setMode("admin")}
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

function AppCard({
  title,
  description,
  icon,
  colorClass,
  onClick,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all text-left group"
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-xl ${colorClass} group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </button>
  );
}
