import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, MapPin, Navigation, Check, AlertCircle, Search } from 'lucide-react';

interface WorkerLocationSettingsProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

const popularCities = [
  { name: 'New York, NY', state: 'New York', country: 'USA', coords: '40.7128°N, 74.0060°W' },
  { name: 'Los Angeles, CA', state: 'California', country: 'USA', coords: '34.0522°N, 118.2437°W' },
  { name: 'Chicago, IL', state: 'Illinois', country: 'USA', coords: '41.8781°N, 87.6298°W' },
  { name: 'Houston, TX', state: 'Texas', country: 'USA', coords: '29.7604°N, 95.3698°W' },
  { name: 'Phoenix, AZ', state: 'Arizona', country: 'USA', coords: '33.4484°N, 112.0740°W' },
  { name: 'Philadelphia, PA', state: 'Pennsylvania', country: 'USA', coords: '39.9526°N, 75.1652°W' },
  { name: 'San Antonio, TX', state: 'Texas', country: 'USA', coords: '29.4241°N, 98.4936°W' },
  { name: 'San Diego, CA', state: 'California', country: 'USA', coords: '32.7157°N, 117.1611°W' },
  { name: 'Dallas, TX', state: 'Texas', country: 'USA', coords: '32.7767°N, 96.7970°W' },
  { name: 'San Jose, CA', state: 'California', country: 'USA', coords: '37.3382°N, 121.8863°W' },
];

export function WorkerLocationSettings({ navigate, currentUser }: WorkerLocationSettingsProps) {
  const [selectedLocation, setSelectedLocation] = useState('New York, NY');
  const [searchRadius, setSearchRadius] = useState(10);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredCities = searchQuery
    ? popularCities.filter(city => 
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.state.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularCities;

  const handleDetectLocation = () => {
    setUseCurrentLocation(true);
    // In production: Use geolocation API
    alert('Detecting your current location...');
  };

  const handleSave = () => {
    // In production: API call to update location preferences
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
            <h1 className="text-lg font-bold text-gray-900">Location</h1>
            <p className="text-xs text-gray-500">Set your work location preferences</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Current Location Detection */}
        <button
          onClick={handleDetectLocation}
          className="w-full bg-gradient-to-r from-[#3164E6] to-blue-600 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg shadow-blue-200 hover:shadow-xl transition-all"
        >
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
            <Navigation className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 text-left">
            <h4 className="font-bold text-white mb-1">Use Current Location</h4>
            <p className="text-xs text-blue-100">Automatically detect where you are</p>
          </div>
        </button>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a city..."
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent"
            />
          </div>
        </div>

        {/* Popular Cities */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
            {searchQuery ? 'Search Results' : 'Popular Cities'}
          </h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-h-[400px] overflow-y-auto">
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => {
                const isSelected = selectedLocation === city.name;
                
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedLocation(city.name);
                      setUseCurrentLocation(false);
                    }}
                    className={`w-full flex items-center justify-between p-4 transition-all ${
                      index > 0 ? 'border-t border-gray-50' : ''
                    } ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-[#3164E6] text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h4 className={`font-bold text-sm ${isSelected ? 'text-[#3164E6]' : 'text-gray-900'}`}>
                          {city.name}
                        </h4>
                        <p className="text-xs text-gray-500">{city.state}, {city.country}</p>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 bg-[#3164E6] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500 text-sm">No cities found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>

        {/* Search Radius */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Job Search Radius</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Distance from location</span>
              <span className="text-lg font-bold text-[#3164E6]">{searchRadius} miles</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="5"
              value={searchRadius}
              onChange={(e) => setSearchRadius(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3164E6]"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>5 mi</span>
              <span>25 mi</span>
              <span>50 mi</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 bg-gray-50 p-3 rounded-lg">
            You'll see jobs within {searchRadius} miles of your selected location. Increase the radius to see more opportunities.
          </p>
        </div>

        {/* Location Permissions */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-900 text-sm mb-1">Location Permissions</h4>
              <p className="text-sm text-amber-800 leading-relaxed mb-3">
                Xtra uses your location to verify attendance at job sites and suggest nearby opportunities.
              </p>
              <ul className="space-y-1 text-xs text-amber-800">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span>Enable location services in your device settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span>Allow "Always" or "While Using App" permission</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span>Your privacy is protected - location is only used for verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Current Selection Summary */}
        {selectedLocation && (
          <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-5">
            <h4 className="font-bold text-blue-900 text-sm mb-2">Current Settings</h4>
            <div className="space-y-2 text-sm text-blue-800">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <strong>Location:</strong> {selectedLocation}
              </p>
              <p className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                <strong>Search Radius:</strong> {searchRadius} miles
              </p>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="sticky bottom-0 pt-4 pb-2 bg-gray-50">
          <button
            onClick={handleSave}
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
          >
            Save Location Settings
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full animate-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Location Updated!</h3>
              <p className="text-sm text-gray-600 text-center">
                Your location preferences have been saved successfully.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
