import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import type { Blog } from "../types/blog";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";

const BLOGS_COUNT = 6;

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

const getBlogs = async () => {
  try {
    setIsPending(true); // 👈 REQUIRED
    setError(null);

    const response = await axiosInstance.get<Blog[]>("/data/blogs");
    console.log("Blogs response:", response.data);
    setBlogs(response.data);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    setError(errorMessage);
  } finally {
    setIsPending(false);
  }
};

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <MainLayout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <span className="block text-[10px] font-mono text-primary tracking-[0.3em] uppercase mb-2">
              Rhodes Island Database
            </span>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Field Reports & Research
            </h1>
          </div>

          {isPending ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: BLOGS_COUNT }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="flex items-center justify-center min-h-[40vh]">
              <div className="text-center space-y-4">
                <p className="text-red-500 font-mono text-sm">Failed to load reports</p>
                <button
                  onClick={getBlogs}
                  className="text-primary hover:underline font-mono text-sm"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="flex items-center justify-center min-h-[40vh]">
              <div className="text-center space-y-4">
                <p className="text-muted-foreground font-mono text-sm">No reports available</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <BlogCard key={blog.objectId} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
