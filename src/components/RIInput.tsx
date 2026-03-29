import React from "react";

interface RIInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const RIInput = React.forwardRef<HTMLInputElement, RIInputProps>(
  ({ label, className = "", ...props }, ref) => (
    <div className="space-y-1.5">
      <label className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
        {label}
      </label>
      <input
        ref={ref}
        className={`w-full bg-input border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_hsl(210_100%_65%/0.15)] transition-all ${className}`}
        {...props}
      />
    </div>
  )
);

RIInput.displayName = "RIInput";