import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { ArrowLeft, Globe, Check } from 'lucide-react';
import { US, AE, RU, IL } from 'country-flag-icons/react/3x2';

interface ProviderLanguageSettingsProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', Flag: US },
  { code: 'ar', name: 'Arabic (UAE)', nativeName: 'العربية', Flag: AE },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', Flag: RU },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', Flag: IL },
];

export function ProviderLanguageSettings({ navigate, currentUser }: ProviderLanguageSettingsProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleSave = () => {
    alert('Language updated!');
    navigate('profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate('profile')} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Language</h1>
            <p className="text-xs text-gray-500">Choose your preferred language</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {languages.map((language, index) => (
            <button
              key={language.code}
              onClick={() => setSelectedLanguage(language.code)}
              className={`w-full flex items-center justify-between p-4 ${index > 0 ? 'border-t border-gray-50' : ''} ${selectedLanguage === language.code ? 'bg-blue-50' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-6 flex-shrink-0 shadow-sm rounded-sm overflow-hidden">
                  <language.Flag className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <h4 className={`font-bold text-sm ${selectedLanguage === language.code ? 'text-[#3164E6]' : 'text-gray-900'}`}>
                    {language.name}
                  </h4>
                  <p className="text-xs text-gray-500">{language.nativeName}</p>
                </div>
              </div>
              {selectedLanguage === language.code && (
                <div className="w-6 h-6 bg-[#3164E6] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>

        <button onClick={handleSave} className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200">
          Save Language Preference
        </button>
      </div>
    </div>
  );
}