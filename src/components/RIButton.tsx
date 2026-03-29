interface RIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}

const RIButton = ({ variant = "primary", children, className = "", ...props }: RIButtonProps) => {
  const base = "px-6 py-2.5 font-heading font-semibold text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:shadow-[0_0_25px_hsl(210_100%_65%/0.4)] active:scale-95",
    outline:
      "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
    ghost:
      "text-muted-foreground hover:text-foreground hover:bg-secondary",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default RIButton;
