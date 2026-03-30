import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../stores/useAuth";
import MainLayout from "../layouts/MainLayout";
import SectionHeader from "../components/SectionHeader";
import RIButton from "../components/RIButton";
import { RIInput, RITextarea } from "../components/RIInput";
import { axiosInstance } from "../lib/axios";

interface BlogFormData {
  author: string;
  title: string;
  description: string;
  content: string;
}

const BlogCreate = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<BlogFormData>({
    author: user?.name || "",
    title: "",
    description: "",
    content: "",
  });
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (user === null) {
      navigate("/auth");
    }
  }, [user, navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleUploadThumbnail = async (): Promise<string | null> => {
    if (!thumbnailFile) return null;
    const uploadForm = new FormData();
    uploadForm.append("file", thumbnailFile);

    const response = await axiosInstance.post("/files/blogs", uploadForm, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data.fileURL;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const thumbnailUrl = await handleUploadThumbnail();

      const blogData = {
        ___class: "blogs",
        Author: formData.author,
        Title: formData.title,
        Description: formData.description,
        Content: formData.content,
        Thumbnail: thumbnailUrl,
        ownerId: user?.objectId || null,
        created: Date.now(),
        updated: Date.now(),
      };

      await axiosInstance.post("/data/blogs", blogData);
      navigate("/blogs");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create blog post";
      setSubmitError(errorMessage);
      console.error("Blog creation error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      {!user ? (
        <div className="text-center py-20 text-gray-500">
          Redirecting to login...
        </div>
      ) : (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <SectionHeader
              label="Submit"
              title="Create Report"
              description="Draft a new intelligence report for review."
            />

            {submitError && (
              <div className="mb-6 p-4 border border-red-500/50 bg-red-500/10 rounded">
                <p className="text-red-500 font-mono text-sm">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <RIInput
                label="Author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Enter author name"
                required
              />
              <RIInput
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Report title"
                required
              />
              <RIInput
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief summary"
                required
              />
              <RITextarea
                label="Content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Write your report content..."
                rows={8}
                required
              />
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
                  Thumbnail
                </label>
                <div
                  className="border border-dashed border-border bg-input p-8 text-center cursor-pointer hover:border-primary/40 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {thumbnailPreview ? (
                    <div className="relative">
                      <img
                        src={thumbnailPreview}
                        alt="Thumbnail preview"
                        className="max-h-48 mx-auto rounded"
                      />
                      <p className="text-sm text-muted-foreground mt-2">{thumbnailFile?.name}</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground">Click to upload or drag file here</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
                    </>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="pt-4">
                <RIButton variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Report"}
                </RIButton>
              </div>
            </form>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default BlogCreate;