import { useParams, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import type { Blog } from "../types/blog";
import { ArrowLeft } from "lucide-react";
import BlogSkeleton from "../components/BlogSkeleton";

const BlogDetail = () => {
  const { objectId } = useParams<{ objectId: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

 const getBlog = async () => {
  try {
    setIsPending(true);
    setError(null);

    const response = await axiosInstance.get<Blog>(`/data/blogs/${objectId}`);
    setBlog(response.data);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    setError(errorMessage);
  } finally {
    setIsPending(false);
  }
};
  useEffect(() => {
    if (objectId) {
      getBlog();
    }
  }, [objectId]);

  if (isPending) {
    return (
      <MainLayout>
        <div className="py-12">
          <BlogSkeleton />
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <p className="text-red-500 font-mono text-sm">Failed to load report</p>
          <button
            onClick={getBlog}
            className="text-primary hover:underline font-mono text-sm"
          >
            Retry
          </button>
          <Link to="/blogs" className="text-primary hover:underline font-mono text-sm">← Back to all reports</Link>
        </div>
      </MainLayout>
    );
  }

  if (!blog) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <h1 className="font-heading text-3xl font-bold text-foreground">Post Not Found</h1>
          <Link to="/blogs" className="text-primary hover:underline font-mono text-sm">← Back to all reports</Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Header */}
      <div className="relative h-72 md:h-96 bg-secondary overflow-hidden">
        {blog.thumbnail ? (
          <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover opacity-50" />
        ) : (
          <div className="absolute inset-0 bg-secondary" />
        )}
        <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-linier-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <Link to="/blogs" className="inline-flex items-center gap-1.5 text-primary text-xs font-mono tracking-wider uppercase hover:underline mb-4">
            <ArrowLeft className="w-3 h-3" /> All Reports
          </Link>
          <span className="block text-[10px] font-mono text-primary tracking-[0.3em] uppercase">
            {new Date(blog.created).toLocaleDateString()}
          </span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl mt-2">{blog.title}</h1>
          <p className="text-muted-foreground mt-2">By {blog.author}</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-muted-foreground mb-8 border-l-2 border-primary pl-4">
            {blog.description}
          </p>
          <div className="space-y-6">
            {blog.content.trim().split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-foreground/90 leading-relaxed text-[15px]">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogDetail;
