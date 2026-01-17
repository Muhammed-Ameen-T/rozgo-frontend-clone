import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import rozgoLogo from "@/assets/rozgo-logo.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <Link to="/" className="inline-block mb-8">
          <img src={rozgoLogo} alt="RozGo" className="h-12 w-auto mx-auto" />
        </Link>

        <div className="relative mb-8">
          <div className="text-[120px] md:text-[160px] font-display font-bold gradient-text leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-muted/50 blur-3xl"></div>
          </div>
        </div>

        <h1 className="font-display text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="btn-gradient gap-2 w-full sm:w-auto">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Link to="/jobs">
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <Search className="h-4 w-4" />
              Browse Jobs
            </Button>
          </Link>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Go back to previous page
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
