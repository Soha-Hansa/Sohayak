import React, { useState, useRef, useEffect } from 'react';
import { Bell, Menu, CheckCircle2, X } from 'lucide-react';
import Avatar from '../ui/Avatar';
import DemoRoleSwitcher from '../layout/DemoRoleSwitcher';
import { currentWorkerProfile, workerNotifications } from '../../data/workers';
import { motion, AnimatePresence } from 'framer-motion';

export const WorkerHeader = ({ onMobileMenuOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef(null);

  const unreadCount = workerNotifications.filter(n => n.unread).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E5E0D8] px-4 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Title & Greeting */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMobileMenuOpen}
            className="lg:hidden p-2 rounded-xl bg-white border border-[#E5E0D8] text-[#191C1D] hover:bg-[#F4F1EA]"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h1 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D] leading-tight">
              Good morning, <span className="italic text-[#1B4D3E]">{currentWorkerProfile.name.split(' ')[0]}</span>!
            </h1>
            <p className="text-xs sm:text-sm text-[#5A6065] font-sans-ui">
              Here’s what's happening with your work today.
            </p>
          </div>
        </div>

        {/* Right Header Utilities: Role Switcher, Notifications & Profile */}
        <div className="flex items-center gap-3 self-end md:self-auto flex-wrap">
          <DemoRoleSwitcher />

          {/* Notification Bell & Dropdown */}
          <div ref={notifRef} className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2.5 rounded-xl bg-white border border-[#E5E0D8] text-[#191C1D] hover:border-[#1B4D3E]/40 relative transition-colors cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-4.5 h-4.5 text-[#191C1D]" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#C87D55] ring-2 ring-white" />
              )}
            </button>

            {/* Notification Popover Dropdown */}
            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl border border-[#E5E0D8] shadow-tactile-lg p-4 z-50 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#191C1D]">
                      Notifications ({unreadCount} new)
                    </span>
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-[#8A9197] hover:text-[#191C1D]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-2 max-h-80 overflow-y-auto pr-1 scrollbar-none">
                    {workerNotifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-3 rounded-xl border text-xs space-y-1 transition-colors ${
                          notif.unread
                            ? 'bg-[#E8F2EE]/50 border-[#C0DCD3]'
                            : 'bg-[#F4F1EA]/50 border-[#E5E0D8]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-[#191C1D]">{notif.title}</span>
                          <span className="text-[10px] text-[#8A9197]">{notif.time}</span>
                        </div>
                        <p className="text-[#5A6065] leading-normal">{notif.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile Badge Indicator */}
          <div className="hidden sm:flex items-center gap-2.5 p-1.5 pl-2.5 pr-3 bg-white rounded-2xl border border-[#E5E0D8]">
            <Avatar src={currentWorkerProfile.avatar} initials={currentWorkerProfile.initials} size="xs" isCoopMember={true} />
            <div className="text-left leading-none">
              <span className="font-semibold text-xs text-[#191C1D] flex items-center gap-1">
                {currentWorkerProfile.name}
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4D3E]" />
              </span>
              <span className="text-[10px] text-[#8A9197]">{currentWorkerProfile.primarySkill}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorkerHeader;
