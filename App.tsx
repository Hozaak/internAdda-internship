
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FilterBar from './components/FilterBar';
import InternshipCard from './components/InternshipCard';
import Footer from './components/Footer';
import { Internship, PlatformStats, Domain } from './types';

// Mock Supabase fetching logic for the frontend demonstration
// In a real project, you would import { supabase } from './supabase'
const fetchInternships = async (search: string, domain: string): Promise<Internship[]> => {
  // Simulating API latency
  await new Promise(r => setTimeout(r, 500));
  
  // This would be: await supabase.from('internships').select('*')...
  const mockData: Internship[] = [
    {
      id: '1',
      title: 'Frontend Developer Intern',
      company_name: 'TechNova',
      company_logo: 'https://picsum.photos/seed/tech/100/100',
      location: 'Bangalore, IN',
      domain: 'Engineering',
      type: 'Remote',
      duration: '6 Months',
      stipend: '₹15,000 / month',
      posted_at: '2 days ago',
      deadline: '2024-12-30'
    },
    {
      id: '2',
      title: 'UI/UX Design Intern',
      company_name: 'CreativePixel',
      company_logo: 'https://picsum.photos/seed/design/100/100',
      location: 'Mumbai, IN',
      domain: 'Design',
      type: 'Hybrid',
      duration: '3 Months',
      stipend: '₹10,000 / month',
      posted_at: '1 day ago',
      deadline: '2024-12-25'
    },
    {
      id: '3',
      title: 'Marketing Associate',
      company_name: 'GrowthPulse',
      company_logo: 'https://picsum.photos/seed/market/100/100',
      location: 'Delhi, IN',
      domain: 'Marketing',
      type: 'On-site',
      duration: '4 Months',
      stipend: '₹12,000 / month',
      posted_at: '5 hours ago',
      deadline: '2024-12-28'
    },
    {
      id: '4',
      title: 'Backend (Node.js) Intern',
      company_name: 'CloudSystems',
      company_logo: 'https://picsum.photos/seed/cloud/100/100',
      location: 'Hyderabad, IN',
      domain: 'Engineering',
      type: 'Remote',
      duration: '6 Months',
      stipend: '₹20,000 / month',
      posted_at: '3 days ago',
      deadline: '2025-01-15'
    },
    {
      id: '5',
      title: 'Data Analyst Intern',
      company_name: 'Insightify',
      company_logo: 'https://picsum.photos/seed/data/100/100',
      location: 'Pune, IN',
      domain: 'Engineering',
      type: 'Remote',
      duration: '3 Months',
      stipend: '₹18,000 / month',
      posted_at: '4 days ago',
      deadline: '2025-01-10'
    },
    {
      id: '6',
      title: 'HR Operations Intern',
      company_name: 'PeopleFirst',
      company_logo: 'https://picsum.photos/seed/hr/100/100',
      location: 'Gurgaon, IN',
      domain: 'Management',
      type: 'Hybrid',
      duration: '6 Months',
      stipend: '₹8,000 / month',
      posted_at: '1 week ago',
      deadline: '2024-12-20'
    }
  ];

  return mockData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.company_name.toLowerCase().includes(search.toLowerCase());
    const matchesDomain = domain === 'All' || item.domain === domain;
    return matchesSearch && matchesDomain;
  });
};

const fetchStats = async (): Promise<PlatformStats> => {
  // This would be: await supabase.from('platform_stats').select('*')
  return {
    students_placed: 12500,
    active_internships: 450,
    partner_companies: 850
  };
};

const App: React.FC = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [stats, setStats] = useState<PlatformStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [internshipData, statData] = await Promise.all([
          fetchInternships(search, selectedDomain),
          fetchStats()
        ]);
        setInternships(internshipData);
        setStats(statData);
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };
    loadInitialData();
  }, [search, selectedDomain]);

  const handleApply = (id: string) => {
    // Redirect to login/signup in production
    window.location.href = '#/login';
    console.log(`Redirecting to apply for internship: ${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {stats && <Stats stats={stats} />}
        
        <div id="listings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Internships</h2>
              <p className="text-slate-500 mt-2">Discover opportunities tailored for your growth</p>
            </div>
            
            <FilterBar 
              search={search} 
              onSearchChange={setSearch} 
              selectedDomain={selectedDomain} 
              onDomainChange={setSelectedDomain} 
            />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-white p-6 rounded-2xl shadow-soft animate-pulse">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-lg"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-32 bg-slate-200 rounded"></div>
                      <div className="h-3 w-20 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                  <div className="h-4 w-full bg-slate-200 rounded mb-4"></div>
                  <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {internships.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {internships.map((internship) => (
                    <InternshipCard 
                      key={internship.id} 
                      internship={internship} 
                      onApply={() => handleApply(internship.id)} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl shadow-soft">
                  <div className="text-slate-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-slate-800">No internships found</h3>
                  <p className="text-slate-500">Try adjusting your filters or search terms</p>
                  <button 
                    onClick={() => {setSearch(''); setSelectedDomain('All');}}
                    className="mt-6 text-indigo-600 font-medium hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
