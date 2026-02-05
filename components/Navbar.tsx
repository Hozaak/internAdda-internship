
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                I
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">Intern<span className="text-indigo-600">adda</span></span>
            </a>
            
            <div className="hidden md:flex ml-10 space-x-8">
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Internships</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Courses</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Resources</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-slate-600 hover:text-indigo-600 font-semibold px-4 py-2">
              Login
            </button>
            <button className="bg-brand-gradient text-white px-6 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transform transition-all active:scale-95">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
