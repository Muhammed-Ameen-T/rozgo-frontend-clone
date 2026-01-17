import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Clock,
  CheckCircle,
  XCircle,
  Heart,
  User,
  Settings,
  LogOut,
  MessageSquare,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/layout/Layout";
import { mockApplications, mockJobs, Application } from "@/data/mockData";
import { Link } from "react-router-dom";

const statusConfig = {
  pending: { label: "Pending", color: "bg-amber-100 text-amber-700", icon: Clock },
  accepted: { label: "Accepted", color: "bg-rozgo-green-light text-rozgo-green-dark", icon: CheckCircle },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-700", icon: XCircle },
  interview: { label: "Interview", color: "bg-rozgo-blue-light text-rozgo-blue-dark", icon: MessageSquare },
};

function ApplicationCard({ application }: { application: Application }) {
  const status = statusConfig[application.status];
  const StatusIcon = status.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl border border-border p-4 card-hover"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-bold">
          {application.job.company.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold truncate">{application.job.title}</h3>
              <p className="text-sm text-muted-foreground">{application.job.company}</p>
            </div>
            <Badge className={status.color} variant="secondary">
              <StatusIcon className="h-3 w-3 mr-1" />
              {status.label}
            </Badge>
          </div>
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span>{application.job.location}</span>
            <span>•</span>
            <span>Applied {application.appliedDate}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Link to={`/jobs/${application.jobId}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            View Job
          </Button>
        </Link>
        {application.status === "interview" && (
          <Button size="sm" className="btn-gradient">
            Schedule Interview
          </Button>
        )}
      </div>
    </motion.div>
  );
}

function SavedJobCard({ job }: { job: typeof mockJobs[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl border border-border p-4 card-hover"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-bold">
          {job.company.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold truncate">{job.title}</h3>
          <p className="text-sm text-muted-foreground">{job.company}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline">{job.type}</Badge>
            <span className="text-sm font-medium text-primary">{job.wage}</span>
          </div>
        </div>
        <button className="p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
          <Heart className="h-4 w-4 fill-current" />
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        <Link to={`/jobs/${job.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            View Details
          </Button>
        </Link>
        <Button size="sm" className="btn-gradient">
          Apply Now
        </Button>
      </div>
    </motion.div>
  );
}

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("applications");
  const savedJobs = mockJobs.slice(0, 3);

  const applicationStats = {
    total: mockApplications.length,
    pending: mockApplications.filter((a) => a.status === "pending").length,
    accepted: mockApplications.filter((a) => a.status === "accepted").length,
    interview: mockApplications.filter((a) => a.status === "interview").length,
  };

  return (
    <Layout hideFooter>
      <div className="min-h-screen bg-muted/30">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="gradient-bg text-white text-xl font-bold">
                    PS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="font-display text-2xl font-bold">Welcome, Priya!</h1>
                  <p className="text-muted-foreground">Student Account</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Applications", value: applicationStats.total, icon: Briefcase, color: "text-foreground" },
              { label: "Pending", value: applicationStats.pending, icon: Clock, color: "text-amber-600" },
              { label: "Interviews", value: applicationStats.interview, icon: MessageSquare, color: "text-rozgo-blue" },
              { label: "Accepted", value: applicationStats.accepted, icon: CheckCircle, color: "text-primary" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl border border-border p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="applications" className="gap-2">
                <Briefcase className="h-4 w-4" />
                My Applications
              </TabsTrigger>
              <TabsTrigger value="saved" className="gap-2">
                <Heart className="h-4 w-4" />
                Saved Jobs
              </TabsTrigger>
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
            </TabsList>

            <TabsContent value="applications">
              <div className="grid md:grid-cols-2 gap-4">
                {mockApplications.map((application) => (
                  <ApplicationCard key={application.id} application={application} />
                ))}
              </div>
              {mockApplications.length === 0 && (
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">No applications yet</h3>
                  <p className="text-muted-foreground mb-4">Start applying to jobs to see them here</p>
                  <Link to="/jobs">
                    <Button className="btn-gradient">Browse Jobs</Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="saved">
              <div className="grid md:grid-cols-2 gap-4">
                {savedJobs.map((job) => (
                  <SavedJobCard key={job.id} job={job} />
                ))}
              </div>
              {savedJobs.length === 0 && (
                <div className="text-center py-12">
                  <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">No saved jobs</h3>
                  <p className="text-muted-foreground mb-4">Save jobs to review them later</p>
                  <Link to="/jobs">
                    <Button className="btn-gradient">Browse Jobs</Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="profile">
              <div className="max-w-2xl">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-lg font-semibold mb-4">Profile Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <div className="font-medium">Full Name</div>
                        <div className="text-sm text-muted-foreground">Priya Sharma</div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">priya.sharma@email.com</div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-sm text-muted-foreground">Mumbai, Maharashtra</div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <Button variant="destructive" className="gap-2">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
