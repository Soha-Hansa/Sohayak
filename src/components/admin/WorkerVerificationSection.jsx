import React, { useState } from 'react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';
import { pendingWorkerVerifications } from '../../data/analytics';
import { Check, X, Eye, ShieldCheck } from 'lucide-react';

export const WorkerVerificationSection = ({ className = '' }) => {
  const [verifications, setVerifications] = useState(pendingWorkerVerifications);
  const [reviewingWorker, setReviewingWorker] = useState(null);

  const handleAction = (id, newStatus) => {
    setVerifications(
      verifications.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {reviewingWorker && (
        <div className="p-4 bg-[#E8F2EE] border border-[#C0DCD3] rounded-2xl flex items-center justify-between text-xs text-[#1B4D3E]">
          <span>Reviewing identity & KYC credentials for <strong>{reviewingWorker.name}</strong> ({reviewingWorker.skill})</span>
          <button onClick={() => setReviewingWorker(null)} className="font-bold underline">Close</button>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
            MEMBER ONBOARDING QUEUE
          </span>
          <h3 className="font-serif-heading text-2xl font-normal text-[#191C1D]">
            Worker Verification
          </h3>
        </div>
        <span className="text-xs font-semibold text-[#1B4D3E] bg-[#E8F2EE] px-3 py-1 rounded-full border border-[#C0DCD3]">
          {verifications.filter(v => v.status === 'Verification Pending').length} Pending Review
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {verifications.map((worker) => {
          const isApproved = worker.status === 'Verified';
          const isRejected = worker.status === 'Rejected';

          return (
            <Card key={worker.id} variant="default" className="p-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Avatar src={worker.avatar} initials={worker.name.slice(0, 2)} size="md" />
                  <StatusBadge status={worker.status} size="sm" />
                </div>

                <div>
                  <h4 className="font-bold text-base text-[#191C1D]">{worker.name}</h4>
                  <p className="text-xs font-semibold text-[#1B4D3E]">{worker.skill}</p>
                  <p className="text-[11px] text-[#8A9197]">{worker.location}</p>
                </div>

                <div className="p-2.5 bg-[#F4F1EA] rounded-xl text-[11px] text-[#5A6065]">
                  <span>{worker.submittedTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#E5E0D8] space-y-2">
                {!isApproved && !isRejected ? (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="small"
                      onClick={() => setReviewingWorker(worker)}
                      className="p-2"
                      title="Review Documents"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="danger"
                      size="small"
                      onClick={() => handleAction(worker.id, 'Rejected')}
                      className="flex-1"
                    >
                      Reject
                    </Button>
                    <Button
                      variant="primary"
                      size="small"
                      onClick={() => handleAction(worker.id, 'Verified')}
                      className="flex-1"
                    >
                      Approve
                    </Button>
                  </div>
                ) : (
                  <div className="p-2 bg-[#E8F2EE] text-[#1B4D3E] rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#1B4D3E]" />
                    <span>Status Updated: {worker.status}</span>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default WorkerVerificationSection;
