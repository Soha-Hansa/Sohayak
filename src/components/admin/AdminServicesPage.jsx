import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';
import { Wrench, Plus, Edit2, Ban, CheckCircle2 } from 'lucide-react';

export const AdminServicesPage = () => {
  const [activeNotice, setActiveNotice] = useState(null);
  const [categories, setCategories] = useState([
    { id: 'cat-1', name: 'Electrical', workerCount: 124, jobsCompleted: 1480, startingRate: 299, status: 'Active' },
    { id: 'cat-2', name: 'Plumbing', workerCount: 98, jobsCompleted: 1120, startingRate: 349, status: 'Active' },
    { id: 'cat-3', name: 'Cleaning', workerCount: 142, jobsCompleted: 2150, startingRate: 599, status: 'Active' },
    { id: 'cat-4', name: 'Carpentry', workerCount: 76, jobsCompleted: 640, startingRate: 399, status: 'Active' },
    { id: 'cat-5', name: 'Painting', workerCount: 64, jobsCompleted: 420, startingRate: 999, status: 'Active' },
    { id: 'cat-6', name: 'AC & Appliances', workerCount: 88, jobsCompleted: 890, startingRate: 499, status: 'Active' },
    { id: 'cat-7', name: 'Delivery', workerCount: 52, jobsCompleted: 960, startingRate: 199, status: 'Active' },
    { id: 'cat-8', name: 'Tutoring', workerCount: 110, jobsCompleted: 780, startingRate: 450, status: 'Active' }
  ]);

  const handleToggleStatus = (id) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === 'Active' ? 'Disabled' : 'Active' }
          : c
      )
    );
  };

  return (
    <div className="space-y-6">
      {activeNotice && (
        <div className="p-4 bg-[#E8F2EE] border border-[#C0DCD3] rounded-2xl flex items-center justify-between text-xs font-sans-ui text-[#1B4D3E]">
          <span>{activeNotice}</span>
          <button onClick={() => setActiveNotice(null)} className="font-bold underline">Dismiss</button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
            CATALOG MANAGEMENT
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
            Service Categories
          </h2>
        </div>

        <Button
          variant="earth"
          size="small"
          onClick={() => setActiveNotice('Create Service Category form initialized (Demo Mode)')}
          icon={Plus}
        >
          Add Service Category
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Card key={cat.id} variant="default" className="p-5 space-y-4 bg-white border-[#E5E0D8]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#1B4D3E] bg-[#E8F2EE] px-2.5 py-0.5 rounded-full border border-[#C0DCD3]">
                {cat.workerCount} Workers
              </span>
              <StatusBadge status={cat.status} size="sm" />
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-base text-[#191C1D]">{cat.name}</h3>
              <p className="text-xs text-[#5A6065]">{cat.jobsCompleted} Completed Jobs</p>
              <p className="text-xs font-semibold text-[#191C1D] pt-1">
                Starting Rate: <span className="font-serif-heading font-bold text-[#1B4D3E]">₹{cat.startingRate}</span>
              </p>
            </div>

            <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between gap-2">
              <Button
                variant="secondary"
                size="small"
                onClick={() => setActiveNotice(`Editing category configuration for ${cat.name}`)}
                icon={Edit2}
              >
                Edit
              </Button>

              <Button
                variant="ghost"
                size="small"
                onClick={() => handleToggleStatus(cat.id)}
                icon={cat.status === 'Active' ? Ban : CheckCircle2}
                className={cat.status === 'Active' ? 'text-[#C53030] hover:bg-[#FEE2E2]/50' : 'text-[#1B4D3E]'}
              >
                {cat.status === 'Active' ? 'Disable' : 'Enable'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminServicesPage;
