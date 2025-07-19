// types/index.ts

export interface Application {
  id: string;
  workerName: string;
  rating: number;
  experience: string;
  proposal: string;
}

export interface PostedJob {
  id: string;
  title: string;
  category: string;
  budget: string;
  description: string;
  location: string;
  urgency: "urgent" | "normal";
  status: "active" | "completed" | "in-progress";
  postedDate: string;
  applicants: number;
  completedDate?: string; // Optional property
  workerName?: string; // Optional property (for completed jobs)
  rating?: number; // Optional property (for completed jobs)
  assignedWorker?: string; // Optional property (for in-progress jobs)
  applications?: Application[]; // Optional property (for active jobs)
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  location: string;
  phone: string;
  email: string;
  memberSince: string;
  totalJobs: number;
  activeJobs: number;
  completedJobs: number;
  avgRating: number;
}

export interface Worker {
  id: string;
  name: string;
  profession: string;
  rating: number;
  completedJobs: number;
  location: string;
  rate: string;
  avatar: string;
  skills: string[];
  availability: string;
}