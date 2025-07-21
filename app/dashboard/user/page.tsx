// app/dashboard/user/page.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModeToggle } from "@/components/modeToggle";
import {
  HeartHandshake,
  Briefcase,
  Star,
  Clock,
  MapPin,
  Edit,
  Plus,
  CheckCircle,
  Calendar,
  IndianRupee,
  Users,
  Bell,
  Search, // Imported
  Filter, // Imported
  MessageSquare,
  Eye,
} from "lucide-react";

// Import your defined types
import { User, PostedJob, Worker, Application } from "@/types";

// Mock data - replace with real API calls
const mockUser: User = {
  id: "1",
  name: "Priya Nair",
  avatar: "",
  location: "Aluva, Kerala",
  phone: "+91 98765 12345",
  email: "priya.nair@email.com",
  memberSince: "2024-01-15",
  totalJobs: 23,
  activeJobs: 3,
  completedJobs: 18,
  avgRating: 4.7,
};

const mockPostedJobs: PostedJob[] = [
  {
    id: "1",
    title: "Kitchen Pipe Repair",
    category: "Plumbing",
    budget: "₹1,500",
    description:
      "Need urgent repair for kitchen sink pipe leak. Water is dripping continuously.",
    location: "Aluva, Kerala",
    urgency: "urgent",
    status: "active",
    postedDate: "2024-07-18",
    applicants: 5,
    applications: [
      {
        id: "1",
        workerName: "Ravi Kumar",
        rating: 4.8,
        experience: "5 years",
        proposal: "I can fix this today",
      },
      {
        id: "2",
        workerName: "Sunil Menon",
        rating: 4.5,
        experience: "3 years",
        proposal: "Available immediately",
      },
    ],
  },
  {
    id: "2",
    title: "Garden Cleaning",
    category: "Gardening",
    budget: "₹800",
    description: "Need someone to clean and maintain small garden area.",
    location: "Aluva, Kerala",
    urgency: "normal",
    status: "completed",
    postedDate: "2024-07-10",
    completedDate: "2024-07-12",
    workerName: "Rajeev Pillai",
    rating: 5,
    applicants: 3,
  },
  {
    id: "3",
    title: "AC Installation",
    category: "Electrical",
    budget: "₹3,500",
    description: "Install new split AC in bedroom with proper wiring.",
    location: "Aluva, Kerala",
    urgency: "normal",
    status: "in-progress",
    postedDate: "2024-07-15",
    assignedWorker: "Anil Kumar",
    applicants: 8,
  },
];

const mockWorkers: Worker[] = [
  {
    id: "1",
    name: "Ravi Kumar",
    profession: "Plumber",
    rating: 4.8,
    completedJobs: 147,
    location: "Perumbavoor, Kerala",
    rate: "₹200/hour",
    avatar: "",
    skills: ["Pipe Fitting", "Leak Repair", "Bathroom Installation"],
    availability: "Available Now",
  },
  {
    id: "2",
    name: "Sunil Menon",
    profession: "Electrician",
    rating: 4.6,
    completedJobs: 89,
    location: "Aluva, Kerala",
    rate: "₹250/hour",
    avatar: "",
    skills: ["Wiring", "AC Installation", "Fan Installation"],
    availability: "Available Tomorrow",
  },
  {
    id: "3",
    name: "Rajeev Pillai",
    profession: "Gardener",
    rating: 4.9,
    completedJobs: 203,
    location: "Angamaly, Kerala",
    rate: "₹150/hour",
    avatar: "",
    skills: ["Lawn Care", "Plant Maintenance", "Landscaping"],
    availability: "Available Now",
  },
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showPostJobDialog, setShowPostJobDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState<PostedJob | null>(null); // Explicitly typed
  const [showApplicationsDialog, setShowApplicationsDialog] = useState(false);

  const [jobForm, setJobForm] = useState({
    title: "",
    category: "",
    description: "",
    budget: "",
    urgency: "normal",
    location: mockUser.location,
  });
  //   gemini opened
  const [profileForm, setProfileForm] = useState({
    name: mockUser.name,
    phone: mockUser.phone,
    email: mockUser.email,
    location: mockUser.location,
  });
  const handleUpdateProfile = () => {
    // Here you would typically send the profileForm data to your API
    console.log("Updating profile:", profileForm);
    // You might also want to show a success message or refetch user data
  };
  //   gemini closed

  const handlePostJob = () => {
    // Here you would typically send the job data to your API
    console.log("Posting job:", jobForm);
    setShowPostJobDialog(false);
    // Reset form
    setJobForm({
      title: "",
      category: "",
      description: "",
      budget: "",
      urgency: "normal",
      location: mockUser.location,
    });
  };

  const viewApplications = (job: PostedJob) => {
    // 'job' parameter explicitly typed
    setSelectedJob(job);
    setShowApplicationsDialog(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center p-6 border-b bg-card">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <HeartHandshake className="h-6 w-6 text-primary" />
            <span className="font-semibold text-3xl">Sahaayi</span>
          </Link>
          <Separator orientation="vertical" className="h-6" />
          <h1 className="text-xl font-semibold hidden lg:block ">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <Dialog open={showPostJobDialog} onOpenChange={setShowPostJobDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Post a New Job</DialogTitle>
                <DialogDescription>
                  Fill in the details below to post your job request.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={jobForm.title}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, title: e.target.value })
                    }
                    placeholder="e.g., Kitchen Pipe Repair"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={jobForm.category}
                    onValueChange={(value) =>
                      setJobForm({ ...jobForm, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="carpentry">Carpentry</SelectItem>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="cleaning">Cleaning</SelectItem>
                      <SelectItem value="gardening">Gardening</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={jobForm.description}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, description: e.target.value })
                    }
                    placeholder="Describe the work you need done..."
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="budget">Budget</Label>
                    <Input
                      id="budget"
                      value={jobForm.budget}
                      onChange={(e) =>
                        setJobForm({ ...jobForm, budget: e.target.value })
                      }
                      placeholder="₹1,500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="urgency">Urgency</Label>
                    <Select
                      value={jobForm.urgency}
                      onValueChange={(value) =>
                        setJobForm({ ...jobForm, urgency: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={jobForm.location}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, location: e.target.value })
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowPostJobDialog(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handlePostJob}>Post Job</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <ModeToggle />
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-6">
        {/* User Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={mockUser.avatar} />
                  <AvatarFallback className="text-lg">
                    {mockUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold">{mockUser.name}</h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{mockUser.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Member since {new Date(mockUser.memberSince).getFullYear()}
                  </p>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span className="font-bold">{mockUser.totalJobs}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Total Jobs</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="font-bold">{mockUser.activeJobs}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Active</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-bold">{mockUser.completedJobs}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-bold">{mockUser.avgRating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full overflow-x-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="jobs">My Jobs</TabsTrigger>
            <TabsTrigger value="workers">Find Workers</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockPostedJobs.slice(0, 3).map((job) => (
                    <div
                      key={job.id}
                      className="flex justify-between items-center p-3 border rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {job.postedDate}
                        </p>
                      </div>
                      <Badge
                        variant={
                          job.status === "active"
                            ? "default"
                            : job.status === "completed"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {job.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => setShowPostJobDialog(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Post New Job
                  </Button>
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => setActiveTab("workers")}
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Browse Workers
                  </Button>
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => setActiveTab("jobs")}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View My Jobs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* My Jobs Tab */}
          <TabsContent value="jobs" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Your Posted Jobs</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button size="sm" onClick={() => setShowPostJobDialog(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Post Job
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {mockPostedJobs.map((job) => (
                <Card
                  key={job.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold">{job.title}</h4>
                          <Badge
                            variant={
                              job.status === "active"
                                ? "default"
                                : job.status === "completed"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {job.status}
                          </Badge>
                          {job.urgency === "urgent" && (
                            <Badge variant="destructive">Urgent</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {job.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">
                          {job.budget}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {job.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Posted {job.postedDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {job.applicants} applicants
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {job.status === "active" && (
                        <>
                          <Button
                            variant="outline"
                            onClick={() => viewApplications(job)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Applications ({job.applicants})
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        </>
                      )}
                      {job.status === "completed" && job.rating && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Your rating:</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < job.rating!
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      {job.status === "in-progress" && job.assignedWorker && (
                        <Button variant="outline">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Chat with {job.assignedWorker}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Find Workers Tab */}
          <TabsContent value="workers" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                Available Workers Near You
              </h3>
              <div className="flex gap-2">
                <Input placeholder="Search workers..." className="w-64 hidden sm:block" />
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockWorkers.map((worker) => (
                <Card
                  key={worker.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={worker.avatar} />
                        <AvatarFallback>
                          {worker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{worker.name}</h4>
                        <p className="text-sm text-primary">
                          {worker.profession}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{worker.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({worker.completedJobs} jobs)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {worker.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <IndianRupee className="h-4 w-4" />
                        <span className="font-medium">{worker.rate}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-1">
                        Skills:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {worker.skills.slice(0, 2).map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {worker.skills.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{worker.skills.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground mt-2">
                      {worker.availability}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          {/* gemini opened */}
          {/* Inside Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label>Full Name</Label>
                    <Input
                      value={profileForm.name}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Phone Number</Label>
                    <Input
                      value={profileForm.phone}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Email Address</Label>
                    <Input
                      value={profileForm.email}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Location</Label>
                    <Input
                      value={profileForm.location}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          location: e.target.value,
                        })
                      }
                    />
                  </div>
                  <Button onClick={handleUpdateProfile}>Update Information</Button>{" "}
                  {/* You'll need a handler for this too */}
                </CardContent>
              </Card>

              {/* ... Rest of your Profile Tab content */}
            </div>
          </TabsContent> 
          {/* gemini closed */}
        </Tabs>

        {/* Job Applications Dialog */}
        <Dialog
          open={showApplicationsDialog}
          onOpenChange={setShowApplicationsDialog}
        >
          <DialogContent className="sm:max-w-[725px]">
            <DialogHeader>
              <DialogTitle>Job Applications</DialogTitle>
              <DialogDescription>
                {selectedJob?.title} - {selectedJob?.applicants} applications
                received
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {selectedJob?.applications?.map(
                (
                  application: Application // Explicitly typed application parameter
                ) => (
                  <div key={application.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {application.workerName
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}{" "}
                            {/* Explicitly typed n parameter */}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">
                            {application.workerName}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span>{application.rating}</span>
                            <span>•</span>
                            <span>{application.experience} experience</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Accept</Button>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </div>
                    {/* Escaped quotes */}
                    <p className="text-sm text-muted-foreground italic">
                      &quot;{application.proposal}&quot;
                    </p>
                  </div>
                )
              )}
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowApplicationsDialog(false)}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
