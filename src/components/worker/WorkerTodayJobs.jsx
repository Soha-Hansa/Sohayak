import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  PlayCircle,
  Eye,
  User,
  Briefcase,
  Sparkles
} from 'lucide-react';

export const WorkerTodayJobs = () => {
  const [jobs, setJobs] = useState([
    {
      id: 'job-101',
      service: 'Home Electrical Circuit Diagnosis & Repair',
      customer: 'Sabyasachi Mukherjee',
      location: 'Flat 4A, Shibpur, Howrah',
      time: '10:00 AM - 12:00 PM (Today)',
      earning: 499,
      status: 'In Progress'
    },
    {
      id: 'job-102',
      service: 'BLDC Ceiling Fan & Switch Fitting',
      customer: 'Pooja Ghosh',
      location: '12/1 Gariahat Road, Kolkata',
      time: '02:30 PM - 04:00 PM (Today)',
      earning: 349,
      status: 'Upcoming'
    },
    {
      id: 'job-103',
      service: 'MCB Breaker Tripping Audit',
      customer: 'Aniket Roy',
      location: 'Block C, Salt Lake Sector 1',
      time: '05:30 PM - 07:00 PM (Today)',
      earning: 599,
      status: 'Upcoming'
    },
    {
      id: 'job-104',
      service: 'Inverter Battery Terminal Replacement',
      customer: 'Debolina Kanti',
      location: '7B Ballygunge Place',
      time: '08:30 AM - 09:30 AM (Today)',
      earning: 299,
      status: 'Completed'
    }
  ]);

  const handleUpdateStatus = (jobId, newStatus) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === jobId ? { ...job, status: newStatus } : job))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
            WORKER DISPATCH
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
            Today's Schedule & Jobs
          </h2>
        </div>
        <span className="text-xs font-bold text-[#1B4D3E] bg-[#E8F2EE] px-3 py-1 rounded-full">
          {jobs.filter((j) => j.status !== 'Completed').length} Active Today
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <Card key={job.id} variant="default" className="p-5 space-y-4 bg-white border-[#E5E0D8]">
            <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-3">
              <span className="font-mono text-xs text-[#8A9197]">#{job.id}</span>
              <StatusBadge status={job.status} />
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base text-[#191C1D] leading-snug">{job.service}</h3>

              <div className="space-y-1 text-xs text-[#5A6065]">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#1B4D3E]" />
                  <span>Customer: <strong className="text-[#191C1D]">{job.customer}</strong></span>
                </div>

                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C87D55]" />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#1B4D3E]" />
                  <span>{job.time}</span>
                </div>
              </div>
            </div>

            {/* Earning & Interactive Actions */}
            <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] text-[#8A9197] uppercase font-bold block">EST. EARNING</span>
                <span className="font-serif-heading text-lg font-bold text-[#1B4D3E]">
                  ₹{job.earning}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {job.status === 'Upcoming' && (
                  <Button
                    variant="earth"
                    size="small"
                    onClick={() => handleUpdateStatus(job.id, 'In Progress')}
                    icon={PlayCircle}
                  >
                    Start Job
                  </Button>
                )}

                {job.status === 'In Progress' && (
                  <Button
                    variant="primary"
                    size="small"
                    onClick={() => handleUpdateStatus(job.id, 'Completed')}
                    icon={CheckCircle2}
                  >
                    Mark Complete
                  </Button>
                )}

                {job.status === 'Completed' && (
                  <span className="text-xs font-bold text-[#1B4D3E] bg-[#E8F2EE] px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Done</span>
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkerTodayJobs;
