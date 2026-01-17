import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Briefcase,
  Users,
  Zap,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";
import { JobCard } from "@/components/jobs/JobCard";
import { mockJobs, testimonials } from "@/data/mockData";

const benefits = [
  {
    icon: Zap,
    title: "Fast Hiring",
    description: "Find staff within 48 hours. Quick applications, faster responses.",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description: "Jobs near you. No long commutes, work in your neighborhood.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Part-time, weekends, evenings. Work around your schedule.",
  },
  {
    icon: CheckCircle,
    title: "Verified Employers",
    description: "All businesses are verified. Safe and trustworthy opportunities.",
  },
];

const stats = [
  { value: "10K+", label: "Active Jobs" },
  { value: "50K+", label: "Students Hired" },
  { value: "5K+", label: "Businesses" },
  { value: "100+", label: "Cities" },
];

export default function Home() {
  const featuredJobs = mockJobs.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg-light">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Find Local Jobs.
                <br />
                <span className="gradient-text">Start Earning Today.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                RozGo connects students with local businesses looking for reliable staff. 
                Part-time, flexible, and close to home.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl shadow-xl p-3 md:p-4 max-w-2xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Job title or keyword"
                    className="pl-10 h-12 border-0 bg-muted"
                  />
                </div>
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Location"
                    className="pl-10 h-12 border-0 bg-muted"
                  />
                </div>
                <Link to="/jobs">
                  <Button className="h-12 px-8 btn-gradient w-full sm:w-auto">
                    Search Jobs
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["Retail", "Cafe", "Tutoring", "Delivery", "Events"].map((tag) => (
                <Link
                  key={tag}
                  to={`/jobs?category=${tag}`}
                  className="text-sm px-3 py-1 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">RozGo</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The easiest way to find local work or hire reliable staff
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Featured <span className="gradient-text">Jobs</span>
              </h2>
              <p className="text-muted-foreground">
                Latest opportunities from top local employers
              </p>
            </div>
            <Link to="/jobs">
              <Button variant="outline" className="gap-2">
                View All Jobs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* For Students */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-rozgo-green-light rounded-2xl p-8 md:p-10"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                For Students
              </h3>
              <p className="text-muted-foreground mb-6">
                Find flexible part-time jobs that work around your class schedule. 
                Gain experience, earn money, and build your resume.
              </p>
              <ul className="space-y-3 mb-8">
                {["Flexible schedules", "No experience needed", "Quick applications"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link to="/auth?mode=signup&type=student">
                <Button className="btn-gradient">Find Jobs Now</Button>
              </Link>
            </motion.div>

            {/* For Employers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-rozgo-blue-light rounded-2xl p-8 md:p-10"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                For Employers
              </h3>
              <p className="text-muted-foreground mb-6">
                Hire motivated students quickly. Post jobs for free and find 
                reliable staff within 48 hours.
              </p>
              <ul className="space-y-3 mb-8">
                {["Free job posting", "Verified candidates", "Fast hiring process"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link to="/auth?mode=signup&type=employer">
                <Button variant="secondary">Post a Job</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from students and employers who found success with RozGo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 card-hover"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of students and employers who trust RozGo for local jobs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-foreground hover:bg-white/90"
                >
                  Browse Jobs
                </Button>
              </Link>
              <Link to="/auth?mode=signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Create Account
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
