const BlogSkeleton = () => (
  <div className="animate-pulse">
    {/* Hero */}
    <div className="h-72 md:h-96 bg-secondary" />

    {/* Content */}
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <div className="h-8 w-3/4 bg-secondary rounded" />
      <div className="h-4 w-1/4 bg-secondary rounded" />

      <div className="space-y-3">
        <div className="h-4 w-full bg-secondary rounded" />
        <div className="h-4 w-full bg-secondary rounded" />
        <div className="h-4 w-2/3 bg-secondary rounded" />
      </div>

      <div className="space-y-3">
        <div className="h-4 w-full bg-secondary rounded" />
        <div className="h-4 w-full bg-secondary rounded" />
        <div className="h-4 w-3/4 bg-secondary rounded" />
      </div>
    </div>
  </div>
);
export default BlogSkeleton;
