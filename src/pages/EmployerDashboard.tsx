import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Briefcase,
  Users,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Settings,
  LogOut,
  Bell,
  CheckCircle,
  XCircle,
  Clock,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Layout } from "@/components/layout/Layout";
import { mockJobs, categories, locations, jobTypes } from "@/data/mockData";
import { toast } from "sonner";

const employerJobs = mockJobs.slice(0, 4).map((job) => ({
  ...job,
  applicants: Math.floor(Math.random() * 20) + 5,
  views: Math.floor(Math.random() * 100) + 50,
  status: ["active", "paused", "closed"][Math.floor(Math.random() * 3)] as "active" | "paused" | "closed",
}));

const applicants = [
  { id: "1", name: "Rahul Kumar", email: "rahul@email.com", phone: "+91 98765 43210", status: "pending", applied: "2026-01-16" },
  { id: "2", name: "Sneha Patel", email: "sneha@email.com", phone: "+91 87654 32109", status: "interview", applied: "2026-01-15" },
  { id: "3", name: "Amit Singh", email: "amit@email.com", phone: "+91 76543 21098", status: "accepted", applied: "2026-01-14" },
  { id: "4", name: "Priya Gupta", email: "priya@email.com", phone: "+91 65432 10987", status: "rejected", applied: "2026-01-13" },
];

const statusColors = {
  active: "bg-rozgo-green-light text-rozgo-green-dark",
  paused: "bg-amber-100 text-amber-700",
  closed: "bg-muted text-muted-foreground",
};

const applicantStatusColors = {
  pending: "bg-amber-100 text-amber-700",
  interview: "bg-rozgo-blue-light text-rozgo-blue-dark",
  accepted: "bg-rozgo-green-light text-rozgo-green-dark",
  rejected: "bg-red-100 text-red-700",
};

function PostJobDialog() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Job posted successfully!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="btn-gradient gap-2">
          <Plus className="h-4 w-4" />
          Post New Job
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Post a New Job</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new job listing
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input id="title" placeholder="e.g., Retail Sales Associate" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.slice(1).map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.slice(1).map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Job Type</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.slice(1).map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="wage">Wage/Salary</Label>
            <Input id="wage" placeholder="e.g., ₹150-200/hr or ₹15,000/month" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the role, responsibilities, and what you're looking for..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Requirements (one per line)</Label>
            <Textarea
              id="requirements"
              placeholder="Excellent communication skills&#10;Available weekends&#10;Customer-oriented mindset"
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="btn-gradient">
              Post Job
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function JobListingCard({ job }: { job: typeof employerJobs[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl border border-border p-4"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold truncate">{job.title}</h3>
            <Badge className={statusColors[job.status]} variant="secondary">
              {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {job.location} • {job.type} • {job.wage}
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{job.applicants}</span> applicants
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{job.views}</span> views
            </span>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="gap-2">
              <Eye className="h-4 w-4" />
              View Applicants
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Listing
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 text-destructive">
              <Trash2 className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  );
}

function ApplicantCard({ applicant }: { applicant: typeof applicants[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl border border-border p-4"
    >
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarFallback className="bg-muted">
            {applicant.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold">{applicant.name}</h3>
            <Badge className={applicantStatusColors[applicant.status as keyof typeof applicantStatusColors]} variant="secondary">
              {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{applicant.email}</p>
          <p className="text-sm text-muted-foreground">{applicant.phone}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Button size="sm" variant="outline" className="flex-1">
          View Profile
        </Button>
        {applicant.status === "pending" && (
          <>
            <Button size="sm" variant="outline" className="gap-1 text-rozgo-green-dark hover:bg-rozgo-green-light">
              <CheckCircle className="h-3 w-3" />
              Accept
            </Button>
            <Button size="sm" variant="outline" className="gap-1 text-destructive hover:bg-red-50">
              <XCircle className="h-3 w-3" />
              Reject
            </Button>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState("jobs");

  const stats = {
    totalJobs: employerJobs.length,
    activeJobs: employerJobs.filter((j) => j.status === "active").length,
    totalApplicants: employerJobs.reduce((acc, j) => acc + j.applicants, 0),
    totalViews: employerJobs.reduce((acc, j) => acc + j.views, 0),
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
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-xl font-bold">
                    CF
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="font-display text-2xl font-bold">City Fashion Store</h1>
                  <p className="text-muted-foreground">Employer Account</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </Button>
                <PostJobDialog />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Jobs", value: stats.totalJobs, icon: Briefcase, color: "text-foreground" },
              { label: "Active Jobs", value: stats.activeJobs, icon: CheckCircle, color: "text-primary" },
              { label: "Total Applicants", value: stats.totalApplicants, icon: Users, color: "text-secondary" },
              { label: "Total Views", value: stats.totalViews, icon: Eye, color: "text-muted-foreground" },
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
              <TabsTrigger value="jobs" className="gap-2">
                <Briefcase className="h-4 w-4" />
                My Job Listings
              </TabsTrigger>
              <TabsTrigger value="applicants" className="gap-2">
                <Users className="h-4 w-4" />
                Applicants
              </TabsTrigger>
              <TabsTrigger value="profile" className="gap-2">
                <Building className="h-4 w-4" />
                Company Profile
              </TabsTrigger>
            </TabsList>

            <TabsContent value="jobs">
              <div className="space-y-4">
                {employerJobs.map((job) => (
                  <JobListingCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="applicants">
              <div className="grid md:grid-cols-2 gap-4">
                {applicants.map((applicant) => (
                  <ApplicantCard key={applicant.id} applicant={applicant} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profile">
              <div className="max-w-2xl">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-lg font-semibold mb-4">Company Profile</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <div className="font-medium">Company Name</div>
                        <div className="text-sm text-muted-foreground">City Fashion Store</div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">hr@cityfashion.com</div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">+91 22 1234 5678</div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-sm text-muted-foreground">Mumbai, Maharashtra</div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <div className="font-medium">Verification Status</div>
                        <div className="text-sm text-primary flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          Verified Employer
                        </div>
                      </div>
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
