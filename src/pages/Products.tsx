import MainLayout from "../layouts/MainLayout";
import SectionHeader from "../components/SectionHeader";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types";

const products: Product[] = [
  { id: "1", name: "RI-07 Inhibitor", description: "Originium-based pathogen inhibitor for early-stage infection management.", category: "Therapeutics", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80" },
  { id: "2", name: "RI-13 Compound", description: "Advanced antiviral compound targeting mineral-based cellular degradation.", category: "Therapeutics", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80" },
  { id: "3", name: "MedKit Mk.IV", description: "Field-deployable medical kit with integrated diagnostics and treatment modules.", category: "Field Equipment", image: "https://images.unsplash.com/photo-1624638760852-8ede1666ab07?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "4", name: "Containment Suite", description: "Portable biological containment system for hazardous zone operations.", category: "Field Equipment", image: "https://images.pexels.com/photos/9545082/pexels-photo-9545082.jpeg" },
  { id: "5", name: "ORI-Scanner", description: "Handheld Originium density scanner for rapid environmental assessment.", category: "Diagnostics", image: "https://plus.unsplash.com/premium_photo-1664299150453-f1a386826e6d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "6", name: "BioSync Monitor", description: "Continuous vital signs monitoring device with cloud telemetry.", category: "Diagnostics", image: "https://images.unsplash.com/photo-1645685491865-42a4fbbc9912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const categories = [...new Set(products.map((p) => p.category))];

const testimonials = [
  {
    id: "t1",
    name: "Ch'en Hui-chieh",
    role: "Lead Researcher",
    message: "The RI-07 Inhibitor has revolutionized early infection management in our lab trials. Reliable and effective.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "t2",
    name: "Captain Lars Holm",
    role: "Field Operations Officer",
    message: "The Containment Suite made our hazardous zone operations significantly safer and more efficient.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const Products = () => (
  <MainLayout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Arsenal"
          title="Products & Services"
          description="Pharmaceutical solutions and operational equipment developed for extreme conditions."
        />

        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-[0.2em] text-primary mb-4 border-b border-border pb-2">
              {cat}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.filter((p) => p.category === cat).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}

        {/* Testimonials Section as a “category” */}
<div className="mb-12">
  <h3 className="font-heading font-semibold text-sm uppercase tracking-[0.2em] text-primary mb-4 border-b border-border pb-2">
    Testimonials
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {testimonials.map((t) => (
      <div
        key={t.id}
        className="relative bg-white border border-border rounded-xl p-6 flex flex-col"
      >
        {/* Speech bubble pointer */}
        <div className="absolute -bottom-3 left-6 w-0 h-0 border-t-6 border-t-white border-l-6 border-l-transparent border-r-6 border-r-transparent"></div>

        {/* Avatar */}
        <div className="flex items-center mb-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary"
          />
          <div>
            <h4 className="font-semibold">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-gray-700 italic">"{t.message}"</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  </MainLayout>
);

export default Products;