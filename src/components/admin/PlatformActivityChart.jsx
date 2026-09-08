import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { BarChart3, TrendingUp, Calendar } from 'lucide-react';

export const PlatformActivityChart = ({ className = '' }) => {
  const [timeRange, setTimeRange] = useState('30 Days');

  const activityData = [
    { label: 'Week 1', newUsers: 180, newGigs: 320, completedJobs: 290 },
    { label: 'Week 2', newUsers: 240, newGigs: 410, completedJobs: 380 },
    { label: 'Week 3', newUsers: 290, newGigs: 480, completedJobs: 440 },
    { label: 'Week 4', newUsers: 350, newGigs: 560, completedJobs: 510 },
  ];

  const maxVal = 600;

  return (
    <Card variant="feature" className={`p-6 sm:p-8 space-y-6 border-[#E5E0D8] ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E0D8] pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
            METRICS TREND ANALYTICS
          </span>
          <h3 className="font-serif-heading text-2xl font-semibold text-[#191C1D] mt-0.5">
            Platform Activity
          </h3>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center gap-1 bg-[#F4F1EA] p-1 rounded-xl border border-[#E5E0D8] text-xs font-medium">
          {['7 Days', '30 Days', '3 Months', '1 Year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                timeRange === range
                  ? 'bg-white text-[#191C1D] font-bold shadow-xs'
                  : 'text-[#5A6065] hover:text-[#191C1D]'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Legend Indicators */}
      <div className="flex items-center gap-6 text-xs font-medium text-[#5A6065]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#1B4D3E]" />
          <span>New Users</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#C87D55]" />
          <span>New Gigs</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#2D7D46]" />
          <span>Completed Jobs</span>
        </div>
      </div>

      {/* Animated Multi-Bar Chart Visualizer */}
      <div className="h-52 w-full bg-white rounded-2xl border border-[#E5E0D8] p-4 flex items-end justify-between gap-4">
        {activityData.map((d, idx) => (
          <div key={d.label} className="flex-1 flex flex-col items-center h-full justify-end gap-2 group">
            <div className="relative w-full flex items-end justify-center gap-1.5 h-36">
              {/* Bar 1: New Users */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${(d.newUsers / maxVal) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="flex-1 max-w-[16px] bg-[#1B4D3E] rounded-t-xs relative"
                title={`New Users: ${d.newUsers}`}
              />

              {/* Bar 2: New Gigs */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${(d.newGigs / maxVal) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 + 0.1 }}
                className="flex-1 max-w-[16px] bg-[#C87D55] rounded-t-xs relative"
                title={`New Gigs: ${d.newGigs}`}
              />

              {/* Bar 3: Completed Jobs */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${(d.completedJobs / maxVal) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 + 0.2 }}
                className="flex-1 max-w-[16px] bg-[#2D7D46] rounded-t-xs relative"
                title={`Completed Jobs: ${d.completedJobs}`}
              />
            </div>
            <span className="text-xs font-bold text-[#5A6065]">{d.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PlatformActivityChart;
