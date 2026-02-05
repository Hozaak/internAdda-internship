
import React from 'react';

interface FilterBarProps {
  search: string;
  onSearchChange: (val: string) => void;
  selectedDomain: string;
  onDomainChange: (val: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ search, onSearchChange, selectedDomain, onDomainChange }) => {
  const domains = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Management'];

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
      <div className="relative w-full sm:w-64">
        <input 
          type="text"
          placeholder="Search roles or companies..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
        />
        <div className="absolute right-3 top-3.5 text-slate-400">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
           </svg>
        </div>
      </div>
      
      <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide w-full sm:w-auto">
        {domains.map(domain => (
          <button
            key={domain}
            onClick={() => onDomainChange(domain)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-xl font-medium transition-all ${
              selectedDomain === domain 
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
              : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
            }`}
          >
            {domain}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
