const SectionHeader = ({ label, title, description }: { label: string; title: string; description?: string }) => (
  <div className="mb-12 space-y-3">
    <span className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase">{label}</span>
    <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">{title}</h2>
    {description && <p className="text-muted-foreground max-w-2xl leading-relaxed">{description}</p>}
    <div className="w-16 h-px bg-primary/50 mt-4" />
  </div>
);

export default SectionHeader;
