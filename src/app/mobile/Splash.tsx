import { useEffect } from 'react';
import { WorkerRoute } from './WorkerApp';

interface SplashProps {
  navigate: (route: WorkerRoute) => void;
}

export function Splash({ navigate }: SplashProps) {
  useEffect(() => {
    // Simulate loading time then navigate to onboarding
    const timer = setTimeout(() => {
      navigate('onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#3164E6] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      {/* Logo Animation */}
      <div className="relative z-10 flex flex-col items-center animate-bounce-slow">
        <h1 className="text-white text-6xl font-black tracking-tighter mb-2 italic">XTRAA</h1>
        <p className="text-white/90 text-lg tracking-wide font-light">Need extra, find extra</p>
      </div>

      {/* Loading Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce delay-75"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce delay-150"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
}
