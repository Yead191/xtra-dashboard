import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Camera, Check, Plus, X, Award, Briefcase, FileText, User, CheckCircle, ChevronDown, Shield, Upload, File } from 'lucide-react';

interface WorkerEditProfileProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

const AVAILABLE_CATEGORIES = [
  'Waiter', 'Event Staff', 'Security', 'Cleaner', 'Nurse', 'Caregiver', 
  'Hospice Care Caregiver', 'Bartender', 'Cook', 'Driver', 'Retail', 'Tutor'
];

const AVAILABLE_SKILLS = [
  'Professional Service', 'Event Coordination', 'Customer Relations', 'Food Safety',
  'Team Player', 'Time Management', 'Communication', 'Problem Solving',
  'Physical Stamina', 'Attention to Detail', 'Cash Handling', 'Conflict Resolution',
  'First Aid', 'Food Handling', 'POS Systems', 'Inventory Management'
];

export function WorkerEditProfile({ navigate, currentUser }: WorkerEditProfileProps) {
  const [formData, setFormData] = useState({
    name: currentUser.name || 'Sarah Johnson',
    categories: ['Waiter', 'Event Staff'],
    about: 'Experienced hospitality professional with 3+ years in event service. Passionate about creating memorable experiences for guests. CPR certified and ServSafe trained.',
    skills: ['Professional Service', 'Event Coordination', 'Customer Relations', 'Food Safety', 'Team Player'],
    certifications: [
      { id: 1, name: 'ServSafe Certified', verified: true, fileName: 'servsafe_certificate.pdf' },
      { id: 2, name: 'CPR/First Aid', verified: true, fileName: 'cpr_certificate.pdf' },
      { id: 3, name: 'Alcohol Service', verified: false, fileName: 'alcohol_cert.pdf' }
    ]
  });

  const [showCategoryPicker, setShowCategoryPicker] = useState(false);
  const [showSkillPicker, setShowSkillPicker] = useState(false);
  const [newCertification, setNewCertification] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAddCert, setShowAddCert] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');

  const handleSave = () => {
    // In production: API call to update profile
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('profile');
    }, 1500);
  };

  const toggleCategory = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const toggleSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const addCertification = () => {
    if (newCertification.trim() && uploadedFileName) {
      setFormData(prev => ({
        ...prev,
        certifications: [
          ...prev.certifications,
          { id: Date.now(), name: newCertification, verified: false, fileName: uploadedFileName }
        ]
      }));
      setNewCertification('');
      setUploadedFileName('');
      setShowAddCert(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const addCustomSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill)) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }));
      setNewSkill('');
    }
  };

  const removeCertification = (id: number) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(c => c.id !== id)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Edit Profile</h1>
            <p className="text-xs text-gray-500">Update your professional details</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Profile Photo Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-4 h-4 text-[#3164E6]" />
            Profile Photo
          </h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden ring-4 ring-blue-50">
                <img src={currentUser.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <button className="absolute -bottom-1 -right-1 w-10 h-10 bg-[#3164E6] rounded-full flex items-center justify-center border-4 border-white shadow-lg hover:bg-blue-700 transition-colors active:scale-95">
                <Camera className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <button className="w-full bg-blue-50 text-[#3164E6] py-3.5 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors active:scale-[0.98]">
                Change Photo
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">JPG or PNG, max 5MB</p>
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-4 h-4 text-[#3164E6]" />
            Display Name
          </h3>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent text-sm font-medium"
            placeholder="Your full name"
          />
        </div>

        {/* Categories Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#3164E6]" />
              Job Categories
            </h3>
            <button
              onClick={() => setShowCategoryPicker(!showCategoryPicker)}
              className="text-[#3164E6] text-sm font-bold hover:underline flex items-center gap-1"
            >
              {showCategoryPicker ? 'Done' : 'Edit'}
              <ChevronDown className={`w-4 h-4 transition-transform ${showCategoryPicker ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Selected Categories */}
          <div className="flex flex-wrap gap-2 mb-3">
            {formData.categories.map((category) => (
              <div
                key={category}
                className="px-3 py-1.5 rounded-full bg-blue-50 text-[#3164E6] text-xs font-bold flex items-center gap-1.5 border-2 border-blue-100"
              >
                {category}
                {showCategoryPicker && (
                  <button
                    onClick={() => toggleCategory(category)}
                    className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Category Picker */}
          {showCategoryPicker && (
            <div className="border-t-2 border-gray-100 pt-4 mt-4">
              <p className="text-xs text-gray-500 mb-3 font-medium">Add more categories:</p>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_CATEGORIES.filter(cat => !formData.categories.includes(cat)).map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className="px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 text-xs font-medium border-2 border-gray-200 hover:border-[#3164E6] hover:bg-blue-50 hover:text-[#3164E6] transition-colors active:scale-95"
                  >
                    + {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-3">Select categories to appear on your profile</p>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#3164E6]" />
            About
          </h3>
          <textarea
            value={formData.about}
            onChange={(e) => setFormData(prev => ({ ...prev, about: e.target.value }))}
            rows={5}
            maxLength={300}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent text-sm resize-none leading-relaxed"
            placeholder="Tell employers about your experience, skills, and what makes you great at your job..."
          />
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-gray-500">Describe your professional background</p>
            <span className="text-xs text-gray-400">{formData.about.length}/300</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#3164E6]" />
              Skills
            </h3>
            <button
              onClick={() => setShowSkillPicker(!showSkillPicker)}
              className="text-[#3164E6] text-sm font-bold hover:underline flex items-center gap-1"
            >
              {showSkillPicker ? 'Done' : 'Edit'}
              <ChevronDown className={`w-4 h-4 transition-transform ${showSkillPicker ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Selected Skills */}
          <div className="flex flex-wrap gap-2 mb-3">
            {formData.skills.map((skill) => (
              <div
                key={skill}
                className="px-3 py-2 rounded-lg bg-green-50 text-green-700 text-xs font-medium flex items-center gap-2 border border-green-200"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                {skill}
                {showSkillPicker && (
                  <button
                    onClick={() => toggleSkill(skill)}
                    className="hover:bg-green-200 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Skills Picker */}
          {showSkillPicker && (
            <div className="border-t-2 border-gray-100 pt-4 mt-4">
              <p className="text-xs text-gray-500 mb-3 font-medium">Add more skills:</p>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_SKILLS.filter(skill => !formData.skills.includes(skill)).map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className="px-3 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-medium border border-gray-200 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-colors active:scale-95"
                  >
                    + {skill}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add Custom Skill */}
          {showSkillPicker && (
            <div className="mt-4 p-4 bg-green-50 border-2 border-green-100 rounded-xl">
              <label className="block text-xs font-bold text-gray-700 mb-2">Add Custom Skill</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Enter skill name"
                  className="flex-1 px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && addCustomSkill()}
                />
                <button
                  onClick={addCustomSkill}
                  className="px-4 py-2.5 bg-[#3164E6] text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors active:scale-95"
                >
                  Add
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Can't find your skill? Add it here</p>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-3">Highlight your key professional skills</p>
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#3164E6]" />
              Certifications
            </h3>
            <button
              onClick={() => setShowAddCert(!showAddCert)}
              className="w-8 h-8 bg-blue-50 text-[#3164E6] rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors active:scale-95"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add Certification Form */}
          {showAddCert && (
            <div className="mb-4 p-5 bg-blue-50 border-2 border-blue-100 rounded-xl space-y-3">
              <label className="block text-xs font-bold text-gray-700">Add New Certification</label>
              
              {/* Certification Name */}
              <input
                type="text"
                value={newCertification}
                onChange={(e) => setNewCertification(e.target.value)}
                placeholder="e.g., Food Handler License"
                className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent text-sm"
              />
              
              {/* File Upload */}
              <div>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="certification-file"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="certification-file"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-dashed border-gray-300 rounded-lg font-medium text-sm text-gray-600 hover:border-[#3164E6] hover:text-[#3164E6] transition-colors cursor-pointer"
                >
                  <Upload className="w-4 h-4" />
                  {uploadedFileName ? (
                    <span className="text-[#3164E6] font-bold flex items-center gap-2">
                      <File className="w-4 h-4" />
                      {uploadedFileName}
                    </span>
                  ) : (
                    'Upload Certificate File (PDF, JPG, PNG)'
                  )}
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowAddCert(false);
                    setNewCertification('');
                    setUploadedFileName('');
                  }}
                  className="flex-1 px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors active:scale-95"
                >
                  Cancel
                </button>
                <button
                  onClick={addCertification}
                  disabled={!newCertification.trim() || !uploadedFileName}
                  className="flex-1 px-4 py-2.5 bg-[#3164E6] text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Certificate
                </button>
              </div>
              <p className="text-xs text-gray-600">Upload your certificate for verification. Supported formats: PDF, JPG, PNG (max 5MB)</p>
            </div>
          )}

          {/* Certifications List */}
          <div className="space-y-3">
            {formData.certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    cert.verified ? 'bg-blue-100' : 'bg-gray-200'
                  }`}>
                    <Award className={`w-5 h-5 ${cert.verified ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-sm">{cert.name}</div>
                    {cert.verified ? (
                      <div className="flex items-center gap-1 text-xs text-blue-600 font-medium mt-0.5">
                        <Check className="w-3 h-3" />
                        Verified
                      </div>
                    ) : (
                      <button className="text-xs text-gray-500 hover:text-[#3164E6] font-medium mt-0.5 hover:underline">
                        Submit for verification
                      </button>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => removeCertification(cert.id)}
                  className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-100 transition-colors active:scale-95"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong className="font-bold">Pro Tip:</strong> Verified certifications increase your chances of getting hired by 60%!
            </p>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#3164E6] rounded-full flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-blue-900 text-sm mb-1">Keep Your Profile Updated</h4>
              <p className="text-sm text-blue-800 leading-relaxed">
                Complete profiles with verified certifications receive 3x more job offers. Make sure to keep your skills and categories current!
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="sticky bottom-0 pt-4 pb-2 bg-gray-50">
          <button
            onClick={handleSave}
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
          >
            Save Changes
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full animate-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Profile Updated!</h3>
              <p className="text-sm text-gray-600 text-center">
                Your professional profile has been saved successfully.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}