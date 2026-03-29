import MainLayout from "../layouts/MainLayout";
import SectionHeader from "../components/SectionHeader";
import RIButton from "../components/RIButton";
import { RIInput, RITextarea } from "../components/RIInput";

const BlogCreate = () => (
  <MainLayout>
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <SectionHeader label="Submit" title="Create Report" description="Draft a new intelligence report for review." />

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <RIInput label="Author" placeholder="Enter author name" />
          <RIInput label="Title" placeholder="Report title" />
          <RIInput label="Description" placeholder="Brief summary" />
          <RITextarea label="Content" placeholder="Write your report content..." rows={8} />
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">Thumbnail</label>
            <div className="border border-dashed border-border bg-input p-8 text-center cursor-pointer hover:border-primary/40 transition-colors">
              <p className="text-sm text-muted-foreground">Click to upload or drag file here</p>
              <input type="file" className="hidden" accept="image/*" />
            </div>
          </div>
          <div className="pt-4">
            <RIButton variant="primary" type="submit">Submit Report</RIButton>
          </div>
        </form>
      </div>
    </section>
  </MainLayout>
);

export default BlogCreate;
