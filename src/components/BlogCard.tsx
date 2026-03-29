import type { BlogPost } from "../types";
import { Link } from "react-router-dom";

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link
    to={`/blog/${post.id}`}
    className="group border border-border bg-card hover:border-primary/40 transition-all duration-300 block hover:shadow-[0_0_20px_hsl(210_100%_65%/0.15)]"
  >
    <div className="aspect-video bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
      <div className="flex items-center justify-center h-full">
        <span className="text-3xl font-heading font-bold text-primary/20">BLOG</span>
      </div>
    </div>
    <div className="p-5 space-y-2">
      <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">{post.author}</span>
      <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
    </div>
  </Link>
);

export default BlogCard;
