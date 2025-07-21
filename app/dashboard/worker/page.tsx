"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { ModeToggle } from "@/components/modeToggle";
import {
  HeartHandshake,
  Briefcase,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  Edit,
  CheckCircle,
  IndianRupee,
  TrendingUp,
  Bell
} from "lucide-react";

// Mock data - replace with real API calls
const mockWorker = {
  id: "1",
  name: "Ravi Kumar",
  avatar: "",
  profession: "Plumber",
  location: "Perumbavoor, Kerala",
  phone: "+91 98765 43210",
  email: "ravi.kumar@email.com",
  rating: 4.8,
  completedJobs: 147,
  totalEarnings: 285000,
  profileCompletion: 85,
  skills: ["Pipe Fitting", "Leak Repair", "Bathroom Installation", "Water Heater Repair"],
  isAvailable: true
};

const mockJobs = [
  {
    id: "1",
    title: "Kitchen Pipe Repair",
    client: "Priya Nair",
    location: "Aluva, Kerala",
    budget: "₹1,500",
    timePosted: "2 hours ago",
    description: "Need urgent repair for kitchen sink pipe leak",
    status: "available",
    urgency: "urgent"
  },
  {
    id: "2",
    title: "Bathroom Installation",
    client: "Suresh Menon",
    location: "Perumbavoor, Kerala",
    budget: "₹8,000",
    timePosted: "5 hours ago",
    description: "Complete bathroom plumbing setup for new home",
    status: "available",
    urgency: "normal"
  },
  {
    id: "3",
    title: "Water Heater Setup",
    client: "Lakshmi Pillai",
    location: "Angamaly, Kerala",
    budget: "₹2,500",
    timePosted: "1 day ago",
    description: "Install and connect new electric water heater",
    status: "applied",
    urgency: "normal"
  }
];

const mockJobHistory = [
  {
    id: "101",
    title: "Toilet Repair",
    client: "Anand Krishnan",
    completedDate: "2024-07-15",
    earnings: "₹1,200",
    rating: 5,
    review: "Excellent work! Very professional and quick."
  },
  {
    id: "102",
    title: "Pipe Installation",
    client: "Maya Thomas",
    completedDate: "2024-07-12",
    earnings: "₹3,500",
    rating: 4.5,
    review: "Good work, completed on time."
  }
];

export default function WorkerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAvailable, setIsAvailable] = useState(mockWorker.isAvailable);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center p-6 border-b bg-card">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <HeartHandshake className="h-6 w-6 text-primary" />
            <span className="font-semibold">Sahaayi</span>
          </Link>
          <Separator orientation="vertical" className="h-6" />
          <h1 className="text-xl font-semibold">Worker Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <ModeToggle />
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-6">
        {/* Worker Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={mockWorker.avatar} />
                  <AvatarFallback className="text-lg">
                    {mockWorker.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold">{mockWorker.name}</h2>
                  <p className="text-lg text-primary font-medium">{mockWorker.profession}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{mockWorker.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-bold">{mockWorker.rating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-bold">{mockWorker.completedJobs}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Jobs Done</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <IndianRupee className="h-4 w-4 text-green-600" />
                    <span className="font-bold">₹{(mockWorker.totalEarnings / 1000).toFixed(0)}K</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Earned</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <Badge variant={isAvailable ? "default" : "secondary"} className="mb-1">
                    {isAvailable ? "Available" : "Busy"}
                  </Badge>
                  <p className="text-xs text-muted-foreground">Status</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button onClick={toggleAvailability} variant={isAvailable ? "secondary" : "default"}>
                  {isAvailable ? "Mark as Busy" : "Mark as Available"}
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
            
            {/* Profile Completion */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Profile Completion</span>
                <span>{mockWorker.profileCompletion}%</span>
              </div>
              <Progress value={mockWorker.profileCompletion} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Complete your profile to get more job opportunities
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full overflow-x-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="jobs">Available Jobs</TabsTrigger>
            <TabsTrigger value="history">Job History</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recent Job Applications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Recent Applications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockJobs.filter(job => job.status === "applied").map(job => (
                    <div key={job.id} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.client}</p>
                      </div>
                      <Badge variant="secondary">Applied</Badge>
                    </div>
                  ))}
                  {mockJobs.filter(job => job.status === "applied").length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No recent applications
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* This Month's Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    This Month
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm">Jobs Completed</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Earnings</span>
                      <span className="font-medium text-green-600">₹18,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Average Rating</span>
                      <span className="font-medium">4.9 ⭐</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Available Jobs Tab */}
          <TabsContent value="jobs" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Available Jobs Near You</h3>
              <Button variant="outline" size="sm">
                Filter Jobs
              </Button>
            </div>
            
            <div className="grid gap-4">
              {mockJobs.filter(job => job.status === "available").map(job => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold">{job.title}</h4>
                        <p className="text-muted-foreground">by {job.client}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">{job.budget}</p>
                        {job.urgency === "urgent" && (
                          <Badge variant="destructive" className="mt-1">Urgent</Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm mb-3">{job.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.timePosted}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1">Apply Now</Button>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Job History Tab */}
          <TabsContent value="history" className="space-y-4">
            <h3 className="text-lg font-semibold">Completed Jobs</h3>
            
            <div className="grid gap-4">
              {mockJobHistory.map(job => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{job.title}</h4>
                        <p className="text-muted-foreground">for {job.client}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{job.earnings}</p>
                        <p className="text-sm text-muted-foreground">{job.completedDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < job.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{job.rating}/5</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground italic">&quot;{job.review}&quot;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>{mockWorker.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>{mockWorker.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>{mockWorker.location}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Edit className="h-4 w-4 mr-2" />
                    Update Contact Info
                  </Button>
                </CardContent>
              </Card>

              {/* Skills & Expertise */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills & Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {mockWorker.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Add More Skills
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}