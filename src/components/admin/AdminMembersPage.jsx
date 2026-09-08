import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import StatusBadge from '../ui/StatusBadge';
import { Search, UserCheck, Filter, ShieldCheck } from 'lucide-react';

export const AdminMembersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [managedMember, setManagedMember] = useState(null);

  const membersList = [
    { id: 'm-1', name: 'Rahul Das', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80', role: 'Worker', location: 'Howrah, West Bengal', joinedDate: 'Jan 2025', jobsCompleted: 126, status: 'Active' },
    { id: 'm-2', name: 'Ananya Sen', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80', role: 'Customer', location: 'Howrah Central', joinedDate: 'Feb 2025', jobsCompleted: 18, status: 'Active' },
    { id: 'm-3', name: 'Moumita Roy', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80', role: 'Worker', location: 'Bally, Howrah', joinedDate: 'Mar 2025', jobsCompleted: 176, status: 'Active' },
    { id: 'm-4', name: 'Suman Mondal', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=250&q=80', role: 'Worker', location: 'Shibpur, Howrah', joinedDate: 'Apr 2025', jobsCompleted: 291, status: 'Active' },
    { id: 'm-5', name: 'Biswajit Mitra', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80', role: 'Customer', location: 'Kolkata Central', joinedDate: 'May 2025', jobsCompleted: 9, status: 'Pending' },
    { id: 'm-6', name: 'Debashis Paul', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80', role: 'Worker', location: 'Salkia, Howrah', joinedDate: 'Jun 2025', jobsCompleted: 310, status: 'Active' },
    { id: 'm-7', name: 'Antara Haldar', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80', role: 'Admin', location: 'Chapter HQ, Howrah', joinedDate: 'Jan 2024', jobsCompleted: 0, status: 'Active' },
    { id: 'm-8', name: 'Vikramjit Singh', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80', role: 'Customer', location: 'Salt Lake, Kolkata', joinedDate: 'Jul 2025', jobsCompleted: 3, status: 'Suspended' }
  ];

  const filteredMembers = membersList.filter((m) => {
    if (roleFilter !== 'all' && m.role.toLowerCase() !== roleFilter.toLowerCase()) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return m.name.toLowerCase().includes(q) || m.location.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {(selectedMember || managedMember) && (
        <div className="p-4 bg-[#E8F2EE] border border-[#C0DCD3] rounded-2xl flex items-center justify-between text-xs font-sans-ui text-[#1B4D3E]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1B4D3E]" />
            <span>
              {selectedMember ? `Viewing profile record for ${selectedMember.name} (${selectedMember.role})` : `Managing settings for ${managedMember.name}`}
            </span>
          </div>
          <button
            onClick={() => { setSelectedMember(null); setManagedMember(null); }}
            className="font-bold underline hover:text-[#191C1D]"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
            DIRECTORY MANAGEMENT
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
            Cooperative Members
          </h2>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8A9197] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search member by name..."
              className="pl-9 pr-4 py-2 bg-white text-xs font-semibold rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#1B4D3E]"
            />
          </div>

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-3 py-2 bg-white text-xs font-semibold rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#1B4D3E]"
          >
            <option value="all">All Roles</option>
            <option value="worker">Worker</option>
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      {/* Members Directory Table */}
      <Card variant="default" className="p-5 bg-white border-[#E5E0D8]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#191C1D]">
            <thead className="bg-[#F4F1EA] uppercase tracking-wider text-[#8A9197] font-bold">
              <tr>
                <th className="p-3">Member</th>
                <th className="p-3">Role</th>
                <th className="p-3">Location</th>
                <th className="p-3">Joined Date</th>
                <th className="p-3">Jobs Done</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E0D8]">
              {filteredMembers.map((m) => (
                <tr key={m.id} className="hover:bg-[#FBF9F5]">
                  <td className="p-3">
                    <div className="flex items-center gap-2.5">
                      <Avatar src={m.avatar} initials={m.name.slice(0, 2)} size="sm" />
                      <span className="font-bold text-[#191C1D]">{m.name}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="font-semibold text-[#1B4D3E] bg-[#E8F2EE] px-2.5 py-0.5 rounded-full border border-[#C0DCD3]">
                      {m.role}
                    </span>
                  </td>
                  <td className="p-3 text-[#5A6065]">{m.location}</td>
                  <td className="p-3 text-[#8A9197]">{m.joinedDate}</td>
                  <td className="p-3 font-bold text-[#191C1D]">{m.jobsCompleted}</td>
                  <td className="p-3">
                    <StatusBadge status={m.status} size="sm" />
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="small" onClick={() => setSelectedMember(m)}>
                        View
                      </Button>
                      <Button variant="secondary" size="small" onClick={() => setManagedMember(m)}>
                        Manage
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminMembersPage;
