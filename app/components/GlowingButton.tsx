"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "burgundy"
    | "rosegold"
    | "copper"
    | "bronze"
    | "silver"
    | "platinum"
    | "dark"
    | "outline"
    | "white"
    | "gold"
    | "champagne";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "burgundy",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Metallic ruby wine and warm gold gradients matching Dra. Roberta Veiga visual identity
  const variantClasses = {
    burgundy:
      "border border-brand-400/30 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white font-bold shadow-md shadow-brand-950/35 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-burgundy",
    rosegold:
      "border border-gold-300/50 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white font-bold shadow-md shadow-brand-950/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    copper:
      "border border-brand-400/30 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white font-bold shadow-md shadow-brand-950/35 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-burgundy",
    bronze:
      "border border-brand-500/40 bg-gradient-to-r from-brand-800 via-brand-700 to-brand-800 text-white font-bold shadow-md shadow-brand-950/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-burgundy",
    platinum:
      "border border-brand-200 bg-gradient-to-r from-brand-50 via-white to-brand-100 text-brand-950 font-bold shadow-md shadow-brand-950/15 hover:-translate-y-0.5 hover:shadow-burgundy hover:brightness-105",
    silver:
      "border border-brand-200 bg-gradient-to-r from-brand-50 via-white to-brand-100 text-brand-950 font-bold shadow-md shadow-brand-950/15 hover:-translate-y-0.5 hover:shadow-burgundy hover:brightness-105",
    champagne:
      "border border-gold-300/60 bg-gradient-to-r from-gold-50 via-gold-100 to-gold-200 text-brand-950 font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-gold hover:brightness-105",
    dark:
      "border border-brand-700/50 bg-brand-950 text-brand-100 shadow-sm shadow-brand-950/40 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-brand-900 hover:text-white hover:shadow-burgundy",
    gold:
      "border border-gold-300/60 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white font-bold shadow-md shadow-brand-950/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    outline:
      "border border-brand-700/50 bg-transparent text-brand-900 hover:-translate-y-0.5 hover:border-brand-800 hover:bg-brand-50 hover:text-black",
    white:
      "border border-brand-200 bg-white text-brand-950 shadow-sm hover:-translate-y-0.5 hover:bg-brand-50 hover:text-brand-950 hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-700 select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
