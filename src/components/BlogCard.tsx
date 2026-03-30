import type { Blog } from "../types/blog";
import type { BlogPost } from "../types";
import { Link } from "react-router-dom";

interface BlogCardProps {
  blog: Blog;
  post?: never;
}

interface BlogPostCardProps {
  post: BlogPost;
  blog?: never;
}

type BlogCardCombinedProps = BlogCardProps | BlogPostCardProps;

const BlogCard = (props: BlogCardCombinedProps) => {
  const id = "blog" in props && props.blog ? props.blog.objectId : props.post?.id;
  const displayData = "blog" in props && props.blog ? props.blog : props.post;

  if (!displayData) return null;

  return (
    <Link
      to={`/blogs/${id}`}
      className="group border border-border bg-card hover:border-primary/40 transition-all duration-300 block hover:shadow-[0_0_20px_hsl(210_100%_65%/0.15)] rounded-lg overflow-hidden"
    >
      <div className="aspect-video bg-secondary relative overflow-hidden">
        {displayData.thumbnail ? (
          <img
            src={displayData.thumbnail}
            alt={displayData.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-heading font-bold text-primary/20">
              BLOG
            </span>
          </div>
        )}
        <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
      </div>

      <div className="p-5 space-y-2">
        <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
          {displayData.author}
        </span>
        <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {displayData.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {displayData.description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;