import { useState } from "react";
import type { Product } from "../types";

const ProductCard = ({ product }: { product: Product }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(210_100%_65%/0.15)]">
      
      <div className="aspect-video bg-secondary relative overflow-hidden">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-heading font-bold text-primary/20">
              RI
            </div>
          </div>
        )}
      </div>

      <div className="p-5 space-y-2">
        <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">{product.category}</span>
        <h3 className="font-heading font-semibold text-lg text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;