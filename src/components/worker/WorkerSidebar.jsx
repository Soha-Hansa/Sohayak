import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import {
  LayoutDashboard,
  Search,
  Briefcase,
  Wallet,
  Star,
  Bell,
  User,
  Settings,
  HelpCircle,
  LogOut,
  ShieldCheck,
  Coins,
  Clock,
  Award,
  X
} from 'lucide-react';
import CooperativeBadge from '../ui/CooperativeBadge';

export const WorkerSidebar = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/worker/dashboard' },
    { id: 'today-jobs', label: "Today's Jobs", icon: Clock, badge: '4' },
    { id: 'job-requests', label: 'Job Requests', icon: Briefcase, badge: '3' },
    { id: 'earnings', label: 'Earnings', icon: Wallet },
    { id: 'fund', label: 'Cooperative Fund ⭐', icon: Coins },
    { id: 'dividend', label: 'Dividend ⭐', icon: Award },
    { id: 'membership', label: 'Membership & Benefits ⭐', icon: ShieldCheck },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: '2' },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNavClick = (item) => {
    setActiveTab(item.id);
    if (item.path) {
      navigate(item.path);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar Drawer Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 bottom-0 z-50 w-64 bg-white border-r border-[#E5E0D8] min-h-screen p-4 flex flex-col justify-between shrink-0 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="space-y-6">
          {/* Brand Header */}
          <div className="flex items-center justify-between px-2 pt-1">
            <Logo size="sm" showTagline={true} />

            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-[#8A9197] hover:bg-[#F4F1EA]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#1B4D3E] text-white shadow-xs font-semibold'
                      : 'text-[#5A6065] hover:text-[#191C1D] hover:bg-[#F4F1EA]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8A9197]'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#E8F2EE] text-[#1B4D3E]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Utility Links */}
        <div className="pt-4 border-t border-[#E5E0D8] space-y-2">
          <button
            onClick={() => handleNavClick({ id: 'help' })}
            className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-[#5A6065] hover:bg-[#F4F1EA] transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-[#8A9197]" />
            <span>Help & Support</span>
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-[#C53030] hover:bg-[#FEE2E2]/50 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Exit Dashboard</span>
          </button>

          <div className="pt-2">
            <CooperativeBadge size="sm" variant="default" className="w-full justify-center" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default WorkerSidebar;
