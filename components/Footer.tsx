
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl">
                I
              </div>
              <span className="text-xl font-bold tracking-tight">Internadda</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              India's fastest growing internship platform for students and early professionals. We help you build the career you deserve.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-indigo-600 transition-colors">in</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-indigo-600 transition-colors">tw</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-indigo-600 transition-colors">ig</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Browse Internships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skill Assessments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Campus Ambassador</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Company Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Join Our Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest internships sent directly to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-indigo-500" 
              />
              <button className="bg-indigo-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-indigo-500 transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2024 Internadda. All rights reserved.</p>
          <p>Made with ❤️ for students in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
