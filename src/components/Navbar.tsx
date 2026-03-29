import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/teams", label: "Teams" },
  { to: "/products", label: "Products" },
  { to: "/blog", label: "Blog" },
  { to: "/auth", label: "Access" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-50 flex items-center justify-center">
          <img src="src\assets\Rhodes Island.png" alt="Rhodes Island" />
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors ${
                location.pathname === link.to
                  ? "text-primary glow-text"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm font-medium tracking-wider uppercase border-b border-border/50 ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
