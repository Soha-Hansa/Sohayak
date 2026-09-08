import React from 'react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import StatusBadge from '../ui/StatusBadge';
import Button from '../ui/Button';
import CooperativeBadge from '../ui/CooperativeBadge';
import { Clock, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';

export const OngoingJobCard = ({ job, onViewJob, className = '' }) => {
  if (!job) return null;

  return (
    <Card variant="feature" className={`p-6 space-y-5 border-[#C0DCD3] ${className}`}>
      {/* Header: Status Pill */}
      <div className="flex items-center justify-between">
        <StatusBadge status={job.status} size="md" />
        <span className="text-xs font-semibold text-[#1B4D3E] flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {job.scheduledTime}
        </span>
      </div>

      {/* Worker & Service Title */}
      <div className="flex items-start gap-4">
        <Avatar src={job.workerAvatar} initials={job.workerName.slice(0, 2)} size="lg" isCoopMember={true} />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-base text-[#191C1D]">{job.workerName}</h4>
            <CooperativeBadge size="sm" showLabel={false} />
          </div>
          <p className="text-xs font-semibold text-[#1B4D3E]">{job.serviceTitle}</p>
          <span className="text-xs text-[#5A6065] flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#C87D55]" /> {job.location}
          </span>
        </div>
      </div>

      {/* Visual Step Progress Bar: Accepted -> In Progress -> Completed */}
      <div className="space-y-2 bg-white p-4 rounded-xl border border-[#E5E0D8]">
        <span className="text-[10px] font-bold text-[#8A9197] uppercase tracking-wider block">JOB PROGRESS</span>
        <div className="grid grid-cols-3 gap-1 relative text-center text-xs font-medium">
          {job.stages.map((stage, idx) => {
            const stageNum = idx + 1;
            const isDone = stageNum <= job.currentStage;
            const isCurrent = stageNum === job.currentStage;

            return (
              <div key={stage} className="flex flex-col items-center gap-1.5 z-10">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                    isCurrent
                      ? 'bg-[#1B4D3E] text-white ring-4 ring-[#E8F2EE]'
                      : isDone
                      ? 'bg-[#2D7D46] text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {isDone ? '✓' : stageNum}
                </div>
                <span className={`text-[11px] ${isCurrent ? 'font-bold text-[#1B4D3E]' : 'text-[#8A9197]'}`}>
                  {stage}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer: Payment & Actions */}
      <div className="pt-2 flex items-center justify-between border-t border-[#E5E0D8]">
        <div>
          <span className="text-[10px] text-[#8A9197] font-bold uppercase">PAYMENT</span>
          <p className="font-bold text-lg text-[#191C1D]">₹{job.paymentINR}</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="small" icon={MessageSquare}>
            Message
          </Button>
          <Button variant="primary" size="small" onClick={() => onViewJob(job)}>
            View Job
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default OngoingJobCard;
