import { useState } from 'react';
import { WorkerRoute } from './WorkerApp';
import { ChevronRight, Briefcase, Globe, UserCheck, MapPin } from 'lucide-react';

interface OnboardingProps {
  navigate: (route: WorkerRoute) => void;
}

const slides = [
  {
    id: 1,
    title: "Flexible Part-Time Work",
    subtitle: "Perfect for Students",
    description: "Find jobs that fit your schedule. Waiter, Nurse, Security, Cook, Cleaner, and more.",
    image: "https://images.unsplash.com/photo-1647483684830-7ddde27dcf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjB3YWl0ZXJ8ZW58MXx8fHwxNzY3ODE0OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Briefcase
  },
  {
    id: 2,
    title: "Earn Extra Money",
    subtitle: "Secure & Fast",
    description: "Get paid securely for your services. Build your reputation and earn more.",
    image: "https://images.unsplash.com/photo-1514178494750-80c2ed3def1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd29ya2luZyUyMHBhcnQlMjB0aW1lfGVufDF8fHx8MTc2NzgxNDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: UserCheck
  },
  {
    id: 3,
    title: "Set Your Preferences",
    subtitle: "Local Opportunities",
    description: "Tell us where you are and what languages you speak to find the best jobs nearby.",
    image: "https://images.unsplash.com/photo-1758613171176-ea64579c2dcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGRpdmVyc2UlMjBncm91cCUyMG9mJTIwZnJpZW5kc3xlbnwxfHx8fDE3Njc4MTQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Globe
  }
];

export function Onboarding({ navigate }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Location State
  const [country, setCountry] = useState('USA');
  const [city, setCity] = useState('');
  const [language, setLanguage] = useState('English');

  const handleNext = () => {
    if (isAnimating) return;
    
    if (currentSlide < slides.length - 1) {
      setIsAnimating(true);
      setCurrentSlide(curr => curr + 1);
      setTimeout(() => setIsAnimating(false), 500);
    } else {
      // Last slide action - validate if needed
      if (city.trim() === '') {
        // Just a prototype check
        // alert("Please enter your city");
        // For smoother UX, maybe just proceed or focus input. 
        // We'll proceed for now.
      }
      navigate('auth');
    }
  };

  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <div className="min-h-screen bg-black relative flex flex-col overflow-hidden font-sans">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3164E6] via-[#3164E6]/80 to-transparent mix-blend-multiply opacity-90" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-8">
        
        {/* Pagination Indicators */}
        <div className="flex gap-2 mb-6">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-[#56B1F1]' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Text Content */}
        {!isLastSlide ? (
          <div className="mb-6 min-h-[140px]">
            <span className="inline-block px-3 py-1 rounded-full bg-[#56B1F1]/20 text-[#56B1F1] text-xs font-bold uppercase tracking-wider mb-3 border border-[#56B1F1]/30">
              {slides[currentSlide].subtitle}
            </span>
            <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>
        ) : (
          <div className="mb-6 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Your Location</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white/70 text-sm mb-1">Country</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                  <select 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-black/20 border border-white/20 rounded-xl px-10 py-3 text-white appearance-none focus:outline-none focus:border-[#56B1F1]"
                  >
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-1">City</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                  <input 
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city"
                    className="w-full bg-black/20 border border-white/20 rounded-xl px-10 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#56B1F1]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-1">Language</label>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#56B1F1]"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={handleNext}
          className="w-full bg-[#3164E6] hover:bg-[#2550c0] rounded-2xl p-4 flex items-center justify-center shadow-lg active:scale-[0.98] transition-all group border border-white/10"
        >
          <span className="font-bold text-white text-lg mr-2">
            {isLastSlide ? "Get Started" : "Next"}
          </span>
          <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
}
