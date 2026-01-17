import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import rozgoLogo from "@/assets/rozgo-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={rozgoLogo}
              alt="RozGo"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Connecting students with local opportunities. Fast staffing for businesses, flexible work for students.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">For Job Seekers</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/jobs" className="hover:text-background transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/auth?mode=signup&type=student" className="hover:text-background transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/dashboard/student" className="hover:text-background transition-colors">
                  My Applications
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-background transition-colors">
                  Career Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">For Employers</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/dashboard/employer" className="hover:text-background transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/auth?mode=signup&type=employer" className="hover:text-background transition-colors">
                  Employer Account
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-background transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-background transition-colors">
                  Hiring Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@rozgo.in" className="hover:text-background transition-colors">
                  support@rozgo.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+911234567890" className="hover:text-background transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© 2026 RozGo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-background transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
