import MainLayout from "../layouts/MainLayout";
import SectionHeader from "../components/SectionHeader";

const milestones = [
  { year: "2019", title: "Foundation", desc: "Rhodes Island Pharmaceutical Division established as a mobile research platform." },
  { year: "2020", title: "First Trial", desc: "Successful Phase I clinical trial for Originium inhibitor compound RI-07." },
  { year: "2021", title: "Field Ops", desc: "Deployed medical response teams to 12 contamination zones worldwide." },
  { year: "2022", title: "Expansion", desc: "Opened three new containment-grade research laboratories." },
  { year: "2023", title: "Breakthrough", desc: "RI-13 compound achieves 87% efficacy in Phase III Oripathy trials." },
  { year: "2024", title: "Global Reach", desc: "Partnerships with 40+ international health organizations." },
];

const About = () => (
  <MainLayout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader label="Dossier" title="About Rhodes Island" description="We are a pharmaceutical and medical research organization operating at the intersection of science and crisis response." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="border border-border bg-card p-8 space-y-4">
            <span className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase">Our Vision</span>
            <h3 className="font-heading font-semibold text-xl">A World Free From Incurable Disease</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We envision a future where no condition is beyond treatment. Through relentless research 
              and operational excellence, we push the boundaries of pharmaceutical science to protect 
              those who need it most.
            </p>
          </div>
          <div className="border border-border bg-card p-8 space-y-4">
            <span className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase">Our Mission</span>
            <h3 className="font-heading font-semibold text-xl">Operate. Research. Cure.</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To develop and deliver pharmaceutical solutions in the most challenging environments, 
              combining mobile operational capability with world-class research to bring treatment 
              to populations conventional organizations cannot reach.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <SectionHeader label="Chronicle" title="Milestones" />
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 border border-primary bg-background group-hover:bg-primary transition-colors" />
                {i < milestones.length - 1 && <div className="w-px flex-1 bg-border" />}
              </div>
              <div className="pb-8">
                <span className="text-xs font-mono text-primary tracking-wider">{m.year}</span>
                <h4 className="font-heading font-semibold text-lg mt-1">{m.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </MainLayout>
);

export default About;
