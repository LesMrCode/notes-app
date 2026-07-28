import React from "react";

export function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-1.5 font-medium transition-colors rounded-md border border-transparent bg-transparent disabled:opacity-45 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2";

  // Primary is OUTLINED: accent border + accent text, filled only on hover/active.
  const variants = {
    default: "text-primary border-primary hover:bg-primary/12 active:bg-primary/22",
    outline: "text-foreground border-border hover:bg-foreground/8 active:bg-foreground/14",
    ghost: "text-primary hover:bg-primary/10 active:bg-primary/18",
  };

  const sizes = {
    default: "px-4 py-2",
    sm: "px-3 py-1.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
