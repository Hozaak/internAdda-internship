
import React from 'react';
import { Internship } from '../types';

interface InternshipCardProps {
  internship: Internship;
  onApply: () => void;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, onApply }) => {
  return (
    <div className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <img 
            src={internship.company_logo} 
            alt={internship.company_name} 
            className="w-14 h-14 rounded-2xl object-cover shadow-sm bg-slate-50"
          />
          <div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {internship.title}
            </h3>
            <p className="text-sm font-medium text-slate-500">{internship.company_name}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
          internship.type === 'Remote' ? 'bg-green-50 text-green-700' : 
          internship.type === 'Hybrid' ? 'bg-blue-50 text-blue-700' : 'bg-orange-50 text-orange-700'
        }`}>
          {internship.type}
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-slate-600 gap-2 text-sm font-medium">
          <span className="w-5 h-5 flex items-center justify-center opacity-70">📍</span>
          {internship.location}
        </div>
        <div className="flex items-center text-slate-600 gap-2 text-sm font-medium">
          <span className="w-5 h-5 flex items-center justify-center opacity-70">💰</span>
          {internship.stipend}
        </div>
        <div className="flex items-center text-slate-600 gap-2 text-sm font-medium">
          <span className="w-5 h-5 flex items-center justify-center opacity-70">⏱️</span>
          {internship.duration}
        </div>
      </div>
      
      <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
        <div className="text-xs text-slate-400 font-medium">
          Posted {internship.posted_at}
        </div>
        <button 
          onClick={onApply}
          className="px-6 py-2.5 bg-brand-gradient text-white font-bold rounded-xl shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transform transition-all active:scale-95"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
