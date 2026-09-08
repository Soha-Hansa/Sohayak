import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import MobileNav from './components/layout/MobileNav';
import LandingShell from './pages/LandingShell';
import CustomerShell from './pages/CustomerShell';
import CustomerDashboard from './pages/CustomerDashboard';
import WorkerDashboard from './pages/WorkerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminShell from './pages/AdminShell';

import CategoryServicePage from './pages/CategoryServicePage';
import CustomerProviderListingPage from './pages/CustomerProviderListingPage';
import ProviderProfilePage from './pages/ProviderProfilePage';
import BookingSuccessPage from './pages/BookingSuccessPage';
import CustomerBookingsPage from './pages/CustomerBookingsPage';
import ReviewPage from './pages/ReviewPage';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FBF9F5] text-[#191C1D] flex flex-col font-sans-ui selection:bg-[#1B4D3E]/15 selection:text-[#1B4D3E]">
        {/* Dynamic Route Content Shell */}
        <div className="flex-1 pb-20 md:pb-12">
          <Routes>
            {/* Landing Page Shell */}
            <Route path="/" element={<><Navbar /><LandingShell /></>} />

            {/* Customer Marketplace & Dashboard Routes */}
            <Route path="/customer" element={<CustomerShell />} />
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
            <Route path="/customer/services/:category" element={<CategoryServicePage />} />
            <Route path="/customer/providers" element={<CustomerProviderListingPage />} />
            <Route path="/customer/providers/:id" element={<ProviderProfilePage />} />
            <Route path="/customer/provider/:id" element={<ProviderProfilePage />} />
            <Route path="/customer/book/:id" element={<ProviderProfilePage />} />
            <Route path="/customer/bookings" element={<CustomerBookingsPage />} />
            <Route path="/customer/booking-success" element={<BookingSuccessPage />} />
            <Route path="/customer/review/:id" element={<ReviewPage />} />

            {/* Worker-Owner Dashboard Routes */}
            <Route path="/worker" element={<WorkerDashboard />} />
            <Route path="/worker/dashboard" element={<WorkerDashboard />} />
            <Route path="/worker/jobs/:id" element={<WorkerDashboard />} />
            <Route path="/worker/membership" element={<WorkerDashboard />} />
            <Route path="/worker/earnings" element={<WorkerDashboard />} />

            {/* Cooperative Governance Admin Console Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/members" element={<AdminDashboard />} />
            <Route path="/admin/services" element={<AdminDashboard />} />
            <Route path="/admin/governance" element={<AdminDashboard />} />
            <Route path="/admin/analytics" element={<AdminDashboard />} />

            {/* Fallback Catch-All Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Reusable Mobile Bottom Navigation */}
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
