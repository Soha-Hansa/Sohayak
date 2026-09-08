import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Bell, Menu, LayoutDashboard } from 'lucide-react';
import Avatar from '../ui/Avatar';
import Logo from '../ui/Logo';
import DemoRoleSwitcher from '../layout/DemoRoleSwitcher';
import { currentCustomerProfile } from '../../data/bookings';

export const CustomerNav = ({ onMobileMenuToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/customer';
  const isServices = location.pathname.includes('/services');

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E5E0D8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Navigation */}
        <div className="flex items-center gap-6">
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden p-2 rounded-xl bg-white border border-[#E5E0D8] text-[#191C1D]"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/" className="group">
            <Logo size="md" showTagline={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-[#5A6065]">
            <Link
              to="/customer"
              className={`transition-colors hover:text-[#191C1D] ${
                isHome ? 'text-[#1B4D3E] font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/customer/services/cleaning"
              className={`transition-colors hover:text-[#191C1D] ${
                isServices ? 'text-[#1B4D3E] font-semibold' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/customer/bookings"
              className={`transition-colors hover:text-[#191C1D] ${
                location.pathname.includes('/bookings') ? 'text-[#1B4D3E] font-semibold' : ''
              }`}
            >
              My Bookings
            </Link>
            <Link
              to="/customer/dashboard"
              className="transition-colors hover:text-[#191C1D]"
            >
              Messages
            </Link>
            <Link
              to="/customer/dashboard"
              className="px-3 py-1 rounded-full bg-[#E8F2EE] text-[#1B4D3E] font-semibold text-xs border border-[#C0DCD3] hover:bg-[#1B4D3E] hover:text-white transition-colors flex items-center gap-1"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </Link>
          </nav>
        </div>

        {/* Right: Search, Notifications, Avatar & Demo Role Switcher */}
        <div className="flex items-center gap-3">
          <DemoRoleSwitcher />

          <button
            onClick={() => navigate('/customer/dashboard')}
            className="p-2 rounded-xl bg-white border border-[#E5E0D8] text-[#191C1D] hover:border-[#1B4D3E]/40 relative transition-colors"
            title="Notifications"
          >
            <Bell className="w-4.5 h-4.5" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#C87D55]" />
          </button>

          <Link to="/customer/dashboard" className="hidden sm:flex items-center gap-2">
            <Avatar src={currentCustomerProfile.avatar} initials={currentCustomerProfile.initials} size="sm" />
            <span className="text-xs font-semibold text-[#191C1D] hidden lg:inline-block">
              {currentCustomerProfile.name}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default CustomerNav;
