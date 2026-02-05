
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 border-b border-slate-100 py-20 lg:py-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
            🚀 Accelerate your career with premium internships
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Bridge the gap between <br />
            <span className="text-brand-gradient">Learning and Earning</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed">
            Internadda connects India's top talent with industry leaders. Get real-world experience, build your portfolio, and land your dream job.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#listings" className="w-full sm:w-auto px-8 py-4 bg-brand-gradient text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform transition-all hover:-translate-y-1">
              Explore Internships
            </a>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 text-lg font-bold rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors">
              How it works
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6 grayscale opacity-60">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Trusted by companies from</p>
            {/* Simple placeholder logos */}
            <div className="flex gap-8">
              <span className="font-bold text-xl text-slate-400">Google</span>
              <span className="font-bold text-xl text-slate-400">Microsoft</span>
              <span className="font-bold text-xl text-slate-400">Amazon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
