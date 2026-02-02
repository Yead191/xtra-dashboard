import { useState } from 'react';
import {
  LayoutDashboard, Users, Briefcase, DollarSign, Settings,
  Bell, Search, Menu, X, TrendingUp, TrendingDown,
  UserCheck, UserX, Clock, CheckCircle, AlertCircle,
  BarChart3, PieChart, Activity, Calendar, Download,
  Filter, MoreVertical, ChevronRight, Star, MapPin,
  Shield, Flag, CreditCard, Eye, Ban, RefreshCw, MessageSquare,
  Send, Paperclip, Image, MoreHorizontal, Phone, Video, Info,
  FileText, Plus, Edit, Trash2, Save, Upload, Smartphone
} from 'lucide-react';

type AdminPage = 'dashboard' | 'workers' | 'providers' | 'jobs' | 'finances' | 'reports' | 'messages' | 'cms' | 'settings' | 'pending';

export default function AdminDashboard() {
  const [currentPage, setCurrentPage] = useState<AdminPage>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
            {sidebarOpen && <h1 className="text-xl font-bold text-gray-900">XTRA Admin</h1>}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            <NavItem
              icon={<LayoutDashboard className="w-5 h-5" />}
              label="Dashboard"
              active={currentPage === 'dashboard'}
              collapsed={!sidebarOpen}
              onClick={() => setCurrentPage('dashboard')}
            />
            <NavItem
              icon={<Users className="w-5 h-5" />}
              label="Workers"
              badge="245"
              active={currentPage === 'workers'}
              collapsed={!sidebarOpen}
              onClick={() => setCurrentPage('workers')}
            />
            <NavItem
              icon={<Briefcase className="w-5 h-5" />}
              label="Providers"
              badge="89"
              active={currentPage === 'providers'}
              collapsed={!sidebarOpen}
              onClick={() => setCurrentPage('providers')}
            />
            <NavItem
              icon={<Calendar className="w-5 h-5" />}
              label="Jobs"
              badge="156"
              active={currentPage === 'jobs'}
              collapsed={!sidebarOpen}
              onClick={() => setCurrentPage('jobs')}
            />
            <NavItem
              icon={<DollarSign className="w-5 h-5" />}
              label="Finances"
              active={currentPage === 'finances'}
              collapsed={!sidebarOpen}
              onClick={() => setCurrentPage('finances')}
            />
            <NavItem
              icon={<BarChart3 className="w-5 h-5" />}
              label="Reports"
              active={currentPage === 'reports'}
              collapsed={!sidebarOpen}
              onClick={() => setCurrentPage('reports')}
            />
            <NavItem
              icon={<MessageSquare className="w-5 h-5" />}
              label="Messages"
              active={currentPage === 'messages'}
              collapsed={!sidebarOpen}
              onClick={() => setCurrentPage('messages')}
            />
            <NavItem
              icon={<FileText className="w-5 h-5" />}
              label="CMS"
              active={currentPage === 'cms'}
              collapsed={!sidebarOpen}
              onClick={() => setCurrentPage('cms')}
            />
            <NavItem
              icon={<UserCheck className="w-5 h-5" />}
              label="Pending Approvals"
              badge="12"
              badgeColor="orange"
              active={currentPage === 'pending'}
              collapsed={!sidebarOpen}
              onClick={() => setCurrentPage('pending')}
            />
            <div className="pt-4 mt-4 border-t border-gray-200">
              <NavItem
                icon={<Settings className="w-5 h-5" />}
                label="Settings"
                active={currentPage === 'settings'}
                collapsed={!sidebarOpen}
                onClick={() => setCurrentPage('settings')}
              />
            </div>
          </nav>

          {/* User Profile */}
          <div className={`p-4 border-t border-gray-200 ${!sidebarOpen && 'hidden'}`}>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                alt="Admin"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@xtra.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search workers, providers, jobs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Notifications Panel */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl border border-gray-200 shadow-2xl z-50 max-h-[500px] overflow-hidden flex flex-col">
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">Notifications</h3>
                    <button className="text-xs text-blue-600 font-medium hover:underline">Mark all read</button>
                  </div>
                  <div className="overflow-y-auto flex-1">
                    <NotificationItem
                      type="warning"
                      title="Worker Flagged"
                      message="Lisa Anderson has received 3 penalties this week"
                      time="5 min ago"
                      unread
                    />
                    <NotificationItem
                      type="success"
                      title="Job Completed"
                      message="Sarah Johnson completed Event Waiter job at Downtown Event Center"
                      time="1 hour ago"
                      unread
                    />
                    <NotificationItem
                      type="info"
                      title="New Provider Registration"
                      message="Tech Startup Co. registered as a new provider"
                      time="2 hours ago"
                    />
                    <NotificationItem
                      type="alert"
                      title="Payment Dispute"
                      message="Provider ABC Corp has disputed payment for Job #1045"
                      time="3 hours ago"
                    />
                    <NotificationItem
                      type="info"
                      title="Worker Application"
                      message="5 new workers applied and pending verification"
                      time="5 hours ago"
                    />
                  </div>
                  <div className="p-3 border-t border-gray-200">
                    <button className="w-full text-center text-sm text-blue-600 font-medium hover:underline">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="w-px h-6 bg-gray-200"></div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Today:</span>
              <span className="text-sm font-semibold text-gray-900">Feb 2, 2026</span>
            </div>

            <div className="w-px h-6 bg-gray-200"></div>

            {/* Admin Profile */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 transition-colors"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                  alt="Admin"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-left hidden lg:block">
                  <p className="text-sm font-semibold text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-2xl z-50">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                        alt="Admin"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-gray-900">Admin User</p>
                        <p className="text-sm text-gray-500">admin@xtra.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <button 
                      onClick={() => { setShowProfileMenu(false); setCurrentPage('settings'); }}
                      className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                    >
                      <Settings className="w-4 h-4" />
                      <span className="text-sm font-medium">Settings</span>
                    </button>
                    <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm font-medium">Security</span>
                    </button>
                    <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                      <Bell className="w-4 h-4" />
                      <span className="text-sm font-medium">Notification Preferences</span>
                    </button>
                  </div>
                  <div className="border-t border-gray-200 py-2">
                    <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-red-600">
                      <X className="w-4 h-4" />
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {currentPage === 'dashboard' && <DashboardPage />}
          {currentPage === 'workers' && <WorkersPage />}
          {currentPage === 'providers' && <ProvidersPage />}
          {currentPage === 'jobs' && <JobsPage />}
          {currentPage === 'finances' && <FinancesPage />}
          {currentPage === 'reports' && <ReportsPage />}
          {currentPage === 'messages' && <MessagesPage />}
          {currentPage === 'cms' && <CMSPage />}
          {currentPage === 'pending' && <PendingRegistrationsPage />}
          {currentPage === 'settings' && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}

function NotificationItem({ type, title, message, time, unread }: {
  type: 'success' | 'warning' | 'alert' | 'info';
  title: string;
  message: string;
  time: string;
  unread?: boolean;
}) {
  const iconBg = {
    success: 'bg-green-100',
    warning: 'bg-yellow-100',
    alert: 'bg-red-100',
    info: 'bg-blue-100',
  }[type];

  const iconColor = {
    success: 'text-green-600',
    warning: 'text-yellow-600',
    alert: 'text-red-600',
    info: 'text-blue-600',
  }[type];

  const Icon = {
    success: CheckCircle,
    warning: AlertCircle,
    alert: AlertCircle,
    info: Info,
  }[type];

  return (
    <div className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${unread ? 'bg-blue-50/30' : ''}`}>
      <div className="flex gap-3">
        <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className="font-semibold text-gray-900 text-sm">{title}</p>
            {unread && <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1"></span>}
          </div>
          <p className="text-sm text-gray-600 mt-0.5">{message}</p>
          <p className="text-xs text-gray-400 mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, badge, badgeColor = 'gray', active, collapsed, onClick }: {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  badgeColor?: 'gray' | 'orange' | 'blue';
  active: boolean;
  collapsed: boolean;
  onClick: () => void;
}) {
  const badgeColors = {
    gray: active ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600',
    orange: 'bg-orange-100 text-orange-700',
    blue: 'bg-blue-100 text-blue-700',
  };

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
        active
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-700 hover:bg-gray-50'
      }`}
      title={collapsed ? label : undefined}
    >
      {icon}
      {!collapsed && (
        <>
          <span className="flex-1 text-left font-medium">{label}</span>
          {badge && (
            <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${badgeColors[badgeColor]}`}>
              {badge}
            </span>
          )}
        </>
      )}
    </button>
  );
}

function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="$48,574"
          change="+12.5%"
          trend="up"
          icon={<DollarSign className="w-6 h-6" />}
          color="green"
        />
        <StatCard
          title="Active Jobs"
          value="156"
          change="+8"
          trend="up"
          icon={<Briefcase className="w-6 h-6" />}
          color="blue"
        />
        <StatCard
          title="Active Workers"
          value="245"
          change="-3"
          trend="down"
          icon={<UserCheck className="w-6 h-6" />}
          color="purple"
        />
        <StatCard
          title="Providers"
          value="89"
          change="+5"
          trend="up"
          icon={<Users className="w-6 h-6" />}
          color="orange"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Revenue Overview</h3>
              <p className="text-sm text-gray-500 mt-1">Last 7 days</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="h-64 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400">
              <span>$10k</span>
              <span>$7.5k</span>
              <span>$5k</span>
              <span>$2.5k</span>
              <span>$0</span>
            </div>
            
            {/* Chart bars */}
            <div className="h-full flex items-end justify-between gap-3 ml-12 mb-8">
              {[
                { height: 65, value: '$6,540' },
                { height: 45, value: '$4,320' },
                { height: 75, value: '$7,650' },
                { height: 55, value: '$5,430' },
                { height: 85, value: '$8,760' },
                { height: 70, value: '$7,120' },
                { height: 90, value: '$9,254' }
              ].map((data, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                    {data.value}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                  
                  {/* Bar */}
                  <div 
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 cursor-pointer relative overflow-hidden group-hover:shadow-lg"
                    style={{ height: `${data.height}%` }}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  
                  {/* Day label */}
                  <span className="text-xs text-gray-500 font-medium">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Grid lines */}
            <div className="absolute left-12 right-0 top-0 bottom-8 pointer-events-none">
              {[0, 25, 50, 75, 100].map((position) => (
                <div 
                  key={position}
                  className="absolute left-0 right-0 border-t border-gray-100"
                  style={{ top: `${100 - position}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Categories */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Job Categories</h3>
              <p className="text-sm text-gray-500 mt-1">Distribution by type</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="space-y-4">
            <CategoryBar label="Waiter" percentage={35} count="54" color="bg-blue-500" />
            <CategoryBar label="Security" percentage={25} count="39" color="bg-purple-500" />
            <CategoryBar label="Nurse" percentage={20} count="31" color="bg-green-500" />
            <CategoryBar label="Cleaner" percentage={15} count="23" color="bg-orange-500" />
            <CategoryBar label="Other" percentage={5} count="9" color="bg-gray-400" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Jobs */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Recent Jobs</h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View all
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            <JobItem
              title="Event Waiter"
              provider="Downtown Event Center"
              workers="3/3"
              status="in-progress"
              payment="$360"
            />
            <JobItem
              title="Security Guard - Night Shift"
              provider="Corporate Plaza"
              workers="1/2"
              status="posted"
              payment="$320"
            />
            <JobItem
              title="Private Nurse"
              provider="Medical Center"
              workers="2/2"
              status="completed"
              payment="$360"
            />
            <JobItem
              title="Office Cleaning"
              provider="Tech Startup Co."
              workers="4/5"
              status="posted"
              payment="$400"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Today's Activity</h3>
            <div className="space-y-4">
              <QuickStat icon={<CheckCircle className="w-5 h-5 text-green-600" />} label="Completed Jobs" value="12" />
              <QuickStat icon={<Clock className="w-5 h-5 text-blue-600" />} label="Active Jobs" value="34" />
              <QuickStat icon={<AlertCircle className="w-5 h-5 text-orange-600" />} label="Pending Issues" value="3" />
              <QuickStat icon={<UserCheck className="w-5 h-5 text-purple-600" />} label="New Sign-ups" value="8" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <Shield className="w-8 h-8 mb-3 opacity-80" />
            <h3 className="text-lg font-bold mb-2">Platform Health</h3>
            <p className="text-blue-100 text-sm mb-4">All systems operational</p>
            <div className="flex items-center gap-2 text-sm">
              <Activity className="w-4 h-4" />
              <span className="opacity-90">99.9% uptime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkersPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive' | 'flagged'>('all');
  const [selectedWorker, setSelectedWorker] = useState<string | null>(null);
  const [workerToBan, setWorkerToBan] = useState<any>(null);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [bannedWorkerName, setBannedWorkerName] = useState('');

  const handleBanSuccess = () => {
    setBannedWorkerName(workerToBan.name);
    setWorkerToBan(null);
    setShowSuccessNotification(true);
    setTimeout(() => setShowSuccessNotification(false), 5000);
  };

  if (selectedWorker) {
    return <WorkerDetailsPage workerId={selectedWorker} onBack={() => setSelectedWorker(null)} />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Worker Management</h1>
          <p className="text-gray-500 mt-1">Manage and monitor all workers on the platform</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Data
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <FilterButton label="All Workers" count={245} active={filter === 'all'} onClick={() => setFilter('all')} />
        <FilterButton label="Active" count={198} active={filter === 'active'} onClick={() => setFilter('active')} />
        <FilterButton label="Inactive" count={43} active={filter === 'inactive'} onClick={() => setFilter('inactive')} />
        <FilterButton label="Flagged" count={4} active={filter === 'flagged'} onClick={() => setFilter('flagged')} color="red" />
      </div>

      {/* Workers Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Worker</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Rating</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Jobs Completed</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Penalties</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Reports</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Earnings</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <WorkerRow
              name="Sarah Johnson"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
              rating={4.9}
              jobs={24}
              penalties={0}
              reports={0}
              earnings="$2,880"
              status="active"
              onView={() => setSelectedWorker('1')}
              onBan={setWorkerToBan}
            />
            <WorkerRow
              name="Michael Chen"
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
              rating={4.7}
              jobs={18}
              penalties={1}
              reports={1}
              earnings="$2,160"
              status="active"
              onView={() => setSelectedWorker('2')}
              onBan={setWorkerToBan}
            />
            <WorkerRow
              name="Emma Rodriguez"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
              rating={5.0}
              jobs={36}
              penalties={0}
              reports={0}
              earnings="$4,320"
              status="active"
              onView={() => setSelectedWorker('3')}
              onBan={setWorkerToBan}
            />
            <WorkerRow
              name="James Wilson"
              avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
              rating={4.5}
              jobs={12}
              penalties={2}
              reports={2}
              earnings="$1,440"
              status="inactive"
              onView={() => setSelectedWorker('4')}
              onBan={setWorkerToBan}
            />
            <WorkerRow
              name="Lisa Anderson"
              avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
              rating={3.8}
              jobs={5}
              penalties={5}
              reports={3}
              earnings="$600"
              status="flagged"
              onView={() => setSelectedWorker('5')}
              onBan={setWorkerToBan}
            />
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing 1-5 of 245 workers</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium">1</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">2</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">3</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>

      {/* Ban Modal */}
      {workerToBan && (
        <BanWorkerModal
          worker={workerToBan}
          onClose={() => setWorkerToBan(null)}
          onSuccess={handleBanSuccess}
        />
      )}

      {/* Success Notification */}
      {showSuccessNotification && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50 animate-slide-up">
          <CheckCircle className="w-5 h-5" />
          <div>
            <p className="font-semibold">Worker Suspended Successfully</p>
            <p className="text-sm text-green-100">{bannedWorkerName} has been suspended from the platform.</p>
          </div>
          <button onClick={() => setShowSuccessNotification(false)} className="ml-4 hover:bg-green-700 p-1 rounded">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function ProvidersPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  if (selectedProvider) {
    return <ProviderDetailsPage providerId={selectedProvider} onBack={() => setSelectedProvider(null)} />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Provider Management</h1>
          <p className="text-gray-500 mt-1">Manage and monitor all providers on the platform</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Add Provider
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <FilterButton label="All Providers" count={89} active={filter === 'all'} onClick={() => setFilter('all')} />
        <FilterButton label="Active" count={78} active={filter === 'active'} onClick={() => setFilter('active')} />
        <FilterButton label="Inactive" count={11} active={filter === 'inactive'} onClick={() => setFilter('inactive')} />
      </div>

      {/* Providers Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Provider</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Rating</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Active Jobs</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Jobs</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Reports</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Spent</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <ProviderRow
              name="Downtown Event Center"
              category="Events"
              rating={4.8}
              activeJobs={5}
              totalJobs={23}
              reports={0}
              spent="$12,450"
              onView={() => setSelectedProvider('1')}
            />
            <ProviderRow
              name="Medical Center"
              category="Healthcare"
              rating={4.9}
              activeJobs={3}
              totalJobs={15}
              reports={0}
              spent="$8,760"
              onView={() => setSelectedProvider('2')}
            />
            <ProviderRow
              name="Corporate Plaza"
              category="Security"
              rating={4.6}
              activeJobs={2}
              totalJobs={18}
              reports={1}
              spent="$9,320"
              onView={() => setSelectedProvider('3')}
            />
            <ProviderRow
              name="Tech Startup Co."
              category="Cleaning"
              rating={4.7}
              activeJobs={4}
              totalJobs={12}
              reports={2}
              spent="$5,440"
              onView={() => setSelectedProvider('4')}
            />
            <ProviderRow
              name="Grand Hotel"
              category="Hospitality"
              rating={4.9}
              activeJobs={6}
              totalJobs={31}
              reports={0}
              spent="$15,780"
              onView={() => setSelectedProvider('5')}
            />
            <ProviderRow
              name="City Convention Hall"
              category="Events"
              rating={4.5}
              activeJobs={3}
              totalJobs={9}
              spent="$4,230"
              onView={() => setSelectedProvider('6')}
            />
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing 1-6 of 89 providers</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium">1</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">2</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">3</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  if (selectedJob) {
    return <JobDetailsPage jobId={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Monitoring</h1>
          <p className="text-gray-500 mt-1">Track all jobs across the platform</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Refresh
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Posted</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">47</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">In Progress</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">34</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">62</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Issues</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">All Jobs</h3>
        </div>
        <div className="divide-y divide-gray-200">
          <JobDetailRow
            jobId="JOB-1024"
            title="Event Waiter"
            provider="Downtown Event Center"
            category="Waiter"
            date="Today, 2:00 PM"
            workers="3/3"
            payment="$360"
            status="in-progress"
            onView={() => setSelectedJob('JOB-1024')}
          />
          <JobDetailRow
            jobId="JOB-1023"
            title="Security Guard - Night Shift"
            provider="Corporate Plaza"
            category="Security"
            date="Tomorrow, 10:00 PM"
            workers="1/2"
            payment="$320"
            status="posted"
            onView={() => setSelectedJob('JOB-1023')}
          />
          <JobDetailRow
            jobId="JOB-1022"
            title="Private Nurse"
            provider="Medical Center"
            category="Nurse"
            date="Yesterday, 9:00 AM"
            workers="2/2"
            payment="$360"
            status="completed"
            onView={() => setSelectedJob('JOB-1022')}
          />
          <JobDetailRow
            jobId="JOB-1021"
            title="Office Cleaning"
            provider="Tech Startup Co."
            category="Cleaner"
            date="Jan 8, 6:00 PM"
            workers="4/5"
            payment="$400"
            status="posted"
            onView={() => setSelectedJob('JOB-1021')}
          />
        </div>
      </div>
    </div>
  );
}

function FinancesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Financial Overview</h1>
          <p className="text-gray-500 mt-1">Revenue, payouts, and platform fees</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Report
        </button>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-8 h-8 opacity-80" />
            <span className="text-green-100 text-sm font-medium">+12.5% vs last month</span>
          </div>
          <p className="text-green-100 text-sm mb-1">Total Revenue</p>
          <p className="text-3xl font-bold">$48,574</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs text-gray-500">This month</span>
          </div>
          <p className="text-sm text-gray-500 mb-1">Platform Fees</p>
          <p className="text-2xl font-bold text-gray-900">$4,857</p>
          <p className="text-xs text-gray-500 mt-2">10% commission</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-xs text-gray-500">This month</span>
          </div>
          <p className="text-sm text-gray-500 mb-1">Worker Payouts</p>
          <p className="text-2xl font-bold text-gray-900">$43,717</p>
          <p className="text-xs text-gray-500 mt-2">156 transactions</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Recent Transactions</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all</button>
        </div>
        <div className="divide-y divide-gray-200">
          <TransactionRow
            type="payout"
            description="Worker payout - Sarah Johnson"
            job="Event Waiter"
            amount="-$120"
            status="completed"
            date="2 hours ago"
          />
          <TransactionRow
            type="revenue"
            description="Job payment - Downtown Event Center"
            job="Event Waiter"
            amount="+$360"
            status="completed"
            date="3 hours ago"
          />
          <TransactionRow
            type="payout"
            description="Worker payout - Michael Chen"
            job="Private Nurse"
            amount="-$180"
            status="pending"
            date="5 hours ago"
          />
          <TransactionRow
            type="fee"
            description="Platform fee"
            job="Security Guard"
            amount="+$32"
            status="completed"
            date="1 day ago"
          />
        </div>
      </div>
    </div>
  );
}

function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
        <p className="text-gray-500 mt-1">Detailed insights and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Platform Growth</h3>
          <div className="space-y-4">
            <GrowthMetric label="New Workers" current={45} previous={38} />
            <GrowthMetric label="New Providers" current={12} previous={9} />
            <GrowthMetric label="Jobs Posted" current={87} previous={76} />
            <GrowthMetric label="Jobs Completed" current={124} previous={118} />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Top Performers</h3>
          <div className="space-y-3">
            <TopPerformer rank={1} name="Sarah Johnson" category="Waiter" jobs={24} rating={4.9} />
            <TopPerformer rank={2} name="Emma Rodriguez" category="Waiter" jobs={36} rating={5.0} />
            <TopPerformer rank={3} name="Dr. Patricia Moore" category="Nurse" jobs={42} rating={4.9} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Export Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left group">
            <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mb-2" />
            <p className="font-semibold text-gray-900">User Report</p>
            <p className="text-xs text-gray-500 mt-1">All workers and providers</p>
          </button>
          <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left group">
            <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mb-2" />
            <p className="font-semibold text-gray-900">Financial Report</p>
            <p className="text-xs text-gray-500 mt-1">Revenue and transactions</p>
          </button>
          <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left group">
            <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mb-2" />
            <p className="font-semibold text-gray-900">Job Report</p>
            <p className="text-xs text-gray-500 mt-1">All jobs and analytics</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>('1');
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      role: 'Worker',
      lastMessage: 'Thank you for your help!',
      time: '2m ago',
      unread: 2,
      online: true
    },
    {
      id: '2',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      role: 'Worker',
      lastMessage: 'I need help with payment issue',
      time: '1h ago',
      unread: 1,
      online: false
    },
    {
      id: '3',
      name: 'Downtown Event Center',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100',
      role: 'Provider',
      lastMessage: 'Can we reschedule the job?',
      time: '3h ago',
      unread: 0,
      online: true
    },
    {
      id: '4',
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      role: 'Worker',
      lastMessage: 'All set for tomorrow!',
      time: '5h ago',
      unread: 0,
      online: false
    },
  ];

  const messages = selectedConversation === '1' ? [
    {
      id: 1,
      sender: 'user',
      text: 'Hello! I have a question about my payment for the Event Waiter job last weekend.',
      time: '10:30 AM',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    },
    {
      id: 2,
      sender: 'admin',
      text: 'Hi Sarah! I\'d be happy to help you with that. Can you please provide me with the job ID or date?',
      time: '10:32 AM'
    },
    {
      id: 3,
      sender: 'user',
      text: 'Sure! It was on January 8th, 2026. The job was at Downtown Event Center.',
      time: '10:33 AM',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    },
    {
      id: 4,
      sender: 'admin',
      text: 'Perfect! Let me check that for you. I can see the job here - you worked 6 hours at $20/hour.',
      time: '10:35 AM'
    },
    {
      id: 5,
      sender: 'admin',
      text: 'The payment of $120 was processed on January 9th. It should appear in your account within 2-3 business days.',
      time: '10:35 AM'
    },
    {
      id: 6,
      sender: 'user',
      text: 'Oh I see! I just checked my bank and it arrived this morning. Thank you for your help!',
      time: '10:37 AM',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    },
    {
      id: 7,
      sender: 'admin',
      text: 'Wonderful! Is there anything else I can help you with today?',
      time: '10:38 AM'
    },
    {
      id: 8,
      sender: 'user',
      text: 'No that\'s all, you\'ve been very helpful. Have a great day!',
      time: '10:39 AM',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    },
  ] : selectedConversation === '2' ? [
    {
      id: 1,
      sender: 'user',
      text: 'Hi, I\'m experiencing issues with receiving payment for my last 3 jobs.',
      time: '9:15 AM',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    {
      id: 2,
      sender: 'admin',
      text: 'I\'m sorry to hear that! Let me look into this right away. Can you tell me which jobs you\'re referring to?',
      time: '10:20 AM'
    },
    {
      id: 3,
      sender: 'user',
      text: 'The three security guard jobs I did on Jan 5, 6, and 7. Total should be $480.',
      time: '10:22 AM',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    {
      id: 4,
      sender: 'admin',
      text: 'I see the issue - there was a processing delay from the provider. I\'m escalating this to our finance team now.',
      time: '10:25 AM'
    },
    {
      id: 5,
      sender: 'admin',
      text: 'You should receive the payment within the next 24 hours. I\'ll send you a confirmation email once it\'s processed.',
      time: '10:26 AM'
    },
  ] : [
    {
      id: 1,
      sender: 'user',
      text: 'Hi Admin, we need to reschedule the event from this Saturday to next Saturday. Is that possible?',
      time: 'Yesterday, 2:45 PM',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100'
    },
    {
      id: 2,
      sender: 'admin',
      text: 'Hello! I can help you with that. However, you\'ll need to contact the workers who already accepted the job to confirm their availability.',
      time: 'Yesterday, 3:10 PM'
    },
    {
      id: 3,
      sender: 'user',
      text: 'Understood. Can you help me reach out to them?',
      time: 'Yesterday, 3:15 PM',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100'
    },
    {
      id: 4,
      sender: 'admin',
      text: 'I\'ve sent notifications to all 3 workers. I\'ll update you once they respond.',
      time: 'Yesterday, 3:20 PM'
    },
  ];

  const selectedConvo = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="h-[calc(100vh-140px)]">
      <div className="bg-white rounded-xl border border-gray-200 h-full flex overflow-hidden">
        {/* Left Sidebar - Conversations List */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 text-left ${
                  selectedConversation === conv.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={conv.avatar}
                    alt={conv.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {conv.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">{conv.name}</h3>
                    <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{conv.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <span className="ml-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${
                    conv.role === 'Worker' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {conv.role}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Chat View */}
        {selectedConvo ? (
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={selectedConvo.avatar}
                    alt={selectedConvo.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {selectedConvo.online && (
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{selectedConvo.name}</h3>
                  <p className="text-xs text-gray-500">
                    {selectedConvo.online ? 'Online' : 'Offline'} • {selectedConvo.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="Call">
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="Video">
                  <Video className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="Info">
                  <Info className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-end gap-2 ${
                    message.sender === 'admin' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'user' && message.avatar && (
                    <img
                      src={message.avatar}
                      alt="User"
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                  <div className={`flex flex-col ${message.sender === 'admin' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`max-w-md px-4 py-2.5 rounded-2xl ${
                        message.sender === 'admin'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-white text-gray-900 border border-gray-200 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 px-1">{message.time}</span>
                  </div>
                  {message.sender === 'admin' && (
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                      alt="Admin"
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-end gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                  <Paperclip className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                  <Image className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex-1 relative">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message..."
                    rows={1}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (messageText.trim()) {
                          console.log('Send message:', messageText);
                          setMessageText('');
                        }
                      }
                    }}
                  />
                </div>
                <button 
                  className="p-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!messageText.trim()}
                  onClick={() => {
                    if (messageText.trim()) {
                      console.log('Send message:', messageText);
                      setMessageText('');
                    }
                  }}
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift + Enter for new line</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Conversation Selected</h3>
              <p className="text-sm text-gray-500">Choose a conversation from the list to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CMSPage() {
  const [activeTab, setActiveTab] = useState<'content' | 'categories' | 'onboarding'>('content');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Content Management System</h1>
        <p className="text-gray-500 mt-1">Manage app content, categories, and onboarding</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('content')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'content'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Page Content
            </div>
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'categories'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Job Categories
            </div>
          </button>
          <button
            onClick={() => setActiveTab('onboarding')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'onboarding'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Onboarding Screens
            </div>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'content' && <ContentManagement />}
      {activeTab === 'categories' && <CategoryManagement />}
      {activeTab === 'onboarding' && <OnboardingManagement />}
    </div>
  );
}

function ContentManagement() {
  const [contentTab, setContentTab] = useState<'faq' | 'privacy' | 'terms' | 'about'>('faq');

  return (
    <div className="space-y-6">
      {/* Content Type Tabs */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setContentTab('faq')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            contentTab === 'faq'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          FAQ
        </button>
        <button
          onClick={() => setContentTab('privacy')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            contentTab === 'privacy'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setContentTab('terms')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            contentTab === 'terms'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => setContentTab('about')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            contentTab === 'about'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          About Us
        </button>
      </div>

      {contentTab === 'faq' && <FAQContent />}
      {contentTab === 'privacy' && <PrivacyContent />}
      {contentTab === 'terms' && <TermsContent />}
      {contentTab === 'about' && <AboutContent />}
    </div>
  );
}

function FAQContent() {
  const [userType, setUserType] = useState<'worker' | 'provider'>('worker');

  return (
    <div className="space-y-6">
      {/* User Type Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setUserType('worker')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            userType === 'worker'
              ? 'bg-purple-100 text-purple-700'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Worker FAQ
          </div>
        </button>
        <button
          onClick={() => setUserType('provider')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            userType === 'provider'
              ? 'bg-purple-100 text-purple-700'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Provider FAQ
          </div>
        </button>
        <div className="flex-1"></div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add FAQ Item
        </button>
      </div>

      {/* FAQ List */}
      <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
        <FAQItem
          question="How do I get paid?"
          answer="Payments are processed within 24-48 hours after job completion. You can track your earnings in the Wallet section."
          userType={userType}
        />
        <FAQItem
          question="Can I cancel a job?"
          answer="Yes, you can cancel a job up to 2 hours before it starts. Multiple cancellations may affect your account status."
          userType={userType}
        />
        <FAQItem
          question="What if I'm running late?"
          answer="Contact the provider immediately through the chat feature. Being late without notice may result in negative reviews."
          userType={userType}
        />
        <FAQItem
          question="How does verification work?"
          answer="Upload a government ID and take a selfie. Verification usually takes 2-4 hours. You must be verified to apply for jobs."
          userType={userType}
        />
      </div>
    </div>
  );
}

function FAQItem({ question, answer, userType }: { question: string; answer: string; userType: string }) {
  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-2">{question}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors" title="Edit">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors" title="Delete">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-gray-900">Privacy Policy</h3>
          <p className="text-sm text-gray-500 mt-1">Last updated: Jan 10, 2026</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
      <textarea
        className="w-full h-96 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
        placeholder="Enter privacy policy content here..."
        defaultValue="Privacy Policy Content\n\nWe collect and process your personal information to provide our services...\n\n1. Information Collection\n2. Data Usage\n3. Data Protection\n4. User Rights"
      />
    </div>
  );
}

function TermsContent() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-gray-900">Terms & Conditions</h3>
          <p className="text-sm text-gray-500 mt-1">Last updated: Jan 10, 2026</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
      <textarea
        className="w-full h-96 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
        placeholder="Enter terms & conditions content here..."
        defaultValue="Terms & Conditions\n\nBy using XTRA, you agree to the following terms...\n\n1. Account Registration\n2. User Responsibilities\n3. Payment Terms\n4. Cancellation Policy"
      />
    </div>
  );
}

function AboutContent() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-gray-900">About Us</h3>
          <p className="text-sm text-gray-500 mt-1">Company information and story</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
      <textarea
        className="w-full h-96 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
        placeholder="Enter about us content here..."
        defaultValue="About XTRA\n\nXTRA connects students with flexible part-time work opportunities...\n\nOur Mission\nOur Vision\nOur Values"
      />
    </div>
  );
}

function CategoryManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Manage job categories and their icons</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CategoryCard
          name="Waiter"
          icon="🍽️"
          jobCount={54}
          color="bg-blue-100"
        />
        <CategoryCard
          name="Security"
          icon="🛡️"
          jobCount={39}
          color="bg-purple-100"
        />
        <CategoryCard
          name="Nurse"
          icon="⚕️"
          jobCount={31}
          color="bg-green-100"
        />
        <CategoryCard
          name="Cleaner"
          icon="🧹"
          jobCount={23}
          color="bg-orange-100"
        />
        <CategoryCard
          name="Driver"
          icon="🚗"
          jobCount={18}
          color="bg-red-100"
        />
        <CategoryCard
          name="Teacher"
          icon="📚"
          jobCount={15}
          color="bg-yellow-100"
        />
      </div>
    </div>
  );
}

function CategoryCard({ name, icon, jobCount, color }: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center text-3xl`}>
          {icon}
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors" title="Edit">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors" title="Delete">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-500">{jobCount} active jobs</p>
      <button className="mt-4 w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
        <Upload className="w-4 h-4" />
        Change Icon
      </button>
    </div>
  );
}

function OnboardingManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Manage onboarding screens shown to new users</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Screen
        </button>
      </div>

      {/* Onboarding Screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OnboardingScreenCard
          order={1}
          title="Find Part-Time Work"
          description="Browse hundreds of flexible jobs that fit your schedule"
          imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
        />
        <OnboardingScreenCard
          order={2}
          title="Easy Application"
          description="Apply with one tap and get hired instantly"
          imageUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400"
        />
        <OnboardingScreenCard
          order={3}
          title="Get Paid Quickly"
          description="Receive payments within 24 hours of completing jobs"
          imageUrl="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400"
        />
      </div>
    </div>
  );
}

function OnboardingScreenCard({ order, title, description, imageUrl }: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Preview */}
      <div className="relative h-64 bg-gray-100">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
          {order}
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
          <Upload className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Screen Title</label>
          <input
            type="text"
            defaultValue={title}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            defaultValue={description}
            rows={3}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <Save className="w-4 h-4" />
            Save
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

function PendingRegistrationsPage() {
  const [filter, setFilter] = useState<'all' | 'worker' | 'provider'>('all');
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  // Mock pending registrations data
  const pendingUsers = [
    {
      id: '1',
      name: 'Ahmed Al-Mansoori',
      email: 'ahmed.m@email.com',
      phone: '+971 50 234 5678',
      type: 'worker',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      appliedDate: '2024-01-15',
      documents: ['Emirates ID', 'Resume'],
      skills: ['Barista', 'Customer Service'],
    },
    {
      id: '2',
      name: 'Sara Hassan',
      email: 'sara.h@email.com',
      phone: '+971 55 876 5432',
      type: 'worker',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      appliedDate: '2024-01-16',
      documents: ['Emirates ID', 'Work Permit'],
      skills: ['Retail', 'Sales'],
    },
    {
      id: '3',
      name: 'Tech Solutions LLC',
      email: 'contact@techsolutions.ae',
      phone: '+971 4 123 4567',
      type: 'provider',
      avatar: null,
      appliedDate: '2024-01-14',
      documents: ['Trade License', 'Company Profile'],
      category: 'Technology',
    },
    {
      id: '4',
      name: 'Khalid Rahman',
      email: 'khalid.r@email.com',
      phone: '+971 56 345 6789',
      type: 'worker',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      appliedDate: '2024-01-17',
      documents: ['Emirates ID'],
      skills: ['Delivery', 'Logistics'],
    },
  ];

  const filteredUsers = pendingUsers.filter(user => 
    filter === 'all' ? true : user.type === filter
  );

  const handleApprove = (user: any) => {
    setSelectedApplication(user);
    setShowApproveModal(true);
  };

  const handleReject = (user: any) => {
    setSelectedApplication(user);
    setShowRejectModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pending Registrations</h1>
          <p className="text-gray-500 mt-1">Review and approve new user applications</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg font-bold text-sm">
            {pendingUsers.length} Pending
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <FilterButton 
          label="All Applications" 
          count={pendingUsers.length} 
          active={filter === 'all'} 
          onClick={() => setFilter('all')} 
        />
        <FilterButton 
          label="Workers" 
          count={pendingUsers.filter(u => u.type === 'worker').length} 
          active={filter === 'worker'} 
          onClick={() => setFilter('worker')} 
        />
        <FilterButton 
          label="Providers" 
          count={pendingUsers.filter(u => u.type === 'provider').length} 
          active={filter === 'provider'} 
          onClick={() => setFilter('provider')} 
        />
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Applicant</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Applied Date</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Documents</th>
              <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.map(user => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                    ) : (
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      {user.skills && (
                        <p className="text-xs text-gray-500">{user.skills.join(', ')}</p>
                      )}
                      {user.category && (
                        <p className="text-xs text-gray-500">{user.category}</p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    user.type === 'worker' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {user.type.charAt(0).toUpperCase() + user.type.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="text-sm">
                    <p className="text-gray-900">{user.email}</p>
                    <p className="text-gray-500">{user.phone}</p>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {new Date(user.appliedDate).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap gap-1">
                    {user.documents.map((doc, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {doc}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleApprove(user)}
                      className="p-1.5 hover:bg-green-50 rounded-lg text-green-600 transition-colors" 
                      title="Approve"
                    >
                      <CheckCircle className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleReject(user)}
                      className="p-1.5 hover:bg-red-50 rounded-lg text-red-600 transition-colors" 
                      title="Reject"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <button className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors" title="View Details">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showApproveModal && selectedApplication && (
        <ApproveApplicationModal
          application={selectedApplication}
          onClose={() => {
            setShowApproveModal(false);
            setSelectedApplication(null);
          }}
          onSuccess={() => {
            setShowApproveModal(false);
            setSelectedApplication(null);
          }}
        />
      )}

      {showRejectModal && selectedApplication && (
        <RejectApplicationModal
          application={selectedApplication}
          onClose={() => {
            setShowRejectModal(false);
            setSelectedApplication(null);
          }}
          onSuccess={() => {
            setShowRejectModal(false);
            setSelectedApplication(null);
          }}
        />
      )}
    </div>
  );
}

function ApproveApplicationModal({ application, onClose, onSuccess }: any) {
  const [notes, setNotes] = useState('');

  const handleApprove = () => {
    console.log('Approving application:', application.id, notes);
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
        {/* Header */}
        <div className="bg-green-50 border-b border-green-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-bold text-green-900">Approve Application</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-green-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-green-700" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Application Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4">
              {application.avatar ? (
                <img src={application.avatar} alt={application.name} className="w-16 h-16 rounded-full object-cover" />
              ) : (
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
              )}
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{application.name}</h3>
                <p className="text-sm text-gray-600">{application.email}</p>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                  application.type === 'worker' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {application.type.charAt(0).toUpperCase() + application.type.slice(1)}
                </span>
              </div>
            </div>
          </div>

          {/* Confirmation Message */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-900">
              <strong>This will:</strong>
            </p>
            <ul className="mt-2 space-y-1 text-sm text-green-800">
              <li>• Activate the user's account</li>
              <li>• Send approval email with login credentials</li>
              <li>• Grant access to the platform</li>
              <li>• {application.type === 'worker' ? 'Allow applying for jobs' : 'Allow posting jobs'}</li>
            </ul>
          </div>

          {/* Optional Notes */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Welcome Message <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add a welcome message to include in the approval email..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3 rounded-b-xl">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleApprove}
            className="px-5 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Approve Application
          </button>
        </div>
      </div>
    </div>
  );
}

function RejectApplicationModal({ application, onClose, onSuccess }: any) {
  const [reason, setReason] = useState('');
  const [selectedReasons, setSelectedReasons] = useState({
    incomplete: false,
    invalid: false,
    duplicate: false,
    requirements: false,
    other: false,
  });

  const handleReasonToggle = (key: keyof typeof selectedReasons) => {
    setSelectedReasons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isFormValid = () => {
    return Object.values(selectedReasons).some(r => r) && reason.trim().length > 0;
  };

  const handleReject = () => {
    if (!isFormValid()) return;
    console.log('Rejecting application:', application.id, selectedReasons, reason);
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
        {/* Header */}
        <div className="bg-red-50 border-b border-red-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-bold text-red-900">Reject Application</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-red-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-red-700" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Application Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4">
              {application.avatar ? (
                <img src={application.avatar} alt={application.name} className="w-16 h-16 rounded-full object-cover" />
              ) : (
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
              )}
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{application.name}</h3>
                <p className="text-sm text-gray-600">{application.email}</p>
              </div>
            </div>
          </div>

          {/* Rejection Reasons */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Reason for Rejection <span className="text-red-600">*</span>
            </label>
            <div className="space-y-2 bg-gray-50 rounded-lg p-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedReasons.incomplete}
                  onChange={() => handleReasonToggle('incomplete')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Incomplete application</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedReasons.invalid}
                  onChange={() => handleReasonToggle('invalid')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Invalid or missing documents</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedReasons.duplicate}
                  onChange={() => handleReasonToggle('duplicate')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Duplicate account</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedReasons.requirements}
                  onChange={() => handleReasonToggle('requirements')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Does not meet requirements</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedReasons.other}
                  onChange={() => handleReasonToggle('other')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Other (specify below)</span>
              </label>
            </div>
          </div>

          {/* Detailed Reason */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Detailed Explanation <span className="text-red-600">*</span>
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Provide a detailed explanation for the rejection. This will be sent to the applicant..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={4}
            />
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-900">
              <strong>Note:</strong> The applicant will receive an email with the rejection reason and can reapply after addressing the issues.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3 rounded-b-xl">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleReject}
            disabled={!isFormValid()}
            className={`px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              isFormValid()
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <X className="w-4 h-4" />
            Reject Application
          </button>
        </div>
      </div>
    </div>
  );
}

function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage platform configuration and preferences</p>
      </div>

      {/* Admin Profile Settings */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">Admin Profile</h3>
        </div>
        <div className="p-6">
          <div className="flex items-start gap-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
              alt="Admin"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Admin User"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue="admin@xtra.com"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+971 50 123 4567"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Super Admin</option>
                    <option>Admin</option>
                    <option>Moderator</option>
                  </select>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">Security</h3>
        </div>
        <div className="p-6 space-y-6">
          {/* Change Password */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Change Password</h4>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm new password"
                />
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Change Password
              </button>
            </div>
          </div>

          {/* Two-Factor Authentication */}
          <div className="pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Two-Factor Authentication</h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                <p className="text-xs text-gray-400 mt-1">Status: <span className="text-green-600 font-semibold">Enabled</span></p>
              </div>
              <button className="px-4 py-2 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Configure
              </button>
            </div>
          </div>

          {/* Active Sessions */}
          <div className="pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Active Sessions</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Chrome on MacOS</p>
                    <p className="text-xs text-gray-500">Dubai, UAE • Last active: Now</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600">Current</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Safari on iPhone</p>
                    <p className="text-xs text-gray-500">Dubai, UAE • 2 hours ago</p>
                  </div>
                </div>
                <button className="text-xs font-medium text-red-600 hover:underline">Revoke</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
        <div className="p-6">
          <h3 className="font-bold text-gray-900 mb-4">Platform Settings</h3>
          <div className="space-y-4">
            <SettingRow
              label="Commission Rate"
              description="Platform fee percentage"
              value="10%"
            />
            <SettingRow
              label="Minimum Job Payment"
              description="Lowest allowed payment per worker"
              value="$50"
            />
            <SettingRow
              label="Verification Required"
              description="Require ID verification for new workers"
              value="Enabled"
            />
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-gray-900 mb-4">Notification Preferences</h3>
          <div className="space-y-3">
            <ToggleSetting label="Email notifications" enabled={true} />
            <ToggleSetting label="New user alerts" enabled={true} />
            <ToggleSetting label="Payment alerts" enabled={true} />
            <ToggleSetting label="Penalty & report alerts" enabled={true} />
            <ToggleSetting label="Issue reports" enabled={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

function JobDetailsPage({ jobId, onBack }: { jobId: string; onBack: () => void }) {
  const [selectedWorkerId, setSelectedWorkerId] = useState<string | null>(null);

  // If viewing worker details, show WorkerDetailsPage
  if (selectedWorkerId) {
    return <WorkerDetailsPage workerId={selectedWorkerId} onBack={() => setSelectedWorkerId(null)} />;
  }

  // Mock data based on jobId
  const jobData: any = {
    'JOB-1024': {
      id: 'JOB-1024',
      title: 'Event Waiter',
      provider: 'Downtown Event Center',
      providerEmail: 'contact@downtownevents.com',
      providerPhone: '+971 4 123 4567',
      category: 'Events',
      date: 'Jan 8, 2026',
      startTime: '14:00',
      endTime: '22:00',
      location: 'Dubai Convention Center, Hall 3',
      description: 'We need experienced waiters for a corporate event. Responsibilities include serving food and beverages, maintaining cleanliness, and providing excellent customer service.',
      requirements: ['Professional appearance', 'Previous waiter experience', 'Excellent communication skills', 'Ability to stand for long hours'],
      paymentPerWorker: '$120',
      totalPayment: '$360',
      workersNeeded: 3,
      workersApplied: 5,
      workersHired: 3,
      status: 'completed',
      workers: [
        { id: '1', name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', rating: 4.9, checkIn: '13:58', checkOut: '22:05', payment: '$120' },
        { id: '2', name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', rating: 4.7, checkIn: '14:02', checkOut: '22:00', payment: '$120' },
        { id: '3', name: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', rating: 5.0, checkIn: '13:55', checkOut: '22:10', payment: '$120' }
      ]
    },
    'JOB-1023': {
      id: 'JOB-1023',
      title: 'Security Guard - Night Shift',
      provider: 'Corporate Plaza',
      providerEmail: 'security@corporateplaza.com',
      providerPhone: '+971 4 345 6789',
      category: 'Security',
      date: 'Jan 7, 2026',
      startTime: '22:00',
      endTime: '06:00',
      location: 'Corporate Plaza, Tower A & B',
      description: 'Night shift security guards needed for our corporate building. Must monitor CCTV, conduct patrols, and ensure building security.',
      requirements: ['Security license required', 'Previous security experience', 'Alert and vigilant', 'Clean background check'],
      paymentPerWorker: '$160',
      totalPayment: '$320',
      workersNeeded: 2,
      workersApplied: 4,
      workersHired: 2,
      status: 'in-progress',
      workers: [
        { id: '4', name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', rating: 4.5, checkIn: '21:55', checkOut: '-', payment: '$160' },
        { id: '2', name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', rating: 4.7, checkIn: '21:58', checkOut: '-', payment: '$160' }
      ]
    },
    'JOB-1022': {
      id: 'JOB-1022',
      title: 'Private Nurse',
      provider: 'Medical Center',
      providerEmail: 'hr@medicalcenter.com',
      providerPhone: '+971 4 234 5678',
      category: 'Healthcare',
      date: 'Jan 5, 2026',
      startTime: '09:00',
      endTime: '17:00',
      location: 'Dubai Medical Center, Private Ward',
      description: 'Looking for qualified nurses to provide patient care in private wards. Duties include monitoring vitals, administering medication, and patient comfort.',
      requirements: ['Valid nursing license', '2+ years experience', 'Patient care skills', 'CPR certified'],
      paymentPerWorker: '$180',
      totalPayment: '$360',
      workersNeeded: 2,
      workersApplied: 6,
      workersHired: 2,
      status: 'completed',
      workers: [
        { id: '1', name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', rating: 4.9, checkIn: '08:50', checkOut: '17:00', payment: '$180' },
        { id: '3', name: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', rating: 5.0, checkIn: '08:55', checkOut: '17:05', payment: '$180' }
      ]
    },
    'JOB-1021': {
      id: 'JOB-1021',
      title: 'Office Cleaning',
      provider: 'Tech Startup Co.',
      providerEmail: 'admin@techstartup.com',
      providerPhone: '+971 4 456 7890',
      category: 'Cleaning',
      date: 'Jan 4, 2026',
      startTime: '18:00',
      endTime: '21:00',
      location: 'Tech Hub Building, 5th Floor',
      description: 'Need cleaners for office deep cleaning. Tasks include vacuuming, mopping, sanitizing workstations, and restroom cleaning.',
      requirements: ['Cleaning experience', 'Attention to detail', 'Use of cleaning equipment', 'Reliable and punctual'],
      paymentPerWorker: '$80',
      totalPayment: '$400',
      workersNeeded: 5,
      workersApplied: 8,
      workersHired: 5,
      status: 'completed',
      workers: [
        { id: '1', name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', rating: 4.9, checkIn: '17:58', checkOut: '21:15', payment: '$80' },
        { id: '2', name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', rating: 4.7, checkIn: '18:00', checkOut: '21:10', payment: '$80' },
        { id: '3', name: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', rating: 5.0, checkIn: '17:55', checkOut: '21:20', payment: '$80' },
        { id: '4', name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', rating: 4.5, checkIn: '18:05', checkOut: '21:05', payment: '$80' },
        { id: '5', name: 'Lisa Anderson', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100', rating: 3.8, checkIn: '18:10', checkOut: '21:00', payment: '$80' }
      ]
    },
    'JOB-1020': {
      id: 'JOB-1020',
      title: 'Event Staff',
      provider: 'Grand Hotel',
      providerEmail: 'jobs@grandhotel.com',
      providerPhone: '+971 4 567 8901',
      category: 'Hospitality',
      date: 'Jan 15, 2026',
      startTime: '10:00',
      endTime: '18:00',
      location: 'Grand Hotel, Ballroom & Conference Area',
      description: 'Event staff needed for hotel conference and banquet service. Duties include guest assistance, setup, and service.',
      requirements: ['Hospitality experience', 'Professional demeanor', 'Team player', 'Flexible schedule'],
      paymentPerWorker: '$120',
      totalPayment: '$360',
      workersNeeded: 3,
      workersApplied: 2,
      workersHired: 2,
      status: 'posted',
      workers: [
        { id: '1', name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', rating: 4.9, checkIn: '-', checkOut: '-', payment: '$120' },
        { id: '3', name: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', rating: 5.0, checkIn: '-', checkOut: '-', payment: '$120' }
      ]
    }
  };

  const job = jobData[jobId] || jobData['JOB-1024'];

  const statusConfig: any = {
    posted: { label: 'Posted', color: 'bg-blue-100 text-blue-700' },
    'in-progress': { label: 'In Progress', color: 'bg-green-100 text-green-700' },
    completed: { label: 'Completed', color: 'bg-gray-100 text-gray-700' },
  };

  return (
    <div className="space-y-6">
      {/* Back Button & Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Back"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">Job Details</h1>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold">{job.id}</span>
          </div>
          <p className="text-gray-500 mt-1">Complete job information and worker details</p>
        </div>
        <span className={`px-4 py-2 rounded-lg font-bold ${statusConfig[job.status].color}`}>
          {statusConfig[job.status].label}
        </span>
      </div>

      {/* Job Overview Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{job.title}</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Provider</p>
                  <p className="font-semibold text-gray-900">{job.provider}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p className="font-semibold text-gray-900">{job.date} • {job.startTime} - {job.endTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900">{job.location}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">Email: <span className="text-gray-900 font-medium">{job.providerEmail}</span></p>
              <p className="text-gray-600">Phone: <span className="text-gray-900 font-medium">{job.providerPhone}</span></p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Payment Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Per Worker:</span>
                  <span className="font-bold text-gray-900">{job.paymentPerWorker}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Payment:</span>
                  <span className="font-bold text-green-700 text-lg">{job.totalPayment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Workers Needed</p>
              <p className="text-2xl font-bold text-gray-900">{job.workersNeeded}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Applications</p>
              <p className="text-2xl font-bold text-gray-900">{job.workersApplied}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Workers Hired</p>
              <p className="text-2xl font-bold text-gray-900">{job.workersHired}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Fill Rate</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round((job.workersHired / job.workersNeeded) * 100)}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Description */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Job Description</h3>
        <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>
        <h4 className="font-bold text-gray-900 mb-3">Requirements</h4>
        <ul className="space-y-2">
          {job.requirements.map((req: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Workers Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">Assigned Workers</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Worker</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Rating</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Check-in</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Check-out</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {job.workers.map((worker: any) => (
                <tr key={worker.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img src={worker.avatar} alt={worker.name} className="w-10 h-10 rounded-full object-cover" />
                      <span className="font-medium text-gray-900">{worker.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-gray-900">{worker.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`text-sm font-medium ${worker.checkIn === '-' ? 'text-gray-400' : 'text-green-700'}`}>
                      {worker.checkIn}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`text-sm font-medium ${worker.checkOut === '-' ? 'text-gray-400' : 'text-blue-700'}`}>
                      {worker.checkOut}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-gray-900">{worker.payment}</span>
                  </td>
                  <td className="py-4 px-6">
                    <button 
                      onClick={() => setSelectedWorkerId(worker.id)}
                      className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors" 
                      title="View Worker"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function WorkerDetailsPage({ workerId, onBack }: { workerId: string; onBack: () => void }) {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageText, setMessageText] = useState('');
  
  // Mock data based on workerId
  const workerData = {
    '1': { name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', email: 'sarah.j@email.com', phone: '+971 50 123 4567', rating: 4.9, totalJobs: 24, completedJobs: 24, earnings: '$2,880', joinDate: 'Jan 15, 2025', status: 'active' },
    '2': { name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', email: 'michael.c@email.com', phone: '+971 50 234 5678', rating: 4.7, totalJobs: 18, completedJobs: 18, earnings: '$2,160', joinDate: 'Dec 20, 2024', status: 'active' },
    '3': { name: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', email: 'emma.r@email.com', phone: '+971 50 345 6789', rating: 5.0, totalJobs: 36, completedJobs: 36, earnings: '$4,320', joinDate: 'Nov 10, 2024', status: 'active' },
    '4': { name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', email: 'james.w@email.com', phone: '+971 50 456 7890', rating: 4.5, totalJobs: 12, completedJobs: 12, earnings: '$1,440', joinDate: 'Jan 5, 2025', status: 'inactive' },
    '5': { name: 'Lisa Anderson', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', email: 'lisa.a@email.com', phone: '+971 50 567 8901', rating: 3.8, totalJobs: 5, completedJobs: 5, earnings: '$600', joinDate: 'Jan 25, 2025', status: 'flagged' },
  };

  const worker = workerData[workerId as keyof typeof workerData];

  // Mock conversation data - some workers have existing conversations
  const existingConversations: any = {
    '1': [
      { sender: 'admin', message: 'Hi Sarah, great work on the event last week!', time: '10:30 AM' },
      { sender: 'worker', message: 'Thank you! I really enjoyed it.', time: '10:35 AM' },
    ],
    '3': [
      { sender: 'admin', message: 'Emma, are you available this weekend?', time: 'Yesterday' },
      { sender: 'worker', message: 'Yes, I am! What times?', time: 'Yesterday' },
    ],
  };

  const hasConversation = !!existingConversations[workerId];
  const conversation = existingConversations[workerId] || [];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Here you would send the message to backend
      console.log('Sending message:', messageText);
      setMessageText('');
      setShowMessageModal(false);
    }
  };

  const jobHistory = [
    { id: 'JOB-1024', title: 'Event Waiter', provider: 'Downtown Event Center', date: 'Jan 8, 2026', time: '14:00 - 22:00', checkIn: '13:58', checkOut: '22:05', payment: '$120', status: 'completed' },
    { id: 'JOB-1023', title: 'Security Guard', provider: 'Corporate Plaza', date: 'Jan 6, 2026', time: '22:00 - 06:00', checkIn: '21:55', checkOut: '06:10', payment: '$160', status: 'completed' },
    { id: 'JOB-1022', title: 'Private Nurse', provider: 'Medical Center', date: 'Jan 4, 2026', time: '09:00 - 17:00', checkIn: '08:50', checkOut: '17:00', payment: '$180', status: 'completed' },
    { id: 'JOB-1021', title: 'Office Cleaning', provider: 'Tech Startup Co.', date: 'Jan 2, 2026', time: '18:00 - 21:00', checkIn: '17:58', checkOut: '21:15', payment: '$80', status: 'completed' },
    { id: 'JOB-1020', title: 'Event Waiter', provider: 'Grand Hotel', date: 'Dec 30, 2025', time: '12:00 - 20:00', checkIn: '11:55', checkOut: '20:05', payment: '$120', status: 'completed' },
  ];

  return (
    <div className="space-y-6">
      {/* Back Button & Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Back"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Worker Details</h1>
          <p className="text-gray-500 mt-1">Complete worker profile and activity</p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="px-6 pb-6">
          <div className="flex items-start gap-6 -mt-16">
            <img
              src={worker.avatar}
              alt={worker.name}
              className="w-32 h-32 rounded-xl border-4 border-white object-cover shadow-lg"
            />
            <div className="flex-1 mt-16">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{worker.name}</h2>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span>{worker.email}</span>
                    <span>•</span>
                    <span>{worker.phone}</span>
                    <span>•</span>
                    <span>Joined {worker.joinDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1.5 rounded-full text-sm font-bold ${
                    worker.status === 'active' ? 'bg-green-100 text-green-700' :
                    worker.status === 'inactive' ? 'bg-gray-100 text-gray-600' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {worker.status.charAt(0).toUpperCase() + worker.status.slice(1)}
                  </span>
                  <button 
                    onClick={() => setShowMessageModal(true)}
                    className="px-4 py-2 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    title="Message Worker"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                  <div className="relative">
                    <button 
                      onClick={() => setShowMoreMenu(!showMoreMenu)}
                      className="px-4 py-2 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      title="More Options"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {showMoreMenu && (
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-lg z-50">
                        <div className="py-2">
                          <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                            <Edit className="w-4 h-4" />
                            <span className="text-sm font-medium">Edit Worker Info</span>
                          </button>
                          <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm font-medium">Assign to Job</span>
                          </button>
                          <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                            <Flag className="w-4 h-4" />
                            <span className="text-sm font-medium">Add Penalty</span>
                          </button>
                          <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                            <FileText className="w-4 h-4" />
                            <span className="text-sm font-medium">View Penalty History</span>
                          </button>
                          <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">View Reports</span>
                          </button>
                          <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                            <Download className="w-4 h-4" />
                            <span className="text-sm font-medium">Export Worker Data</span>
                          </button>
                          <div className="border-t border-gray-200 my-2"></div>
                          <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-orange-600">
                            <Ban className="w-4 h-4" />
                            <span className="text-sm font-medium">{worker.status === 'inactive' ? 'Activate Account' : 'Suspend Account'}</span>
                          </button>
                          <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-red-600">
                            <Trash2 className="w-4 h-4" />
                            <span className="text-sm font-medium">Delete Worker</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p className="text-2xl font-bold text-gray-900">{worker.rating}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Jobs Completed</p>
              <p className="text-2xl font-bold text-gray-900">{worker.completedJobs}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Earnings</p>
              <p className="text-2xl font-bold text-gray-900">{worker.earnings}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">100%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job History */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">Job History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Job ID</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Job</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Date & Time</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Check-in</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Check-out</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobHistory.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-bold">{job.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{job.title}</p>
                      <p className="text-sm text-gray-500">{job.provider}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm text-gray-900">{job.date}</p>
                      <p className="text-sm text-gray-500">{job.time}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-green-700">{job.checkIn}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-blue-700">{job.checkOut}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-gray-900">{job.payment}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                      {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Messaging Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img src={worker.avatar} alt={worker.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-gray-900">{worker.name}</h3>
                  <p className="text-sm text-gray-500">Worker ID: {workerId}</p>
                </div>
              </div>
              <button 
                onClick={() => setShowMessageModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {hasConversation ? (
                <>
                  <div className="text-center text-sm text-gray-500 mb-4">
                    Existing conversation
                  </div>
                  {conversation.map((msg: any, index: number) => (
                    <div key={index} className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                        msg.sender === 'admin' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${msg.sender === 'admin' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No previous messages</p>
                  <p className="text-sm text-gray-400 mt-1">Start a new conversation with {worker.name}</p>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">Press Enter to send, Shift+Enter for new line</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProviderDetailsPage({ providerId, onBack }: { providerId: string; onBack: () => void }) {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  if (selectedJob) {
    return <JobDetailsPage jobId={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  // Mock data based on providerId
  const providerData = {
    '1': { name: 'Downtown Event Center', category: 'Events', rating: 4.8, activeJobs: 5, totalJobs: 23, spent: '$12,450', email: 'contact@downtownevents.com', phone: '+971 4 123 4567', joinDate: 'Oct 15, 2024' },
    '2': { name: 'Medical Center', category: 'Healthcare', rating: 4.9, activeJobs: 3, totalJobs: 15, spent: '$8,760', email: 'hr@medicalcenter.com', phone: '+971 4 234 5678', joinDate: 'Nov 5, 2024' },
    '3': { name: 'Corporate Plaza', category: 'Security', rating: 4.6, activeJobs: 2, totalJobs: 18, spent: '$9,320', email: 'security@corporateplaza.com', phone: '+971 4 345 6789', joinDate: 'Sep 20, 2024' },
    '4': { name: 'Tech Startup Co.', category: 'Cleaning', rating: 4.7, activeJobs: 4, totalJobs: 12, spent: '$5,440', email: 'admin@techstartup.com', phone: '+971 4 456 7890', joinDate: 'Dec 1, 2024' },
    '5': { name: 'Grand Hotel', category: 'Hospitality', rating: 4.9, activeJobs: 6, totalJobs: 31, spent: '$15,780', email: 'jobs@grandhotel.com', phone: '+971 4 567 8901', joinDate: 'Aug 10, 2024' },
    '6': { name: 'City Convention Hall', category: 'Events', rating: 4.5, activeJobs: 3, totalJobs: 9, spent: '$4,230', email: 'events@cityhall.com', phone: '+971 4 678 9012', joinDate: 'Jan 3, 2025' },
  };

  const provider = providerData[providerId as keyof typeof providerData];

  const jobsCreated = [
    { id: 'JOB-1024', title: 'Event Waiter', workers: '3/3', date: 'Jan 8, 2026', time: '14:00 - 22:00', payment: '$360', status: 'completed' },
    { id: 'JOB-1023', title: 'Security Guard - Night Shift', workers: '2/2', date: 'Jan 7, 2026', time: '22:00 - 06:00', payment: '$320', status: 'completed' },
    { id: 'JOB-1022', title: 'Private Nurse', workers: '2/2', date: 'Jan 5, 2026', time: '09:00 - 17:00', payment: '$360', status: 'completed' },
    { id: 'JOB-1021', title: 'Office Cleaning', workers: '5/5', date: 'Jan 4, 2026', time: '18:00 - 21:00', payment: '$400', status: 'completed' },
    { id: 'JOB-1020', title: 'Event Staff', workers: '2/3', date: 'Jan 15, 2026', time: '10:00 - 18:00', payment: '$360', status: 'in-progress' },
  ];

  const spendingBreakdown = [
    { month: 'Jan 2026', jobs: 8, workers: 24, amount: '$2,880' },
    { month: 'Dec 2025', jobs: 6, workers: 18, amount: '$2,160' },
    { month: 'Nov 2025', jobs: 5, workers: 15, amount: '$1,800' },
    { month: 'Oct 2025', jobs: 4, workers: 12, amount: '$1,440' },
  ];

  return (
    <div className="space-y-6">
      {/* Back Button & Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Back"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Provider Details</h1>
          <p className="text-gray-500 mt-1">Complete provider profile and activity</p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl text-white font-bold shadow-lg">
            {provider.name.split(' ').map(w => w[0]).join('')}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{provider.name}</h2>
                <div className="flex items-center gap-3 mt-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">{provider.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-gray-900">{provider.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                  <span>{provider.email}</span>
                  <span>•</span>
                  <span>{provider.phone}</span>
                  <span>•</span>
                  <span>Joined {provider.joinDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Jobs</p>
              <p className="text-2xl font-bold text-gray-900">{provider.activeJobs}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Jobs</p>
              <p className="text-2xl font-bold text-gray-900">{provider.totalJobs}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">{provider.spent}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p className="text-2xl font-bold text-gray-900">{provider.rating}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Created */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">Jobs Created</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Job ID</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Job Title</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Workers</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Date & Time</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobsCreated.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-bold">{job.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">{job.title}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">{job.workers}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm text-gray-900">{job.date}</p>
                      <p className="text-sm text-gray-500">{job.time}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-gray-900">{job.payment}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      job.status === 'completed' ? 'bg-green-100 text-green-700' :
                      job.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {job.status.replace('-', ' ').charAt(0).toUpperCase() + job.status.replace('-', ' ').slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => setSelectedJob(job.id)}
                      className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Spending Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">Monthly Spending Breakdown</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {spendingBreakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {item.month.split(' ')[0].slice(0, 3)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.month}</p>
                    <p className="text-sm text-gray-500">{item.jobs} jobs • {item.workers} workers</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-green-700">{item.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Utility Components
function StatCard({ title, value, change, trend, icon, color }: any) {
  const colors = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colors[color]}`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {change}
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function CategoryBar({ label, percentage, count, color }: any) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <span className="text-sm text-gray-500">{count} jobs</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

function JobItem({ title, provider, workers, status, payment }: any) {
  const statusColors = {
    'posted': 'bg-blue-100 text-blue-700',
    'in-progress': 'bg-green-100 text-green-700',
    'completed': 'bg-gray-100 text-gray-700',
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500 mt-1">{provider}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">{workers} workers</div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[status]}`}>
          {status.replace('-', ' ')}
        </span>
        <div className="font-bold text-gray-900 min-w-[80px] text-right">{payment}</div>
      </div>
    </div>
  );
}

function QuickStat({ icon, label, value }: any) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <span className="text-lg font-bold text-gray-900">{value}</span>
    </div>
  );
}

function BanWorkerModal({ worker, onClose, onSuccess }: any) {
  const [suspensionType, setSuspensionType] = useState<'temporary' | 'permanent'>('temporary');
  const [duration, setDuration] = useState<'7' | '30' | '90' | 'custom'>('30');
  const [reasons, setReasons] = useState({
    policyViolations: false,
    noShows: false,
    fraud: false,
    safety: false,
    harassment: false,
    backgroundCheck: false,
  });
  const [internalNotes, setInternalNotes] = useState('');
  const [jobHandling, setJobHandling] = useState<'reassign' | 'cancel' | 'complete'>('reassign');
  const [confirmChecked, setConfirmChecked] = useState(false);

  const activeJobs = 2; // Mock data - would come from props
  const pendingPayment = 240; // Mock data - would come from props

  const handleReasonToggle = (reason: keyof typeof reasons) => {
    setReasons(prev => ({ ...prev, [reason]: !prev[reason] }));
  };

  const isFormValid = () => {
    const hasReason = Object.values(reasons).some(r => r);
    return hasReason && confirmChecked;
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;
    
    // Here you would make the API call to suspend the worker
    console.log('Suspending worker:', {
      worker: worker.name,
      suspensionType,
      duration: suspensionType === 'temporary' ? duration : 'permanent',
      reasons,
      internalNotes,
      jobHandling,
    });

    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ban className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-bold text-gray-900">Suspend Worker Account</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Warning Banner */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900">WARNING: This is a serious action</p>
              <p className="text-sm text-red-700 mt-1">Suspending a worker will prevent them from accessing their account and working on the platform.</p>
            </div>
          </div>

          {/* Worker Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <img src={worker.avatar} alt={worker.name} className="w-16 h-16 rounded-full object-cover" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg">{worker.name}</h3>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {worker.rating.toFixed(1)}
                  </span>
                  <span>Status: <span className={`font-semibold ${
                    worker.status === 'active' ? 'text-green-700' :
                    worker.status === 'inactive' ? 'text-gray-700' :
                    'text-red-700'
                  }`}>{worker.status.charAt(0).toUpperCase() + worker.status.slice(1)}</span></span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className="text-gray-600">Penalties: <span className="font-bold text-red-700">{worker.penalties}</span></span>
                  <span className="text-gray-600">Reports: <span className="font-bold text-orange-700">{worker.reports}</span></span>
                </div>
              </div>
            </div>

            {/* Active Jobs Alert */}
            {activeJobs > 0 && (
              <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <div className="text-sm">
                  <span className="font-semibold text-orange-900">{activeJobs} active jobs</span>
                  <span className="text-orange-700"> • </span>
                  <span className="text-orange-700">Pending payments: ${pendingPayment.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>

          {/* Suspension Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Suspension Type <span className="text-red-600">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="suspensionType"
                  checked={suspensionType === 'temporary'}
                  onChange={() => setSuspensionType('temporary')}
                  className="w-4 h-4 text-blue-600"
                />
                <div>
                  <span className="font-medium text-gray-900">Temporary (specify duration below)</span>
                  <p className="text-sm text-gray-600">Worker can return after suspension period</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="suspensionType"
                  checked={suspensionType === 'permanent'}
                  onChange={() => setSuspensionType('permanent')}
                  className="w-4 h-4 text-blue-600"
                />
                <div>
                  <span className="font-medium text-gray-900">Permanent (account banned)</span>
                  <p className="text-sm text-gray-600">Worker will be permanently removed from platform</p>
                </div>
              </label>
            </div>
          </div>

          {/* Duration (if temporary) */}
          {suspensionType === 'temporary' && (
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Duration:</label>
              <div className="flex items-center gap-3">
                {['7', '30', '90', 'custom'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d as any)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      duration === d
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {d === 'custom' ? 'Custom' : `${d} days`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Reasons */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Reason for Suspension <span className="text-red-600">*</span>
            </label>
            <div className="space-y-2 bg-gray-50 rounded-lg p-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={reasons.policyViolations}
                  onChange={() => handleReasonToggle('policyViolations')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Repeated policy violations</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={reasons.noShows}
                  onChange={() => handleReasonToggle('noShows')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Multiple no-shows</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={reasons.fraud}
                  onChange={() => handleReasonToggle('fraud')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Fraud/dishonest behavior</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={reasons.safety}
                  onChange={() => handleReasonToggle('safety')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Safety concerns</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={reasons.harassment}
                  onChange={() => handleReasonToggle('harassment')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Harassment/misconduct</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={reasons.backgroundCheck}
                  onChange={() => handleReasonToggle('backgroundCheck')}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Failed background check</span>
              </label>
            </div>
          </div>

          {/* Internal Notes */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Internal Notes <span className="text-gray-500 font-normal">(visible to admins only)</span>
            </label>
            <textarea
              value={internalNotes}
              onChange={(e) => setInternalNotes(e.target.value)}
              placeholder="Add any additional context or details about this suspension..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          {/* Handle Active Jobs */}
          {activeJobs > 0 && (
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Handle Active Jobs:
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="jobHandling"
                    checked={jobHandling === 'reassign'}
                    onChange={() => setJobHandling('reassign')}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">Reassign to other workers</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="jobHandling"
                    checked={jobHandling === 'cancel'}
                    onChange={() => setJobHandling('cancel')}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">Cancel and refund providers</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="jobHandling"
                    checked={jobHandling === 'complete'}
                    onChange={() => setJobHandling('complete')}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">Allow worker to complete current jobs</span>
                </label>
              </div>
            </div>
          )}

          {/* Consequences */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4" />
              CONSEQUENCES OF SUSPENSION:
            </h4>
            <ul className="space-y-1 text-sm text-yellow-800">
              <li>• Worker account becomes INACTIVE</li>
              <li>• Cannot log in or apply for jobs</li>
              <li>• Active jobs will be {jobHandling === 'reassign' ? 'reassigned' : jobHandling === 'cancel' ? 'cancelled' : 'completed first'}</li>
              <li>• Worker receives email notification</li>
              <li>• Pending payments will still be processed</li>
              <li>• {suspensionType === 'permanent' ? 'Cannot appeal permanent ban' : 'Appeal can be submitted after 14 days'}</li>
            </ul>
          </div>

          {/* Confirmation */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={confirmChecked}
              onChange={(e) => setConfirmChecked(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded mt-1"
            />
            <span className="text-sm text-gray-700">
              I confirm this suspension is justified and have reviewed all worker details and consequences.
            </span>
          </label>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              isFormValid()
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Ban className="w-4 h-4" />
            Suspend Worker
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterButton({ label, count, active, onClick, color = 'blue' }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
        active
          ? color === 'red'
            ? 'bg-red-100 text-red-700'
            : 'bg-blue-100 text-blue-700'
          : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
      }`}
    >
      {label} <span className="ml-1 opacity-70">({count})</span>
    </button>
  );
}

function WorkerRow({ name, avatar, rating, jobs, penalties, reports, earnings, status, onView, onBan }: any) {
  const statusConfig = {
    active: { label: 'Active', color: 'bg-green-100 text-green-700' },
    inactive: { label: 'Inactive', color: 'bg-gray-100 text-gray-600' },
    flagged: { label: 'Flagged', color: 'bg-red-100 text-red-700' },
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
        <td className="py-4 px-6">
          <div className="flex items-center gap-3">
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
            <span className="font-medium text-gray-900">{name}</span>
          </div>
        </td>
        <td className="py-4 px-6">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-gray-900">{rating.toFixed(1)}</span>
          </div>
        </td>
        <td className="py-4 px-6 text-gray-600">{jobs}</td>
        <td className="py-4 px-6">
          {penalties > 0 ? (
            <span className="px-2 py-1 bg-red-50 text-red-700 rounded-lg text-sm font-bold">{penalties}</span>
          ) : (
            <span className="text-gray-400">—</span>
          )}
        </td>
        <td className="py-4 px-6">
          {reports > 0 ? (
            <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-lg text-sm font-bold">{reports}</span>
          ) : (
            <span className="text-gray-400">—</span>
          )}
        </td>
        <td className="py-4 px-6 font-semibold text-gray-900">{earnings}</td>
        <td className="py-4 px-6">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusConfig[status].color}`}>
            {statusConfig[status].label}
          </span>
        </td>
        <td className="py-4 px-6">
          <div className="flex items-center gap-2">
            <button onClick={onView} className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors" title="View">
              <Eye className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onBan({ name, avatar, rating, jobs, penalties, reports, earnings, status })}
              className="p-1.5 hover:bg-red-50 rounded-lg text-red-600 transition-colors" 
              title="Ban"
            >
              <Ban className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>
  );
}

function ProviderRow({ name, category, rating, activeJobs, totalJobs, reports, spent, onView }: any) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-5 h-5 text-blue-600" />
          </div>
          <span className="font-medium text-gray-900">{name}</span>
        </div>
      </td>
      <td className="py-4 px-6">
        <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">{category}</span>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-semibold text-gray-900">{rating.toFixed(1)}</span>
        </div>
      </td>
      <td className="py-4 px-6 text-gray-900 font-semibold">{activeJobs}</td>
      <td className="py-4 px-6 text-gray-600">{totalJobs}</td>
      <td className="py-4 px-6">
        {reports > 0 ? (
          <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-lg text-sm font-bold">{reports}</span>
        ) : (
          <span className="text-gray-400">—</span>
        )}
      </td>
      <td className="py-4 px-6 font-bold text-green-700">{spent}</td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <button onClick={onView} className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors" title="View">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors" title="More">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

function JobDetailRow({ jobId, title, provider, category, date, workers, payment, status, onView }: any) {
  const statusConfig = {
    posted: { label: 'Posted', color: 'bg-blue-100 text-blue-700' },
    'in-progress': { label: 'In Progress', color: 'bg-green-100 text-green-700' },
    completed: { label: 'Completed', color: 'bg-gray-100 text-gray-700' },
  };

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-bold">{jobId}</span>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs font-medium">{category}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{provider}</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{workers} workers</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className={`px-3 py-1.5 rounded-lg text-sm font-bold ${statusConfig[status].color}`}>
            {statusConfig[status].label}
          </span>
          <div className="font-bold text-gray-900 min-w-[80px] text-right">{payment}</div>
          <button onClick={onView} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Eye className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

function TransactionRow({ type, description, job, amount, status, date }: any) {
  const typeIcons = {
    payout: <TrendingDown className="w-5 h-5 text-red-600" />,
    revenue: <TrendingUp className="w-5 h-5 text-green-600" />,
    fee: <DollarSign className="w-5 h-5 text-blue-600" />,
  };

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            type === 'payout' ? 'bg-red-100' : type === 'revenue' ? 'bg-green-100' : 'bg-blue-100'
          }`}>
            {typeIcons[type]}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{description}</p>
            <p className="text-sm text-gray-500 mt-0.5">{job} • {date}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className={`font-bold text-lg ${
            amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'
          }`}>
            {amount}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
          }`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

function GrowthMetric({ label, current, previous }: any) {
  const change = current - previous;
  const percentage = ((change / previous) * 100).toFixed(1);
  const isPositive = change > 0;

  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold text-gray-900">{current}</span>
        <span className={`flex items-center gap-1 text-sm font-semibold ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {percentage}%
        </span>
      </div>
    </div>
  );
}

function TopPerformer({ rank, name, category, jobs, rating }: any) {
  const medals = ['🥇', '🥈', '🥉'];
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{medals[rank - 1]}</span>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-bold text-gray-900">{rating}</span>
        </div>
        <p className="text-xs text-gray-500">{jobs} jobs</p>
      </div>
    </div>
  );
}

function SettingRow({ label, description, value }: any) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-500 mt-0.5">{description}</p>
      </div>
      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
        {value}
      </button>
    </div>
  );
}

function ToggleSetting({ label, enabled }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-700">{label}</span>
      <button className={`relative w-11 h-6 rounded-full transition-colors ${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      }`}>
        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
          enabled ? 'translate-x-5' : ''
        }`}></div>
      </button>
    </div>
  );
}

function MessageRow({ sender, avatar, message, date }: any) {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        <img src={avatar} alt={sender} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-gray-900">{sender}</p>
          <p className="text-sm text-gray-500 mt-0.5">{date}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mt-2">{message}</p>
    </div>
  );
}