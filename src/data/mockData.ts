export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "part-time" | "full-time" | "internship" | "contract";
  category: string;
  wage: string;
  description: string;
  requirements: string[];
  postedDate: string;
  employer: {
    name: string;
    logo?: string;
    verified: boolean;
  };
  saved?: boolean;
}

export interface Application {
  id: string;
  jobId: string;
  job: Job;
  status: "pending" | "accepted" | "rejected" | "interview";
  appliedDate: string;
}

export const categories = [
  "All Categories",
  "Retail",
  "Food & Beverage",
  "Tutoring",
  "Delivery",
  "Events",
  "Office Work",
  "Customer Service",
  "Healthcare",
  "Technology",
];

export const locations = [
  "All Locations",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
];

export const jobTypes = [
  { value: "all", label: "All Types" },
  { value: "part-time", label: "Part-time" },
  { value: "full-time", label: "Full-time" },
  { value: "internship", label: "Internship" },
  { value: "contract", label: "Contract" },
];

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Retail Sales Associate",
    company: "City Fashion Store",
    location: "Mumbai",
    type: "part-time",
    category: "Retail",
    wage: "₹150-200/hr",
    description:
      "Join our dynamic retail team! We're looking for enthusiastic individuals to help customers, manage inventory, and create amazing shopping experiences. Perfect for students with flexible schedules.",
    requirements: [
      "Excellent communication skills",
      "Available weekends",
      "Customer-oriented mindset",
      "Basic computer skills",
    ],
    postedDate: "2026-01-15",
    employer: {
      name: "City Fashion Store",
      verified: true,
    },
  },
  {
    id: "2",
    title: "Cafe Barista",
    company: "Brew & Bean Coffee",
    location: "Bangalore",
    type: "part-time",
    category: "Food & Beverage",
    wage: "₹120-180/hr",
    description:
      "Love coffee? Join our team as a barista! Learn latte art, serve amazing beverages, and be part of a vibrant cafe culture. Training provided for beginners.",
    requirements: [
      "Passion for coffee",
      "Friendly personality",
      "Ability to work in fast-paced environment",
      "Morning availability preferred",
    ],
    postedDate: "2026-01-14",
    employer: {
      name: "Brew & Bean Coffee",
      verified: true,
    },
  },
  {
    id: "3",
    title: "Math Tutor",
    company: "LearnSmart Academy",
    location: "Delhi",
    type: "part-time",
    category: "Tutoring",
    wage: "₹300-500/hr",
    description:
      "Help students excel in mathematics! We need tutors for grades 6-12. Flexible hours that work around your college schedule. Make a difference in young minds.",
    requirements: [
      "Strong math background (Class 12+)",
      "Patience and teaching ability",
      "Available for evening sessions",
      "Good at explaining concepts",
    ],
    postedDate: "2026-01-13",
    employer: {
      name: "LearnSmart Academy",
      verified: true,
    },
  },
  {
    id: "4",
    title: "Food Delivery Partner",
    company: "QuickBite Delivery",
    location: "Chennai",
    type: "contract",
    category: "Delivery",
    wage: "₹80-150/delivery",
    description:
      "Earn on your own schedule! Deliver food from popular restaurants to hungry customers. Use your bike or scooter. Weekly payments with bonuses for top performers.",
    requirements: [
      "Own vehicle (bike/scooter)",
      "Valid driving license",
      "Smartphone with internet",
      "Knowledge of local areas",
    ],
    postedDate: "2026-01-12",
    employer: {
      name: "QuickBite Delivery",
      verified: false,
    },
  },
  {
    id: "5",
    title: "Event Staff",
    company: "Grand Events Co.",
    location: "Hyderabad",
    type: "contract",
    category: "Events",
    wage: "₹800-1200/event",
    description:
      "Be part of exciting events! From weddings to corporate gatherings, help create memorable experiences. Great for those who love meeting new people and dynamic environments.",
    requirements: [
      "Professional appearance",
      "Excellent communication",
      "Weekend availability",
      "Team player attitude",
    ],
    postedDate: "2026-01-11",
    employer: {
      name: "Grand Events Co.",
      verified: true,
    },
  },
  {
    id: "6",
    title: "Data Entry Operator",
    company: "TechSolutions Pvt Ltd",
    location: "Pune",
    type: "internship",
    category: "Office Work",
    wage: "₹8,000-12,000/month",
    description:
      "Kickstart your career in office administration! Learn data management, Excel, and business processes. Great stepping stone to full-time opportunities.",
    requirements: [
      "Good typing speed (40+ WPM)",
      "MS Office proficiency",
      "Attention to detail",
      "Currently enrolled in college",
    ],
    postedDate: "2026-01-10",
    employer: {
      name: "TechSolutions Pvt Ltd",
      verified: true,
    },
  },
  {
    id: "7",
    title: "Customer Support Executive",
    company: "HelpDesk Solutions",
    location: "Kolkata",
    type: "full-time",
    category: "Customer Service",
    wage: "₹15,000-22,000/month",
    description:
      "Join our customer support team! Handle inquiries, resolve issues, and ensure customer satisfaction. Comprehensive training provided. Work from home options available.",
    requirements: [
      "Fluent in English and Hindi",
      "Problem-solving skills",
      "Basic computer knowledge",
      "Patience and empathy",
    ],
    postedDate: "2026-01-09",
    employer: {
      name: "HelpDesk Solutions",
      verified: true,
    },
  },
  {
    id: "8",
    title: "Pharmacy Assistant",
    company: "HealthPlus Pharmacy",
    location: "Ahmedabad",
    type: "part-time",
    category: "Healthcare",
    wage: "₹100-150/hr",
    description:
      "Assist pharmacists in daily operations. Help customers, manage inventory, and learn about healthcare products. Great experience for pharmacy or medical students.",
    requirements: [
      "Healthcare/Pharmacy student preferred",
      "Attention to detail",
      "Good communication skills",
      "Available for rotating shifts",
    ],
    postedDate: "2026-01-08",
    employer: {
      name: "HealthPlus Pharmacy",
      verified: true,
    },
  },
];

export const mockApplications: Application[] = [
  {
    id: "app1",
    jobId: "1",
    job: mockJobs[0],
    status: "pending",
    appliedDate: "2026-01-16",
  },
  {
    id: "app2",
    jobId: "3",
    job: mockJobs[2],
    status: "accepted",
    appliedDate: "2026-01-14",
  },
  {
    id: "app3",
    jobId: "5",
    job: mockJobs[4],
    status: "interview",
    appliedDate: "2026-01-12",
  },
  {
    id: "app4",
    jobId: "6",
    job: mockJobs[5],
    status: "rejected",
    appliedDate: "2026-01-10",
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Engineering Student",
    content:
      "RozGo helped me find a part-time tutoring job that fits perfectly with my college schedule. I'm earning while learning!",
    avatar: "PS",
  },
  {
    id: "2",
    name: "Rahul Enterprises",
    role: "Small Business Owner",
    content:
      "We found reliable staff for our cafe within 48 hours. The quality of candidates is amazing and the process is so simple.",
    avatar: "RE",
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "Commerce Graduate",
    content:
      "Started as a weekend retail assistant, now I'm a store supervisor. RozGo opened doors I never knew existed!",
    avatar: "AP",
  },
];
