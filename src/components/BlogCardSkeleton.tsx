const BlogCardSkeleton = () => (
  <div className="border border-border bg-card rounded-lg overflow-hidden">
    <div className="aspect-video bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-secondary via-secondary/80 to-secondary" />
    </div>

    <div className="p-5 space-y-3">
      <div className="h-3 w-24 bg-secondary rounded animate-pulse" />
      <div className="h-5 w-3/4 bg-secondary rounded animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-secondary rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-secondary rounded animate-pulse" />
      </div>
    </div>
  </div>
);

export default BlogCardSkeleton;
