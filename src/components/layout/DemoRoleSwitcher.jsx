import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Wrench, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const DemoRoleSwitcher = ({ className = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveRole = () => {
    if (location.pathname === '/') return 'landing';
    if (location.pathname.startsWith('/worker')) return 'worker';
    if (location.pathname.startsWith('/admin')) return 'admin';
    return 'customer';
  };

  const currentRole = getActiveRole();

  const roles = [
    {
      id: 'landing',
      label: 'Landing',
      path: '/',
      icon: Home,
    },
    {
      id: 'customer',
      label: 'Customer',
      path: '/customer',
      icon: User,
    },
    {
      id: 'worker',
      label: 'Worker-Owner',
      path: '/worker',
      icon: Wrench,
    },
    {
      id: 'admin',
      label: 'Co-op Admin',
      path: '/admin',
      icon: ShieldCheck,
    },
  ];

  return (
    <div
      className={`inline-flex items-center p-1 bg-[#F0EDE6] rounded-full border border-[#E5E0D8] shadow-xs shrink-0 ${className}`}
    >
      <span className="hidden xl:inline-block px-2.5 text-[10px] font-bold uppercase tracking-wider text-[#8A9197]">
        Prototype Navigation
      </span>
      {roles.map((role) => {
        const Icon = role.icon;
        const isActive = currentRole === role.id;

        return (
          <button
            key={role.id}
            onClick={() => navigate(role.path)}
            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'text-[#191C1D]'
                : 'text-[#5A6065] hover:text-[#191C1D]'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeRolePill"
                className="absolute inset-0 bg-white rounded-full shadow-tactile border border-[#E5E0D8]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#1B4D3E]' : 'text-[#8A9197]'}`} />
              <span className="hidden sm:inline-block">{role.label}</span>
              <span className="sm:hidden">{role.label.split('-')[0]}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default DemoRoleSwitcher;
