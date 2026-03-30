import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../stores/useAuth";
import RILogo from "../assets/Rhodes Island.png";

const baseNavLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/teams", label: "Teams" },
  { to: "/products", label: "Products" },
  { to: "/blogs", label: "Blog" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-50 flex items-center justify-center">
          <img src={RILogo} alt="Rhodes Island" />
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {baseNavLinks.map((link) => (
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
          {user ? (
            <>
              <Link
                to="/blogs/create"
                className={`px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors ${
                  location.pathname === "/blog/create"
                    ? "text-primary glow-text"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                BlogCreate
              </Link>
              <button
                onClick={logout}
                className="px-3 py-2 text-sm bg-red-500 rounded-lg text-white font-medium tracking-wider uppercase hover:bg-white hover:text-red-500 transition-colors duration-300 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className={`px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors ${
                location.pathname === "/auth"
                  ? "text-primary glow-text"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Access
            </Link>
          )}
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
          {baseNavLinks.map((link) => (
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
          {user ? (
            <>
              <Link
                to="/blog/create"
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 text-sm font-medium tracking-wider uppercase border-b border-border/50 ${
                  location.pathname === "/blog/create"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                BlogCreate
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
                className="block w-full text-left px-6 py-3 text-sm bg-red-500 rounded-lg text-white font-medium tracking-wider uppercase hover:bg-white hover:text-red-500 transition-colors duration-300 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm font-medium tracking-wider uppercase border-b border-border/50 text-muted-foreground"
            >
              Access
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
