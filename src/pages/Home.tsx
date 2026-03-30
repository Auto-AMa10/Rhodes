import MainLayout from "../layouts/MainLayout";
import RIButton from "../components/RIButton";
import SectionHeader from "../components/SectionHeader";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import type { Blog } from "../types/blog";
import { useAuth } from "../stores/useAuth";

const services = [
  { icon: "◆", title: "Drug Development", desc: "End-to-end pharmaceutical R&D pipeline" },
  { icon: "◇", title: "Clinical Trials", desc: "Phase I-IV managed trial operations" },
  { icon: "▣", title: "Field Operations", desc: "Rapid deployment medical response" },
  { icon: "◈", title: "Research Labs", desc: "State-of-the-art containment facilities" },
];

const Home = () => {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get<Blog[]>("/data/blogs");
        setBlogs(response.data.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch blogs for home:", error);
      } finally {
        setIsPending(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linier-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6 animate-fade-in-up">
            <span className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase">
              Rhodes Island Pharmaceutical Division
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[0.95] text-foreground">
              Science for<br />
              <span className="text-primary glow-text">Humanity's</span><br />
              Tomorrow
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Pioneering pharmaceutical solutions at the frontier of medical science.
              We operate where others cannot.
            </p>
            {!user && (
              <div className="flex gap-3 pt-2">
                <Link to="/auth">
                  <RIButton variant="primary">Register</RIButton>
                </Link>
                <Link to="/auth">
                  <RIButton variant="outline">Login</RIButton>
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* Decorative lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* Services */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <SectionHeader label="Operations" title="Core Capabilities" description="Full-spectrum pharmaceutical operations from laboratory to field deployment." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s.title} className="border border-border bg-card p-6 space-y-3 hover:border-primary/30 transition-colors group">
                <span className="text-2xl text-primary/60 group-hover:text-primary transition-colors">{s.icon}</span>
                <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <SectionHeader label="Intelligence" title="Latest Reports" />
          {isPending ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {blogs.map((blog) => (
                <BlogCard key={blog.objectId} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
