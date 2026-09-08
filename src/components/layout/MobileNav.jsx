import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Calendar, Compass, User, Briefcase, Wallet, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const MobileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isWorker = location.pathname.startsWith('/worker');
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) return null; // Admin uses sidebar console

  const customerItems = [
    { label: 'Home', path: '/customer', icon: Home },
    { label: 'Bookings', path: '/customer/booking-success', icon: Calendar },
    { label: 'Explore', path: '/customer/services/home-care', icon: Compass },
    { label: 'Profile', path: '/customer/provider/p-101', icon: User },
  ];

  const workerItems = [
    { label: 'Home', path: '/worker', icon: Home },
    { label: 'Jobs', path: '/worker/jobs/job-901', icon: Briefcase },
    { label: 'Earnings', path: '/worker/earnings', icon: Wallet },
    { label: 'Membership', path: '/worker/membership', icon: Award },
  ];

  const navItems = isWorker ? workerItems : customerItems;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#E5E0D8] px-2 py-1.5 shadow-[0_-4px_20px_rgba(25,28,29,0.05)]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path !== '/customer' && item.path !== '/worker' && location.pathname.startsWith(item.path));

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                isActive ? 'text-[#1B4D3E]' : 'text-[#8A9197] hover:text-[#5A6065]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeMobileTab"
                  className="absolute inset-0 bg-[#E8F2EE] rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.2]' : 'stroke-1.5'}`} />
              <span className="text-[10px] font-semibold tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
