import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, Heart, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Job } from "@/data/mockData";

interface JobCardProps {
  job: Job;
  index?: number;
}

const typeColors: Record<string, string> = {
  "part-time": "bg-rozgo-green-light text-rozgo-green-dark",
  "full-time": "bg-rozgo-blue-light text-rozgo-blue-dark",
  internship: "bg-amber-100 text-amber-700",
  contract: "bg-purple-100 text-purple-700",
};

export function JobCard({ job, index = 0 }: JobCardProps) {
  const daysAgo = Math.floor(
    (new Date().getTime() - new Date(job.postedDate).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative bg-card rounded-xl border border-border p-5 card-hover"
    >
      {/* Save Button */}
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-accent transition-colors"
        aria-label="Save job"
      >
        <Heart className="h-4 w-4 text-muted-foreground" />
      </button>

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg">
          {job.company.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-lg leading-tight truncate pr-8">
            {job.title}
          </h3>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
            <span className="truncate">{job.company}</span>
            {job.employer.verified && (
              <BadgeCheck className="h-4 w-4 text-primary flex-shrink-0" />
            )}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-wrap gap-2 mb-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {daysAgo === 0 ? "Today" : `${daysAgo}d ago`}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge className={typeColors[job.type]} variant="secondary">
          {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
        </Badge>
        <Badge variant="outline">{job.category}</Badge>
      </div>

      {/* Wage */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="font-display font-semibold text-primary">{job.wage}</span>
        <Link to={`/jobs/${job.id}`}>
          <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            View Details
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
