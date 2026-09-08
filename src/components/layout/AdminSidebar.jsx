import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Wrench,
  UserCheck,
  FileText,
  CreditCard,
  AlertTriangle,
  Star,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Vote,
  Coins,
  X
} from 'lucide-react';
import Logo from '../ui/Logo';
import CooperativeBadge from '../ui/CooperativeBadge';

export const AdminSidebar = ({ isOpen, onClose, activeTab = 'dashboard', setActiveTab }) => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { id: 'members', label: 'Members', icon: Users, badge: '2.4k' },
    { id: 'services', label: 'Services', icon: Wrench, badge: '8 categories' },
    { id: 'proposals', label: 'Proposals ⭐', icon: Vote, badge: '3 open' },
    { id: 'fund', label: 'Cooperative Fund ⭐', icon: Coins },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: UserCheck },
    { id: 'gigs', label: 'Gigs', icon: FileText, badge: '342' },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'disputes', label: 'Disputes', icon: AlertTriangle, badge: '12' },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNavClick = (item) => {
    if (setActiveTab) {
      setActiveTab(item.id);
    }
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

      {/* Sidebar Container */}
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

          {/* Console Navigation Links */}
          <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 scrollbar-none">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
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

export default AdminSidebar;
