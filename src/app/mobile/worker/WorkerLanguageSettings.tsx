import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Globe, Check } from 'lucide-react';
import { US, AE, RU, IL } from 'country-flag-icons/react/3x2';

interface WorkerLanguageSettingsProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', Flag: US },
  { code: 'ar', name: 'Arabic (UAE)', nativeName: 'العربية', Flag: AE },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', Flag: RU },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', Flag: IL },
];

export function WorkerLanguageSettings({ navigate, currentUser }: WorkerLanguageSettingsProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    // In production: API call to update language preference
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('profile');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Language</h1>
            <p className="text-xs text-gray-500">Choose your preferred language</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Info Box */}
        <div className="bg-purple-50 border-2 border-purple-100 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-purple-900 text-sm mb-1">App Language</h4>
              <p className="text-sm text-purple-800 leading-relaxed">
                Select your preferred language. All app content, notifications, and messages will be displayed in this language.
              </p>
            </div>
          </div>
        </div>

        {/* Language List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {languages.map((language, index) => {
            const isSelected = selectedLanguage === language.code;
            
            return (
              <button
                key={language.code}
                onClick={() => setSelectedLanguage(language.code)}
                className={`w-full flex items-center justify-between p-4 transition-all ${
                  index > 0 ? 'border-t border-gray-50' : ''
                } ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-6 flex-shrink-0 shadow-sm rounded-sm overflow-hidden">
                    <language.Flag className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-bold text-sm ${isSelected ? 'text-[#3164E6]' : 'text-gray-900'}`}>
                      {language.name}
                    </h4>
                    <p className="text-xs text-gray-500">{language.nativeName}</p>
                  </div>
                </div>
                {isSelected && (
                  <div className="w-6 h-6 bg-[#3164E6] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-100 rounded-2xl p-5">
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Note:</strong> Job descriptions and messages from clients will remain in their original language. Translation features are coming soon!
          </p>
        </div>

        {/* Save Button */}
        <div className="sticky bottom-0 pt-4 pb-2 bg-gray-50">
          <button
            onClick={handleSave}
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
          >
            Save Language Preference
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full animate-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Language Updated!</h3>
              <p className="text-sm text-gray-600 text-center">
                Your language preference has been saved successfully.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}