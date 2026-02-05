
export interface Internship {
  id: string;
  title: string;
  company_name: string;
  company_logo: string;
  location: string;
  domain: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  duration: string;
  stipend: string;
  posted_at: string;
  deadline: string;
}

export interface PlatformStats {
  students_placed: number;
  active_internships: number;
  partner_companies: number;
}

export enum Domain {
  Engineering = 'Engineering',
  Design = 'Design',
  Marketing = 'Marketing',
  Sales = 'Sales',
  Management = 'Management',
  Other = 'Other'
}
