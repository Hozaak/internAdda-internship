
import React from 'react';
import { PlatformStats } from '../types';

interface StatsProps {
  stats: PlatformStats;
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  const formatNumber = (num: number) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k+` : num;
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-3xl bg-indigo-50/50 border border-indigo-100/50">
            <p className="text-4xl font-extrabold text-indigo-600 mb-2">{formatNumber(stats.students_placed)}</p>
            <p className="text-slate-600 font-medium">Students Placed</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-purple-50/50 border border-purple-100/50">
            <p className="text-4xl font-extrabold text-purple-600 mb-2">{stats.active_internships}+</p>
            <p className="text-slate-600 font-medium">Active Internships</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100/50">
            <p className="text-4xl font-extrabold text-blue-600 mb-2">{stats.partner_companies}+</p>
            <p className="text-slate-600 font-medium">Partner Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
