import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { JobCard } from "@/components/jobs/JobCard";
import { JobFilters } from "@/components/jobs/JobFilters";
import { mockJobs } from "@/data/mockData";
import { Briefcase } from "lucide-react";

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("all");

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        job.category === selectedCategory;

      const matchesLocation =
        selectedLocation === "All Locations" ||
        job.location === selectedLocation;

      const matchesType = selectedType === "all" || job.type === selectedType;

      return matchesSearch && matchesCategory && matchesLocation && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedLocation, selectedType]);

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-bg-light py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Browse <span className="gradient-text">Local Jobs</span>
            </h1>
            <p className="text-muted-foreground">
              Find part-time and flexible opportunities near you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Jobs */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <JobFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />

          {/* Results Count */}
          <div className="flex items-center justify-between my-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span> jobs
            </p>
          </div>

          {/* Jobs Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                No jobs found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
