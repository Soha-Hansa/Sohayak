import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import {
  CheckCircle2,
  XCircle,
  MapPin,
  Clock,
  User,
  AlertCircle,
  Check
} from 'lucide-react';

export const WorkerJobRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 'req-201',
      service: 'Full Flat Circuit Overload Diagnosis',
      customer: 'Subhashish Nandi',
      location: 'Howrah AC Market Area',
      dateTime: 'Today, 04:30 PM',
      payment: 750,
      distance: '1.8 km away',
      description: 'Main tripping happening whenever AC and Geyser run simultaneously.',
      status: 'Pending'
    },
    {
      id: 'req-202',
      service: 'Smart Modular Switchboard Fitting',
      customer: 'Priya Sen',
      location: 'Shibpur Howrah',
      dateTime: 'Tomorrow, 11:00 AM',
      payment: 450,
      distance: '2.5 km away',
      description: 'Replace old 4-gang switch board with modern modular switches.',
      status: 'Pending'
    },
    {
      id: 'req-203',
      service: 'Emergency Fuse Box Wiring Repair',
      customer: 'Debjit Paul',
      location: 'Ballygunge Kolkata',
      dateTime: 'Tomorrow, 02:00 PM',
      payment: 600,
      distance: '3.2 km away',
      description: 'Sparks noticed in main distribution box near meter room.',
      status: 'Pending'
    }
  ]);

  const handleAccept = (reqId) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === reqId ? { ...r, status: 'Accepted' } : r))
    );
  };

  const handleDecline = (reqId) => {
    setRequests((prev) => prev.filter((r) => r.id !== reqId));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
            INCOMING DISPATCH
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
            Job Requests
          </h2>
        </div>
        <span className="text-xs font-bold text-[#C87D55] bg-[#F9F0EA] px-3 py-1 rounded-full">
          {requests.filter((r) => r.status === 'Pending').length} Pending Requests
        </span>
      </div>

      <div className="space-y-4">
        {requests.map((req) => (
          <Card key={req.id} variant="default" className="p-5 space-y-4 bg-white border-[#E5E0D8]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E0D8] pb-3">
              <div>
                <span className="text-[10px] font-mono text-[#8A9197]">#{req.id}</span>
                <h3 className="font-bold text-base text-[#191C1D]">{req.service}</h3>
              </div>

              {req.status === 'Accepted' ? (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1B4D3E] bg-[#E8F2EE] px-3 py-1 rounded-full border border-[#C0DCD3]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Accepted</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C87D55] bg-[#F9F0EA] px-3 py-1 rounded-full">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>New Request</span>
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#5A6065]">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#1B4D3E]" />
                <span>Customer: <strong className="text-[#191C1D]">{req.customer}</strong></span>
              </div>

              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C87D55]" />
                <span>{req.location} ({req.distance})</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1B4D3E]" />
                <span>{req.dateTime}</span>
              </div>
            </div>

            <p className="text-xs text-[#5A6065] leading-relaxed bg-[#FBF9F5] p-3 rounded-xl border border-[#E5E0D8]">
              {req.description}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#8A9197] uppercase font-bold block">ESTIMATED PAY</span>
                <span className="font-serif-heading text-lg font-bold text-[#1B4D3E]">
                  ₹{req.payment}
                </span>
              </div>

              {req.status === 'Pending' ? (
                <div className="flex items-center gap-2">
                  <Button
                    variant="earth"
                    size="small"
                    onClick={() => handleAccept(req.id)}
                    icon={CheckCircle2}
                  >
                    Accept Request
                  </Button>

                  <Button
                    variant="ghost"
                    size="small"
                    onClick={() => handleDecline(req.id)}
                    className="text-[#C53030] hover:bg-[#FEE2E2]/50"
                  >
                    Decline
                  </Button>
                </div>
              ) : (
                <span className="text-xs font-bold text-[#1B4D3E] bg-[#E8F2EE] px-3 py-1.5 rounded-lg">
                  Scheduled in Today's Jobs
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkerJobRequests;
