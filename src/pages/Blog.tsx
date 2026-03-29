import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SectionHeader from "../components/SectionHeader";
import { blogPosts } from "../data/blogPosts";
import { ArrowLeft } from "lucide-react";

const Blog = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedPost = blogPosts.find((p) => p.id === selectedId);

  return (
    <MainLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Intelligence"
            title="All Reports"
            description="Browse our complete archive of research findings and operational reports."
          />

          {/* Blog list row */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
            {blogPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedId(post.id)}
                className={`group shrink-0 w-72 border text-left bg-card transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] ${
                  selectedId === post.id
                    ? "border-primary shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
                  <div className="absolute inset-0 bg-linier-to-t from-card to-transparent" />
                </div>
                <div className="p-4 space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
                      {post.author}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Selected blog content */}
          {selectedPost && (
            <div className="mt-10 border border-border bg-card p-6 md:p-10 max-w-3xl mx-auto animate-in fade-in duration-300">
              <button
                onClick={() => setSelectedId(null)}
                className="inline-flex items-center gap-1.5 text-primary text-xs font-mono tracking-wider uppercase hover:underline mb-6"
              >
                <ArrowLeft className="w-3 h-3" /> Close Report
              </button>
              <span className="block text-[10px] font-mono text-primary tracking-[0.3em] uppercase">
                {selectedPost.date}
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-4xl mt-2 text-foreground">
                {selectedPost.title}
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                By {selectedPost.author}
              </p>
              <p className="text-base text-muted-foreground mt-6 border-l-2 border-primary pl-4">
                {selectedPost.description}
              </p>
              <div className="space-y-5 mt-8">
                {selectedPost.fullContent
                  .trim()
                  .split("\n\n")
                  .map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-foreground/90 leading-relaxed text-[15px]"
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
