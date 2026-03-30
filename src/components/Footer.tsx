import { Link } from "react-router-dom";
import RILogo from "../assets/Rhodes Island.png";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-50 flex items-center justify-center">
              <img src={RILogo} alt="Rhodes Island" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            May I enjoy my life and practice my art, respected by all men and in all times.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary mb-4">
            Navigation
          </h4>
          <div className="space-y-2">
            {["/", "/about", "/teams", "/products"].map((path) => (
              <Link
                key={path}
                to={path}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary mb-4">
            Resources
          </h4>
          <div className="space-y-2">
            {[
              "Documentation",
              "Research Papers",
              "Clinical Trials",
              "Safety Data",
            ].map((item) => (
              <span
                key={item}
                className="block text-sm text-muted-foreground cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary mb-4">
            Contact
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>zoot@PRTS.io</p>
            <p>+1 (555) 0199</p>
            <p>Rhodes Island HQ</p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground font-mono tracking-wider">
          © 2026 RHODES ISLAND PHARMACEUTICAL INC. — ALL RIGHTS RESERVED
        </p>
        <p className="text-xs text-muted-foreground font-mono tracking-wider">
          SYS.STATUS: <span className="text-primary">OPERATIONAL</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
