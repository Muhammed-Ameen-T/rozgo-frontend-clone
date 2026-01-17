import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Share2,
  BadgeCheck,
  ArrowLeft,
  CheckCircle,
  Building,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/layout/Layout";
import { JobCard } from "@/components/jobs/JobCard";
import { mockJobs } from "@/data/mockData";
import { toast } from "sonner";

const typeColors: Record<string, string> = {
  "part-time": "bg-rozgo-green-light text-rozgo-green-dark",
  "full-time": "bg-rozgo-blue-light text-rozgo-blue-dark",
  internship: "bg-amber-100 text-amber-700",
  contract: "bg-purple-100 text-purple-700",
};

export default function JobDetails() {
  const { id } = useParams<{ id: string }>();
  const job = mockJobs.find((j) => j.id === id);
  const similarJobs = mockJobs.filter((j) => j.id !== id && j.category === job?.category).slice(0, 3);

  if (!job) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/jobs">
            <Button>Browse All Jobs</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const daysAgo = Math.floor(
    (new Date().getTime() - new Date(job.postedDate).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const handleApply = () => {
    toast.success("Application submitted!", {
      description: "The employer will review your application soon.",
    });
  };

  const handleSave = () => {
    toast.success("Job saved!", {
      description: "You can find it in your saved jobs.",
    });
  };

  return (
    <Layout>
      {/* Back Link */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Jobs
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  {job.company.charAt(0)}
                </div>
                <div className="flex-1">
                  <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    {job.title}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-medium text-foreground">{job.company}</span>
                    {job.employer.verified && (
                      <BadgeCheck className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className={typeColors[job.type]} variant="secondary">
                  {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
                </Badge>
                <Badge variant="outline">{job.category}</Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  {job.wage}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {daysAgo === 0 ? "Posted today" : `${daysAgo} days ago`}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="h-4 w-4" />
                  {job.employer.verified ? "Verified" : "Unverified"}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Description */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-lg font-semibold mb-3">
                    About this role
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-lg font-semibold mb-3">
                    Requirements
                  </h2>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Similar Jobs */}
            {similarJobs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="font-display text-xl font-semibold mb-4">
                  Similar Jobs
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {similarJobs.map((job, index) => (
                    <JobCard key={job.id} job={job} index={index} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 sticky top-24"
            >
              <div className="text-center mb-6">
                <div className="font-display text-2xl font-bold text-primary mb-1">
                  {job.wage}
                </div>
                <p className="text-sm text-muted-foreground">
                  {job.type === "part-time" || job.type === "contract"
                    ? "Per hour/task"
                    : "Per month"}
                </p>
              </div>

              <div className="space-y-3">
                <Button className="w-full btn-gradient h-12" onClick={handleApply}>
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full h-12 gap-2" onClick={handleSave}>
                  <Heart className="h-4 w-4" />
                  Save Job
                </Button>
                <Button variant="ghost" className="w-full h-12 gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>

              <Separator className="my-6" />

              {/* Employer Info */}
              <div>
                <h3 className="font-semibold mb-4">About the Employer</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-bold">
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium flex items-center gap-1">
                      {job.company}
                      {job.employer.verified && (
                        <BadgeCheck className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {job.location}
                    </div>
                  </div>
                </div>
                {job.employer.verified && (
                  <div className="text-sm text-muted-foreground bg-muted rounded-lg p-3">
                    <span className="text-primary font-medium">✓ Verified Employer</span>
                    <p className="mt-1">
                      This employer has been verified by RozGo for authenticity.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
